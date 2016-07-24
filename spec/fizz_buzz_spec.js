describe("FizzBuzz", function() {
  var subject;

  beforeEach(function() {
    subject = new FizzBuzz();
  });

  it("Checks if a given number is divisible by 3", function() {
    var output = subject.divisibleByThree(3);
    expect(output).toEqual('Fizz');
  });
});

//   it("#mySecondFunction adds two numbers together", function() {
//
//     expect(subject.mySecondFunction(10, 5)).toEqual(15);
//   });
// });
