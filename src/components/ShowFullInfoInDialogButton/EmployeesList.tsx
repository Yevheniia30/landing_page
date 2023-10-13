import {Link, Typography} from '@mui/material';
import {Employee} from '../../types/types';
import {FC} from 'react';

interface EmployeesListProps {
    title: string;
    data: Employee[];
}

const EmployeesList: FC<EmployeesListProps> = ({title, data}) => (
    <>
        <Typography
            sx={{
                lineHeight: 2,
                p: 0,
                marginTop: 2,
                color: 'var(--secondary-text-color)',
            }}
        >
            {title}:
        </Typography>
        {data.map((item: Employee) => (
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
    </>
);

export default EmployeesList;
