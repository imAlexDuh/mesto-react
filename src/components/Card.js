import React from 'react';

function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.card)
    }

    return (
        <div className="elements__element">
            <img src={props.card.link} alt={props.card.name} className="elements__pic" onClick={handleCardClick} />
            <button className="elements__delete-button"></button>
            <div className="elements__card">
                <h2 className="elements__card-name">{props.card.name}</h2>
                <div className="elements__like">
                    <button className="elements__card-button"></button>
                    <span className="elements__card-count">{props.card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}



export default Card;