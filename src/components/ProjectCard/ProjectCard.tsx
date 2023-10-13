import {FC} from 'react';
import {Card, CardContent, CardActions, Typography, Box} from '@mui/material';
import {Project} from '../../types/types';
import ShowFullInfoInDialogButton from '../ShowFullInfoInDialogButton/ShowFullInfoInDialogButton';
import ProjectCardButton from './ProjectCardButton';

const ProjectCard: FC<Project> = (props) => {
    const {title, shortDescription, icon: Component} = props;
    return (
        <Card
            sx={{
                paddingX: '15px',
                paddingY: '20px',
                background: 'var(--primary-bg-color)',
                height: '320px',
                ':hover': {
                    boxShadow: 'var(--shadow-card-color)',
                    scale: '1.02',
                    animation: 'var(--card-hover)',
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
                <ProjectCardButton buttonTitle="Перейти" />
                <ShowFullInfoInDialogButton {...props} />
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
