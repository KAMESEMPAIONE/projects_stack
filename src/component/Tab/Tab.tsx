import React, {  FC, useState } from "react";
import './Tab.scss';

interface TabProps {
    titles: string[],
    children : React.ReactNode
}

export const Tab: FC<TabProps> = (props) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    
    const handleClick = (event:any) => {
       return setActiveTab(+event.target.id);
    }

    return (
        <div className={`Tab`}>
            <div className={`Tab__head`}>

                <ul className="Tab__list">

                    {props.titles.map((item: string, index: number) => {
                        return <li onClick={handleClick} className={`Tab__title ${activeTab === index ? 'active' : ''}`} key={index} id={`${index}`}>{item}</li>
                    })}

                </ul>

            </div>

            <div className="Tab__body">

                {React.Children.map(props.children, (child, index) : any => {
                    if (index === activeTab) return child; 
                })}

            </div>
        </div>
    )
}