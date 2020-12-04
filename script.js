const dino = document.querySelector('.dino');
let isJumping = false;

function handleKeyup(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump () {
    let position = 0;

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 200) {
            clearInterval(upInterval);

            //Descendo
            let downIntervale = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downIntervale);
                    isJumping = false;
                }else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        }else {
            //Subindo
        position += 20;

        dino.style.bottom = position + 'px';
        }
    }, 20);
}

document.addEventListener("keyup", handleKeyup);