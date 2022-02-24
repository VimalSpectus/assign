import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate, useLocation} from 'react-router-dom';

const Weather = () => {
    const[data, setData] = useState()
    const { state } = useLocation();
    const navigate = useNavigate();
  

    useEffect(() => {
        ApiCallWeather();
    }, []);

    const ApiCallWeather = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`http://api.weatherstack.com/current?access_key=12700ec246607b0da6baa1e34ea85377&query=${state}`,
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
    <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">temp</TableCell>
                        <TableCell align="center">weather_icon</TableCell>
                        <TableCell align="center">wind speed</TableCell>
                        <TableCell align="center">pricip</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data ? (
                    <TableRow>
                        <TableCell align="center">{data.current.temperature}</TableCell>
                        <TableCell align="center">{data.current.wind_speed}</TableCell>
                        <TableCell align="center"><img src={data.current.weather_icons}/></TableCell>
                        <TableCell align="center">{data.current.precip}</TableCell>
                    </TableRow>
                  ) : null};
                </TableBody>
            </Table>
        </TableContainer>
  )
}

export default Weather