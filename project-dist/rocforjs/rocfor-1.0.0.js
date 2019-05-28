;(function (d, w, c) {
	'use strict';
	;((function(reg, u, n, f, t){
		reg = function () {
			return w.R === undefined
			? {'ns': false, 'name': 'R'} : w.R.Component === undefined
				? function () {
					return w.Rocfor === undefined ? {'ns': false, 'name': 'Rocfor'} : w.Rocfor.Component === undefined
					? function () {
						return w.Rocforjs === undefined ? {'ns': false, 'name': 'Rocforjs'} : {'ns': true};
					}() : {'ns': true};
				}() : {'ns': true};
		}();
		return reg.ns
		? this
		: function (version, _Rocforjsreg, _Error, r, _MDwn, _Asset, _Vars, _Ajax, _Tag, _Block, _Comp, _Spa, _Rocjs, _Compjs) {
			_Error = {
				'e': function (nme, msg, typ) { this.type = typ || 'error'; this.message = msg; this.name = nme || "Rocjs Error"; },
				'eD': function (e) { console[e.type || 'error']((e.name || 'System Error')  + ': ' + e.message); },
				'api': function (e) {
					try {
						// This method will always trhow the error generated and return the value received on e[3], it can be false, undefined, null, or any.
						throw new this.e(e[0], e[1], e[2]);
					} catch (error) {
						this.eD(error);
						return e[3];
					}
				}
			};
			r = {
				'e': Object.create(_Error),
				'$': function (x) {
					return function (y){ return y.length ? r.elementByIdExists(y) ? d.getElementById(y) : u : u;}(typeof x === 'string' ? x : '');
				},
				'searchElement': function (e) { return r.isString(e) ? r.$(e) : !r.isElement(e) ? f : e; },
				'queryCreator': function (e) {
					var q = r.cleanArray(r.map(e.target.elements, function (i) { if (i.name && i.value) return i.type === 'checkbox' || i.type === 'radio' ? (i.checked ? (i.name + "=" + i.value) : '') : (i.name + "=" + i.value); }));
					return q.length ? q.join('&') : "";
				},
				'changeClasses': function (e, old, now) {
					return function (sp, s, e, aux, cad, fn) {
						fn = function (v) { return r.unique(r.filter(v, function (x) { x = String(x.replace(/\-/g, '__dash__')); return s && !s.test(x); })) };
						old = fn(r.isArray(old) ? old : r.isString(old) ? old.split(sp) : []);
						now = fn(r.isArray(now) ? now : r.isString(now) ? now.split(sp) : []);
						aux = e ? e.className ? r.difArrays(old, e.className.split(sp)) : [] : null;
						cad = aux ? aux.length ? aux.concat(now).join('  ').trim() : now.join('  ').trim() : '';
						if (e) e.className = cad.length ? cad : e.className;
					}(/[\s\,\.]+/, /\W+/g, r.searchElement(e), [], '', null);
				},
				'changeClass': function (e, old, now) {
					return function (e, old, now, ec, aux) {
						old = /\W+/g.test(old.replace(/\-/g, '__dash__')) ? '' : old;
						now = /\W+/g.test(now.replace(/\-/g, '__dash__')) ? '' : now;
						aux = e ? r.map(ec, function (x) { return x.toLowerCase() === old.toLowerCase() ? now : x; }) : [];
						if (e) e.className = aux.length ? aux.join('  ').trim() : e.className;
					}(r.searchElement(e), r.isString(old) ? old : '', r.isString(now) ? now : '', r.searchElement(e) ? r.searchElement(e).className.split(/\s+/g) : [], []);
				},
				'toggleClass': function (e, tg) {
					return function (e, tg, ec, aux) {
						tg = /\W+/g.test(tg.replace(/\-/g, '__dash__')) ? '' : tg;
						aux = e ? r.filter(ec, function (x) { return x.toLowerCase() === tg.toLowerCase(); }) : [];
						if (e) e.className = aux.length ? r.difArrays(aux, ec).join('  ').trim() : ec.concat(tg).join('  ').trim();
					}(r.searchElement(e), r.isString(tg) ? tg : '', r.searchElement(e) ? r.searchElement(e).className.split(/\s+/g) : [], []);
				},
				'deleteClass': function (e, which) {
					return function (e, which, ec, aux) {
						which = /\W+/g.test(which.replace(/\-/g, '__dash__')) ? '' : which;
						aux = e ? r.filter(ec, function (x) { return x.toLowerCase() !== which.toLowerCase(); }) : [];
						if (e) e.className = aux.length ? aux.join('  ').trim() : e.className;
					}(r.searchElement(e), r.isString(which) ? which : '', r.searchElement(e) ? r.searchElement(e).className.split(/\s+/g) : [], []);
				},
				'deleteClasses': function (e, classlist) {
					return function (elem, elemclasses) {
						return elemclasses.length ? function (elemclass, objclass, classaux) {
							classaux = r.isArray(classlist) ? classlist : r.isString(classlist) ? classlist.split(/[\.\,\s]+/) : [];
							classaux = r.filter(classaux, function (x) { return !/\W+/g.test(x.replace(/\-/g, '__dash__')); });
							classaux = classaux.length ? r.unique(classaux) : [];
							objclass = classaux.length ? r.arrayToEmptyObject(classaux) : {};
							classaux = r.isEmptyObject(objclass) ? [] : elemclass.length ? r.filter(elemclass,function(x){return !objclass.hasOwnProperty(x);}) : [];
							classaux = classaux.length ? classaux.join('  ').trim() : '';
							if (elem) e.className = classaux;
						}(elemclasses.split(/\s+/g), {}, []) : null;
					}(r.searchElement(e), r.searchElement(e) ? r.searchElement(e).className : '');
				},
				'insertClass': function (e, now) {
					return function (e, now, ec, aux) {
						now = /\W+/g.test(now.replace(/\-/g, '__dash__')) ? '' : now;
						aux = e ? r.filter(ec, function (x) { return x.toLowerCase() === now.toLowerCase(); }) : [];
						if (e) e.className = aux.length ? e.className : ec.concat(now).join('  ').trim();
					}(r.searchElement(e), r.isString(now) ? now : '', r.searchElement(e) ? r.searchElement(e).className.split(/\s+/g) : [], []);
				},
				'insertClasses': function (e, classlist) {
					return function (elem, elemclass, classaux) {
						classaux = r.isArray(classlist) ? classlist : r.isString(classlist) ? classlist.split(/[\.\,\s]+/) : [];
						classaux = r.filter(classaux, function (x) { return !/\W+/g.test(x.replace(/\-/g, '__dash__')); });
						elemclass = classaux.length ? elemclass.concat(classaux) : [];
						elemclass = elemclass.length ? r.unique(elemclass).join('  ') : '';
						if (elem) e.className = elemclass.length ? elemclass.trim() : e.className;
					}(r.searchElement(e), r.searchElement(e) ? r.searchElement(e).className.split(/\s+/g) : []);
				},
				'hasClass': function (e, which) {
					return function (e, which, ec) {
						which = /\W+/g.test(which.replace(/\-/g, '__dash__')) ? '' : which;
						return e ? which.length ? r.filter(ec, function (x) { return x.toLowerCase() === which.toLowerCase(); }).length ? t : f : u : u;
					}(r.searchElement(e), r.isString(which) ? which : '', r.searchElement(e) ? r.searchElement(e).className.split(/\s+/g) : []);
				},
				'isElement': function (e) {
					return e ? typeof e === 'object' ? 'nodeType' in e ? e.nodeType === w.Element.ELEMENT_NODE || e.nodeType === w.Element.DOCUMENT_FRAGMENT_NODE : f : f : f;
				},
				'isTextNode': function (e) { return typeof e === 'object' ? 'nodeType' in e ? e.nodeType === w.Element.TEXT_NODE : f : f; },
				'elementByIdExists': function (e) { return typeof e === 'string' ? r.isElement(d.getElementById(e)) : u; },
				'elementIndex': function (e) {
					var e = r.searchElement(e);
					return !e
						? -1
						: (function () {
							var i = 0, j = 0;
							for(; j < e.parentElement.children.length; j++) {
								i = e === e.parentElement.children[j] ? i : (i + 1);
								if(e === e.parentElement.children[j]) break;
							}
							return i;
						})();
				},
				'insertAfter': function (e, whe) {
					whe = r.searchElement(whe);
					if (r.isElement(e) && whe) {
						if (whe.parentElement.lastElementChild === whe || whe.parentElement.children.length === 1) whe.parentElement.appendChild(e);
						else whe.parentElement.insertBefore(e, whe.nextElementSibling);
					} else { r.e.api(['Programmer Error', 'Res:insertAfter: A valid HTMLElement spected.']) }
				},
				'elementEval': function (e) { return r.$(e) || (r.isElement(e) ? e : f); },
				'elementInsertChild': function (whe, tag) {
					return function (elem, getWhe, baseHasElem, base, before, after) {
						if (elem) {
							getWhe = function (x) {
								return r.isString(x)
								? function (holder) { return holder; }(r.elementEval(x) || d.body)
								: r.isObject(x)
									? function () {
										return x.hasOwnProperty('before')
										? function (holder) { before = holder ? t : f; return holder ? holder : d.body; }(r.elementEval(x['before']))
										: x.hasOwnProperty('container') ? (r.elementEval(x['container']) || d.body)
										: x.hasOwnProperty('after')
										? function (holder) { after = holder ? t : f; return holder ? holder : d.body; }(r.elementEval(x['after'])) : d.body;
									}() : r.isElement(x) ? x : d.body;
							};
							baseHasElem = function (t, u, v) {
								v = t.children.length ? r.filter(t.children, function (x) { return x === u; }) : [];
								return v.length ? f : t;
							};
							base = getWhe(whe);
							if (elem === base || elem === d.body || elem === d.doctype || elem === d.documentElement || elem === d.head) {
								return f;
							} else if (before) {
								baseHasElem(base === d.body ? base : base.parentElement, elem, f)
								? base === d.body ? base.appendChild(elem) : base.parentElement.insertBefore(elem, base)
								: r.e.api(['Error', 'Element already exists in DOM', 'warn']);
							} else if (after) {
								baseHasElem(base === d.body ? base : base.parentElement, elem, f)
								? base === d.body ? base.appendChild(elem) : r.insertAfter(elem, base) : r.e.api(['Error', 'Element already exists in DOM', 'warn']);
							} else { // container
								baseHasElem(base, elem, f)
								? base.appendChild(elem) : r.e.api(['Error', 'Element already exists in DOM', 'warn']);
							}
						}
					}(r.elementEval(tag));
				},
				'elementHasChildById': function (p, idname) {
					p = r.searchElement(p);
					return !p ? u : (typeof idname !== 'string') ? u : (p.innerHTML.search('idname="' + idname + '"') === -1) ? f : t;
				},
				'sanitizeInput': function (e) { if(r.searchElement(e)) return r.sanitizeString(r.searchElement(e).value) ? t : f; },
				'focusAndClean': function (e) {
					return r.isElement(e) && ('focus' in e) ? function () { if (r.isString(e.value)) e.value = n; e.focus(); return r; }() : u;
				},
				// String functions
				'isString': function (str) { return typeof str === 'string'; },
				'escapeString': function (query, aVal) {
					return (!r.isArray(aVal) || !aVal.length || r.emptyString(query)) ? u
					: function (auxMid, aux) {
						r.map(aVal, function (x) {
							aux = eval("/\\" + x + "/g");
							auxMid = auxMid.replace(aux, "\\" + x); });
						return auxMid;
					}(query, n);
				},
				'stripTags': function (cont) {
					return r.isString(cont) ? (cont.search(/(?:\<.*?\>)/gim) > -1) ? cont.replace(/(?:\<.*?\>)/gim, '').trim() : cont : u;
				},
				'deleteString': function (q, v, g) { return r.emptyString(q) || r.emptyString(v) ? '' : q.replace(eval('/' + v + '/' + (g ? 'g' : '')), ''); },
				'reverseString': function (s) { return r.emptyString(s) ? '' : s.split('').reverse().join(''); },
				'emptyString': function (s) { return r.isString(s) ? (s.search(/\S/) === -1) ? t : f : u; },
				'lTrim': function (s, x) {
					return r.emptyString(s)
					? '' : function (ls, ts) {
									return ls
									? function (fs) {
											return ts && fs ? s.slice(fs, s.length) : s;
										}(s.length > ls && s.search(/\S/) >= ls ? ls : 0)
									: ts ? s.replace(/^\s+/, '+') : s;
								}(!isNaN(x) ? Math.abs(Math.floor(x)) : 0, /^\s+/.test(s));
				},
				'rTrim': function (s, x) { return r.reverseString(r.lTrim(r.reverseString(s), x)); },
				'ucWordString': function (s) { return r.emptyString(s) ? '' : s.split('')[0].toUpperCase().concat(s.substr(1)); },
				'countCharString': function (ch, s) { return r.isString(ch) && r.isString(s) ? r.emptyString(s) ? 0 : s.split(ch).length - 1 : u; },
				'sanitizeString': function (s) {
					return r.isString(s) ? r.emptyString(s) ? s : s.replace(/\</gm, '\u003C').replace(/\>/gm, '\u003E').replace(/\</gm, '\u0022') : u;
				},
				'repeatString': function (s, x) {
					return r.isString(s) && !isNaN(x)
					? function repeater(i, strx) {return x <= 0 || !s.length ? u : i > x ? strx : repeater(i + 1, strx.concat(s));}(1, '') : u;
				},
				// Array functions: reduce, map and filter are methods inspired on the code teached by JonMircha's <https://jonmircha.com/> in his virtual classroom on EDTeam(c) <https://ed.team/> and improved to Rocforjs. Thanks a lot!
				'isArray': function (v) {
					return v ? v.constructor === HTMLCollection ? t : v.constructor === Array
					? typeof v === 'object' && typeof v.length === 'number' && typeof v.splice === 'function' && !(v.propertyIsEnumerable('length')) : f : f;
				},
				'reduce': function (v, fn, ini, from, to) {
					return typeof fn === 'function' && (r.isArray(v) || typeof v === 'string')
					? function reduzer(index, cumulative, origin) {
						return index > v.length - 1
						? cumulative
						: reduzer( index + 1,
								function (last) { return origin || last
									? index >= origin && index <= last ? fn(cumulative, v[index], index) : cumulative : fn(cumulative, v[index], index);
								}(isNaN(to) ? v.length : to ? (to <= origin || to > v.length) ? v.length : parseInt(to, 10) : origin ? v.length : 0), origin
							);
					}(0, ini, isNaN(from) ? 0 : (from < 0 || from > v.length) ? 0 : parseInt(from, 10)) : undefined;
				},
				'map': function (v, fn, from, to) {
					return typeof fn === 'function' && (r.isArray(v) || typeof v === 'string')
					? function mapping(index, cumulative, origin) {
						return index > v.length - 1
						? cumulative
						: mapping( index + 1,
								function (final) { return origin || final
									? index >= origin && index <= final ? cumulative.concat(fn(v[index], index)) : cumulative.concat(v[index])
									: cumulative.concat(fn(v[index], index));
								}(isNaN(to) ? v.length : to ? (to <= origin || to > v.length) ? v.length : parseInt(to, 10) : origin ? v.length : 0), origin
							);
					}(0, typeof v === 'string' ? '' : [], isNaN(from) ? 0 : (from < 0 || from > v.length) ? 0 : parseInt(from, 10) ) : undefined;
				},
				'filter': function (v, fn, from, to) {
					return typeof fn === 'function' && (r.isArray(v) || typeof v === 'string')
					? function filtering (index, cumulative, origin) {
						return index > v.length - 1
						? cumulative
						: filtering( index + 1,
								function (last) { return origin || last ? index >= origin && index <= last
									? fn(v[index], index, v) ? cumulative.concat(v[index]) : cumulative : cumulative.concat(v[index])
									: fn(v[index], index, v) ? cumulative.concat(v[index]) : cumulative;
								}(isNaN(to) ? v.length : to ? (to <= origin || to > v.length) ? v.length : parseInt(to, 10) : origin ? v.length : 0), origin
							);
					}(0, typeof v === 'string' ? '' : [], isNaN(from) ? 0 : (from < 0 || from > v.length) ? 0 : parseInt(from, 10) ) : undefined;
				},
				'unique': function (fn) {return function (v) {return r.filter(v, fn);}}(function(e, idx, a){return a.indexOf(e, idx + 1) < 0;}),
				'repeated': function(fn) {return function (v) {return r.filter(v, fn);}}(function(e, idx, arr){return arr.indexOf(e, idx + 1) > -1;}),
				'valueExists': function (val, v) { return !r.isArray(v) ? -1 : r.filter(v, function (x) {return x === val}).length ? t : f; },
				'valueExistsPos': function (val, v) {
					return !r.isArray(v) ? -1 : function recursive(i) { return i > v.length - 1 ? -1 : val === v[i] ? i : recursive(i + 1); }(0);
				},
				'cleanArray': function (v) { return !r.isArray(v) ? u : r.filter(v, function (x) {return x !== u && !r.emptyString(x)}); },
				'maxValueArray': function (v) {
					return !r.isArray(v) && !v.length ? u : function (j) { r.map(v, function (x) {j = j > x ? j : x;}); return j; }(v[0]);
				},
				'minValueArray': function (v) {
					return !r.isArray(v) && !v.length ? u : function (j) { r.map(v, function (x) { j = j < x ? j : x; }); return j; }(v[0]);
				},
				'difArrays': function (vector1, vector2) {
					return !r.isArray(vector1) && !r.isArray(vector2) || (!r.isArray(vector1) || !r.isArray(vector2))
					? u
					: vector1.length && vector2.length
						? function (v1, v2, dif, vx, i, j) {
								if(v1.length === v2.length) {
									dif = r.map(v1, function (x) { return x; });
									vx = r.map(v2, function (x) { return x; })
								} else if(v1.length > v2.length) {
									dif = r.map(v1, function (x) { return x; });
									vx = r.map(v2, function (x) { return x; })
								} else {
									dif = r.map(v2, function (x) { return x; });
									vx = r.map(v1, function (x) { return x; })
								}
								for(; i < vx.length; i++) {
									j = dif.length;
									dif = r.filter(dif, function (x) { return x !== vx[i]; });
									if (dif.length === j) dif.push(vx[i]);
								}
								return dif;
							}(r.unique(vector1), r.unique(vector2), [], [], 0, 0)
						: vector1.length || vector2.length
							? r.unique(vector1.concat(vector2))
							: [];
				},
				'arrayToEmptyObject': function (vector) {
					return r.isArray(vector)
					? function (v, oa) {
							return v.length ? function () { r.map(v, function (x) { oa[x] = u; }); return oa; }() : {};
						} (vector.length ? r.unique(vector) : [], {})
					: u;
				},
				'pushArrayInArray': function (vA, vB, pos) {
					return r.isArray(vA) && r.isArray(vB)
					? function (p) {
							return function (vi, vf) {
								vi = vi.concat(vB);
								return vi.concat(vf);
							}(vA.slice(0, p), vA.slice(p, vA.length));
						}(typeof pos !== 'number' ? 0 : pos < 0 || pos > vA.length ? 0 : parseInt(pos, 10)) : u;
				},
				// Object functions
				'isObject': function (obj) { return r.isArray(obj) ? f : r.isElement(obj) ? f : typeof obj === 'object'; },
				'objectHasObjects': function (obj) {
					return !r.isObject(obj)
					? u
					: function (i, j) {
							for (i in obj) {
								if (r.isObject(obj[i]) && obj.hasOwnProperty(i)) {
									j++; break;
								}
							}
							return j ? t : f;
						}(0, 0);
				},
				'objectLength': function (obj) {
					return r.isObject(obj) ? function (j, k) {
						for (k in obj) {
							if (obj.hasOwnProperty(k)) j++;
						}
						return j;
					}(0, n) : u;
				},
				'isEmptyObject': function (obj) { return r.isObject(obj) ? r.objectLength(obj) ? f : t : u; },
				'objectToArray': function (obj) {
					return !r.isObject(obj)
					? u
					: function (aux, i) {
							for (i in obj) {
								if (obj.hasOwnProperty(i)) aux.push(String(i + '-' + obj[i]));
							}
							return aux;
						}([], n);
				},
				'objectHasValue': function (val, obj) {
					return r.isObject(obj) && !r.isEmptyObject(obj)
					? function (o, i) {
						i = r.filter(o, function (x) { return r.isString(val) ? x.toLowerCase() === val.trim().toLowerCase() : x === val; });
						return i.length ? t : f;
					}(Object.values(obj), []) : -1;
				},
				'objectHasKey': function (val, obj) {
					return r.isObject(obj) && !r.isEmptyObject(obj) ? (val in obj && obj.hasOwnProperty(val)) : -1;
				},
				'objectValuesToKeys': function (obj) {
					return r.isObject(obj) && !r.isEmptyObject(obj)
					? function (objaux, okeys, ovalues, i) {
						for(; i < okeys.length; i++) {
							if((r.isString(ovalues[i]) && !r.emptyString(ovalues[i])) || typeof ovalues[i] === 'Number') continue
							else return u;
						}
						for(i = 0; i < okeys.length; i++) objaux[ovalues[i]] = okeys[i];
						return objaux;
					}({}, Object.keys(obj), Object.values(obj), 0)
					: u;
				},
				'api': function () {
					// Separing functionality from interface.
					return function (me) {
						return {
							// To test Rocforjs is working ok.
							'test': 'welcome to Rocforjs!',
							// DOM functions
							// $ is a shortcut for document.getElementById.
							'$': function (searchid) { return function (idname){ return searchid(idname); }; }(me['$']),
							// Search any HTMLElement by id string and returns it. If it already is an HTMLElement returns it else false (same at $ method).
							'searchElement': function (searchelement) { return function (elem){ return searchelement(elem); }; }(me['searchElement']),
							// Creates a query string using all data of the selected Form. It is very util to build querystrings to backend.
							'queryCreator': function (querycreate) { return function (evnt){ return querycreate(evnt); }; }(me['queryCreator']),
							// Changes all classes specified on a DOM HTMLElement.
							'changeClasses': function (changeclasses) { return function (elem, oldclasses, newclasses){ changeclasses(elem, oldclasses, newclasses); return r.api; }; }(me['changeClasses']),
							// Changes a class specified on a DOM HTMLElement.
							'changeClass': function (changeclass) { return function (elem, oldclass, newclass){ changeclass(elem, oldclass, newclass); return r.api; }; }(me['changeClass']),
							// Toggles a class specified on a DOM HTMLElement.
							'toggleClass': function (toggleclass) {return function (elem, tclass){toggleclass(elem, tclass); return r.api;};}(me['toggleClass']),
							// Deletes a class specified on a DOM HTMLElement.
							'deleteClass': function (delclass) {return function (elem, wichclass){delclass(elem, wichclass); return r.api;};}(me['deleteClass']),
							// Deletes all classes specified on a DOM HTMLElement.
							'deleteClasses': function (delclasses) {return function (elem, classes){delclasses(elem, classes); return r.api;};}(me['deleteClasses']),
							// Inserts a class specified on a DOM HTMLElement.
							'insertClass':function(insertclass){return function(elem, newclass){insertclass(elem, newclass); return r.api;};}(me['insertClass']),
							// Inserts all classes specified on a DOM HTMLElement.
							'insertClasses':function(insertclasses){return function(elem, classes){insertclasses(elem, classes); return r.api;};}(me['insertClasses']),
							// Search for a class into HTML element class list
							'hasClass': function (hasclass) { return function (elem, wichclass){ return hasclass(elem, wichclass); }; }(me['hasClass']),
							// Evaluates if elem is an HTMLElement.
							'isElement': function (iselem) { return function (elem){ return iselem(elem); }; }(me['isElement']),
							// Evaluates if elem is an TextNode type DOM Element.
							'isTextNode': function (istextnode) { return function (elem){ return istextnode(elem); }; }(me['isTextNode']),
							// Evaluates if elem is type Element node and if exists in DOM.
							'elementByIdExists': function (elemidexists) { return function (elem){ return elemidexists(elem); }; }(me['elementByIdExists']),
							// Obtains the index of Element into his parent Element.
							'elementIndex': function (elemindex) { return function (elem){ return elemindex(elem); }; }(me['elementIndex']),
							// Inserts an HTMLElement after another HTMLElement like Element.insertBefore javaScript method.
							'insertAfter': function (insertafter) { return function (elem, where){ insertafter(elem, where); return r.api; }; }(me['insertAfter']),
							// Evaluates an HTMLElement if elem is String or Object and if exists in DOM.
							'elementEval': function (elemeval) { return function (elem){ return elemeval(elem); }; }(me['elementEval']),
							// Inserts an HTMLElement into, before or after the HTMLElement specified in DOM.
							'elementInsertChild': function (eleminsertchild) { return function (elem, where){eleminsertchild(elem, where); return r.api;}; }(me['elementInsertChild']),
							// Searches if an HTMLElement has a child Element that has the id string gived.
							'elementHasChildById': function (elemhaschildbyid) { return function (parentname, idname){ return elemhaschildbyid(parentname, idname); }; }(me['elementHasChildById']),
							// Entityes all tag chars occurrence in the value of any input Element type text.
							'sanitizeInput': function (sanitizeinput) { return function (elem){sanitizeinput(elem); return r.api;}; }(me['sanitizeInput']),
							// Sets value to null of any input type text and then focus it.
							'focusAndClean': function (focusnclean) { return function (elem){ focusnclean(elem); return r.api; }; }(me['focusAndClean']),
							// String functions
							// Evaluates if a str is type of String.
							'isString': function (isstr) { return function (str){ return isstr(str); }; }(me['isString']),
							// Escapes all occurrences chars in query.
							'escapeString': function (escapest){ return function (query, vectorstr){ return escapest(query, vectorstr); }; }(me['escapeString']),
							// Strips all tags from given String if contains <, / or > symbols.
							'stripTags': function (striptags) { return function (str){ return striptags(str); }; }(me['stripTags']),
							// Deletes a bit string from a long string.
							'deleteString': function (delstr) { return function (query, str, g){ return delstr(query, str, g); }; }(me['deleteString']),
							// Reverses any string.
							'reverseString': function (reversestr) { return function (str){ return reversestr(str); }; }(me['reverseString']),
							// Looks if a string has some content.
							'emptyString': function (emptystr) { return function (str){ return emptystr(str); }; }(me['emptyString']),
							// Deletes all spaces from the left part of a string.
							'lTrim': function (ltrim) { return function (str, amount){ return ltrim(str, amount); }; }(me['lTrim']),
							// Deletes all spaces from the right part of a string.
							'rTrim': function (rtrim) { return function (str, amount){ return rtrim(str, amount); }; }(me['rTrim']),
							// Upper cases the first letter of a string.
							'ucWordString': function (ucword) { return function (str){ return ucword(str); }; }(me['ucWordString']),
							// Counts all occurrences of a char in a string.
							'countCharString': function (countchats) { return function (chr, str){ return countchats(chr, str); }; }(me['countCharString']),
							// Replaces all occurrences of tag entities chars in a string for it's unicode equivalents.
							'sanitizeString': function (sanitizestr) { return function (str){ return sanitizestr(str); }; }(me['sanitizeString']),
							// Repeats a char string or any string n times.
							'repeatString': function (repeatstr) { return function (str, n){ return repeatstr(str, n); }; }(me['repeatString']),
							// Array functions: reduce, map and filter are methods inspired on the code teached by JonMircha's <https://jonmircha.com/> in his virtual classroom on EDTeam(c) <https://ed.team/> and improved to Rocforjs. Thanks a lot!
							// Verifies if an array is really an Array data type.
							'isArray': function (isarray) { return function (vector){ return isarray(vector); }; }(me['isArray']),
							// Reduces to a single number all elements from an array. This method is similar at reduce() of ES6.
							'reduce': function (hugg) { return function (vector, fn, initial, from, to){ return hugg(vector, fn, initial, from, to); }; }(me['reduce']),
							// Maps each element of array or a string applying the orders gived in a function callback. This method is similar at map() of ES6.
							'map': function (transform) { return function (vector, fn, from, to){ return transform(vector, fn, from, to); }; }(me['map']),
							// Filter each element of an array applying the order gived in a function calback. This method is similar at filter() of ES6.
							'filter': function (discard) { return function (vector, fn, from, to){ return discard(vector, fn, from, to); }; }(me['filter']),
							// Deletes all repeated elements of an array.
							'unique': function (ones) { return function (vector){ return ones(vector); }; }(me['unique']),
							// Deletes all unique elements of an array.
							'repeated': function (lot) { return function (vector){ return lot(vector); }; }(me['repeated']),
							// Checks if the element gived exists in array.
							'valueExists': function (valexist) { return function (value, vector){ return valexist(value, vector); }; }(me['valueExists']),
							// Checks for the position of the first occurrence of an element gived if it exists in array.
							'valueExistsPos': function (posval) { return function (value, vector){ return posval(value, vector); }; }(me['valueExistsPos']),
							// Deletes all empty (empty strings or undefined elements) elements from the Array.
							'cleanArray': function (cleanvector) { return function (vector){ return cleanvector(vector); }; }(me['cleanArray']),
							// Searches for the max value of a numeric elements of an array.
							'maxValueArray': function (maxvector) { return function (vector){ return maxvector(vector); }; }(me['maxValueArray']),
							// Searches for the min value of a numeric elements of an array.
							'minValueArray': function (minvector) { return function (vector){ return minvector(vector); }; }(me['minValueArray']),
							// Obtains the diference between two arrays.
							'difArrays': function (difvector) { return function (vector1, vector2){ return difvector(vector1, vector2); }; }(me['difArrays']),
							// Obtains a object with all elements of an Array as it's keys and values with undefined data.
							'arrayToEmptyObject': function (vetoemptyobj){ return function (vector){ return vetoemptyobj(vector); };}(me['arrayToEmptyObject']),
							// Inserts any Array in the selected position of other Array.
							'pushArrayInArray': function (vectorinvector) { return function (vectorA, vectorB, pos){ return vectorinvector(vectorA, vectorB, pos); }; }(me['pushArrayInArray']),
							// Objects functions
							// Verifies if data is of type JavaScript Object.
							'isObject': function (isobject) { return function (obj){ return isobject(obj); }; }(me['isObject']),
							// Checks if an object has child Object elements inside.
							'objectHasObjects': function (ohaso) { return function (obj){ return ohaso(obj); }; }(me['objectHasObjects']),
							// As an Array lenght property, in this case for Objects.
							'objectLength': function (olength) { return function (obj){ return olength(obj); }; }(me['objectLength']),
							// Verifies if obj object is empty.
							'isEmptyObject': function (emptyobject) { return function (obj){ return emptyobject(obj); }; }(me['isEmptyObject']),
							// Converts an object to array. Just for objects with values have string or number data types. Not for objects of objects.
							'objectToArray': function (otovector) { return function (obj){ return otovector(obj); }; }(me['objectToArray']),
							// Search for a value in some element into the object gived.
							'objectHasValue': function (ohasval) { return function (val, obj){ return ohasval(val, obj); }; }(me['objectHasValue']),
							// Search for a key into the object gived.
							'objectHasKey': function (ohaskey) { return function (key, obj){ return ohaskey(key, obj); }; }(me['objectHasKey']),
							// Converts object values on object keys. Recommended: Use this method just with objects that has string values.
							'objectValuesToKeys': function (ovalstokeys) { return function (obj){ return ovalstokeys(obj); }; }(me['objectValuesToKeys'])
						}
					}(this);
				}
			};
			_Asset = {
				'$': Object.create(r.api()),
				'e': Object.create(_Error),
				'api': function () {
					return function (me) {
						return {
							'UERROR': 'Programmer error',
							'MERROR': 'Something went wrong, please check Rocforjs.help for some guide.',
							'SERROR': 'Error! Object is required for state component, not ',
							'NERROR': 'Error! Wrong index, do not exixst any element child with index: ',
							'EERROR': 'Error! Do not exist any element child with id: ',
							'TERROR': 'Error! String id required for this method, not ',
							'resAttributes': [
								'accept', 'accept-charset', 'accesskey', 'action', 'align', 'alt', 'async', 'autocomplete', 'autofocus', 'autoplay', 'autosave',
								'bgcolor', 'border', 'buffered',
								'challenge', 'charset', 'checked', 'cite', 'class', 'code', 'codebasese', 'color', 'cols', 'colspan', 'content', 'contenteditable', 'contextmenu', 'controls', 'coords',
								'data', 'datetime', 'default', 'defer', 'dir', 'dirname', 'disabled', 'download', 'draggable', 'dropzone',
								'enctype',
								'for', 'form', 'formaction',
								'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'http-equiv',
								'icon', 'id', 'ismap', 'itemprop',
								'keytype', 'kind',
								'label', 'lang', 'language', 'list', 'loop', 'low',
								'manifest', 'max', 'maxlength', 'media', 'method', 'min', 'multiple', 'muted',
								'name', 'novalidate',
								'open', 'optimum',
								'pattern', 'ping', 'placeholder', 'poster', 'preload', 'pubdate',
								'radiogroup', 'readonly', 'rel', 'required', 'reversed', 'rows', 'rowspan',
								'sandbox', 'scope', 'scoped', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellcheck', 'src', 'srcdoc', 'srclang', 'srcset', 'start', 'step', 'style', 'summary',
								'tabindex', 'target', 'title', 'type',
								'usemap',
								'value',
								'width', 'wrap'
							],
							'_cast': {
								'str': { 'block': { 'default': 'DIV' }, 'inline': { 'default': 'SPAN'}, },
								'taglist': [ // Alone Tags: area, source, col, hr, link, progress, track.
									{'name':'address', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\baddress\b/i},
									{'name':'area', 'inline': 0, 'mdable': 0, 'alone': 1, 'tagreg': /^\barea\b/i},
									{'name':'article', 'inline': 0, 'mdable': 1, 'alone': 0, 'tagreg': /^\barticle\b/i},
									{'name':'aside', 'inline': 0, 'mdable': 1, 'alone': 0, 'tagreg': /^\baside\b/i},
									{'name':'audio', 'inline': 0, 'mdable': 0, 'alone': 1, 'tagreg': /^\baudio\b/i}, // OJ}O
									{'name':'base', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bbase\b/i}, // OJ}O
									{'name':'bdi', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bbdi\b/i}, // OJ}O
									{'name':'blockquote', 'inline': 0, 'mdable': 1, 'alone': 0, 'tagreg': /^\bblockquote\b/i},
									{'name':'body', 'inline': 0, 'mdable': 1, 'alone': 0, 'tagreg': /^\bbody\b/i},
									{'name':'canvas', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bcanvas\b/i},
									{'name':'caption', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bcaption\b/i}, // OJ}O
									{'name':'col', 'inline': 0, 'mdable': 0, 'alone': 1, 'tagreg': /^\bcol\b/i}, // OJ}O
									{'name':'colgroup', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bcolgroup\b/i}, // OJ}O
									{'name':'datalist', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bdatalist\b/i}, // OJ}O
									{'name':'dd', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bdd\b/i}, // OJ}O
									{'name':'del', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bdel\b/i}, // OJ}O
									{'name':'details', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bdetails\b/i}, // OJ}O
									{'name':'dfn', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bdfn\b/i}, // OJ}O
									{'name':'dialog', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bdialog\b/i}, // OJ}O
									{'name':'div', 'inline': 0, 'mdable': 1, 'alone': 0, 'tagreg': /^\bdiv\b/i},
									{'name':'dl', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bdl\b/i}, // OJ}O
									{'name':'dt', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bdt\b/i}, // OJ}O
									{'name':'embed', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bembed\b/i}, // OJ}O
									{'name':'fieldset', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bfieldset\b/i},
									{'name':'figcaption', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bfigcaption\b/i},
									{'name':'figure', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bfigure\b/i},
									{'name':'footer', 'inline': 0, 'mdable': 1, 'alone': 0, 'tagreg': /^\bfooter\b/i},
									{'name':'form', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bform\b/i},
									{'name':'h1', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bh1\b/i},
									{'name':'h2', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bh2\b/i},
									{'name':'h3', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bh3\b/i},
									{'name':'h4', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bh4\b/i},
									{'name':'h5', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bh5\b/i},
									{'name':'h6', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bh6\b/i},
									{'name':'header', 'inline': 0, 'mdable': 1, 'alone': 0, 'tagreg': /^\bheader\b/i},
									{'name':'head', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bhead\b/i},
									{'name':'hr', 'inline': 0, 'mdable': 0, 'alone': 1, 'tagreg': /^\bhr\b/i},
									{'name':'html', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bhtml\b/i},
									{'name':'iframe', 'inline': 0, 'mdable': 1, 'alone': 0, 'tagreg': /^\biframe\b/i},
									{'name':'ins', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bins\b/i}, // OJ}O
									{'name':'legend', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\blegend\b/i}, // OJ}O
									{'name':'li', 'inline': 0, 'mdable': 1, 'alone': 0, 'tagreg': /^\bli\b/i},
									{'name':'link', 'inline': 0, 'mdable': 0, 'alone': 1, 'tagreg': /^\blink\b/i},
									{'name':'main', 'inline': 0, 'mdable': 1, 'alone': 0, 'tagreg': /^\bmain\b/i},
									{'name':'mark', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bmark\b/i}, // OJ}O
									{'name':'menu', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bmenu\b/i}, // OJ}O
									{'name':'menuitem', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bmenuitem\b/i}, // OJ}O
									{'name':'meta', 'inline': 0, 'mdable': 0, 'alone': 1, 'tagreg': /^\bmeta\b/i},
									{'name':'meter', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bmeter\b/i}, // OJ}O
									{'name':'nav', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bnav\b/i},
									{'name':'noscript', 'inline': 0, 'mdable': 1, 'alone': 0, 'tagreg': /^\bnoscript\b/i},
									{'name':'ol', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bol\b/i},
									{'name':'optgroup', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\boptgroup\b/i},
									{'name':'option', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\boption\b/i},
									{'name':'output', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\boutput\b/i}, // OJ}O
									{'name':'p', 'inline': 0, 'mdable': 1, 'alone': 0, 'tagreg': /^\bp\b/i},
									{'name':'param', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bparam\b/i}, // OJ}O
									{'name':'picture', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bpicture\b/i}, // OJ}O
									{'name':'pre', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bpre\b/i},
									{'name':'progress', 'inline': 0, 'mdable': 0, 'alone': 1, 'tagreg': /^\bprogress\b/i},
									{'name':'rp', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\brp\b/i}, // OJ}O
									{'name':'rt', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\brt\b/i}, // OJ}O
									{'name':'ruby', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bruby\b/i}, // OJ}O
									{'name':'s', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bs\b/i}, // OJ}O
									{'name':'section', 'inline': 0, 'mdable': 1, 'alone': 0, 'tagreg': /^\bsection\b/i},
									{'name':'source', 'inline': 0, 'mdable': 0, 'alone': 1, 'tagreg': /^\bsource\b/i}, // OJ}O
									{'name':'style', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bstyle\b/i}, // OJ}O
									{'name':'summary', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bsummary\b/i}, // OJ}O
									{'name':'table', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\btable\b/i},
									{'name':'tbody', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\btbody\b/i},
									{'name':'td', 'inline': 0, 'mdable': 1, 'alone': 0, 'tagreg': /^\btd\b/i},
									{'name':'tfoot', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\btfoot\b/i},
									{'name':'th', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bth\b/i},
									{'name':'thead', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bthead\b/i},
									{'name':'title', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\btitle\b/i}, // OJ}O
									{'name':'tr', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\btr\b/i},
									{'name':'trackaudio', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\btrackaudio\b/i}, // OJ}O
									{'name':'u', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bu\b/i}, // OJ}O
									{'name':'ul', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bul\b/i},
									{'name':'video', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bvideo\b/i}, // OJ}O
									{'name':'wbr', 'inline': 0, 'mdable': 0, 'alone': 0, 'tagreg': /^\bwbr\b/i}, // OJ}O
									{'name':'b', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bb\b/i},
									{'name':'big', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bbig\b/i}, // OJ}O
									{'name':'i', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bi\b/i},
									{'name':'small', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bsmall\b/i},
									{'name':'tt', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\btt\b/i},
									{'name':'abbr', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\babbr\b/i},
									{'name':'acronym', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bacronym\b/i},
									{'name':'cite', 'inline': 1, 'mdable': 1, 'alone': 0, 'tagreg': /^\bcite\b/i},
									{'name':'code', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bcode\b/i},
									{'name':'dfn', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bdfn\b/i}, // OJ}O
									{'name':'em', 'inline': 1, 'mdable': 1, 'alone': 0, 'tagreg': /^\bem\b/i},
									{'name':'kbd', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bkbd\b/i}, // OJ}O
									{'name':'strong', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bstrong\b/i},
									{'name':'samp', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bsamp\b/i}, // OJ}O
									{'name':'time', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\btime\b/i}, // OJ}O
									{'name':'var', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bvar\b/i}, // OJ}O
									{'name':'a', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\ba\b/i},
									{'name':'bdo', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bbdo\b/i}, // OJ}O
									{'name':'br', 'inline': 1, 'mdable': 0, 'alone': 1, 'tagreg': /^\bbr\b/i},
									{'name':'img', 'inline': 1, 'mdable': 0, 'alone': 1, 'tagreg': /^\bimg\b/i},
									{'name':'map', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bmap\b/i}, // OJ}O
									{'name':'object', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bobject\b/i}, // OJ}O
									{'name':'q', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bq\b/i}, // OJ}O
									{'name':'script', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bscript\b/i}, // OJ}O
									{'name':'span', 'inline': 1, 'mdable': 1, 'alone': 0, 'tagreg': /^\bspan\b/i},
									{'name':'sub', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bsub\b/i}, // OJ}O
									{'name':'sup', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bsup\b/i}, // OJ}O
									{'name':'button', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bbutton\b/i},
									{'name':'input', 'inline': 1, 'mdable': 0, 'alone': 1, 'tagreg': /^\binput\b/i},
									{'name':'label', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\blabel\b/i},
									{'name':'select', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\bselect\b/i},
									{'name':'textarea', 'inline': 1, 'mdable': 0, 'alone': 0, 'tagreg': /^\btextarea\b/i}
								]
							},
							'_secondcast': {
								'str': { 'closeDrom': ']' },
								'reg': {
									'weakDrom': /\[\]/, 'closeDrom': /\]/, 'cautiveRebelAndDroid': /(?:\[(0|1)\])/, 'cautiveRebelsOrDroids': /(?:\[(0+|1+)\])/, 'cautiveRebelsAndDroids': /(?:\[[0|1]{1,}\])/
								},
								'num': { 'rebel': 1, 'droid': 0 }
							},
							'_unicode': {
								'&amp;': '\u0022', //&
								'&lt;': '\u003C', //<
								'&gt;': '\u003E', //>
								'&itilde;': '\u00ED', //í
								'&nbsp;': '\u00A0', //	
								'&quot;': '\u0022', //“
								'&apos;': '\u0027', //‘
								'&copy;': '\u00A9', //©
								'&reg;': '\u00AE', //®
								'&trade;': '\u2122', //™
								'&euro;': '\u20AC', //€
								'&deg;': '\u00B0', //°
								'&sup2;': '\u00B2', //²
								'&sup3;': '\u00B3', //³
								'&micro;': '\u00B5', //µ
								'&frac14;': '\u00BC', //¼
								'&frac12;': '\u00BD', //½
								'&frac34;': '\u00BE', //¾
								'&pi;': '\u03C0' //π
							},
							'checkTs': function (str) {
								return me.$.isString(str) || typeof str === 'number' ? String(str) : null;
							},
							'trimtag': function (ts) { // Obtain tagName
								return function (mi, tn) {
									return me.$.filter(mi._cast.taglist, function (x) {return x['tagreg'].test(tn);});
								}(this, ts.toLowerCase(), '');
							},
							'alone': function (ts, blockinline) { // If TagString starts with tag, txt, ., # o (, es válida /^([a-zA-Z]+|\.\w+|\#\w+|\(\w+)/
								// 1. [x] Verify if ts has any tagname|class|id|(parattr) at begining
								// 2. [x] If has, verify if it begins with class|id|parenthesses, so return DEFAULT tagname, block or inline
								// 3. [x] Else, call trimtag to obtain the tagname and then, call canHaveChild to verify if support child nodes
								// 4. [x] Finally, return an object with values {alonetag, tagnode}
								// Evals [.#(...] DIV if T, else, eval tag, if inline, block or alone, alone 1 n do not admit child nodes.
								// {'name':'div', 'inline': 0, 'mdable': 1, 'alone': 0, 'tagreg': /^\bdiv\b/i}
								return function (mi, ta, bi) {
									return function (tn, dbi, obi) {
										obi = {'alonetag': 0, 'tagnode': bi, 'mdable': 1, 'tagreg': dbi['tagreg']};
										return ta  ? /^[\.\#\(]/.test(ts) ? obi
											: tn ? {'alonetag': tn['alone'], 'tagnode': tn['name'], 'mdable': tn['mdable'], 'tagreg': tn['tagreg']} : obi : obi;
									}(mi.trimtag(ts, bi)[0] || null, me.$.filter(mi._cast.taglist, function (x) { return x.name === bi})[0], null);
								}(this, /^([a-zA-Z]+|\.\w+|\#\w+|\(\w+)/.test(ts), this._cast.str[blockinline ? 'inline' : 'block'].default.toLowerCase());
							},
							'getElementByIDroc': function (rocid, rocelements) {
								var z = me.$.filter(rocelements, function (x) { return me.$.isElement(x) && x.id === rocid; });
								return z.length ? z[0] : null;
							},
							'idinDOM': function (idlist, noval) {
									noval = idlist ? me.$.filter(idlist, function (x) { return me.$.elementByIdExists(x); }) : [];
									try {
										if (noval.length) throw new me.e.e(
											'Programmer error',
											'Error! DOM already has element' + (noval.length > 1 ? 's' : '') + ' with id' + (noval.length > 1 ? 's' : '') + ': ' + noval.join(', ') + '. Please, make a review of your tag, block or componentString.'
										);
										return false;
									} catch (error) {
										me.e.eD(error); return true;
									}
							},
							'wprops': function (props) {
								return me.$.isObject(props)
								? 'holder' in props && props.hasOwnProperty('holder')
									? props['holder'] // holder:idHolderElement|HTMLElement|{container|before|after}, each can have: idHolderElement|HTMLElement
									: 'container' in props && props.hasOwnProperty('container') || 'after' in props && props.hasOwnProperty('after') || 'before' in props && props.hasOwnProperty('before')
										? props : me.$.isElement(props) ? this.trimtag(props.tagName).alonetag ? {} : props : {}
								: me.$.isString(props) ? props : {};
							},
							'unicodeText': function (txt) {
								// Replaces all &xyz; values special chars for his equivalent !uxyz, return: empty str | plain txt | modified txt. txt: str
								// 1. [x] Search for all special chars between &...; and store it in array using match js method
								// 2. [x] Then, each element finded in _unicode from _tagsmissions replace in txt
								// 3. [x] return the new textNode or null.
								return txt.length
								? function (mi, vtxt) {
										return vtxt.length
										? function (y) {
												me.$.map(vtxt, function (x) {
													x = x.toLowerCase();
													y = eval('/' + x + '/gi');
													txt = txt.replace(y, mi._unicode[x] || y); // unicode or the same value if it doesnt exist
												});
												return txt;
											}(null)
										: txt;
									}(this, txt.match(/\&\w+\;/g) || [])
								: '';
							},
							'commons': function () { return me.$.arrayToEmptyObject(this.resAttributes); },
						};
					}(this);
				},
			};
			_Vars = {
				'$': Object.create(r.api()),
				'e': Object.create(_Error),
				'a': Object.create(_Asset.api()),
				'core': function () {
					return function (me) {
						return {
							'rv': function (content, rvars) {
								return function (_rVars) {
									return _rVars ? me.$.isString(content) ? me.$.emptyString(content) ? '' : function (fn) {
										return _rVars.length ? function (ex) {
											me.$.map(_rVars, function (x) {
												try {
													content = /^\${1}\w+/.test(x)
													// Rocforjs variables type: $x.
													? function (u, z) {
														if (!ex(u)) throw new Error('No..thing');
														z = ex(u);
														return content.replace(x, z);
													}(x.replace(/^\$+/, ''), '') : content;
													// Rocforjs variables type: $$x.
													content = /^\${2}\w+/.test(x) ? function (y) {
														return typeof rvars === 'object' && rvars.hasOwnProperty(y) ? content.replace(x, rvars[y]) : content
													}(x.replace(/^\$+/, '')) : content;
													// Rocforjs variables type: $(x + y). For mathematical operators.
													content = /^\${1}\(/.test(x)
													? function (u) {
														if (!ex(u)) throw new Error('No..thing');
														return content.replace(x, ex(u))
													}(x.replace(/^\$\(/, '').replace(/\)$/, '').trim()) : content;
												} catch (error) {
													return content;
												}
											});
											return content;
										}(fn[fn][fn]('u', 'return u ? new Function("return " + u + ";")() : undefined;')) : content;
									}('constructor') : null : content;
								}(content.match(/(\${2}\w+)|(\$\w+)|(?:\$\(.+\)+)/gm)); // Obtain all rvars from content string in Array | null from match.
							}
						}
					}(this);
				}
			};

			_MDwn = {
				'$': Object.create(r.api()),
				'e': Object.create(_Error),
				'a': Object.create(_Asset.api()),
				'v': Object.create(_Vars.core()),
				'core': function () {
					return function (self, md, mdids, classlist) {
						// Special thanks to: John Gruber: <http://daringfireball.net/>
						// This code is BASSED on the John Gruber's IDEA for Markdown.
						// Mdown is a short Markdown contents translator to HTML. Do not support nested elements as p or ul in blockquotes. Supports classes: class(w,x y.z), and id's: id(myid). Type ´ to: `. It was spetialy thinked for developers.
						return {
							rgx: {
								mdNL: '\n',
								mdpartsreg: /^(\[\/\/\]\:\s?\#)\s?.*/,///^(\[\/\/\]\:\s\#)\s?.*/gm,
								mdfootreg: /^([\s\t]*(\[[\S\s]+\]\:))/,
								mdonebq: /^[\s\t]*\>{1}\s?/gm,
								mdtwobq: /^[\s\t]*(\>){2}\s?/gm,
								mdthreebq: /^[\s\t]*(\>){3}\s?/gm,
								mdpreg: /^\w/,
								parse_initial: /^(id\((\w+[\w\_\-]*\w+)\))+(?=(\s?\t?.?)+)+|^(class\([.,\s\w\_\-]+\))+(?=(\s?\t?.?)+)/gi, // Ids n classes
								mddivreg: /^\?\s?/,							// DIV
								mdbqreg: /^\/\s?/,							// BLOCKQUOTE
								mdpreoreg: /^[\`\+]{3}\s\S+/,		// PRE OPEN
								mdprecreg: /^[\`\+]{3}$/,				// PRE CLOSE
								mdulreg: /^[\s\t]*[\+\-\*]\s/,	// UL
								mdloreg: /^[\s\t]*\d\.\s/,			// OL
								mdrulereg: /^[\-\=\_]{2,}$/			// HR
							},
							'getMdContent': function (content, idtags) {
								return content ? function (mi, mdbuilder, vs, reflist, m, classaux, norepeatedids) {
									mdbuilder = {
										'mdfinished': '',
										'matchClasses': function (iclass) {
											return iclass.length ? /^(class\([.,\s\w\_\-]+\))+(?=(\s?\t?.?)+)/gi.test(iclass) // Class string list on initial attributes
											? function (content) {
												iclass = iclass.replace(content,'').replace(/^class\(/i,'').replace(/\)$/,'').replace(/[.,]+/,'.').replace(/\s+/,'.').split('.');
												iclass = iclass.length ? self.$.filter(iclass, function (x) { return x; }) : [];
												iclass = iclass.length ? self.$.unique(iclass) : '';
												if (iclass.length) classlist = classlist.concat(iclass);
												return iclass ? ' class="' + iclass.join('  ') + '"' : '';
											}(iclass.replace(mi.parse_initial, '')) : '' : '';
										},
										'matchId': function (iid) {
											return iid.length ? /^(id\((\w+[\w\_\-]*\w+)\))+(?=(\s?\t?.?)+)+/gi.test(iid)// Class string list on initial attributes
											? function (content, iidaux) {
												iid = iid.replace(content,'').replace(/^id\(/i,'').replace(/\)$/,'');
												try {
													iidaux = idtags ? idtags.length ? self.$.filter(idtags, function (x) {return x.toLowerCase() === iid.toLowerCase();}) :[]:[];
													if (iidaux.length) throw new self.e.e(self.a.UERROR, 'Error in Markdown! id: \"' + iid + '\" already exists in Tag!');
													iidaux = self.$.elementByIdExists(iid) ? [0] : [];
													if (iidaux.length) throw new self.e.e(self.a.UERROR, 'Error in Markdown! id: \"' + iid + '\" already exists in DOM!');
													iidaux = mdids.length ? self.$.filter(mdids, function (x) {return x.toLowerCase() === iid.toLowerCase();}) :[];
													if (iidaux.length) throw new self.e.e(self.a.UERROR,'Error in Markdown! id: \"' + iid + '\" is repeated in your Markdown!');
													mdids.push(iid);
													return iid ? ' id="' + iid + '"' : '';
												} catch (error) {
													self.e.eD(error);
													return;
												}
											}(iid.replace(mi.parse_initial, ''), []) : '' : '';
										},
										'matchAttr': function (x) {
											return function (rgxid, rgxclass) {
												var y = rgxid === undefined ? undefined : (rgxid + rgxclass);
												return y;
											}(mdbuilder['matchId'](x.replace(/^(class\([.,\s\w\_\-]+\))+(?=(\s?\t?.?)+)/gi, '')), mdbuilder['matchClasses'](x.replace(/^(id\((\w+[\w\_\-]*\w+)\))+(?=(\s?\t?.?)+)+/gi, '')));
										},
										'mdinfo': function (tag, ref) {
											// 1. [x] tag es el elemento a o img en binario: 0 o 1
											// 2. [x] ref debe ser un objeto {ref:[ref], alt|content: 'alt img or any a content'}
											return function (i, vref, refstring, straux) {
												for (i in reflist) {
													vref[0] = reflist[i][0] ? (tag ? 'src="' : 'href="') + reflist[i][0].replace(/^\"|\"$/g, '') + '"' : '';
													vref[1] = reflist[i][1] ? 'title="' + reflist[i][1].replace(/^\"|\"$/g, '') + '"' : '';
													vref = vref.length ? self.$.filter(vref, function (y) { return y; }) : '';
													refstring[i] = vref.length ? vref.join(' ') : '';
												}
												straux = refstring.hasOwnProperty(ref['ref']) ? (tag ? (refstring[ref['ref']] + ref['val']) : refstring[ref['ref']]) : '';
												straux = straux
												? tag ? ('<img ' + straux + ' />') : ('<a ' + straux + '>' + (reflist.hasOwnProperty(ref['ref']) ? ref['val'] : '') + '</a>')
												: '';
												return straux;
											}(0, [], {}, '');
										},
										'matchBlock': function () {
											this.mdfinished = vs.length ? self.$.map(vs, function (x) {
												classaux = mi.parse_initial.test(x) ? mdbuilder['matchAttr'](x) : ''; // Verify to add class attributes at content
												if (classaux === undefined) return;
												x = mi.parse_initial.test(x) ? x.replace(mi.parse_initial, '') : x;
												x = mi.parse_initial.test(x) ? x.replace(mi.parse_initial, '') : x;
												// [x] BLOCK ELEMENTS: Paragraphs: p: txt1s: ini, txt: normal, txts2s:br, txt3s: end
												x = mi.mdpreg.test(x)
												? function (y) {
													return y.length
														? function (z) { return z === 1 ? ('<p' + classaux + '>' + x)
														: z === 2 ? (x + '<br />') : z === 3 ? (x + '</p>') : ('<p' + classaux + '>' + x + '</p>');
														}(y.reverse().join('').search(/\S/)) : y
												}(x.length ? x.split('') : x) : x;
												// [x] DIVS: div: d1s, ... d2s
												x = mi.mddivreg.test(x)
												? function (y) {
													return y.length
													? function (z) { return z <= 1 ? ('<div' + classaux + '>') : z > 1 ? '</div>' : x; }(y.reverse().join('').search(/\S/)) : y
												}(x.length ? x.split('') : x) : x;
												// [x] Hs: #{1, 6}
												x = /^\#{1}\s.*/.test(x) ? (x.replace(/^\#{1}\s/, '<h1' + classaux + '>') + '</h1>')
												: /^\#{2}\s.*/.test(x) ? (x.replace(/^\#{2}\s/, '<h2' + classaux + '>') + '</h2>')
													: /^\#{3}\s.*/.test(x) ? (x.replace(/^\#{3}\s/, '<h3' + classaux + '>') + '</h3>')
														: /^\#{4}\s.*/.test(x) ? (x.replace(/^\#{4}\s/, '<h4' + classaux + '>') + '</h4>')
															: /^\#{5}\s.*/.test(x) ? (x.replace(/^\#{5}\s/, '<h5' + classaux + '>') + '</h5>')
																: /^\#{6}\s.*/.test(x) ? (x.replace(/^\#{6}\s/, '<h6' + classaux + '>') + '</h6>') : x;
												// [x] BQ: /1s, ../alone: init internal element, /2s: end internal, #s, 1.s, *s, //s.. /2s | No para elementos internos a bq
												x = mi.mdbqreg.test(x)
												? function (y) {
													return y.length
														? function (z) { return z === 1
															? ('<blockquote>' + x.replace(mi.mdbqreg, ''))
															: z === 2 ? (x.replace(mi.mdbqreg, '') + '</blockquote>') : ('<p>' + x.replace(mi.mdbqreg, '') + '</p>');
														}(y.reverse().join('').search(/\S/)) : y
												}(x.length ? x.split('') : x) : x;
												// [x] PRE: ```lang|+++lang, ```|+++ | Si ya se usa backsticks, escaparlos: \`
												x = mi.mdpreoreg.test(x) ? function (langc) {
													classaux = langc ? classaux ? /class\=\"/gi.test(classaux) ? classaux.replace(/\"$/, ('  ' + langc + '-lang"')) : (classaux + ' class="' + langc + '-lang"') : ' class="' + langc + '-lang"' : classaux;
													m = 1; return (x.replace(mi.mdpreoreg, '<pre' + classaux + '><ol>'));
												}(x.replace(/^[\`\+]{3}\s*/, '').trim()) : mi.mdprecreg.test(x)
												? function(){m = 0; return x.replace(mi.mdprecreg,'</ol></pre>');}():(m ? '<li><code>' + x.replace(/\´/gm, '&#96;') + '</code></li>':x);
												// [x] HR: [\-\=\_]
												x = mi.mdrulereg.test(x) ? x.replace(mi.mdrulereg, '<hr />') : x;
												// [x] UL: +|-|*1s, ...+|-|*3s:p, 4s=br, >\t:bqini, >, >\t\t:bqend, 3`+\t:preini, 3`+code, 3`+\t\t:preend, 4s=br..., +|-|*2s
												x = mi.mdulreg.test(x)
												? function (y) {
													return y.length
														? function (z) { return z === 1 ? ('<ul' + classaux + '><li>' + x.replace(mi.mdulreg, '').trim() + '</li>') : z === 2
																? ('<li>' + x.replace(mi.mdulreg, '').trim() + '</li></ul>') : (x.replace(mi.mdulreg, '<li>').trim() + '</li>');
															}(y.reverse().join('').search(/\S/)) : y
												}(x.length ? x.split('') : x) : x
												// [x] OL: \t1.1s, \t1., \t2.3s:p, 4s=br, >\t:bqini, >, >\t\t:bqend, 3`+\t:preini, 3`+code, 3`+\t\t:preend ...., \tN.2s
												x = mi.mdloreg.test(x)
												? function (y) {
													return y.length
														? function (z) { return z === 1
															? ('<ol' + classaux + '><li>' + x.replace(mi.mdloreg, '').trim() + '</li>') : z === 2
																? ('<li' + classaux + '>' + x.replace(mi.mdloreg, '').trim() + '</li></ol>') : (x.replace(mi.mdloreg, '<li' + classaux + '>').trim() + '</li>');
														}(y.reverse().join('').search(/\S/)) : y
												}(x.length ? x.split('') : x) : x
												// [x] TABLAS: | txt | txt | = table:thead:tr/th:/tr:/thead:tbody; txt | txt | txt = tr:td; txt | txt | txt| = tr:td:tb:table
												x = /^\|{2}\s/.test(x)
												? x.replace(/^\|{2}\s/, '<table' + classaux + '><thead><th>').replace(/\s\|$/, '</th></thead>').replace(/(\s\|\s)+/g, '</th><th>')
												: /^\|\s[\-\=\|\s]{2,}\s\|$/.test(x) ? x.replace(/^\|\s[\-\=\|\s]{2,}\s\|$/, '<tbody>') : /^\|\s|\s\|$/.test(x)
													? x.replace(/^\|\s/, '<tr><td>').replace(/\s\|$/, '</td></tr>').replace(/(\s\|\s)+/g, '</td><td>').replace(/\s\|{2}$/g, '</tbody></table>') : x;
												return x;
											}) : [];
											norepeatedids = this.mdfinished.length ? self.$.filter(this.mdfinished, function (x) {return !x}) : [];
											this.mdfinished = norepeatedids.length ? [] : this.mdfinished;
											return this;
										},
										'matchinline': function () {
											return {
												mdstr: '',
												mdb: undefined,
												rgx: undefined,
												getResults: function (vector) {
													return function (that) {
														vector.length ? self.$.map(vector, function (x) { that.mdstr = that.mdstr.split(x[0]).join(x[1]); }) : that.mdstr;
														return that;
													}(this);
												},
												spanwords: function () { // *** | ___ antes: /\*{3}(?=[\w])/gm y después: /\*{3}(?![\w])/gm
													this.mdstr = this.mdstr.replace(/[\*\_]{3}(?=[\w\(\)\?\¿\!\¡\'\"\%\$\#\@\|\-\=])/gm, '<strong><em>').replace(/[\*\_]{3}(?![\w\(\)\?\¿\!\¡\'\"\%\$\#\@\|\-\=])/gm, '</em></strong>');
													this.mdstr = this.mdstr.replace(/[\*\_]{2}(?=[\w\(\)\?\¿\!\¡\'\"\%\$\#\@\|\-\=])/gm, '<strong>').replace(/[\*\_]{2}(?![\w\(\)\?\¿\!\¡\'\"\%\$\#\@\|\-\=])/gm, '</strong>');
													this.mdstr = this.mdstr.replace(/[\*\_]{1}(?=[\w\(\)\?\¿\!\¡\'\"\%\$\#\@\|\-\=])/gm, '<em>').replace(/[\*\_]{1}(?![\w\(\)\?\¿\!\¡\'\"\%\$\#\@\|\-\=])/gm, '</em>');
													this.mdstr = this.mdstr.replace(/\`{1}(?=[\w\(\)\?\¿\!\¡\'\"\%\$\#\@\|\-\=])/gm, '<code>').replace(/\`{1}(?![\w\(\)\?\¿\!\¡\'\"\%\$\#\@\|\-\=])/gm, '</code>');
													return this;
												},
												getImgtaginline: function () {
													return function (k) {
														return k ? k.length ? self.$.map(k, function (x) { return [[x, function (imgparts) {
																return imgparts.length ? function () {
																	imgparts[0] = imgparts[0] ? 'alt="' + imgparts[0].replace(/^\!\[/, '') + '"' : ''; // alt
																	imgparts[1] = imgparts[1] ? 'src="' + imgparts[1].replace(/\)$/, '').replace(/\s\"/, '" title="').replace(/\"$/, '') + '"' : ''; // src, title
																	return '<img ' + imgparts.join(' ') + ' />';
																}() : '';
															}(x.split(']('))]]
														}) : [] : [];
													 }(this.mdstr.length ? this.mdstr.match(/(?:\!\[.[^\[\]]+\]\([\s\w\\:.,;/-¿?"'|!¡@#$%&áéíóúñÑÁÉÍÓÚ]+\))/gm) : '');
												},
												getImgtagbyref: function () {
													return function (that, k, i) {
														k = that.mdstr.length ? that.mdstr.match(/(?:(\!\[[\w\s\|\-]+\]\[[\s\w\\\:.\/\-\#\?\"\'\=\|]+\]))/gm) || '' : '';
														i = k.length ? self.$.map(k, function (x) {return {
															'refdom': x,
															'ref':x.replace(/(?:(\!\[[\w\s\|\-]+\]))/, ''),
															'val':(' alt="' + x.replace(/(?:(\[[\s\w\\\:.\/\-\#\?\"\=\|]+\]))$/, '').replace(/^(\!\[)|\]$/g, '') + '"') || ''
														}}) : [];
														return i.length ? self.$.map(i, function (x) { return [[x['refdom'], that.mdb.mdinfo(1, x)]]; }) : [];
													}(this, this.mdstr.length ? this.mdstr.match(/(?:(\!\[[\w\s\|\-]+\]\[[\s\w\\\:.\/\-\#\?\"\=\|]+\]))/gm) || '' : '', []);
												},
												getImginline: function () { return this.getResults(this.getImgtaginline()); },
												getImgbyref: function () { return this.getResults(this.getImgtagbyref()); },
												getImplicitLink: function () {
													return function (that, k) { // [About](/about/) (?:(\[.+\]\([\s\w\/\-\#]+\)))
														k = k ? k.length ? self.$.map(k, function (x) {
															return [[x, function (linkparts) { return linkparts.length ? function () {
																linkparts[0] = linkparts[0] ? linkparts[0].replace(/^\[/, '') : ''; // link content
																linkparts[1] = linkparts[1] ? 'href="' + linkparts[1].replace(/\)$/, '') + '"' : ''; // href
																return reflist.hasOwnProperty(linkparts[0]) ? '' : '<a ' + linkparts[1] + '>' + linkparts[0] + '</a>';
															}() : ''; }(x.split(']('))]]
														}) : [] : [];
														if (k.length) {
															self.$.map(k, function (x) {that.mdstr = that.mdstr.split(x[0]).join(x[1]);});
														}
														return that;
													}(this, this.mdstr.length ? this.mdstr.match(/(?:(\[[\s\w\-\d]+\]\([\s\w\/\-\#]+\)))/gm) || '' : '');
												},
												getLinktaginline: function () {
													return function (k) {
														return k ? k.length ? self.$.map(k, function (x) { return [[x, function (linkparts) { return linkparts.length
														? function () {
															linkparts[0] = linkparts[0] ? linkparts[0].replace(/^\[/, '') : ''; // link content
															linkparts[1] = linkparts[1] ? 'href="' + linkparts[1].replace(/\)$/, '').replace(/\s\"/, '" title="').replace(/\"$/, '') + '"' : ''; // href, title
															return '<a ' + linkparts[1] + '>' + linkparts[0] + '</a>';
														}() : ''; }(x.split(']('))]] }) : [] : [];
													}(this.mdstr.length ? this.mdstr.match(/(?:\[.[^\[\]]+\]\([\s\w\\:.,;/\-¿?"'|!¡@#$%&áéíóúñÑÁÉÍÓÚ]+\))/gm) : '');
												},
												getLinktagbyref: function () { // rgx: (?:(\[[\w\s]+\]\[[\w\s]+\])):Válido inicial || Mejora: (?:(\[[\w\s\/\.]+\]\[[\w\s]+\]))
													return function (that, k, i, e) {
														i = k ? k.length ? self.$.map(k, function (x) {
															e = x.replace(/(?:(\[[\w\s\/\.]+\]))$/, '').replace(/^\[|\]$/g, '') || '';
															return { 'refdom': x, 'ref':x.replace(/^(?:(\[[\w\s\/\.]+\]))/, ''), 'val': e.length ? e : '' }}) : [] : [];
														return i.length ? self.$.map(i, function (x) { return [x['refdom'], that.mdb.mdinfo(0, x)]; }) : [];
													}(this, this.mdstr.length ? this.mdstr.match(/(?:(\[[\w\s\/\.]+\]\[[\w\s]+\]))/gm) : '', [], '');
												},
												getLinkinline: function () { return this.getResults(this.getLinktaginline()); },
												getLinkbyref: function () { return this.getResults(this.getLinktagbyref()); },
												init: function (mo, rgx) {
													this.mdb = mo;
													this.rgx = rgx;
													this.mdstr = mo.mdfinished.length ? mo.mdfinished.join(rgx.mdNL) : ''
													return this.getImginline().getImgbyref().getImplicitLink().getLinkinline().getLinkbyref().spanwords().mdstr;
												}
											};
										},
									};
									return mdbuilder.matchBlock().matchinline().init(mdbuilder, mi);
								}(this.rgx, null, content[0], content[1], 0, '', [])
								: null;
							},
							'getMdInfo': function (info) {
								return info.length
								? function (y, aux1, aux2) {
									y = y.length ? self.filter(y, function (x) {return x && /^(\[[\w\s\d]+\]\:\s).*$/g.test(x.trim());}) : [];
									y = self.map(y, function (x) { aux1 = x.split(/\:\s/); return aux1.length ? { 'ref': aux1[0], 'val': aux1[1] } : aux2; });
									aux1 = {}
									self.map(y, function (x) { aux1[x['ref']] = x['val'].split(/\t+/); });
									return aux1;
								}(info.length ? info.split(this.rgx.mdNL) : [], { 'tag': undefined, 'ref': undefined })
								: [];
							},
							'getMdParts': function (mdvector) {
								// 1. [x] OBTENER LAS PARTES DEL TEXTO: CONTENIDO Y REFERENCIAS
								// 2. [x] SANITIZAR TODO EL CONTENIDO: primero, a |s todos los bq y luego sanitizar
								// 3. [x] OBTENER CONTENIDO REFACTORIZADO: Bloques y elementos en línea a html.
								return self.$.isArray(mdvector) && mdvector.length
								? function (me, mi, x) {
									if (x['content']) {
										x['content'] = x['content'].length ? self.$.filter(x['content'].split(mi.mdNL), function (x) { return x; }) : [];
										x['content'] = x['content'].length ? self.$.map(x['content'],
											function (x) { return x.replace(mi.mdthreebq, '///').replace(mi.mdtwobq, '//').replace(mi.mdonebq, '/'); }) : [];
										x['content'] = x['content'].length ? x['content'].join(mi.mdNL) : '';
										x['content'] = x['content'].length ? x['content'].replace(/\</gm, '&lt;').replace(/\>/gm, '&gt;') : ''
										x['content'] = x['content'].length ? x['content'].split(mi.mdNL) : [];
									}
									x['info'] = x['info'] ? me.getMdInfo(x['info']) : undefined;
									return x['content'] || x['info'] ? [x['content'], x['info']] : null;
								}(this, this.rgx, mdvector.length >= 1 ? { 'content': mdvector[0], 'info': mdvector[2] } : []) : null;
							},
							'run': function (mds, rvars, idtags) {
								mds = self.$.isString(mds) ? self.$.emptyString(mds) ? '' : self.v.rv(mds, rvars) : '';
								md = this.getMdContent(this.getMdParts(mds.length ? mds.split(/(\[\/\/\]\:\s?\#)\s?.*/) : []), idtags);
								return idtags ? md.length ? {'idlist': mdids, 'classlist': self.$.unique(classlist), 'mdstring': md} : undefined : md;
							}
						};
					}(this, '', [], []);
				},
				'api': { 'run': function (mdcontent, rvars) { return _MDwn['core']()['run'](mdcontent, rvars); } }
			};
			_Ajax = {
				'e': Object.create(_Error),
				'core': function () {
					return function (me, _Ajaxcore) {
						_Ajaxcore = function () {
							this.READY_STATE_COMPLETE = 4;
							this.READY_STATE = 200;
							this.data = null;
							this._response = null;
							this._info = null;
							this._xhr = null;
						};
						_Ajaxcore.prototype = {
							ready: function () {
								var that = this;
								this._info = this.data.data;
								try {
									if (!this.checkInfo('method', 'string') && !this.checkInfo('source', 'string')) throw new me.e.e('Programmer error', "Ajax: Error, data params gived are wrong!");
									this._xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
									if (!this._xhr) throw new me.e.e('System Error', 'Ajax: Your system do not have support for Ajax technology!');
									this._xhr.onreadystatechange = function () { that.onReadyState(); };
									this._xhr.open(this._info['method'], this._info['source'], true);
									if (this._info['method'].toLowerCase() === 'post')
										this._xhr.setRequestHeader('Content-Type', this._info['header'] || 'application/x-www-form-urlencoded');
									this._xhr.send(this._info['method'].toLowerCase() === 'post' ? (this._info['datatype'] === 'json' ? JSON.stringify(this._info['data']) : this._info['data'] || null) : this._info['data'] || null);
								}
								catch (err) {
									(typeof this.data.onerror === 'function') ? this.data.onerror(err) : this.defaultErrorHandler(err);
								}
							},
							onReadyState: function () {
								if (this._xhr.readyState === this.READY_STATE_COMPLETE) {
									if (this._xhr.status === this.READY_STATE) {
										this._response = this.checkInfo('restype', 'string') ? ((this._info['restype'].toLowerCase() === 'json') ? (this.evalResponse() ? JSON.parse(this._xhr.responseText) : '{"response":"Error, data returned is not of type JSON!"}') : (this.checkInfo('restype', 'xml')) ? this._xhr.responseXML : this._xhr.responseText) : this._xhr.responseText;
										(typeof this.data.onready === 'function') ? this.data.onready(this._response) : this.defaultHandler(this._response);
									} else {
										(typeof this.data.onerror === 'function') ? this.data.onerror(this._xhr) : this.defaultErrorHandler(this._xhr);
									}
								} else {
									(typeof this.data.onpreload === 'function')
									? this.data.onpreload(this._xhr.readyState) : this.defaultPreloaderHandler(this._xhr.readyState);
								}
							},
							checkInfo: function (info, datatype) { return (info in this._info) ? (typeof this._info[info] === datatype) : false; },
							evalResponse: function () { return this._xhr.responseText ? JSON.parse( this._xhr.responseText ) ? true : false : false; },
							defaultHandler: function (res) { me.e.eD({name:'Request Ajax processed succesfuly!', message:res, type:'info'}); },
							defaultPreloaderHandler: function (x) { me.e.eD({name:'Ajax loaded...', message:((x * 100 / 4) + '%'), type:'info'}); },
							defaultErrorHandler: function (e) { me.e.eD(e); },
							load: function (data) { this.data = data; this.ready(); }
						};
						return new _Ajaxcore();
					}(this)
				},
				'api': function () {
					return function (ajax) {
						// Loads a new XHR object to send and request data from backend. (A server is needed to work with Ajax).
						return {
							'load': function (data) { ajax.load(data); },
						};
					}(this.core());
				}
			};
			_Tag = {
				'e': Object.create(_Error),
				'$': Object.create(r.api()),
				'v': Object.create(_Vars.core()),
				'asset': Object.create(_Asset.api()),
				'md': Object.create(_MDwn['core']()),
				'core': function (tagString, data, sc, rvars) {
					return function (mi, _TagCore, _taginstance) {
						_TagCore.prototype = {
							_e: 0,
							_ts: function (tagString) {
								var that = this,
								eHandler = function (e) {
									try {
										throw new mi.e.e(e[0], e[1], e[2]);
									} catch (error) {
										mi.e.eD(error);
										if (error.type === 'error') { that._e = 1; }
									}
								},
								evalEvents = function () {
									return {
										'eFunction': function (theevent) {
											return theevent ? function () {
												return typeof theevent === 'string' ? /[\W\s?]+/g.test(theevent)
												? /^function{1}\s*\(\)\s*\{(.*)\}\;?$/g.test(theevent) || /^\(\)\s*\=\>\s*\{(.*)\}\;?$/g.test(theevent) : t : f;
											}()
											: f;
										},
										'eEvent': function (theevent) {
											// 1. [x] Evaluar si theevent es cadena
											// 2. [x] Evaluar si theevent es inline o global fnname o private
											// 3. [x] Si theevent es priv o cb global o priv, puede ser inline stringfn o str ref a priv o global o cb con o sin ref a global
											// 4. [x] En este caso evaluar data, que puede adoptar tres tipos de dato: String, function u object
											// 5. [x] Si es un obj, evaluar si los elementos del obj corresponde a func del tipo inlinestr, fnname, fnrefname o gcb o pcb
											// 6. [x] Si tienen referencia nula, evaluar sc para verificar si se tratan de métodos
											// 7. [x] Divide y vencerás. Se debe evaluar las tres posibilidades en un mismo tipo de dato para theevent.
											return typeof theevent === 'string'
											? /^function{1}\s*\(\)\s*\{(.*)\}\;?$/g.test(theevent) || /^\(\)\s*\=\>\s*\{(.*)\}\;?$/g.test(theevent)
												? function (cons) {
														return function (fn) {
															try {
																if (!fn(theevent)()) throw new Error('Becareful! A good function is spected.');
																return fn(theevent)();
															} catch (error) {
																return console.warn('Programmer Error: ' + error);
															}
														}(cons[cons][cons]('fx', 'return fx ? Function("return " + fx + ";" ) : undefined;'))
													}('constructor')
												: data && typeof data === 'function' && !sc // Sólo funciones o cb o métodos en forma de sc.method en data
													? (theevent in w && w.hasOwnProperty(theevent)) || data.name && data.name in w && w.hasOwnProperty(data.name)
														? theevent === data.name || data.name === ('bound ' + theevent)
															? data // 'Función global en data como cbrefname'
															: theevent === 'cb'
																? data // 'Anonymous Global Callback en data. Sólo funciona con theevent = cb.'
																: undefined
														: theevent === data.name || data.name === ('bound ' + theevent)
															? data // 'Función privada en data como cbname'
															: theevent === 'cb'
																? data // 'Anonymous Private Callback en data. Sólo funciona con theevent = cb.'
																: theevent === 'ownmethod'
																	? data // 'Anonymous Private Method en data. Sólo funciona con theevent = ownmethod.'
																	: undefined
													: !data && sc && typeof sc === 'object' // Sólo métodos en data
														? theevent in sc && typeof sc[theevent] === 'function'
															? sc[theevent] // 'Método a partir de theevent con solo sc'
															: undefined
														: data && typeof data === 'object'
															? !sc // Sólo funciones cb o cbref en objeto data
																? theevent in data && typeof data[theevent] === 'function'
																	? data.hasOwnProperty(theevent)
																		? data[theevent] // 'Función anónima o cb en objeto'
																		: data[theevent] // 'Método propio que usa data como scope.'
																	: undefined
																: theevent in sc && sc.hasOwnProperty(theevent) && typeof sc[theevent] === 'function' // Sólo métodos en objeto sc
																	? sc[theevent] // 'Método de theevent en objeto sc'
																	: theevent in data && data.hasOwnProperty(theevent) && typeof data[theevent] === 'string' // Sólo métodos en objeto data con referencia a sc
																		? sc[data[theevent]] // 'Métodos en data obj correspondientes a sc'
																		: theevent in w && w.hasOwnProperty(theevent)
																			? w[theevent] // 'Función global'
																			: undefined
															: theevent in w && w.hasOwnProperty(theevent)
																? w[theevent] // 'Función global'
																: undefined
											: undefined;
										}
									};
								},
								mdContent = function (mdstr, idlist) { return mi.md.run(mdstr.replace(/^[\s\t]*MD:[\s\n]?/i, ''), u, idlist); },
								simpleContentUnicode = function (contString) { return contString.length ? mi.asset.unicodeText(contString) : ''; },
								tsMatcher = {
									'parser': {
										parse_entirely: /.*/,
										parse_initial: /^([.#][\w\_\-]+)+(?=(\s?|\())/, // OLD /^(?:(\s*[#.][\#\.a-zA-Z\_\d\-]+))/,
										parse_parenthesess: /^(?:(\(([a-zA-Z\_\-]+="([^\[]+)"[\,\s]?)+\)))/,
										tag_test: function (ts, bi) { return mi.asset.alone(ts, bi); },
										parse_tag: function (ts, bi) { return this.tag_test(this.parse_entirely.test(ts) ? ts : null, bi); },
										parse_att: function (ts) {
											return ts.length ? function (me, ini, att) {
												att['initial'] = ini ? ts.match(me.parse_initial) || '' : '';
												att['initial'] = att['initial'].length ? att['initial'][0] : '';
												att['content'] = att['initial'].length ? ts.replace(att['initial'], '').replace(/[\/\\]\[/g, '__rocopdrom__').replace(/[\/\\]\[/g, '__roccdrom__') : ts; // Se aumenta comodín para /[/]
												att['initial'] = att['initial'].length ? att['initial'].replace(/\W+$/, '') : '';
												att['parens'] = me.parse_parenthesess.test(att['content']) ? att['content'].match(me.parse_parenthesess) || '' : '';
												att['parens'] = att['parens'].length ? att['parens'][0] : '';
												att['content'] = att['parens'].length ? att['content'].replace(att['parens'], '') : att['content'];
												att['parens'] = att['parens'].length ? att['parens'].trim().replace(/^\(|\)$/g, '').replace(/\"\,\s?/g, '__rocas__').replace(/\"/g, '').replace(/__rocopdrom__/g, '[').replace(/__roccdrom__/g, ']') || '' : '';
												return att;
											}(this, this.parse_initial.test(ts.trim()), {}) : {'initial': '', 'parens': '', 'content': ''};
										},
									},
									'attributes': function (att) {
										return att['attributes']
										? function (ini, par) {
											att['attributes']['initial'] = ini // Processing initial attributes: id & classes
											? function (i, cla, ini) {
													ini['id'] = i ? i.length // Id on initial attributes
													? function (y) {
														y = y.length ? function (u) {
															return u.length ? mi.$.filter(u, function (q) {return q;}) : [];
														}(mi.$.map(y, function (z) {return z.replace(/[.#]+.*/, '');})) : [];
														return y.length ? y[0].replace(/\W*$/g, '') : null;
													}(mi.$.filter(i, function (x) {return x && !/^\./.test(x);})) : null : null;
													ini['class'] = cla ? cla.length // Class string list on initial attributes
													? function (y) {
														y = y.length ? mi.$.map(y, function (z) {return z.replace(/[#.]+.*/, '');}) : [];
														y = y.length ? mi.$.unique(y) : []; return y.length ? y.join('  ') : null;
													}(mi.$.filter(cla, function (x) {return x && !/^\#/.test(x);})) : null : null;
													return ini;
												}(ini ? mi.$.filter(ini.split('#'), function (x) { return x && x.replace(/\.+.*/, '') !== '#' && x !== '#'}) : null, ini ? mi.$.filter(ini.split('.'), function (x) { return x; }) : null, {})
											: null;
											att['attributes']['initial'] = att['attributes']['initial'] ? !att['attributes']['initial']['id'] && !att['attributes']['initial']['class'] ? null : att['attributes']['initial'] : null;
	
											att['attributes']['parenthesess'] = par ? function (pa, i, p) {
												return pa ? pa.length
												? function (ii, ic) {
														return function (commonaux) { // 1. [x] Si id initial ya existe, aquí será nulo
															p['id'] = ii ? null : function (y){
																return y.length ? y[0].replace(/^id=+/, '').replace(/[^\w\-][\W+]*.*/g, '').replace(/\W*$/g, '') : null;
															}(mi.$.filter(pa, function (x) {return /^id=/i.test(x);}));
															// 2. [x] Si class initial ya existe, se revisa si existe valor y se eliminan todos los repetidos incluyendo los de initial
															p['class'] = function(pclass, nclass){
																nclass = pclass.length ? pclass[0].replace(/^class=+/, '').replace(/\,+/g, ' ').split(/\s+/) : [];
																return nclass.length
																? function (nc) {
																	return nc.length
																	? function (i) {
																		nc = nc.replace(/\-/g, '__rocdash__');
																		mi.$.map(i,
																			function (x) {var y = eval('/\\b' + x.replace(/\-/g, '__rocdash__') + '\\b/g'); nc = nc.replace(y, '')});
																		nc = nc.length ? mi.$.filter(nc.split(/\s+/g), function (z) {return z && !/\W/g.test(z)}) : '';
																		nc = nc.length ? mi.$.map(nc, function (z) {return z.replace(/\W*$/g, '').replace(/__rocdash__/g, '-')}) : '';
																		return nc.length ? nc.join('  ').trim() : '';
																	}(ic ? ic : []) : null;
																}(mi.$.unique(nclass).join(' ')) : null;
															}(mi.$.filter(pa, function (x) {return /^class=/i.test(x);}), '');
															// 3. [x] Si existen, coteja con el objeto de comunes de rAsset y pasan todos los que coinciden en formato: common:value.
															p['common'] = pa ? function (y) {
																y = y.length ? mi.$.filter(y, function (z) {return mi.asset.commons().hasOwnProperty(z.replace(/=+.*/g, '')) }) : [];
																y = y.length ? mi.$.unique(y) : [];
																y = y.length
																? mi.$.map(y, function (x) {
																	commonaux[x.replace(/=+.*/g, '')] = x.replace(/^(.*)=+/g, '').trim(); // To verify data on events
																	return { 'name': x.replace(/=+.*/g, ''), 'val': x.replace(/^(.*)=+/g, '').trim() };
																})
																: [];
																return y.length ? y : null;
															}(mi.$.filter(pa, function (x) {return !/^class=/.test(x) && !/^id=/.test(x) && !/^data=/.test(x)})) : null;
															// 4. [x] Si existen, se verifica que comience con data- y se devuelve un objeto con formato: data-*:value.
															p['custom'] = pa ? function (x) {
																x = mi.$.unique(x);
																x = x && x.length
																? mi.$.map(x, function (y) { return {
																		'name': y.split('=')[0].replace(/^data-[xml\-]+/i, 'data-').replace(/(xml\-?)+/i, '').toLowerCase().replace(/\W*$/g, ''),
																		'val': y.replace(/^data\-[a-zA-Z\d\-]+\=+/i, '')
																	}; })
																: [];
																return x.length ? x : null;
															}(mi.$.filter(pa, function (x) {return /^data\-[a-zA-Z\d\-]+\=+[\w\d\-]+/i.test(x)})) : null;
															// 5. [x] Si existe, se evalúa cada función, filtrar, y cotejar con obj onevents, quitar on y filtrar repetidos. e:f(x)
															p['events'] = pa ? function (y, z) {
																y = mi.$.isEmptyObject(z) ? y : y.length
																? mi.$.filter(y, function (x) {return !z.hasOwnProperty(x.replace(/=+.*/g, '').toLowerCase()); }) : [];
																y = y.length ? mi.$.unique(y) : [];
																y = y.length ? mi.$.map(y, function (x) { return /^\bon\b/.test(x) ? x : ('on' + x); }) : [];
																y = y.length ? mi.$.filter(y, function (x) { return evalEvents().eFunction(x.replace(/^(.*)=+/g, '')); }) : [];
																y = y.length
																? mi.$.map(y, function (x) {
																	return {'event': x.replace(/=+.*/g, ''), 'fn': x.replace(/^(.*)=+/g, ''), 'fns': x.replace(/^(.*)=+/g, '')};
																}) : [];
																y = y.length ? mi.$.filter(y, function (x) { x['fn'] = evalEvents().eEvent(x['fn']); return x['fn']; }) : [];
																return y.length ? y : null;
															}(mi.$.filter(pa, function (x) {return !/^class=/.test(x) && !/^id=/.test(x) && !/^data=/.test(x)}), commonaux) : null;
															return p;
														}({});
													}(i ? i['id'] ? i['id'] : null : null, i ? i['class'] ? i['class'].split('  ') : null : null)
												: null : null;
											}(par ? par.split('__rocas__') : null, att['attributes']['initial'], {}) : null;
											att['attributes']['parenthesess'] = att['attributes']['parenthesess'] ? !att['attributes']['parenthesess']['id'] && !att['attributes']['parenthesess']['class'] && !att['attributes']['parenthesess']['common'] && !att['attributes']['parenthesess']['custom'] && !att['attributes']['parenthesess']['events'] ? null : att['attributes']['parenthesess'] : null;
											delete att['attributes']['parens'];
											att['attributes'] = att['attributes']['initial'] || att['attributes']['parenthesess'] ? att['attributes'] : null;
											return att;
										}(att['attributes']['initial'] || null, att['attributes']['parens'] || null) : att;
									},
									'contents': function (cs, mdc, bi) {
										// 1. [x] Buscar todos los - y reemplazarlos por comodín.
										// 2. [x] Obtener contenido.
										// 3. [x] Buscar todos los #[ y reemplazar por →
										// 4. [x] Buscar todos los \/] y reemplazar por comodín de cierre corchete.
										// 5. [x] Buscar todos los ] y reemplazar por ←
										// 6. [x] Obtener un array con todos los elementos inline de #[] incluyendo txt y retornar un arreglo [0|1, posString, [{tag},...]]
										return function (contentbuilder, closetags) {
											contentbuilder = {
												valueClassificator: function (vcont) {
													return mi.$.map(vcont, function (z) {
														closetags = z.split(/\←/).length - 1;
														return /^\→.+[^\←]$/.test(z)
														? {'type': 1, 'value': z.replace(/\→/, ''), 'closetag': closetags, 'md': false} // Possible Parent node
														: /(^\→.+\←$)|(^\→|\←$)/gm.test(z)
															? {'type': 2, 'value': z.replace(/[\→\←]/g, ''), 'closetag': closetags, 'md': false} // Possible Single node
															: {
																	'type': 0,
																	'value': mdc ? z : z.search(/\S/) >= 0 ? mi.$.lTrim(z.replace(/_dashtiptorocjs_/g, '-').replace(/_squarebracetiptorocjs_/g, '/]'), 1) : z,
																	'closetag': closetags,
																	'md': mdc
																}; // Possible Plain text or with special chars
													});
												},
												sonsClassificator: function (x, ve) {
													x.split('←').length === 1 ? ve.push(x) : x.split('←').length === 2
														? function (o) {mi.$.map(o, function (q) {q ? ve.push(!q.search('→') ? q + '←' : q) : '';})}(x.split('←'))
														: x.split('←').length > 2
															? function (z) {
																	z[z.length - 1] === '' ? ve.push(z.join('←'))
																	: function (q) {mi.$.map(q, function (v) { ve.push(v); })}([z.join('←').replace(z[z.length - 1], ''), (z[z.length - 1] + '')])
																}(x.split('←'))
															: '';
													return ve;
												},
												prepareSons: function (vector, v, i) {
													mi.$.map(vector, function (x) { contentbuilder.sonsClassificator(x, v); });
													i = v.length ? mi.$.filter(v, function (x) { return /^[\s\t]*MD:[\s\n]?/i.test(x); }) : [];
													if (i.length) {
														v = mi.$.map(v, function (x) { return /^[\s\t]*MD:[\s\n]?/i.test(x) ? '→' + x + '←' : x; });
														v = mi.$.map(v, function (x) { return x.replace('→', '#[').replace(/←/g, ']'); });
														v = v.join('').replace(/\#\[/g, '#[→').replace(/\]/g, '←').split(/\#\[/g);
														return v;
													} else {
														return vector;
													}
												},
												runContent: function () {
													// [0: just simple txt, 1: inline element, pos strings: "010...", txt or possible elements array of objects: str or [...]]
													return mi.$.emptyString(cs)
													? null // No content
													: function (x) {
															if (x) { eHandler([mi.asset.UERROR, 'Wrong tagString!: ' + cs, 'warn']); } // Wrong inline tag format.
															return x;
														}(/(\#\[)$|(\#\[){2,}/g.test(cs))
													? null
													: cs.search(/\#\[/g) === -1
														? [0, '0', this.valueClassificator([cs])]
														: function (im, sons, vclassified) {
																sons = im.prepareSons(sons, [], []);
																mi.$.map(sons, function (x) { im.sonsClassificator(x, vclassified); });
																return [ 1,
																	mi.$.map(sons, function (z) {return mi.$.map(z.split('←'), function (u) {return u.search('→') === 0 ? '1' : u ? '0' : '';}).join(']');}).join('[').replace(/\[1\]/g, '1'),
																	im.valueClassificator(mi.$.filter(vclassified, function (g) {return g}))
																];
														}(this, cs.replace(/\#\[/g, '#[→').replace(/[\/\\]\]/g, '_squarebracetiptorocjs_').trim().replace(/\]/g, '←').split(/\#\[/g), []);
												}
											};
											return contentbuilder.runContent();
										}(null, 0);
									},
									'tsconstructor': function (ts, bi) {
										return that._e ? null : function (me, rocts) {
												rocts['tag'] = me.parser.parse_tag(ts, bi); // Tag: {alone, tagname}.
												if (!rocts['tag']) eHandler([mi.asset.UERROR, 'Wrong tagString!: ' + ts]); // throws new error.
												rocts['rest'] = me.parser.parse_att(ts.replace(rocts['tag']['tagreg'], '')); // att: {initial, parenthesess}.
												rocts['content'] = rocts['rest']['content'] ? rocts['tag']['alonetag'] ? null : me.contents(
													/^[\s\t]*MD:[\s\n]?/i.test(rocts['rest']['content'])
													? rocts['tag']['mdable'] ? rocts['rest']['content'] : '' : rocts['rest']['content'],
													/^[\s\t]*MD:[\s\n]?/i.test(rocts['rest']['content'], bi)) : null;
												return me.attributes({
													'tag': rocts['tag'],
													'attributes': rocts['rest']['initial'] || rocts['rest']['parens'] ? {'initial':rocts['rest']['initial'].replace(/\.{2,}/, '.').replace(/\#{2,}/, '#') || null, 'parens':rocts['rest']['parens'] || null} : null,
													'content': rocts['content'] ? rocts['content'] : null
													// IMPORTANTE: Para inlinetags se recomienda absolutamente escapar /[/] y en cualquier contenido |[ si se quiere #[.
												});
										}(this, {});
									},
									'run': function (ts, bi) { return mi.$.isString(ts) ? this.tsconstructor(ts, bi) : undefined; },
								},
								getSimpleTagStructure = function (vts) {
									// 1. [x] vts (vector tagString) array[0|1, '0101..', {type, value...}]
									// 2. [x] if vts is empty or with falsy value, return null
									// 3. [x] if vts[2]: 0 = simple txt, 1 = array of simple ts objects call getTagStructure for each element.
									return that._e ? null : !vts ? null : !vts['content']
									? vts : function (element_or_txt, vcontent) { // ContentType: 1|0, positionString: 101010, ElementsStructure: [{type, value},...]
											mi.$.map(vcontent, function (x) { x.value = element_or_txt ? x.type ? tsMatcher.run(x.value, 1) : x.value : x.value; });
											return vts; // simpleContent: plain textNode or unicode textNode or Markdown
										}(vts['content'][0], vts['content'][2]);
								},
								getClassList = function (vts) {
									// 1. [x] Obtain all ts structure classes into classlist Array
									return function (searchClasses) {
										searchClasses = function (x) {
											return function (mainelement, childelement, u) {
												if (mainelement) {
													if (mainelement.initial && mainelement.initial['class']) u.push(mainelement.initial['class']);
													if (mainelement.parenthesess && mainelement.parenthesess['class']) u.push(mainelement.parenthesess['class']);
												}
												if (childelement && childelement[2] && mi.$.isArray(childelement[2])) { // childelement[2] is the array of values
													mi.$.map(childelement[2], function (k) {
														if (k.type) { // Just tag node elements
															if (k.value.attributes && k.value.attributes['initial'] && k.value.attributes['initial']['class'])
																u.push(k.value.attributes['initial']['class']);
															if (k.value.attributes && k.value.attributes['parenthesess'] && k.value.attributes['parenthesess']['class'])
																u.push(k.value.attributes['parenthesess']['class']);
														}
													})
												}
												return u.length ? mi.$.unique(u.join(' ').split(/\s+/)) : [];
											}(x.attributes, x.content, [], [], []);
										};
										return searchClasses(vts);
									}(null);
								},
								earlyCheckIds = function (vts) {
									// 1. [x] Obtain all ts structure ids into idlist object {idlist, repeated, dom}
									// 2. [x] Dom: warn to prevent programmer, repeated: error msg, idlist to future and final tagobject.
									return function (searchIds, idChecker, msge, msgw) {
										searchIds = function (x) {
											return function (mainelement, childelement, u, v, z) {
												// 1. [x] Obtain into array all ids from actual tsStructure
												// 2. [x] Use unique Rocjs method to determine if repeated ids exist, then return t or f to generate the error.
												if (mainelement) {
													if (mainelement.initial && mainelement.initial['id']) u.push(mainelement.initial['id']);
													if (mainelement.parenthesess && mainelement.parenthesess['id']) u.push(mainelement.parenthesess['id']);
												}
												if (childelement && childelement[2] && mi.$.isArray(childelement[2])) { // childelement[2] is the array of values
													mi.$.map(childelement[2], function (k) {
														if (k.type) { // Just tag node elements
															if (k.value.attributes && k.value.attributes['initial'] && k.value.attributes['initial']['id'])
																v.push(k.value.attributes['initial']['id']);
															if (k.value.attributes && k.value.attributes['parenthesess'] && k.value.attributes['parenthesess']['id'])
																v.push(k.value.attributes['parenthesess']['id']);
														}
													})
												}
												if (u.length || v.length) {
													z = u.concat(v); // To capture all ids:
													u = z ? mi.$.unique(z) : [];
													v = z ? mi.$.unique(mi.$.repeated(z)) : [];
													z = u.concat(v);
													z = z.length ? mi.$.unique(z): [];
													z = z.length ? mi.$.filter(z, function (x) { return mi.$.elementByIdExists(x); }) : [];
												}
												return {'idlist': u.length ? u : null, 'repeated': v.length ? v.join(', ') : '', 'dom': z}
											}(x.attributes, x.content, [], [], []);
										};
										idChecker = searchIds(vts);
										if (idChecker['repeated']) {
											eHandler([mi.asset.UERROR, (msge + idChecker['repeated'] + '.')]);
											return {'idlist': null, 'repeated': 1, 'dom': null};
										}
										if (idChecker['dom'].length) eHandler([mi.asset.UERROR, (msgw + idChecker['dom'].join(', ') + '.'), 'warn']);
										return {'idlist': idChecker['idlist'], 'domlist': idChecker['dom'].length ? idChecker['dom'] : null, 'repeated': idChecker['repeated']};
									}(null, null, 'Your tagString has repeated ids!: ', 'Becareful, your tagString has ids that already exists in DOM!: ');
								},
								getSimpleTagString = function (v) {
									return v && mi.$.isObject(v) && !mi.$.isEmptyObject(v)
									? function (ta, at, co, atx, atp, commonaux, customaux, eventaux) {
											if (at) {
												if (at['initial']) {
													atx += at['initial']['id'] ? ('#' + at['initial']['id']) : '';
													atx += at['initial']['class'] ? ('.' + at['initial']['class'].replace(/\s+/g, '.')) : '';
												}
												if (at['parenthesess']) {
													if (at['parenthesess']['id']) atp.push(('id="' + at['parenthesess']['id'] + '"'));
													if (at['parenthesess']['class']) atp.push(('class="' + at['parenthesess']['class'].replace(/\s+/g, ' ') + '"'));
													if (at['parenthesess']['common']) {
														mi.$.map(at['parenthesess']['common'], function (x) { commonaux.push(x['name'] + '="' + x['val'] + '"'); });
														if (commonaux.length) atp.push(commonaux.join(', '));
													}
													if (at['parenthesess']['custom']) {
														mi.$.map(at['parenthesess']['custom'], function (x) { customaux.push(x['name'] + '="' + x['val'] + '"'); });
														if (customaux.length) atp.push(customaux.join(', '));
													}
													if (at['parenthesess']['events']) {
														mi.$.map(at['parenthesess']['events'], function (x) {
															if (x.hasOwnProperty('truevent') && x['truevent']) {
																eventaux.push(x['event'] + '="' + x['fns'] + '"');
															}
														});
														if (eventaux.length) atp.push(eventaux.join(', '));
													}
													atx += atp.length ? ('(' + atp.join(', ') + ')') : '';
												}
											}
											co = co
											? mi.$.isString(co)
												? co : mi.$.isArray(co)
													? ta['mdable'] && co[2][0]['md'] ? '[Markdown content/]' : co[2][0]['value']
													: '' : '';
											return ta['tagnode'] + atx + (ta['alonetag'] ? '' : (co ? /^\s/.test(co) ? co : (' ' + co) : ''));
										}(v['tag'], v['attributes'], v['content'], '', [], [], [], [])
									: '';
								},
								getVirtualElement = function (virtualFactory) {
									virtualFactory['createElement'] = function (e) { return d.createElement(e); };
									virtualFactory['setAttributes'] = function (e, att, classStr) {
										if (att) {
											if (att['initial']) {
												if (att['initial']['id']) e.setAttribute('id', att['initial']['id']);
												if (att['initial']['class']) classStr += att['initial']['class'];
											}
											if (att['parenthesess']) {
												if (att['parenthesess']['id']) e.setAttribute('id', att['parenthesess']['id']);
												if (att['parenthesess']['class']) classStr += classStr.length ? ('  ' + att['parenthesess']['class']) :att['parenthesess']['class'];
												if (att['parenthesess']['common']) {
													mi.$.map(att['parenthesess']['common'], function (x) { e.setAttribute(x['name'], x['val']); });
												}
												if (att['parenthesess']['custom']) {
													mi.$.map(att['parenthesess']['custom'], function (x) { e.setAttribute(x['name'], x['val']); });
												}
												if (att['parenthesess']['events']) {
													mi.$.map(att['parenthesess']['events'], function (x) {
														if (w.hasOwnProperty(x['event']) && x['event'] in e) { // Checks if event really exists in main scope && elemHTML
															e.addEventListener(x['event'].replace(/^on/, ''), x['fn']);
															x['truevent'] = 1;
														} else { // Discard event, it can not be supported by elemHtml && JS
															x['truevent'] = 0;
														}
													});
												}
											}
											if (classStr.length) e.setAttribute('class', classStr.trim());
										}
									};
									virtualFactory['setNewContent'] = function (e, con) {
										if (con) {
											if (mi.$.isTextNode(con)) { // Verifica si se trata de un txt o un elemento o un arreglo
												e.appendChild(con);
											} else if (mi.$.isString(con)) {
												e.innerHTML = con.replace(/\|\[/gm, '#[');
											}
										}
									};
									virtualFactory['setElmContent'] = function (e, con) {
										if (con && con.length) { // Verifica si se trata de un txt o un elemento o un arreglo
											mi.$.map(con, function (x) { e.appendChild((x)); });
										}
									};
									virtualFactory['createTextNode'] = function (txt) {
										return d.createTextNode(mi.$.sanitizeString(simpleContentUnicode(txt)).replace(/\/\]/g, ']').replace(/\|\[/g, '#['));
									};
									virtualFactory['getNewElement'] = function (e, at, co, newel, vmain) {
										newel = virtualFactory['createElement'](e);
										if (at) virtualFactory['setAttributes'](newel, at, '');
										co ? mi.$.isArray(co)
										? virtualFactory['setElmContent'](newel, co)
										: virtualFactory['setNewContent'](newel, co['md']
										? function (mdc) {
											vmain['classlist'] = vmain['classlist'] ? mdc['classlist'].length ? vmain['classlist'].concat(mdc['classlist']) : vmain['classlist'] : mdc['classlist'].length ? mdc['classlist'] : vmain['classlist'];
											vmain['idlist'] = vmain['idlist'] ? mdc['idlist'].length ? vmain['idlist'].concat(mdc['idlist']) : vmain['idlist'] : mdc['idlist'].length ? mdc['idlist'] : vmain['idlist'];
											return mdc['mdstring']
										}(mdContent(co['value'].replace(/_squarebracetiptorocjs_/g, ']'), vmain['idlist'] || []))
										: virtualFactory['createTextNode'](co['value'])) : null;
										return newel;
									};
									return {
										'getNewElement': virtualFactory['getNewElement'],
										'createElement': virtualFactory['createElement'],
										'createTextNode': virtualFactory['createTextNode']
									};
								}({}),
								getChildNodes = function (vchild, vmain) {
									return vchild['type']
									? getVirtualElement['getNewElement'](
											vchild['value']['tag']['tagnode'],
											vchild['value']['attributes'], vchild['value']['content'] ? vchild['value']['content'][2][0] : null, null, vmain)
									: getVirtualElement['createTextNode'](vchild['value']);
								},
								getMainNode = function (vmain) {
									return getVirtualElement['getNewElement'](
										vmain['tag']['tagnode'],
										vmain['attributes'],
										vmain['content'] ? vmain['content'][0] ? mi.$.map(vmain['content'][2], function (x) {return x['htmlvalue']}) : vmain['content'][2][0] : null, null, vmain
									)
								},
								getHTMLcontent = function () {
									// Función que obtiene el elemento preliminar con atributos y contenidos finales correctos (elimina inline tags de tags no parents)
									// Retorna el objeto preliminar o null
									return {
										'getRightInlineTagsInContent': function (ic) {
											// 1. [x] Apply the elements clasifier algorithm
											// 2. [x] Return a list of 1 or 0 or 11100010101... HTML elements content.
											// 2, es la posición de [1 que es el elemento padre
											// Cada cadena de texto de contenido, sólo debe ser convertida a su equivalente unicode al momento de volverse nodo
											// Es decir, el valor de la estructura debe conservarse tal cual en ts para poder rearmar ts.
											// Armar la lista de todos los hijos para objTag: children:{element, tagString, event} sin aceptar a los nodos hijos de alonefather
											// se debe revisar:
											// 1. Que sea un elemento padre
											// 2. Se quitan los [1] ambos corchetes y el primer 1, debe quedar una cadena con un mínimo de 1|0
											// 3. Se obtiene lenght
											// 4. Se cuenta el arreglo desde la posición hallada + 2 hasta el lenght
											// 5. Se inserta con appendChild todos los elementos al elemento padre, si éste no los acepta, se eliminan del arreglo / ts tb
											// 6. Se reemplaza el [10..] hallado por 1 hasta llegar a una cadena final tipo 010101111 sin ningún []
											// 7. Termina el ciclo y con la información que queda, ya se pueden armar: El ts final, el elemento final y la estructura final.
											return !ic
											? null
											: !mi.$.isArray(ic)
												? ic
												: function (rx, typerx, posStrx, conrx, childrx, allchild) {
													// rx: regex, typerx: 0|1 (txt|html), posStrx: 101011..., conrx: Content array
													// allchild[{'element': null, 'tagString': null, 'event': null},...]
														var
														appendAllChilds = function (crx, tsaux, allts) {
															if (crx.length) {
																// tsaux = [tagString con cierres preliminares]
																// A. [x] Obtener todos los ts de conrx en tsaux
																// 1. [x] Introducir todos ts de los elementos principales a un arreglo allts con sus opentags #[
																// 2. [x] Colocar se opentag y closetag a todos los elementos 2 del arreglo crx; doble closetag al último elemento.
																// 3. [x] pusArrayInArray en allts para todos los tsaux como en allchild
																allts = mi.$.map(conrx, function (x) { return !x['type'] ? x['value'] : ('#[' + x['tagString']) + (x['type'] === 1 ? '' : mi.$.repeatString(']', x['closetag'])); });
																mi.$.map(crx, function (x) { tsaux.push([mi.$.map(x['elements'],function (y) { return !y['type'] ? y['value'] : ('#[' + y['tagString']) + (y['type'] === 1 ? '' : mi.$.repeatString(']', y['closetag'])); }), x['position']]); });
																allchild = mi.$.map(conrx, function (x) { return x; });
																mi.$.map(crx, function (x) { allchild = mi.$.pushArrayInArray(allchild, x['elements'], x['position']); });
																mi.$.map(tsaux, function (x) { allts = mi.$.pushArrayInArray(allts, x[0], x[1]); });
																ic.push({'allchild': allchild, 'allts': allts});
															} else {
																allchild = mi.$.map(conrx, function (x) { return x; });
																allts = mi.$.map(conrx, function (x) { return !x['type'] ? x['value'] : ('#[' + x['tagString']) + (x['type'] === 1 ? '' : mi.$.repeatString(']', x['closetag'])); });
																ic.push({'allchild': allchild, 'allts': allts});
															}
														},
														reducerx = function () {
															// 1. [x] Obtener [101] subcadena a 101
															// 2. [x] Leer type de [1, en 1 es parentNode, leer parentNode.tag.alonetag
															// 3. [x] En f eliminar childNodes y reemplazar postring en 1 si type es t y 0 si f
															// 4. [x] En t append en htmlvalue los 01], armar ts, eliminarlos de conrx y pasarlos a allchild con ts puro e events
															// 5. [x] Si posStrx 10101... pasar allchild a ic y retornar ic
															return !rx.test(posStrx)
															? undefined
															: function (psx, psy, psz, i, j, k, childaux) {
																	psy = psx.replace(/^\[|\]$/g, '');
																	posStrx = posStrx.replace(psx, 1);
																	j = psz + 1;
																	k = (psy.length - 1) + j;
																	if (conrx[psz].type === 1 && !conrx[psz].value['tag']['alonetag']) {
																		for (i = j; i < k; i ++) conrx[psz]['htmlvalue'].appendChild(conrx[i]['htmlvalue']);
																		for (i = j; i < k; i ++) childaux.push(conrx[i]);
																		childrx.push({'elements': childaux, 'position': j});
																		for (i = j; i < k; i ++) conrx.splice(j, 1);
																	} else { // SI NO PUEDE TENER NODOS HIJO, SE ELIMINA LA LISTA DE HIJOS Y SE CONVIERTE AL ELEMENTO EN SOLITARIO (2)
																		for (i = j; i < k; i ++) conrx.splice(j, 1);
																		if (conrx[psz]['type']) conrx[psz]['type'] = 2;
																		if (conrx[psz]['type']) conrx[psz]['closetag'] = 1;
																	}	
																	reducerx();
																}(posStrx.substring(posStrx.search(rx), posStrx.search(/\]/) + 1), '', posStrx.substring(0, posStrx.search(/\[[01]+\]/)).replace(/\[/g, '').length, 0, 0, 0, []);
														};
														reducerx();
														appendAllChilds(childrx.reverse(), [], []);
													}(/\[[01]+\]/, ic[0], ic[1], ic[2], [], [], []);
										},
										'build': function (tsStructure) {
											return that._e ? null : !tsStructure
											? null
											: function (im, early) {
												if (!early['reppeated']) {
													tsStructure['idlist'] = early['idlist'];
													tsStructure['idDOM'] = early['domlist'];
													tsStructure['classlist'] = getClassList(tsStructure);
												}
												return early['repeated']
												? null
												: tsStructure['tag']['alonetag']
													? tsStructure
													: function () {
															// Posible error: ids repetidos en elemento principal y elementos hijos.
															// También se debe revisar possibleError y abortar la función si existe error, enviar false.
															// Returns null | txtElement | [HTML elements]
															// 1. [x] Use getAllIds to verify possible errors of duplicated ids
															// 2. [x] Use _getVirtualElement to obtain all final HTML elements beside its own TSs.
															// 3. [x] Use getRightInlineTagsInContent to obtain a correct inline tags to content i.e.: 111101010...
															return tsStructure['content']
															? tsStructure['content'][0]
																? mi.$.isArray(tsStructure['content'][2])
																	? function (vc) {
																			mi.$.map(vc, function (x) { x['htmlvalue'] = getChildNodes(x, tsStructure); });
																			mi.$.map(vc, function (x) { x['tagString'] = !x.type ? x.value : getSimpleTagString(x.value); });
																			im.getRightInlineTagsInContent(tsStructure['content']);
																			return tsStructure || null; // retorna null si existe algún error.
																		}(tsStructure['content'][2]) // possible more than 2 array elements
																	: function () { tsStructure['content'] = null; return tsStructure }() // Content has not array element
																: tsStructure // Just text content, plain, unicode or md
															: tsStructure; // No text content Element
														}();
											}(this, earlyCheckIds(tsStructure));
										}
									};
								}(),
								getFinalTagString = function (fts) {
									// Obtiene el tagString final del tag solicitado por el usuario a partir de un objeto que contiene la estructura final.
									// Armar La estructura principal de Tag con el elemento tag, ts, events y children.
									// 1. [x] Obtain final _tagStructure (objectTag).
									// 2. [x] Obtain final HTMLtag.
									// 3. [x] Obtain final _tagString.
									return that._e ? null : !fts
									? null
									: function (ftsx, ev) {
											// 1. [x] Obtain final tagString / Obtener la cadena tagString final.
											// 2. [x] Obtain final ObjectTag / Obtener el objectTag final.
											// 3. [x] Obtain final HTML tag  / Obtener el elemento final.
											// 4. [x] Return final tagstring / Retornar tagstring final.
											ftsx['tag'] = getMainNode(fts);
											ftsx['idDOM'] = fts['idDOM'];
											ev = fts['attributes'] ? fts['attributes']['parenthesess'] ? fts['attributes']['parenthesess']['events'] ? fts['attributes']['parenthesess']['events'] : []: []: [];
											ev = mi.$.isArray(ev) && ev.length ? mi.$.filter(ev, function (x) { return x['truevent']; }) : [];
											if (ev.length) {
												ftsx['events'] = {};
												mi.$.map(ev, function (x) { ftsx['events'][x['event']] = x['fns']; });
											}
											ftsx['idlist'] = fts['idlist'];
											ftsx['classlist'] = fts['classlist'];
											ftsx['pTagString'] = tagString;
											ftsx['tagString'] = getSimpleTagString({
												'tag': fts['tag'],
												'attributes': fts['attributes'],
												'content': fts['content'] ? fts['content'][0] ? fts['content'][3]['allts'].join('') : fts['content'] : null
											});
											// Final Main Tag data children structure: children{tag, tagString & events}
											if (!fts['tag']['alonetag']) {
												if (fts['content'] && fts['content'].length === 4) {
													if (mi.$.isObject(fts['content'][3])) {
														ftsx['children'] = [];
														ftsx['children'] = mi.$.map(
															fts['content'][3]['allchild'],
															function (x) {
																var stchild = {};
																stchild['element'] = x['htmlvalue'];
																stchild['tagstring'] = x['tagString'];
																if (x['type']) {
																	if (x['value']['attributes']) {
																		if (x['value']['attributes']['parenthesess']) {
																			if(x['value']['attributes']['parenthesess']['events']) {
																				stchild['events'] = {};
																				mi.$.map(x['value']['attributes']['parenthesess']['events'], function (y) {
																					stchild['events'][y['event']] = y['fns'];
																				});
																			}
																		}
																	}
																}
																return stchild;
															}
														)
													}
												}
											}
											return ftsx;
										}({}, []);
								},
								evalTagString = function () {
									// 1. [x] Get the tag structure from tagstring: {tag, attributes, content:[...]}.
									// 2. [x] Get the tag structure from simple tagstrings in content: content:{txt || {tag, attributes, content}}.
									// 3. [x] Get all HTML elements from content, including textNodes and clean children from elements that do not support child nodes.
									// 4. [x] Get final objectTag, final HTMLtag and final right tagString.
									return getFinalTagString(getHTMLcontent.build(getSimpleTagStructure(tsMatcher.run(mi.v.rv(tagString, rvars))))) || undefined;
								};
								return evalTagString();
							}
						};
						_taginstance = new _TagCore(tagString);
						return _taginstance._ts(mi.asset.checkTs(tagString));
					}(this, function () {}, null);
				},
				'api': function () {
					return function (me, _newtag, _fulltag, _PartialTag, _Tag, _tag, Tag) {
						// For creation of Single Virtual HTMLElements Objects.
						return function (tagString, data, sc, rvars, props) {
							_newtag = function (tag) {
								return tag ? function () {
									// Tag's final interface.
									Tag = function () {
										this.tagstrings = tag.tagstrings || null;
										this.events = tag.tagobject.events || null;
										this.idlist = tag.tagobject.idlist || null;
										this.idDOM = tag.tagobject.idDOM || null;
										this.classlist = tag.tagobject.classlist || null;
										this.tagchild = tag.tagobject.childtags || null;
										this.tag = tag.tagobject.tag || null;
									};
									Tag.prototype = {
										getTag: function () { return tag.getTag(); },
										setTag: function (where) { tag.setTag(where); return this; },
										delTag: function () { tag.delTag(); return this; },
										tagChild: function (index_or_id_child) { return tag.tagChild(index_or_id_child); },
										tagstringChild: function (index_child) { return tag.tagstringChild(index_child); }
									}
									return new Tag;
								}() : undefined;
							};
							_fulltag = function (e, p) {
								// Tag's api core. Separing functionality from interface.
								props = p || props;
								return !e
								? function () { // Error
										try {
											throw new me.e.e(me.asset.UERROR, me.asset.MERROR);
										} catch (error) {
											me.e.eD(error);
											return null;
										};
									}()
								: function (eltype, fo, fm) { // Interface
										eltype = function (e, child) {
											return me.$.isString(e) && e.length
											? me.asset.getElementByIDroc(e, me.$.map(child, function (x) { return x.element; }))
											: !isNaN(e) && e < child.length && e >= 0
												? child[parseInt(e, 10)].element : undefined;
										};
										fo['tag'] = e['tag'];
										fo['classlist'] = me.$.isArray(e['classlist']) ? e['classlist'].length ? e['classlist'] : null : null;
										fo['idlist'] = e['idlist'];
										if (e['idDOM']) fo['idDOM'] = e['idDOM'];
										if (e['events']) fo['events'] = e['events'];
										if (e['children']) fo['childtags'] = e['children'];

										fm['tagobject'] = fo;
										fm['tagstrings'] = {'tagstring': e['tagString'], 'mytagString': e['pTagString']};

										fm['getTag'] = function () { return fm['tagobject']['tag'] };

										fm['setTag'] = function (place) {
											if(!('settedInDOM' in fm['tagobject']['tag']) && !fm['tagobject']['tag'].hasOwnProperty('settedInDOM') && !me.asset.idinDOM(fm['tagobject']['idlist'], null)) {
												me.$.elementInsertChild(place || me.asset.wprops(props), fm['tagobject']['tag']);
												fm['tagobject']['tag']['settedInDOM'] = 1;
											}
										};

										fm['delTag'] = function () {
											if('settedInDOM' in fm['tagobject']['tag'] && fm['tagobject']['tag'].hasOwnProperty('settedInDOM')) {
												if (me.$.isElement(fm['tagobject']['tag'].parentElement)) {
													delete fm['tagobject']['tag']['settedInDOM'];
													fm['tagobject']['tag'].parentElement.removeChild(fm['tagobject']['tag']);
												}
											}
										};

										fm['tagChild'] = ('childtags' in fm['tagobject'] && fm['tagobject'].hasOwnProperty('childtags'))
										? function (y) {
												return y ? eltype(y, fm['tagobject']['childtags']) : fm['tagobject']['childtags'].length
												? me.$.map(fm['tagobject']['childtags'], function (x) { return x.element; }) : undefined;
											} : function () { return null; };

										fm['tagstringChild'] = ('childtags' in fm['tagobject'] && fm['tagobject'].hasOwnProperty('childtags'))
										? function (y) {
												return !isNaN(y) && y < fm['tagobject']['childtags'].length && y >= 0
												? fm['tagobject']['childtags'][y]['tagstring'] : fm['tagobject']['childtags'].length
													? function (ys, cs) {
														return ys ? me.$.emptyString(y) ? undefined : function () {
															cs = me.$.filter(fm['tagobject']['childtags'], function (x) { return x.id === y; });
															return cs.length ? cs['tagstring'] : undefined;
														}()
														: me.$.map(fm['tagobject']['childtags'], function (x) { return x['tagstring']; })
													}(me.$.isString(y, []))
													: undefined;
											} : function () { return null; };

										return fm;
									}(null, {}, {});
							};
							_PartialTag.prototype = {
								'createTag': function (createtag) {
									return function (tagString, fn, scope, rvars, props) { return createtag(tagString, fn, scope, rvars, props); };
								}(function (ts, dat, scp, rv, p) { return _newtag(_fulltag(me.core(ts, dat, scp, rv), p)); })
							};

							return me.asset.checkTs(tagString) ? _newtag(_fulltag(me.core(tagString, data, sc, rvars))) : new _PartialTag;
						};
					}(this, null, null, function () {}, null, null, null);
				},
				'_api': function () {
					// For Rocfor's internal use.
					return function (me) {
						return { 'api' : me.api() }
					}(this)
				}
			};
			_Block = {
				'e': Object.create(_Error),
				'$': Object.create(r.api()),
				'asset': Object.create(_Asset.api()),
				'tag': Object.create(_Tag._api()),
				'core': function (blockString, fn, scope, rvars, props) {
					return function (me, _BlockCore, _blockinstance) {
						_BlockCore = function (blockString) {
							this.blockString = me.asset.checkTs(blockString);
							this._e = 0;
							this._initialTags = me.$.cleanArray(this.blockString.split('\n'));
							this._stringTags = me.$.map(this._initialTags, function (x) { return x.trim(); });
						};
						_BlockCore.prototype = {
							eHandler: function (e) {
								try {
									throw new me.e.e(e[0], e[1], e[2]);
								} catch (error) {
									me.e.eD(error);
									if (error.type === 'error') { this._e = 1; }
								}
							},
							_vectorFinalPositionsMaker: function (auxList, tabs, i, j) {
								tabs = me.$.map(auxList, function (x) { return x; });
								j = auxList[1];
								tabs = me.$.map(tabs, function (x) { return x - j + 1; }, 1);
								auxList = me.$.map(auxList, function (x) { return x - j + 1; }, 1);
								auxList[0] = 0;
								tabs[0] = 0;
								if (auxList.length === 2) {
									auxList[1] = 1;
									tabs[1] = 1;
								} else if (auxList.length > 2) {
									auxList[1] = 1;
									tabs[1] = 1;
									for (; i < auxList.length; i++) {
										if (auxList[i] > auxList[i - 1]) auxList[i] = auxList[i] <= tabs[i - 1] ? auxList[i - 1] : auxList[i - 1] + 1;
										if (auxList[i] < 1) auxList[i] = 1;
									}
								}
								return auxList;
							},
							_vectorTabs: function (blocklist) {
								return me.$.isArray(blocklist) ? blocklist.length ? this._vectorFinalPositionsMaker(me.$.map(blocklist, function (x) { return x.search(/[\w\.\#\(]/); }), [], 2, 0)  : null : null;
							},
							_vectorPositions: function (pos) {
								return function (mi, i, droms, dromStart, dromEnd, buildDromedaries, theMissionSearchRebelsInDromedaries) {
									buildDromedaries = function (dromList, index, dromPos) {
										var i = 0, j = (dromList.length - 1);
										for (i = index; i < dromList.length; i++) {
											if (dromList[i] > dromPos) {
												j = i;
											} else {
												j = (i - 1);
												break;
											}
										}
										return j;
									},
									theMissionSearchRebelsInDromedaries = function (dromString) {
										if (typeof dromString !== 'string') return mi.eHandler([me.asset.UERROR, 'Wrong blockString: ' + typeof dromString]);
										return dromString.replace(eval(me.asset._secondcast.reg.weakDrom + 'gi'), me.asset._secondcast.num.rebel);
									};
									if (me.$.isArray(pos)) {
										if (pos.length) {
											for (i in pos) droms.push(dromStart);
											for (i = 1; i < pos.length; i++) {
												if (pos[i] <= pos[i - 1]) droms[i - 1] += dromEnd;
												else droms[buildDromedaries(pos, i, pos[i - 1])] += dromEnd;
											}
											droms[pos.length - 1] += dromEnd;
										}
									}
									return theMissionSearchRebelsInDromedaries(droms.join('')).replace(/\[/g, '[1');
								}(this, 0, [], '[', ']', null, null);
							},
							_generateBlock: function (poststr, childblock) {
								return function reducerx (rx, postrx, elemx) {
									// 1. [x] Obtener [101] subcadena a 101
									// 2. [x] Leer type de [1, en 1 es parentNode, leer parentNode.tag.alonetag
									// 3. [x] En f eliminar childNodes y reemplazar postring en 1 si type es t y 0 si f
									// 4. [x] En t append en htmlvalue todos los 01], armar ts, eliminarlos de conrx y pasarlos a allchild con ts puro y events
									// 5. [x] Si posStrx 10101... pasar allchild a ic y retornar ic
									return !rx.test(postrx)
									? elemx[0]
									: function (psx, psy, psz, i, j, k) {
											if (rx.test(postrx)) {
												psy = psx.replace(/^\[|\]$/g, '');
												postrx = postrx.replace(psx, 1);
												j = psz + 1;
												k = (psy.length - 1) + j;
													for (i = j; i < k; i ++) elemx[psz].appendChild(elemx[i]);
													for (i = j; i < k; i ++) elemx.splice(j, 1);
											}
											return !rx.test(postrx)
											? elemx[0]
											: reducerx(/\[[01]+\]/, postrx, elemx);
										}(postrx.substring(postrx.search(rx), postrx.search(/\]/) + 1), '', postrx.substring(0, postrx.search(/\[[01]+\]/)).replace(/\[/g, '').length, 0, 0, 0);
								}(/\[[01]+\]/, poststr, childblock);
							},
							_generateBlockString: function (tabs, tagstrings) {
								return function setabs (i) {
									if (i < tagstrings.length) tagstrings[i] = me.$.repeatString('\t', tabs[i]) + tagstrings[i];
									return i === tagstrings.length ? tagstrings.join('\n') : setabs(i + 1);
								}(1);
							},
							_blockList: function (blockA, blockB) {
								return this._e ? null : !blockB.length
								? null
								: function (btags, vtabs, k) {
										k = me.$.map(blockB, function (x) { return {'value': {'tag': me.asset.alone(x)}, 'type': 2}; });
										for(var i = 0; i < k.length; i++) k[i]['ts'] = blockA[i].trim()
										for(var j = 0; j < k.length; j++) k[j]['tab'] = vtabs[j]
										return [1, btags, k];
									}(this._vectorPositions(this._vectorTabs(blockA)), this._vectorTabs(blockA), []);
							},
							_parents: function (blocklist) {
								return this._e ? null : blocklist ? function fbl (i, alone, l, j, k) {
									if (i < blocklist[2].length) {
										alone = blocklist[2][i]['value']['tag']['alonetag'];
										if (alone) {
											l = i, j = i + 1, k = blocklist[2].length;
											for (; j < k; j++) {
												if (blocklist[2][j]['tab'] <= blocklist[2][i]['tab']) break;
												else l = l + 1;
											}
											j = i + 1;
											blocklist[2] = me.$.filter(blocklist[2], function (x) { return x['tab'] <= blocklist[2][i]['tab']; }, i, l);
										}
									}
									return i >= blocklist[2].length ? blocklist : fbl(i + 1, null, null, null, null);
								}(0, null, null, null, null) : null;
							},
							_newparents: function (vectorblock) {
								return this._e ? null : vectorblock ? vectorblock.length ? function (mi, y, z, k, l) {
									vectorblock[1] = mi._vectorPositions(mi._vectorFinalPositionsMaker(y, [], 2, 0));
									z = me.$.map(z, function (u) { return me.tag.api(u, fn, scope, rvars, props); });
									me.$.map(z, function (x) { if (!x) mi.eHandler([me.asset.UERROR, 'Error! Please write correct blockStrings!']); });
									return mi._e ? null : function (vaux, classes, iddom) {
										vaux = me.$.filter(z, function (u) { return u['classlist']; });
										me.$.map(vaux, function (v) { classes = classes.concat(v['classlist']); });
										classes = classes.length ? me.$.unique(classes) : [];
										vaux = me.$.filter(z, function (u) { return u['idDOM']; });
										me.$.map(vaux, function (v) { iddom = iddom.concat(v['idDOM']); });
										iddom = iddom.length ? me.$.unique(iddom) : [];
										k = me.$.filter(z, function (u) { return u['idlist']; });
										k = me.$.map(k, function (v) { l = l.concat(v['idlist']); });
										k = me.$.repeated(l);
										k = k.length ? me.$.unique(k) : null;
										k = !k ? null : k.length ? k.join(', ') : null;
										return {'tabs':y, 'blockchild': z, 'postring': vectorblock[1], 'idlist': l, 'repeatedids': k, 'classlist': classes, 'idDOM':iddom};
									}([], [], []);
								}(this,me.$.map(vectorblock[2], function(x){return x['tab'];}), me.$.map(vectorblock[2], function(u){return u['ts'];}), [], [])
								: null : null;
							},
							_finalBlockStructure: function (finalblock) {
								// 1. [x] If repeated ids, return null and show error
								// 2. [x] Generate blockobject{block, idlist, events, childblock}				|	_generateBlock
								// 3. [x] Generate blockstrings: {myblockstring, blockstring}						|	_generateBlockString
								// 4. [x] Send all data in object {objectblock, blockstrings}						|	this._finalBlock
								return this._e ? null : finalblock ? function (mi, rids, msg) {
									return rids ? mi.eHandler([me.asset.UERROR, (msg + rids + '.')]) : !finalblock['blockchild'].length ? null
									: function (bo) {
										// Appends all child Elements into main Block Element.
										mi._generateBlock(
											finalblock['postring'],
											me.$.map(finalblock['blockchild'], function (x) { return x.tag; })
										);
										bo['blockstrings'] = {
											'blockstring': mi._generateBlockString(finalblock['tabs'], me.$.map(finalblock['blockchild'], function (x) { return x['tagstrings']['tagstring']; })),
											'myblockString': blockString
										};
										bo['blockobject'] = finalblock['blockchild'].shift();
										bo['idlist'] = me.$.map(finalblock['idlist'], function (x) { return x; });
										bo['idDOM'] = me.$.map(finalblock['idDOM'], function (x) { return x; });
										bo['classlist'] = me.$.map(finalblock['classlist'], function (x) { return x; });
										if (finalblock['blockchild'].length) {
											bo['blockchild'] = me.$.map(finalblock['blockchild'], function (x) { return x; });
										}
										return bo;
									}({});
								}(this, finalblock['repeatedids'], 'Your blockString has repeated ids!: ') : null;
							},
							_bs: function () {
								// TAREAS:
								// 0. [x] Obtener sólo elementos correctos con algoritmo local que use alonetag, parentnodes con nodos hijos antes de llamar a Tag
								// 1. [x] Identificar todos los alonetag
								// 2. [x] Identificar todos los parentnode mediante un algoritmo local que maneje postring
								// 3. [x] Construir para cada elemento, un objeto: tags{type, htmlvalue, ts, value{tag{alonetag}}}
								// 4. [x] Con esa info construir un arreglo: [1, '10101', [{tags}, {tags},...]] y obtener el htmlblock final
								// 5. [x] Finalmente armar un ObjectBlock con: {block, events, blockstring, [blockchildren{{cada objeto de tag}, ...}]}

								// 6. [x] Rearmar la cadena con los tabs nuevos
								// 7. [x] Crear otra postring y el objeto block para enviar a Tag
								// 8. [x] Crear el Block.
								// 9. [x] Identificar ids repetidos.
								// 10.[x] Crear la interface y Terminar Módulo.
								return this._finalBlockStructure(this._newparents(this._parents(this._blockList(this._initialTags, this._stringTags)))) || undefined;
							}
						};
						_blockinstance = new _BlockCore(blockString);
						return _blockinstance._bs();
					}(this, null, null);
				},
				'api': function () {
					return function (me, _newblock, _fullblock, _PartialBlock, Block) {
						// For creation of HTMLElement Block.
						return function (blockString, data, sc, rvars, props) {
							_newblock = function (block) {
								return block ? function () {
									// Block's finla interface.
									Block = function () {
										this.classlist = block.classlist;
										this.idDOM = block.idDOM || null;
										this.idlist = block.idlist || null;
										this.block = block.block || null;
										this.events = block.events || null;
										this.blockmain = block.blockmain;
										this.blockchild = block.blockchild;
										this.blockstrings = block.blockstrings;
									};
									Block.prototype = {
										delBlock: function () { block.delBlock(); return this; },
										getBlock: function () { return block.getBlock(); },
										setBlock: function (where) { block.setBlock(where); return this; },
										getChild: function (index_or_id_child) { return block.getChild(index_or_id_child); },
										blockstringChild: function (index_or_id_child) { return block.blockstringChild(index_or_id_child); },
										innerHTML: function (htmltxt, index_or_id_child) { block.innerHTML(htmltxt, index_or_id_child); return this; },
										textContent: function (txt, index_or_id_child) { block.textContent(txt, index_or_id_child); return this; }
									};
									return new Block;
								}() : undefined;
							};
							_fullblock = function (blockstructure, p) {
								// Separing functionality from interface.
								props = p || props;
								return !blockstructure
								? function () { // Error
										try {
											throw new me.e.e(me.asset.UERROR, me.asset.MERROR);
										} catch (error) {
											me.e.eD(error);
											return null;
										};
									}()
								: function (eltype, iblock) { // Interface
										try {
											if (!blockstructure) throw new me.e.e(me.asset.UERROR, 'Error! Missing correct blockString!');
											iblock['classlist'] = blockstructure['classlist'] ? blockstructure['classlist'].length ? blockstructure['classlist'] :null:null;
											iblock['idlist'] = blockstructure['idlist'] ? blockstructure['idlist'].length ? blockstructure['idlist'] : null : null;
											iblock['idDOM'] = blockstructure['idDOM'].length ? blockstructure['idDOM'] : null;
											iblock['blockstrings'] = blockstructure['blockstrings'];
											iblock['block'] = blockstructure['blockobject']['tag'];
											iblock['events'] = blockstructure['blockobject']['events'];
											iblock['blockmain'] = {
												'classlist': blockstructure['blockobject']['classlist'],
												'idlist': blockstructure['blockobject']['idlist'],
												'idDOM': blockstructure['blockobject']['idDOM'],
												'tagstrings': blockstructure['blockobject']['tagstrings'],
												'child': blockstructure['blockobject']['tagchild']
											},
											iblock['blockchild'] = blockstructure['blockchild'] ? me.$.map(blockstructure['blockchild'], function (x) {
												return {
													'tag': x['tag'],
													'events': x['events'],
													'classlist': x['classlist'],
													'idlist': x['idlist'],
													'idDOM': x['idDOM'],
													'tagstrings': x['tagstrings'],
													'child': x['tagchild']
												};
											}) : null;
											iblock['blockallchild'] = blockstructure['blockchild']
											? blockstructure['blockchild'].length
												? function (all) {
													return function (bch) {
														me.$.map(bch, function (x) {
															all.push({'tag': x['tag'], 'tagstring': x['tagstrings']['tagstring']});
															x['tagchild'] ? x['tagchild'].length
															? me.$.map(x['tagchild'], function (z) {all.push({'tag': z['element'], 'tagstring': z['tagstring']}); })
															: null : null;
														});
														return all;
													}(blockstructure['blockchild']);
												}([]) : null : null;

											iblock['getBlock'] = function () { return iblock['block']; };
											iblock['setBlock'] = function (place) {
												if (!('settedInDOM' in iblock['block']) && !iblock['block'].hasOwnProperty('settedInDOM') && !me.asset.idinDOM(iblock['idlist'], null)) {
													me.$.elementInsertChild(place || props, iblock['block']);
													iblock['block']['settedInDOM'] = 1;
												}
											};
											iblock['delBlock'] = function () {
												if('settedInDOM' in iblock['block'] && iblock['block'].hasOwnProperty('settedInDOM')) {
													if (me.$.isElement(iblock['block'].parentElement)) {
														delete iblock['block']['settedInDOM'];
														iblock['block'].parentElement.removeChild(iblock['block']);
													}
												}
											};
											eltype = function (e, elems) {
												return me.$.isString(e, elems) && e.length
												? me.asset.getElementByIDroc(e, elems)
												: !isNaN(e) && e < elems.length && e >= 0
													? elems[parseInt(e, 10)] : null;
											};
											iblock['textContent'] = function (txt, elem) {
												(me.$.isString(txt) || typeof txt === 'number')
												? function (tx, es) {
													if ((!es && !elem) || (es && !elem)) {
														iblock['block'].textContent = tx;
													} else if (es && elem) {
														elem = me.$.isString(elem)
														? eltype(elem, me.$.map(iblock['blockallchild'], function (x) { return x.tag; }))
														: eltype(elem, me.$.map(iblock['blockchild'], function (x) { return x.tag; }));
														if (elem) elem.textContent = tx;
														else throw new me.e.e(me.asset.UERROR, 'Stop! Do not exist element: ' + String(elem), 'warn');
													} else {
														throw new me.e.e(me.asset.UERROR, 'Alert! Block do not have children.', 'warn');
													}
												}(me.$.sanitizeString(me.asset.unicodeText(String(txt))), iblock['blockchild']) : null;
											};
											iblock['innerHTML'] = function (txt, elem) {
												(me.$.isString(txt) || typeof txt === 'number')
												? function (tx, es) {
													if ((!es && !elem) || (es && !elem)) {
														iblock['block'].innerHTML = tx;
													} else if (es && elem) {
														elem = me.$.isString(elem)
														? eltype(elem, me.$.map(iblock['blockallchild'], function (x) { return x.tag; }))
														: eltype(elem, me.$.map(iblock['blockchild'], function (x) { return x.tag; }));
														if (elem) elem.innerHTML = tx;
														else throw new me.e.e(me.asset.UERROR, 'Stop! Do not exist element: ' + String(elem), 'warn');
													} else {
														throw new me.e.e(me.asset.UERROR, 'Alert! Block do not have children.', 'warn');
													}
												}(me.$.sanitizeString(me.asset.unicodeText(String(txt))), iblock['blockchild']) : null;
											};

											iblock['blockstringChild'] = iblock['blockchild'] ? function (y) {
												return typeof y === 'number' && y < iblock['blockchild'].length && y >= 0
												? iblock['blockchild'][parseInt(y, 10)]['tagstring']
												: me.$.isString(y)
													? function () {
														return iblock['blockchild'].length
														? function (bac, ch) {
																ch = me.$.filter(bac, function (x) { return x.tag.id === y; });
																return ch.length ? ch.tagstring : undefined;
															}(iblock['blockallchild'], []) : undefined;
														}() : iblock['blockchild'].length ? me.$.map(iblock['blockchild'], function (x) { return x['tagstring']; }) : undefined;
											} : function () { return null; };

											iblock['getChild'] = iblock['blockchild'] ? function (y) {
												return typeof y === 'number' && y < iblock['blockchild'].length && y >= 0
												? iblock['blockchild'][parseInt(y, 10)]['tag']
												: me.$.isString(y)
													? function () {
														return iblock['blockchild'].length
														? function (bac, ch) {
																ch = me.$.emptyString(y) ? undefined : me.$.filter(bac, function (x) { return x.tag.id === y; });
																return ch.length ? ch[0].tag : undefined;
															}(iblock['blockallchild'], []) : undefined;
														}() : iblock['blockchild'].length ? me.$.map(iblock['blockchild'], function (x) { return x['tag']; }) : undefined;
											} : function () { return null; };

											return iblock;
										} catch (error) {
											me.e.eD(error); return null;
										}
									}(null, {});
							};
							_PartialBlock.prototype = {
								'createBlock': function (createblock) {
									return function (blockString, fn, scope, rvars, props) { return createblock(blockString, fn, scope, rvars, props); };
								}(function (bs, dat, scp, rv, p) { return _newblock(_fullblock(me.core(bs, dat, scp, rv, p), p)); })
							};

							return me.asset.checkTs(blockString) ? _newblock(_fullblock(me.core(blockString, data, sc, rvars, props))) : new _PartialBlock;
						};
					}(this, null, null, function () {}, null);
				},
				'_api': function () {
					return function (me) {
						// Rocfor's internal use.
						return { 'api' : me.api() }
					}(this)
				}
			};
			_Spa = {
				'e': Object.create(_Error),
				'$': Object.create(r.api()),
				'a': Object.create(_Asset.api()),
				'ajax': Object.create(_Ajax.api()),
				'core': function () {
					return function (me, _Spacore, ROOT, HASH, TPLRGX, EXT, INDEX, HOME, RT, TP, CT, CB) {
						// TAREAS:
						// 1. [x] CONTROLAR DEFAULT EN SETROUTE: Si no existe default, SPA espera root, si no existe: error.
						// 2. [x] ROUTER DEBE LEER: controller:{}|f(x), {Clase, Método y [parámetros]}, luego entregar un objeto con ruta actual y estos valores
						// 3. [x] ROUTER DEBE PERMITIR LA REDIRECCIÓN AL CARGAR LA PAGINA: onhashchange y load de w
						// 4. [x] ROUTER DEBE DETECTAR SI LA RUTA DE LA BARRA DE DIRECCIONES ES UN ROUTE PATTERN: Así permite trabajar con referencias # para link
						// 5. [x] EL CONTENEDOR DE ROUTER DEBE SOPORTAR NODOS HIJO: Medinate rAssets
						_Spacore.prototype = {
							'_container': null,				// SPA Container, hold template to each route in DOM.
							'_routes': {},						// Internal routes object list.
							'_controllers': {},				// Internal controllers object list.
							'_currentController': {},	// Current controller to send at programmer via interface.
							'_currentRoute': {},			// Actual route used by SPA. It is a dynamic property.
							'_defaultRoute': ROOT,		// By default home page of SPA will be /.
							'_routed': false,					// Boolena to know if SPA has correctly all routes for the app.
							'_xhr': me.ajax,					// Obious: A new Ajax object.
							'_preloader': null,
							'_e': 0,
							'_eSpa': function (q, e) { // SPA error controller method.
								try {
									if (q) throw new me.e.e(e[0], e[1], e[2]);
									return 1;
								} catch (error) {
									me.e.eD(error);
									if (error.type !== 'warn') this._e = 1;
								}
							},
							'_getRouteParams': function (rp, pa) {
								rp = me.$.filter(rp, function (x) { return x; });
								pa[RT] = rp[0] || this._defaultRoute;
								pa[CT] = this._controllers[rp[0] ? rp.shift() : this._defaultRoute];
								pa['param'] = {'route': pa[RT], 'class': rp[0] ? rp.shift() : null, 'method': rp[1] ? rp.shift() : null, 'params': rp.length > 0 ? rp: null};
								return pa;
							},
							'_getController': function () {
								return this._routed ? this._currentController : this._eSpa(1, [me.a.UERROR, 'SPA: Error! use setRoute method first.']);
							},
							'_setController': function (name, ctrl){
								if (!this._routed) return this._eSpa(0, [me.a.UERROR, 'SPA: Error! use setRoute method first.']);
								if (name in this._controllers && this._controllers.hasOwnProperty(name)) {
									if (typeof ctrl === 'function' || !me.$.isEmptyObject(ctrl)) { this._controllers[name] = ctrl; }
									else return this._eSpa(1, [me.a.UERROR, 'SPA: Wainting for an object or function controller, not: \"' + typeof ctrl + '\"']);
								} else {
									this._eSpa(1, ['Warning', 'SPA: Becareful! \"' + (me.$.isString(name) ? name : typeof name) + '\" controller doesn\'t exists in your routes.', 'warn']);
								}
								return true;
							},
							'_setControllers': function (cts){
								return this._routed // routes: {'/': {tpl, ctrl, cb}, ...} // controllers: {'home': {}, 'about':f(x)...}
								? me.$.isEmptyObject(cts) ? this._eSpa(1, [me.a.UERROR, 'SPA: Waiting object, not: ' + typeof cts + '.']) : function (mi, i) {
										for (i in cts) {
											if (i in mi._controllers && mi._controllers.hasOwnProperty(i)) {
												if (typeof cts[i] === 'function' || !me.$.isEmptyObject(cts[i])) { mi._controllers[i] = cts[i]; }
												else return mi._eSpa(1, [me.a.UERROR, 'SPA: Filled object or function controller please, not: \"' + typeof cts[i] + '\"']);
											} else {
												mi._eSpa(1, ['Warning', 'SPA: Becareful! \"' + i + '\" controller doesn\'t exists in your routes.', 'warn']);
											}
										}
										return mi;
									}(this, null)
								: this._eSpa(1, [me.a.UERROR, 'SPA: Error! use setRoute method first.']);
							},
							'_changeContainer': function (container) {
								if (!this._routed) return this._eSpa(1, [me.a.UERROR, 'SPA: Error! use setRoute method first.']);
								if (me.$.elementEval(container)) { return this._container = me.$.elementEval(container); }
								else { return this._eSpa(1, [me.a.UERROR, 'SPA::setContainer: Error! invalid container element: ' + typeof container]); }
							},
							'_ajaxViewer': function (tpl, aparams) { // Pendiente: info a backnd
								return function (mi, fn, queryajax, bknd) { // Render content type text from server or front in app container view.
									fn = function(x){ mi._container.innerHTML = x; };
									if (queryajax || bknd) { // tpl is an html server view template or some class/methd/params petition, so, let load it.
										// Analize if tpl string have a [TOBKND]: data, then send via POST. src: tpl.php, asp, py... if node.js, then do not necessary Ajax
										bknd
										? mi._xhr.load({'data': {'method': 'POST', 'source': tpl.replace(/^\[TOBKND\]\:/, ''), 'datatype': 'text', 'data': 'params=' + JSON.stringify(aparams)}, 'onready': fn, 'onpreload': mi._preloader})
										: mi._xhr.load({'data': {'method': 'GET', 'source': tpl}, 'onready': fn, 'onpreload': mi._preloader});
									} else { fn(tpl); } // tpl is a string content, maby plain text or html text, so just proced.
									return queryajax || bknd;
								}(this, null, TPLRGX.test(tpl), /^\[TOBKND\]\:/.test(tpl));
							},
							'_localViewer': function (tpl) {
								if (me.$.isElement(tpl)) { // Render an HTML object type into app container view.
									this._container.innerHTML = null;
									this._container.appendChild(tpl);
								}
							},
							'_routerController': function (ld) {
								return function (mi, routehash, ajaxloaded) {
									return !me.$.emptyString(routehash) && !/\#\/.*$/.test(routehash) // Cleanning href string and reloading page.
									? function () { if (/\#.*$/.test(routehash) && ld === 'load') { w.location.href = w.location.href.replace(/\#.*$/, ''); } }()
									: me.$.emptyString(routehash) || /^\#\/(([\w]+\-*\/?)+\w+$)?/g.test(routehash)
										? function (nroutehash, routing, DEFAULT) {
											routing = function (route_tpl, rh) {
												if (me.$.isString(route_tpl)) { ajaxloaded = mi._ajaxViewer(route_tpl, rh); } // TP in currentroute is str.
												else { mi._localViewer(route_tpl); } // TP in currentroute is HTMLElement.
											};
											nroutehash = nroutehash ? mi._getRouteParams(nroutehash.split('/'), {}) : mi._getRouteParams(mi._defaultRoute.split('/'), {});
											mi._currentRoute = mi._routes[nroutehash[RT]];
											if (mi._currentRoute && mi._currentRoute[TP] && !/^404(-url)?$/i.test(nroutehash[RT])) { // Check template's origin's: from function, object, HTML str or tpl str source.
												routing(mi._currentRoute[TP], nroutehash['param']);
											} else {
												mi._currentRoute && mi._currentRoute[TP] && /^404(-url)?$/i.test(nroutehash[RT]) // If User type a fake path or 404 url, then send him to defalut view or if 404 view exists, render it.
												? function () { w.location['hash'] = DEFAULT; }()
												: mi._routes['404'] && mi._routes['404'][TP]
													? function () { routing(mi._routes['404'][TP], nroutehash['param']); }()
													: function (fhf) { w.location[fhf ? 'href' : 'hash'] = fhf ? mi._routes['404-url'][TP] : DEFAULT; }(mi._routes['404-url'] && mi._routes['404-url'][TP]);
												return;
											}
											mi._currentController = {};
											mi._currentController[mi._currentRoute[CT] || CT] = mi._controllers[mi._currentRoute[CT]];
											mi._currentController['param'] = nroutehash['param']; // Params extracted from routepath string as: Class/method/[params].
											if (mi._currentRoute && mi._currentRoute[CB]) { ajaxloaded ? setTimeout(mi._currentRoute[CB], 500) : mi._currentRoute[CB](); }
										}(routehash.substring(1) || mi._defaultRoute, null, (HASH + mi._defaultRoute) || (HASH + ROOT)) : null;
								}(this, w.location.hash, false);
							},
							'_router': function (){
								return this._e ? null : function (mi) { // if routes are setted, now let's set homepage or set hashchange method to window object.
									mi._routed = true;
									w.addEventListener('load', function () { mi._routerController('load'); }, false);
									w.addEventListener('hashchange', function () { mi._routerController(); }, false);
									return mi;
								}(this);
							},
							'_setRoute': function (rs, base, defroute) {
								// 1. [x] Verify rutes: pures or / with ^\/{1}$ & ^([\w]+\-*\/?)+\w+$ any route. Complete: ^([\w]+\-*\/?)+\w+$|^\/{1}$
								this._container = me.$.elementEval(base) || d.body; // If base is not a DOM element, then base will be body by default.
								this._container = me.a.trimtag(this._container.tagName).alonetag ? d.body : this._container;
								return function (mi, rkey) {
									me.$.map(rkey, function (x) {
										if (!/^([\w]+\-*\/?)+\w+$|^\/{1}$/g.test(x)) mi._eSpa(1, [me.a.UERROR, 'SPA: Error! Wrong routes.']);
									});
									mi._e ? null : function (i, j, k) {
											for (i in rs) {
												if (rs.hasOwnProperty(i)) {
													mi._routes[i] = {};
													for (j in rs[i]) {
														if (j.toLowerCase() === TP) { // Programmer defined his template as string or HTMLElement
															mi._routes[i][TP] = rs[i][j] ? me.$.isString(rs[i][j]) ? TPLRGX.test(rs[i][j]) ? (ROOT + rs[i][j].replace(/^\/+/, '')) : rs[i][j].length ? rs[i][j] : null : me.$.isElement(rs[i][j]) ? rs[i][j] : null : me.$.isString(rs[i][j]) ? rs[i][j].length ? rs[i][j] : null : null;
														} else { // Programmer ommited tpl so, it's implicit data, will take as tpl name router name, if route: / then /index.html
															if (!rs[i].hasOwnProperty(TP)) mi._routes[i][TP] = mi._routes[i] === ROOT ? INDEX : (ROOT + i + EXT);
														}
														if (j.toLowerCase() === CT) { // Programmer defined his own controller as string or null
															mi._routes[i][CT] = rs[i][j] ? (me.$.isString(rs[i][j]) && /^[\w\-]+$/.test(rs[i][j])) ? rs[i][j] : null : null;
														} else { // Programmer do not defined his own ctrl, so it's implicit data, controller will take the route name. /: home
															if (!rs[i].hasOwnProperty(CT)) mi._routes[i][CT] = mi._routes[i] === ROOT ? HOME : i;
														}
														if (j.toLowerCase() === CB) { // Callback is optional, but in this case, if programmer do not define it, null.
															mi._routes[i][CB] = rs[i][CB] && typeof rs[i][CB] === 'function' ? rs[i][CB] : null;
														} else {
															if (!rs[i].hasOwnProperty(CB)) mi._routes[i][CB] = null;
														}
													}
												}
											}
											for (k in mi._routes) {
												if (mi._routes.hasOwnProperty(k)) {
													if (!mi._routes[k][TP] && !mi._routes[k][CT] && !mi._routes[k][CB]) delete mi._routes[k];
													else mi._controllers[mi._routes[k][CT]] = null;
												}
											}
											mi._defaultRoute = defroute && me.$.isString(defroute)
											? mi._routes.hasOwnProperty(defroute) ? defroute : mi._routes.hasOwnProperty(ROOT)
												? ROOT : mi._eSpa(1, [me.a.UERROR, 'SPA: Error! Default route do not exist in Routes object.'])
											: mi._routes.hasOwnProperty(ROOT) ? ROOT : mi._eSpa(1, [me.a.UERROR, 'SPA: Error! Wrong Default route.']);
											if (!mi._defaultRoute) mi._eSpa(1, [me.a.UERROR, 'SPA: Error! Wrong routes, default route or root (/) is required.']);
										}(null, null, null);
									return mi;
								}(this, Object.keys(rs));
							}
						};
						return new _Spacore;
					}(this, function () {}, '/', '#', /^([.\w\-\/]+)\w+\.html$/, '.html', '/index.html', 'home', 'route', 'template', 'controller', 'callback');
				},
				'api': function () {
					// For creation of a Single Page Application.
					return function (me, _Spainterface) {
						_Spainterface.prototype = function (_spa, cSpa, iSpa) {
							cSpa = {
								setRoute: function(routespa, container, defroute){ // route, template, controller, callback
									if (me.$.isEmptyObject(routespa)) return _spa._eSpa(1, [me.a.UERROR, 'SPA: Error, Rocjs needs an Array with at least one object element like [{"/": {"template":"some/template.html", [,"controller":controllerName, "callback": anyFunction]}]']);
									return _spa._setRoute(routespa, container, defroute)._router();
								},
								setController: function(name, controller) { return _spa._setController(name, controller); },
								setControllers: function(controllers) { return me.$.isEmptyObject(controllers)
									? _spa._eSpa(0, [me.a.UERROR, 'SPA: Error! Object container with controllers is required.']) : _spa._setControllers(controllers);
								},
								setPreloader: function (preloader) { _spa._preloader = preloader; },
								changeContainer: function(container){ return _spa._changeContainer(container); },
								playRoute: function() { return _spa._getController(); }
							};
							// Separing functionality from interface.
							iSpa['setRoutes'] = function(setroutes){ return function (routes, view, default_route) {return setroutes(routes, view, default_route);}; }(function (rou, con, def) { return cSpa.setRoute(rou, con, def) ? iSpa : undefined; });
							iSpa['setController'] = function(setcontroller) { return function (name, controller) { return setcontroller(name, controller); };
							}(function (nam, con) { return cSpa.setController(nam, con) ? iSpa : undefined; });
							iSpa['setControllers'] = function(setcontrollers) { return function (controllers_list) { return setcontrollers(controllers_list); };
							}(function (nam, con) { return cSpa.setControllers(nam, con) ? iSpa : undefined; });
							iSpa['changeContainer'] = function(changecontainer){ return function (new_spacontainer) { return changecontainer(new_spacontainer); };
							}(function (con) { return cSpa.changeContainer(con) ? iSpa : undefined; });
							iSpa['playRoute'] = function(playroute) { return function () { return playroute(); }; }(function () { return cSpa.playRoute(); });
							iSpa['setPreloader'] = function(preload) { return function (preloader) { return preload(preloader); }; }(function (p) { cSpa.setPreloader(p); return iSpa; });
							return iSpa;
						}(me.core(), null, {});
						return new _Spainterface;
					}(this, function () {})
				},
				'_api': function () {
					return function (spa) {
						// Rocfor's internal use.
						return { 'api': spa.api() };
					}(this);
				}
			};
			_Comp = {
				'e': Object.create(_Error),
				'$': Object.create(r.api()),
				'asset': Object.create(_Asset.api()),
				'block': Object.create(_Block._api()),
				'core': function (componentString, fn, scope, rvars, props) {
					return this.block.api(componentString, fn, scope, rvars, props);
				},
				'api': function () {
					return function (me, _newcomp, _PartialComp, Component) {
						// For creation of HTMLElement Components.
						return function (componentString, fn, scope, rvars, props) {
							_newcomp = function (component, p) {
								props = p || props;
								return component ? function () {
									// Component's final interface.
									Component = function () {
										this.classlist = component.classlist;
										this.idDOM = component.idDOM || null;
										this.idlist = component.idlist || null;
										this.component = component.block || null;
										this.events = component.events || null;
										this.compmain = component.blockmain; // {classlist, idlist, idDOM, tagstrings},
										this.compchild = component.blockchild; //[{tag, events, classlist, idlist, idDOM, child, tagstrings}, ...],
										this.compstrings = component.blockstrings; //{comptring: "p Potosí, Bolivia, 2018", mycompString: "p Potosí, Bolivia, 2018"},
									};
									Component.prototype = {
										delComponent: function () { component.delBlock(); return this; },
										getComponent: function () { return component.getBlock(); },
										render: function (where) { component.setBlock(where || props); return this; },
										getChild: function (index_or_id_child) { return component.getChild(index_or_id_child); },
										compstringChild: function (index_or_id_child) { return component.blockstringChild(index_or_id_child); },
										innerHTML: function (htmltxt, index_or_id_child) { component.innerHTML(htmltxt, index_or_id_child); return this; },
										textContent: function (txt, index_or_id_child) { component.textContent(txt, index_or_id_child); return this; }
									};
									return new Component;
								}() : undefined;
							};
							_PartialComp.prototype = {
								'createComponent': function (createcomponent) {
									return function (componentString, fn, scope, rvars, props) { return createcomponent(componentString, fn, scope, rvars, props); };
								}(function (cs, dat, scp, rv, p) { return _newcomp(me.core(cs, dat, scp, rv, p), p); })
							};

							return me.asset.checkTs(componentString) ? _newcomp(me.core(componentString, fn, scope, rvars, props)) : new _PartialComp;
						};
					}(this, null, function () {}, null);
				},
				'_api': function () {
					return function (me) {
						// Rocfor's internal use.
						return {
							'api' : me.api(),
							'prev': {},
							'prevState': function (state) {
								if (me.$.isEmptyObject(this.prev)) {
									for (i in state) {
										if (state.hasOwnProperty(i)) this.prev[i] = state[i];
									}
								}
							},
							'setState': function (state, cb) {
								typeof cb === 'function'
								? function (mi, statecb, i) {
										try {
											if (!me.$.isEmptyObject(state) && me.$.isEmptyObject(mi.prev)) {
												for (i in state) {
													if (state.hasOwnProperty(i)) mi.prev[i] = state[i];
												}
											}
											if (!me.$.isEmptyObject(statecb)) {
												i = null;
												for (i in statecb)
													if (statecb.hasOwnProperty(i)) state[i] = statecb[i];
											} else {
												throw new me.e.e(me.asset.UERROR, me.asset.SERROR + (typeof statecb));
											}
										} catch (error) {
											me.e.eD(error);
										}
									}(this, cb(state), 0)
								: undefined;
							},
							'resetState': function (state) {
								return (!me.$.isEmptyObject(this.prev))
								? function (mi, i) {
										for (i in mi.prev) { if (mi.prev.hasOwnProperty(i)) state[i] = mi.prev[i]; }
									}(this, 0)
								: undefined;
							}
						};
					}(this);
				}
			};

			_Rocjs = {
				'$': Object.create(r.api()),
				'ajax': Object.create(_Ajax['api']()),
				'error': Object.create(_Error),
				'tag': Object.create(_Tag['_api']()),
				'block': Object.create(_Block['_api']()),
				'spa': Object.create(_Spa['_api']()),
				'mdown': Object.create(_MDwn['api']),
				'api': function () {
					return function (rocforjs, Rocforjs) {
						// Rocfor's final interface.
						Rocforjs = function (props) {
							this.version = version;
							this.props = props;
							this.r = rocforjs.$;
						};
						Rocforjs.prototype = {
							'Error': function (e) { return rocforjs.error.api(e); },
							'SPA': function () { return rocforjs.spa.api; },
							'Ajax': function () { return rocforjs.ajax; },
							'Tag': function (tagString, fn, scope, rvars) { return rocforjs.tag.api(tagString, fn, scope, rvars, this.props); },
							'Block': function (blockString, fn, scope, rvars) { return rocforjs.block.api(blockString, fn, scope, rvars, this.props); },
							'Mdown': function (str, rvars) { return rocforjs.mdown.run(str, rvars); }
						}
						return Rocforjs;
					}(this, null);
				}
			};
			_Compjs = {
				'$': Object.create(r.api()),
				'error': Object.create(_Error),
				'ajax': Object.create(_Ajax['api']()),
				'tag': Object.create(_Tag['_api']()),
				'block': Object.create(_Block['_api']()),
				'comp': Object.create(_Comp['_api']()),
				'mdown': Object.create(_MDwn['api']),
				'api': function () {
					return function (component, Component) {
						// R.Component's final interface.
						Component = function (props) {
							this.version = version;
							this.props = props || {};
							this.state = {};
							this.r = component.$;
						};
						Component.prototype = {
							'Error': function (e) { return rocjs.error.api(e); },
							'setState': function (prevState) { component.comp.setState(this.state, prevState); return this; },
							'resetState': function () { component.comp.resetState(this.state); return this; },
							'Component': function (componentString, fn, scope, rvars) {return component.comp.api(componentString, fn, scope, rvars, this.props);},
							'Tag': function (tagString, fn, scope, rvars) { return component.tag.api(tagString, fn, scope, rvars, this.props); },
							'Block': function (blockString, fn, scope, rvars) { return component.block.api(blockString, fn, scope, rvars, this.props); },
							'Mdown': function (str, rvars) { return component.mdown.run(str, rvars); }
						}
						return Component;
					}(this, null);
				}
			};

			_Rocforjsreg = function (namespace, rns) {
				rns = namespace.ns
				? {'access': f, 'name': namespace.name}
				: function () {
					w[namespace['name']] = _Rocjs.api();
					w[namespace['name']]['Component'] = _Compjs.api();
					return {'access': t, 'name': namespace.name};
				}();
				rns.access ? c(rns.name + ' ready!') : c(u);
			}(reg, null);
		}('1.0.0');
	})(null, undefined, null, false, true));
})(document, window, console.log);