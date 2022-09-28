import {FC} from 'react';
import { DropDownMenu } from '../../component/DropDownMenu/DropDownMenu';

import './DropDownPage.scss';

export const DropDownPage: FC = () => {
    return (
        <section className='DropDownPage'>
            <h2 className='Projects__title'>Dropdown menu</h2>

            <div className='DropDownPage__section'>
                <div className='DropDownPage__head'>
                    <ul className='DropDownPage__list'>
                        <DropDownMenu title='Docs' id={1}>
                            <ul>
                                <li>Installation</li>
                                <li>Main Conceps</li>
                                <li>Advanced Guides</li>
                                <li>API Reference</li>
                                <li>Hooks</li>
                            </ul>
                        </DropDownMenu>

                        <DropDownMenu title='Tutorial' id={2}>
                            <ul>
                                <li>Installation</li>
                                <li>Main Conceps</li>
                                <li>Advanced Guides</li>
                                <li>API Reference</li>
                                <li>Hooks</li>
                                <li>Testing</li>
                            </ul>
                        </DropDownMenu>

                        <DropDownMenu title='Blog' id={3}>
                            <ul>
                                <li>Installation</li>
                                <li>Main Conceps</li>
                                <li>Advanced Guides</li>
                                <li>API Reference</li>
                                <li>Hooks</li>
                            </ul>
                        </DropDownMenu>

                        <DropDownMenu title='Community' id={4}>
                            <ul>
                                <li>Installation</li>
                                <li>Main Conceps</li>
                                <li>Advanced Guides</li>
                                <li>API Reference</li>
                            </ul>
                        </DropDownMenu>
                    </ul>
                </div>

                <div className='DropDownPage__body'>
                React 18 was years in the making, and with it brought valuable lessons for the React team. Its release was the result of many years of research and exploring many paths. Some of those paths were successful; many more were dead-ends that led to new insights. One lesson we’ve learned is that it’s frustrating for the community to wait for new features without having insight into these paths that we’re exploring.

                We typically have a number of projects being worked on at any time, ranging from the more experimental to the clearly defined. Looking ahead, we’d like to start regularly sharing more about what we’ve been working on with the community across these projects.

                To set expectations, this is not a roadmap with clear timelines. Many of these projects are under active research and are difficult to put concrete ship dates on. They may possibly never even ship in their current iteration depending on what we learn. Instead, we want to share with you the problem spaces we’re actively thinking about, and what we’ve learned so far.
                </div>
            </div>
        </section>
    )
}