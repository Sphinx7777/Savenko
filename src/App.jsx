import React,{useState,useEffect} from 'react';
import s from './App.module.scss';
import {Header} from "./Components/Header/Header";
import {SideBar} from "./Components/SideBar/Sidebar";
import {Contents} from "./Components/Contents/Contents";
import {Route, withRouter} from "react-router-dom";
import {PhotoGallery} from "./Components/PhotoGallery/PhotoGallery";

const App = (props) => {
  const [showContacts,setStatusShowContacts] = useState(false);
  let [finish,setFinish] = useState(null);
  let [start,setStart] = useState(null);
  const clearTouch = () => {
    setStart(null);
    setFinish(null);
  };
  useEffect(()=>{
    if(finish &&(start-finish)>130){
      clearTouch();
      props.history.push('/photo');
    }else if(finish &&(finish-start)>130){
      clearTouch();
      props.history.push('/');
    }
  },[finish,start,props.history]);

  return (
  	<div className={s.wrapper}>
			<Header showContacts={showContacts} setStatusShowContacts={setStatusShowContacts}/>
      <SideBar/>
      <div className={s.appContentWrapper}
           onTouchEnd={(event) => {
             setFinish(event.changedTouches[0].screenX);
           }}
           onTouchStart={(event) => {
             setStart(event.changedTouches[0].screenX);
           }}
      >
        <Route exact path='/' render={() => <Contents setStatusShowContacts={setStatusShowContacts} />}/>
        <Route exact path='/photo' render={() => <PhotoGallery setStatusShowContacts={setStatusShowContacts} />}/>
      </div>
    </div>
  );
};
export default withRouter(App);