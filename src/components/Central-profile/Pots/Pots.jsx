import PotsImage from '../PotsImage/PotsImage';
import './Pots.css'


const Pots = ()=>{
    return(
        <div className="pots">
            <div className='pots__sections'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <PotsImage/>
        </div>
    )
};

export default Pots