 
var maxFact = 10; 
var minFact = 1; 
// the number you want to practice to... 
var livesLeft = 3; 
var factNum;;// the starting number to be multiplied by; the 'answer'
var factPoints = 10; 
var doneText;
// the number of points each right answer generates. 
  // the order in which the facts will be presented. 0, 1 and ten are "rule based" and should be done before we do this.
// var factSequence=[ 10, 2, 5,4,9,3,6,7,8];
// the initial setting - arrays begin with "0"
//var factIndex=0;
// sets the factSet to the right number.   It will change as we go. 
//var factSet=factSequence[factIndex];

// THIS IS NEW FOR THE SIMPLER ONE FACT VERSION: 
var factSet=10; 
var livesLeftImg='<img src= images/ringbuoytransp.png alt="rescue ring" style="min-height:50px;  max-width:100%;max-height:100%; ">'

var imgsrc ='<img src= images/icon10.png alt="10 dots like a domino" style="min-height:50px;  max-width:100%;max-height:100%; ">';

 var score = 0;
function setToFirst5()
{  minFact = 1;
    maxFact=5;
     first5.style.display= "none";
     sixThru10.style.display="none";
     all10.style.display="none";
   startFact.style.display="block";
   //first5.disabled=true;
  //  sixThru10.disabled=true;
  //  all10.disabled=true;
   doneText="That's right! You've done the first five. Try again or try another set!"
   startUp();
}


function setToHigh5()
{  minFact = 6;
   maxFact=10;
   first5.style.display= "none";
   sixThru10.style.display= "none";
   all10.style.display= "none";
   startFact.style.display="block";
   doneText="That's right! You've done the biggest five. Try again or try another set!"
   startUp();
}

function setToAll10()
{  minFact = 1;
   maxFact=10;
   first5.style.display= "none";
   sixThru10.style.display= "none";
   all10.style.display= "none";
   startFact.style.display="block";
   doneText="That's right! You've done the full set. Keep practicing ... or try another fact."
   startUp();
}
function startUp()
{
   // start with our number x 1 or 6. 
   question.innerHTML="What multiplication fact is in the picture?";
  factNum=minFact;
    // reset the buttons 
    check1.disabled=false;
  //reset.disabled=false;
  startFact.disabled=false;
  // present the problem and call up its picture. 
  newFact();
}
function startOver()
{
 // first5.style.display="block";
  //nextToMult.innerHTML="start over okay?";
  //first52.disabled=false;
  sixThru10.style.display="block";
  document.getElementById("sixThru10").disabled = false;
 // all10.style.display="block";
 first5.style.display="block";
 all10.style.display="block"; 
 startFact.style.display="none";
 score=0;
 showScore();
 
}

function newFact()
// first make sure we're only going to ten. This is redundant.   POSSIBLE AMENDMENTS SEE COMMENTS 
{
 
  if (factNum>maxFact)
  {
  p1.innerHTML= "you're done!";
  startOver();
  } 
// maybe that should be in "check answer" or in both. 
else 
  {
        // p1.innerHTML="fact number  is: " + factNum;  
        // now type the question in for this fact, with the input box.
      userInput.innerHTML= factSet + " x " + '<input type="number" id="factor" size="1" maxlength="2"/>' + " = " + '<input type="number" id="multAnswer1" size = "1" maxlength="3"/> ';
      feedback.innerHTML="";
     
    }
    nextOne.disabled=true;
    check1.disabled=false;
// here's where we create the number chart and then shade in the multiples of the fact. 
createMultImage();
}


function createLivesImage()
{
  let livesLeftHTML="";
 
  if (livesLeft>0)

 {for (let num=1; num<=livesLeft; num++)
 
    {
      // 
      livesLeftHTML += livesLeftImg ;
      // now make it the HTML
    howManyLives.innerHTML=livesLeftHTML;
    }}
    else
    {livesLeftHTML="";
 howManyLives.innerHTML=livesLeftHTML;}
  }


function createMultImage()
{
  let multPicHTML="";

// WE SHOULDN'T HAVE TO DO THIS B/C IT'S JUST THE TENS 
//pickImage(factSet); 
if (factNum <=maxFact)

  {for (let num=1; num<=factNum; num++)
 
    {multPicHTML +='<div>'+ imgsrc + '</div>';
      // now make it the HTML
    multPic.innerHTML=multPicHTML;
    }
  }
}
function showScore()
{

  var s = document.getElementById("scoreBar");
 var ctx = s.getContext("2d");
 ctx.clearRect(0, 0, s.width, s.height);
ctx.fillStyle = "#30d73e";
ctx.fillRect(0,0,score, 50);


//   var s = document.getElementById("scoreBar");
//  var ctx = s.getContext("2d");
 
// ctx.fillStyle = "#30d73e";
// ctx.fillRect(0,0,score, 50);

//  ctx.fillRect(0,0,score, 50);
 var dude = document.getElementById('score');
 dude.innerHTML=score;
 // thatls the number version. 
}
// OKAY HERE IT GOES THE SCORING PART 
function checkName(picNum)
{
var b = factor.value;
if (b==="")
  {
    feedback.innerHTML="please enter an answer";
  }
else if (b==factNum)
  {
    
    // document.getElementById("A1").style.display = 'block';
    // document.getElementById("check2").style.display = 'inline';
    checkAnswer();
    
  }
else
    {
      feedback.innerHTML="Check your first entry; it doesn't seem to be right. ";
    }
}

function checkAnswer()
{
  var c = multAnswer1.value; 
  if (c==="")
    {     feedback.innerHTML="please enter an answer";      }

  else 
      if (c == factNum*factSet)
        {
            score += factPoints;
           if (factNum>=maxFact)
           {
            //  feedback.innerHTML="That's right! You're done with this set of facts."
            feedback.innerHTML=doneText;
             showScore();
             startOver();
             }
          else    
          {
          factNum+=4;
          feedback.innerHTML="That's right - try the next one!" ; 
          nextOne.disabled=false;
           check1.disabled=true;
            showScore();  
          } 
  }
  else{
    livesLeft-=1;
    if (livesLeft<=0)
    {
    livesLeft=0;    
 feedback.innerHTML="that doesn't seem to be it,  and you've got " + livesLeft + " lives left. You can start over though!";
 
 check1.disabled=true;
 // need a "you'll have to start over."   Disable check naswer.
    }
    else 
{    feedback.innerHTML="that doesn't seem to be it,  but you've got " + livesLeft + " lives left.";}
    
 //check1.disabled=true;
    createLivesImage();// do better than this -- make it actually diagnostic. 
  }
}





showScore();
createLivesImage();