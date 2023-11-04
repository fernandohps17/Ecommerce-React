// Import Dependencias React
import { BrowserRouter } from 'react-router-dom';

// Import Components
import { AppRoutes } from '../../Components/AppRoutes';
import { Navbar } from '../../Components/Navbar';

// Import CSS
import './style.scss';
import { Card } from '../../Components/Card';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <div className='container'>
          <div className='content'>
            <Card />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App