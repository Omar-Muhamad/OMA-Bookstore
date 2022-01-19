import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Catagories from "./components/Catagories";
import Books from "./components/Books";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Catagories" element={<Catagories />} />
        <Route exact path="/" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
