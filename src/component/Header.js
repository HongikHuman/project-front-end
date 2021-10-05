// import { Divider } from "antd";
import { HeartTwoTone, FileAddTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {

    return (
        <div>
            <section id="header">
                <div className="header-icons">
                    <div className="menu">
                        <ul>
                            <li><Link to="univside">대학 맛집</Link></li>
                            <li><Link to="hotpost">핫 게시판</Link></li>
                            <li><Link to="category">음식 카테고리</Link></li>
                        </ul>
                    </div>
                    <div className="logo">
                        <Link to="/">로고</Link>
                    </div>
                    <div className="click">
                        <ul>
                            <Link to="newpost">
                                <FileAddTwoTone />
                            </Link>
                            <Link to="likes">
                                <HeartTwoTone />
                            </Link>
                            {/* <Divider /> */}
                            <Link to="info">
                                <SmileTwoTone />
                            </Link>
                        </ul>
                    </div>
                </div>
                
            </section>
        </div>
    );

}

export default Header;