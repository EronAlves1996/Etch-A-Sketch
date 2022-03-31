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
  let changeColor = (e) => e.target.style.backgroundColor = color;
  let grids = document.querySelectorAll('.grid-el');
  grids.forEach(n=>{
    n.removeEventListener('mouseenter', changeColor);
    n.addEventListener('mouseenter', changeColor);
  });
}

function activateEraser(){
  activateColorMode('white');
}

function activateRainbow(){
  let colors = ['red',
    'orange',
    'yellow',
    'green',
    'aqua',
    'blue',
    'purple'
  ]
  let grids = document.querySelectorAll('.grid-el');

  let counter = 0;

  grids.forEach(n=>n.addEventListener('mouseenter', (e)=>{
    activateColorMode(colors[counter]);
    counter++;
    if (counter == 7) counter = 0;
  }));


}

function clearAll(){

}

function selectColor(){

}
