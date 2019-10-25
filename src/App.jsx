import React,{useState} from 'react';
import s from './App.module.scss';
import {Header} from "./Components/Header/Header";
import {SideBar} from "./Components/SideBar/Sidebar";
import Contents from "./Components/Contents/Contents";
import {Route} from "react-router-dom";
import {PhotoGallery} from "./Components/PhotoGallery/PhotoGallery";

export const App = () => {
  const [showContacts,setStatusShowContacts] = useState(false);

  return (
  	<div className={s.wrapper}>
			<Header showContacts={showContacts} setStatusShowContacts={setStatusShowContacts}/>
      <SideBar/>
      <div className={s.appContentWrapper}>
        <Route exact path='/' render={() => <Contents setStatusShowContacts={setStatusShowContacts} />}/>
        <Route exact path='/photo' render={() => <PhotoGallery setStatusShowContacts={setStatusShowContacts} />}/>
      </div>
    </div>
  );
};
