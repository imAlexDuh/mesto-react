import '../index.css';
import React from 'react';
import logo from '../images/vector.svg';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';

function App() {

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

    function handleEditProfileClick() {
        setEditProfilePopupOpen(!isEditProfilePopupOpen);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(!isAddPlacePopupOpen);
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }

    function closeAllPopups() {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
    }

    return (
        <>
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick} />
            <Footer />

            <PopupWithForm
                name="edit-popup"
                title="Редактировать профиль"
                children={
                    <>
                        <input name="name" type="text" placeholder="Имя" id="profile-name"
                            className="popup__text popup__text-name" required minlength="2" maxlength="40" />
                        <span className="popup__input-error" id="profile-name-error"></span>
                        <input name="about" type="text" placeholder="Вид деятельности" id="profile-info"
                            className="popup__text popup__text-info" required minlength="2" maxlength="200" />
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
                            className="popup__text popup__text-name" required minlength="2" maxlength="30" />
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
        </>
    );
}

export default App;
