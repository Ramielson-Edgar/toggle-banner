const checkbox = document.querySelector('.check-box__input')
const bannerImg  =document.querySelector('.banner-container__img')

checkbox.addEventListener('change',()=>{
  if(checkbox.checked) {
    bannerImg.classList.add('show')
  } else {
    bannerImg.classList.remove('show')
  }
})