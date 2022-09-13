import {FC} from "react";
import {useNavigate} from "react-router-dom";
import './NotFoundPage.scss';

export const NotFoundPage: FC = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <div className={'NotFoundPage'}>
            <div className="container">
                <h2 className={'NotFoundPage__title'}>Page Not Found</h2>
                <p className={'NotFoundPage__message'}>We couldn't find what you were looking for.</p>
                <button onClick={goBack} className={'NotFoundPage__button'}>Go Back</button>
            </div>
        </div>
    )
}