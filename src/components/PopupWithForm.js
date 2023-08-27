import React from 'react';

function PopupWithForm(props) {
    return (
        <div id={props.name} className={`popup ${props.isOpen && "popup_opened"}`}>
        <div className="popup__container">
            <h2 className="popup__title">{props.title}</h2>
            <form name={props.name} className="popup__fields" novalidate>
                <fieldset className="popup__fieldset">
                    {props.children}
                    <button type="submit" className="popup__save-button popup__save-button_inactive" id="popup__save-button"
                        disabled>{props.buttonsName}</button>
                </fieldset>
            </form>
            <button onClick={props.onClose} type="button" className="popup__close-button" id="popup__close-button"></button>
        </div>
    </div>
    )
}

export default PopupWithForm;