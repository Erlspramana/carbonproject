// sdg 6
const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('transition6');
        }
    })
})

const hiddenElements6 = document.querySelectorAll('.hidden-6');
hiddenElements6.forEach((el) => observer6.observe(el));


// sdg 7
const observer7 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('transition7');
        }
    })
})

const hiddenElements7 = document.querySelectorAll('.hidden-7');
hiddenElements7.forEach((el) => observer7.observe(el));

// sdg 13
const observer13 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('transition13');
        }
    })
})

const hiddenElements13 = document.querySelectorAll('.hidden-13');
hiddenElements13.forEach((el) => observer13.observe(el));

// sdg 14
const observer14 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('transition14');
        }
    })
})

const hiddenElements14 = document.querySelectorAll('.hidden-14');
hiddenElements14.forEach((el) => observer14.observe(el));

// sdg 15
const observer15 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('transition15');
        }
    })
})

const hiddenElements15 = document.querySelectorAll('.hidden-15');
hiddenElements15.forEach((el) => observer15.observe(el));