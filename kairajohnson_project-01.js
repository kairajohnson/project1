
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


var welcomebutton = document.getElementById('letsplay')
welcomebutton.addEventListener('click',hideshow,false);

function hideshow() {
  document.getElementById('letsplay').style.display = 'block';
  this.style.display = 'none'
  document.getElementById('welcome_text').style.display = 'block';
  welcome_text.style.display ='none'
  document.getElementById("wrapper").style.display = 'block'
  loopquestion()
}
//Questions Loop
var trivia_questions =[
  "Your going to a gig a mile away, are you riding a bike?", "Your drinking a soda while drving. When you finish, would you throw it out the window?", "You just got an awesome mason jar with your jam, when it's empty, will you reuse it?", "Styrofoam plates, cups, etc. are bad for the earth, will you still buy it?"," Do you put recycables in the recyling bin?"
];

var bg_images =["cycling.jpg", "soda.jpg", "Peanut_butter.jpg", "birthday.jpg", "recyclebin.jpg"]

var points = 0;
var input=document.querySelectorAll("#button")
var yes = document.querySelector(".yes")
var pictureIndex=0;
var index = 0;

function loopquestion () {

  var question = trivia_questions[index];
  if (!question){

    return

  }
  document.getElementById("questionBox").innerHTML =trivia_questions[index++];

if (pictureIndex<5){
  document.body.style.backgroundImage="url(" + bg_images[pictureIndex++] + ")"
}
}



//score


function yesButton (){
    console.log(this)
  if(this === yes){
    points = points + 1;
  document.getElementById('score').innerHTML = "SCORE: " + points;
}
}
function yesButton (){
    console.log(this)
  if(this === yes){
    points = points + 1;
  document.getElementById('score').innerHTML = "SCORE: " + points;
}
}
yes.addEventListener('click', yesButton)

document.getElementById('score').innerHTML = "SCORE: " + points;
