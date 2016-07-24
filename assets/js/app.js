
var onReadyEvents = function(){
  $('#click_me').click(function() {
    var number = parseInt($('#number').val());
    $('#display_message').html(FizzBuzz.fizzBuzz(number));
  });
}
