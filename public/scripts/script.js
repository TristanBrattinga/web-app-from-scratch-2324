const body                 = document.querySelector('body')
const hamburgerMenuButton  = document.querySelector('.hamburgerMenuButton')
const hamburgerMenu        = document.querySelector('.hamburgerMenu')
const darkModeButton       = document.querySelector('.darkModeToggle')
const mobileDarkModeButton = document.querySelector('.mobileDarkModeToggle')
const scrollToTopButton    = document.querySelector('.scrollToTop')
const sliderOne            = document.querySelector('.movieImages')
const sliderTwo            = document.querySelector('.movieInfos')
const slides               = document.querySelectorAll('.movieImages li')
const prevButton           = document.getElementById('prevButton')
const nextButton           = document.getElementById('nextButton')
const dots                 = document.querySelectorAll('.movies span')
const links                = document.querySelectorAll('.hamburgerMenu ul li')

const toggleHamburgerMenu = () => {
  hamburgerMenu.classList.toggle('slideOut')
  hamburgerMenuButton.classList.toggle('menuOpen')
}

hamburgerMenuButton.addEventListener('click', toggleHamburgerMenu)

/////////////// DARK MODE TOGGLE ///////////////

const toggleDarkMode = () => {
  if (localStorage.darkMode === 'dark') {
    localStorage.darkMode = 'light'
    body.setAttribute('light-mode', 'light')
  } else {
    localStorage.darkMode = 'dark'
    body.setAttribute('light-mode', 'dark')
  }
}

darkModeButton.addEventListener('click', toggleDarkMode)
mobileDarkModeButton.addEventListener('click', toggleDarkMode)

/////////////// SCROLL TO TOP BUTTON ///////////////

const handleScrollToTop = () => {
  window.scrollTo(0, 0)
}

scrollToTopButton.addEventListener('click', handleScrollToTop)

/////////////// MOVIE SLIDER ///////////////

let currentIndex     = 0
const scrollDistance = window.innerWidth <= 768 ? 300 : 600

const handleActiveIndex = () => {
  [...dots].map((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active')
    } else {
      dot.classList.remove('active')
    }
  })
}

const handleSlidePrev = () => {
  if (currentIndex < slides.length + 1) {
    currentIndex--
  }
  sliderOne.scrollLeft -= scrollDistance
  sliderTwo.scrollLeft -= scrollDistance
  handleActiveIndex()
}

const handleSlideNext = () => {
  sliderOne.scrollLeft += scrollDistance
  sliderTwo.scrollLeft += scrollDistance
  handleActiveIndex()
}

// TODO check if possible
// const handleManualScroll = () => {
//   [...slides].map((slide, index) => {
//     const rect = slide.getBoundingClientRect()
//
//     console.log(rect.left, index)
//   })
// }

// sliderOne.addEventListener('scroll', handleManualScroll)
// sliderTwo.addEventListener('scroll', handleManualScroll)

prevButton.addEventListener('click', handleSlidePrev)
nextButton.addEventListener('click', handleSlideNext)

/////////////// HANDLE MOBILE MENU CLICK ///////////////

links.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('slideOut')
  })
})