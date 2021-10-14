import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Carousel from 'react-multi-carousel';

import Header from './Header';
import Univlogo from './Univlogo';
import Card from 'react-bootstrap/Card';

//db example
const dummyDb = {
    famous:[
        { width:150, height: 150, url: "http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"},
        { width:200, height: 200, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Hongik_University.svg/220px-Hongik_University.svg.png"},
        { width:150, height: 150, url: "https://yt3.ggpht.com/ytc/AKedOLRFcmdD21kZiNp9WwKMlYxxP5t5mH8X1byYBvYMxw=s900-c-k-c0x00ffffff-no-rj"}
    ],
    supported:[
        { width:150, height:150, url:"http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"},
        { width:150, height:150, url:"http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"},
        { width:150, height:150, url:"http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"},
        { width:150, height:150, url:"http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"},
        { width:150, height:150, url:"http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"},
        { width:150, height:150, url:"http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"},
        { width:150, height:150, url:"http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"},
        { width:150, height:150, url:"http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"},
        { width:150, height:150, url:"http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"},
        { width:150, height:150, url:"http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"}
    ],
    weeklyHot:[
        { text: "우리집맛집" },
        { text: "신촌맛집" },
        { text: "이태원맛집" },
        { text: "성신여대맛집" },
        { text: "이대맛집" },
        { text: "강서맛집" } ,
        { text: "홍대맛집" },
        { text: "성수맛집" },
        { text: "건대맛집" }
    ]
}

export default function Main(){
    let [mainData, setMainData] = useState({}); //get db data
    let [famousList, setFamousList] = useState([]);
    let [supportedList, setSupportedList] = useState([]);
    let [weeklyHotList, setWeeklyHotList] = useState([]);

    useEffect(()=>{ //set data

        //axios
        setMainData();

        console.log(mainData);

        dummyDb.famous.forEach((a)=>{famousList.push(<Univlogo key={a.url} width={a.width} height={a.height} url={a.url}></Univlogo>)})
        dummyDb.supported.forEach((a)=>{supportedList.push(<Univlogo key={a.url} width={a.width} height={a.height} url={a.url}></Univlogo>)})
        dummyDb.weeklyHot.forEach((a)=>{weeklyHotList.push(
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>)
        })
    }, []);



    return(
        <Container>
            <Header />
            <div className="container">
                <FamousWrap>
                    <h1>인기 대학가 TOP 3</h1>
                    <div>
                        {famousList}
                    </div>
                </FamousWrap>

                <SupportedWrap>
                    <h1>지원 대학 리스트</h1>
                    <div>
                        {supportedList}
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
            </div>
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
const Container = styled.div`
    min-width: 80vw;
    margin: 0 50px 100px 50px;
`;

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
        font-size: 2em;
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
