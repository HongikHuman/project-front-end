// import { Divider } from "antd";
import { HeartTwoTone, FileAddTwoTone, SmileTwoTone } from '@ant-design/icons';
import './Header.css';
const Header = () => {

    return (
        <div>
            <section id="header">
                <div className="header-icons">
                    <div className="menu">
                        <ul>
                            <li><a href="#">대학 맛집</a></li>
                            <li><a href="#">핫 게시판</a></li>
                            <li><a href="#">음식 카테고리</a></li>
                        </ul>
                    </div>
                    <div className="logo">
                        <span>로고</span>
                    </div>
                    <div className="click">
                        <ul>
                            <a href="#" >
                                <FileAddTwoTone />
                            </a>
                            <a href="#" >
                                <HeartTwoTone />
                            </a>
                            {/* <Divider /> */}
                            <a href="#" >
                                <SmileTwoTone />
                            </a>
                        </ul>
                    </div>
                </div>
                
            </section>
        </div>
    );

}

export default Header;