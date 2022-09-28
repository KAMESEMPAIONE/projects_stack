import {FC} from 'react';
import { Link } from 'react-router-dom';
import './AccessDenied.scss';

export const AccessDenied: FC = () => {
    return (
        <section className='AccessDenied'> 
            <div className='container'>
                <h2 className='AccessDenied__title'>Access Denied!</h2>
                <p className='AccessDenied__message'>To access this page you need to <Link to={'/projects/form'} className="AccessDenied__link">register!</Link></p>
            </div>
        </section>
    )
}