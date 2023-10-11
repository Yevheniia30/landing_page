import {Card, CardContent, CardActions, Typography, Button, Box} from '@mui/material';
import {Project} from '../types/types';
import {FC} from 'react';
import ShowFullInfoInDialogButton from './ShowFullInfoInDialogButton';

const ProjectCard: FC<Project> = (props) => {
    const {title, shortDescription, icon: Component} = props;
    return (
        <Card
            sx={{
                paddingX: '15px',
                paddingY: '20px',
                background: 'var(--black-navy)',
                height: '320px',
                ':hover': {
                    boxShadow:
                        'rgba(44,48,58, 0.9) 0px 5px 8px, rgba(44,48,58, 0.9) 0px -5px 8px, rgba(253, 209, 189, 0.3) 0px 2px 5px, rgba(44,48,58, 0.3) 0px 3px 6px, rgba(253, 209, 189, 0.3) 0px -3px 6px',
                    scale: '1.02',
                    animation: '$mui-ripple-enter 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
                },
            }}
        >
            <CardContent sx={{paddingTop: '50px'}}>
                <Box sx={{display: 'flex', gap: 1}}>
                    {Component && (
                        <Component
                            sx={{
                                width: 32,
                                height: 32,
                                fill: 'var(--primary-text-color)',
                            }}
                        />
                    )}
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="var(--primary-text-color)"
                    >
                        {title}
                    </Typography>
                </Box>
                <Typography
                    variant="body2"
                    sx={{fontSize: 'medium', marginY: 1}}
                    color="var(--secondary-text-color)"
                >
                    {shortDescription}
                </Typography>
            </CardContent>
            <CardActions sx={{paddingX: '16px'}}>
                <Button
                    size="small"
                    className="btn"
                    sx={{
                        backgroundImage: `var(--nude-gradient)`,
                        backgroundSize: '100%',
                        backgroundRepeat: 'repeat',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold',
                        paddingX: 2,
                        '&:hover': {
                            // WebkitTextFillColor: 'var(--black-navy)',
                            // color: 'var(--black-navy)',
                            // background: 'var(--nude-gradient)',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                zIndex: -1,
                                inset: 0,
                                border: '1px solid transparent',
                                borderRadius: '15px',
                                background: 'var(--nude-gradient)',
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
                    Перейти
                </Button>
                <ShowFullInfoInDialogButton
                    sx={{
                        backgroundImage: `var(--nude-gradient)`,
                        backgroundSize: '100%',
                        backgroundRepeat: 'repeat',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        paddingX: 2,
                        fontWeight: 'bold',
                        '&:hover': {
                            // WebkitTextFillColor: 'var(--black-navy)',
                            // color: 'var(--black-navy)',
                            // background: 'var(--nude-gradient)',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                zIndex: -1,
                                inset: 0,
                                border: '1px solid transparent',
                                borderRadius: '15px',
                                background: 'var(--nude-gradient)',
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
                    {...props}
                />
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
