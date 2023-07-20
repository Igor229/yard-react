import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm (props) {
    const {title} = props

    const form = useRef();

    const sendEmail = (e) => {
  
      emailjs.sendForm('service_5qtaya8', 'contact_form', form.current, 'lrG-SRJzI2YZWRDiE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} className="form" onSubmit={sendEmail}>
        <div className="form__container">
            <h4 className="form__container-title">{title}</h4>

            <div className="form__container-actions">
                <input className="form-input item" type="tel" name="phone" maxLength="13" placeholder="Номер телефону" required/>
                <input className="form-input item" type="text" name="name" placeholder="Ваше ім’я" required/>
                <button className="form-button main-button item">Відправити</button>
            </div>
        </div>
    </form>
    )
}

export default ContactForm;