var turns = 0;



$(document).ready(function () {

var p1 = $('#p1Name').val();
var p2 = $('#p2Name').val();

var players = function() {

   p1 = $('#p1Name').val();
   p2 = $('#p2Name').val();

  $('#p1Show').text(p1);
  $('#p2Show').text(p2);

}
$('#p1Button').on('click', players);
$('#p2Button').on('click', players);


var reset = function () {
  var board = $('.square');
  board.removeClass('x');
  board.removeClass('o');
}
$('#resetB').on('click', reset);

// var endGame = function () {
//   if()
// }



var win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]; // reference for combos

var newGameP1 = [];
var newGameP2 = [];

var one = $('#sq1');
var two = $('#sq2');
var three = $('#sq3');
var four = $('#sq4');
var five = $('#sq5');
var six = $('#sq6');
var seven = $('#sq7');
var eight = $('#sq8');
var nine = $('#sq9');




var ttt = function () {
  if(turns % 2 === 0) {
    $(this).addClass('x');
    turns ++;
    newGameP1.push(this);
    console.log(newGameP1);
    //debugger;

    if (

      one.hasClass('x') && two.hasClass('x') && three.hasClass('x') || four.hasClass('x') && five.hasClass('x') && six.hasClass('x') ||
      seven.hasClass('x') && eight.hasClass('x') && nine.hasClass('x') || one.hasClass('x') && four.hasClass('x') && seven.hasClass('x') ||
      two.hasClass('x') && five.hasClass('x') && eight.hasClass('x') || three.hasClass('x') && six.hasClass('x') && nine.hasClass('x') ||
      one.hasClass('x') && five.hasClass('x') && nine.hasClass('x') || three.hasClass('x') && five.hasClass('x') && seven.hasClass('x')

    ) {
      var winner = p1;
      $('div.winner').removeClass('hidden');
    }

  } else {
    $(this).addClass('o');
    turns ++;
    newGameP2.push(this)
    console.log(newGameP2);
    if (

      one.hasClass('o') && two.hasClass('o') && three.hasClass('o') || four.hasClass('o') && five.hasClass('o') && six.hasClass('o') ||
      seven.hasClass('o') && eight.hasClass('o') && nine.hasClass('o') || one.hasClass('o') && four.hasClass('o') && seven.hasClass('o') ||
      two.hasClass('o') && five.hasClass('o') && eight.hasClass('o') || three.hasClass('o') && six.hasClass('o') && nine.hasClass('o') ||
      one.hasClass('o') && five.hasClass('o') && nine.hasClass('o') || three.hasClass('o') && five.hasClass('o') && seven.hasClass('o')

    ) {
      var winner = p2;
      $('div.winner').removeClass('hidden');
    }
  }

} /* ttt func */
$('.square').on('click', ttt);








});
