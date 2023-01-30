import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const result = useSelector((state) => state.resultSlice.resultItems);
    function setResultZero() {
        return result = []
    }
    return (
        <div className="header">
            <div className="header__left">
                    <Link to='/' className="Link header__left-title" style={{textDecoration: 'none'}} >Твій словник</Link>
            </div>
            <div className="header__right">
                <div className="header__right-newTry">
                    <Link to='/testpage' className="Link" style={{textDecoration: 'none'}} onClick={setResultZero}>
                        <span>Почати тест</span>
                    </Link>
                </div>
                <div className="header__right-addWord">
                    <Link to='/addword' className="Link" style={{textDecoration: 'none'}}>
                        <span>Додати нове слово</span>
                    </Link>
                </div>
                <div className="header__right-addWord">
                    <Link to='/result' className="Link" style={{textDecoration: 'none'}}>
                        <span>Результат</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
