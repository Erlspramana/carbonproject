const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('transition-fade-2');
        }
    })
})

const hiddenElements2 = document.querySelectorAll('.hidden-fade-2');
hiddenElements2.forEach((el) => observer2.observe(el));