import React, { useState, useEffect } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { MdDoubleArrow } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export default function GeoLocation() {
    const [state, setState] = useState({
      center: {
        lat: 33.450701,
        lng: 126.570667,
      },
      errMsg: null,
      isLoading: true,
    });
    const [click, setClick] = useState(false);
    const [address, setAddress] = useState('');

    const clickBtn = () => {
      setClick(true);
      console.log(state);
    };

    useEffect(() => {
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setState((prev) => ({
              ...prev,
              center: {
                lat: position.coords.latitude, // 위도
                lng: position.coords.longitude, // 경도
              },
              isLoading: false,
            }))
          },
          (err) => {
            setState((prev) => ({
              ...prev,
              errMsg: err.message,
              isLoading: false,
            }))
          }
        )   
      } else {
        // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
        setState((prev) => ({
          ...prev,
          errMsg: "geolocation을 사용할수 없어요..",
          isLoading: false,
        }))
      }
    }, [])
    
    return (
      <div>
        <LocationWrap>
          <Button 
            variant="light" 
            className="location-btn"
            onClick={clickBtn}
          >
            내 위치 확인하기
            <FaLocationArrow />
          </Button>
          <MdDoubleArrow className="location-arrow" />
          <FormWrap>
            {click ? (
              <div className="location-text">{`위도 : ${state.center.lat}, 경도 : ${state.center.lng}`}</div>
            ):(
              <div className="location-text"></div>
            )}
          </FormWrap>
        </LocationWrap>
        
          
      </div>
    );
}

const LocationWrap = styled.div`
  height: 65px;
  margin-top : 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .location-btn {
    height: 100%;
    width: 25%;
    font-size: 23px;
    border-radius: 25px;
    border: 4px solid rgb(200, 200, 200);
  }

  & .location-arrow {
    font-size: 30px;
  }
`;

const FormWrap = styled.div`
  width: 70%;
  padding: 0;
  margin-bottom: 0;
  height: 100%;
  background-color: white;

  & .location-text {
    padding: 15px 0;
    font-size: 23px;
  }
`;