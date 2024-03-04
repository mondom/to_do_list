let TO_DO_INPUT // miejsce, gdzie użytkownik wpisuje treść
let ALERT_INFO // info o braku zadań / konieczności dodania tekstu
let ADD_BTN // przycisk ADD - dodaje nowe elementy do listy
let UL_LIST // nasza lista zadań, tagi <ul></ul>
let NEW_TASK // nowo dodany LI, nowe zadanie
let ALL_TASKS // lista wszystkich dodanych LI
let ID_NUMBER = 0 // ID dodawane do każdego nowego zadania
let POPUP //pobrany popup
let POPUP_INFO // alert w popupie, jak się doda pusty tekst
let EDITED_TO_DO // edytowany Todo
let POPUP_INPUT //tekst wpisywany w inputa w popup'ie
let ADD_POPUP_BTN // przycisk "zatwierdź" w popup'ie
let CLOSE_TO_DO_BTN //przycisk od zamykania popup'a

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	TO_DO_INPUT = document.querySelector('.todo__header-input')
	ALERT_INFO = document.querySelector('.todo__list-alert-info')
	ADD_BTN = document.querySelector('.todo__header-add-btn')
	UL_LIST = document.querySelector('.todo__list-task')
	ALL_TASKS = document.getElementsByTagName('li')
	POPUP = document.querySelector('.popup')
	POPUP_INFO = document.querySelector('.popup__body-info')
	POPUP_INPUT = document.querySelector('.popup__body-input')
	ADD_POPUP_BTN = document.querySelector('.popup__body-btn--accept')
	CLOSE_TO_DO_BTN = document.querySelector('.popup__body-btn--cancel')
}

const prepareDOMEvents = () => {
	ADD_BTN.addEventListener('click', addNewTask)
	TO_DO_INPUT.addEventListener('keyup', enterCheck)
	UL_LIST.addEventListener('click', checkClick)
}

const addNewTask = () => {
	if (TO_DO_INPUT.value !== '') {
		ID_NUMBER++
		NEW_TASK = document.createElement('li')
		NEW_TASK.setAttribute('id', `${ID_NUMBER}`)
		NEW_TASK.classList.add('todo__list-task-test')
		NEW_TASK.textContent = TO_DO_INPUT.value
		UL_LIST.appendChild(NEW_TASK)
		TO_DO_INPUT.value = ''
		ALERT_INFO.textContent = ''
		console.log(NEW_TASK)
		createToolsArea()
		console.log(UL_LIST)
	} else {
		ALERT_INFO.innerText = 'Wpisz treść zadania!'
	}
}

const enterCheck = e => {
	if (e.key === 'Enter') {
		addNewTask()
	}
}

const createToolsArea = () => {
	const toolsArea = document.createElement('div')
	toolsArea.classList.add('todo__list-task-test-tools')

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('todo__list-task-test-tools--complete')

	const editBtn = document.createElement('button')
	editBtn.classList.add('todo__list-task-test-tools--edit')

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('todo__list-task-test-tools--delete')

	completeBtn.innerHTML = `<i class="fas fa-check"></i>`
	editBtn.textContent = `EDIT`
	deleteBtn.innerHTML = `<i class="fas fa-times"></i>`

	toolsArea.appendChild(completeBtn)
	toolsArea.appendChild(editBtn)
	toolsArea.appendChild(deleteBtn)

	NEW_TASK.appendChild(toolsArea)

	// <div class="todo__list-task-test-tools">
	// 	<button class="todo__list-task-test-tools--complete"><i class="fas fa-check"></i></button>
	// 	<button class="todo__list-task-test-tools--edit">EDIT</button>
	// 	<button class="todo__list-task-test-tools--delete"><i class="fas fa-times"></i></button>
	// </div>
}

const checkClick = e => {
	if (e.target.closest('button').classList.contains('todo__list-task-test-tools--complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.closest('button').classList.toggle('completed')
	} else if (e.target.closest('button').classList.contains('todo__list-task-test-tools--edit')) {
		POPUP.style.display = 'flex'
		EDITED_TO_DO = e.target.closest('li')
		POPUP_INPUT.value = EDITED_TO_DO.firstChild.textContent
		console.log(EDITED_TO_DO)
	} else if (e.target.closest('button').classList.contains('todo__list-task-test-tools--delete')) {
		deleteTask(e)
	
	}
}

const deleteTask = e => {
	e.target.closest('li').remove()
	if(ALL_TASKS.length === 0){
		ALERT_INFO.textContent = 'Brak zadań na liście.'
		
	}
}

document.addEventListener('DOMContentLoaded', main)
