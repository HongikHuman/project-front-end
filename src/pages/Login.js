import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {Form, Button, InputGroup, Row, Pagination, Modal} from 'react-bootstrap';

export default function Login(){
    
    const isInvalid = (val)=>{
        if(val.length > 0) return true;
        else return false;
    }

    return (
        

        <Container className="container">
            <LoginForm>
                <Form>
                    <h2>로그인</h2>
                    <p>자맛추 회원이 되어 더 많은 기능을 사용해보세요!</p>

                    <LoginButton>페이스북으로 계속하기</LoginButton>
                    <LoginButton>카카오톡으로 계속하기</LoginButton>
                    <LoginButton>Apple로 계속하기</LoginButton>
                </Form>
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
    width: 75%;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 50px;

    & h2{
       margin-bottom: 30px;
       font-size: 2em;
    }
    & h4{
        margin-top: 50px;
        font-size: 1em;
    }
`;

const LoginButton = styled.p`
    background: blue;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
    width: 250px;
    height: 40px;
    line-height: 40px;
    border-radius: 50px;
    cursor: pointer;
`;