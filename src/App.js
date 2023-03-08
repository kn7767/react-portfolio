import './App.css';

// import components
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import Portfolio from './components/pages/portfolio';

// import function
import portfolioContainer from './components/portfolioContainer';


function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}
portfolioContainer();


export default App;
