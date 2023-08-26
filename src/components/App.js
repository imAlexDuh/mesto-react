import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import logo from '../images/vector.svg';

function App() {
  return (
    <>
    <Header />
    <Main />
    <Footer />

    <div className="popup" id="edit-popup">
        <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form name="popup-form" className="popup__fields" novalidate>
                <fieldset className="popup__fieldset">
                    <input name="name" type="text" placeholder="Имя" id="profile-name"
                        className="popup__text popup__text-name" required minlength="2" maxlength="40" />
                    <span className="popup__input-error" id="profile-name-error"></span>
                    <input name="about" type="text" placeholder="Вид деятельности" id="profile-info"
                        className="popup__text popup__text-info" required minlength="2" maxlength="200" />
                    <span className="popup__input-error" id="profile-info-error"></span>
                    <button type="submit" className="popup__save-button popup__save-button_inactive" id="popup__save-button"
                        disabled>Сохранить</button>
                </fieldset>
            </form>
            <button type="button" className="popup__close-button" id="popup__close-button"></button>
        </div>
    </div>

    <div className="popup" id="add-popup">
        <div className="popup__container">
            <h2 className="popup__title">Новое место</h2>
            <form name="addform" id="addform" className="popup__fields" novalidate>
                <fieldset className="popup__fieldset">
                    <input name="name" type="text" id="photo-name" placeholder="Название"
                        className="popup__text popup__text-name" required minlength="2" maxlength="30" />
                    <span className="popup__input-error" id="photo-name-error"></span>
                    <input name="link" type="url" id="photo-link" placeholder="Ссылка на картинку"
                        className="popup__text popup__text-img" required />
                    <span className="popup__input-error" id="photo-link-error">Введите URL.</span>
                    <button type="submit" className="popup__save-button" popup__save-button_inactive
                        id="add-popup__save-button" disabled>Создать</button>
                </fieldset>
            </form>
            <button type="button" className="popup__close-button" id="add-popup__close-button"></button>
        </div>
    </div>

    <div className="popup" id="img-popup">
        <div className="popup__img">
            <img className="popup__image" />
            <p className="popup__image-name"></p>
            <button type="button" id='img-popup__close-button' className="popup__close-button"></button>
        </div>
    </div>

    <div className="popup" id="confirmation-popup">
        <div className="popup__container">
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__fields">
                <fieldset className="popup__fieldset" id="confirm__fieldset">
                    <button type="submit" className="popup__save-button" id="confirm-popup__del-button">Да</button>
                </fieldset>
            </form>
            <button type="button" id='confirm-popup__close-button' className="popup__close-button"></button>
        </div>
    </div>

    <div className="popup" id="avatar-popup">
        <div className="popup__container">
            <h2 className="popup__title">Обновить аватар</h2>
            <form name="avatarform" id="avatarform" className="popup__fields" novalidate>
                <fieldset className="popup__fieldset">
                    <input name="link" type="url" id="avatar-link" placeholder="Ссылка на картинку"
                        className="popup__text popup__text-img" required />
                    <span className="popup__input-error" id="avatar-link-error">Введите URL.</span>
                    <button type="submit" className="popup__save-button" popup__save-button_inactive
                        id="avatar-popup__save-button" disabled>Сохранить</button>
                </fieldset>
            </form>
            <button type="button" className="popup__close-button" id="avatar-popup__close-button"></button>
        </div>
    </div>

    <template className="elements__element-template">
        <div className="elements__element">
            <img className="elements__pic" />
            <button className="elements__delete-button"></button>
            <div className="elements__card">
                <h2 className="elements__card-name"></h2>
                <div className="elements__like">
                    <button className="elements__card-button"></button>
                    <span className="elements__card-count"></span>
                </div>
            </div>
        </div>
    </template>
    </>
  );
}

export default App;
