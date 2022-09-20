import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


import {Header} from "./component/Header/Header";
import {Home} from "./pages/Home/Home";
import {Projects} from "./pages/Projects/Projects";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {Spoiler} from "./component/Spoiler/Spoiler";
import {Tabs} from "./component/Tabs/Tabs";
import { Random } from './pages/Random/Random';
import { Timer } from './component/Timer/Timer';

function App() {
  return (
      <>
        <BrowserRouter>
            <div className={'App'}>
                <Header/>
                <main className={'App__body'}>
                    <Routes>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/projects'} element={<Navigate to={'/projects/spoiler'}/>}/>
                            <Route path={'/projects'} element={<Projects/>}>
                                    <Route path={'spoiler'} element={<Spoiler/>}/>
                                    <Route path={'tabs'} element={<Tabs/>}/>
                                    <Route path={'random-generator'} element={<Random/>}/>
                                    <Route path={'timer'} element={<Timer/>}/>
                            </Route>
                            <Route path={'*'} element={<NotFoundPage/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
      </>
  );
}

export default App;
