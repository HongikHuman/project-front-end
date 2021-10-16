import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <FooterWrap>
            <InnerWrap>
                <div className="zmc-logo">
                    <Link to="/" className="title">
                        자맛추
                    </Link>
                    <p className="subtitle">자, 여기 맛집 추천!</p>
                </div>

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
        margin-bottom: 30px;
        padding-top: 15px;
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

    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
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

