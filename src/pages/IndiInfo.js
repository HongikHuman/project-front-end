import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {Form, ListGroup, Button, Col, Row, Pagination, Modal} from 'react-bootstrap';

export default function Login(){

    return (
        

        <Container className="container">
            <MenuList>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active>내 정보</ListGroup.Item>
                    <ListGroup.Item as="li">내 게시글</ListGroup.Item>
                    <ListGroup.Item as="li">내 댓글</ListGroup.Item>
                    <ListGroup.Item as="li">좋아요한 게시글</ListGroup.Item>
                    <ListGroup.Item as="li">로그아웃</ListGroup.Item>
                </ListGroup>
            </MenuList>
            <Prime>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>아이디</Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>비밀번호</Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalNickname">
                    <Form.Label column sm={2}>닉네임</Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="닉네임" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalNickname">
                    <Form.Label column sm={2}>학교인증</Form.Label>
                    <Col sm={10}>
                        <Form.Text>인증이 완료되었습니다</Form.Text>
                    </Col>
                </Form.Group>
            </Prime>
        </Container>
    );


};

const Container = styled.div`
    display: flex;
    align-items: top;
    margin: 0 auto;
    margin-bottom: 150px;
`;

const MenuList = styled.div`
    min-width: 120px;
`;

const Prime = styled.div`
    padding: 20px;
    flex-grow: 1;
    border: 1px solid grey;
`;

const MyInfo = styled.div`

`;