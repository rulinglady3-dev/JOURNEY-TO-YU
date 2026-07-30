/* =================================
        ONE LAST HUG - CATCH GAME
================================= */

let hugStarted = false;

let hugPlayerX = 0;

let hugYuX = 0;

let hugMoveLeft = false;

let hugMoveRight = false;

const hugPlayerSpeed = 11;

const hugYuSpeed = 5;


/* Oyunu başlat */

function startHugGame(){

    if(hugStarted) return;

    hugStarted = true;

    const player = document.getElementById("hugYou");

    const yu = document.getElementById("hugYu");

    if(!player || !yu) return;


    /* Oyuncu soldan başlar */

    hugPlayerX = window.innerWidth * 0.12;


    /* Kaçan kalp sağdan başlar */

    hugYuX = window.innerWidth * 0.82;


    player.style.left =

    hugPlayerX + "px";


    yu.style.left =

    hugYuX + "px";


    yu.style.right =

    "auto";

}


/* Oyunu güncelle */

function updateHugGame(){

    if(currentScene !== 6) return;

    startHugGame();


    const player =

    document.getElementById("hugYou");


    const yu =

    document.getElementById("hugYu");


    if(!player || !yu) return;


    /* Oyuncunun hareketi */

    if(hugMoveLeft){

        hugPlayerX -=

        hugPlayerSpeed;

    }


    if(hugMoveRight){

        hugPlayerX +=

        hugPlayerSpeed;

    }


    /* Oyuncu ekran dışına çıkmasın */

    if(hugPlayerX < 55){

        hugPlayerX = 55;

    }


    if(

    hugPlayerX >

    window.innerWidth - 55

    ){

        hugPlayerX =

        window.innerWidth - 55;

    }


    player.style.left =

    hugPlayerX + "px";


    /* Oyuncu hareket ederken eğilsin */

    if(hugMoveLeft){

        player.style.transform =

        "rotate(-10deg) scale(1.1)";

    }

    else if(hugMoveRight){

        player.style.transform =

        "rotate(10deg) scale(1.1)";

    }

    else{

        player.style.transform =

        "scale(1)";

    }


    /* =================================
            KAÇAN KALP
    ================================= */


    const distance =

    hugPlayerX -

    hugYuX;


    const absoluteDistance =

    Math.abs(distance);


    /* Çok yaklaşınca kalp kaçar */

    if(absoluteDistance < 300){

        if(distance < 0){

            /* Oyuncu soldaysa
            kaçan kalp sağa gider */

            hugYuX +=

            hugYuSpeed;

        }

        else{

            /* Oyuncu sağdaysa
            kaçan kalp sola gider */

            hugYuX -=

            hugYuSpeed;

        }

    }


    /* Kaçan kalp ekran dışına çıkmasın */

    if(hugYuX < 55){

        hugYuX = 55;

    }


    if(

    hugYuX >

    window.innerWidth - 55

    ){

        hugYuX =

        window.innerWidth - 55;

    }


    yu.style.left =

    hugYuX + "px";


    /* Kaçarken eğilsin */

    if(distance < 0){

        yu.style.transform =

        "rotate(10deg) scale(1.1)";

    }

    else{

        yu.style.transform =

        "rotate(-10deg) scale(1.1)";

    }


    /* Yakalanınca */

    if(absoluteDistance < 70){

        finishHugGame();

    }

}


/* =================================
            SARILMA
================================= */

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


    if(text){

        text.textContent =

        "You finally caught me 🤍";

    }


    /* İki kalbi birbirine yaklaştır */

    if(player){

        player.style.transition =

        "1s";

    }


    if(yu){

        yu.style.transition =

        "1s";

    }


    setTimeout(()=>{

        showScene(7);

    },2000);

}


/* =================================
          KLAVYE KONTROLLERİ
================================= */

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
