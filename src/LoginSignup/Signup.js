import back from "../Assets/back.png"; 
import React from 'react';
import  { useState } from 'react';
import './Signup.css'
const Signup = () => {

    const [isChecked, setIsChecked] = useState(false);
     const handleOnChange = () => {setIsChecked(!isChecked);};

    return (
        <div className="authentication" style={{ backgroundImage:`url(${back})` }}>
        <div className='container'>
            <div className='header'>
                <div className='text'> Créer un compte </div>
                <div className='Underline'> </div>
            </div>
            <div class="form-group">
            <div>
                <label ><strong> Prénom</strong><span className="required">*</span></label><br></br>
                <input class="form-control" type="text"  placeholder="Prénom"/>
            </div> 
            <div>
            <label > <strong>Nom</strong><span className="required">*</span></label><br></br>
            <input class="form-control" type="text"  placeholder="Nom"/>
            </div>

            <div>
                <label ><strong>Email</strong><span className="required">*</span></label><br></br>
                <input class="form-control" type="text"  placeholder="Email"/>
            </div>

            <div>
                <label ><strong>Mot de passe </strong><span className="required">*</span></label><br></br>
                <input class="form-control" type="password"  placeholder="Entrer votre mot de passe"/>
            </div>

            <div class="form-check">
      <input type="checkbox" class="form-check-input" id="dropdownCheck" checked={isChecked}
        onChange={handleOnChange}/>
      <label className="form-check-label"> J'ai lu et j'accepte les <a href="default.asp" target="_blank">CGU </a> 
      ainsi que  la <a href="default.asp" target="_blank">politique de confidentialité</a>
     </label>
    </div>
    <button type="submit" className="btn" disabled={!isChecked}  >
    Créer un compte
    </button>
    </div>
        </div>
        </div>
        
    )
}

export default Signup