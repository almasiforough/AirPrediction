import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  rootGrid: {
    padding: 25,
    borderRightWidth: 1,
    borderRightStyle: "solid",
    borderRightColor: theme.palette.border.main,
    [theme.breakpoints.down("xs")]: {
      padding: 5,
    },
  },
  searchCityInput: {
    flex: 1,
    fontSize: 16,
    border: "none",
    "&:focus": {
      outline: "none",
    },
  },
  searchGrid: {
    paddingRight: 10,
    paddingLeft: 10,
    boxShadow: "0 0px 2px 0 " + theme.palette.shadaow.main,
    backgroundColor: "#fff",
  },
  cityNameDiv: {
    padding: 10,
    marginTop: 10,
    boxShadow: "0 0px 2px 0 " + theme.palette.shadaow.main,
    backgroundColor: theme.palette.background.cityItem,
    cursor: "pointer",
  },
  descText: {
    textAlign: "center",
    marginTop: 5,
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: theme.palette.background.white,
  },
  loadingGrid: {
    marginTop: 15,
  },
  airQualityGrid: {
    padding: 25,
  },
  aqiGrid: {
    marginTop: 40,
    marginBottom: 40,
  },
  linkGrid: {
    marginTop: 20,
  },
}));
