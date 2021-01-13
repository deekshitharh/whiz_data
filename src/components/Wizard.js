import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Topbar from "./Topbar";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import { styles } from "./genric.js";
import Card from "@material-ui/core/Card";
import Zoom from "@material-ui/core/Zoom";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ImportExportOutlinedIcon from "@material-ui/icons/ImportExportOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import Icon from "@material-ui/core/Icon";
import EmojiPeopleOutlinedIcon from "@material-ui/icons/EmojiPeopleOutlined";
import StorageIcon from "@material-ui/icons/Storage";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import DesktopWindowsOutlinedIcon from "@material-ui/icons/DesktopWindowsOutlined";
import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";
import PaymentIcon from "@material-ui/icons/Payment";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import Tooltip from "@material-ui/core/Tooltip";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import MultilineChartOutlinedIcon from "@material-ui/icons/MultilineChartOutlined";
import { Link } from "react-router-dom";
//cards array for case studies
const cards = [
  {
    id: 1,
    title: <b>Sports</b>,
    slidein: false,
    transitionDelay: "100ms",
    iconclass: width => (
      <EventNoteOutlinedIcon style={{ width: width, height: width }} />
    ),
    techicons: [
      { icon: <DesktopWindowsOutlinedIcon />, message: "desktop" },
      { icon: <PhoneAndroidOutlinedIcon />, message: "android" },
      { icon: <CloudOutlinedIcon />, message: "cloud" },
      { icon: <PaymentIcon />, message: "payment" }
    ],

    heading: "Event, participants, payment,fans, social media",
    subheading:
      "The application requiresdesigning a simple-to-use system where – ",
    projectdetails: [
      "Organizers announce an event",
      "Participants are qualified and pay to perform in the event",
      "Fans get updates,includes progress,live video,analytics etc"
    ],

    projchallenges: [
      "Simple, quick interface for the organizer",
      "Fan UX",
      "Stats and analytics for the performers"
    ],
    open: false,
    checked: true
  },

  {
    id: 2,
    slidein: false,
    title: "  Resource management",
    transitionDelay: "400ms",
    checked: true,

    techicons: [
      { icon: <DesktopWindowsOutlinedIcon />, message: "desktop" },
      { icon: <PhoneAndroidOutlinedIcon />, message: "android" },
      { icon: <CloudOutlinedIcon />, message: "cloud" },
      { icon: <EqualizerOutlinedIcon />, message: "statistics" }
    ],

    iconclass: width => (
      <EmojiPeopleOutlinedIcon style={{ width: width, height: width }} />
    ),
    heading: "Production, stock, orders, supply, enquiries, stats",
    subheading:
      "This application provides complete production to supply tracking at the fingertips for a family run production mill. Key indicators are – ",
    projectdetails: [
      " Order requests",
      "Stock info against incoming orders",
      "Production line availability against deficit of stock",

      "Raw material availability against deficit of stock"
    ],

    projchallenges: [
      "Mobile CXO dashboard",
      "Stats architecture with live updates",
      "Integrated messaging"
    ],

    open: false
  },
  {
    id: 3,
    slidein: false,
    checked: true,
    transitionDelay: "500ms",
    title: " Food Industry",

    techicons: [
      { icon: <DesktopWindowsOutlinedIcon />, message: "desktop" },
      { icon: <PhoneAndroidOutlinedIcon />, message: "android" },
      { icon: <CloudOutlinedIcon />, message: "cloud" },
      { icon: <EqualizerOutlinedIcon />, message: "statistics" }
    ],
    iconclass: width => (
      <AccountBalanceWalletOutlinedIcon
        style={{ width: width, height: width }}
      />
    ),
    heading: "Service booking, providers, consumers, payment, ratings",
    subheading:
      "This scalable, integrated home services platform provides a simple UX for people to request services for their daily needs at home. The ingredients of this system are – ",
    projectdetails: [
      "Admin and franchisee ,Ratings",
      "Secure server with authentication ,Payment",

      "Service booking, response, completion lifecycle",

      "Stats and analytics"
    ],
    projchallenges: [
      "End-users with little or no literacy",
      "Complicated rating & analytics system",
      "Multiple workflow styles"
    ],
    open: false
  },
  {
    id: 4,
    checked: true,
    slidein: false,
    transitionDelay: "900ms",
    title: " Management platform",

    techicons: [
      { icon: <DesktopWindowsOutlinedIcon />, message: "desktop" },
      { icon: <PhoneAndroidOutlinedIcon />, message: "android" },
      { icon: <CloudOutlinedIcon />, message: "cloud" },
      { icon: <EqualizerOutlinedIcon />, message: "statistics" }
    ],
    iconclass: width => (
      <MultilineChartOutlinedIcon style={{ width: width, height: width }} />
    ),
    heading: "Sensors, historical data, rolebased-access, KPIs, graphs",
    subheading:
      "This industrial application provides three-part solution which encompasses a business and technical components -",
    projectdetails: [
      "A software stack linked to physical sensors installed in the plant via a server",
      "A business dashboard",
      "Two levels of Admin dashboard",
      "Mobile app, analytics, graphs and alerts"
    ],

    projchallenges: [
      "Business dashboard which drives SLA through settings",
      // "UX for CXO",
      "Scalability for KPI, sites"
    ],
    open: false
  },
  {
    id: 5,
    checked: true,
    slidein: false,
    transitionDelay: "1000ms",
    title: " Management platform",
    iconclass: width => (
      <PeopleOutlineIcon style={{ width: width, height: width }} />
    ),

    techicons: [
      { icon: <DesktopWindowsOutlinedIcon />, message: "desktop" },
      { icon: <PhoneAndroidOutlinedIcon />, message: "android" },
      { icon: <CloudOutlinedIcon />, message: "cloud" },
      { icon: <EqualizerOutlinedIcon />, message: "statistics" }
    ],

   
    heading: "Employees, projects, billing,resource management",
    subheading:
      "A margin-sensitive engineering services company sought our help to design a simple resource management system to run their operations –",
    projectdetails: [
      "Hierarchy of engineering staff",
      "Assignment of employees to project(s)",
      "Employee availability, rampdown data, free-pool …",
      "Hyperlinked skills profile,search, stats, projection"
    ],

    projchallenges: [
      "Simple employee onboarding system",
      "Mobile-friendly admin UI"
    ],
    open: false
  },
  {
    id: 6,
    checked: true,
    slidein: false,
    transitionDelay: "1100ms",
    title: " Management platform",
    iconclass: width => (
      <WorkOutlineOutlinedIcon style={{ width: width, height: width }} />
    ),

    techicons: [
      { icon: <DesktopWindowsOutlinedIcon />, message: "desktop" },
      { icon: <PhoneAndroidOutlinedIcon />, message: "android" },
      { icon: <CloudOutlinedIcon />, message: "cloud" },
      { icon: <LocalShippingOutlinedIcon />, message: "shipment" }
    ],
   
    heading: "Field staff management, workflows, consumables",
    subheading:
      "The application is a multi-site mobile platform which helps field-staff supervisors and service delivery owners to manage site activities easily Key features are –. ",
    projectdetails: [
      "Mobile dashboard for onsite supervisor ",
      "Template based workflow & project creation dashboard",
      "Project tracking system",
      "Consumables management system",
      "Support for periodic and on-call activity management"
    ],

    projchallenges: ["UI/UX for the semi-skilled"],
    open: false
  },
  {
    id: 7,
    checked: true,
    slidein: false,
    transitionDelay: "1100ms",
    title: " Management platform",
    iconclass: width => <StorageIcon style={{ width: width, height: width }} />,

    techicons: [
      { icon: <DesktopWindowsOutlinedIcon />, message: "desktop" },
      { icon: <ListAltOutlinedIcon />, message: "reuseable" },
  { icon: <PublicOutlinedIcon />, message: "worldwide" },
      { icon: <ImportExportOutlinedIcon />, message: "bi-directional" }
    ],
   
    heading: "Bidirectional large data-sync, compliance, reuse, scalable",
    subheading:
      "As design and engineer partners in a large, multi-year program for massive MDM work, we delivered –. ",
    projectdetails: [
      "Successful migration of customer from a 1982 antiquated platform ",
      "New customer master going to seamless production",
      "Massive data-handling automation"
    ],

    projchallenges: [
      "Bidirectional data-sync with complex rule-set",
      "Large data set and bad existing data quality",
      "Scalability of platform"
    ],
    open: false
  },
  {
    id: 8,
    checked: true,
    slidein: false,
    transitionDelay: "1100ms",
    title: " Management platform",
    iconclass: width => (
      <TrendingUpIcon style={{ width: width, height: width }} />
    ),

    techicons: [
      { icon: <DesktopWindowsOutlinedIcon />, message: "desktop" },
      { icon: <PhoneAndroidOutlinedIcon />, message: "android" },
      { icon: <ImportExportOutlinedIcon />, message: "bi-directional" },
      { icon: <EqualizerOutlinedIcon />, message: "statistics" },
      { icon: <PublicOutlinedIcon />, message: "worldwide" }
    ],
  
    heading: "Regulatory, cost reduction, disparate data, large data-set",
    subheading:
      "We engaged in a multi-year program with a large MNC to provide a customer master hub with – ",
    projectdetails: [
      "Highly improved UX",
      "Data query and analysis for cross-sell opportunities",
      "Multiple workflows",
      "Dashboards, KPIs and system to drive sales",
      "Automated data governance"
    ],

    projchallenges: [
      "Large data-set",
      "Complex regulatory and compliance needs",
      "Many KPIs and dashboards"
    ],
    open: false
  }
];

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      cardArr: cards
    };
  }

  handleOpen = id => {
    this.setState(prevState => ({
      cardArr: prevState.cardArr.map(el =>
        el.id === id ? { ...el, open: !el.open } : el
      )
    }));
  };

  handleClose = id => {
    this.setState(prevState => ({
      cardArr: prevState.cardArr.map(el =>
        el.id === id ? { ...el, open: !el.open } : el
      )
    }));
  };

  // handleChange = id => {
  //   this.setState(prevState => ({
  //     cardArr: prevState.cardArr.map(el =>
  //       el.id === id ? { ...el, checked: !el.checked } : el
  //     )
  //   }));
  // };

  componentDidMount() {}

  render() {
    const { classes } = this.props;
    const { cardArr } = this.state;
 
    const currentPath = this.props.location.pathname;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid>
            <Grid className={classes.workbanner} item xs={12} md={12}>
              <img alt="" className={classes.headerimg}></img>
              <Typography variant="h6" className={classes.headertext}>
                Highlighted <span className={classes.highlightext}>Works</span>
              </Typography>
            </Grid>

            {/* <Grid container className={classes.subgrid}> */}
            <Paper
              elavation={24}
              className={classes.wizpaper + " " + classes.subgrid}
            >
              <Grid container spacing={3}>
                {cardArr.map((value, index) => {
                  return (
                    <Zoom
                      key={index}
                      in={value.checked}
                      style={{
                        transitionDelay: value.checked
                          ? value.transitionDelay
                          : "0ms"
                      }}
                    >
                      <Grid
                        //container

                        className={classes.layergrid}
                        item
                        md={4}
                        sm={6}
                      >
                        <Card
                          id={value.id}
                          className={
                            //  classes.outercard +
                            //  " " +
                            //  classes.card

                            classes.card
                          }
                        >
                          <CardActionArea
                            style={{
                              display: "flex",
                              alignItems: "stretch",
                              backgroundColor: "#000000"
                            }}
                          >
                            <CardActions>
                              <Icon
                                style={{
                                  color: "#000000",
                                  marginTop: 0,
                                  marginBottom: 0,
                                  paddingTop: 12,
                                  display: "inline-block",
                                  textAlign: "center",
                                  borderRadius: "50%",
                                  width: 60,
                                  height: 60,
                                  backgroundColor: "#ffffff"
                                }}
                              >
                                {value.iconclass("100%")}
                              </Icon>
                            </CardActions>
                          </CardActionArea>
                          <CardContent>
                            <Typography
                              className={
                                classes.sectionheading +
                                "  " +
                                classes.headingstyle
                              }
                              gutterBottom
                            >
                              {" "}
                              <b>{value.heading}</b>
                            </Typography>
                            <Typography
                              gutterBottom
                              className={classes.content}
                            >
                              {value.subheading}
                            </Typography>

                            <Typography
                              gutterBottom
                              className={
                                classes.content + " " + classes.fontstyle
                              }
                            >
                              {value.projectdetails.map((data, index) => {
                                return <li key={index}>{data}</li>;
                              })}
                            </Typography>

                            {value.projchallenges.find((datalength, index) => {
                              return datalength && datalength.length;
                            }) ? (
                              <Typography
                                key={index}
                                variant="h4"
                                gutterBottom
                                className={classes.midheading}
                              >
                                Challenges-
                              </Typography>
                            ) : (
                              <div></div>
                            )}

                            {value.projchallenges.map((projdata, index) => {
                              return (
                                <Typography
                                  key={index}
                                  gutterBottom
                                  className={
                                    classes.content + " " + classes.fontstyle
                                  }
                                >
                                  <li> {projdata}</li>
                                </Typography>
                              );
                            })}
                          </CardContent>

                          {/* <Dialog
                            open={value.open}
                            onClose={() => this.handleClose(value.id)}
                            aria-labelledby="customized-dialog-title"
                            aria-describedby="alert-dialog-description"
                            scroll="body"
                          >
                            <Slide
                              direction="right"
                              in={!value.slidein}
                              timeout={transitionDuration}
                              mountOnEnter
                              unmountOnExit
                            >
                              <Paper>
                                <DialogTitle
                                  className={classes.sectionheading}
                                  id="customized-dialog-title"
                                >
                                  {value.title}
                                </DialogTitle>

                                <DialogContent dividers>
                                  <Typography className={classes.content}>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                  </Typography>
                                </DialogContent>
                                <DialogActions className={classes.projectview}>
                                  <Link
                                    to="/contacts"
                                    className={classes.linkproject}
                                  >
                                    <Button
                                      //  value={this.props.}
                                      onClick={this.props.onClick}
                                    >
                                      SIMILAR PROJECT
                                    </Button>
                                  </Link>
                                  <Button
                                    className={classes.actionButtom}
                                    onClick={() => this.handleClose(value.id)}
                                  >
                                    close
                                  </Button>
                                </DialogActions>
                              </Paper>
                            </Slide>
                          </Dialog> */}

                          <CardActions className={classes.buttonend}>
                            <Link
                              to={{
                                pathname: "/contacts",
                                state: {
                                  myvalue: "I need this similar project"
                                }
                              }}
                              className={classes.linkproject}
                            >
                              <Button
                              //  value={this.props.}
                              >
                                SIMILAR PROJECT
                              </Button>
                            </Link>
                          </CardActions>

                          <CardActions>
                            {value.techicons.map((i, index) => {
                              return (
                                <Tooltip
                                  title={i.message}
                                  key={index}
                                  placement="top-start"
                                >
                                  <Icon>{i.icon}</Icon>
                                </Tooltip>
                              );
                            })}
                          </CardActions>
                        </Card>
                      </Grid>
                    </Zoom>
                  );
                })}
              </Grid>
            </Paper>
          </Grid>
          {/* </Grid> */}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles("wizardstyles"))(Wizard));
