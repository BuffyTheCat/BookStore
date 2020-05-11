import React from 'react';
import { HeaderStyled } from './styles';
import { Link } from 'react-router-dom';

const Header = ( {numItems, total} ) => {
    return (
        <HeaderStyled>
            <Link to="/">
                <p>Book Store</p>
            </Link>
            <Link to="/cart">
                <span>{numItems} items</span>
                <span>({total}$ total)</span>
            </Link>
        </HeaderStyled>
    )
}

export default Header;