const canvas = document.getElementById("canvas")
const g = canvas.getContext("2d")


// for (let i = 0; i < 500; i++) {
//     Ball(Math.random()*800, Math.random()*600, 50 ,randomColor())
// }

//sky and ground
g.beginPath()
g.fillStyle = "darkblue"
g.strokeStyle = "darkblue"
g.moveTo(0, 0)
g.lineTo(800, 0)
g.lineTo(800, 400)
g.lineTo(0, 400)
g.lineTo(0, 0)
g.closePath()
g.fill()
g.stroke()

function LowerHalfBuilding(x, y) {
    g.fillStyle = "lightgray"
    g.strokeStyle = "gray"

    g.fillRect(x, y, 100, 100)
    g.strokeRect(x, y, 100, 100)
}

function Roof(x, y) {
    g.beginPath()
    g.fillStyle = "red"
    g.strokeStyle = "red"
    g.moveTo(x, y)
    g.lineTo(x - 25, y + 0)
    g.lineTo(x + 50, y - 50)
    g.lineTo(x + 125, y + 0)
    g.fill()
    g.stroke()
}


//Sneeuwpop
function Ball(x, y, size, kleur1, kleur2) {
    g.fillStyle = kleur1
    g.strokeStyle = kleur2
    g.beginPath()
    g.arc(x, y, size, 0, 2 * Math.PI)
    g.closePath()
    g.fill()
    g.stroke()
}

function KerstBall(x, y, size, kleur1, kleur2) {
    g.fillStyle = kleur1
    g.strokeStyle = kleur2
    g.beginPath()
    g.arc(x, y, size, 0, 2 * Math.PI)
    g.closePath()
    g.fill()
    g.stroke()
}
//TestBladerenKerstboom
function BladerenKerstboom(x, y) {
    g.beginPath()
    g.strokeStyle = "green"
    g.fillStyle = "green"
    g.moveTo(x, y)
    g.lineTo(x + 125, y + 0)
    g.lineTo(x - 0, y - 90)
    g.lineTo(x - 125, y + 0)
    g.closePath()
    g.fill()
    g.stroke()
}

//sneeuwvlokken
for (let i = 0; i < 100; i++) {
    Ball(Math.random() * 800, Math.random() * 600, 1, "white", "lightgray")
}
//House1
LowerHalfBuilding(500, 350)
Roof(500, 350)

//House2
LowerHalfBuilding(625, 375)
Roof(625, 375)

//House3
LowerHalfBuilding(700, 450)
Roof(700, 450)

//House4
LowerHalfBuilding(560, 500)

//House5
LowerHalfBuilding(450, 425)
Roof(450, 425)

//House4-Roof
Roof(560, 500)

//Sneeuwpop
//first-Ball-Snowman
Ball(100, 450, 75, "white", "lightgray")
//second-Ball-Snowman
Ball(100, 375, 65, "white", "lightgray")
//third-Ball-Snowman
Ball(100, 300, 55, "white", "lightgray")

//Sneeuwpop-Neus
g.beginPath()
g.strokeStyle = "orange"
g.fillStyle = "orange"
g.moveTo(95, 325)
g.lineTo(95, 300)
g.lineTo(145, 312)
g.fill()
g.stroke()

//Sneeuwpop-ogen
//first-eye-Snowman
Ball(80, 280, 5, "black", "black")
//second-eye-Snowman
Ball(120, 280, 5, "black", "black")

//buttens-Snowman
Ball(100, 375, 5, "black", "black")
Ball(100, 400, 5, "black", "black")
Ball(100, 425, 5, "black", "black")

//Maan
Ball(550, 140, 130, "gray", "lightgray")
Ball(500, 80, 35, "gray", "lightgray")
Ball(580, 60, 15, "gray", "lightgray")
Ball(615, 110, 25, "gray", "lightgray")
Ball(600, 200, 40, "gray", "lightgray")
Ball(500, 190, 30, "gray", "lightgray")

//sneeuwpop arms
g.beginPath()
g.strokeStyle = "brown"
g.fillStyle = "brown"
g.moveTo(150, 350)
g.lineTo(160, 360)
g.lineTo(200, 320)
g.lineTo(190, 310)
g.closePath()
g.fill()
g.stroke()

g.beginPath()
g.strokeStyle = "brown"
g.fillStyle = "brown"
g.moveTo(50, 360)
g.lineTo(60, 350)
g.lineTo(20, 315)
g.lineTo(10, 330)
g.closePath()
g.fill()
g.stroke()

//sneeuwvlokken
for (let i = 0; i < 100; i++) {
    Ball(Math.random() * 800, Math.random() * 600, 3, "white", "lightgray")
}
//KerstBoomStam
g.beginPath()
g.strokeStyle = "brown"
g.fillStyle = "brown"
g.moveTo(275, 550)
g.lineTo(325, 550)
g.lineTo(325, 250)
g.lineTo(275, 250)
g.closePath()
g.fill()
g.stroke()

BladerenKerstboom(300, 505)
BladerenKerstboom(300, 465)
BladerenKerstboom(300, 425)
BladerenKerstboom(300, 385)
BladerenKerstboom(300, 345)
BladerenKerstboom(300, 305)

for (let i = 0; i < 20; i++) {
    let x = 300 + (Math.random() * 150 - 75)
    let y = 250 + (Math.random() * 220)
    let size = Math.random() * 10 + 8
    KerstBall(x, y, size, randomColor(), "black");
}
function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}
//sneeuwvlokken
for (let i = 0; i < 100; i++) {
    Ball(Math.random() * 800, Math.random() * 600, 5, "white", "lightgray")
}
//sneeuwvlokken-Randomizer(positie)


//EXTRA
//Kerstman met slee voor de maan. dus de Kerstman met slee helemaal zwart.
//sterren
//iets met lampjes om de vloer mee op te lichten.
//Huisjes mooier maken