const removeFromArray = function (Arr1, ...goner) {
  const newArr = Arr1.filter((item) => !goner.includes(item));
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
