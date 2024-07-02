const GAME_TIME = 10;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let words = [];
let checkInterval;

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('button');

init(); //화면 렌더링시, 바로 선언하는 함수. 

function init(){
    getWords();
    button.addEventListener('click', run); // 버튼에 'run' 함수 연결
    wordInput.addEventListener('input', checkMatch);
}

// 단어 불러오기
function getWords(){
    axios.get('https://random-word-api.herokuapp.com/word?number=100')
    .then(function (response){
        // 성공 처리
        words = response.data;
        const randomIndex = Math.floor(Math.random() * words.length); // 초기 단어 설정
        wordDisplay.innerText = words[randomIndex]; // wordDisplay에 초기 단어 설정
        buttonChange('게임시작');
    })
    .catch(function(error){
        // 에러 처리
        console.log(error);
    });
    }
    
// 게임 전체 실행 함수
function run(){
    if(isPlaying){
        return;
    }
    isPlaying = true;
    time = GAME_TIME;
    wordInput.focus();
    scoreDisplay.innerText = 0;
    timeInterval = setInterval(countdown, 1000);
    //checkInterval = setInterval(checkStatus, 50); //50마이크로세컨으로 설정하여, 계속 게임상태를 체크.
    buttonChange('게임중');
}

// 삼항 연산자 => (조건) ? 참일 경우 : 거짓일 경우
function countdown(){
    (time > 0) ? time-- : isPlaying = false;
    if(!isPlaying){
        clearInterval(timeInterval);
    }
    timeDisplay.innerText = time;
}

// 게임이 종료되었는지 또는 시간이 끝났는지 체크
/* function checkStatus(){
    if(!isPlaying && time === 0){
        buttonChange('게임시작');
        clearInterval(checkInterval);
    }
} */


function buttonChange(text){
    button.innerText = text;
    text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading');
}


// 1.단어 일치 체크
function checkMatch (){
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        wordInput.value = "";
        if(!isPlaying){
            return;
        }
        score++;
        scoreDisplay.innerText = score;
        time = GAME_TIME;
        const randomIndex = Math.floor(Math.random() * words.length);
        wordDisplay.innerText = words[randomIndex];
    } 
}





