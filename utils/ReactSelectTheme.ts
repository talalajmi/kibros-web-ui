import {
  borderColor,
  kiBrosDarkBlueColor,
  kiBrosOrangeColor,
  whiteColor,
} from "./colors";

export const reactSelectTheme = (theme: any) => ({
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

export const getReactSelectStyles = (color?: string) => {
  const styles = {
    control: (baseStyles: any) => ({
      ...baseStyles,
      color: color,
      backgroundColor: color ? color : kiBrosDarkBlueColor,
      borderColor: borderColor,
      padding: 6,
    }),
  };

  return styles;
};
