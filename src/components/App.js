import '../index.css';
import React from 'react';
import logo from '../images/vector.svg';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isImgPopupOpen, setIsImgPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState([]);

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function closeAllPopups() {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setIsImgPopupOpen(false);
    }

    function handleCardClick(card) {
        setIsImgPopupOpen(true);
        setSelectedCard(card);
    }

    return (
        <>
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick} />
            <Footer />

            <PopupWithForm
                name="edit-popup"
                title="Редактировать профиль"
                children={
                    <>
                        <input name="name" type="text" placeholder="Имя" id="profile-name"
                            className="popup__text popup__text-name" required minLength="2" maxLength="40" />
                        <span className="popup__input-error" id="profile-name-error"></span>
                        <input name="about" type="text" placeholder="Вид деятельности" id="profile-info"
                            className="popup__text popup__text-info" required minLength="2" maxLength="200" />
                        <span className="popup__input-error" id="profile-info-error"></span>
                    </>
                }
                buttonsName="Сохранить"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups} />

            <PopupWithForm
                name="add-popup"
                title="Новое место"
                children={
                    <>
                        <input name="name" type="text" id="photo-name" placeholder="Название"
                            className="popup__text popup__text-name" required minLength="2" maxLength="30" />
                        <span className="popup__input-error" id="photo-name-error"></span>
                        <input name="link" type="url" id="photo-link" placeholder="Ссылка на картинку"
                            className="popup__text popup__text-img" required />
                        <span className="popup__input-error" id="photo-link-error">Введите URL.</span>
                    </>
                }
                buttonsName="Создать"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups} />

            <PopupWithForm
                name="avatar-popup"
                title="Обновить аватар"
                children={
                    <>
                        <input name="link" type="url" id="avatar-link" placeholder="Ссылка на картинку"
                            className="popup__text popup__text-img" required />
                        <span className="popup__input-error" id="avatar-link-error">Введите URL.</span>
                    </>
                }
                buttonsName="Сохранить"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups} />

            <ImagePopup
                card={selectedCard}
                isOpen={isImgPopupOpen}
                onClose={closeAllPopups}
            />
        </>
    );
}

export default App;
