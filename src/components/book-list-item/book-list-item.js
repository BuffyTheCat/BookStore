import React from 'react';
import { StyledBookListItem, StyledBookListItemInfo } from './styles';

const BookListItem = ( { book } ) => {
    const { title, author, imgPath, price } = book;
    return (
        <StyledBookListItem>
            <img src={imgPath} alt="cover" />
            <StyledBookListItemInfo>                
                <a href="#">{title}</a>
                <p>{author}</p>
                <span>$ {price}</span>
                <button>Add</button>
            </StyledBookListItemInfo>
        </StyledBookListItem>
    )
}

export default BookListItem;