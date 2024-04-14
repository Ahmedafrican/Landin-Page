const question1 = document.querySelector('.question1');
const question2 = document.querySelector('.question2');
const answeryes = document.querySelector('.answer-yes');
const answerNo = document.querySelector('.answer-no');
const checkAnswer1 = document.querySelector('.check-answer1');
const checkAnswer2 = document.querySelector('.check-answer2');
const answerYes2 = document.querySelector('.answer-yes2');
const answerNo2 = document.querySelector('.answer-no2');
const timer = document.querySelector('.timer')

let answer1 = '';
let answer2 = '';



answeryes.addEventListener('click' , ()=>{
    answer1 = 'Yes'
    question1.style.display = 'none'
    question2.style.display = 'block'
})

answerNo.addEventListener('click' , ()=>{
    answer2 = 'No'
    question1.style.display = 'none'
    question2.style.display = 'block'
})

answerYes2.addEventListener('click' , ()=>{
    question2.style.display = 'none'
    checkAnswer1.style.display = 'block'
})

answerNo2.addEventListener('click' , ()=>{
    question2.style.display = 'none'
    checkAnswer2.style.display = 'block'
})


// for timer second

let countTime = 2;
let time = countTime * 60;

let interval = setInterval(updateTime, 1000);

function updateTime() {
    let minute = Math.floor(time / 60);
    let second = time % 60;

    let formattedSecond = String(second).padStart(2, '0');

    timer.innerHTML = `${minute} : ${formattedSecond}`;

    if (time === 0) {
        clearInterval(interval);
        timer.innerHTML = `00 : 00`
    }
    time--;
}

