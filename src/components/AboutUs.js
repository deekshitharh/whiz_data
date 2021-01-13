
import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import { Container } from "@material-ui/core";
import { styles } from "./genric.js";

// eslint-diable

// detailing component of  About us  menu

class aboutUs extends Component {
  componentDidMount() {}

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              className={classes.aboutbanner}
              container
              item
              direction="column"
              justify="flex-end"
              // alignItems="right"
              xs={12}
              md={12}
            >
              <img alt="" className={classes.aboutimg}></img>
              <Typography variant="h6" className={classes.innertext}>
                We provide solution to your business
              </Typography>
            </Grid>

            <Grid
              spacing={10}
              alignItems="center"
              justify="center"
              container
              item
              xs={12}
              md={12}
              className={classes.grid + " " + classes.innergrid}
            >
              <Grid container item xs={12} md={12}>
                <Paper elavation={10} className={classes.paper}>
                  <Container maxWidth="md">
                    <Typography variant="h3" className={classes.about}>
                      About us
                    </Typography>
                  </Container>

                  <Grid container  spacing={5}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Typography gutterBottom className={classes.content}>
                        Whizdata was formed in the year 2013, and our initial
                        assignment was to augment resources for a large
                        healthcare services organization based in the USA. Our
                        founding members come with a combined experience of
                        about 75 years in high-tech engineering. Apart from
                        being connected with the newest technologies, we have
                        developed a deep understanding of what it takes to
                        deliver a solution that delivers the goals it was
                        designed for. We have built process methodologies,
                        check-points and systems that constantly work with all
                        stake-holders to realize the product that was planned
                        for.
                      </Typography>
                      <Link to="/contacts" className={classes.linkpath}>
                        <Typography gutterBottom variant="body1">
                          <b>Click here to start engaging with us:</b>
                        </Typography>
                      </Link>
                    </Grid>
                    <Grid
                      className={classes.addressgrid}
                      item
                      xs={12}
                      sm={6}
                      md={6}
                    >
                      <Typography
                        className={classes.addressheading}
                        gutterBottom
                        variant="body1"
                      >
                        <b>You can also reach us at</b>
                      </Typography>

                      <Typography
                        component={"div"}
                        gutterBottom
                        className={classes.content}
                      >
                        <Paper elevation={0} className={classes.adresspaper}>
                          <div>
                            <Typography
                              variant="body1"
                              gutterBottom
                              className={classes.addresstext}
                            >
                              <b>
                                <span className={classes.workheader}>
                                  {" "}
                                  Registered office -
                                </span>{" "}
                                <br />
                                #002, Skyline Chalet, 2/1-12, OVH Road,
                                <br />
                                Basavanagudi, Bangalore – 560004
                              </b>
                            </Typography>
                          </div>
                          {/* <img alt="" className={classes.bannerimg1}></img> */}
                          <div>
                            <Typography
                              variant="body1"
                              gutterBottom
                              className={classes.addresstext}
                            >
                              <b>
                                <span className={classes.workheader}>
                                  {" "}
                                  Works –{" "}
                                </span>{" "}
                                <br />
                                Whizdata Solutions, 81, 2nd Floor, Vijaya
                                Landmark,
                                <br />
                                Basavanagudi, Bengaluru, Karnataka 560004
                              </b>
                            </Typography>
                          </div>
                        </Paper>
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(withStyles(styles("aboutstyles"))(aboutUs));
