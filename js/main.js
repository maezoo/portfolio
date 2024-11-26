
// ==============================================
// ==============================================

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

    leftItems.style.color = '$tomato';
    leftItems.style.fontWeight = '400';
  });
});

menuItems.forEach(button => {
  button.addEventListener('click', function () {
    menuItems.forEach(item => {
      item.style.color = '';
    });

    button.style.color = '$tomato';

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
  lnbItem[0].style.color = '$tomato';
  lnbItem[0].style.fontWeight = '400';

});

// const goTopClick = document.querySelector('.go-top a');

// goTop.addEventListener('click', () => {
//   leftMenu.classList.remove('visible');
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
