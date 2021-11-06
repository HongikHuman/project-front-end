import React, { useState } from 'react'
import styled from 'styled-components';
import { FcSearch } from "react-icons/fc";

export default function Review({ reviewinfos }) {
    const [reviewinfo, setReviewInfos] = useState(reviewinfos);

    return (
         <ReviewBox>
            <UserInfo>
                <UserPhoto>
                    <img src={reviewinfo.user_img_url} />
                    <span>{reviewinfo.user_id}</span>
                </UserPhoto>      
                </UserInfo>
                    <div className="datatitlewrap">
                        <span className="date">{reviewinfo.date}</span>
                        <span className="title">{reviewinfo.title}</span>
                        <div><FcSearch />{reviewinfo.views}</div>
                    </div>
                <div className="review">{reviewinfo.review.slice(0, 190)}...</div>
        </ReviewBox>
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