import React, { Component } from 'react';
import { StyledBookList } from './styles';
import BookListItem from '../book-list-item';

class BookList extends Component {
    render() {
        const { books } = this.props;
        return (
            <StyledBookList>
                {
                    books.map((book) => {
                        return (
                            <BookListItem key={book.id} book={book} />
                        )
                    })
                }
            </StyledBookList>
        )
    };
};

export default BookList;