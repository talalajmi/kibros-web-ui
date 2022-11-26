import {
  kiBrosLightBlueColor,
  kiBrosDarkBlueColor,
  kiBrosOrangeColor,
} from "../utils/colors";
import { createTheme } from "@mui/material/styles";

export const materialUiTheme = createTheme({
  palette: {
    primary: {
      main: kiBrosDarkBlueColor,
      light: kiBrosLightBlueColor,
    },
    secondary: {
      main: kiBrosOrangeColor,
      dark: "#DC7200",
    },
  },
});
