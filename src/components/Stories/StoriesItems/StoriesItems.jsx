import './StoriesItems.css'

const StoriesItem = ({img})=>{
    return(
        <div className='stories__item'>
            <img src={img} alt="" />
        </div>
    )
};

export default StoriesItem