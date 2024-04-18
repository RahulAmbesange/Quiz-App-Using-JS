const questions=[
   {
      question: "Which is largest animal in the world",
      answers:[
         {text:"shart",correct:false},
         {text:"Blue Whale",correct:true},
         {text:"Elephant",correct:false},
         {text:"Giteffe",correct:false},
      ]
   },
   {
      question: "Which is the smallest continent in the world? ",
      answers:[
         {text:"Asia",correct:false},
         {text:"Australia",correct:true},
         {text:"Arctic",correct:false},
         {text:"Africa",correct:false},
      ]
   },
   {
      question: "Which is small country in the world",
      answers:[
         {text:"vatican city",correct:true},
         {text:"nepal",correct:false},
         {text:"Bhutan",correct:false},
         {text:"Shri Lanka",correct:false},
      ]
   },
   {
      question: "Which is largest animal in the world",
      answers:[
         {text:"shart",correct:false},
         {text:"Blue Whale",correct:true},
         {text:"Elephant",correct:false},
         {text:"Giteffe",correct:false},
      ]
   },
   {
      question: "Which is largest animal in the world",
      answers:[
         {text:"shart",correct:false},
         {text:"Blue Whale",correct:true},
         {text:"Elephant",correct:false},
         {text:"Giteffe",correct:false},
      ]
   },
];


const questionElement=document.getElementById('question');
const answerBtn=document.getElementById('ans-buttons');
const NextButton=document.getElementById('next-btn');


//whenever we start the quiz and give the answers and score will be changing
let currentQuestionIndex=0;
let score=0;

function startQuiz(){
   //when we start the quiz  it reset the currentQuestionIndex zero and score also zero 
   currentQuestionIndex=0;
   score=0;
   NextButton.innerHTML='Next';//we start the quiz so it can show the next button
   showQuestion();//call the another function, question that will be displayed 
}

function showQuestion(){
   resetState();//that will be resets the previous questions and answer
   let currentQuestion=questions[currentQuestionIndex];
   let questionNO=currentQuestionIndex + 1;
   questionElement.innerHTML=questionNO + ". "+ currentQuestion.question;

   currentQuestion.answers.forEach(answer=>{
      const button=document.createElement('button');
      button.innerHTML=answer.text;
      button.classList.add('btn');
      answerBtn.appendChild(button);
      if(answer.correct){
         button.dataset.correct=answer.correct; //it willa add the true and  false  in the datasets
      }
      button.addEventListener('click',selectAnswer )

   });
}
function resetState(){
   NextButton.style.display='none';
   while(answerBtn.firstChild){ //suppose it has child element then we remove that 
    answerBtn.removeChild(answerBtn.firstChild)
   }//it will remove all the previous answers
}
function selectAnswer(e){
const selectedBtn=e.target;
const isCorrect=selectedBtn.dataset.correct==='true';
if(isCorrect){
   selectedBtn.classList.add('correct');
   score++;//increase the score 
}
else{
   selectedBtn.classList.add('incorrect');
}

//when we select the wrong answer then it will be automatically shows the correct answer with background color green
Array.from(answerBtn.children).forEach(button=>{
   if(button.dataset.correct==='true'){
      button.classList.add('correct');
   }
   button.disabled=true;

});
NextButton.style.display='block';
}
function showScore(){
   resetState();
   questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
   NextButton.innerHTML="Play Again";
   NextButton.style.display='block';
}
function handleNextButton(){
   currentQuestionIndex++;
   if(currentQuestionIndex < questions.length){
      showQuestion();
   }
   else{
      showScore();
   }
}
NextButton.addEventListener('click',()=>{
   if(currentQuestionIndex < questions.length){
      handleNextButton();
   }
   else{
      startQuiz();//suppose there is no question then we call this function and it will shows the new question(restart the quiz)
   }
})
startQuiz(); //it call this function and process all inner function and many more