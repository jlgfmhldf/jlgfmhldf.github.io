import Shuffle from 'shufflejs'

const container = document.querySelector('.js-container') // TODO rename
const filterBtns = document.querySelectorAll('.js-filter-btn') // TODO rename
const clearFiltersBtn = document.querySelector('.js-clear-filters')  // TODO rename

if (container && filterBtns) {
	const filterBtnActiveClass = 'chip_active'

	const shuffleOptions = {
		itemSelector: '.js-container-item'
	}

	const shuffle = new Shuffle(container, shuffleOptions)

	const filterByTag = name => shuffle.filter(name)

	const removeActiveClassFromFilterBtn = el => el.classList.remove(filterBtnActiveClass)

	const clearFilters = () => shuffle.filter('')

	const toggleActiveClass = activeTag => {
		const { innerText } = activeTag
		const filterFunc = item => item.innerText !== innerText
		const btnsForClassRemoving = [...filterBtns].filter(filterFunc)

		activeTag.classList.toggle(filterBtnActiveClass)

		btnsForClassRemoving.forEach(removeActiveClassFromFilterBtn)
	}

	const handleFilterBtnClick = event => {
		const { target } = event
		const { name } = target.dataset

		event.preventDefault()



		if (target.classList.contains(filterBtnActiveClass)) {
			clearFilters()
		}
		else {
			filterByTag(name)
		}

		toggleActiveClass(target)
	}

	const handleClearFilters = () => {
		clearFilters()
		filterBtns.forEach(removeActiveClassFromFilterBtn)
	}

	if (clearFiltersBtn) {
		clearFiltersBtn.addEventListener('click', handleClearFilters)
	}


	filterBtns.forEach(item => item.addEventListener('click', handleFilterBtnClick))
}
