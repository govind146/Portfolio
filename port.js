let eye1 = document.getElementById("eye1");
let eye2 = document.getElementById("eye2");
let eyeContainer1 = eye1.offsetParent;
let eyeContainer2 = eye2.offsetParent;
document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  let rect1 = eyeContainer1.getBoundingClientRect();
  let rect2 = eyeContainer2.getBoundingClientRect();
  let eye1X = x - rect1.left - rect1.width / 2;
  let eye1Y = y - rect1.top - rect1.height / 2;
  let angle1 = Math.atan2(eye1Y, eye1X);
  let limit = 20;
  eye1.style.transform = `translate(${Math.cos(angle1) * limit}px, ${
    Math.sin(angle1) * limit
  }px) translate(-50%, -50%)`;
  let eye2X = x - rect2.left - rect2.width / 2;
  let eye2Y = y - rect2.top - rect2.height / 2;
  let angle2 = Math.atan2(eye2Y, eye2X);
  eye2.style.transform = `translate(${Math.cos(angle2) * limit}px, ${
    Math.sin(angle2) * limit
  }px) translate(-50%, -50%)`;
});

let eyee1 = document.querySelector("#eye1");
let eyee2 = document.querySelector("#eye2");
let eyeContainerr1 = document.querySelector(".eye-container1");
let eyeContainerr2 = document.querySelector(".eye-container2");

let drop = document.querySelector(".sweat-drop");
let skills_li = document.querySelector(".skills-li");
skills_li.addEventListener("mouseover", () => {
  drop.style.opacity = "1";
  drop.style.transition = "0.2s ease";
  eyee1.style.width = "1rem";
  eyee1.style.height = "1.5rem";
  eyee2.style.width = "1rem";
  eyee2.style.height = "1.5rem";
  eyeContainerr1.style.borderTop = ".4rem solid black";
  eyeContainerr1.style.borderBottom = ".4rem solid black";
  eyeContainerr2.style.borderTop = ".4rem solid black";
  eyeContainerr2.style.borderBottom = ".4rem solid black";
  eyeContainerr1.style.transition = "0.2s ease";
  eyeContainerr2.style.transition = "0.2s ease";
  eyeContainerr1.style.backgroundColor = "rgb(221, 179, 179)";
  eyeContainerr2.style.backgroundColor = "rgb(221, 179, 179)";
});
skills_li.addEventListener("mouseout", () => {
  drop.style.opacity = "0";
  drop.style.transition = "0.2s ease";
  eyee1.style.width = "1.5rem";
  eyee1.style.height = "2rem";
  eyee2.style.width = "1.5rem";
  eyee2.style.height = "2rem";
  eyeContainerr1.style.borderTop = ".1rem solid black";
  eyeContainerr1.style.borderBottom = ".1rem solid black";
  eyeContainerr2.style.borderTop = ".1rem solid black";
  eyeContainerr2.style.borderBottom = ".1rem solid black";
  eyeContainerr1.style.transition = "0.2s ease";
  eyeContainerr2.style.transition = "0.2s ease";
  eyeContainerr1.style.backgroundColor = "rgb(255, 255, 255)";
  eyeContainerr2.style.backgroundColor = "rgb(255, 255, 255)";
});

let projects_li = document.querySelector(".projects-li");
projects_li.addEventListener("mouseover", () => {
  drop.style.opacity = "1";
  drop.style.transition = "0.2s ease";
  eyee1.style.width = "1rem";
  eyee1.style.height = "1.5rem";
  eyee2.style.width = "1rem";
  eyee2.style.height = "1.5rem";
  eyee1.style.transition = "0.2s ease";
  eyee2.style.transition = "0.2s ease";
});
projects_li.addEventListener("mouseout", () => {
  drop.style.opacity = "0";
  drop.style.transition = "0.2s ease";
  eyee1.style.width = "1.5rem";
  eyee1.style.height = "2rem";
  eyee2.style.width = "1.5rem";
  eyee2.style.height = "2rem";
  eyee1.style.transition = "0.2s ease";
  eyee2.style.transition = "0.2s ease";
});

const section2 = document.querySelector("#skills");
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        drop.style.opacity = "1";
        drop.style.transition = "0.2s ease";
        eyee1.style.width = "1rem";
        eyee1.style.height = "1.5rem";
        eyee2.style.width = "1rem";
        eyee2.style.height = "1.5rem";
        eyeContainerr1.style.borderTop = ".4rem solid black";
        eyeContainerr1.style.borderBottom = ".4rem solid black";
        eyeContainerr2.style.borderTop = ".4rem solid black";
        eyeContainerr2.style.borderBottom = ".4rem solid black";
        eyeContainerr1.style.transition = "0.2s ease";
        eyeContainerr2.style.transition = "0.2s ease";
        eyeContainerr1.style.backgroundColor = "rgb(221, 179, 179)";
        eyeContainerr2.style.backgroundColor = "rgb(221, 179, 179)";
      } else {
        drop.style.opacity = "0";
        drop.style.transition = "0.2s ease";
        eyee1.style.width = "1.5rem";
        eyee1.style.height = "2rem";
        eyee2.style.width = "1.5rem";
        eyee2.style.height = "2rem";
        eyeContainerr1.style.borderTop = ".1rem solid black";
        eyeContainerr1.style.borderBottom = ".1rem solid black";
        eyeContainerr2.style.borderTop = ".1rem solid black";
        eyeContainerr2.style.borderBottom = ".1rem solid black";
        eyeContainerr1.style.transition = "0.2s ease";
        eyeContainerr2.style.transition = "0.2s ease";
        eyeContainerr1.style.backgroundColor = "rgb(255, 255, 255)";
        eyeContainerr2.style.backgroundColor = "rgb(255, 255, 255)";
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of section2 is visible
  }
);
observer2.observe(section2);

const section = document.querySelector("#projects");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        drop.style.opacity = "1";
        drop.style.transition = "0.2s ease";
        eyee1.style.width = "1rem";
        eyee1.style.height = "1.5rem";
        eyee2.style.width = "1rem";
        eyee2.style.height = "1.5rem";
        eyee1.style.transition = "0.2s ease";
        eyee2.style.transition = "0.2s ease";
      } else {
        drop.style.opacity = "0";
        drop.style.transition = "0.2s ease";
        eyee1.style.width = "1.5rem";
        eyee1.style.height = "2rem";
        eyee2.style.width = "1.5rem";
        eyee2.style.height = "2rem";
        eyee1.style.transition = "0.2s ease";
        eyee2.style.transition = "0.2s ease";
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of section2 is visible
  }
);

observer.observe(section);

// Eye movement tracking
// const setupEyeMovement = () => {
//     const eye1 = document.getElementById('eye1');
//     const eye2 = document.getElementById('eye2');
//     const eyeContainer1 = eye1.offsetParent;
//     const eyeContainer2 = eye2.offsetParent;

//     document.addEventListener('mousemove', (e) => {
//       const x = e.clientX;
//       const y = e.clientY;
//       const limit = 20;

//       // Eye 1 movement
//       const rect1 = eyeContainer1.getBoundingClientRect();
//       const eye1X = x - rect1.left - rect1.width / 2;
//       const eye1Y = y - rect1.top - rect1.height / 2;
//       const angle1 = Math.atan2(eye1Y, eye1X);

//       eye1.style.transform = `translate(${Math.cos(angle1) * limit}px, ${Math.sin(angle1) * limit}px) translate(-50%, -50%)`;

//       // Eye 2 movement
//       const rect2 = eyeContainer2.getBoundingClientRect();
//       const eye2X = x - rect2.left - rect2.width / 2;
//       const eye2Y = y - rect2.top - rect2.height / 2;
//       const angle2 = Math.atan2(eye2Y, eye2X);

//       eye2.style.transform = `translate(${Math.cos(angle2) * limit}px, ${Math.sin(angle2) * limit}px) translate(-50%, -50%)`;
//     });
//   };

//   // Eye animation states
//   const setupEyeAnimations = () => {
//     const eyeElements = {
//       eye1: document.querySelector('#eye1'),
//       eye2: document.querySelector('#eye2'),
//       container1: document.querySelector('.eye-container1'),
//       container2: document.querySelector('.eye-container2'),
//       drop: document.querySelector('.sweat-drop')
//     };

//     const setEyeState = (isStressed) => {
//       if (isStressed) {
//         eyeElements.drop.style.opacity = '1';
//         eyeElements.eye1.style.width = '1rem';
//         eyeElements.eye1.style.height = '1.5rem';
//         eyeElements.eye2.style.width = '1rem';
//         eyeElements.eye2.style.height = '1.5rem';
//         eyeElements.container1.style.borderTop = '.4rem solid black';
//         eyeElements.container1.style.borderBottom = '.4rem solid black';
//         eyeElements.container2.style.borderTop = '.4rem solid black';
//         eyeElements.container2.style.borderBottom = '.4rem solid black';
//         eyeElements.container1.style.backgroundColor = 'rgb(221, 179, 179)';
//         eyeElements.container2.style.backgroundColor = 'rgb(221, 179, 179)';
//       } else {
//         eyeElements.drop.style.opacity = '0';
//         eyeElements.eye1.style.width = '1.5rem';
//         eyeElements.eye1.style.height = '2rem';
//         eyeElements.eye2.style.width = '1.5rem';
//         eyeElements.eye2.style.height = '2rem';
//         eyeElements.container1.style.borderTop = '.1rem solid black';
//         eyeElements.container1.style.borderBottom = '.1rem solid black';
//         eyeElements.container2.style.borderTop = '.1rem solid black';
//         eyeElements.container2.style.borderBottom = '.1rem solid black';
//         eyeElements.container1.style.backgroundColor = 'rgb(255, 255, 255)';
//         eyeElements.container2.style.backgroundColor = 'rgb(255, 255, 255)';
//       }
//     };

//     // Setup navigation hover effects
//     document.querySelector('.skills-li').addEventListener('mouseover', () => setEyeState(true));
//     document.querySelector('.skills-li').addEventListener('mouseout', () => setEyeState(false));

//     document.querySelector('.projects-li').addEventListener('mouseover', () => {
//       eyeElements.drop.style.opacity = '1';
//       eyeElements.eye1.style.width = '1rem';
//       eyeElements.eye1.style.height = '1.5rem';
//       eyeElements.eye2.style.width = '1rem';
//       eyeElements.eye2.style.height = '1.5rem';
//     });

//     document.querySelector('.projects-li').addEventListener('mouseout', () => {
//       eyeElements.drop.style.opacity = '0';
//       eyeElements.eye1.style.width = '1.5rem';
//       eyeElements.eye1.style.height = '2rem';
//       eyeElements.eye2.style.width = '1.5rem';
//       eyeElements.eye2.style.height = '2rem';
//     });

//     // Setup intersection observers for sections
//     const observerOptions = {
//       threshold: 0.5 // Trigger when 50% of section is visible
//     };

//     // Observer for skills section
//     const skillsObserver = new IntersectionObserver(entries => {
//       entries.forEach(entry => setEyeState(entry.isIntersecting));
//     }, observerOptions);

//     skillsObserver.observe(document.querySelector('#skills'));

//     // Observer for projects section
//     const projectsObserver = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           eyeElements.drop.style.opacity = '1';
//           eyeElements.eye1.style.width = '1rem';
//           eyeElements.eye1.style.height = '1.5rem';
//           eyeElements.eye2.style.width = '1rem';
//           eyeElements.eye2.style.height = '1.5rem';
//         } else {
//           eyeElements.drop.style.opacity = '0';
//           eyeElements.eye1.style.width = '1.5rem';
//           eyeElements.eye1.style.height = '2rem';
//           eyeElements.eye2.style.width = '1.5rem';
//           eyeElements.eye2.style.height = '2rem';
//         }
//       });
//     }, observerOptions);

//     projectsObserver.observe(document.querySelector('#projects'));
//   };

//   // Mobile navigation toggle
//   const setupMobileNav = () => {
//     const hamburger = document.querySelector('.hamburger');
//     const navMenu = document.querySelector('.navbar ul');

//     if (hamburger) {
//       hamburger.addEventListener('click', () => {
//         navMenu.classList.toggle('active');
//       });

//       // Close menu when clicking a nav link
//       document.querySelectorAll('.navbar a').forEach(link => {
//         link.addEventListener('click', () => {
//           navMenu.classList.remove('active');
//         });
//       });
//     }
//   };

//   // Initialize everything when DOM is loaded
//   document.addEventListener('DOMContentLoaded', () => {
//     setupEyeMovement();
//     setupEyeAnimations();
//     setupMobileNav();
//   });

let small_screen = document.querySelector(".small-screen");
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  small_screen.classList.toggle("active");
});
