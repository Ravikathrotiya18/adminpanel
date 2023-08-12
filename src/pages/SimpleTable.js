import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Header from './Header'
import './css/SimpleTable.css'

const columns = [
    { id: 'RenderingEngine', label: 'Rendering Engine', minWidth: 170 },
    { id: 'Browser', label: 'Browser', minWidth: 100 },
    { id: 'Platform', label: 'Platform', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'EngineVersion', label: 'Engine Version', minWidth: 170, align: 'right' },
    { id: 'CSSGrade', label: 'CSS Grade', minWidth: 170, align: 'right' },
];

function createData(RenderingEngine, Browser, Platform, EngineVersion, CSSGrade) {
    return { RenderingEngine, Browser, Platform, EngineVersion, CSSGrade };
}

const rows = [
    createData('Gecko', 'Firefox 1.0', 'Win 98+ / OSX.2+', '1.7', 'A'),
    createData('Gecko', 'Firefox 1.5', 'Win 98+ / OSX.2+', '1.8', 'A'),
    createData('Gecko', 'Firefox 2.0', 'Win 98+ / OSX.2+', '1.8', 'A'),
    createData('Gecko', 'Firefox 3.0', 'Win 2k+ / OSX.3+', '1.9', 'A'),
    createData('Gecko', 'All others', 'OSX.2+', '1.8', 'A'),
    createData('Gecko', 'All others', 'OSX.3+', '1.8', 'A'),
    createData('Gecko', 'All others', 'Win 95+ / Mac OS 8.6-9.2', '1.7', 'A'),
    createData('Gecko', 'All others', 'Win 98SE+', '1.7', 'A'),
    createData('Gecko', 'All others', 'Win 98+ / OSX.2+', '1.8', 'A'),
    createData('Gecko', 'All others', 'Win 95+ / OSX.1+', '1', 'A'),
    createData('Gecko', 'Mozilla 1.1', 'Win 95+ / OSX.1+', '1.1', 'A'),
    createData('Gecko', 'Mozilla 1.2', 'Win 95+ / OSX.1+', '1.2', 'A'),
    createData('Gecko', 'Mozilla 1.3', 'Win 95+ / OSX.1+', '1.3', 'A'),
    createData('Gecko', 'Mozilla 1.4', 'Win 95+ / OSX.1+', '1.4', 'A'),
    createData('Gecko', 'Mozilla 1.5', 'Win 95+ / OSX.1+', '1.5', 'A'),
    createData('Gecko', 'Mozilla 1.6', 'Win 95+ / OSX.1+', '1.6', 'A'),
    createData('Gecko', 'Mozilla 1.7', 'Win 98+ / OSX.1+', '1.7', 'A'),
    createData('Gecko', 'Mozilla 1.8', 'Win 98+ / OSX.1+', '1.8', 'A'),
    createData('Gecko', 'Seamonkey 1.1', 'Win 98+ / OSX.2+', '1.8', 'A'),
    createData('Gecko', 'Epiphany 2.20', 'Gnome', '1.8', 'A'),
    createData('Other Browsers', 'All others', '-', '-', 'U'),
    createData('Presto', 'Opera 7.0', 'Win 95+/OSX.1', '-', 'A'),
    createData('Presto', 'Opera 7.5', 'Win 95+/OSX.2+', '-', 'A'),
    createData('Presto', 'Opera 8.0', 'Win 95+/OSX.2+', '-', 'A'),
    createData('Presto', 'Opera 8.5', 'Win 95+/OSX.2+', '-', 'A'),
    createData('Presto', 'Opera 9.0', 'Win 95+/OSX.2+', '-', 'A'),
    createData('Presto', 'Opera 9.2', 'Win 88+/OSX.3+', '-', 'A'),
    createData('Presto', 'Opera 9.5', 'Win 88+/OSX.3+', '-', 'A'),
    createData('Presto', 'Opera for Wii', 'Wii', '-', 'A'),
    createData('Presto', 'Nokia N800', 'N800', '-', 'a')
];

const rowsPerPage = 10;

export default function SimpleTable() {
    const [page, setPage] = React.useState(0);

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const handleNextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(rows.length / rowsPerPage) - 1));
    };

    const startRow = page * rowsPerPage;
    const endRow = startRow + rowsPerPage;

    const totalPages = Math.ceil(rows.length / rowsPerPage);

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <Button
                    key={i}
                    onClick={() => setPage(i - 1)}
                    style={{ minWidth: '30px' }}
                >
                    {i}
                </Button>
            );
        }
        return pageNumbers;
    };
    const color = grey[200];
    return (
        <Box sx={{ display: 'flex' }}>
            <Header/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='Box_componant'>
                <div className="container-fluid p-4 rounded" style={{ backgroundColor: color }}>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ position: 'relative' }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{
                                                    minWidth: column.minWidth,
                                                    fontWeight: 'bold', // Apply bold font weight
                                                }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.slice(startRow, endRow).map((row, index) => (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            {columns.map((column) => (
                                                <TableCell key={column.id} align={column.align}>
                                                    {row[column.id]}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
                            <Typography variant="body2" color="textSecondary">
                                {`Showing ${startRow + 1} to ${Math.min(endRow, rows.length)} of ${rows.length} entries`}
                            </Typography>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={handlePreviousPage}
                                    disabled={page === 0}
                                    sx={{
                                        width: 'fit-content',
                                        padding: '0.5rem',
                                        marginRight: '0.5rem',
                                        fontSize: '12px',
                                    }}
                                >
                                    Prev
                                </Button>
                                {totalPages > 1 && renderPageNumbers()}
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={handleNextPage}
                                    disabled={endRow >= rows.length}
                                    sx={{
                                        width: 'fit-content',
                                        padding: '0.5rem',
                                        marginRight: '0.5rem',
                                        fontSize: '12px',
                                    }}                    >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </Paper>
                </div>
            </Box>
        </Box>
    );
}
