import React from 'react';
import { withService } from '../hoc'
import { AppStyled } from './styles';

const App = ( { storeService } ) => {
    console.log(storeService.getBook());
    return <AppStyled>App</AppStyled>
}

export default withService()(App);