import React, { useEffect } from 'react';
import {Main, Products, Product, Image, AddCart, ProductTitle, Price, Description} from "./style.js";
import UserContext from "../../UserContext.js";
import {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader.js';
import ListProduct from "../ListProducts/ListProducts.js"

export default function Store(){
    const {products,isLogged,getProducts,getMyCart} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if( localStorage.length > 0){
            isLogged();
            getMyCart();
        }
        getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <Main>
            <Products>
                {products.length === 0 ? (
                    <Loader/>
                ) : (
                    products.map( (product, index) => (
                        <ListProduct key={index} product={product} />
                    ))
                )}
            </Products>
        </Main>
    )
};


