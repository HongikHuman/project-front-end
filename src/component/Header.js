// import { Divider } from "antd";
import { HeartTwoTone, FileAddTwoTone, SmileTwoTone } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Header(){

    return (
        <Container>
            <HeaderWrap>
                <HeaderIconsWrap>
                    <MenuWrap>
                        <ul>
                            <li><NavLink to="/univside" activeClassName="active">대학 맛집</NavLink></li>
                            <li><NavLink to="/top10" activeClassName="active">Top 10</NavLink></li>
                            <li><NavLink to="/hotpost" activeClassName="active">핫 게시판</NavLink></li>
                        </ul>
                    </MenuWrap>
                    <LogoWrap>
                        <NavLink to="/" className="title">자맛추</NavLink>
                    </LogoWrap>
                    <ClickWrap>
                        <ul>
                            <NavLink to="newpost">
                                <FileAddTwoTone />
                            </NavLink>
                            <NavLink to="likes">
                                <HeartTwoTone />
                            </NavLink>
                            {/* <Divider /> */}
                            <NavLink to="mypage">
                                <SmileTwoTone />
                            </NavLink>
                        </ul>
                    </ClickWrap>
                </HeaderIconsWrap>
            </HeaderWrap>
        </Container>
    );
}

// styled component
const Container = styled.div`
    margin: 0 auto;
`;

const HeaderWrap = styled.div`
    max-height: 500px;
    background-color: yellow;
`;

const HeaderIconsWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    flex-basis: 33.3%;
    flex-grow: 1;
    flex-shrink: 0;
`;

const MenuWrap = styled.div`
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
    width: 33.3%;

    & ul li {
        display: inline-block; 
    }

    & ul li a {
        text-decoration: none;
        font-size: 20px;
        color: black;
        margin: 0 10px;
    }
`;

const LogoWrap = styled.div`
    font-size: 100px;
    font-family: 'NanumMasIssNeunCe';
    text-align: center;
    align-items: center;
    width: 33.4%;

    & .title {
        background-color: white;
    }

    & a, & a:hover, & a:visited{
        text-decoration: none;
        color: black;
    }
`;

const ClickWrap = styled.div`
    width: 33.3%;
    display: flex;
    flex-direction: row;
    font-size: 40px;
    align-items: center;
    flex-direction: row;

    & ul a {
        display: inline-block;
        color: black;
        margin: 0 10px;
    }
`;