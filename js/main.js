
$(document).ready(function () {
  $('#fullpage').fullpage({
    navigation: true,
    scrollingSpeed: 500,
    licenseKey: 'YOUR_LICENSE_KEY',

    onLeave: function (origin, destination, direction) {
      const goTopBtn = document.querySelector('.go-top');
      if (destination.index === 4) {
        goTopBtn.classList.add('move');
      } else {
        goTopBtn.classList.remove('move');
      }
    }
  });

  const goTopBtn = document.querySelector('.go-top');
  goTopBtn.addEventListener('click', function () {
    $.fn.fullpage.moveTo(1);
  });
});

// =======================================================
// clone_5 스와이퍼 ========================================
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
  slidesPerView: 1,
  slidesPerGroup: 1,
});
// =======================================================
// 팝업 열기 + 닫기 =========================================

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

document.querySelectorAll('.detail_img').forEach(closeBtn => {
  closeBtn.addEventListener('click', (event) => {
    const popUp = event.target.closest('.detail_pop');
    popUp.style.display = 'none';
  });
});

// =======================================================
// 인트로 화면전환 ===========================================

const hideIntro = document.querySelector('.intro');
const lightElement = document.querySelector('.light');
const firstTabs = document.querySelectorAll('.firstPage');
const clickClick = document.querySelector('.intro-click');
const clickLogo = document.querySelector('.logo');
const menuItems = document.querySelectorAll('.gnb_list');
const sectionTabs = document.querySelectorAll('.tab_item');

// 클릭 or 애니메이션 끝날 시
const addHideClass = () => {
  hideIntro.classList.add('hide');
  firstTabs.forEach(active => active.classList.add('show'));
  menuItems[0].style.color = '#ec3b00';
};

lightElement.addEventListener('animationend', addHideClass);
clickClick.addEventListener('click', addHideClass);

clickLogo.addEventListener('click', () => {

  hideIntro.classList.remove('hide');
  menuItems.forEach(item => {
    item.style.color = '';
  });

  firstTabs.forEach(active => {
    active.style.display = 'block';

  });
});

// =============================================================
menuItems.forEach(button => {
  button.addEventListener('click', function () {
    sectionTabs.forEach(tab => {
      tab.style.display = 'none';
    });

    menuItems.forEach(item => {
      item.style.color = '';
    });

    const targetTabId = button.getAttribute('data-tab');
    const targetTab = document.querySelector(`#${targetTabId}`);

    if (targetTab) {
      targetTab.style.display = 'block';
      button.style.color = '#ec3b00';

    }
  });
});

