import React, { useState } from 'react'
import './Profile.css'
import image from '../../images/BannerImageSquare.jpg'

export default function Profile() {
    const [person, setPerson] = useState({
        name: 'James Caldwell',
        elevatorPitch: 'Welcome to my site! I have been a full stack web developer for over 3 years, creating multiple sites in different technologies. In the past year, I have increasingly used ReactJS, creating my own React portfolio. Woot, woot...React is fun!',
        favoriteTech: 'ReactJS',
        favoriteFood: 'Sushi',
        favoriteShow: 'Brooklyn Nine Nine',
        favoriteQuote: "Dreams don't work unless you do",
        favQuoteAuthor: 'John Maxwell'
    })
    return (
        <section className="profile">
            <div className="profileCard">
                <h2>{person.name}</h2>
                <img src={image} alt="My ugly mug!" />
                <p className="elevatorPitch">{person.elevatorPitch}</p>
                <h3>Fun Facts</h3>
                <article className="funFacts">
                    <p><strong>Fav Tech:</strong> {person.favoriteTech}</p>
                    <p><strong>Fav Food:</strong> {person.favoriteFood}</p>
                    <p><strong>Fav TV Show:</strong> {person.favoriteShow}</p>
                </article>
                <h3>Favorite Quote</h3>
                <p className="quote">
                    <em>"{person.favoriteQuote}"</em><br/>
                    <span>~{person.favQuoteAuthor}~</span>
                </p>
            </div>
        </section>
    )
}
