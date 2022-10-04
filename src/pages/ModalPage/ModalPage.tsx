import { FC } from "react";
import { Modal } from "../../component/Modal/Modal";
import './ModalPage.scss'

export const ModalPage: FC = () => {
    return (
        <section className="ModalPage">
            <h2 className="Projects__title">Modal Window</h2>
            <div className="ModalPage__message">
                You can open a modal window by pressing this 

                <Modal title={'button'} className="ModalPage__button">
                    <div className="ModalPage__content">
                        <h3 className="ModalPage__content-title">Modal Window</h3>

                        <p className="ModalPage__content-text">
                            React 18 was years in the making, and with it brought valuable lessons for the React team. Its release was the result of many years of research and exploring many paths. Some of those paths were successful; many more were dead-ends that led to new insights. One lesson we’ve learned is that it’s frustrating for the community to wait for new features without having insight into these paths that we’re exploring.

                            We typically have a number of projects being worked on at any time, ranging from the more experimental to the clearly defined. Looking ahead, we’d like to start regularly sharing more about what we’ve been working on with the community across these projects.

                            To set expectations, this is not a roadmap with clear timelines. Many of these projects are under active research and are difficult to put concrete ship dates on. They may possibly never even ship in their current iteration depending on what we learn. Instead, we want to share with you the problem spaces we’re actively thinking about, and what we’ve learned so far.
                        </p>
                        
                    </div>
                </Modal>
            </div>
        </section>
    )
}