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
	NEW_TASK = document.getElementsByTagName('li')
	POPUP = document.querySelector('.popup')
	POPUP_INFO = document.querySelector('.popup__body-info')
	POPUP_INPUT = document.querySelector('.popup__body-input')
	ADD_POPUP_BTN = document.querySelector('.popup__body-btn--accept')
	CLOSE_TO_DO_BTN = document.querySelector('.popup__body-btn--cancel')
}

const prepareDOMEvents = () => {
	ADD_BTN.addEventListener('click', addNewTask)
}

const addNewTask = () => {
	if (TO_DO_INPUT.value !== '') {
		NEW_TASK = document.createElement('li')
		NEW_TASK.classList.add('todo__list-task-test')
		NEW_TASK.setAttribute('id', ID_NUMBER)
		NEW_TASK.innerHTML = ` 
        ${TO_DO_INPUT.value}
        <div class="todo__list-task-test-tools">
            <button class="todo__list-task-test-tools--complete"><i class="fas fa-check"></i></button>
            <button class="todo__list-task-test-tools--edit">EDIT</button>
            <button class="todo__list-task-test-tools--delete"><i class="fas fa-times"></i></button>
        </div>
   `
		UL_LIST.appendChild(NEW_TASK)

		ID_NUMBER++
	} else {
		ALERT_INFO.textContent = 'Dodaj treść zadania!'
	}
}

document.addEventListener('DOMContentLoaded', main)
