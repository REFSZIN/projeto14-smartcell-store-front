import "./style.js";
import {Form, Input, Button, Main, Title, Subtitle} from "./style.js";
import UserContext from "../../UserContext";
import {useContext} from "react";
import {useNavigate, Link} from "react-router-dom";
import React, {useEffect} from 'react'
import Loader from "../Loader/Loader.js";

export default function SignIn(){
    let {postSign,isLogged,setLoad,setLoader,loader,load,setEmail,setPassword,email,password} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if( localStorage.length > 0){
            isLogged();
        }
        setLoad(0);
        setLoader(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleForm(event) {
        event.preventDefault();
        setLoad(1);
        setLoader(0);
        postSign()
        .then(() => {
            setLoad(0);
            setTimeout(() => {
            navigate("/");
            }, 1000);
        })
        .catch(e => {
            setLoad(0);
            navigate("/login");
        });
    }
    return(
        <Main>
            <Title>Entre na sua conta</Title>
            <Form onSubmit={handleForm}>
                <Input type="email" disabled={load} value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)} required></Input>
                <Input type="password" disabled={load} value={password} placeholder="Senha" onChange={e => setPassword(e.target.value)} required></Input>
                <Button disabled={load} type="submit">
                    { !loader ? <Loader/> :`Entrar`}
                </Button>
            </Form>
            <Link to="/cadastro"><Subtitle>Não tem uma conta? Cadastre-se!</Subtitle></Link>
        </Main>
    );
};