var ShopItemsBlock = React.createClass({

    displayName: 'ItemsBlock',

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
        items: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                photo_url: React.PropTypes.string.isRequired,
                quantity: React.PropTypes.number.isRequired,
            })
        ).isRequired
    },

    getInitialState: function () {
        return {
            selectedItemCode: 0,
            currentItems: this.props.items,
        };
    },

    itemSelected: function (code) {
        this.setState({
            selectedItemCode: code
        });
    },

    itemDeleted: function (code) {
        this.setState({
            currentItems: this.state.currentItems.filter(v => v.code != code)
        });

    },

    render: function () {


        var itemsArr = this.state.currentItems.map((v) => {
            return React.createElement(ShopItem, {
                key: v.code,
                code: v.code,
                photo_url: v.photo_url,
                name: v.name,
                price: v.price,
                quantity: v.quantity,
                cbItemSelected: this.itemSelected,
                selectedItemCode: this.state.selectedItemCode,
                cbItemDeleted: this.itemDeleted,
            })
        })

        return React.DOM.div({
                className: 'ItemsBlock'
            },
            React.DOM.h2({}, this.props.shopName),
            React.DOM.table({
                    className: 'ItemsTable'
                }, React.DOM.thead({}, React.DOM.tr({},
                    React.DOM.th({}, 'Name'),
                    React.DOM.th({}, 'Price'),
                    React.DOM.th({}, 'URL'),
                    React.DOM.th({}, 'Quantity'),
                    React.DOM.th({}, 'Control')), ),
                React.DOM.tbody({}, itemsArr))
        )

    },

});