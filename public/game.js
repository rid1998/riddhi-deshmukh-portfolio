let Points = [];
var RoundComplete = true;
var gameInterval;
var ctx;
var counter;


function readPoints(event) {
    canvas = document.getElementById("myCanvas");
    let bound = canvas.getBoundingClientRect();
    let x = event.clientX - bound.left;
    let y = event.clientY - bound.top;

    if (Points.length < 4) {
        Points.push([x, y]);
        // console.log(Points);
    }
    else{
        alert("you have already captured 4 points");
    }
};

function startFunction(){
    canvas = document.getElementById("myCanvas");
    setInterval(() => {createShapes()}, 500);

}

function stopFunction(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Points = [];
    location.reload();
}

async function createShapes() {
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 5; i <= 20; i++) {
        setInterval(function () {
            counter = i;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawCircle(Points[0]);
            drawTriangle(Points[1]);
            drawHalfCricle(Points[2]);
            drawRectangle(Points[3]);


        }, 300 * i)
    }
}

function drawRectangle(coords) {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d')
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.rect(coords[0], coords[1], counter, counter * counter);
    ctx.fillStyle = 'lightblue';
    ctx.fill();
    ctx.stroke();
}

function drawCircle(coords) {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d')
    ctx.beginPath();
    ctx.strokeStyle = 'black'
    ctx.arc(coords[0], coords[1], counter, 0, 2 * Math.PI);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke();
}

// function drawSquare(coords) {
//     canvas = document.getElementById("myCanvas");
//     ctx = canvas.getContext('2d')
//     ctx.beginPath();
//     ctx.strokeStyle = "black";
//     ctx.rect(coords[0], coords[1], counter, counter);
//     ctx.fillStyle = 'black';
//     ctx.fill();
//     ctx.stroke();
// }


function drawTriangle(coords) {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(coords[0], coords[1])
    ctx.lineTo(coords[0] + counter, coords[1])
    ctx.lineTo(coords[0] + counter, coords[1] + counter * counter)
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawHalfCricle(coords) {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d')
    ctx.beginPath();
    ctx.arc(coords[0], coords[1], counter, 0, Math.PI,false);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.strokeStyle = 'black'
    ctx.stroke();
}
