const hamburger = document.querySelector(‘.hamburger’);
const navul = document.querySelector(‘.nav-ul’);
const bottom = document.querySelector(‘.nav-link2’);
const popButton = document.querySelectorAll('.work-button');
const popButton1 = document.querySelectorAll('.work-button1');
const popModal = document.querySelector('.buttonmob');
const popModaldesk = document.querySelector('.buttondesk');
const closeButton = document.querySelectorAll('.close-button');
const Overlay = document.querySelector('.active');
const workSection = document.querySelector('.work');
const homeSection = document.querySelector(‘.home’);
const aboutsection = document.querySelector('.about-myself');
const contactform = document.querySelector('.form-container');
const headerpart = document.querySelector('header');

// ---------------------------------------------- //
// ---------------------------------------------- //
// ------ SECTION FOR LOADING MODAL DATA -------- //
// ---------------------------------------------- //
// ---------------------------------------------- //

const button1 = document.querySelector('.work-button-1');
const button2 = document.querySelector('.work-button-2');
const button3 = document.querySelector('.work-button-3');
const button4 = document.querySelector('.work-button-4');
let buttonCount = 0;
let deskCount = 0;

// ----------------------------------------------- //
// ------------ MODAL ELEMENTS ------------------- //
// ----------------------------------------------- //
const modHeader = document.querySelector('.modal-header');
const modpara1 = document.querySelector('.modal-paragraph-1');
const modli1 = document.querySelector('.modal-li-1');
const modli2 = document.querySelector('.modal-li-2');
const modpara2 = document.querySelector('.modal-paragraph-2');
const modli3 = document.querySelector('.modal-li-3');
const modli4 = document.querySelector('.modal-li-4');
const modli5 = document.querySelector('.modal-li-5');
const mobileLive = document.querySelector('.mobile-live');
const mobileSrc = document.querySelector('.mobile-src');
// ----------------------------------------------- //

// desktop version /////////
const deskmodHeader = document.querySelector('.deskmodal-header');
const deskmodpara1 = document.querySelector('.deskmodal-paragraph-1');
const deskmodli1 = document.querySelector('.deskmodal-li-1');
const deskmodli2 = document.querySelector('.deskmodal-li-2');
const deskmodpara2 = document.querySelector('.deskmodal-paragraph-2');
const deskmodli3 = document.querySelector('.deskmodal-li-3');
const deskmodli4 = document.querySelector('.deskmodal-li-4');
const deskmodli5 = document.querySelector('.deskmodal-li-5');
const deskmodli6 = document.querySelector('.deskmodal-li-6');
const deskmodli7 = document.querySelector('.deskmodal-li-7');
const deskmodli8 = document.querySelector('.deskmodal-li-8');
const deskLive = document.querySelector('.desk-live');
const deskSrc = document.querySelector('.desk-source');

// ------------- MODAL EVENTS -------------------- //
// ----------------------------------------------- //

button1.addEventListener('click', () => {
  buttonCount = 1;
  deskCount = 5;
});
button2.addEventListener('click', () => {
  buttonCount = 2;
  deskCount = 6;
});
button3.addEventListener('click', () => {
  buttonCount = 3;
  deskCount = 7;
});
button4.addEventListener('click', () => {
  buttonCount = 4;
  deskCount = 8;
});

// ----------------------------------------------- //
// ------------- MODAL EVENTS -------------------- //
// ----------------------------------------------- //

const x = {
  modal_1: {
    modHeader: 'Hotel Website',
    modpara1: 'Four seasons Hotel Seoul',
    modli1: 'Back End Dev',
    modli2: '2020',
    modpara2: 'You can reserve hotel rooms, check facilities and amenities, as well as access current special offers and promotions from the website. The website also provides contact information for any questions or inquiries regarding a room reservation or services provided by the hotel. You can also learn about upcoming events and activities being held at the hotel, explore nearby attractions and read reviews from other guests.',
    modli3: 'html',
    modli4: 'css',
    modli5: 'javascript',
    backGround: 'img/25.png',
    linkLive: 'https://abenezerassefa.github.io//Abeni-Pro-/',
    linkSrc: 'https://github.com/AbenezerAssefa/Abeni-Pro-',
  },
  modal_2: {
    modHeader: 'Ticket Booking',
    modpara1: 'Gaumont Alésia Cinema',
    modli1: 'Full Stack Dev',
    modli2: '2015',
    modpara2: ' Gaumont Alésia Cinema is the perfect destination for an unforgettable film experience, offering state-of-the-art digital projection and sound systems, comfortable seating and VIP services. The cinema also offers an easy online booking system for new releases, special events and blockbusters. With its convenient location in Paris 14th district, its a great spot for a night out – be sure to grab some popcorn for the show!',
    modli3: 'html',
    modli4: 'css',
    modli5: 'javascript',
    backGround: 'img/25.png',
    linkLive: 'https://abenezerassefa.github.io//Abeni-Pro-/',
    linkSrc: 'https://github.com/AbenezerAssefa/Abeni-Pro-',
  },
  modal_3: {
    modHeader: 'Facebook 360',
    modpara1: 'Facebook',
    modli1: 'Full Stack Dev Dev',
    modli2: '2015',
    modpara2: 'Exploring the future of media in Facebooks first virtual reality app; a place to discover and enjoy 360 photos and videos on Gear VRL',
    modli3: 'html',
    modli4: 'css',
    modli5: 'Javascript',
    backGround: 'img/25.png',
    linkLive: 'https://abenezerassefa.github.io//Abeni-Pro-/',
    linkSrc: 'https://github.com/AbenezerAssefa/Abeni-Pro-',
  },
  modal_4: {
    modHeader: 'Uber Navigation',
    modpara1: 'Uber',
    modli1: 'lead Developer',
    modli2: '2018',
    modpara2: 'A smart assistant to nake driving more safe, efficient, and fun by unlocking your most expensive computer: your car',
    modli3: 'html',
    modli4: 'CSS',
    modli5: 'javaScript',
    backGround: 'img/25.png',
    linkLive: 'https://abenezerassefa.github.io//Abeni-Pro-/',
    linkSrc: 'https://github.com/AbenezerAssefa/Abeni-Pro-',
  },
};

// desktop part//
const y = {
  modal_1: {
    deskmodHeader: 'Tonic',
    deskmodpara1: 'CANCOPY',
    deskmodli1: 'Back End Dev',
    deskmodli2: '2015',
    deskmodpara2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi cupiditate placeat suscipit quia  consequuntur reprehenderit sit fuga officiis cupiditate optio dolore labore vero itaque adipisci nihil ipsam, quisquam, quasi officia dolorem consectetur. Modi, adipisci. Laborum maxime ipsa impedit ut, omnis libero sequi fuga at esse nostrum? Voluptatibus, labore! Corporis quae recusandae, repudiandae !',
    deskmodli3: 'html',
    deskmodli4: 'css',
    deskmodli5: 'javascript',
    deskmodli6: 'github',
    deskmodli7: 'ruby',
    deskmodli8: 'bootsraps',
    backGround: 'img/25.png',
    linkLive: 'https://abenezerassefa.github.io//Abeni-Pro-/',
    linkSrc: 'https://github.com/AbenezerAssefa/Abeni-Pro-',
  },
  modal_2: {
    deskmodHeader: 'TMulti-Post Stories',
    deskmodpara1: 'FACEBOOK',
    deskmodli1: 'Full Stack Dev',
    deskmodli2: '2015',
    deskmodpara2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi cupiditate placeat suscipit quia  consequuntur reprehenderit sit fuga officiis cupiditate optio dolore labore vero itaque adipisci nihil ipsam, quisquam, quasi officia dolorem consectetur. Modi, adipisci. Laborum maxime ipsa impedit ut, omnis libero sequi fuga at esse nostrum? Voluptatibus, labore! Corporis quae recusandae, repudiandae !',
    deskmodli3: 'html',
    deskmodli4: 'css',
    deskmodli5: 'javascript',
    deskmodli6: 'github',
    deskmodli7: 'ruby',
    deskmodli8: 'bootsraps',
    backGround: 'img/25.png',
    linkLive: 'https://abenezerassefa.github.io//Abeni-Pro-/',
    linkSrc: 'https://github.com/AbenezerAssefa/Abeni-Pro-',
  },
  modal_3: {
    deskmodHeader: 'Facebook 360',
    deskmodpara1: 'Facebook',
    deskmodli1: 'Full Stack Dev Dev',
    deskmodli2: '2015',
    deskmodpara2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi cupiditate placeat suscipit quia  consequuntur reprehenderit sit fuga officiis cupiditate optio dolore labore vero itaque adipisci nihil ipsam, quisquam, quasi officia dolorem consectetur. Modi, adipisci. Laborum maxime ipsa impedit ut, omnis libero sequi fuga at esse nostrum? Voluptatibus, labore! Corporis quae recusandae, repudiandae !',
    deskmodli3: 'html',
    deskmodli4: 'css',
    deskmodli5: 'javascript',
    deskmodli6: 'github',
    deskmodli7: 'ruby',
    deskmodli8: 'bootsraps',
    backGround: 'img/25.png',
    linkLive: 'https://abenezerassefa.github.io//Abeni-Pro-/',
    linkSrc: 'https://github.com/AbenezerAssefa/Abeni-Pro-',
  },
  modal_4: {
    deskmodHeader: 'TUber Navigation',
    deskmodpara1: 'Uber',
    deskmodli1: 'lead Developer',
    deskmodli2: '2018',
    deskmodpara2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi cupiditate placeat suscipit quia  consequuntur reprehenderit sit fuga officiis cupiditate optio dolore labore vero itaque adipisci nihil ipsam, quisquam, quasi officia dolorem consectetur. Modi, adipisci. Laborum maxime ipsa impedit ut, omnis libero sequi fuga at esse nostrum? Voluptatibus, labore! Corporis quae recusandae, repudiandae !',
    deskmodli3: 'html',
    deskmodli4: 'css',
    deskmodli5: 'javascript',
    deskmodli6: 'github',
    deskmodli7: 'ruby',
    deskmodli8: 'bootsraps',
    backGround: 'img/25.png',
    linkLive: 'https://abenezerassefa.github.io//Abeni-Pro-/',
    linkSrc: 'https://github.com/AbenezerAssefa/Abeni-Pro-',
  },
};

function dataFeeder(num) {
  if (num === 1) {
    modHeader.textContent = x.modal_1.modHeader;
    modpara1.textContent = x.modal_1.modpara1;
    modli1.textContent = x.modal_1.modli1;
    modli2.textContent = x.modal_1.modli2;
    modpara2.textContent = x.modal_1.modpara2;
    modli3.textContent = x.modal_1.modli3;
    modli4.textContent = x.modal_1.modli4;
    modli5.textContent = x.modal_1.modli5;
    mobileLive.setAttribute('onclick', "window.location.href='https://abenezerassefa.github.io//Abeni-Pro-/';");
    mobileSrc.setAttribute('onclick', "window.location.href='https://github.com/AbenezerAssefa/Abeni-Pro-';");
    document.querySelector('.mob-modal-image').setAttribute('src', 'img/Snapshoot Portfolio.jpeg');
  } else if (num === 2) {
    modHeader.textContent = x.modal_2.modHeader;
    modpara1.textContent = x.modal_2.modpara1;
    modli1.textContent = x.modal_2.modli1;
    modli2.textContent = x.modal_2.modli2;
    modpara2.textContent = x.modal_2.modpara2;
    modli3.textContent = x.modal_2.modli3;
    modli4.textContent = x.modal_2.modli4;
    modli5.textContent = x.modal_2.modli5;
    mobileLive.setAttribute('onclick', "window.location.href='https://abenezerassefa.github.io//Abeni-Pro-/';");
    mobileSrc.setAttribute('onclick', "window.location.href='https://github.com/AbenezerAssefa/Abeni-Pro-;");
    document.querySelector('.mob-modal-image').setAttribute('src', 'img/Snapshoot Portfolio.png');
  } else if (num === 3) {
    modHeader.textContent = x.modal_3.modHeader;
    modpara1.textContent = x.modal_3.modpara1;
    modli1.textContent = x.modal_3.modli1;
    modli2.textContent = x.modal_2.modli2;
    modpara2.textContent = x.modal_3.modpara2;
    modli3.textContent = x.modal_3.modli3;
    modli4.textContent = x.modal_3.modli4;
    modli5.textContent = x.modal_3.modli5;
    mobileLive.setAttribute('onclick', "window.location.href='https://abenezerassefa.github.io//Abeni-Pro-/';");
    mobileSrc.setAttribute('onclick', "window.location.href='https://github.com/AbenezerAssefa/Abeni-Pro-';");
    document.querySelector('.mob-modal-image').setAttribute('src', 'img/Snapshoot Portfolio.png');
  } else if (num === 4) {
    modHeader.textContent = x.modal_4.modHeader;
    modpara1.textContent = x.modal_4.modpara1;
    modli1.textContent = x.modal_4.modli1;
    modli2.textContent = x.modal_4.modli2;
    modpara2.textContent = x.modal_4.modpara2;
    modli3.textContent = x.modal_4.modli3;
    modli4.textContent = x.modal_4.modli4;
    modli5.textContent = x.modal_4.modli5;
    mobileLive.setAttribute('onclick', "window.location.href='https://abenezerassefa.github.io//Abeni-Pro-/';");
    mobileSrc.setAttribute('onclick', "window.location.href='https://github.com/AbenezerAssefa/Abeni-Pro-';");
    document.querySelector('.mob-modal-image').setAttribute('src', 'img/Snapshoot Portfolio.png');
  }
}

// desktop pop//

function deskFeeder(num) {
  if (num === 5) {
    deskmodHeader.textContent = y.modal_1.deskmodHeader;
    deskmodpara1.textContent = y.modal_1.deskmodpara1;
    deskmodli1.textContent = y.modal_1.deskmodli1;
    deskmodli2.textContent = y.modal_1.deskmodli2;
    deskmodpara2.textContent = y.modal_1.deskmodpara2;
    deskmodli3.textContent = y.modal_1.deskmodli3;
    deskmodli4.textContent = y.modal_1.deskmodli4;
    deskmodli5.textContent = y.modal_1.deskmodli5;
    deskmodli6.textContent = y.modal_1.deskmodli6;
    deskmodli7.textContent = y.modal_1.deskmodli7;
    deskmodli8.textContent = y.modal_1.deskmodli8;
    deskLive.setAttribute('onclick', "window.location.href='https://abenezerassefa.github.io//Abeni-Pro-/';");
    deskSrc.setAttribute('onclick', "window.location.href='https://github.com/AbenezerAssefa/Abeni-Pro-';");
    document.querySelector('.desktop-modal-image').setAttribute('src', 'img/Snapshoot Portfolio.jpeg');
  } else if (num === 6) {
    deskmodHeader.textContent = y.modal_2.deskmodHeader;
    deskmodpara1.textContent = y.modal_2.deskmodpara1;
    deskmodli1.textContent = y.modal_2.deskmodli1;
    deskmodli2.textContent = y.modal_2.deskmodli2;
    deskmodpara2.textContent = y.modal_2.deskmodpara2;
    deskmodli3.textContent = y.modal_2.deskmodli3;
    deskmodli4.textContent = y.modal_2.deskmodli4;
    deskmodli5.textContent = y.modal_2.deskmodli5;
    deskmodli6.textContent = y.modal_2.deskmodli6;
    deskmodli7.textContent = y.modal_2.deskmodli7;
    deskmodli8.textContent = y.modal_2.deskmodli8;
    deskLive.setAttribute('onclick', "window.location.href='https://abenezerassefa.github.io//Abeni-Pro-/';");
    deskSrc.setAttribute('onclick', "window.location.href='https://github.com/AbenezerAssefa/Abeni-Pro-';");
    document.querySelector('.desktop-modal-image').setAttribute('src', 'img/Snapshoot Portfolio1.png');
  } else if (num === 7) {
    deskmodHeader.textContent = y.modal_3.deskmodHeader;
    deskmodpara1.textContent = y.modal_3.deskmodpara1;
    deskmodli1.textContent = y.modal_3.deskmodli1;
    deskmodli2.textContent = y.modal_3.deskmodli2;
    deskmodpara2.textContent = y.modal_3.deskmodpara2;
    deskmodli3.textContent = y.modal_3.deskmodli3;
    deskmodli4.textContent = y.modal_3.deskmodli4;
    deskmodli5.textContent = y.modal_3.deskmodli5;
    deskmodli6.textContent = y.modal_3.deskmodli6;
    deskmodli7.textContent = y.modal_3.deskmodli7;
    deskmodli8.textContent = y.modal_3.deskmodli8;
    deskLive.setAttribute('onclick', "window.location.href='https://abenezerassefa.github.io//Abeni-Pro-/';");
    deskSrc.setAttribute('onclick', "window.location.href='https://github.com/AbenezerAssefa/Abeni-Pro-';");
    document.querySelector('.desktop-modal-image').setAttribute('src', 'img/Snapshoot Portfolio3.png');
  } else if (num === 8) {
    deskmodHeader.textContent = y.modal_4.deskmodHeader;
    deskmodpara1.textContent = y.modal_4.deskmodpara1;
    deskmodli1.textContent = y.modal_4.deskmodli1;
    deskmodli2.textContent = y.modal_4.deskmodli2;
    deskmodpara2.textContent = y.modal_4.deskmodpara2;
    deskmodli3.textContent = y.modal_4.deskmodli3;
    deskmodli4.textContent = y.modal_4.deskmodli4;
    deskmodli5.textContent = y.modal_4.deskmodli5;
    deskmodli6.textContent = y.modal_4.deskmodli6;
    deskmodli7.textContent = y.modal_4.deskmodli7;
    deskmodli8.textContent = y.modal_4.deskmodli8;
    deskLive.setAttribute('onclick', "window.location.href='https://abenezerassefa.github.io//Abeni-Pro-/';");
    deskSrc.setAttribute('onclick', "window.location.href='https://github.com/AbenezerAssefa/Abeni-Pro-';");
    document.querySelector('.desktop-modal-image').setAttribute('src', 'img/Snapshoot Portfolio4.png');
  }
}

closeButton.forEach((x) => (
  x.addEventListener('click', () => {
    popModal.classList.toggle('active');
    popModaldesk.classList.toggle('active');
    workSection.classList.toggle('active');
    homeSection.classList.toggle(‘active’);
    aboutsection.classList.toggle('active');
    contactform.classList.toggle('active');
    headerpart.classList.toggle('active');
  })
));
popButton.forEach((x) => (
  x.addEventListener('click', () => {
  // Do something if any of the four button is clicked
    dataFeeder(buttonCount);
    deskFeeder(deskCount);
    popModal.classList.toggle('active');
    Overlay.classList.toggle('active');
    popModaldesk.classList.toggle('active');
    workSection.classList.toggle('active');
    homeSection.classList.toggle(‘active’);
    aboutsection.classList.toggle('active');
    contactform.classList.toggle('active');
    headerpart.classList.toggle('active');
  })
));
popButton1.forEach((x) => (
  x.addEventListener('click', () => {
  // Do something if any of the four button is clicked
    popModaldesk.classList.toggle('active');
    Overlay.classList.toggle('active');
    popModaldesk.classList.toggle('active');
  })
));
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle(‘active’);
  navul.classList.toggle(‘active’);
  bottom.classList.toggle(‘active’);
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
   hamburger.classList.remove(‘active’);
   navul.classList.remove(‘active’);
}));

// ---------------------------------------------- //
// ---------------------------------------------- //
// ------ SECTION FOR LOADING MODAL DATA -------- //
// ---------------------------------------------- //
// ---------------------------------------------- //
