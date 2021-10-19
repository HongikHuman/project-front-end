import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Button, ToggleButtonGroup, ToggleButton, Form, Card, Col, Row, Pagination, Modal} from 'react-bootstrap';


export default function LoginModal(props){
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
                로그인
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>

            </Modal.Body>

            <Modal.Footer>
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
`