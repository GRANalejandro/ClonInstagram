import { useRoutes, BrowserRouter } from "react-router-dom";
import CentralMain from "../Central-main/CentralMain";
import CentralProfile from "../Central-profile/CentralProfile";

const AppRoutes = () => {
    // Utilizamos useRoutes para configurar las rutas de nuestra aplicación
    const routes = useRoutes([
      {
        path: "/", // Ruta de inicio
        element: <CentralMain />, // Componente a mostrar cuando la ruta coincide
      },
      {
        path: "/profile", // Ruta "nosotros" o "Acerca de"
        element: <CentralProfile />, // Componente para la página "Acerca de"
      },
      
    ]);
  
    // Devolvemos las rutas configuradas
    return routes;
  };
  
  // Definimos un componente llamado RoutesWrapper que envuelve la aplicación
  const RoutesWrapper = ({children}) => {
    return (
      <BrowserRouter> {/* Usamos BrowserRouter para gestionar las rutas */}
        {children} {/* Pasamos los componentes hijos como prop */}
        <AppRoutes /> {/* Renderizamos las rutas configuradas */}
      </BrowserRouter>
    );
  };
  
  // Exportamos el componente RoutesWrapper
  export default RoutesWrapper;