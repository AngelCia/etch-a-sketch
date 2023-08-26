let containerEl = document.getElementById("main");

function createAllDivs(num){
    for(let i = 0; i < num; i++){
        let outDiv = document.createElement("div");
        outDiv.classList.add("outer");
        createInnerDivs(num, outDiv);
        document.getElementById("main").appendChild(outDiv);
    }
}

function createInnerDivs(num, outerDiv){
    for(let x = 0; x < num; x++){
        let innerDiv = document.createElement("div");
        innerDiv.classList.add("inner");
        outerDiv.appendChild(innerDiv);
    }
}

document.getElementById("gridSize").onclick = function(){
    while (containerEl.firstChild) {
        containerEl.removeChild(containerEl.firstChild);
      }
    let size = document.getElementById("myText").value;
    console.log(size);
    createAllDivs(size);
}


