// Import Dependencias React
import { BrowserRouter } from 'react-router-dom';

// Import Components
import { AppRoutes } from '../../Components/AppRoutes';
import { Navbar } from '../../Components/Navbar';

// Import CSS
import './style.scss';
import { ShoppingCartProvider } from '../../Context';

function App() {

  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
}

export default App