import React from 'react';

import back from "../Assets/back.png"; 
const Forgot_password = () => {
    return (
        <div className="authentication" style={{ backgroundImage:`url(${back})` }}>
        <div className='container'>
        <div className='header'>
                <div className='text'> Mot de passe oublié ? </div>
                <div className='Underline'> </div>
                <span className='reset_title'> Réinitialiser mon mot de passe.</span>
                <div class="form-group_1">
                 <label ><strong> Adresse email </strong><span className="required">*</span></label><br></br>
                 <input class="form-control" type="text"  placeholder="Email"/>
                 </div>
                 <button type="submit" class="btn_1">Envoyer</button>
        </div>
        </div>


        </div>
        
        )
    }
    
    export default Forgot_password