import { getByPlaceholderText } from '@testing-library/dom';
import './less/index.less'

// Kodlar buraya gelecek!

document.querySelector("h1").addEventListener("click",function(e){
alert("Bana tıkladın!")
});

window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Sağ tık kapatıldı");
})


document.querySelectorAll("h2").forEach(headerTwo=> {
    headerTwo.addEventListener("mouseenter",e => {
        headerTwo.style.color="#155263";
        headerTwo.style.backgroundColor="#ff6f3c"});

    headerTwo.addEventListener("mouseleave",e => {
        headerTwo.style.color="black"
        headerTwo.style.backgroundColor="";
        });
    });

document.querySelectorAll("img").forEach(image =>{
    image.addEventListener("mouseover",(e) => {
        image.style.scale="1.3";

    image.addEventListener("mouseout",(e) => {
           image.style.scale="";

    });
    });
});




