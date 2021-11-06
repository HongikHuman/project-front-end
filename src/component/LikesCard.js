import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

export default function LikesCard( {element} ) {
    return (
        <LikeCard>
            <ImgBox>
                <img src={element.img_url} alt="..."/>
            </ImgBox>
            <InfoBox>
                <h2>{element.name}</h2>
                <DetailBox>
                    <div className="hb">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        <h3>{element.likes}</h3>
                    </div>                    
                    <span>{element.category}</span>
                    <span style={{fontSize: '10px'}}>{element.address}</span>
                </DetailBox>
            </InfoBox>
        </LikeCard>
    )
}

const LikeCard = styled.div`
    display: flex;
    width: 500px;
    height: 250px;
`;

const ImgBox = styled.div`
    width: 40%;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    background: rgb(250, 250, 250);

    & > h2 {
        margin-top: 15px;
    }
`;

const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 10px 10px 0;

    .hb {
        display: flex;
        align-items: flex-end;
        margin-bottom: -10px;
    }

    .hb > svg {
        width: 35px;
        height: 35px;
        margin-bottom: 5px;
    }
`;