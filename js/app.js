/*
var nameUser = prompt(" Enter Your Name");
 var  genderUser= prompt(" Enter Your Gender");
 var age = prompt(" Enter your Age");
 if (age <=0) {
     alert("Please enter a real age");
     prompt(" Enter your Age") ;
 }

  var welcomRusult = confirm("Do you want to skip welcoming message ?");

  if (welcomRusult == false)
      if (genderUser.toLowerCase() == 'male') 
         alert("Welcom Mr "  + nameUser ) ; 
      else if (genderUser.toLowerCase() =='female')  
             alert("Welcom Ms "  + nameUser );  
             else { alert(" welcome " + nameUser);} */
/*

let questiones = ["Do you like programer ? ", "Do you have background for JS ?", "Do you have background for C++ ?"];

let answers = [];
for (i = 0; i < questiones.length; i++) {
    let answer = prompt(questiones[i]);
    if (answer.toLocaleLowerCase().trim() == "yes" || answer.toLocaleLowerCase().trim() == "no")
        answers.push(answer);
    else {
        alert("invalid"); answers.push("invalid");
    }




}

console.log(answers);



*/


let answers = [];

let questionNubone = askQues("Do you like programer ? ");
let questionNubtow = askQues("Do you have background for JS ? ");
let questionNubthree = askQues(" Do you have background for C++ ?");

answers = [questionNubone, questionNubtow, questionNubthree]

function askQues(questiones) {
    let answer = prompt(questiones);
    return answer
}

function answerUser(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "" || arr[i] == null) {
            console.log("invalid");
        }
        else {
            console.log(arr[i])
        }
    }
}
answerUser(answers);


// please check in this code bellow


/*

const questions = ["Do you like programer ? ", "Do you have background for JS ?", "Do you have background for C++ ?"];
const answers = [];

for (let i = 0; i < questions .length; i++) {
    const answer = prompt(questions[i]);
    if (isValidAnswer(answer))
        answers.push(answer);
    else {
        alert("invalid"); answers.push("invalid");
    }
}

function sanatizeAnswer(answer) {
    if (answer) {
       return answer.toLocaleLowerCase().trim();
    }
    
    return '';
}

function isValidAnswer(answer) {
   return sanatizeAnswer(answer) === 'yes' || sanatizeAnswer(answer) === 'no';
}

function showQuestionsAnswer(questions, answers) {
    for (let i = 0; i < questions.length; i++) {
    	 console.log('Question #' + (i + 1) + ': ' + questions[i]);
	 console.log('Answer #' + (i + 1) + ': ' + answers[i]);
    }
}

showQuestionsAnswer(questions, answers);*/