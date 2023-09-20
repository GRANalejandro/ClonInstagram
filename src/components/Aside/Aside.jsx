import './aside.css'
import AsideComponentProfile from './AsideComponentProfile/AsideComponentProfile'
import AsideComponentMain from './AsideComponentMain/AsideComponentMain'

const Aside = ({clasShow=null, showComponentProfile = false, showComponentMain = false})=>{
    return(
        <aside className={`aside aside--main ${clasShow}`}>
            {
                showComponentProfile && (<AsideComponentProfile/>)
            }
            {
                showComponentMain && (<AsideComponentMain/>)
            }
        </aside>
    )
}

export default Aside
