import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import logo from '../imgs/2grant_velocity_logo_transparent.png'
import PersonIcon from '@mui/icons-material/Person';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Sidenav from "../Components/sidenav.jsx";
import { GrantTimeline } from "../Components/grantTimeline.jsx"
import { HorizontalNonLinearStepper } from "../Components/stepper"


export default function Dashboard() {

    return (
        <div className="dashboard-bg">
            <Sidenav />
            <Box component="main" sx={{
                 flexGrow: 1,
                 overflowY: 'auto',
                 height: '100vh',
                
                }}>
            <Grid container spacing={2}>
                
                <div className="dashboard-main-wrapper">

                

                    <Stack direction="row" spacing={2} sx={{mt: 3}}>
                    <Card sx={{width: 355, height: 60}} className="card-funding">
                        <CardContent>
                            Total Funding: $500
                        </CardContent>
                    </Card>
                    <Card sx={{width: 355, height: 60}}>
                        <CardContent>
                            Grants Saved: 2
                        </CardContent>
                    </Card>
                    <Card sx={{width: 355, height: 60}}>
                        <CardContent>
                            Grants Pending: 10
                        </CardContent>
                    </Card>
                    </Stack>

                  <Stack direction="row" spacing={2} sx={{mt: 3}}>
                    <Grid item xs={5}>
                        <Card>
                            <CardContent>Grant Categories
                            </CardContent>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 10, label: 'Small Business' },
                                            { id: 1, value: 15, label: 'Education' },
                                            { id: 2, value: 20, label: 'Government' },
                                        ],
                                    },
                                ]}
                                width={450}
                                height={200}
                            />
                        </Card>
                        </Grid>
                    
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>Funding Overtime</CardContent>

                            <LineChart
                                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                series={[
                                    {
                                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                                    },
                                ]}
                                width={400}
                                height={200}
                            />
                        </Card>
                        
                        </Grid>
                        <Grid item xs={3}>
                        <Card sx={{height: 256}}>
                            <CardContent>Your Grants</CardContent>
                            <List>
                                <ListItem>
                                    Grant
                                </ListItem>
                                <ListItem>
                                    Grant
                                </ListItem>
                                <ListItem>
                                    Grant
                                </ListItem>
                            </List>
                        </Card>
                        </Grid>
                        </Stack>

                        <Grid item xs={12} className="timeline-wrapper-grid">
                            <h1>Grant Timeline</h1>
                            <HorizontalNonLinearStepper />
                        </Grid>
                        
                        {/* <Stack direction="row" spacing={2} sx={{mt:3}}>
                        <Grid item xs={4} sx={{mt: 3}}>
                        <Card>
                            <CardContent>
                                Start Applying For Grants!
                            </CardContent>
                            <CardActions>
                                <Button size="medium">Discover</Button>
                            </CardActions>
                        </Card>
                        </Grid>

                        <Grid item xs={4} sx={{mt: 3}}>
                        <Card>
                            <CardContent>
                                Recommended For You
                            </CardContent>
                            <CardActions>
                                <Button size="medium">Discover</Button>
                            </CardActions>
                        </Card>
                        </Grid>

                        <Grid item xs={4} sx={{mt: 3}}>
                        <Card>
                            <CardContent>
                                New Grants
                            </CardContent>
                            <CardActions>
                                <Button size="medium">Discover</Button>
                            </CardActions>
                        </Card>
                        </Grid>
                        </Stack> */}

                        
                    </div>

            </Grid>
            
            </Box>
        </div>
    )
}
