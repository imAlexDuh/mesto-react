import React from 'react';
import avatar from '../images/avatar.png';

function Main(props) {
    return (
        <main className="content">
        <section className="profile">
            <div className="profile__avatar-box">
                <img src={avatar} alt="аватар" className="profile__avatar" />
                <button
                className="profile__avatar-button"
                onClick={props.onEditAvatar}>
                </button>
            </div>
            <div className="profile__info">
                <div className="profile__author">
                    <h1 className="profile__author-name">Жак-Ив Кусто</h1>
                    <p className="profile__author-info">Исследователь океана</p>
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
        </section>
    </main>
    )
}



export default Main;