import React, {FC} from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { activateMenu } from '../../app/Reducer/DropDownSlice';
import './DropDownMenu.scss';

interface DropDownMenuProps {
    title: string,
    id: number,
    children: React.ReactNode
}

export const DropDownMenu: FC<DropDownMenuProps> = (props) => {
    const dispatch = useAppDispatch()
   
    const active = useAppSelector(state => state.DropDownPage.activeMenu);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        const target = event.target as HTMLDivElement;
        const value = Number(target.getAttribute('id'));
        dispatch(activateMenu(value));
    }

    document.addEventListener('click', (event) => {
        const target = event.target as HTMLDivElement;
        
        if(!target.matches('.DropDownMenu__head')) {
            return dispatch(activateMenu(0))
        }
    })

    return (
        <div className='DropDownMenu'>
            <div id={`${props.id}`} onClick={handleClick} className={`DropDownMenu__head ${active === props.id ? 'active' : ''}`}>
                {props.title}               
            </div>

            <div className={`DropDownMenu__body ${active === props.id ? 'active' : ''}`}>
                {props.children}
            </div>
        </div>
    )
}