const projectArr = [
  {
    id: 0,
    title: 'Tonic',
    details: ['CANOPY', 'Back End Dev', 2015],
    image: 'images/Snapshoot-Portfolio-1.png',
    desktopImage: 'images/Snapshoot-Portfolio-5.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript'],
    live: '',
    source: '',
  },
  {
    id: 1,
    title: 'Multi-Post Stories',
    details: ['CANOPY', 'Back End Dev', 2015],
    image: 'images/Snapshoot-Portfolio-2.png',
    desktopImage: 'images/Snapshoot-Portfolio-4.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript'],
    live: '',
    source: '',
  },
  {
    id: 2,
    title: 'Tonic',
    details: ['Facebook', 'Full Stack Dev', 2015],
    image: 'images/Snapshoot-Portfolio-3.png',
    desktopImage: 'images/Snapshoot-Portfolio-1.png',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ['html', 'css', 'ruby'],
    live: '',
    source: '',
  },
  {
    id: 3,
    title: 'Multi-Post Stories',
    details: ['CANOPY', 'Back End Dev', 2015],
    image: 'images/Snapshoot-Portfolio-4.png',
    desktopImage: 'images/Snapshoot-Portfolio-2.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
];

const popup = document.querySelector('.popup-box');
const cards = document.querySelector('.cards');

let html = '';

projectArr.forEach((project) => {
  html += `
            <section class="row work" id="portflio">
                <div class="col-ss-6">
                    <img src="${project.image}" class="mob1" alt="">
                    <img src="${project.desktopImage}" class="desk1" alt="">
                </div>
                <div class="col-ss-7">
                    <h2>${project.title}</h2>
                    <div class="counter">
                        <span>${project.details[0]}</span>
                        <span class="counters"></span>
                        <span>${project.details[1]}</span>
                        <span class="counters"></span>
                        <span>${project.details[2]}</span>
                    </div>
                    <p>${project.description}</p>
                    <ul>
                        <li class="technologies"><a href="#">${project.technologies[0]}</a></li>
                        <li class="technologies"><a href="#">${project.technologies[1]}</a></li>
                        <li class="technologies"><a href="#">${project.technologies[2]}</a></li>
                    </ul>
                    <button class="btn1">See Project</button>
                </div>
            </section>`;
});

cards.innerHTML = html;

const projectButtons = document.querySelectorAll('.btn1');

for (let index = 0; index < projectButtons.length; index += 1) {
  projectButtons[index].addEventListener('click', () => {
    const title = popup.querySelector('.popup-title');
    const detail1 = popup.querySelector('.div1');
    const detail2 = popup.querySelector('.div2');
    const detail3 = popup.querySelector('.div3');
    const tech1 = popup.querySelector('.list1');
    const tech2 = popup.querySelector('.list2');
    const tech3 = popup.querySelector('.list3');
    const projDecscription = popup.querySelector('.popup-desc');
    const liveButton = popup.querySelector('.see-live');
    const sourceButton = popup.querySelector('.see-source');
    const img = popup.querySelector('img');

    title.textContent = projectArr[index].title;
    const [details1, details2, details3] = projectArr[index].details;
    const [techs1, techs2, techs3] = projectArr[index].technologies;

    detail1.textContent = details1;
    detail2.textContent = details2;
    detail3.textContent = details3;
    tech1.textContent = techs1;
    tech2.textContent = techs2;
    tech3.textContent = techs3;
    projDecscription.textContent = projectArr[index].description;
    liveButton.setAttribute('href', projectArr[index].live);
    sourceButton.setAttribute('href', projectArr[index].source);

    img.src = projectArr[index].image;
    img.srcset = projectArr[index].desktopImage;

    popup.classList.remove('d-none');
    document.body.style.overflowY = 'hidden';
  });
}

const btnClosePopup = document.querySelector('.popup-close-btn');
btnClosePopup.addEventListener('click', () => {
  popup.classList.add('d-none');
  document.body.style.overflowY = 'auto';
});
