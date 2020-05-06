import React, { Component } from 'react';
import { StyledBookList } from './styles';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withService } from '../hoc';
import { booksLoaded } from '../../actions'
import Spinner from '../spinner'

class BookList extends Component {
    componentDidMount() {
        const { storeService, booksLoaded } = this.props;
        storeService.getBook().then((data) => booksLoaded(data));
    }

    render() {
        const { books, loading } = this.props;

        if (loading) {
            return (
                <Spinner />
            )
        } else {
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
    };
};

const mapStateToProps = ({ books, loading }) => {
    return {
        books,
        loading
    }
}

const mapDispatchToProps = {
    booksLoaded
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(BookList));