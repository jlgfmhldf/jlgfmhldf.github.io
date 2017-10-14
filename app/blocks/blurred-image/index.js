import { chainEvenly, ensureProperty, stream, easings, intoDom } from 'keyframes.js'


const blurredImages = document.querySelectorAll('.js-blurred-image')

const blurAnim = chainEvenly(
	ensureProperty('filter', "blur(5px)"),
	ensureProperty('filter', "blur(0px)"),
)

const blurredClass = 'blurred-image__img_blur'

const handleImgOnLoad = el => () => {
	const { src } = el.dataset

// 	el.classList.remove(blurredClass)
	el.style.backgroundImage = `url(${src})`

	stream(500, easings.easeInExpo(blurAnim), intoDom(el))
}

const handleBlurredImage = el => {
	const { src } = el.dataset

	const img = new Image()

	img.onload = handleImgOnLoad(el)
	img.src = src

}


blurredImages.forEach(handleBlurredImage)
