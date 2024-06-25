/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
};

let timer;
let gameOver;


/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector('#boredom-stat');
const hungerStatEl = document.querySelector('#hunger-stat');
const sleepinessStatEl = document.querySelector('#sleepiness-stat');

const messageEl = document.querySelector('#message');

const playBtnEl = document.querySelector('#play');
const feedBtnEl = document.querySelector('#feed');
const sleepBtnEl = document.querySelector('#sleep');
const resetBtnEl = document.querySelector('#restart');

/*-------------------------------- Functions --------------------------------*/

const getRandomInt = () => {
    return Math.floor(Math.random() * 4);
}

const render = () => {
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;

    if(gameOver) {
        resetBtnEl.classList.remove("hidden");
        messageEl.classList.remove("hidden");
        clearInterval(timer);
        playBtnEl.removeEventListener('click' , playBtnClick);
        feedBtnEl.removeEventListener('click' , feedBtnClick);
        sleepBtnEl.removeEventListener('click' , sleepBtnClick);
    }
}

const playBtnClick = () => {
    state.boredom = 0;
    render();
}

const feedBtnClick = () => {
    state.hunger = 0;
    render();
}

const sleepBtnClick = () => {
    state.sleepiness = 0;
    render();
}

const updateStates = () => {
    state.boredom += getRandomInt();
    state.hunger += getRandomInt();
    state.sleepiness += getRandomInt();
}

const checkGameOver = () => {
    if(state.boredom > 9 || state.hunger > 9 || state.sleepiness > 9) {
        gameOver = true;
    }
}

const runGame = () => {
    updateStates();
    checkGameOver();
    render();
}

const init = () => {
    resetBtnEl.classList.add("hidden");
    messageEl.classList.add("hidden");
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    gameOver = false;
    timer = setInterval(runGame, 2000);
    render();
}

init();
/*----------------------------- Event Listeners -----------------------------*/

resetBtnEl.addEventListener('click' , init);

playBtnEl.addEventListener('click' , playBtnClick);
feedBtnEl.addEventListener('click' , feedBtnClick);
sleepBtnEl.addEventListener('click' , sleepBtnClick);
