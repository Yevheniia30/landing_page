import {useEffect} from 'react';
import {Box, Link} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {scrollToSection} from '../utils';
import bgImage from '../images/background.png';
import bgImage2 from '../images/bg.jpg';

const Hero = () => {
    const isPhone = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        const url = window.location.href.split('/');
        const target = url[url.length - 1].toLowerCase();
        const element = document.getElementById(target);
        element && element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, []);

    return (
        <Box
            sx={{
                height: '100vh',

                // backgroundColor: 'var(--primary-bg-color)',
            }}
        >
            <Box
                sx={{
                    pt: '250px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '30px',
                    color: 'var(--mint-green)',
                    textTransform: 'uppercase',
                }}
            >
                <Box sx={{fontSize: isPhone ? '30px' : '35px'}}>hello!</Box>
                <Box
                    sx={{
                        fontSize: isPhone ? '40px' : '60px',
                        color: 'var(--mint-green)',
                    }}
                >
                    we are odb
                </Box>
                <Box
                    sx={{
                        fontSize: isPhone ? '15px' : '17px',
                        textTransform: 'none',
                        color: 'var(--primary-text-color)',
                    }}
                >
                    here are all projects and information about them
                </Box>
                <Link
                    className="btn"
                    href="#projects"
                    onClick={(e) => scrollToSection(e, 'projects')}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: '20px',
                        paddingY: '16px',
                        width: '180px',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderRadius: '40px',
                        // text gradient properties
                        background: 'var(--button-gradient)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent',
                        position: 'relative',
                        zIndex: 0,
                        // border gradient properties
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            zIndex: -1,
                            inset: 0,
                            border: '2px solid transparent',
                            borderRadius: '40px',
                            background: 'var(--button-gradient)',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'border-box',
                            WebkitMask:
                                'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                            webkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            WebkitMaskRepeat: 'no-repeat',
                        },
                        ':hover': {
                            color: 'var(--primary-bg-color)',
                            WebkitTextFillColor: 'var(--primary-bg-color)',
                            WebkitBackgroundClip: 'border-box',
                            backgroundClip: 'border-box',
                        },
                    }}
                >
                    start now
                </Link>
            </Box>
        </Box>
    );
};

export default Hero;
