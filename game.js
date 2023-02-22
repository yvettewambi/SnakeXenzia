import {update as updateSnake, draw as drawSnake, snakeSpeed} from './snake'
let lastTime = 0
const board = document.getElementById('board')

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondSince = (currentTime-lastTime) /1000
    if (secondSince < 1/snakeSpeed) return
    
    lastTime = currentTime

    update()

    draw()
}

function update(){
    updateSnake()


}

function draw() {
    drawSnake(board)

}