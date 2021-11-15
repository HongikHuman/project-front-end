import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import UnivLogo from '../component/UniversityLogo';

import { Container } from 'react-bootstrap';


export default function SelectUniv(){
    let [mainData, setMainData] = useState({}); //get db data

    useEffect(()=>{ //set data

        //axios
        setMainData();
        window.scrollTo(0, 0);

        console.log(mainData);

    }, []);

    return(
        <Container>
            <UniversityList>
                <h1>관심있는 대학가의 맛집을 알려드립니다!</h1>
                <UnivLogo/>
            </UniversityList>
        </Container>
    );
}

//styled components

const UniversityList = styled.div`
    width: 100%;
    border-top: 1px solid gray;
    color: black;
    margin: 0 auto;
    margin: 2vh 0 5vh 0;
    text-align: center;
    overflow: hidden;

    & img{
        margin: 20px;
    }
    & > h1{
        margin: 20px 0 20px 0;
    }
    & > div{
        margin: 20px;
        font-size: 2em;

        display: flex;
        justify-content: center;
        align-items: center;

        flex-wrap: wrap;
    }
`;