import React from "react";
import {
    Switch,
    Route,
  } from 'react-router-dom';

import Main from './pages/Main';
import Top10_page from './pages/Top10_page';
import Univside from './pages/Univside';
import Hot_Posts from './pages/HotPosts';

import MyPage from './pages/MyPage';
import MyLikes from './pages/MyLikes';
import WritePost from './pages/WritePost';
import Restaurant from './pages/RestaurantPage';
import History from './pages/History';
import Register from './pages/Register';
import TimeSearchPage from './pages/TimeSearchPage';
import TimeSearchBanner from "./component/TimeSearchBanner";

export default function Router(){
    const db_restaurants = [
        {res_id: 1, name: '히메시야', address: '서울특별시 마포구 상수동 독막로15길 3-18', likes: 1232, wish: 200, reviews: 10, img_url: 'https://t1.daumcdn.net/cfile/tistory/2345FA3A57BCE6A30F', tel: '02-320-1114', foodtype: '한식', parking: '가능', reserve: '가능', s_time: '07:00', f_time: '22:00', site: 'www.hongik.ac.kr', famousfood: ['소주', '맥주', '양주'], foodprice: ['4000', '5000', '30000'], holiday: ['토요일', '일요일'], roadmap: 'https://cdn.clien.net/web/api/file/F01/8094580/170483b9aef273.png?w=780&h=30000'},
        {res_id: 2, name: '소코아', address: '서울특별시 마포구 서교동 와우산로15길 49', likes: 1045, wish: 200, reviews: 10, img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXhb8%2FbtqBAWUQRF2%2FYiD5cEBs9CllWke7FjsDu0%2Fimg.jpg', tel: '02-320-1114', foodtype: '한식', parking: '가능', reserve: '가능', s_time: '07:00', f_time: '22:00', site: 'www.hongik.ac.kr', famousfood: ['소주', '맥주', '양주'], foodprice: ['4000', '5000', '30000'], holiday: ['토요일', '일요일'], roadmap: 'https://cdn.clien.net/web/api/file/F01/8094580/170483b9aef273.png?w=780&h=30000'},
        {res_id: 3, name: '카미야', address: '서울특별시 마포구 서교동 와우산로21길 28-6', likes: 978, wish: 200, reviews: 10, img_url: 'https://img.siksinhot.com/article/1456730835391124.jpg', tel: '02-320-1114', foodtype: '한식', parking: '가능', reserve: '가능', s_time: '07:00', f_time: '22:00', site: 'www.hongik.ac.kr', famousfood: ['소주', '맥주', '양주'], foodprice: ['4000', '5000', '30000'], holiday: ['토요일', '일요일'], roadmap: 'https://cdn.clien.net/web/api/file/F01/8094580/170483b9aef273.png?w=780&h=30000'},
        {res_id: 4, name: '치치', address: '서울특별시 마포구 서교동 360-19', likes: 850, wish: 200, reviews: 10, img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs53Kq%2FbtqMwnbSbDb%2FSbE35SWptxeBDiqChDKiEK%2Fimg.jpg', tel: '02-320-1114', foodtype: '한식', parking: '가능', reserve: '가능', s_time: '07:00', f_time: '22:00', site: 'www.hongik.ac.kr', famousfood: ['소주', '맥주', '양주'], foodprice: ['4000', '5000', '30000'], holiday: ['토요일', '일요일'], roadmap: 'https://cdn.clien.net/web/api/file/F01/8094580/170483b9aef273.png?w=780&h=30000'},
        {res_id: 5, name: '코다차야', address: '서울특별시 마포구 상수동 와우산로 48', likes: 799, wish: 200, reviews: 10, img_url: 'https://t1.daumcdn.net/cfile/tistory/232FA13A52EF493925', tel: '02-320-1114', foodtype: '한식', parking: '가능', reserve: '가능', s_time: '07:00', f_time: '22:00', site: 'www.hongik.ac.kr', famousfood: ['소주', '맥주', '양주'], foodprice: ['4000', '5000', '30000'], holiday: ['토요일', '일요일'], roadmap: 'https://cdn.clien.net/web/api/file/F01/8094580/170483b9aef273.png?w=780&h=30000'},
        {res_id: 6, name: '광안리', address: '서교동 396-44번지 하동 1층 마포구 서울특별시 KR', likes: 729, wish: 200, reviews: 10, img_url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNVCxf%2FbtqK2YEGvLt%2FkPN1iP54SLYHdQdCBD0Yb0%2Fimg.jpg', tel: '02-320-1114', foodtype: '한식', parking: '가능', reserve: '가능', s_time: '07:00', f_time: '22:00', site: 'www.hongik.ac.kr', famousfood: ['소주', '맥주', '양주'], foodprice: ['4000', '5000', '30000'], holiday: ['토요일', '일요일'], roadmap: 'https://cdn.clien.net/web/api/file/F01/8094580/170483b9aef273.png?w=780&h=30000'},
        {res_id: 7, name: '노가리 천원', address: '서울특별시 마포구 서교동 어울마당로 149-3', likes: 603, wish: 200, reviews: 10, img_url: 'https://t1.daumcdn.net/cfile/tistory/275F6E3B57472E300A', tel: '02-320-1114', foodtype: '한식', parking: '가능', reserve: '가능', s_time: '07:00', f_time: '22:00', site: 'www.hongik.ac.kr', famousfood: ['소주', '맥주', '양주'], foodprice: ['4000', '5000', '30000'], holiday: ['토요일', '일요일'], roadmap: 'https://cdn.clien.net/web/api/file/F01/8094580/170483b9aef273.png?w=780&h=30000'},
        {res_id: 8, name: '동경야시장', address: '서울특별시 마포구 서교동 어울마당로 144', likes: 505, wish: 200, reviews: 10, img_url: 'https://3.bp.blogspot.com/-ZixoRowq_MQ/Wkv2MbKyZtI/AAAAAAAAADU/SHcd9K1pCeMZxWs8hL37VBFrD51UtcieQCLcBGAs/s1600/SAM_0495.JPG', tel: '02-320-1114', foodtype: '한식', parking: '가능', reserve: '가능', s_time: '07:00', f_time: '22:00', site: 'www.hongik.ac.kr', famousfood: ['소주', '맥주', '양주'], foodprice: ['4000', '5000', '30000'], holiday: ['토요일', '일요일'], roadmap: 'https://cdn.clien.net/web/api/file/F01/8094580/170483b9aef273.png?w=780&h=30000'},
    ]
    
    return(

        <Switch>
          <Route path="/univside/:universityName" exact component={Univside}/>
          <Route path="/top10" exact component={Top10_page}/>
          <Route path="/hotpost" exact component={Hot_Posts}/>
          <Route path="/restaurant" exact><Restaurant resInfo={db_restaurants[1]}/></Route>
          <Route path="/univside" exact component={Univside}/>
          <Route path="/" exact component={Main}/>

          <Route path="/time-search/list" exact component={TimeSearchPage}/>

          <Route path="/writepost" exact component={WritePost}/>
          <Route path="/likes" exact component={MyLikes}></Route>
          <Route path="/register" exact component={Register}/>

          <Route path="/my/history" exact component={History}></Route>

          <Route path="/my/edit" exact>
            <MyPage link='edit'/>
          </Route>
          <Route path="/my/post" exact>
            <MyPage link='post'/>
          </Route>
          <Route path="/my/reply" exact>
            <MyPage link='reply'/>
          </Route>
          <Route path="/my/likes" exact>
            <MyPage link='likes'/>
          </Route>
          <Route path="/logout" exact>
            <Main />
          </Route>

          <Route><h1>404 NOT FOUND</h1></Route>
        </Switch>                              
    );
}