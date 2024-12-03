const navLinks = document.querySelectorAll('.navLink');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    })
});  /*Used for changing the class to active accroding to current clicked page*/

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.navLink[href="#${entry.target.id}"]`);
                activeLink.classList.add('active');
            }
        });
    },
    { threshold: 0.6 }
);

sections.forEach(section => observer.observe(section)); /*change active class as well but when scrolling through the page using IntersectionObserver*/