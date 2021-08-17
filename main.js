let startButton = document.getElementById('start-button')
let inflateButton = document.getElementById('inflate-button')

let clickCount = 0
let height = 120
let width = 100
let inflationRate = 20
let maxSize = 300
let popCount = 0
let gameLength = 5000
let clockId = 0

function startGame() {

    startButton.setAttribute('disabled', true)
    inflateButton.removeAttribute('disabled')
    startClock()
    setTimeout(stopGame, gameLength)
}

function startClock() {
    clockId = setInterval(drawClock, 1000)
}

function stopClock() {
    clearInterval(clockId)
}

function inflate (){
    clickCount++
    height += inflationRate
    width += inflationRate
    
    if(height >= maxSize) {
    console.log("POP")  
    popCount++
    height = 0
    width = 0  
}
draw()
}

function draw() {
    let clickCountElem = document.getElementById("click-count")
    let balloonElement = document.getElementById("balloon")
    let popCountElem = document.getElementById("pop-count")

    balloonElement.style.height = height + "px"
    balloonElement.style.width = width + "px"
    
    clickCountElem.innerText = clickCount.toString()
    popCountElem.innerText = popCount.toString()
}

function stopGame() {
    alert("GAME OVER")
    
    inflateButton.setAttribute('disabled', true)
    startButton.removeAttribute('disabled')

    clickCount = 0
    popCount = 0
    height = 120
    width = 100
    draw()
}
