'use strict'
class SPAIndex extends R {
	constructor(props) {
		super(props)
		this.main = new Main(this.props.containers)
		this.main = this.main.buildMain()
		this.spa = this.SPA()
		this.scom = new Simplecomponent({container:'simplecomp'})
		this.todo = new SimpleTodo({container:'simpletodo'})
		this.countdown = new Countdown({container:'simplecountdown'})
		this.simtodo = new SimpleToDo()
		this.createControllers = this.createControllers.bind(this)
		this.createRoutes()
		this.createControllers()
		// console.log(`${this.main.docs.classlist.join(' ')}\n\n${this.main.home.classlist.join(' ')}\n\n${this.main.tuto.classlist.join(' ')}`)
	}
	createRoutes () {
		this.spa.setRoutes({
			'/': {
				'template': this.main.home.getComponent(),
				'controller': 'home',
				'callback': () => {
					// c('This is my Home!')
					this.spa.playRoute().home(this)
					this.scom.scom.render()
					this.todo.todo.render()
					this.countdown.counter.render()
					this.countdown.runCounter()
					// this.scom = new Simplecomponent({container:'simplecomp'})
				}
			},
			'docs': {
				'template': this.main.docs.getComponent(),
				'controller': 'docs',
				'callback': () => {this.spa.playRoute().docs(this)}
			},
			'tutorial': {
				'template': this.main.tuto.getComponent(),
				'controller': 'tuto',
				'callback': () => {
					// c('This is the Rocjs Tutorial!');
					this.spa.playRoute().tuto(this)
					this.simtodo.todo.render('mysimpletodo')
				}
			},
			'samples': {
				'template': 'Samples',
				'controller': 'samples',
				'callback': () => console.log('There are a lot of Examples!')
			},
			'404': {
				'template': this.main.fhf.getComponent()
			}
		}, 'container', 'home')
		// c(this.spa.playRoute())
	}
	createControllers () {
		this.spa.setControllers({
			'home': me => {
				me.r.changeClass(me.main.header, 'Header-reduced', 'Header')
				me.r.changeClass('container', 'Container-biggest', 'Container')
			},
			'docs': me => {
				me.r.changeClass(me.main.header, 'Header', 'Header-reduced')
				me.r.changeClass('container', 'Container', 'Container-biggest')
			},
			'tuto': me => {
				me.r.changeClass(me.main.header, 'Header', 'Header-reduced')
				me.r.changeClass('container', 'Container', 'Container-biggest')
			},
		})
	}
}