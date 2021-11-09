import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';

const Pagination = (props) => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props; // 각각 아이템(영화목록) 개수, 한 페이지에 보여줄 아이템(영화목록) 개수

    const pageCount = Math.ceil(itemsCount / pageSize); // 몇 페이지가 필요한지 계산
    if (pageCount === 1) return null; // 1페이지 뿐이라면 페이지 수를 보여주지 않음

    const pages = _.range(1, pageCount + 1); // 마지막 페이지에 보여줄 컨텐츠를 위해 +1, https://lodash.com/docs/#range 참고

    return (
        <nav> {/* VSCode 입력: nav>ul.pagination>li.page-item>a.page-link */}
        <ul className="pagination">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous" onClick={() => onPageChange(currentPage - 1)}>
                    <span aria-hidden="true">&lt;</span>
                </a>
            </li>
            {pages.map(page => (
            <li 
                key={page} 
                className={page === currentPage ? "page-item active" : "page-item"} // Bootstrap을 이용하여 현재 페이지를 시각적으로 표시
                style={{ cursor: "pointer" }}>
                <a className="page-link" onClick={() => onPageChange(page)}>{page}</a> {/* 페이지 번호 클릭 이벤트 처리기 지정 */}
            </li>
            ))}
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next" onClick={() => onPageChange(currentPage + 1)}>
                    <span aria-hidden="true">&gt;</span>
                </a>
            </li>
        </ul>
        </nav>
    );
};

export default Pagination;