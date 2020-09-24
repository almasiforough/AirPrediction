import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import palette from "./palette";
let theme = createMuiTheme({
  palette: palette,
  typography: {
    h1: {
      fontSize: 40,
      fontWeight: "bold",
      lineHeight: 1.69,
    },
    h2: {
      fontSize: 35,
      fontWeight: "bold",
      lineHeight: 1.69,
    },
    h3: {
      fontSize: 30,
      fontWeight: "bold",
      lineHeight: 1.69,
    },
    h4: {
      fontSize: 23,
      fontWeight: "bold",
      lineHeight: 1.68,
      textAlign: "left",
    },
    h5: {
      fontSize: 17,
      fontWeight: "bold",
      lineHeight: 1.7,
    },
    h6: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.67,
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: "normal",
      lineHeight: 1.94,
    },
    body1: {
      fontSize: 18,
      fontWeight: "normal",
      lineHeight: 1.94,
    },
    body2: {
      fontSize: 16,
      fontWeight: "normal",
      lineHeight: 1.94,
    },
    button: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 2.75,
    },
  },
});
export default responsiveFontSizes(theme);
