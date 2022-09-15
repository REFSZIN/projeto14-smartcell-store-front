import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ResetCSS from './assets/css/global.js';
import UserContext from "./UserContext";
import { UserProvider } from './UserContext.js';
import Login from "./components/Login/Login.js";
import Store from "./components/Store/Store.js";
import SignUp from "./components/SignUp/SignUp.js";
import Cart from "./components/Cart/Cart.js";
import CheckOut from "./components/CheckOut/CheckOut.js";
import PrivatePage from "./components/PrivatePage/PrivatePage.js";

export default function App (){
    return (
        <UserContext.Provider value={UserContext}>
            <UserProvider>
                <BrowserRouter>
                <ResetCSS/>
                    <Routes>
                        <Route path="/" element={<Store />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/cadastro" element={<SignUp />}/>
                        <Route path="/carrinho" element={<Cart />}/>
                            <Route path="/checkout" element={
                                    <CheckOut/>
                            }/>
                    </Routes> 
                </BrowserRouter>
            </UserProvider>
        </UserContext.Provider>
    );
};

//COLOCAR PRIVATE PAGE