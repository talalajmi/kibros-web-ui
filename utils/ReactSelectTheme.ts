import {
  borderColor,
  kiBrosDarkBlueColor,
  kiBrosOrangeColor,
  whiteColor,
} from "./colors";

export const getReactSelectTheme = (theme: any) => ({
  ...theme,
  borderRadius: 8,
  colors: {
    ...theme.colors,
    primary25: kiBrosOrangeColor,
    primary: kiBrosDarkBlueColor,
    neutral80: whiteColor,
    neutral90: whiteColor,
  },
});

export const reactSelectStyles = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    backgroundColor: kiBrosDarkBlueColor,
    borderColor: borderColor,
    padding: 6,
  }),
};
