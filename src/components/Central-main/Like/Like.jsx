import React from "react";
import "../Like/Like.css"

const Like = () =>{
    return(
        <div>
            <div ClassName="footer">
                <div ClassName="footer-icons">
                    <span ClassName="corazon" id="corazon"></span>
                    <span ClassName="burbuja" id=""></span>
                    <span ClassName="enviar" id=""></span>
                    <div ClassName="guardar-icon-container">
                        <span ClassName="guardar" id="guardar"></span>
                    </div>
                </div>
                <div ClassName="caption-container">
                    <h4><span>234</span> Likes </h4>
                    <div ClassName="caption">
                        <h4>Mono_felix</h4> <span>Hola Estoy muy feliz!!! aprediendo React Js</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Like