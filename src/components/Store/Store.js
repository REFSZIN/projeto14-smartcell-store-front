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
    const {products, setProducts, data, headers} = useContext(UserContext);
    const navigate = useNavigate();
    let cart = [];

    useEffect(() => {
        const promise = axios.get('https://smartcell-store-back.herokuapp.com/products');
        promise.then(res => {
            setProducts(res.data);
        });
    }, [setProducts]);

    function productPage(product){
        navigate(`/${product._id}`);
    };

    async function hasUser(product){
        const productId = product._id;
        const email = localStorage.getItem('email');
        const purchase = {
            price: product.price,
            product: productId,
            email
        }

        if(data){
            await axios.post('https://smartcell-store-back.herokuapp.com/carts', purchase, headers);
            return alert('Produto adicionado ao carrinho!');
        }

        if(localStorage.getItem('products') === null || localStorage.getItem('products') === undefined){
            cart.push(productId);
            localStorage.setItem('products', JSON.stringify(cart));
            console.log('ta no primeiro if')
            return alert('Produto adicionado ao carrinho! Faça login para finalizar a compra.');
        } else {
            const localCart = JSON.parse(localStorage.getItem('products'));
            console.log(localCart)
            localStorage.removeItem('products');
            cart = [
                ...localCart,
                productId
            ]
            console.log(cart);
            localStorage.setItem('products', JSON.stringify(cart));
            return alert('Produto adicionado ao carrinho! Faça login para finalizar a compra.');
        };
    };

    return(
        <Main>
            <Header/>
            <Products>
                {products.length === 0 ? (
                    <Loading src={loading}/>
                ) : (
                    products.map((product, index) => (
                        <Product  key={index}>
                            <Image onClick={() => productPage(product)} src={product.photo}/>
                            <ProductTitle>{product.title}</ProductTitle>
                            <Description>{product.color} - {product.capacity}</Description>
                            <Price>R${product.price}</Price>
                            <AddCart onClick={() => hasUser(product)}><IoCartOutline/>Adicionar ao carrinho</AddCart>
                        </Product>
                    ))
                )}
            </Products>
            <Footer/>
        </Main>
    )
};


