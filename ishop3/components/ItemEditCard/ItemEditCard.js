import React from 'react';
import PropTypes from 'prop-types';


import './ItemEditCard.css'

class ItemEditCard extends React.Component {
    static propTypes = {
        item: PropTypes.shape({
            code: PropTypes.number.isRequired,
            name: PropTypes.string,
            price: PropTypes.number,
            photo_url: PropTypes.string,
            quantity: PropTypes.number,
        }).isRequired,
        itemMode: PropTypes.number.isRequired,
        cbSaveItem: PropTypes.func.isRequired,
        cbItemIsChanged: PropTypes.func.isRequired,
        cbCancelEdit: PropTypes.func.isRequired

    };

    state = {
        currentItem: { ...this.props.item },
        errors: {},
        isItemFormValid: true,
        isItemChanged: false
    }

    handleChange = (EO) => {
        let inputValue = EO.target.value;
        let itemField = EO.target.name;

        if (EO.target.type === 'number' && inputValue)
            inputValue = +inputValue;  // cast string to number

        console.log(inputValue);

        let changedItem = this.state.currentItem;
        changedItem[itemField] = inputValue
        this.setState(
            {
                currentItem: changedItem,
                isItemChanged: true
            }
        )

        if (!this.state.isItemChanged)
            this.props.cbItemIsChanged()

    }

    handleOnBlur = (EO) => {
        let validateItem = this.state.currentItem;
        let errors = {};
        let formIsValid = true;

        if (typeof validateItem["name"] !== "string") {
            formIsValid = false;
            errors["name"] = "Value must be a string";
        }

        if (!validateItem["name"] || validateItem["name"].length < 1) {
            formIsValid = false;
            errors["name"] = "Please, fill the field";
        }

        if (typeof validateItem["price"] !== "number") {
            formIsValid = false;
            errors["price"] = "Value must be a number";
        }

        if (!validateItem["price"] || validateItem["price"] < 0) {
            formIsValid = false;
            errors["price"] = "Value must be a rational number greater than 0";
        }


        if (!validateItem["photo_url"]) {
            formIsValid = false;
            errors["photo_url"] = "Please, fill the field.";
        }

        if (typeof validateItem["photo_url"] !== "undefined") {
            if (!validateItem["photo_url"].match(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/)) {
                formIsValid = false;
                errors["photo_url"] = "Value must be valid URL";
            }
        }

        if (typeof validateItem["quantity"] !== "number") {
            formIsValid = false;
            errors["quantity"] = "Value must be a number.";
        }

        if (!validateItem["quantity"] || validateItem["quantity"] < 0 || !Number.isInteger(validateItem["quantity"])) {
            formIsValid = false;
            errors["quantity"] = "Please, fill the field. Value must be a positive integer";
        }

        this.setState({
            errors: errors,
            isItemFormValid: formIsValid
        });
    }

    saveItem = () => {
        this.props.cbSaveItem(this.state.currentItem)
    }

    cancelEdit = () => {
        this.props.cbCancelEdit()
    }


    render() {
        return (
            <div className="EditCardForm">
                <h3>{this.props.itemMode == 2 ? 'Edit existing product' : 'Add new product'}</h3>  {/* itemMode = 2 - item edit mode, itemMode = 3 - item create mode */}
                <p className="ItemID">ID: {this.props.item.code}</p>

                <label htmlFor="ItemName"><span>Name</span>
                    <input type='text' name='name' value={this.state.currentItem.name || ''} onChange={this.handleChange} onBlur={this.handleOnBlur}></input>
                    <span className="errorMsg">{this.state.errors.name}</span>
                </label>

                <label htmlFor="ItemPrice"><span>Price</span>
                    <input type='number' name='price' value={typeof (this.state.currentItem.price) === 'undefined' ? '0' : this.state.currentItem.price} onChange={this.handleChange} onBlur={this.handleOnBlur}></input>
                    <span className="errorMsg">{this.state.errors.price}</span>
                </label>

                <label htmlFor="ItemURL"><span>URL</span>
                    <input type='text' name='photo_url' value={this.state.currentItem.photo_url || ''} onChange={this.handleChange} onBlur={this.handleOnBlur}></input>
                    <span className="errorMsg">{this.state.errors.photo_url}</span>
                </label>

                <label htmlFor="ItemQuantity"><span>Quantity</span>
                    <input type='number' name='quantity' value={typeof (this.state.currentItem.quantity) === 'undefined' ? '0' : this.state.currentItem.quantity} onChange={this.handleChange} onBlur={this.handleOnBlur}></input>
                    <span className="errorMsg">{this.state.errors.quantity}</span>
                </label>

                <div className="button-group"></div>
                <input type='button' value={this.props.itemMode == 2 ? 'Save' : 'Add'} onClick={this.saveItem} disabled={!this.state.isItemFormValid || !this.state.isItemChanged}></input>
                <input type='button' value='Cancel' onClick={this.cancelEdit}></input>
            </div>
        );
    }
}

export default ItemEditCard;