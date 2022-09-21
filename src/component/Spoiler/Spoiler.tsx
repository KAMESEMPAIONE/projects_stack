import {FC, useState} from "react";
import './Spoiler.scss';

interface SpoilerProps {
    title: string,
    children: React.ReactNode
}

export const Spoiler: FC<SpoilerProps> = (props) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleClick = (): void => {
        setIsActive(!isActive);
    }


    return (
            <div className="Spoiler">
                <div onClick={handleClick} className={`Spoiler__head ${isActive ? 'active' : ''}`}>
                    {props.title}
                    <span className="Spoiler__arrow"></span>
                </div>
                <div className={`Spoiler__body ${isActive ? 'active' : ''}`}>
                    {props.children}
                </div>
            </div>

    )
}