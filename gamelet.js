const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let position = 0;
let yPosition = 0;
function handleKeyPress(e) {
    if (e.code === 'ArrowLeft'){
        position = position - 20;
    }
    if (e.code === 'ArrowRight'){
        position = position + 20;
    }
    if (position < 0){
        position = 0;
    }
    if (e.code === 'ArrowUp'){
        yPosition = yPosition - 20;
    }
    if (e.code === "ArrowDown"){
        yPosition = yPosition + 20;
    }
    if (yPosition < 0 ){
        yPosition = 0;
    }

    refresh();
}

function refresh(){
    ball.style.top = yPosition + 'px';
    ball.style.left = position + 'px';
}
