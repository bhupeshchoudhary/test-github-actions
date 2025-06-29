// Interactive features for Bhupesh Choudhary's resume website
document.addEventListener('DOMContentLoaded', function() {
    
    // Typing animation for the name
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        nameElement.textContent = '';
        
        function typeWriter(text, element, speed = 100) {
            let i = 0;
            function typing() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typing, speed);
                }
            }
            typing();
        }
        
        setTimeout(() => {
            typeWriter(originalText, nameElement, 150);
        }, 500);
    }

    // Create and add scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    `;
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
            setTimeout(() => {
                if (window.pageYOffset <= 300) {
                    scrollToTopBtn.style.display = 'none';
                }
            }, 300);
        }
    });

    // Skill tags hover effects
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Contact info click handlers
    const contactSpans = document.querySelectorAll('.contact-info span');
    contactSpans.forEach(span => {
        const text = span.textContent.trim();
        
        if (text.includes('@')) {
            span.style.cursor = 'pointer';
            span.addEventListener('click', function() {
                window.location.href = `mailto:bhupesh7750@gmail.com`;
            });
        } else if (text.includes('+91')) {
            span.style.cursor = 'pointer';
            span.addEventListener('click', function() {
                window.location.href = `tel:+917489356891`;
            });
        } else if (text.includes('LinkedIn')) {
            span.style.cursor = 'pointer';
            span.addEventListener('click', function() {
                window.open('https://linkedin.com/in/bhupesh-choudhary', '_blank');
            });
        } else if (text.includes('GitHub')) {
            span.style.cursor = 'pointer';
            span.addEventListener('click', function() {
                window.open('https://github.com/bhupesh7750', '_blank');
            });
        }
    });

    // Create print button
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '<i class="fas fa-print"></i>';
    printBtn.style.cssText = `
        position: absolute;
        top: 20px;
        left: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.3);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        transition: all 0.3s ease;
    `;
    
    printBtn.addEventListener('click', function() {
        window.print();
    });
    
    const header = document.querySelector('.header');
    if (header) {
        header.style.position = 'relative';
        header.appendChild(printBtn);
    }

    // Smooth page loading
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });

    // Parallax effect for header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header && scrolled < window.innerHeight) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add interactive hover effects to project cards
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add hover effects to education and experience items
    const items = document.querySelectorAll('.education-item, .experience-item');
    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Home') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (e.key === 'End') {
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        } else if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            window.print();
        }
    });

    // Add a subtle animation to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.animationDelay = `${index * 0.1}s`;
        category.style.animation = 'fadeInUp 0.8s ease forwards';
    });

    // Fun Easter egg - click the name 5 times for a surprise
    let clickCount = 0;
    const nameEl = document.querySelector('.name');
    if (nameEl) {
        nameEl.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 5) {
                this.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)';
                this.style.backgroundSize = '400% 400%';
                this.style.webkitBackgroundClip = 'text';
                this.style.webkitTextFillColor = 'transparent';
                
                setTimeout(() => {
                    this.style.background = 'none';
                    this.style.webkitBackgroundClip = 'initial';
                    this.style.webkitTextFillColor = 'initial';
                    clickCount = 0;
                }, 3000);
            }
        });
    }

    console.log('🚀 Bhupesh Choudhary\'s Resume Website Loaded Successfully!');
    console.log('💡 Tip: Try clicking the name 5 times for a surprise!');
}); 