import PotsImage from '../PotsImage/PotsImage';
import './Pots.css'


const Pots = ()=>{
    return(
        <div className="pots">
            <div className='pots__sections'>
                <div>
                    <p>Publicaciones</p>
                </div>
                <div>
                    <p>Guardado</p>
                </div>
                <div>
                    <p>Etiquetas</p>
                </div>
            </div>
            <PotsImage/>
        </div>
    )
};

export default Pots