import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppStyled } from './styles';
import { HomePage, CardPage } from '../pages';

const App = () => {
    return (
        <AppStyled>
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/card' component={CardPage} />
                <Route />
            </Switch>
        </AppStyled>
    )
}

export default App;