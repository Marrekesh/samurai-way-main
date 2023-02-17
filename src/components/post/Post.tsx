import React from 'react';
import Avatar from "../avatar/Avatar";

import c from './post.module.css'

const Post = () => {
    return (
        <div className={c.post}>
            <div className={c.infoBlock}>
                <div className={c.personalBlock}>
                    <Avatar size={'small'}/>
                    <span className={c.date}>06.11.2022</span>
                </div>
                <div className={c.name}>Dmytro Doronin</div>
            </div>
            <div className={c.title}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto blanditiis consequuntur
                deserunt eligendi, error et exercitationem facilis maxime modi molestiae molestias placeat
                possimus quia quis ratione reiciendis sapiente suscipit vel veniam. At doloribus enim est
                itaque iusto nulla provident quae, rem! Animi at eius error et exercitationem, nulla quos.
            </div>

        </div>
    );
};

export default Post;