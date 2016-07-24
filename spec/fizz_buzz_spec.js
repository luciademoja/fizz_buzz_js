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

  // it("Check if number has zero reminder", function() {
  //     expect(subject.hasZeroReminder(3, 3)).toBe(true);
  // });
});

//   it("Checks if a given number is divisible by 3", function() {
//     var output = subject.divisibleByThree(3);
//     expect(output).toEqual('Fizz');
//   });
// });

//   it("#mySecondFunction adds two numbers together", function() {
//
//     expect(subject.mySecondFunction(10, 5)).toEqual(15);
//   });
// });
