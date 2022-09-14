import {FC} from 'react';
import {Outlet} from "react-router-dom";
import  './Projects.scss';

import {NavBar} from "../../component/NavBar/NavBar";

export const Projects: FC = () => {
    return (
        <section className={'Projects'}>
            <NavBar/>
            <div className={'Projects__body'}>
                <Outlet/>
            </div>
        </section>
    )
}