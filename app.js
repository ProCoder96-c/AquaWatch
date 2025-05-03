// Mobile Navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Close alert banner
function closeAlert() {
    document.getElementById('alertBanner').style.display = 'none';
}

// Form submission
document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const location = document.getElementById('location').value;
    const waterBody = document.getElementById('waterBody').value;
    const pollutionType = document.getElementById('pollutionType').value;
    const description = document.getElementById('description').value;
    
    // In a real app, you would send this data to your backend
    console.log({
        location,
        waterBody,
        pollutionType,
        description
    });
    
    // Show success message
    alert('Thank you for your report! Our team will review it shortly.');
    
    // Reset form
    this.reset();
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        }
    });
});