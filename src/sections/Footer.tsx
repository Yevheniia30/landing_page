import {Box, Typography} from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = () => {
    const isPhone = useMediaQuery('(max-width:600px)');

    return (
        <footer>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    height: '200px',
                    py: '30px',
                    color: 'var(--primary-text-color)',
                    backgroundColor: 'var(--black-navy)',
                }}
            >
                <Typography variant={isPhone ? 'h5' : 'h2'}>How we work</Typography>
                <TimelineIcon sx={{color: 'var(--mint-green)', width: '70px', height: '70px'}} />
                <Box sx={{fontSize: isPhone ? '15px' : '17px'}}>
                    here are all projects and information about them
                </Box>
            </Box>
        </footer>
    );
};
export default Footer;
