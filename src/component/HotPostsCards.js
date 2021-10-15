import React from 'react';
import styled from 'styled-components';

export default function HotPost ({ hotposts }){
    const sentence = "몇 번 인가 이별을 경험하고서 널 만났지 그래서 더 시작이 두려웠는지 몰라 하지만 누군 갈 알게 되고 사랑하게 되는 건 니가 마지막이라면 얼마나 좋을까 우- 나처럼 바쁜 하루 중에도 잠시 네 목소리 들으면 함께 있는 것처럼 너도 느껴지는지 매일 밤 집으로 돌아갈 때 그 곳에 니가 있다면 힘든 하루 지친 니 마음이 내 품에 안겨 쉴 텐데 지금처럼만 날 사랑해줘 난 너만 변하지 않는다면 내 모든걸 가질 사람은 너뿐이야 난 흔들리지 않아 넌 가끔은 자신이 없는 미래를 미안해 하지만 잊지 말아줘 사랑해 너와 함께라면 이젠 행복한 나를"
    return (
        <Container>  {/*div*/} 
            <Whole_Post>   {/*div*/} 
                 <PostsList>   {/*ul*/} 
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
                                            <h3>{hotpost.title}</h3>
                                            <strong>좋아요수 {hotpost.likes}</strong>
                                        </Title>
                                        <LikeBox>
                                            <Button>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                                </svg>
                                                <p>맛집이에요!</p>
                                            </Button>
                                        </LikeBox>   
                                        </InfoBox>
                                        <ReviewContentBox>
                                            <UserInfo>
                                                <UserPhoto style={{backgroundColor: 'black'}}></UserPhoto>       
                                                {hotpost.user_id}
                                            </UserInfo>
                                            <Review>
                                                {hotpost.review.slice(0, 250)}  
                                                <SeeMore>...더보기</SeeMore>
                                            </Review>
                                        </ReviewContentBox>
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

const showLongReview = (event) => {
    console.log("Clicked!")
    return 
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Whole_Post = styled.div`
    display: flex;
    margin-top: 5px;
    width: 774px;
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
    width: 400px;
    height: 40px;
    display: flex;
    padding: 0 0 0 20px;

    & > h3 {
        display: flex;
        margin-top: 27px;
    }

    & > strong {
        display: flex;
        padding: 30px 0 0 30px;
    }
`;

const InfoBox = styled.div`
    display: flex;
`;

const LikeBox = styled.div`
    width: 41.22px;
    height: 54px;
    margin: 15px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    display: inline;
    background: none;
    border: none;
    margin: 10px 0 0 0;
    
    & > svg {
        width: 32px;
        height: 32px;
    }

    & > p {
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
    }
`;

const RestaurantImgBox = styled.div`
    display: flex;
    margin: 15px 15px 15px 0px;

    & > img {
        width: 240px;
        height: 240px;
        object-fit: cover;
    }
`;

const ReviewContentBox = styled.div`
    display: inline;
    justify-content: center;
    align-items: center;
`;

const Review = styled.p`
    display: inline;
`;

const UserInfo = styled.figure`
    display: inline;
    position: static;
    width: auto;
    font-size: 30px;
    font-weight: 500;
    font-family: 'NanumAGiSaRangCe';
    padding:0 5px 0 0; 
`;

const UserPhoto = styled.div`
    
`;

const SeeMore = styled.span`
    display: inline;
    color: orange;
`;