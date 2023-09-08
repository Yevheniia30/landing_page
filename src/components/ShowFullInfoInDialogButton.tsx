import {Button, Dialog, DialogContent, DialogTitle, SxProps} from '@mui/material';
import {FC, useState} from 'react';

interface ShowFullInfoInDialogButtonProps {
    sx: SxProps;
}

const ShowFullInfoInDialogButton: FC<ShowFullInfoInDialogButtonProps> = ({sx}) => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen((prevState) => !prevState);

    return (
        <>
            <Button size="small" sx={sx} onClick={handleToggle}>
                Деталі
            </Button>
            <Dialog open={open} onClose={handleToggle}>
                <DialogTitle></DialogTitle>
                <DialogContent></DialogContent>
            </Dialog>
        </>
    );
};

export default ShowFullInfoInDialogButton;
