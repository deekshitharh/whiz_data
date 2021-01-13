import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Topbar from "../Topbar";
import { Link, withRouter } from "react-router-dom";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { styles } from "../genric.js";
 import Ios from "../../images/ios.png";
 import node from "../../images/node.png";
 import Pyton from "../../images/pyth.png";
 import Meteor from "../../images/meteor.png";
 import Java from "../../images/javaa.png";
 import pearl from "../../images/cc.png";
 import Angular from "../../images/angular.png";
 import reactjs from "../../images/reactjs.png";
 import sensors from "../../images/sensors.png";

//image array for technologies worked
const albums = [
  
  {
    src:Ios
  },
  {
    src: node
  },
  {
    src: Pyton
  },
  {
    src: Meteor
  },

  {
    src: Java
  },

  {
    src: Angular
  },
  {
    src: pearl
  },
  {
    src:  sensors
  },
  {
    src: reactjs
  }
];

// detailing component of  core-Offerings  from homepage
class Offerings extends Component {
  

  render() {
    const { classes } = this.props;
 const currentPath = this.props.location.pathname;
  
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
     autoplay: true,
      cssEase: "linear",
      arrows: false,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true
          }
        }
      ]
    };
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />

        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              className={classes.bannergrid}
              container
              item
              direction="column"
              justify="flex-end"
              // alignItems="right"
              xs={12}
              md={12}
            >
              <img alt="" className={classes.bgimg}></img>
              <div className={classes.bannertext}>
                Whizdata has expertise in complex software design <br /> with
                in-built analytics.
              </div>
            </Grid>
            <Grid
              spacing={8}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12} md={12}>
                <Paper className={classes.paper}>
                  {/* <div className={classes.box}> */}
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    gutterBottom
                    variant="body1"
                    className={classes.sectionheading}
                  >
                    <b>What do we do?</b>
                  </Typography>
                  <Typography className={classes.content} gutterBottom>
                    Whizdata improves your business operational efficiency by
                    introducing custom-designed applications into your business
                    process. We work with you to conceptualize, make a
                    proof-of-concept, design, test, deploy and maintain software
                    solutions which help you in your daily business. The
                    solutions connect all your people and are designed to be
                    easy-to-use. The goal is to improve the communication among
                    your people. Improved communication will result in better
                    information exchange, and the organization can make better
                    decisions. Our solutions assist you to save your operational
                    costs and improve your profitability.
                  </Typography>
                  <Typography className={classes.content} gutterBottom>
                    Business operations today have scope for introducing IT
                    system to supplement the human efficiency. True, we are
                    still very far from systems that can replace humans as a
                    whole even in simple use-cases; but we have several
                    illustrations to demonstrate successful augmenting to human
                    efficiency through automation, application of data and
                    providing data-insights to lower business costs and create
                    new opportunities.
                  </Typography>
                  <Typography className={classes.content} gutterBottom>
                    Our solutions are tailored to your changing business needs
                    and are built from your current systems, bringing in the
                    best from evolving technology. Hence, together we ensure
                    that the newly implemented solution works for your business
                    rather than changing your working ways to suit the solution!
                  </Typography>

                  <div>
                    <div className={classes.boxFull}>
                      <Typography
                        className={classes.sectionheading}
                        gutterBottom
                      >
                        <b>
                          {" "}
                          What goals do we mutually have for your organization?
                        </b>
                      </Typography>
                      <Typography
                        component={"div"}
                        className={classes.content}
                        gutterBottom
                      >
                        <ul className={classes.liststyle}>
                          <li>
                            Ability to make better decisions because of
                            timeliness, context and availability of the most
                            relevant data.
                          </li>
                          <li>
                            Better control of work-flow, with built-in
                            accountability and hence making the system more
                            efficient.
                          </li>
                          <li>
                            Bring in cost savings and improve the profitability
                            of the organization.
                          </li>
                        </ul>
                      </Typography>
                      <Typography className={classes.content} gutterBottom>
                        Timely availability of the right data can further
                        generate new ideas and help in new opportunity
                        identification which helps organizations grow.
                      </Typography>
                    </div>
                  </div>
                  <Paper elevation={10} className={classes.innerpaper}>
                    <Typography gutterBottom className={classes.referenceText}>
                      Because enterprise architects consider common strategic
                      goals and strong integration between business strategy,
                      enterprise program management, portfolio management and
                      governance functions, they are able to bridge the gap from
                      strategy to implementation in an organization.
                    </Typography>
                    <Typography className={classes.quote}>
                      <span>
                        Federation of Enterprise Architecture Professional
                        Organizations{" "}
                      </span>
                    </Typography>
                  </Paper>
                  <div className={classes.paperHeader}>
                    <Typography gutterBottom variant="body1">
                      And hence, our Core Offering-
                    </Typography>
                  </div>

                  <Grid container item md={12} spacing={1}>
                    <Grid
                      className={classes.bannergrid + " " + classes.gridimage}
                      item
                      xs={12}
                      sm={6}
                      md={6}
                    >
                      <img alt="" className={classes.innerimg}></img>
                      <div className={classes.innerBanner}>
                        We offer custom test-automation platform development
                        services
                      </div>
                    </Grid>
                    <Grid
                      className={classes.gridimage}
                      item
                      xs={12}
                      sm={6}
                      md={6}
                    >
                      <Typography
                        className={classes.sectionheading}
                        gutterBottom
                        variant="body1"
                      >
                        <b> Design and Delivery of Test Automation Platform</b>
                      </Typography>
                      <Typography gutterBottom className={classes.content}>
                        We also offer custom test-automation platform
                        development services for engineering teams. We can
                        design test platforms for APIs and complex design
                        components. Our auto-generated tests are self-checking
                        and provide detailed analytics. Our solution is based on
                        principles of randomization and relational constraints.
                        In order to help our customers converge on their testing
                        goals in a predictable manner, we provide utilities to
                        grade and set the tests to that the remaining delta can
                        be addressed with ease. ECO changes can be brought in
                        quickly and specification changes need not bother your
                        schedules any more.
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container item md={12} spacing={1}>
                    <Grid
                      className={classes.gridimage}
                      item
                      xs={12}
                      sm={6}
                      md={6}
                    >
                      <Typography
                        className={classes.sectionheading}
                        gutterBottom
                        variant="body1"
                      >
                        {" "}
                        <b>Custom Application Development</b>
                      </Typography>

                      <Typography gutterBottom className={classes.content}>
                        We offer custom-designed software solutions to your
                        organization. Your current adoption of software in your
                        business operation or the tech-savviness of your team
                        does not matter, because we believe that the new system
                        has to blend-in without obstructing your current
                        processes and operations. Whizdata has expertise in
                        complex software design with in-built analytics. Our
                        solutions are made for various desktop, mobile, or tab
                        views by default. We also have vast experience
                        integrating sensors. Our application treats information
                        security as a basic ingredient of your business. Our
                        product architecture team works closely with you to
                        define the required solution for your operations. Once
                        the software development begins, our program management
                        runs the project in close contact with you. The
                        application engineering team will train you and enable
                        you to use the system and reap all its full benefits. As
                        the software is adopted, we continue its upkeep to
                        deliver you the values the new system promised.
                      </Typography>
                    </Grid>
                    <Grid
                      className={classes.bannergrid + " " + classes.gridimage}
                      item
                      xs={12}
                      sm={6}
                      md={6}
                    >
                      <img alt="" className={classes.innersubimg}></img>
                      <div className={classes.innerBanner}>
                        We offer custom-designed software solutions to your
                        organization.
                      </div>
                    </Grid>
                  </Grid>

                  <Link
                    to="/contacts"
                    className={classes.linkpath + "  " + classes.textpath}
                  >
                    <Typography
                      className={classes.contactlink}
                      gutterBottom
                      variant="body1"
                    >
                      <b> Click here for a Quick-Enquiry:</b>
                    </Typography>
                  </Link>

                  
                  <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justify="center"
                   
                  >
                    <Grid item md={12} sm={12} xs={6}>
                      <Slider {...settings}>
                        
                        {albums.map((index,i) => {
                          return (
                            <div key={i}>
                              <img
                                src={index.src}
                                style={{ display: "block", margin: "0 auto" }}
                                alt=""
                              ></img>
                            </div>
                          );
                        })}
                      </Slider>
                    </Grid>
                  </Grid>

                  {/* <div className={classes.grey}> */}
                  {/* <div className={classes.wrap}>
                      <Typography className={classes.brandname} gutterBottom>
                        Our Technologies
                      </Typography>
                    </div> */}
                  {/* <div className={classes.wrap}>
                      <Grid item md={12} xs={12} sm={12}>
                        <Slider {...settings}>
                          {albums.map(index => {
                            return (
                              <div className={classes.display} key={index.name}>
                                <img
                                  src={index.src}
                                  className={classes.img}
                                  alt=""
                                ></img>
                              </div>
                            );
                          })}
                        </Slider>
                      </Grid>
                    </div> */}
                  {/* </div> */}
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(withStyles(styles("offeringstyles"))(Offerings));
