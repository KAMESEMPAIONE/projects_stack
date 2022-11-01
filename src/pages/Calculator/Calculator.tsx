import {FC} from "react";
import './Calculator.scss';

export const Calculator:FC = () => {
    return (
        <section className={'Calculator'}>
            <h2 className={'Projects__title'}>Calculator</h2>

            <div className={'Calculator__content'}>
                Calculator: 2 + 2 === 4
            </div>
        </section>
    )
}