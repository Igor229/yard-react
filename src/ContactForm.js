

function ContactForm (props) {
    const {title} = props

    return (
        <form action="#" className="form">
        <div className="form__container">
            <h4 className="form__container-title">{title}</h4>

            <div className="form__container-actions">
                <input className="form-input item" type="tel" name="phone" maxLength="13" placeholder="Номер телефону" required/>
                <input className="form-input item" type="email" name="mail" placeholder="Введіть пошту" required/>
                <button className="form-button main-button item">Відправити</button>
            </div>
        </div>
    </form>
    )
}

export default ContactForm;