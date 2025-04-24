import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navber from "./Pages/Shared/Navber";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import Footer from "./Pages/Shared/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<PortfolioContainer></PortfolioContainer>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
