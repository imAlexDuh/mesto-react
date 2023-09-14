import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {

    const [cards, setCardsData] = React.useState([]);
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        api.getCardsInfo()
            .then((data) => {
                setCardsData(data);
            })

            .catch((err) => {
                console.log(err);
            })

    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                const newCards = cards.map((currentCard) => currentCard._id === card._id ? newCard : currentCard);
                setCardsData(newCards);
            })

            .catch((err) => {
                console.log(err);
            })
    }

    function handleCardDelete(card) {
        api.delete(card._id)
            .then(() => {
                const newCards = cards.filter((elem) => elem !== card);
                setCardsData(newCards);
            })

            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-box">
                    <img src={currentUser.avatar} alt="аватар" className="profile__avatar" />
                    <button
                        className="profile__avatar-button"
                        onClick={props.onEditAvatar}>
                    </button>
                </div>
                <div className="profile__info">
                    <div className="profile__author">
                        <h1 className="profile__author-name">{currentUser.name}</h1>
                        <p className="profile__author-info">{currentUser.about}</p>
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
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                )}
            </section>
        </main>
    )
}



export default Main;