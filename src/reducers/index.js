const initionaState = {
    books: [],
    loading: true,
    error: null,
    cardItems: [],
    orderTotal: 5
};

const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1),
        ]
    }
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

const updateCardItem = (book, item = {}, quantity) => {
    const { 
        id = book.id,
        title = book.title,
        count = 0,
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity*book.price
    }
}

const updateOrder = (state, bookId, quantity) => {
    const { books, cardItems } = state;
    const book = books.find(({id}) => id === bookId);
    const itemIndex = cardItems.findIndex(({id}) => id === bookId);
    const item = cardItems[itemIndex];

    const newItem = updateCardItem(book, item, quantity)

    return {
        ...state,
        cardItems: updateCartItems(cardItems, newItem, itemIndex)
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
            return updateOrder(state, action.payload, 1)

        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1)

        case 'ALL_BOOK_REMOVED_FROM_CART':
            const item = state.cardItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count)

        default:
            return state;
    }
}
export default reducer;