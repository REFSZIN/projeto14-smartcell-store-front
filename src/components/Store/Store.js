import "../Login/style.js";
import UserContext from "../../UserContext";
import { useContext,useEffect} from "react";
import React from 'react'
import {Main} from "../Login/style.js";
import {Link} from "react-router-dom";

export default function Store(){
    const {setLoad,localmenteLogado,data,cells,getCells} = useContext(UserContext);

    useEffect(() => {
        if( localStorage.length > 0){
            localmenteLogado();
        }
        setLoad(0);
    }, []);

    return(
        <Main>
            
        </Main>
    );
};
