import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Button, ToggleButtonGroup, ToggleButton, Form, Card, Col, Row, Pagination, Modal} from 'react-bootstrap';

import {MdRiceBowl} from "react-icons/md";
import {GiSushis, GiNoodles} from "react-icons/gi";
import {FaHamburger, FaGlobeAsia, FaCoffee, FaBeer} from "react-icons/fa";
import {BiDish} from "react-icons/bi";

export default function FilterModal(props){
    return (
        <>
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                검색 필터
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <h4>정렬</h4>
                <SortSelector/>

              <p></p>
              <h4>음식종류</h4>
                <FoodSelector/>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="warning" onClick={props.onHide}>적용</Button>
              <Button variant="light" onClick={props.onHide}>닫기</Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}


const SortSelectWrap = styled.p`
  display: flex;
  justify-content: space-around;

  font-size: 25px;
  text-align: center;
  margin: 0 auto;

  & > input[type="radio"]{
    display: none;
  }

  & > label{
    padding: 0 20px 0 20px;
    border: 4px solid;
    border-radius: 40px;
    transition: 0.3s;
    opacity: 0.4;
    cursor: pointer;
  }
  
  & > input[type="radio"]:checked + label{
    color: orange;
    opacity: 1.0;
  }
`;


const SortSelector = (props)=>{
  return(
      <SortSelectWrap>
        <input type="radio" name="sorting" id="latest" value="1" checked></input>
        <label for="latest">최신순</label>
        <input type="radio" name="sorting" id="nearest" value="2"></input>
        <label for="nearest">가까운순</label>
        <input type="radio" name="sorting" id="best" value="3"></input>
        <label for="best">좋아요순</label>
      </SortSelectWrap>
  );
}

const FoodSelectWrap = styled.p`
    display: flex;
    justify-content: space-around;
  
    font-size: 75px;
    text-align: center;
    margin: 0 auto;

    & > input[type="checkbox"]{
      display: none;
    }


    & > label{
      transition: 0.3s;
      opacity: 0.4;
      cursor: pointer;
    }

    & > label > p{
      margin: 0 auto;
      font-size: 25px;
      display: block;
      text-align: center;
      
    }

    & > input[type="checkbox"]:checked + label{
      color: orange;
      opacity: 1.0;
    }
`;

const FoodSelector = (props)=>{
  const MenuLine1 = [
    {key: 1, name: "한식", icon: <MdRiceBowl/>},
    {key: 2, name: "중식", icon: <GiNoodles/>},
    {key: 3, name: "일식", icon: <GiSushis/>},
    {key: 4, name: "양식", icon: <FaHamburger/>},
  ]
  const MenuLine2 = [
    {key: 5, name: "세계", icon: <FaGlobeAsia/>},
    {key: 6, name: "뷔페", icon: <BiDish/>},
    {key: 7, name: "카페", icon: <FaCoffee/>},
    {key: 8, name: "술집", icon: <FaBeer/>}
  ]

  return(
    <>
      <FoodSelectWrap>
        {
          MenuLine1.map((elem)=>{
            return(
              <>
                <input type="checkbox" id={"food"+elem.key} name="food"></input>
                <label for={"food"+elem.key}>{elem.icon}<p>{elem.name}</p></label>
              </>
            );
          })
        }
      </FoodSelectWrap>
      <FoodSelectWrap>
        {
            MenuLine2.map((elem)=>{
              return(
                <>
                  <input type="checkbox" id={"food"+elem.key} name="food"></input>
                  <label for={"food"+elem.key}>{elem.icon}<p>{elem.name}</p></label>
                </>
              );
            })
         }
      </FoodSelectWrap>
    </>
  )
}