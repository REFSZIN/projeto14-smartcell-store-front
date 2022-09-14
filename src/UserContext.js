import { createContext } from "react";
import React, {useState} from "react";
import axios from "axios";

const UserContext = createContext();
export default UserContext;

export function UserProvider (props){
    const [token, setToken] = useState(null);
    const [data, setData] = useState(JSON.parse(localStorage.getItem("user")));
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [load,setLoad] = useState(0);
    const [loader,setLoader] = useState(0);
    const [products, setProducts] = useState([]);
    const [mycart, setMyCart] = useState([]);
    const [history, setHistory] = useState([]);
    const [checkout, setCheckout] = useState([]);
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [endereço, setEndereço] = useState('');
    const [paymethod, setPaymethod] = useState('');
    const URL ="https://smartcell-store-back.herokuapp.com";

    const isLogged = () => {
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

    const getProducts = async () => {
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
        try {
            const req = axios.get(`${URL}/cells`, headers);
            req.then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                alert(err.data);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    }

    const getMyCart = async () => {
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
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

    const postInMyCart = async () => {
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
        try {
            const req = axios.get(`${URL}/mycart`, headers);
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
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
        try {
            const req = axios.get(`${URL}/mycart/${props}`, headers);
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
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
        try {
            const req = axios.post(`${URL}/checkout`, headers);
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
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
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

    const getHistory = () => async () => {
        
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
        try {
            const req = axios.post(`${URL}/checkout`, headers);
            req.then(res => {
                setHistory(res.data);
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
                isLogged, postSign, postSignUp, products, setProducts,mycart,setMyCart,
                postInMyCart, deleteMyCart, getMyCart, getHistory, postCheckOut, getCheckOut, history,
                setHistory,getProducts,checkout, setCheckout,loader,setLoader,cep, setCep,numero, setNumero,
                endereço, setEndereço,paymethod, setPaymethod
            }}>
            {props.children}
        </UserContext.Provider>
    )}