import './CentralProfile.css'
import Profile from './Profile/Profile'
import Pots from './Pots/Pots'

const CentralProfile = ()=>{
    return (
        <main className='main'>
            <Profile/>
            <Pots/>
        </main>
    )
}

export default CentralProfile