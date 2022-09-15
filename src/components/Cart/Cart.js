import "./style.js";
import React, {useEffect} from 'react'
import {Main, Title, TotalFooter, AlignItems, SubTitle, Price, Button} from "./style.js";
import UserContext from "../../UserContext";
import {useContext} from "react";
import {useNavigate, Link} from "react-router-dom";
import Header from '../Header/Header.js';
import Footer from "../Footer/Footer.js";
import MyProducts from "../MyProducts/MyProducts.js";
import {IoArrowForward} from "react-icons/io5"

export default function Cart(){
    const navigate = useNavigate();

    function goToCheckOut(){
        navigate("/checkout")
    };

    return(
        <Main>
            <Header/>
            <Title>Meu carrinho</Title>
            <MyProducts/>
            <Footer/>
            <TotalFooter>
                <AlignItems>
                    <SubTitle>Total price</SubTitle>
                    <Price>R$15000,00</Price>
                </AlignItems>
            <Button onClick={goToCheckOut}>Finalizar compra<IoArrowForward/></Button>
            </TotalFooter>
        </Main>
    )
}