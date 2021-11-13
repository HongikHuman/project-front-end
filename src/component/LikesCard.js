import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function LikesCard( {element} ) {

    const [schools, setSchools] = useState(element.school);
    const [heartClick, setHeartClick] = useState(true);

    const handleHeartClick = (e) => {
        setHeartClick(true);

        if(heartClick === true) {
            setHeartClick(false);
        }
    };

    return (
        <LikeCard>
            <ImgBox>
                <img src={element.img_url} alt="..."/>
            </ImgBox>
            <InfoBox>
                <TitleBox>
                    <h2>{element.name}</h2>
                    <button type="button" onClick={handleHeartClick}>{ heartClick ? <AiFillHeart size="32px" color="red"/> : <AiOutlineHeart size="32px" color="red"/> }</button>
                </TitleBox>
                <DetailBox>
                    <div id="schools">
                        {
                            schools.map((item) => {
                                return (
                                    <span style={{fontSize: '15px', fontWeight: '1000'}}>#{item}</span>
                                )
                            })
                        }
                    </div>
                    <span>{element.category}</span>
                    <span style={{fontSize: '15px'}}>{element.address}</span>
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

const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;

    & > h2 {
        width: 100%;
        text-align: center;
        margin-top: 15px;
    }
    
    & > button {
        margin-top: 10px;
        background: none;
        border: none;
    }
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    background: rgb(250, 250, 250);
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

    #schools {
        display: flex;
    }
`;