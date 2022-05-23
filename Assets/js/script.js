var start = document.getElementById("start");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var btn;
let j=0;
var p = document.getElementById("firstpage");
let btn1=document.getElementById("button1");
let btn2=document.getElementById("button2");
let btn3=document.getElementById("button3");
let btn4=document.getElementById("button4");
let div=document.getElementsByClassName("container");
let ans= document.getElementById("ans");
//let btn5=document.getElementById("last");

// Array to store quiz question,option and answer
let quiz =[{
question:"Inside which HTML element do we put the JavaScript?",
options: ["<script>","<javacsript>","JS","scripting"],
answer: "<script>",
},
{
 question: "Commonly used data types DO NOT include:",
 options:["booleans","strings","alerts","numbers"],
 answer:"alerts",
},
{
 question: "To select elements within an array,we use",
 options: ["variable","index","methods","numbers"],
 answer:"index",
},
{
question: "The condition in an if / else statement is enclosed within:",
 options: ["parentheses","brackets","opening and closing tags","quotations"],
 answer:"parentheses",

}]

let i= 1;
let n = 0;
var secondsLeft = 40;
let timeEl = document.querySelector("#time");
let Score = 1; 
let percentage;
let timerInterval;

//This function gets invoked when user clicks Start button on the first page
function myFirstpage() {
//document.getElementById("h1").innerHTML = quiz.question;
h1.style.display="none";
h2.style.display="block";
h2.innerHTML=quiz[0].question;
//heading.innerHTML=quiz[0].question;
p.style.display = "none";
start.style.display = "none";
btn1.style.display="block";
btn2.style.display="block";
btn3.style.display="block";
btn4.style.display="block";
h2.innerHTML=quiz[0].question;
btn1.textContent=quiz[0].options[0];
btn2.textContent=quiz[0].options[1];
btn3.textContent=quiz[0].options[2];
btn4.textContent=quiz[0].options[3];
Timer();
}



//This Function will be called every time there is a click from options buttons.

function myFunction(button) {

 if(button.textContent === quiz[n].answer)
   {
ans.style.display="block";
ans.innerHTML="correct";
var total =Score++;
percentage = total*100/4;
console.log(total);

  if(n===3 || i===4){
    
     nextpage();
  }
  
}  
 else{
    ans.style.display="block";
    ans.innerHTML="wrong";
     secondsLeft -= 10;
     if(n===3){
     nextpage();
  }
 
 }

if(i<=3){
h2.innerHTML=quiz[i].question;
btn1.textContent=quiz[i].options[0];
btn2.textContent=quiz[i].options[1];
btn3.textContent=quiz[i].options[2];
btn4.textContent=quiz[i].options[3];
i++;
n++;

}
else{
}
}

function Timer() {
  // Sets interval in variable
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = " time left " +secondsLeft ;

   if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      nextpage();
      
     
    }
    

  }, 1000);
}
  
//This Function will  be called at the end of the last Question or when timer shows 0.

function nextpage(){
clearInterval(timerInterval);
 timeEl.style.display="none";
  ans.style.display="none";
let h4= document.createElement("h4");
let h3= document.createElement("h3");  
let input = document.createElement("input");
var b = document.createElement("button");
h4.setAttribute("class", "percentage");
h3.setAttribute("class","message");
b.setAttribute("id", "last");
var span = document.createElement("span");
span.setAttribute("id", "span1");
percent=document.getElementById("#span1")
//percent.innerHTML=percentage;
document.body.appendChild(h3);
document.body.appendChild(input);
document.body.appendChild(h4);
document.body.appendChild(span);  
//document.body.appendChild(input);
document.body.appendChild(b);
h4.style.display="block";
h4.innerHTML="Your Score-"+percentage + "%";
h3.style.display="block"; 
h3.innerHTML="Enter your initials in the textbox.";
b.innerHTML= "Submit";
h2.style.display="none";
btn1.style.display="none";
btn2.style.display="none";
btn3.style.display="none";
btn4.style.display="none";
b.addEventListener("click", function(event) {
//event.preventDefault();
renderMessage();
})



function renderMessage() {
  ans.style.display="none";
  var initials= input.value;
  if(input === null){
console.log("put some values");  
    }
    else{
       var studentScore = {
       input: input.value,
       percent: percentage,
}; 
    };

  var highScore = localStorage.getItem("highScore");
  if (highScore===null){
    highScore=[];
  }
  else{
  highScore = JSON.parse(highScore);
  }
  console.log (highScore);
  highScore.push(studentScore);
  var scoreNew = JSON.stringify(highScore);
  localStorage.setItem("highScore", scoreNew);
  lastPage(highScore);

function lastPage(highScore){
  h4.style.display="none";
  h3.style.display="none";
  b.style.display="none";
  input.style.display="none";
   let highS=document.createElement("h3");
  highS.setAttribute("id","highS");
  document.body.appendChild(highS);
  highS.innerHTML="HIGH SCORES";
  
  for(i=0;i<highScore.length;i++){
    var li=document.createElement('li');
    document.body.appendChild(li);
    li.innerHTML=highScore[i].input+"      "+highScore[i].percent+"%";
  }
let goBack=document.createElement("button");
  document.body.appendChild(goBack);
  goBack.setAttribute("id","goBack");
  goBack.innerHTML="Go BACK";
  goBack.addEventListener("click",function() {
     window.location.href = "./index.html";
})

}

}}