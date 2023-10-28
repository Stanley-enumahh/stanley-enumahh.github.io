const togglebtn = document.getElementById("togglebtn");
const navigation = document.querySelector(".top-navigation");
const menu = document.querySelector(".menu");




togglebtn.addEventListener("click", () => {
  navigation.classList.toggle("active");
  togglebtn.classList.toggle("active")
  
});

const reviews = [
  {
    img: "https://i.guim.co.uk/img/media/0511ab9ac0ee1dc4f4ad76ae4c2a393d9208c170/216_164_2649_1590/master/2649.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=058cea43f3036b8fb547a4a609cc126e",
    author: "Satan Dave",
    job: "Artist",
    info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit expedita quidem dolorem, modi eligendi illo, repellendus eveniet qui accusamus accusantium odit non ab. Quis delectus itaque ipsum, expedita blanditiis nemo!",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYLclftHcSySj6obeVxsxNOfxKZDsGsuShIkufsYnQA&s",
    author: "Bnxn",
    job: "Manager",
    info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit expedita quidem dolorem, modi eligendi illo, repellendus eveniet qui accusamus accusantium odit non ab. Quis delectus",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwRcVwDSHRBEaV7VT3dGvWlRZW2ov2JTXYfYpjYiD_w&s",
    author: "Ayra Star",
    job: "Artist",
    info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit expedita quidem dolorem, modi eligendi illo, repellendus eveniet qui accusamus accusantium odit non ab. Quis delectus itaque ipsum, expedita blanditiis nemo",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeF-BseTRHu5NvLpi8izhvva1Up49exohAA_wD04L&s",
    author: "Rema",
    job: "Singer",
    info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit expedita quidem dolorem, modi",
  },
];

const img = document.getElementById("img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const nextbtn = document.querySelector(".nextbtn");
const prevbtn = document.querySelector(".prevbtn");

let currentitem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentitem];
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.info;
}

nextbtn.addEventListener("click", function () {
  currentitem++;
  if (currentitem > reviews.length - 1) {
    currentitem = 0;
  }
  showPerson();
});
prevbtn.addEventListener("click", function () {
  currentitem--;
  if (currentitem < 0) {
    currentitem = reviews.length - 1;
  }
  showPerson();
});






const tl = gsap.timeline({defaults: {ease: 'power2.out'}});

tl.to(".logo", {x: "0", duration: 1.2});
tl.to(".navigation", {x: "0", duration: 1.2}, "-=.5");
tl.to(".banner-text", {y: "0", duration: 1.5});
tl.fromTo(".banner-right", {opacity: 0}, {opacity:1, duration: 0.6});




//links toggle//

const links = document.getElementById("links");


links.addEventListener("click", function(){
navigation.classList.remove("active");
togglebtn.classList.remove("active")
});

// footer-date//
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//about links//
const career = document.getElementById("career");
const Experience = document.getElementById("Experience");
const Biography = document.getElementById("Biography");
const careerText = document.getElementById("career-text");

career.addEventListener("click", function(){
careerText.textContent ="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nobis praesentium facilis at nemo ex ipsa temporibus numquam voluptates accusamus possimus nisi, facere iusto? praesentium facilis at nemo ex ipsa temporibus numquam voluptates accusamus possimus nisi"
})
Experience.addEventListener("click", function(){
  careerText.textContent = "i started programming since 2020, have met with several good programmers and have learned in the journey";
})
Biography.addEventListener("click", function(){
  careerText.textContent = "i hail from Nnewi North Local Government Area In Anambra state Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nobis";
})



//scroll-up//

const scrollUpBtn = document.querySelector(".scroll-down");
const home = document.getElementById("Home-container");


window.addEventListener("scroll", function(){
const homeHeight = home.getBoundingClientRect().height;


const scrollHeight = window.pageYOffset;

if(scrollHeight > 300){
  scrollUpBtn.classList.add("showscrollupbtn");
}
else{
  scrollUpBtn.classList.remove("showscrollupbtn")
}
})



const scrollLinks = document.querySelectorAll(".scroll-links");


scrollLinks.forEach(function (link) {
link.addEventListener("click", function (e) {
e.preventDefault();

const id = e.currentTarget.getAttribute("href").slice(1);
const element = document.getElementById(id);
const topBar = document.querySelector(".topbar"); 
const topbarHeight = topBar.getBoundingClientRect().height;
let position = element.offsetTop;
window.scrollTo({
  left:0,
  top:position - topbarHeight 
})

});
});





