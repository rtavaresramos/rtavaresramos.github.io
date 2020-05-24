var e = document.getElementById("toggle-control")

function handleToggle(){
e.classList.toggle("toggle-off")
}

var arrowLeft = document.getElementById("arrow-left")
var arrowRight = document.getElementById("arrow-right")
var projectContainer = document.getElementById("project-container")

var allTopics1 = document.querySelector(".topic__container-1")
var allTopics2 = document.querySelector(".topic__container-2")
var allTopics3 = document.querySelector(".topic__container-3")
var allTopics4 = document.querySelector(".topic__container-4")
var button = document.querySelector(".call-to-action")

var rightMove = 0
arrowLeft.addEventListener('click', ()=>{
  if(rightMove>900){
    
    arrowLeft.style.display = 'block'
  }else{
    arrowLeft.style.display = 'none'
  }
  if(rightMove<900){
    arrowRight.style.display = 'none'
  }else{
    arrowRight.style.display = 'block'
  }
  if(rightMove == 0){
    projectContainer.scrollLeft = rightMove
  }else{
  rightMove = rightMove - 900
  projectContainer.scrollLeft = rightMove
  }
})

arrowRight.addEventListener('click', ()=>{
  if(rightMove>=0){
    arrowLeft.style.display = 'block'
  }else{
    arrowLeft.style.display = 'none'
  }
  if(rightMove<900){
    arrowRight.style.display = 'block'
  }else{
    arrowRight.style.display = 'none'
  }
  if(rightMove == 1800){
    projectContainer.scrollLeft = rightMove
  }else{
  rightMove = rightMove + 900
  projectContainer.scrollLeft = rightMove
  }
})

window.addEventListener("scroll", function() {
  var positionY = window.pageYOffset
 if(positionY >= 200){
   allTopics1.style.display = 'block'
 }
 if(positionY >= 500){
   allTopics2.style.display = 'block'
 }
 if(positionY >= 800){
   allTopics3.style.display = 'block'
 }
 if(positionY >= 1100){
   allTopics4.style.display = 'block'
   allTopics4.style.marginBottom = '30px'
 }
 if(positionY >= 1200){
   allTopics4.style.display = 'block'
   allTopics4.style.marginBottom = '30px'
 }

});