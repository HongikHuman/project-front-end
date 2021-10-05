import React from 'react';
export default function Univlogo(probs){
    const style={
        width: `${probs.width}px`,
        height: `${probs.height}px`,
        borderRadius: '100%',
        background: `url(${probs.url}) 100% 100% / contain no-repeat`,
    };
    return(
        <div style={style}>
        </div>
    )
}