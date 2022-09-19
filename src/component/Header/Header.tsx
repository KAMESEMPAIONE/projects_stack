import path from "path";
import {FC} from "react";
import {NavLink, useMatch} from "react-router-dom";
import './Header.scss';

export const Header: FC = () => {
    return (
        <header className={'header'}>
            <div className="container">
                <ul className={'header__list'}>
                    <li className={'header__item'}><NavLink to={'/'} className={'header__link'}>Home</NavLink></li>
                    <li className={'header__item'}><NavLink to={'/projects'} className={'header__link'}>Projects</NavLink></li>
                    <li className={'header__item'}><a href="https://github.com/KAMESEMPAIONE" className={'header__link'} target={'_blank'} rel={'noreferrer'}>GitHub
                        <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15">
                            <path fill="currentColor" d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "></path>
                            <polygon fill="currentColor" points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "></polygon>
                        </svg>
                    </a></li>
                </ul>
            </div>
        </header>
    )
}

