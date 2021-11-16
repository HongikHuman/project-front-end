import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Spinner, Button, Card, Col, Row, Pagination } from 'react-bootstrap';
import { GrFilter } from "react-icons/gr";
import { useParams, useHistory, Link } from 'react-router-dom';

import FilterModal from '../component/FilterModal';
import SelectUnivModal from '../component/SelectUnivModal';
import KakaoMap from '../component/KakaoMap';
import axios from 'axios';

//npx json-server ./src/json/restaurantWgs84.json --watch --port 8888
export default function Univ(){

    const [elements, setElements] = useState([]); //식당 요소 jsx 객체

    const { universityName } = useParams(); //대학교 이름 params
    const [targetPlace, setTargetPlace] = useState(
        university.find((data)=>data.title===universityName) ?? university[0]
    );

    const [filterModalShow, setFilterModalShow] = useState(false); //모달창 상태
    const [selectUnivModalShow, setSelectUnivModalShow] = useState(false); //모달창 상태

    const [db, setDb] = useState([]);
    const [currentData, setCurrentData] = useState([]);

    const [filter, setFilter] = useState({
        /*
            sorting - 1:최신순, 2:가까운순, 3:좋아요순
            category - []: 전체, [1, 2, 3, ...]: 해당 음식 종류만
        */
        sorting: 1,
        category: [],
    });
    //필터링 요소

    const fetchData = async ()=>{
        await axios.get('http://localhost:8888/restaurants')
        .then((res)=>{
            setMaxPage((res.data.length-1) / viewNum + 1);
            setDb(res.data);
        })
        .catch((err)=>console.log(err));
    }

    useEffect(()=>{ fetchData(); }, []);

    useEffect(()=>{
        setTargetPlace(university.find((data)=>data.title===universityName)??university[0]);
    }, [universityName]);

    useEffect(()=>{
        renderElements(db);
        renderPagination(1);
    }, [db]);



    //Pagination
    const [pageNum, setPageNum] = useState(1);    //현재 페이지
    const [viewNum, setViewNum] = useState(12);   //한번에 보여줄 요소 개수 기본 12
    const [maxPage, setMaxPage] = useState(1); //최대 페이지
    const [pagination, setPagination] = useState([]); //페이지네이션 jsx 객체

    useEffect(()=>{
        const begin = Math.floor((pageNum-1) / 5) * 5 + 1;
        renderElements(db);
        renderPagination(begin);
    }, [pageNum]);

    const renderPagination = (begin)=>{
        if(begin < 1) begin = 1;
        
        let item = [];
        for(let i=begin; i<begin+5; ++i){
            if(i > maxPage) break;

            item.push(
                <Pagination.Item
                    key={i}
                    active={i === pageNum}
                    onClick={()=>{setPageNum(i);}}
                >
                    {i}
                </Pagination.Item>
            )
        }
        setPagination(item);
        window.scrollTo(0, 0);
    }
    
    const setNextPagination = ()=>{
        const begin = Math.floor((pageNum-1) / 5) * 5 + 1;
        if(begin + 5 >= maxPage) setPageNum(maxPage);
        else setPageNum(begin+5);
    }

    const setPrevPagination = ()=>{
        const begin = Math.floor((pageNum-1) / 5) * 5 + 1;
        if(begin - 5 < 1) setPageNum(1);
        else setPageNum(begin-5);
    }
    //Pagination


    const renderElements = (ARRAY)=>{
        let item = [];
        let data = [];

        if(ARRAY.length < 1){
            item.push(
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            );
            setElements(item);
          return;
        } //loading spinner

        const BEGIN = (pageNum-1) * viewNum;
        const END = pageNum * viewNum;

        const LEN = ARRAY.length < END ? ARRAY.length : END;

        ARRAY.forEach((elem, idx)=>{
            if(BEGIN <= idx && idx < LEN){
                data.push({index: elem.index, title: elem.title, x: elem.xcoord, y: elem.ycoord});
                item.push(
                <Col>
                    <Card style={{margin: "0 auto", width: "300px", userSelect:'none'}}>
                        <Link to={`/restaurant/${elem.index}`} style={{width: '300px', height:'300px', position: 'absolute', zIndex: '3'}}/>
                        <Card.Img style={{width: "300px", height:"250px"}} variant="top" src={null}/>
                        <Card.Body>

                        <Card.Title>{elem.title}</Card.Title>
                        <Card.Text>
                            {elem.road_address}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>);
            }
        });
        setCurrentData(data);
        setElements(item);
    }


    return (
        <Container className="container">
            <KakaoMap
                univ={targetPlace}
                restaurants={currentData}
            />

            <FilterModal
                show={filterModalShow}
                onHide={() => setFilterModalShow(false)}
            />
            <SelectUnivModal
                show={selectUnivModalShow}
                onHide={() => setSelectUnivModalShow(false)}
            />  

            <HeaderWrap>
                <UnivSelectWrap>
                    <Button variant="light" onClick={()=>setSelectUnivModalShow(true)}>
                        {targetPlace.name ? targetPlace.name : 'null'}
                    </Button>
                    <p>주변 맛집입니다</p>
                </UnivSelectWrap>

                <OptionWrap>
                    <button onClick={() => setFilterModalShow(true)}><GrFilter/></button>
                </OptionWrap>
            </HeaderWrap>


            <ArticleWrap>
                <Row xs={2} md={3} className="g-4">
                    {elements}
                </Row>
            </ArticleWrap>


            <PaginationWrap>
                <Pagination>
                    <Pagination.First onClick={()=>setPageNum(1)}/>
                    <Pagination.Prev onClick={()=>setPrevPagination()}/>
                    {pagination}
                    <Pagination.Next onClick={()=>setNextPagination()}/>
                    <Pagination.Last onClick={()=>setPageNum(maxPage)}/>
                </Pagination>
            </PaginationWrap>
        </Container>
    );


};



//db


const university = [
    {name: '가톨릭대학교 성의교정', title: 'catholic', address: '서울 서초구 반포대로 222', lng: '127.005860604348', lat: '37.5023936158073'},
    {name: '광운대학교', title: 'gwangwoon', address: '서울 노원구 광운로 20', lng: '127.058338066917', lat: '37.6193203481648'},
    {name: '명지대학교 서울캠퍼스', title: 'myongji', address: '서울 서대문구 거북골로 34', lng: '126.921348530876', lat: '37.5803770223812'},
    {name: '한성대학교', title: 'hansung', address: '서울 성북구 삼선교로16길 116', lng: '127.010390004805', lat: '37.5832358514072'},
    {name: '이화여자대학교', title: 'ehwa', address: '서울 서대문구 이화여대길 52', lng: '126.950288837762', lat: '37.5644645178259'},
    {name: '한국외국어대학교', title: 'hankukforeign', address: '서울 동대문구 이문로 10', lng: '127.054575167653', lat: '37.5886909174089'},
    {name: '상명대학교', title: 'sangmyung', address: '서울 종로구 홍지문2길 20', lng: '126.955159496571', lat: '37.604108905882'},
    {name: '중앙대학교', title: 'chungang', address: '서울 동작구 흑석로 84', lng: '126.953833907628', lat: '37.5047267237807'},
    {name: '동국대학교 서울캠퍼스', title: 'dongguk', address: '서울 중구 필동로1길 30', lng: '126.998737605491', lat: '37.5589366401553'},
    {name: '덕성여자대학교', title: 'ducksung', address: '서울 도봉구 삼양로144길 33', lng: '127.016395230087', lat: '37.6495090772702'},
    {name: '홍익대학교 서울캠퍼스', title: 'hongik', address: '서울 마포구 와우산로 94', lng: '126.924990619497', lat: '37.5525192523979'},
    {name: '경희대학교 서울캠퍼스', title: 'kyunghee', address: '서울 동대문구 경희대로 26', lng: '127.054890960564', lat: '37.5939491407769'},
    {name: '세종대학교', title: 'sejong', address: '서울 광진구 능동로 209', lng: '127.073183188315', lat: '37.5516081379459'},
    {name: '서울과학기술대학교', title: 'seoultech', address: '서울 노원구 공릉로 232', lng: '127.076794742851', lat: '37.6330789279387'},
    {name: '서울대학교', title: 'seoul', address: '서울 관악구 관악로 1', lng: '126.959294337648', lat: '37.468038057989'},
    {name: '건국대학교', title: 'konkuk', address: '서울 광진구 능동로 120', lng: '127.074711902268', lat: '37.539182674872'},
    {name: '고려대학교', title: 'korea', address: '서울 성북구 안암로 145', lng: '127.031698331241', lat: '37.5887034223667'},
    {name: '성균관대학교', title: 'sungkyunkwan', address: '서울 종로구 성균관로 25-2', lng: '126.993115116294', lat: '37.5872284082508'},
    {name: '한양대학교 서울캠퍼스', title: 'hanyang', address: '서울 성동구 왕십리로 222', lng: '127.046611216789', lat: '37.5545035492027'},
    {name: '서강대학교', title: 'sogang', address: '서울 마포구 백범로 35', lng: '126.943024997981', lat: '37.5514693075541'},
    {name: '서울여자대학교', title: 'seoulwoman', address: '서울 노원구 화랑로 621', lng: '127.088991508939', lat: '37.6287826577056'},
    {name: '서경대학교', title: 'seokyeong', address: '서울 성북구 서경로 124', lng: '127.013565764354', lat: '37.6154147804327'},
    {name: '국민대학교', title: 'kookmin', address: '서울 성북구 정릉로 77', lng: '126.998520644814', lat: '37.6102878430906'},
    {name: '성신여자대학교', title: 'sungshin', address: '서울 성북구 보문로34다길 2', lng: '127.02214561649', lat: '37.5916524767249'},
    {name: '숭실대학교', title: 'soongsil', address: '서울 동작구 상도로 369', lng: '126.955157917408', lat: '37.4964289688636'},
    {name: '서울시립대학교', title: 'univofseoul', address: '서울 동대문구 서울시립대로 163', lng: '127.059988126984', lat: '37.5825775765293'},
    {name: '숙명여자대학교', title: 'sukmyong', address: '서울 용산구 청파로47길 100', lng: '126.965074376341', lat: '37.5454740835781'},
    {name: '삼육대학교', title: 'sahmyook', address: '서울 노원구 화랑로 815', lng: '127.108850343184', lat: '37.643357369067'},
    {name: '연세대학교 신촌캠퍼스', title: 'yonsei', address: '서울 서대문구 연세로 50', lng: '126.942930940634', lat: '37.5638064365127'},
];


//styled components

const Container = styled.div`
    margin: 0 auto;
    margin-bottom: 150px;
`;

const HeaderWrap = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > *{
        margin: 0 auto;
    }
`;

const UnivSelectWrap = styled.div`
    margin: 0;
    display: flex;
    align-items: center;

    & > button{
        width: 15em;
        opacity: 0.7;
        font-size: 1em;
        outline: 1px solid gray;
        font-weight: bold;
        transition: 0.3s;
    }
    & > button:hover{
        opacity: 1;
    }

    & > p{
        margin: 5px;
    }

`;

const OptionWrap = styled.div`
    width: 50px;
    height: 50px;
    margin-right: 5px;

    & > button{
        background: transparent;
        font-size: 25px;
        opacity: 0.4;
        border-radius: 5px;

        &:hover{
            opacity: 1.0;
        }
    }
`;

const ArticleWrap = styled.div`
    font-size: 10px;
    margin: 0 auto;
`;

const PaginationWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;