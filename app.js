let counterDwayne = 0;
let counterVanessa = 0;
let array = []

// Dwayne's functions
const dwayneTotal = document.getElementById("dwaynescore");




// increment buttons
document.querySelectorAll(".quickFire").forEach((element) => {
  element.addEventListener("click", function () {
    counterDwayne+=2
    const number = counterDwayne.toString()
    const currentNum = document.createTextNode(number)
    array.push(number)
    dwayneTotal.innerHTML = '' 
    dwayneTotal.append(array[array.length-1])
    
    
    console.log(counterDwayne);
  });
});

document.querySelectorAll(".faveDish").forEach((element) => {
    element.addEventListener("click", function () {
      alert("faveDish");
    });
  });

  document.querySelectorAll(".survived").forEach((element) => {
    element.addEventListener("click", function () {
      alert("survived");
    });
  });

  document.querySelectorAll(".wonElim").forEach((element) => {
    element.addEventListener("click", function () {
      alert("wonElim");
    });
  });

  document.querySelectorAll(".judgeTable").forEach((element) => {
    element.addEventListener("click", function () {
      alert("judgeTable");
    });
  });
// vanessa's functions
  document.querySelectorAll(".vanFire").forEach((element) => {
    element.addEventListener("click", function () {
      alert("hey Vanessa");
    });
  });

  document.querySelectorAll(".vanFire").forEach((element) => {
    element.addEventListener("click", function () {
      alert("hey Vanessa");
    });
  });

  document.querySelectorAll(".vanJduge").forEach((element) => {
    element.addEventListener("click", function () {
      alert("Judge's table Vaness ");
    });
  });