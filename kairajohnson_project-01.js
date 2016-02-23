
//ask guest for name
var name= prompt('Please enter your Nickname', '');
if ( (name=='') || (name==null) )
{
  name="";
}

//welcome Header
var welcome_header = document.createElement("H1");
console.log(welcome_header);
var header_text = document.createTextNode ("Welcome " + name.toUpperCase() +"\n" + ", lets see if your green!");
console.log(header_text);
welcome_header.appendChild(header_text);

document.getElementById("welcome_text").appendChild(welcome_header);

//Transition from homepage to first question

var gameStart=document.getElementById('letsplay')


function changeBackgroundImageQuestion1 (){
  document.getElementById("welcome_page").style.backgroundImage = "url('cycling.jpg')";
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
}
//Questions Loop

var Questions=document.getElementsByClassName("Question")
var points = 0;
$(document).ready(function(){
  for (var i=0; i<Questions.length; i++){
  var input = prompt(Questions[i].textContent) {
    $('body').append(<'div class="Questions' + i + '"/>');
  }
});
  if(input === "yes"){
    points = points + 1;
  }
}
alert("You got " + points + " points!");



//
// //Question1 Transition
// var yes=document.getElementById('yes');
// var no=document.getElementById('no');
// point = 0;
//
// yes.addEventListener('click',yes1);
// no.addEventListener('click',no1);
//
// function yes1(){
//   document.querySelector('.Question1').style.display='none'
//   document.querySelector('.Question2').style.display='block'
//   point++;
// };
//
// function no1(){
//   document.querySelector('.Question1').style.display='none'
//   document.querySelector('.Question2').style.display='block'
//   console.log("hide")
// };
//
// //question2 to 3
// //Question2 Transition
//
// var yes_2=document.getElementById('yes');
// var no_2=document.getElementById('no');
//
// yes_2.addEventListener('click',yes2);
// no_2.addEventListener('click',no2);
//
// function yes2(){
//   document.querySelector('.Question1').style.display='none'
//   document.querySelector('.Question2').style.display='none'
//   document.querySelector('.Question3').style.display='block'
// }
//
// function no2(){
//   document.querySelector('.Question1').style.display='none'
//   document.querySelector('.Question2').style.display='none'
//   document.querySelector('.Question3').style.display='block'
//   point++;
// }
