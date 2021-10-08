function elInfo(){
  for (i=0; i < selector.length; i++){
    selector[i].tabIndex = "";
    
    selector[i].addEventListener("mouseover", function(){
      let datum = []
      datum = this.dataset;
      if (document.querySelector("#qD1").innerHTML == "") {
        document.querySelector("#cDH").innerHTML == "Classification Data"
        document.querySelector("#cD1").innerHTML = "Name: " + datum.name
        document.querySelector("#cD2").innerHTML = " Number: " + datum.number
        document.querySelector("#cD3").innerHTML = " Category: " + datum.category
      }
      else {
        null;
      }
    })
    selector[i].addEventListener("mouseup", function(){
      this.classList.toggle("inactive");
    })
    selector[i].addEventListener("mousedown", function(){
      let datum = []
      datum = this.dataset
      if ((document.querySelector("#qD1").innerHTML == "") || (document.querySelector(".iRI p").innerHTML == "Click on another element to see more about it")) {
        document.querySelector(".iRI p").innerHTML = "Click on another element to see more about it";
        document.querySelector("#cD1").innerHTML = "Name: " + datum.name
        document.querySelector("#cD2").innerHTML = " Number: " + datum.number
        document.querySelector("#cD3").innerHTML = " Category: " + datum.category
        document.querySelector("#pD1").innerHTML = " Phase: " + datum.phase
        document.querySelector("#pD2").innerHTML = "  Appearance: " + datum.appearance
        document.querySelector("#qD1").innerHTML = "Atomic Mass: " + datum.atomicMass
        document.querySelector("#qD2").innerHTML =   "Density: " + datum.density
        document.querySelector("#qD3").innerHTML = "Boiling Point: " + datum.boilingPoint
        document.querySelector("#qD4").innerHTML ="Melting Point: " + datum.meltingPoint
        document.querySelector("#qD5").innerHTML ="Electron Affinity: " + datum.electronConfig
        document.querySelector("#qD6").innerHTML = "Electron Shells:" +  datum.shells
        document.querySelector("#iR4").innerHTML =    datum.summary;
        document.querySelector("#iR5").setAttribute("href", datum.source);
        document.querySelector("#iRD").style.visibility = "visible";
        for (i=0; i<selector.length; i++){
          selector[i].style.outline = "2px solid black";}
        }
        this.style.outline = "2px dashed white"
        this.style.filter = "brightness(1.2)"
     })
   }
}
