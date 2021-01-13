import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Menu from "./Menu";
import Box from "@material-ui/core/Box";
import logo from "../images/whiz-data-logo.svg"

const styles = (theme) => ({
  appBar: {
    position: "relative",
    boxShadow: "none",
    // borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "#000000",
    paddingBottom: "10px",
  },
  inline: {
    display: "inline",
  },

  indicator: {
    backgroundColor: "#d90404",
    height: 2,
  },
  swipeableDrawer: {
    backgroundColor: "#cccccc",
  },
  flex: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  },

  link: {
    textDecoration: "none",
    color: "inherit",
    marginTop: "15px",
  },
  iconContainer: {
    display: "none",

    [theme.breakpoints.only("xs")]: {
      display: "block",
      color: "red",

      position: "relative",
      left: "54%",
      top: "13%",
    },
    [theme.breakpoints.only("sm")]: {
      display: "block",
      color: "red",

      position: "relative",

      left: "12px",
    },
  },
  iconButton: {
    float: "right",
    [theme.breakpoints.only("xs", "sm")]: {
      position: "relative",
    },
  },
  logo: {
    [theme.breakpoints.only("xs")]: {
      width: 180,
      // width: 200,
      position: "relative",
      top: 9,
    },
  },

  tabContainer: {
    // marginLeft: 32,
    //marginLeft: "25%",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  tabItem: {
    paddingTop: 2,
    paddingBottom: 6,
    minWidth: "auto",
    color: "#ffffff",
    fontSize: 15,
  },
  active_tab: {
    paddingTop: 2,
    paddingBottom: 6,
    minWidth: "auto",
    color: "#ffffff",
    backgroundColor: "#FFFFFF",
    fontSize: 25,
  },
});

class Topbar extends Component {
  state = {
    value: 0,
    menuDrawer: false,
    activeIndex: 0
  };
//change handler
  handleChange = (event, index, value) => {
    this.setState({
      value,
      activeIndex: index
    });
  };
  getStyle(isActive) {
    return isActive ? styles.active_tab : styles.tabItem;
  } 
  //mobile view menu open
  mobileMenuOpen = event => {
    this.setState({ menuDrawer: true });
  };
//mobile view menu close
  mobileMenuClose = event => {
    this.setState({ menuDrawer: false });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
// function for menu path on click
  current = () => {
    if (this.props.currentPath === "/home") {
      return 0;
    }
    if (this.props.currentPath === "/offerings") {
      return 1;
    }
    if (this.props.currentPath === "/aboutus") {
      return 2;
    }
    if (this.props.currentPath === "/case-Studies") {
      return 3;
    }
    if (this.props.currentPath === "/contacts") {
      return 4;
    }
  };

  render() {
    const { classes } = this.props;
    
    return (

      
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={1}>
            
            <Box width={{ xs: "0%", sm: "30%", md: "40%", lg: "50%" }}>
              <Grid
                item
                md={6}
                sm={4}
                xs={4}
                style={{ justifyContent: "left" }}
              >
                <Link to="/" className={classes.link}>
                  <img
                    src={logo}
                    className={classes.logo}
                    alt=""
                    height="100%"
                  />
                </Link>
              </Grid>
            </Box>

            <Grid item md={6} sm={8} xs={8} style={{ justifyContent: "right" }}>
              {!this.props.noTabs && (
                <React.Fragment>
                  <div className={classes.iconContainer}>
                    <IconButton
                      onClick={this.mobileMenuOpen}
                      className={classes.iconButton}
                      color="inherit"
                      aria-label="Menu"
                    >
                      <MenuIcon />
                    </IconButton>
                  </div>
                  <div className={classes.tabContainer}>
                    <SwipeableDrawer
                      classes={{
                        paper: classes.swipeableDrawer // class name, e.g. `classes-nesting-root-x`
                      }}
                      anchor="right"
                      open={this.state.menuDrawer}
                      onClose={this.mobileMenuClose}
                      onOpen={this.mobileMenuOpen}
                    >
                      <AppBar title="Menu" />
                      <List>
                        {Menu.map((item, index) => (
                          <ListItem
                            component={Link}
                            to={{
                              pathname: item.pathname,
                              search: this.props.location.search
                            }}
                            button
                            key={item.label}
                          >
                            <ListItemText primary={item.label} />
                          </ListItem>
                        ))}
                      </List>
                    </SwipeableDrawer>
                    {/* <Grid
                      alignItems="flex-start"
                      justify="flex-end"
                      direction="row"
                      md={8}
                      container
                    > */}
                    <Tabs
                      value={this.current() || this.state.value}
                      classes={{ indicator: classes.indicator }}
                      textColor="inherit"
                      onChange={this.handleChange}
                      variant="fullWidth"
                    >
                      {Menu.map((item, index) => {
                        return (
                          <Tab
                         
                            key={index}
                            component={Link}
                            to={{
                              pathname: item.pathname,
                              search: this.props.location.search
                            }}
                            classes={{ root: classes.tabItem }}
                            label={item.label}
                          />
                        );
                      })}
                    </Tabs>
                    {/* </Grid> */}
                  </div>
                </React.Fragment>
              )}
            </Grid>
            {/* </Grid> */}
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(Topbar));
