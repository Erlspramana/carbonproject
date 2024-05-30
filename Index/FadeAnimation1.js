const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('transition4');
        }
    })
})

const hiddenElements4 = document.querySelectorAll('.hidden-4');
hiddenElements4.forEach((el) => observer4.observe(el));
