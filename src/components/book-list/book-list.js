import React, { Component } from 'react';
import { StyledBookList } from './styles';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withService } from '../hoc';
import { booksLoaded } from '../../actions'

class BookList extends Component {
    componentDidMount() {
        const { storeService } = this.props;
        const data = storeService.getBook();
        this.props.booksLoaded(data);
    }

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

const mapStateToProps = ({ books }) => {
    return {
        books,
    }
}

const mapDispatchToProps = {
    booksLoaded
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(BookList));