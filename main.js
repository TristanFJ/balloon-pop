let clickCount = 0
let height = 120
let width = 100
let inflationRate = 20
let maxSize = 150
let popCount = 0

function inflate (){
    clickCount++
    let balloonElement = document.getElementById("balloon")
    height += inflationRate
    width += inflationRate
    
    if(height >= maxSize) {
    console.log("pop")  
    popCount++
    height = 0
    width = 0  
    document.getElementById('popCount').innerText = popCount
    }

    balloonElement.style.height = height + "px"
    balloonElement.style.width = width + "px"

    let clickCountElem = document.getElementById("clickCount")
    clickCountElem.innerText = clickCount.toString()
}
