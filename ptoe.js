window.addEventListener("DOMContentLoaded", elInfo)
const selector = document.getElementsByTagName('g');
  function elInfo(){
    for (i=0; i < selector.length; i++){

      selector[i].addEventListener("click", function(){
       document.querySelector("#infoReader").innerHTML = "About This Element: " +  this.dataset.summary
      })
    }
  }

/*window.addEventListener("DOMContentLoaded", createCatMenu)
function createCatMenu(){
   var gNodes = document.querySelectorAll("g")
   for (i = 0; i < gNodes.length; i++){
      console.log(gNodes[i].dataset.category)
   }
}*/
