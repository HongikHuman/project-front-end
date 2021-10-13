import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <FooterWrap>
            <InnerWrap>
                <div className="zmc-logo">
                    <Link to="/" className="title" >
                        자맛추
                    </Link>
                    <p className="subtitle">자, 여기 맛집 추천!</p>
                </div>

                <p className="sns-shortcut">
                    <Link className="btn facebook" to="https://www.facebook.com/mangoplate" target="_blank" onClick="trackEvent('CLICK_SHARE_FACEBOOK');">
                        자맛추 페이스북 계정으로 바로가기
                    </Link>

                    <Link className="btn instagram" to="https://instagram.com/mangoplate/" target="_blank" onClick="trackEvent('CLICK_SHARE_INSTA');">
                        자맛추 인스타그램 계정으로 바로가기
                    </Link>
                </p>

                <nav className="links-external">
                    <ul className="list-links">
                        <li>
                            <Link to="/company">
                                회사소개
                            </Link>
                        </li>

                        <li>
                            <Link to="/careers">
                                자맛추 채용
                            </Link>
                        </li>

                            <li>
                            <Link to="/investment">
                                투자 정보
                            </Link>
                            </li>

                        <li className="only-desktop">
                            <Link to="/etc/download_company_ci" target="_blank">
                                브랜드 가이드라인
                            </Link>
                        </li>

                        <li>
                            <Link to="https://www.mangoforbiz.com/?utm_campaign=main_bottom_business&amp;utm_medium=bizhome&amp;utm_source=web" target="_blank">
                                자맛추 비즈니스
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="https://www.mangoforbiz.com/?utm_campaign=20180116v1&amp;utm_medium=main_bottom_adinquiry&amp;utm_source=mp_web" target="_blank">
                                광고 문의
                            </Link>
                        </li>

                    </ul>

                    <ul className="list-links">
                        <li>
                            <Link to="/notice" target="_blank">
                                공지사항
                            </Link>
                        </li>

                        <li>
                            <Link className="" to="/terms/contract" onClick="trackEvent('CLICK_TERMS', 'contract')" target="_blank">
                                이용약관
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="/terms/contract_non_signup" onClick="trackEvent('CLICK_TERMS', 'contract_non_signup')" target="_blank">
                                비회원 이용자 이용정책
                            </Link>
                        </li>
                        <li>
                            <Link className="bold" to="/terms/privacy" onClick="trackEvent('CLICK_TERMS', 'privacy')" target="_blank">
                                개인정보처리방침
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="/terms/location" onClick="trackEvent('CLICK_TERMS', 'location')" target="_blank">
                                위치기반서비스 이용약관
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="/terms/community_guidelines" onClick="trackEvent('CLICK_TERMS', 'community_guidelines')" target="_blank">
                                커뮤니티 가이드라인
                            </Link>
                        </li>
                        <li>
                            <Link className="" to="/terms/youth_protection" onClick="trackEvent('CLICK_TERMS', 'youth_protection')" target="_blank">
                                청소년보호정책
                            </Link>
                        </li>

                        <li>
                            <Link to="https://brunch.co.kr/@mangoplate/14" target="_blank">
                                홀릭 소개
                            </Link>
                        </li>

                        <li>
                            <Link to="/company#contact">
                                문의하기
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="sitemap-location-keywords">
                    <div className="keyword_wrap">
                        <span className="keyword">자맛추 지원 학교</span>
                        <br /><br />
                        <Link className="keyword" target="_blank" to="/search/가톨릭" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:0,&quot;keyword&quot;:&quot;이태원&quot;})">
                            가톨릭대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/건대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:1,&quot;keyword&quot;:&quot;홍대&quot;})">
                            건대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/경희대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:2,&quot;keyword&quot;:&quot;강남역&quot;})">
                            경희대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/고려대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:3,&quot;keyword&quot;:&quot;가로수길&quot;})">
                            고려대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/국민대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:4,&quot;keyword&quot;:&quot;신촌&quot;})">
                            국민대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/덕성여대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:5,&quot;keyword&quot;:&quot;명동&quot;})">
                            덕성여대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/동국대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:6,&quot;keyword&quot;:&quot;대학로&quot;})">
                            동국대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/동덕여대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:7,&quot;keyword&quot;:&quot;연남동&quot;})">
                            동덕여대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/명지대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:8,&quot;keyword&quot;:&quot;부산&quot;})">
                            명지대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/삼육대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:9,&quot;keyword&quot;:&quot;합정&quot;})">
                            삼육대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/상명대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:10,&quot;keyword&quot;:&quot;대구&quot;})">
                            상명대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/서강대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:11,&quot;keyword&quot;:&quot;여의도&quot;})">
                            서강대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/성균관대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:12,&quot;keyword&quot;:&quot;건대&quot;})">
                            성균관대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/성신여대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:13,&quot;keyword&quot;:&quot;광화문&quot;})">
                            성신여대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/세종대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:14,&quot;keyword&quot;:&quot;일산&quot;})">
                            세종대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/숙명여대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:15,&quot;keyword&quot;:&quot;제주&quot;})">
                            숙명여대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/숭실대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:16,&quot;keyword&quot;:&quot;경리단길&quot;})">
                            숭실대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/연세대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:17,&quot;keyword&quot;:&quot;한남동&quot;})">
                        연세대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/이화여대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:18,&quot;keyword&quot;:&quot;삼청동&quot;})">
                            이화여대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/중앙대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:19,&quot;keyword&quot;:&quot;대전&quot;})">
                            중앙대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/한국외대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:20,&quot;keyword&quot;:&quot;종로&quot;})">
                            한국외대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/한성대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:21,&quot;keyword&quot;:&quot;서촌&quot;})">
                            한성대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/한신대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:22,&quot;keyword&quot;:&quot;잠실&quot;})">
                            한신대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/힌양대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:23,&quot;keyword&quot;:&quot;사당역&quot;})">
                            한양대
                        </Link>
                        |
                        <Link className="keyword" target="_blank" to="/search/홍익대" onClick="trackEvent('CLICK_FOOTER_POPULAR_LOCATION', {&quot;position&quot;:24,&quot;keyword&quot;:&quot;인천&quot;})">
                            홍대
                        </Link>
                    </div>
                </div>

                <div className="language-copyrights">
                    <p className="select-language">
                        <Link to="/" className="selected">
                        한국어
                        </Link>

                        <Link to="/en">
                        English
                        </Link>

                        <Link to="/zh">
                        简体中文
                        </Link>
                    </p>

                    <small>
                        <p> 
                            ㈜ 고스락컴퍼니<br />서울특별시 마포구 상수동 와우산로 94<br />대표이사: 채승희<br />사업자 등록번호: 02-320-1114 <Link to="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=7428600224" target="_blank">[사업자정보확인]</Link><br />고객센터: 02-123-4567<br /><br />
                        <span className="copyrights">© 2021 Zamatchew Co., Ltd. All rights reserved.</span>
                        </p>
                    </small>
                </div>
            </InnerWrap>
        </FooterWrap>
    );
};

const FooterWrap = styled.div`
    position: relative;
    background-color: #3e3e3e;
    text-align: left;
    display: block;
`;

const InnerWrap = styled.div`
    margin: 0 auto;
    padding-top: 65px;
    min-height: 430px;
    max-width: 1200px;
    position: relative;

    & .zmc-logo {
        display: inline-block;
        margin-right: 168px;
        vertical-align: top;
    }

    & .zmc-logo .title{
        text-decoration: none;
        color: white;
        font-size: 70px;
        font-family: 'NanumAGiSaRangCe';
    }

    & .zmc-logo .subtitle {
        display: block;
        position: relative;
        margin-top: 10px;
        margin-left: 5px;
        padding-top: 15px;
        font-size: 0.875rem;
        color: #6a6a6a;
    }

    & .sns-shortcut {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    & .sns-shortcut .btn {
        margin-left: 30px;
        display: inline-block;
        text-indent: -9999px;
    }

    & .sns-shortcut .btn.facebook {
        background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png);
        background-position: -106px -866px;
        width: 46px;
        height: 46px;
    }

    & .sns-shortcut .btn.instagram {
        background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png);
        background-position: -259px -866px;
        width: 46px;
        height: 46px;
    }

    & .links-external {
        display: inline-block;
        width: 614px;
        margin-bottom: 10px;
        overflow: hidden;
    }

    & .links-external .list-links{
        float: left;
    }
    
    & .links-external .list-links > li > a{
        text-decoration: none;
        font-size: 1rem;
        line-height: 35px;
        color: #9b9b9b;
    }
    
    & .sitemap-location-keywords {
        margin-bottom: 30px;
        padding-top: 15px;
        border-top: 1px solid #6a6a6a;
        color: #9b9b9b;
    }

    & .sitemap-location-keywords .keyword_wrap {
        font-size: 15px;
        line-height: 23px;
        word-break: keep-all;
    }

    & .sitemap-location-keywords .keyword_wrap .keyword {
        color: #9b9b9b;
        text-decoration: none;
        padding: 0 10px 0 10px
    }

    & .language-copyrights {
        position: relative;
        border-top: 1px solid #6a6a6a;
        padding: 36px 0 42px 0;
    }

    & .language-copyrights .select-language {
        position: absolute;
        top: 47px;
        right: 0;
    }

    & .language-copyrights .select-language a {
        color: #9b9b9b;
    }

    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    & .language-copyrights .select-language a.selected {
        color: #ffffff;
        border-left: 0px;
    }

    & .language-copyrights .select-language a {
        font-size: 1rem;
        text-decoration: none;
        border-left: 1px solid #6a6a6a;
        padding: 0 10px 0 10px
    }

    & .language-copyrights  small {
        font-size: 0.875rem;
        line-height: 22px;
        display: block;
        color: #9b9b9b;      
    }

    & small a {
        font-weight: bold;
        text-decoration: underline;
        color: #9b9b9b;
    }
`;

