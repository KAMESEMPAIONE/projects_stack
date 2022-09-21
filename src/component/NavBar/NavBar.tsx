import {useState, FC} from "react";
import {NavLink, useSearchParams} from "react-router-dom";
import './NavBar.scss';

export const NavBar: FC = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery: string = searchParams.get('searchValue') || ('');

    const linkArr: string[] = ['Spoiler','Tabs','Random Generator','Timer', 'Scroll Button'];

    const filteredArr: string[] = linkArr.filter((link: string) => {
        return  link.toLowerCase().includes(searchQuery)
     })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        const query: string = event.target.value;

        if (query.length >= 3) {
            return  setSearchParams({searchValue: query})
        }

        return setSearchParams({searchValue: ''})
    }

    const handleClick = () => {
        setInputValue('');
    }

    window.addEventListener('beforeunload', () => {
        localStorage.setItem('searchValue', inputValue);
    })

    window.addEventListener('load', () => {
        setInputValue(localStorage.getItem('searchValue') || '')
    })


    return (
        <aside className={'NavBar'}>
            <nav className={'NavBar__nav'}>

                <input type="search" onChange={handleChange} value={inputValue} placeholder={'Search the project:'} className={'NavBar__input'} maxLength={30}/>
                
                <ul className={'NavBar__list'}>

                    {filteredArr.length === 0 &&
                        <div className="NavBar__notFound">
                            Not found
                        </div>
                    }

                    {filteredArr.map((link: string, index: number) => {

                        const linkPath: string = link.toLowerCase().replace(/\s/gui,'-');

                        return (
                            <li className={'NavBar__item'} key={index}>
                                <NavLink to={`/projects/${linkPath}`} className={'NavBar__link'} onClick={handleClick}>{link}</NavLink>
                            </li>
                        )
                    })}

                </ul>
            </nav>
        </aside>
    )
}