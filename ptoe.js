//TODO:
// Add link in place of source
// Category selections
//

window.addEventListener("DOMContentLoaded", elInfo)
const selector = document.getElementsByTagName('g');
function elInfo(){
  for (i=0; i < selector.length; i++){
    
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
    selector[i].addEventListener("click", function(){
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
        this.classList.toggle("active");
        
        
      }
      /*    if ((document.querySelector("#iRI").display == "none") && (document.querySelector("#iRD").visibility == "visible")){
      document.querySelector("#iR1").innerHTML = "Name: " + datum.name + ", Number: " + datum.number + ", Category: " + datum.category + ", Phase: " + datum.phase + ", Appearance: " + datum.appearance;
      document.querySelector("#iR2").innerHTML = "Atomic Mass: " + datum.atomicMass + ",  Density: " + datum.density + ", Melting Point: " + datum.meltingPoint + ", Boiling Point: " + datum.boilingPoint, ", Electron Affinity: " + datum.electronConfig;
      document.querySelector("#iR3").innerHTML =  datum.shells;
      document.querySelector("#iR4").innerHTML =    datum.summary;
      document.querySelector("#iR5").setAttribute("href", datum.source);
    }
    if (document.querySelector("#iR1").innerHTML.startsWith(this.id) == false){
    document.querySelector("#iRI").style.display = "block";
    document.querySelector("#iR1").innerHTML = "";
    document.querySelector("#iR2").innerHTML = "";
    document.querySelector("#iR3").innerHTML =  "";
    document.querySelector("#iR4").innerHTML =  "";
    document.querySelector("#iR5").removeAttribute("href", datum.source);
    document.querySelector("#iRD").style.visibility = "hidden";
  } */
})
}
}

window.addEventListener("DOMContentLoaded", toClipboard)
function toClipboard() {
  var qD = Array.from(document.querySelectorAll(".quantData"));
  var copyText = qD.map((i)=> i)
  console.log(copyText)
  for(n=0; n < copyText.length; n++){
    copyText[n].addEventListener("click", function(){
      console.log('copytexti: ', copyText[n])
      copyText[n].select();
      copyText[n].setSelectionRange(0, 20000);
      navigator.clipboard.writeText(copyText[n].innerHTML);
      var tooltip = document.getElementById("tooltip");
      window.alert("Copied: " + copyText[n].innerHTML);
    })
    
    copyText[n].addEventListener("mouseover", function () {
      document.getElementById(".iRI p").innerHTML = "Click on an element to see info about the element. Copy to clipboard";
    })
    copyText[n].addEventListener("mouseout", function () {
      document.getElementById(".iRI p").innerHTML = "";
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
