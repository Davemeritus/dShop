import './App.css';
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      < Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/header" element={<Header/>}/>
      <Route exact path="/checkout" element={<Checkout/>}/>
      <Route exact path="/header" element={<Header/>}/>
      <Route exact path="/" element={<Home/>}/>
          </Routes>
      </Router>

    </div>
  );
}

export default App;
