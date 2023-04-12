import { RouteList } from "../interfaces/routes";
import Departements from "../pages/Departements";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Types from "../pages/Types";

export const ROUTES: RouteList[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/products',
        element: <Products />,
    },
    {
        path: '/departements',
        element: <Departements />,
    },
    {
        path: '/types',
        element: <Types />,
    },
]



