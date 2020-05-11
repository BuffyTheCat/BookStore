import React, { Component } from 'react';
import { StyledBookList } from './styles';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withService } from '../hoc';
import { fetchBooks } from '../../actions'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

const BookList = ({ books }) => {
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
}

class BookListContainer extends Component {
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

        return <BookList books={books} />
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
        fetchBooks: fetchBooks(storeService, dispatch)
    }
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));