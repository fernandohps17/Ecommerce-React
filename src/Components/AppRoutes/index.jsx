// Import Dependencias React
import { useRoutes } from 'react-router-dom';

// Import Pages
import { Home } from '../../Pages/Home';
import { MyAccount } from '../../Pages/MyAccount';
import { MyOrder } from '../../Pages/MyOrder';
import { MyOrders } from '../../Pages/MyOrders';
import { NotFound } from '../../Pages/NotFound';
import { SignIn } from '../../Pages/SignIn';

export const AppRoutes = () => {

    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/my-account', element: <MyAccount /> },
        { path: '/my-order', element: <MyOrder /> },
        { path: '/my-orders', element: <MyOrders /> },
        { path: '/my-orders/last', element: <MyOrder /> },
        { path: '/sign-in', element: <SignIn /> },
        { path: '/*', element: <NotFound /> }
    ])

    return routes
}