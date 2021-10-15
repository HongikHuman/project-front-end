import React from 'react';
export default function Univlogo(props){
    const style={
        width: `${props.width}px`,
        height: `${props.height}px`,
        borderRadius: '100%',
        background: `url(${props.url}) 100% 100% / contain no-repeat`,
    };
    
    return(
        <div style={style}>
        </div>
    )
}