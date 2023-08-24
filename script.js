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
const checkboxes = document.querySelectorAll("input[type = 'radio']");
const questionDiv = document.querySelector('.question');
const answers = document.querySelector('.correctanswers');









questionDiv.style.display = "none";





const testItem0 = {
    question:'',
    A:'',
    B:'',
    C:'',
    D:''
}



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


const testitem4 = {

    question: 'How to write an IF statement in JavaScript?',
    A:'if i = 5',
    B:'if i = 5 than',
    C:'if i == 5 than',
    D:'if (i == 5)'
};


const testitem5 = {

    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?' ,
    A:'if ( i < > 5',
    B:'if (i != 5)',
    C:'if (i =! 5 than',
    D:'if i < > 5'
};



var questionArr = [testItem0, testitem1, testitem2, testitem3, testitem4, testitem5];


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
let clickCount = 0;
let correctAnswers = 0;

const count = function(){
    
p.textContent = sepQuestion[QNumbering];
A.textContent = answerA[QNumbering];
B.textContent = answerB[QNumbering];
C.textContent = answerC[QNumbering];
D.textContent = answerD[QNumbering];
};
count();


const u = [];
console.log(u)

startbtn.addEventListener('click', function(){
               
                       u.push(clickCount+=1);
                        count(QNumbering+=1);
                        startbtn.textContent = 'Next';
                        questionDiv.style.display = "block";
    
    

                    if(questionArr.length-1 <= u.length-1){
                        QNumbering = '';
                    clickCount = '';
                    questionDiv.style.display = "none";
                    startbtn.textContent = 'Test Over';
                    };

                 
                    for (let k of checkboxes ){
                        k.checked = false;
                    };
                    console.log(clickCount);
    });
