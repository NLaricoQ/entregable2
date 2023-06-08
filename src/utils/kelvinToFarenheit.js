import { kelvinToCelsius } from "./kelvinToCelsius";

export const kelvintoFarenheit = (kelvinDegrades) => {
  const celsius = kelvinToCelsius(kelvinDegrades);
  const FARENHEIT_CONVERSION = 9 / 5;
  const FARENHEIT_CONSTANT = 32;
  return celsius * FARENHEIT_CONVERSION + FARENHEIT_CONSTANT;
};
