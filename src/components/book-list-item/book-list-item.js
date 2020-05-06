import React from 'react';
import { StyledBookListItem } from './styles';

const BookListItem = ( { book } ) => {
    const { title, author } = book;
    return (
        <StyledBookListItem>
            <span>{author}</span>
            <p>{title}</p>
        </StyledBookListItem>
    )
}

export default BookListItem;