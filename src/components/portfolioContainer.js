// import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

//import components 
import Nav from './nav';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

export default function portfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

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