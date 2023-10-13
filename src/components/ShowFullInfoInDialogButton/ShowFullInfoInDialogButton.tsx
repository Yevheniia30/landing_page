import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
    Link,
    Grow,
} from '@mui/material';
import {Close} from '@mui/icons-material';
import {useState, ReactElement, forwardRef, Ref, FC} from 'react';
import {Project} from '../../types/types';
import {TransitionProps} from '@mui/material/transitions';
import ProjectCardButton from '../ProjectCard/ProjectCardButton';
import EmployeesList from './EmployeesList';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return <Grow ref={ref} {...props} />;
});

interface ProjectLinkItemProps {
    title: string;
    link: string;
}

const ProjectLinkItem: FC<ProjectLinkItemProps> = ({title, link}) => (
    <Typography component="span">
        {title}:
        <Link
            href={link}
            target="_blank"
            underline="hover"
            sx={{marginLeft: 1, color: 'var(--mint-green)'}}
        >
            {link}
        </Link>
    </Typography>
);

const ShowFullInfoInDialogButton = (props: Project) => {
    const {
        title,
        fullDescription,
        developers,
        businessAnalytics,
        gitlabLink,
        swaggerLink,
        pageLink,
        technologies,
    } = props;

    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen((prevState) => !prevState);

    return (
        <>
            <ProjectCardButton buttonTitle="Деталі" onClick={handleToggle} />
            <Dialog
                open={open}
                onClose={handleToggle}
                TransitionComponent={Transition}
                maxWidth="md"
                fullWidth
                sx={{
                    backgroundColor: 'rgba(28, 33, 43, 0.7)',
                    '& .MuiPaper-root': {
                        backgroundColor: 'var(--primary-bg-color)',
                        color: 'var(--primary-text-color)',
                        boxShadow: 'var(--shadow-modal-color)',
                    },
                }}
            >
                <DialogTitle
                    color="var(--mint-green)"
                    sx={{fontSize: 24, fontWeight: 'bold', textTransform: 'uppercase'}}
                >
                    {title}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleToggle}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: 'var(--secondary-text-color)',
                    }}
                >
                    <Close />
                </IconButton>
                <DialogContent dividers>
                    <Typography sx={{lineHeight: 2, p: 0, color: 'var(--secondary-text-color)'}}>
                        Опис:
                    </Typography>
                    <Typography variant="inherit" component="p">
                        {fullDescription}
                    </Typography>
                    <EmployeesList title="Розробники" data={developers} />
                    <EmployeesList title="Бізнес-аналітики" data={businessAnalytics} />
                    <Typography
                        sx={{
                            lineHeight: 2,
                            p: 0,
                            marginTop: 2,
                            color: 'var(--secondary-text-color)',
                        }}
                    >
                        Документація проєкта:
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', marginBottom: 2}}>
                        <ProjectLinkItem title="Gitlab" link={gitlabLink} />
                        <ProjectLinkItem title="API(Swagger)" link={swaggerLink} />
                        <ProjectLinkItem title="Сторінка" link={pageLink} />
                    </Box>
                    <Typography
                        component="span"
                        sx={{
                            lineHeight: 2,
                            p: 0,
                            marginRight: 1,
                            color: 'var(--secondary-text-color)',
                        }}
                    >
                        Технології:
                    </Typography>
                    {technologies.map((item: string) => (
                        <Typography
                            key={item}
                            component="span"
                            sx={{
                                '&:not(:last-child)': {marginRight: 1},
                                '&:not(:last-child)::after': {
                                    content: '","',
                                },
                            }}
                        >
                            {item}
                        </Typography>
                    ))}
                </DialogContent>
                <DialogActions sx={{p: 2}}>
                    <ProjectCardButton buttonTitle="Закрити" onClick={handleToggle} />
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ShowFullInfoInDialogButton;
