import React, { Component } from 'react';
import { StyledBookList } from './styles';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

const BookList = ({ books, onAddedToCart }) => {
    return (
        <StyledBookList>
            {
                books.map((book) => {
                    return (
                        <BookListItem onAddedToCart={() => onAddedToCart(book.id)} key={book.id} book={book} />
                    )
                })
            }
        </StyledBookList>
    )
}

class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if (loading) {
            return (
                <Spinner />
            )
        }

        if (error) {
            return (
                <ErrorIndicator />
            )
        }

        return <BookList onAddedToCart={onAddedToCart} books={books} />
    };
};

const mapStateToProps = ({ books, loading, error }) => {
    return {
        books,
        loading,
        error
    }
}

const mapDispatchToProps = (dispatch, { storeService }) => {
    return {
        fetchBooks: fetchBooks(storeService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));