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
  };

  const handleRemove = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <>
      <div className="bookContainer">
        <ul className="bookList">
          {Object.entries(booksData).map(([key, value]) => (
            <li className="bookItem" key={key}>
              <div className="bookData">
                <p className="category">{value[0].category}</p>
                <h3>{value[0].title}</h3>
              </div>
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
      <div className="lineBr" />
      <form onSubmit={handleSubmit}>
        <h2 className="formTitle">Add New Book</h2>
        <div className="formContainer">
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
            required
          >
            <option value="" default hidden>
              Choose a Category
            </option>
            <option className="option" value="Fiction">Fiction</option>
            <option className="option" value="Action and Adventure">Action and Adventure</option>
            <option className="option" value="Fantasy">Fantasy</option>
            <option className="option" value="Romance">Romance</option>
            <option className="option" value="Letteriture">Letteriture</option>
            <option className="option" value="Sci-Fi">Sci-Fi</option>
            <option className="option" value="Comics">Comic</option>
          </select>
          <button type="submit" id="addBookBtn">
            Add book
          </button>
        </div>
      </form>
    </>
  );
};

export default Books;
