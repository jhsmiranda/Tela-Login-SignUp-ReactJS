import React from 'react'
import FotoPerfil from '../fotoperfil.png'
import './conteudo.css'

export default props =>
    <>
        <h3 className="titulo">Login Form</h3>

        <img className="fotoperfil"
            src={FotoPerfil}
            alt="Foto do perfil"
            height="100px"
            width="100px">
        </img>

        <input
            className="Input"
            type="email"
            name="email"
            placeholder="Mobile or Email"
        />

        <input
            className="Input"
            type="password"
            name="password"
            placeholder="Password"
        />

        <div className="RePass">
            <form>
                <input
                    className="InputCheckBox"
                    type="checkbox"
                    name="checkbox"
                    value="Remember me">
                </input>
                <label className="LabelCheckBox">Remember me</label>
            </form>
            
            <a className="LinkPassword" href="https://www.google.com" target="_blank">Forgot Password?</a>
        </div>

        <button className="ButtonLogin" type="submit">Login</button>

        <a className="LinkNewAccount" href="https://www.google.com" target="_blank">Create a New Account</a>

        <p className="POr">(Or)</p>

        <div className="Icones">
            <a className="IconFace" href="https://facebook.com" target="_blank"><img src="https://www.flaticon.com/svg/vstatic/svg/145/145802.svg?token=exp=1611809901~hmac=9b5b7e21847c6de27419d1a8d30c4cf2" alt="Logotipo do Facebook" width='40px' height='40px'></img></a>
            <a className="Icontwitter" href="https://www.twitter.com" target="_blank"><img src="https://www.flaticon.com/svg/vstatic/svg/145/145812.svg?token=exp=1611810032~hmac=b9aa5132799381d8504a21c75a5a7733" alt="Logotipo do Twitter" width='40px' height='40px'></img></a>
            <a className="IconGooglePlus" href="https://www.plus.google.com/" target="_blank"><img src="https://www.flaticon.com/svg/vstatic/svg/187/187196.svg?token=exp=1611810149~hmac=06e7f7c39a3c5572bdb3161e201b34a1" alt="Logotipo do Google Plus" width='40px' height='40px'></img></a>
        </div>    
    </>
    