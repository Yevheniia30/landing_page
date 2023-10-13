import {useEffect, useState} from 'react';
import {Fab} from '@mui/material';
import {KeyboardArrowUp} from '@mui/icons-material';

const ScrollToTopButton = () => {
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

    if (!showScrollToTopButton) {
        return null;
    }

    return (
        <Fab
            sx={{
                background: 'var(--button-gradient)',
                position: 'fixed',
                top: window.innerHeight - 150,
                right: '100px',
            }}
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                })
            }
        >
            <KeyboardArrowUp fontSize="large" />
        </Fab>
    );
};

export default ScrollToTopButton;
