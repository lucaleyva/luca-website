document.addEventListener('DOMContentLoaded', async function () {
  // Function to toggle the menu
  function toggleMenu() {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('active');
  }

  // Function to close the menu
  function closeMenu() {
    const navList = document.querySelector('nav ul');
    navList.classList.remove('active');
  }

  // Function to display expertise items
  function displayExpertiseItems() {
    const container = document.getElementById("expertiseContainer");

    const expertiseItems = [
      { name: "Planning & Execution", color: "#3498db" },
      { name: "Agile Processes & Technical Practices", color: "#e74c3c" },
      { name: "Collaboration", color: "#27ae60" },
      // Add more expertise items as needed
    ];

    expertiseItems.forEach((item) => {
      const expertiseItem = document.createElement("div");
      expertiseItem.classList.add("expertise-item");
      expertiseItem.style.backgroundColor = item.color;

      const itemName = document.createElement("p");
      itemName.textContent = item.name;

      expertiseItem.appendChild(itemName);
      container.appendChild(expertiseItem);
    });
  }

  // Initial display
  displayExpertiseItems();

  // Function to fetch testimonials from JSON file
  async function getTestimonials() {
    const response = await fetch("./assets/testimonials.json");
    const testimonials = await response.json();
    return testimonials;
  }

  // Function to display testimonials
  function displayTestimonials(testimonials, startIndex, cardsPerPage) {
    const container = document.getElementById("testimonialContainer");
    container.innerHTML = ""; // Clear existing content

    for (let i = startIndex; i < startIndex + cardsPerPage && i < testimonials.length; i++) {
      const testimonial = testimonials[i];

      const card = document.createElement("div");
      card.classList.add("testimonial-card");

      const image = document.createElement("img");
      image.src = testimonial.image;
      image.alt = testimonial.name;
      image.classList.add("testimonial-image");

      const content = document.createElement("div");
      content.classList.add("testimonial-content");

      const name = document.createElement("h3");
      name.classList.add("testimonial-name");
      name.textContent = testimonial.name;

      const title = document.createElement("p");
      title.classList.add("testimonial-title");
      title.textContent = testimonial.title;

      const text = document.createElement("p");
      text.classList.add("testimonial-text");
      text.textContent = testimonial.text;

      content.appendChild(name);
      content.appendChild(title);
      content.appendChild(text);

      card.appendChild(image);
      card.appendChild(content);

      container.appendChild(card);
    }
  }

  // Function to change page
  async function changePage(change) {
    const testimonials = await getTestimonials();
    const screenWidth = window.innerWidth;
    const cardsPerPage = screenWidth >= 1200 ? 3 : screenWidth >= 768 ? 2 : 1;

    let currentPage = parseInt(document.getElementById("currentPage").textContent);

    currentPage += change;

    if (currentPage < 1) {
      currentPage = Math.ceil(testimonials.length / cardsPerPage);
    } else if (currentPage > Math.ceil(testimonials.length / cardsPerPage)) {
      currentPage = 1;
    }

    document.getElementById("currentPage").textContent = currentPage;
    displayTestimonials(testimonials, (currentPage - 1) * cardsPerPage, cardsPerPage);
  }

  // Initial display
  let currentPage = 1;
  const initialTestimonials = await getTestimonials();
  const initialScreenWidth = window.innerWidth;
  const initialCardsPerPage = initialScreenWidth >= 1200 ? 3 : initialScreenWidth >= 768 ? 2 : 1;
  displayTestimonials(initialTestimonials, 0, initialCardsPerPage);

  // Pagination event listeners
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  prevButton.addEventListener('click', function () {
    changePage(-1);
  });

  nextButton.addEventListener('click', function () {
    changePage(1);
  });

  // Toggle menu event listener
  const menuIcon = document.querySelector('.menu-icon');
  const navUl = document.querySelector('nav ul');

  menuIcon.addEventListener('click', function () {
    navUl.classList.toggle('show');
  });

  // Event listener to close menu on section click
  document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', () => {
      // Close the menu after a short delay
      setTimeout(() => {
        navUl.classList.remove('show');
      }, 300);
    });
  });
});
