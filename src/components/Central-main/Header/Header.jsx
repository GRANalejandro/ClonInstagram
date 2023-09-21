import React from "react";
import './Header.css'
const Header = () =>{
    return(
        <div>
            <header ClassName="header-container">
                <img
                    src="src\assets\images\assets-inicio\imgs\Mi-gato-tiene-genes-de-leopardo.jpg"
                    ClassName="perfil-img" width={50} height={50}
                    alt="icono"
                />
                <div ClassName="perfil-name-container">
                    <h4 ClassName="perfil-name">Mono_felix</h4>
                    <h4 ClassName="perfil-title">Sponsored</h4>
                </div>
                <img
                    src="src\assets\images\assets-inicio\iconos\puntos.png"
                    ClassName="menu-header" height={27}
                    alt="tres puntos"
                />
            </header>
        </div>
    )
}

export default Header
