const levels = document.querySelector("#levels");
const buttonplayerreset  = document.querySelector("#btnplayerreset");
const playerone = {
    score:0,
    button:document.querySelector("#btnplayerone"),
    display:document.querySelector("#playerone")
}

const playertwo = {
    score:0,
    button:document.querySelector("#btnplayertwo"),
    display:document.querySelector("#playertwo")
}

let level = levels.value;
let isgameover = false;

playerone.button.addEventListener("click",function () {
    // if(!isgameover){
    //     if(playerone.score!=level) {
    //         playerone.score++;
    //         playerone.display.innerHTML =playerone.score;

    //     }
    //     if(playerone.score == level) {
    //         isgameover = true;
    //         playerone.display.classList.add("text-success");
    //         playertwo.display.classList.add("text-danger");
    //         disablebuttons(true);
    //     }
    // }
    updateScores(playerone,playertwo);

})


playertwo.button.addEventListener("click",function(e) {
    // if(!isgameover){
    //     if(playertwo.score!=level) {
    //         playertwo.score++;
    //         playertwo.display.innerHTML =playertwo.score;
    //     }
    //     if(playertwo.score == level) {
    //         playerone.display.classList.add("text-danger");
    //         playertwo.display.classList.add("text-success");
    //         isgameover = true;
    //         disablebuttons(true);
    //     }
    // }

    updateScores(playertwo,playerone);

})

buttonplayerreset.addEventListener("click",function(e) {
    playerone.display.innerHTML = 0;
    playertwo.display.innerHTML = 0;
    playerone.score = 0;
    playertwo.score= 0;
    disablebuttons(false);
    isgameover=false;
    playerone.display.classList.remove("text-success");
    playerone.display.classList.remove("text-danger");
    playertwo.display.classList.remove("text-success");
    playertwo.display.classList.remove("text-danger");
})

levels.addEventListener("change",function() {
    level = this.value;
})



const disablebuttons = (buttonstatus) => {
    playerone.button.disabled = buttonstatus;
    playertwo.button.disabled = buttonstatus;
}

function updateScores(player,opponent) {
    if(!isgameover){
        if(player.score!=level) {
            player.score++;
            player.display.innerHTML =player.score;

        }
        if(player.score == level) {
            isgameover = true;
            player.display.classList.add("text-success");
            opponent.display.classList.add("text-danger");
            disablebuttons(true);
        }
    }
}