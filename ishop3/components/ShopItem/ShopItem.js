import React from 'react';
import PropTypes from 'prop-types';

import './ShopItem.css';


class ShopItem extends React.Component {

    static propTypes = {
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        photo_url: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        cbItemSelected: PropTypes.func.isRequired,
        selectedItemCode: PropTypes.number.isRequired,
        cbItemDeleted: PropTypes.func.isRequired,
        cbEnableEditItemMode: PropTypes.func.isRequired,
        itemIsChanged: PropTypes.bool.isRequired,
        itemCardMode: PropTypes.number.isRequired,

    };

    itemSelected = (EO) => {
        if (!this.props.itemIsChanged)
            this.props.cbItemSelected(this.props.code)
    };

    itemDelected = (EO) => {
        const confirm = window.confirm("Do you really want to delete item?");
        if (confirm == true) {
            this.props.cbItemDeleted(this.props.code)
            EO.stopPropagation();
        }
    };

    enableEditMode = (EO) => {
        this.props.cbEnableEditItemMode(this.props.code);
        EO.stopPropagation();
    }

    render() {
        let currentClassName = '';
        if (this.props.selectedItemCode === this.props.code) currentClassName = 'ItemSelected';
        return <tr className={currentClassName} onClick={this.itemSelected}>
            <td>{this.props.name}</td>
            <td>{this.props.price}</td>
            <td>{this.props.photo_url}</td>
            <td>{this.props.quantity}</td>
            <td>
                <input type='button' value='Edit' onClick={this.enableEditMode} disabled={this.props.itemCardMode === 3 || this.props.itemIsChanged} ></input> {/*disabled in create mode and when item was changed*/}
                <input type='button' value='Delete' onClick={this.itemDelected} disabled={this.props.itemCardMode > 1} ></input>  {/*disabled in edit and create mode*/}
            </td>
        </tr>
    }
};
export default ShopItem;
