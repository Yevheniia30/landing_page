import React from 'react';
import './App.css';
import {Container} from '@mui/material';
import Main from './sections/Main';
import Hero from './sections/Hero';
import Footer from './sections/Footer';

function App() {
  return (
    <>
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
