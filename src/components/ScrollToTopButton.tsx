import {Fab} from '@mui/material';
import {KeyboardArrowUp} from '@mui/icons-material';

const ScrollToTopButton = () => {
    return (
        <Fab
            sx={{
                background: 'var(--nude-gradient)',
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
