import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import scrollTo from "gatsby-plugin-smoothscroll";
import { NavDropdown } from 'react-bootstrap';
import { BiPencil } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoPersonCircleSharp } from 'react-icons/io5';

export default function Navigationbar () {
  return (
    <div className="section mb-5">
      <div className="container">
        <NavbarWrap>
            <NavLink
                to="/"
                role="button"
                onClick={() => scrollTo("#home")}
                className="name"
                tabIndex={0}
            >
                자맛추
            </NavLink>
            <div className="links-wrapper">
              <button><NavLink to="/universide" className="link">대학 맛집</NavLink></button>
              <button><NavLink to="/top10" className="link">Top 10</NavLink></button>
              <button><NavLink to="/hotpost" className="link">핫 게시판</NavLink></button>
            </div>
            <div className="click-bar">
              <div className="click">
                <button><NavLink to="/newpost" className="click-one"><BiPencil /></NavLink></button>
                <button><NavLink to="/likes" className="click-one"><AiOutlineHeart /></NavLink></button>
              </div>
              <NavDropdown title="my page" className="basic-nav-dropdown" style={{color: '#9a9a9a'}}>
                  <button><NavDropdown.Item to="/login">로그인</NavDropdown.Item></button>
                  <button><NavDropdown.Item to="/history">히스토리</NavDropdown.Item></button>
                  <button><NavDropdown.Item to="likes-list">찜한목록</NavDropdown.Item></button>
                  <NavDropdown.Divider />
                  <button><NavDropdown.Item to="/edit-privacy">개인정보 수정</NavDropdown.Item></button>
              </NavDropdown>
            </div>
        </NavbarWrap>
      </div>
    </div>
  );
};

const NavbarWrap = styled.div`
    width: 80vw;
    margin-top: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    & .name {
        text-decoration: none;
        color: black;
        font-weight: 600;
        font-size: 70px;
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