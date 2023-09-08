import {Box, Link} from '@mui/material';
import Header from './Header';
import useMediaQuery from '@mui/material/useMediaQuery';

const Hero = () => {
  const isPhone = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{height: '100vh', backgroundColor: 'var(--main-bg-color)'}}>
      <Header />
      <Box
        sx={{
          mt: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          color: 'white',
          textTransform: 'uppercase',
        }}
      >
        <Box sx={{fontSize: isPhone ? '30px' : '35px'}}>hello!</Box>
        <Box
          sx={{
            fontSize: isPhone ? '40px' : '60px',
            color: 'white',
          }}
        >
          we are odb
        </Box>
        <Box sx={{fontSize: isPhone ? '15px' : '17px', textTransform: 'none'}}>
          here are all projects and information about them
        </Box>
        <Link
          href="#projects"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none',
            p: '15px',
            borderRadius: '15px',
            mt: '20px',
            backgroundColor: 'var(--main-bg-color)',
            color: 'var(--accent-green-color)',
            border: `1px solid ${'var(--accent-green-color)'}`,
            width: '150px',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.6s ease-in-out',
            '&:hover': {
              backgroundColor: 'white',
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
