// get all spectexts
const spectexts = document.querySelectorAll('.spex-text');
spectexts.forEach(spectext => {
    // when they clicked toggle "showspectext" class 
    spectext.addEventListener('click', () => {
        spectext.classList.toggle('showspectext')
    })
})