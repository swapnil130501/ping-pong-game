document.addEventListener("DOMContentLoaded", () => {
    let ball = document.getElementById("ball");
    let table = document.getElementById("ping-pong-table");
    let paddle = document.getElementById("paddle");

    let ballX = 10; // dist of the top of the ball w.r.t to the ping pong table
    let ballY = 10; // dist of the left of the ball w.r.t to the ping pong table

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    let dx = 2;
    let dy = 2;

    setInterval(function exec() {
       
        ballX += dx;
        ballY += dy;

        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;

        // if(ballX > 700 - 20 || ballX <= 0) { // 700 - 20 (width of the ball div)
        //     dx = dx * -1;
        // }

        // if(ballY > 400 - 20 || ballY <= 0) { // 400 - 20 (width of the ball div)
        //     dy = dy * -1;
        // }

        /** 
        collision logic
        ballX < paddle.offsetLeft + paddle.offsetWidth -> if left(wrt to table) of the ball < right(wrt to table) of the paddle
        ballY > paddle.offsetTop -> if top (wrt to table) of ball > top of paddle ball within the paddle region upar se
        ballY - ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight -> ball within the paddle region neche se
        ballY + ball.offsetHeight -> bottom of the ball
        paddle.offsetTop + paddle.offsetHeight -> bottom of the paddle
        */

        if(ballX < paddle.offsetLeft + paddle.offsetWidth && 
            ballY > paddle.offsetTop && 
            ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight) {
            dx = dx * -1;
        }

        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) {
            dx = dx * -1;
        }

        if(ballY > table.offsetHeight - ball.offsetWidth || ballY <= 0) {
            dy = dy * -1;
        }

    }, 1);

    let paddleY = 0;
    let dpy = 5;
    document.addEventListener('keydown', (event) => {
        event.preventDefault();

        if(event.keyCode === 38 && paddleY > 0) {
            paddleY += (-1) * dpy;
        }

        else if(event.keyCode === 40 && paddleY < table.offsetHeight - paddle.offsetHeight) {
            paddleY += dpy;
        }

        paddle.style.top = `${paddleY}px`
    });

    document.addEventListener('mousemove', (event) => {
        if(event.clientX > table.offsetLeft + table.offsetWidth / 2) {
            return;
        }
        
        let mouseY = event.clientY;
        let distOfTableFromTop = table.offsetTop;
        let mousePointControl = mouseY - distOfTableFromTop - paddle.offsetHeight / 2;
        paddleY = mousePointControl
        if(paddleY <= 0 || paddleY > table.offsetHeight - paddle.offsetHeight) {
            return;
        }

        paddle.style.top = `${paddleY}px`
    })
})