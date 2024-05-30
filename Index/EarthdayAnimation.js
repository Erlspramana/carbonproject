const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('transition3');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden-3');
hiddenElements.forEach((el) => observer.observe(el));
