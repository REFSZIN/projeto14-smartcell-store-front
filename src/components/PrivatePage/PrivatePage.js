import { Link } from "react-router-dom";
import {useContext} from 'react';
import UserContext from '../../UserContext.js';
import { Container, Title, Button } from "./style.js"
import React from 'react';
import Header from "../Header/Header.js";

export default function PrivatePage({children}){
    const {data} = useContext(UserContext);

    if(data){
        return(
            <>
                {children}
            </>
        );
    } else {
        return (
            <Container>
                <Header />
                    <Title>Acesso negado, faça login para finalizar a compra.</Title>
                    <Link to='/'>
                            <Button>Voltar para página inicial</Button>
                    </Link>
                    <Link to='/login'>
                            <Button>Voltar para página de login</Button>
                    </Link>
            </Container>
        );
    }
}