import {
  borderColor,
  kiBrosDarkBlueColor,
  kiBrosOrangeColor,
  kiBrosLightBlueColor,
  whiteColor,
} from "./colors";

export const reactSelectTheme = (theme: any) => ({
  ...theme,
  borderRadius: 8,
  colors: {
    ...theme.colors,
    primary25: kiBrosLightBlueColor,
    primary: kiBrosDarkBlueColor,
    neutral80: whiteColor,
    neutral90: whiteColor,
  },
});

export const getReactSelectStyles = (color?: string) => {
  const styles = {
    control: (baseStyles: any, state: any) => ({
      ...baseStyles,
      backgroundColor: color ? color : kiBrosDarkBlueColor,
      borderColor: borderColor,
      padding: 6,
    }),
  };

  return styles;
};
