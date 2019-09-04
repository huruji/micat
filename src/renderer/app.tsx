import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Index from './Index';
import useAppStore from './store';
import '@primer/css';

// Create main element
const mainElement = document.createElement('div');
mainElement.classList.add('app-container');
document.body.appendChild(mainElement);

// Render components
const render = (Component: () => JSX.Element) => {
    ReactDOM.render(
        <AppContainer>
            <useAppStore.Provider>
                <Component />
            </useAppStore.Provider>
        </AppContainer>,
        mainElement
    );
};

render(Index);
