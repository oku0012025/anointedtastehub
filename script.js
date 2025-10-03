// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
})

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll(".mobile-link")
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
  })
})

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Menu Filtering
const categoryButtons = document.querySelectorAll(".menu-category")
const menuItems = document.querySelectorAll(".menu-item")

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    categoryButtons.forEach((btn) => btn.classList.remove("active"))

    // Add active class to clicked button
    button.classList.add("active")

    // Get category
    const category = button.dataset.category

    // Filter menu items
    menuItems.forEach((item) => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block"
      } else {
        item.style.display = "none"
      }
    })
  })
})

// Gallery Carousel
let currentSlide = 0
const carouselTrack = document.getElementById("carousel-track")
const slides = document.querySelectorAll(".carousel-slide")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const indicatorsContainer = document.getElementById("carousel-indicators")

// Create indicators
slides.forEach((_, index) => {
  const indicator = document.createElement("div")
  indicator.classList.add("indicator")
  if (index === 0) indicator.classList.add("active")
  indicator.addEventListener("click", () => goToSlide(index))
  indicatorsContainer.appendChild(indicator)
})

const indicators = document.querySelectorAll(".indicator")

function updateCarousel() {
  carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`

  // Update indicators
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add("active")
    } else {
      indicator.classList.remove("active")
    }
  })
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length
  updateCarousel()
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length
  updateCarousel()
}

function goToSlide(index) {
  currentSlide = index
  updateCarousel()
}

nextBtn.addEventListener("click", nextSlide)
prevBtn.addEventListener("click", prevSlide)

// Auto-advance carousel
let carouselInterval = setInterval(nextSlide, 4000)

// Pause auto-advance on hover
const carouselContainer = document.querySelector(".carousel-container")
carouselContainer.addEventListener("mouseenter", () => {
  clearInterval(carouselInterval)
})

carouselContainer.addEventListener("mouseleave", () => {
  carouselInterval = setInterval(nextSlide, 4000)
})

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("visible")
  } else {
    backToTopButton.classList.remove("visible")
  }
})

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Form Submission
const reservationForm = document.getElementById("reservation-form")

reservationForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value
  const date = document.getElementById("date").value
  const message = document.getElementById("message").value

  // Here you would typically send this data to a server
  alert(`Thank you for your reservation, ${name}! We'll contact you at ${email} to confirm your booking for ${date}.`)

  // Reset form
  reservationForm.reset()
})

// Newsletter Form
const newsletterForm = document.querySelector(".newsletter-form")

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = newsletterForm.querySelector('input[type="email"]').value
  alert(`Thank you for subscribing! We'll send updates to ${email}.`)
  newsletterForm.reset()
})
