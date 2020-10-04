'use strict';

const seeMobileWrapperBtn=document.getElementById("seeMobileWrapperBtn");
seeMobileWrapperBtn.addEventListener('click', function(){
    console.log('click');
    if(MobileWrapper.classList.contains('hidden')) { 
        console.log('YES!');
        MobileWrapper.classList.remove('hidden');
    }
    else{
        console.log('NO!');   
    }
});