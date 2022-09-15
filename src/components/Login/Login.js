import "./style.js";
import React, {useEffect} from 'react'
import {Form, Input, Button, Main, Title, Subtitle} from "./style.js";
import UserContext from "../../UserContext";
import {useContext} from "react";
import {useNavigate, Link} from "react-router-dom";
import Header from '../Header/Header.js';
import Footer from "../Footer/Footer.js";

export default function Login(){
    const navigate = useNavigate();
    const {setLock,setLoad,isLogged,email,load,password,loader,setEmail,setPassword} = useContext(UserContext);

    useEffect(() => {
        if(localStorage.length > 0){
            isLogged();
        }
    }, []);

    const login =  async (create) =>{
        create.preventDefault();
        setLock(0);
        setLoad(0);
        navigate("/checkout");
    };

    return(
        <Main>
            <Header />
            <Title>Entre na sua conta</Title>
            <Form onSubmit={login}>
                <Input type="email" disabled={load} value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)} required></Input>
                <Input type="password" disabled={load} value={password} placeholder="Senha" onChange={e => setPassword(e.target.value)} required></Input>
                <Button disabled={load} type="submit">Entrar</Button>
            </Form>
            <Link to="/cadastro"><Subtitle>Não tem uma conta? Cadastre-se!</Subtitle></Link>
            <Footer/>
        </Main>
    );
};