var turns = 0;
var p1WinCount = 0;
var p2WinCount = 0;

$(document).ready(function () {

  var p1 = $('#pOne');
  var p2 = $('#pTwo');

  var reset = function () { // resets the board for a new game
    var board = $('.square');
    board.removeClass('x');
    board.removeClass('o');
    $('div.winner').addClass('hidden');
    $('div.draw').addClass('hidden');
    turns = 0;
  };
  $('#resetB').on('click', reset);


  var winnerMessage = $('div.winner');

  var showWinner = function (who) { // winner message over gameboard
    winnerMessage.text("winner!");
    winnerMessage.removeClass('hidden');
  };

  var scoreCounter = function () {
    $('#p1Counter').text(p1WinCount);
    $('#p2Counter').text(p2WinCount);
  };


  var win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]; // reference for combos

  var one = $('#sq1');
  var two = $('#sq2');
  var three = $('#sq3');
  var four = $('#sq4');
  var five = $('#sq5');
  var six = $('#sq6');
  var seven = $('#sq7');
  var eight = $('#sq8');
  var nine = $('#sq9');

  var winner = function () {
    if ( // x winning combos

      (one.hasClass('x') && two.hasClass('x') && three.hasClass('x')) || (four.hasClass('x') && five.hasClass('x') && six.hasClass('x')) ||
      (seven.hasClass('x') && eight.hasClass('x') && nine.hasClass('x')) || (one.hasClass('x') && four.hasClass('x') && seven.hasClass('x')) ||
      (two.hasClass('x') && five.hasClass('x') && eight.hasClass('x')) || (three.hasClass('x') && six.hasClass('x') && nine.hasClass('x')) ||
      (one.hasClass('x') && five.hasClass('x') && nine.hasClass('x')) || (three.hasClass('x') && five.hasClass('x') && seven.hasClass('x'))

    ) {
      var who = p1;
      showWinner(who);
      p1WinCount ++;
      scoreCounter();
      return;

    } else if ( // o winning combos

      (one.hasClass('o') && two.hasClass('o') && three.hasClass('o')) || (four.hasClass('o') && five.hasClass('o') && six.hasClass('o')) ||
      (seven.hasClass('o') && eight.hasClass('o') && nine.hasClass('o')) || (one.hasClass('o') && four.hasClass('o') && seven.hasClass('o')) ||
      (two.hasClass('o') && five.hasClass('o') && eight.hasClass('o')) || (three.hasClass('o') && six.hasClass('o') && nine.hasClass('o')) ||
      (one.hasClass('o') && five.hasClass('o') && nine.hasClass('o')) || (three.hasClass('o') && five.hasClass('o') && seven.hasClass('o'))

    ) {
      var who = p2;
      showWinner(who);
      p2WinCount ++;
      scoreCounter();
      return;

    } else {
      return false;
    }
  };

  var drawMessage = $('div.draw'); // draw message over the gameboard
  var draw = function () {
    if(!winner() && turns === 9) {
      drawMessage.text("draw");
      drawMessage.removeClass('hidden');
    }
  };


  var ttt = function () { //game play function
    if(turns % 2 === 0) {
      $(this).addClass('x');
      turns ++;
      draw();
    } else {
      $(this).addClass('o');
      turns ++;
      draw();
      }
  };
  $('.square').on('click', ttt);

}); //document ready
