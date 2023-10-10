import React, {FC} from 'react';
import {Box, Link} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

interface HeaderLinkProps {
    text: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({text}) => (
    <Link
        href={`#${text}`}
        sx={{
            textDecoration: 'none',
            color: 'white',
            cursor: 'pointer',
            transition: 'color 0.3s ease-in-out',
            '&:hover': {color: 'var(--mint-green)'},
        }}
    >
        {text}
    </Link>
);

const Header: FC = () => {
    const isPhone = useMediaQuery('(max-width:600px)');

    return (
        <header>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: '30px',
                    pt: '10px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'var(--mint-green)',
                        fontSize: '25px',
                        textTransform: 'uppercase',
                        border: `4px solid ${'var(--mint-green)'}`,
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                    }}
                >
                    odb
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: isPhone ? '20px' : '70px',
                        fontSize: isPhone ? '15px' : '20px',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                    }}
                >
                    <HeaderLink text="home" />
                    <HeaderLink text="projects" />
                    <HeaderLink text="about" />
                </Box>
            </Box>
        </header>
    );
};

export default Header;
