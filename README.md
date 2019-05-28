# Rocfor.js

> Reactive Object and Components with JavaScript.

Rocfor.js is a library for JavaScript. It consists of two Classes, the main Class is R (Rocfor or Rocforjs depending on the case where the name R or Rocfor are already occupied in the Window object by another library) and the second Class is R.Component. Rocfor.js Helps easy and fast programming in tasks such as:
* **Ajax:** For backend communications.
* **r (Resources):** That allows to work with some great methods for the management of data like Strings, Arrays, DOM Elements and JS objects.
* **Error mannagement:** To control errors on a fun way.
* **Single Page Application:** To create fast and simple SPA's projects.
* **Mdown:** a proposal to write Markdown in JavaScript programming. Based on the idea of [​​John Gruber, creator of Markdon](https://daringfireball.net/projects/markdown/).

And to programming the main proposal of Rocfor.js: **Creation of virtual HTML Elements to generate Reactive Objects and Components:**
* **Tag:** A Method to obtain single HTMLElements.
* **Block:** A Method to obtain Block HTMLElements.
* **Component:** A Method to obtain Component HTMLElements.


The core of Rocfor.js is special because it helps when programming user interfaces for the project through components, doing everything only from JavaScript.

To do this task, The Library introduces the concept of "***tagStrings***" which are strings that represent HTML tags (hence their name: tag - Strings) and are translated by Rocfor.js to HTML virtual elements with which you can create Blocks and Reactive HTML components.

## Installation

#### Normal installation by download:

[Download Rocfor.js](https://github.com/roccouu/rocfor/project-dist/js/rocfor-1.0.0.min.js) and then, link it in a `script` tag on an .html file:
```
<script src="./rocfor-1.0.0.min.js"></script>
```
#### Normal installation via CDN:

CDN enabled to Rocfor.js is:
```
https://cdn.jsdelivr.net/gh/Roccouu/rocfor@master/project-dist/rocforjs/rocfor-1.0.0.min.js
```
So, it can be linked on a `script` tag:
```
<script src="https://cdn.jsdelivr.net/gh/Roccouu/rocfor@master/project-dist/rocforjs/rocfor-1.0.0.min.js"></script>
```

#### Installation via NPM:

```
npm install --save rocfor
```
And then, just link rocfor on the main .html file.

## Usage

When Rocfor.js is ready, it send a message to the console as: "R ready!", this means that its possible use Rocfor.js calling the reserved word "R". If "R" is already ocuppied by another library the name "Rocfor" will be enabled, else "Rocforjs", else Rocfor.js will don't be enabled.
Rocfor.js contains two Classes: "R" (or Rocfor, or Rocforjs) and "R.Component" (or Rocfor.Component, or Rocforjs.Component).

*	With R is possible create single HTMLElements and Blocks HTMLElements, SPA's, Mdown and Ajax connections.
*	With R.Component also is possible create Components.

**Using R:**
```js
// Declaring a new object:
let myrocfor = new R()

// inheriting from Rocfor.js:
class Test extends R {
	constructor (props) {
		super(props)
		// Here goes some cool code.
	}
	// Here goes some cool code.
}
```
**Using R.Component:**
```js
// Declaring a new object:
let myrocfor = new R.Component()

// inheriting from Rocfor.js:
class Test extends R.Component {
	constructor (props) {
		super(props)
		// Here goes some cool code.
	}
	// Here goes some cool code.
}
```
## Examples

**Creating a single HTMLElement:**
```js
// Directly way:
let myrocfor = new R()
// 'Hello World!' is a tagString
let mytag = myrocfor.Tag('Hello World!')
console.log(mytag.getTag()) // <div>Hello World!</div>

// inheriting from Rocfor.js:
class Test extends R {
	constructor (props) {
		super(props)
		this.mytag = this.Tag(this.props)
	}
}
let test = new Test('Hello World!')
console.log(test.mytag.getTag()) // <div>Hello World!</div>

// inheriting from Rocfor.js Component:
class Test extends R.Component {
	constructor (props) {
		super(props)
		this.mytag = this.Tag('Hello World!')
	}
}
let test = new Test()
console.log(test.mytag.getTag()) // <div>Hello World!</div>
```

**Creating a Block HTMLElement:**
```js
// Directly way:
let myrocfor = new R()
// .Block,
// p Hello World!, and
// a(href="twitter.com/@roccouuu") Roccou,
// all are tagStrings, but, in Block method,
// the whole String is a blockString.
let myblock = myrocfor.Block(
	`.Block
		p Hello World!
		a(href="twitter.com/@roccouuu") Roccou`)
console.log(myblock.getBlock())
/*
	<div class="Block">
		<p>Hello World!</p>
		<a href="twitter.com/@roccouuu">Roccou</a>
	</div>
*/

// inheriting from Rocfor.js:
class Test extends R {
	constructor (props) {
		super(props)
		this.myblock = this.Block(
		`.Block
			p Hello World!
			a(href="twitter.com/@roccouuu") Roccou`))
	}
}
let test = new Test()
console.log(test.myblock.getBlock())
/*
	<div class="Block">
		<p>Hello World!</p>
		<a href="twitter.com/@roccouuu">Roccou</a>
	</div>
*/

// inheriting from Rocfor.js Component:
class Test extends R.Component {
	constructor (props) {
		super(props)
		this.myblock = this.Block(
		`.Block
			p Hello World!
			a(href="twitter.com/@roccouuu") ${this.props}`))
	}
}
let test = new Test('Roccou')
console.log(test.myblock.getBlock())
/*
	<div class="Block">
		<p>Hello World!</p>
		<a href="twitter.com/@roccouuu">Roccou</a>
	</div>
*/
```

**Creating a Component HTMLElement:**
```js
// Directly way:
let myrocfor = new R.Component()
// .Comp,
// p Hello World!, and
// a(href="twitter.com/@roccouuu") Roccou,
// All are tagStrings, but, in Component method,
// the whole String is a componentString.
let mycomp = myrocfor.Component(
	`.Comp
		p Hello World!
		a(href="twitter.com/@roccouuu") Roccou`)
console.log(mycomp.getComponent())
/*
	<div class="Comp">
		<p>Hello World!</p>
		<a href="twitter.com/@roccouuu">Roccou</a>
	</div>
*/

// inheriting from Rocfor.js Component:
class Test extends R.Component {
	constructor (props) {
		super(props)
		this.mycomp = this.Component(
		`.Comp
			p Hello World!
			a(href="twitter.com/@roccouuu") ${this.props}`)
	}
}
let test = new Test('Roccou')
console.log(test.mycomp.getComponent())
/*
	<div class="Comp">
		<p>Hello World!</p>
		<a href="twitter.com/@roccouuu">Roccou</a>
	</div>
*/
```

## Website

[Rocfor.js](https://github.com/roccouu/rocfor/)

## Tutorial

[Rocfor.js tutorial](https://github.com/roccouu/rocfor/index.html#/tutorial)

## Documentation

[Rocfor.js Docs](https://github.com/roccouu/rocfor/index.html#/docs)

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/roccouu/rocfor/blob/master/CONTRIBUTING.md)

## License

[MIT](https://github.com/roccouu/rocfor/blob/master/LICENSE) © | [Roccou](twitter.com/@roccouuu)