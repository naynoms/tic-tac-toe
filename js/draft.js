var turns = 0;

$(document).ready(function () {




var p1 = $('#p1')
var p2 = $('#p2')

var win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

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
    console.log(turns);
    console.log(newGameP1);
    if (

      one.hasClass('x') && two.hasClass('x') && three.hasClass('x') || four.hasClass('x') && five.hasClass('x') && six.hasClass('x') ||
      seven.hasClass('x') && eight.hasClass('x') && nine.hasClass('x') || one.hasClass('x') && four.hasClass('x') && seven.hasClass('x') ||
      two.hasClass('x') && five.hasClass('x') && eight.hasClass('x') || three.hasClass('x') && six.hasClass('x') && nine.hasClass('x') ||
      one.hasClass('x') && five.hasClass('x') && nine.hasClass('x') || three.hasClass('x') && five.hasClass('x') && seven.hasClass('x')

    ) {
      console.log('p1 wins');
    }

  } else {
    $(this).addClass('o');
    turns ++;
    newGameP2.push(this)
    console.log(turns);
    console.log(newGameP2);
    if (

      one.hasClass('o') && two.hasClass('o') && three.hasClass('o') || four.hasClass('o') && five.hasClass('o') && six.hasClass('o') ||
      seven.hasClass('o') && eight.hasClass('o') && nine.hasClass('o') || one.hasClass('o') && four.hasClass('o') && seven.hasClass('o') ||
      two.hasClass('o') && five.hasClass('o') && eight.hasClass('o') || three.hasClass('o') && six.hasClass('o') && nine.hasClass('o') ||
      one.hasClass('o') && five.hasClass('o') && nine.hasClass('o') || three.hasClass('o') && five.hasClass('o') && seven.hasClass('o')

    ) {
      console.log('p2 wins');
    }
  }

} /* ttt func */
$('.square').on('click', ttt);


// var ttt = function () {
//   if(turns % 2 === 0) {
//     $(this).text('x');
//     turns ++;
//     console.log(turns);
//   } else {
//     $(this).text('o');
//     turns ++;
//     console.log(turns);
//   }
//
// } /* ttt func */





//////////////////////////////////////////////////


//$('.square').on('click', ttt);

var $board = $('.square');

var win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

// var newGameP1 = [];
// var newGameP2 = [];

var checkForWin = function () {
  // var board = $('.square');
  // var newGameP1 = [];
  // var newGameP2 = [];
  for(var i = 0; i <= $board.length; i++) {
    if($board.hasClass('x')) {
      newGameP1.push([i]);
      console.log(newGameP1);
    } else if($board.hasClass('o')) {
      newGameP2.push([i]);
      console.log(newGameP2);
    }
  } //for loop
};
checkForWin();

////////////////////////////////////////////////////

/*
var win = {

board: $('.square'),
winCombos: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]],
x: [],
o: [],
winner: function() {
          for (var i = 0; i < board.length; i++) {
          }
          if(this[i].hasClass('x')) {
            x.push[i];
            console.log(x);
          }
        }


}





*/




});
