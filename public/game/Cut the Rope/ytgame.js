(function() {
	'use strict';
	var aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
		if (a == Array.prototype || a == Object.prototype) return a;
		a[b] = c.value;
		return a
	};

	function ba(a) {
		a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
		for (var b = 0; b < a.length; ++b) {
			var c = a[b];
			if (c && c.Math == Math) return c
		}
		throw Error("Cannot find global object");
	}
	var ca = ba(this);

	function da(a, b) {
		if (b) a: {
			var c = ca;a = a.split(".");
			for (var d = 0; d < a.length - 1; d++) {
				var e = a[d];
				if (!(e in c)) break a;
				c = c[e]
			}
			a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && aa(c, a, {
				configurable: !0,
				writable: !0,
				value: b
			})
		}
	}

	function l(a) {
		function b(d) {
			return a.next(d)
		}

		function c(d) {
			return a.throw(d)
		}
		return new Promise(function(d, e) {
			function f(g) {
				g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
			}
			f(a.next())
		})
	}
	da("globalThis", function(a) {
		return a || ca
	});
	da("Object.values", function(a) {
		return a ? a : function(b) {
			var c = [],
				d;
			for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
			return c
		}
	});
	da("Array.prototype.includes", function(a) {
		return a ? a : function(b, c) {
			var d = this;
			d instanceof String && (d = String(d));
			var e = d.length;
			c = c || 0;
			for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
				var f = d[c];
				if (f === b || Object.is(f, b)) return !0
			}
			return !1
		}
	});
	da("Object.entries", function(a) {
		return a ? a : function(b) {
			var c = [],
				d;
			for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
			return c
		}
	});

	function ea(a, b) {
		a instanceof String && (a += "");
		var c = 0,
			d = !1,
			e = {
				next: function() {
					if (!d && c < a.length) {
						var f = c++;
						return {
							value: b(f, a[f]),
							done: !1
						}
					}
					d = !0;
					return {
						done: !0,
						value: void 0
					}
				}
			};
		e[Symbol.iterator] = function() {
			return e
		};
		return e
	}
	da("Array.prototype.values", function(a) {
		return a ? a : function() {
			return ea(this, function(b, c) {
				return c
			})
		}
	});
	const fa = () => {
		var a = window.getCurrentSdkUrl();
		if (a !== null) {
			a = new URL(a.origin + a.pathname + "?" + window.getLocationHash().substring(1));
			if (a.searchParams.has("flags")) {
				let b;
				window.sdkFlags = (b = a.searchParams.get("flags")) != null ? b : ""
			}
			if (a.searchParams.has("environment") && a.searchParams.has("bundle") && a.searchParams.has("key") && (a.searchParams.get("environment") !== "prod" || a.searchParams.get("bundle") !== "public")) throw document.write('<script src="' + a.toString() + '">\x3c/script>'), Error("Exiting SDK: Purposefully exiting to load a different SDK version.");
		}
	};
	if (!window.loadYTGame) {
		window.getLocationHash = () => window.location.hash;
		const a = document.currentScript.src;
		window.getCurrentSdkUrl = () => a != "" ? new URL(a) : null;
		window.loadYTGame = fa;
		fa()
	}
	window.enableSendingResourceLoadedEvents = !0;
	/*

	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: Apache-2.0
	*/
	var m = this || self;

	function ha(a) {
		var b = typeof a;
		return b == "object" && a != null || b == "function"
	}

	function n(a, b) {
		a = a.split(".");
		for (var c = m, d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
	}

	function ia(a, b) {
		function c() {}
		c.prototype = b.prototype;
		a.I = b.prototype;
		a.prototype = new c;
		a.prototype.constructor = a;
		a.P = function(d, e, f) {
			for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
			return b.prototype[e].apply(d, g)
		}
	};

	function ja(a) {
		m.setTimeout(() => {
			throw a;
		}, 0)
	};

	function p() {
		var a = m.navigator;
		return a && (a = a.userAgent) ? a : ""
	};
	const la = Array.prototype.indexOf ? function(a, b) {
		return Array.prototype.indexOf.call(a, b, void 0)
	} : function(a, b) {
		if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
		for (let c = 0; c < a.length; c++)
			if (c in a && a[c] === b) return c;
		return -1
	};

	function ma(a) {
		ma[" "](a);
		return a
	}
	ma[" "] = function() {};
	var na = p().indexOf("Gecko") != -1 && !(p().toLowerCase().indexOf("webkit") != -1 && p().indexOf("Edge") == -1) && !(p().indexOf("Trident") != -1 || p().indexOf("MSIE") != -1) && p().indexOf("Edge") == -1,
		oa = p().toLowerCase().indexOf("webkit") != -1 && p().indexOf("Edge") == -1;

	function pa(a, b) {
		a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
		a.__closure__error__context__984382.severity = b
	};
	let qa = void 0;

	function ra(a) {
		a = Error(a);
		pa(a, "warning");
		return a
	}

	function sa(a, b) {
		if (a != null) {
			var c;
			var d = (c = qa) != null ? c : qa = {};
			c = d[a] || 0;
			c >= b || (d[a] = c + 1, a = Error(), pa(a, "incident"), ja(a))
		}
	};
	var ta = typeof Symbol === "function" && typeof Symbol() === "symbol";

	function t(a, b, c = !1) {
		return typeof Symbol === "function" && typeof Symbol() === "symbol" ? c && Symbol.for && a ? Symbol.for(a) : a != null ? Symbol(a) : Symbol() : b
	}
	var ua = t("jas", void 0, !0),
		va = t(void 0, "0di"),
		wa = t(void 0, "1oa"),
		xa = t(void 0, "0actk"),
		ya = t("m_m", "U", !0),
		za = t(void 0, "mrtk");
	const Aa = {
			M: {
				value: 0,
				configurable: !0,
				writable: !0,
				enumerable: !1
			}
		},
		Ba = Object.defineProperties,
		u = ta ? ua : "M";

	function Ca(a, b) {
		ta || u in a || Ba(a, Aa);
		a[u] |= b
	}

	function v(a, b) {
		ta || u in a || Ba(a, Aa);
		a[u] = b
	}

	function Da(a) {
		Ca(a, 34);
		return a
	};
	const Ea = typeof ya === "symbol";
	var Fa = {};

	function Ga(a) {
		a = a[ya];
		const b = a === Fa;
		Ea && a && !b && sa(za, 3);
		return b
	}

	function Ha(a) {
		return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
	}

	function Ia(a) {
		if (a & 2) throw Error();
	}
	class Ja {
		constructor(a, b, c) {
			this.g = a;
			this.h = b;
			this.i = c
		}
		next() {
			const a = this.g.next();
			a.done || (a.value = this.h.call(this.i, a.value));
			return a
		} [Symbol.iterator]() {
			return this
		}
	};

	function Ka() {
		return typeof BigInt === "function"
	};

	function La(a) {
		a.T = !0;
		return a
	};
	var Ma = La(a => typeof a === "number"),
		Na = La(a => typeof a === "string"),
		Oa = La(a => typeof a === "boolean");
	var Pa = typeof m.BigInt === "function" && typeof m.BigInt(0) === "bigint";
	var Va = La(a => Pa ? a >= Qa && a <= Ra : a[0] === "-" ? Sa(a, Ta) : Sa(a, Ua));
	const Ta = Number.MIN_SAFE_INTEGER.toString(),
		Qa = Pa ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
		Ua = Number.MAX_SAFE_INTEGER.toString(),
		Ra = Pa ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;

	function Sa(a, b) {
		if (a.length > b.length) return !1;
		if (a.length < b.length || a === b) return !0;
		for (let c = 0; c < a.length; c++) {
			const d = a[c],
				e = b[c];
			if (d > e) return !1;
			if (d < e) return !0
		}
	};
	let w = 0,
		x = 0;

	function Wa(a) {
		const b = a >>> 0;
		w = b;
		x = (a - b) / 4294967296 >>> 0
	}

	function Xa(a) {
		if (a < 0) {
			Wa(-a);
			const [b, c] = Ya(w, x);
			w = b >>> 0;
			x = c >>> 0
		} else Wa(a)
	}

	function Za(a, b) {
		b >>>= 0;
		a >>>= 0;
		if (b <= 2097151) var c = "" + (4294967296 * b + a);
		else Ka() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7), c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7), c = b + $a(c) + $a(a));
		return c
	}

	function $a(a) {
		a = String(a);
		return "0000000".slice(a.length) + a
	}

	function Ya(a, b) {
		b = ~b;
		a ? a = ~a + 1 : b += 1;
		return [a, b]
	};
	const ab = typeof BigInt === "function" ? BigInt.asIntN : void 0,
		bb = Number.isSafeInteger,
		cb = Number.isFinite,
		db = Math.trunc;

	function eb(a) {
		if (typeof a !== "number") throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
		return a
	}
	const fb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

	function gb(a) {
		switch (typeof a) {
			case "bigint":
				return !0;
			case "number":
				return cb(a);
			case "string":
				return fb.test(a);
			default:
				return !1
		}
	}

	function hb(a) {
		if (typeof a !== "number") throw ra("int32");
		if (!cb(a)) throw ra("int32");
		return a | 0
	}

	function z(a) {
		return a == null ? a : hb(a)
	}

	function ib(a) {
		if (a == null) return a;
		if (typeof a === "string" && a) a = +a;
		else if (typeof a !== "number") return;
		return cb(a) ? a | 0 : void 0
	}

	function A(a) {
		if (a != null && typeof a !== "string") throw Error();
		return a
	}

	function jb(a) {
		return a == null || typeof a === "string" ? a : void 0
	}

	function kb(a, b, c, d) {
		if (a != null && typeof a === "object" && Ga(a)) return a;
		if (!Array.isArray(a)) return c ? d & 2 ? ((a = b[va]) || (a = new b, Da(a.l), a = b[va] = a), b = a) : b = new b : b = void 0, b;
		let e = c = a[u] | 0;
		e === 0 && (e |= d & 32);
		e |= d & 2;
		e !== c && v(a, e);
		return new b(a)
	}

	function lb(a, b, c) {
		a = b ? hb(a) : ib(a);
		return a == null ? c ? 0 : void 0 : a | 0
	};

	function mb(a) {
		return a
	};
	const nb = {};
	let ob = function() {
		try {
			return ma(new class extends Map {
				constructor() {
					super()
				}
			}), !1
		} catch (a) {
			return !0
		}
	}();
	class pb {
		constructor() {
			this.g = new Map
		}
		get(a) {
			return this.g.get(a)
		}
		set(a, b) {
			this.g.set(a, b);
			this.size = this.g.size;
			return this
		}
		delete(a) {
			a = this.g.delete(a);
			this.size = this.g.size;
			return a
		}
		clear() {
			this.g.clear();
			this.size = this.g.size
		}
		has(a) {
			return this.g.has(a)
		}
		entries() {
			return this.g.entries()
		}
		keys() {
			return this.g.keys()
		}
		values() {
			return this.g.values()
		}
		forEach(a, b) {
			return this.g.forEach(a, b)
		} [Symbol.iterator]() {
			return this.entries()
		}
	}
	const qb = (() => ob ? (Object.setPrototypeOf(pb.prototype, Map.prototype), Object.defineProperties(pb.prototype, {
		size: {
			value: 0,
			configurable: !0,
			enumerable: !0,
			writable: !0
		}
	}), pb) : class extends Map {
		constructor() {
			super()
		}
	})();

	function rb(a) {
		return a
	}

	function sb(a) {
		if (a.B & 2) throw Error("Cannot mutate an immutable Map");
	}
	var B = class extends qb {
		constructor(a, b, c = rb, d = rb) {
			super();
			let e = a[u] | 0;
			e |= 64;
			v(a, e);
			this.B = e;
			this.A = b;
			this.C = c;
			this.K = this.A ? tb : d;
			for (let f = 0; f < a.length; f++) {
				const g = a[f],
					h = c(g[0], !1, !0);
				let k = g[1];
				b ? k === void 0 && (k = null) : k = d(g[1], !1, !0, void 0, void 0, e);
				super.set(h, k)
			}
		}
		O() {
			var a = ub;
			if (this.size !== 0) return Array.from(super.entries(), a)
		}
		J() {
			return Array.from(super.entries())
		}
		clear() {
			sb(this);
			super.clear()
		}
		delete(a) {
			sb(this);
			return super.delete(this.C(a, !0, !1))
		}
		entries() {
			if (this.A) {
				var a = super.keys();
				a = new Ja(a, vb, this)
			} else a = super.entries();
			return a
		}
		values() {
			if (this.A) {
				var a = super.keys();
				a = new Ja(a, B.prototype.get, this)
			} else a = super.values();
			return a
		}
		forEach(a, b) {
			this.A ? super.forEach((c, d, e) => {
				a.call(b, e.get(d), d, e)
			}) : super.forEach(a, b)
		}
		set(a, b) {
			sb(this);
			a = this.C(a, !0, !1);
			return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.K(b, !0, !0, this.A, !1, this.B))
		}
		has(a) {
			return super.has(this.C(a, !1, !1))
		}
		get(a) {
			a = this.C(a, !1, !1);
			const b = super.get(a);
			if (b !== void 0) {
				var c = this.A;
				return c ? (c =
					this.K(b, !1, !0, c, this.R, this.B), c !== b && super.set(a, c), c) : b
			}
		} [Symbol.iterator]() {
			return this.entries()
		}
	};
	B.prototype.toJSON = void 0;

	function tb(a, b, c, d, e, f) {
		a = kb(a, d, c, f);
		e && (a = wb(a));
		return a
	}

	function vb(a) {
		return [a, this.get(a)]
	}
	let xb;

	function yb() {
		return xb || (xb = new B(Da([]), void 0, void 0, void 0, nb))
	};

	function C(a, b, c, d, e) {
		d = d ? !!(b & 32) : void 0;
		const f = [];
		let g = a.length,
			h, k, q, K = !1;
		if (b & 64) {
			if (b & 256 ? (g--, h = a[g], k = g) : (k = 4294967295, h = void 0), !(e || b & 512)) {
				K = !0;
				var r;
				q = ((r = zb) != null ? r : mb)(h ? k - -1 : b >> 15 & 1023 || 536870912, -1, a, h);
				k = q + -1
			}
		} else k = 4294967295, b & 1 || (h = g && a[g - 1], Ha(h) ? (g--, k = g, q = 0) : h = void 0);
		r = void 0;
		for (let y = 0; y < g; y++) {
			let L = a[y];
			if (L != null && (L = c(L, d)) != null)
				if (y >= k) {
					var ka = void 0;
					((ka = r) != null ? ka : r = {})[y - -1] = L
				} else f[y] = L
		}
		if (h)
			for (let y in h)
				if (a = h[y], a != null && (a = c(a, d)) != null)
					if (ka = +y, ka <
						q) f[ka + -1] = a;
					else {
						let L;
						((L = r) != null ? L : r = {})[y] = a
					} r && (K ? f.push(r) : f[k] = r);
		e && v(f, b & 33522241 | (r != null ? 290 : 34));
		return f
	}

	function ub(a) {
		a[0] = Ab(a[0]);
		a[1] = Ab(a[1]);
		return a
	}

	function Ab(a) {
		switch (typeof a) {
			case "number":
				return Number.isFinite(a) ? a : "" + a;
			case "bigint":
				return Va(a) ? Number(a) : "" + a;
			case "boolean":
				return a ? 1 : 0;
			case "object":
				if (Array.isArray(a)) {
					const b = a[u] | 0;
					return a.length === 0 && b & 1 ? void 0 : C(a, b, Ab, !1, !1)
				}
				if (Ga(a)) return Bb(a);
				if (a instanceof B) return a.O();
				return
		}
		return a
	}
	let zb;

	function Bb(a) {
		a = a.l;
		return C(a, a[u] | 0, Ab, void 0, !1)
	};

	function Cb() {
		sa(xa, 5)
	};

	function Db(a, b) {
		if (typeof a !== "object") return a;
		if (Array.isArray(a)) {
			var c = a[u] | 0;
			return a.length === 0 && c & 1 ? void 0 : c & 2 ? a : b && (c === 0 || c & 32 && !(c & 64) && c & 16) ? (Ca(a, 34), c & 4 && Object.freeze(a), a) : C(a, c, Db, b !== void 0, !0)
		}
		if (Ga(a)) return Eb(a);
		if (a instanceof B) {
			c = a.B;
			if (c & 2) return a;
			if (a.size) {
				b = Da(a.J());
				if (a.A)
					for (a = 0; a < b.length; a++) {
						const d = b[a];
						let e = d[1];
						if (e == null || typeof e !== "object") e = void 0;
						else if (Ga(e)) e = Eb(e);
						else if (Array.isArray(e)) {
							const f = e[u] | 0;
							c & 32 && (f === 0 || f & 32 && !(f & 64) && f & 16) ? Ca(e, 34) :
								e = C(e, f, Db, !0, !0)
						} else e = void 0;
						d[1] = e
					}
				return b
			}
		}
	}

	function Eb(a) {
		const b = a.l,
			c = b[u] | 0;
		return c & 2 ? a : C(b, c, Db, !0, !0)
	}

	function wb(a) {
		var b = a.l;
		if (!((b[u] | 0) & 2)) return a;
		a = new a.constructor(C(b, b[u] | 0, Db, !0, !0));
		b = a.l;
		b[u] &= -3;
		return a
	};

	function D(a, b) {
		return Fb(a.l, void 0, b)
	}

	function Fb(a, b, c) {
		if (c === -1) return null;
		const d = c + -1,
			e = a.length - 1;
		if (d >= e && (b != null ? b : a[u] | 0) & 256) a = a[e][c];
		else if (d <= e) a = a[d];
		else return;
		return a
	}

	function E(a, b, c) {
		const d = a.l;
		let e = d[u] | 0;
		Ia(e);
		F(d, e, b, c);
		return a
	}

	function F(a, b, c, d) {
		const e = c + -1;
		var f = a.length - 1;
		let g;
		if (e >= f && ((g = b) != null ? g : b = a[u] | 0) & 256) return a[f][c] = d, b;
		if (e <= f) return a[e] = d, b;
		d !== void 0 && (f = b >> 15 & 1023 || 536870912, c >= f ? d != null && (a[f + -1] = {
			[c]: d
		}, b |= 256, v(a, b)) : a[e] = d);
		return b
	}

	function Gb(a, b, c) {
		return Hb(a, b, Ib(a, G, c)) !== void 0
	}

	function Jb(a, b) {
		this.set(b, a)
	}

	function Kb(a, b, c, d) {
		const e = a.l;
		var f = e[u] | 0;
		Ia(f);
		if (d == null) {
			var g = Lb(e);
			if (Mb(g, e, f, c) === b) g.set(c, 0);
			else return a
		} else {
			g = Lb(e);
			const h = Mb(g, e, f, c);
			h !== b && (h && (f = F(e, f, h)), g.set(c, b))
		}
		F(e, f, b, d);
		return a
	}

	function Ib(a, b, c) {
		a = a.l;
		return Mb(Lb(a), a, void 0, b) === c ? c : -1
	}

	function Lb(a) {
		if (ta) {
			var b;
			return (b = a[wa]) != null ? b : a[wa] = new Map
		}
		if (wa in a) return a[wa];
		b = new Map;
		Object.defineProperty(a, wa, {
			value: b
		});
		return b
	}

	function Mb(a, b, c, d) {
		let e = a.get(d);
		if (e != null) return e;
		e = 0;
		for (let f = 0; f < d.length; f++) {
			const g = d[f];
			Fb(b, c, g) != null && (e !== 0 && (c = F(b, c, e)), e = g)
		}
		a.set(d, e);
		return e
	}

	function Hb(a, b, c) {
		a = a.l;
		let d = a[u] | 0;
		const e = Fb(a, d, c);
		b = kb(e, b, !1, d);
		b !== e && b != null && F(a, d, c, b);
		return b
	}

	function H(a, b, c) {
		c == null && (c = void 0);
		return E(a, b, c)
	}

	function I(a, b, c, d) {
		d == null && (d = void 0);
		return Kb(a, b, c, d)
	}

	function Nb(a, b) {
		let c;
		return (c = jb(D(a, b))) != null ? c : ""
	}

	function Ob(a, b) {
		a = D(a, b);
		a = a == null ? a : cb(a) ? a | 0 : void 0;
		return a != null ? a : 0
	}

	function J(a, b, c, d) {
		c = Ib(a, d, c);
		b = Hb(a, b, c);
		if (b != null && (a = a.l, d = a[u] | 0, !(d & 2))) {
			const e = wb(b);
			e !== b && (b = e, F(a, d, c, b))
		}
		c = b;
		return c
	}

	function M(a, b, c) {
		if (c != null) a: {
			if (!gb(c)) throw ra("int64");
			switch (typeof c) {
				case "string":
					var d = db(Number(c));
					if (bb(d)) c = String(d);
					else if (d = c.indexOf("."), d !== -1 && (c = c.substring(0, d)), d = c.length, !(c[0] === "-" ? d < 20 || d === 20 && Number(c.substring(0, 7)) > -922337 : d < 19 || d === 19 && Number(c.substring(0, 6)) < 922337)) {
						if (c.length < 16) Xa(Number(c));
						else if (Ka()) c = BigInt(c), w = Number(c & BigInt(4294967295)) >>> 0, x = Number(c >> BigInt(32) & BigInt(4294967295));
						else {
							d = +(c[0] === "-");
							x = w = 0;
							var e = c.length;
							for (let g = d, h = (e - d) % 6 +
									d; h <= e; g = h, h += 6) {
								var f = Number(c.slice(g, h));
								x *= 1E6;
								w = w * 1E6 + f;
								w >= 4294967296 && (x += Math.trunc(w / 4294967296), x >>>= 0, w >>>= 0)
							}
							if (d) {
								const [g, h] = Ya(w, x);
								w = g;
								x = h
							}
						}
						c = w;
						d = x;
						if (d & 2147483648)
							if (Ka()) c = "" + (BigInt(d | 0) << BigInt(32) | BigInt(c >>> 0));
							else {
								const [g, h] = Ya(c, d);
								c = "-" + Za(g, h)
							}
						else c = Za(c, d)
					}
					break a;
				case "bigint":
					d = c = ab(64, c);
					if (Na(d)) {
						if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(d)) throw Error(String(d));
					} else if (Ma(d) && !Number.isSafeInteger(d)) throw Error(String(d));
					Pa ? c = BigInt(c) : c = Oa(c) ? c ? "1" : "0" : Na(c) ? c.trim() ||
						"0" : String(c);
					break a;
				default:
					if (c = db(c), !bb(c)) {
						Xa(c);
						d = w;
						e = x;
						if (c = e & 2147483648) d = ~d + 1 >>> 0, e = ~e >>> 0, d == 0 && (e = e + 1 >>> 0);
						f = e * 4294967296 + (d >>> 0);
						d = Number.isSafeInteger(f) ? f : Za(d, e);
						c = typeof d === "number" ? c ? -d : d : c ? "-" + d : d
					}
			}
		}
		return E(a, b, c)
	}

	function N(a, b, c) {
		if (c != null) {
			if (!cb(c)) throw ra("enum");
			c |= 0
		}
		return E(a, b, c)
	}

	function Pb(a, b, c) {
		var d = a.l,
			e = d[u] | 0;
		Ia(e);
		var f = Fb(d, e, b);
		f instanceof B && !(f instanceof B && f.B & 2) ? f.clear() : F(d, e, b);
		if (c) {
			Ia(a.l[u] | 0);
			d = c.forEach;
			var g = a.l,
				h = g[u] | 0;
			e = g;
			f = h;
			a: {
				var k = Fb(g, h, b);h = f & 2;g = !1;
				if (k == null) {
					if (h) {
						b = yb();
						break a
					}
					k = []
				} else if (k.constructor === B) {
					if ((k.B & 2) == 0 || h) {
						b = k;
						break a
					}
					k = k.J()
				} else Array.isArray(k) ? g = !!((k[u] | 0) & 2) : k = [];
				if (h) {
					if (!k.length) {
						b = yb();
						break a
					}
					g || (g = !0, Da(k))
				} else if (g) {
					g = !1;
					h = Array.prototype.slice.call(k);
					for (k = 0; k < h.length; k++) {
						const q = h[k] = Array.prototype.slice.call(h[k]);
						Array.isArray(q[1]) && (q[1] = Da(q[1]))
					}
					k = h
				}
				g || ((k[u] | 0) & 64 ? k[u] &= -33 : 32 & f && Ca(k, 32));g = new B(k, void 0, lb, lb);F(e, f, b, g);b = g
			}
			d.call(c, Jb, b)
		}
		return a
	};
	var O = class {
		constructor(a) {
			a: {
				if (a == null) {
					var b = 96;
					a = []
				} else {
					if (!Array.isArray(a)) throw Error("narr");
					b = a[u] | 0;
					8192 & b || !(64 & b) || 2 & b || Cb();
					if (b & 1024) throw Error("farr");
					if (b & 64) {
						b & 16384 || v(a, b | 16384);
						var c = a;
						break a
					}
					var d = a;
					b |= 64;
					var e = d.length;
					if (e) {
						var f = e - 1;
						e = d[f];
						if (Ha(e)) {
							b |= 256;
							const g = b & 512 ? 0 : -1;
							f -= g;
							if (f >= 1024) throw Error("pvtlmt");
							for (c in e) {
								const h = +c;
								h < f && (d[h + g] = e[c], delete e[c])
							}
							b = b & -33521665 | (f & 1023) << 15
						}
					}
				}
				v(a, b | 16384);c = a
			}
			this.l = c
		}
		toJSON() {
			return Bb(this)
		}
		clone() {
			var a = this,
				b = a.l;
			a =
				new a.constructor(C(b, b[u] | 0, Db, !0, !0));
			b = a.l;
			b[u] &= -3;
			return a
		}
	};
	O.prototype[ya] = Fa;
	O.prototype.toString = function() {
		return this.l.toString()
	};
	class Qb {
		constructor(a, b) {
			this.data = a;
			this.channel = b
		}
	};

	function Rb(a) {
		const b = new MessageChannel;
		Sb(b.port1, a);
		return b
	}

	function Tb(a, b) {
		Sb(a, b);
		return new Ub(a)
	}
	class Ub {
		constructor(a) {
			this.h = a
		}
		g(a, b, c = []) {
			b = Rb(b);
			this.h.postMessage(a, [b.port2].concat(c))
		}
	}

	function Sb(a, b) {
		b && (a.onmessage = c => {
			var d = c.data;
			c = Tb(c.ports[0]);
			b(new Qb(d, c))
		})
	};
	var Vb = function() {
		if (!m.addEventListener || !Object.defineProperty) return !1;
		var a = !1,
			b = Object.defineProperty({}, "passive", {
				get: function() {
					a = !0
				}
			});
		try {
			const c = () => {};
			m.addEventListener("test", c, b);
			m.removeEventListener("test", c, b)
		} catch (c) {}
		return a
	}();
	var Wb = ({
		destination: a,
		origin: b,
		V: c,
		L: d = "ZNWN1d",
		onMessage: e
	}) => {
		if (b === "*") throw Error("Sending to wildcard origin not allowed.");
		const f = Rb(e);
		a.postMessage(c ? {
			n: d,
			t: c
		} : d, b, [f.port2]);
		return Tb(f.port1, e)
	};
	var Xb = class {
			constructor(a) {
				this.h = a
			}
			g(a, b, c) {
				this.h.g(Bb(a), b, c)
			}
		},
		Zb = a => {
			var b = Yb;
			return c => {
				const d = new b(c.data);
				return a(new Qb(d, c.channel))
			}
		},
		$b = a => b => a(new Qb(b.data, new Xb(b.channel)));
	/*

	 Copyright Google LLC
	 SPDX-License-Identifier: Apache-2.0
	*/
	let ac = globalThis.trustedTypes,
		bc;

	function cc() {
		let a = null;
		if (!ac) return a;
		try {
			const b = c => c;
			a = ac.createPolicy("goog#html", {
				createHTML: b,
				createScript: b,
				createScriptURL: b
			})
		} catch (b) {}
		return a
	};
	var dc = class {
		constructor(a) {
			this.g = a
		}
		toString() {
			return this.g + ""
		}
	};

	function ec(a) {
		bc === void 0 && (bc = cc());
		var b = bc;
		return new dc(b ? b.createScriptURL(a) : a)
	};

	function fc(a, b) {
		var c = a.register;
		if (b instanceof dc) b = b.g;
		else throw Error("");
		return c.call(a, b, void 0)
	};

	function gc(a) {
		return String(a).replace(/\-([a-z])/g, function(b, c) {
			return c.toUpperCase()
		})
	}

	function hc(a) {
		return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
			return c + d.toUpperCase()
		})
	};

	function ic(a, ...b) {
		if (b.length === 0) return ec(a[0]);
		let c = a[0];
		for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
		return ec(c)
	};

	function jc(a, b) {
		this.type = a;
		this.target = b
	}
	jc.prototype.g = function() {};

	function kc(a, b) {
		jc.call(this, a ? a.type : "");
		this.relatedTarget = this.target = null;
		this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
		this.key = "";
		this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
		this.state = null;
		this.pointerId = 0;
		this.pointerType = "";
		this.h = null;
		a && this.init(a, b)
	}
	ia(kc, jc);
	kc.prototype.init = function(a) {
		const b = this.type = a.type,
			c = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
		this.target = a.target || a.srcElement;
		let d = a.relatedTarget;
		d || (b == "mouseover" ? d = a.fromElement : b == "mouseout" && (d = a.toElement));
		this.relatedTarget = d;
		c ? (this.clientX = c.clientX !== void 0 ? c.clientX : c.pageX, this.clientY = c.clientY !== void 0 ? c.clientY : c.pageY, this.screenX = c.screenX || 0, this.screenY = c.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !==
			void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
		this.button = a.button;
		this.key = a.key || "";
		this.ctrlKey = a.ctrlKey;
		this.altKey = a.altKey;
		this.shiftKey = a.shiftKey;
		this.metaKey = a.metaKey;
		this.pointerId = a.pointerId || 0;
		this.pointerType = a.pointerType;
		this.state = a.state;
		this.h = a;
		a.defaultPrevented && kc.I.g.call(this)
	};
	kc.prototype.g = function() {
		kc.I.g.call(this);
		const a = this.h;
		a.preventDefault ? a.preventDefault() : a.returnValue = !1
	};
	var lc = "closure_listenable_" + (Math.random() * 1E6 | 0);
	var mc = 0;

	function nc(a, b, c, d, e) {
		this.listener = a;
		this.proxy = null;
		this.src = b;
		this.type = c;
		this.capture = !!d;
		this.h = e;
		this.key = ++mc;
		this.g = this.F = !1
	}

	function oc(a) {
		a.g = !0;
		a.listener = null;
		a.proxy = null;
		a.src = null;
		a.h = null
	};

	function pc(a) {
		this.src = a;
		this.g = {};
		this.h = 0
	}
	pc.prototype.add = function(a, b, c, d, e) {
		const f = a.toString();
		a = this.g[f];
		a || (a = this.g[f] = [], this.h++);
		var g;
		a: {
			for (g = 0; g < a.length; ++g) {
				const h = a[g];
				if (!h.g && h.listener == b && h.capture == !!d && h.h == e) break a
			}
			g = -1
		}
		g > -1 ? (b = a[g], c || (b.F = !1)) : (b = new nc(b, this.src, f, !!d, e), b.F = c, a.push(b));
		return b
	};
	var qc = "closure_lm_" + (Math.random() * 1E6 | 0),
		rc = {},
		sc = 0;

	function tc(a, b, c, d, e) {
		if (d && d.once) uc(a, b, c, d, e);
		else if (Array.isArray(b))
			for (let f = 0; f < b.length; f++) tc(a, b[f], c, d, e);
		else c = vc(c), a && a[lc] ? a.g(b, c, ha(d) ? !!d.capture : !!d, e) : wc(a, b, c, !1, d, e)
	}

	function wc(a, b, c, d, e, f) {
		if (!b) throw Error("Invalid event type");
		const g = ha(e) ? !!e.capture : !!e;
		let h = xc(a);
		h || (a[qc] = h = new pc(a));
		c = h.add(b, c, d, g, f);
		if (!c.proxy) {
			d = yc();
			c.proxy = d;
			d.src = a;
			d.listener = c;
			if (a.addEventListener) Vb || (e = g), e === void 0 && (e = !1), a.addEventListener(b.toString(), d, e);
			else if (a.attachEvent) a.attachEvent(zc(b.toString()), d);
			else if (a.addListener && a.removeListener) a.addListener(d);
			else throw Error("addEventListener and attachEvent are unavailable.");
			sc++
		}
	}

	function yc() {
		function a(c) {
			return b.call(a.src, a.listener, c)
		}
		const b = Ac;
		return a
	}

	function uc(a, b, c, d, e) {
		if (Array.isArray(b))
			for (let f = 0; f < b.length; f++) uc(a, b[f], c, d, e);
		else c = vc(c), a && a[lc] ? a.h(b, c, ha(d) ? !!d.capture : !!d, e) : wc(a, b, c, !0, d, e)
	}

	function zc(a) {
		return a in rc ? rc[a] : rc[a] = "on" + a
	}

	function Ac(a, b) {
		if (a.g) a = !0;
		else {
			b = new kc(b, this);
			const g = a.listener,
				h = a.h || a.src;
			if (a.F && typeof a !== "number" && a && !a.g) {
				var c = a.src;
				if (c && c[lc]) c.i(a);
				else {
					var d = a.type,
						e = a.proxy;
					c.removeEventListener ? c.removeEventListener(d, e, a.capture) : c.detachEvent ? c.detachEvent(zc(d), e) : c.addListener && c.removeListener && c.removeListener(e);
					sc--;
					if (d = xc(c)) {
						e = a.type;
						var f;
						if (f = e in d.g) {
							f = d.g[e];
							const k = la(f, a);
							let q;
							(q = k >= 0) && Array.prototype.splice.call(f, k, 1);
							f = q
						}
						f && (oc(a), d.g[e].length == 0 && (delete d.g[e], d.h--));
						d.h == 0 && (d.src = null, c[qc] = null)
					} else oc(a)
				}
			}
			a = g.call(h, b)
		}
		return a
	}

	function xc(a) {
		a = a[qc];
		return a instanceof pc ? a : null
	}
	var Bc = "__closure_events_fn_" + (Math.random() * 1E9 >>> 0);

	function vc(a) {
		if (typeof a === "function") return a;
		a[Bc] || (a[Bc] = function(b) {
			return a.handleEvent(b)
		});
		return a[Bc]
	};

	function P(a, b) {
		if (typeof b === "string")(b = Cc(a, b)) && (a.style[b] = "none");
		else
			for (const e in b) {
				var c = a,
					d = b[e];
				const f = Cc(c, e);
				f && (c.style[f] = d)
			}
	}
	var Dc = {};

	function Cc(a, b) {
		let c = Dc[b];
		if (!c) {
			var d = gc(b);
			c = d;
			a.style[d] === void 0 && (d = (oa ? "Webkit" : na ? "Moz" : null) + hc(d), a.style[d] !== void 0 && (c = d));
			Dc[b] = c
		}
		return c
	};
	var Ec = class extends O {};
	var Fc = class extends O {};
	var Gc = class extends O {};
	var Hc = class extends O {},
		Ic = [3, 4];
	var Jc = class extends O {};

	function Kc(a, b) {
		{
			const q = a.l;
			let K = q[u] | 0;
			Ia(K);
			if (b == null) F(q, K, 1);
			else {
				var c = b[u] | 0,
					d = c,
					e = !!(2 & c) && !!(4 & c) || !!(1024 & c),
					f = e || Object.isFrozen(b),
					g = !0,
					h = !0;
				for (let r = 0; r < b.length; r++) {
					var k = b[r];
					e || (k = !!((k.l[u] | 0) & 2), g && (g = !k), h && (h = k))
				}
				e || (c = g ? 13 : 5, c = h ? c | 16 : c & -17);
				f && c === d || (b = Array.prototype.slice.call(b), d = 0, 2 & c && (c |= 16), c = 2 & K ? c | 2 : c & -3, c = (c | 32) & -1025, 32 & K || (c &= -33));
				c !== d && v(b, c);
				F(q, K, 1, b)
			}
		}
		return a
	}
	var Lc = class extends O {};

	function Mc(a) {
		var b = new Nc;
		if (a != null && typeof a !== "boolean") throw b = typeof a, Error(`Expected boolean but got ${b!="object"?b:a?Array.isArray(a)?"array":b:"null"}: ${a}`);
		return E(b, 2, a)
	}
	var Nc = class extends O {};
	var Oc = class extends O {};
	var Pc = class extends O {};
	var Qc = class extends O {};

	function Rc(a) {
		var b = new Sc;
		return N(b, 1, a)
	}

	function Tc(a, b) {
		return H(a, 2, b)
	}

	function Uc(a) {
		var b = Vc();
		b = Wc(b.o);
		return H(a, 4, b)
	}
	var Sc = class extends O {},
		Xc = [3];

	function Yc() {
		var a = new Zc;
		return M(a, 1, performance.now())
	}

	function $c(a, b) {
		return E(a, 2, A(b))
	}
	var Zc = class extends O {};
	var ad = class extends O {};
	var bd = class extends O {};
	var cd = class extends O {
		getInviteCode() {
			return Nb(this, 1)
		}
		hasInviteCode() {
			return jb(D(this, 1)) != null
		}
	};
	var ed = class extends O {
			getLanguage() {
				return Nb(this, Ib(this, dd, 4))
			}
		},
		dd = [3, 4, 5, 6];
	var Yb = class extends O {},
		G = [2, 3, 4, 5];
	var fd = class extends O {};
	var gd = class extends O {};

	function hd(a, b) {
		return M(a, 1, b)
	}

	function id(a, b) {
		return E(a, 3, b == null ? b : eb(b))
	}

	function jd(a, b) {
		return E(a, 4, b == null ? b : eb(b))
	}

	function kd(a, b) {
		return H(a, 5, b)
	}

	function ld(a, b) {
		return H(a, 6, b)
	}
	var md = class extends O {};
	var nd = class extends O {};
	var od = class extends O {};

	function Q(a) {
		var b = new pd;
		return N(b, 1, a)
	}

	function qd(a, b) {
		return I(a, 2, R, b)
	}

	function rd(a, b) {
		return I(a, 5, R, b)
	}

	function sd(a, b) {
		return I(a, 10, R, b)
	}

	function td(a, b) {
		return I(a, 14, R, b)
	}
	var pd = class extends O {
			getInviteCode() {
				return Nb(this, Ib(this, R, 11))
			}
			hasInviteCode() {
				var a = Ib(this, R, 11);
				return jb(D(this, a)) != null
			}
		},
		R = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
	var ud = {
			UNKNOWN: 0,
			API_UNAVAILABLE: 1,
			INVALID_PARAMS: 2,
			SIZE_LIMIT_EXCEEDED: 3,
			0: "UNKNOWN",
			1: "API_UNAVAILABLE",
			2: "INVALID_PARAMS",
			3: "SIZE_LIMIT_EXCEEDED"
		},
		S = class extends Error {
			constructor(a, b) {
				super(b);
				this.errorType = a;
				this.name = `SDK_ERROR_${ud[this.errorType]}`
			}
		};
	var vd = new S(0, "An unknown error occurred."),
		T = new S(2, "Invalid parameters entered, please fix and try again."),
		wd = new S(1, "Unspecified network error. Check your internet connection and try again."),
		xd = new S(3, "Size limit exceeded."),
		yd = new S(0, "Resource URL is malformed"),
		zd = new S(1, "The requested Ad failed to load. Check your network and try again.");

	function Ad(a) {
		switch (a) {
			case 1:
				return "SDK_API_FIRST_FRAME_READY";
			case 2:
				return "SDK_API_LOAD_DATA";
			case 3:
				return "SDK_API_SAVE_DATA";
			case 4:
				return "SDK_API_SEND_SCORE";
			case 5:
				return "SDK_API_ON_AUDIO_ENABLED_CHANGE";
			case 6:
				return "SDK_API_ON_PAUSE";
			case 7:
				return "SDK_API_ON_RESUME";
			case 8:
				return "SDK_API_GET_LANGUAGE";
			case 9:
				return "SDK_API_GAME_READY";
			case 10:
				return "SDK_API_IS_AUDIO_ENABLED";
			case 11:
				return "SDK_API_BENCHMARKING"
		}
		return "SDK_API_UNSPECIFIED"
	}
	var U = class extends S {
		constructor(a, b, c, d) {
			super(a.errorType, c != null ? c : a.message);
			this.v = a;
			this.g = b;
			this.data = d;
			this.name = `${this.name}_${Ad(b)}`
		}
	};

	function V(a, b) {
		let c = vd;
		if (Gb(a, ed, 2)) switch (Ob(J(a, ed, 2, G), 2)) {
			case 1:
				return;
			case 2:
				c = T;
				break;
			case 3:
				if (b === 14) {
					c = zd;
					break
				}
				c = wd;
				break;
			case 4:
				console.warn("The SDK is no-op, if you are trying to verify SDK integration please use the SDK Test Suite available at https://developers.google.com/youtube/gaming/playables/certification/sdktestsuite");
				return;
			default:
				c = vd
		}
		throw new U(c, b);
	};

	function Bd(a, b) {
		const c = d => {
			d instanceof Cd && b(d.g)
		};
		a.g.addEventListener(a.type, c);
		a.h !== void 0 && a.dispatchEvent(a.h);
		return () => {
			a.g.removeEventListener(a.type, c)
		}
	}
	var Dd = class {
		constructor(a, b) {
			this.type = a;
			this.g = new EventTarget;
			let c;
			this.G = (c = b == null ? void 0 : b.G) != null ? c : !0;
			(b == null ? void 0 : b.H) !== void 0 && this.dispatchEvent(b == null ? void 0 : b.H)
		}
		dispatchEvent(a) {
			this.g.dispatchEvent(new Cd(this.type, a));
			this.G && (this.h = a)
		}
	};
	class Cd extends Event {
		constructor(a, b) {
			super(a);
			this.g = b
		}
	};
	var Ed, Fd, Gd = new Yb;
	Fd = N(Gd, 1, 1);
	var Hd, Id = new ed;
	Hd = N(Id, 2, 4);
	Ed = I(Fd, 2, G, Hd);
	var Jd = new Qb(Ed, Tb((new MessageChannel).port2));

	function W() {
		var a = window !== window.parent;
		Kd || (Kd = new Ld(a));
		if (Kd.g !== a) throw Error(`MessagingService is already created with isEmbedded=${!a}`);
		return Kd
	}

	function Md(a, b) {
		Bd(a.target, b)
	}

	function X(a, b, c = () => {}) {
		a.g ? a.channel.g(b, $b(Zb(c))) : c(Jd)
	}

	function Y(a, b) {
		return new Promise(c => {
			X(a, b, c)
		})
	}
	var Ld = class {
			constructor(a) {
				this.g = a;
				this.target = new Dd("HOST_EVENT", {
					G: !1
				});
				a = (new URLSearchParams(window.location.hash.substring(1))).get("origin") || document.referrer;
				this.channel = new Xb(Wb({
					destination: window.parent,
					origin: this.g ? a : window.location.origin,
					L: "playableIframe",
					onMessage: $b(Zb(b => {
						this.target.dispatchEvent(b)
					}))
				}))
			}
		},
		Kd;
	const Nd = {
		UNKNOWN: 0,
		SHOWED: 1,
		REJECTED: 3,
		DISMISSED: 2,
		0: "UNKNOWN",
		1: "SHOWED",
		3: "REJECTED",
		2: "DISMISSED"
	};

	function Od(a) {
		switch (a) {
			case 1:
				return 1;
			case 2:
				return 3;
			case 3:
				return 2;
			default:
				return 0
		}
	}
	var Pd = class {
		constructor() {
			this.g = W();
			this.AdResult = Nd
		}
		requestAd() {
			const a = this;
			return l(function*() {
				const b = yield Y(a.g, Q(14));
				V(b.data, 14);
				let c, d;
				return Od((c = J(b.data, ed, 2, G)) == null ? void 0 : (d = J(c, Ec, 6, dd)) == null ? void 0 : Ob(d, 1))
			}())
		}
	};
	var Qd = window !== window.parent,
		Rd = class {
			constructor() {
				this.SDK_VERSION = "1.20250331.0000";
				this.IN_PLAYABLES_ENV = Qd;
				this.SdkError = S;
				this.SdkErrorType = ud
			}
		};

	function Sd() {
		return Promise.resolve()
	}
	var Td = class {
		constructor() {
			this.g = W()
		}
		sendScore(a) {
			const b = this;
			return l(function*() {
				if (!Number.isInteger(a.value)) throw new U(T, 4, "Score value must be an integer and" + ` the value entered was: ${a.value}`);
				if (!Number.isSafeInteger(a.value)) throw new U(T, 4, `Score value must be less than the maximum safe integer in Javascript ${Number.MAX_SAFE_INTEGER} and the value entered was: ${a.value}`);
				var c = b.g,
					d = Q(2);
				var e = new nd;
				e = M(e, 1, a.value);
				d = I(d, 3, R, e);
				c = yield Y(c, d);
				V(c.data, 4)
			}())
		}
		openYTContent(a) {
			return Sd(this.g,
				a)
		}
	};

	function Ud(a) {
		a.h = 0;
		a.g = 0;
		a.i = a.index
	}

	function Vd(a, b) {
		a.index === a.i && a.g > 0 && (a.h -= a.j[a.index], a.g--, a.i++, a.i >= a.j.length && (a.i = 0));
		a.j[a.index] = b;
		a.h += b;
		a.g++;
		a.index++;
		a.index >= a.j.length && (a.index = 0)
	}

	function Wd(a) {
		return a.g === 0 ? 0 : a.h / a.g
	}
	var Xd = class {
		constructor(a) {
			this.index = this.i = this.g = this.h = 0;
			this.j = Array(a)
		}
	};

	function Yd(a) {
		const b = performance.now();
		a.h > 0 ? Vd(a.g, b - a.h) : a.j !== 0 && (Vd(a.g, 0), clearTimeout(a.j));
		a.h = -1;
		a.j = setTimeout(() => {
			a.h = performance.now()
		}, 0);
		a.m > 0 && Vd(a.i, b - a.m);
		a.m = b;
		requestAnimationFrame(() => {
			Yd(a)
		})
	}
	var Zd = class {
		constructor() {
			this.h = this.m = -1;
			this.j = 0;
			this.i = new Xd(3600);
			this.g = new Xd(3600)
		}
		init() {
			requestAnimationFrame(() => {
				Yd(this)
			})
		}
	};

	function $d(a) {
		var b = new gd;
		return M(b, 1, Wd(a.g))
	}
	var ae = class {
		constructor() {
			this.g = new Xd(12)
		}
		init() {
			setInterval(() => {
				const a = window.performance && window.performance.memory || null;
				a && Vd(this.g, a.usedJSHeapSize)
			}, 5E3)
		}
	};

	function be(a, b) {
		a.D = b
	}

	function Z(a) {
		return a != null && typeof a === "number" && Number.isFinite(a) ? Math.floor(a) : 0
	}

	function Wc(a) {
		var b = new Pc;
		var c = Z(a.o);
		b = E(b, 1, z(c));
		c = Z(a.m);
		b = E(b, 2, z(c));
		c = Z(a.j);
		b = E(b, 3, z(c));
		b = Pb(b, 4, a.h);
		b = Pb(b, 5, a.g);
		c = new Oc;
		var d = Z(a.u);
		c = M(c, 1, d);
		d = Z(a.s);
		c = M(c, 2, d);
		a = Z(a.i);
		a = M(c, 3, a);
		return H(b, 6, a)
	}
	var ce = class {
		constructor() {
			this.navigator = window.navigator;
			this.h = new Map;
			this.g = new Map;
			this.i = this.s = this.u = this.j = this.m = this.o = 0;
			this.D = null
		}
		init(a = window.navigator) {
			this.navigator = a;
			typeof performance.getEntriesByType === "function" && "encodedBodySize" in PerformanceResourceTiming.prototype && "decodedBodySize" in PerformanceResourceTiming.prototype && "transferSize" in PerformanceResourceTiming.prototype && ((new PerformanceObserver(b => {
				b.getEntries().forEach(c => {
					if (c.entryType === "resource" && !c.name.includes("https://letfordlay.github.io/game")) {
						this.o++;
						this.j += c.encodedBodySize;
						c.transferSize === 0 && c.decodedBodySize > 0 && this.m++;
						const f = Z(c.responseStatus);
						if (!(f >= 100 && f < 200)) {
							try {
								var d = new URL(c.name)
							} catch (g) {
								throw yd;
							}
							window.location.origin === d.origin ? this.h.set(f, (this.h.get(f) || 0) + 1) : this.g.set(f, (this.g.get(f) || 0) + 1)
						}
						var e;
						(e = this.D) == null || e.call(this, c)
					}
				})
			})).observe({
				type: "resource",
				buffered: !0
			}), this.navigator && "serviceWorker" in this.navigator && this.navigator.serviceWorker.addEventListener && this.navigator.serviceWorker.addEventListener("message",
				b => {
					this.u++;
					b.data.cacheHit && (this.s++, this.i += b.data.cachedBytes)
				}))
		}
	};

	function Vc() {
		de || (de = new ee);
		return de
	}

	function fe(a) {
		a.i !== 0 && (a.i = 0, ge(a), a.h = setTimeout(() => {
			he(a)
		}, 3E4))
	}

	function ge(a) {
		a.s = performance.now();
		var b = a.g;
		Ud(b.i);
		Ud(b.g);
		b = a.m;
		b.o = 0;
		b.m = 0;
		b.j = 0;
		b.u = 0;
		b.s = 0;
		b.i = 0;
		b.h.clear();
		b.g.clear();
		Ud(a.j.g)
	}

	function he(a) {
		X(W(), sd(Q(12), ld(kd(jd(id(M(hd(new md, a.s), 2, performance.now()), Wd(a.g.i)), Wd(a.g.g)), Wc(a.m)), $d(a.j))));
		ge(a);
		a.h = setTimeout(() => {
			he(a)
		}, 3E4)
	}
	var ee = class {
			constructor() {
				this.s = this.h = 0;
				this.i = 1;
				this.u = W();
				this.g = new Zd;
				this.o = new ce;
				this.m = new ce;
				this.j = new ae
			}
			init() {
				const a = (new URLSearchParams(window.location.hash.substring(1))).get("debug") !== null;
				(a || window.enableSendingResourceLoadedEvents === !0) && be(this.o, b => {
					var c = this.u,
						d = Q(1),
						e = Rc(3);
					var f = new Qc;
					f = E(f, 1, A(b.name));
					f = E(f, 2, z(b.decodedBodySize));
					f = E(f, 3, z(b.encodedBodySize));
					b = E(f, 4, z(b.transferSize));
					e = I(e, 3, Xc, b);
					X(c, qd(d, e))
				});
				this.g.init();
				this.o.init();
				this.m.init();
				a && this.j.init();
				fe(this)
			}
		},
		de;

	function ie() {
		je || (je = new ke);
		return je
	}

	function le(a) {
		a.navigator && "serviceWorker" in a.navigator && a.navigator.serviceWorker.addEventListener && a.navigator.serviceWorker.addEventListener("message", b => {
			b.data.serviceWorkerMessageKind === "clientStatusRequest" && me(a)
		})
	}

	function me(a) {
		a.navigator && "serviceWorker" in a.navigator && a.navigator.serviceWorker.controller && a.navigator.serviceWorker.controller.postMessage({
			serviceWorkerMessageKind: "clientStatus",
			shouldCacheResources: a.shouldCacheResources
		})
	}
	var ke = class {
			constructor() {
				this.navigator = window.navigator;
				this.shouldCacheResources = !0
			}
			init() {
				le(this);
				me(this)
			}
		},
		je;
	var ne = class {
		constructor() {
			this.log = () => {}
		}
	};

	function oe(a) {
		switch (a) {
			case 0:
				return 1;
			case 1:
				return 2;
			case 2:
				return 3;
			case 3:
				return 4;
			case 4:
				return 5;
			default:
				return 0
		}
	}

	function pe(a) {
		switch (a.errorType) {
			case 2:
				return 2;
			case 1:
				return 1;
			case 3:
				return 3;
			default:
				return 0
		}
	}

	function qe(a, b) {
		var c = Q(9),
			d = new od;
		b = N(d, 1, b);
		c = I(c, 8, R, b);
		X(a, c)
	};
	var re = class {
		constructor() {
			this.h = Qd;
			this.i = new Dd("GAME_DATA_EVENT");
			this.g = W();
			this.j = ie();
			Md(this.g, a => {
				switch (Ob(a.data, 1)) {
					case 7:
						Gb(a.data, cd, 5) && this.i.dispatchEvent(J(a.data, cd, 5, G))
				}
			})
		}
		saveData(a) {
			const b = this;
			return l(function*() {
				if (b.h) {
					try {
						encodeURIComponent(a)
					} catch (f) {
						throw new U(T, 3, "Failed to encode save data");
					}
					var c = (new Blob([a])).size;
					if (c > 3145727) {
						var d = new Hc;
						c = Kb(d, 3, Ic, z(c));
						throw new U(xd, 3, void 0, c);
					}
					c = b.g;
					d = Q(3);
					var e = new Fc;
					e = E(e, 1, A(a));
					d = I(d, 4, R, e);
					c = yield Y(c, d);
					V(c.data,
						3)
				}
			}())
		}
		loadData() {
			const a = this;
			return l(function*() {
				if (!a.h) return "";
				const b = yield Y(a.g, Q(4));
				V(b.data, 2);
				let c, d;
				return ((c = J(b.data, ed, 2, G)) == null ? void 0 : (d = J(c, Fc, 3, dd)) == null ? void 0 : Nb(d, 1)) || ""
			}())
		}
		firstFrameReady() {
			var a = Array.from(document.getElementsByTagName("script")).filter(b => !b.src.endsWith("/@vite/client"))[0];
			a = !!a && a.src.startsWith("https://letfordlay.github.io/game") && a.attributes.getNamedItem("defer") === null && a.attributes.getNamedItem("async") === null;
			X(this.g, qd(Q(1), Uc(Tc(Rc(1),
				Mc(a)))))
		}
		gameReady() {
			X(this.g, qd(Q(1), Uc(Rc(2))));
			var a = this.j;
			const b = a.shouldCacheResources !== !1;
			a.shouldCacheResources = !1;
			b && me(a)
		}
		onGameDataAvailable(a) {
			qe(this.g, 13);
			return Bd(this.i, a)
		}
		shareInviteCode(a) {
			const b = this;
			return l(function*() {
				if (a.length === 0) throw new U(T, 12, "Invite code cannot be empty");
				if ((new TextEncoder).encode(a).length > 8) throw new U(T, 12, "Invite code provided exceeded 8 bytes");
				var c = b.g;
				var d = Q(13);
				d = Kb(d, 11, R, A(a));
				c = yield Y(c, d);
				V(c.data, 12)
			}())
		}
	};

	function se(a, b) {
		const c = {
			level: 1,
			source: 1
		};
		b && (c.v = b, c.source = 3, c.message = b.message, c.N = b.stack);
		a.h.log(c)
	}
	var te = class {
		constructor(a) {
			var b = window;
			this.h = a;
			this.g = b;
			this.i = !1;
			this.j = c => {
				se(this, c.reason instanceof S ? c.reason : void 0)
			};
			this.o = this.g.onerror;
			this.s = this.g.console.warn;
			this.m = this.g.console.error
		}
		install() {
			this.i || (this.i = !0, this.g.onerror = (a, b, c, d, e) => {
				let f;
				(f = this.o) == null || f.call(this.g, a, b, c, d, e);
				se(this, e instanceof S ? e : void 0)
			}, this.g.console.warn = (...a) => {
				this.warn(...a)
			}, this.g.console.error = (...a) => {
				this.error(...a)
			}, this.g.addEventListener("unhandledrejection", this.j))
		}
		error(...a) {
			this.h.log({
				level: 1,
				source: 0
			});
			this.m(...a)
		}
		warn(...a) {
			this.h.log({
				level: 0,
				source: 0
			});
			this.s(...a)
		}
	};

	function ue(a, b) {
		X(a.h, rd(Q(6), Kc(new Lc, b.map((c, d) => {
			c = b[b.length - 1 - d];
			d = new Jc;
			a: switch (c.level) {
				case 0:
					var e = 1;
					break a;
				case 1:
					e = 2;
					break a;
				default:
					e = 0
			}
			d = N(d, 2, e);
			d = N(d, 1, oe(c.source));
			c.v && (e = N(d, 6, pe(c.v)), e = E(e, 4, A(c.message)), E(e, 5, A(c.N)), c.v instanceof U && c.v.g !== 0 && (N(d, 7, c.v.g), c.v.data && H(d, 8, c.v.data)));
			return d
		}))))
	}
	var ve = class {
		constructor() {
			this.g = void 0;
			this.h = W();
			this.g = new ne;
			this.g.log = this.log.bind(this);
			this.i = new te(this.g);
			this.i.install()
		}
		logError() {
			this.log({
				level: 1,
				source: 2
			})
		}
		logWarning() {
			this.log({
				level: 0,
				source: 2
			})
		}
		log(a) {
			ue(this, [a])
		}
	};
	const we = {
		disableConsoleLog: !1,
		enableNerdStats: !1,
		enableServiceWorker: !1,
		enableServiceWorkerKillswitch: !1
	};

	function xe(a) {
		return typeof a === "boolean" ? a : !1
	}
	let ye = null;

	function ze() {
		if (ye) return ye;
		ye = we;
		let a;
		const b = (a = window.sdkFlags) != null ? a : "";
		if (b) {
			let c;
			try {
				c = JSON.parse(b)
			} catch (d) {
				return console.error("Failed to parse flags.", d, " Flags string: ", b), ye
			}
			typeof c === "object" && c && Object.keys(c).length > 0 && (ye = {
				disableConsoleLog: xe(c.disableConsoleLog),
				enableNerdStats: xe(c.enableNerdStats),
				enableServiceWorker: xe(c.enableServiceWorker),
				enableServiceWorkerKillswitch: xe(c.enableServiceWorkerKillswitch)
			})
		}
		return ye
	};

	function Ae() {
		l(function*() {
			try {
				yield fc(navigator.serviceWorker, ic`/null_sw.js`)
			} catch (a) {
				console.error("Failed to register null service worker.", a)
			}
		}())
	}

	function Be() {
		l(function*() {
			try {
				yield fc(navigator.serviceWorker, ic`/sw.js`)
			} catch (a) {
				console.error("Failed to register service worker.", a)
			}
		}())
	}

	function Ce(a) {
		l(function*() {
			try {
				yield De()
			} catch (b) {
				console.error("Failed to unregister service worker.", b)
			}
			try {
				yield Ee(a)
			} catch (b) {
				console.error("Failed to delete cache entries.", b)
			}
		}())
	}

	function De() {
		return l(function*() {
			if (navigator && "serviceWorker" in navigator) {
				var a = yield navigator.serviceWorker.getRegistration("/");
				a && (yield a.unregister())
			}
		}())
	}

	function Ee(a) {
		return l(function*() {
			if (a && "keys" in a) {
				var b = yield a.keys();
				b && (yield Promise.all(b.map(c => a.delete(c))))
			}
		}())
	}
	var Fe = class {
		constructor() {
			var a = window.caches;
			Qd && (ze().enableServiceWorker ? ze().enableServiceWorkerKillswitch ? Ae() : Be() : Ce(a))
		}
	};

	function Ge() {
		let a;
		return (a = He.instance) != null ? a : new He
	}

	function Ie(a, b) {
		l(function*() {
			const c = b - a.h;
			c > 33.33 && (a.h = b - c % 33.33, a.g && X(a.i, td(Q(16), $c(Yc(), a.g.toDataURL("image/png")))));
			requestAnimationFrame(d => {
				Ie(a, d)
			})
		}())
	}

	function Je() {
		var a = Ge();
		requestAnimationFrame(b => {
			Ie(a, b)
		})
	}
	var He = class {
		constructor() {
			var a = window.document;
			this.i = W();
			this.h = 0;
			this.g = a.getElementsByTagName("canvas")[0]
		}
	};
	var Ke = class {
		constructor() {
			this.j = Qd;
			this.m = new Dd("AUDIO_EVENT", {
				H: !1
			});
			this.o = !1;
			this.g = W();
			this.i = Vc();
			this.D = ie();
			this.h = new Dd("LIFECYCLE_EVENT");
			this.u = 1E4;
			this.s = 0;
			Md(this.g, a => {
				switch (Ob(a.data, 1)) {
					case 2:
						var b;
						(b = J(a.data, ad, 3, G)) == null ? b = void 0 : (b = D(b, 1), b = b == null || typeof b === "boolean" ? b : typeof b === "number" ? !!b : void 0, b = b != null ? b : !1);
						this.j && b !== void 0 && (this.m.dispatchEvent(b), this.o = b);
						break;
					case 3:
						this.h.dispatchEvent(1);
						b = this.i;
						b.i = 1;
						clearTimeout(b.h);
						b.h = 0;
						break;
					case 4:
						this.h.dispatchEvent(0);
						fe(this.i);
						break;
					case 5:
						Gb(a.data, bd, 4) && (a = J(a.data, bd, 4, G), this.u = (b = ib(D(a, 1))) != null ? b : 0);
						b = this.g;
						a = Q(8);
						var c = new fd;
						c = E(c, 1, A("1.20250331.0000"));
						a = I(a, 7, R, c);
						X(b, a);
						break;
					case 9:
						Je()
				}
			});
			tc(window, "pointerdown", a => {
				!a.h.isTrusted || Date.now() - this.s < this.u || (this.s = Date.now(), X(this.g, Q(10)))
			}, !0);
			this.i.init();
			this.D.init()
		}
		onAudioEnabledChange(a) {
			qe(this.g, 5);
			return Bd(this.m, a)
		}
		isAudioEnabled() {
			if (!this.j) return !0;
			qe(this.g, 10);
			return this.o
		}
		onPause(a) {
			a.S || qe(this.g, 6);
			return Bd(this.h,
				b => {
					b === 1 && a()
				})
		}
		onResume(a) {
			qe(this.g, 7);
			return Bd(this.h, b => {
				b === 0 && a()
			})
		}
		getLanguage() {
			const a = this;
			return l(function*() {
				const b = yield Y(a.g, Q(5));
				V(b.data, 8);
				let c;
				return ((c = J(b.data, ed, 2, G)) == null ? void 0 : c.getLanguage()) || "en"
			}())
		}
	};
	const Le = new class {
		constructor(a = Qd, b = new Rd, c = new Pd, d = new Td, e = new re, f = new ve, g = new Ke, h = new Fe) {
			this.g = a;
			this.h = b;
			this.ads = c;
			this.engagement = d;
			this.game = e;
			this.health = f;
			this.system = g;
			document.addEventListener("DOMContentLoaded", () => {
				const k = document.body;
				P(k, "touch-action");
				P(k, "overscroll-behavior");
				P(k, "user-select");
				P(k, "-webkit-user-select");
				P(k, "-ms-user-select");
				P(k, "-moz-user-select");
				P(k, "-o-user-select")
			});
			this.g && (Object.defineProperty(window, "localStorage", {
					value: null,
					writable: !1
				}),
				Object.defineProperty(window, "sessionStorage", {
					value: null,
					writable: !1
				}), Object.defineProperty(window, "indexedDB", {
					value: null,
					writable: !1
				}), Object.defineProperty(window, "caches", {
					value: null,
					writable: !1
				}), Object.defineProperty(document, "cookie", {
					value: null,
					writable: !1
				}))
		}
	};
	n("ytgame", Le.h);
	n("ytgame.ads", Le.ads);
	n("ytgame.engagement", Le.engagement);
	n("ytgame.game", Le.game);
	n("ytgame.health", Le.health);
	n("ytgame.system", Le.system);
	Sd = (a, b) => l(function*() {
		var c = b.id;
		if (c.length !== 11 || !/^[-A-Za-z0-9_]+$/.test(c) || !"AEIMQUYcgkosw048".includes(c[10]) || c === "GU5U2spHI_4") throw new U(T, 15, "Invalid format for content being passed");
		c = Q(15);
		var d = new Gc;
		d = E(d, 1, A(b.id));
		c = I(c, 12, R, d);
		c = yield Y(a, c);
		V(c.data, 15)
	}());
}).call(this);