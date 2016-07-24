describe("FizzBuzz", function() {
  var subject;

  beforeEach(function() {
    subject = new FizzBuzz();
  });

  it("Check if number has zero reminder", function() {
      expect(subject.hasZeroReminder(3, 3)).toBe(true);
  });

  it("Check if reminder is different than 0", function() {
      expect(subject.hasZeroReminder(4, 3)).toBe(false);
  });

  it("Check if number is divisible by 3", function() {
      expect(subject.divisibleByThree(3)).toBe(true);
  });

  it("Check if number is divisible by 5", function() {
      expect(subject.divisibleByFive(5)).toBe(true);
  });

  it("Check if number is divisible by 15", function() {
      expect(subject.divisibleByFifteen(15)).toBe(true);
  });
});


//   it("#mySecondFunction adds two numbers together", function() {
//
//     expect(subject.mySecondFunction(10, 5)).toEqual(15);
//   });
// });
