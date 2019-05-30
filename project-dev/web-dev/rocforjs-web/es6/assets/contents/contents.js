'use strict'
class Contents {
	constructor() {
		this.date = new Date()
		this.docs = './docs/index.html'
		this.content = {
			'main': `class(Container-roc-banner.roc-fluid.co-1.p-2.m-bottom-5)? 
class(center)## Rocfor.js
class(center.thm-subtitle.m-bottom-5)Una sencilla librería para construir objetos y componentes reactivos en JavaScript&TRADE;
class(Intro-roc.one.M-one-g-70.mfullleft.mfullright.m-bottom-5)? 
### Con Rocfor.js se puede:
class(Padded-list.m-bottom-5)* Agilizar tareas mediante métodos como _unique_ del Método Resources, que obtiene un arreglo con valores únicos, 
* Elaborar rápida y facilmente simples Elementos HTML *(Tags)*, Bloques HTML *(Blocks)* y Componentes Reactivos *(Components)* para su Proyecto Web,
* Intercambiar datos con el Servidor mediante su Método Ajax,
* Crear contenidos aplicando [Markdown](https://daringfireball.net/projects/markdown/ "John Gruber webpage").
* Y hasta es posible implementar, mediante su Método SPA: ___¡Aplicaciones de una sola página!.___  
?  
class(thm-important.center)El deseo es que la Librería sea de mucha utilidad.
?  
class(Examples)? 
id(simple-comp)class(Example.M-Example.roc.M-inline.M-top.m-bottom-5)? 
class(Example-title.p-1.bg-0)#### Un Componente sencillo:
class(Example-content.one.M-one-60)? 
class(Code.Codetext.h-100)+++ javascript
	// ¡Un Componente simple con Rocfor.js!
	// A simple Component with Rocfor.js!
	class Simplecomponent extends R.Component {
		constructor(props) {
			super(props)
			// Una función privada y enlazada a la clase que asigna el valor del input text al h1.
			// A private binded function that assign input text value at h1.
			let copyTxt = (e => { this.scom.textContent(e.target.value, 'simple-h1') }).bind(this)
			// Creando un nuevo Componente y asignanto la función copyTxt a su evento keyup.
			// Creating a new Component and assigning copyTxt at it's keyup event.
			this.scom = this.Component(
			´#simplecomponent.Simplecomponent
				h1#simple-h1 Simple Component
				input#simple-txt(placeholder="Write something..", autofocus="true", keyup="cb")´, copyTxt)
			// Procesando e insertando el Componente en un contenedor HTMLElement del DOM.
			// Rendering and inserting Component on a DOM container HTMLElement.
			this.scom.render(this.props.container || '')
			// Dando el valor de textContent de h1 al valor del input text.
			// Getting it's h1 child and it's textContent at input text value.
			.getChild('simple-txt').value = this.scom.getChild('simple-h1').textContent
		}
	}
+++
?  
class(Coderesult.one.M-one-40.thm-oy.p-1)? 
class(p-top-2.p-bottom-2.p-left-2)#### Resultado:
id(simplecomp)class(Result)? 
?  
?  
?  

id(simple-todo)class(Example.M-Example.roc.M-inline.M-top.m-bottom-5)? 
class(Example-title.p-1.bg-0)#### Una Lista de Tareas:
class(Example-content.one.M-one-60.h-50)? 
class(Code.Codetext.h-100)+++ javascript
	// ¡Una Lista de tareas con Rocfor.js!
	// A Todo List with Rocfor.js!
	class SimpleTodo extends R.Component {
		constructor (props) {
			// Declarando el estado interno de la lista de tareas.
			// Declaring SimpleTodo's state.
			super(props).state = {tasks: 0}
			// Enlazando a la clase su propio método \'task\'.
			// Binding it\'s own method 'task'.
			this.task = this.task.bind(this)
			// Creando un nuevo Componente, procesándolo e insertándolo en el DOM.
			// Creating a new Component and rendering it in DOM.
			this.todo = this.Component(
			´.SimpleTodo
				h1#countertask Lista de Tareas
				input#todo(keypress="task", placeholder="Escribe una tarea", autofocus="true")
				button#todobutton(click="task", title="Insertar tarea") Insertar´, this.task).render()
		}
		task (e) {
			if ((e.keyCode === 13 || e.type === 'click') && !this.r.emptyString(this.todo.getChild('todo').value)) {
				let newtask = this.Tag(´.Task#task-\${this.state.tasks} Tarea \${this.state.tasks}: \${this.todo.getChild('todo').value}´)
				this.setState(prevState => ({tasks: prevState.tasks + 1}))
				e.target.parentElement.appendChild(newtask.getTag())
				this.r.focusAndClean(this.todo.getChild('todo'))
			}
		}
	}
+++
?  
class(Coderesult.one.M-one-40.thm-oy.p-1)? 
class(p-top-2.p-bottom-2.p-left-2)#### Resultado:
id(simpletodo)class(Result)? 
?  
?  
?  

id(simple-countdown)class(Example.M-Example.roc.M-inline.M-top.m-top25)? 
class(Example-title.p-1.bg-0)#### Un Contador regresivo:
class(Example-content.one.M-one-60.h-50)? 
class(Code.Codetext.h-100)+++ javascript
	// ¡Contador regresivo con Rocfor.js!
	// Countdown with Rocfor.js!
	class Countdown extends R.Component {
		constructor(props) {
			super(props)
			// Estableciendo el estado del Contador.
			// Setting Countdown state.
			this.state = {'s':6, 'jungle':'Welcome to the jungle Rocfor.js!'}
			// Enlazando el método runCounter a la clase.
			// Binding Countdown's runCounter method.
			this.runCounter = this.runCounter.bind(this)
			// Creando un nuevo Componente y asignando el método runCounter al evento click del botón.
			// Creating a new Component and assigning it's runCounter to button 'again' click.
			this.counter = this.Component(
			´#countdown.Countdown
				h1#counter.Counter
				button#again.Again(click="runCounter", disabled="true") Replay´, null, this)
			.render()
			// Inicializando el Contador.
			// Initializing the counter.
			this.runCounter()
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
+++
?  
class(Coderesult.one.M-one-40.thm-oy.p-1.h-100)? 
class(p-top-2.p-bottom-2.p-left-2)#### Resultado:
id(simplecountdown)class(Result)? 
?  
?  
?  
?  `,

			'footer': `class(roc.M-inline.middle.download-zone.center.p-1)? 
class(one.M-one-g-33.M-left.center)? 
class(thm-title)Descargar:
[Rocfor.js](https://github.com/Roccouu/rocfor/blob/master/project-dist/rocforjs/rocfor-1.0.0.min.js "Descargar Rocfor.js")
?  
class(one.M-one-g-33)? 
class(roc.center.copycom)? 
[Roccou](https://twitter.com/_roccou "Roccou")
Potosí - Bolivia - ${this.date.getFullYear()}
?  
?  
class(one.M-one-g-33.M-right)? 
Licencia:
[MIT](https://github.com/roccouu/rocfor/blob/master/LICENSE "Rocfor License")
?  
?  `,

			'tuto':`
class(Tuto-content.roc.M-inline.M-top)? 
class(one.M-one-g-80)? 

id(init)class(Aside.Tuto-section.m-bottom-5)? 
## Iniciar con Rocfor.js.
-------
**Rocfor.js** es una librería que ayuda a crear Componentes reactivos mediante código JavaScript.
Para trabajar con ella, es necesario incluirla como Dependencia de Proyecto.
El entorno de Rocfor ofrece dos Clases de las cuales es posible instanciar nuevos objetos.
El primero contiene propiedades y métodos para realizar tareas comunes de programación.
El segundo contiene propiedades y métodos para crear Componentes reactivos además de solventar las tareas comunes de programación.
En esta sección se muestra la información básica para que pueda familiarizarse con La Librería.
Antes de comenzar:
class(Download)Puede descargar Rocfor.js desde su repositorio oficial en GitHub: [Rocfor.js](https://github.com/Roccouu/rocfor "Rocfor.js").
O copiar el CDN en su archivo HTML principal:
class(cdn)CDN: \`https://cdn.jsdelivr.net/gh/Roccouu/rocfor@master/project-dist/rocforjs/rocfor-1.0.0.min.js\`
O si trabajar con [NPM](https://www.npmjs.com/ "NPM") recuerde descargarla como dependencia de proyecto:
class(npminstall)Instalación desde NPM: \`\$ npm install --save rocfor\`

El paso que sigue deberá ser enlazar Rocfor a un documento HTML, (se puede insertar una etiqueta contendora en \`body\` -el cuerpo del documento- o simplemente dejar la etiqueta \`body\` con sólo la etiqueta script mediante la cual se llama a *La Librería*:

### Llamar a La Librería desde su plantilla HTML:
class(Code)+++ html
	<!DOCTYPE html>
	<html lang="es">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="./css/rocfor-1.0.0.min.css">
		<title>Rocfor.js</title>
	</head>
	<body>
		<div id="container"></div> <!-- opcional -->

		<!-- Enlazando Rocfor.js en el proyecto -->
		<script src="./rocfor-1.0.0.min.js"></script>
	</body>
	</html>
+++

Ahora todo el entorno Rocfor.js está disponible en el proyecto ya que fue registrado en El Objeto **window** de JavaScript.
La forma de acceder al entorno Rocfor.js es mediante la letra: \`R\`.
El algoritmo de inicialización de Rocfor.js verifica que ninguna otra librería o *framework* JavaScript esté registrado en el objeto window con el nombre *R*, pero si así fuere, se ejecutan inmediatemente otras alternativas:
class(Padded-list.m-bottom-5)	1.	Rocfor.js dispondrá el término ***Rocfor*** como el nombre de su entorno. 
	1.	Pero si éste último también ya fue registrado, se dispondrá el término ***Rocforjs*** como el nombre definitivo.
	1.	Si existiera la casualidad de que los tres nombres anteriores ya residieran en El Objeto window, Rocfor.js sencillamente cancelará su registro denegando así, el uso de cualquiera de sus métodos.  
Rocfor.js muestra un aviso en la consola del navegador (Ejm.: R ready!) el cual menciona el nombre que habilitó para ser usado en el proyecto.
Una vez exista Rocfor.js en el entorno window, ya puede llamar a __Rocfor.js__ desde cualquier función o clase JavaScript mediante los acrónimos mencionados, es decir, las clases que cree ya pueden heredar de Rocfor.js y desde una función sólo deberá crear una nueva instancia en una variable:

### Llamar a Rocfor.js desde una Clase JavaScript:
class(Code)+++ javascript
	'use strict'
	class MiClase extends R {
		constructor(props) {
			super(props)
			// Todas las tareas que desee realizar con las funciones de Rocfor.js.
		}
		// Todas las tareas que desee realizar con las funciones de Rocfor.js.
	}
+++
### Llamar a Rocfor.js desde un IIFE JavaScript:
class(Code)+++ javascript
	'use strict'
	;((function (r){
		// Todas las tareas que desee realizar con las funciones de Rocfor.js.
	})(new R()));
+++

El entorno que La Librería pone a disposición con esta acción permite trabajar con los siguientes Métodos y Propiedades:
class(Padded-list.m-top5)+ **Ajax** (Método): Precisamente para trabajos asíncronos con el servidor, 
+ **version** (Propiedad): Es una propiedad que le proporcionará la versión de La Librería que utiliza,
+ **r** (o Recursos. Propiedad de tip Objeto): Un conjunto de funciones que permiten realizar tareas básicas como: el cambio de clases a un Elemento HTML, tratamiento de Cadenas, tratamiento de Arreglos, de Objetos HTML y Objetos JavaScript,
* __props__ (Propiedad): Un parámetro que puede adopar el tipo de dato que usted requiera,
* __Error__: Método que permite el manejo de errores en la aplicación,
* __Tag__: El Método Núcleo de Rocfor.js, le permitirá crear Elementos HTML de manera práctica, divertida y en un ámbito JavaScript nativo,
+ **Block**: Método que le permitirá crear Bloques de uno o varios Elementos HTML,
* __SPA__: Mediante este Método podrá crear Aplicaciones de una sola página, y,
* __Mdown__: Un Método inspirado en la idea de [John Gruber](https://daringfireball.net/projects/markdown/ "John Gruber webpage") pero que en realidad es un tipo de Markdown pensado para programadores.  
Cuando desee trabajar con Componentes, Rocfor.js le ofrecerá un entorno pensado específicamente para esta tarea y requerirá invocar al Método Component específico de Rocfor.js.
Los métodos que se explican en este tutorial son ___Tag___, ___Block___ y el Método ___Component___ de la Clase R.Component (La segunda Clase que conforma Rocfor.js. Será explicada más adelante)
?  

id(tag)class(Aside.Tuto-section.m-bottom-5)? 

## Crear un Elemento HTML mediante el Método Tag.
-----------
Tras tener la base, se pueden crear Elementos HTML tán simples como complejos los desee:

class(Code)+++ javascript
	'use strict'
	class MiClase extends R {
		constructor(props) {
			super(props)
			this.mytag = this.Tag('¡Hola Mundo!')
			console.log(mytag) // mytag es ahora una instancia de Tag.
		}
	}
+++

Con esa simple ejecución, la variable \`mytag\` ahora, posee un objeto que ofrece algunos métodos y una propiedad, visibles en la consola del navegador:

class(Code)+++ javascript
	Tag
		delTag: f()
		getTag: f()
		setTag: f(where)
		tagobject: {tag: div, idlist: null...}
		tagstrings: {tagstring: 'div ¡Hola Mundo!'...}
		...
+++

Si a continuación escribe \`mytag.setTag()\`, la ventana del navegador le mostrará ¡Hola Mundo!.
Entonces, ¿qué piensa que ocurriría si ejecuta el siguiente código?:
class(Code)+++ javascript
	'use strict'
	class MiClase extends R {
		constructor(props) {
			super(props)
			this.mytag-a = this.Tag('¡Hola Mundo!')
			this.mytag-b = this.Tag('¡Hola Mundo! |[¡Saludos desde Potosí!]')
			this.mytag-c = this.Tag('h1 ¡Hola Mundo! |[em Tutorial Rocfor.js.]')
			this.mytag-a.setTag();
			this.mytag-b.setTag('contanier');
			this.mytag-c.setTag({'after':'container'});
		}
	}
+++

Efectivamente, apreciará, todos los contenidos de cada objeto, pero ese es sólo el resultado de todo un proceso que le pone en sus manos: ***El poder de trabajar de manera directa con Objetos Elementos HTML desde JavaScript***.
Entonces, si mira la estructura del DOM en su documento HTML en tiempo de ejecución, notará que _Tag_ creó un Elemento \`div\` para el ¡Hola Mundo!; y así, un \`div\` con un nodo hijo \`span\` para \`mytag-b\` y un \`h1\` con un nodo hijo \`em\` para \`mytag-c\`, de aquí en más, sólo tendra que invocar al elemento que cada intancia (mytag-a, b o c) posea mediante los métodos que Tag le ofrece.
Observe que las cadenas enviadas a Tag son: O cadenas normales, o cadenas con una sintaxis.
Rocfor.js simplificó la manera de escribir etiquetas HTML para que usted obtenga Elementos HTML concretos; es decir:
El algoritmo de Rocfor.js se basa en la sintaxis HTML para escribir etiquetas, que, en general, poseen tres partes: _un nombre (tagName)_, _Atributos_ y un _Contenido_, pero como es conocido, se deben escribir entre los signos mayor y menor que (< ... >):

class(Code)+++ html
	<NombreEtiqueta Atributos> Contenido </NombreEtiqueta>
	<NombreEtiqueta>
		Contenido
		<NombreEtiquetaNodoHijo Atributos>
			Contenido nodo hijo
		</NombreEtiquetaNodoHijo>
	</NombreEtiqueta>
+++

Rocfor.js simplifica esta escritura a:

class(Code)+++ rocjs
	NombreEtiqueta#id.Clases(Atributos="atributo") Contenido
	NombreEtiqueta Contenido |[NodoHijo#id.Clases(Atributos="atributo") Contenido]
+++
Donde:
class(Padded-list.m-bottom-5)* **NombreEtiqueta:** Opcional, si se omite, Tag crea por defecto un \`div\`. 
* **Atributos:** #id, .class ó (id="un-id", class="Una-clase", title="Un título", ...), Todos los atributos son opcionales. Los atributos tienen dos partes (desde luego, ambas opcionales), la primera es denominada ___atributos iniciales___, en esta parte pueden ser incluidos dos tipos de atributos: _id_ y _class_; los ___id___ pueden ser escritos antecedidos por un caracter numeral (hash \#) y las ___clases___ antecedidas por un punto (dot .). Estos atributos deben se deben escribir sin espacios ni caracteres diferentes a una cadena regular, ejemplos: #un-id.Una-clase.otra-clase, .Una-clase#un-id.Otraclase, .Una-clase.otra-clase#un-id. El segundo tipo de atributos son los poco comunes o diferentes a los id y clases, deben ir entre paréntesis como los atributos normales de las etiquetas HTML normales pero separados por coma y un espacio, ejemplos: (href="#", title="Un título"), los id y clases también pueden escribirse como atributos del segundo tipo, ejemplo: (href="#", id="un-id", title="Un título", class="Una-clase otra-clase"). Al ser opcional el nombre de la etiqueta, el tagString puede comenzar con cualquier atributo de cualquiera de los dos tipos mencionados.
* **Contenido:** Cualquier contenido incluido Markdown o ninguno. Para poder escribir contenidos en la tagString, debe dejarse un espacio al inicio del contenido, ejemplo: h1 Un contenido, #un-id Un contenido, .Una-clase Otro contenido, (id="un-id") Un contenido. Si envía sólo un contenido, el espacio inicial es innecesario, ejemplo: Un contenido.
* **Nodos hijos:** Entre los símbolos |[ y ] Si se omite \`nombreEtiqueta\` en nodo hijo, Tag crea por defecto un \`span\`.  Luego,la escritura de los nodos hijo sigue las mismas reglas ya citadas.  

Por tanto el modo ágil de escritura de etiquetas se resume a escribir cadenas bajo ese formato.
En Rocfor.js, estas cadenas se denominan **tagString**, porque son cadenas del tipo dato ___JavaScript String___ y representan a una Etiqueta HTML o ___tag___ (de ahí su nombre: tagString).
Entonces, las siguientes Etiquetas HTML:

class(Code)+++ Rocfor.js
	<NombreEtiqueta atributo="un atributo">Contenido</NombreEtiqueta>
	<div>Seré una etiqueta div</div>
	<div class="Div">Seré otra etiqueta div con una clase Div</div>
	<div id="Div">Seré otra etiqueta div con un id Div</div>
	<header id="header" class="Header" title="Un header">Contenido de texto.</header>
	<nav class="Mi-nav">
		<li>
			<a href="#">Un enlace</a>
		</li>
	</nav>
	<div>Tengo un contenido Markdown</div>
	<div>
		Tengo un contenido Markdown
		<em>yo, también</em>
	</div>
	<div>
		Tengo un contenido
		<strong>yo un contenido Markdown</strong>
	</div>
+++
Pueden escribirse en formato _tagString_ así:
class(Code)+++ Rocfor.js
	NombreEtiqueta(Atributo="un atributo") Contenido
	Seré una etiqueta div
	div.Div Seré otra etiqueta div con una clase Div
	div#Div Seré otra etiqueta div con un id Div
	header#header.Header(title="Un header") Contenido de texto.
	nav(class="Mi-nav") |[li |[a(href="#") Un enlace]]
	div MD: Tengo un contenido Markdown
	div MD: Tengo un contenido Markdown |[em MD: yo, también]
	div Tengo un contenido |[strong MD: yo un contenido Markdown]
+++

...En base a estos ejemplos, la creación de etiquetas queda a su imaginación.
Los requisitos son:
class(Padded-list.m-bottom-5)	1. si utiliza los símbolos [ y ] siempre escriba el símblo de cierre anteponiendo una barra diagonal: /]. 
	1. Si desea escribir los símbolos |[ juntos, deberá usar | antes de [.
	1. Los contenidos de las etiquetas HTML deben estar escritos en una sola línea, a menos que el contenido que envíe sea un Markdown. Se recomienda además que escriba contenidos cortos, la idea es que con esta herramienta pueda crear interfaces robustas para su página o aplicación web; el tratamiento de cadenas extensas recaería en un uso extremo de JavaScript, un ejemplo de ello es este sitio web que fue creado con un 70% de código JavaScript incluidos los contenidos, funciona, pero es un extremo. Recuerde, la finalidad de Rocfor.js es la creación de Componentes.
	1. Si desea escribir Markdown como contenido de un Elemento HTML, la cadena siempre deberá comenzar por \`MD: contenido Markdown\`.
	1. Si descubre algún mal funcionamiento, sin dudarlo, consulte la documentación de Rocfor.js; y si desea colaborar con el mejoramiento del código, es libre de hacerlo.  

__Tag__ además de una _tagString_ puede recibir otros tres parámetros opcionales:
class(Padded-list.m-bottom-5)	1. _fn_: que es una referencia a una función que puede asignar a un evento del Elemento HTML que construye, 
	1.	_scope_: que es el ámbito de la función o clase JavaScript en la que trabaja y donde se encuentra la nueva instancia de Tag que haya declarado, este parámetro le será útil sobretodo cuando trabaja con Objetos o Clases JavaScript en donde también podrá crear simplemente un constructor del objeto Tag y asignarlo a una variable o propiedad, este es otro modo de trabajar con Tag. Vea la [Documentación de Rocfor.js](${this.docs} "Descargar el libro de Rocfor.js") para obtener información más detallada; y
	1.	_rvars_: un modelo de variables propuestas por Rocfor.js para cuando desee insertar variables en las tagString. Este parámetro es el acrónimo de __Rocfor.js variables__ y consiste en un argumento especial que fue pensado para enviar variables a Rocfor.js dentro de las cadenas _blockString_, su formato es: Caso 1: \`$variable, Caso 2: $$$variable-en-objeto-javascript ó Caso 3: $(alguna operación aritmética)\`, __aunque su uso es poco recomendado en el primer y tercer casos__; con la primera forma, podrá enviar cualquier variable declarada a partir del ámbito inmediatamente superior al actual, por ejemplo, si declaró una variable \`let x = 0;\`, para enviar esta variable a un _tagString_ deberá escribir el nombre de la variable _x_ antecedido por el caracer $, así: \`this.Tag(\'span Soy la variable x en un contenido y mi valor es: $x\')\`. Desde luego, los valores que retornen estas variables deberán ser numéricos o cadenas. La segunda forma de _rvars_ buscará el nombre de la variable en un objeto que envíe en el parámetro _rvars_; y la tercera forma le permitirá evaluar cualquier operación matemática en un _blockString_. Consulte la [Documentación de Rocfor.js](${this.docs} "Descargar el libro de Rocfor.js") para obtener información más detallada.  
¿Sonó interesante?, qué tal si ahora obtiene además de un solo Elemento HTML, ¡un Bloque de Elementos HTML!.
?  

id(block)class(Aside.Tuto-section.m-bottom-5)? 
## Crear un Bloque de Elementos HTML mediante el Módulo Block:
-------
Como habrá notado, el uso de los Módulos de Rocfor.js es ampliamente sencillo.
Puesto que, para crear un Elemento HTML con el Módulo Tag requiere una sola cadena de una línea, obviamente, para crear un Bloque de Elementos HTML se requieren una o más líneas de cadenas _tagString_.
El conjunto de cadenas _tagString_ empleadas en Block se denominan __blockString__, entonces, el siguiente __blockString__:

class(Code)+++ javascript
	...
	this.myblock-a = this.Block('¡Hola Mundo!')
	this.myblock-b = this.Block(´div#main.Main
		h1 ¡Hola Mundo!
		h2 Tutorial Rocfor.js.
		p Contenido de prueba para aprender |[strong Rocfor.js.]
		p Esto es: |[em ¡divertido!]´)
	...
+++
Representa a:
class(Code)+++ javascript
	...
	<div>¡Hola Mundo!</div>
	<div id="main" class="Main">
		<h1>¡Hola Mundo!</h1>
		<h2>Tutorial Rocfor.js.</h2>
		<p>Contenido de prueba para aprender <strong>Rocfor.js.</strong></p>
		<p>Esto es: </em>¡divertido!</em></p>
	</div>
	...
+++
Como habrá notado, para obtener una instancia del objeto Block debe asignar este objeto con su cadena _blockString_ a una variable. Tras realizar este paso, Block le devolverá un objeto Block:
class(Code)+++ javascript
	Block
		block: div
		blockChild: [{...}]
		blockmain: {...}
		blockstrings: {blockstring:..., blockString...}
		classList: null
		events: null
		idDOM: null
		idList: null
		__proto__
			blockstringChild: f(index-or-id-child)
			delBlock: f()
			getBlock: f()
			setBlock: f(where)
			getChild: f(index-or-id-child)
			innerHTML: f(htmltxt, index-or-id-child)
			textContent: f(txt, index-or-id-child)
+++
Mediante el cual ya puede manejar el nuevo Bloque de Elementos HTML en su proyecto.
Como Tag, Block también puede recibir otros parámetros además de su _blockString_, estos son: _fn_, _scope_ y _rvars_.
?  

id(comp)class(Aside.Tuto-section.m-bottom-5)? 
## Crear un Componente mediante el Módulo Component:
-------
Si comprendió la esencia de Rocfor.js mediante los Módulos Tag y Block, construir Componentes altamente profesionales para las interfaces de sus aplicaciones mediande el Método __Component__, será prácticamente un pasatiempo.
El principio continúa siendo la escritura de _tagStrings_ que para el caso de los Componentes se denominan ___componentStrings___.
Este Método se utiliza de manera similar a Block, es decir, requiere parámetros similares: _componentString_, _fn_, _scope_ y _rvars_ y tal cual Block, Component le devolverá un objeto con métodos y propiedades:
class(Code)+++ javascript
	Component
		component: div
		compChild: [{...}]
		compmain: {...}
		compstrings: {blockstring:..., blockString...}
		classList: null
		events: null
		idDOM: null
		idList: null
		__proto__
			compstringChild: f(index-or-id-child)
			delComponent: f()
			getComponent: f()
			render: f(where)
			getChild: f(index-or-id-child)
			innerHTML: f(htmltxt, index-or-id-child)
			textContent: f(txt, index-or-id-child)
+++
La Clase r.Component es una especie de sublibrería de Rocfor.js, pero es independiente de su ámbito (scope); por esta razón, cuando cree una Clase u Objeto JavaScript, en lugar de heredar de R, deberá heredar de R.Component, así:
class(Code)+++ javascript
	'use strict'
	class MiClase extends R.Component {
		constructor(props) {
			super(props)
		}
	}
+++
Y \`MiClase\` adoptará un ámbito específico para trabajar con R.Component, en el que contará con los siguientes métodos y propiedades:
class(Padded-list.m-top5)* __props__ (Propiedad): Una propiedad que adopta el valor que envíe en el parámetro _props_ que recibe ___R.Component___, 
* __r__: Los recursos de Rocfor.js mediante los cuales podrá realizar tareas comunes,
* __state__: El estado interno del Componente.
* __version__: Propiedad que le devuelve, eso: la versión de Rocfor.js,
* __Error__: Método que permite el manejo de errores en el Componente,
* __setState__: Método que permite el manejo de los estados del Componente,
* __resetState__: Método que permite la reinicialización de los estados del Componente,
* __Tag__: Método para construir Tags,
* __Block__: Método para construir Blocks,
* __Component__: Método para construir Componentes, y,
* __Mdown__: Método para crear contenidos cortos mediante la sintaxis Markdown, en este caso, para desarrolladores.  
Ahora que conoce lo básico de Rocfor.js, ¿Quiere crear un Componente?...
?  

id(todo)class(Aside.Tuto-section.m-bottom-5)? 
## Crear una sencilla Lista de Tareas mediante el Módulo Component:
-------
Observe el siguiente código JavaScript:
class(Code)+++ javascript
	// Heredar de R.Component.
	class SimpleTodo extends R.Component {
		// Recibir valores en el parámetro props del Componente.
		constructor (props) {
			super(props)
			// Creando estados para el Componente.
			this.state = {tasks: 0}
			this.task = this.task.bind(this)
			// Creando una instancia para un nuevo Componente.
			this.todo = this.Component(´.SimpleTodo
				h1#countertask Lista de Tareas
				input#todo(keypress="task", placeholder="Escribe una tarea", autofocus="true")
				button#todobutton(click="task", title="Insertar tarea") Insertar´, this.task).render(this.props.container || '')
		}
		task (e) {
			if ((e.keyCode === 13 || e.type === 'click') && !this.r.emptyString(this.todo.getChild('todo').value)) {
				let newtask = this.Tag(´.Task#task-\$\{this.state.tasks} Tarea \$\{this.state.tasks}: \$\{this.todo.getChild('todo').value}´)
				this.setState(prevState => ({tasks: prevState.tasks + 1}))
				e.target.parentElement.appendChild(newtask.getTag())
				this.r.focusAndClean(this.todo.getChild('todo'))
			}
		}
	}
+++
Ahora observe el resultado:
id(todores)? 
class(Coderesult.one.M-one-40.thm-oy.p-1)? 
class(p-top-2.p-bottom-2.p-left-2)#### Resultado:
id(mysimpletodo)class(Result)?
?  
?  
?  
¿Lo comprendió?
Si la respuesta es: Sí.
¡Excelente! Rocfor.js es lo suyo, de otro modo, descuide, a continuación se describe el código línea a lína (Se asume que tiene conocimientos del lenguaje JavaScript, para este caso, la Especificación ES6):
### Explicación del Código fuente:
Con las líneas 2. a 5. crea una nueva clase SimpleTodo que extiende del Módulo Component de Rocfor.js. El parámetro \`props\` es en este caso un objeto JavaScript: \`{container:\'container\'}\` que poseerá una propiedad container cuyo valor será el id de un Elemento HTML del DOM donde se insertará el nuevo Componente Elemento HTML Lista de tareas que se está creando:
class(Code)+++ javascript
	class SimpleTodo extends R.Component {
		constructor (props) {
			super(props).state = {tasks: 0}
+++
\`props\` es la abreviación de propiedades (properties) que se facilitan a la nueva instancia de la Clase JavaScript que se cree, este parámetro, por lo general será un objeto JavaScript, pero cuando vea por conveniente podrá enviar otro tipo de dato. En general, Rocfor.js siempre espera un valor cualquiera en este parámetro y lo envíe u omita, siempre creará una propiedad interna \`this.props\` con \`undefined\` como valor predeterminado. Por esa razón, en este caso se envía un objeto con la propiedad container para que albergue a la Lista de Tareas.
A continuación las líneas 7. y 8.:
class(Code)+++ javascript
	super(props)
	this.state = {tasks: 0}
	this.task = this.task.bind(this)
+++
ES6 recomienda que después de inicializar el método constructor de la Clase, se llame al constructor de la Clase Padre mediante la sentencia \`super\`.
A continuación se usa la propiedad \`state\` de Rocfor.js a la cual se le asigna un objeto con una propiedad tasks con valor inicial de cero: \`\{tasks: 0\}\`. Recuerde, tras heredar de R.Component, la Clase Hija dispondrá en su ámbito de todos los métodos y propiedades de la Clase Padre y tanto \`state, setState() y resetState()\` estarán siempre disponibles.
En la línea 8. se enlaza un método para \`SimpleTodo\` denominado \`tasks\` al que se enlaza de manera explícita el ámbito de \`SimpleTodo\` mediante el método \`bind\`.
En seguida están las líneas 10. a 13. que en realidad, podrían contar como una sola línea:
class(Code)+++ javascript
	this.todo = this.Component(´.SimpleTodo
	h1#countertask Lista de Tareas
	input#todo(keypress="task", placeholder="Escribe una tarea", autofocus="true")
	button#todobutton(click="task", title="Insertar tarea") Insertar´, this.task).render(this.props.container || '')
+++
Lo que hace esta sentencia es asignar a una nueva propiedad de \`SimpleTodo\` una nueva instancia de Component de Rocfor.js en la cual se envía un _componentString_ que posee cuatro _tagStrings_.
class(Padded-list.m-bottom-5)* Como verá, el _tagString_ de la línea 10. corresponde a una Etiqueta \`div\` con una clase \`SimpleTodo\`. 
* En la línea 11. se especifica un _tagString_ para una Etiqueta HTML \`h1\` con id \`countertask\` y un contenido \`Lista de Tareas\`.
* La siguiente línea describe un \`input\` de tipo \`text\`, aquí debe observar especialmente, el atributo \`keypress="task"\` del _tagString_, ¿se pregunta qué tipo de instrucción o atributo es?, la respuesta es sencilla, se trata del evento \`onkeypress\` que se declara en la lista de atributos del Elemento HTML que se intenta crear, note también que se asigna a este evento el método \`task\` de la Clase que fue declarado en la línea 8., ¿tiene curiosidad por saber cómo se presenta este evento en el Elemento HTML que corresponde a este _tagString_ una vez inserto en el DOM?, búsquelo y obsérvelo, _es una recomendación_, así como también lo es, el que se dirija a la opción Documentación de esta Aplicación Web y descargue el Libro que le entrega todos los detalles de La Librería.  

En la línea 13., se tiene el último _tagString_ del Componente, se trata de un botón de id \`todobutton\` que a su vez tiene un par de atributos y un contenido, entre sus atributos, aparece otro evento: \`click="task"\`, luego, después del _componentString_, se envía un segundo parámetro, el de _fn_, ¿lo recuerda?, precisamente, éste, hace referencia al método declarado en la línea 8. y que el Componente \`todo\` ejecutará en los eventos \`onkeypress y onclick\` de los Elementos HTML \`input todo y button todobutton\`.
A continuación de la declaración de Component, aparece con el patrón de encadenamiento, un método, \`render\`, precisamente, éste método corresponde al Objeto Component que el Módulo Component devuelve tras su instanciación a la propiedad \`this.todo\`, con esta sentencia, se instruye a JavaScriṕt que una vez creado el Componente HTML para \`this.todo\` lo inserte en el Elemento HTML residente en el DOM \`\'container\'\` que fue enviado en el parámetro \`props\`, o si éste tiene un valor nulo, vacío, falso o falsy, etc., envíe una cadena vacía; luego, ...sí. Rocfor.js se encargará de buscar el Elemento HTML \`\'container\'\` voluntariosa y afanadamente, en caso de fracasar en su intento, tomará la decisión de insertar de modo predeterminado al nuevo Componente en el Elemento HTML \`body\` del DOM.
Ahora, toca a las siguientes y últimas líneas 15. a 20., que corresponden al método \`task\` de la Clase, que en esencia se encarga de crear un nuevo Elemento HTML e insertarlo a continuación del botón \`todobutton\`, como un Elemento Hijo del Elemento HTML Padre del Componente cuya clase es \`SimpleTodo\`:
class(Code)+++ javascript
	task (e) {
		if ((e.keyCode === 13 || e.type === 'click') && !this.r.emptyString(this.todo.getChild('todo').value)) {
			let newtask = this.Tag(´.Task#task-\$\{this.state.tasks} Tarea \$\{this.state.tasks}: \$\{this.todo.getChild('todo').value}´)
			this.setState(prevState => ({tasks: prevState.tasks + 1}))
			e.target.parentElement.appendChild(newtask.getTag())
			this.r.focusAndClean(this.todo.getChild('todo'))
		}
	}
+++
La condicional \`if\` evalúa si el evento que invoca este método fue disparado por la pulsación del botón izquierdo del dispositivo ratón o tras presionar la tecla de código 13 equivalente a \`Enter\` del teclado, además de asegurarse de que el \`input text\` del Componente tiene contenido de texto utilizando para este fin el método \`emptyString\` del Módulo ___r___ (Resources) de Rocfor.js; Si todas estas condiciones se cumplen, se crea en una nueva variable \`newtask\` un nuevo Objeto Tag al cual se envía una _tagString_ dinámica que tendrá por \`class="Task", id="task-0, 1, 2..."\` y un contenido que adoptará un formato: \`Tarea 0, 1, 2, ...: El valor que escriba en el Elemento HTML input text\`.
Tras esta declaración, se ejecuta el método \`setState\` heredado de R.Component al cual se envía una función (y siempre deberá ser así) en cuyo seno se enlaza a un objeto que corresponde a \`state\` del cual se modificará el estado previo \`(prevState)\` de \`tasks\` incrementándolo en uno.
Seguidamente, se inserta en el Componente HTML \`SimpleTodo\` que se creó en la línea 10., el Elemento HTML creado en la variable \`newtask\` utilizando su método \`getTag()\`.
En la última línea de código ejecutable se hace uso de otro método del Módulo de Rocfor.js ___r___ (Resources), \`focusAndClean\`, que hace eso precisamente, limpia el contenido del Elemento HTML \`input txt\` y asigna el foco del cursor en este elemento; observe que el parámetro que recibe es lo que devuelve el método \`getChild()\` del Objeto \`todo\` creado en la línea 10., al cual se le pasa una cadena que corresponde al identificador del Elemento HTML \`input text de id="todo"\`.
___¡Rocfor.js!___
?  
?  

id(tuto-aside)class(Tuto-aside.one.one-g-20.m-top-5.rel.d-none.M-d-block)? 
id(tuto-menu)class(thm-listnone.fix)* [Inicio e instalación](#init "Ver cómo iniciar con Rocfor.js") 
* [Módulo Tag](#tag "Crear un Elemento HTML con Tag")
* [Módulo Block](#block "Crear un Bloque de elementos HTML con Block")
* [Component](#comp "Crear un Componente Reactivo con Component")
* [Construir una lista de tareas](#todo "Crear un Todo list")  
?  

?  `
		}
	}
}