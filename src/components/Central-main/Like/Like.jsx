import React from "react";
import "../Like/Like.css"

const Like = () =>{
    return(
        <div>
            <div className="footer">
                <div className="footer-icons">
                    <img className="corazon" id="corazon" src="src\assets\images\assets-inicio\iconos\corazon.png" alt="" />
                    <img className="burbuja" id="burbuja" src="src/assets/images/assets-inicio/iconos/burbuja.png" alt="" />
                    <img className="enviar" id="enviar" src="src\assets\images\assets-inicio\iconos\enviar.png" alt="" />
                    <div className="guardar-icon-container">
                        <img className="guardar" id="guardar" src="src\assets\images\assets-inicio\iconos\guardar.png" alt="" />
                    </div>

                    <div className="caption-container">
                        <h4> <span>234</span> Me gusta </h4>

                        <div className="caption">
                            <h4>Alejandro Lopez <span>Gracias por apoyar</span> </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Like