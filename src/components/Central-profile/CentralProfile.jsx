import './CentralProfile.css'
import Profile from './Profile/Profile'
import Pots from './Pots/Pots'
import Aside from '../Aside/Aside'

const CentralProfile = ()=>{
    return (
        <>
            <main className='main'>
                <Profile/>
                <Pots/>
            </main>
            <Aside clasShow={'notShow'} showComponentProfile={true}/>
        </>
    )
}

export default CentralProfile