import { useMediaQuery } from "react-responsive";
import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import Routes from "./routes";
import { blue, indigo } from "@material-ui/core/colors";

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

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
// const Default = ({ children }) => {
//   const isNotMobile = useMediaQuery({ minWidth: 768 });
//   return isNotMobile ? children : null;
// };

const Responsive = props => (
  <div>
    <Desktop>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </Desktop>

    <Tablet>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </Tablet>

    <Mobile>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </Mobile>
{/* 
    <Default>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </Default> */}
  </div>
);

export default Responsive;
