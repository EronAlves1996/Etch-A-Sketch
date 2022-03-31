


function drawGrid(n){ // n = tamanho da grade
  let grid = document.querySelector('#inner-frame-div');
  for(let i=0;i<16;i++){
  let intergrid = document.createElement('div');
  for(let j=0;j<16;j++){
    let subgrid = document.createElement('div');
    subgrid.className = 'grid-el';
    subgrid.addEventListener('mouseenter', ()=>subgrid.style.backgroundColor="black");
    intergrid.appendChild(subgrid);
  }
  grid.appendChild(intergrid);
}
}

function activateColorMode(){

}

function activateEraser(){

}

function activateRainbow(){

}

function clearAll(){

}

function selectColor(){

}
