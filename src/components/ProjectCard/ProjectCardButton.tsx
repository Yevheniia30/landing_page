import {Button} from '@mui/material';
import {FC} from 'react';

interface ProjectCardButtonProps {
    buttonTitle: string;
    onClick?: () => void;
}
const ProjectCardButton: FC<ProjectCardButtonProps> = ({buttonTitle, onClick}) => {
    return (
        <Button
            size="small"
            className="btn"
            onClick={onClick}
            sx={{
                backgroundImage: `var(--button-gradient)`,
                backgroundSize: '100%',
                backgroundRepeat: 'repeat',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                paddingX: 2,
                '&:hover': {
                    // WebkitTextFillColor: 'var(--primary-bg-color)',
                    // color: 'var(--primary-bg-color)',
                    // background: 'var(--button-gradient)',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        zIndex: -1,
                        inset: 0,
                        border: '1px solid transparent',
                        borderRadius: '15px',
                        background: 'var(--button-gradient)',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'border-box',
                        WebkitMask:
                            'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                        webkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        WebkitMaskRepeat: 'no-repeat',
                    },
                },
            }}
        >
            {buttonTitle}
        </Button>
    );
};

export default ProjectCardButton;
