function drawGrid(n){ // n = tamanho da grade
  let grid = document.querySelector('#inner-frame-div');
  
  grid.innerHTML = "";

  for(let i=0;i<n;i++){
    let intergrid = document.createElement('div');
    for(let j=0;j<n;j++){
      let subgrid = document.createElement('div');
      subgrid.className = 'grid-el';
      intergrid.appendChild(subgrid);
    }
    grid.appendChild(intergrid);
  }

}

function activateColorMode(color){
  let grids = document.querySelectorAll('.grid-el');
  grids.forEach(n=>{
    let y = n.cloneNode(true);
    n.parentNode.replaceChild(y, n);
    y.addEventListener('mouseenter', (e)=>e.target.style.backgroundColor = color);
  });
}

function activateEraser(){
  activateColorMode('white');
}

function activateRainbow(){

}

function clearAll(){

}

function selectColor(){

}
