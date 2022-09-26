import {FC} from 'react';
import { DropDownMenu } from '../../component/DropDownMenu/DropDownMenu';

export const DropDownPage: FC = () => {
    return (
        <section className='DropDownPage'>
            <h2 className='Projects__title'>Dropdown menu</h2>
            <DropDownMenu/>
        </section>
    )
}