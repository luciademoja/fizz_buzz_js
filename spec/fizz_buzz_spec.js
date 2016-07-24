describe("fizzBuzz", function() {

  it("Check if number has zero reminder", function() {
      expect(hasZeroReminder(3, 3)).toBe(true);
  });

  it("Check if reminder is different than 0", function() {
      expect(hasZeroReminder(4, 3)).toBe(false);
  });

  it("Check if number is divisible by 3", function() {
      expect(divisibleByThree(3)).toBe(true);
  });

  it("Check if number is divisible by 5", function() {
      expect(divisibleByFive(5)).toBe(true);
  });

  it("Check if number is divisible by 15", function() {
      expect(divisibleByFifteen(15)).toBe(true);
  });

  it("Tests for divisibleByFifteen to return FizzBuzz", function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  });

  it("Tests for divisibleByFive to return Buzz", function() {
    expect(fizzBuzz(5)).toEqual('Buzz');
  });

  it("Tests for divisibleByThree to return Fizz", function() {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });
});
