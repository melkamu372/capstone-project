const featuredMusicians = [{
  name: 'Aster Aweke',
  image: './assets/features/aster-awoke.jpg',
  title: 'Super Star, singer, song writer and performer',
  detail: 'Aster Aweke is an Ethiopian Super Star, singer, song writer and performer. She is known as the queen of pop music in Ethiopia.',
}, {
  name: 'Teddy Afro',
  image: './assets/features/teddy.jpg',
  title: 'An Ethiopian singer-songwriter',
  detail: 'Tewodros Kassahun Germamo known professionally as Teddy Afro. Known by his revolutionary songs and political dissent sentiment,most significant Ethiopian artists.',
}, {
  name: 'Mulatu Astatke',
  image: './assets/features/mulatu.jpg',
  title: 'Father of "Ethio-jazz"',
  detail: 'An Ethiopian musician and arranger considered as the father of "Ethio-jazz".Trained in London, New York City, and Boston where he combined his jazz and Latin music  with traditional Ethiopian music',
}, {
  name: 'Neway Debebe',
  image: './assets/features/neway.jpg',
  title: 'Singer and songwriter',
  detail: 'An Ethiopian singer and songwriter. Neway became popular after releasing his first debut album, recorded by the Tango Music shop, in 1970s with a local band called the Roha Band.',
}, {
  name: 'Rophnan Nuri Muzeyin',
  image: './assets/features/rofnan.jpg',
  title: 'Musician, DJ, and Audio Engineer',
  detail: 'is an Ethiopian musician, singer, songwriter, DJ, and audio engineer. Widely acclaimed, he is currently considered as one of the most influential artists in Ethiopia.',
}, {
  name: 'Fikeraddis Nekatibeb',
  image: './assets/features/fikre-addis.jpg',
  title: 'Iconic female singer',
  detail: 'A renowned iconic female singer who has actively dominated the Ethiopian music industry for the last 3 decades. She has received several national awards and international recognitions.',
}];

const musiciansList = document.querySelector('.featured-musicians-list');
const more = document.querySelector('.more-btn');
const less = document.querySelector('.less-btn');

const speaker = function () {
  for (let index = 0; index < featuredMusicians.length; index += 1) {
    musiciansList.innerHTML += `
          
    <article class="col musician-card">
    <div class="musician-img-cont">
       <img src="./assets/backgrounds/feature-mobile-bg.jpg" alt="musician-img" class="musician-mobile-back-img" id="musician-back-img">
        <img src="./assets/backgrounds/feature-bg.jpg" alt="musician-img" class="musician-desktop-back-img "  id="musician-back-img">
        <img  src="${featuredMusicians[index].image}" alt="musician-img" class="musician-img" id="musician-img1">
    </div>
    <div class="musician-desc">
        <h4 class="musician-name" id="musician-name1">${featuredMusicians[index].name}</h4>

        <p class="musician-title" id="musician-title1">${featuredMusicians[index].title}</p>

        <div class="line line2"></div>

        <p class="musician-detail" id="musician-detail1">${featuredMusicians[index].detail}</p>
    </div>
</article>
            `;
  }
};

window.addEventListener('load', speaker);

// More button
let currentItems = 2;

more.addEventListener('click', () => {
  currentItems = 2;
  const moreSpeakers = [...document.querySelectorAll('.musician-card')];

  for (let index = currentItems; index < moreSpeakers.length; index += 1) {
    moreSpeakers[index].style.display = 'flex';
  }

  currentItems += 4;

  if (currentItems >= moreSpeakers.length) {
    more.style.display = 'none';
    less.style.display = 'flex';
  }
});

// Less button
less.addEventListener('click', () => {
  const moreSpeakers = [...document.querySelectorAll('.musician-card')];

  for (let index = 2; index < moreSpeakers.length; index += 1) {
    moreSpeakers[index].style.display = 'none';
  }

  currentItems -= 4;

  if (currentItems <= 2) {
    more.style.display = 'flex';
    less.style.display = 'none';
  }
});
