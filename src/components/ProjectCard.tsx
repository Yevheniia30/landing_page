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
                // background: 'radial-gradient(circle, rgba(80,81,94,0.3) 0%, rgba(10,9,13,0.8) 90%)',
                background: 'var(--black-navy)',
                // background: 'radial-gradient(circle, rgba(99,99,102,1) 0%, rgba(23,23,32,1) 100%)',
                height: '320px',
                // border: '1px solid var(--secondary-bg-color)',
                ':hover': {
                    // boxShadow: 'var(--shadow-color)',
                    boxShadow:
                        'rgba(44,48,58, 0.9) 0px 10px 25px, rgba(44,48,58, 1) 0px -10px 25px, rgba(253, 209, 189, 0.9) 0px 4px 10px, rgba(44,48,58, 0.3) 0px 12px 13px, rgba(253, 209, 189, 0.9) 0px -3px 6px',

                    // 'rgba(44,48,58, 0.9) 0px 10px 25px, rgba(44,48,58, 0.9) 0px -10px 25px, rgba(18, 152, 95, 0.5) 0px 4px 6px, rgba(44,48,58, 0.3) 0px 12px 13px, rgba(18, 152, 95, 0.5) 0px -3px 5px',
                    scale: '1.02',
                    animation: '$mui-ripple-enter 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
                    // animation: '$mui-ripple-enter 200ms cubic-bezier(.17,.67,.83,.67)',
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
                    variant="contained"
                    sx={{
                        // border: '1px solid',
                        // borderImageSlice: 1,
                        // borderImageSource: 'var(--nude-gradient)',
                        backgroundImage: `var(--nude-gradient)`,
                        backgroundSize: '100%',
                        backgroundRepeat: 'repeat',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold',
                        marginRight: 1,
                        '&:hover': {
                            WebkitTextFillColor: 'var(--black-navy)',
                            color: 'var(--black-navy)',
                            background: 'var(--nude-gradient)',
                        },
                    }}
                >
                    Перейти
                </Button>
                <ShowFullInfoInDialogButton
                    sx={{
                        // border: '1px solid',
                        // borderImageSlice: 1,
                        // borderImageSource: 'var(--nude-gradient)',
                        backgroundImage: `var(--nude-gradient)`,
                        backgroundSize: '100%',
                        backgroundRepeat: 'repeat',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold',
                        '&:hover': {
                            WebkitTextFillColor: 'var(--black-navy)',
                            color: 'var(--black-navy)',
                            background: 'var(--nude-gradient)',
                        },
                    }}
                    {...props}
                />
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
