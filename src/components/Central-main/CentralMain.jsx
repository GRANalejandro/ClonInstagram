import './CentralMain.css'
import Stories from '../../components/Stories/Stories'
import Publications from './Publications/Publications'
import Aside from '../Aside/Aside'

const CentralMain = () => {
    return (
        <>
            <main className='main'>
                <Stories />
                <Publications />
                <Publications />
                <Publications />
                <Publications />
                <Publications />
            </main>
            <Aside showComponentMain={true}/>
        </>
        
    )
}

export default CentralMain