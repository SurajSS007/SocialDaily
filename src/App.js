import React,{useEffect} from 'react';
import { useDispatch } from "react-redux";
import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core";
import { getPosts } from 'react-redux';
import memories from "./images/memories.png"
import Form from "./Component/Form/Form"
import Posts from "./Component/Posts/Posts"
import useStyles from "./style"

function App() {
      const classes = useStyles();
      const dispatch = useDispatch()


      useEffect(() => {
          dispatch(getPosts())   
      },[dispatch])


  return (
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Typography className={classes.heading} variant="h2" align="center">SocialDaily</Typography>
                  <img className={classes.image} src={memories} alt="memories" height="60"/>
                </AppBar>
                    <Grow in>
                      <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                              <Grid item xs={12} sm={7}>
                                 <Posts/>
                              </Grid>
                              <Grid item xs={12} sm={4}>
                                 <Form/>
                              </Grid>
                        </Grid>
                      
                      </Container>
                    </Grow>
            </Container>
  );
}

export default App;