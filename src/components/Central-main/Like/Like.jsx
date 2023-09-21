import React from "react";
import "../Like/Like.css"

const Like = () =>{
    return(
        <div>
            <div className="footer">
                <div className="footer-icons">
                    <img className="corazon" id="corazon" src="src\assets\images\assets-inicio\iconos\corazon.png" alt="" />
                    <span className="burbuja" id="burbuja"></span>
                    <span className="enviar" id="enviar"></span>

                    <div className="guardar-icon-container">
                        <span className="guardar" id="guardar"></span>
                    </div>

                    <div className="caption-container">
                        <h4> <span>234</span> Me gusta </h4>

                        <div className="caption">
                            <h4>Alejandro Lopez <span>Gracias por apoyarnos</span> </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Like