document.addEventListener('DOMContentLoaded', () => {
    const ball = document.getElementById('ball');
    const startBtn = document.getElementById('start-btn');

    startBtn.addEventListener('click', () => {
        moveBallRandomly();
        setInterval(moveBallRandomly, 800);
    });

    function moveBallRandomly() {
        const maze = document.getElementById('maze');
        const maxX = maze.clientWidth - ball.offsetWidth;
        const maxY = maze.clientHeight - ball.offsetHeight;
        const randX = Math.floor(Math.random() * maxX);
        const randY = Math.floor(Math.random() * maxY);
        ball.style.transform = `translate(${randX}px, ${randY}px)`;
    }
});
