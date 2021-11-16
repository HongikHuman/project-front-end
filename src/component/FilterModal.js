import React, { useState } from 'react';
import styled from 'styled-components';
import {Button, Modal} from 'react-bootstrap';

import {MdRiceBowl} from "react-icons/md";
import {GiSushis, GiNoodles} from "react-icons/gi";
import {FaHamburger, FaGlobeAsia, FaCoffee, FaBeer} from "react-icons/fa";
import {BiDish} from "react-icons/bi";

export default function FilterModal(props){
    const [sortType, setSortType] = useState('1');
    const sortRadios = [
      { name: 'latest', title: '최신순', value: '1'},
      { name: 'nearest', title: '가까운순', value: '2'},
      { name: 'best', title: '좋아요순', value: '3'}
    ]

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
              <SortSelectWrap>
                {
                  sortRadios.map((elem, idx)=>{
                    return(
                      <>
                        <input
                          type="radio"
                          name='sorting'
                          id={elem.name}
                          value={elem.value}
                          checked={elem.value === sortType}
                        />
                        <label for="latest" onClick={()=>setSortType(elem.value)}>{elem.title}</label>
                      </>             
                    );
                  })
                }
              </SortSelectWrap>
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
  user-select: none;

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

const FoodSelectWrap = styled.p`
    display: flex;
    justify-content: space-around;
    user-select: none;
  
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