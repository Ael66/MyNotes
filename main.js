const addBtn = document.querySelector('.add')
const deleteAllBtn = document.querySelector('.delete-all')
const deleteBtn = document.getElementsByClassName('delete-note')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')

const notePanel = document.querySelector('.note-panel')
const categorySelect = document.querySelector('#category')
const textArea = document.querySelector('#text')
const errorText = document.querySelector('.error')

const noteArea = document.querySelector('.note-area')

let selectedValue
let cardID = 0

const addNote = () => {
	notePanel.style.display = 'flex'
}
const cancelNote = () => {
	notePanel.style.display = 'none'
	categorySelect.value = 0
	textArea.value = ''
	errorText.style = 'visibility: hidden'
}

const saveNote = () => {
	if (categorySelect.value == 0 || textArea.value === '') {
		errorText.style = 'visibility: visible'
	} else {
		createNote()
		errorText.style = 'visibility: hidden'
		cancelNote()
	}
}

const createNote = () => {
	const newNote = document.createElement('div')
	newNote.classList.add('note')
	newNote.setAttribute('id', cardID)
	noteArea.append(newNote)
	selectedOption = category.options[category.selectedIndex].text
	
	newNote.innerHTML = `<div class="note-header">
	<h3 class="note-title">${selectedOption}</h3>
	<button class="delete-note" onclick="deleteNote(${cardID})"><i class="fas fa-times icon"></i></button>
	</div><div class="note-body">${textArea.value}</div>`
	
	cardID++
	colorNote(newNote)
}

const colorNote = note => {
	switch (selectedOption) {
		case 'Zakupy':
			note.style = 'background-color: royalblue'
			break
		case 'Praca':
			note.style = 'background-color: greenyellow'
			break
		default:
			break
	}
}

const deleteAll = () => {
	noteArea.textContent = ''
}

const deleteNote = (id) => {
	const noteToDelete = document.getElementById(id)
	noteArea.removeChild(noteToDelete)
}


addBtn.addEventListener('click', addNote)
cancelBtn.addEventListener('click', cancelNote)
saveBtn.addEventListener('click', saveNote)
deleteAllBtn.addEventListener('click', deleteAll)
