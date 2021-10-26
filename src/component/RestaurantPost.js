import React, { useState } from 'react'
import styled from 'styled-components';
import Info from './RestaurantInfos';
import Review from './RestaurantReviews';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function RestaurantPost ({ Information }) {
    const [info, setInfo] = useState(Information);
    const category = ['주소', '전화번호', '음식 종류', '주차가능여부', '예약가능여부', '영업시간', '식당 사이트', '대표메뉴', '휴무일'];
    const hot_reviews = [  //업로드한 날짜 빠르면 제일 밑에
        {date: '2021-10-15', user_name: '노경민', user_id: "noh", title: '노경민의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "한강 눈에 비친 서울은 리빌딩 올림픽 대로는 터질 듯이 막혀 siri Play me something chill It's 6pm 노을 빛은 핑크색 도로 위에 줄 지은 빨간색 실 I'm stressing out I was stressing out 못 가 제시간에 하지만 괜찮아 남보다 느린 대신에 사고만 안 나면 됐잖아 Back when I was in 철원 그 느린 시간도 때웠잖아 Man fuck time 나는 벽 타듯이 시간을 넘어왔다 이걸 너가 모른다면 난 너랑 할 말 없다 드디어 봄날 옴 고마워 기다려줘서 날 Still having good time"},
        {date: '2021-10-16', user_name: '박준서', user_id: "bak", title: '박준서의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "Hey let's go to the 한강 Have a good time, have a good time Look at all this people Stand in line in line, but I gotta get mine 한강 Gang, gotta get mine, 한강 gang Skippin these lines, 한강 gang Have a good time, have a good time 미세먼지 없는 날은 아까워 왠지 Chillin' with my homie 병언, 한강 gang shit Wing doors go up at the riverside 사람들이 핸드폰을 들고 찍어 날 Ay, 광명에서 온 여의도민 Rock star Ay, 연예인이라기보다도 악사 Ay, 간장게장 Is better than lobsters 난 이 세상에 나의 노래들로 낙서해 Basquiat marriott, 내 걱정 마, 이건 내 인생이야, yeah Look at my watch yeah, look at my Rollie, yeah 성공했다면 네게 다가오는 놈을 멀리해 If and Co ice rings, yeah, 편의점 Ice creams, yeah 섞어 입어 Adidas, Nike 아님 Bape and Supreme, yeah 한강 Gangs, don't care about those thangs We just out here puttin' in that work"},
        {date: '2021-10-17', user_name: '봉세환', user_id: "bong", title: '봉세환의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "한강 눈에 비친 서울은 리빌딩 올림픽 대로는 터질 듯이 막혀 siri Play me something chill It's 6pm 노을 빛은 핑크색 도로 위에 줄 지은 빨간색 실 I'm stressing out I was stressing out 못 가 제시간에 하지만 괜찮아 남보다 느린 대신에 사고만 안 나면 됐잖아 Back when I was in 철원 그 느린 시간도 때웠잖아 Man fuck time 나는 벽 타듯이 시간을 넘어왔다 이걸 너가 모른다면 난 너랑 할 말 없다 드디어 봄날 옴 고마워 기다려줘서 날 Still having good time"},
        {date: '2021-10-18', user_name: '이수진', user_id: "lee", title: '이수진의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "Hey let's go to the 한강 Have a good time, have a good time Look at all this people Stand in line in line, but I gotta get mine 한강 Gang, gotta get mine, 한강 gang Skippin these lines, 한강 gang Have a good time, have a good time 미세먼지 없는 날은 아까워 왠지 Chillin' with my homie 병언, 한강 gang shit Wing doors go up at the riverside 사람들이 핸드폰을 들고 찍어 날 Ay, 광명에서 온 여의도민 Rock star Ay, 연예인이라기보다도 악사 Ay, 간장게장 Is better than lobsters 난 이 세상에 나의 노래들로 낙서해 Basquiat marriott, 내 걱정 마, 이건 내 인생이야, yeah Look at my watch yeah, look at my Rollie, yeah 성공했다면 네게 다가오는 놈을 멀리해 If and Co ice rings, yeah, 편의점 Ice creams, yeah 섞어 입어 Adidas, Nike 아님 Bape and Supreme, yeah 한강 Gangs, don't care about those thangs We just out here puttin' in that work"},
        {date: '2021-10-19', user_name: '채승희', user_id: "chae", title: '채승희의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "한강 눈에 비친 서울은 리빌딩 올림픽 대로는 터질 듯이 막혀 siri Play me something chill It's 6pm 노을 빛은 핑크색 도로 위에 줄 지은 빨간색 실 I'm stressing out I was stressing out 못 가 제시간에 하지만 괜찮아 남보다 느린 대신에 사고만 안 나면 됐잖아 Back when I was in 철원 그 느린 시간도 때웠잖아 Man fuck time 나는 벽 타듯이 시간을 넘어왔다 이걸 너가 모른다면 난 너랑 할 말 없다 드디어 봄날 옴 고마워 기다려줘서 날 Still having good time"},
        {date: '2021-10-20', user_name: '안경민', user_id: "ahn", title: '안경민의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "Hey let's go to the 한강 Have a good time, have a good time Look at all this people Stand in line in line, but I gotta get mine 한강 Gang, gotta get mine, 한강 gang Skippin these lines, 한강 gang Have a good time, have a good time 미세먼지 없는 날은 아까워 왠지 Chillin' with my homie 병언, 한강 gang shit Wing doors go up at the riverside 사람들이 핸드폰을 들고 찍어 날 Ay, 광명에서 온 여의도민 Rock star Ay, 연예인이라기보다도 악사 Ay, 간장게장 Is better than lobsters 난 이 세상에 나의 노래들로 낙서해 Basquiat marriott, 내 걱정 마, 이건 내 인생이야, yeah Look at my watch yeah, look at my Rollie, yeah 성공했다면 네게 다가오는 놈을 멀리해 If and Co ice rings, yeah, 편의점 Ice creams, yeah 섞어 입어 Adidas, Nike 아님 Bape and Supreme, yeah 한강 Gangs, don't care about those thangs We just out here puttin' in that work"},
        {date: '2021-10-21', user_name: '팍준서', user_id: "pak", title: '팍준서의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "한강 눈에 비친 서울은 리빌딩 올림픽 대로는 터질 듯이 막혀 siri Play me something chill It's 6pm 노을 빛은 핑크색 도로 위에 줄 지은 빨간색 실 I'm stressing out I was stressing out 못 가 제시간에 하지만 괜찮아 남보다 느린 대신에 사고만 안 나면 됐잖아 Back when I was in 철원 그 느린 시간도 때웠잖아 Man fuck time 나는 벽 타듯이 시간을 넘어왔다 이걸 너가 모른다면 난 너랑 할 말 없다 드디어 봄날 옴 고마워 기다려줘서 날 Still having good time"},
        {date: '2021-10-22', user_name: '봉사환', user_id: "hwan", title: '봉사환의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "Hey let's go to the 한강 Have a good time, have a good time Look at all this people Stand in line in line, but I gotta get mine 한강 Gang, gotta get mine, 한강 gang Skippin these lines, 한강 gang Have a good time, have a good time 미세먼지 없는 날은 아까워 왠지 Chillin' with my homie 병언, 한강 gang shit Wing doors go up at the riverside 사람들이 핸드폰을 들고 찍어 날 Ay, 광명에서 온 여의도민 Rock star Ay, 연예인이라기보다도 악사 Ay, 간장게장 Is better than lobsters 난 이 세상에 나의 노래들로 낙서해 Basquiat marriott, 내 걱정 마, 이건 내 인생이야, yeah Look at my watch yeah, look at my Rollie, yeah 성공했다면 네게 다가오는 놈을 멀리해 If and Co ice rings, yeah, 편의점 Ice creams, yeah 섞어 입어 Adidas, Nike 아님 Bape and Supreme, yeah 한강 Gangs, don't care about those thangs We just out here puttin' in that work"},
        {date: '2021-10-23', user_name: '리수진', user_id: "ree", title: '리수진의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "한강 눈에 비친 서울은 리빌딩 올림픽 대로는 터질 듯이 막혀 siri Play me something chill It's 6pm 노을 빛은 핑크색 도로 위에 줄 지은 빨간색 실 I'm stressing out I was stressing out 못 가 제시간에 하지만 괜찮아 남보다 느린 대신에 사고만 안 나면 됐잖아 Back when I was in 철원 그 느린 시간도 때웠잖아 Man fuck time 나는 벽 타듯이 시간을 넘어왔다 이걸 너가 모른다면 난 너랑 할 말 없다 드디어 봄날 옴 고마워 기다려줘서 날 Still having good time"},
        {date: '2021-10-24', user_name: '죄송희', user_id: "joi", title: '죄송희의 맛집추천', user_img_url: 'https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2', review: "Hey let's go to the 한강 Have a good time, have a good time Look at all this people Stand in line in line, but I gotta get mine 한강 Gang, gotta get mine, 한강 gang Skippin these lines, 한강 gang Have a good time, have a good time 미세먼지 없는 날은 아까워 왠지 Chillin' with my homie 병언, 한강 gang shit Wing doors go up at the riverside 사람들이 핸드폰을 들고 찍어 날 Ay, 광명에서 온 여의도민 Rock star Ay, 연예인이라기보다도 악사 Ay, 간장게장 Is better than lobsters 난 이 세상에 나의 노래들로 낙서해 Basquiat marriott, 내 걱정 마, 이건 내 인생이야, yeah Look at my watch yeah, look at my Rollie, yeah 성공했다면 네게 다가오는 놈을 멀리해 If and Co ice rings, yeah, 편의점 Ice creams, yeah 섞어 입어 Adidas, Nike 아님 Bape and Supreme, yeah 한강 Gangs, don't care about those thangs We just out here puttin' in that work"},
    ]

    return (
        <ColumnContents className="columncontents">
            <Inner className="inner">
                <RestaurantDetail className="resdetail">
                    <Map
                        center={{ lat: 37.55019, lng: 126.92462 }}
                        style={{ width: "968px", height: "360px", marginRight: "5px"}}
                    >
                        <MapMarker 
                            position={{ lat: 37.55019, lng: 126.92462 }}
                        >
                            <div style={{color:"#000", textAlign: "center"}}>
                                <p>{info.name}
                                </p>
                            </div>
                        </MapMarker>
                    </Map>
                    <br></br>
                    <TitleBar>
                        <div className="InfoName" style={{height: "100px"}}>
                            {info.name}
                        </div>
                        <ButtonBox>
                            <LikeBox>
                                <Button>
                                    <p className="likes">{info.reviews}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    <p className="para">리뷰수</p>
                                </Button>
                            </LikeBox>
                            <LikeBox>
                                <Button>
                                    <p className="likes">{info.likes}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                    <p className="para">공감해요</p>
                                </Button>
                            </LikeBox>
                        </ButtonBox>    
                    </TitleBar>
                    <Info content={info} category={category}/>
                </RestaurantDetail>
                <Reviews className="reviews">
                    <div style={{borderBottom: "1px solid rgb(219, 219, 219)" , paddingBottom: "15px"}}>
                        <span>리뷰({info.reviews})</span>
                    </div>
                    <Review reviewinfos={hot_reviews} />
                </Reviews>
            </Inner>
            <SideWrap className="sidewrap">
                <FindRoad className="findroad">
                    <img src={info.roadmap} />
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
`;

const LikeBox = styled.div`
    width: 41.22px;
    height: 54px;
    margin: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Button = styled.button`
    display: flex;
    flex-direction: column;
    background: none;
    border: none;
    margin: 15px 0 0 0;
    padding: 0 0 0 0;
    
    & > svg {
        width: 32px;
        height: 32px;
        margin-left: 8px;
    }

    & .likes {
        width: 50px;
        display: flex;
        justify-content: center;
        margin: 0 0 -3px -3px;
        font-size: 15px;
    }

    & .para {
        width: 50px;
        display: flex;
        justify-content: center;
        font-size: 10px;
    }
`;

const Reviews = styled.div`
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

    & > img {
        width: 316px;
        height: 360px;
        object-fit: cover;
    }
`;