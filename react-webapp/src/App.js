import React, { useState } from 'react'
import './style.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';


import NotFoundView from './views/NotFoundView';
import FooterSection from './sections/FooterSection';
import NavigationBarSection from './sections/NavigationBarSection';

function App() {

  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13452650/pexels-photo-13452650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13452650/pexels-photo-13452650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13452650/pexels-photo-13452650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13452650/pexels-photo-13452650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
  ])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView  items={featuredProducts} />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView items={featuredProducts} />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
