import React from 'react';
import PropTypes from 'prop-types';


import './ItemEditCard.css'

class ItemEditCard extends React.Component{
    static propTypes = {
        item: PropTypes.shape({
                code: PropTypes.number.isRequired,
                name: PropTypes.string,
                price: PropTypes.number,
                photo_url: PropTypes.string,
                quantity: PropTypes.number,
            }).isRequired,
        cbSaveItem: PropTypes.func.isRequired

    };


    render()
    {
        return(
        <div className="EditCardForm">
        <h3>Edit existing Product</h3>
        <p className="ItemID">ID: {this.props.item.code}</p>
        <label for="male">Male</label>
       </div>
        );
    }
}

export default ItemEditCard;