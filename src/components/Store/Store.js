import React, { useEffect } from 'react';
import {Main, Products, Product, Image, AddCart, ProductTitle, Price, Description, Loading} from "./style.js";
import Header from '../Header/Header.js';
import UserContext from "../../UserContext.js";
import {useContext} from "react";
import {IoCartOutline} from "react-icons/io5";
import Footer from "../Footer/Footer.js";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loading from "../../assets/images/loading.gif";

export default function Store(){
    const {products, setProducts, postInMyCart} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get('http://localhost:4000/products');
        promise.then(res => {
            setProducts(res.data);
        });
    }, []);

    function productPage(product){
        navigate(`/${product._id}`);
    };
    
    return(
        <Main>
            <Header/>
            <Products>
                {products.length === 0 ? (
                    <Loading src={loading}/>
                ) : (
                    products.map((product, index) => (
                        <Product index={index}>
                            <Image onClick={() => productPage(product)} src={product.photo}/>
                            <ProductTitle>{product.title}</ProductTitle>
                            <Description>{product.color} - {product.capacity}</Description>
                            <Price>R${product.price}</Price>
                            <AddCart><IoCartOutline onClick={() => postInMyCart(product)} />Adicionar ao carrinho</AddCart>
                        </Product>
                    ))
                )}
            </Products>
            <Footer/>
        </Main>
    )
};


