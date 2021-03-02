import React, {useState, useContext} from 'react'
import {AuthContext} from '../contexts/authContext'
import {motion} from 'framer-motion'
import './Login.scss'
import {IoLogInOutline} from 'react-icons/io5'
import { useHistory } from 'react-router-dom'

const Login = () => {

    let history = useHistory()

    const { setAuthState } = useContext(AuthContext)

    //########## FETCH SETUP
    const postAuth = async(url='', data={}) => {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            accept: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }) 
        const authResponse = await response.json()
        console.log("RESPONSE", authResponse)
        
        if(response.ok) {
            history.push('/')
        }

        if(authResponse.token) {
            localStorage.setItem('accessToken', authResponse.token)
            setAuthState(authResponse.token)
        }

        return authResponse
    }

    //########## CARD SIDE STATE
    const [signUp, setSignUp] = useState(false);

    //########## LOGIN FORM STATE & SUBMIT
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const handleLoginEmailChange = (e) => setLoginEmail(e.target.value)
    const handleLoginPasswordChange = (e) => setLoginPassword(e.target.value)

    const handleLoginSubmit = (e) => {
        alert(
            'An email was submitted: ' + loginEmail + '\n' +
            'A password was submitted: ' + loginPassword
        )

        postAuth('http://localhost:9001/auth/login', {
            email: loginEmail,
            password: loginPassword
        })

        setLoginEmail("")
        setLoginPassword("")
        e.preventDefault();
    }

    //########## SIGNUP FORM STATE & SUBMIT
    const [signupUsername, setSignupUsername] = useState("")
    const [signupEmail, setSignupEmail] = useState("")
    const [signupPassword, setSignupPassword] = useState("")
    
    const handleSignupUsernameChange = (e) => setSignupUsername(e.target.value)
    const handleSignupEmailChange = (e) => setSignupEmail(e.target.value)
    const handleSignupPasswordChange = (e) => setSignupPassword(e.target.value)

    const handleSignupSubmit = (e) => {
        alert(
            'A username was submitted: ' + signupUsername + '\n' +
            'An email was submitted: ' + signupEmail + '\n' +
            'A password was submitted: ' + signupPassword
        )

        postAuth('http://localhost:9001/auth/register', {
            userName: signupUsername,
            email: signupEmail,
            password: signupPassword
        })

        setSignupUsername("")
        setSignupEmail("")
        setSignupPassword("")
        e.preventDefault()
    }


    const signUpDisplayHandler = () => {
        setSignUp(!signUp);
    };

    return(
        <motion.div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                //maxWidth: "900px",
            }}
            initial={{ x: "125vw" }}
            animate={{ x: "0" }}
            exit={{ x: "-125vw" }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20
            }}
        >
            <div className="ModalPopUp">
              <div className="ModalPopUpFront" style={{transform: signUp ? "" : "rotateY(-180deg)" }}>
                <h1>Login</h1>
                <form onSubmit={handleLoginSubmit}>
                    <label for="email">Email</label>
                    <input value={loginEmail} onChange={handleLoginEmailChange} name="email" type="text" placeholder="Email"/>
                    <label for="password">Password</label>
                    <input value={loginPassword} onChange={handleLoginPasswordChange} name="password" type="password" placeholder="Password"/>
                    <button className="button-login">
                    Login <IoLogInOutline style={{fontSize: "30px"}} />
                    </button>
                </form>
                <div className="card-flip">
                    <div>
                        No account?
                    </div>
                    <div onClick={signUpDisplayHandler} style={{color: "var(--amz_orange)", cursor: "pointer"}}>
                        &nbsp; Sign up.
                    </div>
                </div>
              </div>
              <div className="ModalPopUpBack" style={{transform: signUp ? "rotateY(180deg)" : "rotateY(0)" }}>
                <h1>Sign Up</h1>
                <form onSubmit={handleSignupSubmit}>
                    <label for="username">Username</label>
                    <input value={signupUsername} onChange={handleSignupUsernameChange} name="username" className="input" type="text" placeholder="Username"/>
                    <label for="email">Email</label>
                    <input value={signupEmail} onChange={handleSignupEmailChange} name="email" className="input" type="text" placeholder="Email"/>
                    <label for="password">Password</label>
                    <input value={signupPassword} onChange={handleSignupPasswordChange} name="password" className="input" type="password" placeholder="Password"/>
                    <button className="button-login">
                        Sign Up <IoLogInOutline style={{fontSize: "30px"}}/>
                    </button>
                </form>
                <div className="card-flip">
                    <div>
                        Have an account?
                    </div>
                    <div onClick={signUpDisplayHandler} style={{color: "var(--amz_orange)", cursor: "pointer"}}>
                        &nbsp; Log in.
                    </div>
                </div>
              </div>
            </div>

        </motion.div>
    )
}

export default Login