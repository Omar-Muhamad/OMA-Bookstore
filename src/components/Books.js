import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../redux/books/books'; //eslint-disable-line

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newBook = {
      id: uuidv4(),
      title: formData.get('title'),
      author: 'Anyone',
    };
    dispatch(addBook(newBook));
  };

  const handleRemove = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <>
      <div>
        <ul className="bookList">
          {books.map((book) => (
            <li key={book.id}>
              <h3>
                Title:
                {book.title}
              </h3>
              <p>
                Auther:
                {book.author}
              </p>
              <button
                type="button"
                onClick={() => handleRemove(book.id)}
                className="removeBtn"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new book..."
          name="title"
          id="title"
          required
        />
        <button type="submit" id="addBookBtn">
          Add book
        </button>
      </form>
    </>
  );
};

export default Books;
