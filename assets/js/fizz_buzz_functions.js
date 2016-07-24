function FizzBuzz() {};

FizzBuzz.prototype.fizzBuzz = function(number) {
  if(this.divisibleByFifteen(number)) {
    return 'FizzBuzz';
  }
  else if(this.divisibleByFive(number)) {
    return 'Buzz';
  }
  else if(this.divisibleByThree(number)) {
    return 'Fizz';
  }
  else
    return number;
}

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
