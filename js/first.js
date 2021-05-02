// navbar 
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.nav-1').addClass('black');
    }
    else {
        $('.nav-1').removeClass('black');
    }
});
///////////////////////////////////////////////////////////////////////////////////








// counter number
jQuery(document).ready(function ($) {
    $('.n-3').counterUp({
        delay: 10,
        time: 1000
    });
});
///////////////////////////////////////////////////////////////////////////////////






// nav item active
var nav = document.getElementById("my-li");
var li = nav.getElementsByClassName("nav-link");
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
///////////////////////////////////////////////////////////////////////////////////






// image
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img1.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}
///////////////////////////////////////////////////////////////////////////////////
