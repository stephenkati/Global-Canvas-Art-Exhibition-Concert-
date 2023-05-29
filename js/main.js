const hambuger = document.querySelector('#hambuger');
const menu = document.querySelector('#mobile-menu');
const closed = document.querySelector('#close');
const navitem = document.querySelectorAll('.nav-item');

hambuger.addEventListener('click', () => {
  menu.classList.add('show-menu');
});

closed.addEventListener('click', () => {
  menu.classList.remove('show-menu');
});

navitem.forEach((n) => n.addEventListener('click', () => menu.classList.remove('show-menu')));

const more = document.querySelector('#more');
const speakercardshide = document.querySelector('.speaker-card:nth-child(n+3)');
const morebtn = document.querySelector('.before-expand');
const lessbtn = document.querySelector('.after-expand');

more.addEventListener('click', (e) => {
  e.preventDefault();
  lessbtn.classList.toggle('after-expand');

  if (morebtn.style.display === 'none') {
    morebtn.style.display = 'block';
  } else {
    morebtn.style.display = 'none';
  }
});

more.addEventListener('click', (e) => {
  e.preventDefault();

  if (speakercardshide.style.display === 'none') {
    speakercardshide.style.display = 'flex';
  } else {
    speakercardshide.style.display = 'none';
  }
});

// array for featured speakers

const speakers = [
  {
    id: '1',
    speakerPhoto: './images/PeterDoig.jpg',
    speakerPhotoAlt: 'Peter Doig, contemporary artists',
    speakerTitle: 'Peter Doig',
    speakerLink: 'One of the most renowned living figurative painters.',
    speakerDesc: 'The scenes he created while learning at Chelsea College of Art.',
  },
  {
    id: '2',
    speakerPhoto: './images/JerrySaltz.jpeg',
    speakerPhotoAlt: 'Jerry Saltz, an art critic.',
    speakerTitle: 'Jerry Saltz',
    speakerLink: 'An American art critic and columnist for New York magazine.',
    speakerDesc: 'Jerry Saltz just won the esteemed award for his criticism at New York Magazine.',
  },
  {
    id: '3',
    speakerPhoto: './images/JacobPinholster.jpeg',
    speakerPhotoAlt: 'Jacob Pinholster, technology expert in art',
    speakerTitle: 'Jacob Pinholster',
    speakerLink: 'Associate Professor in Arizona State University.',
    speakerDesc: 'He teaches school of film. He also an expert in dance, art education, technology for performance and theatre.',
  },
  {
    id: '4',
    speakerPhoto: './images/Amywoodsonbouston.jpg',
    speakerPhotoAlt: 'Amy woodson culture expert and professor',
    speakerTitle: 'Amy Woodson',
    speakerLink: 'Professor at Loyola Marymount University in Los Angeles, California.',
    speakerDesc: 'Her work concentrates on cultural reactions to industrialization, particularly the history of museums.',
  },
  {
    id: '5',
    speakerPhoto: './images/LydiaGatundu.jpg',
    speakerPhotoAlt: 'Lydia Gatundu museum curator',
    speakerTitle: 'Lydia Gatundu Galavu',
    speakerLink: 'Curator at the National Museums of Kenya (NMK) Nairobi, Kenya.',
    speakerDesc: 'She is an artist with a background in art education and exhibits design.',
  },
  {
    id: '6',
    speakerPhoto: './images/wambui.jpg',
    speakerPhotoAlt: 'Wambui Collymore, art collector',
    speakerTitle: 'Wambui Collymore',
    speakerLink: 'She is an artist, consultant and gallery founder.',
    speakerDesc: 'Wambui believes that anyone can buy art, not just high net-worth people.',
  },
];

const speakercardslayout = document.querySelector('.speakers-cards-layout');

speakers.forEach((speaker) => {

  const speakercard = document.createElement('div');
  speakercard.classList.add('speaker-card');

  speakercard.innerHTML = ` 
        <div class="img">
          <img src=${speaker.speakerPhoto} alt=${speaker.speakerPhotoAlt}>
        </div>
        <div class="speaker-card-content">
            <h4 class="speaker-title">${speaker.speakerTitle}</h4>
            <p class="red"><em>
                ${speaker.speakerLink}
            </em></p>
            <p class="speaker-desc">
                ${speaker.speakerDesc}
            </p>
        </div> 
        `;

  speakercardslayout.appendChild(speakercard);
});
