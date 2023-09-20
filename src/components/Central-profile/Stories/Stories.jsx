import './Stories.css'
import StoriesItem from '../StoriesItems/StoriesItems';

const Stories = ()=>{
    const ImgStory = [
        {
            image: 'https://www.w3schools.com/w3images/avatar2.png'
        },

        {
            image: ''
        },

        {
            image: ''
        },

        {
            image: ''
        },

        {
            image: ''
        },

        {
            image: ''
        },
    ] 

    
    return(
        <article className='stories'>
            <div className='stories__content'>
                {
                    ImgStory.map((item)=>( 
                        <StoriesItem img={item.image} />
                    ))
                }
            </div>
        </article>
    )
};

export default Stories