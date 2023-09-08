import {Card, CardContent, CardActions, Typography, Button} from '@mui/material';
import {Project} from '../types/types';
import {FC} from 'react';

const ProjectCard: FC<Project> = ({title, shortDescription}) => (
    <Card
        sx={{
            backgroundColor: 'var(--primary-bg-color)',
            color: '#ffffff',
            height: '320px',
            border: '1px solid var(--secondary-bg-color)',
            ':hover': {
                boxShadow: 'var(--shadow-color)',
                scale: '1.02',
                // animation: '$mui-ripple-enter 100ms cubic-bezier(0.4, 0, 0.2, 1)',
                animation: '$mui-ripple-enter 200ms cubic-bezier(.17,.67,.83,.67)',
            },
        }}
    >
        <CardContent sx={{paddingTop: '50px'}}>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="var(--secondary-text-color)">
                {shortDescription}
            </Typography>
        </CardContent>
        <CardActions>
            <Button
                size="small"
                variant="contained"
                sx={{backgroundColor: 'var(--button-bg-color)'}}
            >
                Увійти
            </Button>
            <Button
                size="small"
                variant="contained"
                sx={{backgroundColor: 'var(--button-bg-color)'}}
            >
                Деталі
            </Button>
        </CardActions>
    </Card>
);

export default ProjectCard;
