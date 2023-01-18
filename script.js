// only starts when loading page
window.onload = function () {
    // variables
    // stage
    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);

    // increase or decrease velocity
    setInterval(game, 100);

    // velocity
    const vel = 1;

    // starting velocity
    var vx = vy = 0;

    // snake head starting position
    var px = 10;
    var py = 15;

    // length part
    var tp = 30;

    // quantity part
    var qp = 20;

    // apple starting position
    var ax = ay = 15

    // snake body/trail
    var trail = []
    tail = 5

    function game() {
        px += vx
        py += vy

        // If you hit the wall, the snake will come back the other way
        if (px < 0) {
            px = qp - 1
        }
        if (px > qp - 1) {
            px = 0
        }
        if (py < 0) {
            py = qp - 1
        }
        if (py > qp - 1) {
            py = 0
        }

        // to paint stage
        ctx.fillStyle = "white"

        // creating rectangular stage
        ctx.fillRect(0, 0, stage.width, stage.height)

        // to paint apple
        ctx.fillStyle = "red"
        ctx.fillRect(ax * tp, ay * tp, tp, tp)

        // to paint snake
        ctx.fillStyle = "green"

        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp - 1, tp - 1)
            // check if it's hitting the tail
            if (trail[i].x == px && trail[i].y == py) {
                vx = vy = 0
                tail = 5
            }
        }

        trail.push({ x: px, y: py })
        while (trail.length > tail) {
            trail.shift()
        }

        if (ax == px && ay == py) {
            tail++
            ax = Math.floor(Math.random() * qp)
            ay = Math.floor(Math.random() * qp)
        }

    }

    function keyPush(event) {

        switch (event.keyCode) {
            case 37: // left
                vx = -vel
                vy = 0
                break

            case 38: // up
                vx = 0
                vy = -vel
                break

            case 39: // right
                vx = vel
                vy = 0
                break

            case 40: // down
                vx = 0
                vy = vel
                break

            default:

                break
        }
    }

    // funcionalidade dos botões
    var btnCima = document.querySelector('.praCima')
    var btnEsquerda = document.querySelector('.praEsquerda')
    var btnDireita = document.querySelector('.praDireita')
    var btnBaixo = document.querySelector('.praBaixo')

    btnCima.addEventListener('click', () => {
        vx = 0
        vy = -vel
    })

    btnEsquerda.addEventListener('click', () => {
        vx = -vel
        vy = 0
    })

    btnDireita.addEventListener('click', () => {
        vx = vel
        vy = 0
    })

    btnBaixo.addEventListener('click', () => {
        vx = 0
        vy = vel
    })

    // document.onkeydown = checkKey;
    // function checkKey(e) {
    //     e = e || window.event;
    //     if (e.keyCode == '38') {
    //         // up arrow
    //     }
    //     else if (e.keyCode == '40') {
    //         // down arrow
    //     }
    //     else if (e.keyCode == '37') {
    //        // left arrow
    //     }
    //     else if (e.keyCode == '39') {
    //        // right arrow
    //     }
    // }

}