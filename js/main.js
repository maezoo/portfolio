
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
// =======================================================
const menuItems = document.querySelectorAll('.gnb_list');
const sectionTabs = document.querySelectorAll('.tab_item');

menuItems.forEach(button => {
  button.addEventListener('click', function () {
    sectionTabs.forEach(tab => {
      tab.style.display = 'none';  // 또는 tab.classList.add('hide');
    });


    // 클릭한 메뉴에 해당하는 tab_item을 표시하기
    const targetTabId = button.getAttribute('data-tab');
    const targetTab = document.querySelector(`#${targetTabId}`);
    targetTab.style.display = 'block';  // 또는 targetTab.classList.remove('hide');
  });
});








// // 선택된 탭 ID 얻기
// const clickDataTab = this.getAttribute('data-tab')
// const targetTab = document.getElementById(clickDataTab);

// // 모든 탭 항목 숨기기
// // sectionTabs.forEach(item => item.style.display = 'none');

// // 선택된 탭만 표시
// if (targetTab) {
//   targetTab.style.display = 'block';
//   targetTab.style.opacity = 0;
//   // 페이드 인 효과
//   let opacity = 0;
//   const fadeIn = setInterval(function () {
//     if (opacity < 1) {
//       opacity += 0.1;
//       targetTab.style.opacity = opacity;
//     } else {
//       clearInterval(fadeIn);
//     }
//   }, 100);
// }
//   });
// });

// // 첫 번째 탭 버튼 클릭을 자동으로 트리거
// menuItems[0]?.click();

// =======================================================
// 첫번째 화면전환 ===========================================
const clickPort = document.querySelector('.text_box');
const clickLogo = document.querySelector('.logo');
const hideIntro = document.querySelector('.intro');
const showHeader = document.querySelector('header');
const showProject = document.querySelector('.project');

clickPort.addEventListener('click', () => {
  hideIntro.classList.toggle('hide');
  showHeader.classList.toggle('show');
  showProject.classList.toggle('show');
});

clickLogo.addEventListener('click', () => {
  hideIntro.classList.toggle('hide');
  showHeader.classList.toggle('show');
  showProject.classList.toggle('show');
});
// =======================================================
// =======================================================






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
