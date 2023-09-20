import './ProfileButtons.css'
import Button from '../../Button/Button'

const ProfileButtons = ()=>{
    return (
        <article className='profile__buttons'>
            <Button content={'Editar'}/>
            <Button content={'Compartir perfil'}/>
            <Button content={'*'}/>
        </article>
    )
}

export default ProfileButtons