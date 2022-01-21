const initialState = {
  loading: false,
  books: [],
  error: '',
};

const GET_BOOKS = 'GET_BOOKS';
const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';

export const getBooksRequest = () => ({
  type: GET_BOOKS,
});

export const getBooksSuccess = (payload) => ({
  type: GET_BOOKS_SUCCESS,
  payload,
});

export const getBooksFailure = (error) => ({
  type: GET_BOOKS_FAILURE,
  error,
});

const POST_BOOKS = 'POST_BOOKS';
const POST_BOOKS_SUCCESS = 'POST_BOOKS_SUCCESS';
const POST_BOOKS_FAILURE = 'POST_BOOKS_FAILURE';

export const postBooksRequest = () => ({
  type: POST_BOOKS,
});

export const postBooksSuccess = (payload) => ({
  type: POST_BOOKS_SUCCESS,
  payload,
});

export const postBooksFailure = (error) => ({
  type: POST_BOOKS_FAILURE,
  error,
});

const DELETE_BOOKS = 'DELETE_BOOKS';
const DELETE_BOOKS_SUCCESS = 'DELETE_BOOKS_SUCCESS';
const DELETE_BOOKS_FAILURE = 'DELETE_BOOKS_FAILURE';

export const deleteBooksRequest = () => ({
  type: DELETE_BOOKS,
});

export const deleteBooksSuccess = (payload) => ({
  type: DELETE_BOOKS_SUCCESS,
  payload,
});

export const deleteBooksFailure = (error) => ({
  type: DELETE_BOOKS_FAILURE,
  error,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        loading: true,
      };
    case GET_BOOKS_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: '',
      };
    case GET_BOOKS_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload,
      };
    case POST_BOOKS:
      return {
        ...state,
        loading: true,
      };
    case POST_BOOKS_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: '',
      };
    case POST_BOOKS_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload,
      };
    case DELETE_BOOKS:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BOOKS_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: '',
      };
    case DELETE_BOOKS_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CqPOA94UfXDdN76nPU1T/books';

export const getBooks = () => async (dispatch) => {
  dispatch(getBooksRequest(url));
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(getBooksSuccess(data));
  } catch (err) {
    console.log(err.message);
    dispatch(getBooksFailure(err.message));
  }
};

export const postBooks = (newBook) => async (dispatch) => {
  dispatch(postBooksRequest());
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(newBook),
    });
    const data = await response.json();
    console.log({ data });
    dispatch(postBooksSuccess());
  } catch (err) {
    console.log(err.message);
    dispatch(postBooksFailure(err.message));
  }
};

export const deleteBook = (id) => async (dispatch) => {
  dispatch(deleteBooksRequest(id));
  try {
    const delURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CqPOA94UfXDdN76nPU1T/books/${id}`;
    const response = await fetch(delURL, {
      method: 'DELETE',
    });
    console.log(response);
  } catch (err) {
    console.log(err.message);
    dispatch(deleteBooksFailure(err.message));
  }
};

export default bookReducer;
