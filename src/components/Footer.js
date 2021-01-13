import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";


import Typography from "@material-ui/core/Typography";




// color:#d90404


const styles = theme => ({
  appBar: {
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "#d3d3d3",
    top: "0",
    bottom: 0
  },
  inline: {
    display: "inline"
  },
  breakpoint: {
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      marginRight: 21
    }
  },
  flex: {
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center"
    }
  },

  footertext: {
    fontSize: 14,
    flexGrow: 1,
    textAlign: "center"
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    marginTop: "15px",
    textAlign: "center"
  },
  grid: {
    //paddingTop: theme.spacing(2)
    backgroundColor: "red"
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar
        position="relative"
        // color="primary"
        // className={{ top: "0", bottom: 0 }}
        color="default"
        className={classes.appBar}
      >
  
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={12}
          style={{ alignItems: "center" }}
        >
          <Grid container item xs={12} sm={12} md={4}>
            <Typography gutterBottom className={classes.footertext}>
              ⓒ Copyright whizdata, All rights reserved
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={12} md={4}>
            {/* <Grid item xs={12} sm={12} md={12}>
              <Typography gutterBottom className={classes.footertext}>
                Social Networks:
              </Typography>
            </Grid> */}
            {/* <Grid item xs={12} sm={12} md={12}>
              <Typography gutterBottom className={classes.footertext}>
                <Icon>
                  <InstagramIcon />
                </Icon>
                <Icon>
                  <FacebookIcon />
                </Icon>
                <Icon>
                  <TwitterIcon />
                </Icon>
                <Icon>
                  <LinkedInIcon />
                </Icon>
              </Typography>
            </Grid> */}
          </Grid>
          <Grid container item xs={12} sm={12} md={4}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography gutterBottom className={classes.footertext}>
                For enquiry contact us @ sales@whizdata.in
              </Typography>
            </Grid>
          </Grid>
        
        </Grid>
      
      </AppBar>
    );
  }
}



   // {/* <Box display={{ xs: "block", sm: "block", lg: "none", md: "none" }}>
        //   <footer>
        //     <Footer />
        //   </footer>
        // </Box>

        // {/* <div className={classes.root}> */}
        // {/* <Box display={{ xs: "none", sm: "none", md: "block", lg: "block" }}>
        //   <footer
        //     style={{
        //       background: "#1a1a1a",
        //       color: "#929292",
        //       zIndex: "1600",
        //       bottom: 0,
        //       position: "fixed",
        //       width: "100%",
        //       marginTop: "100"
        //     }}
        //   >
        //     <Footer />
        //   </footer>
        // </Box>  */}








export default withRouter(withStyles(styles)(Footer));
