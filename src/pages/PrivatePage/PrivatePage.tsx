import {FC} from 'react';
import './PrivatePage.scss';

export const PrivatePage: FC = () => {
    return (
        <section className='PrivatePage'> 
            <div className='container'>
                <h2 className='PrivatePage__title'>Private Page!</h2>
                <p className='AccessDenied__message'>This is a private page! If you see it, then you have registered!</p>
            </div>
        </section>
    )
}