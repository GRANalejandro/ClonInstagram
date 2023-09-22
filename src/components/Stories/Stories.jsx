import './Stories.css'
import StoriesItem from './StoriesItems/StoriesItems';

const Stories = ()=>{
    const ImgStory = [
        {
            image: 'https://www.w3schools.com/w3images/avatar2.png'
        },

        {
            image: 'https://i.pinimg.com/236x/1f/ae/65/1fae65f1f8a4d5818ccd3df03f8105d1.jpg'
        },

        {
            image: 'https://i.pinimg.com/236x/06/bc/b1/06bcb17ea9cb958a573207f68a846ce2.jpg'
        },

        {
            image: 'https://i.pinimg.com/236x/f5/36/01/f53601133f236d1cb167ac19f05a3d60.jpg'
        },

        {
            image: 'https://i.pinimg.com/236x/1a/08/90/1a0890fe128b67f16ee259243e7d8557.jpg'
        },

        {
            image: 'https://i.pinimg.com/236x/df/47/e0/df47e0d94ad973095c6cfe8f684a2235.jpg'
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