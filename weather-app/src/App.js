import React from 'react';
import axios from 'axios';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends React.Component {
    render() {
        return (
            <div>
                <Titles />
                <Form />
                <Weather />
            </div>
        );
    }
};

export default App;

/*
Pseudocode:
* Create components;
* Create Wireframe;
* Obtain and hide API key;
* install axios;
*/