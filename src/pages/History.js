import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HistoryCards from '../component/HistoryCards';
import UserInfoBox from '../component/UserInfoBox';

export default function History() {

    let [elements, setElements] = useState(restaurants);
    
    const showRestaurants = () => {

        let idx = 0; let cnt = 0;
        let tmp = []; let result = [];
        
        while(idx < 12) {   //더 늘릴 수 있음
             tmp.push(
                 <CardWrap>
                     <HistoryCards element={elements[idx]} />
                     <HistoryCards element={elements[idx+1]} />
                     <HistoryCards element={elements[idx+2]} />
                </CardWrap>
            )
            result.push(tmp[cnt]);
            idx = idx + 3;    
            cnt++;
        }
       
        return result;
    }
    
    return (
        <div>
            <UserInfoBox className="container"/>
            <PageTitle className="container">
                <p>최근 본 음식점</p>
                <p className="resCounts"></p>
            </PageTitle>
            <Container className="container">
                {showRestaurants()}
            </Container>
        </div>
    );
}

const Container = styled.div`
    margin: 0 auto;
    margin-bottom: 150px;
`;

const CardWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 30px 0;
`;

const PageTitle = styled.div`
    margin-bottom: 50px;
    border-bottom: 3px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
        font-size: 25px;
        text-align: left;
    }

    .resCounts {
        font-size: 20px;
    }
`;


const restaurants = [
    {key: 1, name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {key: 2, name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {key: 3, name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', school: "홍익대", img_url: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {key: 4, name: '치치', address: '서울특별시 마포구 서교동 360-19', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {key: 5, name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {key: 6, name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {key: 7, name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {key: 8, name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', school: "홍익대", img_url: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {key: 9, name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', school: "홍익대", img_url: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {key: 10, name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', school: "홍익대", img_url: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},
    {key: 11, name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {key: 12, name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {key: 13, name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', school: "홍익대", img_url: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {key: 14, name: '치치', address: '서울특별시 마포구 서교동 360-19', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {key: 15, name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {key: 16, name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {key: 17, name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {key: 18, name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', school: "홍익대", img_url: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {key: 19, name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', school: "홍익대", img_url: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {key: 20, name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', school: "홍익대", img_url: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},
    {key: 21, name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F'},
    {key: 22, name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg'},
    {key: 23, name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', school: "홍익대", img_url: 'https://img.siksinhot.com/article/1456730835391124.jpg'},
    {key: 24, name: '치치', address: '서울특별시 마포구 서교동 360-19', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg'},
    {key: 25, name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925'},
    {key: 26, name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시', school: "홍익대", img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg'},
    {key: 27, name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', school: "홍익대", img_url: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A'},
    {key: 28, name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', school: "홍익대", img_url: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG'},
    {key: 29, name: '제순식당', address: '서울특별시 마포구 서교동 번지 지층 409-20', school: "홍익대", img_url: 'https://emmaru.com/matzip/include/pics/2020/01/30/m_06872D180137_1.jpg'},
    {key: 30, name: '부라문 야시장', address: '서울특별시 마포구 서교동 어울마당로 35', school: "홍익대", img_url: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/post_card/44681_1548831436_ejIiZaxd.JPG'},
]