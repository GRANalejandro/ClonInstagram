import React from "react";
import '../Header/Header.css'
const Header = () =>{
    return(
        <div>
            <header className="header-container">
                <img className="perfil-img" src="src\assets\images\assets-inicio\imgs\Mi-gato-tiene-genes-de-leopardo.jpg" alt="icono de perfil" />

                <div className="contenedor-perfil-name">
                    <h4 className="perfil-name">Alejandro Lopez</h4>
                    <h4 className="perfil-title">Probando</h4>
                </div>

                <img className="menu-header" src="src\assets\images\assets-inicio\iconos\puntos.png" alt="puntos de opciones" />
            </header>
        </div>
    )
}

export default Header
