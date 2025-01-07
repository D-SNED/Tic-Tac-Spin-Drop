const squares = document.querySelectorAll('.square');

init();
function init() {
    squares.forEach(function handleSquareClick (square) {
        square.addEventListener("click", squareClicked());
    })
}

function squareClicked() {
    const squareIndex = this.getAttribute('id');

    console.log(squareIndex);
}
