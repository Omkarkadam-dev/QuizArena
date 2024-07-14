const quiz=[
    {
        title:"QuizArena",
        question:"Javascript is an____language",
        option_a:"Object-oriented",
        option_b:"Object-based",
        option_c:"Procedural",
        option_d:"None of the above",
        answer:"Object-oriented"
    },
    {
        title:"QuizArena",
        question:"How can a datatype be declared to be a constant type ?",
        option_a:"const",
        option_b:"var",
        option_c:"let",
        option_d:"constant",
        answer:"const"
    },
    {
        title:"QuizArena",
        question:"What keyword is used to check wheather a given property is valid or not ?",
        option_a:"in",
        option_b:"is in",
        option_c:"exists",
        option_d:"lies",
        answer:"in"
    },
    {
        title:"QuizArena",
        question:"What keyword is used to declare am asynchronous dunction in javascript ?",
        option_a:"async",
        option_b:"await",
        option_c:"set Timeout",
        option_d:"None of the above",
        answer:"async"
    },
    {
        title:"QuizArena",
        question:"Which of the following are not server-side Javascriopt objects ?",
        option_a:"Date",
        option_b:"FileUpload",
        option_c:"Function",
        option_d:"All of the above",
        answer:"All of the above"
    }
];

const questionTag=document.querySelector(".question-tag");

console.log(questionTag);
console.log(questionTag.textContent);

const question=document.querySelector(".question");

console.log(question);
console.log(question.textContent);

const option_a=document.querySelector("#text-option-a");
console.log(option_a);
console.log(option_a.textContent);

const option_b=document.querySelector("#text-option-b");
console.log(option_b);
console.log(option_b.textContent);

const option_c=document.querySelector("#text-option-c");
console.log(option_c);
console.log(option_c.textContent);

const option_d=document.querySelector("#text-option-d");
console.log(option_d);
console.log(option_d.textContent);

const answer=document.querySelector(".answer");

const submit=document.querySelector(".submit");

let currentQuestion=0;
let score=0;

console.log(quiz[currentQuestion].title);
console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].option_a);
console.log(quiz[currentQuestion].option_b);
console.log(quiz[currentQuestion].option_c);
console.log(quiz[currentQuestion].option_d);

questionTag.textContent=quiz[currentQuestion].title;
question.textContent=quiz[currentQuestion].question;
option_a.textContent=quiz[currentQuestion].option_a;
option_b.textContent=quiz[currentQuestion].option_b;
option_c.textContent=quiz[currentQuestion].option_c;
option_d.textContent=quiz[currentQuestion].option_d;

submit.addEventListener("click",()=>{
    let checkedAns=document.querySelector('input[type="radio"]:checked');
    console.log(checkedAns);

    if(checkedAns==null){
        alert("please select an option");
    }else{
        if(checkedAns.nextElementSibling.textContent==quiz[currentQuestion].answer){
            score++;
        }
    }
    currentQuestion++;
    if(currentQuestion<quiz.length){
        questionTag.textContent=quiz[currentQuestion].title;
   question.textContent=quiz[currentQuestion].question;
   option_a.textContent=quiz[currentQuestion].option_a;
   option_b.textContent=quiz[currentQuestion].option_b;
   option_c.textContent=quiz[currentQuestion].option_c;
   option_d.textContent=quiz[currentQuestion].option_d;

    }else{
        alert("your score " + score + "out of" + quiz.length );
        location.reload();
    }
})
