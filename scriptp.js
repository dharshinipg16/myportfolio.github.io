/* -------------------TOGGLE ICON NAVBAR ------------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/* -------------------SCROLL SECTION ACTIVE LINK ------------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach (sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if (top>= offset && top < offset+height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* -------------Sticky Scrollbar------------*/
    let header=document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);


    /* REMOVE TOGGLE ICON AND NAVBAR - WHEN CLICKING NAVBAR LINK(SCROLL) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

 /* -------------Sticky Scrollbar------------*/
ScrollReveal({
    //reset:true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { orgin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box,.acheivements-box,.card ,.contact form', { orgin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { orgin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { orgin: 'right' });

/*--------------TYPED JS------------------*/
const typed=new Typed('.multiple-text', {
    strings: ['Fullstack Developer', 'Youtuber', 'Electronics Engineer'],    
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})

//--------------EMAIL JS--------------------------

function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_0kmmg69", "template_13hzoyv",params).then(function (res) {
        alert("Success" + res.status);
    })
}

//------------------------ACHEIVEMENTS POPUP------------------------------

let popup=document.getElementById("acheivements-popup");
    function openpopup(){
        popup.classList.add("open-popup");
    }
    function closepopup(){
        popup.classList.remove("open-popup");
    }
/*
function start() {
    document.getElementsByClassName('container .card .percent svg circle:nth-child(2)').style.animation = "fadeIn 1s linear forwards";
    document.getElementsByClassName('dot').style.animation = "animateDot 2s linear forwards";
}
      */
