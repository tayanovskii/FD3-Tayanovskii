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
            }).isRequired
        ).isRequired
    },

    render: function () {

    },

});