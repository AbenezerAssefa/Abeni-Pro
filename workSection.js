const target = document.querySelector('.work');

const payload = [
  {
    modal: {
      gridItem: 'grid-item1',
      modHeader: 'Booking',
      modpara1: 'CANCOPY',
      modli1: 'Back End Dev',
      modli2: '2015',
      modpara2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi cupiditate placeat suscipit!',
      modli3: 'html',
      modli4: 'css',
      modli5: 'javascript',
      backGround: 'img/Snapshoot Portfolio.png',
      buttonNumber: 'work-button-1',
    },
  },
  {
    modal: {
      gridItem: 'grid-item2',
      modHeader: 'Multi-Post Stories',
      modpara1: 'Whatsup',
      modli1: 'Full Stack Dev',
      modli2: '2015',
      modpara2: ' Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends',
      modli3: 'html',
      modli4: 'css',
      modli5: 'javascript',
      backGround: 'img/Snapshoot Portfolio1.png',
      buttonNumber: 'work-button-2',
    },
  },
  {
    modal: {
      gridItem: 'grid-item3',
      modHeader: 'Reservation',
      modpara1: 'Facebook',
      modli1: 'Full Stack Dev Dev',
      modli2: '2015',
      modpara2: 'Exploring the future of media in Facebooks first virtual reality app; a place to discover and enjoy 360 photos and videos on Gear VRL',
      modli3: 'html',
      modli4: 'css',
      modli5: 'Javascript',
      backGround: 'img/Snapshoot Portfolio3.png',
      buttonNumber: 'work-button-3',
    },
  },
  {
    modal: {
      gridItem: 'grid-item4',
      modHeader: 'Uber Navigation',
      modpara1: 'Uber',
      modli1: 'lead Developer',
      modli2: '2018',
      modpara2: 'A smart assistant to nake driving more safe, efficient, and fun by unlocking your most expensive computer: your car',
      modli3: 'html',
      modli4: 'CSS',
      modli5: 'javaScript',
      backGround: 'img/Snapshoot Portfolio4.png',
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
