import {FC} from  'react';
import {Link} from "react-router-dom";
import reactLogo from "./img/react-logo.png"
import reduxLogo from "./img/redux-logo.png"
import typescriptLogo from "./img/Typescript_logo_2020.svg.png"
import './Home.scss';

export const Home: FC = () => {
    return (
        <div className={'Home'}>
            <h1 className={'Home__title'}>React Projects Stack</h1>
            <p className={'Home__text'}>This project includes a set of components common in web development and some other elements.</p>
            <p className={'Home__text'}>The following technologies were used in this project:</p>

            <div className={'Home__logos'}>
                <div className={'Home__logo'}>
                    <a href="https://en.reactjs.org/" target={'_blank'} rel={'noreferrer'} title={'documentation'}>
                        <img src={reactLogo} alt="react"/>
                    </a>
                </div>

                <div className={'Home__logo'}>
                    <a href="https://redux-toolkit.js.org/" target={'_blank'} rel={'noreferrer'} title={'documentation'}>
                        <img src={reduxLogo} alt="redux"/>
                    </a>
                </div>

                <div className={'Home__logo'}>
                    <a href="https://www.typescriptlang.org/" target={'_blank'} rel={'noreferrer'} title={'documentation'}>
                        <img src={typescriptLogo} alt="typescript"/>
                    </a>
                </div>
            </div>

            <Link to={'/projects'} className={'Home__link'}>Get Started</Link>
        </div>
    )
}
