import React from 'react'
import PropTypes from 'prop-types'

import './ShopItemsBlock.css'

import ShopItem from '../ShopItem/ShopItem'
import ItemViewCard from '../ItemViewCard/ItemViewCard'
import ItemEditCard from '../ItemEditCard/ItemEditCard'

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
        currentItems: this.props.items,
        itemCardMode: 0,  // 0 - default, 1 - view mode, 2 - edit mode, 3 - create mode
        itemChanged: false
    };

    itemSelected = (code) => {
        this.setState({
            selectedItemCode: code,
            itemCardMode: 1
        });
    };

    enableEditItemMode = (code) => {
        this.setState(
            {
                itemCardMode: 2,
                selectedItemCode: code,

            }
        )
    };
    enableCreateItemMode = () => {
        this.setState(
            {
                itemCardMode: 3,
                itemChanged: true,
                selectedItemCode: 0,
            }
        )
    };

    saveItem = (newItem) => {
        if (this.state.itemCardMode == 2)
            this.setState(
                {
                    currentItems: this.state.currentItems.map(oldItem =>
                        oldItem.code == newItem.code ? newItem : oldItem),
                    itemCardMode: 0,
                    itemChanged: false,
                }
            )

        if (this.state.itemCardMode == 3)
            this.setState(
                {
                    currentItems: [...this.state.currentItems, newItem],
                    itemCardMode: 0,
                    itemChanged: false,
                }
            )
    };

    itemDeleted = (code) => {
        this.setState({
            currentItems: this.state.currentItems.filter(v => v.code != code),
            itemCardMode: 0,

        });
    };

    itemIsChanged = () => {
        this.setState({
            itemChanged: true,
        });
    }

    cancelEdit = () => {
        this.setState({
            itemChanged: false,
            itemCardMode: 0,
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
                cbEnableEditItemMode={this.enableEditItemMode}
                itemIsChanged={this.state.itemChanged}
                itemCardMode={this.state.itemCardMode}
            />
        )

        if (this.state.itemCardMode == 1 || this.state.itemCardMode == 2) // get item to view or edit
            var selectedItem = this.state.currentItems.find(item => item.code == this.state.selectedItemCode);

        if (this.state.itemCardMode == 3) //get code(index) to create new item
        {
            var lastItem = this.state.currentItems[this.state.currentItems.length - 1];
            var newCode = lastItem.code + 1;
            var selectedItem = { code: newCode }
        }

        return (
            <div className='ItemsBlock'>
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
                <input type='button' value='New product' onClick={this.enableCreateItemMode} disabled={this.state.itemCardMode > 1}></input>
                {this.state.itemCardMode == 1 && <ItemViewCard key={selectedItem.code} item={selectedItem} />}
                {this.state.itemCardMode > 1 && <ItemEditCard key={selectedItem.code} item={selectedItem} itemMode={this.state.itemCardMode} cbSaveItem={this.saveItem} cbItemIsChanged={this.itemIsChanged} cbCancelEdit={this.cancelEdit} />}
            </div>

        );
    }
};

export default ShopItemsBlock;

