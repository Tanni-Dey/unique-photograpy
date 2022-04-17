import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import Signup from './Pages/Signup/Signup';
import RequiredAuth from './Shared/RequiredAuth/RequiredAuth';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/checkout' element={<RequiredAuth>
          <Checkout />
        </RequiredAuth>} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
