const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('transition');
        }
    })
})

const hiddenElements1 = document.querySelectorAll('.hidden-2');
hiddenElements1.forEach((el) => observer1.observe(el));