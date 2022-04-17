import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
