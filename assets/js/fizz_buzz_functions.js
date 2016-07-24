function FizzBuzz() {};

FizzBuzz.prototype.hasZeroReminder = function(number, dividend) {
  return number % dividend == 0;
}

FizzBuzz.prototype.divisibleByThree = function (number) {
  return this.hasZeroReminder(number, 3);
}

FizzBuzz.prototype.divisibleByFive = function (number) {
  return this.hasZeroReminder(number, 5);
}

FizzBuzz.prototype.divisibleByFifteen = function (number) {
  return this.hasZeroReminder(number, 15);
}
