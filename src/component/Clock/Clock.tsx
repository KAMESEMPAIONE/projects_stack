import { FC, useState, useEffect } from "react";
import './Clock.scss';

export const Clock: FC = () => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    let h: number | string = currentTime.getHours();
    let m: number | string = currentTime.getMinutes();
    let s: number | string = currentTime.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    useEffect(() => {
      const interval =  setInterval(() => {
            setCurrentTime(new Date())
       },1000)
       
       return () => clearInterval(interval)
    },[])
   

    return (
        <div className="Clock">
            {`${h}:${m}:${s}`}
        </div>
    )
}