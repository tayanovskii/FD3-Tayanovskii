var ShopItem = React.createClass({

    displayName: 'ShopItem',

    propTypes: {
        code: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        photo_url: React.PropTypes.string.isRequired,
        quantity: React.PropTypes.number.isRequired,
        cbItemSelected: React.PropTypes.func.isRequired,
        selectedItemCode: React.PropTypes.number.isRequired,
        cbItemDeleted: React.PropTypes.func.isRequired,
    },



    itemSelected: function (eo) {
        this.props.cbItemSelected(this.props.code)
    },
    itemDelected: function (eo) {
        const confirm = window.confirm("Do you really want to delete item?"); 
        if(confirm == true)
        this.props.cbItemDeleted(this.props.code)
    },

    render: function () {
        let currentClassName = '';
        if (this.props.selectedItemCode == this.props.code) currentClassName = 'ItemSelected'
        return React.DOM.tr({
                className: currentClassName,
                onClick: this.itemSelected
            },
            React.DOM.td({}, this.props.name),
            React.DOM.td({}, this.props.price),
            React.DOM.td({}, this.props.photo_url),
            React.DOM.td({}, this.props.quantity),
            React.DOM.input({
                type: 'button',
                value: 'Delete',
                onClick: this.itemDelected
            }),
        )
    }


});