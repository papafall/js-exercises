const convertToCelsius = function (Fahr) {
  const Cels = (Fahr - 32) * (5 / 9);
  const CelsRounded = Math.round(Cels * 10) / 10;
  return CelsRounded;
};

const convertToFahrenheit = function (tempC) {
  const tempF = tempC * (9 / 5) + 32;
  const tempFRounded = Math.round(tempF * 10) / 10;
  return tempFRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
