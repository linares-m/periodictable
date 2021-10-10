window.addEventListener("DOMContentLoaded", elInfo)
const selector = document.getElementsByTagName('g');

//The following iterates through all the elements to extract all element's categories,
//then adds each category name to an array 'acc' for filtering in the app.
var acc = []
for(i=0; i<selector.length; i++){
  var cur = selector[i].dataset.category;
  if(acc.includes(cur)===false){acc.push(cur)}
}
//Create radioes
// NOTE: LABLES MUST BE APPENDED FIRST - you cannot insert labels into input elements
const sortedCategories = acc.sort()
var category = (d) => d
d3.select("#radioContainer").selectAll("label")
.data(sortedCategories)
.enter().append("label")
.attr("for", category)
.text(category)
.append("input")
.attr("type", "radio")
.attr("id", category)
.attr("value", category)
.attr("name", "categoryOptions")
.attr("title", category)

//Add event listeners for category radioes
// NOTE: The htmlcollection is made up of 'input' elements - allows for switching
//input type for future adaptations
document.getElementById("none").addEventListener("click", function(){
  if(this.checked == true){
    for(h=0; h<selector.length; h++){
      selector[h].style.filter = "brightness(1)"
    }
  }
})

//Add event listeners to radio buttons
//Declare variables for getting elements from DOM to script with
let radio = document.getElementsByTagName("input");

//function for category highlighting
for (i=1; i<radio.length; i++){
  radio[i].addEventListener("change", function(){
    console.log(this.id);
    var categoryToHighlight =  `"[data-category='` + this.id + `']"`;
    const categorySelect = document.querySelectorAll(eval(categoryToHighlight));
    console.log(this.checked);
     if (this.checked == true){
      for(k=0; k<selector.length; k++){
        selector[k].style.filter = "brightness(.3)";
        for(j=0; j<categorySelect.length; j++){
          categorySelect[j].style.filter = "brightness(1)";
        }
      }
    }
    if (this.checked == false){
      document.querySelector(querySelectRadioLabels).classList.replace('active', '');
      for(j=0; j<selector.length; j++){

        selector[j].style.filter = "brightness(1)";
      }
    }
  })
}

//Scripts for reset/filter button click events:
document.getElementById('reset').addEventListener("click", ()=>{
  for(i=0; i<selector.length; i++){
    selector[i].style.outline = '';
    selector[i].style.filter = 'brightness(1)';
    document.getElementById('none').checked = true;
  }
})

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
    selector[i].addEventListener("mousedown", function(){
      let datum = []
      datum = this.dataset
      if ((document.querySelector("#qD1").innerHTML == "")
      || (document.querySelector(".iRI p").innerHTML == "Click on another element to see more about it")) {
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
      }
      this.style.outline = "2px dashed white"
      this.style.filter = "brightness(1.2)"

    })
  }
}
