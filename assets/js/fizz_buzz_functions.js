function FizzBuzz() {};

FizzBuzz.prototype.hasZeroReminder = function(number, dividend) {
  return number % dividend == 0;
}

// SampleObject.prototype.mySecondFunction = function (val_1, val_2) {
//   var result = val_1 + val_2;
//   return result
// }
