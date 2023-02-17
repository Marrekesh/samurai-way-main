import React from 'react';
import AvatarC from '../../img/icon/kartinki-zaglushki.png'

import c from './avatar.module.css'

type AvatarTypes = {
    size: string
}

const Avatar = ({size}: AvatarTypes) => {

    const styles = size === 'big' ? `${c.avatar} ${c.avatarBig}` : `${c.avatar} ${c.avatarMini} ${c.avatarMar5}`

    return (
        <>
            <img className={styles} src={AvatarC} alt="avatar"/>
        </>
    );
};

export default Avatar;