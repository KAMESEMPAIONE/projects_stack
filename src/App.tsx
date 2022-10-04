import React from 'react';
import { useAppSelector } from './app/hooks';
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
import { FormPage } from './pages/Form/FormPage';
import { AccessDenied } from './pages/AccessDenied/AccessDenied';
import { PrivatePage } from './pages/PrivatePage/PrivatePage';
import { ModalPage } from './pages/ModalPage/ModalPage';
import { BurgerMenuPage } from './pages/BurgerMenuPage/BurgerMenuPage';
import { RTKQuery } from './pages/RTKQuery/RTKQuery';
import { SlideShowPage } from './pages/SlideShowPage/SlideShowPage';


function App() {
  const isRegistered = useAppSelector(state => state.AuthForm.isRegistered);

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
                                    <Route path={'form'} element={<FormPage/>}/>
                                    <Route path={'modal-window'} element={<ModalPage/>}/>
                                    <Route path={'burger-menu'} element={<BurgerMenuPage/>}/>
                                    <Route path={'rtk-query'} element={<RTKQuery/>}/>
                                    <Route path={'slide-show'} element={<SlideShowPage/>}/>
                            </Route>

                            {!isRegistered &&
                               <Route path='/private-page' element={<Navigate to={'/access-denied'}/>}/>
                            }

                            <Route path={'/private-page'} element={<PrivatePage/>}/>
                            <Route path={'/access-denied'} element={<AccessDenied/>}/>
                            <Route path={'*'} element={<NotFoundPage/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
      </>
  );
}

export default App;
