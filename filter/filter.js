var FilterBlock = React.createClass({

    displayName: 'FilterBlock',

    propTypes: {
        inputStringArr: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
    },

    getInitialState: function () {
        return {
            stringArr: this.props.inputStringArr,
            isSorted: false,
            filterArgument: "",

        };
    },

    changeIsSorted: function (eo) {
        this.setState({
            isSorted: eo.target.checked
        }, this.processStringArea)
    },

    changeFilterArgument: function (eo) {
        this.setState({
            filterArgument: eo.target.value
        }, this.processStringArea)
    },

    reset: function (eo) {
        this.setState({
            isSorted: false,
            filterArgument: "",
            stringArr: this.props.inputStringArr,
        })
    },

    processStringArea() {
        let resultArr = [...this.props.inputStringArr];
        if (this.state.filterArgument)
            resultArr = resultArr.filter(s => s.indexOf(this.state.filterArgument) != -1);
        if (this.state.isSorted)
            resultArr.sort();

        this.setState({
            stringArr: resultArr
        });
    },

    render: function () {

        return React.DOM.div({
                className: 'FilterBlock'
            },
            React.DOM.div({
                    className: 'InterfaceBlock'
                }, React.DOM.input({
                    type: 'checkbox',
                    name: 'isSorted',
                    checked: this.state.isSorted,
                    onClick: this.changeIsSorted,
                }),
                React.DOM.input({
                    type: 'text',
                    name: 'filterArgument',
                    value: this.state.filterArgument,
                    onChange: this.changeFilterArgument,
                }),

                React.DOM.input({
                    type: 'button',
                    value: 'сброс',
                    onClick: this.reset,
                }), ),

            React.DOM.div({
                className: 'StringsAreaBlock'
            }, React.DOM.textarea({
                id: 'stringArea',
                readOnly:true,
                value: this.state.stringArr.join('\n'),
            })),

        );
    },

});