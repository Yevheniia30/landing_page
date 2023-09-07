import {Card, CardContent, CardActions, Typography, Button} from '@mui/material';
import {Project} from '../types/types';
import {FC} from 'react';

const ProjectCard: FC<Project> = ({title, shortDescription}) => (
    <Card
        sx={{
            backgroundColor: '#181621',
            color: '#ffffff',
            height: '320px',
            border: '1px solid #2c303a',
            ':hover': {
                boxShadow: '-2px -2px 10px 15px rgba(44,48,58,0.5)',
                scale: '1.03',
                // animation: '$mui-ripple-enter 100ms cubic-bezier(0.4, 0, 0.2, 1)',
                animation: '$mui-ripple-enter 200ms cubic-bezier(.17,.67,.83,.67)',
            },
        }}
    >
        <CardContent sx={{paddingTop: '50px'}}>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="#c7c9d3">
                {shortDescription}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Увійти</Button>
            <Button size="small">Деталі</Button>
        </CardActions>
    </Card>
);

export default ProjectCard;
