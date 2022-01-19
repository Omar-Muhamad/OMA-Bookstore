const Books = () => (
  <>
    <div>
      <ul className="bookList">
        <li>
          <h3>Book Title</h3>
          <button type="button" className="removeBtn">Remove</button>
        </li>
      </ul>
    </div>
    <form>
      <input type="text" placeholder="Add new book..." name="title" required />
      <button type="submit">Add book</button>
    </form>
  </>
);

export default Books;
