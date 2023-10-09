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
import {styled, keyframes} from '@mui/material/styles';

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

const stripes = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
`;

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

    function generate(element: ReactElement) {
        return developers.map((value) =>
            cloneElement(element, {
                key: value.login,
            }),
        );
    }

    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen((prevState) => !prevState);

    // class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation24 MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthMd MuiDialog-paperFullWidth css-rnmm7m-MuiPaper-root-MuiDialog-paper"

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
                    '& .MuiPaper-root': {
                        backgroundColor: 'var(--secondary-bg-color)',
                        border: '1px solid var(--button-bg-color)',
                    },
                }}
            >
                <DialogTitle color="var(--primary-text-color)">{title}</DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleToggle}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: 'var(--primary-text-color)',
                    }}
                >
                    <Close />
                </IconButton>
                <DialogContent dividers>
                    <Typography sx={{lineHeight: 2, p: 0}}>Опис:</Typography>
                    <Typography variant="inherit" component="p">
                        {fullDescription}
                    </Typography>
                    <Typography sx={{lineHeight: 2, p: 0, marginTop: 2}}>Розробники:</Typography>
                    {developers.map((item) => (
                        <Typography key={item.login}>
                            {item.fullname}
                            <Typography
                                component="span"
                                variant="subtitle2"
                                color="text.secondary"
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
                    <Typography sx={{lineHeight: 2, p: 0, marginTop: 2}}>
                        Бізнес-аналітики:
                    </Typography>
                    {businessAnalytics.map((item) => (
                        <Typography key={item.login}>
                            {item.fullname}
                            <Typography
                                component="span"
                                variant="subtitle2"
                                color="text.secondary"
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
                    <Typography sx={{lineHeight: 2, p: 0, marginTop: 2}}>
                        Документація проєкта:
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', marginBottom: 2}}>
                        <Typography component="span">
                            Gitlab:
                            <Link
                                href={gitlabLink}
                                target="_blank"
                                underline="hover"
                                sx={{marginLeft: 1}}
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
                                sx={{marginLeft: 1}}
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
                                sx={{marginLeft: 1}}
                            >
                                {pageLink}
                            </Link>
                        </Typography>
                    </Box>
                    <Typography component="span" sx={{lineHeight: 2, p: 0, marginRight: 1}}>
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
