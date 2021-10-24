import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { BiSearch, BiPencil } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import SearchModal from './SearchModal';

export default function Navigationbar () {

  const [modalOn, setModalOn] = useState(false);

  const handleSearchModal = () => {
      setModalOn(!modalOn);
  };

  const openSearchModal = (modalOn) => {
    if (modalOn) {
      return (
        <SearchModal 
          modalOn={modalOn} 
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

  return (
    <div className="section mb-5">
      <div className="container">
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
              <button><NavLink to="/univside" className="link">대학 맛집</NavLink></button>
              <button><NavLink to="/top10" className="link">Top 10</NavLink></button>
              <button><NavLink to="/hotpost" className="link">핫 게시판</NavLink></button>
            </div>
            <div className="click-bar">
              <div className="click">
                <button 
                  onClick={() => handleSearchModal()}
                >
                  <div className="click-one">
                    <BiSearch />
                  </div>
                </button>
                { openSearchModal(modalOn) }
                <button><NavLink to="/newpost" className="click-one"><BiPencil /></NavLink></button>
                <button><NavLink to="/search" className="click-one"><BiSearch /></NavLink></button>
                <button><NavLink to="/writepost" className="click-one"><BiPencil /></NavLink></button>
                <button><NavLink to="/likes" className="click-one"><AiOutlineHeart /></NavLink></button>
              </div>

              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic" className="click-my-page">
                  <BsPerson />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item><NavLink to="/login" className="my-link">로그인</NavLink></Dropdown.Item>
                  <Dropdown.Item><NavLink to="/my/history" className="my-link">히스토리</NavLink></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item><NavLink to="/my/edit" className="my-link">개인정보 수정</NavLink></Dropdown.Item>
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
    border-bottom: 1px solid #9a9a9a;

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
      text-decoration: none;
      color: black;
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
