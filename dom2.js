/* selecting element by Id name 

const title = document.getElementById("main-heading");
console.log(title);

/* selecting element by Class name 

const listItem = document.getElementsByClassName('container')
console.log(listItem);


/* selecting element by TagName 

const tagname = document.getElementsByTagName('li');
console.log(tagname)

/* selecting element by querySelector 

const  container = document.querySelector('div')
console.log(container) 


/* selecting element by querySelectorAll

const  containerTWO = document.querySelectorAll('div')
console.log(containerTWO)   


const title = document.querySelector('#main-heading');
title.style.color = 'red'
console.log(title)

const listItem = document.querySelectorAll('.list-item');

for (i = 0; i< listItem.length; i++ ){
    listItem[i].style.fontSize = '2rem'
}
console.log(listItem)  

creating Elements  

const ul = document.querySelector('ul')
const li = document.createElement('li')
// Adding Element
ul.append(li)


//Modifying Element
li.innerText = 'X-Men';

li.setAttribute('id', 'main-heading'); */

// EVENT LISTENERS
//const ul = document.querySelector('ul');

//const html = document.documentElement;

//console.log(ul.children);

//ul.childNodes[4].style.backgroundColor = 'red';
/*

const btn1 = document.querySelector('.btn-1');

function alertbnt(){
  alert('I love js you know');
}
btn1.addEventListener('click', alertbnt);

// Hover

const box3 = document.querySelector(".cont-3");

function changeBg() {
  box3.style.backgroundColor = "green";
}

box3.addEventListener("mouseover", changeBg);

const revealbtn = document.querySelector(".reveal-btn");

const hiddenContent = document.querySelector(".hidden");

function revealcontent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}

revealbtn.addEventListener("click", revealcontent)

window.addEventListener('click', function(){
  console.log('Window');
},true);

document.addEventListener('click', function(){
  console.log('Document')
},true);


document.querySelector('.two').addEventListener('click', function(){
  console.log('two')
},true);


document.querySelector('.one').addEventListener('click', function(){
  console.log('one')
},true);

document.querySelector('.reveal-btn').addEventListener('click', function(e){
  console.log(e);
},true);
;
document.querySelector('.list-item1').addEventListener('click', function(e){

  console.log('List 1 is clicked');

  const target = e.target;

  if (target.matches('li')){
    target.style.backgroundColor = 'lightgrey'
  }
});

document.querySelector('.list-item2').addEventListener('click', function(e){

  console.log('List 2 is clicked');

  const target = e.target;

  if (target.matches('li')){
    target.style.backgroundColor = 'lightgrey'
  }
});

document.querySelector('.list-item3').addEventListener('click', function(e){

  console.log('List 3 is clicked');

  const target = e.target;

  if (target.matches('li')){
    target.style.backgroundColor = 'lightgrey'
  }
});

document.querySelector('.list-item4').addEventListener('click', function(e){

  console.log('List 4 is clicked');

  const target = e.target;

  if (target.matches('li')){
    target.style.backgroundColor = 'lightgrey'
  }
});
document.querySelector('.list-item5').addEventListener('click', function(e){

  console.log('List 5 is clicked');

  const target = e.target;

  if (target.matches('li')){
    target.style.backgroundColor = 'lightgrey'
  }
});

document.querySelector('.list').addEventListener('click', function(e){

  console.log(e.target.getAttribute('class') + ' is clicked');

  const target = e.target;


  if (target.matches('li')){
    target.style.backgroundColor = 'blue';
  }
  else{
    target.style.backgroundColor = 'yellow'
  }

 
});


// QOUTES GENERATOR

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let  person = document.querySelector('.person');


const qoutes = [{quote: `“The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.”`,
person: `Isaac Asimov `},

{quote: `“We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.”`,
person: `Carl Sagan  `},

{quote: `“Everything is theoretically impossible until it is done.”"`,
person: `Robert A. Heinlein `},

{quote: `“If we knew what it was we were doing, it would not be called research, would it?”`,
person: `Albert Einstein  `},

{quote: `“There are in fact two things, science and opinion; the former begets knowledge, the latter ignorance.”`,
person: `Hippocrates `},

{quote: `“Science is magic that works.”`,
person: `Kurt Vonnegut `},

{quote: `“Until man duplicates a blade of grass, nature can laugh at his so-called scientific knowledge.”`,
person: `  Thomas Edison `},


{quote: `“In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual.” `,
person: ` Galileo Galilei  `},


{quote: `“The scientist only imposes two things, namely truth and sincerity, imposes them upon himself and upon other scientists.”`,
person: `   Erwin Schrödinger `},


{quote: `"“The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.”`,
person: `Nikola Tesla  `},

];

function control() {
  let random = Math.floor(Math.random() * qoutes.length);

  quote.innerText = qoutes[random].quote;
  person.innerText = qoutes[random].person;

}

btn.addEventListener('click', control); 

let openBtn = document.querySelector('#open-btn')

let modalContainer = document.querySelector('#modal-container')

let CloseBtn = document.getElementById('close-btn')



openBtn.addEventListener('click', function(){
  modalContainer.style.display = 'block'
})

CloseBtn.addEventListener('click', function(){
  modalContainer.style.display ='none';
})

window.addEventListener('click', function(e){
  if (e.target === modalContainer){
    modalContainer.style.display = 'none';
  }
})  




//ACCORDION

const accordion = document.getElementsByClassName('content-container')

for (i = 0; i < accordion.length; i++){

  accordion[i].addEventListener('click', function(){

    this.classList.toggle('active');

  });
}

*/