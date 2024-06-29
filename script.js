/*Add your JavaScript here*/

var Harry = 0;
var Albus = 0;
var numQ = 0;
var result = document.getElementById("result");
var restart = document.getElementById("restarter");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", Potter);
q1a2.addEventListener("click", Dumbledore);
q1a1.addEventListener("click", Q1disable);
q1a2.addEventListener("click", Q1disable);

q2a1.addEventListener("click", Dumbledore);
q2a2.addEventListener("click", Potter);
q2a1.addEventListener("click", Q2disable);
q2a2.addEventListener("click", Q2disable);

q3a1.addEventListener("click", Dumbledore);
q3a2.addEventListener("click", Potter);
q3a1.addEventListener("click", Q3disable);
q3a2.addEventListener("click", Q3disable);

restart.addEventListener("click", restartQuiz);

function Dumbledore() {
  Albus++;
  numQ++;
  console.log("Albus: " + Albus + " Harry: " + Harry);
  console.log(numQ + " questions have been answered.");
  if (numQ == 3) {
    console.log("The quiz is complete");
    updateResult();
  }

}


function Potter() {
  Harry++;
  numQ++;
  console.log("Albus: " + Albus + " Harry: " + Harry);
  console.log(numQ + " questions have been answered.");
  if (numQ == 3) {
    console.log("The quiz is complete");
    updateResult();
  }
  
}


function updateResult() {
  if (Harry > 1) {
    result.innerHTML = "Your result is Harry Potter";
    console.log("Harry Potter");
  }
  else {
    result.innerHTML = "Your result is Albus Percival Wulfric Brian Dumbledore";
    console.log("Albus Dumbledore");
  }
}

function Q1disable() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
}

function Q2disable() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
}

function Q3disable() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
}

function restartQuiz() {
  Harry = 0;
  Albus = 0;
  numQ = 0;
  result.innerHTML = "Your result is... ";

  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
}