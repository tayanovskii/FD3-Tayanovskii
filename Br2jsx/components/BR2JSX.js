import React from 'react'
import PropTypes from 'prop-types'

import './BR2JSX.css'

class BR2JSX extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    };
 
    render() {
        var regexp  = /<br ?\/?>/gmi;
        var jsxArray = this.props.text.split(regexp).map((val,ind,arr)=>
        {
            return ind === arr.length -1 ? val : [val, <br key={ind} />]
        })
        console.log(jsxArray);
        return(
            <div className='br2jsx'>{jsxArray}</div>
        )
    }
};

export default BR2JSX;

