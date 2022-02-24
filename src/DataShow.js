import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';


const DataShow = () => {
    const [data, setData] = useState();
    const { state } = useLocation();

    React.useEffect(() => {
        ApiCall();
    }, []);

    const navigate = useNavigate();
    const handleClick = () => navigate('/weather' , {state : data[0].capital[0]});

    const ApiCall = () => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://restcountries.com/v3.1/name/${state}`, 
             requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(result);
                setData(result);
                // console.log(data);
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">capital</TableCell>
                        <TableCell align="center">population</TableCell>
                        <TableCell align="center">latlng</TableCell>
                        <TableCell align="center">flags</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data ? (
                    <TableRow>
                        <TableCell align="center">{data[0].capital[0]}</TableCell>
                        <TableCell align="center">{data[0].population}</TableCell>
                        <TableCell align="center">{data[0].latlng[0]},{data[0].latlng[1]}</TableCell>
                        <TableCell align="center"><img src={data[0].flags['png']} /></TableCell>
                    </TableRow>
                ) : null};
                </TableBody>
            </Table>
        </TableContainer>
     <div><Button onClick={() => {
          handleClick()
          }}>Capital Weather</Button> </div>  
    </div>
    )
}

export default DataShow