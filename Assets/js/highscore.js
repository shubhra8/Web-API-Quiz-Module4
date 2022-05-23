  //var button=document.getElementById("scoreButton");
  var title=document.getElementById("scoreh2");
  var div= document.getElementById("div")
  var highScore = JSON.parse(localStorage.getItem("highScore"));
  console.log (highScore);
  lastPage(highScore);
  function lastPage(highScore){
  
  for(i=0;i<highScore.length;i++){
    var li=document.createElement('li');
    div.appendChild(li);
    li.innerHTML=highScore[i].input+"      "+highScore[i].percent+"%";
 }

}
let goBack=document.createElement("button");
  div.appendChild(goBack);
  goBack.setAttribute("id","scoreButton");
  goBack.innerHTML="Go BACK";
goBack.addEventListener("click",function() {
     window.location.href = "./index.html";
     })

