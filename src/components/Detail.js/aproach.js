import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Topbar from "../Topbar";
import { withRouter } from "react-router-dom";
import { styles } from "../genric.js";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";



const getSteps = () => {
  return [
    "Designed with commonality in mind",
    "Designed with end results at the outset",
    "Responsible access to real-time information"
  ];
};
//step contents
const getStepContent = (step) => 
{
  switch (step) {
    case 0:
      return `Our case-studies can give you more details and you can
                      easily spot the commonality in all our solutions. In each
                      case, the solutions are designed to bring down inefficient
                      communication across different cadres of people in the
                      operation chain. The solution will work like a rule-book
                      which does not allow you to flip to the next step until
                      the owner of this step complete all the required work to
                      mark this step as ’done’. You can fix timelines to each
                      step and if the work is not done, alerts pop-up on the
                      screens of all relevant people in the organization.`;
    case 1:
      return `         All of our custom-developed solution can be easily mapped
                      to the customers’ ledger-based or office-suite-based
                      system of working and hence adoption has not been too
                      complex for any of our users. The greatest value-add is
                      near-real-time availability of information organized as
                      tables/graphs/charts and a dashboard using which you can
                      view the data you feel is most relevant at that point.
                      With this data available quickly, and your knowledge of
                      your business, we are sure you can use our software to
                      assign work and improve the efficiency of your
                      organization each day.`;
    case 2:
      return `Information is stored in centralized, secure back-end, and
                      is securely fetched to provide the required views without
                      having the need to share documents or emails to get the
                      work going. Data and decisions are available irrespective
                      of where the stake-holders are. For example, a
                      subject-matter-expert in our sports solution is able to
                      resolve a fixture conflict while the event is held in
                      another place half-way round the globe! In all cases, we
                      have used computer systems to crunch the data quickly,
                      with no scope for human induced error hence avoiding
                      re-work efforts.`;
    default:
    console.log("something went wrong")
  }
}


// detailing component of  Approach to work  from homepage
class Aboutwork extends Component {
 
  state = {
      activeStep: 0
  };
//change handler
  handleChange = (event, value) => {
    this.setState({ activeIndex: value });
  };
  render() {
    const { classes } = this.props;
       const steps = getSteps();
       const { activeStep } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />

        <Grid container justify="center">
          <Grid
            spacing={10}
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
                  <b>Approach To Work</b>
                </Typography>
                <Typography className={classes.content} gutterBottom>
                  We provide well-designed solutions that can breathe automation
                  & optimization into your work-flow. <br /> Embrace best
                  practice adoption as a foundational attribute. Our experience
                  in design automation, test automation and model engineering
                  brings in some of the best systems into practice at Whizdata.
                  Our technical leaders have multiple patents in design
                  engineering automation. Most of our API framework, test
                  infrastructure, unit and API level tests etc. are
                  auto-generated out of our own home-grown design tools. This
                  not only cuts the design and test cost / time, but also
                  guarantees uniformity in coding and reduces human induced
                  errors. <br /> If we need a change in the design, most likely
                  all we have to change is our own specification files. The rest
                  of the design-flow adheres to the new requirement
                  automatically! This reduces turn-around time for bug closures
                  and helps us to manage ECOs more efficiently. Test, learn and
                  share with other technical and business experts We have
                  experience working at the extreme ends of tech-savvy users. On
                  one side, we have enabled high-tech engineering teams to
                  automate their design flow, and the components of our solution
                  are parsers, code-generators, optimizers and report
                  generators. <br /> On the other end of our customer profile
                  are people who are experts in a domain on their own, but are
                  not expert users of computer in any form factor. This
                  background gives us a wide array of skills spanning from UX
                  design to API engineering which makes the promised end-user
                  experience realizable.
                </Typography>

                <div className={classes.hidden}>
                  <Hidden only={["lg", "md"]}>
                    <ExpansionPanel className={classes.expansion}>
                      <ExpansionPanelSummary
                        expandIcon={
                          <ExpandMoreIcon className={classes.expandicon} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.panelheading}>
                          Designed with commonality in mind
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography className={classes.paneltext}>
                          Our case-studies can give you more details and you can
                          easily spot the commonality in all our solutions. In
                          each case, the solutions are designed to bring down
                          inefficient communication across different cadres of
                          people in the operation chain. The solution will work
                          like a rule-book which does not allow you to flip to
                          the next step until the owner of this step complete
                          all the required work to mark this step as ’done’. You
                          can fix timelines to each step and if the work is not
                          done, alerts pop-up on the screens of all relevant
                          people in the organization.`
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel className={classes.expansion}>
                      <ExpansionPanelSummary
                        expandIcon={
                          <ExpandMoreIcon className={classes.expandicon} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.panelheading}>
                          Designed with end results at the outset
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography className={classes.paneltext}>
                          All of our custom-developed solution can be easily
                          mapped to the customers’ ledger-based or
                          office-suite-based system of working and hence
                          adoption has not been too complex for any of our
                          users. The greatest value-add is near-real-time
                          availability of information organized as
                          tables/graphs/charts and a dashboard using which you
                          can view the data you feel is most relevant at that
                          point. With this data available quickly, and your
                          knowledge of your business, we are sure you can use
                          our software to assign work and improve the efficiency
                          of your organization each day.
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel className={classes.expansion}>
                      <ExpansionPanelSummary
                        expandIcon={
                          <ExpandMoreIcon className={classes.expandicon} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.panelheading}>
                          Responsible access to real-time information
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography className={classes.paneltext}>
                          Information is stored in centralized, secure back-end,
                          and is securely fetched to provide the required views
                          without having the need to share documents or emails
                          to get the work going. Data and decisions are
                          available irrespective of where the stake-holders are.
                          For example, a subject-matter-expert in our sports
                          solution is able to resolve a fixture conflict while
                          the event is held in another place half-way round the
                          globe! In all cases, we have used computer systems to
                          crunch the data quickly, with no scope for human
                          induced error hence avoiding re-work efforts.`
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </Hidden>
                </div>

                <Grid item xs={12}>
                  <Hidden only={["xs", "sm"]}>
                    <div className={classes.stepContainer}>
                      <div className={classes.bigContainer}>
                        <Grid>
                          <Stepper
                            orientation="vertical"
                            activeStep={activeStep}
                          >
                            {steps.map((label, index) => (
                              <Step active={true} key={label}>
                                <StepLabel
                                  StepIconProps={{
                                    classes: { root: classes.icon }
                                  }}
                                >
                                  <b> {label}</b>
                                </StepLabel>
                                <StepContent>
                                  <Grid container item md={12}>
                                    <Paper className={classes.contentpaper}>
                                      <Typography>
                                        {getStepContent(index)}
                                      </Typography>
                                    </Paper>
                                  </Grid>
                                </StepContent>
                              </Step>
                            ))}
                          </Stepper>
                        </Grid>
                      </div>
                    </div>
                  </Hidden>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default withRouter(withStyles(styles("approachstyles"))(Aboutwork));
