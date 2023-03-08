const target = document.querySelector('.work');

const payload = [
  {
    modal: {
      gridItem: 'grid-item1',
      modHeader: 'Hotel',
      modpara1: 'Hotel Seoul',
      modli1: 'BackEnd',
      modli2: '2020',
      modpara2: 'You can reserve hotel rooms, check facilities and amenities, as well as access current special offers and promotions from the website. The website also  inquiries regarding a room reservation or services provided by the hotel. ',
      modli3: 'html',
      modli4: 'css',
      modli5: 'javascript',
      backGround: 'img/Snapshoot Portfolio.gif',
      buttonNumber: 'work-button-1',
    },
  },
  {
    modal: {
      gridItem: 'grid-item2',
      modHeader: 'Ticket',
      modpara1: 'Gaumont Alésia Cinema',
      modli1: 'Full Stack',
      modli2: '2022',
      modpara2: ' Gaumont Alésia is the perfect destination for an unforgettable film experience, offering state-of-the-art digital projection and sound systems, comfortable seating and VIP services. The cinema also offers an easy online booking system for new releases, special events and blockbusters.',
      modli3: 'html',
      modli4: 'css',
      modli5: 'javascript',
      backGround: 'img/Snapshoot Portfolio1.gif',
      buttonNumber: 'work-button-2',
    },
  },
  {
    modal: {
      gridItem: 'grid-item3',
      modHeader: 'UBER',
      modpara1: 'Uber',
      modli1: 'Full Stack',
      modli2: '2023',
      modpara2: 'Uber is a transportation and logistics technology platform. Through its mobile app, Uber links riders with drivers for a variety of ride types and destinations.',
      modli3: 'html',
      modli4: 'css',
      modli5: 'Javascript',
      backGround: 'img/Snapshoot Portfolio2.gif',
      buttonNumber: 'work-button-3',
    },
  },
  {
    modal: {
      gridItem: 'grid-item4',
      modHeader: 'Flight',
      modpara1: 'Bole Airport',
      modli1: 'lead Dev',
      modli2: '2018',
      modpara2: 'a large international airport located in Addis Ababa, the capital of Ethiopia. It is the main hub of Ethiopian Airlines, Africas largest airline.',
      modli3: 'html',
      modli4: 'CSS',
      modli5: 'javaScript',
      backGround: 'img/Snapshoot Portfolio3.gif',
      buttonNumber: 'work-button-4',
    },
  },
];

payload.forEach((x) => {
  target.innerHTML += `
  <div class="grid-item ${x.modal.gridItem}">
            <div class="work-img1">
                <img src="${x.modal.backGround}" Nature, catchy look inspiring bionic forms">
            </div>
            <div class="containertext1">
                <h2>${x.modal.modHeader}</h2>
                <div class="work-content work-content1">

                    <p>${x.modal.modpara1}</p>
                    <ul>
                        <li>${x.modal.modli1}</li>
                        <li>${x.modal.modli2}</li>
                    </ul>
                </div>
                <div class="work-description">
                    <p class="p-1">
                    ${x.modal.modpara2}
                    </p>
                </div>
                <div class="categories">
                    <ul>
                        <li>${x.modal.modli3}</li>
                        <li>${x.modal.modli4}</li>
                        <li>${x.modal.modli5}</li>
                    </ul>
                </div>
              <div class="button">
                  <button type="button" class="work-button ${x.modal.buttonNumber}">See Project</button>
              </div>
        </div>
    </div>
  `;
});
