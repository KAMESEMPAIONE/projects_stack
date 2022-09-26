import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


import {Header} from "./component/Header/Header";
import {Home} from "./pages/Home/Home";
import {Projects} from "./pages/Projects/Projects";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {SpoilerPage} from "./pages/SpoilerPage/SpoilerPage";
import {Tabs} from "./pages/TabsPage/Tabs";
import { Random } from './pages/Random/Random';
import { Time } from './pages/Time/Time';
import { ScrollButton } from './component/ScrollButton/ScrollButton';
import { DropDownPage } from './pages/DropDownPage/DropDownPage';

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
                                    <Route path={'spoiler'} element={<SpoilerPage/>}/>
                                    <Route path={'tabs'} element={<Tabs/>}/>
                                    <Route path={'random-generator'} element={<Random/>}/>
                                    <Route path={'time'} element={<Time/>}/>
                                    <Route path={'scroll-button'} element={<ScrollButton/>}/>
                                    <Route path={'dropdown-menu'} element={<DropDownPage/>}/>
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
