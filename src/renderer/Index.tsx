import * as React from 'react';
import './index.scss';
import ImageList from './containers/ImageList';

const App = () => (
    <div className="app-container">
        <div className="arrow" />
        <div className="arrow border" />
        <ImageList />
    </div>
);

export default App;
