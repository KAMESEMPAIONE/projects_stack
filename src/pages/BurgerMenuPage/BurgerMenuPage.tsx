import { FC } from "react";
import { BurgerMenu } from "../../component/BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";

import './BurgerMenuPage.scss';



export const BurgerMenuPage: FC = () => {
    return (
        <section className="BurgerMenuPage">
            <h2 className="Projects__title">Burger Menu</h2>

            <div className="BurgerMenuPage__content">
                <div className="BurgerMenuPage__head">
                    <div className="BurgerMenuPage__logo">
                        <span></span>
                    </div>

                    <BurgerMenu className="BurgerMenuPage__burger">
                        <ul>
                            <li><Link to="/" className="BurgerMenuPage__link">Home</Link></li>
                            <li><Link to="/projects/spoiler" className="BurgerMenuPage__link">Spoiler</Link></li>
                            <li><Link to="/projects/tabs" className="BurgerMenuPage__link">Tabs</Link></li>
                            <li><Link to="/projects/random-generator" className="BurgerMenuPage__link">Random Generator</Link></li>
                            <li><Link to="/projects/time" className="BurgerMenuPage__link">Time</Link></li>
                            <li><Link to="/projects/scroll-button" className="BurgerMenuPage__link">Scroll Button</Link></li>
                            <li><Link to="/projects/dropdown-menu" className="BurgerMenuPage__link">DropDown Menu</Link></li>
                        </ul>
                    </BurgerMenu>
                </div>

                <div className="BurgerMenuPage__body">
                    <h4>Single-page Application</h4>
                    <p>
                    A single-page application is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run. Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded.

                    Though you may build a single-page application in React, it is not a requirement. React can also be used for enhancing small parts of existing websites with additional interactivity. Code written in React can coexist peacefully with markup rendered on the server by something like PHP, or with other client-side libraries. In fact, this is exactly how React is being used at Facebook.
                    </p>
                </div>
            </div>
        </section>
    )
}