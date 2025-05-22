import { UserAccPage } from './pages/userAccountPage';
import { CreatedPage } from './pages/accountCreatedPage';
import { Achievements } from './pages/Achievements';
import { RelevantNewsApp } from './pages/relevantNewsPage';
import { Support } from './pages/SupportPage';
import { Wishlist } from './pages/WishlistPage';
import { Cart } from './pages/CartPage';
import { Main } from './pages/MainPage';
import { Login } from './pages/loginPage';
import { CreateAcc, CreateAccPage } from './pages/createAccPage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<UserAccPage />} />
          <Route path='/News' element={<RelevantNewsApp />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Create' element={<CreateAccPage />} />
          <Route path='/Accses' element={<CreatedPage />} />
          <Route path='/main' element={<Main />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/Support' element={<Support />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
