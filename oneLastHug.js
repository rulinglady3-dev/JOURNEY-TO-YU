/* =================================
           ONE LAST HUG
================================= */

let hugStarted = false;

let hugPlayerX = 0;

let hugMoveLeft = false;

let hugMoveRight = false;

const hugPlayerSpeed = 9;


/* Oyunu başlat */

function startHugGame(){

    if(hugStarted) return;

    hugStarted = true;

    const player = document.getElementById("hugYou");

    if(!player) return;

    hugPlayerX = window.innerWidth * 0.15;

    player.style.left = hugPlayerX + "px";

}


/* Oyuncuyu hareket ettir */

function updateHugGame(){

    if(currentScene !== 6) return;

    startHugGame();

    const player = document.getElementById("hugYou");

    const yu = document.getElementById("hugYu");

    if(!player || !yu) return;


    if(hugMoveLeft){

        hugPlayerX -= hugPlayerSpeed;

    }


    if(hugMoveRight){

        hugPlayerX += hugPlayerSpeed;

    }


    /* Ekranın dışına çıkmasın */

    if(hugPlayerX < 50){

        hugPlayerX = 50;

    }


    if(hugPlayerX > window.innerWidth - 50){

        hugPlayerX =
        window.innerWidth - 50;

    }


    player.style.left =
    hugPlayerX + "px";


    /* Hareket ederken eğilsin */

    if(hugMoveLeft){

        player.style.transform =

        "rotate(-10deg) scale(1.08)";

    }

    else if(hugMoveRight){

        player.style.transform =

        "rotate(10deg) scale(1.08)";

    }

    else{

        player.style.transform =

        "scale(1)";

    }


    /* İki kalp birbirine yaklaşınca */

    const playerBox =

    player.getBoundingClientRect();


    const yuBox =

    yu.getBoundingClientRect();


    const distance =

    Math.abs(

        playerBox.left -

        yuBox.left

    );


    if(distance < 100){

        finishHugGame();

    }

}


/* Sarılma */

function finishHugGame(){

    if(!hugStarted) return;

    hugStarted = false;


    const player =

    document.getElementById(

        "hugYou"

    );


    const yu =

    document.getElementById(

        "hugYu"

    );


    const text =

    document.getElementById(

        "hugText"

    );


    if(player){

        player.style.transition =

        "1s";

    }


    if(yu){

        yu.style.transition =

        "1s";

    }


    if(text){

        text.textContent =

        "You found me 🤍";

    }


    setTimeout(()=>{

        showScene(7);

    },2000);

}


/* Klavye kontrolleri */

window.addEventListener(

"keydown",

(e)=>{

    if(

    e.key === "ArrowLeft"

    ||

    e.key === "a"

    ){

        hugMoveLeft = true;

    }


    if(

    e.key === "ArrowRight"

    ||

    e.key === "d"

    ){

        hugMoveRight = true;

    }

});


window.addEventListener(

"keyup",

(e)=>{

    if(

    e.key === "ArrowLeft"

    ||

    e.key === "a"

    ){

        hugMoveLeft = false;

    }


    if(

    e.key === "ArrowRight"

    ||

    e.key === "d"

    ){

        hugMoveRight = false;

    }

});
