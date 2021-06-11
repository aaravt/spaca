var canvas =  document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
roverx=10
rovery=10


function add() {
    bg=new Image()
    bg.src="mars.jpg"
    bg.onload=drawbg
    
    rover=new Image()
    rover.src="rover.png"
    rover.onload=drawrover
}

function drawrover() {
    ctx.drawImage(rover,roverx,rovery,100,100)
}



function drawbg() {
 ctx.drawImage(bg,0,0,canvas.width,canvas.height)   
}

window.addEventListener("keydown" , kd)
function kd(e) {
    keynumber=e.keyCode
    console.log(keynumber)
    if (keynumber==37) {
        console.log("left is pressed")
        left()
    }
    if (keynumber==38) {
        console.log("up is pressed")
        up()
    }
    if (keynumber==39) {
        console.log("right is pressed")
        right()
    }
    if (keynumber==40) {
        console.log("down is pressed")
        down()
    }
}
function down() {
    if (rovery<=500) {
    rovery=rovery+10
    drawbg()
    drawrover()
    }
}
function up() {
    if (rovery>=0) {
        rovery=rovery-10
        drawbg()
        drawrover()
    }
}
function left() {
    if (roverx>=0) {
        roverx=roverx-10
        drawbg()
        drawrover()
    }
}
function right() {
    if (roverx<=700) {
        roverx=roverx+10
        drawbg()
        drawrover()
    }
}