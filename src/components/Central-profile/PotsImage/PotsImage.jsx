import PotsImagesItems from '../PotsImageItem/PotsImageItem'
import './PotsImage.css'


const PotsImage = ()=>{
    const postImage = [
        {
            image: 'imagen1.jpg'
        },
        {
            image: 'imagen2.jpg'
        },
        {
            image: 'imagen3.jpg'
        },
        {
            image: 'imagen4.jpg'
        },
        {
            image: 'imagen5.jpg'
        },
        {
            image: 'imagen6.jpg'
        },
        {
            image: 'imagen7.jpg'
        },
        {
            image: 'imagen8.jpg'
        },
        {
            image: 'imagen9.jpg'
        },

    ]
    return(
        <div className='pots__images'>
            {
                postImage.map((images)=>(
                    <PotsImagesItems urlImage={images.image}/>
                ))
            }
        </div>
    )
}
export default PotsImage