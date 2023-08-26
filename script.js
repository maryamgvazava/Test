const startbtn = document.querySelector('.btn');  //starting button 
const p = document.querySelector('p');             //where the questions must be located
const A = document.querySelector('.labelA');        //where the A option must be located
const B = document.querySelector('.labelB');         //where the B option must be located
const C = document.querySelector('.labelC');         //where the C option must be located
const D = document.querySelector('.labelD');          //where the D option must be located
const checkA = document.querySelector('.checkA');     //the first input
const checkB = document.querySelector('.checkB');      //the second input
const checkC = document.querySelector('.checkC');       //third input
const checkD = document.querySelector('.checkD');        //fourth input
const checkboxes = document.querySelectorAll("input[type = 'radio']");       // input type
const input = document.querySelectorAll('input');                             //input
const questionDiv = document.querySelector('.question');                      // where quiz is located
const answers = document.querySelector('.correctanswers');                    //where the sum of scores are located
const startTover = document.querySelector('.btn-danger');                     //refresh button
const form = document.querySelector('.form');
const h1 = document.querySelector('h1');



//initializing the starting position of the elements
startTover.style.display = "none";
questionDiv.style.display = "none";
answers.style.display = "block";



//creating a object for questions
const testitem0 = {
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
const testitem6 = {

    question: 'which one represents an OR operator?' ,
    A:'||',
    B:'??',
    C:'&&',
    D:'$$'
};


const testitem7 = {

    question: 'which one represents an AND operator?' ,
    A:'||',
    B:'??',
    C:'&&',
    D:'$$'
};


//creating an array of all question objects
let questionArr = [testitem0, testitem1, testitem2, testitem3, testitem4, testitem5, testitem6, testitem7];



//questions and all the A/B/C/D options are pushed in different arrays;
const sepQuestion = [];
const answerA = []; //only A options of all questions
const answerB = [];  //only B options of all questions
const answerC = [];
const answerD = [];


//looping over the questionArr and separating all the questions, 
//and all the A/B/C/D options in different arrays;
for(let i of questionArr){
    sepQuestion.push(i.question);
    answerA.push(i.A);
    answerB.push(i.B);
    answerC.push(i.C);
    answerD.push(i.D);  
    
};




//splitting questions and A/B/C/D arrays into real tasks
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

//counting clicks on the button
let u = [];

//initializing button click event
startbtn.addEventListener('click', function(){
               
                        u.push(clickCount+=1);
                        count(QNumbering+=1);

// enable the start button
                        if(startbtn.value == 'Start Quiz'){
                            startbtn.disabled = false;
                        } else {
                            startbtn.disabled = true;
                        }
                                        
                        
                        
                        // Add click event listeners to radio buttons
                        checkboxes.forEach(checkbox => {
                            checkbox.addEventListener('click', function() {
                                // Check if at least one radio button is checked
                                const atLeastOneChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
                                startbtn.disabled = !atLeastOneChecked; // Enable the button if at least one is checked
                            });
                        });
                        

//remove automated checked mark on every next question
                        for (let k of checkboxes ){
                                k.checked = false;
                        };


                     
                        //when clicked, the position of question and A/B/C/D arrays changes with +1
                        //that means, that we have moved to the next question
                        
                         //after first click button text changes to 'next';
                        startbtn.textContent = 'Next';
                        questionDiv.style.display = "block";
  
                        //with clickCount and u array we counted clicked on the button.
                        //in case number of clicks are more than number of questions (questionArr.length-1),
                        //startTover button will be activated and sum of scores will be shown;
                                if(questionArr.length-1 <= u.length-1){
                                QNumbering = '';
                                clickCount = '';
                                questionDiv.style.display = "none";
                                startTover.style.display = "block";
                                startbtn.style.display = "none";
                                answers.style.display = "block";
                                };   



                        //checking if the user selected the correct option
                        
                        let select = function (V, numbers) {
                            V.addEventListener('click', function(){
                                if ((QNumbering == numbers) && !this.classList.contains('clicked')){ 
                                        correctAnswers+=2;            
                                        this.classList.add('clicked');
                                };   
                        });
                        };

                        
                        //checking correct answers ( look at line : 125)
                        function setupAndReset(...selections) {
                            for (let i = 0; i < selections.length; i += 2) {
                                select(selections[i], selections[i + 1]);
                                selections[i].classList.remove('clicked');
                            };
                        };
                        

                        setupAndReset(
                            checkB, 1, 
                            checkC, 2, 
                            checkA, 3, 
                            checkD, 4, 
                            checkB, 5, 
                            checkA, 6, 
                            checkC, 7
                        );


                        answers.textContent = `Your Score is: ${correctAnswers}`;
                        h1.textContent = ` ${u.length}/${questionArr.length-1} `;
                       
  
    });

    

//reseting test
    startTover.addEventListener('click', function(){

        QNumbering = 0;
        clickCount = 0;
        answers.textContent = `Your Score is: ${correctAnswers = 0}`;
        
        count(0);
        u = [];

    startTover.style.display = "none";
    questionDiv.style.display = "none";
    answers.style.display = "none";
    startbtn.style.display = "block";
    answers.style.display = "block";
    startbtn.textContent = 'Start Quiz';
    startbtn.disabled = false;
    });
    
