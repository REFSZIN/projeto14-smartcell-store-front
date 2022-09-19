import "./style.js";
import UserContext from "../../UserContext";
import { useContext} from "react";
import {Main} from "./style.js";
import {Link} from "react-router-dom";
import React, {useEffect} from 'react'

<<<<<<< HEAD
    function backHome(){
        navigate('/')
    }

=======
export default function Wallet(){
    const {} = useContext(UserContext);
>>>>>>> parent of 9ce16ec (fix: css and feat: product page)
    useEffect(() => {

    }, []);

    return(
        <Main>
        </Main>
    );
};
