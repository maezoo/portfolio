
// const openCoding = document.querySelector('.codingHome');
// const clickDesign = document.querySelector('.design');
// const openDesign = document.querySelector('.designHome');


// clickCoding.addEventListener('click', () => {
//   openCoding.classList.toggle('show');
// });



// const projectElements = document.querySelectorAll('.project');
// const openCoding = document.querySelector('.codingHome');


// const clickCoding = document.querySelector('.coding');
// const sectionTabs = document.querySelectorAll('.tab_item');

// clickCoding.addEventListener('click', function (e) {
//   e.preventDefault();

//   sectionTabs.forEach(tab_item => {
//     tab_item.style.display = 'none';
//   });

//   openCoding.style.display = 'block';
// });


// $('.coding').click(function (e) {
//   e.preventDefault();
//   $('.project').hide()
//   $('.codingHome').show()
// })

// =======================================================
// 첫번째 화면전환 ===========================================
const clickPort = document.querySelector('.text_box');
const hideIntro = document.querySelector('.intro');
const firstTab = document.querySelectorAll('.firstPage');
const clickLogo = document.querySelector('.logo');

const toggleTab = () => {
  hideIntro.classList.toggle('hide');
  firstTab.forEach(active => {
    active.classList.toggle('show');
  });
};

clickPort.addEventListener('click', toggleTab);
clickLogo.addEventListener('click', toggleTab);

//   hideIntro.classList.toggle('hide');
//   showHeader.classList.toggle('show');
//   showProject.classList.toggle('show');
// });

// =======================================================
// =======================================================

// =======================================================
// 메뉴 전환 ============================================
const menuItems = document.querySelectorAll('.gnb_list');
const sectionTabs = document.querySelectorAll('.tab_item');

menuItems.forEach(button => {
  button.addEventListener('click', function () {
    sectionTabs.forEach(tab => {
      tab.style.display = 'none';
    });


    const targetTabId = button.getAttribute('data-tab');
    const targetTab = document.querySelector(`#${targetTabId}`);
    targetTab.style.display = 'block';
  });
});







// =====================================================================
// const clickImg = document.querySelector('.clone');
// const infoShow = document.querySelector('.info_page');
// const imgZoom = document.querySelector('.zoom_img');
// const closeBtn = document.querySelector('.title img');
// const backHome = document.querySelector('.codingHome');

// clickImg.addEventListener('click', () => {
//   infoShow.classList.toggle('show'); // 토글 기능으로 등장/사라짐 조절
//   imgZoom.classList.toggle('zoom'); // 토글 기능으로 등장/사라짐 조절
//   clickImg.classList.toggle('remove'); // 토글 기능으로 등장/사라짐 조절
// });

// closeBtn.addEventListener('click', () => {
//   infoShow.classList.toggle('show');
// });



// 토글 기능으로 등장/사라짐 조절
// infoShow.classList.remove('remove'); // 토글 기능으로 등장/사라짐 조절


// clickImg.addEventListener('click', () => {
// infoShow.classList.t('show'); // 토글 기능으로 등장/사라짐 조절
// });
// clickImg.addEventListener('click', () => {
//   clickImg.style.animation = 'none'; // 애니메이션 제 ㅇ거
//   clickImg.style.filter = 'none'; // 애니메이션 제거
// });


// clickImg.addEventListener('click', () => {
//   clickImg.classList.toggle('noAni');
// });


// ====================

// const clickProject = document.querySelector('.menu1');
// const projectShow = document.querySelector('.project');

// clickProject.addEventListener('click', () => {
//   projectShow.classList.toggle('show');
// });

// ====================




// =====================================================================
// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
