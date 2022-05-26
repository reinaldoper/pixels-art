
//Primeiro requisito
const reader = document.querySelector("body");
const reader1 = document.createElement("header");
reader1.id = "topo";
reader.appendChild(reader1);

const titleH1 = document.querySelector("#topo");
const tagH1 = document.createElement("h1");
tagH1.innerHTML = "Paleta de Cores";
tagH1.id = "title";
titleH1.appendChild(tagH1);

//Segundo requisito
/* const nowDiv = document.querySelector("#title");
const newDiv = document.createElement("div");
newDiv.id = "div1";
nowDiv.appendChild(newDiv); */

const paletaColors = document.querySelector("body");
const palet = document.createElement("section");
palet.id = "color-palette";
paletaColors.appendChild(palet);

const cores = document.querySelector("#color-palette");
const arrayCores = ["black", "red", "yellow", "green"];
for(let i = 0; i < arrayCores.length; i ++){
    let day = arrayCores[i];
    let dayItem = document.createElement("div");
    if(day === "black"){
       dayItem.className = "color selected";
       dayItem.style.backgroundColor = "black";
       dayItem.style.border = "1px solid black"
       cores.appendChild(dayItem); 
    }
    if(day === "red"){
        dayItem.className = "color";
        dayItem.style.backgroundColor = "red";
        dayItem.style.border = "1px solid black"
        cores.appendChild(dayItem); 
     }
     if(day === "yellow"){
        dayItem.className = "color";
        dayItem.style.backgroundColor = "yellow";
        dayItem.style.border = "1px solid black"
        cores.appendChild(dayItem); 
     }
     if(day === "green"){
        dayItem.className = "color";
        dayItem.style.backgroundColor = "green";
        dayItem.style.border = "1px solid black"
        cores.appendChild(dayItem); 
     }
}

//requisito 3
function verificaCor(){
    const corBlack = document.querySelector("#color-palette");
    corBlack.firstChild.style.backgroundColor === "black";
}

//requisito 4-  e 5 - 25 elementos 

const quadro = document.createElement("section");
quadro.id = "pixel-board";
document.body.appendChild(quadro);
for (let i = 0; i < 5; i ++) {
  const line = document.createElement("div");
  for (let j = 0; j < 5; j ++) {
  const element = document.createElement("div");
  element.className = "pixel";
  element.style.width = "40px";
  element.style.height = "40px";
  element.style.border = "1px solid black";
  element.style.backgroundColor = "white";
  element.style.display = 'inline-block', 
  quadro.appendChild(line);
  line.appendChild(element);
  }
}
//requisito 6 - 
/* window.onload =  function(){ */
/*  const selecao = document.querySelector("#color-palette").getElementsByClassName("color");
 for(let i = 0; i < selecao.length; i ++){
     let colocaClasse = selecao[i];
     if(colocaClasse === "black")
     colocaClasse.className = "selected";
     selecao.appendChild(colocaClasse);
 }
} */









