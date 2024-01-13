var navbarSlide=document.getElementById("navbar-slide")

var menubar=document.getElementById("menuBar")

var close=document.querySelector(".closeIcon")


menubar.addEventListener("click",function(){
    navbarSlide.style.right="0%"
    
})



close.addEventListener("click",function(){
    navbarSlide.style.right="-50%"
})


  // <!-- typed js effect starts -->
var typed = new Typed(".autotype", {
    strings: ["Frontend Development", "Backend Development", "Web Designing", "Web Development"],
    
    typeSpeed: 200,
    backSpeed: 100,
    backDelay: 500,
    loop: true,
});
// <!-- typed js effect ends -->