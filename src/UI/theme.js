const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tabletS: "675px",
  tablet: "768px",
  tabletL: "1013px",
  laptop: "1024px",
  laptopM: "1300px",
  laptopL: "1440px",
  desktopS: "1890px",
  desktop: "2560px",
};

export const Device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tabletS: `(min-width: ${size.tabletS})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktopS: `(min-width: ${size.desktopS})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const Colors = {
  black: "#000000",
  blue: {
    0: "#97BFD5",
    1: "#5899BC",
    2: "#2F80AC",
    3: "#205978",
    4: "#e9f2f7",
    5: "#C1D9E6",
  },
  carbon: "#424B54",
  fadedRed: "#FBD7D3",
  gray: {
    0: "#F2F2F6",
    1: "#E1E4EA",
    2: "#A4A9AF",
    3: "#D4D6D9",
    4: "#DCE0E7",
    5: "#F2F2F7",
    6: "#6A7078",
    7: "#5F666F",
  },
  green: "#06D6A0",
  kimcheColors: ["#2580ac", "#d65050", "#63c3d3", "#f5ae13"],
  orange: "#E28815",
  pink: "#C89FA3",
  purple: "#9F6BA0",
  red: "#EF6461",
  yellow: "#FFD166",
  yellowVariants: ["#FFF5C2", "#F0AB00", "#FFCC00"],
  softGreen: "#CDF7EC",
  softPink: "#FFDFD4",
  softPurple: "#DDCEE2",
  softYellow: "#FFF5C2",
  white: "#FFFFFF",

  primary: {
    main: "#5899BC", // kimche main blue, for texts and fill
    light: "#97BFD5", // for icons (for example)
    variant: "#2F80AC", // other variant of kimche main blue, little bit darker
    surface: "#E9F2F7", // light blue for surfaces
    contrastText: "#FFFFFF", // contrast color when background is main color
  },
  disabled: {
    surface: "#F2F2F6",
    contrastText: "#A4A9AF", // contrast color for disabled surface
  },
  error: {
    main: "#EF6461",
    light: "#FBD7D3",
    contrastText: "#FFFFFF",
  },
  alert: {
    main: "#FFD166",
    light: "#FFF5C2",
  },
  bold: {
    main: "#343346",
  },
  success: {
    main: "#06D6A0",
  },
};

export const Spacings = {
  0: "4px",
  1: "8px",
  2: "16px",
  3: "24px",
  4: "32px",
  5: "40px",
  6: "64px",
};

export const TextSizes = {
  small: {
    0: {
      fontSize: "0.625rem", // 10px
      lineHeight: "0.625rem", // 10px
    },
    1: {
      fontSize: "0.75rem", // 12px
      lineHeight: "0.75rem", // 12px
    },
    2: {
      fontSize: "0.813rem", // 13px
      lineHeight: "1rem", // 16px
    },
    3: {
      fontSize: "0.875rem", // 14px
      lineHeight: "1.125rem", // 18px
    },
    4: {
      fontSize: "0.938rem", // 15px
      lineHeight: "1.125rem", // 18px
    },
  },
  medium: {
    fontSize: "1rem", // 16px
    lineHeight: "1.125rem", // 18px
  },
  large: {
    0: {
      fontSize: "1.063rem", // 17px
      lineHeight: "1.125rem", // 18px
    },
    1: {
      fontSize: "1.125rem", // 18px
      lineHeight: "1.125rem", // 18px
    },
    2: {
      fontSize: "1.1975rem", // 19.16px
      lineHeight: "1.22rem", // 19.52px
    },
    3: {
      fontSize: "1.25rem", // 20px
      lineHeight: "1.25rem", // 20px
    },
    4: {
      fontSize: "1.313rem", // 21px
      lineHeight: "1.375rem", // 22px
    },
    5: {
      fontSize: "1.375rem", // 22px
      lineHeight: "1.5rem", // 24px
    },
    6: {
      fontSize: "1.5rem", // 24px
      lineHeight: "1.6rem", // 25.6px
    },
    7: {
      fontSize: "2.125rem", // 34px
      lineHeight: "2.125rem", // 34px
    },
    8: {
      fontSize: "2.5rem", // 40px
      lineHeight: "2.375rem", // 38px
    },
  },
};

export const TextWeights = {
  bold: "Nunito Sans Bold",
  regular: "Nunito Sans Regular",
  light: "Nunito Sans Light",
  semiBold: "Nunito Sans SemiBold",
  extraBold: "Nunito Sans ExtraBold",
  caveat: "Caveat Regular",
};

export const TextWeightsNumber = {
  midLight: 300,
  regular: 400,
  midBold: 600,
  bold: 700,
};

export const BoxShadows = {
  0: "0px 1px 2px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 16px rgba(0, 0, 0, 0.1)",
  1: "0px 1px 2px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.1);",
  2: "0px 2px 10px rgba(0, 0, 0, 0.2)",
  3: "0px 8px 16px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1)",
  4: "0px 0px 24px rgba(0, 0, 0, 0.05)",
};

export const BorderRadius = {
  0: "2px",
  1: "4px",
  2: "6px",
  3: "8px",
  4: "10px",
  5: "12px",
  6: "14px",
  7: "16px",
};

const exportable = {
  BorderRadius,
  BoxShadows,
  Colors,
  Device,
  Spacings,
  TextSizes,
  TextWeights,
  TextWeightsNumber,
};

export default exportable;
