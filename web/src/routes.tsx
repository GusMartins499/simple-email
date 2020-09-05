import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './pages/form'

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Form} />
        </BrowserRouter>
    )
};

export default Routes;