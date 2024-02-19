export const API_KEY = "AIzaSyCFPX59uVb8SMpR0YUPn_cG4lpd8_RifUU";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
