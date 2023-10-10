import {
    Avatar,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemText,
    SxProps,
    Typography,
    Link,
    Zoom,
    Fade,
    Grow,
    ListSubheader,
    LinearProgress,
    LinearProgressProps,
} from '@mui/material';
import {Close, Label} from '@mui/icons-material';
import {FC, useEffect, useState, ReactElement, cloneElement, forwardRef, Ref} from 'react';
import {Project} from '../types/types';
import {TransitionProps} from '@mui/material/transitions';

interface ShowFullInfoInDialogButtonProps extends Project {
    sx: SxProps;
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return <Grow ref={ref} {...props} />;
});

const ShowFullInfoInDialogButton: FC<ShowFullInfoInDialogButtonProps> = (props) => {
    const {
        sx,
        title,
        fullDescription,
        developers,
        businessAnalytics,
        gitlabLink,
        swaggerLink,
        pageLink,
        releaseDate,
        technologies,
    } = props;

    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen((prevState) => !prevState);

    return (
        <>
            <Button size="small" sx={sx} onClick={handleToggle}>
                Деталі
            </Button>
            <Dialog
                open={open}
                onClose={handleToggle}
                TransitionComponent={Transition}
                maxWidth="md"
                fullWidth
                sx={{
                    backgroundColor: 'rgba(28, 33, 43, 0.7)',
                    '& .MuiPaper-root': {
                        backgroundColor: 'var(--black-navy)',
                        color: 'var(--primary-text-color)',
                        boxShadow:
                            'rgba(44,48,58, 0.9) 0px 10px 25px, rgba(44,48,58, 1) 0px -10px 25px, rgba(253, 209, 189, 0.9) 0px 4px 10px, rgba(44,48,58, 0.3) 0px 12px 13px, rgba(253, 209, 189, 0.9) 0px -3px 6px',

                        // 'rgba(44,48,58, 0.9) 0px 10px 25px, rgba(44,48,58, 0.9) 0px -10px 25px, rgba(18, 152, 95, 0.5) 0px 4px 6px, rgba(44,48,58, 0.3) 0px 12px 13px, rgba(18, 152, 95, 0.5) 0px -3px 5px',
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
                    <Typography
                        sx={{
                            lineHeight: 2,
                            p: 0,
                            marginTop: 2,
                            color: 'var(--secondary-text-color)',
                        }}
                    >
                        Розробники:
                    </Typography>
                    {developers.map((item) => (
                        <Typography key={item.login}>
                            {item.fullname}
                            <Typography
                                component="span"
                                variant="subtitle2"
                                color="var(--secondary-text-color)"
                                sx={{marginLeft: 1}}
                            >
                                {item.login}
                            </Typography>
                            <Link
                                href={`mailto:${item.email}`}
                                target="_blank"
                                underline="hover"
                                rel="noreferrer"
                                sx={{marginLeft: 2}}
                            >
                                {item.email}
                            </Link>
                        </Typography>
                    ))}
                    <Typography
                        sx={{
                            lineHeight: 2,
                            p: 0,
                            marginTop: 2,
                            color: 'var(--secondary-text-color)',
                        }}
                    >
                        Бізнес-аналітики:
                    </Typography>
                    {businessAnalytics.map((item) => (
                        <Typography key={item.login}>
                            {item.fullname}
                            <Typography
                                component="span"
                                variant="subtitle2"
                                color="var(--secondary-text-color)"
                                sx={{marginLeft: 1}}
                            >
                                {item.login}
                            </Typography>
                            <Link
                                href={`mailto:${item.email}`}
                                target="_blank"
                                underline="hover"
                                sx={{marginLeft: 2}}
                            >
                                {item.email}
                            </Link>
                        </Typography>
                    ))}
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
                        <Typography component="span">
                            Gitlab:
                            <Link
                                href={gitlabLink}
                                target="_blank"
                                underline="hover"
                                sx={{marginLeft: 1, color: 'var(--mint-green)'}}
                            >
                                {gitlabLink}
                            </Link>
                        </Typography>
                        <Typography component="span">
                            API(Swagger):
                            <Link
                                href={swaggerLink}
                                target="_blank"
                                underline="hover"
                                sx={{marginLeft: 1, color: 'var(--mint-green)'}}
                            >
                                {swaggerLink}
                            </Link>
                        </Typography>
                        <Typography component="span">
                            Сторінка:
                            <Link
                                href={pageLink}
                                target="_blank"
                                underline="hover"
                                sx={{marginLeft: 1, color: 'var(--mint-green)'}}
                            >
                                {pageLink}
                            </Link>
                        </Typography>
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
                    {technologies.map((item) => (
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
                    <Button sx={sx} onClick={handleToggle}>
                        Закрити
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ShowFullInfoInDialogButton;
