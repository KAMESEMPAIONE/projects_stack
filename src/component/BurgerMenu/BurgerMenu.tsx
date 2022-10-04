import { FC, useState } from "react";
import './BurgerMenu.scss';

interface BurgerMenuProps {
    className?: string,
    children: React.ReactNode
}

export const BurgerMenu: FC<BurgerMenuProps> = (props) => {
    const [active, setActive] = useState<boolean>(false);

    const handleClick = (): void => {
       return setActive(!active);
    }

    return (
        <div className={`BurgerMenu ${props.className ? props.className : ''}`}>
            <div onClick={handleClick} className={`BurgerMenu__button ${active ? 'active' : ''}`}>
                <span></span>
            </div>

            <div className={`BurgerMenu__content ${active ? 'active' : ''}`}>
                <div className="BurgerMenu__body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}