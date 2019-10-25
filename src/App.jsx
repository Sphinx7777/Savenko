import React,{useState} from 'react';
import s from './App.module.scss';
import {Header} from "./Components/Header/Header";
import {SideBar} from "./Components/SideBar/Sidebar";
import {Contents} from "./Components/Contents/Contents";
import {Route} from "react-router-dom";
import {PhotoGallery} from "./Components/PhotoGallery/PhotoGallery";

function App() {
  const [showContacts,setStatusShowContacts] = useState(false);
  const [startTouch,setStartTouch] = useState(null);
  const [finishedTouch,setFinishedTouch] = useState(null);
  console.log(startTouch,finishedTouch,'render')
  return (
    <div className={s.wrapper}

      /*onTouchCancel={(event => console.log(event.touches))}*/ /*onTouchMove={(event => console.log(event.touches))}*/
         onTouchStart={(event => setStartTouch(event.changedTouches))} onTouchEnd={(event => setFinishedTouch(event.changedTouches))}>

      <Header showContacts={showContacts} setStatusShowContacts={setStatusShowContacts}/>
      <SideBar/>
      <div className={s.appContentWrapper}>
        <Route exact path='/' render={() => <Contents setStatusShowContacts={setStatusShowContacts} />}/>
        <Route exact path='/photo' render={() => <PhotoGallery setStatusShowContacts={setStatusShowContacts} />}/>
      </div>
    </div>
  );
}
export default App;
