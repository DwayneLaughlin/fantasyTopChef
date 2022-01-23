let counterDwayne = 0;
let counterVanessa = 0;
let dwayneArray = []
let vanArray = []
const dwayneTotal = document.getElementById("dwaynescore");
const vanTotal = document.getElementById("vanscore");
const reset = document.getElementById("resetbutton")

// Dwayne's functions





// increment buttons
document.querySelectorAll(".quickFire").forEach((element) => {
  element.addEventListener("click", function () {
    counterDwayne++
    const number = counterDwayne.toString()
    dwayneArray.push(number)
    dwayneTotal.innerHTML = '' 
    dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length-1])
  });
});

document.querySelectorAll(".faveDish").forEach((element) => {
    element.addEventListener("click", function () {
        counterDwayne+=.5
        const number = counterDwayne.toString()
        dwayneArray.push(number)
        dwayneTotal.innerHTML = '' 
        dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length-1])
    });
  });

  document.querySelectorAll(".survived").forEach((element) => {
    element.addEventListener("click", function () {
        counterDwayne++
        const number = counterDwayne.toString()
        dwayneArray.push(number)
        dwayneTotal.innerHTML = '' 
        dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length-1])
    });
  });

  document.querySelectorAll(".wonElim").forEach((element) => {
    element.addEventListener("click", function () {
        counterDwayne+=2
        const number = counterDwayne.toString()
        dwayneArray.push(number)
        dwayneTotal.innerHTML = '' 
        dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length-1]);
    });
  });

  document.querySelectorAll(".judgeTable").forEach((element) => {
    element.addEventListener("click", function () {
        counterDwayne+=.5
        const number = counterDwayne.toString()
        dwayneArray.push(number)
        dwayneTotal.innerHTML = '' 
        dwayneTotal.append("Total: " + dwayneArray[dwayneArray.length-1])
    });
  });
// vanessa's functions
  document.querySelectorAll(".vanFire").forEach((element) => {
    element.addEventListener("click", function () {
        counterVanessa++
        const number = counterVanessa.toString()
        vanArray.push(number)
        vanTotal.innerHTML = '' 
        vanTotal.append("Total: " + vanArray[vanArray.length-1])
    });
  });

  document.querySelectorAll(".vanSurvival").forEach((element) => {
    element.addEventListener("click", function () {
        counterVanessa++
        const number = counterVanessa.toString()
        vanArray.push(number)
        vanTotal.innerHTML = '' 
        vanTotal.append("Total: " + vanArray[vanArray.length-1])
    });
  });

  document.querySelectorAll(".vanFave").forEach((element) => {
    element.addEventListener("click", function () {
        counterVanessa+=.5
        const number = counterVanessa.toString()
        vanArray.push(number)
        vanTotal.innerHTML = '' 
        vanTotal.append("Total: " + vanArray[vanArray.length-1])
    });
  });

  document.querySelectorAll(".vanElim").forEach((element) => {
    element.addEventListener("click", function () {
        counterVanessa+=2
        const number = counterVanessa.toString()
        vanArray.push(number)
        vanTotal.innerHTML = '' 
        vanTotal.append("Total: " + vanArray[vanArray.length-1])
    });
  });

  document.querySelectorAll(".vanJduge").forEach((element) => {
    element.addEventListener("click", function () {
        counterVanessa+.5
        const number = counterVanessa.toString()
        vanArray.push(number)
        vanTotal.innerHTML = '' 
        vanTotal.append("Total: " + vanArray[vanArray.length-1])
        });
    });
  

//   reset button
reset.addEventListener("click", function (){
    location.reload()
}
  
)