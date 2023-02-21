const openMobileButton = document.querySelector('#openMobileMenu');
const mobileMenuBlock = document.querySelector('#mobileMenu');
const closeMobileButton = document.querySelector('#closeMobileMenu');

openMobileButton.onclick = function(){
    mobileMenuBlock.classList.remove('hidden');
    document.body.classList.add('no-scroll');
}

closeMobileButton.onclick = function(){
    mobileMenuBlock.classList.add('hidden');
    document.body.classList.remove('no-scroll');
}

