const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('transition5');
        }
    })
})

const hiddenElements2 = document.querySelectorAll('.hidden-5');
hiddenElements2.forEach((el) => observer2.observe(el));