import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

export default function Review({ reviewinfos }) {
    const [reviewinfo, setReviewInfos] = useState(reviewinfos);

    // 배열 거꾸로
    const reverse = [...reviewinfo].reverse();
    
    return (
        <ReviewContainer>
            {reverse.map(info => {

                return (
                    <ReviewBox>
                        <UserInfo>
                            <UserPhoto>
                                <img src={info.user_img_url} />
                                <span>{info.user_id}</span>
                            </UserPhoto>      
                        </UserInfo>
                        <div className="datatitlewrap">
                            <span className="date">{info.date}</span>
                            <span className="title">{info.title}</span>
                        </div>
                        <div className="review">{info.review.slice(0, 190)}</div>
                    </ReviewBox>
                );
                
            })}
        </ReviewContainer>
    );
};


const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ReviewBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 975px;
    border-bottom: 1px solid rgb(219, 219, 219);
    margin-top: 15px;

    .title {
        font-size: 25px;
        font-weight: 500;
    }

    .review {
        margin-top: -18px;
        width: 500px;
    }

    .datatitlewrap {
        margin-top: -30px;
        display: flex;
        flex-direction: column;
    }

    .date {
        padding: 0 0 5px 0;
    }
`;

const UserInfo = styled.div`
    font-size: 30px;
    font-weight: 1000;
    font-family: 'NanumAGiSaRangCe';
`;

const UserPhoto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: 
    width: 150px;

    & > img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-right: 5px;
    }
`;