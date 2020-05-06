import React from 'react';
import BookList from '../book-list'

const HomePage = () => {
    return (
        <BookList books={[{title: 'asd', author: 'asdasd', id: '1'}]} />
    )
}

export default HomePage;