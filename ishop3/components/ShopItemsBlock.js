import React from 'react'
import PropTypes from 'prop-types'

import './ShopItemsBlock.css'

import ShopItem from './ShopItem'

class ShopItemsBlock extends React.Component {
    static propTypes = {
        shopName: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                photo_url: PropTypes.string.isRequired,
                quantity: PropTypes.number.isRequired,
            })
        ).isRequired
    };

    state = {
        selectedItemCode: 0,
        currentItems: this.props.items
    };

    itemSelected = (code) => {
        this.setState({
            selectedItemCode: code
        });
    }

    itemDeleted = (code) => {
        this.setState({
            currentItems: this.state.currentItems.filter(v => v.code != code)
        });
    }

    render() {
        var itemsArr = this.state.currentItems.map(v => 
            <ShopItem key={v.code}
                code={v.code}
                photo_url={v.photo_url}
                name={v.name}
                price={v.price}
                quantity={v.quantity}
                cbItemSelected={this.itemSelected}
                selectedItemCode={this.state.selectedItemCode}
                cbItemDeleted={this.itemDeleted}
            />
        )
        return <div className='ItemsBlock'>
            <h2>{this.props.shopName}</h2>
            <table className='ItemsTable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>URL</th>
                        <th>Quantity</th>
                        <th>Control</th>
                    </tr>
                    </thead>
                    <tbody>
                        {itemsArr}
                    </tbody>
            </table>
        </div>

    }
};

export default ShopItemsBlock;

