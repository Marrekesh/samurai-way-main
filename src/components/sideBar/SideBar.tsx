import React from 'react';
import c from './sideBar.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {

    return (
        <div className={c.sideBar}>
            <nav className={c.sideBar__nav}>
                <ul className={c.sideBar__ul}>
                    <li className={c.sideBar__item}>
                        <a className={c.sideBarLink} href="/">
                            <FontAwesomeIcon className={c.sidebarIcon} icon={faUser} />
                            <span>Моя страница</span>
                        </a>
                    </li>
                    <li className={c.sideBar__item}>
                        <a className={c.sideBarLink} href="/">
                            <FontAwesomeIcon className={c.sidebarIcon} icon={faUser} />
                            <span>Мои друзья</span>
                        </a>
                    </li>
                    <li className={c.sideBar__item}>
                        <a className={c.sideBarLink} href="/">
                            <FontAwesomeIcon className={c.sidebarIcon} icon={faUser} />
                            <span>Сообщения</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;