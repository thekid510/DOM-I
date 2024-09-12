const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const header = document.querySelector('header');

let links = document.querySelectorAll("nav a");
// for(i =1; i<6; i++) {
//   let linksItem = "nav-item-" +(i+1);
//   links[i].textContent = siteContent["nav"]
//     [linksItem];
// }

links[0].textContent = "Services"
links[0].href = '#'
links[0].style.color = 'green'
links[1].textContent = "Product"
links[1].href = '#'
links[1].style.color = 'green'
links[2].textContent = "Vision"
links[2].href = '#'
links[2].style.color = 'green'
links[3].textContent = "Features"
links[3].href = '#'
links[3].style.color = 'green'
links[4].textContent = "About"
links[4].href = '#'
links[4].style.color = 'green'
links[5].textContent = "Contact"
links[5].href = '#'
links[5].style.color = 'green'



const extra = document.createElement('a')
extra.textContent = "Last is"
extra.href = "#"
extra.style.color = 'green'
document.querySelector('nav').prepend(extra)

const extra2 = document.createElement('a')
extra2.textContent = "James"
extra2.href = "#"
extra2.style.color = 'green'
document.querySelector('nav').appendChild(extra2)



const cta = document.querySelector('h1');

cta.innerHTML = 'DOM <br> IS <br> AWESOME'

const btn = document.querySelector('button');
btn.textContent = 'Get Started'

const image = document.getElementById('cta-img')
image.setAttribute('src','img/header-img.png')

const h4 = document.querySelectorAll('h4')

h4[0].textContent = "Features"
h4[1].textContent = "About"
h4[2].textContent = "Services"
h4[3].textContent = "Product"
h4[4].textContent = "Vision"
h4[5].textContent = "Contact"

h4[0].nextElementSibling.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
h4[1].nextElementSibling.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
h4[2].nextElementSibling.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
h4[3].nextElementSibling.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
h4[4].nextElementSibling.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const midimage = document.getElementById('middle-img')
midimage.setAttribute('src','img/mid-page-accent.jpg')

let footerContent = document.querySelectorAll(".contact p")

footerContent[0].textContent = "123 Way 456 Street Somewhere, USA"
footerContent[1].textContent = "1 (888) 888-8888"
footerContent[2].textContent = "sales@greatidea.io"

let copyr = document.querySelector('footer p')
copyr.textContent = 'Copyright Great Idea! 2018'