import "./style.js";
import React, {useEffect} from 'react'
import {Product, Image, Title, Description, Price, AlignItems, Icon, Main, Button, MainTitle} from "./style.js";
import UserContext from "../../UserContext";
import {useContext} from "react";
import { Link} from "react-router-dom";
import {IoTrashOutline} from "react-icons/io5";
import axios from "axios";

export default function MyProducts(){
    const {data, deleteMyCart, products, setProducts} = useContext(UserContext);
    let cart = [];
    let userCart = [];
    
    useEffect(() =>{
        const prom = axios.get('https://smartcell-store-back.herokuapp.com/products');
        prom.then(resp => {
            setProducts(resp.data)
        });

    }, [setProducts]);

    if(!data){
        cart = JSON.parse(localStorage.getItem('products'));
        cart.map((item, i) => {
            for(let j=0; j<products.length; j++){
                if(item === products[j]._id){
                    userCart = [
                        ...userCart,
                        products[j]
                    ];
                }
            }return userCart;
        })
        
    };

    if(data){
        const email = localStorage.getItem('email');
        const body = {
            email
        };

        const promise = axios.get('https://smartcell-store-back.herokuapp.com/mycart', body);
        promise.then(res => {
            cart = (res.data);
            cart.map(item => {
                for(let j=0; j<item.length; j++){
                    
                    if(item._id === products[j]._id){
                        userCart = [
                            ...userCart,
                            products[j]
                        ];
                    }
                } return userCart;
            })
            console.log(userCart)
        });
    };

    function deleteProduct(props){
        let result = window.confirm('Tem certeza de que deseja excluir?');
        let message = result ?"DELETADO":'MANTIDO';
        alert(message);
        if(message === "DELETADO"){
            deleteMyCart(props);
    }}

    return(
        <Main>
            {userCart.length !== 0 ? (
                userCart.map((product, i) => (
                    <Product key={i}>
                    <Image src={product.photo}></Image>
                    <AlignItems>
                        <Title>{product.title}</Title>
                        <Description>{product.color} - {product.capacity}</Description>
                        <Price>{product.price}</Price>
                    </AlignItems>
                    <Icon>
                        <IoTrashOutline id={product._id} onClick={() => deleteProduct(product._id)}/>
                    </Icon>
                </Product>
                ))
            ) : (
                <>
                <MainTitle>Seu carrinho está vazio</MainTitle>
                    <Link to="/">
                    <Button>Voltar para a página inicial</Button>
                    </Link>
                </>
            )}
        </Main>
    );
}