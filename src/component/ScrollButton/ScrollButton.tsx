import React, { FC, useState } from "react";
import './ScrollButton.scss';

export const ScrollButton: FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > document.documentElement.clientHeight) {
            setIsActive(true);
        } else {
            setIsActive(false)
        }
    })

    const handleClick = (): void => {
        window.scrollTo(0,0);
    }


    return (
        <section className="ScrollButton">
            <h2 className="Projects__title">Scroll Button</h2>
            <p>Just scroll down to see it</p>

            <div onClick={handleClick} className={`ScrollButton__item ${isActive ? 'active' : ''}`}></div>
        </section>
    )
}