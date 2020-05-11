const initionaState = {
    books: [],
    loading: true,
    error: null,
    cardItems: [
        {
            id: 1,
            title: 'asd test',
            count: 3,
            total: 150
        },
        {
            id: 2,
            title: 'asd test 2',
            count: 2,
            total: 70
        }
    ],
    orderTotal: 5
};

const reducer = (state = initionaState, action) => {
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

        default:
            return state;
    }
}
export default reducer;