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
  // const previewwidth = imgpreview.style.width;
  var src = document.getElementById(id).getAttribute('src');
  var about = document.getElementById('about');
  var img = document.getElementById(id);
  var finalsrc = '"' + "url('" + src + "')" + '"'; //await sleep(500);
  // preview.classList.toggle('preview-animation');

  preview.style.backgroundImage = "url('" + src + "')"; //about.style.backgroundColor = "black"

  preview.style.height = "100vh";
  preview.style.width = "100vw";
}

function imgClose() {
  imgclose = document.getElementById('preview-img');
  imgclose.style.height = "0vh";
  imgclose.style.width = "0vw";
}

menuIcon.addEventListener('click', toggleMenuIcon);