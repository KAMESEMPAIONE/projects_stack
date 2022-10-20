import React, {Children, FC, useState} from "react";
import {useSwipeable} from "react-swipeable";
import './Slider.scss';

interface SliderProps {
    children: React.ReactNode
}

export const Slider:FC<SliderProps> = (props) => {
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const slidesCount: number = Children.count(props.children) - 1;


    const prevSlide = () => {
        if (activeSlide === 0) {
            return  setActiveSlide(0)
        }

        return setActiveSlide(activeSlide - 1);
    }

    const nextSlide = () => {
        if (activeSlide + 1 >= slidesCount) {
           return  setActiveSlide(slidesCount)
        }

        return setActiveSlide(activeSlide + 1);
    }

    const switchSlide = (event: React.MouseEvent<HTMLSpanElement>) => {
        const target = event.target as HTMLSpanElement
        return setActiveSlide(+target.id)
    }

    const swipeHandler = useSwipeable({
        onSwipedLeft: (eventData => {
            if (activeSlide + 1 >= slidesCount) {
                return  setActiveSlide(slidesCount)
            }

            return setActiveSlide(activeSlide + 1);

        }),

        onSwipedRight: (eventData => {
            if (activeSlide === 0) {
                return  setActiveSlide(0)
            }

            return setActiveSlide(activeSlide - 1);
        })
    })

    return (
        <div className={'Slider'}>
            <div className={'Slider__body'} {...swipeHandler}>
                <button className={'Slider__btn prev'} onClick={prevSlide}></button>

                <div className={'Slider__track'}>
                    {React.Children.map(props.children, (child, index) => {
                        return (
                            <div className={`Slider__img ${activeSlide === index ? 'active' : ''}`}>
                                {child}
                            </div>
                        )
                    })}
                </div>

                <button className={'Slider__btn next'} onClick={nextSlide}></button>
            </div>

            <div className={'Slider__dots'}>
                {React.Children.map(props.children, (child, index) => {
                    return (
                        <span className={`Slider__dot ${activeSlide === index ? 'active' : ''}`} id={`${index}`} key={index} onClick={switchSlide}></span>
                    )
                })}
            </div>
        </div>
    )
}