import * as React from 'react';
import './index.scss';
import ImageList from './containers/ImageList';
import TitleContainer from './containers/TitleContainer';

const App = () => (
    <div className="app-container">
        <div className="arrow" />
        <div className="arrow border" />
        <TitleContainer />
        <ImageList />
    </div>
);

export default App;
