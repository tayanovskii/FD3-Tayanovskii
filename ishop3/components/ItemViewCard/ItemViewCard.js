import React from 'react';
import PropTypes from 'prop-types';


import './ItemViewCard.css'

class ItemViewCard extends React.Component{
    static propTypes = {
        item: PropTypes.shape({
                code: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                photo_url: PropTypes.string.isRequired,
                quantity: PropTypes.number.isRequired,
            }).isRequired
    };

    render()
    {
       return (<div className='ItemViewCard'>
       <p className="ItemName">{this.props.item.name}</p>
       <img src={this.props.item.photo_url}/>
       <p className="ItemPrice">Price: {this.props.item.price}</p>
       <p className="ItemQuantity">Quantity: {this.props.item.quantity}</p>
        </div>);

    }
}

export default ItemViewCard;