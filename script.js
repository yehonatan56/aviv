const progressBar = document.querySelector('#progress');

document.onscroll = () => {
   const distanceTop = window.pageYOffset;
   const pageHeight = document.body.scrollHeight - window.innerHeight;

   progressBar.style.width = (distanceTop / pageHeight) * 100 + '%';
}

function about(){

var elmnt = document.getElementById("as");
elmnt.scrollIntoView({behavior: "smooth", block: "start"})
}

function app(){

   var elmnt = document.getElementById("app");
   elmnt.scrollIntoView({behavior: "smooth", block: "start"})
   }