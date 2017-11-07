(function (){

  var myGrades =  [95, 43, 6, 7, 45, 75];

  var average = function(){
    var total = myGrades.reduce(function(accumulator, item){
      return accumulator + item}, 0);

      return 'Your average grade is' + total/myGrades.length + '.';

  }

  var failing = function(){
    var failingGrades = myGrades.filter(function(item){
      return item < 70;});

      return 'You failed' + failingGrades.length + 'times.';
  }

  console.log(failing());
  console.log(global);
//'You failed 2 times.'
}());

$(document).ready(function){


});
