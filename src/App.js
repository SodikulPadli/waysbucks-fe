import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import HomePageAdmin from './pages/HomePageAdmin';
import DetailProduct from './pages/DetailProduct';
import ProfilePage from './pages/Profile';
import MyCart from './pages/Cart';
import AddProduct from './pages/AddProduct';
import AddToping from './pages/AddToping';
import SuccesAdd from './pages/SuccesAdd';

function App() {
  return (
    <div>
      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/succes-add" element={<SuccesAdd />} />
          <Route path="/home-admin" element={<HomePageAdmin />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/detail-product" element={<DetailProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-toping" element={<AddToping />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
