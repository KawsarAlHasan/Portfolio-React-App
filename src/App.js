import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navber from './Pages/Shared/Navber';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import Footer from './Pages/Shared/Footer';
import { Routes, Route } from 'react-router-dom';
import CarParts from './PortfolioContainer/Projects/Project/CarParts';
import CarManagement from './PortfolioContainer/Projects/Project/CarManagement';
import MobileHunter from './PortfolioContainer/Projects/Project/MobileHunter';


function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<PortfolioContainer></PortfolioContainer>} />
        <Route path="/carParts" element={<CarParts></CarParts>} />
        <Route path="/carManagement" element={<CarManagement></CarManagement>} />
        <Route path="/mobileHunter" element={<MobileHunter></MobileHunter>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
