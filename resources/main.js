'use strict';

const seeMobileWrapperBtn=document.getElementById("seeMobileWrapperBtn");
const closeMobileMenuBtn=document.getElementById("closeMobileMenuBtn");
seeMobileWrapperBtn.addEventListener('click', function(){
    console.log('click');
    if(MobileWrapper.classList.contains('hidden')) { 
       // console.log('YES!');
        MobileWrapper.classList.remove('hidden');
    }
});
closeMobileMenuBtn.addEventListener('click', function(){
    console.log('click');
    MobileWrapper.classList.add('hidden');
});