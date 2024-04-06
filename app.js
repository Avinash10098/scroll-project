
// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// const barBtn = document.querySelector('.nav-toggle')
// const navItems = document.querySelector('.nav-items');
// barBtn.addEventListener('click', function () {
//     navItems.classList.toggle('showData');
// })

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// dynamically adding of heigth of navbar when toggle
// advantage : when you add some new linke into our navbar
// then we don't need to update the height in app.css
// ok

const linkContainer = document.querySelector('.link-container');
const linkItems = document.querySelector('.nav-items');

const barBtn = document.querySelector('.nav-toggle');
barBtn.addEventListener('click', function () {
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linkItemsHeight = linkItems.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linkContainer.style.height = `${linkItemsHeight}px`;
    } else {
        linkContainer.style.height = 0;
    }
})

const navBar = document.querySelector('.navbar');
const backtoTop = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navBar.classList.add('navbar-fixed')
    } else {
        navBar.classList.remove('navbar-fixed')
    }

    if (scrollHeight > 300) {
        backtoTop.classList.add('show-top-link')
    } else {
        backtoTop.classList.remove('show-top-link')
    }
})

const scrollLink = document.querySelectorAll('.scroll-link');

scrollLink.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const containerheight = linkContainer.getBoundingClientRect().height;
        const position = element.offsetTop - navHeight;

        window.scrollTo({
            left: 0,
            top: position,
        })
        linkContainer.style.height = 0;
    })

})

