import React, { Component } from 'react';
import { StyledBookList } from './styles';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

class BookList extends Component {
    componentDidMount() {
        const { storeService, booksLoaded, booksRequested, booksError } = this.props;
        booksRequested();
        storeService.getBook()
            .then((data) => booksLoaded(data))
            .catch(err => booksError(err));
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

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(BookList));