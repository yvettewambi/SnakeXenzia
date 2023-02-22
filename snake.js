const snakeSpeed = 2
const snakeBody = [{x : 11, y:11}]

export function update(){


}

export function draw(board) {
    snakeBody.forEach(seg =>{
        const snakeEl = document.createElement('div')
        snakeEl.style.gridRowStart = seg.x
        snakeEl.style.gridColumnStart = seg.y
        board.appendChild(snakeEl)
    })
}