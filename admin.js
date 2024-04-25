// JavaScript for admin interface

document.addEventListener('DOMContentLoaded', function() {
    // Sample portfolio data (replace with actual data from the backend)
    let portfolioData = [
        { title: 'Project One', category: 'SEO & Marketing', image: 'assets/images/portfolio-01.jpg' },
        { title: 'Second Project', category: 'Advertising & Marketing', image: 'assets/images/portfolio-02.jpg' },
        // Add more portfolio items as needed
    ];

    // Function to display portfolio items
    function displayPortfolioItems() {
        const portfolioList = document.getElementById('portfolio-list');
        portfolioList.innerHTML = '';
        portfolioData.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.classList.add('portfolio-item');
            portfolioItem.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.category}</p>
                <img src="${item.image}" alt="${item.title}">
            `;
            portfolioList.appendChild(portfolioItem);
        });
    }

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title');
        const category = formData.get('category');
        const image = formData.get('image');
        // Add code to send form data to the backend
        // For now, just log the form data
        console.log('Title:', title);
        console.log('Category:', category);
        console.log('Image:', image);
        // Update portfolioData array with the new item
        portfolioData.push({ title, category, image });
        // After adding new item, display updated portfolio
        displayPortfolioItems();
    }

    // Add event listener for form submission
    const portfolioForm = document.getElementById('portfolio-form');
    if (portfolioForm) {
        portfolioForm.addEventListener('submit', handleFormSubmit);
    } else {
        console.error('Portfolio form element not found.');
    }

    // Display initial portfolio items
    displayPortfolioItems();
});
