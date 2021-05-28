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
menuIcon.addEventListener('click', toggleMenuIcon);