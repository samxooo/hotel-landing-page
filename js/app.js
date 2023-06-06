const cardItem = [
    {
        id: 1,
        imagePath: 'images/plane.jpg',
        name: 'Flight Booking',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati tenetur omnis sit',
    },
    {
        id: 2,
        imagePath: 'images/hotel.jpg',
        name: 'Hotel & Resort Booking',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati tenetur omnis sit',
    },
    {
        id: 3,
        imagePath: 'images/family.jpg',
        name: 'Family Trip Planner',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati tenetur omnis sit',
    },
    {
        id: 4,
        imagePath: 'images/cruise.jpg',
        name: 'Cruise Tour',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati tenetur omnis sit',
    },
    {
        id: 5,
        imagePath: 'images/camp.jpg',
        name: 'Fire Camp',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati tenetur omnis sit',
    },
    {
        id: 6,
        imagePath: 'images/holidays.jpg',
        name: 'Corporate Holidays',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati tenetur omnis sit',
    },
];

const burgerBtn = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-links');

burgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
});


const cardContainerEl = document.querySelector('.card-container');


for (let i = 0; i < cardItem.length; i++) {
  const cardEl = document.createElement('div');
  const cardImgEl = document.createElement('img');
  const cardTextEl = document.createElement('div');
  const cardTitleEl = document.createElement('h5');
  const cardDescEl = document.createElement('p');

  cardEl.classList.add('card');
  cardImgEl.classList.add('card-img');
  cardTextEl.classList.add('text');
  cardTitleEl.classList.add('card-title');
  cardDescEl.classList.add('desc');

  cardImgEl.src = cardItem[i].imagePath;
  cardTitleEl.textContent = cardItem[i].name;
  cardDescEl.textContent = cardItem[i].desc;

  cardTextEl.appendChild(cardTitleEl);
  cardTextEl.appendChild(cardDescEl);
  cardEl.appendChild(cardImgEl);
  cardEl.appendChild(cardTextEl);
  cardContainerEl.appendChild(cardEl);
}

const countNum = document.querySelectorAll(".count-number");

let interval = 5000;

countNum.forEach((item) => {
  let startValue = 0;
  let endValue = parseInt(item.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    item.textContent = startValue;
    if(startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


