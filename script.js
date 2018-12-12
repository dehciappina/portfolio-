
let backgroundImgs = document.querySelectorAll('.back_art_img')
let backgroundImgs2 = document.querySelectorAll('.back_art_img2')


for(i = 0; i < backgroundImgs.length; ++i) {
    backgroundImgs[i].style.transform = "translate3d(0," + Math.round((window.pageYOffset * 0.5)) + "px, 0)" 

    // backgroundImgs[i].style.bottom = (backgroundImgs[i].parentElement.offsetTop - backgroundImgs[i].parentElement.scrollTop + backgroundImgs[i].clientTop) * 1.3 + 'px' 
}    

document.body.onscroll = function() { 
        console.log(window.pageYOffset)

        for(i = 0; i < backgroundImgs.length; ++i) {
            backgroundImgs[i].style.transform = "translate3d(0," + Math.round((window.pageYOffset * 0.5)) + "px, 0)" 

        }    
}

