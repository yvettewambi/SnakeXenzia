let lastTime = 0
const snakeSpeed = 2

function main(currentTime) {
    const secondSince = (currentTime-lastTime) /1000
    secondSince < 1/snakeSpeed
    window.requestAnimationFrame(main)
    lastTime = currentTime
}