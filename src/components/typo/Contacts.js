import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Topbar from "../Topbar";
import Dialog from "@material-ui/core/Dialog";
import { withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Slider from "@material-ui/core/Slider";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Checkbox from "@material-ui/core/Checkbox";

import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import MapContainer from "./map.js";
import { styles } from "../genric.js";





const { Interval, DateTime } = require("luxon");
const checkboxes = [
  {
    name: "iOS/Apple",
    checked: false,
    label: "iOS/Apple",
  },

  {
    name: "Android",
    checked: false,
    label: "Android Mobile",
  },
  {
    name: "Tab view",
    checked: false,
    label: "Tab view",
  },
  {
    name: "Web Applications",
    checked: false,
    label: "Web Applications",
  },
  {
    name: "Other",
    checked: false,
    label: "Others",
  },
];






class Contacts extends Component {
  constructor() {
    super();
    this.state = {
    
      contact: checkboxes,
      start: 0,
      period: 3,
      arryDates: [],
      
      email: "",
      description: "",
      open: false,
      startdate: "",
      requestFailed: "",
      error: { emailerror: "", descerror: "" },
      enquiryStatus: true,
    };
  }

  calculate = function* days(interval) {
    let cursor = interval.start.startOf("day");
    while (cursor < interval.end) {
      yield cursor;
      cursor = cursor.plus({ days: 1 });
    }
  };

  showDates = () => {
    let start = DateTime.local();
    let end = start.plus({ month: 12 });

    let interval = Interval.fromDateTimes(start, end);

    let arr = [];
    for (var d of this.calculate(interval)) {
      arr.push(d.toFormat("dd,MMMM, yyyy"));
    }
    this.setState({ arryDates: arr });
  };

  

  componentDidMount() {
    this.showDates();

 
  }

  handleCheck = (event, name) => {
    let contact = [...this.state.contact];

    let index = contact.findIndex((obj) => obj.name === event.target.id);
    contact[index].checked = event.target.checked;
    this.setState({ contact });
  };

  handleEmail = (event, name) => {
    // eslint-disable-next-line
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i;
    if (event.target.value.match(re)) {
      this.setState({
        email: event.target.value,

        error: { ...this.state.error, emailerror: "" },
        enquiryStatus: false,
      });
    } else {
      this.setState({
        email: "",
        error: {
          ...this.state.error,
          emailerror: "email should be in www.example.com",
        },
        enquiryStatus: true,
      });
    }
  };
  disablebutton = () => {
    if (!this.state.email) {
      return true;
    } else {
      return false;
    }
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      email: "",
      description: "",
      contact: checkboxes,
      start: 0,
      period: 3,
    });
  };

  handlemessege = (event, name) => {
    this.setState({
      description: event.target.value,
      // error: { ...this.state.error, descerror: "" }
      //enquiryStatus:false
    });
  };

  handleClick = (props) => {
    const { description } = this.state;
    this.setState({ description: "project data" });
  };

  handleFormSubmit = (e) => {
    debugger
    let formData = this.state;
    console.log("submit", formData);
    fetch("http://test5s.in/contactus.php", {
      method: "POST",

      body: JSON.stringify(formData),
      data: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("data .. " + JSON.stringify(data));
        if (data.recordAdded) {
          this.setState({
            // emailresponse: "Mail sent",
            open: true,
            requestFailed: "Email sent our team will soon contact you",
          });
        }
      })

      .catch((error) => {
       
        this.setState({
          open: true,
          requestFailed: "Oops error occured.Please try after sometime!!!!!!",
        });
      });
  };

  handleChangePeriod = (event, value) => {
    this.setState({ period: value});
  };

  handleChangeStart = (event, value) => {
    const { arryDates } = this.state;
    this.setState({ start: value, startdate: arryDates[value] });
  };

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;

    const {
      contact,
      period,
      error,
      arr,
      open,
      formdata,
      start,
      email,
     arryDates,
      description,
      requestFailed,
      enquiryStatus,
    } = this.state;
    console.log("fomdt", formdata);
    const disablebutton =
      email.length > 1 && description.length > 1 && error.emailerror.length > 1
        ? true
        : false;

    let permittedValues = contact.map((x) => x.checked);
    const checkerror = permittedValues.filter((value) => value).length < 2;
   

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.bg}>
          <div className={classes.innercontainer}>
            <Grid container justify="center">
              <Grid
                spacing={2}
           
                container
                className={classes.grid}
              >
                <Grid item xs={12} md={4}>
                  <Paper className={classes.paper}>
                    <div className={classes.box}>
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                        error={checkerror}
                      >
                        <Typography
                          color="secondary"
                          gutterBottom
                          variant="body1"
                          className={classes.headerText}
                        >
                          What Platforms?
                        </Typography>
                        <FormGroup className={classes.formgroup}>
                          {contact.map((index) => {
                            return (
                              <div key={index.label}>
                                <FormControlLabel
                                  style={{ margin: "1px" }}
                                  control={
                                    <Checkbox
                                      className={classes.checkbox}
                                      id={index.name}
                                      checked={index.checked}
                                      onChange={this.handleCheck}
                                      value={index.name}
                                    />
                                  }
                                  label={index.label}
                                />
                              </div>
                            );
                          })}
                        </FormGroup>
                      </FormControl>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper className={classes.paper}>
                    <div className={classes.box}>
                      <Typography variant="subtitle1" gutterBottom>
                        Timeline?
                      </Typography>

                      <div className={classes.blockCenter}>
                        <Typography
                          color="secondary"
                          variant="h6"
                          className={classes.headerText}
                          gutterBottom
                        >
                          {period} months
                        </Typography>
                      </div>
                      <div>
                        <Slider
                          classes={{
                            thumb: classes.thumb,
                            track: classes.thumb,
                          }}
                          value={period}
                          min={1}
                          max={6}
                          step={1}
                          onChange={this.handleChangePeriod}
                        />
                      </div>
                      <div className={classes.rangeLabel}>
                        <div>
                          <Typography variant="subtitle2">1 month</Typography>
                        </div>
                        <div>
                          <Typography variant="subtitle2">6 months</Typography>
                        </div>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper className={classes.paper}>
                    <div className={classes.box}>
                      <Typography variant="subtitle1" gutterBottom>
                        Start date?
                      </Typography>

                      <div className={classes.blockCenter}>
                        <Typography
                          color="secondary"
                          className={classes.headerText}
                          variant="h6"
                          gutterBottom
                        >
                          {arryDates[start]}
                        </Typography>
                      </div>
                      <div>
                        <Slider
                          classes={{
                            thumb: classes.thumb,
                            track: classes.thumb,
                          }}
                          value={start}
                          min={0}
                          max={arryDates.length}
                          step={1}
                          onChange={this.handleChangeStart}
                        />
                      </div>
                      <div className={classes.rangeLabel}>
                        <div>
                          <Typography variant="subtitle2">
                            October 2020
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="subtitle2">
                            March 2021
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid container className={classes.outergrid} item xs={12}>
                  <Grid item xs={12} md={6}>
                    <form>
                      <div>
                        <TextField
                          className={classes.emailField}
                          label="Email"
                          onChange={this.handleEmail}
                          InputLabelProps={{
                            classes: {
                              root: classes.label,
                              focused: classes.cssFocused,
                            },
                          }}
                          InputProps={{
                            classes: {
                              root: classes.cssOutlinedInput,
                              focused: classes.cssFocused,
                              notchedOutline: classes.notchedOutline,
                              input: classes.input,
                            },
                            startAdornment: (
                              <InputAdornment position="start">
                                <MailOutlineIcon
                                  className={classes.iconstyle}
                                />
                              </InputAdornment>
                            ),
                          }}
                          margin="normal"
                          variant="outlined"
                          error={error.emailerror.length === 0 ? false : true}
                          helperText={error.emailerror}
                        />
                      </div>

                      <div>
                        <TextField
                          multiline
                          rows="5"
                          label="Description"
                          placeholder="Brief Description of the project"
                          className={classes.textField}
                          margin="normal"
                          onChange={this.handlemessege}
                          variant="outlined"
                          InputLabelProps={{
                            classes: {
                              root: classes.label,
                              focused: classes.cssFocused,
                            },
                          }}
                          InputProps={{
                            classes: {
                              root: classes.cssOutlinedInput,
                              focused: classes.cssFocused,
                              notchedOutline: classes.notchedOutline,
                              input: classes.input,
                            },
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-center",
                          }}
                        >
                          <Button
                            variant="outlined"
                            className={classes.actionButtom}
                            onClick={this.handleFormSubmit}
                            disabled={enquiryStatus}
                          >
                            Enquire
                          </Button>

                          {/* <Button
                          variant="outlined"
                          className={classes.actionButtom}
                          onClick={this.handleFormSubmit}
                        >
                          Enquire
                        </Button> */}
                          {/* <Typography
                          variant="subtitle2"
                          className={classes.responsetext}
                        >
                          {emailresponse}
                        </Typography> */}
                          {/* <Wizard onClick={this.handleClick} description={description} /> */}
                        </div>
                      </div>
                    </form>

                    <Dialog
                      open={open}
                      onClose={this.handClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                      scroll="body"
                    >
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          {requestFailed}
                        </DialogContentText>
                      </DialogContent>

                      <DialogActions>
                        {" "}
                        <Button
                          className={classes.actionButtom}
                          onClick={this.handleClose}
                        >
                          Back
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </Grid>
                  <Grid
                    item
                    className={classes.mapgrid + " " + classes.outer1grid}
                    xs={12}
                    md={6}
                  >
                    <Typography
                      className={classes.sectionheading}
                      gutterBottom
                      variant="h2"
                    >
                      <b>Locate us at </b>
                    </Typography>
                    <MapContainer />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles("contactstyles"))(Contacts));
// passing the styles based on key ie "contactstyles" for the component Baseline 
// from genric styles folder
