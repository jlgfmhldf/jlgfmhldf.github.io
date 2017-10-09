import Shuffle from 'shufflejs'

const container = document.querySelector('.js-container')
const filterBtns = document.querySelectorAll('.js-filter-btn')
const clearFiltersBtn = document.querySelector('.js-clear-filters')

const filterBtnActiveClass = 'taglist__tag-link_active'

const shuffleOptions = {
	itemSelector: '.js-container-item'
}

const shuffle = new Shuffle(container, shuffleOptions)

const filterByTag = name => shuffle.filter(name)

const removeActiveClassFromFilterBtn = el => el.classList.remove(filterBtnActiveClass)

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

	toggleActiveClass(target)
	filterByTag(name)
}

const clearFilters = () => {
	shuffle.filter('')
}

clearFiltersBtn.addEventListener('click', clearFilters)

filterBtns.forEach(item => item.addEventListener('click', handleFilterBtnClick))
