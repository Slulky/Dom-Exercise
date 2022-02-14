//1 
document.getElementById('container')
//2
const container = document.querySelector('#container')
//3
const secondLis = document.querySelectorAll('.second')
//4
const ol = document.querySelector('ol')
const lastChildOl = ol.lastElementChild
//5
container.childNodes[0].data = 'Hello!'
//6
const footerDiv = document.querySelector('.footer')
footerDiv.classList.add('main')
//7
footerDiv.classList.remove('main')
//8
const ul = document.querySelector('ul')
const newLi = document.createElement('li')
//9
newLi.textContent = 'four'
//10
ul.append(newLi)
//11
const allOls = document.querySelector('ol')
let liInsideOl = document.querySelectorAll("ol li");
for (let li of liInsideOl){
    li.style.backgroundColor = 'green'
}
//12
footerDiv.remove();

