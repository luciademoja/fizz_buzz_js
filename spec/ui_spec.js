describe('Partial sample', function() {
  beforeEach(function() {

    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('button_partial.html');
    $.holdReady(false);
  });

  afterEach(function() {

  });

  describe("Shows expected result after number input", function() {

    it("when button is clicked", function() {
      $('#number').val(3);
      $('#click_me').trigger('click');
      expect($('#display_message').text()).toBe('Fizz');
    });
  });
});
