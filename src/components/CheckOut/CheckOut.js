import "./style.js";
import React from 'react'
import {Main, Title, SubTitle,  Button, Titles, Return, Form, Input, Span, Select, MainButton} from "./style.js";
import {Link} from "react-router-dom";
import Header from '../Header/Header.js';
import MyProducts from "../MyProducts/MyProducts.js";
import {IoArrowBack} from "react-icons/io5";

export default function CheckOut(){


    return(
        <>
        <Header/>
        <Main>
            <Titles>
                <Title>Finalize a sua compra</Title>
                <Link to="/carrinho">
                    <Return><pre><IoArrowBack/>   Retornar para o Carrinho</pre></Return>
                </Link>
            </Titles>
            <Form>
                <SubTitle>Endereço de Entrega</SubTitle>
                <Input placeholder="Endereço"></Input>
                <Span>
                    <Input placeholder="Número" required></Input>
                    <Input placeholder="Bairro" required></Input>
                </Span>
                <Span>
                    <Input placeholder="Cidade" required></Input>
                    <Input placeholder="Estado" required></Input>
                    <Input placeholder="CEP" required></Input>
                </Span>
                <Button>Salvar</Button>
            </Form>
            <SubTitle>Seus produtos</SubTitle>
            <MyProducts/>
            <SubTitle>Forma de Pagamento</SubTitle>
            <Select>
                <option>Cartão de Crédito</option>
                <option>Cartão de Débito</option>
                <option>Boleto Bancário</option>
                <option>PIX</option>
                <option>PayPal</option>
            </Select>
            <MainButton>Finalizar compra</MainButton>
        </Main>
        </>
    );
}