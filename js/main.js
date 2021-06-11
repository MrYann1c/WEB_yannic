function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Get objects
const menuIcon = document.querySelector('.menu-icon');
const navigation = document.querySelector('.navigation');
const links = document.querySelectorAll('.nav-links');
const preview = document.getElementById('preview-img')

// Add class to change to X
async function toggleMenuIcon() {
    const navwidth = navigation.style.width;
    menuIcon.classList.toggle('active');
    navigation.classList.toggle('nav-animation');
    //await sleep(500);
    for (i = 0; i < links.length; i++) {
        links[i].classList.toggle('show-links');
    }
}
function imgPreview(id) {
    var src = document.getElementById(id).getAttribute('src');
    var about = document.getElementById('about');
    const img = document.getElementById(id);
    var finalsrc =  '"' + "url('" + src + "')" + '"';
    var mediawidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (id == "mini_wash") {
        if (mediawidth > "1000") {
            preview.style.width = "50%";
            preview.style.left = "25%";
        }
    } 
    preview.style.backgroundImage = "url('" + src + "')";
    preview.style.visibility = "visible";
    preview.style.opacity = "1";
    // preview.style.height = "100vh";
    // preview.style.width = "100vw";
}
async function imgClose() {
    imgwidth = document.getElementById('preview-img').offsetWidth;
    imgclose = document.getElementById('preview-img');
    preview.style.opacity = "0";
    await sleep(400);
    preview.style.visibility = "hidden";
    if (imgwidth == "1012") {
        preview.style.width = "100%";
        preview.style.left = "0";
    } 
    // imgclose.style.height = "0vh";
    // imgclose.style.width = "0vw";
}

var mybutton = document.querySelector('.topBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
menuIcon.addEventListener('click', toggleMenuIcon);

//   var slideIndex = 1;
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
    var closest,
        diff;

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
    return (1 - n) * a + n * b
}

class Slider {
  constructor(options = {}) {
    this.bind()
    
    this.opts = {
      el: options.el || '.js-slider',
      ease: options.ease || 0.1,
      speed: options.speed || 1.5,
      velocity: 25,
      scroll: options.scroll || false
    }
    
    this.slider = document.querySelector('.js-slider')
    this.sliderInner = this.slider.querySelector('.js-slider__inner')
    this.slides = [...this.slider.querySelectorAll('.js-slide')]
    this.slidesNumb = this.slides.length
    
    this.rAF = undefined
    
    this.sliderWidth = 0
    
    this.onX = 0
    this.offX = 0
    
    this.currentX = 0
    this.lastX = 0
    
    this.min = 0
    this.max = 0

    this.centerX = window.innerWidth / 2
  }
  
  bind() {
    ['setPos', 'run', 'on', 'off', 'resize'].forEach((fn) => this[fn] = this[fn].bind(this))
  }
  
  setBounds() {
    const bounds = this.slides[0].getBoundingClientRect()
    const slideWidth = bounds.width

    this.sliderWidth = this.slidesNumb * slideWidth
    this.max = -(this.sliderWidth - window.innerWidth)
    
    this.slides.forEach((slide, index) => {
      slide.style.left = `${index * slideWidth}px`
    })
  }
  
  setPos(e) {
    if (!this.isDragging) return
    this.currentX = this.offX + ((e.clientX - this.onX) * this.opts.speed)
    this.clamp()
  }

  clamp() {
    this.currentX = Math.max(Math.min(this.currentX, this.min), this.max)
  }
  
  run() {
    this.lastX = lerp(this.lastX, this.currentX, this.opts.ease)
    this.lastX = Math.floor(this.lastX * 100) / 100 

    const sd = this.currentX - this.lastX
    const acc = sd / window.innerWidth
    let velo =+ acc
    
    this.sliderInner.style.transform = `translate3d(${this.lastX}px, 0, 0) skewX(${velo * this.opts.velocity}deg)`

    this.requestAnimationFrame()
  }
  
  on(e) {
    this.isDragging = true
    this.onX = e.clientX
    this.slider.classList.add('is-grabbing')
  }
  
  off(e) {
    this.snap()
    this.isDragging = false
    this.offX = this.currentX
    this.slider.classList.remove('is-grabbing')
  }
  
  closest() {
    const numbers = []
    this.slides.forEach((slide, index) => {
      const bounds = slide.getBoundingClientRect()
      const diff = this.currentX - this.lastX
      const center = (bounds.x + diff) + (bounds.width / 2)
      const fromCenter = this.centerX - center
      numbers.push(fromCenter)
    })

    let closest = number(0, numbers)
    closest = numbers[closest]
    
    return {
      closest
    }
  }

  snap() {
    const { closest } = this.closest()
    
    this.currentX = this.currentX + closest
    this.clamp()
  }

  requestAnimationFrame() {
    this.rAF = requestAnimationFrame(this.run)
  }

  cancelAnimationFrame() {
    cancelAnimationFrame(this.rAF)
  }
  
  addEvents() {
    this.run()
    
    this.slider.addEventListener('mousemove', this.setPos, { passive: true })
    this.slider.addEventListener('mousedown', this.on, false)
    this.slider.addEventListener('mouseup', this.off, false)
    
    window.addEventListener('resize', this.resize, false)
  }
  
  removeEvents() {
    this.cancelAnimationFrame(this.rAF)
    
    this.slider.removeEventListener('mousemove', this.setPos, { passive: true })
    this.slider.removeEventListener('mousedown', this.on, false)
    this.slider.removeEventListener('mouseup', this.off, false)
  }
  
  resize() {
    this.setBounds()
  }
  
  destroy() {
    this.removeEvents()
    
    this.opts = {}
  }
  
  init() {
    this.setBounds()
    this.addEvents()
  }
}

const slider = new Slider()
slider.init()

