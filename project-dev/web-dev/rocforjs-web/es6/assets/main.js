// var c = console.log;
class Main extends R.Component {
	constructor (props) {
		super (props)
		this.contents = new Contents()
		this.mainheader = this.r.$('home')
		this.header = this.r.$('header')
		this.home = this.Component()
		this.tuto = this.Component()
		this.footer = this.Component()
		this.docs = this.Component()
		this.fhf = this.Component()
		this.createHeader()
		this.createHome()
		this.createTuto()
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
	createTuto (e) {
		this.tuto = this.tuto.createComponent(
		`#tuto-roc.Tuto-roc.roc-fluid MD: $$contents_tuto`, null, null, {'contents_tuto':this.contents.content.tuto})
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
					p Puede descargar el libro #[em #[strong Rocjs, una librería para JavaScript ]](Español)
					O visitar el sitio web de la documentación oficial de La Librería (Inglés).
					nav#docss-menu.Docs-nav.roc.inline
						ul.Docs-items.thm-listnone.roc.inline.one.one-80
							li.one.one-g-50.p-5
								a#aweb.button.button-1.d-block.center(href="./assets/docs/index.html", title="Visitar sitio web") Ver documentación
							li.one.one-g-50.p-5
								a#rbook.button.button-1.d-block.center(href="./assets/book/rocfor.pdf", title="Descargar Libro") Descargar Libro`)
		// this.docs = this.docs.createComponent(
		// 	`#docss.docss.docss-docss.roc-fluid.p-2.m-top-5
		// 		.m-top-5.center
		// 			h3 Para conocer más a cerca de Rocjs:
		// 			p Puede descargar el libro #[em #[strong Rocjs, una librería para JavaScript ]](Español)
		// 			O visitar el sitio web de la documentación oficial de La Librería (Inglés).
		// 			nav#docss-menu.Docs-nav.roc.inline
		// 				ul.Docs-items.thm-listnone.roc.inline.one.one-80
		// 					li.one.one-g-50.p-5
		// 						a#aweb.button.button-1.d-block.center(href="./assets/docs/index.html", title="Visitar sitio web") Ver documentación
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