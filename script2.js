 // These are functions that didn't work when they were in the same .js file as the one that created the divs they are shading. LOL this is for I think the numbers chart version.   Doesn't apply to this at all.   Yup. 
function changeMultiples(selectorStr, oldColor, bgColor) {
  document.querySelectorAll(selectorStr).forEach(elem => {
    elem.style.backgroundColor = oldColor;
  });
  let d = document.querySelectorAll(selectorStr); 


  for (let n=factSet-1; n<factNum*factSet; n+=factSet)
  
 { d[n].style.backgroundColor=bgColor;}
//  document.getElementById("d5").style.backgroundColor="pink";
// that was to test to see if assigning ID worked.
}
  
   
   //  make hitting enter like clicking "check answer."  Except it doesn't work anymore. I tried moving it to the beginning as well as moving it here. I *think* it's a "needs to be its own script" thing.
   // BUT you want it to take the first one and just change the focus to the second one which you don't know how to do yet. 
// var input = document.getElementById("factor");
// input.addEventListener("keyup", function(event)
//  {
//   if (event.keyCode === 13) {
//    event.preventDefault();
//    document.getElementById("check1").click();
//   }
// })
// this is here because ... it crashes when it's in the first one. 

var input2 = document.getElementById("multAnswer1");
input2.addEventListener("keyup", function(event)
 {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("check1").click();
  }
})


     
 