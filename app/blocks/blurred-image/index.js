import { chainEvenly, ensureProperty, stream, easings, intoDom }from 'keyframes.js'

const blurredImages = document.querySelectorAll('.js-blurred-image')

const blurAnim = chainEvenly(
	ensureProperty('filter', 'blur(5px)'),
	ensureProperty('filter', 'blur(0px)'),
)

const handleImgOnLoad = el => () => {
	const { src } = el.dataset
	const clearFilter = () => { el.style.filter = '' }

	el.style.backgroundImage = `url(${src})`

	stream(1000, easings.easeInOutExpo(blurAnim), intoDom(el), clearFilter) // TODO
}

const handleBlurredImage = el => {
	const { src } = el.dataset

	const img = new Image()

	img.onload = handleImgOnLoad(el)
	img.src = src
}


blurredImages.forEach(handleBlurredImage)
