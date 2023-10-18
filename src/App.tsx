import {Box, Container} from '@mui/material';
import Header from './sections/Header';
import Main from './sections/Main';
import Hero from './sections/Hero';
import Footer from './sections/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import frame from './images/Frameblur.png';

const App = () => (
    <>
        <Box
            sx={{
                background: `linear-gradient(var(--primary2), var(--primary2)), url(${frame})`,
                backgroundRepeat: 'no-repeat',
                backgroundOrigin: 'border-box',
                backgroundSize: 'cover',
            }}
        >
            <Header />
            <section id="home">
                <Hero />
            </section>
        </Box>

        <Container maxWidth="xl">
            <section id="projects">
                <Main />
            </section>
        </Container>
        <Footer />
        <ScrollToTopButton />
    </>
);

export default App;
