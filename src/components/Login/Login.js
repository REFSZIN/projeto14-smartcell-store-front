import "./style.js";
import React from 'react'
import {Form, Input, Button, Main, Title, Subtitle} from "./style.js";
import UserContext from "../../UserContext";
import {useContext} from "react";
import {useNavigate, Link} from "react-router-dom";
import Header from '../Header/Header.js';
import Footer from "../Footer/Footer.js";
import axios from "axios";

export default function Login(){
    let {email, setEmail, password, setPassword, token, setToken, userEmail, userToken} = useContext(UserContext);
    const navigate = useNavigate();
    
    const loginData = {
        email,
        password
    };

    function handleForm(e){
        e.preventDefault();
        const promise = axios.post('http://localhost:4000/auth/sign-in', loginData);
        promise.then(res => {
            localStorage.setItem('user', res.data.token);
            localStorage.setItem('email', email);
            userEmail = localStorage.getItem('email');
            userToken = localStorage.getItem('user');
            setToken(userToken);
            navigate('/');
            setEmail('');
            setPassword('');
            console.log(token);
        });

        promise.catch(res => {
            alert('Faça o login novamente');
        });
    }

    return(
        <Main>
            <Header />
            <Title>Entre na sua conta</Title>
            <Form onSubmit={handleForm}>
                <Input type="email" value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)} required></Input>
                <Input type="password" value={password} placeholder="Senha" onChange={e => setPassword(e.target.value)} required></Input>
                <Button type="submit">Entrar</Button>
            </Form>
            <Link to="/cadastro"><Subtitle>Não tem uma conta? Cadastre-se!</Subtitle></Link>
            <Footer/>
        </Main>
    );
};