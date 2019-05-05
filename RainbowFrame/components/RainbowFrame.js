import React from 'react'
import PropTypes from 'prop-types'

//import './RainbowFrame.css'

class RainbowFrame extends React.Component {
    static propTypes = {
        colors: PropTypes.arrayOf(PropTypes.string).isRequired
    };

    render() {
     
        let arrayFrames = this.props.colors.reduce((previous, current, ind) =>
        {
            return previous = <div style={{border:"solid 5px "+ current,margin:"4px"}}>{previous}</div>
            
        }, <div style={{textAlign: 'center'}}>{this.props.children}</div>
        )
        
        return (
            <div style={{width:'50%'}}>{arrayFrames}</div>
        )
    }
};

export default RainbowFrame;

