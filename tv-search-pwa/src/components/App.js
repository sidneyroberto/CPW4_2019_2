import React from 'react';
import HttpsApp from 'react-https-redirect';

import './App.scss';
import Rotas from '../Rotas';

const App = () => (
    <HttpsApp>
        <Rotas />
    </HttpsApp>
);

export default App;
