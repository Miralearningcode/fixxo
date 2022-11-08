import React, {useEffect, useState} from 'react'
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

import { ProductsContext, FeaturedProductsContext, FlashSaleLeftContext, FlashSaleRightContext } from './contexts/contexts'


  
  
  function App() {
    const [products, setProducts] = useState([])
    const [featured, setFeatured] = useState([])
    const [flashSaleLeft, setFlashSaleLeft] = useState([])
    const [flashSaleRight, setFlashSaleRight] = useState([])
  
    useEffect(() => {
      const fetchAllData = async () => {
        const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
        setProducts(await result.json())
      }
      fetchAllData()
  
      const fetchFeaturedData = async () => {
        const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
        setFeatured(await result.json())
      }
      fetchFeaturedData()

      const fetchFlashSaleLeftData = async () => {
        const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
        setFlashSaleLeft(await result.json())
      }
      fetchFlashSaleLeftData()

      const fetchFlashSaleRightData = async () => {
        const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
        setFlashSaleRight(await result.json())
      }
      fetchFlashSaleRightData()
  
    }, [setProducts, setFeatured, setFlashSaleLeft, setFlashSaleRight])  
    //[] is a trigger, without it, it will spam the API, always [] after useEffect, some dependency parts won't work, setProducts works fine, but products would not work for example.

  return (
    <BrowserRouter>
      <ProductsContext.Provider value={products}>
      <FeaturedProductsContext.Provider value={featured}>
      <FlashSaleLeftContext.Provider value={flashSaleLeft}>
      <FlashSaleRightContext.Provider value={flashSaleRight}>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      </FlashSaleRightContext.Provider>
      </FlashSaleLeftContext.Provider>
      </FeaturedProductsContext.Provider>
      </ProductsContext.Provider> 
    </BrowserRouter>
  );
}

export default App;
