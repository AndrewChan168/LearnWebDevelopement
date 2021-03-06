import React from 'react';

const Loader = (props)=>{
    return (
        <div className="ui active inverted dimmer">
<div className="ui text loader">{props.message}</div>
        </div>
    );
}

Loader.defaultProps = {
    message:"loading..."
}

export default Loader;