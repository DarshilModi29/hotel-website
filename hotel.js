var nav_links = document.getElementsByClassName("nav-link"); 
Array.from(nav_links).forEach(element => {
    var url = window.location.href.split('/');
    var find = url[url.length - 1]
    if (find == element.getAttribute('href')){
        element.classList.add('active');
    }
});
function isNumber(number){
    if(number.length === 10){
        return true;
    }
    return false
}
function isEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
}