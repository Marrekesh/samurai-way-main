import React from 'react';
import Zaglushka from '../../img/icon/kartinki-zaglushki.png'
import c from './profileLink.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

const ProfileLink = () => {
    return (
        <div className={c.profileLink}>
            <img className={c.profileLink__img} src={Zaglushka} alt={'photo'}/>
            <FontAwesomeIcon className={c.profileLink__chevron} icon={faChevronDown}/>
        </div>
    );

};

export default ProfileLink;