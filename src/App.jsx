import React, {Component} from 'react';
import s from './App.module.scss';
import {Header} from "./Components/Header/Header";
import {SideBar} from "./Components/SideBar/Sidebar";
import {Contents} from "./Components/Contents/Contents";
import {Route} from "react-router-dom";
import {PhotoGallery} from "./Components/PhotoGallery/PhotoGallery";

class App extends Component {
  render() {
    return (
      <div className={s.wrapper}>
        <Header />
        <SideBar />
        <div className={s.appContentWrapper}>
          <Route exact path='/' render={() => <Contents />}/>
          <Route exact path='/photo' render={() => <PhotoGallery />}/>
        </div>
      </div>
    );
  }
}

export default App;
