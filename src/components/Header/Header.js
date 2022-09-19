import {Main, Title, Icon} from "./style.js";
import {IoPersonOutline, IoCartOutline} from "react-icons/io5";
import "./style.js";
import { Link} from "react-router-dom";
import React, {useEffect} from 'react'
import UserContext from "../../UserContext";
import {useContext} from "react";


export default function Header () {
    const {data} = useContext(UserContext);
    useEffect(() => {
        
    }, [data]);

    return (
        <Main>
                <Link to="/login">
                    <Icon>
                        <IoPersonOutline/>
                        
                    </Icon>
                </Link>
                <Link to="/">
                    <Title>SmartCell Store</Title>
                </Link>
                <Link to="/carrinho">
                    <Icon>
                        <IoCartOutline/>
                    </Icon>
                </Link>
            </Main>
    );
}