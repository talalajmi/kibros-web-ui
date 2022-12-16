import {
  borderColor,
  kiBrosDarkBlueColor,
  kiBrosOrangeColor,
  kiBrosLightBlueColor,
  whiteColor,
  kiBrosDarkOrangeColor,
  reactSelectBorderColor,
} from "./colors";

export const reactSelectTheme = (theme: any) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: kiBrosDarkOrangeColor,
    primary50: kiBrosDarkOrangeColor,
    neutral30: reactSelectBorderColor,
    neutral80: whiteColor,
  },
});

export const getReactSelectStyles = (color?: string) => {
  const styles = {
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor:
        state.isSelected || state.isFocused
          ? kiBrosOrangeColor
          : kiBrosDarkBlueColor,
      color: "white",
    }),
    control: (baseStyles: any, state: any) => ({
      ...baseStyles,
      backgroundColor: color ? color : kiBrosDarkBlueColor,
      borderColor: borderColor,
      borderRadius: 8,
      padding: 6,
      color: "white",
    }),
  };

  return styles;
};

const customStyles = {
  control: () => ({
    backgroundColor: "#1B2E3C",
    color: "white",
  }),
};
