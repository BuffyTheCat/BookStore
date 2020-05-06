import React from 'react';
import { HeaderStyled } from './styles';

const Header = ( {numItems, total} ) => {
    return (
        <HeaderStyled>
            <p>Book Store</p>
            <span>{numItems} items</span>
            <span>({total}$ total)</span>
        </HeaderStyled>
    )
}

export default Header;