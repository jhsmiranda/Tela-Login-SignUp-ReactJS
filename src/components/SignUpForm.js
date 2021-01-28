import React from 'react'
import './conteudo.css'

export default props =>
    <>
        <h3 className="titulo">Sing Up Form</h3>

        <input
            className="Input"
            type="text"
            name="FirstName"
            placeholder="First name"
        />

        <input
            className="Input"
            type="text"
            name="LastName"
            placeholder="Last name"
        />

        <input
            className="Input"
            type="email"
            name="email"
            placeholder="mail@exemple.com"
        />

        <input
            className="Input"
            type="tel"
            name="phone"
            placeholder="Please enter a phone number"
        />

        <input
            className="Input"
            type="password"
            name="password"
            placeholder="Password"
        />

        <input
            className="Input"
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password"
        />


        <form>
            <input
                className="InputCheckBoxSign"
                type="checkbox"
                name="IAgree">
            </input>
            <label className="LabelCheckBoxSign">
                I agree to <a className="LinkPassword" href="https://www.google.com" target="_blank">Terms </a>and <a className="LinkPassword" href="https://www.google.com" target="_blank">Privacy Policy</a>
            </label>
        </form>

        <button className="ButtonSignUp" type="submit">Sign Up</button>
    </>
    