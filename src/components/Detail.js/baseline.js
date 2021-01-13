import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Topbar from "../Topbar";

import { withRouter } from "react-router-dom";
import { styles } from "../genric.js";
import Icon from "@material-ui/core/Icon";



import baselinegrid from  "../../images/contact.svg"
import baselinesubgrid from "../../images/features-1.svg"

// detailing component of basline charcteistics  from homepage
class Baseline extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={5}
              alignItems="center"
              justify="center"
              //  alignItems="right"
              container
              className={classes.grid}
            >
              <Grid item xs={12} sm={12} md={6}>
                <Paper elevation={0}>
                  <img
                    alt=""
                    src={baselinegrid}
                    className={classes.baseimg}
                  ></img>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Paper elevation={0}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    gutterBottom
                    variant="body1"
                    className={classes.sectionheading}
                  >
                    <b>Baseline characteristics of our projects:</b>
                  </Typography>
                  <Typography
                    component={"div"}
                    className={classes.content}
                    gutterBottom
                  >
                    <ul>
                      <li>Mostly non-technical users</li>
                      <li>
                        Sometimes, users have challenge in working with UI with
                        many steps
                      </li>
                      <li>
                        Application data arrives from multiple sources, and is
                        consumed by different people – and all of the people
                        need a different perspective
                      </li>
                      <li>
                        Reports have to lead to actions – not useless CxO
                        statistics!
                      </li>
                      <li>
                        Most solutions have ‘immediate need’ and have ‘limited
                        budget’
                      </li>
                      <li>
                        Needless to say – UX had to be creative and simple!
                      </li>
                    </ul>
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Paper elevation={0}>
                  <Grid container>
                    <Grid item xs={12} md={12} sm={12}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        className={classes.content}
                      >
                        Experience in designing complex systems Our value is
                        best explained through case-studies rather than claims
                        or list of skills we possess. To deliver a product that
                        works from the word ‘go’, we spend sufficient time to
                        understand the working and use this knowledge to do
                        ‘outcome-driven-development’.
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={2}
                      sm={2}
                      className={classes.icongrid}
                    >
                      <Icon
                        className="fas fa-users"
                        style={{
                          fontSize: 40,
                          width: "auto",
                          color: "#41cf2e"
                        }}
                      />
                    </Grid>
                    <Grid item xs={11} md={10} sm={10}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        className={classes.content}
                      >
                        The end-users from your organization are part of our
                        development system, and we make them experience the
                        functions and screens before we freeze on the software.
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={2}
                      sm={2}
                      className={classes.icongrid}
                    >
                      <Icon
                        className="fas fa-laptop"
                        style={{
                          fontSize: 40,
                          width: "auto",
                          color: "#e9bf06"
                        }}
                      />
                    </Grid>
                    <Grid item xs={11} md={10} sm={10}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        className={classes.content}
                      >
                        The solution may need hardware, software and may seem
                        which brings us to a position of unique advantage in
                        offering solutions that may need different systems to
                        talk to each other.
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      md={2}
                      sm={2}
                      className={classes.icongrid}
                    >
                      <Icon
                        className="fas fa-chart-bar"
                        style={{
                          fontSize: 40,
                          width: "auto",
                          color: "#007bff"
                        }}
                      />
                    </Grid>
                    <Grid item xs={11} md={10} sm={10}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        className={classes.content}
                      >
                        Library of partially developed + evolving software
                        assets: We have a library of software modules, both in
                        design and testing, which minimizes the cost of
                        ownership to you, our valued customer.
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={2}
                      sm={2}
                      className={classes.icongrid}
                    >
                      <Icon
                        className="fas fa-chart-pie"
                        style={{
                          fontSize: 40,
                          width: "auto",
                          color: "#ff689b"
                        }}
                      />
                    </Grid>
                    <Grid item xs={11} md={10} sm={10}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        className={classes.content}
                      >
                        Having ready assets not only reduces cost, but the
                        availability of the assets and our experience in
                        designing and delivering them make the assets more
                        implementable for you in the form of a usable,
                        long-lasting solution.
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={2}
                      sm={2}
                      className={classes.icongrid}
                    >
                      <Icon
                        className="far fa-id-badge"
                        style={{
                          fontSize: 40,
                          width: "auto",
                          color: "#3fcdc7"
                        }}
                      />
                    </Grid>
                    <Grid item xs={11} md={10} sm={10}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        className={classes.content}
                      >
                        The risk of designing everything from scratch is down
                        tremendously, because the building blocks are
                        home-grown, well-tested parts.
                      </Typography>
                    </Grid>

                    <Grid item xs={12} md={12} sm={12}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        className={classes.content}
                      >
                        Overall, we work towards the common organizational goal
                        of applying technology to improve your organizational
                        efficiency with the least cost and hence improve
                        organizational performance.
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Paper elevation={0}>
                  <img
                    alt=""
                    src={baselinesubgrid}
                    className={classes.baseimg}
                  ></img>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(withStyles(styles("baselinestyles"))(Baseline));
