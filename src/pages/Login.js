import React from 'react';
import styled from 'styled-components';

import {Form, Button} from 'react-bootstrap';
import { MdAccountBox, MdOutlineLock } from 'react-icons/md';

import TextDivider from '../component/TextDivider';

export default function Login(){
    return (
        <Container className="container">
            <LoginForm>
                <Form>
                    <h2>로그인</h2>
                    <AccountWrap>
                        <Form.Group className="first-child" bsPrefix={{ margin: "0"}} controlId="formHorizontalEmail">
                            <span><MdAccountBox/></span>
                            <Form.Control type="email" placeholder="아이디" />
                        </Form.Group>
                        <Form.Group bsPrefix={{margin: "0"}} controlId="formHorizontalEmail">
                            <span><MdOutlineLock/></span>
                            <Form.Control type="password" placeholder="비밀번호" />
                        </Form.Group>
                    </AccountWrap>
                </Form>
                <ButtonWrap>
                    <Button>회원가입</Button>
                    <Button>로그인</Button>
                </ButtonWrap>

                <TextDivider text="또는"/>
                <h4>자맛추 회원이 되어 더 많은 기능을 사용해보세용용!</h4>

                <LoginButton>페이스북으로 계속하기</LoginButton>
                <LoginButton>카카오톡으로 계속하기</LoginButton>
                <LoginButton>Apple로 계속하기</LoginButton>
            </LoginForm>
                           

        </Container>
    );
};


const Container = styled.div`
    margin: 0 auto;
    margin-bottom: 150px;
`;

const LoginForm = styled.div`
    margin: 0 auto;
    padding: 15px;
    width: 95%;
    border: 1px solid grey;
    border-radius: 10px;

    & h2{
       margin: 30px 0 30px 0;
       font-size: 2em;
    }
    & h4{
        margin-top: 30px;
        font-size: 1.2em;
        
    }
`;

const LoginButton = styled.p`
    background: blue;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
    width: 220px;
    height: 40px;
    line-height: 40px;
    border-radius: 50px;
    cursor: pointer;
`;

const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;

    & > *{
        width: 90px;
        margin: 10px;
    }
`;

const AccountWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin : 0 auto;

    & .first-child{
        border-bottom: 0;
    }
    
    & > div{
        display: flex;
        border: 1px solid grey;
        width : 90%;
        max-width: 500px;
        
        & > span{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            font-size: 30px;
            border-right: 1px solid grey;
        }
      
        & > input{
            height: 50px;
            border-left: 0;
            flex-grow: 1;
            border: 0;
        }
    }

`;