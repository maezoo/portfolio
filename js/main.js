// ==============================================
// // go to top =================================
// document.addEventListener('DOMContentLoaded', function () {
//   const goTopBtn = document.querySelector('.go-top');
//   const threshold = window.innerHeight * 1.9;

//   function toggleGoTopBtn() {
//     const pageScroll = window.scrollY;
//     if (pageScroll > threshold) {
//       goTopBtn.classList.add('visible');
//     } else {
//       goTopBtn.classList.remove('visible');
//     }
//   }
//   toggleGoTopBtn();
//   window.addEventListener('scroll', toggleGoTopBtn);
// });

// =======================================================
// // clone_5 스와이퍼 =============================================
var swiper = new Swiper(".mySwiper", {

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 10000,
  },
  keyboard: true,
  loop: true,
  slidesPerView: 1, // 슬라이드당 1개만 보이도록 설정
  slidesPerGroup: 1, // 한 번에 1개의 슬라이드만 이동
});
// =======================================================
// // 팝업 열기 + 닫기 =============================================


document.querySelectorAll('.design_box').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.detail_pop').forEach(pop => {
      pop.style.display = 'none';
    });

    const tab = item.getAttribute('data-tab');
    const popUp = document.querySelector(`#${tab}`);
    popUp.style.display = 'flex';
  });
});

document.querySelectorAll('.close_btn').forEach(closeBtn => {
  closeBtn.addEventListener('click', (event) => {
    const popUp = event.target.closest('.detail_pop');
    popUp.style.display = 'none';
  });
});

// =======================================================
// 인트로 화면전환 ===========================================

const hideIntro = document.querySelector('.intro');
const sectionTabs = document.querySelectorAll('.tab_item');
// const firstTab = document.querySelector('.firstPage');
const firstTabs = document.querySelectorAll('.firstPage');
const clickClick = document.querySelector('.intro-click');
const clickLogo = document.querySelector('.logo');
const menuItems = document.querySelectorAll('.gnb_list');
const lightElement = document.querySelector('.light');


// sectionTabs.forEach(tab => tab.style.display = 'none');

// =============================================================
// 클릭 or 애니메이션 끝날 시 ========================================

const addHideClass = () => {
  hideIntro.classList.add('hide');
  firstTabs.forEach(active => active.classList.add('show'));
};

lightElement.addEventListener('animationend', addHideClass);
clickClick.addEventListener('click', addHideClass);


clickLogo.addEventListener('click', () => {
  hideIntro.classList.remove('hide');
  firstTabs.forEach(active => active.classList.remove('show'));
});

// =============================================================




// menuItems.forEach(button => {
//   button.addEventListener('click', function () {
//     sectionTabs.forEach(tab => {
//       tab.style.display = 'none';
//     });
//   });
// });

// const targetTabId = button.getAttribute('data-tab');
// const targetTab = document.querySelector(`#${targetTabId}`);
// if (targetTab) {
//   targetTab.style.display = 'block';
// }
// });
// 









// const leftBar = document.querySelector('.left-menu');
// const LnbItem = document.querySelectorAll('.lnb_item');


// leftBar.classList.add('visible');

// LnbItem.forEach(clickedlnb => {
//   clickedlnb.style.color = '';
//   clickedlnb.style.fontWeight = '';
// });

// LnbItem[0].style.color = '#FF6347';
// LnbItem[0].style.fontWeight = '400';

// =======================================================
// =======================================================
// // 메뉴 전환 ============================================
// =======================================================

// const topCoding = document.querySelector('.codingMenu');
// const leftMenu = document.querySelector('#leftMenu');
// const lnbItem = document.querySelectorAll('.lnb_item');
// const sectionCoding = document.querySelector('.coding');

// lnbItem.forEach(leftItems => {
//   leftItems.addEventListener('click', function () {
//     lnbItem.forEach(clickedlnb => {
//       clickedlnb.style.color = '';
//       clickedlnb.style.fontWeight = '';
//     });

//     leftItems.style.color = '#FF6347';
//     leftItems.style.fontWeight = '400';
//   });
// });



// topCoding.addEventListener('click', () => {
//   leftMenu.classList.add('visible');
//   lnbItem.forEach(clickedlnb => {
//     clickedlnb.style.color = '';
//     clickedlnb.style.fontWeight = '';
//   });
//   lnbItem[0].style.color = '#FF6347';
//   lnbItem[0].style.fontWeight = '400';

// });


// AOS.init();

// JavaScript



// menuItems.forEach(item => {
//   item.style.color = '';
// });

// button.style.color = '#FF6347';




// document.addEventListener('DOMContentLoaded', function () {
//   let codingFullpage;
// ;
//  

//   menuItems.forEach(button => {
//     button.addEventListener('click', function () {
//       // 탭 변경 처리
//       menuItems.forEach(item => item.style.color = '');
//       button.style.color = '#FF6347';

// /
//       // Fullpage 활성화/비활성화
//       if (targetTabId === 'tab1') {
//         if (!codingFullpage) {
//           codingFullpage = new fullpage('#fullpage', {
//             navigation: true,
//             scrollingSpeed: 600,
//             autoScrolling: true,
//             licenseKey: 'YOUR_LICENSE_KEY',
//             onLeave: function (origin, destination, direction) {
//               const goTopBtn = document.querySelector('.go-top');
//               if (destination.index === 4) {
//                 goTopBtn.classList.add('move');
//               } else {
//                 goTopBtn.classList.remove('move');
//               }
//             }
//           });
//         }
//       } else {
//         if (codingFullpage) {
//           fullpage_api.destroy('all'); // fullpage.js 비활성화
//           codingFullpage = null;
//         }
//       }
//     });
//   });
// });