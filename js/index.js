// Get all the accordion items
const accordions = document.querySelectorAll('.accordion-item');

// Add event listener to each accordion item
accordions.forEach((accordion) => {
  const header = accordion.querySelector('.accordion-header');
  const body = accordion.querySelector('.accordion-body');

  // Add initial styles to the body
  body.style.height = '0';
  let isAccordionOpen = false;

  // Add click event listener to the header
  header.addEventListener('click', () => {
    
    if (!isAccordionOpen) {
      // Open the accordion using GSAP
      gsap.to(body, { height: 'auto', duration: 0.5 });
      isAccordionOpen = true;
      accordion.classList.add('open'); // add class open when it is opened
    } else {
      // Close the accordion using GSAP
      gsap.to(body, { height: '0px', duration: 0.5, onComplete: accordion.classList.remove('open')});
      isAccordionOpen = false;
       // add class open when it is opened
    }

    // Update the icon
    const icon = header.querySelector('.icon-wrapper svg');
    if (isAccordionOpen) {
      gsap.to(icon, { transform: 'rotate(45deg)', duration: 0.2 });
    } else {
      gsap.to(icon, { transform: 'rotate(0deg)', duration: 0.2 });
    }
  });
});
