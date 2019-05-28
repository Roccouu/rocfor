/* Countdown with Rocfor! */
class Countdown extends R.Component {
	constructor(props) {
		super(props)

		// Setting Countdown state.
		this.state = {'s':6, 'jungle':'Welcome to the jungle Rocfor!'}

		// Binding Countdown's runCounter method.
		this.runCounter = this.runCounter.bind(this)

		// Creating a new Component and assigning it's runCounter to button 'again' click.
		this.counter = this.Component(
		`#countdown.Countdown
			h1#counter.Counter
			button#again.Again(click="runCounter", disabled="true") Replay`, null, this)
		// .render()

		// Initializing the counter.
		// this.runCounter()
	}
	runCounter () {
		let btn = this.counter.getChild('again');
		if (!btn.disabled) btn.disabled = true
		let counterInterval = null,
				tictac = (() => {
					this.setState(prevState => ({s: prevState.s - 1}))
					this.counter.innerHTML(this.state.s ? this.state.s : this.state.jungle, 'counter')
					if(!this.state.s) {
						this.resetState().counter.getChild('again').disabled = false
						clearInterval(counterInterval)
					}
				}).bind(this)
		counterInterval = setInterval(() => tictac(), 1000)
	}
}