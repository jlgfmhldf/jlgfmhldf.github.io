const createKeyframesSharpen = (id, from) => `
	@keyframes sharpen-${id} {
	    from {
	      filter: blur(${from}px);
	    }
	    to {
	      filter: blur(0px);
	    }
	  }
 `

export default class SharpenAnimation {
	constructor(id) {
		this.id = id

		this.styleElem = this.createStyleWithAnimation()
		this.addInDOM()
	}

	createStyleWithAnimation() {
		const styleElem = document.createElement('style')

		styleElem.innerHTML = createKeyframesSharpen(this.id, 5)

		return styleElem
	}

	addInDOM() {
		document.head.appendChild(this.styleElem)
	}

	removeFromDom() {
		document.head.removeChild(this.styleElem)
	}

	getAnimationName = () => `sharpen-${this.id}`
}
