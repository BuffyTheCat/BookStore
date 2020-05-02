const initionaState = {
    books: []
};

const reducer = (state = initionaState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            }
        default:
            return state;
    }
}
export default reducer;