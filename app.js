let counterDwayne = 0;
let counterVanessa = 0;
let dwayneArray = [];
let vanArray = [];

const dwayneTotal = document.getElementById("dwaynescore");
const vanTotal = document.getElementById("vanscore");
const reset = document.getElementById("resetbutton");

const vanFinal = document.getElementById("finalsvan");
const lastChanceVan = document.getElementById("lastchancevan");
const winnerVan = document.getElementById("winnervan");
const undoFinalVan = document.getElementById("undofinalsvan");
const undoLastVan = document.getElementById("undolastchancevan");
const undoWinnerVan = document.getElementById("undowinnervan");

const final = document.getElementById("finals");
const lastChance = document.getElementById("lastchance");
const winner = document.getElementById("winner");
const undoFinals = document.getElementById("undofinals");
const undoLastChance = document.getElementById("undolastchance");
const undowinner = document.getElementById("undowinner");

// Dwayne's functions
// ----------------------------------------------------------------
document.querySelectorAll(".quickFire").forEach((element) => {
  element.addEventListener("click", function () {
    counterDwayne++;
    const number = counterDwayne.toString();
    dwayneArray.push(number);
    dwayneTotal.innerHTML = "";
    dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
  });
});

document.querySelectorAll(".undoquickfire").forEach((element) => {
  element.addEventListener("click", function () {
    counterDwayne--;
    const number = counterDwayne.toString();
    dwayneArray.push(number);
    dwayneTotal.innerHTML = "";
    dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
  });
});

document.querySelectorAll(".faveDish").forEach((element) => {
  element.addEventListener("click", function () {
    counterDwayne += 0.5;
    const number = counterDwayne.toString();
    dwayneArray.push(number);
    dwayneTotal.innerHTML = "";
    dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
  });
});

document.querySelectorAll(".undoFaveDish").forEach((element) => {
  element.addEventListener("click", function () {
    counterDwayne -= 0.5;
    const number = counterDwayne.toString();
    dwayneArray.push(number);
    dwayneTotal.innerHTML = "";
    dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
  });
});

document.querySelectorAll(".survived").forEach((element) => {
  element.addEventListener("click", function () {
    counterDwayne++;
    const number = counterDwayne.toString();
    dwayneArray.push(number);
    dwayneTotal.innerHTML = "";
    dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
  });
});

document.querySelectorAll(".undoSurvived").forEach((element) => {
  element.addEventListener("click", function () {
    counterDwayne--;
    const number = counterDwayne.toString();
    dwayneArray.push(number);
    dwayneTotal.innerHTML = "";
    dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
  });
});

document.querySelectorAll(".wonElim").forEach((element) => {
  element.addEventListener("click", function () {
    counterDwayne += 2;
    const number = counterDwayne.toString();
    dwayneArray.push(number);
    dwayneTotal.innerHTML = "";
    dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
  });
});

document.querySelectorAll(".undoWonElim").forEach((element) => {
  element.addEventListener("click", function () {
    counterDwayne -= 2;
    const number = counterDwayne.toString();
    dwayneArray.push(number);
    dwayneTotal.innerHTML = "";
    dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
  });
});

document.querySelectorAll(".judgeTable").forEach((element) => {
  element.addEventListener("click", function () {
    counterDwayne += 0.5;
    const number = counterDwayne.toString();
    dwayneArray.push(number);
    dwayneTotal.innerHTML = "";
    dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
  });
});

document.querySelectorAll(".undoJudgeTable").forEach((element) => {
  element.addEventListener("click", function () {
    counterDwayne -= 0.5;
    const number = counterDwayne.toString();
    dwayneArray.push(number);
    dwayneTotal.innerHTML = "";
    dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
  });
});

final.addEventListener("click", function () {
  counterDwayne += 5;
  const number = counterDwayne.toString();
  dwayneArray.push(number);
  dwayneTotal.innerHTML = "";
  dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
});

lastChance.addEventListener("click", function () {
  counterDwayne += 2;
  const number = counterDwayne.toString();
  dwayneArray.push(number);
  dwayneTotal.innerHTML = "";
  dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
});

winner.addEventListener("click", function () {
  counterDwayne += 5;
  const number = counterDwayne.toString();
  dwayneArray.push(number);
  dwayneTotal.innerHTML = "";
  dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
});

undoFinals.addEventListener("click", function () {
  counterDwayne -= 5;
  const number = counterDwayne.toString();
  dwayneArray.push(number);
  dwayneTotal.innerHTML = "";
  dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
});

undoLastChance.addEventListener("click", function () {
  counterDwayne -= 2;
  const number = counterDwayne.toString();
  dwayneArray.push(number);
  dwayneTotal.innerHTML = "";
  dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
});

undowinner.addEventListener("click", function () {
  counterDwayne -= 5;
  const number = counterDwayne.toString();
  dwayneArray.push(number);
  dwayneTotal.innerHTML = "";
  dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length - 1]);
});

// vanessa's functions
// ----------------------------------------------------------------
// increment Buttons
document.querySelectorAll(".vanFire").forEach((element) => {
  element.addEventListener("click", function () {
    counterVanessa++;
    const number = counterVanessa.toString();
    vanArray.push(number);
    vanTotal.innerHTML = "";
    vanTotal.append("Total: " + vanArray[vanArray.length - 1]);
  });
});

document.querySelectorAll(".undo1").forEach((element) => {
  element.addEventListener("click", function () {
    counterVanessa--;
    const number = counterVanessa.toString();
    vanArray.push(number);
    vanTotal.innerHTML = "";
    vanTotal.append("Total: " + vanArray[vanArray.length - 1]);
  });
});

document.querySelectorAll(".vanSurvival").forEach((element) => {
  element.addEventListener("click", function () {
    counterVanessa++;
    const number = counterVanessa.toString();
    vanArray.push(number);
    vanTotal.innerHTML = "";
    vanTotal.append("Total: " + vanArray[vanArray.length - 1]);
  });
});

document.querySelectorAll(".undoSurvivedVan").forEach((element) => {
  element.addEventListener("click", function () {
    counterVanessa--;
    const number = counterVanessa.toString();
    vanArray.push(number);
    vanTotal.innerHTML = "";
    vanTotal.append("Total: " + vanArray[vanArray.length - 1]);
  });
});

document.querySelectorAll(".vanFave").forEach((element) => {
  element.addEventListener("click", function () {
    counterVanessa += 0.5;
    const number = counterVanessa.toString();
    vanArray.push(number);
    vanTotal.innerHTML = "";
    vanTotal.append("Total: " + vanArray[vanArray.length - 1]);
  });
});

document.querySelectorAll(".undoFaveDishVan").forEach((element) => {
  element.addEventListener("click", function () {
    counterVanessa -= 0.5;
    const number = counterVanessa.toString();
    vanArray.push(number);
    vanTotal.innerHTML = "";
    vanTotal.append("Total: " + vanArray[vanArray.length - 1]);
  });
});

document.querySelectorAll(".vanElim").forEach((element) => {
  element.addEventListener("click", function () {
    counterVanessa += 2;
    const number = counterVanessa.toString();
    vanArray.push(number);
    vanTotal.innerHTML = "";
    vanTotal.append("Total: " + vanArray[vanArray.length - 1]);
  });
});

document.querySelectorAll(".undoWonElimVan").forEach((element) => {
   
  element.addEventListener("click", function () {
    counterVanessa -= 2;
    const number = counterVanessa.toString();
    vanArray.push(number);
    vanTotal.innerHTML = "";
    vanTotal.append("Total: " + vanArray[vanArray.length - 1]);
  });
});

document.querySelectorAll(".vanJduge").forEach((element) => {
  element.addEventListener("click", function () {
    counterVanessa += 0.5;
    const number = counterVanessa.toString();
    vanArray.push(number);
    vanTotal.innerHTML = "";
    vanTotal.append("Total: " + vanArray[vanArray.length - 1]);
  });
});

document.querySelectorAll(".undoJudgeTableVan").forEach((element) => {
  element.addEventListener("click", function () {
    counterVanessa -= 0.5;
    const number = counterVanessa.toString();
    vanArray.push(number);
    vanTotal.innerHTML = "";
    vanTotal.append("Total: " + vanArray[vanArray.length - 1]);
  });
});

vanFinal.addEventListener("click", function () {
  counterVanessa += 5;
  const number = counterVanessa.toString();
  vanArray.push(number);
  vanTotal.innerHTML = "";
  vanTotal.append("Total: " + vanArray[vanArray.length - 1]);
});

lastChanceVan.addEventListener("click", function () {
  counterVanessa += 2;
  const number = counterVanessa.toString();
  vanArray.push(number);
  vanTotal.innerHTML = "";
  vanTotal.append("Total: " + vanArray[vanArray.length - 1]);
});

winnerVan.addEventListener("click", function () {
  counterVanessa += 5;
  const number = counterVanessa.toString();
  vanArray.push(number);
  vanTotal.innerHTML = "";
  vanTotal.append("Total: " + vanArray[vanArray.length - 1]);
});

undoFinalVan.addEventListener("click", function () {
  counterVanessa -= 5;
  const number = counterVanessa.toString();
  vanArray.push(number);
  vanTotal.innerHTML = "";
  vanTotal.append("Total: " + vanArray[vanArray.length - 1]);
});

undoLastVan.addEventListener("click", function () {
  counterVanessa -= 2;
  const number = counterVanessa.toString();
  vanArray.push(number);
  vanTotal.innerHTML = "";
  vanTotal.append("Total: " + vanArray[vanArray.length - 1]);
});

undoWinnerVan.addEventListener("click", function () {
    if (counterVanessa <= 0) {undoWinnerVan.disabled = true} 
    else
  {console.log(counterVanessa)
    undoWinnerVan.disabled = false
      counterVanessa -= 5;
  const number = counterVanessa.toString();
  vanArray.push(number);
  vanTotal.innerHTML = "";
  vanTotal.append("Total: " + vanArray[vanArray.length - 1]);}
});

//   reset button
reset.addEventListener("click", function () {
  location.reload();
});
