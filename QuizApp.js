const playButton = document.querySelector("#PlayButton");
const additionBtn = document.querySelector("#Addition");
const subtractionBtn = document.querySelector("#Subtraction");
const divisionBtn = document.querySelector("#Division");
const multiplicationBtn = document.querySelector("#Multiplication");
const title=document.querySelector("#title")
const sentence=document.querySelector("#sentence")
const image=document.querySelector("#logo");
const question=document.querySelector("#Question");
const optionOne=document.querySelector("#option1");
const optionTwo=document.querySelector("#option2");
const optionThree=document.querySelector("#option3");
const optionFour=document.querySelector("#option4");
const correctAnswerSentence=document.querySelector("#correctAnswer");
const wrongAnswerSentence=document.querySelector("#wrongAnswer")
const tryAgainBtn=document.querySelector("#tryAgainButton");
const returnHome=document.querySelector("#homePage")




playButton.addEventListener("click", playNow);
function playNow() {
    // Hide the Play Now button
    playButton.style.display = "none";
    title.style.display="none";
    sentence.style.display="none";
    image.style.display="none";

    // Show the operation buttons
    additionBtn.style.display = "block";
    subtractionBtn.style.display = "block";
    divisionBtn.style.display = "block";
    multiplicationBtn.style.display = "block";
}




// --------------------- ADDITION ----------------------
additionBtn.addEventListener("click", doAddition);
function doAddition(){
    // Hide operation buttons
    additionBtn.style.display = "none";
    subtractionBtn.style.display = "none";
    divisionBtn.style.display = "none";
    multiplicationBtn.style.display = "none";
    
    question.style.display="block";
    let num1=Math.floor(Math.random() * 10);
    let num2=Math.floor(Math.random() * 10);
    
    question.innerText = `Question: ${num1} + ${num2} =`;
    optionOne.style.display="block";
    optionTwo.style.display="block";
    optionThree.style.display="block";
    optionFour.style.display="block";
    let answer=num1+num2;

    //shuffling the answers
    let answers = [
  answer,
  Math.floor(Math.random() * 50),
  Math.floor(Math.random() * 50),
  Math.floor(Math.random() * 50)
];

answers = answers.sort(() => Math.random() - 0.5); // shuffle

optionOne.innerText = answers[0];
optionTwo.innerText = answers[1];
optionThree.innerText = answers[2];
optionFour.innerText = answers[3];


let buttons=[optionOne,optionTwo,optionThree,optionFour]
buttons.forEach(btn => {
  btn.addEventListener("click",function(){
    //delete old messages before regenerating a question after clicking on try again
    correctAnswerSentence.style.display="none";
    wrongAnswerSentence.style.display="none";
    
    if(answer==parseFloat(this.innerText)){
      correctAnswerSentence.style.display="block";
      tryAgainBtn.style.display="none";
      returnHome.style.display="block";
    }
    else {
      wrongAnswerSentence.style.display="block";
      tryAgainBtn.style.display="block";
    }
  })
});

tryAgainBtn.addEventListener("click",()=>{
     wrongAnswerSentence.style.display="";
     correctAnswerSentence.style.display="";
     tryAgainBtn.style.display="none";
     doAddition();
})

returnHome.addEventListener("click",()=>{
     additionBtn.style.display="none";
     subtractionBtn.style.display="none";
     divisionBtn.style.display="none";
     multiplicationBtn.style.display="none";
     question.style.display="none";
     optionOne.style.display="none";
     optionTwo.style.display="none";
     optionThree.style.display="none";
     optionFour.style.display="none";
     correctAnswerSentence.style.display="none";
     wrongAnswerSentence.style.display="none";
     tryAgainBtn.style.display="none";
     returnHome.style.display="none";
     image.style.display="block";
     title.style.display="block";
     sentence.style.display="block";
     playButton.style.display="block";
})
}


subtractionBtn.addEventListener("click", doSubtraction);
function doSubtraction(){
    // Hide operation buttons
    additionBtn.style.display = "none";
    subtractionBtn.style.display = "none";
    divisionBtn.style.display = "none";
    multiplicationBtn.style.display = "none";
    
    question.style.display="block";
    let num1=Math.floor(Math.random() * 10);
    let num2=Math.floor(Math.random() * 10);
    
    question.innerText = `Question: ${num1} - ${num2} =`;
    optionOne.style.display="block";
    optionTwo.style.display="block";
    optionThree.style.display="block";
    optionFour.style.display="block";
    let answer=num1-num2;

    //shuffling the answers
    let answers = [
  answer,
  Math.floor(Math.random() * 50),
  Math.floor(Math.random() * 50),
  Math.floor(Math.random() * 50)
];

answers = answers.sort(() => Math.random() - 0.5); // shuffle

optionOne.innerText = answers[0];
optionTwo.innerText = answers[1];
optionThree.innerText = answers[2];
optionFour.innerText = answers[3];


let buttons=[optionOne,optionTwo,optionThree,optionFour]
buttons.forEach(btn => {
  btn.addEventListener("click",function(){
    //delete old messages before regenerating a question after clicking on try again
    correctAnswerSentence.style.display="none";
    wrongAnswerSentence.style.display="none";

    if(answer==parseFloat(this.innerText)){
      correctAnswerSentence.style.display="block";
      tryAgainBtn.style.display="none";
      returnHome.style.display="block";
    }
    else {
      wrongAnswerSentence.style.display="block";
      tryAgainBtn.style.display="block";
    }
  })
});

tryAgainBtn.addEventListener("click",()=>{
     wrongAnswerSentence.style.display="";
     correctAnswerSentence.style.display="";
     tryAgainBtn.style.display="none";
     doSubtraction();
})

returnHome.addEventListener("click",()=>{
     additionBtn.style.display="none";
     subtractionBtn.style.display="none";
     divisionBtn.style.display="none";
     multiplicationBtn.style.display="none";
     question.style.display="none";
     optionOne.style.display="none";
     optionTwo.style.display="none";
     optionThree.style.display="none";
     optionFour.style.display="none";
     correctAnswerSentence.style.display="none";
     wrongAnswerSentence.style.display="none";
     tryAgainBtn.style.display="none";
     returnHome.style.display="none";
     image.style.display="block";
     title.style.display="block";
     sentence.style.display="block";
     playButton.style.display="block";
})
}

divisionBtn.addEventListener("click", doDivision);
function doDivision(){
    // Hide operation buttons
    additionBtn.style.display = "none";
    subtractionBtn.style.display = "none";
    divisionBtn.style.display = "none";
    multiplicationBtn.style.display = "none";
    
    question.style.display="block";
    let num1=Math.floor(Math.random() * 10);
    let num2;
    do {
     num2 = Math.floor(Math.random() * 10);
     } while (num2 === 0);
    
    question.innerText = `Question: ${num1} / ${num2} =`;
    optionOne.style.display="block";
    optionTwo.style.display="block";
    optionThree.style.display="block";
    optionFour.style.display="block";
    let answer=num1/num2;

    //shuffling the answers
    let answers = [
    answer,
    Math.floor(Math.random() * 50),
    Math.floor(Math.random() * 50),
    Math.floor(Math.random() * 50)
    ];
    answers = answers.sort(() => Math.random() - 0.5); // shuffle

    optionOne.innerText = answers[0];
    optionTwo.innerText = answers[1];
    optionThree.innerText = answers[2];
    optionFour.innerText = answers[3];


    let buttons=[optionOne,optionTwo,optionThree,optionFour]
buttons.forEach(btn => {
  btn.addEventListener("click",function(){
    //delete old messages before regenerating a question after clicking on try again
    correctAnswerSentence.style.display="none";
    wrongAnswerSentence.style.display="none";

    if(answer==parseFloat(this.innerText)){
      correctAnswerSentence.style.display="block";
      tryAgainBtn.style.display="none";
      returnHome.style.display="block";
    }
    else {
      wrongAnswerSentence.style.display="block";
      tryAgainBtn.style.display="block";
    }
  })
});

tryAgainBtn.addEventListener("click",()=>{
     wrongAnswerSentence.style.display="";
     correctAnswerSentence.style.display="";
     tryAgainBtn.style.display="none";
     doDivision();
})

returnHome.addEventListener("click",()=>{
     additionBtn.style.display="none";
     subtractionBtn.style.display="none";
     divisionBtn.style.display="none";
     multiplicationBtn.style.display="none";
     question.style.display="none";
     optionOne.style.display="none";
     optionTwo.style.display="none";
     optionThree.style.display="none";
     optionFour.style.display="none";
     correctAnswerSentence.style.display="none";
     wrongAnswerSentence.style.display="none";
     tryAgainBtn.style.display="none";
     returnHome.style.display="none";
     image.style.display="block";
     title.style.display="block";
     sentence.style.display="block";
     playButton.style.display="block";
})
}

multiplicationBtn.addEventListener("click", doMultiplication);
function doMultiplication(){
    // Hide operation buttons
    additionBtn.style.display = "none";
    subtractionBtn.style.display = "none";
    divisionBtn.style.display = "none";
    multiplicationBtn.style.display = "none";
    
    question.style.display="block";
    let num1=Math.floor(Math.random() * 10);
    let num2=Math.floor(Math.random() * 10);
    
    question.innerText = `Question: ${num1} x ${num2} =`;
    optionOne.style.display="block";
    optionTwo.style.display="block";
    optionThree.style.display="block";
    optionFour.style.display="block";
    let answer=num1*num2;

    //shuffling the answer
    let answers = [
  answer,
  Math.floor(Math.random() * 50),
  Math.floor(Math.random() * 50),
  Math.floor(Math.random() * 50)
];

answers = answers.sort(() => Math.random() - 0.5); // shuffle

optionOne.innerText = answers[0];
optionTwo.innerText = answers[1];
optionThree.innerText = answers[2];
optionFour.innerText = answers[3];


let buttons=[optionOne,optionTwo,optionThree,optionFour]
buttons.forEach(btn => {
  btn.addEventListener("click",function(){
    //delete old messages before regenerating a question after clicking on try again
    correctAnswerSentence.style.display="none";
    wrongAnswerSentence.style.display="none";
    
    if(answer==parseFloat(this.innerText)){
      correctAnswerSentence.style.display="block";
      tryAgainBtn.style.display="none";
      returnHome.style.display="block";
    }
    else {
      wrongAnswerSentence.style.display="block";
      tryAgainBtn.style.display="block";
    }
  })
});

tryAgainBtn.addEventListener("click",()=>{
     wrongAnswerSentence.style.display="";
     correctAnswerSentence.style.display="";
     tryAgainBtn.style.display="none";
     doMultiplication();
})


returnHome.addEventListener("click",()=>{
     additionBtn.style.display="none";
     subtractionBtn.style.display="none";
     divisionBtn.style.display="none";
     multiplicationBtn.style.display="none";
     question.style.display="none";
     optionOne.style.display="none";
     optionTwo.style.display="none";
     optionThree.style.display="none";
     optionFour.style.display="none";
     correctAnswerSentence.style.display="none";
     wrongAnswerSentence.style.display="none";
     tryAgainBtn.style.display="none";
     returnHome.style.display="none";
     image.style.display="block";
     title.style.display="block";
     sentence.style.display="block";
     playButton.style.display="block";
})
}
    
