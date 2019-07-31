import React from 'react';
import './../sass/App.scss';

const Avatar = (props) => {
    return (

        <div
            className="UserAvatars"
            onClick={props.setAvatar}
        >
            <a className="imageAnchor" href='javascript: void(0)'>
                <img src={props.image} alt="useravatar" />
            </a>
        </div>

    )
}

export default Avatar

