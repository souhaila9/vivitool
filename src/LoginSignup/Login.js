import React from 'react';
import {Link} from 'react-router-dom';
import back from "../Assets/back.png"; 

import './Login.css'
import './Forgot_password.css'
const Login = () => {
    return (
        <div className="authentication" style={{ backgroundImage:`url(${back})` }}>
        <div className='container'>
            <div className='header'>
                <div className='text'> Connexion </div>
                <div className='Underline'> </div>
                <div class="form-group">
                <div>
                <label ><strong> Email</strong><span className="required">*</span></label><br></br>
                <input class="form-control" type="text"  placeholder="Email"/>
                 </div> 
                <div>
                 <label ><strong>Mot de passe </strong><span className="required">*</span></label><br></br>
                <input class="form-control" type="password"  placeholder="Entrer votre mot de passe"/>
                 </div>
                 <div class="form-group2">
                 <Link
                    className="text-primary-link-forgot_password"
                     to={"/Forgot_password"} >
                          <span className="link-forgot_password">
                             Mot de passe oublié ?
                          </span>
                </Link>
                </div>

                <button type="submit" class="btn">se connecter</button>
                <div class="align-items-center"><hr></hr>
                </div>
                <Link
                    className="text-primary-link-create-account-container"
                     to={"/Signup"} >
                          <span className="link-create-account">
                              Nouveau sur Vivitool? Créer un compte.
                          </span>
                </Link>
                
            </div>
            </div>
            </div>
            </div>
        
        )
    }
    
    export default Login