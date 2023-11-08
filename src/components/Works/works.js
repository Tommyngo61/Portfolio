import React from 'react';
import './works.css';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Portfolio1 from "../../assets/golf-field.png";
import Portfolio2 from "../../assets/burger.png";
import Portfolio3 from "../../assets/crypto.png";
import Portfolio4 from "../../assets/puzzle.png";

export default function Works() {

  return (
    <div>
      <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc"></span>
            <Grid container spacing={2} className='workGrid'>
                <Grid xs={6}>
                    <Card variant='outline' className='workCard work1'>
                        <CardMedia className='worksImg'
                            component='img'
                            image={Portfolio1}
                            alt="Golf field"/>
                        <CardContent className='cardText'>
                            <Typography variant='h5' component='div' fontFamily="'Playfair+Display'">
                                Golf Chemical Tracking Web Application
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                            Technology Stack: HTML, CSS, JS, React.js, Express.js, AWS, Docker <br/>
                            Description: A full stack web application designed to monitor the complete chemical usage history of golf courses.
                            Due to project circumstances this project can not be view live
                            </Typography>
                        <CardActions>
                            <Button size='small' color="secondary"><GitHubIcon color='secondary'/>GitHub Link</Button>
                        </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={6}>
                <Card variant='outline' className='workCard work2'>
                        <CardMedia className='worksImg'
                            component='img'
                            image={Portfolio2}
                            alt="Food"/>
                        <CardContent className='cardText'>
                            <Typography variant='h5' component='div' fontFamily="'Playfair+Display'">
                                Let's Eat
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                            Technology Stack: HTML, CSS, JavaScript, React, Yelp API, Firebase <br/>
                            Description: A comprehensive web application that aids users in selecting dining destinations based on specific 
                            criteria including distance radius, type of cuisine, pricing and more.
                            </Typography>
                        <CardActions>
                            <Button size='small' color="secondary"><GitHubIcon color='secondary'/>GitHub Link</Button>
                            <Button size='small'><LaunchIcon/>Link to Website</Button>
                        </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={6}>
                <Card variant='outline' className='workCard work3'>
                        <CardMedia className='worksImg'
                            component='img'
                            image={Portfolio3}
                            alt="Food"/>
                        <CardContent className='cardText'>
                            <Typography variant='h5' component='div' fontFamily="'Playfair+Display'">
                                Crypto Currency Tracker
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                            Technology Stack: HTML, CSS, JavaScript, React, Firebase <br/>
                            Description: A dashboard style web application that allows users to track multiple different crypto currencies. 
                            Currencies are displayed a concise and clear graph and as a table value
                            </Typography>
                        <CardActions>
                            <Button size='small' color="secondary"><GitHubIcon color='secondary'/>GitHub Link</Button>
                            <Button size='small'><LaunchIcon/>Link to Website</Button>
                        </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={6}>
                <Card variant='outline' className='workCard work4'>
                        <CardMedia className='worksImg'
                            component='img'
                            image={Portfolio4}
                            alt="puzzle"/>
                        <CardContent className='cardText'>
                            <Typography variant='h5' component='div' fontFamily="'Playfair+Display'">
                                8-Piece puzzle problem
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                            Technology Stack: C++ <br/>
                            Description: A 3x3 board puzzle with 8 tiles numbered 1 through 8 and randomly configured. 
                            The goal is to rearrange the tiles in chronological order by using the empty tile to move each tile around. 
                            </Typography>
                        <CardActions>
                            <Button size='small' color="secondary"><GitHubIcon color='secondary'/>GitHub Link</Button>
                            <Button size='small'><LaunchIcon/>Link to Website</Button>
                        </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
      </section>
    </div>
  )
}


