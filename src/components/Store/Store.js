import React from 'react';
import {Main, Products, Product, Image, AddCart, ProductTitle, Price, Description} from "./style.js";
import Header from '../Header/Header.js';
import UserContext from "../../UserContext";
import { useContext,useEffect} from "react";
import {IoCartOutline} from "react-icons/io5";
import teste from "../../assets/images/teste.webp";

export default function Store(){
    const {setLoad,isLogged,data,products,getProducts} = useContext(UserContext);

    useEffect(() => {
        if( localStorage.length > 0){
            isLogged();
        }
        setLoad(0);
    }, []);

    return(
        <Main>
            <Header/>
            <Products>
                <Product>
                    <Image src={teste}/>
                    <ProductTitle>Iphone 13</ProductTitle>
                    <Description>256GB</Description>
                    <Price>R$3000,00</Price>
                    <AddCart><IoCartOutline/>Adicionar ao carrinho</AddCart>
                </Product>
            </Products>
        </Main>
    );
};
