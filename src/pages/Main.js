import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Carousel from 'react-multi-carousel';

import Header from '../component/Header';
import UnivLogo from '../component/UniversityLogo';

import { Container, Card } from 'react-bootstrap';


export default function Main(){
    let [mainData, setMainData] = useState({}); //get db data
    let [famous, setFamous] = useState([]);
    let [weeklyHotList, setWeeklyHotList] = useState([]);

    useEffect(()=>{ //set data

        //axios
        setMainData();
        window.scrollTo(0, 0);

        console.log(mainData);

    }, []);

    return(
        <Container>
            <Header />
                <FamousWrap>
                    <h1>인기 대학가 TOP 3</h1>
                    <h5>가장 인기있는 대학가 맛집을 알려드립니다!</h5>
                    <div>
                        <UnivLogo name='hanyang'/>
                        <UnivLogo name='hongik' width={150} height={150}/>
                        <UnivLogo name='yonsei'/>
                    </div>
                </FamousWrap>

                <SupportedWrap>
                    <h1>지원 대학 리스트</h1>
                    <h5>자맛추에서 지원하는 학교 리스트입니다</h5>
                    <div>
                        <UnivLogo/>
                    </div>
                </SupportedWrap>


                <WeeklyHotWrap>
                    <h1>이번 주 HOT 게시글</h1>

                    <Carousel 
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                    >
                        {weeklyHotList}
                    </Carousel>

                </WeeklyHotWrap>
        </Container>
    );
}

//carousel responsive
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

//styled components


const FamousWrap = styled.div`
    width: 100%;
    overflow: hidden;

    border: 1px solid black;
    color: black;
    margin: 0 auto;
    margin-top: 1vh;
    text-align: center;

    & > h1{
        margin: 5px;
        
    }
    & > h5{
        margin: 5px;
    }

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 5%;
    }
`;

const SupportedWrap = styled.div`
    width: 100%;
    border: 1px solid black;
    color: black;
    margin: 0 auto;
    margin-top: 1vh;
    text-align: center;
    overflow: hidden;

    & > div{
        margin: 5px;
        font-size: 2em;

        display: flex;
        justify-content: center;
        align-items: center;

        flex-wrap: wrap;
    }
`;

const WeeklyHotWrap = styled.div`
    min-width: 100%;
    border: 1px solid black;
    color: black;
    margin: 0 auto;
    margin-top: 1vh;
    text-align: center;
`;
