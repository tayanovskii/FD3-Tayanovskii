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
    };

    itemSelected = (EO) => {
        this.props.cbItemSelected(this.props.code)
    };

    itemDelected = (EO) => {
        const confirm = window.confirm("Do you really want to delete item?");
        if (confirm == true)
            this.props.cbItemDeleted(this.props.code)
    };

    render() {
        let currentClassName = '';
        if (this.props.selectedItemCode == this.props.code) currentClassName = 'ItemSelected';
        return <tr className={currentClassName} onClick={this.itemSelected}>
            <td>{this.props.name}</td>
            <td>{this.props.price}</td>
            <td>{this.props.photo_url}</td>
            <td>{this.props.quantity}</td>
            <td>
                <input type='button' value='Delete' onClick={this.itemDelected}></input>
            </td>
        </tr>
    }
};
export default ShopItem;
