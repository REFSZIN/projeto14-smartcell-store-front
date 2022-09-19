import React, { useState } from 'react'
import {Main, Title, AlignItems, Price, Image, Description,Button} from "./style.js";
import UserContext from "../../UserContext";
import {useContext, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Header from '../Header/Header.js';

export default function Product(){
    const {productId} = useParams();
    const {products, getProducts} = useContext(UserContext);
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    function backHome(){
        navigate('/')
    }

    useEffect(() => {
        getProducts();
        products.forEach((item) => {
            if(productId === item._id){
                setProduct(item);
                return
            }
        })
        console.log(product)
    }, []);

    return(
        <>
            <Header/>
            <Main>
                <Image src={product.photo}></Image>
                <Title>{product.title}</Title>
                <AlignItems>
                    <Description>Modelo: {product.desc}</Description>
                    <Description>Cor: {product.color}</Description>
                    <Description>Capacidade: {product.capacity}</Description>
                    <br/>
                    <br/>
                    <br/>
                    <Price>R$ {product.price}</Price>
                </AlignItems>
                    <Button onClick={backHome}>Voltar para a página inicial</Button>
            </Main>
        </>
    )
}