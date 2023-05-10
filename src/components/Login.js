import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api";


const Login = ()=>{

    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/');
        }
    }, [])

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const credentials = {
            email,
            password
        }

        const response = await loginUser(credentials);
        
        if(response.success){
            navigate('/');
        }else{
            alert(response.message)
        }
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user_id', response.data.userId);

        
    }

    return(
        <>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h1 style={{color: 'darkgrey', textAlign: 'center', fontWeight: 'bold'}} >Login</h1>

                <input name="email" type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />

                <input type="submit" value="Login" style={styles.submitBtn}/>    

                <h5 style={{textAlign: 'center'}}>Not Registerd? 
                    <Link to='/register'> Register here </Link>
                </h5>
            </form>        
        </>
    )
}

const styles = {
    submitBtn: {
        backgroundColor: 'darkgrey',
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    form: {
        width: '70%',
        margin: 'auto',
        border: '3px solid purple',
        borderRadius: 20,
        padding: 10
    }
}

export default Login;