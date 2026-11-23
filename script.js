document.addEventListener("DOMContentLoaded", function(event) { 
  // get all radio button inputs
  let radioInputs = document.querySelectorAll('input[type="radio"]');

  // add event listener to each radio button input
  radioInputs.forEach((input) => {
    input.addEventListener('click', () => {
      event.preventDefault(); // prevent default link behavior
      const id = input.parentElement.getAttribute('href');
      const cardService = document.querySelector(id);
      
      // Reset scroll position to the top of the container
      const container = document.querySelector('.services-carousel-container');
      container.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      
      // Delay the scroll to ensure the container is reset before scrolling to the target element
      setTimeout(() => {
        cardService.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    })
  });
});