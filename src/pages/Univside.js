import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Form, Card, Col, Row, Pagination } from 'react-bootstrap';
import { GrFilter } from "react-icons/gr";
import { useParams, useHistory } from 'react-router-dom';

import FilterModal from '../component/FilterModal';
import KakaoMap from '../component/KakaoMap';

export default function Univside(){

    let [pageNum, setPageNum] = useState(1);    //현재 페이지

    let [elements, setElements] = useState([]); //식당 요소 jsx 객체
    let [pagination, setPagination] = useState([]); //페이지네이션 jsx 객체

    let [viewNum, setViewNum] = useState(12);   //한번에 보여줄 요소 개수 기본 12
    let [maxPage, setMaxPage] = useState(Math.floor((restaurants.length-1) / viewNum) + 1); //최대 페이지

    let [isAuth, setIsAuth] = useState(false); //인증 맛집만 보여줄것인지

    const { universityName } = useParams(); //대학교 이름 params
    let history = useHistory(); //이벤트 처리를 위한 history

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

     /*
    const google = new Scraper({
        puppeteer: {
            headless: false,
        },
    })
    (async () => {
        const results = await google.scrape('banana', 200);
        console.log('results', results);
      })();
    */



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

    const SelectGroup = ()=>{
        let elem = [];
        university.forEach((item)=>{
            elem.push(
                <option onClick={()=>{console.log(3)}} selected={item.title===universityName} value={item.title}>{item.name}</option>
            );
        });
        return elem;
    }

    return (
        <Container className="container">
            <KakaoMap props={university.find((data)=>data.title===universityName) ?? university[0]}/>

            <FilterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <HeaderWrap>
                <UnivSelectWrap>
                    <Form.Control
                        style={{width: "200px", textAlign: "center"}} as="select" aria-label="Default select example"
                        onChange={(e)=>{history.push(e.target.value);}}
                    >
                        <SelectGroup props={university}/>
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