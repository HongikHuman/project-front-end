import React from "react";
import Fade from "react-reveal/Fade";
import styled from 'styled-components';

export default function Header() {
  return (
    <div className="section" id="home">
      <Container className="container">
        <div className="header-wrapper">
          <Fade bottom>
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
          </Fade>
          <Fade bottom>
            <a
              href="/"
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
    & .header-wrapper {
        height: 400px;
        background-image: url(https://cdn.mkhealth.co.kr/news/photo/201806/img_MKH180615003_0.jpg);
        background-size: cover;
        opacity: 0.5;
    }

    & .header-wrapper::before {
        
    }
    
    & .header-wrapper > h1 {
        color: white;
    }
`;