import { FC } from "react";
import './Random.scss';

export const Random: FC = () => {

    const random = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div className="Random">
            Random
        </div>
    )
}

