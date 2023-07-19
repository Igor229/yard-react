import React, { useState } from 'react';
import './Modal.scss'
import icon from './assets/icons/sprite.svg'

function Modal({active, setActive}) {
    return (
        <div className={active ? 'modal--active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal__container" onClick={e => e.stopPropagation()}>
                    
                    <div className="modal__close">
                        <svg className="modal__close-icon" onClick={() => setActive(false)}>
                            <use href={icon + '#close'}></use>
                        </svg>
                    </div>
        
        
                    <h2 className="modal__title">Замовити індивідуальну консультацію</h2>
                    <form className="modal__actions">
                        <input className="modal__actions-action form-input" type="tel" name="phone" maxLength="13" placeholder="Номер телефону" required/>
                        <button className="modal__actions-action main-button">Відправити</button>
                    </form>
                </div>
        </div>
    )
}

export default Modal;