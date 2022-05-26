
//Primeiro requisito
/* const reader = document.querySelector("body");
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

/* const paletaColors = document.querySelector("body");
const palet = document.createElement("section");
palet.id = "color-palette";
paletaColors.appendChild(palet);  */

const cores = document.querySelector("#color-palette");
const arrayCores = ["black", "red", "yellow", "green"];
for(let i = 0; i < arrayCores.length; i ++){
    let day = arrayCores[i];
    let dayItem = document.createElement("div");
    if(day === "black"){
       dayItem.className = "color selected";
       dayItem.style.background = "black";
       dayItem.style.border = "1px solid rgb(0,0,0)";
       dayItem.style.display = 'inline-block';
       dayItem.style.height = "50px";
       dayItem.style.width = "50px";
       cores.appendChild(dayItem); 
    }
    if(day === "red"){
        dayItem.className = "color";
        dayItem.style.background = "red";
        dayItem.style.border = "1px solid rgb(0,0,0)"
        dayItem.style.display = 'inline-block'; 
        dayItem.style.height = "50px";
        dayItem.style.width = "50px";
        cores.appendChild(dayItem); 
     }
     if(day === "yellow"){
        dayItem.className = "color";
        dayItem.style.background = "yellow";
        dayItem.style.border = "1px solid rgb(0,0,0)";
        dayItem.style.display = 'inline-block';
        dayItem.style.height = "50px";
        dayItem.style.width = "50px";
        cores.appendChild(dayItem); 
     }
     if(day === "green"){
        dayItem.className = "color";
        dayItem.style.background = "green";
        dayItem.style.border = "1px solid rgb(0,0,0)"
        dayItem.style.display = 'inline-block';
        dayItem.style.height = "50px";
        dayItem.style.width = "50px";
        cores.appendChild(dayItem); 
     }
}

//requisito 3
function verificaCor(){
    const corBlack = document.querySelector("#color-palette");
    corBlack.firstChild.style.backgroundColor === "black";
}

//requisito 4-  e 5 - 25 elementos 
function createQuadro(){
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
}createQuadro();
//requisito 8 -
let cor = "black";
const pixelBarra = document.getElementsByClassName("pixel");
for(let i = 0; i < pixelBarra.length; i ++){
   let day = pixelBarra[i];
   if(day.style.backgroundColor === "white")
      day.addEventListener("click", function(){
         day.style.backgroundColor = cor;
      });
   }

      

const barra = document.getElementsByClassName('color');
barra[0].addEventListener("click", removerClass0);
barra[1].addEventListener("click", removerClass1);
 barra[2].addEventListener("click", removerClass2);
barra[3].addEventListener("click", removerClass3);
 
   function removerClass0(){
   barra[0].classList.add('selected');
   barra[1].classList.remove('selected');
   barra[2].classList.remove('selected');
   barra[3].classList.remove('selected');
   cor = "black";
   
  }


  function removerClass1(){
   barra[0].classList.remove('selected');
   barra[1].classList.add('selected');
   barra[2].classList.remove('selected');
   barra[3].classList.remove('selected');
   cor = "red";
  }


  function removerClass2(){
   barra[0].classList.remove('selected');
   barra[1].classList.remove('selected');
   barra[2].classList.add('selected');
   barra[3].classList.remove('selected');
   cor = "yellow";
   
  }


  function removerClass3(){
   barra[0].classList.remove('selected');
   barra[1].classList.remove('selected');
   barra[2].classList.remove('selected');
   barra[3].classList.add('selected');
   cor = "green";
  }
  

      
      

  
      

      


 
 









