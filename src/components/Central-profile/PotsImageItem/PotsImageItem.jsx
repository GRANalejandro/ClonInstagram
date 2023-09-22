import './PotsImageItem.css'

const PotsImagesItems = ({urlImage})=>{
    return(
        <div className="pots__images__item">
            <img src={`./src/assets/images/${urlImage}`} alt="" />
        </div>
    )
};

export default PotsImagesItems