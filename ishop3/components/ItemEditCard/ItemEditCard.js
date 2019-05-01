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
        currentItem: {...this.props.item},
        errors: {},
        isItemFormValid: true,
        isItemChanged: false
    }

    handleChange = (EO) =>
    {
        let inputValue = EO.target.value;
        let itemField = EO.target.name;
        let changedItem = this.state.currentItem;
        changedItem[itemField] = inputValue
        this.setState(
            {
                currentItem: changedItem,
                 isItemChanged : true
            }
        )

        if(!this.state.isItemChanged)
        this.props.cbItemIsChanged()
        
    }

    handleOnBlur = (EO) =>
    {
        let validateItem = this.state.currentItem;
        let errors = {};
        let formIsValid = true;

        if (typeof validateItem["name"] !== "string") {
            formIsValid = false;
              errors["name"] = "Value must be a string";
          }

        if (!validateItem["name"] || validateItem["name"].length < 1) {
            formIsValid = false;
            errors["name"] = "Please, fill the field. Value must be a string";
          }
    
          if (typeof validateItem["price"] == "number") {
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

     

          this.setState({
            errors: errors,
            isItemFormValid: formIsValid
          });
    }

    saveItem = () =>
    {
        this.props.cbSaveItem(this.state.currentItem)
    }

    cancelEdit = () =>
    {
        this.props.cbCancelEdit()
    }


    render() {
        return (
            <div className="EditCardForm">
                <h3>{this.props.itemMode == 2 ? 'Edit existing product' : 'Add new product'}</h3>  {/* itemMode = 2 - item edit mode, itemMode = 3 - item create mode */}
                <p className="ItemID">ID: {this.props.item.code}</p>
                <div className="form-group">
                    <label htmlFor="ItemName">Name</label>
                    <input type='text' name='name' id='ItemName' value={this.state.currentItem.name || ''} onChange={this.handleChange} onBlur={this.handleOnBlur}></input>
                    <span className="errorMsg">{this.state.errors.name}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="ItemPrice">Price</label>
                    <input type='number' name='price' id='ItemPrice' value={this.state.currentItem.price || ''} onChange={this.handleChange} onBlur={this.handleOnBlur}></input>
                    <span className="errorMsg">{this.state.errors.price}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="ItemURL">URL</label>
                    <input type='text' name='photo_url' id='ItemURL' value={this.state.currentItem.photo_url || ''} onChange={this.handleChange} onBlur={this.handleOnBlur}></input>
                    <span className="errorMsg">{this.state.errors.photo_url}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="ItemQuantity">Quantity</label>
                    <input type='text' name='quantity' id='ItemQuantity' value={this.state.currentItem.quantity || ''} onChange={this.handleChange} onBlur={this.handleOnBlur}></input>
                </div>
                <input type='button' value={this.props.itemMode == 2 ? 'Save' : 'Add'} onClick={this.saveItem} disabled={!this.state.isItemFormValid}></input>
                <input type='button' value='Cancel' onClick={this.cancelEdit}></input>
            </div>
        );
    }
}

export default ItemEditCard;