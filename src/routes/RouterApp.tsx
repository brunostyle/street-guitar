import { Routes, Route } from 'react-router-dom';
import Home from '../pages';
// import Cards from '../pages/category/cards';
// import Covers from '../pages/category/covers';
// import Logos from '../pages/category/logos';
// import Search from '../pages/search/query';
// import Product from '../pages/product/slug';
// import Cart from '../pages/cart';
// import Empty from '../pages/cart/empty';
// import Summary from '../pages/checkout/summary';

// import Dashboard from '../pages/admin';
import Products from '../pages/admin/products';
import ProductSlug from '../pages/admin/products/slug';
// import Orders from '../pages/admin/orders';
// import Users from '../pages/admin/users';

// import Login from '../pages/auth/login';
// import Register from '../pages/auth/register';

export const RouterApp = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/category/cards" element={<Cards />} /> */}
    {/* <Route path="/category/covers" element={<Covers />} /> */}
    {/* <Route path="/category/logos" element={<Logos />} /> */}
    {/* <Route path="/search/:query" element={<Search />} /> */}
    {/* <Route path="/product/:slug" element={<Product />} /> */}
    {/* <Route path="/cart" element={<Cart />} /> */}
    {/* <Route path="/cart/empty" element={<Empty />} /> */}
    {/* <Route path="/checkout/summary" element={<Summary />} /> */}

    {/* <Route path="/admin" element={<Dashboard />} /> */}
    <Route path="/admin/products" element={<Products />} />
    <Route path="/admin/products/:slug" element={<ProductSlug />} />
    {/* <Route path="/admin/orders" element={<Orders />} /> */}
    {/* <Route path="/admin/users" element={<Users />} /> */}
    
    {/* <Route path="/auth/login" element={<Login />} /> */}
    {/* <Route path="/auth/register" element={<Register />} /> */}
  </Routes>
)