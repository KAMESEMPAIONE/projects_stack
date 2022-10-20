import {FC} from "react";
import './SliderPage.scss';
import {Slider} from "../../component/Slider/Slider";

import slider_1 from './img/slider-1.jpg'
import slider_2 from './img/slider-2.jpg'
import slider_3 from './img/slider-3.jpg'
import slider_4 from './img/slider-4.jpg'
import slider_5 from './img/slider-5.jpg'
import slider_6 from './img/slider-6.jpg'
import slider_7 from './img/slider-7.jpg'

export const SliderPage:FC = () => {
    return (
        <section className={'SliderPage'}>
            <h2 className={'Projects__title'}>Slider</h2>

            <div className="SliderPage__body">
                <Slider>
                    <img src={slider_1} alt=""/>
                    <img src={slider_2} alt=""/>
                    <img src={slider_3} alt=""/>
                    <img src={slider_4} alt=""/>
                    <img src={slider_5} alt=""/>
                    <img src={slider_6} alt=""/>
                    <img src={slider_7} alt=""/>
                </Slider>
            </div>
        </section>
    )
}