const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('transition-fade-1');
        }
    })
})

const hiddenElements1 = document.querySelectorAll('.hidden-fade-1');
hiddenElements1.forEach((el) => observer1.observe(el));