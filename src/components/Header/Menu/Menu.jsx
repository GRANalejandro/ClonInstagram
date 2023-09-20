import MenuItem from "../MenuItems/MenuItems";
import './menu.css'

const Menu = ()=>{
    const images = [
      {
         image_rut: 'house.svg',
         image_rut2: 'instaDesktop.svg',
         alt: 'Icono de la casa de la barra de navegacion de instagram',
         secondAlt: 'Icono de cuadrado en la barra de navegacion',
         onSecondImg: true,
         textOn: false,
      },
     {
        image_rut: 'house.svg',
        alt: 'Icono de la casa de la barra de navegacion de instagram',
        textP: 'Inicio',
        ActionFuntion: () => {
         alert('Hola')
      }
     },
     {
        image_rut: 'magnifying.svg',
        alt: 'Icono de la casa de la barra de navegacion de instagram',
        textP: 'Buscar',
        ActionFuntion: () => {
         alert('Hola1')
      }
     },
     {
        image_rut: 'square.svg',
        alt: 'Icono de la casa de la barra de navegacion de instagram',
        textP: 'Crear',
     },
     {
        image_rut: 'feels.svg',
        alt: 'Icono de la casa de la barra de navegacion de instagram',
        textP: 'Reels',
     },
     {
        image_rut: 'profile.svg',
        image_rut2: 'profile.jpg',
        alt: 'Icono de la casa de la barra de navegacion de instagram',
        secondAlt: 'Icono de corazon en la barra de navegacion',
        textP: 'Perfil',
        onSecondImg: true,
        ActionFuntion: () => {
         alert('Hola2')
      }
     },
     {
        image_rut: 'heart.svg',
        alt: 'Icono de la casa de la barra de navegacion de instagram',
        textP: 'Notificaciones',
        ActionFuntion: () => {
         alert('Hola3')
      }
     },
     {
        image_rut: 'messages.svg',
        alt: 'Icono de la casa de la barra de navegacion de instagram',
        textP: 'Mensajes',
     },
     {
        image_rut: 'explore.svg',
        alt: 'Icono de la casa de la barra de navegacion de instagram',
        textP: 'Explorar',
     },
    ]
    return(
        <ul className="menu">
            {
                images.map((image)=>(
                    <MenuItem url={image.image_rut} alt={image.alt} secondImg={image.onSecondImg} secondUrl={image.image_rut2} secondAlt={image.secondAlt} onText={image.textOn} text={image.textP} action={image.ActionFuntion}/>
                ))
            }    
        </ul>
    )
};

export default Menu