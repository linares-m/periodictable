window.addEventListener("DOMContentLoaded", elInfo)
const selector = document.getElementsByTagName('g');
function elInfo(){
  for (i=0; i < selector.length; i++){

    selector[i].addEventListener("click", function(){
      let datum = []
      datum = this.dataset
      document.querySelector("#infoReader").innerHTML = "Name: " + datum.name + ",  Number: " + datum.number + ",     Category: " + datum.category + ",   Atomic Mass: " + datum.atomicMass + ",  Summary: " +  datum.summary + "   Source: "  + datum.source
      d3.select(".infoPane")
      .selectAll("p")
      .data(datum)
      .enter().append("p")
      .text('test')
      .style("margin-top", "8px" )
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
