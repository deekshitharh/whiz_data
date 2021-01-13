import React, { Component } from "react";
 import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import Routes from "./routes";
import { blue, indigo } from "@material-ui/core/colors";
import Responsive from  "./reponsive"
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    useNextVariants: true,
    fontFamily: ['"Lato"', "sans-serif"].join(",")
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <Responsive>
          <MuiThemeProvider theme={theme}>
            <Routes />
          </MuiThemeProvider>
        </Responsive>
      </div>
    );
  }
}

export default App;
