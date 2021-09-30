window.addEventListener("DOMContentLoaded", elInfo)
const selector = document.getElementsByTagName('g');
function elInfo(){
  for (i=0; i < selector.length; i++){

    selector[i].addEventListener("click", function(){
      let datum = []
      datum = this.dataset
      document.querySelector("#iR1").innerHTML = "Name: " + datum.name + ", Number: " + datum.number + ", Category: " + datum.category + ", Phase: " + datum.phase + ", Appearance: " + datum.appearance;
      document.querySelector("#iR2").innerHTML = "Atomic Mass: " + datum.atomicMass + ",  Density: " + datum.density + ", Melting Point: " + datum.meltingPoint + ", Boiling Point: " + datum.boilingPoint, ", Electron Affinity: " + datum.electronConfig;
      document.querySelector("#iR3").innerHTML = "Electron Shells" + datum.shells;
      document.querySelector("#iR4").innerHTML =   "Summary: " +  datum.summary;
      document.querySelector("#iR5").innerHTML =  "Source: "  + datum.source;
    })
  }
}
