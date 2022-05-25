import React from 'react'
import {TableContainer,Table, Paper, TableHead, TableRow, TableCell, TableBody} from '@mui/material';

function Tabulars() {
    return (<>
    
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell >Sr.No</TableCell>
                        <TableCell >Title</TableCell>
                        <TableCell >Description</TableCell>
                        <TableCell >Ststus</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>01</TableCell>
                        <TableCell>Zishan</TableCell>
                        <TableCell>ali</TableCell>
                        <TableCell>software</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </>
    )
}

export default Tabulars