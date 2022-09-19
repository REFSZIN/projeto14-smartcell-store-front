import React, { useEffect } from 'react';
import {Main, Products, Product, Image, AddCart, ProductTitle, Price, Description} from "./style.js";
import UserContext from "../../UserContext.js";
import {useContext} from "react";
import {IoCartOutline} from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader.js';

export default function Store(){
    const {products,isLogged,getProducts,token,postInMyCart,setMyCart,myCart,getMyCart} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if( localStorage.length > 0){
            isLogged();
            getMyCart();
        }
        getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function productPage(product){
        navigate(`/product/${product._id}`);
    };

    async function addInCart(product){
        if(token){
            postInMyCart(product);
            getMyCart();
        }
        else{
            setMyCart([...myCart, {product}]);
        }
    };

    return(
        <Main>
            <Products>
                {products.length === 0 ? (
                    <Loader/>
                ) : (
                    products.map( (product, index) => (
                        <Product key={index}>
                            <Image onClick={() => productPage(product)} src={product.photo}/>
                            <ProductTitle>{product.title}</ProductTitle>
                            <Description>{product.color} - {product.capacity}</Description>
                            <Price>R${product.price}</Price>
                            <AddCart id={product._id} onClick={() => addInCart(product)}><IoCartOutline/>Adicionar ao carrinho</AddCart>
                        </Product>
                    ))
                )}
            </Products>
        </Main>
    )
};


