class SimpleTodo extends R.Component {
	constructor (props) {
		// Declaring SimpleTodo's state.
		super(props).state = {tasks: 0}
		// Binding it's own method 'task'.
		this.task = this.task.bind(this)
		// Creating a new Component and rendering it in DOM.
		this.todo = this.Component(
		`.SimpleTodo
			h1#countertask Lista de Tareas
			input#todo(keypress="task", placeholder="Escribe una tarea")
			button#todobutton(click="task", title="Insertar tarea") Insertar`, null, this)
	}
	task (e) {
		if ((e.keyCode === 13 || e.type === 'click') && !this.r.emptyString(this.todo.getChild('todo').value)) {
			let newtask = this.Tag(`.Task#task-${this.state.tasks} Tarea ${this.state.tasks}: ${this.todo.getChild('todo').value}`)
			this.setState(prevState => ({tasks: prevState.tasks + 1}))
			e.target.parentElement.appendChild(newtask.getTag())
			this.r.focusAndClean(this.todo.getChild('todo'))
		}
 	}
}

class SimpleToDo extends R.Component {
	constructor (props) {
		super(props).state = {tasks: 0}
		this.task = this.task.bind(this)
		this.todo = this.Component(
		`.SimpleTodo
			h1#countertask Lista de Tareas
			input#simptodo(keypress="task", placeholder="Escribe una tarea")
			button#simptodobutton(click="task", title="Insertar tarea") Insertar`, null, this)
	}
	task (e) {
		if ((e.keyCode === 13 || e.type === 'click') && !this.r.emptyString(this.todo.getChild('simptodo').value)) {
			let newtask = this.Tag(`.Task#task-${this.state.tasks} Tarea ${this.state.tasks}: ${this.todo.getChild('simptodo').value}`)
			this.setState(prevState => ({tasks: prevState.tasks + 1}))
			e.target.parentElement.appendChild(newtask.getTag())
			this.r.focusAndClean(this.todo.getChild('simptodo'))
		}
 	}
}