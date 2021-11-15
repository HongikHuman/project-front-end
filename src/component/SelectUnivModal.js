import React, { useState } from 'react';
import styled from 'styled-components';
import {Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SelectUnivModal(props){

    return (
        <>
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{fontFamily: 'Noto Sans CJK KR', fontStyle: 'normal'}}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                학교 선택
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
            
              <UnivList>
                {
                    university.map((elem)=>{
                        return(
                            <Link  onClick={props.onHide} to={`/univ/${elem.title}`}>{elem.name}</Link>
                        )
                    })
                }
              </UnivList>
            </Modal.Body>
          </Modal>
        </>
      );
}

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
const UnivList = styled.div`
    margin: 0 auto;
    padding: 15px;
    width: 95%;
    display: flex;
    flex-wrap: wrap;

    gap: 10px;
    & > a{
        width:calc((100% / 3) - 10px);
        text-align: center;
        height: 40px;
        text-decoration: none;
        color: black;
        line-height: 30px;
        font-size: 0.9rem;
        border: 4px solid orange;
        border-radius: 40px;
        font-weight: bold;

        white-space: nowrap;
        text-overflow: hidden;

        padding: 0 20px 0 20px;
        cursor: pointer;
        opacity: 0.6;
        transition: 0.3s;
    }
    & > a:hover{ opacity: 1.0; }
    & > a:visited{ text-decoration: none; }
    


    & h2{
       margin: 10px 0 30px 0;
       font-size: 2em;
    }
    & h4{
        margin-top: 30px;
        font-size: 1.2em;
        
    }
`;