import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Info from './RestaurantInfos';
import Review from './RestaurantReviews';
import _ from 'lodash';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { Form } from 'react-bootstrap';
import { FaSmileBeam, FaRegSmileBeam } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function RestaurantPost ({ Information }) {
    const [infos, setInfo] = useState(Information);
    const [thumbClick, setThumbClick] = useState(false);
    const [heartClick, setHeartClick] = useState(false);

    let [isAuth, setIsAuth] = useState(false); //인증 리뷰만 보여줄것인지
    useEffect(() => {
        if(isAuth===true) ;
    }, [isAuth]);

    const category = ['주소', '전화번호', '음식 종류', '주차가능여부', '예약가능여부', '영업시간', '식당 사이트', '대표메뉴', '휴무일'];
    const hot_reviews = [
        {key: "1", date: '2021-10-15', Auth: "true", views: '109', user_name: '노경민', user_id: "noh", title: '노경민의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "한강 눈에 비친 서울은 리빌딩 올림픽 대로는 터질 듯이 막혀 siri Play me something chill It's 6pm 노을 빛은 핑크색 도로 위에 줄 지은 빨간색 실 I'm stressing out I was stressing out 못 가 제시간에 하지만 괜찮아 남보다 느린 대신에 사고만 안 나면 됐잖아 Back when I was in 철원 그 느린 시간도 때웠잖아 Man fuck time 나는 벽 타듯이 시간을 넘어왔다 이걸 너가 모른다면 난 너랑 할 말 없다 드디어 봄날 옴 고마워 기다려줘서 날 Still having good time"},
        {key: "2", date: '2021-10-16', Auth: "false", views: '205', user_name: '박준서', user_id: "bak", title: '박준서의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "Hey let's go to the 한강 Have a good time, have a good time Look at all this people Stand in line in line, but I gotta get mine 한강 Gang, gotta get mine, 한강 gang Skippin these lines, 한강 gang Have a good time, have a good time 미세먼지 없는 날은 아까워 왠지 Chillin' with my homie 병언, 한강 gang shit Wing doors go up at the riverside 사람들이 핸드폰을 들고 찍어 날 Ay, 광명에서 온 여의도민 Rock star Ay, 연예인이라기보다도 악사 Ay, 간장게장 Is better than lobsters 난 이 세상에 나의 노래들로 낙서해 Basquiat marriott, 내 걱정 마, 이건 내 인생이야, yeah Look at my watch yeah, look at my Rollie, yeah 성공했다면 네게 다가오는 놈을 멀리해 If and Co ice rings, yeah, 편의점 Ice creams, yeah 섞어 입어 Adidas, Nike 아님 Bape and Supreme, yeah 한강 Gangs, don't care about those thangs We just out here puttin' in that work"},
        {key: "3", date: '2021-10-17', Auth: "true", views: '143', user_name: '봉세환', user_id: "bong", title: '봉세환의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "한강 눈에 비친 서울은 리빌딩 올림픽 대로는 터질 듯이 막혀 siri Play me something chill It's 6pm 노을 빛은 핑크색 도로 위에 줄 지은 빨간색 실 I'm stressing out I was stressing out 못 가 제시간에 하지만 괜찮아 남보다 느린 대신에 사고만 안 나면 됐잖아 Back when I was in 철원 그 느린 시간도 때웠잖아 Man fuck time 나는 벽 타듯이 시간을 넘어왔다 이걸 너가 모른다면 난 너랑 할 말 없다 드디어 봄날 옴 고마워 기다려줘서 날 Still having good time"},
        {key: "4", date: '2021-10-18', Auth: "false", views: '421', user_name: '이수진', user_id: "lee", title: '이수진의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "Hey let's go to the 한강 Have a good time, have a good time Look at all this people Stand in line in line, but I gotta get mine 한강 Gang, gotta get mine, 한강 gang Skippin these lines, 한강 gang Have a good time, have a good time 미세먼지 없는 날은 아까워 왠지 Chillin' with my homie 병언, 한강 gang shit Wing doors go up at the riverside 사람들이 핸드폰을 들고 찍어 날 Ay, 광명에서 온 여의도민 Rock star Ay, 연예인이라기보다도 악사 Ay, 간장게장 Is better than lobsters 난 이 세상에 나의 노래들로 낙서해 Basquiat marriott, 내 걱정 마, 이건 내 인생이야, yeah Look at my watch yeah, look at my Rollie, yeah 성공했다면 네게 다가오는 놈을 멀리해 If and Co ice rings, yeah, 편의점 Ice creams, yeah 섞어 입어 Adidas, Nike 아님 Bape and Supreme, yeah 한강 Gangs, don't care about those thangs We just out here puttin' in that work"},
        {key: "5", date: '2021-10-19', Auth: "true", views: '97', user_name: '채승희', user_id: "chae", title: '채승희의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "한강 눈에 비친 서울은 리빌딩 올림픽 대로는 터질 듯이 막혀 siri Play me something chill It's 6pm 노을 빛은 핑크색 도로 위에 줄 지은 빨간색 실 I'm stressing out I was stressing out 못 가 제시간에 하지만 괜찮아 남보다 느린 대신에 사고만 안 나면 됐잖아 Back when I was in 철원 그 느린 시간도 때웠잖아 Man fuck time 나는 벽 타듯이 시간을 넘어왔다 이걸 너가 모른다면 난 너랑 할 말 없다 드디어 봄날 옴 고마워 기다려줘서 날 Still having good time"},
        {key: "6", date: '2021-10-20', Auth: "false", views: '145', user_name: '안경민', user_id: "ahn", title: '안경민의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "Hey let's go to the 한강 Have a good time, have a good time Look at all this people Stand in line in line, but I gotta get mine 한강 Gang, gotta get mine, 한강 gang Skippin these lines, 한강 gang Have a good time, have a good time 미세먼지 없는 날은 아까워 왠지 Chillin' with my homie 병언, 한강 gang shit Wing doors go up at the riverside 사람들이 핸드폰을 들고 찍어 날 Ay, 광명에서 온 여의도민 Rock star Ay, 연예인이라기보다도 악사 Ay, 간장게장 Is better than lobsters 난 이 세상에 나의 노래들로 낙서해 Basquiat marriott, 내 걱정 마, 이건 내 인생이야, yeah Look at my watch yeah, look at my Rollie, yeah 성공했다면 네게 다가오는 놈을 멀리해 If and Co ice rings, yeah, 편의점 Ice creams, yeah 섞어 입어 Adidas, Nike 아님 Bape and Supreme, yeah 한강 Gangs, don't care about those thangs We just out here puttin' in that work"},
        {key: "7", date: '2021-10-21', Auth: "true", views: '652', user_name: '팍준서', user_id: "pak", title: '팍준서의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "한강 눈에 비친 서울은 리빌딩 올림픽 대로는 터질 듯이 막혀 siri Play me something chill It's 6pm 노을 빛은 핑크색 도로 위에 줄 지은 빨간색 실 I'm stressing out I was stressing out 못 가 제시간에 하지만 괜찮아 남보다 느린 대신에 사고만 안 나면 됐잖아 Back when I was in 철원 그 느린 시간도 때웠잖아 Man fuck time 나는 벽 타듯이 시간을 넘어왔다 이걸 너가 모른다면 난 너랑 할 말 없다 드디어 봄날 옴 고마워 기다려줘서 날 Still having good time"},
        {key: "8", date: '2021-10-22', Auth: "false", views: '345', user_name: '봉사환', user_id: "hwan", title: '봉사환의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "Hey let's go to the 한강 Have a good time, have a good time Look at all this people Stand in line in line, but I gotta get mine 한강 Gang, gotta get mine, 한강 gang Skippin these lines, 한강 gang Have a good time, have a good time 미세먼지 없는 날은 아까워 왠지 Chillin' with my homie 병언, 한강 gang shit Wing doors go up at the riverside 사람들이 핸드폰을 들고 찍어 날 Ay, 광명에서 온 여의도민 Rock star Ay, 연예인이라기보다도 악사 Ay, 간장게장 Is better than lobsters 난 이 세상에 나의 노래들로 낙서해 Basquiat marriott, 내 걱정 마, 이건 내 인생이야, yeah Look at my watch yeah, look at my Rollie, yeah 성공했다면 네게 다가오는 놈을 멀리해 If and Co ice rings, yeah, 편의점 Ice creams, yeah 섞어 입어 Adidas, Nike 아님 Bape and Supreme, yeah 한강 Gangs, don't care about those thangs We just out here puttin' in that work"},
        {key: "9", date: '2021-10-23', Auth: "true", views: '104', user_name: '리수진', user_id: "ree", title: '리수진의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "한강 눈에 비친 서울은 리빌딩 올림픽 대로는 터질 듯이 막혀 siri Play me something chill It's 6pm 노을 빛은 핑크색 도로 위에 줄 지은 빨간색 실 I'm stressing out I was stressing out 못 가 제시간에 하지만 괜찮아 남보다 느린 대신에 사고만 안 나면 됐잖아 Back when I was in 철원 그 느린 시간도 때웠잖아 Man fuck time 나는 벽 타듯이 시간을 넘어왔다 이걸 너가 모른다면 난 너랑 할 말 없다 드디어 봄날 옴 고마워 기다려줘서 날 Still having good time"},
        {key: "10", date: '2021-10-24', Auth: "false", views: '521', user_name: '죄송희', user_id: "joi", title: '죄송희의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "Hey let's go to the 한강 Have a good time, have a good time Look at all this people Stand in line in line, but I gotta get mine 한강 Gang, gotta get mine, 한강 gang Skippin these lines, 한강 gang Have a good time, have a good time 미세먼지 없는 날은 아까워 왠지 Chillin' with my homie 병언, 한강 gang shit Wing doors go up at the riverside 사람들이 핸드폰을 들고 찍어 날 Ay, 광명에서 온 여의도민 Rock star Ay, 연예인이라기보다도 악사 Ay, 간장게장 Is better than lobsters 난 이 세상에 나의 노래들로 낙서해 Basquiat marriott, 내 걱정 마, 이건 내 인생이야, yeah Look at my watch yeah, look at my Rollie, yeah 성공했다면 네게 다가오는 놈을 멀리해 If and Co ice rings, yeah, 편의점 Ice creams, yeah 섞어 입어 Adidas, Nike 아님 Bape and Supreme, yeah 한강 Gangs, don't care about those thangs We just out here puttin' in that work"},
    ];

    const review_photo = [
        {key: "1", img: ['https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa', 'https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa']}, {key: "2", img: ['https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa', 'https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa']}, 
        {key: "3", img: ['https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa', 'https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa']}, {key: "4", img: ['https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa', 'https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa']}, 
        {key: "5", img: ['https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa', 'https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa']}, {key: "6", img: ['https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa', 'https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa']}, 
        {key: "7", img: ['https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa', 'https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa']}, {key: "8", img: ['https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa', 'https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa']}, 
        {key: "9", img: ['https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa', 'https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa']}, {key: "10", img: ['https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa', 'https://cdn-icons-png.flaticon.com/512/3601/3601002.png', 'https://cdn-icons.flaticon.com/png/512/3840/premium/3840738.png?token=exp=1636781874~hmac=b81c323e8b73d35e73ec55d48d04c103', 'https://cdn-icons-png.flaticon.com/512/179/179351.png', 'https://cdn-icons.flaticon.com/png/512/3841/premium/3841729.png?token=exp=1636781874~hmac=096b86465c3c637276defaefdedab5fa']}, 
    ];

    // const sortedReview = hot_reviews.sort( function(a, b) {
    //     return b.views - a.views;
    // });

    const sortedReview = hot_reviews.reverse();
    const arrSize = sortedReview.length;

    const sortedPhoto = review_photo.reverse();

    const handleThumbClick = (e) => {
        setThumbClick(true);

        if(thumbClick === true) {
            setThumbClick(false);
        }
    };

    const handleHeartClick = (e) => {
        setHeartClick(true);

        if(heartClick === true) {
            setHeartClick(false);
        }
    };

    const getReviews = () => {
        return sortedReview;
    };
    
    const getPhotos = () => {
        return sortedPhoto;
    }

    const [reviews, setReviews] = useState({
        info: [getReviews(), getPhotos()], 
        pageSize: 10,
        currentPage: 1
    });

    const handlePageChange = (page) => {
        setReviews({...sortedReview, currentPage: page});
    };

    const paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;

        return _(items)
            .slice(startIndex)
            .take(pageSize)
            .value();
    }

    const {info, pageSize, currentPage} = reviews;
    const pagedReviews = paginate(info, currentPage, pageSize);

    const { length: count } = reviews.info;

    const showReviews = () => {

        let idx = 0; let result = []; 
        
        while(idx < arrSize) {
            let i;

            if(sortedReview[idx].Auth === "true") {
                result.push(
                    <ReviewBox>
                        <Review reviewinfos={sortedReview[idx]} reviewphotos={sortedPhoto[idx].img}/>
                    </ReviewBox>
                )
            }

            else {
                result.push(
                    <ReviewBox>
                        <Review reviewinfos={sortedReview[idx]} reviewphotos={sortedPhoto[idx].img}/>
                    </ReviewBox>
                )
            }
               
            idx = idx + 1;
        }
        

        return result;
    }

    return (
        <ColumnContents className="columncontents">
            <Inner className="inner">
                <RestaurantDetail className="resdetail">
                    <Map
                        center={{ lat: infos.ycoord, lng: infos.xcoord }}
                        style={{ width: "968px", height: "360px", marginRight: "5px" }}
                    >
                        <MapMarker 
                            position={{ lat: infos.ycoord, lng: infos.xcoord }}
                        >
                            <div style={{color:"#000", textAlign: "center"}}>
                                <p>{infos.name}</p>
                            </div>
                        </MapMarker>
                    </Map>
                    <br></br>
                    <TitleBar>
                        <div className="InfoName" style={{height: "100px"}}>
                            {infos.name}
                        </div>
                        <ButtonBox>
                            <LikeBox>
                                <p className="likes">{infos.reviews}</p>
                                <HiOutlinePencilAlt size='36px' style={{margin: '0 0 0 8px'}}/>
                                <p className="para">리뷰수</p>
                            </LikeBox>
                            <LikeBox>
                                <button type="button" onClick={handleHeartClick}>
                                { heartClick ? <AiFillHeart size='32px'/> : <AiOutlineHeart size='32px'/> }
                                </button>
                                <p className="para">찜하기</p>    
                            </LikeBox>
                            <LikeBox>
                                <p className="likes">{infos.likes}</p>
                                <button type="button" onClick={handleThumbClick}>
                                { thumbClick ? <FaSmileBeam size='32px'/> : <FaRegSmileBeam size='32px'/> }
                                </button>
                                <p className="para">맛집이에요</p>    
                            </LikeBox>
                        </ButtonBox>    
                    </TitleBar>
                    <Info content={infos} category={category}/>
                </RestaurantDetail>
                <ReviewContainer className="reviews">
                    <div style={{borderBottom: "1px solid rgb(219, 219, 219)" , paddingBottom: "15px"}}>
                        <span>리뷰({infos.reviews})</span>                                                      
                        <Form style={{marginRight: '20px'}}>
                            <Form.Check 
                                type="switch"
                                id="authenticated-post"
                                label="학교 인증 리뷰만 보기"
                                onChange={()=>setIsAuth(!isAuth)}
                            />
                        </Form>
                    </div>
                    {showReviews()}
                </ReviewContainer>
            </Inner>
            <SideWrap className="sidewrap">
                <FindRoad className="findroad">
                    <div></div>
                </FindRoad>
            </SideWrap>
        </ColumnContents>
    );
};

const ColumnContents = styled.div`
    width: calc(100% - 400px);
    display: flex;
    flex: 1;
    padding: 0 20px;
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
    margin-right: 5px;
`;

const RestaurantDetail = styled.div`
    display: flex;
    flex-direction: column;
    width: 970px;
    margin: 20px 0 0 -20px;
    padding: 0 0 20px 0;
    border-bottom: 1px solid rgb(219, 219, 219);

    & .InfoName {
        text-align: left;
        font-weight: 500;
        font-size: 50px;
    } 
`;

const TitleBar = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 0 0 10px 0;
`;

const LikeBox = styled.div`
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: end;

    & > button {
        background: none;
        border: none;
        width: 36px;
        height: 36px;
        margin-left: 3px;
    }

    & .likes {
        width: 50px;
        margin: 0 0 -3px 0;
        font-size: 15px;
    }

    & .para {
        width: 50px;
        font-size: 10px;
    }
`;

const ReviewBox = styled.div`
    display: flex;
    flex-direction: column;

    & > span {
        margin-top: -15px;
    }
`;

const ReviewContainer = styled.div`
    & > div {
        display: flex;
        justify-content: space-between;
        margin: 15px 0 0 -20px;
    }
`;

const SideWrap = styled.div`
    position: relative;
    background: rgb(246, 246, 246);
    margin: 20px 0 0 0;
    width: 316px;
`;

const FindRoad = styled.div`
    & > div {
        width: 316px;
    }
`;