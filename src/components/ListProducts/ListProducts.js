import React, { useState } from 'react';
import {Product, Image, AddCart, ProductTitle, Price, Description} from "./style.js";
import UserContext from "../../UserContext.js";
import {useContext} from "react";
import {IoCartOutline} from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


export default function ListProducts({product, index}){
    const {token,postInMyCart,setMyCart,myCart,getMyCart} = useContext(UserContext);
    const navigate = useNavigate();
    const [type, setType] = useState('');
    const [title, setTitle] = useState('Adicionar ao carrinho');

    function productPage(product){
        navigate(`/product/${product._id}`);
    };

    async function addInCart(product){
        if(token){
            if(type === ''){
                postInMyCart(product);
                getMyCart();
                setType('selected');
                setTitle('Adicionado ao carrinho');
            } if (type === 'selected'){
                alert('Produto já foi adicionado ao carrinho!')
            }
        }
        else{
            setMyCart([...myCart, {product}]);
        }
    };

    return(
        <Product key={index}>
            <Image onClick={() => productPage(product)} src={product.photo}/>
            <ProductTitle>{product.title}</ProductTitle>
            <Description>{product.color} - {product.capacity}</Description>
            <Price>R${product.price}</Price>
            <AddCart id={product._id} type={type} onClick={() => addInCart(product)}><IoCartOutline/>{title}</AddCart>
        </Product>
    );
};
