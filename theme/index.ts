import { createTheme } from "@mui/material/styles";
import {
  kiBrosDarkBlueColor,
  kiBrosLightBlueColor,
  kiBrosOrangeColor,
  kiBrosGreenColor,
} from "../utils/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: kiBrosDarkBlueColor,
      light: kiBrosLightBlueColor,
    },
    secondary: {
      main: kiBrosOrangeColor,
    },
    success: {
      main: kiBrosGreenColor,
    },
  },
});
