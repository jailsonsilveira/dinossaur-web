const dino = document.querySelector(".dino");
const background = document.querySelector(".background");

let isJumping = false;
let position = 0;

const jump = () => {
    isJumping = true;
    let upInterval = setInterval(()=>{
        if(position >= 200){
            clearInterval(upInterval)

            let downInterval = setInterval(()=>{
                if(position <= 0){
                    clearInterval(downInterval)
                    isJumping = false;
                } else {
                    position -= 10;
                    dino.style.bottom = position + 'px'
                }
                
            }, 20)

        } else {
            position += 10;
            dino.style.bottom = position + 'px'
        }

    }, 20)
}

const createCactus = () => {
    cactusPosition = 1000;
    const cactus = document.createElement("div");
    cactus.classList.add("cactus")
    background.appendChild(cactus);
    let randomTime = Math.random() * 6000;


    cactus.style.left = cactusPosition + 'px'
    let leftInterval = setInterval(() => {
        if(cactusPosition <= -60){
            clearInterval(leftInterval);
            background.removeChild(cactus)
        } else if (cactusPosition >= 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = "<h1> Game over </h1>"
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px'
        }    
    }, 20);

    


    setTimeout(createCactus, randomTime)
}
const handleKeyUp = (ev) => {
    if(ev.keyCode == 32){
        console.log("Pressed jump");
        if(!isJumping)
            jump()
    }
}

createCactus();
document.addEventListener("keyup", handleKeyUp)




