const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks,
    }
}


const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error,
    }
}

const fetchBooks = (storeService, dispatch) => () => {
    dispatch(booksRequested());
    storeService.getBook()
        .then((data) => dispatch(booksLoaded(data)))
        .catch(err => dispatch(booksError(err)));
}

export {
    fetchBooks
}

// const booksLoaded = (newBooks) => {
//     return {
//         type: 'FETCH_BOOKS_REQUEST',
//         payload: newBooks,
//     }
// }

// const booksRequested = () => {
//     return {
//         type: 'FETCH_BOOKS_SUCCESS'
//     }
// }

// const booksError = (error) => {
//     return {
//         type: 'FETCH_BOOKS_FAILURE',
//         payload: error,
//     }
// }

// export {
//     booksLoaded,
//     booksRequested,
//     booksError
// }