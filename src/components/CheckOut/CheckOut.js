import "./style.js";
import {Main, Title, SubTitle,  Button, Titles, Return, Form, Input, Span, Select, MainButton,PriceFinal,Titlee, Align} from "./style.js";
import { AlignItems, Price,Image,Description,Icon,MainTitle,Product} from "../Cart/style.js";
import {useNavigate, Link} from "react-router-dom";
import {IoArrowBack} from "react-icons/io5";
import React, {useEffect} from 'react'
import UserContext from "../../UserContext";
import {useContext} from "react";
import Loader from '../Loader/Loader.js';

export default function CheckOut(){
    const navigate = useNavigate();
    const {myCart,getMyCart,load,loader,setLoader,setLoad,payMethod,setPayMethod,
            state,city,district,address,number,cep,setAdress,setNumber,setDistrict,
            setCity,setState,setCep,postCheckOut,setPrice,price} = useContext(UserContext);
    useEffect(() => {
        getMyCart();
        setLoad(0);
        setLoader(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getMyCart]);

    function handleForm(event){
        event.preventDefault();
        setLoad(1);
        setLoader(0);
        postCheckOut()
        .then(() => {
            setLoad(0);
            setTimeout(() => {
            navigate("/");
            }, 1000);
        })
        .catch(e => {
            setLoad(0);
            navigate("/carrinho");
        });
    }
    let saldo = 0;
    for (let i = 0; i < myCart.length; i++) {
        saldo += Number(myCart[i].product.price);
        }
    setPrice(saldo);

    return(
        <>
        <Main>
        <Titlee>Seu carrinho</Titlee>
        {myCart.length !== 0 ? (
                    myCart.map((carrinho, i) => (
                        <Product key={i}>
                        <Image src={carrinho.product.photo}></Image>
                        <AlignItems>
                            <Title>{carrinho.product.title}</Title>
                            <Description>{carrinho.product.color} - {carrinho.product.capacity}</Description>
                            <Price>R$ {carrinho.product.price}</Price>
                        </AlignItems>
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
            <Titles>
                <Title>Finalize a sua compra</Title>
                <Link to="/carrinho">
                    <Return><pre><IoArrowBack/>   Retornar para o Carrinho</pre></Return>
                </Link>
            </Titles>
            <Form onSubmit={handleForm}>
                <SubTitle>Endereço de Entrega</SubTitle>
                    <Input placeholder="Endereço"  type='text' name='address' disabled={load} required onChange={(e) => setAdress(e.target.value)} value={address}></Input>
                <Span>
                    <Input placeholder="Número"  type='number' name='number' disabled={load} required onChange={(e) => setNumber(e.target.value)} value={number}></Input>
                    <Input placeholder="Bairro"  type='text' name='district' disabled={load} required onChange={(e) => setDistrict(e.target.value)} value={district}></Input>
                </Span>
                <Span>
                    <Input placeholder="Cidade"  type='text' name='city' disabled={load} required onChange={(e) => setCity(e.target.value)} value={city}></Input>
                    <Input placeholder="Estado"  type='text' name='state' disabled={load} required onChange={(e) => setState(e.target.value)} value={state}></Input>
                    <Input placeholder="CEP"  type='text' name='cep' disabled={load} required onChange={(e) => setCep(e.target.value)} value={cep}></Input>
                </Span>
                <SubTitle>Forma de Pagamento</SubTitle>
                <PriceFinal>Valor Total: R$ {price}.00</PriceFinal>
                <Select type='text' name='city' value={payMethod} disabled={load} required onChange={(e) => setPayMethod(e.target.value)}>
                    <option>Cartão de Crédito</option>
                    <option>Cartão de Débito</option>
                    <option>Boleto Bancário</option>
                    <option>PIX</option>
                    <option>PayPal</option>
                </Select>
                <Align>
                    <MainButton disabled={load} type="submit">{ !loader ? <Loader/> :`Finalizar Compra`}</MainButton>
                </Align>
            </Form>
            </Main>
        </>
    );
}