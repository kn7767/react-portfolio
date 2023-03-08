import React, { UseState } from 'react';
import { render } from '@testing-library/react';

//import components 
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Nav from './nav';

export default function portfolioContainer() {
    const [ currentPage, setCurrentPage ] = UseState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />
        }
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        return <Contact />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Nav 
            currentPage={currentPage} 
            handlePageChange={handlePageChange} 
            />
            {renderPage()}
        </div>
    );
}