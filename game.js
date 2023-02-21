import {update as updateSnake, draw as drawSnake, snakeSpeed} from './snake'
let lastTime = 0

function main(currentTime) {
    const secondSince = (currentTime-lastTime) /1000
    if (secondSince < 1/snakeSpeed) return
    window.requestAnimationFrame(main)
    lastTime = currentTime

    update()

    draw()
}

function update(){
    updateSnake()


}

function draw() {
    drawSnake()

}