import "./style.js";
import { Link } from "react-router-dom";
import {useContext} from 'react';
import UserContext from '../../UserContext.js';
import { Container, Title, Button } from "./style.js"
import React, {useEffect} from 'react'

export default function PrivatePage({children}){

    const {token} = useContext(UserContext);
    useEffect(() => {

    }, []);


    if(token !== '' && token !== undefined && token !== null){
        return(
            <>
                {children}
            </>
        );
    } else {
        return (
            <Container>
                    <Title>Acesso negado, faça login novamente.</Title>
                    <Link to='/'>
                            <Button>Voltar para página de login</Button>
                    </Link>
            </Container>
        );
    }
}