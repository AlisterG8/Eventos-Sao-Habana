import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logoSao from '../assets/ico/SAO_Logo-01.png'
import barras from '../assets/ico/barras.svg'
import instagram from '../assets/ico/icons8-instagram-192.png'

function Headerview() {
    const bod ="/boda"
    const cum ="/cumpleaños"
    const qui ="/quince"
    
    const [ toggleMenu , setToggleMenu ] = useState( false )

    const toggleMenuAct = () =>{
        setToggleMenu(!toggleMenu)
    }
    return(
        <header>
        <div className='menuBar'>
            <button onClick={toggleMenuAct} className='buttonBarras'>
                <img src={barras} alt="barras"className="barras"/>
            </button>
            <img src={logoSao} alt="logoSao" className="logoSao"></img>
            <a href="https://www.instagram.com/eventos_sao?igsh=NTc4MTIwNjQ2YQ==">
                <img src={instagram} alt="logoInstagram" className="logoInstagram"></img>
            </a>
        </div>
        <div className={`toggleMenu ${ toggleMenu ? 'isActive' : '' }`}>
        <Link className='linkMenu' to={"/"}>
                <p>Inicio</p>
            </Link>

            <Link className='linkMenu' to={bod}>
                <p>Planear Boda</p>
            </Link>

            <Link className='linkMenu' to={cum}>
                <p>Planear Cumpleaño</p>
            </Link>

            <Link className='linkMenu' to={qui}>
                <p>Planear Quince</p>
            </Link>
        </div>
    </header>
    
    
    );   
}
export default Headerview;