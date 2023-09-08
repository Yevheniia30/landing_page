import {Card, CardContent, CardActions, Typography, Button, Box} from '@mui/material';
import {Project} from '../types/types';
import {FC} from 'react';
import ShowFullInfoInDialogButton from './ShowFullInfoInDialogButton';

const ProjectCard: FC<Project> = ({title, shortDescription, icon: Component}) => {
    return (
        <Card
            sx={{
                paddingX: '10px',
                paddingY: '15px',
                // backgroundColor: 'var(--primary-bg-color)',
                // background: 'rgba(80,81,94,0.3)',
                background: 'radial-gradient(circle, rgba(80,81,94,0.3) 0%, rgba(10,9,13,0.8) 90%)',
                // background: 'radial-gradient(circle, rgba(99,99,102,1) 0%, rgba(35,35,80,1) 100%)',
                // background: 'radial-gradient(circle, rgba(99,99,102,1) 0%, rgba(23,23,32,1) 100%)',
                height: '320px',
                // border: '1px solid var(--secondary-bg-color)',
                ':hover': {
                    boxShadow: 'var(--shadow-color)',
                    scale: '1.02',
                    animation: '$mui-ripple-enter 100ms cubic-bezier(0.4, 0, 0.2, 1)',
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
                                fill: '#ffffff',
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
                <Typography variant="body2" color="var(--secondary-text-color)">
                    {shortDescription}
                </Typography>
            </CardContent>
            <CardActions sx={{paddingX: '16px'}}>
                <Button
                    size="small"
                    variant="contained"
                    sx={{
                        background: 'var(--accent-violet-gradient)',
                        color: 'var(--primary-text-color)',
                    }}
                >
                    Увійти
                </Button>
                <ShowFullInfoInDialogButton
                    sx={{
                        background: 'var(--accent-violet-gradient)',
                        color: 'var(--primary-text-color)',
                    }}
                />
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
