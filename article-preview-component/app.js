

const toggleBtn = document.querySelectorAll('.share')
const sharePart = document.querySelector('.active-share')
const aboutPart = document.querySelector('.about')
const desc = document.querySelector('.desc')

toggleBtn.forEach(function(oneBtn){
    oneBtn.addEventListener('click', function(){
        if(sharePart.classList.contains('active')) {
            aboutPart.classList.add('active')
            sharePart.classList.remove('active')
            desc.style.marginBottom = '80px'
        } else if(aboutPart.classList.contains('active')) {
            sharePart.classList.add('active')
            aboutPart.classList.remove('active')
            desc.style.marginBottom = ''
        }

    })
})





