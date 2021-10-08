import React from 'react';
import styled from 'styled-components';
export default function Card(props){

    return(
        <CardWrap url={props.url}>
            <p>{props.text}</p>
        </CardWrap>
    );
}

const CardWrap = styled.div`
    display: flex;
    align-items: center;
    justify-contents: center;
    background: url(${(props) => props.url});
    border: 1px solid black;
    user-select: none;
    height: 400px;

    & > p{
        font-size: 2em;
        margin: 0 auto;
    }
`;