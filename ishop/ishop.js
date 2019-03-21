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

    getDefaultProps: function () {
        return {
            name: "Unknown",
            price: 0,
            photo_url: "No photo",
            quantity: 0,
        };
    },

    render: function () {
        var itemsArr = [];
        this.props.items.forEach(element => {
            itemsArr.push(
                React.DOM.div({
                        key: element.code,
                        className: 'Item'
                    },
                    React.DOM.img({
                        src: element.photo_url,
                        className: 'Item_Photo_Url'
                    }),
                    React.DOM.p({
                        className: 'Item_Name'
                    }, 'Name: ' + element.name),
                    React.DOM.p({
                        className: 'Item_Price'
                    }, 'Price: ' + element.price),
                    React.DOM.p({
                        className: 'Item_Quantity'
                    }, 'Quantity: ' + element.quantity),
                )
            )
        });

        return React.DOM.div({
                className: 'ItemsBlock'
            },
            React.DOM.h2({}, this.props.shopName),
            React.DOM.div({
                className: 'Items'
            }, itemsArr)
        )

    },

});