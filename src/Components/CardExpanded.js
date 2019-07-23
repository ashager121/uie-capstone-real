import React from 'react'
import '../index.css'
import Photo from './assetts/user.png'

export default function Overlay() {
    return (
        <section className="board">
            <div className="board__overlay">
                <h3>Assigned</h3>
                <h4>Due: 01/01/01</h4>
                <p>Task description goes here. Scott honks are the new greatest meme and this is just placeholder text for the lulz.</p>
                <div className="profilePhotos">
                    <img src={Photo} alt="Photo" />
                    <img src={Photo} alt="Photo" />
                    <img src={Photo} alt="Photo" />
                    <img src={Photo} alt="Photo" />
                    <img src={Photo} alt="Photo" />
                    <img src={Photo} alt="Photo" />
                </div>
                <div className="comments">
                    <div className="comments">
                        <img src={Photo} alt="Photo" />
                        <h6>User Name</h6>
                        <p>User comment about project status or issue. Whatever they need it to be.</p>
                    </div>
                </div>
                <input></input>
                {/* <div className="board__section">
                </div> */}
            </div>
        </section>
    )
}