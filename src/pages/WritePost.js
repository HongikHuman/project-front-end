import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import {Form, Image, Button} from 'react-bootstrap';

export default function WritePost(){
    
    return (
        <Container className="container">
            <h1>글 쓰기</h1>
            <PostWrap>
                <Form style={{margin: '0 auto'}}>
                    <Form.Group className="mb-3" controlId="postTitle">
                        <Form.Control type="email" placeholder="제목" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="postArticle">
                        <Form.Control as="textarea" rows={20} placeholder="내용을 작성해주세요" style={{resize: 'none'}}/>
                    </Form.Group>

                    <Form.Label>사진을 추가해보세요</Form.Label>
                    <PhotoItemsWrap>
                        <PhotoItems/>
                    </PhotoItemsWrap>

                    <Button type="submit">작성</Button>
                </Form>
            </PostWrap>
        </Container>
    );
};




const Container = styled.div`
    margin: 0 auto;
    margin-bottom: 150px;

`;

const PostWrap = styled.div`
    margin: 0 auto;
    width: 80%;
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

const PhotoItemsWrap = styled.ul`
    display: flex;
    align-items: start;

    padding: 0;
    margin: 0 0 30px 0;

    & > *{
        margin: 3px;
    }

    flex-wrap: wrap;
`;

const PhotoWrap = styled.div`
    width: 100px;
    height: 100px;
    & > img{
        width: 100%;
        height: 100%;
    }
`;

const PhotoAddButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dotted black;
    width: 100px;
    height: 100px;
    cursor: pointer;
    background: transparent;
    color: grey;
    opacity: 0.5;
    font-size: 50px;

    & > p{
        margin: 0 auto;
    }
`;

const PhotoItems = () => {
    const [uploadedFile, setUploadedFile] = useState([]); //현재까지 업로드한 파일들
    const inputRef = useRef();
  
    useEffect(()=>{
    }, [uploadedFile]);

    const handleUpload = () => {
      inputRef.current?.click();
    };
    const handleDisplayFileDetails = () => {
        inputRef.current?.files &&
        setUploadedFile([...uploadedFile, inputRef.current.files[0]]);
    };
    return (
        <>
            {
            uploadedFile.map((item, idx)=>{
                console.log(item);
                return(
                    <li>
                        <PhotoWrap>
                            <Image key={idx} src={URL.createObjectURL(item)}></Image>
                        </PhotoWrap>
                    </li>
                );
            })
            }
            <li>
                <PhotoAddButton onClick={()=>handleUpload()}>
                    <input
                    ref={inputRef}
                    onChange={handleDisplayFileDetails}
                    className="d-none"
                    type="file"
                    accept="image/*"
                    />
                    <p>+</p>
                </PhotoAddButton>
            </li>
        </>
    );
}
