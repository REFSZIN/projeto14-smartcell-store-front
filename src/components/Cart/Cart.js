import "./style.js";
import React, {useEffect} from 'react'
import {Main, Title, TotalFooter, AlignItems, SubTitle, Price, Button,Product,Image,Description,Icon,MainTitle} from "./style.js";
import UserContext from "../../UserContext";
import {useContext} from "react";
import {useNavigate, Link} from "react-router-dom";
import {IoArrowForward} from "react-icons/io5"
import {IoTrashOutline} from "react-icons/io5";

export default function Cart(){
    const navigate = useNavigate();
    let saldo = 0;
    const {myCart,deleteMyCart,getMyCart} = useContext(UserContext);
    useEffect(() => {
        if( localStorage.length > 0){
            getMyCart();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getMyCart]);

    function deleteProduct(props){
        let result = window.confirm('Tem certeza de que deseja excluir?');
        let message = result ?"DELETADO":'MANTIDO';
        alert(message);
        if(message === "DELETADO"){
            deleteMyCart(props);
            getMyCart();
        }
    }
    function goToCheckOut(){
        navigate("/checkout")
    };
    for (let i = 0; i < myCart.length; i++) {
        saldo += Number(myCart[i].product.price);
        }
    return(
        <Main>
            <Title>Meu carrinho</Title>
            {myCart.length !== 0 ? (
                myCart.map((carrinho, i) => (
                    <Product key={i}>
                    <Image src={carrinho.product.photo}></Image>
                    <AlignItems>
                        <Title>{carrinho.product.title}</Title>
                        <Description>{carrinho.product.color} - {carrinho.product.capacity}</Description>
                        <Price>{carrinho.product.price}</Price>
                    </AlignItems>
                    <Icon>
                        <IoTrashOutline id={carrinho._id} onClick={() => deleteProduct(carrinho._id)}/>
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
            <TotalFooter>
                <AlignItems>
                    <SubTitle>Total price</SubTitle>
                    <Price>R${saldo}</Price>
                </AlignItems>
            <Button onClick={goToCheckOut}>Finalizar compra<IoArrowForward/></Button>
            </TotalFooter>
        </Main>
    )
}