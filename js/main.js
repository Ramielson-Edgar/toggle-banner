window.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('.check-box__input')
  const bannerImg = document.querySelector('.banner-container__img')
  
 
 

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      bannerImg.classList.add('show')
      const store =  localStorage.setItem("banner", "off")
     
    } else {
      bannerImg.classList.remove('show')
      localStorage.clear();
    }

  
  })


  if(localStorage.getItem("banner") !== null ) {
    bannerImg.classList.add('show')
    checkbox.checked = true
  } else {
    bannerImg.classList.remove('show')
    localStorage.clear();
  }

})