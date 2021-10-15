import React from 'react';
import styled from 'styled-components';

export default function Top10 ({ restaurants }){
    const sentence = "몇 번 인가 이별을 경험하고서 널 만났지 그래서 더 시작이 두려웠는지 몰라 하지만 누군 갈 알게 되고 사랑하게 되는 건 니가 마지막이라면 얼마나 좋을까 우- 나처럼 바쁜 하루 중에도 잠시 네 목소리 들으면 함께 있는 것처럼 너도 느껴지는지 매일 밤 집으로 돌아갈 때 그 곳에 니가 있다면 힘든 하루 지친 니 마음이 내 품에 안겨 쉴 텐데 지금처럼만 날 사랑해줘 난 너만 변하지 않는다면 내 모든걸 가질 사람은 너뿐이야 난 흔들리지 않아 넌 가끔은 자신이 없는 미래를 미안해 하지만 잊지 말아줘 사랑해 너와 함께라면 이젠 행복한 나를";

    return (
        <div className="container">
            {restaurants.map(restaurant => {
                return (
                    <CardBoxWrap className="card mt-5" key={restaurant.rank}>
                        <CardWrap className="row g-0">
                            <ImageBoxWrap className="col-md-4">
                                <img src={restaurant.img_url} className="img-fluid rounded-start" alt="..." />
                            </ImageBoxWrap>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <CardNameWrap>
                                        <h2 className="card-title">{restaurant.rank}. {restaurant.name}</h2>
                                        <p className="card-likes" style={{color: 'red'}}>좋아요수 {restaurant.likes}개</p>
                                    </CardNameWrap>
                                    <CardAddressWrap><small className="text-muted">{restaurant.address}</small></CardAddressWrap>
                                    <CardSentenceWrap>{sentence}</CardSentenceWrap>
                                </div>
                            </div>
                        </CardWrap>
                    </CardBoxWrap>
                );
            })}
        </div>
    );
};

const CardBoxWrap = styled.div`
    max-width: 100vh;
    height: 300px;
`;

const CardWrap = styled.div`
    height: 300px;
`;

const ImageBoxWrap = styled.div`
    height: 300px;
    display: flex;
    align-items: center;

    & > img {
        width: 400px;
        height: 300px;
        object-fit: cover;
    }
`;

const CardNameWrap = styled.div`
    height: 70px;  
    display: flex;
    align-items: center;
    text-align: left;

    & > h2 {
        width: 80%;
        margin-left: 10px;
        justify-content: center;
    }
`;

const CardAddressWrap = styled.div`
    font-size: 20px;
    text-align: left;
    margin: 0 0 10px 10px;
`;

const CardSentenceWrap = styled.div`
    text-align: left;
    margin: 0 0 10px 10px;
`;