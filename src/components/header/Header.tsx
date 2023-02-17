import React from 'react';
import s from './header.module.css'
import logo from '../../img/icon/VK_Monochrome_Logo_t.png'
import Form from "../ui/form/Form";
import Input from "../ui/input/Input";
import c from '../ui/input/input.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faMusic} from "@fortawesome/free-solid-svg-icons";
import ProfileLink from "../profileLink/ProfileLink";

const Header = () => {

    return (
        <div className={s.headerContent}>
            <div className={s.pageHeaderWrap}>
                <header className={s.pageHeader}>
                    <ul className={s.headerNav}>
                        <li className={s.headerNavItem}>
                            <a className={s.topHomeLink} href="/">
                                <img className={s.headerNavItem__Logo} src={logo} alt="logo"/>
                                ВКОНТАКТЕ
                            </a>
                        </li>
                        <li className={`${s.headerNavItem} ${s.headerNav__search}`}>
                            <Form>
                                <Input className={c.searchInput} placeholder={'Поиск'}/>
                            </Form>
                        </li>
                        <li className={`${s.headerNavItem} ${s.headerNav__btns}`}>
                            <FontAwesomeIcon className={s.headerNav__btn} icon={faBell} />
                            <FontAwesomeIcon className={s.headerNav__btn} icon={faMusic} />

                        </li>
                        <li className={s.headerNavItem}></li>
                        <li className={s.headerNavItem}>
                            <ProfileLink/>
                        </li>
                    </ul>
                </header>
            </div>
        </div>
    );
};

export default Header;