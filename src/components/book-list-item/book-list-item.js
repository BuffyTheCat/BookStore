import React from 'react';
import { StyledBookListItem, StyledBookListItemInfo } from './styles';

const BookListItem = ( { book, onAddedToCart } ) => {
    const { title, author, imgPath, price } = book;
    return (
        <StyledBookListItem>
            <img src={imgPath} alt="cover" />
            <StyledBookListItemInfo>                
                <a href="#">{title}</a>
                <p>{author}</p>
                <span>$ {price}</span>
                <button onClick={onAddedToCart}>Add</button>
            </StyledBookListItemInfo>
        </StyledBookListItem>
    )
}

export default BookListItem;