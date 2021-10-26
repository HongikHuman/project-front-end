import React from 'react';
import styled from 'styled-components';

import {Form, Button, Col, Row } from 'react-bootstrap';

export default function Register(){
    return (
        <Container className="container">
            <LoginForm>
                <h2>회원가입</h2>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="Email">
                        <Form.Label column sm={2}>아이디</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="아이디(이메일)" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="Password">
                        <Form.Label column sm={2}>비밀번호</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="비밀번호" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="PasswordConfirm">
                        <Form.Label column sm={2}>비밀번호 확인</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="비밀번호 확인" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="Name">
                        <Form.Label column sm={2}>이름</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="이름" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="Phone">
                        <Form.Label column sm={2}>전화번호</Form.Label>
                        <Col sm={10}>
                        <Form.Control type="phone" placeholder="전화번호" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="Nickname">
                        <Form.Label column sm={2}>별명</Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" placeholder="별명" />
                        </Col>
                    </Form.Group>                    
                </Form> 
                <Button variant="primary" type="submit">회원가입</Button>
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
    width: 90%;
    border: 1px solid grey;
    border-radius: 10px;

    & form{
        max-width: 700px;
        margin: 0 auto;
    }
    & h2{
       margin: 30px 0 30px 0;
       font-size: 2em;
    }
    & h4{
        margin-top: 30px;
        font-size: 1.2em;
        
    }
`;