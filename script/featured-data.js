const featuredMusicians = [{
    name: "Aster Aweke",
    image: './assets/features/aster-awoke.jpg',
    title: 'Super Star, singer, song writer and performer',
    detail: "Aster Aweke is an Ethiopian Super Star, singer, song writer and performer. She is known as the queen of pop music in Ethiopia.",
  }, {
    name: 'Teddy Afro',
    image: './assets/features/teddy.jpg',
    title: 'An Ethiopian singer-songwriter',
    detail: 'Tewodros Kassahun Germamo known professionally as Teddy Afro. Known by his revolutionary songs and political dissent sentiment,most significant Ethiopian artists of all time',
  }, {
    name: 'Mulatu Astatke',
    image: './assets/features/mulatu.jpg',
    title: 'Father of "Ethio-jazz"',
    detail: 'An Ethiopian musician and arranger considered as the father of "Ethio-jazz". Born in Jimma, Mulatu was musically trained in London, New York City, and Boston where he combined his jazz and Latin music interests with traditional Ethiopian music',
  }, {
    name: 'Neway Debebe',
    image: './assets/features/neway.jpg',
    title: 'Singer and songwriter',
    detail: 'An Ethiopian singer and songwriter. Neway became popular after releasing his first debut album, recorded by the Tango Music shop, in 1970s with a local band called the Roha Band. Following this, Neway released more than five studio albums.',
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
  
  const musicianName = document.querySelectorAll('.musician-name');
  const musicianImage = document.querySelectorAll('.musician-img');
  const musicianTitle = document.querySelectorAll('.musician-title');
  const musicianDetail = document.querySelectorAll('.musician-detail');
  
  for (let i = 0; i < musicianName.length; i += 1) {
    musicianName[i].textContent = featuredMusicians[i].name;
  }
  
  for (let i = 0; i < musicianImage.length; i += 1) {
    musicianImage[i].src = featuredMusicians[i].image;
  }
  
  for (let i = 0; i < musicianTitle.length; i += 1) {
    musicianTitle[i].textContent = featuredMusicians[i].title;
  }
  
  for (let i = 0; i < musicianDetail.length; i += 1) {
    musicianDetail[i].textContent = featuredMusicians[i].detail;
  }