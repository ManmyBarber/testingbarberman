// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Create video background
    createVideoBackground();
    
    // Add smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to service items on hover
    const serviceItems = document.querySelectorAll('.services li');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Add click animation to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add form validation for contact form (if added later)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Sila isi semua medan yang diperlukan.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Sila masukkan alamat email yang sah.');
                return;
            }
            
            // Here you would typically send the form data
            alert('Terima kasih! Mesej anda telah dihantar. Saya akan menghubungi anda tidak lama lagi.');
            contactForm.reset();
        });
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.style.filter = 'grayscale(100%)';
        });
    });

    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add mobile menu toggle (if needed)
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Add WhatsApp integration
    const whatsappButton = document.querySelector('a[href*="wa.me"]');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function(e) {
            // You can add tracking or analytics here
            console.log('WhatsApp button clicked');
        });
    }

    // Add phone call tracking
    const phoneButton = document.querySelector('a[href^="tel:"]');
    if (phoneButton) {
        phoneButton.addEventListener('click', function(e) {
            // You can add tracking or analytics here
            console.log('Phone button clicked');
        });
    }

    // Add social media link tracking
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // You can add tracking or analytics here
            console.log('Social media link clicked:', this.textContent);
        });
    });

    // Add service price calculator (if needed)
    const serviceCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalPrice = document.getElementById('total-price');
    
    if (serviceCheckboxes.length > 0 && totalPrice) {
        serviceCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', calculateTotal);
        });
    }

    function calculateTotal() {
        let total = 0;
        serviceCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const price = parseInt(checkbox.dataset.price);
                total += price;
            }
        });
        totalPrice.textContent = 'RM ' + total;
    }

    // Add smooth reveal animation for page load
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Escape key to close mobile menu
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Add touch gesture support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left
                console.log('Swiped left');
            } else {
                // Swipe right
                console.log('Swiped right');
            }
        }
    }

    // Add performance monitoring
    window.addEventListener('load', function() {
        if ('performance' in window) {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log('Page load time:', loadTime + 'ms');
        }
    });

    // Add error handling
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
    });

    // Add unhandled promise rejection handling
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
    });

    // Load barbershops directory
    loadBarbershopsDirectory();

});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .cta-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Function to create video background
function createVideoBackground() {
    const videoBackground = document.createElement('div');
    videoBackground.className = 'video-background';
    
    const video = document.createElement('video');
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    
    // Create video source - using free copyright-free barber video
    const source = document.createElement('source');
    // Using a reliable free barber video from Pixabay (completely free for commercial use)
    source.src = 'https://cdn.pixabay.com/vimeo/328714/barber-23872.mp4?width=1280';
    source.type = 'video/mp4';
    
    // Fallback text for browsers that don't support video
    video.textContent = 'Your browser does not support the video tag.';
    
    video.appendChild(source);
    
    // Create overlay for better text readability
    const overlay = document.createElement('div');
    overlay.className = 'video-overlay';
    
    videoBackground.appendChild(video);
    videoBackground.appendChild(overlay);
    document.body.appendChild(videoBackground);
    
    // Handle video loading and errors
    video.addEventListener('loadeddata', function() {
        console.log('Video loaded successfully');
    });
    
    video.addEventListener('error', function() {
        console.log('Video failed to load, trying alternative source');
        // Try alternative free barber video if first one fails
        const alternativeSource = document.createElement('source');
        alternativeSource.src = 'https://cdn.pixabay.com/vimeo/328714/barber-23872.mp4?width=1280';
        alternativeSource.type = 'video/mp4';
        
        // Remove the failed source and add alternative
        video.removeChild(source);
        video.appendChild(alternativeSource);
        
        // If alternative also fails, use gradient background
        video.addEventListener('error', function() {
            console.log('Alternative video also failed, using fallback background');
            document.body.style.background = 'linear-gradient(135deg, #000000 0%, #333333 100%)';
        });
    });
    
    // Pause video when page is not visible (for performance)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            video.pause();
        } else {
            video.play();
        }
    });
    
    // Mobile optimization - pause video on mobile to save data
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        video.pause();
        video.style.display = 'none';
        overlay.style.background = 'linear-gradient(135deg, #000000 0%, #333333 100%)';
    }
}

// Barbershops Directory Functions
let allBarbershops = [];
let filteredBarbershops = [];
let currentPage = 0;
const itemsPerPage = 6;

// Load barbershops directory
async function loadBarbershopsDirectory() {
    try {
        const response = await fetch('klang-valley-barbershops.json');
        const data = await response.json();
        allBarbershops = data.barbershops;
        filteredBarbershops = [...allBarbershops];
        displayBarbershops();
    } catch (error) {
        console.error('Error loading barbershops:', error);
        // Fallback: Use hardcoded data
        allBarbershops = getHardcodedBarbershops();
        filteredBarbershops = [...allBarbershops];
        displayBarbershops();
    }
}

// Display barbershops
function displayBarbershops() {
    const grid = document.getElementById('barbershopsGrid');
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const barbershopsToShow = filteredBarbershops.slice(startIndex, endIndex);
    
    if (currentPage === 0) {
        grid.innerHTML = '';
    }
    
    barbershopsToShow.forEach(barbershop => {
        const card = createBarbershopCard(barbershop);
        grid.appendChild(card);
    });
    
    // Update load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (endIndex >= filteredBarbershops.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Create barbershop card
function createBarbershopCard(barbershop) {
    const card = document.createElement('div');
    card.className = 'barbershop-card';
    
    const servicesList = barbershop.services.map(service => 
        `<div class="service-item">
            <span>${service.name}</span>
            <span class="service-price">RM ${service.price}</span>
        </div>`
    ).join('');
    
    card.innerHTML = `
        <div class="barbershop-header">
            <div>
                <div class="barbershop-name">${barbershop.name}</div>
                <div class="barbershop-specialty">${barbershop.specialty}</div>
            </div>
            <div class="barbershop-rating">⭐ ${barbershop.rating}</div>
        </div>
        
        <div class="barbershop-location">
            📍 ${barbershop.location.area}, ${barbershop.location.district}
        </div>
        
        <div class="barbershop-services">
            ${servicesList}
        </div>
        
        <div class="barbershop-contact">
            <a href="tel:${barbershop.contact.phone}" class="contact-btn">📞 Call</a>
            <a href="https://wa.me/${barbershop.contact.whatsapp.replace(/\D/g, '')}" class="contact-btn">💬 WhatsApp</a>
        </div>
    `;
    
    return card;
}

// Search barbershops
function searchBarbershops() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    currentPage = 0;
    
    filteredBarbershops = allBarbershops.filter(barbershop => 
        barbershop.name.toLowerCase().includes(searchTerm) ||
        barbershop.specialty.toLowerCase().includes(searchTerm) ||
        barbershop.location.area.toLowerCase().includes(searchTerm) ||
        barbershop.location.district.toLowerCase().includes(searchTerm)
    );
    
    displayBarbershops();
}

// Filter barbershops
function filterBarbershops() {
    const areaFilter = document.getElementById('areaFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const specialtyFilter = document.getElementById('specialtyFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    currentPage = 0;
    
    filteredBarbershops = allBarbershops.filter(barbershop => {
        // Area filter
        if (areaFilter && barbershop.location.area !== areaFilter) {
            return false;
        }
        
        // Price filter
        if (priceFilter) {
            const avgPrice = barbershop.services.reduce((sum, service) => sum + service.price, 0) / barbershop.services.length;
            const [min, max] = priceFilter.split('-').map(Number);
            
            if (priceFilter === '80+') {
                if (avgPrice < 80) return false;
            } else if (avgPrice < min || avgPrice > max) {
                return false;
            }
        }
        
        // Specialty filter
        if (specialtyFilter && !barbershop.specialty.includes(specialtyFilter)) {
            return false;
        }
        
        // Search filter
        if (searchTerm && !(
            barbershop.name.toLowerCase().includes(searchTerm) ||
            barbershop.specialty.toLowerCase().includes(searchTerm) ||
            barbershop.location.area.toLowerCase().includes(searchTerm)
        )) {
            return false;
        }
        
        return true;
    });
    
    displayBarbershops();
}

// Load more barbershops
function loadMoreBarbershops() {
    currentPage++;
    displayBarbershops();
}

// Hardcoded barbershops data (fallback)
function getHardcodedBarbershops() {
    return [
        {
            id: "BV001",
            name: "Man Barber",
            owner: "Man",
            specialty: "Artist & Celebrity Styling",
            rating: 4.8,
            location: {
                area: "Kuala Lumpur",
                district: "Bukit Bintang",
                address: "Jalan Bukit Bintang, Kuala Lumpur"
            },
            contact: {
                phone: "+60 12-XXX XXXX",
                whatsapp: "+60 12-XXX XXXX"
            },
            services: [
                { name: "Haircut & Styling", price: 25 },
                { name: "Beard Trim & Shave", price: 15 },
                { name: "Hair Coloring", price: 80 },
                { name: "Special Event Styling", price: 100 }
            ]
        },
        {
            id: "BV002",
            name: "Gentleman's Cut",
            owner: "Ahmad",
            specialty: "Classic Gentleman Cuts",
            rating: 4.6,
            location: {
                area: "Petaling Jaya",
                district: "SS15",
                address: "Jalan SS15/4, Subang Jaya, Selangor"
            },
            contact: {
                phone: "+60 3-1234 5678",
                whatsapp: "+60 12-345 6789"
            },
            services: [
                { name: "Classic Haircut", price: 30 },
                { name: "Beard Trim", price: 20 },
                { name: "Hot Shave", price: 35 }
            ]
        },
        {
            id: "BV003",
            name: "Urban Fade Studio",
            owner: "Mike",
            specialty: "Modern Fade & Undercut",
            rating: 4.9,
            location: {
                area: "Shah Alam",
                district: "Seksyen 7",
                address: "Jalan Plumbum Q7/Q, Shah Alam, Selangor"
            },
            contact: {
                phone: "+60 3-9876 5432",
                whatsapp: "+60 12-987 6543"
            },
            services: [
                { name: "Fade Cut", price: 35 },
                { name: "Undercut", price: 40 },
                { name: "Design Cut", price: 50 },
                { name: "Hair Coloring", price: 90 }
            ]
        },
        {
            id: "BV004",
            name: "Classic Barber Shop",
            owner: "Raj",
            specialty: "Traditional Barber Services",
            rating: 4.5,
            location: {
                area: "Klang",
                district: "Bandar Klang",
                address: "Jalan Tengku Kelana, Klang, Selangor"
            },
            contact: {
                phone: "+60 3-3344 5566",
                whatsapp: "+60 12-334 4556"
            },
            services: [
                { name: "Traditional Haircut", price: 20 },
                { name: "Beard Trim", price: 15 },
                { name: "Head Shave", price: 25 }
            ]
        },
        {
            id: "BV005",
            name: "Premium Cuts",
            owner: "David",
            specialty: "Premium Hair Styling",
            rating: 4.7,
            location: {
                area: "Subang Jaya",
                district: "SS12",
                address: "Jalan SS12/1, Subang Jaya, Selangor"
            },
            contact: {
                phone: "+60 3-5566 7788",
                whatsapp: "+60 12-556 6778"
            },
            services: [
                { name: "Premium Haircut", price: 45 },
                { name: "Styling Consultation", price: 30 },
                { name: "Hair Treatment", price: 60 },
                { name: "Color & Highlights", price: 120 }
            ]
        },
        {
            id: "BV006",
            name: "Fade Master",
            owner: "Ali",
            specialty: "Professional Fade Cuts",
            rating: 4.8,
            location: {
                area: "Cheras",
                district: "Taman Connaught",
                address: "Jalan Cerdas, Taman Connaught, Cheras"
            },
            contact: {
                phone: "+60 3-7788 9900",
                whatsapp: "+60 12-778 8990"
            },
            services: [
                { name: "Skin Fade", price: 40 },
                { name: "Taper Fade", price: 35 },
                { name: "High Fade", price: 45 },
                { name: "Beard Fade", price: 25 }
            ]
        }
    ];
} 