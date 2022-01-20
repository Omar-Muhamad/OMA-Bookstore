const BOOK_ADDED = 'addBook';
const BOOK_REMOVED = 'removeBook';

export const addBook = (payload) => ({
  type: BOOK_ADDED,
  payload,
});

export const removeBook = (id) => ({
  type: BOOK_REMOVED,
  payload: {
    id,
  },
});

const initialState = [];
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ADDED:
      return [
        ...state,
        action.payload,
      ];
    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
