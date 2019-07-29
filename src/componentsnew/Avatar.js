import React from 'react';
import './../sass/App.scss';

const Avatar = (props) => {
    return (
        <div
            className="UserAvatars"
            onClick={props.setAvatar}
        >
            <img src={props.image} alt="useravatar" />
        </div>
    )
}

export default Avatar

