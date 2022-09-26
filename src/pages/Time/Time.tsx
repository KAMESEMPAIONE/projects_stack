import { FC } from "react";
import { Clock } from "../../component/Clock/Clock";
import { StopWatch } from "../../component/StopWatch/StopWatch";
import './Time.scss';

export const Time: FC= () => {
    return (
        <section className="Timer">
            <div className="Timer__item">
                <h2 className="Projects__title">Clock</h2>
                <Clock/>
            </div>

            <div className="Timer__item">
                <h2 className="Projects__title">Stopwatch</h2>
                <StopWatch />
            </div>

        </section>
    )
}