import './CentralMain.css'
import Stories from '../../components/Stories/Stories'
import Header from './Header/Header'
import Like from './Like/Like'
import Main1 from './Main/Main1'

const CentralMain = ()=>{
    return (
        <main className='main'>
            <div>
                <Stories/>
                <Header/>
                <Main1/>
                <Like/>
            </div>    
        </main>
    )
}

export default CentralMain