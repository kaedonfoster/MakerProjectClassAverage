



 function maxMin() {
    var input = (this.value);

    if (input < 0 || input > 100){
      alert("Value should be between 0 - 100");
    }
  return;
}
document.getElementById("Ablock").onkeyup = maxMin;
document.getElementById("Bblock").onkeyup = maxMin;
document.getElementById("Cblock").onkeyup = maxMin;
document.getElementById("Dblock").onkeyup = maxMin;
function limit(input) {
    if (input.value < 0) input.value = 0;
    if (input.value > 100) input.value = 100;
  }

  //makes the clear button clear everything
  function getClear() {
document.getElementById('Ablock').value = '';
document.getElementById('Bblock').value = '';
document.getElementById('Cblock').value = '';
document.getElementById('Dblock').value = '';
document.getElementById('parAvg').innerHTML = '';
}
  //gets the average mark
function getAvg() {
 var classA = Number(document.getElementById('Ablock').value);
 var classB = Number(document.getElementById('Bblock').value);
 var classC = Number(document.getElementById('Cblock').value);
 var classD = Number(document.getElementById('Dblock').value);
var avg=(classA+classB+classC+classD)/4 ;

//Finds the letter grade
if (avg >=95) {
  lGrade = "A+";
} else if (avg >=86) {
  lGrade = "A";
}  else if (avg >=73) {
  lGrade = "B";
} else if (avg >=67) {
  lGrade = "C+";
} else if (avg >=60) {
  lGrade = "C";
} else if (avg >=50){
  lGrade ="D";
} else {
  lGrade = "F";
}
//displays the class average and Letter grade
document.getElementById("parAvg").innerHTML = "Your Class average is " + avg + "% and " + "Your Letter Grade is a " + lGrade + ".";
}