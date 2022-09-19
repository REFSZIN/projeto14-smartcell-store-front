import Product from "../components/Product/Product.js";
import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'
import React from 'react';

export default function ProductPage(){
  return(
    <>
      <Header/>
      <Product/>
      <Footer/>
    </>
  )
}