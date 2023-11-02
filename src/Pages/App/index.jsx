// Import Dependencias React
import { BrowserRouter } from 'react-router-dom';

// Import Components
import { AppRoutes } from '../../Components/AppRoutes';
import { Navbar } from '../../Components/Navbar';

// Import CSS
import './style.scss';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
