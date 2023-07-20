import React, { useState } from 'react'
import './BuildingStatus.scss'
import BuildStatusSlider from './BuildStatusSlider'

function BuildingStatus() {
    const [isActive, setIsActive] = useState(true)
    const handleClick = () => {
        setIsActive(!isActive)
    }

    const buttonClassActive = isActive ? "build-status__actions-button button-active" : "build-status__actions-button"
    const buttonClass = isActive ? "build-status__actions-button" : "build-status__actions-button  button-active"

    return (
        <section className="build-status" id='building-status'>
            <div className="wrapper">
                <div className="build-status__items">
                    <div className="build-status__item">
                        <h2 className="build-status__title">Стани будівництва</h2>
                        <div className="build-status__actions">
                            <button type="button" className={buttonClassActive} onClick={handleClick}>WEST TOWN черга №8</button>
                            <button type="button" className={buttonClass} onClick={handleClick}>BESKID HOME RESORT</button>
                        </div>
                    </div>

                    <div className="build-status__item">
                        <p className="build-status__item-info">- здійснюються внутрішні ремонтні роботи у котеджі №2 (тип 1)</p>
                        <p className="build-status__item-info"> - здійснюються електромонтажні роботи у котеджі №3 (тип 1)</p>
                    </div>
                </div>

                <div className='build-status__slider'>
                    <BuildStatusSlider/>
                </div>
            </div>
        </section>
    )
}

export default BuildingStatus