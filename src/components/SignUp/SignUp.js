import "./style.js";
import React, {useEffect} from 'react'
import {Form, Input, Button, Main, Title, Subtitle} from "./style.js";
import UserContext from "../../UserContext.js";
import {useContext} from "react";
import {useNavigate, Link} from "react-router-dom";
import Loader from "../Loader/Loader.js";

export default function Login(){
    const {name,isLogged, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword,load,loader,setLoad,setLoader,postSignUp} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if( localStorage.length > 0){
            isLogged();
        }
        setLoad(0);
        setLoader(1);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleForm(event){
        event.preventDefault();
        setLoad(1);
        setLoader(0);
        postSignUp()
        .then(() => {
            setLoad(0);
            setTimeout(() => {
            navigate("/login");
            }, 1000);
        })
        .catch(e => {
            setLoad(0);
            navigate("/cadastro");
        });
    }


    return(
        <Main>
            <Title>Crie a sua conta</Title>
            <Form onSubmit={handleForm}>
                <Input placeholder='Nome' type='text' name='name' disabled={load} required onChange={(e) => setName(e.target.value)} value={name}></Input>
                <Input placeholder='Email' type='email' name='email' disabled={load} required onChange={(e) => setEmail(e.target.value)} value={email}></Input>
                <Input placeholder='Senha' type='password' name='password' disabled={load} required onChange={(e) => setPassword(e.target.value)} value={password}></Input>
                <Input placeholder='Confirme a senha' type='password' name='password' disabled={load} required onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}></Input>
                <Button disabled={load} type="submit">
                    { !loader ? <Loader/> :`Entrar`}
                </Button>
            </Form>
            <Link to='/login'>
                <Subtitle>Já tem uma conta? Entre agora!</Subtitle>
            </Link>
        </Main>
    );
};