import { Routes, Route } from 'react-router-dom';
import Home from '../app';

import Category from '../app/shop/category/page';
import Search from '../app/shop/search/query';
import Product from '../app/shop/product/slug';
import Cart from '../app/shop/cart/page';
import Empty from '../app/shop/cart/empty';
import Checkout from '../app/shop/checkout/page';

import Dashboard from '../app/admin/page';
import Products from '../app/admin/products';
import ProductSlug from '../app/admin/products/slug';
import Orders from '../app/admin/orders';
import Users from '../app/admin/users';

import Login from '../app/auth/login';
// import Register from '../pages/auth/register';

export const RouterApp = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/category/:category" element={<Category />} />
    <Route path="/search/:query" element={<Search />} />
    <Route path="/product/:slug" element={<Product />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/cart/empty" element={<Empty />} />
    <Route path="/checkout/summary" element={<Checkout />} />

    <Route path="/admin" element={<Dashboard />} />
    <Route path="/admin/products" element={<Products />} />
    <Route path="/admin/products/:slug" element={<ProductSlug />} />
    <Route path="/admin/orders" element={<Orders />} />
    <Route path="/admin/users" element={<Users />} />
    
    <Route path="/auth/login" element={<Login />} />
    {/* <Route path="/auth/register" element={<Register />} /> */}
  </Routes>
)