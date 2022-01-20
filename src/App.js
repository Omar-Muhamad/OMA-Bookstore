import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import Books from './components/Books';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/Categories" element={<Categories />} />
      <Route path="/" element={<Books />} />
    </Routes>
  </div>
);
export default App;
