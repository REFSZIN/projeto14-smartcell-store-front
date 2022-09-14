import "./style.js";
import React, { useEffect } from 'react'
import {Container, Anime,LogoSign,Logo,FormSign,InputSign,BtnSign,SpanLink} from "./style.js";
import UserContext from "../../UserContext";
import { useContext } from "react";
import { useNavigate,Link  } from "react-router-dom";
import Loader from "../Loader/Loader.js";

export default function Login(){
    const navigate = useNavigate();
    const {setLock,setLoad,localmenteLogado,email,load,password,loader,setEmail,setPassword} = useContext(UserContext);

    useEffect(() => {
        if( localStorage.length > 0){
            localmenteLogado();
        }
    }, []);

    const login =  async (create) =>{
        create.preventDefault();
        setLock(0);
        setLoad(0);
        navigate("/wallet");
    };

    return(
        <Anime>
            <Container>
                <LogoSign>SMART 📱 STORE</LogoSign>
                <Logo src={} alt="Logo"/>
            </Container>
            <FormSign onSubmit={login}>
                <InputSign type="email" disabled={load} value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)} required></InputSign>
                <InputSign type="password" disabled={load} value={password} placeholder="Senha" onChange={e => setPassword(e.target.value)} required></InputSign>
                <BtnSign disabled={load} type="submit">
                    { !loader ? <Loader/> :`Entrar`}
                </BtnSign>
            </FormSign>
            <Link to="/cadastro"><SpanLink>Não tem uma conta? Cadastre-se!</SpanLink></Link>
        </Anime>
    );
};