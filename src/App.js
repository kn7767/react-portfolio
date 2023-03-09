import './App.css';
import React from 'react';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioContainer from './components/PortfolioContainer';

//keeps header and footer static 
function App() {
  return (
    <div className='container'>
      <Header></Header>
        <div>
          <PortfolioContainer></PortfolioContainer>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
