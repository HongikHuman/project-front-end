import React from "react";
import Fade from "react-reveal/Fade";
import styled from 'styled-components';
import TimeSearchBanner from './TimeSearchBanner';

export default function Header() {
  return (
    <div className="section" id="home">
      <Container>
        <div className="header-wrapper">
          <TimeSearchBanner />          
          {/* <Fade bottom>
            <h1>
              자! 여기 맛집 추천
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h1>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                안녕
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>헤더 paragraph</p>
          </Fade> */}
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
    & .header-wrapper {
        height: 600px;
        background-image: url(https://src.hidoc.co.kr/image/lib/2020/11/9/1604911318873_0.jpg);
        background-size: cover;
    }
    
    & .header-wrapper > h1 {
        color: white;
    }
`;