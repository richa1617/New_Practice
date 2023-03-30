const btn = document.querySelector('.btn');
const box = document.querySelector('#box');

btn.addEventListener('click', function (e) {
  console.log('The button was clicked!');

});

box.addEventListener('click', function (e) {
  console.log('The box was clicked!');
});


const btn1 = document.querySelector('.btn1');
const box1 = document.querySelector('#box1');

btn1.addEventListener('click', function (e) {
  console.log('The button was clicked!')
  e.stopPropagation();

});

box1.addEventListener('click', function (e) {
  console.log('The box was clicked!');
});