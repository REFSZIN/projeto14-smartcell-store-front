import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ResetCSS from './assets/css/global.js';
import UserContext from "./UserContext";
import { UserProvider } from './UserContext.js';
import SignInPage from "./Pages/SignInPage.js";
import StorePage from "./Pages/StorePage.js";
import SignUpPage from "./Pages/SignUpPage.js";
import CartPage from "./Pages/CartPage.js";
import Product from "./components/Product/Product.js";
import CheckOutPage from "./Pages/CheckOutPage.js";
import PrivatePage from "./components/PrivatePage/PrivatePage.js";

export default function App (){
    return (
        <UserContext.Provider value={UserContext}>
            <UserProvider>
                <BrowserRouter>
                <ResetCSS/>
                    <Routes>
                        <Route path="/" element={<StorePage />}/>
                        <Route path="/login" element={<SignInPage />}/>
                        <Route path="/cadastro" element={<SignUpPage />}/>
                        <Route path="/carrinho" element={<CartPage />}/>
                        <Route path="/product/:productId" element={<Product />}/>
                            <Route path="/checkout" element={
                                <PrivatePage>
                                    <CheckOutPage/>
                                </PrivatePage>
                        }/>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </UserContext.Provider>
    );
};