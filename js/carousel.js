const carouselBtnPrev = document.querySelector(".carousel-prev")
const carouselBtnNext = document.querySelector(".carousel-next")
const allShopSlides = document.querySelectorAll(".carousel-item")

const carouselBtnPrev1 = document.querySelector(".carousel-prev-1")
const carouselBtnNext2 = document.querySelector(".carousel-next-2")
const allProdSlides = document.querySelectorAll(".carousel-item")



let slidePos = 0




const nextSlide = (e) => {
    const slidesArr = hideAllSlides(e)
    slidePos = slidePos === slidesArr.length - 1 ? 0 : slidePos + 1 
    slidesArr[slidePos].classList.add("carousel-item-display") 
}

const prevSlide = (e) => {
    const slidesArr = hideAllSlides(e)
    slidePos = slidePos === 0 ? slidesArr.length - 1 : slidePos - 1 
    slidesArr[slidePos].classList.add("carousel-item-display") 
}

const hideAllSlides = (e) => {
    const allSlides = getBtnId(e)
    allSlides.forEach(slide => {
        slide.classList.remove("carousel-item-display")
    })
    return allSlides

}

const getBtnId = (e) => {
    const id = e.target.id
    const isCarousel2 = hasNumbers(id)
    const allSlides = !isCarousel2 ? document.querySelectorAll(".carousel-item")
                                    : document.querySelectorAll(".carousel-item-prod") 
    return allSlides
}

const hasNumbers = (str) => {
    var regex = /\d/g;
    return regex.test(str);
}


carouselBtnNext.addEventListener("click", nextSlide)
carouselBtnPrev.addEventListener("click", prevSlide)
carouselBtnPrev1.addEventListener("click", prevSlide )
carouselBtnNext2.addEventListener("click", nextSlide)

