//makes the center of the page change without needing to rerender header, nav, and footer

// import { render } from '@testing-library/react';
import React, { useState } from 'react';

//import components 
import Nav from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return (
                <div>
                    <Home />
                </div>
            )
        }
        if (currentPage === 'About') {
            return (
                <div>
                    <About />
                </div>
            )
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        return (
        <Contact />
        )
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