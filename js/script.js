var e = document.getElementById("toggle-control")

function handleToggle(){
e.classList.toggle("toggle-off")
}

var arrowLeft = document.getElementById("arrow-left")
var arrowRight = document.getElementById("arrow-right")
var projectContainer = document.getElementById("project-container")
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