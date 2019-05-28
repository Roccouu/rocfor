/* A simple component with Rocfor! */
class Simplecomponent extends R.Component {
	constructor(props) {
		super(props)
		// A private binded function that assign input text value at h1.
		let copyTxt = (e => { this.scom.textContent(e.target.value, 'simple-h1') }).bind(this)

		// Declaring a new Component and assigning copTxt at it's keyup event.
		this.scom = this.Component(
			`#simplecomponent.Simplecomponent
				h1#simple-h1 Simple Component
				input#simple-txt(placeholder="Write something..", keyup="cb")`, copyTxt)
		// Rendering and inserting Component on a DOM container HTMLElement.
		// this.scom.render()
		// Getting it's h1 child and it's textContent at input text value.
		this.scom.getChild('simple-txt').value = this.scom.getChild('simple-h1').textContent
	}
}