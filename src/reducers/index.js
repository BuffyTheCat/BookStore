const initionaState = {
    books: [],
    loading: true,
    error: null,
    cardItems: [],
    orderTotal: 5
};

const updateCartItems = (cartItems, item, idx) => {
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1),
    ]
}

const updateCardItem = (book, item = {}) => {
    const { 
        id = book.id,
        title = book.title,
        count = 0,
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + 1,
        total: total + book.price
    }
}

const reducer = (state = initionaState, action) => {
    console.log(action.type);
    
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }

        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const itemIndex = state.cardItems.findIndex(({id}) => id === bookId);
            const item = state.cardItems[itemIndex];

            const newItem = updateCardItem(book, item)

            return {
                ...state,
                cardItems: updateCartItems(state.cardItems, newItem, itemIndex)
            }

        default:
            return state;
    }
}
export default reducer;