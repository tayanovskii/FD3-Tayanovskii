import React from 'react'


let withRainbowFrame = colors => Component => props =>
{
    let code = <Component {...props} ></Component>
    colors.forEach(color => code = <div style={{border:"solid 5px "+ color,margin:"4px"}}>{code}</div>);
    return (
        <div style={{width:'50%', textAlign: 'center'}}>{code}</div>
    )
}

export default withRainbowFrame
