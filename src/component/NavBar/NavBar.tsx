import React, {FC} from "react";
import {NavLink, useSearchParams} from "react-router-dom";
import './NavBar.scss';

export const NavBar: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery: string = searchParams.get('searchValue') || ('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query: string = event.target.value;

        if (query.length >= 3) {
           return  setSearchParams({searchValue:query})
        }

        return setSearchParams({searchValue:''})
    }


    const linkArr: string[] = ['Spoiler','Tabs','Random generator','Timer'];

    return (
        <aside className={'NavBar'}>
            <nav className={'NavBar__nav'}>

                <form className={'NavBar__form'} >
                    <input type="search" onChange={handleChange} placeholder={'Search project:'} className={'NavBar__input'} maxLength={30}/>
                </form>

                <ul className={'NavBar__list'}>

                    {linkArr.filter((link: string) => {
                       return  link.toLowerCase().includes(searchQuery)
                    }).map((link: string, index: number) => {

                        let linkPath: string = link.toLowerCase().replace(/\s/gui,'-');

                        return (
                            <li className={'NavBar__item'} key={index}>
                                <NavLink to={`/projects/${linkPath}`} className={'NavBar__link'}>{link}</NavLink>
                            </li>
                        )
                    })}

                </ul>
            </nav>
        </aside>
    )
}