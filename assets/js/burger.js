document.querySelector('.menu-icon-wrapper').onclick = function() {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.menu-bar').classList.toggle('show');
    document.querySelector('.menu-h2').classList.toggle('hidden');
    document.querySelector('.menu-bar-wrap').classList.toggle('menu-show');
};


