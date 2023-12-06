function changeColor(squareId) {
    var square = getElementById("squareId");
    var randomColor =  getRandomColor;
    documdocument.body.style.backgroundColor = rand
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = "#";
    for ( var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}