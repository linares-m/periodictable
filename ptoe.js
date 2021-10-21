//TODO:
// Keyboard navigation: Add selectability to each element when focused on with keyboard
window.addEventListener("DOMContentLoaded", elInfo)
const elements = document.getElementsByTagName('g');

//Update Info Pane with element info when element is clicked on:
function elInfo(){
  for (i=0; i < elements.length; i++){
    elements[i].tabIndex = "";
//     elements[i].addEventListener('focus', function(){
//       console.log(this);
// })
    elements[i].addEventListener("mouseover", hoverElement);
    elements[i].addEventListener("focus", hoverElement);
function hoverElement(){
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
    }
    elements[i].addEventListener("mousedown", selectElement);
    elements[i].addEventListener("keypress", selectElement);

function selectElement(){
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
    }
  }
}
//------------------------------------------------------------------------------
//Create Category Filtering Menu:
//Add each element's category name to an array 'categories'; this array will contain radio options.
var categories = []
for(i=0; i<elements.length; i++){
  var cur = elements[i].dataset.category;
  if(categories.includes(cur)===false){categories.push(cur)}
}
//Create radio for filtering by category
// NOTE: LABELS MUST BE APPENDED FIRST - you cannot insert labels into input elements
const sortedCategories = categories.sort()
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
.attr("tabindex", "1")

//Add event listeners for category radio input
// NOTE: The htmlcollection is made up of 'input' elements - allows for switching
//input type for future adaptations
document.getElementById("none").addEventListener("click", function(){
  if(this.checked == true){
    for(h=0; h<elements.length; h++){
      elements[h].style.filter = "brightness(1)"
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
    var categoryToHighlight = `"[data-category='`+ this.id + `']"`;
    const categorySelect = document.querySelectorAll(eval(categoryToHighlight));
    console.log(this.checked);
     if (this.checked == true){
      for(k=0; k<elements.length; k++){
        elements[k].style.filter = "brightness(.3)";
        for(j=0; j<categorySelect.length; j++){
          categorySelect[j].style.filter = "brightness(1)";
        }
      }
    }
    if (this.checked == false){
      document.querySelector(querySelectRadioLabels).classList.replace('active', '');
      for(j=0; j<elements.length; j++){
        elements[j].style.filter = "brightness(1)";
      }
    }
  })
}

//Scripts for reset/filter button click events:
document.getElementById('reset').addEventListener("click", resetSelections);
document.getElementById('reset').accessKey = 'r';
console.log("'reset' access key: r");
function resetSelections(){
  for(i=0; i<elements.length; i++){
    elements[i].style.outline = '';
    elements[i].style.filter = 'brightness(1)';
    document.getElementById('none').checked = true;
  }
}

//------------------------------------------------------------------------------

//WIP, WISHLIST FEATURES:
//Option to remove colors:
// document.getElementById('blackWhite').addEventListener("click", ()=>{
//   for(i=0; i<document.querySelectorAll('rect').length; i++){
//     if (document.getElementById('Hydrogen').style.backgroundColor == ''){ //checks if the g element has inherited bg value (not visible by default)
//       document.querySelectorAll('rect')[i].style.fill = 'white';
//     }
//
//     if (document.querySelector('rect.He').style.fill == 'white'){
//       document.querySelectorAll('rect')[i].style.fill = '';
//     }
//   }
//   for(i=0; i<document.querySelectorAll('text').length; i++){
//     if (document.getElementById('Hydrogen').style.backgroundColor == ''){
//       document.querySelectorAll('text')[i].style.fill = 'black';
//     }
//     if (document.querySelector('rect.He').style.fill == 'white'){
//       document.querySelectorAll('text')[i].style.fill = 'revert';
//      console.log('bgcolorhelium not white')
//     }
//   }
// })
