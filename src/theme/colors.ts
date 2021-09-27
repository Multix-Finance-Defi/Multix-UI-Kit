import { Colors } from "./types";

export const baseColors = {
  failure: "#FFFFFF",
  primary:   "#9400D3" , //   "#00ECEC",                 // "#8B34FF",
  primaryBright:  "#8B34FF",
  primaryDark:  "#8B34FF",
  secondary: "#8B34FF",
  success:  "#8B34FF",
  warning:  "#8B34FF",
  active: "#9932CC",
};

export const brandColors = {
  binance: "#feda19",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#4400d9",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#FFFFFF",
  text: "#00ECEC",
  textDisabled: "#BDC2C4",
  textSubtle: "#6E318E",
  borderColor: "#FFFFFF",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#000000",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#00ECEC",
  textDisabled: "#666171",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#000000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
