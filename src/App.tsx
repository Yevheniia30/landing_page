import {Container} from '@mui/material';
import Header from './sections/Header';
import Main from './sections/Main';
import Hero from './sections/Hero';
import Footer from './sections/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App = () => (
    <>
        <Header />
        <section id="home">
            <Hero />
        </section>
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
