import {Box, Grid} from '@mui/material';
import {useEffect, useState} from 'react';
import {projectsListData} from '../mocks/mocks';
import ProjectCard from '../components/ProjectCard';
import {Project} from '../types/types';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Papa from 'papaparse';

const Main = () => {
    const [projectsList, setProjectsList] = useState<Project[]>([]);
    // const [data, setData] = useState([]);

    // const SHEET_ID = '1EjPKLTCp43Ae_4yyms8GhMhJT4CmHLnkQRpmpw4pfBY'; // Get this from the main sheet URL (not the copied Publish URL with '2PACX' in it).
    // const API_KEY = 'AIzaSyBvHvfjpYGVNiecoewojvLJ2W6D_O00h6w';
    // const SHEET_NAME = 'test table';

    // function fetchSheet() {
    //     const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
    //     return fetch(url).then((response) =>
    //         response.json().then((result) => {
    //             const data = Papa.parse(Papa.unparse(result.values), {header: true});
    //             // complete(data);
    //             console.log('data', data);
    //         }),
    //     );
    // }

    useEffect(() => {
        setProjectsList(projectsListData);
    }, []);

    // useEffect(() => {
    //     function fetchSheet() {
    //         const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
    //         return fetch(url).then((response) =>
    //             response.json().then((result) => {
    //                 const data = Papa.parse(Papa.unparse(result.values), {header: true});
    //                 // complete(data);
    //                 console.log('data', data);
    //             }),
    //         );
    //     }
    //     fetchSheet();
    // }, []);

    // useEffect(() => {
    //     Papa.parse(
    //         'https://docs.google.com/spreadsheets/d/e/2PACX-1vTK3k-S8hXQ0i70Jyh6GzITQxbu64MsnyZ2CgNAzGivrpt3ak387xKLa9wPoa2vuc7mBOyaMs5iCvFI/pub?output=csv',
    //         {
    //             download: true,
    //             header: true,
    //             complete: (res: any) => {
    //                 setData(res.data);
    //             },
    //         },
    //     );
    // }, []);

    console.log('projectsList', projectsList);
    // console.log('data', data);

    return (
        <Box sx={{flexGrow: 1, paddingY: 7}}>
            <Grid
                container
                rowSpacing={{xs: 3, md: 4}}
                columnSpacing={{xs: 2, md: 3}}
                columns={{xs: 4, sm: 8, md: 12}}
            >
                {projectsList.map((el) => (
                    <Grid item xs={4} sm={4} md={4} key={el.id}>
                        <ProjectCard {...el} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Main;
