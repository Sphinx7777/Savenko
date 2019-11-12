import React, {useState, useEffect} from 'react';
import s from './App.module.scss';
import {Header} from "./Components/Header/Header";
import {SideBar} from "./Components/SideBar/Sidebar";
import {Contents} from "./Components/Contents/Contents";
import {Route, withRouter} from "react-router-dom";
import {PhotoGallery} from "./Components/PhotoGallery/PhotoGallery";

const App = (props) => {

	const [showContacts, setStatusShowContacts] = useState(false);

	const [finish, setFinish] = useState(null);

	const [start, setStart] = useState(null);

	const clearTouch = () => {
		setStart(null);
		setFinish(null);
	};

	useEffect(() => {
		if (finish && (start - finish) > 130) {
			clearTouch();
			setTimeout(props.history.push('/photo'), 300);
		} else if (finish && (finish - start) > 130) {
			clearTouch();
			setTimeout(props.history.push('/'), 300);
		}
	}, [finish, start, props.history]);

	const onTouchFinished = event => setFinish(event.changedTouches[0].screenX);
	const onTouchStarted = event => setStart(event.changedTouches[0].screenX);

	return (
		<div className={s.wrapper}>
			<Header {...{showContacts, setStatusShowContacts}}/>
			<SideBar/>
			<div className={s.appContentWrapper}
					 onTouchEnd={onTouchFinished}
					 onTouchStart={onTouchStarted}
			>
				<Route exact path='/' render={() => <Contents {...{setStatusShowContacts}}/>}/>
				<Route exact path='/photo' render={() => <PhotoGallery {...{setStatusShowContacts}}/>}/>
			</div>
		</div>
	);
};
export default withRouter(App);