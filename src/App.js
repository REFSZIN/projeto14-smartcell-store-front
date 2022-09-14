import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ResetCSS from './assets/css/global.js';
import UserContext from "./UserContext";

import { UserProvider } from './UserContext.js';

import  from "./Pages/.js";



export default function App (){
return (
    <UserContext.Provider value={UserContext}>
        <UserProvider>
            <BrowserRouter>
            <ResetCSS/>
                <Routes>
                    <Route path="/" element={< />}/>
                    <Route path="/login" element={< />}/>
                    <Route path="/home" element={< />}/>
                    <Route path="/cadastro" element={< />}/>
                    <Route path="/carrinho" element={</>}/>
                    <Route path="/checkaout" element={</>}/>
                </Routes> 
            </BrowserRouter>
        </UserProvider>
    </UserContext.Provider>
    );
};