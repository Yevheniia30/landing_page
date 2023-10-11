import React, {useEffect, useState} from 'react';
import './App.css';
import {Container} from '@mui/material';
import Main from './sections/Main';
import Hero from './sections/Hero';
import Footer from './sections/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
    const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const scrollHandler = (e: any) => {
        window.innerHeight - e.target.documentElement.scrollTop < 100
            ? setShowScrollToTopButton(true)
            : setShowScrollToTopButton(false);
    };

    return (
        <>
            {showScrollToTopButton && <ScrollToTopButton />}
            <Hero />
            <Container maxWidth="xl">
                <section id="projects">
                    <Main />
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default App;
