import React from 'react'
import Card from './Card'
import './index.css'


export default function Stack() {
    return (
        <section className="board">
            <div className="board__wrap">
                <h3>Assigned</h3>
                <div className="board__section">
                    <Card />
                </div>
            </div>
        </section>
    )
}