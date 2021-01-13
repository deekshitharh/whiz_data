import backgroundShape from "../images/img.jpg";
import offeringimages from "../images/work.png";
import offeringdevolopment from "../images/hello.jpg";
import aboutusbanner from "../images/about.jpg";
import contactimg from "../images/productCurvy.png";
import animationimage from "../images/works.jpg";
import herobanner from "../images/mainbanner.jpg";

//styles based on component and genric 
const wizardstyles = (theme, inner) =>
  inner === "wizardstyles"
    ? {
        outergrid: {
          position: "relative"
        },
        fontstyle: {
          textAlign: "left"
        },

        midheading: {
          textAlign: "left",
          fontSize: 20,
          color: "#000000"
        },

        highlightext: {
          color: "#d90404"
        },
        // fullScreen: useMediaQuery [theme.breakpoints.down("md")],
        workbanner: {
          position: "relative"
        },
        projectview: {
          display: "flex",
          justifyContent: "space-between"
        },
        button: {
          fontSize: 15,

          border: "1px solid #ff0000a1",
          width: 110,
          marginBottom: 11,
          marginRight: 50,

        

          backgroundColor: "rgba(217, 0, 0, 0.1)",
          padding: 2
        },
        buttonend: {
          justifyContent: "flex-end"
        },
        linkproject: {
          textDecoration: "none"
        },

        innergrid: {
          position: "absolute",
          top: 130,
          [theme.breakpoints.down("md")]: {
            top: 200
          }
        },
        headingstyle: {
          textAlign: "center",
          fontSize: 20
        },
        // marginstyle: {
        //   // marginRight: 0,

        //   display: "flex",
        //   justifyContent: "space-between",
        //   flexDirection: "column"
        // },

        card: {
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column"
        },

        subgrid: {
          position: "absolute",
          top: 220,
          [theme.breakpoints.down("md")]: {
            top: 200
          }
        },
        projectheader: {
          color: "#ffffff",

          bottom: "80%",
          position: "absolute",
          fontSize: 24,
          background: "rgba(0, 0, 0, 0.5)",
          lineHeight: 1,
          [theme.breakpoints.down("md")]: {
            fontSize: 30,
            width: "75%",
            left: 0
          }
        },

        headertext: {
          position: "absolute",

          fontSize: 40,
          color: "#ffffff",
          top: "18%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          [theme.breakpoints.only("xs")]: {
            fontSize: 12
          },
          [theme.breakpoints.down("md")]: {
            fontSize: 25
          }
        },

        imagecard: {
          position: "relative"
        },

        headerimg: {
          background: `url(${animationimage})  center bottom no-repeat `,


          height: 400,

          backgroundSize: "cover",
          backgroundPosition: "center",
          width: `calc(100vw + 48px)`,
          margin: -24
        },

        

layergrid: {
          display: "flex",

          marginBottom: 10,
          [theme.breakpoints.down("sm")]: {
            marginBottom: 0
          }
        },

        wizpaper: {
          padding: theme.spacing(3)
        }
      }
    : {};

const baselinestyles = (theme, inner) =>
  inner === "baselinestyles"
    ? {
        baseimg: {
          maxWidth: "100%",
          height: "auto"
        },

        icongrid: {
          textAlign: "center",

          paddingTop: 8,
          marginTop: 8
        }
      }
    : {};

const aboutstyles = (theme, inner) =>
  inner === "aboutstyles"
    ? {
        addressheading: {
          textAlign: "center",
          fontSize: 30,
          [theme.breakpoints.between("xs", "md")]: {
            fontSize: 20
          }
        },
        workheader: {
          color: "#d90404",
          fontSize: 20
        },

        innergrid: {
          position: "absolute",
          top: 130,
          [theme.breakpoints.down("md")]: {
            top: 200
          }
        },
        // addressgrid: {
        //   [theme.breakpoints.down("sm")]: {
        //     paddingTop: "10% !important"
        //   }
        // },
        adresspaper: {
          textAlign: "center"
        },
        innertext: {
          position: "absolute",
          // bottom: "40%",
          // left: 16,
          // fontSize: 30,
          fontSize: 40,
          color: "#ffffff",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          [theme.breakpoints.only("xs")]: {
            fontSize: 12
          },
          [theme.breakpoints.down("md")]: {
            fontSize: 25
          }
        },

        container: {
          width: "100%",
          paddingRight: 15,
          paddingLeft: 15,
          marginRight: "auto",
          maxWidth: 1140,
          marginLeft: "auto"
        },

        section: {
          display: "block"
        },
        aboutbanner: {
          position: "relative"
        },

        about: {
          fontSize: 30,
          color: "#283d50",
          textAlign: "center",
marginBottom:30,
          [theme.breakpoints.down("xs")]: {
            fontSize: 20
          }
        },
        subheader: {
          textAlign: "center",
          margin: "auto",
          fontSize: 20,
          paddingBottom: 60,
          color: "#556877",
          width: "50%",
          [theme.breakpoints.down("xs")]: {
            fontSize: 15
          }
        },

        aboutimg: {
          //  width: "100%",

          background: `url(${aboutusbanner}) center bottom no-repeat `,

          height: 400,

          backgroundSize: "cover",
          backgroundPosition: "center",
          width: `calc(100vw + 48px)`,
          margin: -24
        },

        // grid: {
        //   margin: `0 ${theme.spacing(2)}px`
        // },
        smallContainer: {
          width: "60%"
        },
        bigContainer: {
          width: "80%"
        },
        relativeText: {
          position: "relative",

          left: "22%",
          bottom: "29px"
        },
        logo: {
          marginBottom: 24,
          display: "flex",
          justifyContent: "center"
        },
        stepContainer: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        addresstext: {
          fontSize: 14
        },
        paper: {
          padding: theme.spacing(3),
          textAlign: "left",
          color: theme.palette.text.secondary,
          height: "100%"
          // height: 300
        },
        buttonBar: {
          marginTop: 32,
          display: "flex",
          justifyContent: "center"
        },
        button: {
          backgroundColor: theme.palette.primary["A100"]
        },
        backButton: {
          marginRight: theme.spacing(1)
        },
        outlinedButtom: {
          textTransform: "uppercase",
          margin: theme.spacing(1)
        },

        flipboxinner: {
          position: "relative",
          width: "100%",
          height: "100%",
          textAlign: "center",
          transition: "transform 0.8s",
          transformStyle: "preserve-3d"
        },

        flipbox: {
          "&:hover $flipboxinner": {
            transform: "rotateY(180deg)"
          }
        },
        flipboxfront: {
          position: "absolute",
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
          backgroundColor: "#bbb",
          color: "black"
        },

        flipboxback: {
          position: "absolute",
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
          backgroundColor: "dodgerblue",
          color: "black",
          transform: "rotateY(180deg)"
        }
      }
    : {};

const approachstyles = (theme, inner) =>
  inner === "approachstyles"
    ? {
        expandicon: {
          color: "#000000"
        },

        panelheading: {
          color: "#040404",
          textAlign: "center"
        },
        paneltext: {
          textAlign: "center",
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 0
        },
        hidden: {
          width: "100%"
        },
        expansion: {
          marginBottom: 12,
          marginTop: 10,
          backgroundColor: "#d3d3d3"
        },
        flex: {
          flexGrow: 1,

          display: "flex",
          height: 224
        },
        steppertext: {
          [theme.breakpoints.down("xs")]: {
            textAlign: "center"
          }
        },
        indicator: {
          backgroundColor: "#d90404",
          height: 2
        },

        contentpaper: {
          padding: 14,

          [theme.breakpoints.down("sm")]: {},
          [theme.breakpoints.down("xs")]: {
            height: 620,
            width: 205,
            textAlign: "center"
          },
          [theme.breakpoints.down("md")]: {}
        },
        stepContainer: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        icon: {
          color: "#000000 !important"
        },
        tab: {
          borderRight: `1px solid ${theme.palette.divider}`
        },

        paper: {
          padding: theme.spacing(3),
          textAlign: "left",
          color: theme.palette.text.secondary,
          height: "100%"
        },
        innerpaper: {
          padding: theme.spacing(3),
          textAlign: "left",
          color: theme.palette.text.secondary,
          elevation: 10
          // marginLeft: "25%",
          // width: "75%"
        },

        paperFull: {
          padding: theme.spacing(3),
          textAlign: "left",
          color: theme.palette.text.secondary
        },

        box: {
          marginBottom: 40,
          height: 80
        },
        boxFull: {
          marginBottom: 40,
          height: "100%"
        },
        referenceText: {
          fontStyle: "italic",
          fontSize: 16
        },
        container: {
          maxWidth: 600,
          flexGrow: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          colour: "green"
        },

        paperHeader: {
          marginTop: 30
        },
        subpaper: {
          textAlign: "center",
          color: theme.palette.text.secondary
        },
        display: {
          top: "12",
          height: "100%",
          width: "100%",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center"
          position: "relative",
          textAlign: "center"
        }
      }
    : {};

const contactstyles = (theme, inner) =>
  inner === "contactstyles"
    ? {
        label: {
          color: "#000000",
          "&$cssFocused": {
            color: "#000000 "
          }
        },

        cssOutlinedInput: {
          "&$cssFocused $notchedOutline": {
            borderColor: `#000000 !important`
          }
        },
        cssFocused: {},
        notchedOutline: {
          borderWidth: "1px",
          borderColor: " #000000 !important"
        },
        innercontainer: {
          display: "flex",
          flexWrap: "wrap"
        },
        textField: {
          width: 450,
          color: "#000000",
          [theme.breakpoints.down("sm")]: {
            width: 400
          },
          [theme.breakpoints.down("xs")]: {
            width: 250
          }
        },
        emailField: {
          width: 250,
          color: "white"
        },
        helperText: {
          marginTop: 0,
          color: "#040404"
        },
        grid: {
          width: 1200,
          marginTop: 14,
          [theme.breakpoints.down("sm")]: {
            width: "calc(100% - 20px)"
          }
        },

        formgroup: {
          marginLeft: 100,
          [theme.breakpoints.down("sm")]: {
            marginLeft: 0
          }
        },

        paper: {
          padding: 11,
          textAlign: "left",
          color: theme.palette.text.secondary,
          height: 190
        },
        mapgrid: {
          position: "relative"
        },
        bg: {
          background: `url(${contactimg})  `,
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        },
        outergrid: {
          marginTop: 40,
          [theme.breakpoints.down("sm")]: {
            marginTop: 25
          }
        },
        outer1grid: {
          [theme.breakpoints.down("sm")]: {
            marginTop: 25
          }
        },
        heading: {
          color: "#000000"
        },
        headerText: {
          color: "#000000"
        },
        iconstyle: {
          color: "#000000"
        },
        input: {
          color: "#000000"
        },
        topBar: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 32
        },
        actionButtom: {
          textTransform: "uppercase",
          margin: theme.spacing(1),
          width: 152,
          color: " #000000",
          background: "#ffffff",
          borderColor: "#000000",
          "&:hover": {
            background: "rgba(217, 0, 0, 0.1)",
            color: "#000000"
          }
        },

        responsetext: {
          color: "#000000"
        },
        formstyle: {
          color: "#000000"
        },
        outlinedButtom: {
          textTransform: "uppercase",
          margin: theme.spacing(1)
        },
        blockCenter: {
          padding: theme.spacing(2),
          textAlign: "center",
          [theme.breakpoints.down("md", "sm")]: {
            padding: 0
          }
        },
        block: {
          padding: theme.spacing(2)
        },
        box: {
          marginBottom: 40,
          height: 80
        },
        boxFull: {
          marginBottom: 40,
          height: "100%"
        },
        checkbox: {
          padding: 2,
          color: "#000000!important"
        },
        thumb: {
          backgroundColor: "#000000"
        },
        rangeLabel: {
          display: "flex",
          justifyContent: "space-between",
          paddingTop: theme.spacing(2)
        }
      }
    : {};

const offeringstyles = (theme, inner) =>
  inner === "offeringstyles"
    ? {
        paper1: {
          position: "relative",
          width: "90%",
          maxWidth: 800,
          minWidth: 400,
          height: 390,
          margin: "0 auto",
          background: "#fafafa",
          borderRadius: 10,
          boxShadow: "0 2px 8px rgba(0,0,0,.3)",
          overflow: "hidden",
          marginLeft: 12,
          marginBottom: 16,

          "&::before": {
            content: '""',

            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: 60,
            background:
              "radial-gradient(#575450 6px, transparent 7px) repeat-y",
            backgroundSize: "30px 30px",
            borderRight: "3px solid #D44147",
            boxSizing: "border-box"
          }
        },

        bannergrid: {
          position: "relative"
      },
      liststyle:
   {
     paddingLeft:10     
        },
        contactlink: {
          fontSize: 17,
          textDecoration: "none! important",
          color: "#FF0000",
          marginTop: 20,
          marginBottom: 20,
          paddingLeft: 10
        },
        bannertext: {
          position: "absolute",
          bottom: "40%",
          left: 16,
          fontSize: 30,
          color: "#ffffff"
        },
        bgimg: {
          //  width: "100%",
          height: 400,
          background: `url(${backgroundShape})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
          width: `calc(100vw + 48px)`,
          margin: -24

          // backgroundSize: "100% 100%"
        },
        textpath: {
          textAlign: "left"
        },

        innerimg: {
          width: "100%",
          background: `url(${offeringimages})`,
          height: 400,
          backgroundSize: "cover",
          backgroundPosition: "center",
          [theme.breakpoints.only("sm")]: {
            height: 500,
            marginTop: 10
          }
        },
        innersubimg: {
          width: "100%",
          background: `url(${offeringdevolopment})`,
          height: 400,
          backgroundSize: "cover",
          backgroundPosition: "center",
          [theme.breakpoints.only("sm")]: {
            height: 550,
            marginTop: 100
          }
        },
        papercontent: {
          position: "absolute",
          top: 30,
          right: 0,
          bottom: 30,
          left: 60,
          background:
            "linear-gradient(transparent, transparent 28px, #91D1D3 28px)",
          backgroundSize: "30px 30px"
        },
        textarea: {
          width: "100%",
          maxWidth: "100%",
          height: "100%",
          maxHeight: "100%",
          lineHeight: "30px",
          padding: "0px 10px",
          border: 0,
          outline: 0,
          background: "transparent",
          color: "#7b8397",

          fontWeight: "bold",
          fontSize: 18,
          boxSizing: "border-box",
          zIndex: 1
        },

        paper: {
          padding: theme.spacing(3),
          textAlign: "left",
          color: theme.palette.text.secondary,
          height: "100%"
        },
        innerpaper: {
          padding: theme.spacing(3),
          textAlign: "left",
          color: theme.palette.text.secondary,
          elevation: 10
          // marginLeft: "25%",
          // width: "75%"
        },
        img: {
          // width: "50%",
          margin: "auto",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          marginRight: 10,
          width: 150
        },
        paperFull: {
          padding: theme.spacing(3),
          textAlign: "left",
          color: theme.palette.text.secondary
        },

        topBar: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 32
        },
        gridimage: {
          padding: "20px !important",
          [theme.breakpoints.down("xs")]: {
            padding: "0 !important",
            marginTop: 10
          }
        },
        innerBanner: {
          left: 21,
          color: "#ffffff",
          bottom: "30%",
          position: "absolute",
          fontSize: 30,
          lineHeight: 1,
          width: "85%",
          background: "rgba(0, 0, 0, 0.5)",
          [theme.breakpoints.down("xs")]: {
            fontSize: 25,
            width: "75%",
            left: 0
          }
        },

        box: {
          marginBottom: 40,
          height: 80
        },
        boxFull: {
          marginBottom: 40,
          height: "100%"
        },
        referenceText: {
          fontStyle: "italic",
          fontSize: 16
        },
        container: {
          maxWidth: 600,
          flexGrow: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          colour: "green"
        },
        quote: {
          textAlign: "right",
          fontStyle: "italic"
        },
        paperHeader: {
          marginTop: 30
        },
        subpaper: {
          textAlign: "center",
          color: theme.palette.text.secondary
        },
        display: {
          top: "12",
          height: "100%",
          width: "100%",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center"
          position: "relative",
          textAlign: "center"
        },
        grey: {
          padding: 20,
          position: "relative",
          zIndex: 99,
          background: "#f2f2f6"
        },
        wrap: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        brandname: {
          color: "#a9a9a9",
          textTransform: "uppercase",
          fontSize: 20,
          fontFamily: "source sans pro,Arial,sans-serif",
          fontWeight: 800,
          display: "inline-block",
          float: "left"
          //marginTop: 16
        }
      }
    : {};

export const styles = inner => theme => ({
  root: {
    flexGrow: 1,

    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "0 400px"
  },



  wizpaper: {
    padding: theme.spacing(3),
    textAlign: "center"
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
  },

  subgrid: {
    marginTop: 20,

    [theme.breakpoints.down("md")]: {
      top: 240
    }
  },

  linkpath: {
    textAlign: "center",
    marginTop: 26,
    textDecoration: "none ! important",
    color: "#d90404"
  },
  cardtext: {
    padding: 6
  },
  appBar1: {
    top: "auto",
    bottom: 0
  },

  container: {
    //  padding: 18,

    //  maxWidth: "1170px",
    //  margin: "0 auto",

    [theme.breakpoints.down("md", "lg")]: {
      padding: "0, 0"
      // minHeight: 1000
    }
  },
  content: {
    textAlign: "justify",
    color: "#606060",
    fontSize: 15,
    [theme.breakpoints.down("xs")]: {
      textAlign: "left"
    }
  },

  grid: {
    width: 1200,
    marginTop: 40,
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% + 41px)",
      marginTop: 0
    }
  },

  footerclass: {
    background: "#1a1a1a",
    color: "#929292",
    zIndex: "1600",
    bottom: 0,
    position: "static",
    width: "100%",
    marginTop: "100"
  },
  sectionheading: {
    color: "#444f6c",
    fontSize: "32px",
    fontWeight: 300,
    lineHeight: 1.1875,
    [theme.breakpoints.between("md")]: {
      fontSize: "24px",
      lineHeight: "1.28",
      maxWidth: "50%"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
      fontWeight: "bold",
      textAlign: "center"
    }
  },

  sectiondescription: {
  

    maxWidth: "570px",
    paddingLeft: "24px",
    paddingRight: "24px",

    color: "#7b8397",
    fontSize: "18px",
    fontWeight: 300,
    lineHeight: 1.56,
    margin: "24px auto 0"
  },
  actionCard: {
    display: "block"
  },
  cardLists: {
    //justifyContent: "space-between",
    marginTop: 20,

    //marginBottom: screen.width % 140,
    [theme.breakpoints.down("md")]: {
      marginTop: 40,
      marginBottom: 10
    }
  },
  outercard: {
    maxWidth: 345,
    marginRight: 10,
    marginTop: 17,
    background: "rgba(32, 24, 27, 0.07)",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 19
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 17
    }
  },


  media: {
    display: "block",
    height: 200
  },

  innertext: {
    color: "#696969",
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "source sans pro,Arial,sans-serif"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: 200,
    [theme.breakpoints.down("sm")]: {
      height: 220
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3)
    }
  },
  paperFull: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2)
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 4
  },

  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  actionButtom: {
    textTransform: "uppercase",
    //  margin: theme.spacing(1),

    color: "#000000",
    borderColor: "#000000",
    "&:hover": {
      //  background: "rgba(0, 0, 0, 0.19)",
      color: "#000000"
    },
    [theme.breakpoints.down("sm")]: {
      "&:hover": {
        background: "none"
      }
    }
  },
  casebutton: {
    textTransform: "uppercase",

    color: "#000000",
    borderColor: "#000000",
    background: "rgba(0, 0, 0, 0.19)"
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  block: {
    padding: theme.spacing(2)
  },
  box: {
    marginBottom: 40,
    height: 80
  },
  boxFull: {
    marginBottom: 40,
    height: "100%"
  },
  inlining: {
    display: "inline-block",
    marginRight: 10
  },
  buttonBar: {
    display: "flex"
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  herobanner: {
    //  width: "100%",
    height: 250,
    background: `url(${herobanner})  center bottom no-repeat `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: `calc(100vw + 48px)`,
    margin: -24,
    [theme.breakpoints.down("sm")]: {
         height: 200,
    }
         },
         display: {
           top: "12",
           height: "100%",
           width: "100%"
           // display: "flex",
           // alignItems: "center",
           // justifyContent: "center"
         },
         grey: {
           padding: 20,
           position: "relative",
           zIndex: 99,
           background: "#f2f2f6"
         },
         centeredgrid: {
           [theme.breakpoints.down("xs")]: {
             alignItems: "center",
             flexDirection: "row",
             justifyContent: "center"
           }
         },
  formheader: {
    backgroundColor: "rgba(0, 0, 0, 0.19)",
    textAlign:"center"
       },

         textField: {
           marginTop: 10
         },
         underline: {
           "&::after": {
             borderBottom: "2px solid #000000"
           }
         },

         footer: {
           backgroundColor: "#d3d3d3",
       
           color: "#000000",
           [theme.breakpoints.down("sm")]: {
             marginTop: "0"
           }
         },

         wrap: {
           display: "flex",
           flexDirection: "row",
           alignItems: "center"
         },

         img: {
           // width: "50%",

           width: 150
         },
         layergrid: {
           display: "flex",
        
           [theme.breakpoints.down("sm")]: {
             marginBottom: 0
           }
         },
         herobannergrid: {
           position: "relative"
         },
         herotext: {
           position: "absolute",

           top: "19%",
           left: "53%",

           fontSize: 30,
           color: "#ffffff",
backgroundColor: "rgba(0, 0, 0, 0.2)",

lineHeight: "1.3em",
width: "100%",
           transform: "translate(-50%, -50%)",
           [theme.breakpoints.down("sm")]: {
              top: "40%",
           left: "55%",
             fontSize: 20
           },
           [theme.breakpoints.only("md")]: {
             fontSize: 30
           }
         },
         noBorder: {
           borderBottomStyle: "hidden"
         },
         loadingState: {
           opacity: 0.05
         },
         loadingMessage: {
           position: "absolute",
           top: "40%",
           left: "40%"
  },
  practicegrid: {
           padding:24
         },

         actionButton: {
           textTransform: "uppercase",
           margin: theme.spacing(2),

           color: " #000000",
           background: "#ffffff",
           borderColor: "#000000"
         },
  subpaper: {
  padding: 24,
    margin: 10
},
       


         label: {
           color: "#000000",
           fontSize: 18,
           "&$cssFocused": {
             color: "#000000 "
           }
         },

         cssFocused: {},

         focus: {
           display: "none"
         },
         heading: {
           color: "#040404",

           [theme.breakpoints.up("lg")]: {
             display: " inline-block",
             padding: "6px 0px 4px",
             margin: "0px 8px 0px",
             position: "relative",
             "&::before": {
               content: '""',
               borderBottom: "solid 3px #d90404",
               position: "absolute",
               width: "100%",
               height: 0,

               bottom: 2,
               transform: "scaleX(0)",
               transition: "transform 250ms ease-in-out"
             },
             "&:hover:before": {
               transform: "scaleX(1)"
             }
           }
         },
         ...approachstyles(theme, inner),
         ...offeringstyles(theme, inner),
         ...aboutstyles(theme, inner),
         ...baselinestyles(theme, inner),
         ...wizardstyles(theme, inner),
         ...contactstyles(theme, inner)
       });
