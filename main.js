function drawGrid(n){ // n = tamanho da grade
  let grid = document.querySelector('#inner-frame-div');
  
  grid.innerHTML = "";

  for(let i=0;i<n;i++){
    let intergrid = document.createElement('div');
    for(let j=0;j<n;j++){
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
