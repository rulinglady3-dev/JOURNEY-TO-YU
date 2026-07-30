/*==================================================
                FIND MEMORIES
==================================================*/

let findStarted = false;
let foundCount = 0;

const findItems = [

    // Sol üstte, yıldızların arasında
    { id:"star", emoji:"⭐", x:75, y:260 },

    // Sağ üst köşede
    { id:"cat", emoji:"🐱", x:1120, y:90 },

    // Sol alt tarafta
    { id:"rose", emoji:"🌹", x:140, y:650 },

    // Sağ alt köşeye yakın
    { id:"letter", emoji:"💌", x:1080, y:590 },

    // Ortaya yakın ama aşağıda
    { id:"game", emoji:"🎮", x:730, y:500 }

];

function createFindGame(){

    if(findStarted) return;

    const area = document.getElementById("findArea");

    if(!area) return;

    findStarted = true;
    foundCount = 0;

    area.innerHTML = "";

    findItems.forEach(obj=>{

        const item = document.createElement("div");

        item.className = "findObject";

        item.innerHTML = obj.emoji;

        item.style.left = obj.x + "px";

        item.style.top = obj.y + "px";

        item.addEventListener("click",()=>{

            collectItem(item,obj);

        });

        area.appendChild(item);

    });

}

function collectItem(item,obj){

    if(item.dataset.collected === "true") return;

    item.dataset.collected = "true";

    item.style.pointerEvents = "none";

    item.style.transition = ".35s";

    item.style.transform =
    "scale(2) rotate(360deg)";

    item.style.opacity = "0";

    foundCount++;

    const target = document.getElementById(

        "target" +
        obj.id.charAt(0).toUpperCase() +
        obj.id.slice(1)

    );

    if(target){

        target.style.opacity = ".25";

        target.style.transform =
        "scale(.8)";

    }

    setTimeout(()=>{

        item.remove();

    },350);

    if(foundCount >= findItems.length){

        setTimeout(()=>{

            findStarted = false;

            showScene(6);

        },1000);

    }

}
