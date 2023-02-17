import React from 'react';
import Header from "../../components/header/Header";
import SideBar from "../../components/sideBar/SideBar";
import MyPage from "../myPage/MyPage";

import c from './authorizedPage.module.css'

const AuthorizedPage = () => {
    return (
        <div className={c.authorizedPage}>
            <div className={c.wrapper}>
                <div className={c.contentBlock}>
                    <SideBar/>
                    <MyPage/>
                </div>
            </div>
        </div>
    );
};

export default AuthorizedPage;