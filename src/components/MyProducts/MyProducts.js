import "./style.js";
import React, {useEffect} from 'react'
import {Product, Image, Title, Description, Price, AlignItems, Icon, Main} from "./style.js";
import UserContext from "../../UserContext";
import {useContext} from "react";
import {useNavigate, Link} from "react-router-dom";
import teste from "../../assets/images/teste.webp";
import {IoTrashOutline} from "react-icons/io5";

export default function MyProducts(){
    const getProducts = [
        {
            title: 'Iphone 13',
            price: `5000.00`,
            description: '256GB',
            image: {teste}
        },
        {
            title: 'Iphone 13',
            price: `5000.00`,
            description: '256GB',
            image: {teste}
        },{
            title: 'Iphone 13',
            price: `5000.00`,
            description: '256GB',
            image: {teste}
        },
        {
            title: 'Iphone 13',
            price: `5000.00`,
            description: '256GB',
            image: {teste}
        }
    ];

    return(
        <Main>
            <Product>
                <Image src={teste}></Image>
                <AlignItems>
                    <Title>Iphone 13</Title>
                    <Description>256GB</Description>
                    <Price>R$ 5000,00</Price>
                </AlignItems>
                <Icon>
                    <IoTrashOutline/>
                </Icon>
            </Product>
        <Product>
            <Image src={teste}></Image>
            <AlignItems>
                <Title>Iphone 13</Title>
                <Description>256GB</Description>
                <Price>R$ 5000,00</Price>
            </AlignItems>
            <Icon>
                <IoTrashOutline/>
            </Icon>
        </Product>
        </Main>
    );
}