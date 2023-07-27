import React, { useState } from 'react'
import './BuildingStatus.scss'
import WestStatusSlider from './WestStatusSlider'
import BeskidStatusSlider from './BeskidStatusSlider'

function BuildingStatus() {
    const [isActive, setIsActive] = useState(true)
    const handleClick = () => {
        setIsActive(!isActive)
    }

    const buttonClassActive = isActive ? "build-status__actions-button button-active" : "build-status__actions-button"
    const buttonClass = isActive ? "build-status__actions-button" : "build-status__actions-button  button-active"

    const westTypeActive = isActive ? 'build-status__slider slider-hidden' : 'build-status__slider'
    const beskidTypeActive = isActive ? 'build-status__slider' : 'build-status__slider slider-hidden'

    return (
        <section className="build-status box" id='building-status'>
            <div className="wrapper">
                <div className="build-status__items">
                    <div className="build-status__item">
                        <h2 className="build-status__title main-title">Стани будівництва</h2>
                        <div className="build-status__actions">
                            <button type="button" className={buttonClassActive} onClick={handleClick} id='wes-town__button'>WEST TOWN</button>
                            <button type="button" className={buttonClass} onClick={handleClick}>BESKID HOME RESORT</button>
                        </div>
                    </div>
                </div>

                <div className={beskidTypeActive}>
                    <WestStatusSlider/>
                </div>

                <div className={westTypeActive}>
                    <BeskidStatusSlider/>
                </div>
            </div>
        </section>
    )
}

export default BuildingStatus