"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

menuIcon.addEventListener('click', toggleMenuIcon); //   var slideIndex = 1;
//   showDivs(slideIndex);
//   function plusDivs(n) {
//     showDivs(slideIndex += n);
//   }
//   function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("slideImg");
//     if (n > x.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = x.length}
//     for (i = 0; i < x.length; i++) {
//       x[i].style.position = "absolute";
//       x[i].style.visibility = "hidden";
//       x[i].style.opacity = "0";
//     }
//         x[slideIndex-1].style.transition = "2s ease";
//         x[slideIndex-1].style.position = "relative";
//         x[slideIndex-1].style.visibility = "visible";
//         x[slideIndex-1].style.opacity = "1";  
//   }

function _getClosest(item, array, getDiff) {
  var closest, diff;

  if (!Array.isArray(array)) {
    throw new Error("Get closest expects an array as second argument");
  }

  array.forEach(function (comparedItem, comparedItemIndex) {
    var thisDiff = getDiff(comparedItem, item);

    if (thisDiff >= 0 && (typeof diff == "undefined" || thisDiff < diff)) {
      diff = thisDiff;
      closest = comparedItemIndex;
    }
  });
  return closest;
}

function number(item, array) {
  return _getClosest(item, array, function (comparedItem, item) {
    return Math.abs(comparedItem - item);
  });
}

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

var Slider =
/*#__PURE__*/
function () {
  function Slider() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Slider);

    this.bind();
    this.opts = {
      el: options.el || '.js-slider',
      ease: options.ease || 0.1,
      speed: options.speed || 1.5,
      velocity: 25,
      scroll: options.scroll || false
    };
    this.slider = document.querySelector('.js-slider');
    this.sliderInner = this.slider.querySelector('.js-slider__inner');
    this.slides = _toConsumableArray(this.slider.querySelectorAll('.js-slide'));
    this.slidesNumb = this.slides.length;
    this.rAF = undefined;
    this.sliderWidth = 0;
    this.onX = 0;
    this.offX = 0;
    this.currentX = 0;
    this.lastX = 0;
    this.min = 0;
    this.max = 0;
    this.centerX = window.innerWidth / 2;
  }

  _createClass(Slider, [{
    key: "bind",
    value: function bind() {
      var _this = this;

      ['setPos', 'run', 'on', 'off', 'resize'].forEach(function (fn) {
        return _this[fn] = _this[fn].bind(_this);
      });
    }
  }, {
    key: "setBounds",
    value: function setBounds() {
      var bounds = this.slides[0].getBoundingClientRect();
      var slideWidth = bounds.width;
      this.sliderWidth = this.slidesNumb * slideWidth;
      this.max = -(this.sliderWidth - window.innerWidth);
      this.slides.forEach(function (slide, index) {
        slide.style.left = "".concat(index * slideWidth, "px");
      });
    }
  }, {
    key: "setPos",
    value: function setPos(e) {
      if (!this.isDragging) return;
      this.currentX = this.offX + (e.clientX - this.onX) * this.opts.speed;
      this.clamp();
    }
  }, {
    key: "clamp",
    value: function clamp() {
      this.currentX = Math.max(Math.min(this.currentX, this.min), this.max);
    }
  }, {
    key: "run",
    value: function run() {
      this.lastX = lerp(this.lastX, this.currentX, this.opts.ease);
      this.lastX = Math.floor(this.lastX * 100) / 100;
      var sd = this.currentX - this.lastX;
      var acc = sd / window.innerWidth;
      var velo = +acc;
      this.sliderInner.style.transform = "translate3d(".concat(this.lastX, "px, 0, 0) skewX(").concat(velo * this.opts.velocity, "deg)");
      this.requestAnimationFrame();
    }
  }, {
    key: "on",
    value: function on(e) {
      this.isDragging = true;
      this.onX = e.clientX;
      this.slider.classList.add('is-grabbing');
    }
  }, {
    key: "off",
    value: function off(e) {
      this.snap();
      this.isDragging = false;
      this.offX = this.currentX;
      this.slider.classList.remove('is-grabbing');
    }
  }, {
    key: "closest",
    value: function closest() {
      var _this2 = this;

      var numbers = [];
      this.slides.forEach(function (slide, index) {
        var bounds = slide.getBoundingClientRect();
        var diff = _this2.currentX - _this2.lastX;
        var center = bounds.x + diff + bounds.width / 2;
        var fromCenter = _this2.centerX - center;
        numbers.push(fromCenter);
      });
      var closest = number(0, numbers);
      closest = numbers[closest];
      return {
        closest: closest
      };
    }
  }, {
    key: "snap",
    value: function snap() {
      var _this$closest = this.closest(),
          closest = _this$closest.closest;

      this.currentX = this.currentX + closest;
      this.clamp();
    }
  }, {
    key: "requestAnimationFrame",
    value: function (_requestAnimationFrame) {
      function requestAnimationFrame() {
        return _requestAnimationFrame.apply(this, arguments);
      }

      requestAnimationFrame.toString = function () {
        return _requestAnimationFrame.toString();
      };

      return requestAnimationFrame;
    }(function () {
      this.rAF = requestAnimationFrame(this.run);
    })
  }, {
    key: "cancelAnimationFrame",
    value: function (_cancelAnimationFrame) {
      function cancelAnimationFrame() {
        return _cancelAnimationFrame.apply(this, arguments);
      }

      cancelAnimationFrame.toString = function () {
        return _cancelAnimationFrame.toString();
      };

      return cancelAnimationFrame;
    }(function () {
      cancelAnimationFrame(this.rAF);
    })
  }, {
    key: "addEvents",
    value: function addEvents() {
      this.run();
      this.slider.addEventListener('mousemove', this.setPos, {
        passive: true
      });
      this.slider.addEventListener('mousedown', this.on, false);
      this.slider.addEventListener('mouseup', this.off, false);
      window.addEventListener('resize', this.resize, false);
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      this.cancelAnimationFrame(this.rAF);
      this.slider.removeEventListener('mousemove', this.setPos, {
        passive: true
      });
      this.slider.removeEventListener('mousedown', this.on, false);
      this.slider.removeEventListener('mouseup', this.off, false);
    }
  }, {
    key: "resize",
    value: function resize() {
      this.setBounds();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeEvents();
      this.opts = {};
    }
  }, {
    key: "init",
    value: function init() {
      this.setBounds();
      this.addEvents();
    }
  }]);

  return Slider;
}();

var slider = new Slider();
slider.init();