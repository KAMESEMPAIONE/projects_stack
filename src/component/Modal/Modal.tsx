import { FC, useState } from "react";
import './Modal.scss';

interface ModalProps {
    title?: string | React.ReactNode,
    imgSrc?: string,
    children: React.ReactNode,
    className?: string
}


export const Modal: FC<ModalProps> = (props) => {
    const [active, setActive] = useState<boolean>(false);

    const handleClick = (): void => {
        document.documentElement.style.overflow = active ? 'visible' : 'hidden';
        setActive(!active);
    } 

    return (
        <div className="Modal">
            <div onClick={handleClick} className={`Modal__head ${props.className ? props.className : ''}`}>
                {props.imgSrc &&
                    <img src={props.imgSrc} alt=""/>
                }
                {props.title}
            </div>

            <div className={`Modal__body ${active ? 'active' : ''}`}>
                <div className={`Modal__content`}>
                    <span onClick={handleClick} className="Modal__close"></span>

                    {props.children}
                </div>
            </div>
        </div> 
    )
}