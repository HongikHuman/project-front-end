import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {Form, Card, Col, Row, Pagination } from 'react-bootstrap';
import { GrFilter } from "react-icons/gr";


import FilterModal from '../component/FilterModal';
//import { Map, MapMarker } from 'react-kakao-maps-sdk';
import KakaoMap from '../component/KakaoMap';


export default function Univside(){
    
    let [pageNum, setPageNum] = useState(1);    //현재 페이지

    let [elements, setElements] = useState([]); //식당 요소 jsx 객체
    let [pagination, setPagination] = useState([]); //페이지네이션 jsx 객체

    let [viewNum, setViewNum] = useState(12);   //한번에 보여줄 요소 개수 기본 12
    let [maxPage, setMaxPage] = useState(Math.floor((restaurants.length-1) / viewNum) + 1); //최대 페이지

    let [isAuth, setIsAuth] = useState(false); //인증 맛집만 보여줄것인지


    const [filteredData, setFilteredData] = useState(restaurants); //db데이터에서 현재 필터값과 일치하는 데이터만 수집 <중요>
    const [modalShow, setModalShow] = useState(false); //모달창 상태



    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        if(isAuth===true)
            setFilteredData(filterAuth(true));
        else
            setFilteredData(restaurants);
        
        setMaxPage(Math.floor((filteredData.length-1) / viewNum) + 1);
        console.log(filteredData);
        console.log(maxPage);

    }, [isAuth]);

    
    useEffect(()=>{
        const begin = Math.floor((pageNum-1) / 5) * 5 + 1;
        renderElements(filteredData);
        renderPagination(begin);
    }, [pageNum]);


    useEffect(()=>{
        renderElements(filteredData);
        renderPagination(1);
    }, [filteredData]);


    //db에서 데이터 추출
    const filterUniv = (value)=> restaurants.filter((elem)=>elem.univ === value);
    const filterAuth = (value)=> restaurants.filter((elem)=>elem.authenticated === value);


    const renderElements = (ARRAY)=>{
        let item = [];

        const BEGIN = (pageNum-1) * viewNum;
        const END = pageNum * viewNum;

        const LEN = ARRAY.length < END ? ARRAY.length : END;

        ARRAY.forEach((elem, idx)=>{
            if(BEGIN <= idx && idx < LEN)
            item.push(
            <Col>
                <Card style={{margin: "0 auto", width: "300px"}}>
                    <Card.Img style={{width: "300px", height:"250px"}} variant="top" src={elem.img} />
                    <Card.Body>
                    <Card.Title>{elem.name}</Card.Title>
                    <Card.Text>
                        {elem.address}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>);
        });
        setElements(item);
    }


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


    return (
        

        <Container className="container">
            <KakaoMap/>

            <FilterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <HeaderWrap>
                <UnivSelectWrap>
                    <Form.Control style={{width: "200px", textAlign: "center"}} as="select" aria-label="Default select example">
                        <option>학교 선택</option>
                        <option value="1">홍익대학교</option>
                        <option value="2">연세대학교</option>
                        <option value="3">서울대학교</option>
                    </Form.Control>

                    <p>주변 맛집입니다</p>
                </UnivSelectWrap>

                <OptionWrap>
                    <Form>
                        <Form.Check 
                            type="switch"
                            id="authenticated-post"
                            label="인증 맛집만 보기"
                            onChange={()=>setIsAuth(!isAuth)}
                        />
                    </Form>

                    <button onClick={() => setModalShow(true)}><GrFilter/></button>
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

const restaurants = [
    {key: 1, univ: "홍익대학교", name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', likes: 1232, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {key: 2, univ: "홍익대학교", name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', likes: 1045, authenticated: true,  img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {key: 3, univ: "서울대학교", name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', likes: 978, authenticated: false, img: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {key: 4, univ: "홍익대학교", name: '치치', address: '서울특별시 마포구 서교동 360-19', likes: 850, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {key: 5, univ: "홍익대학교", name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', likes: 799, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {key: 6, univ: "서울대학교", name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시 KR', likes: 729, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {key: 7, univ: "홍익대학교", name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', likes: 603, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {key: 8, univ: "연세대학교", name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', likes: 505, authenticated: true, img: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {key: 9, univ: "홍익대학교", name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', likes: 477, authenticated: false, img: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {key: 10, univ: "서울대학교", name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', likes: 230, authenticated: false, img: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},    
    
    {key: 11, univ: "서울대학교", name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', likes: 1232, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {key: 12, univ: "홍익대학교", name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', likes: 1045, authenticated: true,  img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {key: 13, univ: "서울대학교", name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', likes: 978, authenticated: false, img: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {key: 14, univ: "홍익대학교", name: '치치', address: '서울특별시 마포구 서교동 360-19', likes: 850, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {key: 15, univ: "연세대학교", name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', likes: 799, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {key: 16, univ: "홍익대학교", name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시 KR', likes: 729, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {key: 17, univ: "홍익대학교", name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', likes: 603, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {key: 18, univ: "서울대학교", name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', likes: 505, authenticated: true, img: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {key: 19, univ: "홍익대학교", name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', likes: 477, authenticated: false, img: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {key: 20, univ: "홍익대학교", name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', likes: 230, authenticated: false, img: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},    

    {key: 21, univ: "서울대학교", name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', likes: 1232, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {key: 22, univ: "홍익대학교", name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', likes: 1045, authenticated: true,  img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {key: 23, univ: "홍익대학교", name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', likes: 978, authenticated: false, img: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {key: 24, univ: "서울대학교", name: '치치', address: '서울특별시 마포구 서교동 360-19', likes: 850, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {key: 25, univ: "홍익대학교", name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', likes: 799, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {key: 26, univ: "연세대학교", name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시 KR', likes: 729, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {key: 27, univ: "서울대학교", name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', likes: 603, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {key: 28, univ: "홍익대학교", name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', likes: 505, authenticated: true, img: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {key: 29, univ: "연세대학교", name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', likes: 477, authenticated: false, img: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {key: 30, univ: "홍익대학교", name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', likes: 230, authenticated: false, img: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},    

];




//styled components

const Container = styled.div`
    margin: 0 auto;
    margin-bottom: 150px;
`;

const HeaderWrap = styled.div`
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
    & > *{
        margin: 0 auto;
    }
`;

const UnivSelectWrap = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;

    & > p{
        margin: 0 auto;
        margin-left: 10px;
    }

`;

const OptionWrap = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    
    & > button{
        background: transparent;
        font-size: 25px;
        margin: 0 20px 0 20px;
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