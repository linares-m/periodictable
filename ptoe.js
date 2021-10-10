//TODO:
// Add link in place of source - complete
// Category selections - checkbox - COMPLETE
window.addEventListener("DOMContentLoaded", elInfo)
const selector = document.getElementsByTagName('g');
//Create array to be used in filtering the elements by category
// function categoriesForFiltering(){
//The following iterates through all the elements to extract all element's categories,
//then adds each category name to an array 'acc'; this array will contained options for filtering.
var acc = []
for(i=0; i<selector.length; i++){
  var cur = selector[i].dataset.category;
  if(acc.includes(cur)===false){acc.push(cur)}
}
//Create checkboxes
// NOTE: LABLES MUST BE APPENDED FIRST - you cannot insert labels into input elements
const sortedCategories = acc.sort()
var category = (d) => d
d3.select("#checkboxContainer").selectAll("label")
.data(sortedCategories)
.enter().append("label")
.attr("for", category)
.text(category)
.append("input")
.attr("type", "checkbox")
.attr("id", category)
.attr("value", category)
.attr("class", "categoryOptions")
.attr("title", category)

//Add event listeners for category checkboxes
let checkboxes = document.getElementsByTagName("input")
for (i=0; i<checkboxes.length; i++){
  checkboxes[i].addEventListener("change", function(){
    console.log(this.id);
    var categoryString = '' + this.id
    var categoryToHighlight =  `"[data-category='` + categoryString + `']"`;
    const categorySelect = document.querySelectorAll(eval(categoryToHighlight));
    if (this.checked == true){
      for(j=0; j<categorySelect.length; j++){
        categorySelect[j].style.outline = "2px dotted white";
      }
    }
    if (this.checked == false){
      for(j=0; j<categorySelect.length; j++){
        categorySelect[j].style.outline = "";
      }
    }
  })
}

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
        for (i=0; i<selector.length; i++){
          selector[i].style.outline = "none";
        }
      }
      this.style.outline = "2px dashed white"
      this.style.filter = "brightness(1.2)"

    })
  }
}
