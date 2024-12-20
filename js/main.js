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
const firstTab = document.querySelector('.firstPage');
const clickClick = document.querySelector('.intro-click');
const clickLogo = document.querySelector('.logo');
const menuItems = document.querySelectorAll('.gnb_list');

// .intro에 애니메이션이 끝났을 때 실행
if (hideIntro) {
  hideIntro.addEventListener('animationend', () => {
    sectionTabs.forEach(tab => tab.style.display = 'none'); // 모든 .tab_item 숨기기
    if (firstTab) {
      firstTab.style.display = 'block'; // .firstPage만 보이게 하기
    }
  });
}

// 클릭 시 .intro를 숨기고 나머지 탭 표시
clickClick.addEventListener('click', () => {
  hideIntro.style.display = 'none'; // .intro 숨기기
  sectionTabs.forEach(tab => tab.style.display = 'block'); // 모든 .tab_item 보이게 하기
});

// const hideIntro = document.querySelector('.intro');
// const sectionTabs = document.querySelectorAll('.tab_item');
// const lightElement = document.querySelector('.light');
// const firstTab = document.querySelectorAll('.firstPage');
// const clickClick = document.querySelector('.intro-click');
// const clickLogo = document.querySelector('.logo');
// const menuItems = document.querySelectorAll('.gnb_list');





// .intro가 보일 때는 모든 .tab_item이 보이지 않고 
// .firstPag페이지만 표시 돼

// lightElement.addEventListener('animationend', () => {
//   hideIntro.classList.add('hide');
//   firstTab.forEach(active => active.classList.add('show'));
// });







// clickClick.addEventListener('click', () => {
//   hideIntro.classList.add('hide');
//   firstTab.forEach(active => active.classList.add('show'));
// });

// // 로고 클릭 시 인트로 페이지 표시
// clickLogo.addEventListener('click', () => {
//   hideIntro.classList.remove('hide');
//   firstTab.forEach(active => active.classList.remove('show'));
// });

// menuItems.forEach(button => {
//   button.addEventListener('click', function () {
//     sectionTabs.forEach(tab => {
//       tab.style.display = 'none';
//     });
//   });

//   const targetTabId = button.getAttribute('data-tab');
//   const targetTab = document.querySelector(`#${targetTabId}`);
//   if (targetTab) {
//     targetTab.style.display = 'block';
//   }
// });

// });




//     //     // 클릭된 버튼에 해당하는 탭만 표시

// // 인트로 페이지를 숨기고 첫 번째 페이지를 표시하는 함수
// function showFirstPage() {
//   hideIntro.classList.add('hide'); // 인트로 페이지 숨김
//   firstTab.forEach(active => {
//     active.classList.add('show'); // 첫 번째 페이지 표시
//   });



// }

// // 페이지 로드 시, 인트로 페이지 숨기기 및 첫 번째 페이지 표시
// showFirstPage();






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