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


const clickImg = document.querySelector('.clone');
const infoShow = document.querySelector('.info');

clickImg.addEventListener('click', () => {
  infoShow.classList.toggle('show'); // 토글 기능으로 등장/사라짐 조절
});
clickImg.addEventListener('click', () => {
  // infoShow.classList.t('show'); // 토글 기능으로 등장/사라짐 조절
});
// clickImg.addEventListener('click', () => {
//   clickImg.style.animation = 'none'; // 애니메이션 제거
//   clickImg.style.filter = 'none'; // 애니메이션 제거
// });


clickImg.addEventListener('click', () => {
  clickImg.classList.toggle('noAni');
});

