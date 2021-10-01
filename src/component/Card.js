import React from 'react';
export default function Card(probs){
    const style={
        display: 'flex',
        alignItems: 'center',
        justifyContents: 'center',
        background: `url(${probs.url})`,
        border: '1px solid black',
        height: '400px'
    };
    return(
        <div style={style}>
            <span stlye={{textAlign: 'center'}}>{probs.text}</span>
        </div>
    );
}