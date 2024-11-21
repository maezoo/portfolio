// new fullpage('#menuList_1', {
//     // 옵션 설정
//     sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
//     anchors: ['clone_1', 'clone_2', 'clone_3', 'clone_4'],
//     menu: 'lnb_list',
//     scrollingSpeed: 1000
// });

$(document).ready(function () {
    $('#menuList_1').fullpage({
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
        anchors: ['clone_1', 'clone_2', 'clone_3', 'clone_4'],
        menu: 'lnb_list',
        scrollingSpeed: 1000,
        autoScrolling: true,
    });
});
