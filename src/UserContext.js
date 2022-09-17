import { createContext } from "react";
import React, {useState} from "react";
import axios from "axios";

const UserContext = createContext();
export default UserContext;

export function UserProvider (props){
    const [token, setToken] = useState(null);
    const [data, setData] = useState(localStorage.getItem("user"));
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [load,setLoad] = useState(0);
    const [loader,setLoader] = useState(0);
    const [products, setProducts] = useState([]);
    const [myCart, setMyCart] = useState([]);
    const [checkout, setCheckout] = useState([]);
    const [cep, setCep] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAdress] = useState('');
    const [payMethod, setPayMethod] = useState('');
    const URL = "https://smartcell-store-back.herokuapp.com";
    let userToken = '';
    let userEmail = '';
    const headers = {
        headers: {
            Authorization: `Bearer ${data}`
        },
    };

function isLogged() {
        if (performance.navigation.type === performance.navigation.TYPE_RELOAD || localStorage.length > 0) {
            setLoad(1);
            axios.post(`${URL}/auth/sign-in`,
                {
                    email: data.email,
                    password: data.password,
                })
            .then(res => {
                setToken(res.data.token);  
                setName(res.data.name);   
                setData(res.data);
            })
            .catch(err => {
                setLoad(0);
            });
        }
    }

    const postSign = async () => {
        const body = 
        {
            email: email,
            password: password
        }
        try {
            const req = axios.post(`${URL}/auth/sign-in`, body);
            req.then(res => {
                setToken(res.data.token);
                setName(res.data.name);
                setLoad(0);
                setData(res.data);
                localStorage.setItem("user",JSON.stringify(res.data));
            })
            req.catch(err => {
                alert(err);
                setLoad(0);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }

    const postSignUp = async () => {
        const body = {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword
        }

        try {
            const req = axios.post(`${URL}/auth/sign-up`, body);
            req.then(res => {
                return res;
            })
            .catch(err => {
                alert(err);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }

    const getMyCart = async () => {
        try {
            const req = axios.get(`${URL}/mycart`, headers);
            req.then(res => {
                setMyCart(res.data)
            })
            .catch(err => {
                alert(err.data);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }

    async function postInMyCart(product) {
        const id = product._id;
        try {
            const req = axios.post(`${URL}/mycart`, id, headers);
            req.then(res => {
                return res;
            })
            .catch(err => {
                alert(err.data);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }

    const deleteMyCart = async (props) => {
        try {
            const req = axios.delete(`${URL}/mycart/${props}`, headers);
            req.then(res => {
                return res;
            })
            .catch(err => {
                alert(err.data);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }

    const getCheckOut = async () => {
        try {
            const req = axios.get(`${URL}/checkout`, headers);
            req.then(res => {
                setCheckout(res.data);
            })
            .catch(err => {
                alert(err);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }

    const postCheckOut = async () => {
        const body = {
            cep: name,
            numero: email,
            endereço: password,
            paymethod: confirmPassword
        }
        try {
            const req = axios.post(`${URL}/checkout`, headers, body);
            req.then(res => {
                return res;
            })
            .catch(err => {
                alert(err);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }


    return (
        <UserContext.Provider 
            value={{ 
                token, setToken, data, setData, email, setEmail, name, setName,
                password, setPassword, confirmPassword, setConfirmPassword, load, setLoad, 
                isLogged, postSign, postSignUp, products, setProducts, myCart, setMyCart,
                postInMyCart, deleteMyCart, getMyCart, postCheckOut, getCheckOut, 
                checkout, setCheckout, loader, setLoader, cep, setCep, number, setNumber,
                address, setAdress, payMethod, setPayMethod, headers, userEmail, userToken
            }}>
            {props.children}
        </UserContext.Provider>)}