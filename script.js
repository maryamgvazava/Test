const startbtn = document.querySelector('.btn');
const p = document.querySelector('p');
const A = document.querySelector('.labelA');
const B = document.querySelector('.labelB');
const C = document.querySelector('.labelC');
const D = document.querySelector('.labelD');
const checkA = document.querySelector('.checkA');
const checkB = document.querySelector('.checkB');
const checkC = document.querySelector('.checkC');
const checkD = document.querySelector('.checkD');




const testitem1 = {
    question:'Inside which HTML element do we put the JavaScript?',
    A:'javasctipt',
    B:'script',
    C:'js',
    D:'scripting'
};

const testitem2 = {
    question:'how much falsy values do js have?',
    A:'4',
    B:'2',
    C:'5',
    D:'8'
};

const testitem3 = {
    question: 'what is the type of "undefined"?' ,
    A:'undefined',
    B:'object',
    C:'string',
    D:'boolean'
};



const questionArr = [testitem1, testitem2, testitem3];


const sepQuestion = [];
const answerA = [];
const answerB = [];
const answerC = [];
const answerD = [];




for(var i of questionArr){
    sepQuestion.push(i.question);
    answerA.push(i.A);
    answerB.push(i.B);
    answerC.push(i.C);
    answerD.push(i.D);   
};


let QNumbering = 0;

const count = function(){
    
p.textContent = sepQuestion[QNumbering];
A.textContent = answerA[QNumbering];
B.textContent = answerB[QNumbering];
C.textContent = answerC[QNumbering];
D.textContent = answerD[QNumbering];
};
count();

let correctAnswers = 0;


if (QNumbering === 0){
    checkB.addEventListener('click', function(){
correctAnswers += 1;

    });
} else {
    correctAnswers += 0;
}





startbtn.addEventListener('click', function(){
    count(QNumbering+=1);
    startbtn.textContent = 'Next';
    });


// const VA = checkA.addEventListener('click', function(){
   
// });
// const VB = checkB.addEventListener('click', function(){
   
// });
// const VC = checkC.addEventListener('click', function(){
   
// });
// const VD = checkD.addEventListener('click', function(){
   
// });










