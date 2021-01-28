import React from 'react'
import './app.css'
import Loginform from './components/Loginform'
import SignUpForm from './components/SignUpForm'

export default () => {

    return (
        <div className='box'>
            <div className='Conteudo'>
                <div className='loginForm'>
                    <Loginform />
                </div>
                <div className='signUpForm'>
                    <SignUpForm />
                </div>
            </div>
            <div className='Footer'>
                <p>@2021  User Login Form Widget All Rights Reserved | Design by <span className='EmpresaName'>Miranda&Freitas Company</span></p>
            </div>
        </div>

    )
}