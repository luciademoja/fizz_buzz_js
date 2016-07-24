function fizzBuzz(number) {
  if(divisibleByFifteen(number)) {
    return 'FizzBuzz';
  }
  else if(divisibleByFive(number)) {
    return 'Buzz';
  }
  else if(divisibleByThree(number)) {
    return 'Fizz';
  }
  else
    return number;
}


function hasZeroReminder(number, dividend) {
  return number % dividend == 0;
}

function divisibleByThree(number) {
  return hasZeroReminder(number, 3);
}

function divisibleByFive(number) {
  return hasZeroReminder(number, 5);
}

function divisibleByFifteen(number) {
  return hasZeroReminder(number, 15);
}
