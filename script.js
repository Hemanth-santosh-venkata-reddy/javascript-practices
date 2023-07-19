window.addEventListener('scroll', function() {
    const logo = document.getElementById('logo');
    const sections = document.querySelectorAll('.section');
  
    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute('class').split(' ')[1];
  
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        document.getElementById("logo").style.fill = getColor(sectionId);
      }
    });
  });
  
  function getColor(sectionId) {
    switch (sectionId) {
      case 'section-1':
        return 'red'; // Change to desired color for Section 1
      case 'section-2':
        return 'blue'; // Change to desired color for Section 2
      case 'section-3':
        return 'green'; // Change to desired color for Section 3
      case 'section-4':
        return 'orange'; // Change to desired color for Section 4
      default:
        return 'pink'; // Default white color
    }
  }
//   onclich to change the header-color
let c = document.getElementById("header");
function change_color(){
    c.style.background = "red";
}
function color_change(){
    c.style.background = "green";
}
// const c = document.getElementById("btn");
// c.addEventListener("click", function() {
//   document.getElementById("header").style.background = "red";
// });

// font-increases
function increaseFontSizeBy1px() {
    txt = document.getElementById('font');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
}
function decreaseFontSizeBy1px() {
    txt = document.getElementById('font');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px';
}
let p = document.getElementById("p");
let style = getComputedStyle(p, null);
console.log("aaaaa",style.fontSize);