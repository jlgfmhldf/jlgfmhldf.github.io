import SharpenAnimation from './SharpenAnimation'

const blurredImages = document.querySelectorAll('.js-blurred-image')

const handleImgOnLoad = el => () => {
	const { src } = el.dataset
	const id = Math.random().toString().slice(2)
	const sharpenAnimation = new SharpenAnimation(id)
	const animationName = sharpenAnimation.getAnimationName()

	el.style.animation = `${animationName} 1s both`
	el.style.backgroundImage = `url(${src})`

	el.addEventListener('animationend', () => {
		sharpenAnimation.removeFromDom()
		el.style.animation = ''
	})
}

const handleBlurredImage = el => {
	const { src } = el.dataset

	const img = new Image()

	img.onload = handleImgOnLoad(el)
	img.src = src
}


blurredImages.forEach(handleBlurredImage)
