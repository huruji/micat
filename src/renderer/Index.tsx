import * as React from 'react';
import './index.scss';
import ImageList from './containers/ImageList';
import TitleContainer from './containers/TitleContainer';
// import { setWallpaperEnd } from './utils/ipc'

const App = () => {
    // setWallpaperEnd()
    return (
        <div className="app-container">
            <div className="arrow" />
            <div className="arrow border" />
            <TitleContainer />
            <ImageList />
        </div>
    );
};

export default App;
