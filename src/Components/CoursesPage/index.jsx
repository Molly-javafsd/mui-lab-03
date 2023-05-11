import React,{ useEffect,useState  } from 'react';
import { Typography, Grid, Card, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Alert, BottomNavigation, BottomNavigationAction, Button} from '@mui/material'

import { CourseData, FeesData } from '../data';

export default function CoursesPage() {
  const [showAlert, setShowAlert]= useState(true);
  useEffect(() =>{
    const timer = setTimeout(() =>{
        setShowAlert(false);
    }, 1000);
        return () =>{
            clearTimeout(timer);
        };
    }, []);
  
    return (
    <>
    <div style={{marginLeft: '5%', marginRight: '5%'}}>
        <Grid container>
            <Grid item xs={12}>
                {showAlert && (
                    <Alert severity='success'>
                        50% off today!! Enroll in our courses now!!
                    </Alert>
                )}
            </Grid>

        </Grid>
        <div>
            <Typography variant='h3'>ABC University</Typography>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tenetur alias eaque cupiditate nostrum. Adipisci accusantium ducimus itaque ipsa distinctio quaerat alias maiores quos, quia neque enim molestias tenetur minima! Facere id impedit, provident perferendis ea sequi, quis aperiam voluptate a numquam sint dolor ducimus consectetur ipsam quae repellat voluptatem maxime eveniet.</p>
        </div>
        <Grid item xs={12}>
            <Grid container spacing={2}>
                {CourseData.map((course) => (
                    <Grid textAlign='center' item xs={12} sm={6} md={4} key={course.id}>
                        <Card>
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <p>Duration: {course.duration}</p>
                            <Button variant='contained' fullWidth >Enroll Now!!</Button>

                        </Card>
                        </Grid>
                ))}
            </Grid>
        </Grid>

        <Grid item xs={12}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Program</TableCell>
                            <TableCell>Tution</TableCell>
                            <TableCell>Registration</TableCell>
                            <TableCell>Books</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                       {FeesData.map((fees) =>(
                        <TableRow key={fees.id}>
                            <TableCell>{fees.program}</TableCell>
                            <TableCell>{fees.tution}</TableCell>
                            <TableCell>{fees.registration}</TableCell>
                            <TableCell>{fees.books}</TableCell>
                        </TableRow>
                       ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </div>
    </>
  )
}
