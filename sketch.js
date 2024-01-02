let screen = document.querySelector("#screen");
let reset = document.querySelector(".reset");

reset.addEventListener("click", newSize);

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
                this.style.backgroundColor = 'black';
              };
            row.appendChild(square);
        }
        screen.appendChild(row);
    }
}

function newSize (){
    let size = prompt("How many squares per side? (100 max)")
    size = parseInt(size);
    drawGrid(size);
}

drawGrid();

