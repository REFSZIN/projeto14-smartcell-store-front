import "./style.js";
import React from 'react'
import {Form, Input, Button, Main, Title, Subtitle} from "./style.js";
import UserContext from "../../UserContext.js";
import {useContext} from "react";
import {useNavigate, Link} from "react-router-dom";
import Header from '../Header/Header.js';
import Footer from "../Footer/Footer.js";
import axios from "axios";

export default function Login(){
    const {name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword} = useContext(UserContext);
    const navigate = useNavigate();
    const signData = {
        name,
        email,
        password,
        confirmPassword
    };

    function handleForm(e){
        e.preventDefault();
        const promise = axios.post('https://smartcell-store-back.herokuapp.com/auth/sign-up', signData);
        promise.then(res => {
            navigate('/login');
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        });
        promise.catch(res => {
            alert('Faça o cadastro novamente');
        });
    }


    return(
        <Main>
            <Header />
            <Title>Crie a sua conta</Title>
            <Form onSubmit={handleForm}>
                <Input placeholder='Nome' type='text' name='name' required onChange={(e) => setName(e.target.value)} value={name}></Input>
                <Input placeholder='Email' type='email' name='email' required onChange={(e) => setEmail(e.target.value)} value={email}></Input>
                <Input placeholder='Senha' type='password' name='password' required onChange={(e) => setPassword(e.target.value)} value={password}></Input>
                <Input placeholder='Confirme a senha' type='password' name='password' required onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}></Input>
                <Button>Cadastrar</Button>
            </Form>
            <Link to='/login'>
                <Subtitle>Já tem uma conta? Entre agora!</Subtitle>
            </Link>
            <Footer/>
        </Main>
    );
};