"use strict";

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
} // Get objects


var menuIcon = document.querySelector('.menu-icon');
var navigation = document.querySelector('.navigation');
var links = document.querySelectorAll('.nav-links');
var preview = document.getElementById('preview-img'); // Add class to change to X

function toggleMenuIcon() {
  var navwidth;
  return regeneratorRuntime.async(function toggleMenuIcon$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          navwidth = navigation.style.width;
          menuIcon.classList.toggle('active');
          navigation.classList.toggle('nav-animation'); //await sleep(500);

          for (i = 0; i < links.length; i++) {
            links[i].classList.toggle('show-links');
          }

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function imgPreview(id) {
  var src = document.getElementById(id).getAttribute('src');
  var about = document.getElementById('about');
  var img = document.getElementById(id);
  var finalsrc = '"' + "url('" + src + "')" + '"';
  var mediawidth = window.innerWidth > 0 ? window.innerWidth : screen.width;

  if (id == "mini_wash") {
    if (mediawidth > "1000") {
      preview.style.width = "50%";
      preview.style.left = "25%";
    }
  }

  preview.style.backgroundImage = "url('" + src + "')";
  preview.style.visibility = "visible";
  preview.style.opacity = "1"; // preview.style.height = "100vh";
  // preview.style.width = "100vw";
}

function imgClose() {
  return regeneratorRuntime.async(function imgClose$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          imgwidth = document.getElementById('preview-img').offsetWidth;
          imgclose = document.getElementById('preview-img');
          preview.style.opacity = "0";
          _context2.next = 5;
          return regeneratorRuntime.awrap(sleep(400));

        case 5:
          preview.style.visibility = "hidden";

          if (imgwidth == "1012") {
            preview.style.width = "100%";
            preview.style.left = "0";
          } // imgclose.style.height = "0vh";
          // imgclose.style.width = "0vw";


        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

var mybutton = document.querySelector('.topBtn'); // When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = "0.8";
    mybutton.style.right = "30px";
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.opacity = "0";
    mybutton.style.right = "-30px";
  }
} // When the user clicks on the button, scroll to the top of the document


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideImg");

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.position = "absolute";
    x[i].style.visibility = "hidden";
    x[i].style.opacity = "0";
  }

  x[slideIndex - 1].style.position = "relative";
  x[slideIndex - 1].style.visibility = "visible";
  x[slideIndex - 1].style.opacity = "1";
}

menuIcon.addEventListener('click', toggleMenuIcon);