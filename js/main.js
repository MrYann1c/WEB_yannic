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
    // const previewwidth = imgpreview.style.width;
    var src = document.getElementById(id).getAttribute('src');
    var about = document.getElementById('about');
    const img = document.getElementById(id);
    var finalsrc =  '"' + "url('" + src + "')" + '"';
    //await sleep(500);
    // preview.classList.toggle('preview-animation');

    preview.style.backgroundImage = "url('" + src + "')";
    //about.style.backgroundColor = "black"
    preview.style.height = "100vh";
    preview.style.width = "100vw";
}
function imgClose() {
    imgclose = document.getElementById('preview-img');
    imgclose.style.height = "0vh";
    imgclose.style.width = "0vw";
}
menuIcon.addEventListener('click', toggleMenuIcon);