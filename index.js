document.addEventListener("DOMContentLoaded", () => {
    let ball = document.getElementById("ball");
    let table = document.getElementById("ping-pong-table");

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

        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) {
            dx = dx * -1;
        }

        if(ballY > table.offsetHeight - ball.offsetWidth || ballY <= 0) {
            dy = dy * -1;
        }


    }, 1);
})