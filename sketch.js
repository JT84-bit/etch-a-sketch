let screen = document.querySelector("#screen")

function drawGrid (number = 16){
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


drawGrid();

