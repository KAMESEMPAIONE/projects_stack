import {FC} from 'react';
import { Tab } from '../../component/Tab/Tab';
import './Tabs.scss';

import reactLogo from './img/react-logo.png';
import reduxLogo from './img/redux-logo.png';
import typescriptLogo from './img/typescript-logo.png';
import graphqlLogo from './img/graphql-logo.png';
import nodejsLogo from './img/nodejs-logo.png';

export const Tabs: FC = () => {
    return (
        <section className='Tabs'>
            <h2 className='Projects__title'>Tabs</h2>

            <div className='firstTab'>

                <Tab titles={['Title №1','Title №2','Title №3']}> 
                    <div className='Tabs__item'>
                        React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.
                    </div>

                    <div className='Tabs__item'>
                        React is a JavaScript library, and so we’ll assume you have a basic understanding of the JavaScript language. If you don’t feel very confident, we recommend going through a JavaScript tutorial to check your knowledge level and enable you to follow along this guide without getting lost. 
                    </div>

                    <div className='Tabs__item'>
                        React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.
                        Instead of artificially separating technologies by putting markup and logic in separate files
                    </div>
                </Tab>

            </div>
            
            <div className='secondTab'>
                <Tab titles={['React','Redux','TypeScript','GraphQL','NodeJS']}> 
                    <div className='Tabs__item'>
                        <img src={reactLogo} alt="React logo" className='Tabs__img' />
                        <h3 className='Tabs__title'>React</h3>
                        <p className='Tabs__text'>
                        React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js
                        </p>
                    </div>

                    <div className='Tabs__item'>
                        <img src={reduxLogo} alt="Redux logo" className='Tabs__img'/>
                        <h3 className='Tabs__title'>Redux</h3>
                        <p className='Tabs__text'>
                            Redux is a predictable state container for JavaScript apps. (Not to be confused with a WordPress framework – Redux Framework)
                            It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
                        </p>
                    </div>

                    <div className='Tabs__item'>
                        <img src={typescriptLogo} alt="TypeScript Logo" className='Tabs__img'/>
                        <h3 className='Tabs__title'>TypeScript</h3>
                        <p className='Tabs__text'>
                            TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.
                            TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno).
                        </p>
                    </div>

                    <div className='Tabs__item'>
                        <img src={graphqlLogo} alt="GraphQL logo" className='Tabs__img'/>
                        <h3 className='Tabs__title'>GraphQL</h3>
                        <p className='Tabs__text'>
                            GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.
                        </p>
                     </div>

                    <div className='Tabs__item'>
                        <img src={nodejsLogo} alt="NodeJS logo" className='Tabs__img'/>
                        <h3 className='Tabs__title'>NodeJS</h3>
                        <p className='Tabs__text'>
                            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.
                        </p>
                    </div>
            </Tab>
            </div>
            
        </section>
    )
}