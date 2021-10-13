import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {Form, Card, Col, Row, Pagination} from 'react-bootstrap';
import { GrFilter } from "react-icons/gr";


export default function Univside(){
    
    useEffect(() => {
        // console.log(restaurants);
    }, []);

    return (
        <>
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
                        />
                    </Form>

                    <button><GrFilter/></button>
                    
                </OptionWrap>


            
            </HeaderWrap>

            <ArticleWrap>
                <Row xs={2} md={3} className="g-4">
                    {restaurants.map((elem) => (
                        <Col>
                            <Card style={{width: "300px"}}>
                                <Card.Img style={{width: "300px", height:"250px"}}variant="top" src={elem.img} />
                                <Card.Body>
                                <Card.Title>{elem.name}</Card.Title>
                                <Card.Text>
                                    {elem.address}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>


            </ArticleWrap>

            <PaginationWrap>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </PaginationWrap>
        </>
    );
};


const restaurants = [
    {name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', likes: 1232, img: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', likes: 1045, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', likes: 978, img: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {name: '치치', address: '서울특별시 마포구 서교동 360-19', likes: 850, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', likes: 799, img: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시 KR', likes: 729, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', likes: 603, img: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', likes: 505, img: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', likes: 477, img: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', likes: 230, img: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},    

];

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
    display: flex;
    align-items: center;

    & > p{
        margin: 0 auto;
        margin-left: 10px;
    }

`;

const OptionWrap = styled.div`
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
   
`;

const PaginationWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;