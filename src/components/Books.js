import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getBooks, postBooks, deleteBook } from '../redux/books/books';

const Books = () => {
  const booksData = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getBooks()), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newBook = {
      item_id: uuidv4(),
      title: formData.get('title'),
      category: formData.get('category'),
    };
    dispatch(postBooks(newBook));
    // dispatch(getBooks());
  };

  const handleRemove = (id) => {
    dispatch(deleteBook(id));
    // dispatch(getBooks());
  };

  return (
    <>
      <div>
        <ul className="bookList">
          {Object.entries(booksData).map(([key, value]) => (
            <li key={key}>
              <h3>
                Title:
                {value[0]?.title}
              </h3>
              <p>
                Auther:
                {value[0]?.category}
              </p>
              <button
                type="button"
                onClick={() => handleRemove(key)}
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
        <select
          name="category"
          id="category"
          placeholder="Add Book Category"
          required
        >
          <option value="" selected disabled hidden>
            Choose a Category
          </option>
          <option value="Fiction">Fiction</option>
          <option value="Action and Adventure">Action and Adventure</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
          <option value="Letteriture">Letteriture</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Comics">Comic</option>
        </select>
        <button type="submit" id="addBookBtn">
          Add book
        </button>
      </form>
    </>
  );
};

export default Books;
