window.onscroll = () => {
    if(window.scrollY) {
        document.querySelector(".header").classList.add("mini_header");
    } else {
        document.querySelector(".header").classList.remove("mini_header");
    }
}