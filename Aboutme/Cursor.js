var cursor = document.getElementById('cursor-dot');
document.addEventListener('mousemove', moveCursor)
function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}
var cursor2 = document.getElementById('cursor-outline');
document.addEventListener('mousemove', moveCursor2)
function moveCursor2(e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor2.animate({
    left: `${x}px`,
    top: `${y}px`
  }, {duration: 400, fill: "forwards"})
}

//

document.querySelectorAll('button').forEach(a =>
  a.addEventListener('mousemove', function() {
  cursor.classList.add('hover-cursor');
    }));

document.querySelectorAll('button').forEach(a =>
  a.addEventListener('mouseleave', function() {
    cursor.classList.remove('hover-cursor');
      }));

//

document.querySelectorAll('a').forEach(a =>
  a.addEventListener('mousemove', function() {
  cursor.classList.add('hover-cursor-a');
    }));

document.querySelectorAll('a').forEach(a =>
  a.addEventListener('mouseleave', function() {
    cursor.classList.remove('hover-cursor-a');
      }));

//