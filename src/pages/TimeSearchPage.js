import React from 'react';
import styled from 'styled-components';
import { Card, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const restaurants = [
    {key: 1, univ: "홍익대학교", name: '히메시야', url: 'https://서울특별시 마포구 상수동 독막로15길 3-18', likes: 1232, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {key: 2, univ: "홍익대학교", name: '소코아', url: 'https://서울특별시 마포구 서교동 와우산로15길 49', likes: 1045, authenticated: true,  img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {key: 3, univ: "서울대학교", name: '카미야', url: 'https://서울특별시 마포구 서교동 와우산로21길 28-6', likes: 978, authenticated: false, img: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {key: 4, univ: "홍익대학교", name: '치치', url: 'https://서울특별시 마포구 서교동 360-19', likes: 850, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {key: 5, univ: "홍익대학교", name: '코다차야', url: 'https://서울특별시 마포구 상수동 와우산로 48', likes: 799, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {key: 6, univ: "서울대학교", name: '광안리', url: 'https://서울특별시 서교동 396-44번지 하동 1층 마포구 KR', likes: 729, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {key: 7, univ: "홍익대학교", name: '노가리 천원', url: 'https://서울특별시 마포구 서교동 어울마당로 149-3', likes: 603, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {key: 8, univ: "연세대학교", name: '동경야시장', url: 'https://서울특별시 마포구 서교동 어울마당로 144', likes: 505, authenticated: true, img: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {key: 9, univ: "홍익대학교", name: '제순식당', url: 'https://서울특별시 마포구 서교동 번지 지층 409-20', likes: 477, authenticated: false, img: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {key: 10, univ: "서울대학교", name: '부라문 야시장', url: 'https://서울특별시 마포구 서교동 어울마당로 35', likes: 230, authenticated: false, img: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},    
    
    {key: 11, univ: "서울대학교", name: '히메시야', url: 'https://서울특별시 마포구 상수동 독막로15길 3-18', likes: 1232, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {key: 12, univ: "홍익대학교", name: '소코아', url: 'https://서울특별시 마포구 서교동 와우산로15길 49', likes: 1045, authenticated: true,  img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {key: 13, univ: "서울대학교", name: '카미야', url: 'https://서울특별시 마포구 서교동 와우산로21길 28-6', likes: 978, authenticated: false, img: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {key: 14, univ: "홍익대학교", name: '치치', url: 'https://서울특별시 마포구 서교동 360-19', likes: 850, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {key: 15, univ: "연세대학교", name: '코다차야', url: 'https://서울특별시 마포구 상수동 와우산로 48', likes: 799, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {key: 16, univ: "홍익대학교", name: '광안리', url: 'https://서울특별시 서교동 396-44번지 하동 1층 마포구 KR', likes: 729, authenticated: true, img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {key: 17, univ: "홍익대학교", name: '노가리 천원', url: 'https://서울특별시 마포구 서교동 어울마당로 149-3', likes: 603, authenticated: false, img: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {key: 18, univ: "서울대학교", name: '동경야시장', url: 'https://서울특별시 마포구 서교동 어울마당로 144', likes: 505, authenticated: true, img: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {key: 19, univ: "홍익대학교", name: '제순식당', url: 'https://서울특별시 마포구 서교동 번지 지층 409-20', likes: 477, authenticated: false, img: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {key: 20, univ: "홍익대학교", name: '부라문 야시장', url: 'https://서울특별시 마포구 서교동 어울마당로 35', likes: 230, authenticated: false, img: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},    
];

export default function TimeSearchPage() {

    const mod = 3 - restaurants.length % 3;

    const callEmptyBox = () => {
        console.log(mod);
        if (mod === 2){
            return (
                <>
                    <CardBoxWrap className="col-md-3" style={{display: 'flex', alignItems: 'center', width: '400px' }} />
                    <CardBoxWrap className="col-md-3" style={{display: 'flex', alignItems: 'center', width: '400px' }} />
                </>
            );
        }
        else if (mod === 1){
            return (
                <>
                    <CardBoxWrap className="col-md-3" style={{display: 'flex', alignItems: 'center', width: '400px' }} />
                </>
            );
        }
    }

    return (
        <div>
            <PageWrap className="container">
                <div className="body-text">
                    <h1 className="title">바쁜 당신을 위한 타임어택 맛집 추천!</h1>
                    <p className="text">내 주위의 가까운 맛집을 즐겨보세요!</p>
                </div>
                <Row xs={1} md={3} className="g-4" style={{display: 'flex'}}>
                    {restaurants.map(restaurant => {
                        return (
                            <CardBoxWrap  key={restaurant.key} className="col-md-3" style={{display: 'flex', alignItems: 'center', width: '400px'}}>
                                <Card style={{ width: '100%', alignItems: 'center', display: 'flex' }}>
                                    <Card.Img variant="top" src={restaurant.img} style={{ width: '100%', height: '300px', objectFit: 'cover'}}/>
                                    <Card.Body>
                                        <Card.Title style={{fontSize: '30px'}}>{restaurant.name}</Card.Title>
                                        <Card.Text>
                                            {`#${restaurant.univ}맛집`}
                                        </Card.Text>
                                        <Link to={restaurant.url}><Button className="btn-wrap" variant="outline-secondary">길찾기</Button></Link>
                                        <Button className="btn-wrap" variant="outline-secondary">상세정보 보기</Button>
                                    </Card.Body>
                                </Card>
                            </CardBoxWrap>
                        );
                    })}
                    {callEmptyBox()}
                </Row>
            </PageWrap>
        </div>
    );
};

const PageWrap = styled.div`
    align-items: center;
    margin-bottom: 150px;

    & .g-4 {
        justify-contents: space-between;
        align-items: center;
    }

    & .body-text {
        border-top: 1px solid #9a9a9a;
        border-bottom: 1px solid #9a9a9a;
        height: 250px;
        margin-bottom: 30px;
    }

    & .body-text .title {
        margin-top: 50px;
        height: 100px;
        font-size: 55px;
    }

    & .body-text .text {
        font-size: 25px;
    }

`;

const CardBoxWrap = styled.div`
    float: none;
    margin: 0 auto;
    padding: 0;
    margin-top: 30px;
    border-radius: 20%;
    background-color: red;

    & .btn-wrap {
        margin: 5px;
    }
`;

const CardWrap = styled.div`

`;

const ImageBoxWrap = styled.div`

`;

const CardNameWrap = styled.div`

`;

const CardUrlWrap = styled.div`

`;

const CardSentenceWrap = styled.div`

`;