var navbarSlide = document.getElementById("navbar-slide")

var menubar = document.getElementById("menuBar")

var close = document.querySelector(".closeIcon")


menubar.addEventListener("click", function () {
    navbarSlide.style.right = "0%"

})



close.addEventListener("click", function () {
    navbarSlide.style.right = "-50%"
})


// scrollEffect fadein and reveal
window.addEventListener("scroll", function () {

    //get all reveal class
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        // windowheight
        var windowheight = this.window.innerHeight;
        //element height
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = 10;
       //if windowheight less than element add class active else remove active class style
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active")
        }
        else {
            reveals[i].classList.remove("active")
        }
    }
}
)
// <!-- typed js effect starts -->
var typed = new Typed(".autotype", {
    strings: ["Frontend Development", "Backend Development", "Web Designing", "Web Development"],

    typeSpeed: 200,
    backSpeed: 100,
    backDelay: 500,
    loop: true,
});
// <!-- typed js effect ends -->