
//ask guest for name
var name= prompt('Please enter your Nickname', '');
if ( (name=='') || (name==null) )
{
  name="";
}

//welcome Header
var welcome_header = document.createElement("H1");
var header_text = document.createTextNode ("Welcome " + name.toUpperCase() +"\n" + ", lets see if your green!");
welcome_header.appendChild(header_text);

document.getElementById("welcome_text").appendChild(welcome_header);

//Transition from homepage to first question

var gameStart=document.getElementById('letsplay')


function changeBackgroundImageQuestion1 (){
  document.body.style.backgroundImage = "url('cycling.jpg')";
}

gameStart.addEventListener('click', changeBackgroundImageQuestion1);

var welcomebutton = document.getElementById('letsplay')
welcomebutton.addEventListener('click',hideshow,false);

function hideshow() {
  document.getElementById('letsplay').style.display = 'block';
  this.style.display = 'none'
  document.getElementById('welcome_text').style.display = 'block';
  welcome_text.style.display ='none'
  document.getElementById("trivia_box").style.display = 'block'
  loopquestion()
}
//Questions Loop
var trivia_questions =[
  "If your in the car and have an empty bottle, Would you throw it out the window?", "Do you ride a bike 5 or more times a week?"
];
var points = 0;
var input=document.querySelectorAll(".button")
var index = 0;

function loopquestion () {

  var question = trivia_questions[index];
  if (!question){

    return

  }
  document.getElementById("questionBox").innerHTML =trivia_questions[index++];



  if(input === "yes"){
    points = points + 1;

  }
}

//alert("You got " + points + " points!");
