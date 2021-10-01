//TODO:
// Category selections

window.addEventListener("DOMContentLoaded", elInfo)
const selector = document.getElementsByTagName('g');
function elInfo(){
  for (i=0; i < selector.length; i++){

    selector[i].addEventListener("mouseover", function(){
      let datum = []
      datum = this.dataset;
      if (document.querySelector("#iR2").innerHTML == ""){
        document.querySelector("#iR1").innerHTML = "Name: " + datum.name + ", Number: " + datum.number + ", Category: " + datum.category + ", Phase: " + datum.phase + ", Appearance: " + datum.appearance;
        document.querySelector("#iR1").style.visibility = "visible"
      }
      else {
        null;
      }
    })
    selector[i].addEventListener("click", function(){
      let datum = []
      datum = this.dataset
      if ((document.querySelector("#iR2").innerHTML == "") || (document.querySelector("#iRI").style.display == "none")) {
        document.querySelector("#iRI").style.display = "none";
        document.querySelector("#iR1").innerHTML = "Name: " + datum.name + ", Number: " + datum.number + ", Category: " + datum.category + ", Phase: " + datum.phase + ", Appearance: " + datum.appearance;
        document.querySelector("#iR2").innerHTML = "Atomic Mass: " + datum.atomicMass + ",  Density: " + datum.density + ", Melting Point: " + datum.meltingPoint + ", Boiling Point: " + datum.boilingPoint, ", Electron Affinity: " + datum.electronConfig;
        document.querySelector("#iR3").innerHTML =  datum.shells;
        document.querySelector("#iR4").innerHTML =    datum.summary;
        document.querySelector("#iR5").setAttribute("href", datum.source);
        document.querySelector("#iRD").style.visibility = "visible";
        
        }
     })
  }
}
       
