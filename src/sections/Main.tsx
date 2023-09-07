import {Box, Grid} from '@mui/material';
import {useEffect, useState} from 'react';
import {projectsListData} from '../mocks/mocks';
import ProjectCard from '../components/ProjectCard';
import {Project} from '../types/types';

const Main = () => {
    const [projectsList, setProjectsList] = useState<Project[]>([]);

    useEffect(() => {
        setProjectsList(projectsListData);
    }, []);

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid
                container
                rowSpacing={{xs: 3, md: 4}}
                columnSpacing={{xs: 2, md: 3}}
                columns={{xs: 4, sm: 8, md: 12}}
            >
                {projectsList.map((el) => (
                    <Grid item xs={2} sm={4} md={4} key={el.id}>
                        <ProjectCard {...el} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Main;
