import React from 'react';
import Univlogo from './Univlogo';
import Card from './Card';
//import {CaretLeftOutlined, CaretRightOutlined} from '@ant-design/icons'

import Carousel from 'react-multi-carousel';


export default function Main(){
    return(
        <div>
            <div className="famous-univ">
                <h1>인기 대학가 TOP 3</h1>
                <div className="famous-univ-list">
                    <Univlogo width="150" height="150" url="http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"></Univlogo>
                    <Univlogo width="200" height="200" url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Hongik_University.svg/220px-Hongik_University.svg.png"></Univlogo>
                    <Univlogo width="150" height="150" url="https://yt3.ggpht.com/ytc/AKedOLRFcmdD21kZiNp9WwKMlYxxP5t5mH8X1byYBvYMxw=s900-c-k-c0x00ffffff-no-rj"></Univlogo>
                </div>
            </div>

            <div className="supported-univ">
                <h1>지원 대학 리스트</h1>
                <div className="supported-univ-list">
                    <Univlogo width="150" height="150" url="http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"></Univlogo>
                    <Univlogo width="150" height="150" url="http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"></Univlogo>
                    <Univlogo width="150" height="150" url="http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"></Univlogo>
                    <Univlogo width="150" height="150" url="http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"></Univlogo>
                    <Univlogo width="150" height="150" url="http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"></Univlogo>
                    <Univlogo width="150" height="150" url="http://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"></Univlogo>
                </div>
            </div>


            <div className="weekly-hot-post">
                <h1>이번 주 HOT 게시글</h1>

                <Carousel 
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                >
                <Card text="우리집맛집"></Card> 
                        <Card text="신촌맛집"></Card> 
                        <Card text="이태원맛집"></Card> 
                        <Card text="성신여대맛집"></Card> 
                        <Card text="이대맛집"></Card> 
                        <Card text="강서맛집"></Card> 
                        <Card text="홍대맛집"></Card> 
                        <Card text="성수맛집"></Card> 
                        <Card text="건대맛집"></Card>
                </Carousel>;

            </div>
        </div>
    );
}

//button on click
const onClickEvent = (direction)=>{
    const $elem = document.querySelector(".weekly-hot-post-list");
    if(direction === "right"){
        $elem.scrollLeft += $elem.scrollWidth / 3;
    } else if(direction ==="left"){
        $elem.scrollLeft -= $elem.scrollWidth / 3;
    }
}

//carousel responsive
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };