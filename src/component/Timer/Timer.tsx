import { FC, useState, useEffect } from "react";
import './Timer.scss';

export const Timer: FC = () => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date())

    useEffect(() => {
      const interval =  setInterval(() => {
            setCurrentTime(new Date())
       },1000)
       
       return () => clearInterval(interval)
    },[])
   

    return (
        <section className="Timer">
            <div className="Timer__item">

                <h2 className="Projects__title">Clock</h2>

                <div className="Timer__body">
                   <div className="Timer__clock">
                        {`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`}
                    </div> 
                </div>

            </div>

            <div className="Timer__item">
                <h2 className="Projects__title">Stopwatch</h2>

                <div className="Timer__body">
                  
                </div>
            </div>

            <div className="Timer__item">
                <h2 className="Projects__title">Timer</h2>

                <div className="Timer__body">

                </div>
            </div>
        </section>
    )
}