// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Create a new paragraph element
    const newTestimonial = document.createElement("p");
  
    // Set the text content
    newTestimonial.textContent = "“Great service and friendly support!”";
  
    // Optional: Add a class or style if you'd like
    newTestimonial.style.fontStyle = "italic";
    newTestimonial.style.marginTop = "0.5rem";
  
    // Select the testimonials section and add the new testimonial
    const testimonialSection = document.querySelector(".testimonials");
  
    if (testimonialSection) {
      testimonialSection.appendChild(newTestimonial);
    } else {
      console.warn("Testimonials section not found!");
    }
  });