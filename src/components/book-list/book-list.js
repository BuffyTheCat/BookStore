import React, { Component } from 'react';
import { StyledBookList } from './styles';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

class BookList extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error } = this.props;

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

const mapStateToProps = ({ books, loading, error }) => {
    return {
        books,
        loading,
        error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { storeService } = ownProps;
    return {
        fetchBooks: () => {
            dispatch(booksRequested());
            storeService.getBook()
                .then((data) => dispatch(booksLoaded(data)))
                .catch(err => dispatch(booksError(err)));
        }
    }
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(BookList));