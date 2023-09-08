import React from 'react';
import './App.css';
import {Container} from '@mui/material';
import Main from './sections/Main';

function App() {
    return (
        <Container maxWidth="xl">
            <section id="projects">
                <Main />
            </section>
        </Container>
    );
}

export default App;
