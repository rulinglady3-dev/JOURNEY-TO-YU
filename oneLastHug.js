/* =================================
       ONE LAST HUG - CATCH GAME
================================= */

let hugStarted = false;

let hugTouches = 0;

const hugMessages = [

    "Almosttt, YUUU",

    "Catch me if you can",

    "Catchh meee",

    "One more timee... 💕"

];

/* Senin kontrol ettiğin kalp */

let hugPlayerX = 0;
let hugPlayerY = 0;

/* Kaçan kalp */

let hugYuX = 0;
let hugYuY = 0;

let hugYuVelocityX = 3.2;
let hugYuVelocityY = 2.5;


/* Hareket tuşları */

let hugMoveLeft = false;
let hugMoveRight = false;
let hugMoveUp = false;
let hugMoveDown = false;


/* Hızlar */

const hugPlayerSpeed = 10;

const hugYuSpeed = 4;


/* =================================
           OYUNU BAŞLAT
================================= */

function startHugGame(){

    if(hugStarted) return;

    hugStarted = true;

    hugTouches = 0;


    const player =
    document.getElementById("hugYou");

    const yu =
    document.getElementById("hugYu");


    if(!player || !yu) return;


    /* Senin kalbin */

    hugPlayerX =
    window.innerWidth * 0.15;

    hugPlayerY =
    window.innerHeight * 0.72;


    /* Kaçan kalp */

    hugYuX =
    window.innerWidth * 0.75;

    hugYuY =
    window.innerHeight * 0.35;


    player.style.left =
    hugPlayerX + "px";

    player.style.top =
    hugPlayerY + "px";

    player.style.bottom =
    "auto";


    yu.style.left =
    hugYuX + "px";

    yu.style.top =
    hugYuY + "px";

    yu.style.right =
    "auto";

    yu.style.bottom =
    "auto";

}


/* =================================
          OYUNU GÜNCELLE
================================= */

function updateHugGame(){

    if(currentScene !== 6) return;


    startHugGame();


    const player =
    document.getElementById("hugYou");

    const yu =
    document.getElementById("hugYu");


    if(!player || !yu) return;


    /* =========================
       SENİN KALBİN
    ========================= */


    if(hugMoveLeft){

        hugPlayerX -=
        hugPlayerSpeed;

    }


    if(hugMoveRight){

        hugPlayerX +=
        hugPlayerSpeed;

    }


    if(hugMoveUp){

        hugPlayerY -=
        hugPlayerSpeed;

    }


    if(hugMoveDown){

        hugPlayerY +=
        hugPlayerSpeed;

    }


    /* Ekranın dışına çıkmasın */

    hugPlayerX = Math.max(

        40,

        Math.min(

            window.innerWidth - 100,

            hugPlayerX

        )

    );


    hugPlayerY = Math.max(

        150,

        Math.min(

            window.innerHeight - 110,

            hugPlayerY

        )

    );


    player.style.left =
    hugPlayerX + "px";

    player.style.top =
    hugPlayerY + "px";


    /* Hareket ederken eğilsin */

    if(hugMoveLeft){

        player.style.transform =

        "rotate(-12deg) scale(1.08)";

    }

    else if(hugMoveRight){

        player.style.transform =

        "rotate(12deg) scale(1.08)";

    }

    else{

        player.style.transform =

        "scale(1)";

    }


    /* =========================
          KAÇAN KALP
    ========================= */


    /* Sürekli dolaş */

    hugYuX +=
    hugYuVelocityX;

    hugYuY +=
    hugYuVelocityY;


    /* Duvarlara çarpınca yön değiştir */

    if(

        hugYuX < 30

        ||

        hugYuX >

        window.innerWidth - 100

    ){

        hugYuVelocityX *= -1;

    }


    if(

        hugYuY < 160

        ||

        hugYuY >

        window.innerHeight - 110

    ){

        hugYuVelocityY *= -1;

    }


    /* Sen yaklaşınca hızlansın */

    const distanceX =

    hugPlayerX -

    hugYuX;


    const distanceY =

    hugPlayerY -

    hugYuY;


    const distance =

    Math.sqrt(

        distanceX *

        distanceX

        +

        distanceY *

        distanceY

    );


    if(distance < 300){

        /* Sana ters yönde kaç */

        if(distanceX < 0){

            hugYuVelocityX +=
            0.12;

        }

        else{

            hugYuVelocityX -=
            0.12;

        }


        if(distanceY < 0){

            hugYuVelocityY +=
            0.12;

        }

        else{

            hugYuVelocityY -=
            0.12;

        }

    }


    /* Kaçan kalbin hızı aşırı artmasın */

    hugYuVelocityX =

    Math.max(

        -7,

        Math.min(

            7,

            hugYuVelocityX

        )

    );


    hugYuVelocityY =

    Math.max(

        -7,

        Math.min(

            7,

            hugYuVelocityY

        )

    );


    yu.style.left =
    hugYuX + "px";

    yu.style.top =
    hugYuY + "px";


    /* Kaçarken hafif dönsün */

    const angle =

    Math.atan2(

        hugYuVelocityY,

        hugYuVelocityX

    ) *

    180 /

    Math.PI;


    yu.style.transform =

    "rotate(" +

    angle +

    "deg) scale(1.05)";


    /* =========================
            YAKALAMA
    ========================= */


    if(distance < 75){

    handleHugTouch();

}

}


/* =================================
            SARILMA
================================= */

function handleHugTouch(){

    if(!hugStarted) return;

    const text =

    document.getElementById(

        "hugText"

    );

    /* İlk 4 dokunuş */

    if(

        hugTouches <

        hugMessages.length

    ){

        if(text){

            text.textContent =

            hugMessages[hugTouches];

        }

        hugTouches++;


        /* Kalbi yeni bir yere kaçır */

        hugYuX =

        120 +

        Math.random() *

        (window.innerWidth - 240);


        hugYuY =

        180 +

        Math.random() *

        (window.innerHeight - 330);


        /* Yeni yönde kaçmaya devam etsin */

        hugYuVelocityX =

        (Math.random() > .5 ? 1 : -1)

        *

        (3 + Math.random() * 2);


        hugYuVelocityY =

        (Math.random() > .5 ? 1 : -1)

        *

        (3 + Math.random() * 2);

    }

    else{

        finishHugGame();

    }

}

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


    if(player){

        player.style.transition =

        "transform .5s";

        player.style.transform =

        "scale(1.35)";

    }


    if(yu){

        yu.style.transition =

        "transform .5s";

        yu.style.transform =

        "scale(1.35)";

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


    if(

        e.key === "ArrowUp"

        ||

        e.key === "w"

    ){

        hugMoveUp = true;

    }


    if(

        e.key === "ArrowDown"

        ||

        e.key === "s"

    ){

        hugMoveDown = true;

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


    if(

        e.key === "ArrowUp"

        ||

        e.key === "w"

    ){

        hugMoveUp = false;

    }


    if(

        e.key === "ArrowDown"

        ||

        e.key === "s"

    ){

        hugMoveDown = false;

    }

});
/* =================================
      IPAD / TELEFON DOKUNMATİK
================================= */

window.addEventListener("touchstart", (e) => {

    if(currentScene !== 6) return;

    const touch = e.touches[0];

    hugPlayerX = touch.clientX - 35;

    hugPlayerY = touch.clientY - 35;

}, { passive:false });


window.addEventListener("touchmove", (e) => {

    if(currentScene !== 6) return;

    e.preventDefault();

    const touch = e.touches[0];

    hugPlayerX = touch.clientX - 35;

    hugPlayerY = touch.clientY - 35;

}, { passive:false });
