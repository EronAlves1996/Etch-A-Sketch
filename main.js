let grid = document.querySelector('#inner-frame-div');

for(let i=0;i<16;i++){
  let intergrid = document.createElement('div');
  for(let j=0;j<16;j++){
    let subgrid = document.createElement('div');
    subgrid.className = 'grid-el';
    intergrid.appendChild(subgrid);
  }
  grid.appendChild(intergrid);
}
