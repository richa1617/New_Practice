document.querySelector('#grandparent')
  .addEventListener('click', () => {
    console.log('Grandparent click event')
  }),
  
document.querySelector('#parent')
  .addEventListener('click', (e) => {
      
    console.log('Parent click event')
  })
  
document.querySelector('#child')
  .addEventListener('click', () => {
    console.log('Child click event')
  })


  document.querySelector('#grandparent1')
  .addEventListener('click', () => {
    console.log('Grandparent-1 click event')
  },true),
  
document.querySelector('#parent1')
  .addEventListener('click', () => {
    console.log('Parent-1 click event')
  },true)
  
document.querySelector('#child1')
  .addEventListener('click', () => {
    console.log('Child-1 click event')
  },true)