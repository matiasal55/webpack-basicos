import React from 'react';
import power from './static/power-button.png';
import './styles/index.scss';

const App = () => {
    return (
        <div>
            <h1>Webpack - Files</h1>
            <img src={power} alt='Power' />
        </div>
    );
};

export default App;
