import './App.css';
import MainHome from './PortfolioContainer/Home/MainHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navber from './Pages/Shared/Navber';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';


function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <MainHome></MainHome>     
      <PortfolioContainer></PortfolioContainer>
    </div>
  );
}

export default App;
