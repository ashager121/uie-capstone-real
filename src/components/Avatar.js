import React from 'react';
import './../sass/App.scss';
import crab from './../assets/avatars/crab.svg';

export default function Avatar() {
    return (
        <div className="UserAvatars">
            <img src={crab} alt="useravatar" />
        </div>
    )
}
