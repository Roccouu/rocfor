class Main extends R.Component {
	constructor (props) {
		super (props)
		this.contents = new Contents()
		this.mainheader = this.r.$('home')
		this.header = this.r.$('header')
		this.home = this.Component()
		this.tuto = this.Component()
		this.samples = this.Component()
		this.footer = this.Component()
		this.docs = this.Component()
		this.fhf = this.Component()
		this.createHeader()
		this.createHome()
		this.createTuto()
		this.createSamples()
		this.createFooter()
		this.createDocs()
		this.createFHF()
	}
	buildMain () {
		this.footer.render(this.props['footer'])
		return {
			header: this.header,
			home: this.home,
			tuto: this.tuto,
			docs: this.docs,
			samp: this.samples,
			fhf: this.fhf
		}
	}
	createHeader () {
		this.mainheader.innerHTML = this.mainheader.innerHTML + `v${this.version}`
	}
	createHome () {
		this.home = this.home.createComponent(
			`#subcontainer-roc.subContainer-roc MD: $$contents_main`, null, null, {'contents_main':this.contents.content.main})
	}
	createTuto () {
		this.tuto = this.tuto.createComponent(
		`#tuto-roc.Tuto-roc.roc-fluid MD: $$contents_tuto`, null, null, {'contents_tuto':this.contents.content.tuto})
	}
	createSamples () {
		this.samples = this.samples.createComponent(
		`#samples.roc
			p.center.M-left A continuación se presentan algunos ejemplos probados en #[a(href="https://codepen.io/roccou/") Codepen.]
			#Messagebox.Samples.one.m-bottom-3
				p(class="codepen", data-height="265", data-theme-id="0", data-default-tab="js,result", data-user="roccou", data-slug-hash="xNJxZg", style="height: 239px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;", data-pen-title="messagebox")
					span See the Pen #[a(href="https://codepen.io/roccou/pen/xNJxZg/") messagebox ] by Roberto Carlos Romay Medina (#[a(href="https://codepen.io/roccou") @roccou]) on #[a(href="https://codepen.io") CodePen].
				script(async="true", src="https://static.codepen.io/assets/embed/ei.js")
			#Searchbox.Samples.one.m-bottom-3
				p(class="codepen", data-height="265", data-theme-id="0", data-default-tab="js,result", data-user="roccou", data-slug-hash="dEjbQN", style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;", data-pen-title="searchbox")
					span See the Pen #[a(href="https://codepen.io/roccou/pen/dEjbQN/") searchbox ] by Roberto Carlos Romay Medina (#[a(href="https://codepen.io/roccou") @roccou]) on #[a(href="https://codepen.io") CodePen].
				script(async="true", src="https://static.codepen.io/assets/embed/ei.js")
			#login.Samples.one.m-bottom-3
				p(class="codepen", data-height="265", data-theme-id="0", data-default-tab="js,result", data-user="roccou", data-slug-hash="Mdjdqp", style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;", data-pen-title="login")
					span See the Pen #[a(href="https://codepen.io/roccou/pen/Mdjdqp/") login ] by Roberto Carlos Romay Medina (#[a(href="https://codepen.io/roccou") @roccou]) on #[a(href="https://codepen.io") CodePen].
				script(async="true", src="https://static.codepen.io/assets/embed/ei.js")
			#comments.Samples.one.m-bottom-3
				p(class="codepen", data-height="265", data-theme-id="0", data-default-tab="js,result", data-user="roccou", data-slug-hash="YbjzBJ", style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;", data-pen-title="comments")
					span See the Pen #[a(href="https://codepen.io/roccou/pen/YbjzBJ",) comments ] by Roberto Carlos Romay Medina (#[a(href="https://codepen.io/roccou") @roccou]) on #[a(href="https://codepen.io") CodePen].
				script(async="true", src="https://static.codepen.io/assets/embed/ei.js")`)
	}
	createFooter () {
		this.footer = this.footer.createComponent(
			`footer#footer.Footer.roc-fluid.p-1.m-top-5.bg-0 MD: $$contents_footer`, null, null, {'contents_footer':this.contents.content.footer})
	}
	createDocs () {
		this.docs = this.docs.createComponent(
			`#docss.docss.docss-docss.roc.table.middle.center.p-2
				.one
					h3 Para conocer más a cerca de Rocjs:
					p Visite el sitio web de la documentación oficial de La Librería (Inglés).
					nav#docss-menu.Docs-nav.roc.M-inline
						ul.Docs-items.thm-listnone.roc.M-inline.one.M-one-80
							li.one.M-one-g-50.p-5
								a#aweb.button.button-1.d-block.center(href="./assets/docs/index.html", title="Visitar sitio web") Ver documentación`)
		// p Puede descargar el libro #[em #[strong Rocjs, una librería para JavaScript ]](Español)
		// 					li.one.one-g-50.p-5
		// 						a#rbook.button.button-1.d-block.center(href="./assets/book/rocfor.pdf", title="Descargar Libro") Descargar Libro`)
	}
	createFHF () {
		this.fhf = this.fhf.createComponent(
			`.roc.table.middle.center
				.one
					h1 Page Not Found
					p Sorry, but the page you were trying to view does not exist.`)
	}
}