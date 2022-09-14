import "./style.js";
import React, { useEffect } from 'react'
import {Input, Button,Form,Main} from "./style.js";
import UserContext from "../../UserContext";
import {useContext} from "react";
import Loader from "../Loader/Loader"
import {useNavigate, Link} from "react-router-dom";
import Header from '../Header/Header.js';

export default function Sign(){
    const navigate = useNavigate();
    const {setLoader,setLoad,isLogged,email,load,password,loader,setEmail,setPassword} = useContext(UserContext);

    useEffect(() => {
        if( localStorage.length > 0){
            isLogged();
        }
        setLoader(0);
    }, []);

    const login =  async (create) =>{
        create.preventDefault();
        setLoad(1);
        setLoader(1);
        navigate("/checkout");
    };

    return(
        <Main>
            <Header />
            <Form onSubmit={login}>
                <Input type="email" disabled={load} value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)} required></Input>
                <Input type="password" disabled={load} value={password} placeholder="Senha" onChange={e => setPassword(e.target.value)} required></Input>
                <Button disabled={load} type="submit">
                    { !loader ? <Loader/> :`Entrar`}
                </Button>
            </Form>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </Main>
    );
};