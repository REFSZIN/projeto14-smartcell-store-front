import "./style.js";
import UserContext from "../../UserContext";
import { useContext} from "react";
import {Main} from "./style.js";
import {Link} from "react-router-dom";
import React, {useEffect} from 'react'
    function backHome(){
        navigate('/')
    }
export default function Wallet(){
    const {} = useContext(UserContext);
    useEffect(() => {

    }, []);
    return(
        <Main>
        </Main>
    );
};
