import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppStyled } from './styles';
import { HomePage, CardPage } from '../pages';

import Header from '../header'
import ShoppingCardTable from '../shopping-card-table'

const App = () => {
    return (
        <AppStyled role='main'>
            <Header numItems="2" total="260" />
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/card' component={CardPage} />
                <Route />
            </Switch>
            <ShoppingCardTable />
        </AppStyled>
    )
}

export default App;