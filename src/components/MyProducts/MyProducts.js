import "./style.js";
import React, {useEffect} from 'react'
import {Product, Image, Title, Description, Price, AlignItems, Icon, Main, Button, MainTitle} from "./style.js";
import UserContext from "../../UserContext";
import {useContext} from "react";
import {useNavigate, Link} from "react-router-dom";
import {IoTrashOutline} from "react-icons/io5";
import axios from "axios";

export default function MyProducts(){
    const {data, myCart, setMyCart, products, setProducts} = useContext(UserContext);
    const navigate = useNavigate();
    let cart = [];
    let userCart = [];
    let bolinha = [];
    
    useEffect(() =>{
        const prom = axios.get('http://localhost:4000/products');
        prom.then(resp => {
            setProducts(resp.data)
        });

    }, []);

    if(!data){
        console.log('não tem usuario');
        cart = JSON.parse(localStorage.getItem('products'));
        cart.map((item, i) => {
            for(let j=0; j<products.length; j++){
                if(item === products[j]._id){
                    userCart = [
                        ...userCart,
                        products[j]
                    ];
                }
            }
        });
    };

    if(data){
        console.log('tem usuario');
        const email = localStorage.getItem('email');
        const body = {
            email: email
        };

        const promise = axios.get('https://smartcell-store-back.herokuapp.com/mycart', body);
        promise.then(res => {
            cart = (res.data);
            console.log(cart);
            console.log(products);
            cart.map(item => {
                for(let j=0; j<products.length; j++){
                    
                    if(item._id === products[j]._id){
                        userCart = [
                            ...userCart,
                            products[j]
                        ];
                    }
                }
            })
            console.log(userCart)
        });
    };

    function deleteProduct(){
        console.log('tem que deletar');
    }

    return(
        <Main>
            {userCart.length !== 0 ? (
                userCart.map((product, i) => (
                    <Product index={i}>
                    <Image src={product.photo}></Image>
                    <AlignItems>
                        <Title>{product.title}</Title>
                        <Description>{product.color} - {product.capacity}</Description>
                        <Price>{product.price}</Price>
                    </AlignItems>
                    <Icon>
                        <IoTrashOutline onClick={() => deleteProduct(product)}/>
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