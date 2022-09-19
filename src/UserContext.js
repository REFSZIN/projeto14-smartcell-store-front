import { createContext } from "react";
import React, {useState} from "react";
import axios from "axios";

const UserContext = createContext();
export default UserContext;

export function UserProvider (props){
    const [token, setToken] = useState(null);
    const [data, setData] = useState(JSON.parse(localStorage.getItem("user")));
    const [dataProducts, setDataProducts] = useState(localStorage.getItem("products"));
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [load,setLoad] = useState(0);
    const [loader,setLoader] = useState(0);
    const [products, setProducts] = useState([]);
    const [myCart, setMyCart] = useState([]);
    const [myCheckout, setMyCheckout] = useState([]);
    const [checkout, setCheckout] = useState([]);
    const [cep, setCep] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAdress] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [payMethod, setPayMethod] = useState('');
    const [price, setPrice] = useState(0);
    const URL = "https://smartcell-store-back.herokuapp.com";
    //const URL = "http://localhost:4000"

    const getProducts = async () => {
        try {
            const req = axios.get(`${URL}/products`);
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
    };
    
    const isLogged = async () => {
        if  (performance.navigation.type === performance.navigation.TYPE_RELOAD || localStorage.length > 0)  {
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
                localStorage.setItem("user",JSON.stringify(res.data));
            })
            .catch(err => {
                alert(err);
                setLoad(0);
            });
        }
    };

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
                setData(res.data);
                localStorage.setItem("user",JSON.stringify(res.data));
            })
            req.catch(err => {
                alert(err);
            });
        } 
        catch (error) {
            throw new Error(error);
        }
    };

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
    };

    const getMyCart = async () => {
        const body = 
        {
            email: data.email
        }
        try {
            const req = axios.get(`${URL}/mycart`,body);
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
    };

    const postInMyCart = async (product) => {
        
        const body = 
        {
            email: data.email,
            product
        }
        try {
            const req = axios.post(`${URL}/carts`, body );
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
    };

    const deleteMyCart = async (cart) => {
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
        try {
            const req = axios.delete(`${URL}/mycart/${cart}`, headers);
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
    };

    const getCheckOut = async () => {
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
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
    };

    const postCheckOut = async () => {
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
        const body = {
            email: data.email,
            cep: cep,
            price: price,
            number: number,
            state: state,
            district: district,
            city: city,
            payMethod: payMethod,
            request: myCart
        }
        try {
            const req = axios.post(`${URL}/checkout`, body, headers);
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
    };

    return (
        <UserContext.Provider 
            value={{ 
                token, setToken, data, setData, email, setEmail, name, setName,
                password, setPassword, confirmPassword, setConfirmPassword, load, setLoad, 
                isLogged, postSign, postSignUp, products, setProducts, myCart, setMyCart,
                postInMyCart, deleteMyCart, getMyCart, postCheckOut, getCheckOut, 
                checkout, setCheckout, loader, setLoader, cep, setCep, number, setNumber,
                address, setAdress, payMethod, setPayMethod, state, setState, district, setDistrict,
                city, setCity,myCheckout, setMyCheckout,dataProducts, setDataProducts,getProducts,
                price, setPrice
            }}>
            {props.children}
        </UserContext.Provider>)};