import './Header.css'
import Menu from './Menu/Menu'
import MenuToggle from './MenuToggle/MenuToggle'

const Header = ()=>{
    return (
        <header className='header'>
            <Menu/>
            <MenuToggle/>
        </header>
    )
}

export default Header