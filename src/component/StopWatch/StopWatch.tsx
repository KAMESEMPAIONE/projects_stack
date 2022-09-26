import { FC, useState, useEffect } from "react";
import './StopWatch.scss';


export const StopWatch: FC = () => {
    const [time, setTime] = useState<number>(0);
    const [active, setActive] = useState<boolean>(false);

    

    useEffect(() => {
        let interval : any;

        if (active) {
          interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
          }, 10);
        } else if (!active) {
          clearInterval(interval);
        }

        return () => clearInterval(interval);
      }, [active]);


    const reset = ():void => {
        setActive(false);
        setTime(0);
    }

    return (
        <div className="StopWatch">

            <div className="StopWatch__body">
                <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>

            <div className="StopWatch__buttons">
                <button onClick={() => setActive(true)} className={`StopWatch__start ${(!active) ? 'active' : ''}`}>Start!</button>
                <button onClick={() => setActive(false)} className={`StopWatch__stop ${(active) ? 'active' : ''}`}>Stop!</button>
                <button onClick={reset} className={`StopWatch__reset`}>Reset!</button>
            </div>
        </div>
    )
}