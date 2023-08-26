import React from 'react';

function Main() {
    return (
        <main className="content">
        <section className="profile">
            <div className="profile__avatar-box">
                <img src="<%=require('./images/cat.jpg')%>" alt="аватар" className="profile__avatar" />
                <button className="profile__avatar-button"></button>
            </div>
            <div className="profile__info">
                <div className="profile__author">
                    <h1 className="profile__author-name">Жак-Ив Кусто</h1>
                    <p className="profile__author-info">Исследователь океана</p>
                </div>
                <button type="button" className="profile__edit-button profile-open-popup"></button>
            </div>
            <button type="button" className="profile__button profile-open-popup"></button>
        </section>

        <section className="elements">
        </section>
    </main>
    )
}

export default Main;