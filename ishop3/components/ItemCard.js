import React from 'react';
import PropTypes from 'prop-types';

import './ItemCard.css';

class ItemCard extends React.Component{
    static propTypes = {
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        photo_url: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        isEditMode: PropTypes.bool,
        isReadMode: PropTypes.bool,
        isCreateMode: PropTypes.bool
    };

    state = {
        currentItem: {
            code: this.props.code,
            name: this.props.name,
            price: this.props.price,
            photo_url: this.props.photo_url,
            quantity: this.props.quantity
        }
    }



    render()
    {
        var itemCard;
       return (<div className='ItemCard'>


        </div>);

    }


}