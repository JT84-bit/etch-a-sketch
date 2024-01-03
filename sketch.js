//All buttons and drawingscreen
let screen = document.querySelector("#screen");
let reset = document.querySelector(".reset");
let black = document.querySelector(".black")
let colorful = document.querySelector(".colorful") 



//Draws grid of squares on "screen"
function drawGrid (number = 16){
    while(screen.firstChild){
        screen.removeChild(screen.lastChild);
    }

    for(let i = 1; i <= number; i++){
        let row = document.createElement("div");
        for(let i = 1; i <= number; i++){
            let square = document.createElement('div');
            square.classList.add('square');
            square.onmouseover = function() {
                this.style.backgroundColor = "black";
              };
            row.appendChild(square);
        }
        screen.appendChild(row);
    }
}

//On reset asks user for new size for screen
function newSize (){
    let askAgain = true;
    while(askAgain){
        let size = prompt("How many squares per side? (100 max)")
        size = parseInt(size);
        
        if(isNaN(size) || size <= 0 || size > 100){
            alert("Not valid input.")
            continue;
        }

        drawGrid(size);
        askAgain = false;
    }
};


//Gives random color when using "Colorful" button
function RGBcolor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    let randomcolor = "rgb(" + R + "," + G + "," + B + ")";  
    
    return randomcolor;
  }


//Gives all squares random colors when "colorful" button is used
const colorfulMode = () => {
    
    let allSquares = document.querySelectorAll(".square")
    allSquares.forEach(element => {
        element.onmouseover = function() {
            this.style.backgroundColor = RGBcolor();
          };
    });
}


//Gives all squares black colors when "black" button is used
const blackMode = () => {
    let allSquares = document.querySelectorAll(".square")
    allSquares.forEach(element => {
        element.onmouseover = function() {
            this.style.backgroundColor = 'black';
          };
    });
}


black.addEventListener("click", blackMode);
colorful.addEventListener("click", colorfulMode);
reset.addEventListener("click", newSize);


drawGrid();

