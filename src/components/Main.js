import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

    const [cards, setCardsData] = React.useState([]);
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");

    React.useEffect(() => {
        api.getAllData()
            .then(([userData, cards]) => {
                setCardsData(cards)
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })

            .catch((err) => {
                console.log(err);
            })

    }, [])
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-box">
                    <img src={userAvatar} alt="аватар" className="profile__avatar" />
                    <button
                        className="profile__avatar-button"
                        onClick={props.onEditAvatar}>
                    </button>
                </div>
                <div className="profile__info">
                    <div className="profile__author">
                        <h1 className="profile__author-name">{userName}</h1>
                        <p className="profile__author-info">{userDescription}</p>
                    </div>
                    <button
                        className="profile__edit-button"
                        onClick={props.onEditProfile}
                    >
                    </button>
                </div>
                <button
                    className="profile__button"
                    onClick={props.onAddPlace}
                >
                </button>
            </section>

            <section className="elements">
                {cards.map(card =>
                    <Card
                        key={card._id}
                        card={card}
                        onCardClick={props.onCardClick}
                    />
                )}
            </section>
        </main>
    )
}



export default Main;