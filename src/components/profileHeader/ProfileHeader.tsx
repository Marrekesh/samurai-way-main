import React from 'react';
import BackGroundImg from '../../img/icon/tramonto-a-sangineto — копия.jpg'
import Zaglushka from '../../img/icon/kartinki-zaglushki.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

import c from './profileHeader.module.css'


const ProfileHeader = () => {
    return (
        <div className={c.profileHeader}>
            <div className={c.backgroundImgBlock}>
                <img className={c.backgroundImg} src={BackGroundImg} alt="img"/>

            </div>
            <div className={c.profileHeaderContent}>
                <div className={c.profilePhotoWrapper}>
                    <img className={c.profilePhoto} src={Zaglushka} alt="photo"/>
                </div>


                <div className={c.infoBlock}>
                    <span className={c.name}>Дмитрий Доронин</span>
                    <div className={c.location}>
                        <FontAwesomeIcon className={c.locationIcon} icon={faLocationDot}/>
                        <span>Харлем</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;