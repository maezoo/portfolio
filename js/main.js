const mobileBtn = document.querySelector('.mobile-btn');
const mobilePop = document.querySelector('.menu-pop');
const visual = document.querySelector('.visual');


mobileBtn.addEventListener('click', function () {
  mobilePop.classList.toggle('show');

  // 메뉴 높이에 따라 visual 이동
  const popHeight = mobilePop.classList.contains('show')
    ? mobilePop.scrollHeight
    : 0;

  // visual의 margin-top 조정
  visual.style.marginTop = `${popHeight}px`;
});


//   // 메뉴 높이에 따라 main-content의 margin-top 조정
//   const popHeight = mobilePop.classList.contains('show')
//     ? mobilePop.scrollHeight
//     : 0;

//   mainContent.style.marginTop = `${popHeight}px`;
// });
// ==============================================
// // go to top =================================
document.addEventListener('DOMContentLoaded', function () {
  const goTopBtn = document.querySelector('.go-top');
  const threshold = window.innerHeight * 1.9;

  function toggleGoTopBtn() {
    const pageScroll = window.scrollY;
    if (pageScroll > threshold) {
      goTopBtn.classList.add('visible');
    } else {
      goTopBtn.classList.remove('visible');
    }
  }
  toggleGoTopBtn();
  window.addEventListener('scroll', toggleGoTopBtn);
});

// =======================================================
// // 스와이퍼 =============================================
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
    delay: 1500,
  },
  keyboard: true,
  slidesPerView: 1,
  loop: true,
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
const clickEnter = document.querySelector('.enter_btn');
const lightElement = document.querySelector('.light');
const clickLogo = document.querySelector('.logo');
const hideIntro = document.querySelector('.intro');
const firstTab = document.querySelectorAll('.firstPage');
const leftBar = document.querySelector('.left-menu');
const LnbItem = document.querySelectorAll('.lnb_item');

function showFirstPage() {
  hideIntro.classList.add('hide');
  firstTab.forEach(active => {
    active.classList.add('show');
  });

  leftBar.classList.add('visible');

  LnbItem.forEach(clickedlnb => {
    clickedlnb.style.color = '';
    clickedlnb.style.fontWeight = '';
  });

  LnbItem[0].style.color = '#FF6347';
  LnbItem[0].style.fontWeight = '400';
}

// Enter 버튼 클릭 시
clickEnter.addEventListener('click', showFirstPage);

// 애니메이션 끝날 시
lightElement.addEventListener('animationend', showFirstPage);

// 로고 클릭 시
clickLogo.addEventListener('click', () => {
  hideIntro.classList.remove('hide');
  firstTab.forEach(active => {
    active.classList.remove('show');
  });
});
// =======================================================
// =======================================================
// // 메뉴 전환 ============================================
// =======================================================
const menuItems = document.querySelectorAll('.gnb_list');
const sectionTabs = document.querySelectorAll('.tab_item');
const topCoding = document.querySelector('.codingMenu');
const leftMenu = document.querySelector('#leftMenu');
const lnbItem = document.querySelectorAll('.lnb_item');
const sectionCoding = document.querySelector('.coding');

lnbItem.forEach(leftItems => {
  leftItems.addEventListener('click', function () {
    lnbItem.forEach(clickedlnb => {
      clickedlnb.style.color = '';
      clickedlnb.style.fontWeight = '';
    });

    leftItems.style.color = '#FF6347';
    leftItems.style.fontWeight = '400';
  });
});

menuItems.forEach(button => {
  button.addEventListener('click', function () {
    menuItems.forEach(item => {
      item.style.color = '';
    });

    button.style.color = '#FF6347';

    sectionTabs.forEach(tab => {
      tab.style.display = 'none';
    });

    const targetTabId = button.getAttribute('data-tab');
    const targetTab = document.querySelector(`#${targetTabId}`);
    targetTab.style.display = 'block';
  });
});

topCoding.addEventListener('click', () => {
  leftMenu.classList.add('visible');
  lnbItem.forEach(clickedlnb => {
    clickedlnb.style.color = '';
    clickedlnb.style.fontWeight = '';
  });
  lnbItem[0].style.color = '#FF6347';
  lnbItem[0].style.fontWeight = '400';

});

