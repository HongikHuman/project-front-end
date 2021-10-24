import React from 'react';
import styled from 'styled-components';

export default function HotPost ({ hotposts }){
    return (
        <Container>  {/*div*/} 
            <Whole_Post>   {/*div*/} 
                 <PostsList className="container">   {/*ul*/} 
                    {hotposts.map(hotpost => {

                        return (
                          <APost>  {/*list*/}
                            <PostBox className="with-review">  {/*div*/}                                    
                                <RestaurantImgBox>  {/*div*/}
                                      <img src={hotpost.restaurant_img_url} className="res_img" alt="~~"/>
                                </RestaurantImgBox>
                                <TextBox>
                                    <InfoBox>
                                        <Title>
                                            <h3>{hotpost.title} - {hotpost.restaurant_name}</h3>
                                        </Title>
                                        <LikeBox>
                                            <Button>
                                                <p className="likes">{hotpost.likes}</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                                </svg>
                                                <p className="para">공감해요</p>
                                            </Button>
                                        </LikeBox>   
                                        </InfoBox>
                                        <ReviewContentBox>
                                            <UserInfo>
                                                <UserPhoto><img src={hotpost.user_img_url} /></UserPhoto>      
                                                {hotpost.user_id} 
                                            </UserInfo>
                                            <Review>
                                                {hotpost.review.slice(0, 222)}  
                                                <SeeMore>...더보기</SeeMore>
                                            </Review>
                                        </ReviewContentBox>
                                        <SeeMorePostDiv>
                                            <SeeMorePost>이 음식점에 대한 리뷰 더보기></SeeMorePost>
                                        </SeeMorePostDiv>
                                </TextBox>
                            </PostBox>
                          </APost>  
                       );
                    })}
                </PostsList>
            </Whole_Post>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Whole_Post = styled.div`
    display: flex;
    margin-top: 5px;
`;

const PostsList = styled.ul`
    display: flex;
    flex-direction: column;
`;

const APost = styled.li`
    border-bottom: 1px solid rgb(219, 219, 219);
`;

const TextBox = styled.li`
    display: flex;
    flex-direction: column;
`;

const PostBox = styled.div`
    min-width: 238px;
    display: flex;
`;

const Title = styled.span`
    width: 30rem;
    height: 40px;
    display: flex;
    justify-content: center;
    margin-left: 50px;
    padding: 0 0 0 20px;

    & > h3 {
        margin-top: 27px;
    }
`;

const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LikeBox = styled.div`
    width: 41.22px;
    height: 54px;
    margin: 20px 20px 0px 45px;
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

const RestaurantImgBox = styled.div`
    display: flex;
    margin: 15px 15px 15px 0px;

    & > img {
        width: 360px;
        height: 240px;
        object-fit: cover;
    }
`;

const ReviewContentBox = styled.div`
    display: inline;
    justify-content: center;
    align-items: center;
    width: 600px;
`;

const Review = styled.p`
    display: inline;
    line-height: 1.8;
`;

const UserInfo = styled.figure`
    display: inline;
    position: static;
    width: auto;
    font-size: 30px;
    font-weight: 1000;
    font-family: 'NanumAGiSaRangCe';
    padding:0 8px 0 0; 
`;

const UserPhoto = styled.div`
    display: inline;
    width: 30px;
    height: 30px;

    & > img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 5px;
    }
`;

const SeeMore = styled.button`
    display: inline;
    color: orange;
    border: none;
    background: none;
`;

const SeeMorePostDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const SeeMorePost = styled.button`
    width: 215px;
    background: none;
    border: none;
    padding: 20px 0 0 0;
    color: orange;
`;