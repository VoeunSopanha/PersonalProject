var link = document.getElementById('alert');
link.addEventListener("click",function (){
    alert("Sorry, I haven't finished it yet.");
});

//gpt
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down
        document.querySelector(".navbar").classList.add("hidden");
    } else {
        // Scroll up
        document.querySelector(".navbar").classList.remove("hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
