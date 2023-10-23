(self["webpackChunkiris"] = self["webpackChunkiris"] || []).push([["polyfills"],{

/***/ 3591:
/*!****************************************************************************!*\
  !*** ./node_modules/@webcomponents/custom-elements/custom-elements.min.js ***!
  \****************************************************************************/
/***/ (() => {

(function () {
  /*
  
   Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   Google as part of the polymer project is also subject to an additional IP
   rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';

  var n = window.Document.prototype.createElement,
    p = window.Document.prototype.createElementNS,
    aa = window.Document.prototype.importNode,
    ba = window.Document.prototype.prepend,
    ca = window.Document.prototype.append,
    da = window.DocumentFragment.prototype.prepend,
    ea = window.DocumentFragment.prototype.append,
    q = window.Node.prototype.cloneNode,
    r = window.Node.prototype.appendChild,
    t = window.Node.prototype.insertBefore,
    u = window.Node.prototype.removeChild,
    v = window.Node.prototype.replaceChild,
    w = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
    y = window.Element.prototype.attachShadow,
    z = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
    A = window.Element.prototype.getAttribute,
    B = window.Element.prototype.setAttribute,
    C = window.Element.prototype.removeAttribute,
    D = window.Element.prototype.getAttributeNS,
    E = window.Element.prototype.setAttributeNS,
    F = window.Element.prototype.removeAttributeNS,
    G = window.Element.prototype.insertAdjacentElement,
    H = window.Element.prototype.insertAdjacentHTML,
    fa = window.Element.prototype.prepend,
    ha = window.Element.prototype.append,
    ia = window.Element.prototype.before,
    ja = window.Element.prototype.after,
    ka = window.Element.prototype.replaceWith,
    la = window.Element.prototype.remove,
    ma = window.HTMLElement,
    I = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
    na = window.HTMLElement.prototype.insertAdjacentElement,
    oa = window.HTMLElement.prototype.insertAdjacentHTML;
  var pa = new Set();
  "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function (a) {
    return pa.add(a);
  });
  function qa(a) {
    var b = pa.has(a);
    a = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);
    return !b && a;
  }
  var ra = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
  function J(a) {
    var b = a.isConnected;
    if (void 0 !== b) return b;
    if (ra(a)) return !0;
    for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
    return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
  }
  function K(a) {
    var b = a.children;
    if (b) return Array.prototype.slice.call(b);
    b = [];
    for (a = a.firstChild; a; a = a.nextSibling) a.nodeType === Node.ELEMENT_NODE && b.push(a);
    return b;
  }
  function L(a, b) {
    for (; b && b !== a && !b.nextSibling;) b = b.parentNode;
    return b && b !== a ? b.nextSibling : null;
  }
  function M(a, b, c) {
    for (var f = a; f;) {
      if (f.nodeType === Node.ELEMENT_NODE) {
        var d = f;
        b(d);
        var e = d.localName;
        if ("link" === e && "import" === d.getAttribute("rel")) {
          f = d.import;
          void 0 === c && (c = new Set());
          if (f instanceof Node && !c.has(f)) for (c.add(f), f = f.firstChild; f; f = f.nextSibling) M(f, b, c);
          f = L(a, d);
          continue;
        } else if ("template" === e) {
          f = L(a, d);
          continue;
        }
        if (d = d.__CE_shadowRoot) for (d = d.firstChild; d; d = d.nextSibling) M(d, b, c);
      }
      f = f.firstChild ? f.firstChild : L(a, f);
    }
  }
  ;
  function N() {
    var a = !(null === O || void 0 === O || !O.noDocumentConstructionObserver),
      b = !(null === O || void 0 === O || !O.shadyDomFastWalk);
    this.m = [];
    this.g = [];
    this.j = !1;
    this.shadyDomFastWalk = b;
    this.I = !a;
  }
  function P(a, b, c, f) {
    var d = window.ShadyDOM;
    if (a.shadyDomFastWalk && d && d.inUse) {
      if (b.nodeType === Node.ELEMENT_NODE && c(b), b.querySelectorAll) for (a = d.nativeMethods.querySelectorAll.call(b, "*"), b = 0; b < a.length; b++) c(a[b]);
    } else M(b, c, f);
  }
  function sa(a, b) {
    a.j = !0;
    a.m.push(b);
  }
  function ta(a, b) {
    a.j = !0;
    a.g.push(b);
  }
  function Q(a, b) {
    a.j && P(a, b, function (c) {
      return R(a, c);
    });
  }
  function R(a, b) {
    if (a.j && !b.__CE_patched) {
      b.__CE_patched = !0;
      for (var c = 0; c < a.m.length; c++) a.m[c](b);
      for (c = 0; c < a.g.length; c++) a.g[c](b);
    }
  }
  function S(a, b) {
    var c = [];
    P(a, b, function (d) {
      return c.push(d);
    });
    for (b = 0; b < c.length; b++) {
      var f = c[b];
      1 === f.__CE_state ? a.connectedCallback(f) : T(a, f);
    }
  }
  function U(a, b) {
    var c = [];
    P(a, b, function (d) {
      return c.push(d);
    });
    for (b = 0; b < c.length; b++) {
      var f = c[b];
      1 === f.__CE_state && a.disconnectedCallback(f);
    }
  }
  function V(a, b, c) {
    c = void 0 === c ? {} : c;
    var f = c.J,
      d = c.upgrade || function (g) {
        return T(a, g);
      },
      e = [];
    P(a, b, function (g) {
      a.j && R(a, g);
      if ("link" === g.localName && "import" === g.getAttribute("rel")) {
        var h = g.import;
        h instanceof Node && (h.__CE_isImportDocument = !0, h.__CE_registry = document.__CE_registry);
        h && "complete" === h.readyState ? h.__CE_documentLoadHandled = !0 : g.addEventListener("load", function () {
          var k = g.import;
          if (!k.__CE_documentLoadHandled) {
            k.__CE_documentLoadHandled = !0;
            var l = new Set();
            f && (f.forEach(function (m) {
              return l.add(m);
            }), l.delete(k));
            V(a, k, {
              J: l,
              upgrade: d
            });
          }
        });
      } else e.push(g);
    }, f);
    for (b = 0; b < e.length; b++) d(e[b]);
  }
  function T(a, b) {
    try {
      var c = b.ownerDocument,
        f = c.__CE_registry;
      var d = f && (c.defaultView || c.__CE_isImportDocument) ? W(f, b.localName) : void 0;
      if (d && void 0 === b.__CE_state) {
        d.constructionStack.push(b);
        try {
          try {
            if (new d.constructorFunction() !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
          } finally {
            d.constructionStack.pop();
          }
        } catch (k) {
          throw b.__CE_state = 2, k;
        }
        b.__CE_state = 1;
        b.__CE_definition = d;
        if (d.attributeChangedCallback && b.hasAttributes()) {
          var e = d.observedAttributes;
          for (d = 0; d < e.length; d++) {
            var g = e[d],
              h = b.getAttribute(g);
            null !== h && a.attributeChangedCallback(b, g, null, h, null);
          }
        }
        J(b) && a.connectedCallback(b);
      }
    } catch (k) {
      X(k);
    }
  }
  N.prototype.connectedCallback = function (a) {
    var b = a.__CE_definition;
    if (b.connectedCallback) try {
      b.connectedCallback.call(a);
    } catch (c) {
      X(c);
    }
  };
  N.prototype.disconnectedCallback = function (a) {
    var b = a.__CE_definition;
    if (b.disconnectedCallback) try {
      b.disconnectedCallback.call(a);
    } catch (c) {
      X(c);
    }
  };
  N.prototype.attributeChangedCallback = function (a, b, c, f, d) {
    var e = a.__CE_definition;
    if (e.attributeChangedCallback && -1 < e.observedAttributes.indexOf(b)) try {
      e.attributeChangedCallback.call(a, b, c, f, d);
    } catch (g) {
      X(g);
    }
  };
  function ua(a, b, c, f) {
    var d = b.__CE_registry;
    if (d && (null === f || "http://www.w3.org/1999/xhtml" === f) && (d = W(d, c))) try {
      var e = new d.constructorFunction();
      if (void 0 === e.__CE_state || void 0 === e.__CE_definition) throw Error("Failed to construct '" + c + "': The returned value was not constructed with the HTMLElement constructor.");
      if ("http://www.w3.org/1999/xhtml" !== e.namespaceURI) throw Error("Failed to construct '" + c + "': The constructed element's namespace must be the HTML namespace.");
      if (e.hasAttributes()) throw Error("Failed to construct '" + c + "': The constructed element must not have any attributes.");
      if (null !== e.firstChild) throw Error("Failed to construct '" + c + "': The constructed element must not have any children.");
      if (null !== e.parentNode) throw Error("Failed to construct '" + c + "': The constructed element must not have a parent node.");
      if (e.ownerDocument !== b) throw Error("Failed to construct '" + c + "': The constructed element's owner document is incorrect.");
      if (e.localName !== c) throw Error("Failed to construct '" + c + "': The constructed element's local name is incorrect.");
      return e;
    } catch (g) {
      return X(g), b = null === f ? n.call(b, c) : p.call(b, f, c), Object.setPrototypeOf(b, HTMLUnknownElement.prototype), b.__CE_state = 2, b.__CE_definition = void 0, R(a, b), b;
    }
    b = null === f ? n.call(b, c) : p.call(b, f, c);
    R(a, b);
    return b;
  }
  function X(a) {
    var b = "",
      c = "",
      f = 0,
      d = 0;
    a instanceof Error ? (b = a.message, c = a.sourceURL || a.fileName || "", f = a.line || a.lineNumber || 0, d = a.column || a.columnNumber || 0) : b = "Uncaught " + String(a);
    var e = void 0;
    void 0 === ErrorEvent.prototype.initErrorEvent ? e = new ErrorEvent("error", {
      cancelable: !0,
      message: b,
      filename: c,
      lineno: f,
      colno: d,
      error: a
    }) : (e = document.createEvent("ErrorEvent"), e.initErrorEvent("error", !1, !0, b, c, f), e.preventDefault = function () {
      Object.defineProperty(this, "defaultPrevented", {
        configurable: !0,
        get: function () {
          return !0;
        }
      });
    });
    void 0 === e.error && Object.defineProperty(e, "error", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return a;
      }
    });
    window.dispatchEvent(e);
    e.defaultPrevented || console.error(a);
  }
  ;
  function va() {
    var a = this;
    this.g = void 0;
    this.F = new Promise(function (b) {
      a.l = b;
    });
  }
  va.prototype.resolve = function (a) {
    if (this.g) throw Error("Already resolved.");
    this.g = a;
    this.l(a);
  };
  function wa(a) {
    var b = document;
    this.l = void 0;
    this.h = a;
    this.g = b;
    V(this.h, this.g);
    "loading" === this.g.readyState && (this.l = new MutationObserver(this.G.bind(this)), this.l.observe(this.g, {
      childList: !0,
      subtree: !0
    }));
  }
  function xa(a) {
    a.l && a.l.disconnect();
  }
  wa.prototype.G = function (a) {
    var b = this.g.readyState;
    "interactive" !== b && "complete" !== b || xa(this);
    for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, f = 0; f < c.length; f++) V(this.h, c[f]);
  };
  function Y(a) {
    this.s = new Map();
    this.u = new Map();
    this.C = new Map();
    this.A = !1;
    this.B = new Map();
    this.o = function (b) {
      return b();
    };
    this.i = !1;
    this.v = [];
    this.h = a;
    this.D = a.I ? new wa(a) : void 0;
  }
  Y.prototype.H = function (a, b) {
    var c = this;
    if (!(b instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");
    ya(this, a);
    this.s.set(a, b);
    this.v.push(a);
    this.i || (this.i = !0, this.o(function () {
      return za(c);
    }));
  };
  Y.prototype.define = function (a, b) {
    var c = this;
    if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
    ya(this, a);
    Aa(this, a, b);
    this.v.push(a);
    this.i || (this.i = !0, this.o(function () {
      return za(c);
    }));
  };
  function ya(a, b) {
    if (!qa(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");
    if (W(a, b)) throw Error("A custom element with name '" + (b + "' has already been defined."));
    if (a.A) throw Error("A custom element is already being defined.");
  }
  function Aa(a, b, c) {
    a.A = !0;
    var f;
    try {
      var d = c.prototype;
      if (!(d instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
      var e = function (m) {
        var x = d[m];
        if (void 0 !== x && !(x instanceof Function)) throw Error("The '" + m + "' callback must be a function.");
        return x;
      };
      var g = e("connectedCallback");
      var h = e("disconnectedCallback");
      var k = e("adoptedCallback");
      var l = (f = e("attributeChangedCallback")) && c.observedAttributes || [];
    } catch (m) {
      throw m;
    } finally {
      a.A = !1;
    }
    c = {
      localName: b,
      constructorFunction: c,
      connectedCallback: g,
      disconnectedCallback: h,
      adoptedCallback: k,
      attributeChangedCallback: f,
      observedAttributes: l,
      constructionStack: []
    };
    a.u.set(b, c);
    a.C.set(c.constructorFunction, c);
    return c;
  }
  Y.prototype.upgrade = function (a) {
    V(this.h, a);
  };
  function za(a) {
    if (!1 !== a.i) {
      a.i = !1;
      for (var b = [], c = a.v, f = new Map(), d = 0; d < c.length; d++) f.set(c[d], []);
      V(a.h, document, {
        upgrade: function (k) {
          if (void 0 === k.__CE_state) {
            var l = k.localName,
              m = f.get(l);
            m ? m.push(k) : a.u.has(l) && b.push(k);
          }
        }
      });
      for (d = 0; d < b.length; d++) T(a.h, b[d]);
      for (d = 0; d < c.length; d++) {
        for (var e = c[d], g = f.get(e), h = 0; h < g.length; h++) T(a.h, g[h]);
        (e = a.B.get(e)) && e.resolve(void 0);
      }
      c.length = 0;
    }
  }
  Y.prototype.get = function (a) {
    if (a = W(this, a)) return a.constructorFunction;
  };
  Y.prototype.whenDefined = function (a) {
    if (!qa(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
    var b = this.B.get(a);
    if (b) return b.F;
    b = new va();
    this.B.set(a, b);
    var c = this.u.has(a) || this.s.has(a);
    a = -1 === this.v.indexOf(a);
    c && a && b.resolve(void 0);
    return b.F;
  };
  Y.prototype.polyfillWrapFlushCallback = function (a) {
    this.D && xa(this.D);
    var b = this.o;
    this.o = function (c) {
      return a(function () {
        return b(c);
      });
    };
  };
  function W(a, b) {
    var c = a.u.get(b);
    if (c) return c;
    if (c = a.s.get(b)) {
      a.s.delete(b);
      try {
        return Aa(a, b, c());
      } catch (f) {
        X(f);
      }
    }
  }
  Y.prototype.define = Y.prototype.define;
  Y.prototype.upgrade = Y.prototype.upgrade;
  Y.prototype.get = Y.prototype.get;
  Y.prototype.whenDefined = Y.prototype.whenDefined;
  Y.prototype.polyfillDefineLazy = Y.prototype.H;
  Y.prototype.polyfillWrapFlushCallback = Y.prototype.polyfillWrapFlushCallback;
  function Z(a, b, c) {
    function f(d) {
      return function (e) {
        for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
        h = [];
        for (var k = [], l = 0; l < g.length; l++) {
          var m = g[l];
          m instanceof Element && J(m) && k.push(m);
          if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) h.push(m);else h.push(m);
        }
        d.apply(this, g);
        for (g = 0; g < k.length; g++) U(a, k[g]);
        if (J(this)) for (g = 0; g < h.length; g++) k = h[g], k instanceof Element && S(a, k);
      };
    }
    void 0 !== c.prepend && (b.prepend = f(c.prepend));
    void 0 !== c.append && (b.append = f(c.append));
  }
  ;
  function Ba(a) {
    Document.prototype.createElement = function (b) {
      return ua(a, this, b, null);
    };
    Document.prototype.importNode = function (b, c) {
      b = aa.call(this, b, !!c);
      this.__CE_registry ? V(a, b) : Q(a, b);
      return b;
    };
    Document.prototype.createElementNS = function (b, c) {
      return ua(a, this, c, b);
    };
    Z(a, Document.prototype, {
      prepend: ba,
      append: ca
    });
  }
  ;
  function Ca(a) {
    function b(f) {
      return function (d) {
        for (var e = [], g = 0; g < arguments.length; ++g) e[g] = arguments[g];
        g = [];
        for (var h = [], k = 0; k < e.length; k++) {
          var l = e[k];
          l instanceof Element && J(l) && h.push(l);
          if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) g.push(l);else g.push(l);
        }
        f.apply(this, e);
        for (e = 0; e < h.length; e++) U(a, h[e]);
        if (J(this)) for (e = 0; e < g.length; e++) h = g[e], h instanceof Element && S(a, h);
      };
    }
    var c = Element.prototype;
    void 0 !== ia && (c.before = b(ia));
    void 0 !== ja && (c.after = b(ja));
    void 0 !== ka && (c.replaceWith = function (f) {
      for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
      e = [];
      for (var g = [], h = 0; h < d.length; h++) {
        var k = d[h];
        k instanceof Element && J(k) && g.push(k);
        if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) e.push(k);else e.push(k);
      }
      h = J(this);
      ka.apply(this, d);
      for (d = 0; d < g.length; d++) U(a, g[d]);
      if (h) for (U(a, this), d = 0; d < e.length; d++) g = e[d], g instanceof Element && S(a, g);
    });
    void 0 !== la && (c.remove = function () {
      var f = J(this);
      la.call(this);
      f && U(a, this);
    });
  }
  ;
  function Da(a) {
    function b(d, e) {
      Object.defineProperty(d, "innerHTML", {
        enumerable: e.enumerable,
        configurable: !0,
        get: e.get,
        set: function (g) {
          var h = this,
            k = void 0;
          J(this) && (k = [], P(a, this, function (x) {
            x !== h && k.push(x);
          }));
          e.set.call(this, g);
          if (k) for (var l = 0; l < k.length; l++) {
            var m = k[l];
            1 === m.__CE_state && a.disconnectedCallback(m);
          }
          this.ownerDocument.__CE_registry ? V(a, this) : Q(a, this);
          return g;
        }
      });
    }
    function c(d, e) {
      d.insertAdjacentElement = function (g, h) {
        var k = J(h);
        g = e.call(this, g, h);
        k && U(a, h);
        J(g) && S(a, h);
        return g;
      };
    }
    function f(d, e) {
      function g(h, k) {
        for (var l = []; h !== k; h = h.nextSibling) l.push(h);
        for (k = 0; k < l.length; k++) V(a, l[k]);
      }
      d.insertAdjacentHTML = function (h, k) {
        h = h.toLowerCase();
        if ("beforebegin" === h) {
          var l = this.previousSibling;
          e.call(this, h, k);
          g(l || this.parentNode.firstChild, this);
        } else if ("afterbegin" === h) l = this.firstChild, e.call(this, h, k), g(this.firstChild, l);else if ("beforeend" === h) l = this.lastChild, e.call(this, h, k), g(l || this.firstChild, null);else if ("afterend" === h) l = this.nextSibling, e.call(this, h, k), g(this.nextSibling, l);else throw new SyntaxError("The value provided (" + String(h) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
      };
    }
    y && (Element.prototype.attachShadow = function (d) {
      d = y.call(this, d);
      if (a.j && !d.__CE_patched) {
        d.__CE_patched = !0;
        for (var e = 0; e < a.m.length; e++) a.m[e](d);
      }
      return this.__CE_shadowRoot = d;
    });
    z && z.get ? b(Element.prototype, z) : I && I.get ? b(HTMLElement.prototype, I) : ta(a, function (d) {
      b(d, {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return q.call(this, !0).innerHTML;
        },
        set: function (e) {
          var g = "template" === this.localName,
            h = g ? this.content : this,
            k = p.call(document, this.namespaceURI, this.localName);
          for (k.innerHTML = e; 0 < h.childNodes.length;) u.call(h, h.childNodes[0]);
          for (e = g ? k.content : k; 0 < e.childNodes.length;) r.call(h, e.childNodes[0]);
        }
      });
    });
    Element.prototype.setAttribute = function (d, e) {
      if (1 !== this.__CE_state) return B.call(this, d, e);
      var g = A.call(this, d);
      B.call(this, d, e);
      e = A.call(this, d);
      a.attributeChangedCallback(this, d, g, e, null);
    };
    Element.prototype.setAttributeNS = function (d, e, g) {
      if (1 !== this.__CE_state) return E.call(this, d, e, g);
      var h = D.call(this, d, e);
      E.call(this, d, e, g);
      g = D.call(this, d, e);
      a.attributeChangedCallback(this, e, h, g, d);
    };
    Element.prototype.removeAttribute = function (d) {
      if (1 !== this.__CE_state) return C.call(this, d);
      var e = A.call(this, d);
      C.call(this, d);
      null !== e && a.attributeChangedCallback(this, d, e, null, null);
    };
    Element.prototype.removeAttributeNS = function (d, e) {
      if (1 !== this.__CE_state) return F.call(this, d, e);
      var g = D.call(this, d, e);
      F.call(this, d, e);
      var h = D.call(this, d, e);
      g !== h && a.attributeChangedCallback(this, e, g, h, d);
    };
    na ? c(HTMLElement.prototype, na) : G && c(Element.prototype, G);
    oa ? f(HTMLElement.prototype, oa) : H && f(Element.prototype, H);
    Z(a, Element.prototype, {
      prepend: fa,
      append: ha
    });
    Ca(a);
  }
  ;
  var Ea = {};
  function Fa(a) {
    function b() {
      var c = this.constructor;
      var f = document.__CE_registry.C.get(c);
      if (!f) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
      var d = f.constructionStack;
      if (0 === d.length) return d = n.call(document, f.localName), Object.setPrototypeOf(d, c.prototype), d.__CE_state = 1, d.__CE_definition = f, R(a, d), d;
      var e = d.length - 1,
        g = d[e];
      if (g === Ea) throw Error("Failed to construct '" + f.localName + "': This element was already constructed.");
      d[e] = Ea;
      Object.setPrototypeOf(g, c.prototype);
      R(a, g);
      return g;
    }
    b.prototype = ma.prototype;
    Object.defineProperty(HTMLElement.prototype, "constructor", {
      writable: !0,
      configurable: !0,
      enumerable: !1,
      value: b
    });
    window.HTMLElement = b;
  }
  ;
  function Ga(a) {
    function b(c, f) {
      Object.defineProperty(c, "textContent", {
        enumerable: f.enumerable,
        configurable: !0,
        get: f.get,
        set: function (d) {
          if (this.nodeType === Node.TEXT_NODE) f.set.call(this, d);else {
            var e = void 0;
            if (this.firstChild) {
              var g = this.childNodes,
                h = g.length;
              if (0 < h && J(this)) {
                e = Array(h);
                for (var k = 0; k < h; k++) e[k] = g[k];
              }
            }
            f.set.call(this, d);
            if (e) for (d = 0; d < e.length; d++) U(a, e[d]);
          }
        }
      });
    }
    Node.prototype.insertBefore = function (c, f) {
      if (c instanceof DocumentFragment) {
        var d = K(c);
        c = t.call(this, c, f);
        if (J(this)) for (f = 0; f < d.length; f++) S(a, d[f]);
        return c;
      }
      d = c instanceof Element && J(c);
      f = t.call(this, c, f);
      d && U(a, c);
      J(this) && S(a, c);
      return f;
    };
    Node.prototype.appendChild = function (c) {
      if (c instanceof DocumentFragment) {
        var f = K(c);
        c = r.call(this, c);
        if (J(this)) for (var d = 0; d < f.length; d++) S(a, f[d]);
        return c;
      }
      f = c instanceof Element && J(c);
      d = r.call(this, c);
      f && U(a, c);
      J(this) && S(a, c);
      return d;
    };
    Node.prototype.cloneNode = function (c) {
      c = q.call(this, !!c);
      this.ownerDocument.__CE_registry ? V(a, c) : Q(a, c);
      return c;
    };
    Node.prototype.removeChild = function (c) {
      var f = c instanceof Element && J(c),
        d = u.call(this, c);
      f && U(a, c);
      return d;
    };
    Node.prototype.replaceChild = function (c, f) {
      if (c instanceof DocumentFragment) {
        var d = K(c);
        c = v.call(this, c, f);
        if (J(this)) for (U(a, f), f = 0; f < d.length; f++) S(a, d[f]);
        return c;
      }
      d = c instanceof Element && J(c);
      var e = v.call(this, c, f),
        g = J(this);
      g && U(a, f);
      d && U(a, c);
      g && S(a, c);
      return e;
    };
    w && w.get ? b(Node.prototype, w) : sa(a, function (c) {
      b(c, {
        enumerable: !0,
        configurable: !0,
        get: function () {
          for (var f = [], d = this.firstChild; d; d = d.nextSibling) d.nodeType !== Node.COMMENT_NODE && f.push(d.textContent);
          return f.join("");
        },
        set: function (f) {
          for (; this.firstChild;) u.call(this, this.firstChild);
          null != f && "" !== f && r.call(this, document.createTextNode(f));
        }
      });
    });
  }
  ;
  var O = window.customElements;
  function Ha() {
    var a = new N();
    Fa(a);
    Ba(a);
    Z(a, DocumentFragment.prototype, {
      prepend: da,
      append: ea
    });
    Ga(a);
    Da(a);
    window.CustomElementRegistry = Y;
    a = new Y(a);
    document.__CE_registry = a;
    Object.defineProperty(window, "customElements", {
      configurable: !0,
      enumerable: !0,
      value: a
    });
  }
  O && !O.forcePolyfill && "function" == typeof O.define && "function" == typeof O.get || Ha();
  window.__CE_installPolyfill = Ha;
}).call(self);

/***/ }),

/***/ 3590:
/*!************************************************************************!*\
  !*** ./node_modules/@webcomponents/custom-elements/src/native-shim.js ***!
  \************************************************************************/
/***/ (() => {

"use strict";


/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
 * This shim allows elements written in, or compiled to, ES5 to work on native
 * implementations of Custom Elements v1. It sets new.target to the value of
 * this.constructor so that the native HTMLElement constructor can access the
 * current under-construction element's definition.
 */
(function () {
  if (
  // No Reflect, no classes, no need for shim because native custom elements
  // require ES2015 classes or Reflect.
  window.Reflect === undefined || window.customElements === undefined ||
  // The webcomponentsjs custom elements polyfill doesn't require
  // ES2015-compatible construction (`super()` or `Reflect.construct`).
  window.customElements.polyfillWrapFlushCallback) {
    return;
  }
  const BuiltInHTMLElement = HTMLElement;
  /**
   * With jscompiler's RECOMMENDED_FLAGS the function name will be optimized away.
   * However, if we declare the function as a property on an object literal, and
   * use quotes for the property name, then closure will leave that much intact,
   * which is enough for the JS VM to correctly set Function.prototype.name.
   */
  const wrapperForTheName = {
    'HTMLElement': function HTMLElement() {
      return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
    }
  };
  window.HTMLElement = wrapperForTheName['HTMLElement'];
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();

/***/ }),

/***/ 3592:
/*!**************************************************************************************!*\
  !*** ./node_modules/@webcomponents/webcomponents-platform/webcomponents-platform.js ***!
  \**************************************************************************************/
/***/ (() => {

/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

(function () {
  'use strict';

  // defaultPrevented is broken in IE.
  // https://connect.microsoft.com/IE/feedback/details/790389/event-defaultprevented-returns-false-after-preventdefault-was-called
  var workingDefaultPrevented = function () {
    var e = document.createEvent('Event');
    e.initEvent('foo', true, true);
    e.preventDefault();
    return e.defaultPrevented;
  }();
  if (!workingDefaultPrevented) {
    var origPreventDefault = Event.prototype.preventDefault;
    Event.prototype.preventDefault = function () {
      if (!this.cancelable) {
        return;
      }
      origPreventDefault.call(this);
      Object.defineProperty(this, 'defaultPrevented', {
        get: function () {
          return true;
        },
        configurable: true
      });
    };
  }
  var isIE = /Trident/.test(navigator.userAgent);

  // Event constructor shim
  if (!window.Event || isIE && typeof window.Event !== 'function') {
    var origEvent = window.Event;
    /**
     * @param {!string} inType
     * @param {?(EventInit)=} params
     */
    window.Event = function (inType, params) {
      params = params || {};
      var e = document.createEvent('Event');
      e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
      return e;
    };
    if (origEvent) {
      for (var i in origEvent) {
        window.Event[i] = origEvent[i];
      }
      window.Event.prototype = origEvent.prototype;
    }
  }

  // CustomEvent constructor shim
  if (!window.CustomEvent || isIE && typeof window.CustomEvent !== 'function') {
    /**
     * @template T
     * @param {!string} inType
     * @param {?(CustomEventInit<T>)=} params
     */
    window.CustomEvent = function (inType, params) {
      params = params || {};
      var e = /** @type {!CustomEvent} */document.createEvent('CustomEvent');
      e.initCustomEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable), params.detail);
      return e;
    };
    window.CustomEvent.prototype = window.Event.prototype;
  }
  if (!window.MouseEvent || isIE && typeof window.MouseEvent !== 'function') {
    var origMouseEvent = window.MouseEvent;
    /**
     *
     * @param {!string} inType
     * @param {?(MouseEventInit)=} params
     */
    window.MouseEvent = function (inType, params) {
      params = params || {};
      var e = document.createEvent('MouseEvent');
      e.initMouseEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable), params.view || window, params.detail, params.screenX, params.screenY, params.clientX, params.clientY, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.button, params.relatedTarget);
      return e;
    };
    if (origMouseEvent) {
      for (var i in origMouseEvent) {
        window.MouseEvent[i] = origMouseEvent[i];
      }
    }
    window.MouseEvent.prototype = origMouseEvent.prototype;
  }

  // ES6 stuff
  if (!Array.from) {
    Array.from = function (object) {
      return [].slice.call( /** @type {IArrayLike} */object);
    };
  }
  if (!Object.assign) {
    var assign = function (target, source) {
      var n$ = Object.getOwnPropertyNames(source);
      for (var i = 0, p; i < n$.length; i++) {
        p = n$[i];
        target[p] = source[p];
      }
    };
    Object.assign = function (target, sources) {
      var args = [].slice.call(arguments, 1);
      for (var i = 0, s; i < args.length; i++) {
        s = args[i];
        if (s) {
          assign(target, s);
        }
      }
      return target;
    };
  }
})();

/***/ }),

/***/ 3589:
/*!***********************************************!*\
  !*** ./node_modules/zone.js/fesm2015/zone.js ***!
  \***********************************************/
/***/ (() => {

"use strict";


/**
 * @license Angular v14.2.0-next.0
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global) {
  const performance = global['performance'];
  function mark(name) {
    performance && performance['mark'] && performance['mark'](name);
  }
  function performanceMeasure(name, label) {
    performance && performance['measure'] && performance['measure'](name, label);
  }
  mark('Zone');
  // Initialize before it's accessed below.
  // __Zone_symbol_prefix global can be used to override the default zone
  // symbol prefix with a custom one if needed.
  const symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';
  function __symbol__(name) {
    return symbolPrefix + name;
  }
  const checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
  if (global['Zone']) {
    // if global['Zone'] already exists (maybe zone.js was already loaded or
    // some other lib also registered a global object named Zone), we may need
    // to throw an error, but sometimes user may not want this error.
    // For example,
    // we have two web pages, page1 includes zone.js, page2 doesn't.
    // and the 1st time user load page1 and page2, everything work fine,
    // but when user load page2 again, error occurs because global['Zone'] already exists.
    // so we add a flag to let user choose whether to throw this error or not.
    // By default, if existing Zone is from zone.js, we will not throw the error.
    if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
      throw new Error('Zone already loaded.');
    } else {
      return global['Zone'];
    }
  }
  class Zone {
    constructor(parent, zoneSpec) {
      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }
    static assertZonePatched() {
      if (global['Promise'] !== patches['ZoneAwarePromise']) {
        throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
      }
    }
    static get root() {
      let zone = Zone.current;
      while (zone.parent) {
        zone = zone.parent;
      }
      return zone;
    }
    static get current() {
      return _currentZoneFrame.zone;
    }
    static get currentTask() {
      return _currentTask;
    }
    // tslint:disable-next-line:require-internal-with-underscore
    static __load_patch(name, fn, ignoreDuplicate = false) {
      if (patches.hasOwnProperty(name)) {
        // `checkDuplicate` option is defined from global variable
        // so it works for all modules.
        // `ignoreDuplicate` can work for the specified module
        if (!ignoreDuplicate && checkDuplicate) {
          throw Error('Already loaded patch: ' + name);
        }
      } else if (!global['__Zone_disable_' + name]) {
        const perfName = 'Zone:' + name;
        mark(perfName);
        patches[name] = fn(global, Zone, _api);
        performanceMeasure(perfName, perfName);
      }
    }
    get parent() {
      return this._parent;
    }
    get name() {
      return this._name;
    }
    get(key) {
      const zone = this.getZoneWith(key);
      if (zone) return zone._properties[key];
    }
    getZoneWith(key) {
      let current = this;
      while (current) {
        if (current._properties.hasOwnProperty(key)) {
          return current;
        }
        current = current._parent;
      }
      return null;
    }
    fork(zoneSpec) {
      if (!zoneSpec) throw new Error('ZoneSpec required!');
      return this._zoneDelegate.fork(this, zoneSpec);
    }
    wrap(callback, source) {
      if (typeof callback !== 'function') {
        throw new Error('Expecting function got: ' + callback);
      }
      const _callback = this._zoneDelegate.intercept(this, callback, source);
      const zone = this;
      return function () {
        return zone.runGuarded(_callback, this, arguments, source);
      };
    }
    run(callback, applyThis, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runGuarded(callback, applyThis = null, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runTask(task, applyThis, applyArgs) {
      if (task.zone != this) {
        throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
      }
      // https://github.com/angular/zone.js/issues/778, sometimes eventTask
      // will run in notScheduled(canceled) state, we should not try to
      // run such kind of task but just return
      if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
        return;
      }
      const reEntryGuard = task.state != running;
      reEntryGuard && task._transitionTo(running, scheduled);
      task.runCount++;
      const previousTask = _currentTask;
      _currentTask = task;
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        if (task.type == macroTask && task.data && !task.data.isPeriodic) {
          task.cancelFn = undefined;
        }
        try {
          return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        // if the task's state is notScheduled or unknown, then it has already been cancelled
        // we should not reset the state to scheduled
        if (task.state !== notScheduled && task.state !== unknown) {
          if (task.type == eventTask || task.data && task.data.isPeriodic) {
            reEntryGuard && task._transitionTo(scheduled, running);
          } else {
            task.runCount = 0;
            this._updateTaskCount(task, -1);
            reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
          }
        }
        _currentZoneFrame = _currentZoneFrame.parent;
        _currentTask = previousTask;
      }
    }
    scheduleTask(task) {
      if (task.zone && task.zone !== this) {
        // check if the task was rescheduled, the newZone
        // should not be the children of the original zone
        let newZone = this;
        while (newZone) {
          if (newZone === task.zone) {
            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
          }
          newZone = newZone.parent;
        }
      }
      task._transitionTo(scheduling, notScheduled);
      const zoneDelegates = [];
      task._zoneDelegates = zoneDelegates;
      task._zone = this;
      try {
        task = this._zoneDelegate.scheduleTask(this, task);
      } catch (err) {
        // should set task's state to unknown when scheduleTask throw error
        // because the err may from reschedule, so the fromState maybe notScheduled
        task._transitionTo(unknown, scheduling, notScheduled);
        // TODO: @JiaLiPassion, should we check the result from handleError?
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      if (task._zoneDelegates === zoneDelegates) {
        // we have to check because internally the delegate can reschedule the task.
        this._updateTaskCount(task, 1);
      }
      if (task.state == scheduling) {
        task._transitionTo(scheduled, scheduling);
      }
      return task;
    }
    scheduleMicroTask(source, callback, data, customSchedule) {
      return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
    }
    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
    }
    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
    }
    cancelTask(task) {
      if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
      task._transitionTo(canceling, scheduled, running);
      try {
        this._zoneDelegate.cancelTask(this, task);
      } catch (err) {
        // if error occurs when cancelTask, transit the state to unknown
        task._transitionTo(unknown, canceling);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      this._updateTaskCount(task, -1);
      task._transitionTo(notScheduled, canceling);
      task.runCount = 0;
      return task;
    }
    _updateTaskCount(task, count) {
      const zoneDelegates = task._zoneDelegates;
      if (count == -1) {
        task._zoneDelegates = null;
      }
      for (let i = 0; i < zoneDelegates.length; i++) {
        zoneDelegates[i]._updateTaskCount(task.type, count);
      }
    }
  }
  // tslint:disable-next-line:require-internal-with-underscore
  Zone.__symbol__ = __symbol__;
  const DELEGATE_ZS = {
    name: '',
    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
  };
  class _ZoneDelegate {
    constructor(zone, parentDelegate, zoneSpec) {
      this._taskCounts = {
        'microTask': 0,
        'macroTask': 0,
        'eventTask': 0
      };
      this.zone = zone;
      this._parentDelegate = parentDelegate;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
      if (zoneSpecHasTask || parentHasTask) {
        // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
        // a case all task related interceptors must go through this ZD. We can't short circuit it.
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = zone;
        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this.zone;
        }
        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this.zone;
        }
        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this.zone;
        }
      }
    }
    fork(targetZone, zoneSpec) {
      return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
    }
    intercept(targetZone, callback, source) {
      return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
    }
    invoke(targetZone, callback, applyThis, applyArgs, source) {
      return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
    }
    handleError(targetZone, error) {
      return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
    }
    scheduleTask(targetZone, task) {
      let returnTask = task;
      if (this._scheduleTaskZS) {
        if (this._hasTaskZS) {
          returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
        }
        // clang-format off
        returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
        // clang-format on
        if (!returnTask) returnTask = task;
      } else {
        if (task.scheduleFn) {
          task.scheduleFn(task);
        } else if (task.type == microTask) {
          scheduleMicroTask(task);
        } else {
          throw new Error('Task is missing scheduleFn.');
        }
      }
      return returnTask;
    }
    invokeTask(targetZone, task, applyThis, applyArgs) {
      return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
    }
    cancelTask(targetZone, task) {
      let value;
      if (this._cancelTaskZS) {
        value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
      } else {
        if (!task.cancelFn) {
          throw Error('Task is not cancelable');
        }
        value = task.cancelFn(task);
      }
      return value;
    }
    hasTask(targetZone, isEmpty) {
      // hasTask should not throw error so other ZoneDelegate
      // can still trigger hasTask callback
      try {
        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
      } catch (err) {
        this.handleError(targetZone, err);
      }
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _updateTaskCount(type, count) {
      const counts = this._taskCounts;
      const prev = counts[type];
      const next = counts[type] = prev + count;
      if (next < 0) {
        throw new Error('More tasks executed then were scheduled.');
      }
      if (prev == 0 || next == 0) {
        const isEmpty = {
          microTask: counts['microTask'] > 0,
          macroTask: counts['macroTask'] > 0,
          eventTask: counts['eventTask'] > 0,
          change: type
        };
        this.hasTask(this.zone, isEmpty);
      }
    }
  }
  class ZoneTask {
    constructor(type, source, callback, options, scheduleFn, cancelFn) {
      // tslint:disable-next-line:require-internal-with-underscore
      this._zone = null;
      this.runCount = 0;
      // tslint:disable-next-line:require-internal-with-underscore
      this._zoneDelegates = null;
      // tslint:disable-next-line:require-internal-with-underscore
      this._state = 'notScheduled';
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;
      if (!callback) {
        throw new Error('callback is not defined');
      }
      this.callback = callback;
      const self = this;
      // TODO: @JiaLiPassion options should have interface
      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function () {
          return ZoneTask.invokeTask.call(global, self, this, arguments);
        };
      }
    }
    static invokeTask(task, target, args) {
      if (!task) {
        task = this;
      }
      _numberOfNestedTaskFrames++;
      try {
        task.runCount++;
        return task.zone.runTask(task, target, args);
      } finally {
        if (_numberOfNestedTaskFrames == 1) {
          drainMicroTaskQueue();
        }
        _numberOfNestedTaskFrames--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(notScheduled, scheduling);
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _transitionTo(toState, fromState1, fromState2) {
      if (this._state === fromState1 || this._state === fromState2) {
        this._state = toState;
        if (toState == notScheduled) {
          this._zoneDelegates = null;
        }
      } else {
        throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? ' or \'' + fromState2 + '\'' : ''}, was '${this._state}'.`);
      }
    }
    toString() {
      if (this.data && typeof this.data.handleId !== 'undefined') {
        return this.data.handleId.toString();
      } else {
        return Object.prototype.toString.call(this);
      }
    }
    // add toJSON method to prevent cyclic error when
    // call JSON.stringify(zoneTask)
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount
      };
    }
  }
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  MICROTASK QUEUE
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const symbolSetTimeout = __symbol__('setTimeout');
  const symbolPromise = __symbol__('Promise');
  const symbolThen = __symbol__('then');
  let _microTaskQueue = [];
  let _isDrainingMicrotaskQueue = false;
  let nativeMicroTaskQueuePromise;
  function nativeScheduleMicroTask(func) {
    if (!nativeMicroTaskQueuePromise) {
      if (global[symbolPromise]) {
        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
      }
    }
    if (nativeMicroTaskQueuePromise) {
      let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
      if (!nativeThen) {
        // native Promise is not patchable, we need to use `then` directly
        // issue 1078
        nativeThen = nativeMicroTaskQueuePromise['then'];
      }
      nativeThen.call(nativeMicroTaskQueuePromise, func);
    } else {
      global[symbolSetTimeout](func, 0);
    }
  }
  function scheduleMicroTask(task) {
    // if we are not running in any task, and there has not been anything scheduled
    // we must bootstrap the initial task creation by manually scheduling the drain
    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
      // We are not running in Task, so we need to kickstart the microtask queue.
      nativeScheduleMicroTask(drainMicroTaskQueue);
    }
    task && _microTaskQueue.push(task);
  }
  function drainMicroTaskQueue() {
    if (!_isDrainingMicrotaskQueue) {
      _isDrainingMicrotaskQueue = true;
      while (_microTaskQueue.length) {
        const queue = _microTaskQueue;
        _microTaskQueue = [];
        for (let i = 0; i < queue.length; i++) {
          const task = queue[i];
          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }
      _api.microtaskDrainDone();
      _isDrainingMicrotaskQueue = false;
    }
  }
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  BOOTSTRAP
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const NO_ZONE = {
    name: 'NO ZONE'
  };
  const notScheduled = 'notScheduled',
    scheduling = 'scheduling',
    scheduled = 'scheduled',
    running = 'running',
    canceling = 'canceling',
    unknown = 'unknown';
  const microTask = 'microTask',
    macroTask = 'macroTask',
    eventTask = 'eventTask';
  const patches = {};
  const _api = {
    symbol: __symbol__,
    currentZoneFrame: () => _currentZoneFrame,
    onUnhandledError: noop,
    microtaskDrainDone: noop,
    scheduleMicroTask: scheduleMicroTask,
    showUncaughtError: () => !Zone[__symbol__('ignoreConsoleErrorUncaughtError')],
    patchEventTarget: () => [],
    patchOnProperties: noop,
    patchMethod: () => noop,
    bindArguments: () => [],
    patchThen: () => noop,
    patchMacroTask: () => noop,
    patchEventPrototype: () => noop,
    isIEOrEdge: () => false,
    getGlobalObjects: () => undefined,
    ObjectDefineProperty: () => noop,
    ObjectGetOwnPropertyDescriptor: () => undefined,
    ObjectCreate: () => undefined,
    ArraySlice: () => [],
    patchClass: () => noop,
    wrapWithCurrentZone: () => noop,
    filterProperties: () => [],
    attachOriginToPatched: () => noop,
    _redefineProperty: () => noop,
    patchCallbacks: () => noop,
    nativeScheduleMicroTask: nativeScheduleMicroTask
  };
  let _currentZoneFrame = {
    parent: null,
    zone: new Zone(null, null)
  };
  let _currentTask = null;
  let _numberOfNestedTaskFrames = 0;
  function noop() {}
  performanceMeasure('Zone', 'Zone');
  return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
/// <reference types="node"/>
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
const ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
const ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
const ObjectCreate = Object.create;
/** Array.prototype.slice */
const ArraySlice = Array.prototype.slice;
/** addEventListener string const */
const ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
const TRUE_STR = 'true';
/** false string const */
const FALSE_STR = 'false';
/** Zone symbol prefix string const. */
const ZONE_SYMBOL_PREFIX = Zone.__symbol__('');
function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
const zoneSymbol = Zone.__symbol__;
const isWindowExists = typeof window !== 'undefined';
const internalWindow = isWindowExists ? window : undefined;
const _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
const REMOVE_ATTRIBUTE = 'removeAttribute';
function bindArguments(args, source) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === 'function') {
      args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
    }
  }
  return args;
}
function patchPrototype(prototype, fnNames) {
  const source = prototype.constructor['name'];
  for (let i = 0; i < fnNames.length; i++) {
    const name = fnNames[i];
    const delegate = prototype[name];
    if (delegate) {
      const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
      if (!isPropertyWritable(prototypeDesc)) {
        continue;
      }
      prototype[name] = (delegate => {
        const patched = function () {
          return delegate.apply(this, bindArguments(arguments, source + '.' + name));
        };
        attachOriginToPatched(patched, delegate);
        return patched;
      })(delegate);
    }
  }
}
function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }
  if (propertyDesc.writable === false) {
    return false;
  }
  return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
const isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
const zoneSymbolEventNames$1 = {};
const wrapFn = function (event) {
  // https://github.com/angular/zone.js/issues/911, in IE, sometimes
  // event will be undefined, so we need to use window.event
  event = event || _global.event;
  if (!event) {
    return;
  }
  let eventNameSymbol = zoneSymbolEventNames$1[event.type];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
  }
  const target = this || event.target || _global;
  const listener = target[eventNameSymbol];
  let result;
  if (isBrowser && target === internalWindow && event.type === 'error') {
    // window.onerror have different signature
    // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
    // and onerror callback will prevent default when callback return true
    const errorEvent = event;
    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
    if (result === true) {
      event.preventDefault();
    }
  } else {
    result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
      event.preventDefault();
    }
  }
  return result;
};
function patchProperty(obj, prop, prototype) {
  let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
  if (!desc && prototype) {
    // when patch window object, use prototype to check prop exist or not
    const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
    if (prototypeDesc) {
      desc = {
        enumerable: true,
        configurable: true
      };
    }
  }
  // if the descriptor not exists or is not configurable
  // just return
  if (!desc || !desc.configurable) {
    return;
  }
  const onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
  if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  }
  // A property descriptor cannot have getter/setter and be writable
  // deleting the writable and value properties avoids this error:
  //
  // TypeError: property descriptors must not specify a value or be writable when a
  // getter or setter has been specified
  delete desc.writable;
  delete desc.value;
  const originalDescGet = desc.get;
  const originalDescSet = desc.set;
  // slice(2) cuz 'onclick' -> 'click', etc
  const eventName = prop.slice(2);
  let eventNameSymbol = zoneSymbolEventNames$1[eventName];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
  }
  desc.set = function (newValue) {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return;
    }
    const previousValue = target[eventNameSymbol];
    if (typeof previousValue === 'function') {
      target.removeEventListener(eventName, wrapFn);
    }
    // issue #978, when onload handler was added before loading zone.js
    // we should remove it with originalDescSet
    originalDescSet && originalDescSet.call(target, null);
    target[eventNameSymbol] = newValue;
    if (typeof newValue === 'function') {
      target.addEventListener(eventName, wrapFn, false);
    }
  };
  // The getter would return undefined for unassigned properties but the default value of an
  // unassigned property is null
  desc.get = function () {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return null;
    }
    const listener = target[eventNameSymbol];
    if (listener) {
      return listener;
    } else if (originalDescGet) {
      // result will be null when use inline event attribute,
      // such as <button onclick="func();">OK</button>
      // because the onclick function is internal raw uncompiled handler
      // the onclick will be evaluated when first time event was triggered or
      // the property is accessed, https://github.com/angular/zone.js/issues/525
      // so we should use original native get to retrieve the handler
      let value = originalDescGet.call(this);
      if (value) {
        desc.set.call(this, value);
        if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
          target.removeAttribute(prop);
        }
        return value;
      }
    }
    return null;
  };
  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
  if (properties) {
    for (let i = 0; i < properties.length; i++) {
      patchProperty(obj, 'on' + properties[i], prototype);
    }
  } else {
    const onProperties = [];
    for (const prop in obj) {
      if (prop.slice(0, 2) == 'on') {
        onProperties.push(prop);
      }
    }
    for (let j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype);
    }
  }
}
const originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
  const OriginalClass = _global[className];
  if (!OriginalClass) return;
  // keep original class in global
  _global[zoneSymbol(className)] = OriginalClass;
  _global[className] = function () {
    const a = bindArguments(arguments, className);
    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;
      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;
      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;
      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;
      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;
      default:
        throw new Error('Arg list too long.');
    }
  };
  // attach original delegate to patched function
  attachOriginToPatched(_global[className], OriginalClass);
  const instance = new OriginalClass(function () {});
  let prop;
  for (prop in instance) {
    // https://bugs.webkit.org/show_bug.cgi?id=44721
    if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;
    (function (prop) {
      if (typeof instance[prop] === 'function') {
        _global[className].prototype[prop] = function () {
          return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global[className].prototype, prop, {
          set: function (fn) {
            if (typeof fn === 'function') {
              this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
              // keep callback in wrapped function so we can
              // use it in Function.prototype.toString to return
              // the native one.
              attachOriginToPatched(this[originalInstanceKey][prop], fn);
            } else {
              this[originalInstanceKey][prop] = fn;
            }
          },
          get: function () {
            return this[originalInstanceKey][prop];
          }
        });
      }
    })(prop);
  }
  for (prop in OriginalClass) {
    if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
      _global[className][prop] = OriginalClass[prop];
    }
  }
}
function patchMethod(target, name, patchFn) {
  let proto = target;
  while (proto && !proto.hasOwnProperty(name)) {
    proto = ObjectGetPrototypeOf(proto);
  }
  if (!proto && target[name]) {
    // somehow we did not find it, but we can see it. This happens on IE for Window properties.
    proto = target;
  }
  const delegateName = zoneSymbol(name);
  let delegate = null;
  if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
    delegate = proto[delegateName] = proto[name];
    // check whether proto[name] is writable
    // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
    const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
    if (isPropertyWritable(desc)) {
      const patchDelegate = patchFn(delegate, delegateName, name);
      proto[name] = function () {
        return patchDelegate(this, arguments);
      };
      attachOriginToPatched(proto[name], delegate);
    }
  }
  return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
  let setNative = null;
  function scheduleTask(task) {
    const data = task.data;
    data.args[data.cbIdx] = function () {
      task.invoke.apply(this, arguments);
    };
    setNative.apply(data.target, data.args);
    return task;
  }
  setNative = patchMethod(obj, funcName, delegate => function (self, args) {
    const meta = metaCreator(self, args);
    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
      return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
    } else {
      // cause an error by calling it directly.
      return delegate.apply(self, args);
    }
  });
}
function attachOriginToPatched(patched, original) {
  patched[zoneSymbol('OriginalDelegate')] = original;
}
let isDetectedIEOrEdge = false;
let ieOrEdge = false;
function isIE() {
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
      return true;
    }
  } catch (error) {}
  return false;
}
function isIEOrEdge() {
  if (isDetectedIEOrEdge) {
    return ieOrEdge;
  }
  isDetectedIEOrEdge = true;
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
      ieOrEdge = true;
    }
  } catch (error) {}
  return ieOrEdge;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', (global, Zone, api) => {
  const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  const ObjectDefineProperty = Object.defineProperty;
  function readableObjectToString(obj) {
    if (obj && obj.toString === Object.prototype.toString) {
      const className = obj.constructor && obj.constructor.name;
      return (className ? className : '') + ': ' + JSON.stringify(obj);
    }
    return obj ? obj.toString() : Object.prototype.toString.call(obj);
  }
  const __symbol__ = api.symbol;
  const _uncaughtPromiseErrors = [];
  const isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;
  const symbolPromise = __symbol__('Promise');
  const symbolThen = __symbol__('then');
  const creationTrace = '__creationTrace__';
  api.onUnhandledError = e => {
    if (api.showUncaughtError()) {
      const rejection = e && e.rejection;
      if (rejection) {
        console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
      } else {
        console.error(e);
      }
    }
  };
  api.microtaskDrainDone = () => {
    while (_uncaughtPromiseErrors.length) {
      const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
      try {
        uncaughtPromiseError.zone.runGuarded(() => {
          if (uncaughtPromiseError.throwOriginal) {
            throw uncaughtPromiseError.rejection;
          }
          throw uncaughtPromiseError;
        });
      } catch (error) {
        handleUnhandledRejection(error);
      }
    }
  };
  const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
  function handleUnhandledRejection(e) {
    api.onUnhandledError(e);
    try {
      const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
      if (typeof handler === 'function') {
        handler.call(this, e);
      }
    } catch (err) {}
  }
  function isThenable(value) {
    return value && value.then;
  }
  function forwardResolution(value) {
    return value;
  }
  function forwardRejection(rejection) {
    return ZoneAwarePromise.reject(rejection);
  }
  const symbolState = __symbol__('state');
  const symbolValue = __symbol__('value');
  const symbolFinally = __symbol__('finally');
  const symbolParentPromiseValue = __symbol__('parentPromiseValue');
  const symbolParentPromiseState = __symbol__('parentPromiseState');
  const source = 'Promise.then';
  const UNRESOLVED = null;
  const RESOLVED = true;
  const REJECTED = false;
  const REJECTED_NO_CATCH = 0;
  function makeResolver(promise, state) {
    return v => {
      try {
        resolvePromise(promise, state, v);
      } catch (err) {
        resolvePromise(promise, false, err);
      }
      // Do not return value or you will break the Promise spec.
    };
  }

  const once = function () {
    let wasCalled = false;
    return function wrapper(wrappedFunction) {
      return function () {
        if (wasCalled) {
          return;
        }
        wasCalled = true;
        wrappedFunction.apply(null, arguments);
      };
    };
  };
  const TYPE_ERROR = 'Promise resolved with itself';
  const CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
  // Promise Resolution
  function resolvePromise(promise, state, value) {
    const onceWrapper = once();
    if (promise === value) {
      throw new TypeError(TYPE_ERROR);
    }
    if (promise[symbolState] === UNRESOLVED) {
      // should only get value.then once based on promise spec.
      let then = null;
      try {
        if (typeof value === 'object' || typeof value === 'function') {
          then = value && value.then;
        }
      } catch (err) {
        onceWrapper(() => {
          resolvePromise(promise, false, err);
        })();
        return promise;
      }
      // if (value instanceof ZoneAwarePromise) {
      if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
        clearRejectedNoCatch(value);
        resolvePromise(promise, value[symbolState], value[symbolValue]);
      } else if (state !== REJECTED && typeof then === 'function') {
        try {
          then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
        } catch (err) {
          onceWrapper(() => {
            resolvePromise(promise, false, err);
          })();
        }
      } else {
        promise[symbolState] = state;
        const queue = promise[symbolValue];
        promise[symbolValue] = value;
        if (promise[symbolFinally] === symbolFinally) {
          // the promise is generated by Promise.prototype.finally
          if (state === RESOLVED) {
            // the state is resolved, should ignore the value
            // and use parent promise value
            promise[symbolState] = promise[symbolParentPromiseState];
            promise[symbolValue] = promise[symbolParentPromiseValue];
          }
        }
        // record task information in value when error occurs, so we can
        // do some additional work such as render longStackTrace
        if (state === REJECTED && value instanceof Error) {
          // check if longStackTraceZone is here
          const trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];
          if (trace) {
            // only keep the long stack trace into error when in longStackTraceZone
            ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
              configurable: true,
              enumerable: false,
              writable: true,
              value: trace
            });
          }
        }
        for (let i = 0; i < queue.length;) {
          scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
        }
        if (queue.length == 0 && state == REJECTED) {
          promise[symbolState] = REJECTED_NO_CATCH;
          let uncaughtPromiseError = value;
          try {
            // Here we throws a new Error to print more readable error log
            // and if the value is not an error, zone.js builds an `Error`
            // Object here to attach the stack information.
            throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
          } catch (err) {
            uncaughtPromiseError = err;
          }
          if (isDisableWrappingUncaughtPromiseRejection) {
            // If disable wrapping uncaught promise reject
            // use the value instead of wrapping it.
            uncaughtPromiseError.throwOriginal = true;
          }
          uncaughtPromiseError.rejection = value;
          uncaughtPromiseError.promise = promise;
          uncaughtPromiseError.zone = Zone.current;
          uncaughtPromiseError.task = Zone.currentTask;
          _uncaughtPromiseErrors.push(uncaughtPromiseError);
          api.scheduleMicroTask(); // to make sure that it is running
        }
      }
    }
    // Resolving an already resolved promise is a noop.
    return promise;
  }
  const REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
  function clearRejectedNoCatch(promise) {
    if (promise[symbolState] === REJECTED_NO_CATCH) {
      // if the promise is rejected no catch status
      // and queue.length > 0, means there is a error handler
      // here to handle the rejected promise, we should trigger
      // windows.rejectionhandled eventHandler or nodejs rejectionHandled
      // eventHandler
      try {
        const handler = Zone[REJECTION_HANDLED_HANDLER];
        if (handler && typeof handler === 'function') {
          handler.call(this, {
            rejection: promise[symbolValue],
            promise: promise
          });
        }
      } catch (err) {}
      promise[symbolState] = REJECTED;
      for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
        if (promise === _uncaughtPromiseErrors[i].promise) {
          _uncaughtPromiseErrors.splice(i, 1);
        }
      }
    }
  }
  function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
    clearRejectedNoCatch(promise);
    const promiseState = promise[symbolState];
    const delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
    zone.scheduleMicroTask(source, () => {
      try {
        const parentPromiseValue = promise[symbolValue];
        const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
        if (isFinallyPromise) {
          // if the promise is generated from finally call, keep parent promise's state and value
          chainPromise[symbolParentPromiseValue] = parentPromiseValue;
          chainPromise[symbolParentPromiseState] = promiseState;
        }
        // should not pass value to finally callback
        const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
        resolvePromise(chainPromise, true, value);
      } catch (error) {
        // if error occurs, should always return this error
        resolvePromise(chainPromise, false, error);
      }
    }, chainPromise);
  }
  const ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
  const noop = function () {};
  const AggregateError = global.AggregateError;
  class ZoneAwarePromise {
    static toString() {
      return ZONE_AWARE_PROMISE_TO_STRING;
    }
    static resolve(value) {
      return resolvePromise(new this(null), RESOLVED, value);
    }
    static reject(error) {
      return resolvePromise(new this(null), REJECTED, error);
    }
    static any(values) {
      if (!values || typeof values[Symbol.iterator] !== 'function') {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }
      const promises = [];
      let count = 0;
      try {
        for (let v of values) {
          count++;
          promises.push(ZoneAwarePromise.resolve(v));
        }
      } catch (err) {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }
      if (count === 0) {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }
      let finished = false;
      const errors = [];
      return new ZoneAwarePromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
          promises[i].then(v => {
            if (finished) {
              return;
            }
            finished = true;
            resolve(v);
          }, err => {
            errors.push(err);
            count--;
            if (count === 0) {
              finished = true;
              reject(new AggregateError(errors, 'All promises were rejected'));
            }
          });
        }
      });
    }
    static race(values) {
      let resolve;
      let reject;
      let promise = new this((res, rej) => {
        resolve = res;
        reject = rej;
      });
      function onResolve(value) {
        resolve(value);
      }
      function onReject(error) {
        reject(error);
      }
      for (let value of values) {
        if (!isThenable(value)) {
          value = this.resolve(value);
        }
        value.then(onResolve, onReject);
      }
      return promise;
    }
    static all(values) {
      return ZoneAwarePromise.allWithCallback(values);
    }
    static allSettled(values) {
      const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
      return P.allWithCallback(values, {
        thenCallback: value => ({
          status: 'fulfilled',
          value
        }),
        errorCallback: err => ({
          status: 'rejected',
          reason: err
        })
      });
    }
    static allWithCallback(values, callback) {
      let resolve;
      let reject;
      let promise = new this((res, rej) => {
        resolve = res;
        reject = rej;
      });
      // Start at 2 to prevent prematurely resolving if .then is called immediately.
      let unresolvedCount = 2;
      let valueIndex = 0;
      const resolvedValues = [];
      for (let value of values) {
        if (!isThenable(value)) {
          value = this.resolve(value);
        }
        const curValueIndex = valueIndex;
        try {
          value.then(value => {
            resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
            unresolvedCount--;
            if (unresolvedCount === 0) {
              resolve(resolvedValues);
            }
          }, err => {
            if (!callback) {
              reject(err);
            } else {
              resolvedValues[curValueIndex] = callback.errorCallback(err);
              unresolvedCount--;
              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }
          });
        } catch (thenErr) {
          reject(thenErr);
        }
        unresolvedCount++;
        valueIndex++;
      }
      // Make the unresolvedCount zero-based again.
      unresolvedCount -= 2;
      if (unresolvedCount === 0) {
        resolve(resolvedValues);
      }
      return promise;
    }
    constructor(executor) {
      const promise = this;
      if (!(promise instanceof ZoneAwarePromise)) {
        throw new Error('Must be an instanceof Promise.');
      }
      promise[symbolState] = UNRESOLVED;
      promise[symbolValue] = []; // queue;
      try {
        const onceWrapper = once();
        executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
      } catch (error) {
        resolvePromise(promise, false, error);
      }
    }
    get [Symbol.toStringTag]() {
      return 'Promise';
    }
    get [Symbol.species]() {
      return ZoneAwarePromise;
    }
    then(onFulfilled, onRejected) {
      var _a;
      // We must read `Symbol.species` safely because `this` may be anything. For instance, `this`
      // may be an object without a prototype (created through `Object.create(null)`); thus
      // `this.constructor` will be undefined. One of the use cases is SystemJS creating
      // prototype-less objects (modules) via `Object.create(null)`. The SystemJS creates an empty
      // object and copies promise properties into that object (within the `getOrCreateLoad`
      // function). The zone.js then checks if the resolved value has the `then` method and invokes
      // it with the `value` context. Otherwise, this will throw an error: `TypeError: Cannot read
      // properties of undefined (reading 'Symbol(Symbol.species)')`.
      let C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];
      if (!C || typeof C !== 'function') {
        C = this.constructor || ZoneAwarePromise;
      }
      const chainPromise = new C(noop);
      const zone = Zone.current;
      if (this[symbolState] == UNRESOLVED) {
        this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
      } else {
        scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
      }
      return chainPromise;
    }
    catch(onRejected) {
      return this.then(null, onRejected);
    }
    finally(onFinally) {
      var _a;
      // See comment on the call to `then` about why thee `Symbol.species` is safely accessed.
      let C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];
      if (!C || typeof C !== 'function') {
        C = ZoneAwarePromise;
      }
      const chainPromise = new C(noop);
      chainPromise[symbolFinally] = symbolFinally;
      const zone = Zone.current;
      if (this[symbolState] == UNRESOLVED) {
        this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
      } else {
        scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
      }
      return chainPromise;
    }
  }
  // Protect against aggressive optimizers dropping seemingly unused properties.
  // E.g. Closure Compiler in advanced mode.
  ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
  ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
  ZoneAwarePromise['race'] = ZoneAwarePromise.race;
  ZoneAwarePromise['all'] = ZoneAwarePromise.all;
  const NativePromise = global[symbolPromise] = global['Promise'];
  global['Promise'] = ZoneAwarePromise;
  const symbolThenPatched = __symbol__('thenPatched');
  function patchThen(Ctor) {
    const proto = Ctor.prototype;
    const prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
    if (prop && (prop.writable === false || !prop.configurable)) {
      // check Ctor.prototype.then propertyDescriptor is writable or not
      // in meteor env, writable is false, we should ignore such case
      return;
    }
    const originalThen = proto.then;
    // Keep a reference to the original method.
    proto[symbolThen] = originalThen;
    Ctor.prototype.then = function (onResolve, onReject) {
      const wrapped = new ZoneAwarePromise((resolve, reject) => {
        originalThen.call(this, resolve, reject);
      });
      return wrapped.then(onResolve, onReject);
    };
    Ctor[symbolThenPatched] = true;
  }
  api.patchThen = patchThen;
  function zoneify(fn) {
    return function (self, args) {
      let resultPromise = fn.apply(self, args);
      if (resultPromise instanceof ZoneAwarePromise) {
        return resultPromise;
      }
      let ctor = resultPromise.constructor;
      if (!ctor[symbolThenPatched]) {
        patchThen(ctor);
      }
      return resultPromise;
    };
  }
  if (NativePromise) {
    patchThen(NativePromise);
    patchMethod(global, 'fetch', delegate => zoneify(delegate));
  }
  // This is not part of public API, but it is useful for tests, so we expose it.
  Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
  return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', global => {
  // patch Func.prototype.toString to let them look like native
  const originalFunctionToString = Function.prototype.toString;
  const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
  const PROMISE_SYMBOL = zoneSymbol('Promise');
  const ERROR_SYMBOL = zoneSymbol('Error');
  const newFunctionToString = function toString() {
    if (typeof this === 'function') {
      const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
      if (originalDelegate) {
        if (typeof originalDelegate === 'function') {
          return originalFunctionToString.call(originalDelegate);
        } else {
          return Object.prototype.toString.call(originalDelegate);
        }
      }
      if (this === Promise) {
        const nativePromise = global[PROMISE_SYMBOL];
        if (nativePromise) {
          return originalFunctionToString.call(nativePromise);
        }
      }
      if (this === Error) {
        const nativeError = global[ERROR_SYMBOL];
        if (nativeError) {
          return originalFunctionToString.call(nativeError);
        }
      }
    }
    return originalFunctionToString.call(this);
  };
  newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
  Function.prototype.toString = newFunctionToString;
  // patch Object.prototype.toString to let them look like native
  const originalObjectToString = Object.prototype.toString;
  const PROMISE_OBJECT_TO_STRING = '[object Promise]';
  Object.prototype.toString = function () {
    if (typeof Promise === 'function' && this instanceof Promise) {
      return PROMISE_OBJECT_TO_STRING;
    }
    return originalObjectToString.call(this);
  };
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let passiveSupported = false;
if (typeof window !== 'undefined') {
  try {
    const options = Object.defineProperty({}, 'passive', {
      get: function () {
        passiveSupported = true;
      }
    });
    // Note: We pass the `options` object as the event handler too. This is not compatible with the
    // signature of `addEventListener` or `removeEventListener` but enables us to remove the handler
    // without an actual handler.
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
// an identifier to tell ZoneTask do not create a new invoke closure
const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
const zoneSymbolEventNames = {};
const globalSources = {};
const EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
const IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');
function prepareEventNames(eventName, eventNameToString) {
  const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames[eventName] = {};
  zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
  zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
}
function patchEventTarget(_global, api, apis, patchOptions) {
  const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
  const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
  const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  const ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
  const PREPEND_EVENT_LISTENER = 'prependListener';
  const PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
  const invokeTask = function (task, target, event) {
    // for better performance, check isRemoved which is set
    // by removeEventListener
    if (task.isRemoved) {
      return;
    }
    const delegate = task.callback;
    if (typeof delegate === 'object' && delegate.handleEvent) {
      // create the bind version of handleEvent when invoke
      task.callback = event => delegate.handleEvent(event);
      task.originalDelegate = delegate;
    }
    // invoke static task.invoke
    // need to try/catch error here, otherwise, the error in one event listener
    // will break the executions of the other event listeners. Also error will
    // not remove the event listener when `once` options is true.
    let error;
    try {
      task.invoke(task, target, [event]);
    } catch (err) {
      error = err;
    }
    const options = task.options;
    if (options && typeof options === 'object' && options.once) {
      // if options.once is true, after invoke once remove listener here
      // only browser need to do this, nodejs eventEmitter will cal removeListener
      // inside EventEmitter.once
      const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
      target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
    }
    return error;
  };
  function globalCallback(context, event, isCapture) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
      return;
    }
    // event.target is needed for Samsung TV and SourceBuffer
    // || global is needed https://github.com/angular/zone.js/issues/190
    const target = context || event.target || _global;
    const tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];
    if (tasks) {
      const errors = [];
      // invoke all tasks which attached to current target with given event.type and capture = false
      // for performance concern, if task.length === 1, just invoke
      if (tasks.length === 1) {
        const err = invokeTask(tasks[0], target, event);
        err && errors.push(err);
      } else {
        // https://github.com/angular/zone.js/issues/836
        // copy the tasks array before invoke, to avoid
        // the callback will remove itself or other listener
        const copyTasks = tasks.slice();
        for (let i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }
          const err = invokeTask(copyTasks[i], target, event);
          err && errors.push(err);
        }
      }
      // Since there is only one error, we don't need to schedule microTask
      // to throw the error.
      if (errors.length === 1) {
        throw errors[0];
      } else {
        for (let i = 0; i < errors.length; i++) {
          const err = errors[i];
          api.nativeScheduleMicroTask(() => {
            throw err;
          });
        }
      }
    }
  }
  // global shared zoneAwareCallback to handle all event callback with capture = false
  const globalZoneAwareCallback = function (event) {
    return globalCallback(this, event, false);
  };
  // global shared zoneAwareCallback to handle all event callback with capture = true
  const globalZoneAwareCaptureCallback = function (event) {
    return globalCallback(this, event, true);
  };
  function patchEventTargetMethods(obj, patchOptions) {
    if (!obj) {
      return false;
    }
    let useGlobalCallback = true;
    if (patchOptions && patchOptions.useG !== undefined) {
      useGlobalCallback = patchOptions.useG;
    }
    const validateHandler = patchOptions && patchOptions.vh;
    let checkDuplicate = true;
    if (patchOptions && patchOptions.chkDup !== undefined) {
      checkDuplicate = patchOptions.chkDup;
    }
    let returnTarget = false;
    if (patchOptions && patchOptions.rt !== undefined) {
      returnTarget = patchOptions.rt;
    }
    let proto = obj;
    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && obj[ADD_EVENT_LISTENER]) {
      // somehow we did not find it, but we can see it. This happens on IE for Window properties.
      proto = obj;
    }
    if (!proto) {
      return false;
    }
    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }
    const eventNameToString = patchOptions && patchOptions.eventNameToString;
    // a shared global taskData to pass data for scheduleEventTask
    // so we do not need to create a new object just for pass some data
    const taskData = {};
    const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    let nativePrependEventListener;
    if (patchOptions && patchOptions.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
    }
    /**
     * This util function will build an option object with passive option
     * to handle all possible input from the user.
     */
    function buildEventListenerOptions(options, passive) {
      if (!passiveSupported && typeof options === 'object' && options) {
        // doesn't support passive but user want to pass an object as options.
        // this will not work on some old browser, so we just pass a boolean
        // as useCapture parameter
        return !!options.capture;
      }
      if (!passiveSupported || !passive) {
        return options;
      }
      if (typeof options === 'boolean') {
        return {
          capture: options,
          passive: true
        };
      }
      if (!options) {
        return {
          passive: true
        };
      }
      if (typeof options === 'object' && options.passive !== false) {
        return Object.assign(Object.assign({}, options), {
          passive: true
        });
      }
      return options;
    }
    const customScheduleGlobal = function (task) {
      // if there is already a task for the eventName + capture,
      // just return, because we use the shared globalZoneAwareCallback here.
      if (taskData.isExisting) {
        return;
      }
      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };
    const customCancelGlobal = function (task) {
      // if task is not marked as isRemoved, this call is directly
      // from Zone.prototype.cancelTask, we should remove the task
      // from tasksList of target first
      if (!task.isRemoved) {
        const symbolEventNames = zoneSymbolEventNames[task.eventName];
        let symbolEventName;
        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }
        const existingTasks = symbolEventName && task.target[symbolEventName];
        if (existingTasks) {
          for (let i = 0; i < existingTasks.length; i++) {
            const existingTask = existingTasks[i];
            if (existingTask === task) {
              existingTasks.splice(i, 1);
              // set isRemoved to data for faster invokeTask check
              task.isRemoved = true;
              if (existingTasks.length === 0) {
                // all tasks for the eventName + capture have gone,
                // remove globalZoneAwareCallback and remove the task cache from target
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }
              break;
            }
          }
        }
      }
      // if all tasks for the eventName + capture have gone,
      // we will really remove the global event callback,
      // if not, return
      if (!task.allRemoved) {
        return;
      }
      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };
    const customScheduleNonGlobal = function (task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customSchedulePrepend = function (task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customCancelNonGlobal = function (task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };
    const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
    const compareTaskCallbackVsDelegate = function (task, delegate) {
      const typeOfDelegate = typeof delegate;
      return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
    };
    const compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
    const unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];
    const passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];
    const makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
      return function () {
        const target = this || _global;
        let eventName = arguments[0];
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }
        let delegate = arguments[1];
        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }
        if (isNode && eventName === 'uncaughtException') {
          // don't patch uncaughtException of nodejs to prevent endless loop
          return nativeListener.apply(this, arguments);
        }
        // don't create the bind delegate function for handleEvent
        // case here to improve addEventListener performance
        // we will create the bind delegate when invoke
        let isHandleEvent = false;
        if (typeof delegate !== 'function') {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }
          isHandleEvent = true;
        }
        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }
        const passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        const options = buildEventListenerOptions(arguments[2], passive);
        if (unpatchedEvents) {
          // check unpatched list
          for (let i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }
        const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
        const once = options && typeof options === 'object' ? options.once : false;
        const zone = Zone.current;
        let symbolEventNames = zoneSymbolEventNames[eventName];
        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames[eventName];
        }
        const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        let existingTasks = target[symbolEventName];
        let isExisting = false;
        if (existingTasks) {
          // already have task registered
          isExisting = true;
          if (checkDuplicate) {
            for (let i = 0; i < existingTasks.length; i++) {
              if (compare(existingTasks[i], delegate)) {
                // same callback, same capture, same event name, just return
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }
        let source;
        const constructorName = target.constructor['name'];
        const targetSource = globalSources[constructorName];
        if (targetSource) {
          source = targetSource[eventName];
        }
        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        }
        // do not create a new object as task.data to pass those things
        // just use the global shared one
        taskData.options = options;
        if (once) {
          // if addEventListener with once options, we don't pass it to
          // native addEventListener, instead we keep the once setting
          // and handle ourselves.
          taskData.options.once = false;
        }
        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
        // keep taskData into data to allow onScheduleEventTask to access the task information
        if (data) {
          data.taskData = taskData;
        }
        const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
        // should clear taskData.target to avoid memory leak
        // issue, https://github.com/angular/angular/issues/20442
        taskData.target = null;
        // need to clear up taskData because it is a global object
        if (data) {
          data.taskData = null;
        }
        // have to save those information to task in case
        // application may call task.zone.cancelTask() directly
        if (once) {
          options.once = true;
        }
        if (!(!passiveSupported && typeof task.options === 'boolean')) {
          // if not support passive, and we pass an option object
          // to addEventListener, we should save the options to task
          task.options = options;
        }
        task.target = target;
        task.capture = capture;
        task.eventName = eventName;
        if (isHandleEvent) {
          // save original delegate for compare to check duplicate
          task.originalDelegate = delegate;
        }
        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }
        if (returnTarget) {
          return target;
        }
      };
    };
    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }
    proto[REMOVE_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }
      const options = arguments[2];
      const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
      const delegate = arguments[1];
      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }
      const symbolEventNames = zoneSymbolEventNames[eventName];
      let symbolEventName;
      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }
      const existingTasks = symbolEventName && target[symbolEventName];
      if (existingTasks) {
        for (let i = 0; i < existingTasks.length; i++) {
          const existingTask = existingTasks[i];
          if (compare(existingTask, delegate)) {
            existingTasks.splice(i, 1);
            // set isRemoved to data for faster invokeTask check
            existingTask.isRemoved = true;
            if (existingTasks.length === 0) {
              // all tasks for the eventName + capture have gone,
              // remove globalZoneAwareCallback and remove the task cache from target
              existingTask.allRemoved = true;
              target[symbolEventName] = null;
              // in the target, we have an event listener which is added by on_property
              // such as target.onclick = function() {}, so we need to clear this internal
              // property too if all delegates all removed
              if (typeof eventName === 'string') {
                const onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                target[onPropertySymbol] = null;
              }
            }
            existingTask.zone.cancelTask(existingTask);
            if (returnTarget) {
              return target;
            }
            return;
          }
        }
      }
      // issue 930, didn't find the event name or callback
      // from zone kept existingTasks, the callback maybe
      // added outside of zone, we need to call native removeEventListener
      // to try to remove it.
      return nativeRemoveEventListener.apply(this, arguments);
    };
    proto[LISTENERS_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }
      const listeners = [];
      const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }
      return listeners;
    };
    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (!eventName) {
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
          const prop = keys[i];
          const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          let evtName = match && match[1];
          // in nodejs EventEmitter, removeListener event is
          // used for monitoring the removeListener call,
          // so just keep removeListener eventListener until
          // all other eventListeners are removed
          if (evtName && evtName !== 'removeListener') {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        }
        // remove removeListener listener finally
        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
      } else {
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }
        const symbolEventNames = zoneSymbolEventNames[eventName];
        if (symbolEventNames) {
          const symbolEventName = symbolEventNames[FALSE_STR];
          const symbolCaptureEventName = symbolEventNames[TRUE_STR];
          const tasks = target[symbolEventName];
          const captureTasks = target[symbolCaptureEventName];
          if (tasks) {
            const removeTasks = tasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
          if (captureTasks) {
            const removeTasks = captureTasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
        }
      }
      if (returnTarget) {
        return this;
      }
    };
    // for native toString patch
    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }
    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }
    return true;
  }
  let results = [];
  for (let i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }
  return results;
}
function findEventTasks(target, eventName) {
  if (!eventName) {
    const foundTasks = [];
    for (let prop in target) {
      const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
      let evtName = match && match[1];
      if (evtName && (!eventName || evtName === eventName)) {
        const tasks = target[prop];
        if (tasks) {
          for (let i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }
    return foundTasks;
  }
  let symbolEventName = zoneSymbolEventNames[eventName];
  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames[eventName];
  }
  const captureFalseTasks = target[symbolEventName[FALSE_STR]];
  const captureTrueTasks = target[symbolEventName[TRUE_STR]];
  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}
function patchEventPrototype(global, api) {
  const Event = global['Event'];
  if (Event && Event.prototype) {
    api.patchMethod(Event.prototype, 'stopImmediatePropagation', delegate => function (self, args) {
      self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
      // we need to call the native stopImmediatePropagation
      // in case in some hybrid application, some part of
      // application will be controlled by zone, some are not
      delegate && delegate.apply(self, args);
    });
  }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
  const symbol = Zone.__symbol__(method);
  if (target[symbol]) {
    return;
  }
  const nativeDelegate = target[symbol] = target[method];
  target[method] = function (name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function (callback) {
        const source = `${targetName}.${method}::` + callback;
        const prototype = opts.prototype;
        // Note: the `patchCallbacks` is used for patching the `document.registerElement` and
        // `customElements.define`. We explicitly wrap the patching code into try-catch since
        // callbacks may be already patched by other web components frameworks (e.g. LWC), and they
        // make those properties non-writable. This means that patching callback will throw an error
        // `cannot assign to read-only property`. See this code as an example:
        // https://github.com/salesforce/lwc/blob/master/packages/@lwc/engine-core/src/framework/base-bridge-element.ts#L180-L186
        // We don't want to stop the application rendering if we couldn't patch some
        // callback, e.g. `attributeChangedCallback`.
        try {
          if (prototype.hasOwnProperty(callback)) {
            const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        } catch (_a) {
          // Note: we leave the catch block empty since there's no way to handle the error related
          // to non-writable property.
        }
      });
    }
    return nativeDelegate.call(target, name, opts, options);
  };
  api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }
  const tip = ignoreProperties.filter(ip => ip.target === target);
  if (!tip || tip.length === 0) {
    return onProperties;
  }
  const targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter(op => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
  // check whether target is available, sometimes target will be undefined
  // because different browser or some 3rd party plugin.
  if (!target) {
    return;
  }
  const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype);
}
/**
 * Get all event name properties which the event name startsWith `on`
 * from the target object itself, inherited properties are not considered.
 */
function getOnEventNames(target) {
  return Object.getOwnPropertyNames(target).filter(name => name.startsWith('on') && name.length > 2).map(name => name.substring(2));
}
function propertyDescriptorPatch(api, _global) {
  if (isNode && !isMix) {
    return;
  }
  if (Zone[api.symbol('patchEvents')]) {
    // events are already been patched by legacy patch.
    return;
  }
  const ignoreProperties = _global['__Zone_ignore_on_properties'];
  // for browsers that we can patch the descriptor:  Chrome & Firefox
  let patchTargets = [];
  if (isBrowser) {
    const internalWindow = window;
    patchTargets = patchTargets.concat(['Document', 'SVGElement', 'Element', 'HTMLElement', 'HTMLBodyElement', 'HTMLMediaElement', 'HTMLFrameSetElement', 'HTMLFrameElement', 'HTMLIFrameElement', 'HTMLMarqueeElement', 'Worker']);
    const ignoreErrorProperties = isIE() ? [{
      target: internalWindow,
      ignoreProperties: ['error']
    }] : [];
    // in IE/Edge, onProp not exist in window object, but in WindowPrototype
    // so we need to pass WindowPrototype to check onProp exist or not
    patchFilteredProperties(internalWindow, getOnEventNames(internalWindow), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
  }
  patchTargets = patchTargets.concat(['XMLHttpRequest', 'XMLHttpRequestEventTarget', 'IDBIndex', 'IDBRequest', 'IDBOpenDBRequest', 'IDBDatabase', 'IDBTransaction', 'IDBCursor', 'WebSocket']);
  for (let i = 0; i < patchTargets.length; i++) {
    const target = _global[patchTargets[i]];
    target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
  }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', (global, Zone, api) => {
  // Collect native event names by looking at properties
  // on the global namespace, e.g. 'onclick'.
  const eventNames = getOnEventNames(global);
  api.patchOnProperties = patchOnProperties;
  api.patchMethod = patchMethod;
  api.bindArguments = bindArguments;
  api.patchMacroTask = patchMacroTask;
  // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
  // define which events will not be patched by `Zone.js`.
  // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
  // the name consistent with angular repo.
  // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
  // backwards compatibility.
  const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
  const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
  if (global[SYMBOL_UNPATCHED_EVENTS]) {
    global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
  }
  if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
    Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
  }
  api.patchEventPrototype = patchEventPrototype;
  api.patchEventTarget = patchEventTarget;
  api.isIEOrEdge = isIEOrEdge;
  api.ObjectDefineProperty = ObjectDefineProperty;
  api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
  api.ObjectCreate = ObjectCreate;
  api.ArraySlice = ArraySlice;
  api.patchClass = patchClass;
  api.wrapWithCurrentZone = wrapWithCurrentZone;
  api.filterProperties = filterProperties;
  api.attachOriginToPatched = attachOriginToPatched;
  api._redefineProperty = Object.defineProperty;
  api.patchCallbacks = patchCallbacks;
  api.getGlobalObjects = () => ({
    globalSources,
    zoneSymbolEventNames,
    eventNames,
    isBrowser,
    isMix,
    isNode,
    TRUE_STR,
    FALSE_STR,
    ZONE_SYMBOL_PREFIX,
    ADD_EVENT_LISTENER_STR,
    REMOVE_EVENT_LISTENER_STR
  });
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
  let setNative = null;
  let clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  const tasksByHandleId = {};
  function scheduleTask(task) {
    const data = task.data;
    data.args[0] = function () {
      return task.invoke.apply(this, arguments);
    };
    data.handleId = setNative.apply(window, data.args);
    return task;
  }
  function clearTask(task) {
    return clearNative.call(window, task.data.handleId);
  }
  setNative = patchMethod(window, setName, delegate => function (self, args) {
    if (typeof args[0] === 'function') {
      const options = {
        isPeriodic: nameSuffix === 'Interval',
        delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
        args: args
      };
      const callback = args[0];
      args[0] = function timer() {
        try {
          return callback.apply(this, arguments);
        } finally {
          // issue-934, task will be cancelled
          // even it is a periodic task such as
          // setInterval
          // https://github.com/angular/angular/issues/40387
          // Cleanup tasksByHandleId should be handled before scheduleTask
          // Since some zoneSpec may intercept and doesn't trigger
          // scheduleFn(scheduleTask) provided here.
          if (!options.isPeriodic) {
            if (typeof options.handleId === 'number') {
              // in non-nodejs env, we remove timerId
              // from local cache
              delete tasksByHandleId[options.handleId];
            } else if (options.handleId) {
              // Node returns complex objects as handleIds
              // we remove task reference from timer object
              options.handleId[taskSymbol] = null;
            }
          }
        }
      };
      const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
      if (!task) {
        return task;
      }
      // Node.js must additionally support the ref and unref functions.
      const handle = task.data.handleId;
      if (typeof handle === 'number') {
        // for non nodejs env, we save handleId: task
        // mapping in local cache for clearTimeout
        tasksByHandleId[handle] = task;
      } else if (handle) {
        // for nodejs env, we save task
        // reference in timerId Object for clearTimeout
        handle[taskSymbol] = task;
      }
      // check whether handle is null, because some polyfill or browser
      // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
      if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
        task.ref = handle.ref.bind(handle);
        task.unref = handle.unref.bind(handle);
      }
      if (typeof handle === 'number' || handle) {
        return handle;
      }
      return task;
    } else {
      // cause an error by calling it directly.
      return delegate.apply(window, args);
    }
  });
  clearNative = patchMethod(window, cancelName, delegate => function (self, args) {
    const id = args[0];
    let task;
    if (typeof id === 'number') {
      // non nodejs env.
      task = tasksByHandleId[id];
    } else {
      // nodejs env.
      task = id && id[taskSymbol];
      // other environments.
      if (!task) {
        task = id;
      }
    }
    if (task && typeof task.type === 'string') {
      if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
        if (typeof id === 'number') {
          delete tasksByHandleId[id];
        } else if (id) {
          id[taskSymbol] = null;
        }
        // Do not cancel already canceled functions
        task.zone.cancelTask(task);
      }
    } else {
      // cause an error by calling it directly.
      delegate.apply(window, args);
    }
  });
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
  const {
    isBrowser,
    isMix
  } = api.getGlobalObjects();
  if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
    return;
  }
  const callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
  api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
  if (Zone[api.symbol('patchEventTarget')]) {
    // EventTarget is already patched.
    return;
  }
  const {
    eventNames,
    zoneSymbolEventNames,
    TRUE_STR,
    FALSE_STR,
    ZONE_SYMBOL_PREFIX
  } = api.getGlobalObjects();
  //  predefine all __zone_symbol__ + eventName + true/false string
  for (let i = 0; i < eventNames.length; i++) {
    const eventName = eventNames[i];
    const falseEventName = eventName + FALSE_STR;
    const trueEventName = eventName + TRUE_STR;
    const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames[eventName] = {};
    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
  }
  const EVENT_TARGET = _global['EventTarget'];
  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }
  api.patchEventTarget(_global, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}
function patchEvent(global, api) {
  api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('legacy', global => {
  const legacyPatch = global[Zone.__symbol__('legacyPatch')];
  if (legacyPatch) {
    legacyPatch();
  }
});
Zone.__load_patch('queueMicrotask', (global, Zone, api) => {
  api.patchMethod(global, 'queueMicrotask', delegate => {
    return function (self, args) {
      Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
    };
  });
});
Zone.__load_patch('timers', global => {
  const set = 'set';
  const clear = 'clear';
  patchTimer(global, set, clear, 'Timeout');
  patchTimer(global, set, clear, 'Interval');
  patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', global => {
  patchTimer(global, 'request', 'cancel', 'AnimationFrame');
  patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
  patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', (global, Zone) => {
  const blockingMethods = ['alert', 'prompt', 'confirm'];
  for (let i = 0; i < blockingMethods.length; i++) {
    const name = blockingMethods[i];
    patchMethod(global, name, (delegate, symbol, name) => {
      return function (s, args) {
        return Zone.current.run(delegate, global, args, name);
      };
    });
  }
});
Zone.__load_patch('EventTarget', (global, Zone, api) => {
  patchEvent(global, api);
  eventTargetPatch(global, api);
  // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
  const XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
  if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
    api.patchEventTarget(global, api, [XMLHttpRequestEventTarget.prototype]);
  }
});
Zone.__load_patch('MutationObserver', (global, Zone, api) => {
  patchClass('MutationObserver');
  patchClass('WebKitMutationObserver');
});
Zone.__load_patch('IntersectionObserver', (global, Zone, api) => {
  patchClass('IntersectionObserver');
});
Zone.__load_patch('FileReader', (global, Zone, api) => {
  patchClass('FileReader');
});
Zone.__load_patch('on_property', (global, Zone, api) => {
  propertyDescriptorPatch(api, global);
});
Zone.__load_patch('customElements', (global, Zone, api) => {
  patchCustomElements(global, api);
});
Zone.__load_patch('XHR', (global, Zone) => {
  // Treat XMLHttpRequest as a macrotask.
  patchXHR(global);
  const XHR_TASK = zoneSymbol('xhrTask');
  const XHR_SYNC = zoneSymbol('xhrSync');
  const XHR_LISTENER = zoneSymbol('xhrListener');
  const XHR_SCHEDULED = zoneSymbol('xhrScheduled');
  const XHR_URL = zoneSymbol('xhrURL');
  const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
  function patchXHR(window) {
    const XMLHttpRequest = window['XMLHttpRequest'];
    if (!XMLHttpRequest) {
      // XMLHttpRequest is not available in service worker
      return;
    }
    const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    function findPendingTask(target) {
      return target[XHR_TASK];
    }
    let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
    let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
    if (!oriAddListener) {
      const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
      if (XMLHttpRequestEventTarget) {
        const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
        oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }
    }
    const READY_STATE_CHANGE = 'readystatechange';
    const SCHEDULED = 'scheduled';
    function scheduleTask(task) {
      const data = task.data;
      const target = data.target;
      target[XHR_SCHEDULED] = false;
      target[XHR_ERROR_BEFORE_SCHEDULED] = false;
      // remove existing event listener
      const listener = target[XHR_LISTENER];
      if (!oriAddListener) {
        oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }
      if (listener) {
        oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
      }
      const newListener = target[XHR_LISTENER] = () => {
        if (target.readyState === target.DONE) {
          // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
          // readyState=4 multiple times, so we need to check task state here
          if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
            // check whether the xhr has registered onload listener
            // if that is the case, the task should invoke after all
            // onload listeners finish.
            // Also if the request failed without response (status = 0), the load event handler
            // will not be triggered, in that case, we should also invoke the placeholder callback
            // to close the XMLHttpRequest::send macroTask.
            // https://github.com/angular/angular/issues/38795
            const loadTasks = target[Zone.__symbol__('loadfalse')];
            if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
              const oriInvoke = task.invoke;
              task.invoke = function () {
                // need to load the tasks again, because in other
                // load listener, they may remove themselves
                const loadTasks = target[Zone.__symbol__('loadfalse')];
                for (let i = 0; i < loadTasks.length; i++) {
                  if (loadTasks[i] === task) {
                    loadTasks.splice(i, 1);
                  }
                }
                if (!data.aborted && task.state === SCHEDULED) {
                  oriInvoke.call(task);
                }
              };
              loadTasks.push(task);
            } else {
              task.invoke();
            }
          } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
            // error occurs when xhr.send()
            target[XHR_ERROR_BEFORE_SCHEDULED] = true;
          }
        }
      };
      oriAddListener.call(target, READY_STATE_CHANGE, newListener);
      const storedTask = target[XHR_TASK];
      if (!storedTask) {
        target[XHR_TASK] = task;
      }
      sendNative.apply(target, data.args);
      target[XHR_SCHEDULED] = true;
      return task;
    }
    function placeholderCallback() {}
    function clearTask(task) {
      const data = task.data;
      // Note - ideally, we would call data.target.removeEventListener here, but it's too late
      // to prevent it from firing. So instead, we store info for the event listener.
      data.aborted = true;
      return abortNative.apply(data.target, data.args);
    }
    const openNative = patchMethod(XMLHttpRequestPrototype, 'open', () => function (self, args) {
      self[XHR_SYNC] = args[2] == false;
      self[XHR_URL] = args[1];
      return openNative.apply(self, args);
    });
    const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
    const fetchTaskAborting = zoneSymbol('fetchTaskAborting');
    const fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
    const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', () => function (self, args) {
      if (Zone.current[fetchTaskScheduling] === true) {
        // a fetch is scheduling, so we are using xhr to polyfill fetch
        // and because we already schedule macroTask for fetch, we should
        // not schedule a macroTask for xhr again
        return sendNative.apply(self, args);
      }
      if (self[XHR_SYNC]) {
        // if the XHR is sync there is no task to schedule, just execute the code.
        return sendNative.apply(self, args);
      } else {
        const options = {
          target: self,
          url: self[XHR_URL],
          isPeriodic: false,
          args: args,
          aborted: false
        };
        const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
        if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
          // xhr request throw error when send
          // we should invoke task instead of leaving a scheduled
          // pending macroTask
          task.invoke();
        }
      }
    });
    const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', () => function (self, args) {
      const task = findPendingTask(self);
      if (task && typeof task.type == 'string') {
        // If the XHR has already completed, do nothing.
        // If the XHR has already been aborted, do nothing.
        // Fix #569, call abort multiple times before done will cause
        // macroTask task count be negative number
        if (task.cancelFn == null || task.data && task.data.aborted) {
          return;
        }
        task.zone.cancelTask(task);
      } else if (Zone.current[fetchTaskAborting] === true) {
        // the abort is called from fetch polyfill, we need to call native abort of XHR.
        return abortNative.apply(self, args);
      }
      // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
      // task
      // to cancel. Do nothing.
    });
  }
});

Zone.__load_patch('geolocation', global => {
  /// GEO_LOCATION
  if (global['navigator'] && global['navigator'].geolocation) {
    patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
  }
});
Zone.__load_patch('PromiseRejectionEvent', (global, Zone) => {
  // handle unhandled promise rejection
  function findPromiseRejectionHandler(evtName) {
    return function (e) {
      const eventTasks = findEventTasks(global, evtName);
      eventTasks.forEach(eventTask => {
        // windows has added unhandledrejection event listener
        // trigger the event listener
        const PromiseRejectionEvent = global['PromiseRejectionEvent'];
        if (PromiseRejectionEvent) {
          const evt = new PromiseRejectionEvent(evtName, {
            promise: e.promise,
            reason: e.rejection
          });
          eventTask.invoke(evt);
        }
      });
    };
  }
  if (global['PromiseRejectionEvent']) {
    Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
    Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
  }
});

/***/ }),

/***/ 3586:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/localize/init */ 3587);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js */ 3589);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _webcomponents_custom_elements_src_native_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webcomponents/custom-elements/src/native-shim */ 3590);
/* harmony import */ var _webcomponents_custom_elements_src_native_shim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_webcomponents_custom_elements_src_native_shim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _webcomponents_custom_elements_custom_elements_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @webcomponents/custom-elements/custom-elements.min */ 3591);
/* harmony import */ var _webcomponents_custom_elements_custom_elements_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webcomponents_custom_elements_custom_elements_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _webcomponents_webcomponents_platform_webcomponents_platform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @webcomponents/webcomponents-platform/webcomponents-platform.js */ 3592);
/* harmony import */ var _webcomponents_webcomponents_platform_webcomponents_platform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webcomponents_webcomponents_platform_webcomponents_platform_js__WEBPACK_IMPORTED_MODULE_4__);
/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */

/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
// Needed on browsers with native `customElements`.
// (E.g.: Chrome, Opera)

// Needed for browsers without native `customElements`.
// (E.g.: Edge, Firefox, IE, Safari)

//A set of basic platform polyfills needed by webcomponents.js, such as a constructable CustomEvent and basic ES6 shims

// This is needed for integrated mode because MicrosoftAjax.js (coming from SF) overrides 'startsWith' and breaks the JIT compilation.
Object.defineProperty(String.prototype, 'startsWith', {
  value: function (search, rawPos) {
    const pos = rawPos > 0 ? rawPos | 0 : 0;
    return this.substring(pos, pos + search.length) === search;
  }
});
window.process = {
  env: {
    DEBUG: undefined
  }
};

/***/ }),

/***/ 3587:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/localize/fesm2020/init.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$localize": () => (/* reexport safe */ _angular_localize__WEBPACK_IMPORTED_MODULE_0__["ɵ$localize"])
/* harmony export */ });
/* harmony import */ var _angular_localize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/localize */ 3588);
/**
 * @license Angular v15.2.9
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */




// Attach $localize to the global context, as a side-effect of this module.
_angular_localize__WEBPACK_IMPORTED_MODULE_0__["ɵ_global"].$localize = _angular_localize__WEBPACK_IMPORTED_MODULE_0__["ɵ$localize"];

/***/ }),

/***/ 3588:
/*!**************************************************************!*\
  !*** ./node_modules/@angular/localize/fesm2020/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTranslations": () => (/* binding */ clearTranslations),
/* harmony export */   "loadTranslations": () => (/* binding */ loadTranslations),
/* harmony export */   "ɵ$localize": () => (/* binding */ $localize$1),
/* harmony export */   "ɵMissingTranslationError": () => (/* binding */ MissingTranslationError),
/* harmony export */   "ɵ_global": () => (/* binding */ _global),
/* harmony export */   "ɵcomputeMsgId": () => (/* binding */ computeMsgId),
/* harmony export */   "ɵfindEndOfBlock": () => (/* binding */ findEndOfBlock),
/* harmony export */   "ɵisMissingTranslationError": () => (/* binding */ isMissingTranslationError),
/* harmony export */   "ɵmakeParsedTranslation": () => (/* binding */ makeParsedTranslation),
/* harmony export */   "ɵmakeTemplateObject": () => (/* binding */ makeTemplateObject),
/* harmony export */   "ɵparseMessage": () => (/* binding */ parseMessage),
/* harmony export */   "ɵparseMetadata": () => (/* binding */ parseMetadata),
/* harmony export */   "ɵparseTranslation": () => (/* binding */ parseTranslation),
/* harmony export */   "ɵsplitBlock": () => (/* binding */ splitBlock),
/* harmony export */   "ɵtranslate": () => (/* binding */ translate$1)
/* harmony export */ });
/**
 * @license Angular v15.2.9
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * The character used to mark the start and end of a "block" in a `$localize` tagged string.
 * A block can indicate metadata about the message or specify a name of a placeholder for a
 * substitution expressions.
 *
 * For example:
 *
 * ```ts
 * $localize`Hello, ${title}:title:!`;
 * $localize`:meaning|description@@id:source message text`;
 * ```
 */
const BLOCK_MARKER$1 = ':';
/**
 * The marker used to separate a message's "meaning" from its "description" in a metadata block.
 *
 * For example:
 *
 * ```ts
 * $localize `:correct|Indicates that the user got the answer correct: Right!`;
 * $localize `:movement|Button label for moving to the right: Right!`;
 * ```
 */
const MEANING_SEPARATOR = '|';
/**
 * The marker used to separate a message's custom "id" from its "description" in a metadata block.
 *
 * For example:
 *
 * ```ts
 * $localize `:A welcome message on the home page@@myApp-homepage-welcome: Welcome!`;
 * ```
 */
const ID_SEPARATOR = '@@';
/**
 * The marker used to separate legacy message ids from the rest of a metadata block.
 *
 * For example:
 *
 * ```ts
 * $localize `:@@custom-id␟2df64767cd895a8fabe3e18b94b5b6b6f9e2e3f0: Welcome!`;
 * ```
 *
 * Note that this character is the "symbol for the unit separator" (␟) not the "unit separator
 * character" itself, since that has no visual representation. See https://graphemica.com/%E2%90%9F.
 *
 * Here is some background for the original "unit separator character":
 * https://stackoverflow.com/questions/8695118/whats-the-file-group-record-unit-separator-control-characters-and-its-usage
 */
const LEGACY_ID_INDICATOR = '\u241F';

/**
 * Represents a big integer using a buffer of its individual digits, with the least significant
 * digit stored at the beginning of the array (little endian).
 *
 * For performance reasons, each instance is mutable. The addition operation can be done in-place
 * to reduce memory pressure of allocation for the digits array.
 */
class BigInteger {
  static zero() {
    return new BigInteger([0]);
  }
  static one() {
    return new BigInteger([1]);
  }
  /**
   * Creates a big integer using its individual digits in little endian storage.
   */
  constructor(digits) {
    this.digits = digits;
  }
  /**
   * Creates a clone of this instance.
   */
  clone() {
    return new BigInteger(this.digits.slice());
  }
  /**
   * Returns a new big integer with the sum of `this` and `other` as its value. This does not mutate
   * `this` but instead returns a new instance, unlike `addToSelf`.
   */
  add(other) {
    const result = this.clone();
    result.addToSelf(other);
    return result;
  }
  /**
   * Adds `other` to the instance itself, thereby mutating its value.
   */
  addToSelf(other) {
    const maxNrOfDigits = Math.max(this.digits.length, other.digits.length);
    let carry = 0;
    for (let i = 0; i < maxNrOfDigits; i++) {
      let digitSum = carry;
      if (i < this.digits.length) {
        digitSum += this.digits[i];
      }
      if (i < other.digits.length) {
        digitSum += other.digits[i];
      }
      if (digitSum >= 10) {
        this.digits[i] = digitSum - 10;
        carry = 1;
      } else {
        this.digits[i] = digitSum;
        carry = 0;
      }
    }
    // Apply a remaining carry if needed.
    if (carry > 0) {
      this.digits[maxNrOfDigits] = 1;
    }
  }
  /**
   * Builds the decimal string representation of the big integer. As this is stored in
   * little endian, the digits are concatenated in reverse order.
   */
  toString() {
    let res = '';
    for (let i = this.digits.length - 1; i >= 0; i--) {
      res += this.digits[i];
    }
    return res;
  }
}
/**
 * Represents a big integer which is optimized for multiplication operations, as its power-of-twos
 * are memoized. See `multiplyBy()` for details on the multiplication algorithm.
 */
class BigIntForMultiplication {
  constructor(value) {
    this.powerOfTwos = [value];
  }
  /**
   * Returns the big integer itself.
   */
  getValue() {
    return this.powerOfTwos[0];
  }
  /**
   * Computes the value for `num * b`, where `num` is a JS number and `b` is a big integer. The
   * value for `b` is represented by a storage model that is optimized for this computation.
   *
   * This operation is implemented in N(log2(num)) by continuous halving of the number, where the
   * least-significant bit (LSB) is tested in each iteration. If the bit is set, the bit's index is
   * used as exponent into the power-of-two multiplication of `b`.
   *
   * As an example, consider the multiplication num=42, b=1337. In binary 42 is 0b00101010 and the
   * algorithm unrolls into the following iterations:
   *
   *  Iteration | num        | LSB  | b * 2^iter | Add? | product
   * -----------|------------|------|------------|------|--------
   *  0         | 0b00101010 | 0    | 1337       | No   | 0
   *  1         | 0b00010101 | 1    | 2674       | Yes  | 2674
   *  2         | 0b00001010 | 0    | 5348       | No   | 2674
   *  3         | 0b00000101 | 1    | 10696      | Yes  | 13370
   *  4         | 0b00000010 | 0    | 21392      | No   | 13370
   *  5         | 0b00000001 | 1    | 42784      | Yes  | 56154
   *  6         | 0b00000000 | 0    | 85568      | No   | 56154
   *
   * The computed product of 56154 is indeed the correct result.
   *
   * The `BigIntForMultiplication` representation for a big integer provides memoized access to the
   * power-of-two values to reduce the workload in computing those values.
   */
  multiplyBy(num) {
    const product = BigInteger.zero();
    this.multiplyByAndAddTo(num, product);
    return product;
  }
  /**
   * See `multiplyBy()` for details. This function allows for the computed product to be added
   * directly to the provided result big integer.
   */
  multiplyByAndAddTo(num, result) {
    for (let exponent = 0; num !== 0; num = num >>> 1, exponent++) {
      if (num & 1) {
        const value = this.getMultipliedByPowerOfTwo(exponent);
        result.addToSelf(value);
      }
    }
  }
  /**
   * Computes and memoizes the big integer value for `this.number * 2^exponent`.
   */
  getMultipliedByPowerOfTwo(exponent) {
    // Compute the powers up until the requested exponent, where each value is computed from its
    // predecessor. This is simple as `this.number * 2^(exponent - 1)` only has to be doubled (i.e.
    // added to itself) to reach `this.number * 2^exponent`.
    for (let i = this.powerOfTwos.length; i <= exponent; i++) {
      const previousPower = this.powerOfTwos[i - 1];
      this.powerOfTwos[i] = previousPower.add(previousPower);
    }
    return this.powerOfTwos[exponent];
  }
}
/**
 * Represents an exponentiation operation for the provided base, of which exponents are computed and
 * memoized. The results are represented by a `BigIntForMultiplication` which is tailored for
 * multiplication operations by memoizing the power-of-twos. This effectively results in a matrix
 * representation that is lazily computed upon request.
 */
class BigIntExponentiation {
  constructor(base) {
    this.base = base;
    this.exponents = [new BigIntForMultiplication(BigInteger.one())];
  }
  /**
   * Compute the value for `this.base^exponent`, resulting in a big integer that is optimized for
   * further multiplication operations.
   */
  toThePowerOf(exponent) {
    // Compute the results up until the requested exponent, where every value is computed from its
    // predecessor. This is because `this.base^(exponent - 1)` only has to be multiplied by `base`
    // to reach `this.base^exponent`.
    for (let i = this.exponents.length; i <= exponent; i++) {
      const value = this.exponents[i - 1].multiplyBy(this.base);
      this.exponents[i] = new BigIntForMultiplication(value);
    }
    return this.exponents[exponent];
  }
}

/**
 * A lazily created TextEncoder instance for converting strings into UTF-8 bytes
 */
let textEncoder;
/**
 * Return the message id or compute it using the XLIFF1 digest.
 */
function digest(message) {
  return message.id || computeDigest(message);
}
/**
 * Compute the message id using the XLIFF1 digest.
 */
function computeDigest(message) {
  return sha1(serializeNodes(message.nodes).join('') + `[${message.meaning}]`);
}
/**
 * Return the message id or compute it using the XLIFF2/XMB/$localize digest.
 */
function decimalDigest(message) {
  return message.id || computeDecimalDigest(message);
}
/**
 * Compute the message id using the XLIFF2/XMB/$localize digest.
 */
function computeDecimalDigest(message) {
  const visitor = new _SerializerIgnoreIcuExpVisitor();
  const parts = message.nodes.map(a => a.visit(visitor, null));
  return computeMsgId(parts.join(''), message.meaning);
}
/**
 * Serialize the i18n ast to something xml-like in order to generate an UID.
 *
 * The visitor is also used in the i18n parser tests
 *
 * @internal
 */
class _SerializerVisitor {
  visitText(text, context) {
    return text.value;
  }
  visitContainer(container, context) {
    return `[${container.children.map(child => child.visit(this)).join(', ')}]`;
  }
  visitIcu(icu, context) {
    const strCases = Object.keys(icu.cases).map(k => `${k} {${icu.cases[k].visit(this)}}`);
    return `{${icu.expression}, ${icu.type}, ${strCases.join(', ')}}`;
  }
  visitTagPlaceholder(ph, context) {
    return ph.isVoid ? `<ph tag name="${ph.startName}"/>` : `<ph tag name="${ph.startName}">${ph.children.map(child => child.visit(this)).join(', ')}</ph name="${ph.closeName}">`;
  }
  visitPlaceholder(ph, context) {
    return ph.value ? `<ph name="${ph.name}">${ph.value}</ph>` : `<ph name="${ph.name}"/>`;
  }
  visitIcuPlaceholder(ph, context) {
    return `<ph icu name="${ph.name}">${ph.value.visit(this)}</ph>`;
  }
}
const serializerVisitor = new _SerializerVisitor();
function serializeNodes(nodes) {
  return nodes.map(a => a.visit(serializerVisitor, null));
}
/**
 * Serialize the i18n ast to something xml-like in order to generate an UID.
 *
 * Ignore the ICU expressions so that message IDs stays identical if only the expression changes.
 *
 * @internal
 */
class _SerializerIgnoreIcuExpVisitor extends _SerializerVisitor {
  visitIcu(icu, context) {
    let strCases = Object.keys(icu.cases).map(k => `${k} {${icu.cases[k].visit(this)}}`);
    // Do not take the expression into account
    return `{${icu.type}, ${strCases.join(', ')}}`;
  }
}
/**
 * Compute the SHA1 of the given string
 *
 * see https://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf
 *
 * WARNING: this function has not been designed not tested with security in mind.
 *          DO NOT USE IT IN A SECURITY SENSITIVE CONTEXT.
 */
function sha1(str) {
  textEncoder ?? (textEncoder = new TextEncoder());
  const utf8 = [...textEncoder.encode(str)];
  const words32 = bytesToWords32(utf8, Endian.Big);
  const len = utf8.length * 8;
  const w = new Uint32Array(80);
  let a = 0x67452301,
    b = 0xefcdab89,
    c = 0x98badcfe,
    d = 0x10325476,
    e = 0xc3d2e1f0;
  words32[len >> 5] |= 0x80 << 24 - len % 32;
  words32[(len + 64 >> 9 << 4) + 15] = len;
  for (let i = 0; i < words32.length; i += 16) {
    const h0 = a,
      h1 = b,
      h2 = c,
      h3 = d,
      h4 = e;
    for (let j = 0; j < 80; j++) {
      if (j < 16) {
        w[j] = words32[i + j];
      } else {
        w[j] = rol32(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
      }
      const fkVal = fk(j, b, c, d);
      const f = fkVal[0];
      const k = fkVal[1];
      const temp = [rol32(a, 5), f, e, k, w[j]].reduce(add32);
      e = d;
      d = c;
      c = rol32(b, 30);
      b = a;
      a = temp;
    }
    a = add32(a, h0);
    b = add32(b, h1);
    c = add32(c, h2);
    d = add32(d, h3);
    e = add32(e, h4);
  }
  // Convert the output parts to a 160-bit hexadecimal string
  return toHexU32(a) + toHexU32(b) + toHexU32(c) + toHexU32(d) + toHexU32(e);
}
/**
 * Convert and format a number as a string representing a 32-bit unsigned hexadecimal number.
 * @param value The value to format as a string.
 * @returns A hexadecimal string representing the value.
 */
function toHexU32(value) {
  // unsigned right shift of zero ensures an unsigned 32-bit number
  return (value >>> 0).toString(16).padStart(8, '0');
}
function fk(index, b, c, d) {
  if (index < 20) {
    return [b & c | ~b & d, 0x5a827999];
  }
  if (index < 40) {
    return [b ^ c ^ d, 0x6ed9eba1];
  }
  if (index < 60) {
    return [b & c | b & d | c & d, 0x8f1bbcdc];
  }
  return [b ^ c ^ d, 0xca62c1d6];
}
/**
 * Compute the fingerprint of the given string
 *
 * The output is 64 bit number encoded as a decimal string
 *
 * based on:
 * https://github.com/google/closure-compiler/blob/master/src/com/google/javascript/jscomp/GoogleJsMessageIdGenerator.java
 */
function fingerprint(str) {
  textEncoder ?? (textEncoder = new TextEncoder());
  const utf8 = textEncoder.encode(str);
  const view = new DataView(utf8.buffer, utf8.byteOffset, utf8.byteLength);
  let hi = hash32(view, utf8.length, 0);
  let lo = hash32(view, utf8.length, 102072);
  if (hi == 0 && (lo == 0 || lo == 1)) {
    hi = hi ^ 0x130f9bef;
    lo = lo ^ -0x6b5f56d8;
  }
  return [hi, lo];
}
function computeMsgId(msg, meaning = '') {
  let msgFingerprint = fingerprint(msg);
  if (meaning) {
    const meaningFingerprint = fingerprint(meaning);
    msgFingerprint = add64(rol64(msgFingerprint, 1), meaningFingerprint);
  }
  const hi = msgFingerprint[0];
  const lo = msgFingerprint[1];
  return wordsToDecimalString(hi & 0x7fffffff, lo);
}
function hash32(view, length, c) {
  let a = 0x9e3779b9,
    b = 0x9e3779b9;
  let index = 0;
  const end = length - 12;
  for (; index <= end; index += 12) {
    a += view.getUint32(index, true);
    b += view.getUint32(index + 4, true);
    c += view.getUint32(index + 8, true);
    const res = mix(a, b, c);
    a = res[0], b = res[1], c = res[2];
  }
  const remainder = length - index;
  // the first byte of c is reserved for the length
  c += length;
  if (remainder >= 4) {
    a += view.getUint32(index, true);
    index += 4;
    if (remainder >= 8) {
      b += view.getUint32(index, true);
      index += 4;
      // Partial 32-bit word for c
      if (remainder >= 9) {
        c += view.getUint8(index++) << 8;
      }
      if (remainder >= 10) {
        c += view.getUint8(index++) << 16;
      }
      if (remainder === 11) {
        c += view.getUint8(index++) << 24;
      }
    } else {
      // Partial 32-bit word for b
      if (remainder >= 5) {
        b += view.getUint8(index++);
      }
      if (remainder >= 6) {
        b += view.getUint8(index++) << 8;
      }
      if (remainder === 7) {
        b += view.getUint8(index++) << 16;
      }
    }
  } else {
    // Partial 32-bit word for a
    if (remainder >= 1) {
      a += view.getUint8(index++);
    }
    if (remainder >= 2) {
      a += view.getUint8(index++) << 8;
    }
    if (remainder === 3) {
      a += view.getUint8(index++) << 16;
    }
  }
  return mix(a, b, c)[2];
}
// clang-format off
function mix(a, b, c) {
  a -= b;
  a -= c;
  a ^= c >>> 13;
  b -= c;
  b -= a;
  b ^= a << 8;
  c -= a;
  c -= b;
  c ^= b >>> 13;
  a -= b;
  a -= c;
  a ^= c >>> 12;
  b -= c;
  b -= a;
  b ^= a << 16;
  c -= a;
  c -= b;
  c ^= b >>> 5;
  a -= b;
  a -= c;
  a ^= c >>> 3;
  b -= c;
  b -= a;
  b ^= a << 10;
  c -= a;
  c -= b;
  c ^= b >>> 15;
  return [a, b, c];
}
// clang-format on
// Utils
var Endian;
(function (Endian) {
  Endian[Endian["Little"] = 0] = "Little";
  Endian[Endian["Big"] = 1] = "Big";
})(Endian || (Endian = {}));
function add32(a, b) {
  return add32to64(a, b)[1];
}
function add32to64(a, b) {
  const low = (a & 0xffff) + (b & 0xffff);
  const high = (a >>> 16) + (b >>> 16) + (low >>> 16);
  return [high >>> 16, high << 16 | low & 0xffff];
}
function add64(a, b) {
  const ah = a[0],
    al = a[1];
  const bh = b[0],
    bl = b[1];
  const result = add32to64(al, bl);
  const carry = result[0];
  const l = result[1];
  const h = add32(add32(ah, bh), carry);
  return [h, l];
}
// Rotate a 32b number left `count` position
function rol32(a, count) {
  return a << count | a >>> 32 - count;
}
// Rotate a 64b number left `count` position
function rol64(num, count) {
  const hi = num[0],
    lo = num[1];
  const h = hi << count | lo >>> 32 - count;
  const l = lo << count | hi >>> 32 - count;
  return [h, l];
}
function bytesToWords32(bytes, endian) {
  const size = bytes.length + 3 >>> 2;
  const words32 = [];
  for (let i = 0; i < size; i++) {
    words32[i] = wordAt(bytes, i * 4, endian);
  }
  return words32;
}
function byteAt(bytes, index) {
  return index >= bytes.length ? 0 : bytes[index];
}
function wordAt(bytes, index, endian) {
  let word = 0;
  if (endian === Endian.Big) {
    for (let i = 0; i < 4; i++) {
      word += byteAt(bytes, index + i) << 24 - 8 * i;
    }
  } else {
    for (let i = 0; i < 4; i++) {
      word += byteAt(bytes, index + i) << 8 * i;
    }
  }
  return word;
}
/**
 * Create a shared exponentiation pool for base-256 computations. This shared pool provides memoized
 * power-of-256 results with memoized power-of-two computations for efficient multiplication.
 *
 * For our purposes, this can be safely stored as a global without memory concerns. The reason is
 * that we encode two words, so only need the 0th (for the low word) and 4th (for the high word)
 * exponent.
 */
const base256 = new BigIntExponentiation(256);
/**
 * Represents two 32-bit words as a single decimal number. This requires a big integer storage
 * model as JS numbers are not accurate enough to represent the 64-bit number.
 *
 * Based on https://www.danvk.org/hex2dec.html
 */
function wordsToDecimalString(hi, lo) {
  // Encode the four bytes in lo in the lower digits of the decimal number.
  // Note: the multiplication results in lo itself but represented by a big integer using its
  // decimal digits.
  const decimal = base256.toThePowerOf(0).multiplyBy(lo);
  // Encode the four bytes in hi above the four lo bytes. lo is a maximum of (2^8)^4, which is why
  // this multiplication factor is applied.
  base256.toThePowerOf(4).multiplyByAndAddTo(hi, decimal);
  return decimal.toString();
}

// This module specifier is intentionally a relative path to allow bundling the code directly
/**
 * Parse a `$localize` tagged string into a structure that can be used for translation or
 * extraction.
 *
 * See `ParsedMessage` for an example.
 */
function parseMessage(messageParts, expressions, location, messagePartLocations, expressionLocations = []) {
  const substitutions = {};
  const substitutionLocations = {};
  const associatedMessageIds = {};
  const metadata = parseMetadata(messageParts[0], messageParts.raw[0]);
  const cleanedMessageParts = [metadata.text];
  const placeholderNames = [];
  let messageString = metadata.text;
  for (let i = 1; i < messageParts.length; i++) {
    const {
      messagePart,
      placeholderName = computePlaceholderName(i),
      associatedMessageId
    } = parsePlaceholder(messageParts[i], messageParts.raw[i]);
    messageString += `{$${placeholderName}}${messagePart}`;
    if (expressions !== undefined) {
      substitutions[placeholderName] = expressions[i - 1];
      substitutionLocations[placeholderName] = expressionLocations[i - 1];
    }
    placeholderNames.push(placeholderName);
    if (associatedMessageId !== undefined) {
      associatedMessageIds[placeholderName] = associatedMessageId;
    }
    cleanedMessageParts.push(messagePart);
  }
  const messageId = metadata.customId || computeMsgId(messageString, metadata.meaning || '');
  const legacyIds = metadata.legacyIds ? metadata.legacyIds.filter(id => id !== messageId) : [];
  return {
    id: messageId,
    legacyIds,
    substitutions,
    substitutionLocations,
    text: messageString,
    customId: metadata.customId,
    meaning: metadata.meaning || '',
    description: metadata.description || '',
    messageParts: cleanedMessageParts,
    messagePartLocations,
    placeholderNames,
    associatedMessageIds,
    location
  };
}
/**
 * Parse the given message part (`cooked` + `raw`) to extract the message metadata from the text.
 *
 * If the message part has a metadata block this function will extract the `meaning`,
 * `description`, `customId` and `legacyId` (if provided) from the block. These metadata properties
 * are serialized in the string delimited by `|`, `@@` and `␟` respectively.
 *
 * (Note that `␟` is the `LEGACY_ID_INDICATOR` - see `constants.ts`.)
 *
 * For example:
 *
 * ```ts
 * `:meaning|description@@custom-id:`
 * `:meaning|@@custom-id:`
 * `:meaning|description:`
 * `:description@@custom-id:`
 * `:meaning|:`
 * `:description:`
 * `:@@custom-id:`
 * `:meaning|description@@custom-id␟legacy-id-1␟legacy-id-2:`
 * ```
 *
 * @param cooked The cooked version of the message part to parse.
 * @param raw The raw version of the message part to parse.
 * @returns A object containing any metadata that was parsed from the message part.
 */
function parseMetadata(cooked, raw) {
  const {
    text: messageString,
    block
  } = splitBlock(cooked, raw);
  if (block === undefined) {
    return {
      text: messageString
    };
  } else {
    const [meaningDescAndId, ...legacyIds] = block.split(LEGACY_ID_INDICATOR);
    const [meaningAndDesc, customId] = meaningDescAndId.split(ID_SEPARATOR, 2);
    let [meaning, description] = meaningAndDesc.split(MEANING_SEPARATOR, 2);
    if (description === undefined) {
      description = meaning;
      meaning = undefined;
    }
    if (description === '') {
      description = undefined;
    }
    return {
      text: messageString,
      meaning,
      description,
      customId,
      legacyIds
    };
  }
}
/**
 * Parse the given message part (`cooked` + `raw`) to extract any placeholder metadata from the
 * text.
 *
 * If the message part has a metadata block this function will extract the `placeholderName` and
 * `associatedMessageId` (if provided) from the block.
 *
 * These metadata properties are serialized in the string delimited by `@@`.
 *
 * For example:
 *
 * ```ts
 * `:placeholder-name@@associated-id:`
 * ```
 *
 * @param cooked The cooked version of the message part to parse.
 * @param raw The raw version of the message part to parse.
 * @returns A object containing the metadata (`placeholderName` and `associatedMessageId`) of the
 *     preceding placeholder, along with the static text that follows.
 */
function parsePlaceholder(cooked, raw) {
  const {
    text: messagePart,
    block
  } = splitBlock(cooked, raw);
  if (block === undefined) {
    return {
      messagePart
    };
  } else {
    const [placeholderName, associatedMessageId] = block.split(ID_SEPARATOR);
    return {
      messagePart,
      placeholderName,
      associatedMessageId
    };
  }
}
/**
 * Split a message part (`cooked` + `raw`) into an optional delimited "block" off the front and the
 * rest of the text of the message part.
 *
 * Blocks appear at the start of message parts. They are delimited by a colon `:` character at the
 * start and end of the block.
 *
 * If the block is in the first message part then it will be metadata about the whole message:
 * meaning, description, id.  Otherwise it will be metadata about the immediately preceding
 * substitution: placeholder name.
 *
 * Since blocks are optional, it is possible that the content of a message block actually starts
 * with a block marker. In this case the marker must be escaped `\:`.
 *
 * @param cooked The cooked version of the message part to parse.
 * @param raw The raw version of the message part to parse.
 * @returns An object containing the `text` of the message part and the text of the `block`, if it
 * exists.
 * @throws an error if the `block` is unterminated
 */
function splitBlock(cooked, raw) {
  if (raw.charAt(0) !== BLOCK_MARKER$1) {
    return {
      text: cooked
    };
  } else {
    const endOfBlock = findEndOfBlock(cooked, raw);
    return {
      block: cooked.substring(1, endOfBlock),
      text: cooked.substring(endOfBlock + 1)
    };
  }
}
function computePlaceholderName(index) {
  return index === 1 ? 'PH' : `PH_${index - 1}`;
}
/**
 * Find the end of a "marked block" indicated by the first non-escaped colon.
 *
 * @param cooked The cooked string (where escaped chars have been processed)
 * @param raw The raw string (where escape sequences are still in place)
 *
 * @returns the index of the end of block marker
 * @throws an error if the block is unterminated
 */
function findEndOfBlock(cooked, raw) {
  for (let cookedIndex = 1, rawIndex = 1; cookedIndex < cooked.length; cookedIndex++, rawIndex++) {
    if (raw[rawIndex] === '\\') {
      rawIndex++;
    } else if (cooked[cookedIndex] === BLOCK_MARKER$1) {
      return cookedIndex;
    }
  }
  throw new Error(`Unterminated $localize metadata block in "${raw}".`);
}
class MissingTranslationError extends Error {
  constructor(parsedMessage) {
    super(`No translation found for ${describeMessage(parsedMessage)}.`);
    this.parsedMessage = parsedMessage;
    this.type = 'MissingTranslationError';
  }
}
function isMissingTranslationError(e) {
  return e.type === 'MissingTranslationError';
}
/**
 * Translate the text of the `$localize` tagged-string (i.e. `messageParts` and
 * `substitutions`) using the given `translations`.
 *
 * The tagged-string is parsed to extract its `messageId` which is used to find an appropriate
 * `ParsedTranslation`. If this doesn't match and there are legacy ids then try matching a
 * translation using those.
 *
 * If one is found then it is used to translate the message into a new set of `messageParts` and
 * `substitutions`.
 * The translation may reorder (or remove) substitutions as appropriate.
 *
 * If there is no translation with a matching message id then an error is thrown.
 * If a translation contains a placeholder that is not found in the message being translated then an
 * error is thrown.
 */
function translate$1(translations, messageParts, substitutions) {
  const message = parseMessage(messageParts, substitutions);
  // Look up the translation using the messageId, and then the legacyId if available.
  let translation = translations[message.id];
  // If the messageId did not match a translation, try matching the legacy ids instead
  if (message.legacyIds !== undefined) {
    for (let i = 0; i < message.legacyIds.length && translation === undefined; i++) {
      translation = translations[message.legacyIds[i]];
    }
  }
  if (translation === undefined) {
    throw new MissingTranslationError(message);
  }
  return [translation.messageParts, translation.placeholderNames.map(placeholder => {
    if (message.substitutions.hasOwnProperty(placeholder)) {
      return message.substitutions[placeholder];
    } else {
      throw new Error(`There is a placeholder name mismatch with the translation provided for the message ${describeMessage(message)}.\n` + `The translation contains a placeholder with name ${placeholder}, which does not exist in the message.`);
    }
  })];
}
/**
 * Parse the `messageParts` and `placeholderNames` out of a target `message`.
 *
 * Used by `loadTranslations()` to convert target message strings into a structure that is more
 * appropriate for doing translation.
 *
 * @param message the message to be parsed.
 */
function parseTranslation(messageString) {
  const parts = messageString.split(/{\$([^}]*)}/);
  const messageParts = [parts[0]];
  const placeholderNames = [];
  for (let i = 1; i < parts.length - 1; i += 2) {
    placeholderNames.push(parts[i]);
    messageParts.push(`${parts[i + 1]}`);
  }
  const rawMessageParts = messageParts.map(part => part.charAt(0) === BLOCK_MARKER$1 ? '\\' + part : part);
  return {
    text: messageString,
    messageParts: makeTemplateObject(messageParts, rawMessageParts),
    placeholderNames
  };
}
/**
 * Create a `ParsedTranslation` from a set of `messageParts` and `placeholderNames`.
 *
 * @param messageParts The message parts to appear in the ParsedTranslation.
 * @param placeholderNames The names of the placeholders to intersperse between the `messageParts`.
 */
function makeParsedTranslation(messageParts, placeholderNames = []) {
  let messageString = messageParts[0];
  for (let i = 0; i < placeholderNames.length; i++) {
    messageString += `{$${placeholderNames[i]}}${messageParts[i + 1]}`;
  }
  return {
    text: messageString,
    messageParts: makeTemplateObject(messageParts, messageParts),
    placeholderNames
  };
}
/**
 * Create the specialized array that is passed to tagged-string tag functions.
 *
 * @param cooked The message parts with their escape codes processed.
 * @param raw The message parts with their escaped codes as-is.
 */
function makeTemplateObject(cooked, raw) {
  Object.defineProperty(cooked, 'raw', {
    value: raw
  });
  return cooked;
}
function describeMessage(message) {
  const meaningString = message.meaning && ` - "${message.meaning}"`;
  const legacy = message.legacyIds && message.legacyIds.length > 0 ? ` [${message.legacyIds.map(l => `"${l}"`).join(', ')}]` : '';
  return `"${message.id}"${legacy} ("${message.text}"${meaningString})`;
}

/**
 * Load translations for use by `$localize`, if doing runtime translation.
 *
 * If the `$localize` tagged strings are not going to be replaced at compiled time, it is possible
 * to load a set of translations that will be applied to the `$localize` tagged strings at runtime,
 * in the browser.
 *
 * Loading a new translation will overwrite a previous translation if it has the same `MessageId`.
 *
 * Note that `$localize` messages are only processed once, when the tagged string is first
 * encountered, and does not provide dynamic language changing without refreshing the browser.
 * Loading new translations later in the application life-cycle will not change the translated text
 * of messages that have already been translated.
 *
 * The message IDs and translations are in the same format as that rendered to "simple JSON"
 * translation files when extracting messages. In particular, placeholders in messages are rendered
 * using the `{$PLACEHOLDER_NAME}` syntax. For example the message from the following template:
 *
 * ```html
 * <div i18n>pre<span>inner-pre<b>bold</b>inner-post</span>post</div>
 * ```
 *
 * would have the following form in the `translations` map:
 *
 * ```ts
 * {
 *   "2932901491976224757":
 *      "pre{$START_TAG_SPAN}inner-pre{$START_BOLD_TEXT}bold{$CLOSE_BOLD_TEXT}inner-post{$CLOSE_TAG_SPAN}post"
 * }
 * ```
 *
 * @param translations A map from message ID to translated message.
 *
 * These messages are processed and added to a lookup based on their `MessageId`.
 *
 * @see `clearTranslations()` for removing translations loaded using this function.
 * @see `$localize` for tagging messages as needing to be translated.
 * @publicApi
 */
function loadTranslations(translations) {
  // Ensure the translate function exists
  if (!$localize.translate) {
    $localize.translate = translate;
  }
  if (!$localize.TRANSLATIONS) {
    $localize.TRANSLATIONS = {};
  }
  Object.keys(translations).forEach(key => {
    $localize.TRANSLATIONS[key] = parseTranslation(translations[key]);
  });
}
/**
 * Remove all translations for `$localize`, if doing runtime translation.
 *
 * All translations that had been loading into memory using `loadTranslations()` will be removed.
 *
 * @see `loadTranslations()` for loading translations at runtime.
 * @see `$localize` for tagging messages as needing to be translated.
 *
 * @publicApi
 */
function clearTranslations() {
  $localize.translate = undefined;
  $localize.TRANSLATIONS = {};
}
/**
 * Translate the text of the given message, using the loaded translations.
 *
 * This function may reorder (or remove) substitutions as indicated in the matching translation.
 */
function translate(messageParts, substitutions) {
  try {
    return translate$1($localize.TRANSLATIONS, messageParts, substitutions);
  } catch (e) {
    console.warn(e.message);
    return [messageParts, substitutions];
  }
}

// Always use __globalThis if available, which is the spec-defined global variable across all
// environments, then fallback to __global first, because in Node tests both __global and
// __window may be defined and _global should be __global in that case. Note: Typeof/Instanceof
// checks are considered side-effects in Terser. We explicitly mark this as side-effect free:
// https://github.com/terser/terser/issues/250.
const _global = /* @__PURE__ */(() => typeof globalThis !== 'undefined' && globalThis || typeof global !== 'undefined' && global || typeof window !== 'undefined' && window || typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && self)();

/**
 * Tag a template literal string for localization.
 *
 * For example:
 *
 * ```ts
 * $localize `some string to localize`
 * ```
 *
 * **Providing meaning, description and id**
 *
 * You can optionally specify one or more of `meaning`, `description` and `id` for a localized
 * string by pre-pending it with a colon delimited block of the form:
 *
 * ```ts
 * $localize`:meaning|description@@id:source message text`;
 *
 * $localize`:meaning|:source message text`;
 * $localize`:description:source message text`;
 * $localize`:@@id:source message text`;
 * ```
 *
 * This format is the same as that used for `i18n` markers in Angular templates. See the
 * [Angular i18n guide](guide/i18n-common-prepare#mark-text-in-component-template).
 *
 * **Naming placeholders**
 *
 * If the template literal string contains expressions, then the expressions will be automatically
 * associated with placeholder names for you.
 *
 * For example:
 *
 * ```ts
 * $localize `Hi ${name}! There are ${items.length} items.`;
 * ```
 *
 * will generate a message-source of `Hi {$PH}! There are {$PH_1} items`.
 *
 * The recommended practice is to name the placeholder associated with each expression though.
 *
 * Do this by providing the placeholder name wrapped in `:` characters directly after the
 * expression. These placeholder names are stripped out of the rendered localized string.
 *
 * For example, to name the `items.length` expression placeholder `itemCount` you write:
 *
 * ```ts
 * $localize `There are ${items.length}:itemCount: items`;
 * ```
 *
 * **Escaping colon markers**
 *
 * If you need to use a `:` character directly at the start of a tagged string that has no
 * metadata block, or directly after a substitution expression that has no name you must escape
 * the `:` by preceding it with a backslash:
 *
 * For example:
 *
 * ```ts
 * // message has a metadata block so no need to escape colon
 * $localize `:some description::this message starts with a colon (:)`;
 * // no metadata block so the colon must be escaped
 * $localize `\:this message starts with a colon (:)`;
 * ```
 *
 * ```ts
 * // named substitution so no need to escape colon
 * $localize `${label}:label:: ${}`
 * // anonymous substitution so colon must be escaped
 * $localize `${label}\: ${}`
 * ```
 *
 * **Processing localized strings:**
 *
 * There are three scenarios:
 *
 * * **compile-time inlining**: the `$localize` tag is transformed at compile time by a
 * transpiler, removing the tag and replacing the template literal string with a translated
 * literal string from a collection of translations provided to the transpilation tool.
 *
 * * **run-time evaluation**: the `$localize` tag is a run-time function that replaces and
 * reorders the parts (static strings and expressions) of the template literal string with strings
 * from a collection of translations loaded at run-time.
 *
 * * **pass-through evaluation**: the `$localize` tag is a run-time function that simply evaluates
 * the original template literal string without applying any translations to the parts. This
 * version is used during development or where there is no need to translate the localized
 * template literals.
 *
 * @param messageParts a collection of the static parts of the template string.
 * @param expressions a collection of the values of each placeholder in the template string.
 * @returns the translated string, with the `messageParts` and `expressions` interleaved together.
 *
 * @globalApi
 * @publicApi
 */
const $localize$1 = function (messageParts, ...expressions) {
  if ($localize$1.translate) {
    // Don't use array expansion here to avoid the compiler adding `__read()` helper unnecessarily.
    const translation = $localize$1.translate(messageParts, expressions);
    messageParts = translation[0];
    expressions = translation[1];
  }
  let message = stripBlock(messageParts[0], messageParts.raw[0]);
  for (let i = 1; i < messageParts.length; i++) {
    message += expressions[i - 1] + stripBlock(messageParts[i], messageParts.raw[i]);
  }
  return message;
};
const BLOCK_MARKER = ':';
/**
 * Strip a delimited "block" from the start of the `messagePart`, if it is found.
 *
 * If a marker character (:) actually appears in the content at the start of a tagged string or
 * after a substitution expression, where a block has not been provided the character must be
 * escaped with a backslash, `\:`. This function checks for this by looking at the `raw`
 * messagePart, which should still contain the backslash.
 *
 * @param messagePart The cooked message part to process.
 * @param rawMessagePart The raw message part to check.
 * @returns the message part with the placeholder name stripped, if found.
 * @throws an error if the block is unterminated
 */
function stripBlock(messagePart, rawMessagePart) {
  return rawMessagePart.charAt(0) === BLOCK_MARKER ? messagePart.substring(findEndOfBlock(messagePart, rawMessagePart) + 1) : messagePart;
}

// This file exports all the `utils` as private exports so that other parts of `@angular/localize`

// This file contains the public API of the `@angular/localize` entry-point

// DO NOT ADD public exports to this file.



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(3586));
/******/ }
]);