import Nav from '../../../../../react-escuela-robotica-choco/React-semana-4/routing/routing-erc/src/components/Navegacion';
import './MenuItems.css'
import { Outlet, NavLink } from "react-router-dom";


const MenuItem = ({url, alt, secondImg = false, secondUrl = null, secondAlt = null, text, onText = true, action, toProp})=>{
    return(

    
        <li className="menu__item"  onClick={action} >
            <img src={`./src/assets/images/${url}`} alt={alt} />
            {
                secondImg && (
                    <img src={`./src/assets/images/${secondUrl}`} alt={secondAlt} />
                )
            }
            {
                onText && (<NavLink to={toProp}>{text}</NavLink>)
            }
            <Outlet />
        </li>
    )
};

export default MenuItem