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
    const [cells, setCells] = useState([]);
    const [lock,setLock] = useState(1);
    const URL ="http://localhost:5000";

    const localmenteLogado = () => {
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
    const getCells = async () => {
        const headers = {
            headers: { Authorization: `Bearer ${data.token}`}
        }
        try {
            const req = axios.get(`${URL}/cells`, headers);
            req.then(res => {
                setCells(res.data)
            })
            .catch(err => {
                alert(err.data);
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
                password,setPassword, confirmPassword, setConfirmPassword, load, setLoad, 
                localmenteLogado , postSign,postSignUp, setLock,lock,getCells,cells
            }}>
            {props.children}
        </UserContext.Provider>
    )}