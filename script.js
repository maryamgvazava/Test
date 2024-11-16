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
    
    question:'რომელი სამი ფაქტორი უნდა გავითვალისწინო სისტემური ბლოკისთვის ქეისის ასარჩევათ?',
    A:'mother board და კვების ბლოკის ზომა, თავისუფალი სივრცე და  შიდა და გარე მოწყობილობებისთვის განკუთვნილი ბუდეების რაოდენობა',
    B:'პროცესორის და ოპერატიული მეხსიერების სიხშირე, ქსელის ბარათი',
    C:'შიდა და გარე მოწყობილობებისთვის განკუთვნილი ბუდეების რაოდენობა, ოპერატიული მეხსიერების სიხშირე, BIOS',
    D:'მოწყობილობებისთვის საჭირო  ძაბვების ჯამური ოდენობა, ვინჩესტერი'
};

const testitem2 = {
    question:'ჩამოთვლილთაგან რომელი  მოწყობილობა არ არის ინტეგრირებული motherboard-ზე?',
    A:'ხმის ბარათი',
    B:'ვიდეობარათი',
    C:'ვინჩესტერი',
    D:'ქსელის ბარათი'
};

const testitem3 = {
    question: 'რომელი მოწყობილობა გარდაქმნის ცვლად დენს  მუდმივ დენად?' ,
    A:'პროცესორი',
    B:'კვების ბლოკი',
    C:'Bios',
    D:'PCI-e'
};


const testitem4 = {

    question: 'რომელი მოწყობილობის სახეებია : ATX, ITX, MINI ATX, Micro ATX?',
    A:'პროცესორი',
    B:'ვიდეო ბარათის',
    C:'Motherboard',
    D:'ოპერატიული მეხსიერების'
};


const testitem5 = {

    question: 'რომელია ოპტიკურდამგროვებელი მოწყობილობა?' ,
    A:'SSD',
    B:'HDD',
    C:'DVD-rw',
    D:'ფლეშ მეხსიერება'
};
const testitem6 = {

    question: 'სად ინახება ინფორმაცია?' ,
    A:'მყარი დისკი',
    B:'ოპერატიული მეხსიერება',
    C:'პროცესორი',
    D:'ჩიფსეტი'
};


const testitem7 = {

    question: 'რა არის ვიდეო დაფა?' ,
    A:'გამოიყენება ინტერნეთში გასასვლელად',
    B:'გამოიყენება ინფორმაციის შესანახად',
    C:'გამოიყენება პერიფერიული მოწყობილობების გასამართათ',
    D:'გამოიყენება გამოსახულების მისაღებად'
};


const testitem8 = {
    question: 'რომელი კაბელის საშუალებით ხდება ინფორმაციის გაცვლა ვინჩესტერსა და MOTHERBOARD-ს შორის?',
    A: 'IDE',
    B: 'USB',
    C: 'PCI',
    D: 'AGP'
};

const testitem9 = {
    question: 'მყარ დისკზე სექტორების გაერთიანებას ეწოდება:',
    A: 'სექტორების მასივი',
    B: 'კლასტერი',
    C: 'ბილიკი',
    D: 'დისკო'
};

const testitem10 = {
    question: 'რომელი ინტერფეისი აქვს ახალი თაობის ვიდეო ბარათს?',
    A: 'PCI',
    B: 'AGP',
    C: 'PCI-e',
    D: 'VGA'
};

const testitem11 = {
    question: 'რომელია მონიტორის კონექტორი?',
    A: 'DVI',
    B: 'PCI',
    C: 'AGP',
    D: 'IDE'
};


const testitem12 = {
    question: 'რომელი  არ არის პროცესორის მახასიათებელი ?',
    A: 'ტაქტური სიხშირე',
    B: 'ქეშ მეხსიერება',
    C: 'ბირთვები და ნაკადები',
    D: 'პიქსელი'
};


const testitem13 = {
    question: 'რომელი სოკეტის პროცესორი არ არსებობს?',
    A: 'VGA',
    B: 'LGA',
    C: 'XGA',
    D: 'GGA'
};

const testitem14 = {
    question: 'რომელ სოკეტზე არ მუშაობს i-3?',
    A: 'LGA478',
    B: 'LGA1155',
    C: 'LGA1156',
    D: 'LGA1151'
};

const testitem15 = {
    question: 'რამდენი დონისგან შედგება პროცესორის ქეშ მეხსიერება?',
    A: '2',
    B: '3',
    C: '5',
    D: '4'
};

const testitem16 = {
    question: 'რომელი ტექნოლოგიის საშუალებით ხდება ტაქტური სიხშირის მომატება მძიმე სამუშაოს შესრულებისთვის Intel პროცესორებში?',
    A: 'Hyper-threading',
    B: 'Turbo Boost',
    C: 'Multitasking',
    D: 'Intel Virtualization'
};

const testitem17 = {
    question: 'რომელია პროცესორების ძირითადი მწარმოებელი? (მოხაზეთ ერთი ან რამდენიმე სწორი პასუხი)',
    A: 'AMD/Intel',
    B: 'Samsung',
    C: 'Apple',
    D: 'Asus'
};

const testitem18 = {
    question: 'არხს, რომლის საშუალებითაც ინფორმაცია მოძრაობს პროცესორისკენ, არის:',
    A: 'SATA',
    B: 'ნაკადი',
    C: 'მონაცემთა სალტე',
    D: 'ტაქტური სიხშირე'
};

const testitem19 = {
    question: 'რომელია PGA 942 socket-ის პროცესორი?',
    A: 'AMD FX Zambezi',
    B: 'i-3',
    C: 'i-7',
    D: 'Intel Silver J5005'
};

const testitem20 = {
    question: 'რა არის ჩიპსეტი?',
    A: 'ჩიპსეტი არის ლოგიკური ჩიპების ერთობლიობა, რომელიც აერთიანებს ჩრდილოეთ ხიდს და სამხრეთ ხიდს.',
    B: 'ჩიპსეტი არის ლოგიკური ჩიპი, რომელიც განსაზღვრავს რამდენი მოწყობილობა უნდა შეერთდეს დედა ბარათზე.',
    C: 'ჩიპსეტი არის ლოგიკური ჩიპი, რომელიც განსაზღვრავს რა ტიპის მოწყობილობა უნდა დაერთდეს.',
    D: 'ჩიპსეტი არის ლოგიკური ჩიპი, რომელიც პასუხისმგებელია ინფორმაციის შესანახად.'
};

const testitem21 = {
    question: 'რისი სლოტია PCI-e?',
    A: 'მყარი დისკი',
    B: 'ოპერატიული მეხსიერება',
    C: 'ვიდეო ბარათი',
    D: 'ხმის ბარათი'
};

const testitem22 = {
    question: 'რომელი მოწყობილობა გარდაქმნის ცვლად დენს მუდმივ დენად?',
    A: 'პროცესორი',
    B: 'კვების ბლოკი',
    C: 'BIOS',
    D: 'PCI-e'
};

const testitem23 = {
    question: 'რაში იზომება პროცესორის ტაქტური სიხშირე?',
    A: 'hz',
    B: 'vt',
    C: 'a',
    D: 'v'
};

const testitem24 = {
    question: 'რომელი მოწყობილობის ტიპებია: ATX, ITX, MINI ATX, Micro ATX?',
    A: 'პროცესორი',
    B: 'ვიდეო ბარათი',
    C: 'Motherboard',
    D: 'ოპერატიული მეხსიერება'
};

const testitem25 = {
    question: 'რომელი სოკეტის პროცესორი არ არსებობს?',
    A: 'VGA',
    B: 'PGA',
    C: 'XGA',
    D: 'GGA'
};

const testitem26 = {
    question: 'რომელია ოპტიკურად დამგროვებელი მოწყობილობა?',
    A: 'SSD',
    B: 'HDD',
    C: 'CD-RW',
    D: 'ფლეშ მეხსიერება'
};

const testitem28 = {
    question: 'CMOS არის:',
    A: 'ენერგო დამოუკიდებელი მეხსიერება, რომელიც ინახავს ინფორმაციას კომპიუტერის კონფიგურაციის შესახებ.',
    B: 'მყარი დისკის ნაწილი, რომელიც პასუხისმგებელია ინფორმაციის შენახვისთვის.',
    C: 'ოპერატიული მეხსიერების ერთ-ერთი ტიპია.',
    D: 'BIOS-ის ერთ-ერთი მოდიფიკაცია.'
};


//creating an array of all question objects
let questionArr = [testitem0, testitem1, testitem2, testitem3, testitem4, testitem5, testitem6, testitem7,
    testitem8, testitem9, testitem10, testitem11, testitem12, testitem13, testitem14, testitem15,
    testitem16, testitem17, testitem18, testitem19, testitem20, testitem21, testitem22, testitem23,
    testitem24, testitem25, testitem26, testitem28];



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
                         



                        //checking if the user selected the correct option
                        
                        let select = function (V, numbers) {
                            V.addEventListener('click', function(){
                                if ((QNumbering == numbers) && !this.classList.contains('clicked')){ 
                                        correctAnswers+=1;            
                                        this.classList.add('clicked');
                                };   
                        });
                        };

                        
                        //checking correct answers ( look at line : 125)
                        function setupAndReset(...selections) {
                            for (let i = 0; i < selections.length; i += 2) {
                                select(selections[i], selections[i + 1]);
                                selections[i].classList.remove('clicked');

                                if(questionArr.length-1 <= u.length-1){
                                    QNumbering = '';
                                    clickCount = '';
                                    questionDiv.style.display = "none";
                                    startTover.style.display = "block";
                                    startbtn.style.display = "none";
                                    answers.style.display = "block";
                                    answers.textContent = `Your Score is: ${correctAnswers}`;
                                    };  
                            };
                        };
                        

                        setupAndReset(
                            checkA, 1, 
                            checkB, 2, 
                            checkB, 3, 
                            checkA, 4, 
                            checkC, 5, 
                            checkA, 6, 
                            checkD, 7,
                            checkA, 8,
                            checkB, 9,
                            checkC, 10,
                            checkA, 11,
                            checkD, 12,
                            checkA, 13,
                            checkA, 14,
                            checkB, 15,
                            checkB, 16,
                            checkA, 17,
                            checkB, 18,
                            checkA, 19,
                            checkA, 20,
                            checkC, 21,
                            checkB, 22,
                            checkA, 23,
                            checkC, 24,
                            checkA, 25,
                            checkC, 26,
                            checkA, 27,


                        );


                        // 
                        h1.textContent = `Control Question Quantity: ${u.length}/${questionArr.length-1} `;
                       
  
    });

    

//reseting test
    startTover.addEventListener('click', function(){

        QNumbering = 0;
        clickCount = 0;
        // answers.textContent = `Your Score is: ${correctAnswers = 0}`;
        
        count(0);
        u = [];

    startTover.style.display = "none";
    questionDiv.style.display = "none";
    answers.style.display = "none";
    startbtn.style.display = "block";
    // answers.style.display = "block";
    startbtn.textContent = 'Start Quiz';
    startbtn.disabled = false;
    });
    
