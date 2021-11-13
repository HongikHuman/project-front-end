import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { BiSearch, BiPencil } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import SearchModal from './SearchModal';
import LoginModal from './LoginModal';

export default function Navigationbar () {

  //search modal

  const [modalOn, setModalOn] = useState(false);
  
  const handleClose = () => setModalOn(false);
  const handleShow = () => setModalOn(true);

  const handleSearchModal = () => {
      setModalOn(!modalOn);
  };

  const openSearchModal = (modalOn) => {
    if (modalOn) {
      return (
        <SearchModal 
          modalOn={modalOn}
          handleClose={handleClose} 
          handleSearchModal={handleSearchModal}
        />
      );
    }
    else {
      return null
    }
  };

  useEffect(() => {
    openSearchModal(modalOn);
  }, [modalOn]);


  //login modal
  const [modalShow, setModalShow] = useState(false); //모달창 상태



  //render

  return (
    <div className="section mb-5">
      <div className="container">

        <LoginModal
                show={modalShow}
                onHide={() => setModalShow(false)}
        />

        <NavbarWrap>
            <NavLink
                to="/"
                role="button"
                className="name"
                tabIndex={0}
            >
                자맛추
            </NavLink>
            <div className="links-wrapper">
              <button><NavLink to="/univ" className="link">대학 맛집</NavLink></button>
              <button><NavLink to="/top10" className="link">맛집 랭킹</NavLink></button>
              <button><NavLink to="/hotpost" className="link">핫 리뷰</NavLink></button>
            </div>
            <div className="click-bar">
              <div className="click">
                <button 
                  onClick={handleShow}
                >
                  <div className="click-one">
                    <BiSearch />
                  </div>
                </button>
                { openSearchModal(modalOn) }
                <button><NavLink to="/writepost" className="click-one"><BiPencil /></NavLink></button>
                <button><NavLink to="/likes" className="click-one"><AiOutlineHeart /></NavLink></button>
              </div>

              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic" className="click-my-page">
                  <BsPerson />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item className="dropdown-item"><NavLink to="#" className="my-link"><button onClick={() => setModalShow(true)}style={{width: "100%"}}>로그인</button></NavLink></Dropdown.Item>
                  <Dropdown.Item className="dropdown-item"><NavLink to="/my/history" className="my-link"><button style={{width: "100%"}}>히스토리</button></NavLink></Dropdown.Item>
                  
                  <Dropdown.Divider style={{margin: "4px auto"}}/>
                  <Dropdown.Item><NavLink to="/my/edit" className="my-link"><button style={{width: "100%"}}>마이페이지</button></NavLink></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
        </NavbarWrap>
      </div>
    </div>
  );
};

const NavbarWrap = styled.div`
    margin-top: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 130px;

    & .name {
        text-decoration: none;
        color: black;
        font-weight: 600;
        font-size: 100px;
        width: 20%
        text-align: left;
        font-family: 'NanumAGiSaRangCe';
    }
    
    & .links-wrapper {
      width: 33.3%
    }

    & .links-wrapper > button {
        padding: 10px;
        opacity: 0.6;
        transition: all 0.2s ease-in-out;
        background-color: transparent;
        outline: none;
        border: 0px;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
    }

    & .links-wrapper .link {
      text-decoration: none;
      color: #6a6a6a;
      font-size: 17px;        
      font-family: "Open Sans";
    }

    & .links-wrapper .active {
        color: black;
    }

    & .click-bar {
      display: flex;
      width: 20%
      flex-direction: row;
      align-items: center;
      margin: 0;
    }

    & .click-bar .click {
      margin-right: 10px;
    }

    & .click-bar .click > button {
        padding: 10px;
        opacity: 0.6;
        transition: all 0.2s ease-in-out;
        font-size: 15px;
        background-color: transparent;
        outline: none;
        border: 0px;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
    }

    & .click-bar .click .click-one {
      text-decoration: none;
      color: black;
      font-size: 30px;
    }

    & .click-bar .btn-group > button {
        padding: 10px;
        opacity: 0.6;
        transition: all 0.2s ease-in-out;
        font-size: 15px;
        background-color: transparent;
        outline: none;
        border: 0px;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
    }

    & .click-bar .click-my-page {
      text-decoration: none;
      color: black;
      font-size: 30px;
    }

    & .click-bar .my-link {
      width: 100%;
      text-decoration: none;
      color: black;
    }

    & .click-bar .my-link > button {
        padding: 10px;
        height: 20px;
        opacity: 0.6;
        transition: all 0.2s ease-in-out;
        font-size: 15px;
        background-color: transparent;
        outline: none;
        border: 0px;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
    }

    &. click-bar > NavDropdown {
      color: black;
      font-size: 100px;
      background-color: red;
    }

    & .click-bar .basic-nav-dropdown > button {
        padding: 10px;
        opacity: 0.6;
        transition: all 0.2s ease-in-out;
        font-size: 15px;
        background-color: transparent;
        outline: none;
        border: 0px;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
    }
`;
