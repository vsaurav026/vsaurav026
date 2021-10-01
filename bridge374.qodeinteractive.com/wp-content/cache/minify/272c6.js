/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license | WordPress 2019-05-16 */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? a < 0 ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], "__proto__" !== d && g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; d < c; d++)
                    if (!1 === b.call(a[d], d, a[d])) break
            } else
                for (d in a)
                    if (!1 === b.call(a[d], d, a[d])) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0; c < d; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (d < c) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)(d = !b(a[f], f)) !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; g < d; g++) null != (e = b(a[g], g, c)) && h.push(e);
            else
                for (g in a) null != (e = b(a[g], g, c)) && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            if ("string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a)) return c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d
        },
        now: function() {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" !== c && !n.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = fa(),
            z = fa(),
            A = fa(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (xa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ea(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + pa(r[h]);
                        s = r.join(","), w = _.test(a) && na(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function fa() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ga(a) {
            return a[u] = !0, a
        }

        function ha(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (xa) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ia(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ja(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ka(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function ma(a) {
            return ga(function(b) {
                return b = +b, ga(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function na(a) {
            return a && void 0 !== a.getElementsByTagName && a
        }
        c = ea.support = {}, f = ea.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ea.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ha(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ha(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ha(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (void 0 !== b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                if (void 0 !== b.getElementsByClassName && p) return b.getElementsByClassName(a)
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ha(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ha(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ha(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d || (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ja(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ja(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ea.matches = function(a, b) {
            return ea(a, null, null, b)
        }, ea.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (xa) {}
            return ea(b, n, null, [a]).length > 0
        }, ea.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ea.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ea.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ea.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ea.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ea.selectors = {
            cacheLength: 50,
            createPseudo: ga,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ea.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ea.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ea.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), !1 === t)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return (t -= e) === d || t % d == 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ea.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ga(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ga(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ga(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ga(function(a) {
                    return function(b) {
                        return ea(a, b).length > 0
                    }
                }),
                contains: ga(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ga(function(a) {
                    return V.test(a || "") || ea.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do {
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: ma(function() {
                    return [0]
                }),
                last: ma(function(a, b) {
                    return [b - 1]
                }),
                eq: ma(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: ma(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: ma(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: ma(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: ma(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ka(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = la(b);

        function oa() {}
        oa.prototype = d.filters = d.pseudos, d.setFilters = new oa, g = ea.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ea.error(a) : z(a, i).slice(0)
        };

        function pa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function qa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function ra(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function sa(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ea(a, b[d], c);
            return c
        }

        function ta(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function ua(a, b, c, d, e, f) {
            return d && !d[u] && (d = ua(d)), e && !e[u] && (e = ua(e, f)), ga(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || sa(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ta(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ta(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ta(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function va(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = qa(function(a) {
                    return a === b
                }, h, !0), l = qa(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [qa(ra(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return ua(i > 1 && ra(m), i > 1 && pa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, i < e && va(a.slice(i, e)), e < f && va(a = a.slice(e)), e < f && pa(a))
                    }
                    m.push(c)
                }
            return ra(m)
        }

        function wa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ta(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ea.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ga(f) : f
        }
        return h = ea.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = va(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, wa(e, d)), f.selector = a
            }
            return f
        }, i = ea.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (!(b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0])) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && na(b.parentNode) || b))) {
                        if (j.splice(i, 1), !(a = f.length && pa(j))) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && na(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ha(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ha(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ia("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ha(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ia("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), ha(function(a) {
            return null == a.getAttribute("disabled")
        }) || ia(K, function(a, b, c) {
            var d;
            if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ea
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; b < e; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; b < e; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (n.fn.init = function(a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || A, "string" == typeof a) {
            if (!(e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a)) || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                    for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            if ((f = d.getElementById(e[2])) && f.parentNode) {
                if (f.id !== e[2]) return A.find(a);
                this.length = 1, this[0] = f
            }
            return this.context = d, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    }).prototype = n.fn, A = n(d);
    var C = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; b < d; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; d < e; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function E(a, b) {
        do {
            a = a[b]
        } while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return E(a, "nextSibling")
        },
        prev: function(a) {
            return E(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.uniqueSort(e)), C.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var F = /\S+/g;

    function G(a) {
        var b = {};
        return n.each(a.match(F) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? G(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) !1 === f[h].apply(c[0], c[1]) && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function b(c) {
                        n.each(c, function(c, d) {
                            n.isFunction(d) ? a.unique && j.has(d) || f.push(d) : d && d.length && "string" !== n.type(d) && b(d)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = !0, c || j.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); b < d; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (!0 === a ? --n.readyWait : n.isReady) || (n.isReady = !0, !0 !== a && --n.readyWait > 0 || (H.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function I() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J)) : (d.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (I(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!H)
            if (H = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J);
        else {
            d.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && d.documentElement
            } catch (e) {}
            c && c.doScroll && function b() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (e) {
                        return a.setTimeout(b, 50)
                    }
                    I(), n.ready()
                }
            }()
        }
        return H.promise(b)
    }, n.ready.promise();
    var K;
    for (K in n(l)) break;
    l.ownFirst = "0" === K, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c, e;
            (c = d.getElementsByTagName("body")[0]) && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var L = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return (1 === c || 9 === c) && (!b || !0 !== b && a.getAttribute("classid") === b)
        },
        M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if ("string" == typeof(c = a.getAttribute(d))) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : M.test(c) ? n.parseJSON(c) : c)
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (L(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? null == (f = g[b]) && (f = g[n.camelCase(b)]) : f = g, f
        }
    }

    function R(a, b, c) {
        if (L(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return !!(a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]) && !P(a)
            },
            data: function(a, b, c) {
                return Q(a, b, c)
            },
            removeData: function(a, b) {
                return R(a, b)
            },
            _data: function(a, b, c) {
                return Q(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return R(a, b, !0)
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), O(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    n.data(this, a, b)
                }) : f ? O(f, a, n.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                if (a) return b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--)(c = n._data(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return (c = d.getElementsByTagName("body")[0]) && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do {
                f = f || ".5", k /= f, n.style(a, b, k + j)
            } while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var X = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) X(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Y = /^(?:checkbox|radio)$/i,
        Z = /<([\w:-]+)/,
        $ = /^$|\/(?:java|ecma)script/i,
        _ = /^\s+/,
        aa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ba(a) {
        var b = aa.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }! function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var ca = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    ca.optgroup = ca.option, ca.tbody = ca.tfoot = ca.colgroup = ca.caption = ca.thead, ca.th = ca.td;

    function da(a, b) {
        var c, d, e = 0,
            f = void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, da(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function ea(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var fa = /<|&#?\w+;/,
        ga = /<tbody/i;

    function ha(a) {
        Y.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ia(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ba(b), q = [], r = 0; r < o; r++)
            if ((g = a[r]) || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (fa.test(g)) {
            i = i || p.appendChild(b.createElement("div")), j = (Z.exec(g) || ["", ""])[1].toLowerCase(), m = ca[j] || ca._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
            while (f--) i = i.lastChild;
            if (!l.leadingWhitespace && _.test(g) && q.push(b.createTextNode(_.exec(g)[0])), !l.tbody) {
                g = "table" !== j || ga.test(g) ? "<table>" !== m[1] || ga.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
            }
            n.merge(q, i.childNodes), i.textContent = "";
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(da(q, "input"), ha), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = da(p.appendChild(g), "script"), h && ea(i), c) {
            f = 0;
            while (g = i[f++]) $.test(g.type || "") && c.push(g)
        }
        return i = null, p
    }! function() {
        var b, c, e = d.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = !1 === e.attributes[c].expando);
        e = null
    }();
    var ja = /^(?:input|select|textarea)$/i,
        ka = /^key/,
        la = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ma = /^(?:focusinfocus|focusoutblur)$/,
        na = /^([^.]*)(?:\.(.+)|)/;

    function oa() {
        return !0
    }

    function pa() {
        return !1
    }

    function qa() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ra(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ra(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = pa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return void 0 === n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(F) || [""], h = b.length;
                while (h--) f = na.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && !1 !== j.setup.call(a, d, p, k) || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(F) || [""], j = b.length;
                while (j--)
                    if (h = na.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && !1 !== l.teardown.call(a, p, r.handle) || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ma.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || !1 !== l.trigger.apply(e, c))) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, ma.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), (g = h && i[h]) && g.apply && L(i) && (b.result = g.apply(i, c), !1 === b.result && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), c)) && L(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, void 0 !== (d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i)) && !1 === (a.result = d) && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (!0 !== i.disabled || "click" !== a.type)) {
                        for (d = [], c = 0; c < h; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = la.test(f) ? this.mouseHooks : ka.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== qa() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === qa() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (n.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (void 0 === a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        if (!(this instanceof n.Event)) return new n.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? oa : pa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), this[n.expando] = !0
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: pa,
        isPropagationStopped: pa,
        isImmediatePropagationStopped: pa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = oa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = oa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = oa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            if (n.nodeName(this, "form")) return !1;
            n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            if (n.nodeName(this, "form")) return !1;
            n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function() {
            if (ja.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1;
            n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ja.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !ja.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ra(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ra(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = pa), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return n.event.trigger(a, b, c, !0)
        }
    });
    var sa = / jQuery\d+="(?:null|\d+)"/g,
        ta = new RegExp("<(?:" + aa + ")[\\s/>]", "i"),
        ua = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        va = /<script|<style|<link/i,
        wa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xa = /^true\/(.*)/,
        ya = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        za = ba(d),
        Aa = za.appendChild(d.createElement("div"));

    function Ba(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Ca(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Da(a) {
        var b = xa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ea(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; d < e; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Fa(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Ca(b).text = a.text, Da(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Y.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function Ga(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && wa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ga(f, b, c, d)
        });
        if (o && (k = ia(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(da(k, "script"), Ca), h = i.length; m < o; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, da(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Da), m = 0; m < h; m++) g = i[m], $.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(ya, "")));
            k = e = null
        }
        return a
    }

    function Ha(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(da(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && ea(da(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ua, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ta.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Aa.innerHTML = a.outerHTML, Aa.removeChild(f = Aa.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = da(f), h = da(a), g = 0; null != (e = h[g]); ++g) d[g] && Fa(e, d[g]);
            if (b)
                if (c)
                    for (h = h || da(a), d = d || da(f), g = 0; null != (e = h[g]); g++) Ea(e, d[g]);
                else Ea(a, f);
            return d = da(f, "script"), d.length > 0 && ea(d, !i && da(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || L(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || void 0 === d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ga,
        detach: function(a) {
            return Ha(this, a, !0)
        },
        remove: function(a) {
            return Ha(this, a)
        },
        text: function(a) {
            return X(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ga(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    Ba(this, a).appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ga(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ba(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ga(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ga(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(da(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return X(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(sa, "") : void 0;
                if ("string" == typeof a && !va.test(a) && (l.htmlSerialize || !ta.test(a)) && (l.leadingWhitespace || !_.test(a)) && !ca[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(da(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ga(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(da(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; d <= h; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ia, Ja = {
        HTML: "block",
        BODY: "block"
    };

    function Ka(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function La(a) {
        var b = d,
            c = Ja[a];
        return c || (c = Ka(a, b), "none" !== c && c || (Ia = (Ia || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ia[0].contentWindow || Ia[0].contentDocument).document, b.write(), b.close(), c = Ka(a, b), Ia.detach()), Ja[a] = c), c
    }
    var Ma = /^margin/,
        Na = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Oa = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Pa = d.documentElement;
    ! function() {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");

        function k() {
            var k, l, m = d.documentElement;
            m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                width: "4px"
            }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                marginRight: "4px"
            }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", (f = 0 === k[0].offsetHeight) && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
        }
        j.style && (j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
            reliableHiddenOffsets: function() {
                return null == b && k(), f
            },
            boxSizingReliable: function() {
                return null == b && k(), e
            },
            pixelMarginRight: function() {
                return null == b && k(), c
            },
            pixelPosition: function() {
                return null == b && k(), b
            },
            reliableMarginRight: function() {
                return null == b && k(), g
            },
            reliableMarginLeft: function() {
                return null == b && k(), h
            }
        }))
    }();
    var Qa, Ra, Sa = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Qa = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Ra = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Qa(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Na.test(g) && Ma.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Pa.currentStyle && (Qa = function(a) {
        return a.currentStyle
    }, Ra = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Qa(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Na.test(g) && !Sa.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ta(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ua = /alpha\([^)]*\)/i,
        Va = /opacity\s*=\s*([^)]*)/i,
        Wa = /^(none|table(?!-c[ea]).+)/,
        Xa = new RegExp("^(" + S + ")(.*)$", "i"),
        Ya = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Za = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        $a = ["Webkit", "O", "Moz", "ms"],
        _a = d.createElement("div").style;

    function ab(a) {
        if (a in _a) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = $a.length;
        while (c--)
            if ((a = $a[c] + b) in _a) return a
    }

    function bb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", La(d.nodeName)))) : (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; g < h; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function cb(a, b, c) {
        var d = Xa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function db(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function eb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Qa(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (e <= 0 || null == e) {
            if (e = Ra(a, b, f), (e < 0 || null == e) && (e = a.style[b]), Na.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + db(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ra(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = ab(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = ab(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ra(a, b, d)), "normal" === f && b in Za && (f = Za[b]), "" === c || c ? (e = parseFloat(f), !0 === c || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return Wa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Oa(a, Ya, function() {
                    return eb(a, b, d)
                }) : eb(a, b, d)
            },
            set: function(a, c, d) {
                var e = d && Qa(a);
                return cb(a, c, d ? db(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Va.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Ua, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ua.test(f) ? f.replace(Ua, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ta(l.reliableMarginRight, function(a, b) {
        if (b) return Oa(a, {
            display: "inline-block"
        }, Ra, [a, "marginRight"])
    }), n.cssHooks.marginLeft = Ta(l.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(Ra(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Oa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px"
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ma.test(a) || (n.cssHooks[a + b].set = cb)
    }), n.fn.extend({
        css: function(a, b) {
            return X(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Qa(a), e = b.length; g < e; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return bb(this, !0)
        },
        hide: function() {
            return bb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function fb(a, b, c, d, e) {
        return new fb.prototype.init(a, b, c, d, e)
    }
    n.Tween = fb, fb.prototype = {
        constructor: fb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = fb.propHooks[this.prop];
            return a && a.get ? a.get(this) : fb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = fb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : fb.propHooks._default.set(this), this
        }
    }, fb.prototype.init.prototype = fb.prototype, fb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, fb.propHooks.scrollTop = fb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = fb.prototype.init, n.fx.step = {};
    var gb, hb, ib = /^(?:toggle|show|hide)$/,
        jb = /queueHooks$/;

    function kb() {
        return a.setTimeout(function() {
            gb = void 0
        }), gb = n.now()
    }

    function lb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; e < 4; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function mb(a, b, c) {
        for (var d, e = (pb.tweeners[b] || []).concat(pb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function nb(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && V(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), "inline" === (k = "none" === j ? n._data(a, "olddisplay") || La(a.nodeName) : j) && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== La(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ib.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? La(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = mb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function ob(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = n.cssHooks[d]) && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function pb(a, b, c) {
        var d, e, f = 0,
            g = pb.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = gb || kb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: gb || kb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (ob(k, j.opts.specialEasing); f < g; f++)
            if (d = pb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, mb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(pb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return W(c.elem, a, T.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(F);
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], pb.tweeners[c] = pb.tweeners[c] || [], pb.tweeners[c].unshift(b)
            },
            prefilters: [nb],
            prefilter: function(a, b) {
                b ? pb.prefilters.unshift(a) : pb.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = pb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && jb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(lb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: lb("show"),
            slideUp: lb("hide"),
            slideToggle: lb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (gb = n.now(); c < b.length; c++)(a = b[c])() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), gb = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            hb || (hb = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(hb), hb = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var qb = /\r/g,
        rb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), (b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(qb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(rb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                if (n.isArray(b)) return a.checked = n.inArray(n(a).val(), b) > -1
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var sb, tb, ub = n.expr.attrHandle,
        vb = /^(?:checked|selected)$/i,
        wb = l.getSetAttribute,
        xb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return X(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(F);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? xb && wb || !vb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(wb ? c : d)
        }
    }), tb = {
        set: function(a, b, c) {
            return !1 === b ? n.removeAttr(a, c) : xb && wb || !vb.test(c) ? a.setAttribute(!wb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ub[b] || n.find.attr;
        xb && wb || !vb.test(b) ? ub[b] = function(a, b, d) {
            var e, f;
            return d || (f = ub[b], ub[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ub[b] = f), e
        } : ub[b] = function(a, b, c) {
            if (!c) return a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), xb && wb || (n.attrHooks.value = {
        set: function(a, b, c) {
            if (!n.nodeName(a, "input")) return sb && sb.set(a, b, c);
            a.defaultValue = b
        }
    }), wb || (sb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            if (d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c)) return b
        }
    }, ub.id = ub.name = ub.coords = function(a, b, c) {
        var d;
        if (!c) return (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            if (c && c.specified) return c.value
        },
        set: sb.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            sb.set(a, "" !== b && b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                if ("" === c) return a.setAttribute(b, "auto"), c
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var yb = /^(?:input|select|textarea|button|object)$/i,
        zb = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return X(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : yb.test(a.nodeName) || zb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Ab = /[\t\r\n\f]/g;

    function Bb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, Bb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(F) || [];
                while (c = this[i++])
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, Bb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(F) || [];
                while (c = this[i++])
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Bb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(F) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = Bb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || !1 === a ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Cb = a.location,
        Db = n.now(),
        Eb = /\?/,
        Fb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Fb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Gb = /#.*$/,
        Hb = /([?&])_=[^&]*/,
        Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Kb = /^(?:GET|HEAD)$/,
        Lb = /^\/\//,
        Mb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Nb = {},
        Ob = {},
        Pb = "*/".concat("*"),
        Qb = Cb.href,
        Rb = Mb.exec(Qb.toLowerCase()) || [];

    function Sb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(F) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Tb(a, b, c, d) {
        var e = {},
            f = a === Ob;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Ub(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Vb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Wb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (!(g = j[i + " " + f] || j["* " + f]))
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (!0 !== g)
                if (g && a.throws) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Qb,
            type: "GET",
            isLocal: Jb.test(Rb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a)
        },
        ajaxPrefilter: Sb(Nb),
        ajaxTransport: Sb(Ob),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Ib.exec(g)) k[b[1].toLowerCase()] = b[2]
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (u < 2)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return j && j.abort(b), x(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Qb) + "").replace(Gb, "").replace(Lb, Rb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(F) || [""], null == l.crossDomain && (d = Mb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Rb[1] && d[2] === Rb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Tb(Nb, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 == n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Kb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Eb.test(f) ? "&" : "?") + l.data, delete l.data), !1 === l.cache && (l.url = Hb.test(f) ? f.replace(Hb, "$1_=" + Db++) : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && !1 !== l.contentType || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (!1 === l.beforeSend.call(m, w, l) || 2 === u)) return w.abort();
            v = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[e](l[e]);
            if (j = Tb(Ob, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, x)
                } catch (y) {
                    if (!(u < 2)) throw y;
                    x(-1, y)
                }
            } else x(-1, "No Transport");

            function x(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && b < 300 || 304 === b, d && (v = Vb(l, w, d)), v = Wb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), (x = w.getResponseHeader("etag")) && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", b < 0 && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Xb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Yb(a) {
        if (!n.contains(a.ownerDocument || d, a)) return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Xb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Yb(a)
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var Zb = /%20/g,
        $b = /\[\]$/,
        _b = /\r?\n/g,
        ac = /^(?:submit|button|image|reset|file)$/i,
        bc = /^(?:input|select|textarea|keygen)/i;

    function cc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || $b.test(a) ? d(a, e) : cc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) cc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) cc(c, a[c], b, e);
        return d.join("&").replace(Zb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && bc.test(this.nodeName) && !ac.test(a) && (this.checked || !Y.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(_b, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(_b, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? hc() : d.documentMode > 8 ? gc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && gc() || hc()
    } : gc;
    var dc = 0,
        ec = {},
        fc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in ec) ec[a](void 0, !0)
    }), l.cors = !!fc && "withCredentials" in fc, (fc = l.ajax = !!fc) && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++dc;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete ec[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = ec[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function gc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function hc() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ic = [],
        jc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ic.pop() || n.expando + "_" + Db++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = !1 !== b.jsonp && (jc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && jc.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(jc, "$1" + e) : !1 !== b.jsonp && (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ic.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ia([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var kc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && kc) return kc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function lc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? (void 0 !== e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = lc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Pa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return X(this, function(a, d, e) {
                var f = lc(a);
                if (void 0 === e) return f ? b in f ? f[b] : f.document.documentElement[d] : a[d];
                f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ta(l.pixelPosition, function(a, c) {
            if (c) return c = Ra(a, b), Na.test(c) ? n(a).position()[b] + "px" : c
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (!0 === d || !0 === e ? "margin" : "border");
                return X(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var mc = a.jQuery,
        nc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n
    }, b || (a.jQuery = a.$ = n), n
});
jQuery.noConflict();; /*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e
        }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function() {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function(a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) {
                        return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function(b, c) {
            a.fn[c] = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        }), a.event.special.ready = {
            setup: function() {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function() {
                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
            }, a.fn.find = function(a) {
                var b = N.apply(this, arguments);
                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
            }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function() {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                        a.each(P, function(f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function() {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function() {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);;
/*******************************************************
	   		- THEMEPUNCH TOOLS Ver. 6.0.2 - 
	 Changed with Slider Revolution Version : 6.2.6     
	      	Last Update of Tools 07.05.2020
*******************************************************/


! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 1)
}([function(t, e) {
    t.exports = jQuery
}, function(t, e, n) {
    n(2), n(5), t.exports = n(4)
}, function(t, e, n) {
    var r, i, u, s;
    /*!
     * @fileOverview TouchSwipe - jQuery Plugin @version 1.6.18 / SANDBOXED VERSION FOR TP
     * @author Matt Bryson http://www.github.com/mattbryson
     * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
     * @see http://labs.rampinteractive.co.uk/touchSwipe/
     * @see http://plugins.jquery.com/project/touchSwipe
     * @license
     * Copyright (c) 2010-2015 Matt Bryson
     * Dual licensed under the MIT or GPL Version 2 licenses.
     *
     */
    s = function(t) {
        "use strict";
        var e = "left",
            n = "right",
            r = "up",
            i = "down",
            u = "none",
            s = "doubletap",
            a = "longtap",
            o = "horizontal",
            l = "vertical",
            h = "all",
            f = "move",
            D = "end",
            p = "cancel",
            c = "ontouchstart" in window,
            d = window.navigator.msPointerEnabled && !window.PointerEvent && !c,
            g = (window.PointerEvent || window.navigator.msPointerEnabled) && !c,
            _ = "TouchSwipe";

        function m(m, v) {
            v = t.extend({}, v);
            var y = c || g || !v.fallbackToMouseEvents,
                C = y ? g ? d ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                x = y ? g ? d ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                F = y ? g ? d ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                w = y ? g ? "mouseleave" : null : "mouseleave",
                E = g ? d ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                b = 0,
                T = null,
                A = null,
                M = 0,
                P = 0,
                B = 0,
                S = 1,
                O = 0,
                k = 0,
                L = null,
                N = t(m),
                R = "start",
                I = 0,
                z = {},
                Y = 0,
                j = 0,
                X = 0,
                V = 0,
                U = 0,
                W = null,
                q = null;
            try {
                N.on(C, H), N.on(E, K)
            } catch (m) {
                t.error("events not supported " + C + "," + E + " on jQuery.swipe")
            }

            function H(u) {
                if (!0 !== N.data(_ + "_intouch") && !(0 < t(u.target).closest(v.excludedElements, N).length)) {
                    var s = u.originalEvent ? u.originalEvent : u;
                    if (!s.pointerType || "mouse" != s.pointerType || 0 != v.fallbackToMouseEvents) {
                        var a, o, l = s.touches,
                            f = l ? l[0] : s;
                        return R = "start", l ? I = l.length : !1 !== v.preventDefaultEvents && u.preventDefault(), k = A = T = null, S = 1, O = B = P = M = b = 0, (o = {})[e] = yt(e), o[n] = yt(n), o.up = yt(r), o[i] = yt(i), L = o, ct(), _t(0, f), !l || I === v.fingers || v.fingers === h || st() ? (Y = wt(), 2 == I && (_t(1, l[1]), P = B = xt(z[0].start, z[1].start)), (v.swipeStatus || v.pinchStatus) && (a = tt(s, R))) : a = !1, !1 === a ? (tt(s, R = p), a) : (v.hold && (q = setTimeout(t.proxy((function() {
                            N.trigger("hold", [s.target]), v.hold && (a = v.hold.call(N, s, s.target))
                        }), this), v.longTapThreshold)), gt(!0), null)
                    }
                }
            }

            function G(s) {
                var a = s.originalEvent ? s.originalEvent : s;
                if (R !== D && R !== p && !dt()) {
                    var c, d, g, _, m, y, C, x = a.touches,
                        F = mt(x ? x[0] : a);
                    if (j = wt(), x && (I = x.length), v.hold && clearTimeout(q), R = f, 2 == I && (0 == P ? (_t(1, x[1]), P = B = xt(z[0].start, z[1].start)) : (mt(x[1]), B = xt(z[0].end, z[1].end), z[0].end, z[1].end, k = S < 1 ? "out" : "in"), S = (B / P * 1).toFixed(2), O = Math.abs(P - B)), I === v.fingers || v.fingers === h || !x || st()) {
                        if (T = Ft(F.start, F.end), function(t, s) {
                                if (!1 !== v.preventDefaultEvents)
                                    if (v.allowPageScroll === u) t.preventDefault();
                                    else {
                                        var a = "auto" === v.allowPageScroll;
                                        switch (s) {
                                            case e:
                                                (v.swipeLeft && a || !a && v.allowPageScroll != o) && t.preventDefault();
                                                break;
                                            case n:
                                                (v.swipeRight && a || !a && v.allowPageScroll != o) && t.preventDefault();
                                                break;
                                            case r:
                                                (v.swipeUp && a || !a && v.allowPageScroll != l) && t.preventDefault();
                                                break;
                                            case i:
                                                (v.swipeDown && a || !a && v.allowPageScroll != l) && t.preventDefault()
                                        }
                                    }
                            }(s, A = Ft(F.last, F.end)), y = F.start, C = F.end, b = Math.round(Math.sqrt(Math.pow(C.x - y.x, 2) + Math.pow(C.y - y.y, 2))), M = Ct(), function(t, e) {
                                t != u && (e = Math.max(e, vt(t)), L[t].distance = e)
                            }(T, b), c = tt(a, R), !v.triggerOnTouchEnd || v.triggerOnTouchLeave) {
                            var w = !0;
                            v.triggerOnTouchLeave && (g = {
                                left: (m = (_ = t(_ = this)).offset()).left,
                                right: m.left + _.outerWidth(),
                                top: m.top,
                                bottom: m.top + _.outerHeight()
                            }, w = (d = F.end).x > g.left && d.x < g.right && d.y > g.top && d.y < g.bottom), !v.triggerOnTouchEnd && w ? R = J(f) : v.triggerOnTouchLeave && !w && (R = J(D)), R != p && R != D || tt(a, R)
                        }
                    } else tt(a, R = p);
                    !1 === c && tt(a, R = p)
                }
            }

            function Q(t) {
                var e, n = t.originalEvent ? t.originalEvent : t,
                    r = n.touches;
                if (r) {
                    if (r.length && !dt()) return e = n, X = wt(), V = e.touches.length + 1, !0;
                    if (r.length && dt()) return !0
                }
                return dt() && (I = V), j = wt(), M = Ct(), rt() || !nt() ? tt(n, R = p) : v.triggerOnTouchEnd || !1 === v.triggerOnTouchEnd && R === f ? (!1 !== v.preventDefaultEvents && !1 !== t.cancelable && t.preventDefault(), tt(n, R = D)) : !v.triggerOnTouchEnd && ft() ? et(n, R = D, "tap") : R === f && tt(n, R = p), gt(!1), null
            }

            function K() {
                B = P = Y = j = I = 0, S = 1, ct(), gt(!1)
            }

            function Z(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                v.triggerOnTouchLeave && tt(e, R = J(D))
            }

            function $() {
                N.off(C, H), N.off(E, K), N.off(x, G), N.off(F, Q), w && N.off(w, Z), gt(!1)
            }

            function J(t) {
                var e = t,
                    n = it(),
                    r = nt(),
                    i = rt();
                return !n || i ? e = p : !r || t != f || v.triggerOnTouchEnd && !v.triggerOnTouchLeave ? !r && t == D && v.triggerOnTouchLeave && (e = p) : e = D, e
            }

            function tt(t, e) {
                var n, r = t.touches;
                return (at() && ot() || ot()) && (n = et(t, e, "swipe")), (ut() && st() || st()) && !1 !== n && (n = et(t, e, "pinch")), pt() && Dt() && !1 !== n ? n = et(t, e, s) : M > v.longTapThreshold && b < 10 && v.longTap && !1 !== n ? n = et(t, e, a) : 1 !== I && c || !(isNaN(b) || b < v.threshold) || !ft() || !1 === n || (n = et(t, e, "tap")), e === p && K(), e === D && (r && r.length || K()), n
            }

            function et(u, o, l) {
                var h;
                if ("swipe" == l) {
                    if (N.trigger("swipeStatus", [o, T || null, b || 0, M || 0, I, z, A]), v.swipeStatus && !1 === (h = v.swipeStatus.call(N, u, o, T || null, b || 0, M || 0, I, z, A))) return !1;
                    if (o == D && at()) {
                        if (clearTimeout(W), clearTimeout(q), N.trigger("swipe", [T, b, M, I, z, A]), v.swipe && !1 === (h = v.swipe.call(N, u, T, b, M, I, z, A))) return !1;
                        switch (T) {
                            case e:
                                N.trigger("swipeLeft", [T, b, M, I, z, A]), v.swipeLeft && (h = v.swipeLeft.call(N, u, T, b, M, I, z, A));
                                break;
                            case n:
                                N.trigger("swipeRight", [T, b, M, I, z, A]), v.swipeRight && (h = v.swipeRight.call(N, u, T, b, M, I, z, A));
                                break;
                            case r:
                                N.trigger("swipeUp", [T, b, M, I, z, A]), v.swipeUp && (h = v.swipeUp.call(N, u, T, b, M, I, z, A));
                                break;
                            case i:
                                N.trigger("swipeDown", [T, b, M, I, z, A]), v.swipeDown && (h = v.swipeDown.call(N, u, T, b, M, I, z, A))
                        }
                    }
                }
                if ("pinch" == l) {
                    if (N.trigger("pinchStatus", [o, k || null, O || 0, M || 0, I, S, z]), v.pinchStatus && !1 === (h = v.pinchStatus.call(N, u, o, k || null, O || 0, M || 0, I, S, z))) return !1;
                    if (o == D && ut()) switch (k) {
                        case "in":
                            N.trigger("pinchIn", [k || null, O || 0, M || 0, I, S, z]), v.pinchIn && (h = v.pinchIn.call(N, u, k || null, O || 0, M || 0, I, S, z));
                            break;
                        case "out":
                            N.trigger("pinchOut", [k || null, O || 0, M || 0, I, S, z]), v.pinchOut && (h = v.pinchOut.call(N, u, k || null, O || 0, M || 0, I, S, z))
                    }
                }
                return "tap" == l ? o !== p && o !== D || (clearTimeout(W), clearTimeout(q), Dt() && !pt() ? (U = wt(), W = setTimeout(t.proxy((function() {
                    U = null, N.trigger("tap", [u.target]), v.tap && (h = v.tap.call(N, u, u.target))
                }), this), v.doubleTapThreshold)) : (U = null, N.trigger("tap", [u.target]), v.tap && (h = v.tap.call(N, u, u.target)))) : l == s ? o !== p && o !== D || (clearTimeout(W), clearTimeout(q), U = null, N.trigger("doubletap", [u.target]), v.doubleTap && (h = v.doubleTap.call(N, u, u.target))) : l == a && (o !== p && o !== D || (clearTimeout(W), U = null, N.trigger("longtap", [u.target]), v.longTap && (h = v.longTap.call(N, u, u.target)))), h
            }

            function nt() {
                var t = !0;
                return null !== v.threshold && (t = b >= v.threshold), t
            }

            function rt() {
                var t = !1;
                return null !== v.cancelThreshold && null !== T && (t = vt(T) - b >= v.cancelThreshold), t
            }

            function it() {
                return !(v.maxTimeThreshold && M >= v.maxTimeThreshold)
            }

            function ut() {
                var t = lt(),
                    e = ht(),
                    n = null === v.pinchThreshold || O >= v.pinchThreshold;
                return t && e && n
            }

            function st() {
                return v.pinchStatus || v.pinchIn || v.pinchOut
            }

            function at() {
                var t = it(),
                    e = nt(),
                    n = lt(),
                    r = ht();
                return !rt() && r && n && e && t
            }

            function ot() {
                return v.swipe || v.swipeStatus || v.swipeLeft || v.swipeRight || v.swipeUp || v.swipeDown
            }

            function lt() {
                return I === v.fingers || v.fingers === h || !c
            }

            function ht() {
                return 0 !== z[0].end.x
            }

            function ft() {
                return v.tap
            }

            function Dt() {
                return !!v.doubleTap
            }

            function pt() {
                if (null == U) return !1;
                var t = wt();
                return Dt() && t - U <= v.doubleTapThreshold
            }

            function ct() {
                V = X = 0
            }

            function dt() {
                var t = !1;
                return X && wt() - X <= v.fingerReleaseThreshold && (t = !0), t
            }

            function gt(t) {
                N && (!0 === t ? (N.on(x, G), N.on(F, Q), w && N.on(w, Z)) : (N.off(x, G, !1), N.off(F, Q, !1), w && N.off(w, Z, !1)), N.data(_ + "_intouch", !0 === t))
            }

            function _t(t, e) {
                var n = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    last: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                };
                return n.start.x = n.last.x = n.end.x = e.pageX || e.clientX, n.start.y = n.last.y = n.end.y = e.pageY || e.clientY, z[t] = n
            }

            function mt(t) {
                var e = void 0 !== t.identifier ? t.identifier : 0,
                    n = z[e] || null;
                return null === n && (n = _t(e, t)), n.last.x = n.end.x, n.last.y = n.end.y, n.end.x = t.pageX || t.clientX, n.end.y = t.pageY || t.clientY, n
            }

            function vt(t) {
                if (L[t]) return L[t].distance
            }

            function yt(t) {
                return {
                    direction: t,
                    distance: 0
                }
            }

            function Ct() {
                return j - Y
            }

            function xt(t, e) {
                var n = Math.abs(t.x - e.x),
                    r = Math.abs(t.y - e.y);
                return Math.round(Math.sqrt(n * n + r * r))
            }

            function Ft(t, s) {
                if (o = s, (a = t).x == o.x && a.y == o.y) return u;
                var a, o, l, h, f, D, p, c, d = (h = s, f = (l = t).x - h.x, D = h.y - l.y, p = Math.atan2(D, f), (c = Math.round(180 * p / Math.PI)) < 0 && (c = 360 - Math.abs(c)), c);
                return d <= 45 && 0 <= d || d <= 360 && 315 <= d ? e : 135 <= d && d <= 225 ? n : 45 < d && d < 135 ? i : r
            }

            function wt() {
                return (new Date).getTime()
            }
            this.enable = function() {
                return this.disable(), N.on(C, H), N.on(E, K), N
            }, this.disable = function() {
                return $(), N
            }, this.destroy = function() {
                $(), N.data(_, null), N = null
            }, this.option = function(e, n) {
                if ("object" == typeof e) v = t.extend(v, e);
                else if (void 0 !== v[e]) {
                    if (void 0 === n) return v[e];
                    v[e] = n
                } else {
                    if (!e) return v;
                    t.error("Option " + e + " does not exist on jQuery.swipe.options")
                }
                return null
            }
        }
        t.fn.rsswipe = function(e) {
            var n = t(this),
                r = n.data(_);
            if (r && "string" == typeof e) {
                if (r[e]) return r[e].apply(r, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + e + " does not exist on jQuery.rsswipe")
            } else if (r && "object" == typeof e) r.option.apply(r, arguments);
            else if (!(r || "object" != typeof e && e)) return function(e) {
                return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = u), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e = e || {}, e = t.extend({}, t.fn.rsswipe.defaults, e), this.each((function() {
                    var n = t(this),
                        r = n.data(_);
                    r || (r = new m(this, e), n.data(_, r))
                }))
            }.apply(this, arguments);
            return n
        }, t.fn.rsswipe.version = "1.6.18", t.fn.rsswipe.defaults = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: ".noSwipe",
            preventDefaultEvents: !0
        }, t.fn.rsswipe.phases = {
            PHASE_START: "start",
            PHASE_MOVE: f,
            PHASE_END: D,
            PHASE_CANCEL: p
        }, t.fn.rsswipe.directions = {
            LEFT: e,
            RIGHT: n,
            UP: r,
            DOWN: i,
            IN: "in",
            OUT: "out"
        }, t.fn.rsswipe.pageScroll = {
            NONE: u,
            HORIZONTAL: o,
            VERTICAL: l,
            AUTO: "auto"
        }, t.fn.rsswipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            FOUR: 4,
            FIVE: 5,
            ALL: h
        }
    }, n(3).jQuery ? (i = [n(0)], void 0 === (u = "function" == typeof(r = s) ? r.apply(e, i) : r) || (t.exports = u)) : t.exports ? s(n(0)) : s(jQuery)
}, function(t, e) {
    (function(e) {
        t.exports = e
    }).call(this, {})
}, function(t, e) {
    var n;
    (n = jQuery).waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
    }, n.expr[":"].uncached = function(t) {
        var e = document.createElement("img");
        return e.src = t.src, n(t).is('img[src!=""]') && !e.complete
    }, n.fn.waitForImages = function(t, e, r) {
        if (n.isPlainObject(t) && (e = t.each, r = t.waitForAll, t = t.finished), t = t || n.noop, e = e || n.noop, r = !!r, !n.isFunction(t) || !n.isFunction(e)) throw new TypeError("An invalid callback was supplied.");
        return this.each((function() {
            var i = n(this),
                u = [];
            if (r) {
                var s = n.waitForImages.hasImageProperties || [],
                    a = /url\((['"]?)(.*?)\1\)/g;
                i.find("*").each((function() {
                    var t = n(this);
                    t.is("img:uncached") && u.push({
                        src: t.attr("src"),
                        element: t[0]
                    }), n.each(s, (function(e, n) {
                        var r, i = t.css(n);
                        if (!i) return !0;
                        for (; r = a.exec(i);) u.push({
                            src: r[2],
                            element: t[0]
                        })
                    }))
                }))
            } else i.find("img:uncached").each((function() {
                u.push({
                    src: this.src,
                    element: this
                })
            }));
            var o = u.length,
                l = 0;
            0 == o && t.call(i[0]), n.each(u, (function(r, u) {
                var s = new Image;
                n(s).bind("load error", (function(n) {
                    if (l++, e.call(u.element, l, o, "load" == n.type), l == o) return t.call(i[0]), !1
                })), s.src = u.src
            }))
        }))
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function i(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    /*!
     * GSAP 3.2.6
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    n.r(e);
    var u, s, a, o, l, h, f, D, p, c, d, g, _, m, v, y, C, x, F, w, E, b, T, A, M, P = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        B = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        S = 1e8,
        O = 2 * Math.PI,
        k = O / 4,
        L = 0,
        N = Math.sqrt,
        R = Math.cos,
        I = Math.sin,
        z = function(t) {
            return "string" == typeof t
        },
        Y = function(t) {
            return "function" == typeof t
        },
        j = function(t) {
            return "number" == typeof t
        },
        X = function(t) {
            return void 0 === t
        },
        V = function(t) {
            return "object" == typeof t
        },
        U = function(t) {
            return !1 !== t
        },
        W = function() {
            return "undefined" != typeof window
        },
        q = function(t) {
            return Y(t) || z(t)
        },
        H = Array.isArray,
        G = /(?:-?\.?\d|\.)+/gi,
        Q = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        K = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Z = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        $ = /\(([^()]+)\)/i,
        J = /[+-]=-?[\.\d]+/,
        tt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        et = {},
        nt = {},
        rt = function(t) {
            return (nt = Mt(t, et)) && ln
        },
        it = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        ut = function(t, e) {
            return !e && console.warn(t)
        },
        st = function(t, e) {
            return t && (et[t] = e) && nt && (nt[t] = e) || et
        },
        at = function() {
            return 0
        },
        ot = {},
        lt = [],
        ht = {},
        ft = {},
        Dt = {},
        pt = 30,
        ct = [],
        dt = "",
        gt = function(t) {
            var e, n, r = t[0];
            if (V(r) || Y(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
                for (n = ct.length; n-- && !ct[n].targetTest(r););
                e = ct[n]
            }
            for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new Oe(t[n], e))) || t.splice(n, 1);
            return t
        },
        _t = function(t) {
            return t._gsap || gt(te(t))[0]._gsap
        },
        mt = function(t, e) {
            var n = t[e];
            return Y(n) ? t[e]() : X(n) && t.getAttribute(e) || n
        },
        vt = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        yt = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        Ct = function(t, e) {
            for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n;);
            return r < n
        },
        xt = function(t, e, n) {
            var r, i = j(t[1]),
                u = (i ? 2 : 1) + (e < 2 ? 0 : 1),
                s = t[u];
            if (i && (s.duration = t[1]), s.parent = n, e) {
                for (r = s; n && !("immediateRender" in r);) r = n.vars.defaults || {}, n = U(n.vars.inherit) && n.parent;
                s.immediateRender = U(r.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[u - 1]
            }
            return s
        },
        Ft = function() {
            var t, e, n = lt.length,
                r = lt.slice(0);
            for (ht = {}, lt.length = 0, t = 0; t < n; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        wt = function(t, e, n, r) {
            lt.length && Ft(), t.render(e, n, r), lt.length && Ft()
        },
        Et = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(tt).length < 2 ? e : t
        },
        bt = function(t) {
            return t
        },
        Tt = function(t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t
        },
        At = function(t, e) {
            for (var n in e) n in t || "duration" === n || "ease" === n || (t[n] = e[n])
        },
        Mt = function(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        },
        Pt = function t(e, n) {
            for (var r in n) e[r] = V(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r];
            return e
        },
        Bt = function(t, e) {
            var n, r = {};
            for (n in t) n in e || (r[n] = t[n]);
            return r
        },
        St = function(t) {
            var e = t.parent || u,
                n = t.keyframes ? At : Tt;
            if (U(t.inherit))
                for (; e;) n(t, e.vars.defaults), e = e.parent;
            return t
        },
        Ot = function(t, e, n, r) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var i = e._prev,
                u = e._next;
            i ? i._next = u : t[n] === e && (t[n] = u), u ? u._prev = i : t[r] === e && (t[r] = i), e._next = e._prev = e.parent = null
        },
        kt = function(t, e) {
            !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
        },
        Lt = function(t) {
            for (var e = t; e;) e._dirty = 1, e = e.parent;
            return t
        },
        Nt = function(t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        },
        Rt = function(t) {
            return t._repeat ? It(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        It = function(t, e) {
            return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
        },
        zt = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        Yt = function(t) {
            return t._end = yt(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
        },
        jt = function(t, e) {
            var n;
            if ((e._time || e._initted && !e._dur) && (n = zt(t.rawTime(), e), (!e._dur || Qt(0, e.totalDuration(), n) - e._tTime > 1e-8) && e.render(n, !0)), Lt(t)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (n = t; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
                t._zTime = -1e-8
            }
        },
        Xt = function(t, e, n, r) {
            return e.parent && kt(e), e._start = yt(n + e._delay), e._end = yt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                function(t, e, n, r, i) {
                    void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
                    var u, s = t[r];
                    if (i)
                        for (u = e[i]; s && s[i] > u;) s = s._prev;
                    s ? (e._next = s._next, s._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t
                }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, r || jt(t, e), t
        },
        Vt = function(t, e, n, r) {
            return Ye(t, e), t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && h !== Ce.frame ? (lt.push(t), t._lazy = [e, r], 1) : void 0 : 1
        },
        Ut = function(t, e, n) {
            var r = t._repeat,
                i = yt(e) || 0;
            return t._dur = i, t._tDur = r ? r < 0 ? 1e12 : yt(i * (r + 1) + t._rDelay * r) : i, t._time > i && (t._time = i, t._tTime = Math.min(t._tTime, t._tDur)), !n && Lt(t.parent), t.parent && Yt(t), t
        },
        Wt = function(t) {
            return t instanceof Le ? Lt(t) : Ut(t, t._dur)
        },
        qt = {
            _start: 0,
            endTime: at
        },
        Ht = function t(e, n) {
            var r, i, u = e.labels,
                s = e._recent || qt,
                a = e.duration() >= S ? s.endTime(!1) : e._dur;
            return z(n) && (isNaN(n) || n in u) ? "<" === (r = n.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) : (r = n.indexOf("=")) < 0 ? (n in u || (u[n] = a), u[n]) : (i = +(n.charAt(r - 1) + n.substr(r + 1)), r > 1 ? t(e, n.substr(0, r - 1)) + i : a + i) : null == n ? a : +n
        },
        Gt = function(t, e) {
            return t || 0 === t ? e(t) : e
        },
        Qt = function(t, e, n) {
            return n < t ? t : n > e ? e : n
        },
        Kt = function(t) {
            return (t + "").substr((parseFloat(t) + "").length)
        },
        Zt = [].slice,
        $t = function(t, e) {
            return t && V(t) && "length" in t && (!e && !t.length || t.length - 1 in t && V(t[0])) && !t.nodeType && t !== s
        },
        Jt = function(t, e, n) {
            return void 0 === n && (n = []), t.forEach((function(t) {
                var r;
                return z(t) && !e || $t(t, 1) ? (r = n).push.apply(r, te(t)) : n.push(t)
            })) || n
        },
        te = function(t, e) {
            return !z(t) || e || !a && xe() ? H(t) ? Jt(t, e) : $t(t) ? Zt.call(t, 0) : t ? [t] : [] : Zt.call(o.querySelectorAll(t), 0)
        },
        ee = function(t) {
            return t.sort((function() {
                return .5 - Math.random()
            }))
        },
        ne = function(t) {
            if (Y(t)) return t;
            var e = V(t) ? t : {
                    each: t
                },
                n = Ae(e.ease),
                r = e.from || 0,
                i = parseFloat(e.base) || 0,
                u = {},
                s = r > 0 && r < 1,
                a = isNaN(r) || s,
                o = e.axis,
                l = r,
                h = r;
            return z(r) ? l = h = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[r] || 0 : !s && a && (l = r[0], h = r[1]),
                function(t, s, f) {
                    var D, p, c, d, g, _, m, v, y, C = (f || e).length,
                        x = u[C];
                    if (!x) {
                        if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, S])[1])) {
                            for (m = -S; m < (m = f[y++].getBoundingClientRect().left) && y < C;);
                            y--
                        }
                        for (x = u[C] = [], D = a ? Math.min(y, C) * l - .5 : r % y, p = a ? C * h / y - .5 : r / y | 0, m = 0, v = S, _ = 0; _ < C; _++) c = _ % y - D, d = p - (_ / y | 0), x[_] = g = o ? Math.abs("y" === o ? d : c) : N(c * c + d * d), g > m && (m = g), g < v && (v = g);
                        "random" === r && ee(x), x.max = m - v, x.min = v, x.v = C = (parseFloat(e.amount) || parseFloat(e.each) * (y > C ? C - 1 : o ? "y" === o ? C / y : y : Math.max(y, C / y)) || 0) * ("edges" === r ? -1 : 1), x.b = C < 0 ? i - C : i, x.u = Kt(e.amount || e.each) || 0, n = n && C < 0 ? Te(n) : n
                    }
                    return C = (x[t] - x.min) / x.max || 0, yt(x.b + (n ? n(C) : C) * x.v) + x.u
                }
        },
        re = function(t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function(n) {
                return ~~(Math.round(parseFloat(n) / t) * t * e) / e + (j(n) ? 0 : Kt(n))
            }
        },
        ie = function(t, e) {
            var n, r, i = H(t);
            return !i && V(t) && (n = i = t.radius || S, t.values ? (t = te(t.values), (r = !j(t[0])) && (n *= n)) : t = re(t.increment)), Gt(e, i ? Y(t) ? function(e) {
                return r = t(e), Math.abs(r - e) <= n ? r : e
            } : function(e) {
                for (var i, u, s = parseFloat(r ? e.x : e), a = parseFloat(r ? e.y : 0), o = S, l = 0, h = t.length; h--;)(i = r ? (i = t[h].x - s) * i + (u = t[h].y - a) * u : Math.abs(t[h] - s)) < o && (o = i, l = h);
                return l = !n || o <= n ? t[l] : e, r || l === e || j(e) ? l : l + Kt(e)
            } : re(t))
        },
        ue = function(t, e, n, r) {
            return Gt(H(t) ? !e : !0 === n ? !!(n = 0) : !r, (function() {
                return H(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && ~~(Math.round((t + Math.random() * (e - t)) / n) * n * r) / r
            }))
        },
        se = function(t, e, n) {
            return Gt(n, (function(n) {
                return t[~~e(n)]
            }))
        },
        ae = function(t) {
            for (var e, n, r, i, u = 0, s = ""; ~(e = t.indexOf("random(", u));) r = t.indexOf(")", e), i = "[" === t.charAt(e + 7), n = t.substr(e + 7, r - e - 7).match(i ? tt : G), s += t.substr(u, e - u) + ue(i ? n : +n[0], +n[1], +n[2] || 1e-5), u = r + 1;
            return s + t.substr(u, t.length - u)
        },
        oe = function(t, e, n, r, i) {
            var u = e - t,
                s = r - n;
            return Gt(i, (function(e) {
                return n + (e - t) / u * s
            }))
        },
        le = function(t, e, n) {
            var r, i, u, s = t.labels,
                a = S;
            for (r in s)(i = s[r] - e) < 0 == !!n && i && a > (i = Math.abs(i)) && (u = r, a = i);
            return u
        },
        he = function(t, e, n) {
            var r, i, u = t.vars,
                s = u[e];
            if (s) return r = u[e + "Params"], i = u.callbackScope || t, n && lt.length && Ft(), r ? s.apply(i, r) : s.call(i)
        },
        fe = function(t) {
            return kt(t), t.progress() < 1 && he(t, "onInterrupt"), t
        },
        De = function(t) {
            var e = (t = !t.name && t.default || t).name,
                n = Y(t),
                r = e && !n && t.init ? function() {
                    this._props = []
                } : t,
                i = {
                    init: at,
                    render: Je,
                    add: Ie,
                    kill: en,
                    modifier: tn,
                    rawVars: 0
                },
                u = {
                    targetTest: 0,
                    get: 0,
                    getSetter: Qe,
                    aliases: {},
                    register: 0
                };
            if (xe(), t !== r) {
                if (ft[e]) return;
                Tt(r, Tt(Bt(t, i), u)), Mt(r.prototype, Mt(i, Bt(t, u))), ft[r.prop = e] = r, t.targetTest && (ct.push(r), ot[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            st(e, r), t.register && t.register(ln, r, un)
        },
        pe = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        ce = function(t, e, n) {
            return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        },
        de = function(t, e, n) {
            var r, i, u, s, a, o, l, h, f, D, p = t ? j(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : pe.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), pe[t]) p = pe[t];
                else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1), i = t.charAt(2), u = t.charAt(3), t = "#" + r + r + i + i + u + u), p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                else if ("hsl" === t.substr(0, 3))
                    if (p = D = t.match(G), e) {
                        if (~t.indexOf("=")) return p = t.match(Q), n && p.length < 4 && (p[3] = 1), p
                    } else s = +p[0] % 360 / 360, a = +p[1] / 100, r = 2 * (o = +p[2] / 100) - (i = o <= .5 ? o * (a + 1) : o + a - o * a), p.length > 3 && (p[3] *= 1), p[0] = ce(s + 1 / 3, r, i), p[1] = ce(s, r, i), p[2] = ce(s - 1 / 3, r, i);
                else p = t.match(G) || pe.transparent;
                p = p.map(Number)
            }
            return e && !D && (r = p[0] / 255, i = p[1] / 255, u = p[2] / 255, o = ((l = Math.max(r, i, u)) + (h = Math.min(r, i, u))) / 2, l === h ? s = a = 0 : (f = l - h, a = o > .5 ? f / (2 - l - h) : f / (l + h), s = l === r ? (i - u) / f + (i < u ? 6 : 0) : l === i ? (u - r) / f + 2 : (r - i) / f + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * a + .5), p[2] = ~~(100 * o + .5)), n && p.length < 4 && (p[3] = 1), p
        },
        ge = function(t) {
            var e = [],
                n = [],
                r = -1;
            return t.split(me).forEach((function(t) {
                var i = t.match(K) || [];
                e.push.apply(e, i), n.push(r += i.length + 1)
            })), e.c = n, e
        },
        _e = function(t, e, n) {
            var r, i, u, s, a = "",
                o = (t + a).match(me),
                l = e ? "hsla(" : "rgba(",
                h = 0;
            if (!o) return t;
            if (o = o.map((function(t) {
                    return (t = de(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                })), n && (u = ge(t), (r = n.c).join(a) !== u.c.join(a)))
                for (s = (i = t.replace(me, "1").split(K)).length - 1; h < s; h++) a += i[h] + (~r.indexOf(h) ? o.shift() || l + "0,0,0,0)" : (u.length ? u : o.length ? o : n).shift());
            if (!i)
                for (s = (i = t.split(me)).length - 1; h < s; h++) a += i[h] + o[h];
            return a + i[s]
        },
        me = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in pe) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        ve = /hsl[a]?\(/,
        ye = function(t) {
            var e, n = t.join(" ");
            if (me.lastIndex = 0, me.test(n)) return e = ve.test(n), t[1] = _e(t[1], e), t[0] = _e(t[0], e, ge(t[1])), !0
        },
        Ce = (_ = Date.now, m = 500, v = 33, y = _(), C = y, F = x = 1 / 240, E = function t(e) {
            var n, r, i = _() - C,
                u = !0 === e;
            i > m && (y += i - v), C += i, g.time = (C - y) / 1e3, ((n = g.time - F) > 0 || u) && (g.frame++, F += n + (n >= x ? .004 : x - n), r = 1), u || (p = c(t)), r && w.forEach((function(t) {
                return t(g.time, i, g.frame, e)
            }))
        }, g = {
            time: 0,
            frame: 0,
            tick: function() {
                E(!0)
            },
            wake: function() {
                l && (!a && W() && (s = a = window, o = s.document || {}, et.gsap = ln, (s.gsapVersions || (s.gsapVersions = [])).push(ln.version), rt(nt || s.GreenSockGlobals || !s.gsap && s || {}), d = s.requestAnimationFrame), p && g.sleep(), c = d || function(t) {
                    return setTimeout(t, 1e3 * (F - g.time) + 1 | 0)
                }, D = 1, E(2))
            },
            sleep: function() {
                (d ? s.cancelAnimationFrame : clearTimeout)(p), D = 0, c = at
            },
            lagSmoothing: function(t, e) {
                m = t || 1 / 1e-8, v = Math.min(e, m, 0)
            },
            fps: function(t) {
                x = 1 / (t || 240), F = g.time + x
            },
            add: function(t) {
                w.indexOf(t) < 0 && w.push(t), xe()
            },
            remove: function(t) {
                var e;
                ~(e = w.indexOf(t)) && w.splice(e, 1)
            },
            _listeners: w = []
        }),
        xe = function() {
            return !D && Ce.wake()
        },
        Fe = {},
        we = /^[\d.\-M][\d.\-,\s]/,
        Ee = /["']/g,
        be = function(t) {
            for (var e, n, r, i = {}, u = t.substr(1, t.length - 3).split(":"), s = u[0], a = 1, o = u.length; a < o; a++) n = u[a], e = a !== o - 1 ? n.lastIndexOf(",") : n.length, r = n.substr(0, e), i[s] = isNaN(r) ? r.replace(Ee, "").trim() : +r, s = n.substr(e + 1).trim();
            return i
        },
        Te = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        Ae = function(t, e) {
            return t && (Y(t) ? t : Fe[t] || function(t) {
                var e = (t + "").split("("),
                    n = Fe[e[0]];
                return n && e.length > 1 && n.config ? n.config.apply(null, ~t.indexOf("{") ? [be(e[1])] : $.exec(t)[1].split(",").map(Et)) : Fe._CE && we.test(t) ? Fe._CE("", t) : n
            }(t)) || e
        },
        Me = function(t, e, n, r) {
            void 0 === n && (n = function(t) {
                return 1 - e(1 - t)
            }), void 0 === r && (r = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var i, u = {
                easeIn: e,
                easeOut: n,
                easeInOut: r
            };
            return vt(t, (function(t) {
                for (var e in Fe[t] = et[t] = u, Fe[i = t.toLowerCase()] = n, u) Fe[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Fe[t + "." + e] = u[e]
            })), u
        },
        Pe = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        },
        Be = function t(e, n, r) {
            var i = n >= 1 ? n : 1,
                u = (r || (e ? .3 : .45)) / (n < 1 ? n : 1),
                s = u / O * (Math.asin(1 / i) || 0),
                a = function(t) {
                    return 1 === t ? 1 : i * Math.pow(2, -10 * t) * I((t - s) * u) + 1
                },
                o = "out" === e ? a : "in" === e ? function(t) {
                    return 1 - a(1 - t)
                } : Pe(a);
            return u = O / u, o.config = function(n, r) {
                return t(e, n, r)
            }, o
        },
        Se = function t(e, n) {
            void 0 === n && (n = 1.70158);
            var r = function(t) {
                    return t ? --t * t * ((n + 1) * t + n) + 1 : 0
                },
                i = "out" === e ? r : "in" === e ? function(t) {
                    return 1 - r(1 - t)
                } : Pe(r);
            return i.config = function(n) {
                return t(e, n)
            }, i
        };
    vt("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var n = e < 5 ? e + 1 : e;
        Me(t + ",Power" + (n - 1), e ? function(t) {
            return Math.pow(t, n)
        } : function(t) {
            return t
        }, (function(t) {
            return 1 - Math.pow(1 - t, n)
        }), (function(t) {
            return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
        }))
    })), Fe.Linear.easeNone = Fe.none = Fe.Linear.easeIn, Me("Elastic", Be("in"), Be("out"), Be()), b = 7.5625, A = 1 / (T = 2.75), Me("Bounce", (function(t) {
        return 1 - M(1 - t)
    }), M = function(t) {
        return t < A ? b * t * t : t < .7272727272727273 ? b * Math.pow(t - 1.5 / T, 2) + .75 : t < .9090909090909092 ? b * (t -= 2.25 / T) * t + .9375 : b * Math.pow(t - 2.625 / T, 2) + .984375
    }), Me("Expo", (function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    })), Me("Circ", (function(t) {
        return -(N(1 - t * t) - 1)
    })), Me("Sine", (function(t) {
        return 1 - R(t * k)
    })), Me("Back", Se("in"), Se("out"), Se()), Fe.SteppedEase = Fe.steps = et.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t,
                r = t + (e ? 0 : 1),
                i = e ? 1 : 0;
            return function(t) {
                return ((r * Qt(0, 1 - 1e-8, t) | 0) + i) * n
            }
        }
    }, B.ease = Fe["quad.out"], vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
        return dt += t + "," + t + "Params,"
    }));
    var Oe = function(t, e) {
            this.id = L++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : mt, this.set = e ? e.getSetter : Qe
        },
        ke = function() {
            function t(t, e) {
                var n = t.parent || u;
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ut(this, +t.duration, 1), this.data = t.data, D || Ce.wake(), n && Xt(n, this, e || 0 === e ? e : n._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0, Ut(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function(t, e) {
                if (xe(), !arguments.length) return this._tTime;
                var n = this.parent || this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (this._start = yt(n._time - (this._ts > 0 ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)), Yt(this), n._dirty || Lt(n); n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && Xt(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime)) && (this._ts || (this._pTime = t), wt(this, t, e)), this
            }, e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Rt(this)) % this._dur || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Rt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, e.iteration = function(t, e) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? It(this._tTime, n) + 1 : 1
            }, e.timeScale = function(t) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var e = this.parent && this._ts ? zt(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, Nt(this.totalTime(Qt(0, this._tDur, e), !0))
            }, e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (xe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))), this) : this._ps
            }, e.startTime = function(t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && Xt(e, this, t - this._delay), this
                }
                return this._start
            }, e.endTime = function(t) {
                return this._start + (U(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
            }, e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? zt(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.repeat = function(t) {
                return arguments.length ? (this._repeat = t, Wt(this)) : this._repeat
            }, e.repeatDelay = function(t) {
                return arguments.length ? (this._rDelay = t, Wt(this)) : this._rDelay
            }, e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function(t, e) {
                return this.totalTime(Ht(this, t), U(e))
            }, e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, U(e))
            }, e.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, e.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, e.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, e.resume = function() {
                return this.paused(!1)
            }, e.reversed = function(t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
            }, e.invalidate = function() {
                return this._initted = 0, this._zTime = -1e-8, this
            }, e.isActive = function(t) {
                var e, n = this.parent || this._dp,
                    r = this._start;
                return !(n && !(this._ts && (this._initted || !t) && n.isActive(t) && (e = n.rawTime(!0)) >= r && e < this.endTime(!0) - 1e-8))
            }, e.eventCallback = function(t, e, n) {
                var r = this.vars;
                return arguments.length > 1 ? (e ? (r[t] = e, n && (r[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
            }, e.then = function(t) {
                var e = this;
                return new Promise((function(n) {
                    var r = Y(t) ? t : bt,
                        i = function() {
                            var t = e.then;
                            e.then = null, Y(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), n(r), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
                }))
            }, e.kill = function() {
                fe(this)
            }, t
        }();
    Tt(ke.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Le = function(t) {
        function e(e, n) {
            var i;
            return void 0 === e && (e = {}), (i = t.call(this, e, n) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = U(e.sortChildren), i.parent && jt(i.parent, r(i)), i
        }
        i(e, t);
        var n = e.prototype;
        return n.to = function(t, e, n) {
            return new Ue(t, xt(arguments, 0, this), Ht(this, j(e) ? arguments[3] : n)), this
        }, n.from = function(t, e, n) {
            return new Ue(t, xt(arguments, 1, this), Ht(this, j(e) ? arguments[3] : n)), this
        }, n.fromTo = function(t, e, n, r) {
            return new Ue(t, xt(arguments, 2, this), Ht(this, j(e) ? arguments[4] : r)), this
        }, n.set = function(t, e, n) {
            return e.duration = 0, e.parent = this, St(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ue(t, e, Ht(this, n), 1), this
        }, n.call = function(t, e, n) {
            return Xt(this, Ue.delayedCall(0, t, e), Ht(this, n))
        }, n.staggerTo = function(t, e, n, r, i, u, s) {
            return n.duration = e, n.stagger = n.stagger || r, n.onComplete = u, n.onCompleteParams = s, n.parent = this, new Ue(t, n, Ht(this, i)), this
        }, n.staggerFrom = function(t, e, n, r, i, u, s) {
            return n.runBackwards = 1, St(n).immediateRender = U(n.immediateRender), this.staggerTo(t, e, n, r, i, u, s)
        }, n.staggerFromTo = function(t, e, n, r, i, u, s, a) {
            return r.startAt = n, St(r).immediateRender = U(r.immediateRender), this.staggerTo(t, e, r, i, u, s, a)
        }, n.render = function(t, e, n) {
            var r, i, s, a, o, l, h, f, D, p, c, d, g = this._time,
                _ = this._dirty ? this.totalDuration() : this._tDur,
                m = this._dur,
                v = this !== u && t > _ - 1e-8 && t >= 0 ? _ : t < 1e-8 ? 0 : t,
                y = this._zTime < 0 != t < 0 && (this._initted || !m);
            if (v !== this._tTime || n || y) {
                if (g !== this._time && m && (v += this._time - g, t += this._time - g), r = v, D = this._start, l = !(f = this._ts), y && (m || (g = this._zTime), !t && e || (this._zTime = t)), this._repeat && (c = this._yoyo, o = m + this._rDelay, ((r = yt(v % o)) > m || _ === v) && (r = m), (a = ~~(v / o)) && a === v / o && (r = m, a--), c && 1 & a && (r = m - r, d = 1), a !== (p = It(this._tTime, o)) && !this._lock)) {
                    var C = c && 1 & p,
                        x = C === (c && 1 & a);
                    if (a < p && (C = !C), g = C ? 0 : m, this._lock = 1, this.render(g, e, !m)._lock = 0, !e && this.parent && he(this, "onRepeat"), this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1), g !== this._time || l !== !this._ts) return this;
                    if (x && (this._lock = 2, g = C ? m + 1e-4 : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !d && this.invalidate()), this._lock = 0, !this._ts && !l) return this
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function(t, e, n) {
                        var r;
                        if (n > e)
                            for (r = t._first; r && r._start <= n;) {
                                if (!r._dur && "isPause" === r.data && r._start > e) return r;
                                r = r._next
                            } else
                                for (r = t._last; r && r._start >= n;) {
                                    if (!r._dur && "isPause" === r.data && r._start < e) return r;
                                    r = r._prev
                                }
                    }(this, yt(g), yt(r))) && (v -= r - (r = h._start)), this._tTime = v, this._time = r, this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), g || !r || e || he(this, "onStart"), r >= g && t >= 0)
                    for (i = this._first; i;) {
                        if (s = i._next, (i._act || r >= i._start) && i._ts && h !== i) {
                            if (i.parent !== this) return this.render(t, e, n);
                            if (i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, e, n), r !== this._time || !this._ts && !l) {
                                h = 0, s && (v += this._zTime = -1e-8);
                                break
                            }
                        }
                        i = s
                    } else {
                        i = this._last;
                        for (var F = t < 0 ? t : r; i;) {
                            if (s = i._prev, (i._act || F <= i._end) && i._ts && h !== i) {
                                if (i.parent !== this) return this.render(t, e, n);
                                if (i.render(i._ts > 0 ? (F - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (F - i._start) * i._ts, e, n), r !== this._time || !this._ts && !l) {
                                    h = 0, s && (v += this._zTime = F ? -1e-8 : 1e-8);
                                    break
                                }
                            }
                            i = s
                        }
                    }
                if (h && !e && (this.pause(), h.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1, this._ts)) return this._start = D, Yt(this), this.render(t, e, n);
                this._onUpdate && !e && he(this, "onUpdate", !0), (v === _ && _ >= this.totalDuration() || !v && this._ts < 0) && (D !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !m) && (t && this._ts > 0 || !v && this._ts < 0) && kt(this, 1), e || t < 0 && !g || (he(this, v === _ ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom())))
            }
            return this
        }, n.add = function(t, e) {
            var n = this;
            if (j(e) || (e = Ht(this, e)), !(t instanceof ke)) {
                if (H(t)) return t.forEach((function(t) {
                    return n.add(t, e)
                })), Lt(this);
                if (z(t)) return this.addLabel(t, e);
                if (!Y(t)) return this;
                t = Ue.delayedCall(0, t)
            }
            return this !== t ? Xt(this, t, e) : this
        }, n.getChildren = function(t, e, n, r) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === r && (r = -S);
            for (var i = [], u = this._first; u;) u._start >= r && (u instanceof Ue ? e && i.push(u) : (n && i.push(u), t && i.push.apply(i, u.getChildren(!0, e, n)))), u = u._next;
            return i
        }, n.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                if (e[n].vars.id === t) return e[n]
        }, n.remove = function(t) {
            return z(t) ? this.removeLabel(t) : Y(t) ? this.killTweensOf(t) : (Ot(this, t), t === this._recent && (this._recent = this._last), Lt(this))
        }, n.totalTime = function(e, n) {
            return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = yt(Ce.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime
        }, n.addLabel = function(t, e) {
            return this.labels[t] = Ht(this, e), this
        }, n.removeLabel = function(t) {
            return delete this.labels[t], this
        }, n.addPause = function(t, e, n) {
            var r = Ue.delayedCall(0, e || at, n);
            return r.data = "isPause", this._hasPause = 1, Xt(this, r, Ht(this, t))
        }, n.removePause = function(t) {
            var e = this._first;
            for (t = Ht(this, t); e;) e._start === t && "isPause" === e.data && kt(e), e = e._next
        }, n.killTweensOf = function(t, e, n) {
            for (var r = this.getTweensOf(t, n), i = r.length; i--;) Ne !== r[i] && r[i].kill(t, e);
            return this
        }, n.getTweensOf = function(t, e) {
            for (var n, r = [], i = te(t), u = this._first; u;) u instanceof Ue ? !Ct(u._targets, i) || e && !u.isActive("started" === e) || r.push(u) : (n = u.getTweensOf(i, e)).length && r.push.apply(r, n), u = u._next;
            return r
        }, n.tweenTo = function(t, e) {
            e = e || {};
            var n = this,
                r = Ht(n, t),
                i = e,
                u = i.startAt,
                s = i.onStart,
                a = i.onStartParams,
                o = Ue.to(n, Tt(e, {
                    ease: "none",
                    lazy: !1,
                    time: r,
                    duration: e.duration || Math.abs((r - (u && "time" in u ? u.time : n._time)) / n.timeScale()) || 1e-8,
                    onStart: function() {
                        n.pause();
                        var t = e.duration || Math.abs((r - n._time) / n.timeScale());
                        o._dur !== t && Ut(o, t).render(o._time, !0, !0), s && s.apply(o, a || [])
                    }
                }));
            return o
        }, n.tweenFromTo = function(t, e, n) {
            return this.tweenTo(e, Tt({
                startAt: {
                    time: Ht(this, t)
                }
            }, n))
        }, n.recent = function() {
            return this._recent
        }, n.nextLabel = function(t) {
            return void 0 === t && (t = this._time), le(this, Ht(this, t))
        }, n.previousLabel = function(t) {
            return void 0 === t && (t = this._time), le(this, Ht(this, t), 1)
        }, n.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
        }, n.shiftChildren = function(t, e, n) {
            void 0 === n && (n = 0);
            for (var r, i = this._first, u = this.labels; i;) i._start >= n && (i._start += t), i = i._next;
            if (e)
                for (r in u) u[r] >= n && (u[r] += t);
            return Lt(this)
        }, n.invalidate = function() {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, n.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
            return this._time = this._tTime = 0, t && (this.labels = {}), Lt(this)
        }, n.totalDuration = function(t) {
            var e, n, r, i, s = 0,
                a = this,
                o = a._last,
                l = S;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (r = o._start) > l && a._sort && o._ts && !a._lock ? (a._lock = 1, Xt(a, o, r - o._delay, 1)._lock = 0) : l = r, r < 0 && o._ts && (s -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -1e20), l = 0), (n = Yt(o)) > s && o._ts && (s = n), o = e;
                Ut(a, a === u && a._time > s ? a._time : Math.min(S, s), 1), a._dirty = 0
            }
            return a._tDur
        }, e.updateRoot = function(t) {
            if (u._ts && (wt(u, zt(t, u)), h = Ce.frame), Ce.frame >= pt) {
                pt += P.autoSleep || 120;
                var e = u._first;
                if ((!e || !e._ts) && P.autoSleep && Ce._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Ce.sleep()
                }
            }
        }, e
    }(ke);
    Tt(Le.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Ne, Re = function(t, e, n, r, i, u, s) {
            var a, o, l, h, f, D, p, c, d = new un(this._pt, t, e, 0, 1, $e, null, i),
                g = 0,
                _ = 0;
            for (d.b = n, d.e = r, n += "", (p = ~(r += "").indexOf("random(")) && (r = ae(r)), u && (u(c = [n, r], t, e), n = c[0], r = c[1]), o = n.match(Z) || []; a = Z.exec(r);) h = a[0], f = r.substring(g, a.index), l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1), h !== o[_++] && (D = parseFloat(o[_ - 1]) || 0, d._pt = {
                _next: d._pt,
                p: f || 1 === _ ? f : ",",
                s: D,
                c: "=" === h.charAt(1) ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1) : parseFloat(h) - D,
                m: l && l < 4 ? Math.round : 0
            }, g = Z.lastIndex);
            return d.c = g < r.length ? r.substring(g, r.length) : "", d.fp = s, (J.test(r) || p) && (d.e = 0), this._pt = d, d
        },
        Ie = function(t, e, n, r, i, u, s, a, o) {
            Y(r) && (r = r(i || 0, t, u));
            var l, h = t[e],
                f = "get" !== n ? n : Y(h) ? o ? t[e.indexOf("set") || !Y(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](o) : t[e]() : h,
                D = Y(h) ? o ? He : qe : We;
            if (z(r) && (~r.indexOf("random(") && (r = ae(r)), "=" === r.charAt(1) && (r = parseFloat(f) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (Kt(f) || 0))), f !== r) return isNaN(f + r) ? (!h && !(e in t) && it(e, r), Re.call(this, t, e, f, r, D, a || P.stringFilter, o)) : (l = new un(this._pt, t, e, +f || 0, r - (f || 0), "boolean" == typeof h ? Ze : Ke, 0, D), o && (l.fp = o), s && l.modifier(s, this, t), this._pt = l)
        },
        ze = function(t, e, n, r, i, u) {
            var s, a, o, l;
            if (ft[t] && !1 !== (s = new ft[t]).init(i, s.rawVars ? e[t] : function(t, e, n, r, i) {
                    if (Y(t) && (t = je(t, i, e, n, r)), !V(t) || t.style && t.nodeType || H(t)) return z(t) ? je(t, i, e, n, r) : t;
                    var u, s = {};
                    for (u in t) s[u] = je(t[u], i, e, n, r);
                    return s
                }(e[t], r, i, u, n), n, r, u) && (n._pt = a = new un(n._pt, i, t, 0, 1, s.render, s, 0, s.priority), n !== f))
                for (o = n._ptLookup[n._targets.indexOf(i)], l = s._props.length; l--;) o[s._props[l]] = a;
            return s
        },
        Ye = function t(e, n) {
            var r, i, s, a, o, l, h, f, D, p, c, d, g = e.vars,
                _ = g.ease,
                m = g.startAt,
                v = g.immediateRender,
                y = g.lazy,
                C = g.onUpdate,
                x = g.onUpdateParams,
                F = g.callbackScope,
                w = g.runBackwards,
                E = g.yoyoEase,
                b = g.keyframes,
                T = g.autoRevert,
                A = e._dur,
                M = e._startAt,
                P = e._targets,
                S = e.parent,
                O = S && "nested" === S.data ? S.parent._targets : P,
                k = "auto" === e._overwrite,
                L = e.timeline;
            if (!L || b && _ || (_ = "none"), e._ease = Ae(_, B.ease), e._yEase = E ? Te(Ae(!0 === E ? _ : E, B.ease)) : 0, E && e._yoyo && !e._repeat && (E = e._yEase, e._yEase = e._ease, e._ease = E), !L) {
                if (M && M.render(-1, !0).kill(), m) {
                    if (kt(e._startAt = Ue.set(P, Tt({
                            data: "isStart",
                            overwrite: !1,
                            parent: S,
                            immediateRender: !0,
                            lazy: U(y),
                            startAt: null,
                            delay: 0,
                            onUpdate: C,
                            onUpdateParams: x,
                            callbackScope: F,
                            stagger: 0
                        }, m))), v)
                        if (n > 0) !T && (e._startAt = 0);
                        else if (A) return
                } else if (w && A)
                    if (M) !T && (e._startAt = 0);
                    else if (n && (v = !1), kt(e._startAt = Ue.set(P, Mt(Bt(g, ot), {
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: v && U(y),
                        immediateRender: v,
                        stagger: 0,
                        parent: S
                    }))), v) {
                    if (!n) return
                } else t(e._startAt, 1e-8);
                for (r = Bt(g, ot), e._pt = 0, d = (f = P[0] ? _t(P[0]).harness : 0) && g[f.prop], y = A && U(y) || y && !A, i = 0; i < P.length; i++) {
                    if (h = (o = P[i])._gsap || gt(P)[i]._gsap, e._ptLookup[i] = p = {}, ht[h.id] && Ft(), c = O === P ? i : O.indexOf(o), f && !1 !== (D = new f).init(o, d || r, e, c, O) && (e._pt = a = new un(e._pt, o, D.name, 0, 1, D.render, D, 0, D.priority), D._props.forEach((function(t) {
                            p[t] = a
                        })), D.priority && (l = 1)), !f || d)
                        for (s in r) ft[s] && (D = ze(s, r, e, c, o, O)) ? D.priority && (l = 1) : p[s] = a = Ie.call(e, o, s, "get", r[s], c, O, 0, g.stringFilter);
                    e._op && e._op[i] && e.kill(o, e._op[i]), k && e._pt && (Ne = e, u.killTweensOf(o, p, "started"), Ne = 0), e._pt && y && (ht[h.id] = 1)
                }
                l && rn(e), e._onInit && e._onInit(e)
            }
            e._from = !L && !!g.runBackwards, e._onUpdate = C, e._initted = 1
        },
        je = function(t, e, n, r, i) {
            return Y(t) ? t.call(e, n, r, i) : z(t) && ~t.indexOf("random(") ? ae(t) : t
        },
        Xe = dt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Ve = (Xe + ",id,stagger,delay,duration,paused").split(","),
        Ue = function(t) {
            function e(e, n, i, s) {
                var a;
                "number" == typeof n && (i.duration = n, n = i, i = null);
                var o, l, h, f, D, p, c, d, g = (a = t.call(this, s ? n : St(n), i) || this).vars,
                    _ = g.duration,
                    m = g.delay,
                    v = g.immediateRender,
                    y = g.stagger,
                    C = g.overwrite,
                    x = g.keyframes,
                    F = g.defaults,
                    w = a.parent,
                    E = (H(e) ? j(e[0]) : "length" in n) ? [e] : te(e);
                if (a._targets = E.length ? gt(E) : ut("GSAP target " + e + " not found. https://greensock.com", !P.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = C, x || y || q(_) || q(m)) {
                    if (n = a.vars, (o = a.timeline = new Le({
                            data: "nested",
                            defaults: F || {}
                        })).kill(), o.parent = r(a), x) Tt(o.vars.defaults, {
                        ease: "none"
                    }), x.forEach((function(t) {
                        return o.to(E, t, ">")
                    }));
                    else {
                        if (f = E.length, c = y ? ne(y) : at, V(y))
                            for (D in y) ~Xe.indexOf(D) && (d || (d = {}), d[D] = y[D]);
                        for (l = 0; l < f; l++) {
                            for (D in h = {}, n) Ve.indexOf(D) < 0 && (h[D] = n[D]);
                            h.stagger = 0, d && Mt(h, d), n.yoyoEase && !n.repeat && (h.yoyoEase = n.yoyoEase), p = E[l], h.duration = +je(_, r(a), l, p, E), h.delay = (+je(m, r(a), l, p, E) || 0) - a._delay, !y && 1 === f && h.delay && (a._delay = m = h.delay, a._start += m, h.delay = 0), o.to(p, h, c(l, p, E))
                        }
                        _ = m = 0
                    }
                    _ || a.duration(_ = o.duration())
                } else a.timeline = 0;
                return !0 === C && (Ne = r(a), u.killTweensOf(E), Ne = 0), w && jt(w, r(a)), (v || !_ && !x && a._start === w._time && U(v) && function t(e) {
                    return !e || e._ts && t(e.parent)
                }(r(a)) && "nested" !== w.data) && (a._tTime = -1e-8, a.render(Math.max(0, -m))), a
            }
            i(e, t);
            var n = e.prototype;
            return n.render = function(t, e, n) {
                var r, i, u, s, a, o, l, h, f, D = this._time,
                    p = this._tDur,
                    c = this._dur,
                    d = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
                if (c) {
                    if (d !== this._tTime || !t || n || this._startAt && this._zTime < 0 != t < 0) {
                        if (r = d, h = this.timeline, this._repeat) {
                            if (s = c + this._rDelay, ((r = yt(d % s)) > c || p === d) && (r = c), (u = ~~(d / s)) && u === d / s && (r = c, u--), (o = this._yoyo && 1 & u) && (f = this._yEase, r = c - r), a = It(this._tTime, s), r === D && !n && this._initted) return this;
                            u !== a && (!this.vars.repeatRefresh || o || this._lock || (this._lock = n = 1, this.render(s * u, !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Vt(this, r, n, e)) return this._tTime = 0, this;
                            if (c !== this._dur) return this.render(t, e, n)
                        }
                        for (this._tTime = d, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (f || this._ease)(r / c), this._from && (this.ratio = l = 1 - l), D || !r || e || he(this, "onStart"), i = this._pt; i;) i.r(l, i.d), i = i._next;
                        h && h.render(t < 0 ? t : !r && o ? -1e-8 : h._dur * l, e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), he(this, "onUpdate")), this._repeat && u !== a && this.vars.onRepeat && !e && this.parent && he(this, "onRepeat"), d !== this._tDur && d || this._tTime !== d || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, n), (t || !c) && (t && this._ts > 0 || !d && this._ts < 0) && kt(this, 1), e || t < 0 && !D || d < p && this.timeScale() > 0 || (he(this, d === p ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom()))
                    }
                } else ! function(t, e, n, r) {
                    var i, u = t._zTime < 0 ? 0 : 1,
                        s = e < 0 ? 0 : 1,
                        a = t._rDelay,
                        o = 0;
                    if (a && t._repeat && (o = Qt(0, t._tDur, e), It(o, a) !== It(t._tTime, a) && (u = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), (t._initted || !Vt(t, e, r, n)) && (s !== u || r || 1e-8 === t._zTime || !e && t._zTime)) {
                        for (t._zTime = e || (n ? 1e-8 : 0), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = o, n || he(t, "onStart"), i = t._pt; i;) i.r(s, i.d), i = i._next;
                        !s && t._startAt && !t._onUpdate && t._start && t._startAt.render(e, !0, r), t._onUpdate && (n || he(t, "onUpdate")), o && t._repeat && !n && t.parent && he(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (t.ratio && kt(t, 1), n || (he(t, t.ratio ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    }
                }(this, t, e, n);
                return this
            }, n.targets = function() {
                return this._targets
            }, n.invalidate = function() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
            }, n.kill = function(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return fe(this);
                if (this.timeline) return this.timeline.killTweensOf(t, e, Ne && !0 !== Ne.vars.overwrite), this;
                var n, r, i, u, s, a, o, l = this._targets,
                    h = t ? te(t) : l,
                    f = this._ptLookup,
                    D = this._pt;
                if ((!e || "all" === e) && function(t, e) {
                        for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n];);
                        return n < 0
                    }(l, h)) return fe(this);
                for (n = this._op = this._op || [], "all" !== e && (z(e) && (s = {}, vt(e, (function(t) {
                        return s[t] = 1
                    })), e = s), e = function(t, e) {
                        var n, r, i, u, s = t[0] ? _t(t[0]).harness : 0,
                            a = s && s.aliases;
                        if (!a) return e;
                        for (r in n = Mt({}, e), a)
                            if (r in n)
                                for (i = (u = a[r].split(",")).length; i--;) n[u[i]] = n[r];
                        return n
                    }(l, e)), o = l.length; o--;)
                    if (~h.indexOf(l[o]))
                        for (s in r = f[o], "all" === e ? (n[o] = e, u = r, i = {}) : (i = n[o] = n[o] || {}, u = e), u)(a = r && r[s]) && ("kill" in a.d && !0 !== a.d.kill(s) || Ot(this, a, "_pt"), delete r[s]), "all" !== i && (i[s] = 1);
                return this._initted && !this._pt && D && fe(this), this
            }, e.to = function(t, n) {
                return new e(t, n, arguments[2])
            }, e.from = function(t, n) {
                return new e(t, xt(arguments, 1))
            }, e.delayedCall = function(t, n, r, i) {
                return new e(n, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: n,
                    onReverseComplete: n,
                    onCompleteParams: r,
                    onReverseCompleteParams: r,
                    callbackScope: i
                })
            }, e.fromTo = function(t, n, r) {
                return new e(t, xt(arguments, 2))
            }, e.set = function(t, n) {
                return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(t, n)
            }, e.killTweensOf = function(t, e, n) {
                return u.killTweensOf(t, e, n)
            }, e
        }(ke);
    Tt(Ue.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), vt("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        Ue[t] = function() {
            var e = new Le,
                n = Zt.call(arguments, 0);
            return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
        }
    }));
    var We = function(t, e, n) {
            return t[e] = n
        },
        qe = function(t, e, n) {
            return t[e](n)
        },
        He = function(t, e, n, r) {
            return t[e](r.fp, n)
        },
        Ge = function(t, e, n) {
            return t.setAttribute(e, n)
        },
        Qe = function(t, e) {
            return Y(t[e]) ? qe : X(t[e]) && t.setAttribute ? Ge : We
        },
        Ke = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
        },
        Ze = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        $e = function(t, e) {
            var n = e._pt,
                r = "";
            if (!t && e.b) r = e.b;
            else if (1 === t && e.e) r = e.e;
            else {
                for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r, n = n._next;
                r += e.c
            }
            e.set(e.t, e.p, r, e)
        },
        Je = function(t, e) {
            for (var n = e._pt; n;) n.r(t, n.d), n = n._next
        },
        tn = function(t, e, n, r) {
            for (var i, u = this._pt; u;) i = u._next, u.p === r && u.modifier(t, e, n), u = i
        },
        en = function(t) {
            for (var e, n, r = this._pt; r;) n = r._next, r.p === t && !r.op || r.op === t ? Ot(this, r, "_pt") : r.dep || (e = 1), r = n;
            return !e
        },
        nn = function(t, e, n, r) {
            r.mSet(t, e, r.m.call(r.tween, n, r.mt), r)
        },
        rn = function(t) {
            for (var e, n, r, i, u = t._pt; u;) {
                for (e = u._next, n = r; n && n.pr > u.pr;) n = n._next;
                (u._prev = n ? n._prev : i) ? u._prev._next = u: r = u, (u._next = n) ? n._prev = u : i = u, u = e
            }
            t._pt = r
        },
        un = function() {
            function t(t, e, n, r, i, u, s, a, o) {
                this.t = e, this.s = r, this.c = i, this.p = n, this.r = u || Ke, this.d = s || this, this.set = a || We, this.pr = o || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, n) {
                this.mSet = this.mSet || this.set, this.set = nn, this.m = t, this.mt = n, this.tween = e
            }, t
        }();
    vt(dt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert", (function(t) {
        return ot[t] = 1
    })), et.TweenMax = et.TweenLite = Ue, et.TimelineLite = et.TimelineMax = Le, u = new Le({
        sortChildren: !1,
        defaults: B,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), P.stringFilter = ye;
    var sn = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            e.forEach((function(t) {
                return De(t)
            }))
        },
        timeline: function(t) {
            return new Le(t)
        },
        getTweensOf: function(t, e) {
            return u.getTweensOf(t, e)
        },
        getProperty: function(t, e, n, r) {
            z(t) && (t = te(t)[0]);
            var i = _t(t || {}).get,
                u = n ? bt : Et;
            return "native" === n && (n = ""), t ? e ? u((ft[e] && ft[e].get || i)(t, e, n, r)) : function(e, n, r) {
                return u((ft[e] && ft[e].get || i)(t, e, n, r))
            } : t
        },
        quickSetter: function(t, e, n) {
            if ((t = te(t)).length > 1) {
                var r = t.map((function(t) {
                        return ln.quickSetter(t, e, n)
                    })),
                    i = r.length;
                return function(t) {
                    for (var e = i; e--;) r[e](t)
                }
            }
            t = t[0] || {};
            var u = ft[e],
                s = _t(t),
                a = u ? function(e) {
                    var r = new u;
                    f._pt = 0, r.init(t, n ? e + n : e, f, 0, [t]), r.render(1, r), f._pt && Je(1, f)
                } : s.set(t, e);
            return u ? a : function(r) {
                return a(t, e, n ? r + n : r, s, 1)
            }
        },
        isTweening: function(t) {
            return u.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Ae(t.ease, B.ease)), Pt(B, t || {})
        },
        config: function(t) {
            return Pt(P, t || {})
        },
        registerEffect: function(t) {
            var e = t.name,
                n = t.effect,
                r = t.plugins,
                i = t.defaults,
                u = t.extendTimeline;
            (r || "").split(",").forEach((function(t) {
                return t && !ft[t] && !et[t] && ut(e + " effect requires " + t + " plugin.")
            })), Dt[e] = function(t, e, r) {
                return n(te(t), Tt(e || {}, i), r)
            }, u && (Le.prototype[e] = function(t, n, r) {
                return this.add(Dt[e](t, V(n) ? n : (r = n) && {}, this), r)
            })
        },
        registerEase: function(t, e) {
            Fe[t] = Ae(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Ae(t, e) : Fe
        },
        getById: function(t) {
            return u.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var n, r, i = new Le(t);
            for (i.smoothChildTiming = U(t.smoothChildTiming), u.remove(i), i._dp = 0, i._time = i._tTime = u._time, n = u._first; n;) r = n._next, !e && !n._dur && n instanceof Ue && n.vars.onComplete === n._targets[0] || Xt(i, n, n._start - n._delay), n = r;
            return Xt(u, i, 0), i
        },
        utils: {
            wrap: function t(e, n, r) {
                var i = n - e;
                return H(e) ? se(e, t(0, e.length), n) : Gt(r, (function(t) {
                    return (i + (t - e) % i) % i + e
                }))
            },
            wrapYoyo: function t(e, n, r) {
                var i = n - e,
                    u = 2 * i;
                return H(e) ? se(e, t(0, e.length - 1), n) : Gt(r, (function(t) {
                    return e + ((t = (u + (t - e) % u) % u) > i ? u - t : t)
                }))
            },
            distribute: ne,
            random: ue,
            snap: ie,
            normalize: function(t, e, n) {
                return oe(t, e, 0, 1, n)
            },
            getUnit: Kt,
            clamp: function(t, e, n) {
                return Gt(n, (function(n) {
                    return Qt(t, e, n)
                }))
            },
            splitColor: de,
            toArray: te,
            mapRange: oe,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return function(t) {
                    return e.reduce((function(t, e) {
                        return e(t)
                    }), t)
                }
            },
            unitize: function(t, e) {
                return function(n) {
                    return t(parseFloat(n)) + (e || Kt(n))
                }
            },
            interpolate: function t(e, n, r, i) {
                var u = isNaN(e + n) ? 0 : function(t) {
                    return (1 - t) * e + t * n
                };
                if (!u) {
                    var s, a, o, l, h, f = z(e),
                        D = {};
                    if (!0 === r && (i = 1) && (r = null), f) e = {
                        p: e
                    }, n = {
                        p: n
                    };
                    else if (H(e) && !H(n)) {
                        for (o = [], l = e.length, h = l - 2, a = 1; a < l; a++) o.push(t(e[a - 1], e[a]));
                        l--, u = function(t) {
                            t *= l;
                            var e = Math.min(h, ~~t);
                            return o[e](t - e)
                        }, r = n
                    } else i || (e = Mt(H(e) ? [] : {}, e));
                    if (!o) {
                        for (s in n) Ie.call(D, e, s, "get", n[s]);
                        u = function(t) {
                            return Je(t, D) || (f ? e.p : e)
                        }
                    }
                }
                return Gt(r, u)
            },
            shuffle: ee
        },
        install: rt,
        effects: Dt,
        ticker: Ce,
        updateRoot: Le.updateRoot,
        plugins: ft,
        globalTimeline: u,
        core: {
            PropTween: un,
            globals: st,
            Tween: Ue,
            Timeline: Le,
            Animation: ke,
            getCache: _t,
            _removeLinkedListItem: Ot
        }
    };
    vt("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
        return sn[t] = Ue[t]
    })), Ce.add(Le.updateRoot), f = sn.to({}, {
        duration: 0
    });
    var an = function(t, e) {
            for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
            return n
        },
        on = function(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(t, n, r) {
                    r._onInit = function(t) {
                        var r, i;
                        if (z(n) && (r = {}, vt(n, (function(t) {
                                return r[t] = 1
                            })), n = r), e) {
                            for (i in r = {}, n) r[i] = e(n[i]);
                            n = r
                        }! function(t, e) {
                            var n, r, i, u = t._targets;
                            for (n in e)
                                for (r = u.length; r--;)(i = t._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = an(i, n)), i && i.modifier && i.modifier(e[n], t, u[r], n))
                        }(t, n)
                    }
                }
            }
        },
        ln = sn.registerPlugin({
            name: "attr",
            init: function(t, e, n, r, i) {
                for (var u in e) this.add(t, "setAttribute", (t.getAttribute(u) || 0) + "", e[u], r, i, 0, 0, u), this._props.push(u)
            }
        }, {
            name: "endArray",
            init: function(t, e) {
                for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n])
            }
        }, on("roundProps", re), on("modifiers"), on("snap", ie)) || sn;
    Ue.version = Le.version = ln.version = "3.2.6", l = 1, W() && xe();
    Fe.Power0, Fe.Power1, Fe.Power2, Fe.Power3, Fe.Power4, Fe.Linear, Fe.Quad, Fe.Cubic, Fe.Quart, Fe.Quint, Fe.Strong, Fe.Elastic, Fe.Back, Fe.SteppedEase, Fe.Bounce, Fe.Sine, Fe.Expo, Fe.Circ;
    /*!
     * CSSPlugin 3.2.6
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var hn, fn, Dn, pn, cn, dn, gn, _n, mn = {},
        vn = 180 / Math.PI,
        yn = Math.PI / 180,
        Cn = Math.atan2,
        xn = /([A-Z])/g,
        Fn = /(?:left|right|width|margin|padding|x)/i,
        wn = /[\s,\(]\S/,
        En = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        bn = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Tn = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        An = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        Mn = function(t, e) {
            var n = e.s + e.c * t;
            e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
        },
        Pn = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        Bn = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        Sn = function(t, e, n) {
            return t.style[e] = n
        },
        On = function(t, e, n) {
            return t.style.setProperty(e, n)
        },
        kn = function(t, e, n) {
            return t._gsap[e] = n
        },
        Ln = function(t, e, n) {
            return t._gsap.scaleX = t._gsap.scaleY = n
        },
        Nn = function(t, e, n, r, i) {
            var u = t._gsap;
            u.scaleX = u.scaleY = n, u.renderTransform(i, u)
        },
        Rn = function(t, e, n, r, i) {
            var u = t._gsap;
            u[e] = n, u.renderTransform(i, u)
        },
        In = "transform",
        zn = In + "Origin",
        Yn = function(t, e) {
            var n = fn.createElementNS ? fn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : fn.createElement(t);
            return n.style ? n : fn.createElement(t)
        },
        jn = function t(e, n, r) {
            var i = getComputedStyle(e);
            return i[n] || i.getPropertyValue(n.replace(xn, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, Vn(n) || n, 1) || ""
        },
        Xn = "O,Moz,ms,Ms,Webkit".split(","),
        Vn = function(t, e, n) {
            var r = (e || cn).style,
                i = 5;
            if (t in r && !n) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(Xn[i] + t in r););
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Xn[i] : "") + t
        },
        Un = function() {
            "undefined" != typeof window && (hn = window, fn = hn.document, Dn = fn.documentElement, cn = Yn("div") || {
                style: {}
            }, dn = Yn("div"), In = Vn(In), zn = Vn(zn), cn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", _n = !!Vn("perspective"), pn = 1)
        },
        Wn = function t(e) {
            var n, r = Yn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                i = this.parentNode,
                u = this.nextSibling,
                s = this.style.cssText;
            if (Dn.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
                n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch (t) {} else this._gsapBBox && (n = this._gsapBBox());
            return i && (u ? i.insertBefore(this, u) : i.appendChild(this)), Dn.removeChild(r), this.style.cssText = s, n
        },
        qn = function(t, e) {
            for (var n = e.length; n--;)
                if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
        },
        Hn = function(t) {
            var e;
            try {
                e = t.getBBox()
            } catch (n) {
                e = Wn.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === Wn || (e = Wn.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                x: +qn(t, ["x", "cx", "x1"]) || 0,
                y: +qn(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        Gn = function(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Hn(t))
        },
        Qn = function(t, e) {
            if (e) {
                var n = t.style;
                e in mn && (e = In), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(xn, "-$1").toLowerCase())) : n.removeAttribute(e)
            }
        },
        Kn = function(t, e, n, r, i, u) {
            var s = new un(t._pt, e, n, 0, 1, u ? Bn : Pn);
            return t._pt = s, s.b = r, s.e = i, t._props.push(n), s
        },
        Zn = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        $n = function t(e, n, r, i) {
            var u, s, a, o, l = parseFloat(r) || 0,
                h = (r + "").trim().substr((l + "").length) || "px",
                f = cn.style,
                D = Fn.test(n),
                p = "svg" === e.tagName.toLowerCase(),
                c = (p ? "client" : "offset") + (D ? "Width" : "Height"),
                d = "px" === i,
                g = "%" === i;
            return i === h || !l || Zn[i] || Zn[h] ? l : ("px" !== h && !d && (l = t(e, n, r, "px")), o = e.getCTM && Gn(e), g && (mn[n] || ~n.indexOf("adius")) ? yt(l / (o ? e.getBBox()[D ? "width" : "height"] : e[c]) * 100) : (f[D ? "width" : "height"] = 100 + (d ? h : i), s = ~n.indexOf("adius") || "em" === i && e.appendChild && !p ? e : e.parentNode, o && (s = (e.ownerSVGElement || {}).parentNode), s && s !== fn && s.appendChild || (s = fn.body), (a = s._gsap) && g && a.width && D && a.time === Ce.time ? yt(l / a.width * 100) : ((g || "%" === h) && (f.position = jn(e, "position")), s === e && (f.position = "static"), s.appendChild(cn), u = cn[c], s.removeChild(cn), f.position = "absolute", D && g && ((a = _t(s)).time = Ce.time, a.width = s[c]), yt(d ? u * l / 100 : u && l ? 100 / u * l : 0))))
        },
        Jn = function(t, e, n, r) {
            var i;
            return pn || Un(), e in En && "transform" !== e && ~(e = En[e]).indexOf(",") && (e = e.split(",")[0]), mn[e] && "transform" !== e ? (i = hr(t, r), i = "transformOrigin" !== e ? i[e] : fr(jn(t, zn)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = rr[e] && rr[e](t, e, n) || jn(t, e) || mt(t, e) || ("opacity" === e ? 1 : 0)), n && !~(i + "").indexOf(" ") ? $n(t, e, i, n) + n : i
        },
        tr = function(t, e, n, r) {
            if (!n || "none" === n) {
                var i = Vn(e, t, 1),
                    u = i && jn(t, i, 1);
                u && u !== n && (e = i, n = u)
            }
            var s, a, o, l, h, f, D, p, c, d, g, _, m = new un(this._pt, t.style, e, 0, 1, $e),
                v = 0,
                y = 0;
            if (m.b = n, m.e = r, n += "", "auto" === (r += "") && (t.style[e] = r, r = jn(t, e) || r, t.style[e] = n), ye(s = [n, r]), r = s[1], o = (n = s[0]).match(K) || [], (r.match(K) || []).length) {
                for (; a = K.exec(r);) D = a[0], c = r.substring(v, a.index), h ? h = (h + 1) % 5 : "rgba(" !== c.substr(-5) && "hsla(" !== c.substr(-5) || (h = 1), D !== (f = o[y++] || "") && (l = parseFloat(f) || 0, g = f.substr((l + "").length), (_ = "=" === D.charAt(1) ? +(D.charAt(0) + "1") : 0) && (D = D.substr(2)), p = parseFloat(D), d = D.substr((p + "").length), v = K.lastIndex - d.length, d || (d = d || P.units[e] || g, v === r.length && (r += d, m.e += d)), g !== d && (l = $n(t, e, f, d) || 0), m._pt = {
                    _next: m._pt,
                    p: c || 1 === y ? c : ",",
                    s: l,
                    c: _ ? _ * p : p - l,
                    m: h && h < 4 ? Math.round : 0
                });
                m.c = v < r.length ? r.substring(v, r.length) : ""
            } else m.r = "display" === e && "none" === r ? Bn : Pn;
            return J.test(r) && (m.e = 0), this._pt = m, m
        },
        er = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        nr = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var n, r, i, u = e.t,
                    s = u.style,
                    a = e.u,
                    o = u._gsap;
                if ("all" === a || !0 === a) s.cssText = "", r = 1;
                else
                    for (i = (a = a.split(",")).length; --i > -1;) n = a[i], mn[n] && (r = 1, n = "transformOrigin" === n ? zn : In), Qn(u, n);
                r && (Qn(u, In), o && (o.svg && u.removeAttribute("transform"), hr(u, 1), o.uncache = 1))
            }
        },
        rr = {
            clearProps: function(t, e, n, r, i) {
                if ("isFromStart" !== i.data) {
                    var u = t._pt = new un(t._pt, e, n, 0, 0, nr);
                    return u.u = r, u.pr = -10, u.tween = i, t._props.push(n), 1
                }
            }
        },
        ir = [1, 0, 0, 1, 0, 0],
        ur = {},
        sr = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        ar = function(t) {
            var e = jn(t, In);
            return sr(e) ? ir : e.substr(7).match(Q).map(yt)
        },
        or = function(t, e) {
            var n, r, i, u, s = t._gsap || _t(t),
                a = t.style,
                o = ar(t);
            return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (o = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? ir : o : (o !== ir || t.offsetParent || t === Dn || s.svg || (i = a.display, a.display = "block", (n = t.parentNode) && t.offsetParent || (u = 1, r = t.nextSibling, Dn.appendChild(t)), o = ar(t), i ? a.display = i : Qn(t, "display"), u && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : Dn.removeChild(t))), e && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
        },
        lr = function(t, e, n, r, i, u) {
            var s, a, o, l = t._gsap,
                h = i || or(t, !0),
                f = l.xOrigin || 0,
                D = l.yOrigin || 0,
                p = l.xOffset || 0,
                c = l.yOffset || 0,
                d = h[0],
                g = h[1],
                _ = h[2],
                m = h[3],
                v = h[4],
                y = h[5],
                C = e.split(" "),
                x = parseFloat(C[0]) || 0,
                F = parseFloat(C[1]) || 0;
            n ? h !== ir && (a = d * m - g * _) && (o = x * (-g / a) + F * (d / a) - (d * y - g * v) / a, x = x * (m / a) + F * (-_ / a) + (_ * y - m * v) / a, F = o) : (x = (s = Hn(t)).x + (~C[0].indexOf("%") ? x / 100 * s.width : x), F = s.y + (~(C[1] || C[0]).indexOf("%") ? F / 100 * s.height : F)), r || !1 !== r && l.smooth ? (v = x - f, y = F - D, l.xOffset = p + (v * d + y * _) - v, l.yOffset = c + (v * g + y * m) - y) : l.xOffset = l.yOffset = 0, l.xOrigin = x, l.yOrigin = F, l.smooth = !!r, l.origin = e, l.originIsAbsolute = !!n, t.style[zn] = "0px 0px", u && (Kn(u, l, "xOrigin", f, x), Kn(u, l, "yOrigin", D, F), Kn(u, l, "xOffset", p, l.xOffset), Kn(u, l, "yOffset", c, l.yOffset)), t.setAttribute("data-svg-origin", x + " " + F)
        },
        hr = function(t, e) {
            var n = t._gsap || new Oe(t);
            if ("x" in n && !e && !n.uncache) return n;
            var r, i, u, s, a, o, l, h, f, D, p, c, d, g, _, m, v, y, C, x, F, w, E, b, T, A, M, B, S, O, k, L, N = t.style,
                R = n.scaleX < 0,
                I = jn(t, zn) || "0";
            return r = i = u = o = l = h = f = D = p = 0, s = a = 1, n.svg = !(!t.getCTM || !Gn(t)), g = or(t, n.svg), n.svg && (b = !n.uncache && t.getAttribute("data-svg-origin"), lr(t, b || I, !!b || n.originIsAbsolute, !1 !== n.smooth, g)), c = n.xOrigin || 0, d = n.yOrigin || 0, g !== ir && (y = g[0], C = g[1], x = g[2], F = g[3], r = w = g[4], i = E = g[5], 6 === g.length ? (s = Math.sqrt(y * y + C * C), a = Math.sqrt(F * F + x * x), o = y || C ? Cn(C, y) * vn : 0, (f = x || F ? Cn(x, F) * vn + o : 0) && (a *= Math.cos(f * yn)), n.svg && (r -= c - (c * y + d * x), i -= d - (c * C + d * F))) : (L = g[6], O = g[7], M = g[8], B = g[9], S = g[10], k = g[11], r = g[12], i = g[13], u = g[14], l = (_ = Cn(L, S)) * vn, _ && (b = w * (m = Math.cos(-_)) + M * (v = Math.sin(-_)), T = E * m + B * v, A = L * m + S * v, M = w * -v + M * m, B = E * -v + B * m, S = L * -v + S * m, k = O * -v + k * m, w = b, E = T, L = A), h = (_ = Cn(-x, S)) * vn, _ && (m = Math.cos(-_), k = F * (v = Math.sin(-_)) + k * m, y = b = y * m - M * v, C = T = C * m - B * v, x = A = x * m - S * v), o = (_ = Cn(C, y)) * vn, _ && (b = y * (m = Math.cos(_)) + C * (v = Math.sin(_)), T = w * m + E * v, C = C * m - y * v, E = E * m - w * v, y = b, w = T), l && Math.abs(l) + Math.abs(o) > 359.9 && (l = o = 0, h = 180 - h), s = yt(Math.sqrt(y * y + C * C + x * x)), a = yt(Math.sqrt(E * E + L * L)), _ = Cn(w, E), f = Math.abs(_) > 2e-4 ? _ * vn : 0, p = k ? 1 / (k < 0 ? -k : k) : 0), n.svg && (g = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !sr(jn(t, In)), g && t.setAttribute("transform", g))), Math.abs(f) > 90 && Math.abs(f) < 270 && (R ? (s *= -1, f += o <= 0 ? 180 : -180, o += o <= 0 ? 180 : -180) : (a *= -1, f += f <= 0 ? 180 : -180)), n.x = ((n.xPercent = r && Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px", n.y = ((n.yPercent = i && Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", n.z = u + "px", n.scaleX = yt(s), n.scaleY = yt(a), n.rotation = yt(o) + "deg", n.rotationX = yt(l) + "deg", n.rotationY = yt(h) + "deg", n.skewX = f + "deg", n.skewY = D + "deg", n.transformPerspective = p + "px", (n.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (N[zn] = fr(I)), n.xOffset = n.yOffset = 0, n.force3D = P.force3D, n.renderTransform = n.svg ? dr : _n ? cr : pr, n.uncache = 0, n
        },
        fr = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        Dr = function(t, e, n) {
            var r = Kt(e);
            return yt(parseFloat(e) + parseFloat($n(t, "x", n + "px", r))) + r
        },
        pr = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, cr(t, e)
        },
        cr = function(t, e) {
            var n = e || this,
                r = n.xPercent,
                i = n.yPercent,
                u = n.x,
                s = n.y,
                a = n.z,
                o = n.rotation,
                l = n.rotationY,
                h = n.rotationX,
                f = n.skewX,
                D = n.skewY,
                p = n.scaleX,
                c = n.scaleY,
                d = n.transformPerspective,
                g = n.force3D,
                _ = n.target,
                m = n.zOrigin,
                v = "",
                y = "auto" === g && t && 1 !== t || !0 === g;
            if (m && ("0deg" !== h || "0deg" !== l)) {
                var C, x = parseFloat(l) * yn,
                    F = Math.sin(x),
                    w = Math.cos(x);
                x = parseFloat(h) * yn, C = Math.cos(x), u = Dr(_, u, F * C * -m), s = Dr(_, s, -Math.sin(x) * -m), a = Dr(_, a, w * C * -m + m)
            }
            "0px" !== d && (v += "perspective(" + d + ") "), (r || i) && (v += "translate(" + r + "%, " + i + "%) "), (y || "0px" !== u || "0px" !== s || "0px" !== a) && (v += "0px" !== a || y ? "translate3d(" + u + ", " + s + ", " + a + ") " : "translate(" + u + ", " + s + ") "), "0deg" !== o && (v += "rotate(" + o + ") "), "0deg" !== l && (v += "rotateY(" + l + ") "), "0deg" !== h && (v += "rotateX(" + h + ") "), "0deg" === f && "0deg" === D || (v += "skew(" + f + ", " + D + ") "), 1 === p && 1 === c || (v += "scale(" + p + ", " + c + ") "), _.style[In] = v || "translate(0, 0)"
        },
        dr = function(t, e) {
            var n, r, i, u, s, a = e || this,
                o = a.xPercent,
                l = a.yPercent,
                h = a.x,
                f = a.y,
                D = a.rotation,
                p = a.skewX,
                c = a.skewY,
                d = a.scaleX,
                g = a.scaleY,
                _ = a.target,
                m = a.xOrigin,
                v = a.yOrigin,
                y = a.xOffset,
                C = a.yOffset,
                x = a.forceCSS,
                F = parseFloat(h),
                w = parseFloat(f);
            D = parseFloat(D), p = parseFloat(p), (c = parseFloat(c)) && (p += c = parseFloat(c), D += c), D || p ? (D *= yn, p *= yn, n = Math.cos(D) * d, r = Math.sin(D) * d, i = Math.sin(D - p) * -g, u = Math.cos(D - p) * g, p && (c *= yn, s = Math.tan(p - c), i *= s = Math.sqrt(1 + s * s), u *= s, c && (s = Math.tan(c), n *= s = Math.sqrt(1 + s * s), r *= s)), n = yt(n), r = yt(r), i = yt(i), u = yt(u)) : (n = d, u = g, r = i = 0), (F && !~(h + "").indexOf("px") || w && !~(f + "").indexOf("px")) && (F = $n(_, "x", h, "px"), w = $n(_, "y", f, "px")), (m || v || y || C) && (F = yt(F + m - (m * n + v * i) + y), w = yt(w + v - (m * r + v * u) + C)), (o || l) && (s = _.getBBox(), F = yt(F + o / 100 * s.width), w = yt(w + l / 100 * s.height)), s = "matrix(" + n + "," + r + "," + i + "," + u + "," + F + "," + w + ")", _.setAttribute("transform", s), x && (_.style[In] = s)
        },
        gr = function(t, e, n, r, i, u) {
            var s, a, o = z(i),
                l = parseFloat(i) * (o && ~i.indexOf("rad") ? vn : 1),
                h = u ? l * u : l - r,
                f = r + h + "deg";
            return o && ("short" === (s = i.split("_")[1]) && (h %= 360) !== h % 180 && (h += h < 0 ? 360 : -360), "cw" === s && h < 0 ? h = (h + 36e9) % 360 - 360 * ~~(h / 360) : "ccw" === s && h > 0 && (h = (h - 36e9) % 360 - 360 * ~~(h / 360))), t._pt = a = new un(t._pt, e, n, r, h, Tn), a.e = f, a.u = "deg", t._props.push(n), a
        },
        _r = function(t, e, n) {
            var r, i, u, s, a, o, l, h = dn.style,
                f = n._gsap;
            for (i in h.cssText = getComputedStyle(n).cssText + ";position:absolute;display:block;", h[In] = e, fn.body.appendChild(dn), r = hr(dn, 1), mn)(u = f[i]) !== (s = r[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = Kt(u) !== (l = Kt(s)) ? $n(n, i, u, l) : parseFloat(u), o = parseFloat(s), t._pt = new un(t._pt, f, i, a, o - a, bn), t._pt.u = l || 0, t._props.push(i));
            fn.body.removeChild(dn)
        };
    vt("padding,margin,Width,Radius", (function(t, e) {
        var n = "Top",
            r = "Right",
            i = "Bottom",
            u = "Left",
            s = (e < 3 ? [n, r, i, u] : [n + u, n + r, i + r, i + u]).map((function(n) {
                return e < 2 ? t + n : "border" + n + t
            }));
        rr[e > 1 ? "border" + t : t] = function(t, e, n, r, i) {
            var u, a;
            if (arguments.length < 4) return u = s.map((function(e) {
                return Jn(t, e, n)
            })), 5 === (a = u.join(" ")).split(u[0]).length ? u[0] : a;
            u = (r + "").split(" "), a = {}, s.forEach((function(t, e) {
                return a[t] = u[e] = u[e] || u[(e - 1) / 2 | 0]
            })), t.init(e, a, i)
        }
    }));
    var mr, vr, yr = {
        name: "css",
        register: Un,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, n, r, i) {
            var u, s, a, o, l, h, f, D, p, c, d, g, _, m, v, y, C, x, F, w = this._props,
                E = t.style;
            for (f in pn || Un(), e)
                if ("autoRound" !== f && (s = e[f], !ft[f] || !ze(f, e, n, r, t, i)))
                    if (l = typeof s, h = rr[f], "function" === l && (l = typeof(s = s.call(n, r, t, i))), "string" === l && ~s.indexOf("random(") && (s = ae(s)), h) h(this, t, f, s, n) && (v = 1);
                    else if ("--" === f.substr(0, 2)) this.add(E, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", r, i, 0, 0, f);
            else {
                if (u = Jn(t, f), o = parseFloat(u), (c = "string" === l && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), a = parseFloat(s), f in En && ("autoAlpha" === f && (1 === o && "hidden" === Jn(t, "visibility") && a && (o = 0), Kn(this, E, "visibility", o ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== f && "transform" !== f && ~(f = En[f]).indexOf(",") && (f = f.split(",")[0])), d = f in mn)
                    if (g || ((_ = t._gsap).renderTransform || hr(t), m = !1 !== e.smoothOrigin && _.smooth, (g = this._pt = new un(this._pt, E, In, 0, 1, _.renderTransform, _, 0, -1)).dep = 1), "scale" === f) this._pt = new un(this._pt, _, "scaleY", _.scaleY, c ? c * a : a - _.scaleY), w.push("scaleY", f), f += "X";
                    else {
                        if ("transformOrigin" === f) {
                            C = void 0, x = void 0, F = void 0, C = (y = s).split(" "), x = C[0], F = C[1] || "50%", "top" !== x && "bottom" !== x && "left" !== F && "right" !== F || (y = x, x = F, F = y), C[0] = er[x] || x, C[1] = er[F] || F, s = C.join(" "), _.svg ? lr(t, s, 0, m, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== _.zOrigin && Kn(this, _, "zOrigin", _.zOrigin, p), Kn(this, E, f, fr(u), fr(s)));
                            continue
                        }
                        if ("svgOrigin" === f) {
                            lr(t, s, 1, m, 0, this);
                            continue
                        }
                        if (f in ur) {
                            gr(this, _, f, o, s, c);
                            continue
                        }
                        if ("smoothOrigin" === f) {
                            Kn(this, _, "smooth", _.smooth, s);
                            continue
                        }
                        if ("force3D" === f) {
                            _[f] = s;
                            continue
                        }
                        if ("transform" === f) {
                            _r(this, s, t);
                            continue
                        }
                    }
                else f in E || (f = Vn(f) || f);
                if (d || (a || 0 === a) && (o || 0 === o) && !wn.test(s) && f in E) a || (a = 0), (D = (u + "").substr((o + "").length)) !== (p = (s + "").substr((a + "").length) || (f in P.units ? P.units[f] : D)) && (o = $n(t, f, u, p)), this._pt = new un(this._pt, d ? _ : E, f, o, c ? c * a : a - o, "px" !== p || !1 === e.autoRound || d ? bn : Mn), this._pt.u = p || 0, D !== p && (this._pt.b = u, this._pt.r = An);
                else if (f in E) tr.call(this, t, f, u, s);
                else {
                    if (!(f in t)) {
                        it(f, s);
                        continue
                    }
                    this.add(t, f, t[f], s, r, i)
                }
                w.push(f)
            }
            v && rn(this)
        },
        get: Jn,
        aliases: En,
        getSetter: function(t, e, n) {
            var r = En[e];
            return r && r.indexOf(",") < 0 && (e = r), e in mn && e !== zn && (t._gsap.x || Jn(t, "x")) ? n && gn === n ? "scale" === e ? Ln : kn : (gn = n || {}) && ("scale" === e ? Nn : Rn) : t.style && !X(t.style[e]) ? Sn : ~e.indexOf("-") ? On : Qe(t, e)
        },
        core: {
            _removeProperty: Qn,
            _getMatrix: or
        }
    };
    ln.utils.checkPrefix = Vn, vr = vt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (mr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
        mn[t] = 1
    })), vt(mr, (function(t) {
        P.units[t] = "deg", ur[t] = 1
    })), En[vr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + mr, vt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        En[e[1]] = vr[e[0]]
    })), vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
        P.units[t] = "px"
    })), ln.registerPlugin(yr);
    var Cr, xr, Fr, wr = ln.registerPlugin(yr) || ln,
        Er = wr.core.Tween,
        br = function() {
            return Cr || "undefined" != typeof window && (Cr = window.gsap) && Cr.registerPlugin && Cr
        },
        Tr = function(t) {
            Cr = br(), (Fr = Cr && Cr.parseEase("_CE")) ? (xr = 1, Cr.parseEase("bounce").config = function(t) {
                return "object" == typeof t ? Mr("", t) : Mr("bounce(" + t + ")", {
                    strength: +t
                })
            }) : t && console.warn("Please gsap.registerPlugin(CustomEase, CustomBounce)")
        },
        Ar = function(t) {
            var e, n = t.length,
                r = 1 / t[n - 2];
            for (e = 2; e < n; e += 2) t[e] = ~~(t[e] * r * 1e3) / 1e3;
            t[n - 2] = 1
        },
        Mr = function(t, e) {
            xr || Tr(1), e = e || {};
            var n, r, i, u, s, a, o, l = Math.min(.999, e.strength || .7),
                h = l,
                f = (e.squash || 0) / 100,
                D = f,
                p = 1 / .03,
                c = .2,
                d = 1,
                g = .1,
                _ = [0, 0, .07, 0, .1, 1, .1, 1],
                m = [0, 0, 0, 0, .1, 0, .1, 0];
            for (s = 0; s < 200 && (a = g + (c *= h * ((h + 1) / 2)), u = 1 - (d *= l * l), r = (i = g + .49 * c) + .8 * (i - (n = g + d / p)), f && (g += f, n += f, i += f, r += f, a += f, o = f / D, m.push(g - f, 0, g - f, o, g - f / 2, o, g, o, g, 0, g, 0, g, -.6 * o, g + (a - g) / 6, 0, a, 0), _.push(g - f, 1, g, 1, g, 1), f *= l * l), _.push(g, 1, n, u, i, u, r, u, a, 1, a, 1), l *= .95, p = d / (a - r), g = a, !(u > .999)); s++);
            if (e.endAtStart && "false" !== e.endAtStart) {
                if (i = -.1, _.unshift(i, 1, i, 1, -.07, 0), D)
                    for (i -= f = 2.5 * D, _.unshift(i, 1, i, 1, i, 1), m.splice(0, 6), m.unshift(i, 0, i, 0, i, 1, i + f / 2, 1, i + f, 1, i + f, 0, i + f, 0, i + f, -.6, i + f + .033, 0), s = 0; s < m.length; s += 2) m[s] -= i;
                for (s = 0; s < _.length; s += 2) _[s] -= i, _[s + 1] = 1 - _[s + 1]
            }
            return f && (Ar(m), m[2] = "C" + m[2], Fr(e.squashID || t + "-squash", "M" + m.join(","))), Ar(_), _[2] = "C" + _[2], Fr(t, "M" + _.join(","))
        },
        Pr = function() {
            function t(t, e) {
                this.ease = Mr(t, e)
            }
            return t.create = function(t, e) {
                return Mr(t, e)
            }, t.register = function(t) {
                Cr = t, Tr()
            }, t
        }();
    /*!
     * CustomBounce 3.2.6
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    br() && Cr.registerPlugin(Pr), Pr.version = "3.2.6";
    /*!
     * paths 3.2.6
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Br = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        Sr = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        Or = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        kr = /(^[#\.][a-z]|[a-y][a-z])/i,
        Lr = Math.PI / 180,
        Nr = 180 / Math.PI,
        Rr = Math.sin,
        Ir = Math.cos,
        zr = Math.abs,
        Yr = Math.sqrt,
        jr = Math.atan2,
        Xr = function(t) {
            return "string" == typeof t
        },
        Vr = function(t) {
            return "number" == typeof t
        },
        Ur = {},
        Wr = {},
        qr = function(t) {
            return Math.round((t + 1e8) % 1 * 1e5) / 1e5 || (t < 0 ? 0 : 1)
        },
        Hr = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        Gr = function(t, e, n, r) {
            var i = t[e],
                u = 1 === r ? 6 : ui(i, n, r);
            if (u && u + n + 2 < i.length) return t.splice(e, 0, i.slice(0, n + u + 2)), i.splice(0, n + u), 1
        },
        Qr = function(t, e) {
            return e.totalLength = t.totalLength, t.samples ? (e.samples = t.samples.slice(0), e.lookup = t.lookup.slice(0), e.minLength = t.minLength, e.resolution = t.resolution) : e.totalPoints = t.totalPoints, e
        },
        Kr = function(t, e) {
            var n = t.length,
                r = t[n - 1] || [],
                i = r.length;
            e[0] === r[i - 2] && e[1] === r[i - 1] && (e = r.concat(e.slice(2)), n--), t[n] = e
        };

    function Zr(t) {
        var e, n = (t = Xr(t) && kr.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;
        return n && (t = t.getAttribute("d")) ? (n._gsPath || (n._gsPath = {}), (e = n._gsPath[t]) && !e._dirty ? e : n._gsPath[t] = hi(t)) : t ? Xr(t) ? hi(t) : Vr(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string")
    }

    function $r(t) {
        var e, n = 0;
        for (t.reverse(); n < t.length; n += 2) e = t[n], t[n] = t[n + 1], t[n + 1] = e;
        t.reversed = !t.reversed
    }
    var Jr = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2"
    };

    function ti(t, e) {
        var n, r, i, u, s, a, o, l, h, f, D, p, c, d, g, _, m, v, y, C, x, F, w = t.tagName.toLowerCase(),
            E = .552284749831;
        return "path" !== w && t.getBBox ? (a = function(t, e) {
            var n, r = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                i = [].slice.call(t.attributes),
                u = i.length;
            for (e = "," + e + ","; --u > -1;) n = i[u].nodeName.toLowerCase(), e.indexOf("," + n + ",") < 0 && r.setAttributeNS(null, n, i[u].nodeValue);
            return r
        }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), F = function(t, e) {
            for (var n = e ? e.split(",") : [], r = {}, i = n.length; --i > -1;) r[n[i]] = +t.getAttribute(n[i]) || 0;
            return r
        }(t, Jr[w]), "rect" === w ? (u = F.rx, s = F.ry, r = F.x, i = F.y, f = F.width - 2 * u, D = F.height - 2 * s, n = u || s ? "M" + (_ = (d = (c = r + u) + f) + u) + "," + (v = i + s) + " V" + (y = v + D) + " C" + [_, C = y + s * E, g = d + u * E, x = y + s, d, x, d - (d - c) / 3, x, c + (d - c) / 3, x, c, x, p = r + u * (1 - E), x, r, C, r, y, r, y - (y - v) / 3, r, v + (y - v) / 3, r, v, r, m = i + s * (1 - E), p, i, c, i, c + (d - c) / 3, i, d - (d - c) / 3, i, d, i, g, i, _, m, _, v].join(",") + "z" : "M" + (r + f) + "," + i + " v" + D + " h" + -f + " v" + -D + " h" + f + "z") : "circle" === w || "ellipse" === w ? ("circle" === w ? l = (u = s = F.r) * E : (u = F.rx, l = (s = F.ry) * E), n = "M" + ((r = F.cx) + u) + "," + (i = F.cy) + " C" + [r + u, i + l, r + (o = u * E), i + s, r, i + s, r - o, i + s, r - u, i + l, r - u, i, r - u, i - l, r - o, i - s, r, i - s, r + o, i - s, r + u, i - l, r + u, i].join(",") + "z") : "line" === w ? n = "M" + F.x1 + "," + F.y1 + " L" + F.x2 + "," + F.y2 : "polyline" !== w && "polygon" !== w || (n = "M" + (r = (h = (t.getAttribute("points") + "").match(Sr) || []).shift()) + "," + (i = h.shift()) + " L" + h.join(","), "polygon" === w && (n += "," + r + "," + i + "z")), a.setAttribute("d", pi(a._gsRawPath = hi(n))), e && t.parentNode && (t.parentNode.insertBefore(a, t), t.parentNode.removeChild(t)), a) : t
    }

    function ei(t, e, n) {
        var r, i = t[e],
            u = t[e + 2],
            s = t[e + 4];
        return i += (u - i) * n, i += ((u += (s - u) * n) - i) * n, r = u + (s + (t[e + 6] - s) * n - u) * n - i, i = t[e + 1], i += ((u = t[e + 3]) - i) * n, i += ((u += ((s = t[e + 5]) - u) * n) - i) * n, Hr(jr(u + (s + (t[e + 7] - s) * n - u) * n - i, r) * Nr)
    }

    function ni(t, e, n) {
        void 0 === n && (n = 1);
        var r = (e = e || 0) > n,
            i = Math.max(0, ~~(zr(n - e) - 1e-8));
        if (r && (r = n, n = e, e = r, r = 1, i -= i ? 1 : 0), e < 0 || n < 0) {
            var u = 1 + ~~Math.min(e, n);
            e += u, n += u
        }
        var s, a, o, l, h, f, D, p = function(t) {
                for (var e = [], n = 0; n < t.length; n++) e[n] = Qr(t[n], t[n].slice(0));
                return Qr(t, e)
            }(t.totalLength ? t : ii(t)),
            c = n > 1,
            d = si(p, e, Ur, !0),
            g = si(p, n, Wr),
            _ = g.segment,
            m = d.segment,
            v = g.segIndex,
            y = d.segIndex,
            C = g.i,
            x = d.i,
            F = y === v,
            w = C === x && F,
            E = F && x > C || w && d.t > g.t;
        if (c || i) {
            if (Gr(p, y, x, d.t) && (s = 1, y++, w ? E ? g.t /= d.t : (g.t = (g.t - d.t) / (1 - d.t), v++, C = 0) : y <= v + 1 && !E && (v++, F && (C -= x))), g.t ? Gr(p, v, C, g.t) && (E && s && y++, r && v++) : (v--, r && y--), l = [], f = 1 + (h = p.length) * i, D = y, r)
                for (f += (h - (v = (v || h) - 1) + y) % h, o = 0; o < f; o++) Kr(l, p[D]), D = (D || h) - 1;
            else
                for (f += (h - y + v) % h, o = 0; o < f; o++) Kr(l, p[D++ % h]);
            p = l
        } else if (a = 1 === g.t ? 6 : ui(_, C, g.t), e !== n)
            for (s = ui(m, x, w ? d.t / g.t : d.t), F && (a += s), _.splice(C + a + 2), (s || x) && m.splice(0, x + s), o = p.length; o--;)(o < y || o > v) && p.splice(o, 1);
        else _.angle = ei(_, C + a, 0), d = _[C += a], g = _[C + 1], _.length = _.totalLength = 0, _.totalPoints = p.totalPoints = 8, _.push(d, g, d, g, d, g, d, g);
        return r && function(t, e) {
            var n = t.length;
            for (e || t.reverse(); n--;) t[n].reversed || $r(t[n])
        }(p, c || i), p.totalLength = 0, p
    }

    function ri(t, e, n) {
        e = e || 0, t.samples || (t.samples = [], t.lookup = []);
        var r, i, u, s, a, o, l, h, f, D, p, c, d, g, _, m, v, y = ~~t.resolution || 12,
            C = 1 / y,
            x = n ? e + 6 * n + 1 : t.length,
            F = t[e],
            w = t[e + 1],
            E = e ? e / 6 * y : 0,
            b = t.samples,
            T = t.lookup,
            A = (e ? t.minLength : 1e8) || 1e8,
            M = b[E + n * y - 1],
            P = e ? b[E - 1] : 0;
        for (b.length = T.length = 0, i = e + 2; i < x; i += 6) {
            if (u = t[i + 4] - F, s = t[i + 2] - F, a = t[i] - F, h = t[i + 5] - w, f = t[i + 3] - w, D = t[i + 1] - w, o = l = p = c = 0, zr(u) < 1e-5 && zr(h) < 1e-5 && zr(a) + zr(D) < 1e-5) t.length > 8 && (t.splice(i, 6), i -= 6, x -= 6);
            else
                for (r = 1; r <= y; r++) o = l - (l = ((g = C * r) * g * u + 3 * (d = 1 - g) * (g * s + d * a)) * g), p = c - (c = (g * g * h + 3 * d * (g * f + d * D)) * g), (m = Yr(p * p + o * o)) < A && (A = m), P += m, b[E++] = P;
            F += u, w += h
        }
        if (M)
            for (M -= P; E < b.length; E++) b[E] += M;
        if (b.length && A)
            for (t.totalLength = v = b[b.length - 1] || 0, t.minLength = A, m = _ = 0, r = 0; r < v; r += A) T[m++] = b[_] < r ? ++_ : _;
        else t.totalLength = b[0] = 0;
        return e ? P - b[e / 2 - 1] : P
    }

    function ii(t, e) {
        var n, r, i;
        for (i = n = r = 0; i < t.length; i++) t[i].resolution = ~~e || 12, r += t[i].length, n += ri(t[i]);
        return t.totalPoints = r, t.totalLength = n, t
    }

    function ui(t, e, n) {
        if (n <= 0 || n >= 1) return 0;
        var r = t[e],
            i = t[e + 1],
            u = t[e + 2],
            s = t[e + 3],
            a = t[e + 4],
            o = t[e + 5],
            l = r + (u - r) * n,
            h = u + (a - u) * n,
            f = i + (s - i) * n,
            D = s + (o - s) * n,
            p = l + (h - l) * n,
            c = f + (D - f) * n,
            d = a + (t[e + 6] - a) * n,
            g = o + (t[e + 7] - o) * n;
        return h += (d - h) * n, D += (g - D) * n, t.splice(e + 2, 4, Hr(l), Hr(f), Hr(p), Hr(c), Hr(p + (h - p) * n), Hr(c + (D - c) * n), Hr(h), Hr(D), Hr(d), Hr(g)), t.samples && t.samples.splice(e / 6 * t.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6
    }

    function si(t, e, n, r) {
        n = n || {}, t.totalLength || ii(t), (e < 0 || e > 1) && (e = qr(e));
        var i, u, s, a, o, l, h, f = 0,
            D = t[0];
        if (t.length > 1) {
            for (s = t.totalLength * e, o = l = 0;
                (o += t[l++].totalLength) < s;) f = l;
            e = (s - (a = o - (D = t[f]).totalLength)) / (o - a) || 0
        }
        return i = D.samples, u = D.resolution, s = D.totalLength * e, a = (l = D.lookup[~~(s / D.minLength)] || 0) ? i[l - 1] : 0, (o = i[l]) < s && (a = o, o = i[++l]), h = 1 / u * ((s - a) / (o - a) + l % u), l = 6 * ~~(l / u), r && 1 === h && (l + 6 < D.length ? (l += 6, h = 0) : f + 1 < t.length && (l = h = 0, D = t[++f])), n.t = h, n.i = l, n.path = t, n.segment = D, n.segIndex = f, n
    }

    function ai(t, e, n, r) {
        var i, u, s, a, o, l, h, f, D, p = t[0],
            c = r || {};
        if ((e < 0 || e > 1) && (e = qr(e)), t.length > 1) {
            for (s = t.totalLength * e, o = l = 0;
                (o += t[l++].totalLength) < s;) p = t[l];
            e = (s - (a = o - p.totalLength)) / (o - a) || 0
        }
        return i = p.samples, u = p.resolution, s = p.totalLength * e, a = (l = p.lookup[~~(s / p.minLength)] || 0) ? i[l - 1] : 0, (o = i[l]) < s && (a = o, o = i[++l]), D = 1 - (h = 1 / u * ((s - a) / (o - a) + l % u) || 0), f = p[l = 6 * ~~(l / u)], c.x = Hr((h * h * (p[l + 6] - f) + 3 * D * (h * (p[l + 4] - f) + D * (p[l + 2] - f))) * h + f), c.y = Hr((h * h * (p[l + 7] - (f = p[l + 1])) + 3 * D * (h * (p[l + 5] - f) + D * (p[l + 3] - f))) * h + f), n && (c.angle = p.totalLength ? ei(p, l, h >= 1 ? 1 - 1e-9 : h || 1e-9) : p.angle || 0), c
    }

    function oi(t, e, n, r, i, u, s) {
        for (var a, o, l, h, f, D = t.length; --D > -1;)
            for (o = (a = t[D]).length, l = 0; l < o; l += 2) h = a[l], f = a[l + 1], a[l] = h * e + f * r + u, a[l + 1] = h * n + f * i + s;
        return t._dirty = 1, t
    }

    function li(t, e, n, r, i, u, s, a, o) {
        if (t !== a || e !== o) {
            n = zr(n), r = zr(r);
            var l = i % 360 * Lr,
                h = Ir(l),
                f = Rr(l),
                D = Math.PI,
                p = 2 * D,
                c = (t - a) / 2,
                d = (e - o) / 2,
                g = h * c + f * d,
                _ = -f * c + h * d,
                m = g * g,
                v = _ * _,
                y = m / (n * n) + v / (r * r);
            y > 1 && (n = Yr(y) * n, r = Yr(y) * r);
            var C = n * n,
                x = r * r,
                F = (C * x - C * v - x * m) / (C * v + x * m);
            F < 0 && (F = 0);
            var w = (u === s ? -1 : 1) * Yr(F),
                E = w * (n * _ / r),
                b = w * (-r * g / n),
                T = (t + a) / 2 + (h * E - f * b),
                A = (e + o) / 2 + (f * E + h * b),
                M = (g - E) / n,
                P = (_ - b) / r,
                B = (-g - E) / n,
                S = (-_ - b) / r,
                O = M * M + P * P,
                k = (P < 0 ? -1 : 1) * Math.acos(M / Yr(O)),
                L = (M * S - P * B < 0 ? -1 : 1) * Math.acos((M * B + P * S) / Yr(O * (B * B + S * S)));
            isNaN(L) && (L = D), !s && L > 0 ? L -= p : s && L < 0 && (L += p), k %= p, L %= p;
            var N, R = Math.ceil(zr(L) / (p / 4)),
                I = [],
                z = L / R,
                Y = 4 / 3 * Rr(z / 2) / (1 + Ir(z / 2)),
                j = h * n,
                X = f * n,
                V = f * -r,
                U = h * r;
            for (N = 0; N < R; N++) g = Ir(i = k + N * z), _ = Rr(i), M = Ir(i += z), P = Rr(i), I.push(g - Y * _, _ + Y * g, M + Y * P, P - Y * M, M, P);
            for (N = 0; N < I.length; N += 2) g = I[N], _ = I[N + 1], I[N] = g * j + _ * V + T, I[N + 1] = g * X + _ * U + A;
            return I[N - 2] = a, I[N - 1] = o, I
        }
    }

    function hi(t) {
        var e, n, r, i, u, s, a, o, l, h, f, D, p, c, d, g = (t + "").replace(Or, (function(t) {
                var e = +t;
                return e < 1e-4 && e > -1e-4 ? 0 : e
            })).match(Br) || [],
            _ = [],
            m = 0,
            v = 0,
            y = g.length,
            C = 0,
            x = "ERROR: malformed path: " + t,
            F = function(t, e, n, r) {
                h = (n - t) / 3, f = (r - e) / 3, a.push(t + h, e + f, n - h, r - f, n, r)
            };
        if (!t || !isNaN(g[0]) || isNaN(g[1])) return console.log(x), _;
        for (e = 0; e < y; e++)
            if (p = u, isNaN(g[e]) ? s = (u = g[e].toUpperCase()) !== g[e] : e--, r = +g[e + 1], i = +g[e + 2], s && (r += m, i += v), e || (o = r, l = i), "M" === u) a && (a.length < 8 ? _.length -= 1 : C += a.length), m = o = r, v = l = i, a = [r, i], _.push(a), e += 2, u = "L";
            else if ("C" === u) a || (a = [0, 0]), s || (m = v = 0), a.push(r, i, m + 1 * g[e + 3], v + 1 * g[e + 4], m += 1 * g[e + 5], v += 1 * g[e + 6]), e += 6;
        else if ("S" === u) h = m, f = v, "C" !== p && "S" !== p || (h += m - a[a.length - 4], f += v - a[a.length - 3]), s || (m = v = 0), a.push(h, f, r, i, m += 1 * g[e + 3], v += 1 * g[e + 4]), e += 4;
        else if ("Q" === u) h = m + 2 / 3 * (r - m), f = v + 2 / 3 * (i - v), s || (m = v = 0), m += 1 * g[e + 3], v += 1 * g[e + 4], a.push(h, f, m + 2 / 3 * (r - m), v + 2 / 3 * (i - v), m, v), e += 4;
        else if ("T" === u) h = m - a[a.length - 4], f = v - a[a.length - 3], a.push(m + h, v + f, r + 2 / 3 * (m + 1.5 * h - r), i + 2 / 3 * (v + 1.5 * f - i), m = r, v = i), e += 2;
        else if ("H" === u) F(m, v, m = r, v), e += 1;
        else if ("V" === u) F(m, v, m, v = r + (s ? v - m : 0)), e += 1;
        else if ("L" === u || "Z" === u) "Z" === u && (r = o, i = l, a.closed = !0), ("L" === u || zr(m - r) > .5 || zr(v - i) > .5) && (F(m, v, r, i), "L" === u && (e += 2)), m = r, v = i;
        else if ("A" === u) {
            if (c = g[e + 4], d = g[e + 5], h = g[e + 6], f = g[e + 7], n = 7, c.length > 1 && (c.length < 3 ? (f = h, h = d, n--) : (f = d, h = c.substr(2), n -= 2), d = c.charAt(1), c = c.charAt(0)), D = li(m, v, +g[e + 1], +g[e + 2], +g[e + 3], +c, +d, (s ? m : 0) + 1 * h, (s ? v : 0) + 1 * f), e += n, D)
                for (n = 0; n < D.length; n++) a.push(D[n]);
            m = a[a.length - 2], v = a[a.length - 1]
        } else console.log(x);
        return (e = a.length) < 6 ? (_.pop(), e = 0) : a[0] === a[e - 2] && a[1] === a[e - 1] && (a.closed = !0), _.totalPoints = C + e, _
    }

    function fi(t, e) {
        void 0 === e && (e = 1);
        for (var n = t[0], r = 0, i = [n, r], u = 2; u < t.length; u += 2) i.push(n, r, t[u], r = (t[u] - n) * e / 2, n = t[u], -r);
        return i
    }

    function Di(t, e, n) {
        var r, i, u, s, a, o, l, h, f, D, p, c, d, g, _ = t.length - 2,
            m = +t[0],
            v = +t[1],
            y = +t[2],
            C = +t[3],
            x = [m, v, m, v],
            F = y - m,
            w = C - v;
        for (isNaN(n) && (n = Math.PI / 10), e = e || 0 === e ? +e : 1, a = 2; a < _; a += 2) r = m, i = v, m = y, v = C, c = (o = F) * o + (h = w) * h, d = (F = (y = +t[a + 2]) - m) * F + (w = (C = +t[a + 3]) - v) * w, g = (l = y - r) * l + (f = C - i) * f, p = (u = Math.acos((c + d - g) / Yr(4 * c * d))) / Math.PI * e, D = Yr(c) * p, p *= Yr(d), m === r && v === i || (u > n ? (s = jr(f, l), x.push(Hr(m - Ir(s) * D), Hr(v - Rr(s) * D), Hr(m), Hr(v), Hr(m + Ir(s) * p), Hr(v + Rr(s) * p))) : (s = jr(h, o), x.push(Hr(m - Ir(s) * D), Hr(v - Rr(s) * D)), s = jr(w, F), x.push(Hr(m), Hr(v), Hr(m + Ir(s) * p), Hr(v + Rr(s) * p))));
        return x.push(Hr(y), Hr(C), Hr(y), Hr(C)), x
    }

    function pi(t) {
        Vr(t[0]) && (t = [t]);
        var e, n, r, i, u = "",
            s = t.length;
        for (n = 0; n < s; n++) {
            for (i = t[n], u += "M" + Hr(i[0]) + "," + Hr(i[1]) + " C", e = i.length, r = 2; r < e; r++) u += Hr(i[r++]) + "," + Hr(i[r++]) + " " + Hr(i[r++]) + "," + Hr(i[r++]) + " " + Hr(i[r++]) + "," + Hr(i[r]) + " ";
            i.closed && (u += "z")
        }
        return u
    }
    /*!
     * CustomEase 3.2.6
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var ci, di, gi = function() {
            return ci || "undefined" != typeof window && (ci = window.gsap) && ci.registerPlugin && ci
        },
        _i = function() {
            (ci = gi()) ? (ci.registerEase("_CE", xi.create), di = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
        },
        mi = function(t) {
            return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3
        },
        vi = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        yi = /[cLlsSaAhHvVtTqQ]/g,
        Ci = function t(e, n, r, i, u, s, a, o, l, h, f) {
            var D, p = (e + r) / 2,
                c = (n + i) / 2,
                d = (r + u) / 2,
                g = (i + s) / 2,
                _ = (u + a) / 2,
                m = (s + o) / 2,
                v = (p + d) / 2,
                y = (c + g) / 2,
                C = (d + _) / 2,
                x = (g + m) / 2,
                F = (v + C) / 2,
                w = (y + x) / 2,
                E = a - e,
                b = o - n,
                T = Math.abs((r - a) * b - (i - o) * E),
                A = Math.abs((u - a) * b - (s - o) * E);
            return h || (h = [{
                x: e,
                y: n
            }, {
                x: a,
                y: o
            }], f = 1), h.splice(f || h.length - 1, 0, {
                x: F,
                y: w
            }), (T + A) * (T + A) > l * (E * E + b * b) && (D = h.length, t(e, n, p, c, v, y, F, w, l, h, f), t(F, w, C, x, _, m, a, o, l, h, f + 1 + (h.length - D))), h
        },
        xi = function() {
            function t(t, e, n) {
                di || _i(), this.id = t, this.setData(e, n)
            }
            var e = t.prototype;
            return e.setData = function(t, e) {
                e = e || {};
                var n, r, i, u, s, a, o, l, h, f = (t = t || "0,0,1,1").match(vi),
                    D = 1,
                    p = [],
                    c = [],
                    d = e.precision || 1,
                    g = d <= 1;
                if (this.data = t, (yi.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (f = hi(t)[0]), 4 === (n = f.length)) f.unshift(0, 0), f.push(1, 1), n = 8;
                else if ((n - 2) % 6) throw "Invalid CustomEase";
                for (0 == +f[0] && 1 == +f[n - 2] || function(t, e, n) {
                        n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
                        var r, i = -1 * +t[0],
                            u = -n,
                            s = t.length,
                            a = 1 / (+t[s - 2] + i),
                            o = -e || (Math.abs(+t[s - 1] - +t[1]) < .01 * (+t[s - 2] - +t[0]) ? function(t) {
                                var e, n = t.length,
                                    r = 1e20;
                                for (e = 1; e < n; e += 6) + t[e] < r && (r = +t[e]);
                                return r
                            }(t) + u : +t[s - 1] + u);
                        for (o = o ? 1 / o : -a, r = 0; r < s; r += 2) t[r] = (+t[r] + i) * a, t[r + 1] = (+t[r + 1] + u) * o
                    }(f, e.height, e.originY), this.segment = f, u = 2; u < n; u += 6) r = {
                    x: +f[u - 2],
                    y: +f[u - 1]
                }, i = {
                    x: +f[u + 4],
                    y: +f[u + 5]
                }, p.push(r, i), Ci(r.x, r.y, +f[u], +f[u + 1], +f[u + 2], +f[u + 3], i.x, i.y, 1 / (2e5 * d), p, p.length - 1);
                for (n = p.length, u = 0; u < n; u++) o = p[u], l = p[u - 1] || o, o.x > l.x || l.y !== o.y && l.x === o.x || o === l ? (l.cx = o.x - l.x, l.cy = o.y - l.y, l.n = o, l.nx = o.x, g && u > 1 && Math.abs(l.cy / l.cx - p[u - 2].cy / p[u - 2].cx) > 2 && (g = 0), l.cx < D && (l.cx ? D = l.cx : (l.cx = .001, u === n - 1 && (l.x -= .001, D = Math.min(D, .001), g = 0)))) : (p.splice(u--, 1), n--);
                if (s = 1 / (n = 1 / D + 1 | 0), a = 0, o = p[0], g) {
                    for (u = 0; u < n; u++) h = u * s, o.nx < h && (o = p[++a]), r = o.y + (h - o.x) / o.cx * o.cy, c[u] = {
                        x: h,
                        cx: s,
                        y: r,
                        cy: 0,
                        nx: 9
                    }, u && (c[u - 1].cy = r - c[u - 1].y);
                    c[n - 1].cy = p[p.length - 1].y - r
                } else {
                    for (u = 0; u < n; u++) o.nx < u * s && (o = p[++a]), c[u] = o;
                    a < p.length - 1 && (c[u - 1] = p[p.length - 2])
                }
                return this.ease = function(t) {
                    var e = c[t * n | 0] || c[n - 1];
                    return e.nx < t && (e = e.n), e.y + (t - e.x) / e.cx * e.cy
                }, this.ease.custom = this, this.id && ci.registerEase(this.id, this.ease), this
            }, e.getSVGData = function(e) {
                return t.getSVGData(this, e)
            }, t.create = function(e, n, r) {
                return new t(e, n, r).ease
            }, t.register = function(t) {
                ci = t, _i()
            }, t.get = function(t) {
                return ci.parseEase(t)
            }, t.getSVGData = function(e, n) {
                var r, i, u, s, a, o, l, h, f, D, p = (n = n || {}).width || 100,
                    c = n.height || 100,
                    d = n.x || 0,
                    g = (n.y || 0) + c,
                    _ = ci.utils.toArray(n.path)[0];
                if (n.invert && (c = -c, g = 0), "string" == typeof e && (e = ci.parseEase(e)), e.custom && (e = e.custom), e instanceof t) r = pi(oi([e.segment], p, 0, 0, -c, d, g));
                else {
                    for (r = [d, g], s = 1 / (l = Math.max(5, 200 * (n.precision || 1))), h = 5 / (l += 2), f = mi(d + s * p), i = ((D = mi(g + e(s) * -c)) - g) / (f - d), u = 2; u < l; u++) a = mi(d + u * s * p), o = mi(g + e(u * s) * -c), (Math.abs((o - D) / (a - f) - i) > h || u === l - 1) && (r.push(f, D), i = (o - D) / (a - f)), f = a, D = o;
                    r = "M" + r.join(",")
                }
                return _ && _.setAttribute("d", r), r
            }, t
        }();
    gi() && ci.registerPlugin(xi), xi.version = "3.2.6";
    /*!
     * CustomWiggle 3.2.6
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Fi, wi, Ei, bi = function() {
            return Fi || "undefined" != typeof window && (Fi = window.gsap) && Fi.registerPlugin && Fi
        },
        Ti = {
            easeOut: "M0,1,C0.7,1,0.6,0,1,0",
            easeInOut: "M0,0,C0.1,0,0.24,1,0.444,1,0.644,1,0.6,0,1,0",
            anticipate: "M0,0,C0,0.222,0.024,0.386,0,0.4,0.18,0.455,0.65,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1",
            uniform: "M0,0,C0,0.95,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0"
        },
        Ai = function(t) {
            return t
        },
        Mi = function(t) {
            if (!wi)
                if (Fi = bi(), Ei = Fi && Fi.parseEase("_CE")) {
                    for (var e in Ti) Ti[e] = Ei("", Ti[e]);
                    wi = 1, Bi("wiggle").config = function(t) {
                        return "object" == typeof t ? Bi("", t) : Bi("wiggle(" + t + ")", {
                            wiggles: +t
                        })
                    }
                } else t && console.warn("Please gsap.registerPlugin(CustomEase, CustomWiggle)")
        },
        Pi = function(t, e) {
            return "function" != typeof t && (t = Fi.parseEase(t) || Ei("", t)), t.custom || !e ? t : function(e) {
                return 1 - t(e)
            }
        },
        Bi = function(t, e) {
            wi || Mi(1);
            var n, r, i, u, s, a, o, l, h, f = 0 | ((e = e || {}).wiggles || 10),
                D = 1 / f,
                p = D / 2,
                c = "anticipate" === e.type,
                d = Ti[e.type] || Ti.easeOut,
                g = Ai;
            if (c && (g = d, d = Ti.easeOut), e.timingEase && (g = Pi(e.timingEase)), e.amplitudeEase && (d = Pi(e.amplitudeEase, !0)), l = [0, 0, (a = g(p)) / 4, 0, a / 2, o = c ? -d(p) : d(p), a, o], "random" === e.type) {
                for (l.length = 4, n = g(D), r = 2 * Math.random() - 1, h = 2; h < f; h++) p = n, o = r, n = g(D * h), r = 2 * Math.random() - 1, i = Math.atan2(r - l[l.length - 3], n - l[l.length - 4]), u = Math.cos(i) * D, s = Math.sin(i) * D, l.push(p - u, o - s, p, o, p + u, o + s);
                l.push(n, 0, 1, 0)
            } else {
                for (h = 1; h < f; h++) l.push(g(p + D / 2), o), p += D, o = (o > 0 ? -1 : 1) * d(h * D), a = g(p), l.push(g(p - D / 2), o, a, o);
                l.push(g(p + D / 4), o, g(p + D / 4), 0, 1, 0)
            }
            for (h = l.length; --h > -1;) l[h] = ~~(1e3 * l[h]) / 1e3;
            return l[2] = "C" + l[2], Ei(t, "M" + l.join(","))
        },
        Si = function() {
            function t(t, e) {
                this.ease = Bi(t, e)
            }
            return t.create = function(t, e) {
                return Bi(t, e)
            }, t.register = function(t) {
                Fi = t, Mi()
            }, t
        }();
    bi() && Fi.registerPlugin(Si), Si.version = "3.2.6";
    /*!
     * DrawSVGPlugin 3.2.6
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Oi, ki, Li, Ni, Ri, Ii = function() {
            return "undefined" != typeof window
        },
        zi = function() {
            return Oi || Ii() && (Oi = window.gsap) && Oi.registerPlugin && Oi
        },
        Yi = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        ji = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"]
        },
        Xi = function(t) {
            return Math.round(1e4 * t) / 1e4
        },
        Vi = function(t) {
            return parseFloat(t || 0)
        },
        Ui = function(t, e) {
            return Vi(t.getAttribute(e))
        },
        Wi = Math.sqrt,
        qi = function(t, e, n, r, i, u) {
            return Wi(Math.pow((Vi(n) - Vi(t)) * i, 2) + Math.pow((Vi(r) - Vi(e)) * u, 2))
        },
        Hi = function(t) {
            return console.warn(t)
        },
        Gi = function(t) {
            return "non-scaling-stroke" === t.getAttribute("vector-effect")
        },
        Qi = function(t) {
            if (!(t = ki(t)[0])) return 0;
            var e, n, r, i, u, s, a, o = t.tagName.toLowerCase(),
                l = t.style,
                h = 1,
                f = 1;
            Gi(t) && (f = t.getScreenCTM(), h = Wi(f.a * f.a + f.b * f.b), f = Wi(f.d * f.d + f.c * f.c));
            try {
                n = t.getBBox()
            } catch (t) {
                Hi("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
            }
            var D = n || {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                p = D.x,
                c = D.y,
                d = D.width,
                g = D.height;
            if (n && (d || g) || !ji[o] || (d = Ui(t, ji[o][0]), g = Ui(t, ji[o][1]), "rect" !== o && "line" !== o && (d *= 2, g *= 2), "line" === o && (p = Ui(t, "x1"), c = Ui(t, "y1"), d = Math.abs(d - p), g = Math.abs(g - c))), "path" === o) i = l.strokeDasharray, l.strokeDasharray = "none", e = t.getTotalLength() || 0, h !== f && Hi("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), e *= (h + f) / 2, l.strokeDasharray = i;
            else if ("rect" === o) e = 2 * d * h + 2 * g * f;
            else if ("line" === o) e = qi(p, c, p + d, c + g, h, f);
            else if ("polyline" === o || "polygon" === o)
                for (r = t.getAttribute("points").match(Yi) || [], "polygon" === o && r.push(r[0], r[1]), e = 0, u = 2; u < r.length; u += 2) e += qi(r[u - 2], r[u - 1], r[u], r[u + 1], h, f) || 0;
            else "circle" !== o && "ellipse" !== o || (s = d / 2 * h, a = g / 2 * f, e = Math.PI * (3 * (s + a) - Wi((3 * s + a) * (s + 3 * a))));
            return e || 0
        },
        Ki = function(t, e) {
            if (!(t = ki(t)[0])) return [0, 0];
            e || (e = Qi(t) + 1);
            var n = Li.getComputedStyle(t),
                r = n.strokeDasharray || "",
                i = Vi(n.strokeDashoffset),
                u = r.indexOf(",");
            return u < 0 && (u = r.indexOf(" ")), (r = u < 0 ? e : Vi(r.substr(0, u)) || 1e-5) > e && (r = e), [Math.max(0, -i), Math.max(0, r - i)]
        },
        Zi = function() {
            Ii() && (document, Li = window, Ri = Oi = zi(), ki = Oi.utils.toArray, Ni = -1 !== ((Li.navigator || {}).userAgent || "").indexOf("Edge"))
        },
        $i = {
            version: "3.2.6",
            name: "drawSVG",
            register: function(t) {
                Oi = t, Zi()
            },
            init: function(t, e, n, r, i) {
                if (!t.getBBox) return !1;
                Ri || Zi();
                var u, s, a, o, l = Qi(t) + 1;
                return this._style = t.style, this._target = t, e + "" == "true" ? e = "0 100%" : e ? -1 === (e + "").indexOf(" ") && (e = "0 " + e) : e = "0 0", s = function(t, e, n) {
                    var r, i, u = t.indexOf(" ");
                    return u < 0 ? (r = void 0 !== n ? n + "" : t, i = t) : (r = t.substr(0, u), i = t.substr(u + 1)), (r = ~r.indexOf("%") ? Vi(r) / 100 * e : Vi(r)) > (i = ~i.indexOf("%") ? Vi(i) / 100 * e : Vi(i)) ? [i, r] : [r, i]
                }(e, l, (u = Ki(t, l))[0]), this._length = Xi(l + 10), 0 === u[0] && 0 === s[0] ? (a = Math.max(1e-5, s[1] - l), this._dash = Xi(l + a), this._offset = Xi(l - u[1] + a), this._offsetPT = this.add(this, "_offset", this._offset, Xi(l - s[1] + a))) : (this._dash = Xi(u[1] - u[0]) || 1e-6, this._offset = Xi(-u[0]), this._dashPT = this.add(this, "_dash", this._dash, Xi(s[1] - s[0]) || 1e-5), this._offsetPT = this.add(this, "_offset", this._offset, Xi(-s[0]))), Ni && (o = Li.getComputedStyle(t)).strokeLinecap !== o.strokeLinejoin && (s = Vi(o.strokeMiterlimit), this.add(t.style, "strokeMiterlimit", s, s + .01)), this._live = Gi(t) || ~(e + "").indexOf("live"), this._props.push("drawSVG"), 1
            },
            render: function(t, e) {
                var n, r, i, u, s = e._pt,
                    a = e._style;
                if (s) {
                    for (e._live && (n = Qi(e._target) + 11) !== e._length && (r = n / e._length, e._length = n, e._offsetPT.s *= r, e._offsetPT.c *= r, e._dashPT ? (e._dashPT.s *= r, e._dashPT.c *= r) : e._dash *= r); s;) s.r(t, s.d), s = s._next;
                    i = e._dash, u = e._offset, n = e._length, a.strokeDashoffset = e._offset, 1 !== t && t ? a.strokeDasharray = i + "px," + n + "px" : (i - u < .001 && n - i <= 10 && (a.strokeDashoffset = u + 1), a.strokeDasharray = u < .001 && n - i <= 10 ? "none" : u === i ? "0px, 999999px" : i + "px," + n + "px")
                }
            },
            getLength: Qi,
            getPosition: Ki
        };
    zi() && Oi.registerPlugin($i);
    /*!
     * matrix 3.2.6
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ji, tu, eu, nu, ru, iu, uu, su, au = "transform",
        ou = au + "Origin",
        lu = function(t) {
            var e = t.ownerDocument || t;
            !(au in t.style) && "msTransform" in t.style && (ou = (au = "msTransform") + "Origin");
            for (; e.parentNode && (e = e.parentNode););
            if (tu = window, uu = new gu, e) {
                Ji = e, eu = e.documentElement, nu = e.body;
                var n = e.createElement("div"),
                    r = e.createElement("div");
                nu.appendChild(n), n.appendChild(r), n.style.position = "static", n.style[au] = "translate3d(0,0,1px)", su = r.offsetParent !== n, nu.removeChild(n)
            }
            return e
        },
        hu = [],
        fu = [],
        Du = function(t) {
            return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
        },
        pu = function t(e, n) {
            if (e.parentNode && (Ji || lu(e))) {
                var r = Du(e),
                    i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                    u = r ? n ? "rect" : "g" : "div",
                    s = 2 !== n ? 0 : 100,
                    a = 3 === n ? 100 : 0,
                    o = "position:absolute;display:block;pointer-events:none;",
                    l = Ji.createElementNS ? Ji.createElementNS(i.replace(/^https/, "http"), u) : Ji.createElement(u);
                return n && (r ? (iu || (iu = t(e)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + s + "," + a + ")"), iu.appendChild(l)) : (ru || ((ru = t(e)).style.cssText = o), l.style.cssText = o + "width:0.1px;height:0.1px;top:" + a + "px;left:" + s + "px", ru.appendChild(l))), l
            }
            throw "Need document and parent."
        },
        cu = function(t, e) {
            var n, r, i, u, s, a = Du(t),
                o = t === a,
                l = a ? hu : fu;
            if (t === tu) return t;
            if (l.length || l.push(pu(t, 1), pu(t, 2), pu(t, 3)), n = a ? iu : ru, a) i = o ? {
                x: 0,
                y: 0
            } : t.getBBox(), (r = t.transform ? t.transform.baseVal : {}).numberOfItems ? (u = (r = r.numberOfItems > 1 ? function(t) {
                for (var e = new gu, n = 0; n < t.numberOfItems; n++) e.multiply(t.getItem(n).matrix);
                return e
            }(r) : r.getItem(0).matrix).a * i.x + r.c * i.y, s = r.b * i.x + r.d * i.y) : (r = uu, u = i.x, s = i.y), e && "g" === t.tagName.toLowerCase() && (u = s = 0), n.setAttribute("transform", "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + (r.e + u) + "," + (r.f + s) + ")"), (o ? a : t.parentNode).appendChild(n);
            else {
                if (u = s = 0, su)
                    for (r = t.offsetParent, i = t; i && (i = i.parentNode) && i !== r && i.parentNode;)(tu.getComputedStyle(i)[au] + "").length > 4 && (u = i.offsetLeft, s = i.offsetTop, i = 0);
                (i = n.style).top = t.offsetTop - s + "px", i.left = t.offsetLeft - u + "px", r = tu.getComputedStyle(t), i[au] = r[au], i[ou] = r[ou], i.border = r.border, i.borderLeftStyle = r.borderLeftStyle, i.borderTopStyle = r.borderTopStyle, i.borderLeftWidth = r.borderLeftWidth, i.borderTopWidth = r.borderTopWidth, i.position = "fixed" === r.position ? "fixed" : "absolute", t.parentNode.appendChild(n)
            }
            return n
        },
        du = function(t, e, n, r, i, u, s) {
            return t.a = e, t.b = n, t.c = r, t.d = i, t.e = u, t.f = s, t
        },
        gu = function() {
            function t(t, e, n, r, i, u) {
                void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 1), void 0 === i && (i = 0), void 0 === u && (u = 0), du(this, t, e, n, r, i, u)
            }
            var e = t.prototype;
            return e.inverse = function() {
                var t = this.a,
                    e = this.b,
                    n = this.c,
                    r = this.d,
                    i = this.e,
                    u = this.f,
                    s = t * r - e * n;
                return du(this, r / s, -e / s, -n / s, t / s, (n * u - r * i) / s, -(t * u - e * i) / s)
            }, e.multiply = function(t) {
                var e = this.a,
                    n = this.b,
                    r = this.c,
                    i = this.d,
                    u = this.e,
                    s = this.f,
                    a = t.a,
                    o = t.c,
                    l = t.b,
                    h = t.d,
                    f = t.e,
                    D = t.f;
                return du(this, a * e + l * r, a * n + l * i, o * e + h * r, o * n + h * i, u + f * e + D * r, s + f * n + D * i)
            }, e.clone = function() {
                return new t(this.a, this.b, this.c, this.d, this.e, this.f)
            }, e.equals = function(t) {
                var e = this.a,
                    n = this.b,
                    r = this.c,
                    i = this.d,
                    u = this.e,
                    s = this.f;
                return e === t.a && n === t.b && r === t.c && i === t.d && u === t.e && s === t.f
            }, e.apply = function(t, e) {
                void 0 === e && (e = {});
                var n = t.x,
                    r = t.y,
                    i = this.a,
                    u = this.b,
                    s = this.c,
                    a = this.d,
                    o = this.e,
                    l = this.f;
                return e.x = n * i + r * s + o || 0, e.y = n * u + r * a + l || 0, e
            }, t
        }();

    function _u(t, e, n) {
        if (!t || !t.parentNode || (Ji || lu(t)).documentElement === t) return new gu;
        var r = Du(t) ? hu : fu,
            i = cu(t, n),
            u = r[0].getBoundingClientRect(),
            s = r[1].getBoundingClientRect(),
            a = r[2].getBoundingClientRect(),
            o = i.parentNode,
            l = function t(e) {
                return "fixed" === tu.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
            }(t),
            h = new gu((s.left - u.left) / 100, (s.top - u.top) / 100, (a.left - u.left) / 100, (a.top - u.top) / 100, u.left + (l ? 0 : tu.pageXOffset || Ji.scrollLeft || eu.scrollLeft || nu.scrollLeft || 0), u.top + (l ? 0 : tu.pageYOffset || Ji.scrollTop || eu.scrollTop || nu.scrollTop || 0));
        return o.removeChild(i), e ? h.inverse() : h
    }
    /*!
     * MotionPathPlugin 3.2.6
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var mu, vu, yu, Cu, xu = ["x", "translateX", "left", "marginLeft"],
        Fu = ["y", "translateY", "top", "marginTop"],
        wu = Math.PI / 180,
        Eu = function(t, e, n, r) {
            for (var i = e.length, u = r, s = 0; s < i; s++) t[u] = parseFloat(e[s][n]), u += 2;
            return t
        },
        bu = function(t, e, n) {
            return parseFloat(t._gsap.get(t, e, n || "px")) || 0
        },
        Tu = function(t) {
            var e, n = t[0],
                r = t[1];
            for (e = 2; e < t.length; e += 2) n = t[e] += n, r = t[e + 1] += r
        },
        Au = function(t, e, n, r, i, u, s) {
            "cubic" === s.type ? e = [e] : (e.unshift(bu(n, r, s.unitX), i ? bu(n, i, s.unitY) : 0), s.relative && Tu(e), e = [(i ? Di : fi)(e, s.curviness)]);
            return e = u(Ou(e, n, s)), ku(t, n, r, e, "x", s.unitX), i && ku(t, n, i, e, "y", s.unitY), ii(e, s.resolution || (0 === s.curviness ? 20 : 12))
        },
        Mu = function(t) {
            return t
        },
        Pu = /[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,
        Bu = function(t, e, n) {
            var r, i, u, s = _u(t);
            return "svg" === (t.tagName + "").toLowerCase() ? (i = (r = t.viewBox.baseVal).x, u = r.y, r.width || (r = {
                width: +t.getAttribute("width"),
                height: +t.getAttribute("height")
            })) : (r = e && t.getBBox && t.getBBox(), i = u = 0), e && "auto" !== e && (i += e.push ? e[0] * (r ? r.width : t.offsetWidth || 0) : e.x, u += e.push ? e[1] * (r ? r.height : t.offsetHeight || 0) : e.y), n.apply(i || u ? s.apply({
                x: i,
                y: u
            }) : {
                x: s.e,
                y: s.f
            })
        },
        Su = function(t, e, n, r) {
            var i, u = _u(t.parentNode, !0, !0),
                s = u.clone().multiply(_u(e)),
                a = Bu(t, n, u),
                o = Bu(e, r, u),
                l = o.x,
                h = o.y;
            return s.e = s.f = 0, "auto" === r && e.getTotalLength && "path" === e.tagName.toLowerCase() && (i = e.getAttribute("d").match(Pu) || [], l += (i = s.apply({
                x: +i[0],
                y: +i[1]
            })).x, h += i.y), (i || e.getBBox && t.getBBox) && (l -= (i = s.apply(e.getBBox())).x, h -= i.y), s.e = l - a.x, s.f = h - a.y, s
        },
        Ou = function(t, e, n) {
            var r, i, u, s = n.align,
                a = n.matrix,
                o = n.offsetX,
                l = n.offsetY,
                h = n.alignOrigin,
                f = t[0][0],
                D = t[0][1],
                p = bu(e, "x"),
                c = bu(e, "y");
            return t && t.length ? (s && ("self" === s || (r = Cu(s)[0] || e) === e ? oi(t, 1, 0, 0, 1, p - f, c - D) : (h && !1 !== h[2] ? mu.set(e, {
                transformOrigin: 100 * h[0] + "% " + 100 * h[1] + "%"
            }) : h = [bu(e, "xPercent") / -100, bu(e, "yPercent") / -100], u = (i = Su(e, r, h, "auto")).apply({
                x: f,
                y: D
            }), oi(t, i.a, i.b, i.c, i.d, p + i.e - (u.x - i.e), c + i.f - (u.y - i.f)))), a ? oi(t, a.a, a.b, a.c, a.d, a.e, a.f) : (o || l) && oi(t, 1, 0, 0, 1, o || 0, l || 0), t) : Zr("M0,0L0,0")
        },
        ku = function(t, e, n, r, i, u) {
            var s = e._gsap,
                a = s.harness,
                o = a && a.aliases && a.aliases[n],
                l = o && o.indexOf(",") < 0 ? o : n,
                h = t._pt = new vu(t._pt, e, l, 0, 0, Mu, 0, s.set(e, l, t));
            h.u = yu(s.get(e, l, u)) || 0, h.path = r, h.pp = i, t._props.push(l)
        },
        Lu = {
            version: "3.2.6",
            name: "motionPath",
            register: function(t, e, n) {
                yu = (mu = t).utils.getUnit, Cu = mu.utils.toArray, vu = n
            },
            init: function(t, e) {
                if (!mu) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
                "object" == typeof e && !e.style && e.path || (e = {
                    path: e
                });
                var n, r, i, u, s, a, o = [],
                    l = e.path,
                    h = l[0],
                    f = e.autoRotate,
                    D = (s = e.start, a = "end" in e ? e.end : 1, function(t) {
                        return s || 1 !== a ? ni(t, s, a) : t
                    });
                if (this.rawPaths = o, this.target = t, (this.rotate = f || 0 === f) && (this.rOffset = parseFloat(f) || 0, this.radians = !!e.useRadians, this.rProp = e.rotation || "rotation", this.rSet = t._gsap.set(t, this.rProp, this), this.ru = yu(t._gsap.get(t, this.rProp)) || 0), Array.isArray(l) && !("closed" in l) && "number" != typeof h) {
                    for (r in h) ~xu.indexOf(r) ? i = r : ~Fu.indexOf(r) && (u = r);
                    for (r in i && u ? o.push(Au(this, Eu(Eu([], l, i, 0), l, u, 1), t, e.x || i, e.y || u, D, e)) : i = u = 0, h) r !== i && r !== u && o.push(Au(this, Eu([], l, r, 0), t, r, 0, D, e))
                } else ii(n = D(Ou(Zr(e.path), t, e)), e.resolution), o.push(n), ku(this, t, e.x || "x", n, "x", e.unitX || "px"), ku(this, t, e.y || "y", n, "y", e.unitY || "px")
            },
            render: function(t, e) {
                var n = e.rawPaths,
                    r = n.length,
                    i = e._pt;
                for (t > 1 ? t = 1 : t < 0 && (t = 0); r--;) ai(n[r], t, !r && e.rotate, n[r]);
                for (; i;) i.set(i.t, i.p, i.path[i.pp] + i.u, i.d, t), i = i._next;
                e.rotate && e.rSet(e.target, e.rProp, n[0].angle * (e.radians ? wu : 1) + e.rOffset + e.ru, e, t)
            },
            getLength: function(t) {
                return ii(Zr(t)).totalLength
            },
            sliceRawPath: ni,
            getRawPath: Zr,
            pointsToSegment: Di,
            stringToRawPath: hi,
            rawPathToString: pi,
            transformRawPath: oi,
            getGlobalMatrix: _u,
            getPositionOnPath: ai,
            cacheRawPathMeasurements: ii,
            convertToPath: function(t, e) {
                return Cu(t).map((function(t) {
                    return ti(t, !1 !== e)
                }))
            },
            convertCoordinates: function(t, e, n) {
                var r = _u(e, !0, !0).multiply(_u(t));
                return n ? r.apply(n) : r
            },
            getAlignMatrix: Su,
            getRelativePosition: function(t, e, n, r) {
                var i = Su(t, e, n, r);
                return {
                    x: i.e,
                    y: i.f
                }
            },
            arrayToRawPath: function(t, e) {
                var n = Eu(Eu([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1);
                return e.relative && Tu(n), ["cubic" === e.type ? n : Di(n, e.curviness)]
            }
        };
    (mu || "undefined" != typeof window && (mu = window.gsap) && mu.registerPlugin && mu) && mu.registerPlugin(Lu);
    /*!
     * ScrollToPlugin 3.2.6
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Nu, Ru, Iu, zu, Yu, ju, Xu, Vu = function() {
            return "undefined" != typeof window
        },
        Uu = function() {
            return Nu || Vu() && (Nu = window.gsap) && Nu.registerPlugin && Nu
        },
        Wu = function(t) {
            return "string" == typeof t
        },
        qu = function(t, e) {
            var n = "x" === e ? "Width" : "Height",
                r = "scroll" + n,
                i = "client" + n;
            return t === Iu || t === zu || t === Yu ? Math.max(zu[r], Yu[r]) - (Iu["inner" + n] || zu[i] || Yu[i]) : t[r] - t["offset" + n]
        },
        Hu = function(t, e) {
            var n = "scroll" + ("x" === e ? "Left" : "Top");
            return t === Iu && (null != t.pageXOffset ? n = "page" + e.toUpperCase() + "Offset" : t = null != zu[n] ? zu : Yu),
                function() {
                    return t[n]
                }
        },
        Gu = function(t, e) {
            var n = ju(t)[0].getBoundingClientRect(),
                r = !e || e === Iu || e === Yu,
                i = r ? {
                    top: zu.clientTop - (Iu.pageYOffset || zu.scrollTop || Yu.scrollTop || 0),
                    left: zu.clientLeft - (Iu.pageXOffset || zu.scrollLeft || Yu.scrollLeft || 0)
                } : e.getBoundingClientRect(),
                u = {
                    x: n.left - i.left,
                    y: n.top - i.top
                };
            return !r && e && (u.x += Hu(e, "x")(), u.y += Hu(e, "y")()), u
        },
        Qu = function(t, e, n, r) {
            return isNaN(t) || "object" == typeof t ? Wu(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r : "max" === t ? qu(e, n) : Math.min(qu(e, n), Gu(t, e)[n]) : parseFloat(t)
        },
        Ku = function() {
            Nu = Uu(), Vu() && Nu && document.body && (Iu = window, Yu = document.body, zu = document.documentElement, ju = Nu.utils.toArray, Nu.config({
                autoKillThreshold: 7
            }), Xu = Nu.config(), Ru = 1)
        },
        Zu = {
            version: "3.2.6",
            name: "scrollTo",
            rawVars: 1,
            register: function(t) {
                Nu = t, Ku()
            },
            init: function(t, e, n, r, i) {
                Ru || Ku();
                this.isWin = t === Iu, this.target = t, this.tween = n, "object" != typeof e ? Wu((e = {
                    y: e
                }).y) && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = {
                    y: e,
                    x: e
                }), this.vars = e, this.autoKill = !!e.autoKill, this.getX = Hu(t, "x"), this.getY = Hu(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != e.x ? (this.add(this, "x", this.x, Qu(e.x, t, "x", this.x) - (e.offsetX || 0), r, i, Math.round), this._props.push("scrollTo_x")) : this.skipX = 1, null != e.y ? (this.add(this, "y", this.y, Qu(e.y, t, "y", this.y) - (e.offsetY || 0), r, i, Math.round), this._props.push("scrollTo_y")) : this.skipY = 1
            },
            render: function(t, e) {
                for (var n, r, i, u, s, a = e._pt, o = e.target, l = e.tween, h = e.autoKill, f = e.xPrev, D = e.yPrev, p = e.isWin; a;) a.r(t, a.d), a = a._next;
                n = p || !e.skipX ? e.getX() : f, i = (r = p || !e.skipY ? e.getY() : D) - D, u = n - f, s = Xu.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), h && (!e.skipX && (u > s || u < -s) && n < qu(o, "x") && (e.skipX = 1), !e.skipY && (i > s || i < -s) && r < qu(o, "y") && (e.skipY = 1), e.skipX && e.skipY && (l.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(l, e.vars.onAutoKillParams || []))), p ? Iu.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y) : (e.skipY || (o.scrollTop = e.y), e.skipX || (o.scrollLeft = e.x)), e.xPrev = e.x, e.yPrev = e.y
            },
            kill: function(t) {
                var e = "scrollTo" === t;
                (e || "scrollTo_x" === t) && (this.skipX = 1), (e || "scrollTo_y" === t) && (this.skipY = 1)
            }
        };
    Zu.max = qu, Zu.getOffset = Gu, Zu.buildGetter = Hu, Uu() && Nu.registerPlugin(Zu);
    /*!
     * strings: 3.2.6
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var $u = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    /*!
     * SplitText: 3.2.6
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ju, ts, es, ns, rs = /(?:\r|\n|\t\t)/g,
        is = /(?:\s\s+)/g,
        us = function(t) {
            return ts.getComputedStyle(t)
        },
        ss = Array.isArray,
        as = [].slice,
        os = function(t, e) {
            var n;
            return ss(t) ? t : "string" == (n = typeof t) && !e && t ? as.call(Ju.querySelectorAll(t), 0) : t && "object" === n && "length" in t ? as.call(t, 0) : t ? [t] : []
        },
        ls = function(t) {
            return "absolute" === t.position || !0 === t.absolute
        },
        hs = function(t, e) {
            for (var n, r = e.length; --r > -1;)
                if (n = e[r], t.substr(0, n.length) === n) return n.length
        },
        fs = function(t, e) {
            void 0 === t && (t = "");
            var n = ~t.indexOf("++"),
                r = 1;
            return n && (t = t.split("++").join("")),
                function() {
                    return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (n ? r++ : "") + "'>" : ">")
                }
        },
        Ds = function t(e, n, r) {
            var i = e.nodeType;
            if (1 === i || 9 === i || 11 === i)
                for (e = e.firstChild; e; e = e.nextSibling) t(e, n, r);
            else 3 !== i && 4 !== i || (e.nodeValue = e.nodeValue.split(n).join(r))
        },
        ps = function(t, e) {
            for (var n = e.length; --n > -1;) t.push(e[n])
        },
        cs = function(t, e, n) {
            for (var r; t && t !== e;) {
                if (r = t._next || t.nextSibling) return r.textContent.charAt(0) === n;
                t = t.parentNode || t._parent
            }
        },
        ds = function t(e) {
            var n, r, i = os(e.childNodes),
                u = i.length;
            for (n = 0; n < u; n++)(r = i[n])._isSplit ? t(r) : (n && 3 === r.previousSibling.nodeType ? r.previousSibling.nodeValue += 3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue : 3 !== r.nodeType && e.insertBefore(r.firstChild, r), e.removeChild(r))
        },
        gs = function(t, e) {
            return parseFloat(e[t]) || 0
        },
        _s = function(t, e, n, r, i, u, s) {
            var a, o, l, h, f, D, p, c, d, g, _, m, v = us(t),
                y = gs("paddingLeft", v),
                C = -999,
                x = gs("borderBottomWidth", v) + gs("borderTopWidth", v),
                F = gs("borderLeftWidth", v) + gs("borderRightWidth", v),
                w = gs("paddingTop", v) + gs("paddingBottom", v),
                E = gs("paddingLeft", v) + gs("paddingRight", v),
                b = .2 * gs("fontSize", v),
                T = v.textAlign,
                A = [],
                M = [],
                P = [],
                B = e.wordDelimiter || " ",
                S = e.tag ? e.tag : e.span ? "span" : "div",
                O = e.type || e.split || "chars,words,lines",
                k = i && ~O.indexOf("lines") ? [] : null,
                L = ~O.indexOf("words"),
                N = ~O.indexOf("chars"),
                R = ls(e),
                I = e.linesClass,
                z = ~(I || "").indexOf("++"),
                Y = [];
            for (z && (I = I.split("++").join("")), l = (o = t.getElementsByTagName("*")).length, f = [], a = 0; a < l; a++) f[a] = o[a];
            if (k || R)
                for (a = 0; a < l; a++)((D = (h = f[a]).parentNode === t) || R || N && !L) && (m = h.offsetTop, k && D && Math.abs(m - C) > b && ("BR" !== h.nodeName || 0 === a) && (p = [], k.push(p), C = m), R && (h._x = h.offsetLeft, h._y = m, h._w = h.offsetWidth, h._h = h.offsetHeight), k && ((h._isSplit && D || !N && D || L && D || !L && h.parentNode.parentNode === t && !h.parentNode._isSplit) && (p.push(h), h._x -= y, cs(h, t, B) && (h._wordEnd = !0)), "BR" === h.nodeName && (h.nextSibling && "BR" === h.nextSibling.nodeName || 0 === a) && k.push([])));
            for (a = 0; a < l; a++) D = (h = f[a]).parentNode === t, "BR" !== h.nodeName ? (R && (d = h.style, L || D || (h._x += h.parentNode._x, h._y += h.parentNode._y), d.left = h._x + "px", d.top = h._y + "px", d.position = "absolute", d.display = "block", d.width = h._w + 1 + "px", d.height = h._h + "px"), !L && N ? h._isSplit ? (h._next = h.nextSibling, h.parentNode.appendChild(h)) : h.parentNode._isSplit ? (h._parent = h.parentNode, !h.previousSibling && h.firstChild && (h.firstChild._isFirst = !0), h.nextSibling && " " === h.nextSibling.textContent && !h.nextSibling.nextSibling && Y.push(h.nextSibling), h._next = h.nextSibling && h.nextSibling._isFirst ? null : h.nextSibling, h.parentNode.removeChild(h), f.splice(a--, 1), l--) : D || (m = !h.nextSibling && cs(h.parentNode, t, B), h.parentNode._parent && h.parentNode._parent.appendChild(h), m && h.parentNode.appendChild(Ju.createTextNode(" ")), "span" === S && (h.style.display = "inline"), A.push(h)) : h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML ? M.push(h) : N && !h._isSplit && ("span" === S && (h.style.display = "inline"), A.push(h))) : k || R ? (h.parentNode && h.parentNode.removeChild(h), f.splice(a--, 1), l--) : L || t.appendChild(h);
            for (a = Y.length; --a > -1;) Y[a].parentNode.removeChild(Y[a]);
            if (k) {
                for (R && (g = Ju.createElement(S), t.appendChild(g), _ = g.offsetWidth + "px", m = g.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(g)), d = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (c = " " === B && (!R || !L && !N), a = 0; a < k.length; a++) {
                    for (p = k[a], (g = Ju.createElement(S)).style.cssText = "display:block;text-align:" + T + ";position:" + (R ? "absolute;" : "relative;"), I && (g.className = I + (z ? a + 1 : "")), P.push(g), l = p.length, o = 0; o < l; o++) "BR" !== p[o].nodeName && (h = p[o], g.appendChild(h), c && h._wordEnd && g.appendChild(Ju.createTextNode(" ")), R && (0 === o && (g.style.top = h._y + "px", g.style.left = y + m + "px"), h.style.top = "0px", m && (h.style.left = h._x - m + "px")));
                    0 === l ? g.innerHTML = "&nbsp;" : L || N || (ds(g), Ds(g, String.fromCharCode(160), " ")), R && (g.style.width = _, g.style.height = h._h + "px"), t.appendChild(g)
                }
                t.style.cssText = d
            }
            R && (s > t.clientHeight && (t.style.height = s - w + "px", t.clientHeight < s && (t.style.height = s + x + "px")), u > t.clientWidth && (t.style.width = u - E + "px", t.clientWidth < u && (t.style.width = u + F + "px"))), ps(n, A), L && ps(r, M), ps(i, P)
        },
        ms = function(t, e, n, r) {
            var i, u, s, a, o, l, h, f, D = e.tag ? e.tag : e.span ? "span" : "div",
                p = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
                c = ls(e),
                d = e.wordDelimiter || " ",
                g = " " !== d ? "" : c ? "&#173; " : " ",
                _ = "</" + D + ">",
                m = 1,
                v = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : hs : null,
                y = Ju.createElement("div"),
                C = t.parentNode;
            for (C.insertBefore(y, t), y.textContent = t.nodeValue, C.removeChild(t), h = -1 !== (i = function t(e) {
                    var n = e.nodeType,
                        r = "";
                    if (1 === n || 9 === n || 11 === n) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) r += t(e)
                    } else if (3 === n || 4 === n) return e.nodeValue;
                    return r
                }(t = y)).indexOf("<"), !1 !== e.reduceWhiteSpace && (i = i.replace(is, " ").replace(rs, "")), h && (i = i.split("<").join("{{LT}}")), o = i.length, u = (" " === i.charAt(0) ? g : "") + n(), s = 0; s < o; s++)
                if (l = i.charAt(s), v && (f = v(i.substr(s), e.specialChars))) l = i.substr(s, f || 1), u += p && " " !== l ? r() + l + "</" + D + ">" : l, s += f - 1;
                else if (l === d && i.charAt(s - 1) !== d && s) {
                for (u += m ? _ : "", m = 0; i.charAt(s + 1) === d;) u += g, s++;
                s === o - 1 ? u += g : ")" !== i.charAt(s + 1) && (u += g + n(), m = 1)
            } else "{" === l && "{{LT}}" === i.substr(s, 6) ? (u += p ? r() + "{{LT}}</" + D + ">" : "{{LT}}", s += 5) : l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319 || i.charCodeAt(s + 1) >= 65024 && i.charCodeAt(s + 1) <= 65039 ? (a = ((i.substr(s, 12).split($u) || [])[1] || "").length || 2, u += p && " " !== l ? r() + i.substr(s, a) + "</" + D + ">" : i.substr(s, a), s += a - 1) : u += p && " " !== l ? r() + l + "</" + D + ">" : l;
            t.outerHTML = u + (m ? _ : ""), h && Ds(C, "{{LT}}", "<")
        },
        vs = function t(e, n, r, i) {
            var u, s, a = os(e.childNodes),
                o = a.length,
                l = ls(n);
            if (3 !== e.nodeType || o > 1) {
                for (n.absolute = !1, u = 0; u < o; u++)(3 !== (s = a[u]).nodeType || /\S+/.test(s.nodeValue)) && (l && 3 !== s.nodeType && "inline" === us(s).display && (s.style.display = "inline-block", s.style.position = "relative"), s._isSplit = !0, t(s, n, r, i));
                return n.absolute = l, void(e._isSplit = !0)
            }
            ms(e, n, r, i)
        },
        ys = function() {
            function t(t, e) {
                es || (Ju = document, ts = window, es = 1), this.elements = os(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
            }
            var e = t.prototype;
            return e.split = function(t) {
                this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var e, n, r, i = this.elements.length, u = t.tag ? t.tag : t.span ? "span" : "div", s = fs(t.wordsClass, u), a = fs(t.charsClass, u); --i > -1;) r = this.elements[i], this._originals[i] = r.innerHTML, e = r.clientHeight, n = r.clientWidth, vs(r, t, s, a), _s(r, t, this.chars, this.words, this.lines, n, e);
                return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
            }, e.revert = function() {
                var t = this._originals;
                if (!t) throw "revert() call wasn't scoped properly.";
                return this.elements.forEach((function(e, n) {
                    return e.innerHTML = t[n]
                })), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
            }, t.create = function(e, n) {
                return new t(e, n)
            }, t
        }();
    ys.version = "3.2.6", wr.registerPlugin(Ue, Er, Le, Le, Pr, xi, Si, $i, Lu, Zu, yr);
    var Cs = ns = window.punchgs = window.tpGS = {};
    for (var xs in Cs.gsap = wr, Cs.TweenLite = Ue, Cs.TweenMax = Er, Cs.TimelineLite = Le, Cs.TimelineMax = Le, Cs.CustomBounce = Pr, Cs.CustomEase = xi, Cs.CustomWiggle = Si, Cs.DrawSVGPlugin = $i, Cs.MotionPathPlugin = Lu, Cs.ScrollToPlugin = Zu, Cs.CSSPlugin = yr,
            /*! Map SplitText to tpGS TPGSSPLITTEXT */
            Cs.SplitText = ys, Cs.RAD2DEG = 180 / Math.PI, Cs.DEG2RAD = Math.PI / 180,
            /*! REGISTER MOTION PATH (BEZIER) */
            Cs.gsap.registerPlugin(Cs.MotionPathPlugin), Cs.gsap.config({
                nullTargetWarn: !1
            }),
            /*!FallBack for old and new Eases*/
            Cs.eases = Cs.gsap.parseEase(), Cs.eases) Cs.eases.hasOwnProperty(xs) && void 0 === Cs[xs] && (Cs[xs] = Cs.eases[xs])
    /*! FallBack for Essential Grid */
    ;
    void 0 !== ns && void 0 !== ns.TweenLite && void 0 === ns.TweenLite.lagSmoothing && (ns.TweenLite.lagSmoothing = function() {})
}]);;
/*!

  - Slider Revolution 6.2 JavaScript Plugin -

..........................xXXXXX.................
................. xXXXXX..xXXXXX..xXXXXX.........
..................xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........

				VERSION: 6.2.11
			   DATE: 2020-06-05
    @author: Krisztian Horvath, ThemePunch OHG.


UPDATES AND DOCS AT: 
https://www.themepunch.com/support-center
			
GET LICENSE AT: 
https://www.themepunch.com/links/slider_revolution_wordpress_regular_license

LICENSE:
Copyright (c) 2009-2019, ThemePunch. All rights reserved.
This work is subject to the terms at https://www.themepunch.com/links/slider_revolution_wordpress_regular_license (Regular / Extended)

*/
! function(e, t) {
    "use strict";
    var i;
    window.RSANYID = window.RSANYID === t ? [] : window.RSANYID, window.RSANYID_sliderID = window.RSANYID_sliderID === t ? [] : window.RSANYID_sliderID, e.fn.extend({
        revolution: function(o) {
            return this.each(function() {
                i = e.fn.revolution;
                for (var s = document.getElementsByClassName("rs-p-wp-fix"); s[0];) s[0].parentNode.removeChild(s[0]);
                this.id !== t ? (i[n] = {
                    anyid: []
                }, this.id = i.revCheckIDS(n, this, !0)) : this.id = "rs_module_" + Math.round(1e7 * Math.random());
                var n = this.id,
                    d = e.extend(!0, {}, o);
                i[n] = F(o), i[n].ignoreHeightChange = a && "fullscreen" === i[n].sliderLayout && i[n].ignoreHeightChange, i[n].option_export = d, i[n].anyid = [], i[n].c = e(this), i[n].cpar = i[n].c.parent(), i[n].canvas = i[n].c.find("rs-slides"), i[n].caches = {
                    calcResponsiveLayersList: [],
                    contWidthManager: {}
                }, window.RSBrowser = window.RSBrowser === t ? i.get_browser() : window.RSBrowser, i[n].noDetach = i[n].BUG_ie_clipPath = "Edge" === window.RSBrowser || "IE" === window.RSBrowser, i[n].indexhelper = 0, i[n].level = 0, i[n].rtl = e("body").hasClass("rtl"), i[n]._L = i[n]._L === t ? {} : i[n]._L, i[n].emptyObject = "{}", i[n].dimensionReCheck = {}, i.globalListener === t && i.pageHandler(n), i[n].stopAfterLoops != t && i[n].stopAfterLoops > -1 ? i[n].looptogo = i[n].stopAfterLoops : i[n].looptogo = "disabled", i[n].BUG_safari_clipPath = "Safari" === i.get_browser() && i.get_browser_version() > "12", i[n].minHeight = "fullwidth" === i[n].sliderLayout ? 0 : i[n].minHeight != t && "" !== i[n].minHeight ? parseInt(i[n].minHeight, 0) : 0, i[n].minHeight = i[n].minHeight === t ? 0 : i[n].minHeight, i[n].isEdge = "Edge" === i.get_browser(), r(n), i.updateVisibleArea(n), l(n), N(n), window.requestAnimationFrame(function() {
                    if ("fullscreen" === i[n].sliderLayout) {
                        var e = i.getFullscreenOffsets(n);
                        0 !== e && i[n].cpar.height(i.getWinH(n) - e)
                    }
                    i[n].cpar[0].style.visibility = "visible"
                }), "hero" == i[n].sliderType && i[n].c.find("rs-slide").each(function(t) {
                    t > 0 && e(this).remove()
                }), i[n].navigation.use = "hero" !== i[n].sliderType && ("carousel" == i[n].sliderType || i[n].navigation.keyboardNavigation || "on" == i[n].navigation.mouseScrollNavigation || "carousel" == i[n].navigation.mouseScrollNavigation || i[n].navigation.touch.touchenabled || i[n].navigation.arrows.enable || i[n].navigation.bullets.enable || i[n].navigation.thumbnails.enable || i[n].navigation.tabs.enable), i[n].c.find("rs-bgvideo").each(function() {
                    "RS-BGVIDEO" !== this.tagName || this.id !== t && "" !== this.id || (this.id = "rs-bg-video-" + Math.round(1e6 * Math.random()))
                }), tpGS.force3D = "auto", !0 === i[n].modal.useAsModal && -1 === i.RS_prioList.indexOf(n) && (i.RS_toInit[n] = !1, i.RS_prioList.push(n)), i.RS_killedlist !== t && -1 !== i.RS_killedlist.indexOf(n) && (i.RS_toInit[n] = !1, i.RS_prioList.push(n)), i.initNextRevslider(n)
            })
        },
        getRSJASONOptions: function(e) {
            console.log(JSON.stringify(i[e].option_export))
        },
        getRSVersion: function(e) {
            var t, i, a = window.SliderRevolutionVersion;
            if (!e) {
                for (var r in t = i = "---------------------------------------------------------\n", t += "    Currently Loaded Slider Revolution & SR Modules :\n" + i, a) a.hasOwnProperty(r) && (t += a[r].alias + ": " + a[r].ver + "\n");
                t += i
            }
            return e ? a : t
        },
        revremoveslide: function(t) {
            return this.each(function() {
                var a = this.id;
                if (!(t < 0 || t > i[a].slideamount) && i[a] && i[a].slides.length > 0 && (t > 0 || t <= i[a].slides.length)) {
                    var r = i.gA(i[a].slides[t], "key");
                    i[a].slideamount = i[a].slideamount - 1, i[a].realslideamount = i[a].realslideamount - 1, s("rs-bullet", r, a), s("rs-tab", r, a), s("rs-thumb", r, a), e(i[a].slides[t]).remove(), i[a].thumbs = o(i[a].thumbs, t), i.updateNavIndexes && i.updateNavIndexes(a), t <= i[a].pr_active_key && (i[a].pr_active_key = i[a].pr_active_key - 1)
                }
            })
        },
        revaddcallback: function(e) {
            return this.each(function() {
                i[this.id] && (i[this.id].callBackArray === t && (i[this.id].callBackArray = []), i[this.id].callBackArray.push(e))
            })
        },
        revgetparallaxproc: function() {
            if (i[this[0].id]) return i[this[0].id].scrollproc
        },
        revdebugmode: function() {},
        revscroll: function(t) {
            return this.each(function() {
                var i = e(this);
                e("body,html").animate({
                    scrollTop: i.offset().top + i.height() - t + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function() {
            return this.each(function() {
                h(this.id)
            })
        },
        revkill: function() {
            return this.each(function() {
                var a = this.id;
                i[a].c.data("conthover", 1), i[a].c.data("conthoverchanged", 1), i[a].c.trigger("revolution.slide.onpause"), i[a].tonpause = !0, i[a].c.trigger("stoptimer"), i[a].sliderisrunning = !1;
                var r = "updateContainerSizes." + i[a].c.attr("id");
                i.window.unbind(r), tpGS.gsap.killTweensOf(i[a].c.find("*"), !1), tpGS.gsap.killTweensOf(i[a].c, !1), i[a].c.unbind("hover, mouseover, mouseenter,mouseleave, resize"), i[a].c.find("*").each(function() {
                    var i = e(this);
                    i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.off("on, hover, mouseenter,mouseleave,mouseover, resize"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != t && i.data("tween").kill(), i.data("pztl") != t && i.data("pztl").kill(), i.data("timeline_out") != t && i.data("timeline_out").kill(), i.data("timeline") != t && i.data("timeline").kill(), i.remove(), i.empty(), i = null
                }), tpGS.gsap.killTweensOf(i[a].c.find("*"), !1), tpGS.gsap.killTweensOf(i[a].c, !1), i[a].progressC.remove();
                try {
                    i[a].c.closest(".rev_slider_wrapper").detach()
                } catch (e) {}
                try {
                    i[a].c.closest("rs-fullwidth-wrap").remove()
                } catch (e) {}
                try {
                    i[a].c.closest("rs-module-wrap").remove()
                } catch (e) {}
                try {
                    i[a].c.remove()
                } catch (e) {}
                i[a].cpar.detach(), i[a].c.html(""), i[a].c = null, delete i[a], i.RS_prioList.splice(i.RS_prioList.indexOf(a), 1), i.RS_toInit[a] = !1, i.RS_killedlist = i.RS_killedlist === t ? [] : i.RS_killedlist, -1 === i.RS_killedlist.indexOf(a) && i.RS_killedlist.push(a)
            })
        },
        revpause: function() {
            return this.each(function() {
                var a = e(this);
                a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0 && (a.data("conthover", 1), a.data("conthoverchanged", 1), a.trigger("revolution.slide.onpause"), i[this.id].tonpause = !0, a.trigger("stoptimer"))
            })
        },
        revresume: function() {
            return this.each(function() {
                if (i[this.id] !== t) {
                    var a = e(this);
                    a.data("conthover", 0), a.data("conthoverchanged", 1), a.trigger("revolution.slide.onresume"), i[this.id].tonpause = !1, a.trigger("starttimer")
                }
            })
        },
        revmodal: function(a) {
            var r = this instanceof e ? this[0] : this,
                o = r.id;
            i[r.id] !== t && i.revModal(o, a)
        },
        revstart: function() {
            var a = this instanceof e ? this[0] : this;
            return i[a.id] === t ? (console.log("Slider is Not Existing"), !1) : i[a.id].sliderisrunning || !0 === i[a.id].initEnded ? (console.log("Slider Is Running Already"), !1) : (i[a.id].c = e(a), i[a.id].canvas = i[a.id].c.find("rs-slides"), u(a.id), !0)
        },
        revnext: function() {
            return this.each(function() {
                i[this.id] !== t && i.callingNewSlide(this.id, 1, "carousel" === i[this.id].sliderType)
            })
        },
        revprev: function() {
            return this.each(function() {
                i[this.id] !== t && i.callingNewSlide(this.id, -1, "carousel" === i[this.id].sliderType)
            })
        },
        revmaxslide: function() {
            return e(this).find("rs-slide").length
        },
        revcurrentslide: function() {
            if (i[e(this)[0].id] !== t) return parseInt(i[e(this)[0].id].pr_active_key, 0) + 1
        },
        revlastslide: function() {
            return e(this).find("rs-slide").length
        },
        revshowslide: function(e) {
            return this.each(function() {
                i[this.id] !== t && e !== t && i.callingNewSlide(this.id, "to" + (e - 1))
            })
        },
        revcallslidewithid: function(e) {
            return this.each(function() {
                i[this.id] !== t && i.callingNewSlide(this.id, e, "carousel" === i[this.id].sliderType)
            })
        }
    }), i = e.fn.revolution, e.extend(!0, i, {
        pageHandler: function(r) {
            window._TA = i, window._T = i[r], i.globalListener = !0, i.window = e(window), i.document = e(document), i.RS_toInit = {}, i.RS_prioList = [], i.RS_swapping = [], i.RS_swapList = {}, window.isSafari11 === t && (window.isSafari11 = i.isSafari11()), window.addEventListener("resize", i.getWindowDimension), a && window.addEventListener("orientationchange", function() {
                i.getWindowDimension(!1), setTimeout(function() {
                    i.getWindowDimension(!0)
                }, 400)
            }), i.getWindowDimension(!1), i.stickySupported = !1, "IE" !== window.RSBrowser && (i.stickySupported = !0,
                /*! Custom Eases */
                tpGS.SFXBounceLite = tpGS.CustomBounce.create("SFXBounceLite", {
                    strength: .3,
                    squash: 1,
                    squashID: "SFXBounceLite-squash"
                }), tpGS.SFXBounceSolid = tpGS.CustomBounce.create("SFXBounceSolid", {
                    strength: .5,
                    squash: 2,
                    squashID: "SFXBounceSolid-squash"
                }), tpGS.SFXBounceStrong = tpGS.CustomBounce.create("SFXBounceStrong", {
                    strength: .7,
                    squash: 3,
                    squashID: "SFXBounceStrong-squash"
                }), tpGS.SFXBounceExtrem = tpGS.CustomBounce.create("SFXBounceExtrem", {
                    strength: .9,
                    squash: 4,
                    squashID: "SFXBounceExtrem-squash"
                }), tpGS.BounceLite = tpGS.CustomBounce.create("BounceLite", {
                    strength: .3
                }), tpGS.BounceSolid = tpGS.CustomBounce.create("BounceSolid", {
                    strength: .5
                }), tpGS.BounceStrong = tpGS.CustomBounce.create("BounceStrong", {
                    strength: .7
                }), tpGS.BounceExtrem = tpGS.CustomBounce.create("BounceExtrem", {
                    strength: .9
                })), i.checkParrentOverflows(r);
            var o = document.getElementsByTagName("rs-module");
            for (var s in o) o.hasOwnProperty(s) && (i.RS_toInit[o[s].id] = !1, i.RS_prioList.push(o[s].id));
            i.nextSlider = r
        },
        checkParrentOverflows: function(e) {
            window.requestAnimationFrame(function() {
                for (var t = i[e].cpar[0]; t.parentNode && !1 !== i.stickySupported;) {
                    if ("RS-MODULE-WRAP" !== t.tagName && "RS-FULLWIDTH-WRAP" !== t.tagName && "RS-MODULE-WRAP" !== t.tagName && -1 === t.className.indexOf("wp-block-themepunch-revslider")) {
                        var a = window.getComputedStyle(t);
                        i.stickySupported = "hidden" !== a.overflow && "hidden" !== a.overflowX && "hidden" !== a.overflowY
                    }
                    t = t.parentNode
                }
            })
        },
        initNextRevslider: function(e) {
            i.RS_prioList[0] === e && !1 === i.RS_toInit[e] ? (i.RS_toInit[e] = "waiting", c(e), setTimeout(function() {
                i.initNextRevslider(e)
            }, 19)) : i.RS_prioList[0] === e && "waiting" === i.RS_toInit[e] ? setTimeout(function() {
                i.initNextRevslider(e)
            }, 19) : i.RS_prioList[0] === e && !0 === i.RS_toInit[e] ? (i.RS_prioList.shift(), 0 !== i.RS_prioList.length && setTimeout(function() {
                i.initNextRevslider(e)
            }, 19)) : i.RS_prioList[0] !== e && !1 === i.RS_toInit[e] ? setTimeout(function() {
                i.initNextRevslider(e)
            }, 19) : 0 === i.RS_prioList.length && !0 === i.RS_toInit[e] && c(e)
        },
        scrollTicker: function(e) {
            1 != i.scrollTickerAdded && (i.slidersToScroll = [], i.scrollTickerAdded = !0, a ? (tpGS.gsap.ticker.fps(150), tpGS.gsap.ticker.add(function() {
                i.generalObserver()
            })) : document.addEventListener("scroll", function(e) {
                i.generalObserver(!0)
            }, {
                passive: !0
            })), i.slidersToScroll.push(e), i.generalObserver(a)
        },
        generalObserver: function(e) {
            for (var t in i.lastwindowheight = i.lastwindowheight || i.winH, i.scrollY = window.scrollY, i.slidersToScroll) i.slidersToScroll.hasOwnProperty(t) && i.scrollHandling(i.slidersToScroll[t], e)
        },
        enterViewPort: function(a, r) {
            !0 !== i[a].started ? (i[a].started = !0, setTimeout(function() {
                R(a), "hero" !== i[a].sliderType && i.manageNavigation && i[a].navigation.use && !0 === i[a].navigation.createNavigationDone && i.manageNavigation(a), i[a].slideamount > 1 && G(a), setTimeout(function() {
                    i[a] !== t && (i[a].revolutionSlideOnLoaded = !0, i[a].c.trigger("revolution.slide.onloaded"))
                }, 50)
            }, i[a].startDelay), i[a].startDelay = 0, window.requestAnimationFrame(function() {
                m(a)
            })) : (i[a].waitForCountDown && (G(a), i[a].waitForCountDown = !1), "playing" != i[a].sliderlaststatus && i[a].sliderlaststatus != t || i[a].c.trigger("starttimer"), i[a].lastplayedvideos != t && i[a].lastplayedvideos.length > 0 && e.each(i[a].lastplayedvideos, function(e, t) {
                i.playVideo(t, a)
            }))
        },
        leaveViewPort: function(a) {
            i[a].sliderlaststatus = i[a].sliderstatus, i[a].c.trigger("stoptimer"), i[a].playingvideos != t && i[a].playingvideos.length > 0 && (i[a].lastplayedvideos = e.extend(!0, [], i[a].playingvideos), i[a].playingvideos && e.each(i[a].playingvideos, function(e, t) {
                i[a].leaveViewPortBasedStop = !0, i.stopVideo && i.stopVideo(t, a)
            }))
        },
        scrollHandling: function(e, a, r, o) {
            if (i[e] !== t) {
                var s = i[e].topc !== t ? i[e].topc[0].getBoundingClientRect() : 0 === i[e].conh ? i[e].cpar[0].getBoundingClientRect() : i[e].c[0].getBoundingClientRect();
                s.hheight = 0 === s.height ? 0 === i[e].conh ? i[e].height : i[e].conh : s.height, i[e].scrollproc = s.top < 0 || s.hheight > i.lastwindowheight ? s.top / s.hheight : s.bottom > i.lastwindowheight ? (s.bottom - i.lastwindowheight) / s.hheight : 0;
                var n = Math.max(0, 1 - Math.abs(i[e].scrollproc));
                i[e].viewPort.enable && ("%" === i[e].viewPort.vaType[i[e].level] && (i[e].viewPort.visible_area[i[e].level] <= n || n >= 0 && n <= 1 && i[e].sbtimeline.fixed) || "px" === i[e].viewPort.vaType[i[e].level] && (s.top <= 0 && s.bottom >= i.lastwindowheight || s.top >= 0 && s.bottom <= i.lastwindowheight || s.top >= 0 && s.top < i.lastwindowheight - i[e].viewPort.visible_area[i[e].level] || s.bottom >= i[e].viewPort.visible_area[i[e].level] && s.bottom < i.lastwindowheight) ? i[e].inviewport || (i[e].inviewport = !0, i.enterViewPort(e, !0), i[e].c.trigger("enterviewport")) : i[e].inviewport && (i[e].inviewport = !1, i.leaveViewPort(e), i[e].c.trigger("leftviewport"))), i[e].inviewport && (i.callBackHandling && i.callBackHandling(e, "parallax", "start"), i.parallaxProcesses(e, s, o, r), i.callBackHandling && i.callBackHandling(e, "parallax", "end"))
            }
        },
        getWinH: function(e) {
            return i[e].ignoreHeightChange ? i.mobileWinH : i.winH
        },
        getWindowDimension: function(e) {
            !1 === e ? (i.winWAll = window.innerWidth, i.winWSbar = document.documentElement.clientWidth, i.scrollBarWidth = i.scrollBarWidth > 0 ? i.scrollBarWidth : i.winWAll - i.winWSbar, i.winW = Math.min(i.winWAll, i.winWSbar), i.winH = window.innerHeight, a && i.winH > 125 && (i.lastwindowheight !== t && Math.abs(i.lastwindowheight - i.winH) < 125 ? i.mobileWinH = i.lastwindowheight : i.mobileWinH = i.winH)) : clearTimeout(i.windowDimenstionDelay), i.windowDimenstionDelay = setTimeout(function() {
                i.winWAll = window.innerWidth, i.winWSbar = document.documentElement.clientWidth, i.scrollBarWidth = i.scrollBarWidth > 0 ? i.scrollBarWidth : i.winWAll - i.winWSbar, i.winW = Math.min(i.winWAll, i.winWSbar), i.winH = window.innerHeight, a && i.winH > 125 && (i.lastwindowheight !== t && Math.abs(i.lastwindowheight - i.winH) < 125 ? i.mobileWinH = i.lastwindowheight : i.mobileWinH = i.winH), !1 !== e && i.document.trigger("updateContainerSizes")
            }, 100)
        },
        sA: function(e, t, i) {
            e && e.setAttribute && e.setAttribute("data-" + t, i)
        },
        gA: function(e, i, a) {
            return e === t ? t : e.hasAttribute && e.hasAttribute("data-" + i) && e.getAttribute("data-" + i) !== t && null !== e.getAttribute("data-" + i) ? e.getAttribute("data-" + i) : a !== t ? a : t
        },
        iWA: function(e, a) {
            return i[e].justifyCarousel ? "static" === a ? i[e].carousel.wrapwidth : i[e].carousel.slide_widths[a !== t ? a : i[e].carousel.focused] : i[e].gridwidth[i[e].level]
        },
        iHE: function(e, t) {
            return i[e].useFullScreenHeight ? i[e].conh : Math.max(i[e].currentRowsHeight, i[e].gridheight[i[e].level])
        },
        updateFixedScrollTimes: function(e) {
            !0 === i[e].sbtimeline.set && !0 === i[e].sbtimeline.fixed && "auto" !== i[e].sliderLayout && (i[e].sbtimeline.rest = i[e].duration - i[e].sbtimeline.fixEnd, i[e].sbtimeline.time = i[e].duration - (i[e].sbtimeline.fixStart + i[e].sbtimeline.rest), i[e].sbtimeline.extended = i[e].sbtimeline.time / 10)
        },
        addSafariFix: function(e) {
            !0 === window.isSafari11 && !0 !== i[e].safari3dFix && (i[e].safari3dFix = !0, i[e].c[0].className += " safarifix")
        },
        callContWidthManager: function(e) {
            i.contWidthManager(e, "CallContWidthManager")
        },
        showModalCover: function(a, r, o) {
            switch (o) {
                case "show":
                    var s;
                    r.spin !== t && "off" !== r.spin && (s = i.buildSpinner(a, "spinner" + r.spin, r.spinc, "modalspinner")), r.bg !== t && !1 !== r.bg && "false" !== r.bg && "transparent" !== r.bg ? (i[a].modalLoader = e('<rs-modal-cover data-rid="' + a + '" id="' + a + '_modal_bg"></rs-modal-cover>'), e("body").append(i[a].modalLoader), tpGS.gsap.set(i[a].modalLoader, {
                        display: "none",
                        background: r.bg,
                        opacity: 0
                    }), tpGS.gsap.to(i[a].modalLoader, .5, {
                        display: "block",
                        opacity: 1,
                        ease: "power3.inOut"
                    }), s !== t && i[a].modalLoader.append(s)) : s !== t && i[a].c.append(s);
                    break;
                case "hide":
                    i[a].modalLoader !== t ? (i[a].modalLoader.find(".modalspinner").remove(), tpGS.gsap.to(i[a].modalLoader, 2, {
                        delay: 1,
                        display: "none",
                        opacity: 0,
                        ease: "power3.in"
                    })) : i[a].c.find(".modalspinner").remove()
            }
        },
        revModal: function(a, r) {
            if (a !== t && i[a] !== t && "clicked" !== i[a].modal.closeProtection) {
                if (!0 === i[a].modal.closeProtection) return i[a].modal.closeProtection, void setTimeout(function() {
                    i[a].modal.closeProtection = !1, i.revModal(a, r)
                }, 750);
                switch (r.mode) {
                    case "show":
                        if (!0 === i[a].modal.isLive) return;
                        i[a].modal.isLive = !0, r.slide = r.slide === t ? "to0" : r.slide, i[a].modal.bodyclass !== t && i[a].modal.bodyclass.length >= 0 && document.body.classList.add(i[a].modal.bodyclass), tpGS.gsap.to(i[a].modal.bg, 2, {
                            display: "block",
                            opacity: 1,
                            ease: "power3.inOut"
                        }), tpGS.gsap.set(i[a].modal.c, {
                            display: "auto" === i[a].sliderLayout ? "inline-block" : "block",
                            opacity: 0
                        }), i[a].cpar.removeClass("hideallscrollbars"), tpGS.gsap.set(i[a].cpar, {
                            display: "block",
                            opacity: 1
                        });
                        var o = {
                            a: 0
                        };
                        tpGS.gsap.fromTo(o, .01, {
                            a: 0
                        }, {
                            a: 10,
                            ease: "power3.inOut",
                            onStart: function() {
                                i[a].sliderisrunning && i.updateDimensions(a)
                            },
                            onComplete: function() {
                                i.openModalId = a, i[a].sliderisrunning ? i.callingNewSlide(a, r.slide) : ("to0" !== r.slide && (i[a].startWithSlideKey = r.slide), u(a))
                            }
                        }), tpGS.gsap.fromTo([i[a].modal.c], .01, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            delay: .5,
                            ease: "power3.inOut",
                            onComplete: function() {}
                        }), window.overscrollhistory = document.body.style.overflow, setTimeout(function() {
                            document.body.style.overflow = "hidden"
                        }, 250), i.getWindowDimension();
                        break;
                    case "close":
                        i.openModalId = t, A(a), document.body.style.overflow = window.overscrollhistory, i[a].cpar.addClass("hideallscrollbars"), i[a].modal.bodyclass !== t && i[a].modal.bodyclass.length >= 0 && document.body.classList.remove(i[a].modal.bodyclass), tpGS.gsap.to(i[a].modal.bg, 2, {
                            display: "none",
                            opacity: 0,
                            ease: "power3.inOut"
                        }), tpGS.gsap.to(i[a].modal.c, .3, {
                            display: "none",
                            delay: .5,
                            opacity: 0,
                            onComplete: function() {
                                tpGS.gsap.set(i[a].cpar, {
                                    display: "none",
                                    opacity: 0
                                }), i.document.trigger("revolution.all.resize"), i.getWindowDimension()
                            }
                        }), i[a].modal.closeProtection = !0, setTimeout(function() {
                            i[a].modal.isLive = !1, i[a].modal.closeProtection = !1
                        }, 750);
                        break;
                    case "init":
                        if (window.RS_60_MODALS = window.RS_60_MODALS === t ? [] : window.RS_60_MODALS, -1 === e.inArray(i[a].modal.alias, window.RS_60_MODALS) && window.RS_60_MODALS.push(i[a].modal.alias), i[a].modal.listener === t && (i[a].modal.c = e("#" + a + "_modal"), i[a].modal.bg = e('<rs-modal-cover data-rid="' + a + '" id="' + a + '_modal_bg"></rs-modal-cover>'), "auto" === i[a].sliderLayout && i[a].modal.cover ? e("body").append(i[a].modal.bg) : i[a].modal.c.append(i[a].modal.bg), i[a].modal.c[0].className += "rs-modal-" + i[a].sliderLayout, i[a].modal.calibration = {
                                left: "auto" === i[a].sliderLayout ? "center" === i[a].modal.horizontal ? "50%" : "left" === i[a].modal.horizontal ? "0px" : "auto" : "0px",
                                right: "auto" === i[a].sliderLayout ? "center" === i[a].modal.horizontal ? "auto" : "left" === i[a].modal.horizontal ? "auto" : "0px" : "0px",
                                top: "auto" === i[a].sliderLayout || "fullwidth" === i[a].sliderLayout ? "middle" === i[a].modal.vertical ? "50%" : "top" === i[a].modal.vertical ? "0px" : "auto" : "0px",
                                bottom: "auto" === i[a].sliderLayout || "fullwidth" === i[a].sliderLayout ? "middle" === i[a].modal.vertical ? "auto" : "top" === i[a].modal.vertical ? "auto" : "0px" : "0px",
                                y: ("auto" === i[a].sliderLayout || "fullwidth" === i[a].sliderLayout) && "middle" === i[a].modal.vertical ? "-50%" : 0,
                                x: "auto" === i[a].sliderLayout && "center" === i[a].modal.horizontal ? "-50%" : 0
                            }, "-50%" === i[a].modal.calibration.y && (i[a].modal.calibration.filter = "blur(0px)"), tpGS.gsap.set(i[a].modal.c, "auto" === i[a].sliderLayout || "fullscreen" === i[a].sliderLayout ? e.extend(!0, i[a].modal.calibration, {
                                opacity: 0,
                                display: "none"
                            }) : {
                                opacity: 0,
                                display: "none"
                            }), "fullwidth" === i[a].sliderLayout && tpGS.gsap.set(i[a].modal.c.find("rs-module-wrap"), i[a].modal.calibration), !1 !== i[a].modal.cover && "false" !== i[a].modal.cover || (i[a].modal.coverColor = "transparent"), tpGS.gsap.set(i[a].modal.bg, {
                                display: "none",
                                background: i[a].modal.coverColor,
                                opacity: 0
                            }), i.document.on("RS_OPENMODAL_" + i[a].modal.alias, function(e, t) {
                                i.revModal(a, {
                                    mode: "show",
                                    slide: t
                                })
                            }), i.document.on("click", "rs-modal-cover", function() {
                                i.revModal(i.gA(this, "rid"), {
                                    mode: "close"
                                })
                            }), i[a].modal.listener = !0, i[a].modal.trigger !== t)) {
                            var s, n = i[a].modal.trigger.split(";");
                            for (o in i[a].modal.trigger = {}, n)
                                if (n.hasOwnProperty(o)) switch ((s = n[o].split(":"))[0]) {
                                    case "t":
                                        i[a].modal.trigger.time = parseInt(s[1], 0);
                                        break;
                                    case "s":
                                        i[a].modal.trigger.scroll = s[1];
                                        break;
                                    case "so":
                                        i[a].modal.trigger.scrollo = parseInt(s[1], 0);
                                        break;
                                    case "e":
                                        i[a].modal.trigger.event = s[1]
                                }
                            if (i[a].modal.trigger.time !== t && 0 !== i[a].modal.trigger.time && setTimeout(function() {
                                    i.document.trigger("RS_OPENMODAL_" + i[a].modal.alias)
                                }, i[a].modal.trigger.time), i[a].modal.trigger.scrollo !== t || i[a].modal.trigger.scroll !== t) {
                                i[a].modal.trigger.scroll !== t && e(i[a].modal.trigger.scroll)[0] !== t && (i[a].modal.trigger.scroll = e(i[a].modal.trigger.scroll)[0]);
                                var l = function() {
                                    if (i[a].modal.trigger.scroll !== t) var e = i[a].modal.trigger.scroll.getBoundingClientRect();
                                    (i[a].modal.trigger.scroll !== t && Math.abs(e.top + (e.bottom - e.top) / 2 - i.getWinH(a) / 2) < 50 || i[a].modal.trigger.scrollo !== t && Math.abs(i[a].modal.trigger.scrollo - (i.scrollY !== t ? i.scrollY : window.scrollY)) < 100) && (i.document.trigger("RS_OPENMODAL_" + i[a].modal.alias), document.removeEventListener("scroll", l))
                                };
                                document.addEventListener("scroll", l, {
                                    id: a,
                                    passive: !0
                                })
                            }
                            i[a].modal.trigger.event !== t && i.document.on(i[a].modal.trigger.event, function() {
                                i.document.trigger("RS_OPENMODAL_" + i[a].modal.alias)
                            })
                        }
                }
            }
        },
        smartConvertDivs: function(e) {
            var t = "";
            if ("string" == typeof e && e.indexOf("#") >= 0) {
                var i = e.split(","),
                    a = i.length - 1;
                for (var r in i) t = "string" == typeof i[r] && "#" === i[r][0] ? t + i[r][1] / i[r][3] * 100 + "%" + (r < a ? "," : "") : t + i[r] + (r < a ? "," : "")
            } else t = e;
            return t
        },
        revToResp: function(e, i, a, r) {
            if ((e = e === t ? a : e) !== t) {
                if (r = r === t ? "," : r, "boolean" != typeof e && ("object" != typeof e || Array.isArray(e))) {
                    try {
                        e = e.replace(/[[\]]/g, "").replace(/\'/g, "").split(r)
                    } catch (e) {}
                    for (e = Array.isArray(e) ? e : [e]; e.length < i;) e[e.length] = e[e.length - 1]
                }
                return e
            }
        },
        loadImages: function(a, r, o, s) {
            if (a !== t && 0 !== a.length) {
                var n = [];
                if (e.isArray(a))
                    for (var l in a) a.hasOwnProperty(l) && a[l] !== t && n.push(a[l]);
                else n.push(a);
                for (var d in n)
                    if (n.hasOwnProperty(d)) {
                        var c = n[d].querySelectorAll("img, rs-sbg, .rs-svg");
                        for (var l in c)
                            if (c.hasOwnProperty(l)) {
                                var p = g(c[l], t, r),
                                    u = p !== t ? p : i.gA(c[l], "svg_src") != t ? i.gA(c[l], "svg_src") : c[l].src === t ? e(c[l]).data("src") : c[l].src,
                                    m = i.gA(c[l], "svg_src") != t ? "svg" : "img";
                                u !== t && i[r].loadqueue !== t && 0 == i[r].loadqueue.filter(function(e) {
                                    return e.src === u
                                }).length && i[r].loadqueue.push({
                                    src: u,
                                    index: l,
                                    starttoload: e.now(),
                                    type: m || "img",
                                    prio: o,
                                    progress: c[l].complete && u === c[l].src ? "loaded" : "prepared",
                                    static: s,
                                    width: c[l].complete && u === c[l].src ? c[l].width : t,
                                    height: c[l].complete && u === c[l].src ? c[l].height : t
                                })
                            }
                    }
                L(r)
            }
        },
        waitForCurrentImages: function(r, o, s) {
            if (r !== t && 0 !== r.length && i[o] !== t) {
                var n = !1,
                    l = [];
                if (e.isArray(r))
                    for (var d in r) r.hasOwnProperty(d) && r[d] !== t && l.push(r[d]);
                else l.push(r);
                for (var c in l)
                    if (l.hasOwnProperty(c)) {
                        var p = l[c].querySelectorAll("img, rs-sbg, .rs-svg");
                        for (d in p)
                            if (p.hasOwnProperty(d) && "length" !== d && !(p[d].className.indexOf("rs-pzimg") >= 0)) {
                                var u = e(p[d]).data(),
                                    m = g(p[d], t, o),
                                    h = m !== t ? m : i.gA(p[d], "svg_src") != t ? i.gA(p[d], "svg_src") : p[d].src === t ? u.src : p[d].src,
                                    f = i.getLoadObj(o, h);
                                if (i.sA(p[d], "src-rs-ref", h), u.loaded === t && f !== t && f.progress && "loaded" == f.progress) {
                                    if (p[d].src = f.src, "img" == f.type) {
                                        if (u.slidebgimage) {
                                            -1 == f.src.indexOf("images/transparent.png") && -1 == f.src.indexOf("assets/transparent.png") || u.bgcolor === t ? p[d].style.backgroundImage = 'url("' + f.src + '")' : u.bgcolor !== t && (p[d].style.background = u.bgcolor), i.sA(l[c], "owidth", f.width), i.sA(l[c], "oheight", f.height);
                                            var v = l[c].getElementsByTagName("rs-sbg-wrap");
                                            if (v.length > 0 && (i.sA(v[0], "owidth", f.width), i.sA(v[0], "oheight", f.height)), "carousel" === i[o].sliderType) {
                                                var y = e(v),
                                                    b = i.getSlideIndex(o, i.gA(l[c], "key"));
                                                y.data("panzoom") === t || i[o].panzoomTLs !== t && i[o].panzoomTLs[b] !== t || i.startPanZoom(y, o, 0, b, "prepare")
                                            }
                                        }
                                    } else "svg" == f.type && "loaded" == f.progress && (p[d].innerHTML = f.innerHTML);
                                    u.loaded = !0
                                }
                                f && f.progress && f.progress.match(/inprogress|inload|prepared/g) && (!f.error && e.now() - f.starttoload < 3e3 ? n = !0 : (f.progress = "failed", f.reported_img || (f.reported_img = !0, console.log(h + "  Could not be loaded !")))), 1 != i[o].youtubeapineeded || window.YT && YT.Player != t || (n = O("youtube", o)), 1 != i[o].vimeoapineeded || window.Vimeo || (n = O("vimeo", o))
                            }
                    }!a && i[o].audioqueue && i[o].audioqueue.length > 0 && e.each(i[o].audioqueue, function(t, i) {
                    i.status && "prepared" === i.status && e.now() - i.start < i.waittime && (n = !0)
                }), e.each(i[o].loadqueue, function(t, i) {
                    !0 === i.static && ("loaded" != i.progress && "done" !== i.progress || "failed" === i.progress) && ("failed" != i.progress || i.reported ? !i.error && e.now() - i.starttoload < 5e3 ? n = !0 : i.reported || (i.reported = T(i.src, i.error)) : i.reported = T(i.src, i.error))
                }), n ? tpGS.gsap.delayedCall(.02, i.waitForCurrentImages, [r, o, s]) : s !== t && tpGS.gsap.delayedCall(1e-4, s)
            }
        },
        updateVisibleArea: function(a) {
            for (var r in i[a].viewPort.visible_area = i.revToResp(i[a].viewPort.visible_area, i[a].rle, "0px"), i[a].viewPort.vaType = new Array(4), i[a].viewPort.visible_area) i[a].viewPort.visible_area.hasOwnProperty(r) && (e.isNumeric(i[a].viewPort.visible_area[r]) && (i[a].viewPort.visible_area[r] += "%"), i[a].viewPort.visible_area[r] !== t && (i[a].viewPort.vaType[r] = i[a].viewPort.visible_area[r].indexOf("%") >= 0 ? "%" : "px"), i[a].viewPort.visible_area[r] = parseInt(i[a].viewPort.visible_area[r], 0), i[a].viewPort.visible_area[r] = "%" == i[a].viewPort.vaType[r] ? i[a].viewPort.visible_area[r] / 100 : i[a].viewPort.visible_area[r])
        },
        observeFonts: function(e, a, r) {
            r = r === t ? 0 : r, i.fonts === t && (i.fonts = {}, i.monoWidth = n("monospace"), i.sansWidth = n("sans-serif"), i.serifWidth = n("serif")), r++;
            var o = i.fonts[e];
            !0 !== i.fonts[e] && (i.fonts[e] = i.monoWidth !== n(e + ",monospace") || i.sansWidth !== n(e + ",sans-serif") || i.serifWidth !== n(e + ",serif")), 100 === r || (!1 === o || o === t) && !0 === i.fonts[e] ? (n(e + ",monospace", !0), n(e + ",sans-serif", !0), n(e + ",serif", !0), a()) : setTimeout(function() {
                i.observeFonts(e, a, r)
            }, 19)
        },
        getversion: function() {
            return "Slider Revolution 6.2.11"
        },
        currentSlideIndex: function(e) {
            return i[e].pr_active_key
        },
        iOSVersion: function() {
            return !!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) && navigator.userAgent.match(/OS 4_\d like Mac OS X/i)
        },
        isIE: function(t, i) {
            var a = e('<div style="display:none;"/>').appendTo(e("body"));
            a.html("\x3c!--[if " + (i || "") + " IE " + (t || "") + "]><a>&nbsp;</a><![endif]--\x3e");
            var r = a.find("a").length;
            return a.remove(), r
        },
        is_mobile: function() {
            var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                i = !1;
            if (window.orientation !== t) i = !0;
            else
                for (var a in e) e.hasOwnProperty(a) && (i = !!(i || navigator.userAgent.split(e[a]).length > 1) || i);
            return i
        },
        is_android: function() {
            var e = ["android", "Android"],
                t = !1;
            for (var i in e) e.hasOwnProperty(i) && (t = !!(t || navigator.userAgent.split(e[i]).length > 1) || t);
            return t
        },
        callBackHandling: function(t, a, r) {
            i[t].callBackArray && e.each(i[t].callBackArray, function(e, t) {
                t && t.inmodule && t.inmodule === a && t.atposition && t.atposition === r && t.callback && t.callback.call()
            })
        },
        get_browser: function() {
            var e, t = navigator.userAgent,
                i = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            return /trident/i.test(i[1]) ? (e = /\brv[ :]+(\d+)/g.exec(t) || [], "IE") : "Chrome" === i[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e[1].replace("OPR", "Opera") : (i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && i.splice(1, 1, e[1]), i[0])
        },
        get_browser_version: function() {
            var e, t = navigator.appName,
                i = navigator.userAgent,
                a = i.match(/(edge|opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return a && null != (e = i.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [t, navigator.appVersion, "-?"])[1]
        },
        isFirefox: function(e) {
            return i[e].isFirefox = i[e].isFirefox === t ? "Firefox" === i.get_browser() : i[e].isFirefox, i[e].isFirefox
        },
        isSafari11: function() {
            return "safari" === e.trim(i.get_browser().toLowerCase()) && parseFloat(i.get_browser_version()) >= 11
        },
        getHorizontalOffset: function(e, t) {
            var i = d(e, ".outer-left"),
                a = d(e, ".outer-right");
            return "left" == t ? i : "right" == t ? a : "all" == t ? {
                left: i,
                right: a,
                both: i + a
            } : i + a
        },
        getComingSlide: function(a, r) {
            var o = i[a].pr_next_key !== t ? i[a].pr_next_key : i[a].pr_processing_key !== t ? i[a].pr_processing_key : i[a].pr_active_key,
                s = 0;
            if (s = 0, i[a].pr_active_slide !== t && "true" == i.gA(i[a].pr_active_slide[0], "not_in_nav") && (o = i[a].pr_lastshown_key), r !== t && e.isNumeric(r) || r !== t && r.match(/to/g)) s = 1 === r || -1 === r ? parseInt(o, 0) + r < 0 ? i[a].slideamount - 1 : parseInt(o, 0) + r >= i[a].slideamount ? 0 : parseInt(o, 0) + r : (r = e.isNumeric(r) ? r : parseInt(r.split("to")[1], 0)) < 0 ? 0 : r > i[a].slideamount - 1 ? i[a].slideamount - 1 : r;
            else if (r)
                for (var n in i[a].slides) i[a].slides.hasOwnProperty(n) && (s = i[a].slides && i[a].slides[n] && i.gA(i[a].slides[n], "key") === r ? n : s);
            return {
                nindex: s,
                aindex: o
            }
        },
        callingNewSlide: function(e, a, r) {
            var o = i.getComingSlide(e, a);
            i[e].pr_next_key = o.nindex, i[e].sdir = i[e].pr_next_key < i[e].pr_active_key ? 1 : 0, r && i[e].carousel !== t && (i[e].carousel.focused = i[e].pr_next_key), i[e].ctNavElement ? i[e].ctNavElement = !1 : i[e].c.trigger("revolution.nextslide.waiting"), (i[e].started && o.aindex === i[e].pr_next_key && o.aindex === i[e].pr_lastshown_key || i[e].pr_next_key !== o.aindex && -1 != i[e].pr_next_key && i[e].pr_lastshown_key !== t) && R(e, r)
        },
        getLoadObj: function(e, a) {
            var r = i[e].loadqueue !== t && i[e].loadqueue.filter(function(e) {
                return e.src === a
            })[0];
            return r === t ? {
                src: a
            } : r
        },
        updateDimensions: function(e) {
            !1 === i[e].dimensionChanged && i[e].conw !== t && i[e].conh !== t && 0 !== i[e].conw && 0 !== i[e].conh || (i[e].lastconw = i[e].conw, i[e].lastconh = i[e].conh, i[e].conw = i[e].c.width(), i[e].conh = i[e].infullscreenmode ? i[e].minHeight : i[e].c.height(), i[e].width = "carousel" === i[e].sliderType ? i[e].conw : i[e].canvasWidth === t ? i[e].canvas.width() : i[e].canvasWidth, i[e].height = "carousel" === i[e].sliderType ? i[e].conh : i[e].canvas.height(), i[e].dimensionChanged = !1, i.scrollBarWidth > 0 && i.openModalId !== t && e !== i.openModalId && (i[e].lastconw = i[e].lastconw - i.scrollBarWidth, i[e].conw = i[e].conw - i.scrollBarWidth, i[e].width = i[e].width - i.scrollBarWidth), !0 !== i[e].navigation.initialised && window.requestAnimationFrame(function() {
                i[e].width === t && i.updateDimensions(e), "hero" !== i[e].sliderType && i.createNavigation && i[e].navigation.use && !0 !== i[e].navigation.createNavigationDone && i.createNavigation(e), i.resizeThumbsTabs && i.resizeThumbsTabs && i[e].navigation.use && i.resizeThumbsTabs(e)
            }))
        },
        getSlideIndex: function(e, t) {
            var a = !1;
            for (var r in i[e].slides) {
                if (!i[e].slides.hasOwnProperty(r) || !1 !== a) continue;
                a = i.gA(i[e].slides[r], "key") === t ? r : a
            }
            return !1 === a ? 0 : a
        },
        loadUpcomingContent: function(e) {
            if ("smart" == i[e].lazyType) {
                var t = [],
                    a = parseInt(i.getSlideIndex(e, i.gA(i[e].pr_next_slide[0], "key")), 0),
                    r = a - 1 < 0 ? i[e].realslideamount - 1 : a - 1,
                    o = a + 1 == i[e].realslideamount ? 0 : a + 1;
                r !== a && t.push(i[e].slides[r]), o !== a && t.push(i[e].slides[o]), t.length > 0 && (i.loadImages(t, e, 2), i.waitForCurrentImages(t, e, function() {}))
            }
        },
        getFullscreenOffsets: function(a) {
            var r = 0;
            if (i[a].fullScreenOffsetContainer != t) {
                var o = ("" + i[a].fullScreenOffsetContainer).split(",");
                for (var s in o) o.hasOwnProperty(s) && (r += e(o[s]).outerHeight(!0) || 0)
            }
            return i[a].fullScreenOffset != t && (!e.isNumeric(i[a].fullScreenOffset) && i[a].fullScreenOffset.split("%").length > 1 ? r += i.getWinH(a) * parseInt(i[a].fullScreenOffset, 0) / 100 : e.isNumeric(parseInt(i[a].fullScreenOffset, 0)) && (r += parseInt(i[a].fullScreenOffset, 0) || 0)), r
        },
        contWidthManager: function(e, a) {
            i[e].CWMDONE = !0;
            var r = i[e].navOutterOffsets !== t ? i[e].navOutterOffsets.both : 0;
            i[e].navOutterOffsets = i.getHorizontalOffset(i[e].c, "all");
            var o, s = i[e].navOutterOffsets.left,
                n = i[e].blockSpacing !== t && i[e].blockSpacing.left !== t ? parseInt(i[e].blockSpacing.left[i[e].level], 0) : 0,
                l = n + (i[e].blockSpacing !== t && i[e].blockSpacing.right !== t ? parseInt(i[e].blockSpacing.right[i[e].level], 0) : 0),
                d = i[e].modal !== t && i[e].modal.useAsModal ? i.winWAll : i.winW;
            i[e].conw = i[e].conw === t ? i[e].c.width() : i[e].conw, "auto" === i[e].sliderLayout || "fullscreen" === i[e].sliderLayout && !0 === i[e].disableForceFullWidth ? "fullscreen" == i[e].sliderLayout && 1 == i[e].disableForceFullWidth ? o = {
                left: 0,
                width: "auto"
            } : (i[e].canvasWidth = i[e].conw - i[e].navOutterOffsets.both, tpGS.gsap.set(i[e].canvas, {
                left: "carousel" === i[e].sliderType ? 0 : s,
                width: i[e].canvasWidth
            })) : o = {
                left: 0 - Math.ceil(i[e].rsFullWidthWrap.offset().left - (s + n)),
                width: d - (i[e].navOutterOffsets.both + l)
            }, o === t || i[e].caches.contWidthManager !== t && i[e].caches.contWidthManager.left === o.left && i[e].caches.contWidthManager.width === o.width || (tpGS.gsap.set(i[e].cpar, o), i[e].caches.contWidthManager = {
                left: o.left,
                width: o.width
            }, i[e].dimensionChanged = !0), "auto" === i[e].sliderLayout && i[e].modal !== t && i[e].modal.useAsModal && (i[e].canvasWidth = Math.min(i[e].gridwidth[i[e].level], d), tpGS.gsap.set([i[e].modal.c, i[e].canvas], {
                width: i[e].canvasWidth
            })), i[e].slayers && i[e].slayers.length > 0 && "fullwidth" != i[e].sliderLayout && "fullscreen" != i[e].sliderLayout && tpGS.gsap.set(i[e].slayers, {
                left: s
            }), i[e].navOutterOffsets.both !== r && (i[e].dimensionChanged = !0, i.updateDimensions(e), i.updateAnimatingLayerPositions(i[e].lastAnimateLayersCall))
        },
        setSize: function(e, a) {
            var r, o, s = parseInt(i[e].top_outer || 0) + parseInt(i[e].bottom_outer || 0),
                n = 0,
                l = 0,
                d = 0,
                c = i[e].pr_processing_key || i[e].pr_active_key || 0,
                p = i[e].pr_active_key || 0,
                g = {},
                u = {};
            if (g.marginTop = "carousel" == i[e].sliderType ? parseInt(i[e].carousel.padding_top || 0, 0) : 0, g.marginBottom = "carousel" == i[e].sliderType ? parseInt(i[e].carousel.padding_bottom || 0, 0) : 0, i[e].blockSpacing !== t && tpGS.gsap.set(i[e].blockSpacing.block, {
                    paddingLeft: i[e].blockSpacing.left[i[e].level],
                    paddingRight: i[e].blockSpacing.right[i[e].level],
                    marginTop: i[e].blockSpacing.top[i[e].level],
                    marginBottom: i[e].blockSpacing.bottom[i[e].level]
                }), i[e].paddings === t && (i[e].paddings = {
                    top: parseInt(i[e].cpar.css("paddingTop"), 0) || 0,
                    bottom: parseInt(i[e].cpar.css("paddingBottom"), 0) || 0
                }), i[e].rowzones && i[e].rowzones.length > 0) {
                if (i[e].rowzones[c] !== t)
                    for (r = 0; r < i[e].rowzones[c].length; r++) i[e].rowzonesHeights[c][r] = i[e].rowzones[c][r][0].offsetHeight, n += i[e].rowzonesHeights[c][r];
                if (p !== c)
                    for (r = 0; r < i[e].rowzones[p].length; r++) i[e].rowzonesHeights[p][r] = i[e].rowzones[p][r][0].offsetHeight, l += i[e].rowzonesHeights[p][r];
                n = l / 2 > n ? l : n
            }
            if (i[e].srowzones && i[e].srowzones.length > 0)
                for (r = 0; r < i[e].srowzones.length; r++) d += i[e].srowzones[r][0].offsetHeight;
            if (n = n < d ? d : n, "fullwidth" != i[e].sliderLayout || i[e].autoHeight || (g.maxHeight = Math.max(Math.max(i[e].minHeight, i[e].gridheight[i[e].level]), n), g.maxHeight = 0 !== i[e].maxHeight ? Math.min(i[e].maxHeight, g.maxHeight) : g.maxHeight), i[e].width = i[e].width === t || 0 === i[e].width ? i[e].canvas.width() : i[e].width, i[e].height = i[e].height === t || 0 === i[e].height ? i[e].canvas.height() : i[e].height, "fullscreen" == i[e].sliderLayout || i[e].infullscreenmode) {
                var m = i.getWinH(e) - i.getFullscreenOffsets(e);
                i[e].height = Math.max(n, Math.max(m - s, i[e].minHeight)), p !== c && (i[e].currentSlideHeight = Math.max(l, Math.max(m - s, i[e].minHeight)), i[e].slides[p].style.maxHeight = i[e].currentSlideHeight !== i[e].height ? i[e].currentSlideHeight + "px" : "none"), u.height = i[e].height, g.height = "100%"
            } else i[e].height = Math.round(i[e].gridheight[i[e].level] * (i[e].keepBPHeight ? 1 : i[e].width / i[e].gridwidth[i[e].level])), i[e].height = Math.max(n, Math.max(i[e].autoHeight ? i[e].height : Math.min(i[e].height, i[e].gridheight[i[e].level]), i[e].minHeight)), !1 !== a && (g.height = i[e].height);
            if (o = g.marginTop + g.marginBottom + s + i[e].height + i[e].paddings.top + i[e].paddings.bottom, g.marginTop = 0, g.marginBottom = 0, !1 !== a && (u.height = o), i[e].sbtimeline.set && i[e].sbtimeline.fixed) {
                i[e].curheight = o, i[e].sbtimeline.extended === t && i.updateFixedScrollTimes(e);
                var h = 2 * o + i[e].sbtimeline.extended;
                h !== i[e].caches.setsize__h && (i[e].caches.setsize__h = h, tpGS.gsap.set(i[e].forcer, {
                    height: h
                }))
            } else !1 !== a && o !== i[e].caches.setsize_h && i[e].forcer !== t && (i[e].caches.setsize_h = o, tpGS.gsap.set(i[e].forcer, {
                height: o
            }));
            g !== i[e].emptyObject && JSON.stringify(g) !== i[e].caches.setsizeCOBJ && (i[e].caches.setsizeCOBJ = JSON.stringify(g), tpGS.gsap.set(i[e].c, g)), u !== i[e].emptyObject && JSON.stringify(u) !== i[e].caches.setsizeCPAROBJ && (i[e].caches.setsizeCPAROBJ = JSON.stringify(u), tpGS.gsap.set(i[e].cpar, u)), i[e].currentRowsHeight = n, i[e].modal !== t && i[e].modal.useAsModal && i[e].modal.calibration !== t && "middle" === i[e].modal.vertical && (i[e].modal.calibration.top = i.getWinH(e) < o ? "0%" : "50%", i[e].modal.calibration.y = i.getWinH(e) < o ? "0px" : "-50%", "fullwidth" === i[e].sliderLayout && tpGS.gsap.set(i[e].modal.c.find("rs-module-wrap"), i[e].modal.calibration)), i.requestLayerUpdates(e, "enterstage"), v(e)
        },
        unToggleState: function(e) {
            if (e !== t)
                for (var i = 0; i < e.length; i++) try {
                    document.getElementById(e[i]).classList.remove("rs-tc-active")
                } catch (e) {}
        },
        toggleState: function(e) {
            if (e !== t)
                for (var i = 0; i < e.length; i++) try {
                    document.getElementById(e[i]).classList.add("rs-tc-active")
                } catch (e) {}
        },
        swaptoggleState: function(e) {
            if (e != t && e.length > 0)
                for (var a = 0; a < e.length; a++) {
                    var r = document.getElementById(e[a]);
                    if (i.gA(r, "toggletimestamp") !== t && (new Date).getTime() - i.gA(r, "toggletimestamp") < 250) return;
                    i.sA(r, "toggletimestamp", (new Date).getTime()), null !== r && (r.className.indexOf("rs-tc-active") >= 0 ? r.classList.remove("rs-tc-active") : r.classList.add("rs-tc-active"))
                }
        },
        lastToggleState: function(e) {
            var i;
            if (e !== t)
                for (var a = 0; a < e.length; a++) {
                    var r = document.getElementById(e[a]);
                    i = !0 === i || null !== r && r.className.indexOf("rs-tc-active") >= 0 || i
                }
            return i
        },
        revCheckIDS: function(a, r) {
            if (i.gA(r, "idcheck") === t) {
                var o = r.id,
                    s = e.inArray(r.id, window.RSANYID),
                    n = -1; - 1 !== s && (n = e.inArray(r.id, i[a].anyid), window.RSANYID_sliderID[s] === a && -1 === n || (r.id = r.id + "_" + Math.round(9999 * Math.random()), console.log("Warning - ID:" + o + " exists already. New Runtime ID:" + r.id), s = n = -1)), -1 === n && i[a].anyid.push(r.id), -1 === s && (window.RSANYID.push(r.id), window.RSANYID_sliderID.push(a))
            }
            return i.sA(r, "idcheck", !0), r.id
        },
        buildSpinner: function(i, a, r, o) {
            var s;
            if ("off" !== a) {
                o = o === t ? "" : o, r = r === t ? "#ffffff" : r;
                var n = parseInt(a.replace("spinner", ""), 10);
                if (isNaN(n) || n < 6) {
                    var l = 'style="background-color:' + r + '"',
                        d = o === t || 3 !== n && 4 != n ? "" : l;
                    s = e("<rs-loader " + (o === t || 1 !== n && 2 != n ? "" : l) + ' class="' + a + " " + o + '"><div ' + d + ' class="dot1"></div><div ' + d + ' class="dot2"></div><div ' + d + ' class="bounce1"></div><div ' + d + ' class="bounce2"></div><div ' + d + ' class="bounce3"></div></rs-loader>')
                } else {
                    var c, p = '<div class="rs-spinner-inner"';
                    if (7 === n) - 1 !== r.search("#") ? (c = r.replace("#", ""), c = "rgba(" + parseInt(c.substring(0, 2), 16) + ", " + parseInt(c.substring(2, 4), 16) + ", " + parseInt(c.substring(4, 6), 16) + ", ") : -1 !== r.search("rgb") && (c = r.substring(r.indexOf("(") + 1, r.lastIndexOf(")")).split(",")).length > 2 && (c = "rgba(" + c[0].trim() + ", " + c[1].trim() + ", " + c[2].trim() + ", "), c && "string" == typeof c && (p += ' style="border-top-color: ' + c + "0.65); border-bottom-color: " + c + "0.15); border-left-color: " + c + "0.65); border-right-color: " + c + '0.15)"');
                    else 12 === n && (p += ' style="background:' + r + '"');
                    p += ">";
                    for (var g = [10, 0, 4, 2, 5, 9, 0, 4, 4, 2][n - 6], u = 0; u < g; u++) u > 0 && (p += " "), p += '<span style="background:' + r + '"></span>';
                    s = e('<rs-loader class="' + a + " " + o + '">' + (p += "</div>") + "</div></rs-loader>")
                }
                return s
            }
        },
        playBGVideos: function(r) {
            i[r].pr_next_slide.find("rs-bgvideo").each(function(o) {
                if (a && !i[r].fallbacks.allowHTML5AutoPlayOnAndroid) return !1;
                var s = e(this);
                i.resetVideo(s, r, !1, !0), i[r].videoOutAnim !== t && i[r].videoOutAnim[this.id] !== t && i[r].videoOutAnim[this.id].pause(), tpGS.gsap.fromTo(s, .01, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    ease: "power3.out",
                    onComplete: function() {
                        i.animcompleted(s, r, !0)
                    }
                })
            })
        }
    });
    var a = i.is_mobile(),
        r = (i.is_android(), function(e) {
            i[e].responsiveLevels = i.revToResp(i[e].responsiveLevels, i[e].rle), i[e].visibilityLevels = i.revToResp(i[e].visibilityLevels, i[e].rle), i[e].responsiveLevels[0] = 9999, i[e].rle = i[e].responsiveLevels.length || 1, i[e].gridwidth = i.revToResp(i[e].gridwidth, i[e].rle), i[e].gridheight = i.revToResp(i[e].gridheight, i[e].rle), i[e].editorheight !== t && (i[e].editorheight = i.revToResp(i[e].editorheight, i[e].rle)), l(e), v(e);
            var a = Math.max(i[e].minHeight, i[e].gridheight[i[e].level] * i[e].bw);
            i[e].editorheight !== t && (a = Math.max(a, i[e].editorheight[i[e].level] * i[e].bw)), tpGS.gsap.set(i[e].c, {
                height: a
            })
        }),
        o = function(t, i) {
            var a = [];
            return e.each(t, function(e, t) {
                e != i && a.push(t)
            }), a
        },
        s = function(t, a, r) {
            i[r].c.find(t).each(function() {
                var t = e(this);
                t.data("key") === a && t.remove()
            })
        },
        n = function(e, a) {
            if (i["rsfont_" + e] == t && (i["rsfont_" + e] = document.createElement("span"), i["rsfont_" + e].innerHTML = Array(100).join("wi"), i["rsfont_" + e].style.cssText = ["position:absolute", "width:auto", "font-size:128px", "left:-99999px"].join(" !important;"), i["rsfont_" + e].style.fontFamily = e, document.body.appendChild(i["rsfont_" + e])), a === t) return i["rsfont_" + e].clientWidth;
            document.body.removeChild(i["rsfont_" + e])
        },
        l = function(t, a) {
            var r = 9999,
                o = 0,
                s = 0,
                n = a && 9999 == i[t].responsiveLevels ? i[t].visibilityLevels : i[t].responsiveLevels;
            n && n.length && e.each(n, function(e, a) {
                i.winW < a && (0 == o || o > parseInt(a)) && (r = parseInt(a), i[t].level = e, o = parseInt(a)), i.winW > a && o < a && (o = parseInt(a), s = e)
            }), o < r && (i[t].level = s), i[t].levelForced = i[t].level
        },
        d = function(t, i) {
            var a = 0;
            return t.find(i).each(function() {
                var t = e(this);
                !t.hasClass("tp-forcenotvisible") && a < t.outerWidth() && (a = t.outerWidth())
            }), a
        },
        c = function(r) {
            if (r === t || i[r] === t || i[r].c === t) return !1;
            if (i[r].cpar !== t && i[r].cpar.data("aimg") != t && ("enabled" == i[r].cpar.data("aie8") && i.isIE(8) || "enabled" == i[r].cpar.data("amobile") && a)) i[r].c.html('<img class="tp-slider-alternative-image" src="' + i[r].cpar.data("aimg") + '">');
            else {
                window._rs_firefox13 = !1, window._rs_ie = window._rs_ie === t ? !e.support.opacity : window._rs_ie, window._rs_ie9 = window._rs_ie9 === t ? 9 == document.documentMode : window._rs_ie9;
                var o = e.fn.jquery.split("."),
                    s = parseFloat(o[0]),
                    n = parseFloat(o[1]);
                1 == s && n < 7 && i[r].c.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + o + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), s > 1 && (window._rs_ie = !1), i[r].realslideamount = i[r].slideamount = 0;
                var l = i[r].canvas[0].getElementsByTagName("rs-slide"),
                    d = [];
                for (var c in i[r].notInNav = [], i[r].slides = [], l) l.hasOwnProperty(c) && ("on" == i.gA(l[c], "hsom") && a ? d.push(l[c]) : (i.gA(l[c], "invisible") || 1 == i.gA(l[c], "invisible") ? i[r].notInNav.push(l[c]) : (i[r].slides.push(l[c]), i[r].slideamount++), i[r].realslideamount++, i.sA(l[c], "originalindex", i[r].realslideamount), i.sA(l[c], "origindex", i[r].realslideamount - 1)));
                for (c in d) d.hasOwnProperty(c) && d[c].remove();
                for (c in i[r].notInNav) i[r].notInNav.hasOwnProperty(c) && (i.sA(i[r].notInNav[c], "not_in_nav", !0), i[r].canvas[0].appendChild(i[r].notInNav[c]));
                if (i[r].canvas.css({
                        visibility: "visible"
                    }), i[r].slayers = i[r].c.find("rs-static-layers"), i[r].slayers.length > 0 && i.sA(i[r].slayers[0], "key", "staticlayers"), !0 === i[r].modal.useAsModal && (i[r].cpar.wrap('<rs-modal id="' + i[r].c[0].id + '_modal"></rs-modal>'), i[r].modal.c = i[r].cpar.closest("rs-modal"), i[r].modal.c.appendTo(e("body")), i[r].modal !== t && i[r].modal.alias !== t && i.revModal(r, {
                        mode: "init"
                    })), 1 == i[r].waitForInit || 1 == i[r].modal.useAsModal) return i.RS_toInit !== t && (i.RS_toInit[r] = !0), i[r].c.trigger("revolution.slide.waitingforinit"), void(i[r].waitingForInit = !0);
                window.requestAnimationFrame(function() {
                    u(r)
                }), i[r].initEnded = !0
            }
        },
        p = function() {
            e("body").data("rs-fullScreenMode", !e("body").data("rs-fullScreenMode")), e("body").data("rs-fullScreenMode") && setTimeout(function() {
                i.window.trigger("resize")
            }, 200)
        },
        g = function(e, a, r) {
            return i.gA(e, "lazyload") !== t ? i.gA(e, "lazyload") : i[r].lazyloaddata !== t && i[r].lazyloaddata.length > 0 && i.gA(e, i[r].lazyloaddata) !== t ? i.gA(e, i[r].lazyloaddata) : i.gA(e, "lazy-src") !== t ? i.gA(e, "lazy-src") : i.gA(e, "lazy-wpfc-original-src") !== t ? i.gA(e, "lazy-wpfc-original-src") : i.gA(e, "lazy") !== t ? i.gA(e, "lazy") : a
        },
        u = function(r) {
            if (i[r] !== t) {
                if (i[r].sliderisrunning = !0, !0 !== i[r].noDetach && i[r].c.detach(), i[r].shuffle) {
                    for (var o = i[r].canvas.find("rs-slide:first-child"), s = i.gA(o[0], "firstanim"), n = 0; n < i[r].slideamount; n++) i[r].canvas.find("rs-slide:eq(" + Math.round(Math.random() * i[r].slideamount) + ")").prependTo(i[r].canvas);
                    i.sA(i[r].canvas.find("rs-slide:first-child")[0], "firstanim", s)
                }
                i[r].slides = i[r].canvas[0].getElementsByTagName("rs-slide"), i[r].thumbs = new Array(i[r].slides.length), i[r].slots = 4, i[r].firststart = 1, i[r].loadqueue = [], i[r].syncload = 0;
                var d = 0,
                    c = "carousel" === i[r].sliderType && i[r].carousel.border_radius !== t ? parseInt(i[r].carousel.border_radius, 0) : 0;
                for (var u in i[r].slides)
                    if (i[r].slides.hasOwnProperty(u) && "length" !== u) {
                        var m = i[r].slides[u],
                            f = m.getElementsByTagName("img")[0];
                        i.gA(m, "key") === t && i.sA(m, "key", "rs-" + Math.round(999999 * Math.random()));
                        var v = {
                            params: Array(12),
                            id: i.gA(m, "key"),
                            src: i.gA(m, "thumb") !== t ? i.gA(m, "thumb") : g(f, f !== t ? f.src : t, r)
                        };
                        i.gA(m, "title") === t && i.sA(m, "title", ""), i.gA(m, "description") === t && i.sA(m, "description", ""), v.params[0] = {
                            from: RegExp("\\{\\{title\\}\\}", "g"),
                            to: i.gA(m, "title")
                        }, v.params[1] = {
                            from: RegExp("\\{\\{description\\}\\}", "g"),
                            to: i.gA(m, "description")
                        };
                        for (var b = 1; b <= 10; b++) i.gA(m, "p" + b) !== t ? v.params[b + 1] = {
                            from: RegExp("\\{\\{param" + b + "\\}\\}", "g"),
                            to: i.gA(m, "p" + b)
                        } : v.params[b + 1] = {
                            from: RegExp("\\{\\{param" + b + "\\}\\}", "g"),
                            to: ""
                        };
                        if (i[r].thumbs[d] = e.extend({}, !0, v), c > 0 && tpGS.gsap.set(m, {
                                borderRadius: c + "px"
                            }), i.gA(m, "link") != t || i.gA(m, "linktoslide") !== t) {
                            var _ = i.gA(m, "link") !== t ? i.gA(m, "link") : "slide",
                                w = "slide" != _ ? "no" : i.gA(m, "linktoslide"),
                                x = i.gA(m, "seoz");
                            if (w != t && "no" != w && "next" != w && "prev" != w)
                                for (var k in i[r].slides) i[r].slides.hasOwnProperty(k) && parseInt(i.gA(i[r].slides[k], "origindex"), 0) + 1 == i.gA(m, "linktoslide") && (w = i.gA(i[r].slides[k], "key"));
                            e(m).prepend('<rs-layer class="rs-layer slidelink" id="rs_slidelink_' + Math.round(1e5 * Math.random()) + '" style="z-index:' + ("back" === x ? 0 : "front" === x ? 60 : x !== t ? parseInt(x, 0) : 100) + ';" dataxy="x:c;y:c" data-dim="w:100%;h:100%" data-basealign="slide"' + ("no" == w ? "slide" == _ || a ? "" : "  data-actions='o:click;a:simplelink;target:" + (i.gA(m, "target") || "_self") + ";url:" + _ + ";'" : "  data-actions='" + ("scroll_under" === w ? "o:click;a:scrollbelow;offset:100px;" : "prev" === w ? "o:click;a:jumptoslide;slide:prev;d:0.2;" : "next" === w ? "o:click;a:jumptoslide;slide:next;d:0.2;" : "o:click;a:jumptoslide;slide:" + w + ";d:0.2;") + "'") + " data-frame_1='e:power3.inOut;st:100;sp:100' data-frame_999='e:power3.inOut;o:0;st:w;sp:100'>" + (a ? "<a " + ("slide" != _ ? ("_blank" === i.gA(m, "target") ? 'rel="noopener" ' : "") + 'target="' + (i.gA(m, "target") || "_self") + '" href="' + _ + '"' : "") + "><span></span></a>" : "") + "</rs-layer>")
                        }
                        d++
                    }
                if (i[r].simplifyAll && (i.isIE(8) || i.iOSVersion()) && (i[r].c.find(".rs-layer").each(function() {
                        var t = e(this);
                        t.removeClass("customin customout").addClass("fadein fadeout"), t.data("splitin", ""), t.data("speed", 400)
                    }), i[r].c.find("rs-slide").each(function() {
                        var t = e(this);
                        t.data("transition", "fade"), t.data("masterspeed", 500), t.data("slotamount", 1), (t.find(".rev-slidebg") || t.find(">img").first()).data("panzoom", null)
                    })), window._rs_desktop = window._rs_desktop === t ? !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i) : window._rs_desktop, i[r].autoHeight = "fullscreen" == i[r].sliderLayout || i[r].autoHeight, "fullwidth" != i[r].sliderLayout || i[r].autoHeight || i[r].c.css({
                        maxHeight: i[r].gridheight[i[r].level] + "px"
                    }), "auto" == i[r].sliderLayout || 0 != i[r].c.closest("rs-fullwidth-wrap").length || "fullscreen" === i[r].sliderLayout && 1 == i[r].disableForceFullWidth) i[r].topc = i[r].cpar;
                else {
                    var S = i[r].cpar[0].style.marginTop,
                        L = i[r].cpar[0].style.marginBottom;
                    S = S === t || "" === S ? "" : "margin-top:" + S + ";", L = L === t || "" === L ? "" : "margin-bottom:" + L + ";", i[r].rsFullWidthWrap = i[r].topc = e('<rs-fullwidth-wrap id="' + i[r].c[0].id + '_forcefullwidth" style="' + S + L + '"></rs-fullwidth-wrap>'), i[r].forcer = e('<rs-fw-forcer style="height:' + i[r].cpar.height() + 'px"></rs-fw-forcer>'), i[r].topc.append(i[r].forcer), i[r].topc.insertBefore(i[r].cpar), i[r].cpar.detach(), i[r].cpar.css({
                        marginTop: "0px",
                        marginBottom: "0px",
                        position: "absolute"
                    }), i[r].cpar.prependTo(i[r].topc)
                }
                if (i[r].forceOverflow && i[r].topc[0].classList.add("rs-forceoverflow"), "carousel" === i[r].sliderType && !0 !== i[r].overflowHidden && i[r].c.css({
                        overflow: "visible"
                    }), 0 !== i[r].maxHeight && tpGS.gsap.set([i[r].cpar, i[r].c, i[r].topc], {
                        maxHeight: i[r].maxHeight + "px"
                    }), i[r].fixedOnTop && tpGS.gsap.set(i[r].blockSpacing !== t && i[r].blockSpacing.block !== t ? i[r].blockSpacing.block : i[r].topc, {
                        position: "fixed",
                        top: "0px",
                        left: "0px",
                        pointerEvents: "none",
                        zIndex: 5e3
                    }), i[r].shadow !== t && i[r].shadow > 0 && i[r].cpar.addClass("tp-shadow" + i[r].shadow).append('<div class="tp-shadowcover" style="background-color:' + i[r].cpar.css("backgroundColor") + ";background-image:" + i[r].cpar.css("backgroundImage") + '"></div>'), l(r), !i[r].c.hasClass("revslider-initialised")) {
                    i[r].c[0].classList.add("revslider-initialised"), i[r].c[0].id = i[r].c[0].id === t ? "revslider-" + Math.round(1e3 * Math.random() + 5) : i[r].c[0].id, i.revCheckIDS(r, i[r].c[0]), i[r].origcd = parseInt(i[r].duration, 0), i[r].scrolleffect._L = [], i[r].sbas = i[r].sbas === t ? {} : i[r].sbas, i[r].layers = i[r].layers || {}, i[r].sortedLayers = i[r].sortedLayers || {}, i[r].c.find("rs-layer, rs-row, rs-column, rs-group,  rs-bgvideo, .rs-layer").each(function() {
                        var a, o, s = e(this),
                            n = s.data();
                        if (n.startclasses = this.className, n.startclasses = n.startclasses === t || null === n.startclasses ? "" : n.startclasses, n.animationonscroll = !!i[r].sbtimeline.set && i[r].sbtimeline.layers, n.animationonscroll = !0 === n.animationonscroll || "true" == n.animationonscroll, n.filteronscroll = !!i[r].scrolleffect.set && i[r].scrolleffect.layers, n.pxundermask = n.startclasses.indexOf("rs-pxmask") >= 0 && "off" !== i[r].parallax.type && n.startclasses.indexOf("rs-pxl-") >= 0, n.noPevents = n.startclasses.indexOf("rs-noevents") >= 0, n.sba)
                            for (var l in a = n.sba.split(";")) a.hasOwnProperty(l) && ("t" == (o = a[l].split(":"))[0] && (n.animationonscroll = o[1], "false" == o[1] && (n.animOnScrollForceDisable = !0)), "e" == o[0] && (n.filteronscroll = o[1]), "so" == o[0] && (n.scrollBasedOffset = parseInt(o[1]) / 1e3));
                        if ("true" != n.animationonscroll && 1 != n.animationonscroll || (n.startclasses += " rs-sba", s[0].className += " rs-sba"), n.startclasses.indexOf("rs-layer-static") >= 0 && i.handleStaticLayers && i.handleStaticLayers(s, r), "RS-BGVIDEO" !== s[0].tagName) {
                            if (s[0].classList.add("rs-layer"), "column" === n.type && (n.columnwidth = "33.33%", n.verticalalign = "top", n.column !== t))
                                for (var d in a = n.column.split(";")) a.hasOwnProperty(d) && ("w" === (o = a[d].split(":"))[0] && (n.columnwidth = o[1]), "a" === o[0] && (n.verticalalign = o[1]));
                            var c = n.startclasses.indexOf("slidelink") >= 0 ? "width:100% !important;height:100% !important;" : "",
                                p = "column" !== n.type ? "" : n.verticalalign === t ? " vertical-align:top;" : " vertical-align:" + n.verticalalign + ";",
                                g = "row" === n.type || "column" === n.type ? "position:relative;" : "position:absolute;",
                                u = "",
                                m = "row" === n.type ? "rs-row-wrap" : "column" === n.type ? "rs-column-wrap" : "group" === n.type ? "rs-group-wrap" : "rs-layer-wrap",
                                h = "",
                                f = "",
                                v = (n.noPevents, ";pointer-events:none");
                            "row" === n.type || "column" === n.type || "group" === n.type ? (s[0].classList.remove("tp-resizeme"), "column" === n.type && (n.width = "auto", s[0].group = "row", tpGS.gsap.set(s, {
                                width: "auto"
                            }), n.filteronscroll = !1)) : (h = "display:" + ("inline-block" === s[0].style.display ? "inline-block" : "block") + ";", s.closest("rs-column").length > 0 ? (s[0].group = "column", n.filteronscroll = !1) : s.closest("rs-group-wrap").length > 0 && (s[0].group = "group", n.filteronscroll = !1)), n.wrpcls !== t && (u = u + " " + n.wrpcls), n.wrpid !== t && (f = 'id="' + n.wrpid + '"'), s.wrap("<" + m + " " + f + ' class="rs-parallax-wrap ' + u + '" style="' + p + " " + c + g + h + v + '"><rs-loop-wrap style="' + c + g + h + '"><rs-mask-wrap style="' + c + g + h + '">' + (n.pxundermask ? "<rs-px-mask></rs-px-mask>" : "") + "</rs-mask-wrap></rs-loop-wrap></" + m + ">"), !0 !== n.filteronscroll && "true" != n.filteronscroll || i[r].scrolleffect._L.push(s.parent()), s[0].id = s[0].id === t ? "layer-" + Math.round(999999999 * Math.random()) : s[0].id, i.revCheckIDS(r, s[0]), "column" === n.type && s.closest(".rs-parallax-wrap").append('<rs-cbg-mask-wrap><rs-column-bg id="' + s[0].id + '_rs_cbg"></rs-column-bg></rs-cbg-mask-wrap>'), "text" === n.type && s[0].getElementsByTagName("iframe").length > 0 && (i[r].slideHasIframe = !0, s[0].classList.add("rs-ii-o")), i[r].BUG_safari_clipPath && "true" != n.animationonscroll && 1 != n.animationonscroll && s[0].classList.add("rs-pelock")
                        }
                        i.gA(s[0], "actions") && i.checkActions && i.checkActions(s, r, i[r]), !i.checkVideoApis || window.rs_addedvim && window.rs_addedyt || i[r].youtubeapineeded && i[r].vimeoapineeded || i.checkVideoApis(s, r)
                    }), i.checkActions && i.checkActions(t, r), i[r].c[0].addEventListener("mouseenter", function() {
                        i[r].c.trigger("tp-mouseenter"), i[r].overcontainer = !0
                    }, {
                        passive: !0
                    }), i[r].c[0].addEventListener("mouseover", function() {
                        i[r].c.trigger("tp-mouseover"), i[r].overcontainer = !0
                    }, {
                        passive: !0
                    }), i[r].c[0].addEventListener("mouseleave", function() {
                        i[r].c.trigger("tp-mouseleft"), i[r].overcontainer = !1
                    }, {
                        passive: !0
                    }), i[r].c.find(".rs-layer video").each(function(t) {
                        var i = e(this);
                        i.removeClass("video-js vjs-default-skin"), i.attr("preload", ""), i.css({
                            display: "none"
                        })
                    }), i[r].rs_static_layer = i[r].c[0].getElementsByTagName("rs-static-layers"), i.preLoadAudio && i[r].rs_static_layer.length > 0 && i.preLoadAudio(e(i[r].rs_static_layer), r, 1), i[r].rs_static_layer.length > 0 && (i.loadImages(i[r].rs_static_layer[0], r, 0, !0), i.waitForCurrentImages(i[r].rs_static_layer[0], r, function() {
                        i[r] !== t && i[r].c.find("rs-static-layers img").each(function() {
                            this.src = i.getLoadObj(r, i.gA(this, "src") != t ? i.gA(this, "src") : this.src).src
                        })
                    })), i[r].rowzones = [], i[r].rowzonesHeights = [], i[r].middleZones = [];
                    var T = H("#")[0];
                    if (T !== t && T.length < 9 && T.split("slide").length > 1 && -1 == T.indexOf("slider")) {
                        var O = parseInt(T.split("slide")[1], 0);
                        e.isNumeric(parseInt(O, 0)) && ((O = parseInt(O, 0)) < 1 && (O = 1), O > i[r].slideamount && (O = i[r].slideamount), i[r].startWithSlide = O)
                    }
                    i[r].loader = i.buildSpinner(r, i[r].spinner, i[r].spinnerclr), i[r].loaderVisible = !0, i[r].c.append(i[r].loader), i[r].height = i[r].cpar.height() - ("fullscreen" === i[r].sliderLayout ? i.getFullscreenOffsets(r) : 0), i[r].c.height(i[r].height), y(r), ("off" !== i[r].parallax.type || i[r].scrolleffect.set || i[r].sbtimeline.set) && i.checkForParallax && i.checkForParallax(r), i[r].fallbacks.disableFocusListener || "true" == i[r].fallbacks.disableFocusListener || !0 === i[r].fallbacks.disableFocusListener || (i[r].c.addClass("rev_redraw_on_blurfocus"), j());
                    var A = i[r].viewPort;
                    for (var b in i[r].slides)
                        if (i[r].slides.hasOwnProperty(b)) {
                            var R = e(i[r].slides[b]);
                            i[r].rowzones[b] = [], i[r].rowzonesHeights[b] = [], i[r].middleZones[b] = [], R.find("rs-zone").each(function() {
                                i[r].rowzones[b].push(e(this)), this.className.indexOf("rev_row_zone_middle") >= 0 && i[r].middleZones[b].push(this)
                            }), (A.enable && i[r].inviewport || !A.enable) && "all" == i[r].lazyType && (i.loadImages(R[0], r, b), i.waitForCurrentImages(R[0], r, function() {}))
                        }
                    i[r].srowzones = [], i[r].smiddleZones = [], i[r].slayers && i[r].slayers.find("rs-zone").each(function() {
                        i[r].srowzones.push(e(this)), this.className.indexOf("rev_row_zone_middle") >= 0 && i[r].smiddleZones.push(this)
                    }), "carousel" === i[r].sliderType && tpGS.gsap.set(i[r].canvas, {
                        scale: 1,
                        perspective: 1200,
                        transformStyle: "flat",
                        opacity: 0
                    }), i[r].c.prependTo(i[r].cpar), e("body").data("rs-fullScreenMode", !1), window.addEventListener("fullscreenchange", p, {
                        passive: !0
                    }), window.addEventListener("mozfullscreenchange", p, {
                        passive: !0
                    }), window.addEventListener("webkitfullscreenchange", p, {
                        passive: !0
                    }), i.document.on("updateContainerSizes." + i[r].c.attr("id"), function() {
                        if (i[r] !== t) {
                            if (i[r].c == t) return !1;
                            0 != e("body").find(i[r].c) && (l(r), i.contWidthManager(r, "onResize_RunSlider")), i[r].fullScreenMode = i.checkfullscreenEnabled(r), (i[r].c.outerWidth(!0) != i[r].width || i[r].c.is(":hidden") || "fullscreen" == i[r].sliderLayout && i.getWinH(r) != i.lastwindowheight) && (i.lastwindowheight = i.getWinH(r), h(r))
                        }
                    }), A.presize && (i[r].pr_next_slide = e(i[r].slides[0]), i.loadImages(i[r].pr_next_slide[0], r, 0, !0), i.waitForCurrentImages(i[r].pr_next_slide.find(".tp-layers"), r, function() {
                        i.animateTheLayers && i.animateTheLayers({
                            slide: i[r].pr_next_key,
                            id: r,
                            mode: "preset",
                            caller: "runSlider"
                        })
                    })), ("off" != i[r].parallax.type || i[r].sbtimeline.set || !0 === A.enable) && i.scrollTicker(r), !0 !== A.enable && (i[r].inviewport = !0, i.enterViewPort(r)), i.RS_toInit !== t && (i.RS_toInit[r] = !0)
                }
            }
        },
        m = function(e, a) {
            i.winW < i[e].hideSliderAtLimit ? (i[e].c.trigger("stoptimer"), !0 !== i[e].sliderIsHidden && (i.sA(i[e].cpar[0], "displaycache", "none" != i[e].cpar.css("display") ? i[e].cpar.css("display") : i.gA(i[e].cpar[0], "displaycache")), i[e].cpar.css({
                display: "none"
            }), i[e].sliderIsHidden = !0)) : (!0 === i[e].sliderIsHidden || i[e].sliderIsHidden === t && i[e].c.is(":hidden")) && a && (i[e].cpar[0].style.display = i.gA(i[e].cpar[0], "displaycache") != t && "none" != i.gA(i[e].cpar[0], "displaycache") ? i.gA(i[e].cpar[0], "displaycache") : "block", i[e].sliderIsHidden = !1, i[e].c.trigger("restarttimer"), window.requestAnimationFrame(function() {
                h(e, !0)
            })), i.hideUnHideNav && i[e].navigation.use && i.hideUnHideNav(e)
        },
        h = function(e, r) {
            if (i[e].c === t) return !1;
            if (i[e].dimensionReCheck = {}, i[e].dimensionChanged = !0, i[e].c.trigger("revolution.slide.beforeredraw"), 1 == i[e].infullscreenmode && (i[e].minHeight = i.getWinH(e)), a && (i[e].lastMobileHeight = i.getWinH(e)), l(e), !i.resizeThumbsTabs || !0 === i.resizeThumbsTabs(e)) {
                if (window.requestAnimationFrame(function() {
                        m(e, !0 !== r), C(e)
                    }), i[e].widthTester = i[e].width, i[e].canvasWidthTester = i[e].canvasWidth, i.contWidthManager(e, "containerResized_1"), i.updateDimensions(e), i.setSize(e), i.contWidthManager(e, "containerResized_2"), i[e].widthTester === i[e].width && i[e].canvasWidthTester === i[e].canvasWidth || (i[e].dimensionChanged = !0, i.updateDimensions(e), i.setSize(e)), i[e].started) {
                    if ("carousel" == i[e].sliderType && i.prepareCarousel(e), "standard" === i[e].sliderType && i[e].mtl !== t && i.animateSlide({
                            recall: !0,
                            id: e
                        }), "carousel" === i[e].sliderType && i[e].lastconw != i[e].conw && (clearTimeout(i[e].pcartimer), i[e].pcartimer = setTimeout(function() {
                            i.prepareCarousel(e), i.animateTheLayers({
                                slide: "individual",
                                id: e,
                                mode: "rebuild",
                                caller: "containerResized_1"
                            })
                        }, 100), i[e].lastconw = i[e].conw), i.animateTheLayers && (i[e].pr_processing_key !== t ? i.animateTheLayers({
                            slide: i[e].pr_processing_key,
                            id: e,
                            mode: "rebuild",
                            caller: "containerResized_2"
                        }) : i[e].pr_active_key !== t && i.animateTheLayers({
                            slide: i[e].pr_active_key,
                            id: e,
                            mode: "rebuild",
                            caller: "containerResized_3"
                        })), "carousel" === i[e].sliderType)
                        for (var o in i[e].panzoomTLs) i[e].panzoomTLs.hasOwnProperty(o) && i.startPanZoom(i[e].panzoomBGs[o], e, i[e].panzoomTLs[o].progress(), o, i[e].panzoomTLs[o].isActive() ? "play" : "reset");
                    else f(e, i[e].pr_active_bg), f(e, i[e].pr_next_bg);
                    clearTimeout(i[e].mNavigTimeout), i.manageNavigation && (i[e].mNavigTimeout = setTimeout(function() {
                        i.manageNavigation(e)
                    }, 60))
                }
                i.prepareCoveredVideo(e)
            }
            i[e].c.trigger("revolution.slide.afterdraw")
        },
        f = function(e, a) {
            if (a && a.data("panzoom") !== t) {
                var r = i.getSlideIndex(e, i.gA(i[e].slides[i[e].pr_active_key], "key"));
                i.startPanZoom(a, e, i[e].panzoomTLs[r] !== t ? i[e].panzoomTLs[r].progress() : 0, r, "play")
            }
        },
        v = function(e) {
            i[e].justifyCarousel ? i[e].bh = i[e].bw = 1 : (i[e].bw = i[e].width / i[e].gridwidth[i[e].level], i[e].bh = i[e].height / i[e].gridheight[i[e].level], i[e].bw = isNaN(i[e].bw) ? 1 : i[e].bw, i[e].bh = isNaN(i[e].bh) ? 1 : i[e].bh, i[e].bh > i[e].bw ? i[e].bh = i[e].bw : i[e].bw = i[e].bh, (i[e].bh > 1 || i[e].bw > 1) && (i[e].bw = 1, i[e].bh = 1))
        },
        y = function(a) {
            if (!0 !== i[a].noDetach && i[a].canvas.detach(), i[a].autoHeight && tpGS.gsap.set([i[a].c, i[a].cpar], {
                    maxHeight: "none"
                }), tpGS.gsap.set(i[a].canvas, i[a].modal !== t && i[a].modal.useAsModal ? {
                    overflow: "hidden",
                    width: "100%",
                    height: "100%"
                } : {
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: i[a].autoHeight ? "none" : i[a].cpar.css("maxHeight")
                }), "carousel" === i[a].sliderType) {
                var r = "margin-top:" + parseInt(i[a].carousel.padding_top || 0, 0) + "px;";
                i[a].canvas.css({
                    overflow: "visible"
                }).wrap('<rs-carousel-wrap style="' + r + '"></rs-carousel-wrap>'), i[a].cpar.prepend("<rs-carousel-space></rs-carousel-space>").append("<rs-carousel-space></rs-carousel-space>"), i.defineCarouselElements(a)
            }
            i[a].startWithSlide = i[a].startWithSlide === t ? t : Math.max(1, (i[a].sliderType, parseInt(i[a].startWithSlide))), i[a].cpar.css({
                overflow: "visible"
            }), i[a].scrolleffect.bgs = [];
            for (var o = 0; o < i[a].slides.length; o++) {
                var s = e(i[a].slides[o]),
                    n = s.find(">img"),
                    l = s.find("rs-bgvideo");
                n.detach(), l.detach(), (i[a].startWithSlide != t && i.gA(i[a].slides[o], "originalindex") == i[a].startWithSlide || i[a].startWithSlide === t && 0 == o) && (i[a].pr_next_key = s.index()), tpGS.gsap.set(s, {
                    width: "100%",
                    height: "100%",
                    overflow: "hidden"
                }), n.wrap("<rs-sbg-px><rs-sbg-wrap></rs-sbg-wrap></rs-sbg-px>");
                var d = n.closest("rs-sbg-wrap"),
                    c = s.data("mediafilter"),
                    p = b(n.data(), a),
                    u = p.bgcolor !== t && p.bgcolor.indexOf("gradient") >= 0,
                    m = p.bgcolor !== t && p.bgcolor.indexOf("gradient") >= 0 ? "background:" + p.bgcolor + ";" : "background-color:" + p.bgcolor + ";";
                p.src = n[0].src, p.lazyload = g(n[0], t, a), p.slidebgimage = !0, c = "none" === c || c === t ? "" : c, l.length > 0 && (l.addClass("defaultvid").css({
                    zIndex: 30
                }), c !== t && "" !== c && "none" !== c && l.addClass(c), l.appendTo(d), p.parallax != t && (l.data("parallax", p.parallax), l.data("showcoveronpause", "on"), l.data("mediafilter", c))), "none" != i[a].dottedOverlay && i[a].dottedOverlay != t && d.append('<rs-dotted class="' + i[a].dottedOverlay + '"></rs-dotted>'), m += (u ? "" : "background-repeat:" + p.bgrepeat + ";background-image:url(" + p.src + ");background-size:" + p.bgfit + ";background-position:" + p.bgposition + ";") + "width:100%;height:100%;", m += "standard" === i[a].sliderType || "undefined" === i[a].sliderType ? "opacity:0;" : "", n.data("mediafilter", c), c = n.data("panzoom") !== t ? "" : c;
                var h = e("<rs-sbg " + (p.lazyload !== t ? 'data-lazyload="' + p.lazyload + '"' : "") + ' src="' + p.src + '" class="' + c + '" data-bgcolor="' + p.bgcolor + '" style="' + m + '"></rs-sbg>');
                d.append(h);
                var f = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + n.get(0).outerHTML);
                n.replaceWith(f), d.data(p), h.data(p), i.gA(s[0], "sba") === t && i.sA(s[0], "sba", "");
                var v = {},
                    y = i.gA(s[0], "sba").split(";");
                for (var _ in y)
                    if (y.hasOwnProperty(_)) {
                        var w = y[_].split(":");
                        switch (w[0]) {
                            case "f":
                                v.f = w[1];
                                break;
                            case "b":
                                v.b = w[1];
                                break;
                            case "g":
                                v.g = w[1];
                                break;
                            case "t":
                                v.s = w[1]
                        }
                    }
                i.sA(s[0], "scroll-based", !!i[a].sbtimeline.set && (v.s !== t && v.s)), i[a].scrolleffect.set ? (i[a].scrolleffect.bgs.push({
                    fade: v.f !== t ? v.f : !!i[a].scrolleffect.slide && i[a].scrolleffect.fade,
                    blur: v.b !== t ? v.b : !!i[a].scrolleffect.slide && i[a].scrolleffect.blur,
                    grayscale: v.g !== t ? v.g : !!i[a].scrolleffect.slide && i[a].scrolleffect.grayscale,
                    c: d.wrap("<rs-sbg-effectwrap></rs-sbg-effectwrap>").parent()
                }), s.prepend(d.parent().parent())) : s.prepend(d.parent())
            }
            "carousel" === i[a].sliderType ? (tpGS.gsap.set(i[a].carousel.wrap, {
                opacity: 0
            }), i[a].c[0].appendChild(i[a].carousel.wrap[0])) : i[a].c[0].appendChild(i[a].canvas[0])
        },
        b = function(r, o) {
            r.bg = r.bg === t ? "" : r.bg;
            var s = r.bg.split(";"),
                n = {
                    bgposition: "50% 50%",
                    bgfit: "cover",
                    bgrepeat: "no-repeat",
                    bgcolor: "transparent"
                };
            for (var l in s)
                if (s.hasOwnProperty(l)) {
                    var d = s[l].split(":"),
                        c = d[0],
                        p = d[1],
                        g = "";
                    switch (c) {
                        case "p":
                            g = "bgposition";
                            break;
                        case "f":
                            g = "bgfit";
                            break;
                        case "r":
                            g = "bgrepeat";
                            break;
                        case "c":
                            g = "bgcolor"
                    }
                    g !== t && (n[g] = p)
                }
            return i[o].fallbacks.panZoomDisableOnMobile && a && (n.panzoom = null, n.bgfit = "cover"), e.extend(!0, r, n)
        },
        _ = function(t, a) {
            a.find(".slot, .slot-circle-wrapper").each(function() {
                e(this).remove()
            }), i[t].transition = 0
        },
        w = function(e) {
            var i = e;
            return e != t && e.length > 0 && (i = e.split("?")[0]), i
        },
        x = function(e) {
            var i = e;
            return e != t && e.length > 0 && (i = i.replace(document.location.protocol, "")), i
        },
        k = function(e, t) {
            var i = e.split("/"),
                a = t.split("/");
            i.pop();
            for (var r = 0; r < a.length; r++) "." != a[r] && (".." == a[r] ? i.pop() : i.push(a[r]));
            return i.join("/")
        },
        S = function(e, a, r) {
            if (i[a] !== t) {
                for (var o in i[a].syncload--, i[a].loadqueue)
                    if (i[a].loadqueue.hasOwnProperty(o) && "loaded" !== i[a].loadqueue[o].progress) {
                        var s = i[a].loadqueue[o].src !== t ? i[a].loadqueue[o].src.replace(/\.\.\/\.\.\//gi, "") : i[a].loadqueue[o].src;
                        s.indexOf("www.") < 13 && (s = s.replace("www.", ""));
                        var n = e.src.indexOf("www.") < 13 ? e.src.replace("www.", "") : e.src;
                        (s === e.src || x(s) === x(n) || w(document.location.protocol + s) === w(decodeURIComponent(n)) || w(document.location.origin + s) === w(decodeURIComponent(n)) || w(document.location.origin.replace("/www.", "/") + s) === w(decodeURIComponent(n)) || w(document.location.origin.replace("/www.", "/") + s) === w(decodeURIComponent(n).replace("/www.", "/")) || w(self.location.href.substring(0, self.location.href.length - 1) + s) === w(decodeURIComponent(n)) || w(k(self.location.href, i[a].loadqueue[o].src)) === w(decodeURIComponent(n)) || w(document.location.origin + "/" + s) === w(decodeURIComponent(n)) || w(self.location.href.substring(0, self.location.href.length - 1) + "/" + s) === w(decodeURIComponent(n)) || w(i[a].loadqueue[o].src) === w(decodeURIComponent(n)) || "file://" === window.location.origin && w(e.src).match(new RegExp(s))) && (i[a].loadqueue[o].img = e, i[a].loadqueue[o].progress = r, i[a].loadqueue[o].width = e.width, i[a].loadqueue[o].height = e.height)
                    }
                L(a)
            }
        },
        L = function(a) {
            4 != i[a].syncload && i[a].loadqueue && e.each(i[a].loadqueue, function(r, o) {
                if ("prepared" == o.progress && i[a].syncload <= 4) {
                    if (i[a].syncload++, "img" == o.type) {
                        var s = new Image;
                        /^([\w]+\:)?\/\//.test(o.src) && -1 === o.src.indexOf(location.host) && "" !== i[a].imgCrossOrigin && i[a].imgCrossOrigin !== t && (s.crossOrigin = i[a].imgCrossOrigin), s.onload = function() {
                            S(this, a, "loaded"), o.error = !1
                        }, s.onerror = function() {
                            S(this, a, "failed"), o.error = !0
                        }, s.src = o.src, o.starttoload = e.now()
                    } else e.get(o.src, function(e) {
                        o.innerHTML = (new XMLSerializer).serializeToString(e.documentElement), o.progress = "loaded", i[a].syncload--, L(a)
                    }).fail(function() {
                        o.progress = "failed", i[a].syncload--, L(a)
                    });
                    o.progress = "inload"
                }
            })
        },
        T = function(e, t) {
            return console.log("Static Image " + e + "  Could not be loaded in time. Error Exists:" + t), !0
        },
        O = function(t, a) {
            if (e.now() - i[a][t + "starttime"] > 5e3 && 1 != i[a][t + "warning"]) {
                i[a][t + "warning"] = !0;
                var r = t + " Api Could not be loaded !";
                "https:" === location.protocol && (r += " Please Check and Renew SSL Certificate !"), console.error(r), i[a].c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + r + "</strong></div>")
            }
            return !0
        },
        A = function(a) {
            i[a] !== t && (i[a].pr_active_slide = e(i[a].slides[i[a].pr_active_key]), i[a].pr_next_slide = e(i[a].slides[i[a].pr_processing_key]), i[a].pr_active_bg = i[a].pr_active_slide.find("rs-sbg-wrap"), i[a].pr_next_bg = i[a].pr_next_slide.find("rs-sbg-wrap"), i[a].pr_active_bg !== t && i[a].pr_active_bg.length > 0 && tpGS.gsap.to(i[a].pr_active_bg, .5, {
                opacity: 0
            }), i[a].pr_next_bg !== t && i[a].pr_next_bg.length > 0 && tpGS.gsap.to(i[a].pr_next_bg, .5, {
                opacity: 0
            }), tpGS.gsap.set(i[a].pr_active_slide, {
                zIndex: 18
            }), i[a].pr_next_slide !== t && i[a].pr_next_slide.length > 0 && tpGS.gsap.set(i[a].pr_next_slide, {
                autoAlpha: 0,
                zIndex: 20
            }), i[a].tonpause = !1, i[a].pr_active_key !== t && i.removeTheLayers(i[a].pr_active_slide, a, !0), i[a].firststart = 1, setTimeout(function() {
                delete i[a].pr_active_key, delete i[a].pr_processing_key
            }, 200))
        },
        R = function(a, r) {
            if (i[a] !== t)
                if (clearTimeout(i[a].waitWithSwapSlide), i[a].pr_processing_key === t || !0 !== i[a].firstSlideShown) {
                    if (clearTimeout(i[a].waitWithSwapSlide), i[a].startWithSlideKey !== t && (i[a].pr_next_key = i.getComingSlide(a, i[a].startWithSlideKey).nindex, delete i[a].startWithSlideKey), i[a].pr_active_slide = e(i[a].slides[i[a].pr_active_key]), i[a].pr_next_slide = e(i[a].slides[i[a].pr_next_key]), i[a].pr_next_key == i[a].pr_active_key) return delete i[a].pr_next_key;
                    i[a].pr_processing_key = i[a].pr_next_key, i[a].pr_cache_pr_next_key = i[a].pr_next_key, delete i[a].pr_next_key, i[a].pr_next_slide !== t && i[a].pr_next_slide[0] !== t && i.gA(i[a].pr_next_slide[0], "hal") !== t && i.sA(i[a].pr_next_slide[0], "sofacounter", i.gA(i[a].pr_next_slide[0], "sofacounter") === t ? 1 : parseInt(i.gA(i[a].pr_next_slide[0], "sofacounter"), 0) + 1), i[a].stopLoop && i[a].pr_processing_key == i[a].lastslidetoshow - 1 && (i[a].progressC.css({
                        visibility: "hidden"
                    }), i[a].c.trigger("revolution.slide.onstop"), i[a].noloopanymore = 1), i[a].pr_next_slide.index() === i[a].slideamount - 1 && i[a].looptogo > 0 && "disabled" !== i[a].looptogo && (i[a].looptogo--, i[a].looptogo <= 0 && (i[a].stopLoop = !0)), i[a].tonpause = !0, i[a].slideInSwapTimer = !0, i[a].c.trigger("stoptimer"), "off" === i[a].spinner ? i[a].loader !== t && !0 === i[a].loaderVisible && (i[a].loader.css({
                        display: "none"
                    }), i[a].loaderVisible = !1) : i[a].loadertimer = setTimeout(function() {
                        i[a].loader !== t && !0 !== i[a].loaderVisible && (i[a].loader.css({
                            display: "block"
                        }), i[a].loaderVisible = !0)
                    }, 50);
                    var o = "carousel" === i[a].sliderType && "all" !== i[a].lazyType ? i.loadVisibleCarouselItems(a) : i[a].pr_next_slide[0];
                    i.loadImages(o, a, 1), i.preLoadAudio && i.preLoadAudio(i[a].pr_next_slide, a, 1), i.waitForCurrentImages(o, a, function() {
                        i[a].firstSlideShown = !0, i[a].pr_next_slide.find("rs-bgvideo").each(function() {
                            var t = e(this);
                            t.hasClass("HasListener") || (t.data("bgvideo", 1), i.manageVideoLayer(t, a, i.gA(i[a].pr_next_slide[0], "key")), i.prepareCoveredVideo(a)), 0 == t.find(".rs-fullvideo-cover").length && t.append('<div class="rs-fullvideo-cover"></div>')
                        }), i.loadUpcomingContent(a), window.requestAnimationFrame(function() {
                            i.contWidthManager(a, "SwapSlide"), i.setSize(a), I(i[a].pr_next_slide.find("rs-sbg"), a, r)
                        })
                    })
                } else i[a].waitWithSwapSlide = setTimeout(function() {
                    R(a, r)
                }, 18)
        },
        I = function(a, r, o) {
            if (i[r] !== t) {
                if (C(r), i[r].pr_active_slide = e(i[r].slides[i[r].pr_active_key]), i[r].pr_next_slide = e(i[r].slides[i[r].pr_processing_key]), i[r].pr_active_bg = i[r].pr_active_slide.find("rs-sbg-wrap"), i[r].pr_next_bg = i[r].pr_next_slide.find("rs-sbg-wrap"), i[r].tonpause = !1, clearTimeout(i[r].loadertimer), i[r].loader !== t && !0 === i[r].loaderVisible && (window.requestAnimationFrame(function() {
                        i[r].loader.css({
                            display: "none"
                        })
                    }), i[r].loaderVisible = !1), i[r].onBeforeSwap = {
                        slider: r,
                        slideIndex: parseInt(i[r].pr_active_key, 0) + 1,
                        slideLIIndex: i[r].pr_active_key,
                        nextSlideIndex: parseInt(i[r].pr_processing_key, 0) + 1,
                        nextSlideLIIndex: i[r].pr_processing_key,
                        nextslide: i[r].pr_next_slide,
                        slide: i[r].pr_active_slide,
                        currentslide: i[r].pr_active_slide,
                        prevslide: i[r].pr_lastshown_key !== t ? i[r].slides[i[r].pr_lastshown_key] : ""
                    }, i[r].c.trigger("revolution.slide.onbeforeswap", i[r].onBeforeSwap), i[r].transition = 1, i[r].stopByVideo = !1, i[r].pr_next_slide[0] !== t && i.gA(i[r].pr_next_slide[0], "duration") != t && "" != i.gA(i[r].pr_next_slide[0], "duration") ? i[r].duration = parseInt(i.gA(i[r].pr_next_slide[0], "duration"), 0) : i[r].duration = i[r].origcd, i[r].pr_next_slide[0] === t || "true" != i.gA(i[r].pr_next_slide[0], "ssop") && !0 !== i.gA(i[r].pr_next_slide[0], "ssop") ? i[r].ssop = !1 : i[r].ssop = !0, i[r].sbtimeline.set && i[r].sbtimeline.fixed && i.updateFixedScrollTimes(r), i[r].c.trigger("nulltimer"), i[r].sdir = i[r].pr_processing_key < i[r].pr_active_key ? 1 : 0, "arrow" == i[r].sc_indicator && (0 == i[r].pr_active_key && i[r].pr_processing_key == i[r].slideamount - 1 && (i[r].sdir = 1), i[r].pr_active_key == i[r].slideamount - 1 && 0 == i[r].pr_processing_key && (i[r].sdir = 0)), i[r].lsdir = i[r].sdir, i[r].pr_active_key != i[r].pr_processing_key && 1 != i[r].firststart && "carousel" !== i[r].sliderType && i.removeTheLayers && i.removeTheLayers(i[r].pr_active_slide, r), 1 !== i.gA(i[r].pr_next_slide[0], "rspausetimeronce") && 1 !== i.gA(i[r].pr_next_slide[0], "rspausetimeralways") ? i[r].c.trigger("restarttimer") : (i[r].stopByVideo = !0, i.unToggleState(i[r].slidertoggledby)), i.sA(i[r].pr_next_slide[0], "rspausetimeronce", 0), i[r].pr_next_slide[0] !== t && i.sA(i[r].c[0], "slideactive", i.gA(i[r].pr_next_slide[0], "key")), "carousel" == i[r].sliderType) i[r].mtl = tpGS.gsap.timeline(), i.prepareCarousel(r), z(r), i.playBGVideos(r), i[r].transition = 0;
                else {
                    i[r].mtl = tpGS.gsap.timeline({
                        paused: !0,
                        onComplete: function() {
                            z(r)
                        }
                    }), i.playBGVideos(r), i[r].mtl.add(tpGS.gsap.set(i[r].pr_next_bg.find("rs-sbg"), {
                        opacity: 0
                    })), i[r].pr_next_key !== t ? i.animateTheLayers({
                        slide: i[r].pr_next_key,
                        id: r,
                        mode: "preset",
                        caller: "swapSlideProgress_1"
                    }) : i[r].pr_processing_key !== t ? i.animateTheLayers({
                        slide: i[r].pr_processing_key,
                        id: r,
                        mode: "preset",
                        caller: "swapSlideProgress_2"
                    }) : i[r].pr_active_key !== t && i.animateTheLayers({
                        slide: i[r].pr_active_key,
                        id: r,
                        mode: "preset",
                        caller: "swapSlideProgress_3"
                    }), 1 == i[r].firststart && (i[r].pr_active_slide[0] !== t && tpGS.gsap.set(i[r].pr_active_slide, {
                        autoAlpha: 0
                    }), i[r].firststart = 0), i[r].pr_active_slide[0] !== t && tpGS.gsap.set(i[r].pr_active_slide, {
                        zIndex: 18
                    }), i[r].pr_next_slide[0] !== t && tpGS.gsap.set(i[r].pr_next_slide, {
                        autoAlpha: 0,
                        zIndex: 20
                    }), "prepared" == i.gA(i[r].pr_next_slide[0], "differentissplayed") && (i.sA(i[r].pr_next_slide[0], "differentissplayed", "done"), i.sA(i[r].pr_next_slide[0], "anim", i.gA(i[r].pr_next_slide[0], "savedanim"))), i.gA(i[r].pr_next_slide[0], "firstanim") != t && "done" != i.gA(i[r].pr_next_slide[0], "differentissplayed") && (i.sA(i[r].pr_next_slide[0], "savedanim", i.gA(i[r].pr_next_slide[0], "anim")), i.sA(i[r].pr_next_slide[0], "anim", i.gA(i[r].pr_next_slide[0], "firstanim")), i.sA(i[r].pr_next_slide[0], "differentissplayed", "prepared"));
                    var s = function(e) {
                        var i = (e = e === t ? "t:random" : e).split(";"),
                            a = {};
                        for (var r in i)
                            if (i.hasOwnProperty(r)) {
                                var o = i[r].split(":"),
                                    s = o[0],
                                    n = o[1],
                                    l = "transition";
                                switch (s) {
                                    case "ei":
                                        l = "easein";
                                        break;
                                    case "eo":
                                        l = "easeout";
                                        break;
                                    case "s":
                                        l = "masterspeed";
                                        break;
                                    case "sl":
                                        l = "slotamount";
                                        break;
                                    case "r":
                                        l = "rotate"
                                }
                                s !== t && n !== t && (a[l] = n.split(","))
                            }
                        a.transition === t && (a = {
                            transition: ["fade"]
                        });
                        return a
                    }(i.gA(i[r].pr_next_slide[0], "anim"));
                    i.sA(i[r].pr_next_slide[0], "ntrid", "on" == i.gA(i[r].pr_next_slide[0], "rndtrans") ? Math.round(80 * Math.random()) : parseInt(i.gA(i[r].pr_next_slide[0], "ntrid"), 0) + 1 || 0), i.sA(i[r].pr_next_slide[0], "ntrid", s.transition === t || i.gA(i[r].pr_next_slide[0], "ntrid") == s.transition.length ? 0 : i.gA(i[r].pr_next_slide[0], "ntrid")), i.animateSlide({
                        animation: s,
                        ntrid: i.gA(i[r].pr_next_slide[0], "ntrid"),
                        id: r
                    }), i[r].pr_next_bg.data("panzoom") !== t && (i.startPanZoom(i[r].pr_next_bg, r, 0, i.getSlideIndex(r, i.gA(i[r].pr_next_slide[0], "key")), "first"), i[r].mtl.add(tpGS.gsap.set(i[r].pr_next_bg, {
                        autoAlpha: 0,
                        immediateRender: !0
                    }), 0)), i[r].mtl.pause()
                }
                i.animateTheLayers ? "carousel" === i[r].sliderType ? (!1 !== i[r].carousel.showLayersAllTime && (i[r].carousel.allLayersStarted ? i.animateTheLayers({
                    slide: "individual",
                    id: r,
                    mode: "rebuild",
                    caller: "swapSlideProgress_5"
                }) : i.animateTheLayers({
                    slide: "individual",
                    id: r,
                    mode: "start",
                    caller: "swapSlideProgress_4"
                }), i[r].carousel.allLayersStarted = !0), 0 !== i[r].firststart ? i.animateTheLayers({
                    slide: 0,
                    id: r,
                    mode: "start",
                    caller: "swapSlideProgress_6"
                }) : !0 !== o && i.animateTheLayers({
                    slide: i[r].pr_next_key !== t ? i[r].pr_next_key : i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key,
                    id: r,
                    mode: "start",
                    caller: "swapSlideProgress_7"
                }), i[r].firststart = 0) : i.animateTheLayers({
                    slide: i[r].pr_next_key !== t ? i[r].pr_next_key : i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key,
                    id: r,
                    mode: "start",
                    caller: "swapSlideProgress_8"
                }) : i[r].mtl != t && setTimeout(function() {
                    i[r].mtl.resume()
                }, 18), "carousel" !== i[r].sliderType && tpGS.gsap.to(i[r].pr_next_slide, .001, {
                    autoAlpha: 1
                })
            }
        };
    var z = function(r) {
            if (i[r] !== t) {
                if ("done" !== i.RS_swapList[r]) {
                    i.RS_swapList[r] = "done";
                    var o = e.inArray(r, i.RS_swapping);
                    i.RS_swapping.splice(o, 1)
                }
                if (i[r].firstSlideAvailable === t && (i[r].firstSlideAvailable = !0, window.requestAnimationFrame(function() {
                        "hero" !== i[r].sliderType && i.createNavigation && i[r].navigation.use && !0 !== i[r].navigation.createNavigationDone && i.createNavigation(r)
                    })), "carousel" === i[r].sliderType ? tpGS.gsap.to(i[r].carousel.wrap, 1, {
                        opacity: 1
                    }) : (tpGS.gsap.set(i[r].pr_next_bg.find("rs-sbg"), {
                        zIndex: 20,
                        autoAlpha: 1
                    }), _(r, i[r].pr_next_slide), i[r].pr_next_slide.index() != i[r].pr_active_slide.index() && i[r].pr_active_slide[0] !== t && (tpGS.gsap.set(i[r].pr_active_slide, {
                        zIndex: 18,
                        autoAlpha: 0
                    }), _(r, i[r].pr_active_slide))), i[r].pr_active_key = i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key, delete i[r].pr_processing_key, "scroll" != i[r].parallax.type && "scroll+mouse" != i[r].parallax.type && "mouse+scroll" != i[r].parallax.type || (i[r].lastscrolltop = -999, i.generalObserver(a)), i[r].mtldiff = i[r].mtl.time(), delete i[r].mtl, i[r].pr_active_key !== t) {
                    i.gA(i[r].slides[i[r].pr_active_key], "sloop") !== t && function(e) {
                        if (i[e] !== t) {
                            i[e].sloops = i[e].sloops === t ? {} : i[e].sloops;
                            var a = i.gA(i[e].slides[i[e].pr_active_key], "key"),
                                r = i[e].sloops[a];
                            if (r === t) {
                                r = {
                                    s: 2500,
                                    e: 4500,
                                    r: "unlimited"
                                };
                                var o = i.gA(i[e].slides[i[e].pr_active_key], "sloop").split(";");
                                for (var s in o)
                                    if (o.hasOwnProperty(s)) {
                                        var n = o[s].split(":");
                                        switch (n[0]) {
                                            case "s":
                                                r.s = parseInt(n[1], 0) / 1e3;
                                                break;
                                            case "e":
                                                r.e = parseInt(n[1], 0) / 1e3;
                                                break;
                                            case "r":
                                                r.r = n[1]
                                        }
                                    }
                                r.r = "unlimited" === r.r ? -1 : parseInt(r.r, 0), i[e].sloops[a] = r, r.key = a
                            }
                            r.ct = {
                                time: r.s
                            }, r.tl = tpGS.gsap.timeline({}), r.timer = tpGS.gsap.fromTo(r.ct, r.e - r.s, {
                                time: r.s
                            }, {
                                time: r.e,
                                ease: "none",
                                onRepeat: function() {
                                    for (var a in i[e].layers[r.key]) i[e].layers[r.key].hasOwnProperty(a) && i[e]._L[a].timeline.play(r.s);
                                    var o = i[e].progressC;
                                    o !== t && o[0] !== t && o[0].tween !== t && o[0].tween.time(r.s)
                                },
                                onUpdate: function() {},
                                onComplete: function() {}
                            }).repeat(r.r), r.tl.add(r.timer, r.s), r.tl.time(i[e].mtldiff)
                        }
                    }(r), i.sA(i[r].slides[i[r].activeRSSlide], "isactiveslide", !1), i[r].activeRSSlide = i[r].pr_active_key, i.sA(i[r].slides[i[r].activeRSSlide], "isactiveslide", !0);
                    var s = i.gA(i[r].slides[i[r].pr_active_key], "key"),
                        n = i.gA(i[r].slides[i[r].pr_lastshown_key], "key");
                    i.sA(i[r].c[0], "slideactive", s), n !== t && i[r].panzoomTLs !== t && i[r].panzoomTLs[i.getSlideIndex(r, n)] !== t && (i[r].panzoomTLs[i.getSlideIndex(r, n)].timeScale(3), i[r].panzoomTLs[i.getSlideIndex(r, n)].reverse()), i[r].pr_next_bg.data("panzoom") !== t && (i[r].panzoomTLs !== t && i[r].panzoomTLs[i.getSlideIndex(r, s)] !== t ? (i[r].panzoomTLs[i.getSlideIndex(r, s)].timeScale(1), i[r].panzoomTLs[i.getSlideIndex(r, s)].play()) : i.startPanZoom(i[r].pr_next_bg, r, 0, i.getSlideIndex(r, s), "play")), i[r].pr_active_bg.find("rs-bgvideo").each(function(o) {
                        if (a && !i[r].fallbacks.allowHTML5AutoPlayOnAndroid) return !1;
                        var s = e(this);
                        i.stopVideo && (i.resetVideo(s, r), i.stopVideo(s, r)), i[r].videoOutAnim = i[r].videoOutAnim === t ? {} : i[r].videoOutAnim, i[r].videoOutAnim[this.id] = tpGS.gsap.to(s, 1, {
                            autoAlpha: 0,
                            ease: "power3.inOut",
                            delay: .2
                        })
                    });
                    var l = {
                        slider: r,
                        slideIndex: parseInt(i[r].pr_active_key, 0) + 1,
                        slideLIIndex: i[r].pr_active_key,
                        slide: i[r].pr_next_slide,
                        currentslide: i[r].pr_next_slide,
                        prevSlideIndex: i[r].pr_lastshown_key !== t && parseInt(i[r].pr_lastshown_key, 0) + 1,
                        prevSlideLIIndex: i[r].pr_lastshown_key !== t && parseInt(i[r].pr_lastshown_key, 0),
                        prevSlide: i[r].pr_lastshown_key !== t && i[r].slides[i[r].pr_lastshown_key]
                    };
                    i[r].c.trigger("revolution.slide.onchange", l), i[r].c.trigger("revolution.slide.onafterswap", l), i[r].pr_lastshown_key = i[r].pr_active_key, i[r].startWithSlide !== t && "done" !== i[r].startWithSlide && "carousel" === i[r].sliderType && (i[r].firststart = 0), i[r].duringslidechange = !1, i[r].pr_active_slide.length > 0 && 0 != i.gA(i[r].pr_active_slide[0], "hal") && i.gA(i[r].pr_active_slide[0], "hal") <= i.gA(i[r].pr_active_slide[0], "sofacounter") && i[r].c.revremoveslide(i[r].pr_active_slide.index());
                    var d = i[r].pr_processing_key || i[r].pr_active_key || 0;
                    i[r].rowzones != t && (d = d > i[r].rowzones.length ? i[r].rowzones.length : d), i[r].rowzones != t && i[r].rowzones.length > 0 && i[r].rowzones[d] != t && d >= 0 && d <= i[r].rowzones.length && i[r].rowzones[d].length > 0 && i.setSize(r), delete i[r].sc_indicator, delete i[r].sc_indicator_dir, i[r].firstLetItFree === t && (i.generalObserver(a), i[r].firstLetItFree = !0)
                }
            }
        },
        C = function(a) {
            var r = i[a].progressBar;
            if (i[a].progressC === t || 0 == i[a].progressC.length)
                if (i[a].progressC = e('<rs-progress style="visibility:hidden;"></rs-progress>'), "horizontal" === r.style || "vertical" === r.style) {
                    if ("module" === r.basedon) {
                        for (var o = "", s = 0; s < i[a].slideamount; s++) o += "<rs-progress-bar></rs-progress-bar>";
                        o += "<rs-progress-bgs>";
                        for (s = 0; s < i[a].slideamount; s++) o += "<rs-progress-bg></rs-progress-bg>";
                        if (o += "</rs-progress-bgs>", "nogap" !== r.gaptype)
                            for (s = 0; s < i[a].slideamount; s++) o += "<rs-progress-gap></rs-progress-gap>";
                        i[a].progressC[0].innerHTML = o, !0 === i[a].noDetach && i[a].c.append(i[a].progressC), i[a].progressCBarBGS = i[a].progressC[0].getElementsByTagName("RS-PROGRESS-BG"), i[a].progressCBarGAPS = i[a].progressC[0].getElementsByTagName("RS-PROGRESS-GAP"), "nogap" !== r.gaptype && tpGS.gsap.set(i[a].progressCBarGAPS, {
                            backgroundColor: r.gapcolor,
                            zIndex: "gapbg" === r.gaptype ? 17 : 27
                        }), tpGS.gsap.set(i[a].progressCBarBGS, {
                            backgroundColor: r.bgcolor
                        })
                    } else i[a].progressC[0].innerHTML = "<rs-progress-bar></rs-progress-bar>", !0 === i[a].noDetach && i[a].c.append(i[a].progressC);
                    i[a].progressCBarInner = i[a].progressC[0].getElementsByTagName("RS-PROGRESS-BAR"), tpGS.gsap.set(i[a].progressCBarInner, {
                        background: r.color
                    })
                } else i[a].progressC[0].innerHTML = '<canvas width="' + 2 * r.radius + '" height="' + 2 * r.radius + '" style="position:absolute" class="rs-progress-bar"></canvas>', !0 === i[a].noDetach && i[a].c.append(i[a].progressC), i[a].progressCBarInner = i[a].progressC[0].getElementsByClassName("rs-progress-bar")[0], tpGS.gsap.set(i[a].progressC, {
                    top: "top" === r.vertical ? r.y : "center" === r.vertical ? "50%" : "auto",
                    bottom: "top" === r.vertical || "center" === r.vertical ? "auto" : r.y,
                    left: "left" === r.horizontal ? r.x : "center" === r.horizontal ? "50%" : "auto",
                    right: "left" === r.horizontal || "center" === r.horizontal ? "auto" : r.x,
                    y: "center" === r.vertical ? r.y : 0,
                    x: "center" === r.horizontal ? r.x : 0,
                    width: 2 * r.radius,
                    height: 2 * r.radius,
                    marginTop: "center" === r.vertical ? 0 - r.radius : 0,
                    marginLeft: "center" === r.horizontal ? 0 - r.radius : 0,
                    backgroundColor: "transparent"
                }), i[a].progressBCanvas = i[a].progressCBarInner.getContext("2d"), i[a].progressBar.degree = "cw" === i[a].progressBar.style ? 360 : 0, P(a);
            if (!0 !== i[a].noDetach && i[a].progressC.detach(), i[a].progressBar.visibility[i[a].level] && 1 != i[a].progressBar.disableProgressBar)
                if ("horizontal" === r.style || "vertical" === r.style) {
                    var n, l, d = i[a].slideamount - 1;
                    "horizontal" === r.style ? (n = Math.ceil(i[a].width / i[a].slideamount), l = Math.ceil((i[a].width - d * r.gapsize) / i[a].slideamount), tpGS.gsap.set(i[a].progressC, {
                        visibility: "visible",
                        top: "top" === r.vertical ? r.y : "center" === r.vertical ? "50%" : "auto",
                        bottom: "top" === r.vertical || "center" === r.vertical ? "auto" : r.y,
                        left: "left" === r.horizontal ? 0 : "auto",
                        right: "right" === r.horizontal ? 0 : "auto",
                        y: "center" === r.vertical ? r.y : 0,
                        height: r.size,
                        backgroundColor: "module" === r.basedon ? "transparent" : r.bgcolor,
                        marginTop: "bottom" === r.vertical ? 0 : "top" === r.vertical ? 0 : parseInt(r.size, 0) / 2
                    }), tpGS.gsap.set(i[a].progressCBarInner, {
                        x: "module" === r.basedon ? r.gap ? function(e) {
                            return ("right" === r.horizontal ? d - e : e) * (l + r.gapsize)
                        } : function(e) {
                            return ("right" === r.horizontal ? d - e : e) * n
                        } : 0,
                        width: "module" === r.basedon ? r.gap ? l + "px" : 100 / i[a].slideamount + "%" : "100%"
                    }), "module" === r.basedon && (tpGS.gsap.set(i[a].progressCBarBGS, {
                        x: "module" === r.basedon ? r.gap ? function(e) {
                            return e * (l + r.gapsize)
                        } : function(e) {
                            return e * n
                        } : 0,
                        width: "module" === r.basedon ? r.gap ? l + "px" : 100 / i[a].slideamount + "%" : "100%"
                    }), tpGS.gsap.set(i[a].progressCBarGAPS, {
                        width: r.gap ? r.gapsize + "px" : 0,
                        x: r.gap ? function(e) {
                            return (e + 1) * l + parseInt(r.gapsize, 0) * e
                        } : 0
                    }))) : "vertical" === r.style && (n = Math.ceil(i[a].height / i[a].slideamount), l = Math.ceil((i[a].height - d * r.gapsize) / i[a].slideamount), tpGS.gsap.set(i[a].progressC, {
                        visibility: "visible",
                        left: "left" === r.horizontal ? r.x : "center" === r.horizontal ? "50%" : "auto",
                        right: "left" === r.horizontal || "center" === r.horizontal ? "auto" : r.x,
                        x: "center" === r.horizontal ? r.x : 0,
                        top: "top" === r.vertical ? 0 : "auto",
                        bottom: "bottom" === r.vertical ? 0 : "auto",
                        width: r.size,
                        marginLeft: "left" === r.horizontal ? 0 : "right" === r.horizontal ? 0 : parseInt(r.size, 0) / 2,
                        backgroundColor: "module" === r.basedon ? "transparent" : r.bgcolor
                    }), tpGS.gsap.set(i[a].progressCBarInner, {
                        y: "module" === r.basedon ? r.gap ? function(e) {
                            return ("bottom" === r.vertical ? d - e : e) * (l + r.gapsize)
                        } : function(e) {
                            return ("bottom" === r.vertical ? d - e : e) * n
                        } : 0,
                        height: "module" === r.basedon ? r.gap ? l + "px" : 100 / i[a].slideamount + "%" : "100%"
                    }), "module" === r.basedon && (tpGS.gsap.set(i[a].progressCBarBGS, {
                        y: "module" === r.basedon ? r.gap ? function(e) {
                            return e * (l + r.gapsize)
                        } : function(e) {
                            return e * n
                        } : 0,
                        height: "module" === r.basedon ? r.gap ? l + "px" : 100 / i[a].slideamount + "%" : "100%"
                    }), tpGS.gsap.set(i[a].progressCBarGAPS, {
                        height: r.gap ? r.gapsize + "px" : 0,
                        y: r.gap ? function(e) {
                            return (e + 1) * l + parseInt(r.gapsize, 0) * e
                        } : 0
                    })))
                } else tpGS.gsap.set(i[a].progressC, {
                    visibility: "visible"
                });
            else i[a].progressC[0].style.visibility = "hidden";
            !0 !== i[a].noDetach && i[a].c.append(i[a].progressC)
        },
        P = function(e) {
            var t = i[e].progressBar,
                a = parseInt(t.radius),
                r = parseInt(t.radius);
            i[e].progressBCanvas.lineCap = "round", i[e].progressBCanvas.clearRect(0, 0, 2 * t.radius, 2 * t.radius), i[e].progressBCanvas.beginPath(), i[e].progressBCanvas.arc(a, r, t.radius - parseInt(t.size, 0), Math.PI / 180 * 270, Math.PI / 180 * 630), i[e].progressBCanvas.strokeStyle = t.bgcolor, i[e].progressBCanvas.lineWidth = parseInt(t.size, 0) - 1, i[e].progressBCanvas.stroke(), i[e].progressBCanvas.beginPath(), i[e].progressBCanvas.strokeStyle = t.color, i[e].progressBCanvas.lineWidth = parseInt(t.size, 0), i[e].progressBCanvas.arc(a, r, t.radius - parseInt(t.size, 0), Math.PI / 180 * 270, Math.PI / 180 * (270 + i[e].progressBar.degree), "cw" !== t.style), i[e].progressBCanvas.stroke()
        },
        B = function(a) {
            var r = function() {
                    a !== t && i !== t && i[a] !== t && (0 == e("body").find(i[a].c).length || null === i[a] || null === i[a].c || i[a].c === t || 0 === i[a].length ? (! function(t) {
                        i[t].c.children().each(function() {
                            try {
                                e(this).die("click")
                            } catch (e) {}
                            try {
                                e(this).die("mouseenter")
                            } catch (e) {}
                            try {
                                e(this).die("mouseleave")
                            } catch (e) {}
                            try {
                                e(this).unbind("hover")
                            } catch (e) {}
                        });
                        try {
                            i[t].c.die("click", "mouseenter", "mouseleave")
                        } catch (e) {}
                        clearInterval(i[t].cdint), i[t].c = null
                    }(a), clearInterval(i[a].cdint)) : (i[a].c.trigger("revolution.slide.slideatend"), 1 == i[a].c.data("conthoverchanged") && (i[a].conthover = i[a].c.data("conthover"), i[a].c.data("conthoverchanged", 0)), i.callingNewSlide(a, 1, !0)))
                },
                o = tpGS.gsap.timeline({
                    paused: !0
                }),
                s = "reset" === i[a].progressBar.reset || i[a].progressBar.notnew === t ? 0 : .2,
                n = "slide" === i[a].progressBar.basedon ? 0 : i[a].pr_processing_key !== t ? i[a].pr_processing_key : i[a].pr_active_key;
            if (n = n === t ? 0 : n, "horizontal" === i[a].progressBar.style) {
                if (o.add(tpGS.gsap.to(i[a].progressCBarInner[n], s, {
                        scaleX: 0,
                        transformOrigin: "right" === i[a].progressBar.horizontal ? "100% 50%" : "0% 50%"
                    })), o.add(tpGS.gsap.to(i[a].progressCBarInner[n], i[a].duration / 1e3, {
                        transformOrigin: "right" === i[a].progressBar.horizontal ? "100% 50%" : "0% 50%",
                        force3D: "auto",
                        scaleX: 1,
                        onComplete: r,
                        delay: .5,
                        ease: i[a].progressBar.ease
                    })), "module" === i[a].progressBar.basedon)
                    for (var l = 0; l < i[a].slideamount; l++) l !== n && o.add(tpGS.gsap.set(i[a].progressCBarInner[l], {
                        scaleX: l < n ? 1 : 0,
                        transformOrigin: "right" === i[a].progressBar.horizontal ? "100% 50%" : "0% 50%"
                    }), 0)
            } else if ("vertical" === i[a].progressBar.style) {
                if (i[a].progressCBarInner[n] !== t && o.add(tpGS.gsap.to(i[a].progressCBarInner[n], s, {
                        scaleY: 0,
                        transformOrigin: "bottom" === i[a].progressBar.vertical ? "50% 100%" : "50% 0%"
                    })), i[a].progressCBarInner[n] !== t && o.add(tpGS.gsap.to(i[a].progressCBarInner[n], i[a].duration / 1e3, {
                        transformOrigin: "bottom" === i[a].progressBar.vertical ? "50% 100%" : "50% 0%",
                        force3D: "auto",
                        scaleY: 1,
                        onComplete: r,
                        delay: .5,
                        ease: i[a].progressBar.ease
                    })), "module" === i[a].progressBar.basedon)
                    for (l = 0; l < i[a].slideamount; l++) l !== n && i[a].progressCBarInner[l] !== t && o.add(tpGS.gsap.set(i[a].progressCBarInner[l], {
                        scaleY: l < n ? 1 : 0,
                        transformOrigin: "botton" === i[a].progressBar.vertical ? "50% 100%" : "50% 0%"
                    }), 0)
            } else {
                var d = "slide" === i[a].progressBar.basedon ? 0 : Math.max(0, 360 / i[a].slideamount * n),
                    c = "slide" === i[a].progressBar.basedon ? 360 : 360 / i[a].slideamount * (n + 1);
                "ccw" === i[a].progressBar.style && "slide" !== i[a].progressBar.basedon && (d = 360 - c, c = 360 - 360 / i[a].slideamount * n), o.add(tpGS.gsap.to(i[a].progressBar, s, {
                    degree: "cw" === i[a].progressBar.style ? d : c,
                    onUpdate: function() {
                        P(a)
                    }
                })), o.add(tpGS.gsap.to(i[a].progressBar, i[a].duration / 1e3, {
                    degree: "cw" === i[a].progressBar.style ? c : d,
                    onUpdate: function() {
                        P(a)
                    },
                    onComplete: r,
                    delay: .5,
                    ease: i[a].progressBar.ease
                }))
            }
            return i[a].progressBar.notnew = !0, o
        },
        G = function(e) {
            i[e].progressC == t && C(e), i[e].loop = 0, i[e].stopAtSlide != t && i[e].stopAtSlide > -1 ? i[e].lastslidetoshow = i[e].stopAtSlide : i[e].lastslidetoshow = 999, i[e].stopLoop = !1, 0 == i[e].looptogo && (i[e].stopLoop = !0), i[e].c.on("stoptimer", function() {
                i[e].progressC != t && (i[e].progressC[0].tween.pause(), i[e].progressBar.disableProgressBar && (i[e].progressC[0].style.visibility = "hidden"), i[e].sliderstatus = "paused", i[e].slideInSwapTimer || i.unToggleState(i[e].slidertoggledby), i[e].slideInSwapTimer = !1)
            }), i[e].c.on("starttimer", function() {
                i[e].progressC != t && (i[e].forcepaused || (1 != i[e].conthover && 1 != i[e].stopByVideo && i[e].width > i[e].hideSliderAtLimit && 1 != i[e].tonpause && 1 != i[e].overnav && 1 != i[e].ssop && (1 === i[e].noloopanymore || i[e].viewPort.enable && !i[e].inviewport || (i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "visible"), i[e].progressC[0].tween.resume(), i[e].sliderstatus = "playing")), !i[e].progressBar.disableProgressBar && i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "hidden"), i.toggleState(i[e].slidertoggledby)))
            }), i[e].c.on("restarttimer", function() {
                if (i[e].progressC != t && !i[e].forcepaused) {
                    if (i[e].mouseoncontainer && "on" == i[e].navigation.onHoverStop && !a) return !1;
                    1 === i[e].noloopanymore || i[e].viewPort.enable && !i[e].inviewport || 1 == i[e].ssop ? i.unToggleState(i[e].slidertoggledby) : (i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "visible"), i[e].progressC[0].tween !== t && i[e].progressC[0].tween.kill(), i[e].progressC[0].tween = B(e), i[e].progressC[0].tween.play(), i[e].sliderstatus = "playing", i.toggleState(i[e].slidertoggledby)), !i[e].progressBar.disableProgressBar && i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "hidden"), i[e].mouseoncontainer && 1 == i[e].navigation.onHoverStop && !a && (i[e].c.trigger("stoptimer"), i[e].c.trigger("revolution.slide.onpause"))
                }
            }), i[e].c.on("nulltimer", function() {
                i[e].progressC != t && i[e].progressC[0] !== t && (i[e].progressC[0].tween !== t && i[e].progressC[0].tween.kill(), i[e].progressC[0].tween = B(e), i[e].progressC[0].tween.pause(0), !i[e].progressBar.disableProgressBar && i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "hidden"), i[e].sliderstatus = "paused")
            }), i[e].progressC !== t && (i[e].progressC[0].tween = B(e)), i[e].slideamount > 1 && (0 != i[e].stopAfterLoops || 1 != i[e].stopAtSlide) ? i[e].c.trigger("starttimer") : (i[e].noloopanymore = 1, i[e].c.trigger("nulltimer")), i[e].c.on("tp-mouseenter", function() {
                i[e].mouseoncontainer = !0, 1 != i[e].navigation.onHoverStop || a || (i[e].c.trigger("stoptimer"), i[e].c.trigger("revolution.slide.onpause"))
            }), i[e].c.on("tp-mouseleft", function() {
                i[e].mouseoncontainer = !1, 1 != i[e].c.data("conthover") && 1 == i[e].navigation.onHoverStop && (1 == i[e].viewPort.enable && i[e].inviewport || 0 == i[e].viewPort.enable) && (i[e].c.trigger("revolution.slide.onresume"), i[e].c.trigger("starttimer"))
            })
        },
        M = function() {
            e(".rev_redraw_on_blurfocus").each(function() {
                var e = this.id;
                if (i[e] == t || i[e].c == t || 0 === i[e].c.length) return !1;
                1 != i[e].windowfocused && (i[e].windowfocused = !0, tpGS.gsap.delayedCall(.1, function() {
                    i[e].fallbacks.nextSlideOnWindowFocus && i[e].c.revnext(), i[e].c.revredraw(), "playing" == i[e].lastsliderstatus && i[e].c.revresume(), i[e].c.trigger("revolution.slide.tabfocused")
                }))
            })
        },
        D = function() {
            document.hasFocus() || e(".rev_redraw_on_blurfocus").each(function(e) {
                var a = this.id;
                i[a].windowfocused = !1, i[a].lastsliderstatus = i[a].sliderstatus, i[a].c.revpause(), i[a].pr_next_bg !== t && i[a].pr_next_bg.data("panzoom") !== t && i.stopPanZoom(i[a].pr_next_bg, i[a]), i[a].pr_active_bg !== t && i[a].pr_active_bg.data("panzoom") !== t && i.stopPanZoom(i[a].pr_active_bg, i[a]), i[a].c.trigger("revolution.slide.tabblured")
            })
        },
        j = function() {
            var e = document.documentMode === t,
                a = window.chrome;
            1 !== i.revslider_focus_blur_listener && (i.revslider_focus_blur_listener = 1, e && !a ? i.window.on("focusin", function() {
                !0 !== i.windowIsFocused && M(), i.windowIsFocused = !0
            }).on("focusout", function() {
                !0 !== i.windowIsFocused && i.windowIsFocused !== t || D(), i.windowIsFocused = !1
            }) : window.addEventListener ? (window.addEventListener("focus", function(e) {
                !0 !== i.windowIsFocused && M(), i.windowIsFocused = !0
            }, {
                capture: !1,
                passive: !0
            }), window.addEventListener("blur", function(e) {
                !0 !== i.windowIsFocused && i.windowIsFocused !== t || D(), i.windowIsFocused = !1
            }, {
                capture: !1,
                passive: !0
            })) : (window.attachEvent("focus", function(e) {
                !0 !== i.windowIsFocused && M(), i.windowIsFocused = !0
            }), window.attachEvent("blur", function(e) {
                !0 !== i.windowIsFocused && i.windowIsFocused !== t || D(), i.windowIsFocused = !1
            })))
        },
        H = function(e) {
            for (var t, i = [], a = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), r = 0; r < a.length; r++) a[r] = a[r].replace("%3D", "="), t = a[r].split("="), i.push(t[0]), i[t[0]] = t[1];
            return i
        },
        N = function(e) {
            if (i[e].blockSpacing !== t) {
                var a = i[e].blockSpacing.split(";");
                for (var r in i[e].blockSpacing = {}, a)
                    if (a.hasOwnProperty(r)) {
                        var o = a[r].split(":");
                        switch (o[0]) {
                            case "t":
                                i[e].blockSpacing.top = i.revToResp(o[1], 4, 0);
                                break;
                            case "b":
                                i[e].blockSpacing.bottom = i.revToResp(o[1], 4, 0);
                                break;
                            case "l":
                                i[e].blockSpacing.left = i.revToResp(o[1], 4, 0);
                                break;
                            case "r":
                                i[e].blockSpacing.right = i.revToResp(o[1], 4, 0)
                        }
                    }
                i[e].blockSpacing.block = i[e].c.closest(".wp-block-themepunch-revslider"), i[e].level !== t && i[e].blockSpacing !== t && tpGS.gsap.set(i[e].blockSpacing.block, {
                    paddingLeft: i[e].blockSpacing.left[i[e].level],
                    paddingRight: i[e].blockSpacing.right[i[e].level],
                    marginTop: i[e].blockSpacing.top[i[e].level],
                    marginBottom: i[e].blockSpacing.bottom[i[e].level]
                })
            }
        },
        W = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        },
        F = function(i) {
            return function(i) {
                for (var a in i.minHeight = i.minHeight !== t ? "none" === i.minHeight || "0" === i.minHeight || "0px" === i.minHeight || "" == i.minHeight || " " == i.minHeight ? 0 : parseInt(i.minHeight, 0) : 0, i.maxHeight = "none" === i.maxHeight || "0" === i.maxHeight ? 0 : parseInt(i.maxHeight, 0), i.carousel.maxVisibleItems = i.carousel.maxVisibleItems < 1 ? 999 : i.carousel.maxVisibleItems, i.carousel.vertical_align = "top" === i.carousel.vertical_align ? "0%" : "bottom" === i.carousel.vertical_align ? "100%" : "50%", i.carousel.space = parseInt(i.carousel.space, 0), i.carousel.maxOpacity = parseInt(i.carousel.maxOpacity, 0), i.carousel.maxOpacity = i.carousel.maxOpacity > 1 ? i.carousel.maxOpacity / 100 : i.carousel.maxOpacity, i.carousel.showLayersAllTime = "true" === i.carousel.showLayersAllTime || !0 === i.carousel.showLayersAllTime ? "all" : i.carousel.showLayersAllTime, i.carousel.maxRotation = parseInt(i.carousel.maxRotation, 0), i.carousel.minScale = parseInt(i.carousel.minScale, 0), i.carousel.minScale = i.carousel.minScale > .9 ? i.carousel.minScale / 100 : i.carousel.minScale, i.carousel.speed = parseInt(i.carousel.speed, 0), i.navigation.maintypes = ["arrows", "tabs", "thumbnails", "bullets"], i.perspective = parseInt(i.perspective, 0), i.navigation.maintypes) i.navigation.maintypes.hasOwnProperty(a) && i.navigation[i.navigation.maintypes[a]] !== t && (i.navigation[i.navigation.maintypes[a]].animDelay = i.navigation[i.navigation.maintypes[a]].animDelay === t ? 1e3 : i.navigation[i.navigation.maintypes[a]].animDelay, i.navigation[i.navigation.maintypes[a]].animSpeed = i.navigation[i.navigation.maintypes[a]].animSpeed === t ? 1e3 : i.navigation[i.navigation.maintypes[a]].animSpeed, i.navigation[i.navigation.maintypes[a]].animDelay = parseInt(i.navigation[i.navigation.maintypes[a]].animDelay, 0) / 1e3, i.navigation[i.navigation.maintypes[a]].animSpeed = parseInt(i.navigation[i.navigation.maintypes[a]].animSpeed, 0) / 1e3);
                if (e.isNumeric(i.scrolleffect.tilt) || -1 !== i.scrolleffect.tilt.indexOf("%") && (i.scrolleffect.tilt = parseInt(i.scrolleffect.tilt)), i.scrolleffect.tilt = i.scrolleffect.tilt / 100, i.navigation.thumbnails.position = "outer-horizontal" == i.navigation.thumbnails.position ? "bottom" == i.navigation.thumbnails.v_align ? "outer-bottom" : "outer-top" : "outer-vertical" == i.navigation.thumbnails.position ? "left" == i.navigation.thumbnails.h_align ? "outer-left" : "outer-right" : i.navigation.thumbnails.position, i.navigation.tabs.position = "outer-horizontal" == i.navigation.tabs.position ? "bottom" == i.navigation.tabs.v_align ? "outer-bottom" : "outer-top" : "outer-vertical" == i.navigation.tabs.position ? "left" == i.navigation.tabs.h_align ? "outer-left" : "outer-right" : i.navigation.tabs.position, i.sbtimeline.speed = parseInt(i.sbtimeline.speed, 0) / 1e3 || .5, !0 === i.sbtimeline.set && !0 === i.sbtimeline.fixed && "auto" !== i.sliderLayout ? (i.sbtimeline.fixStart = parseInt(i.sbtimeline.fixStart), i.sbtimeline.fixEnd = parseInt(i.sbtimeline.fixEnd)) : i.sbtimeline.fixed = !1, i.progressBar === t || "true" != i.progressBar.disableProgressBar && 1 != i.progressBar.disableProgressBar || (i.progressBar.disableProgressBar = !0), i.startDelay = parseInt(i.startDelay, 0) || 0, i.navigation !== t && i.navigation.arrows != t && i.navigation.arrows.hide_under != t && (i.navigation.arrows.hide_under = parseInt(i.navigation.arrows.hide_under)), i.navigation !== t && i.navigation.bullets != t && i.navigation.bullets.hide_under != t && (i.navigation.bullets.hide_under = parseInt(i.navigation.bullets.hide_under)), i.navigation !== t && i.navigation.thumbnails != t && i.navigation.thumbnails.hide_under != t && (i.navigation.thumbnails.hide_under = parseInt(i.navigation.thumbnails.hide_under)), i.navigation !== t && i.navigation.tabs != t && i.navigation.tabs.hide_under != t && (i.navigation.tabs.hide_under = parseInt(i.navigation.tabs.hide_under)), i.navigation !== t && i.navigation.arrows != t && i.navigation.arrows.hide_over != t && (i.navigation.arrows.hide_over = parseInt(i.navigation.arrows.hide_over)), i.navigation !== t && i.navigation.bullets != t && i.navigation.bullets.hide_over != t && (i.navigation.bullets.hide_over = parseInt(i.navigation.bullets.hide_over)), i.navigation !== t && i.navigation.thumbnails != t && i.navigation.thumbnails.hide_over != t && (i.navigation.thumbnails.hide_over = parseInt(i.navigation.thumbnails.hide_over)), i.navigation !== t && i.navigation.tabs != t && i.navigation.tabs.hide_over != t && (i.navigation.tabs.hide_over = parseInt(i.navigation.tabs.hide_over)), i.lazyloaddata !== t && i.lazyloaddata.length > 0 && i.lazyloaddata.indexOf("-") > 0) {
                    var r = i.lazyloaddata.split("-");
                    for (i.lazyloaddata = r[0], a = 1; a < r.length; a++) i.lazyloaddata += W(r[a])
                }
                return i.duration = parseInt(i.duration), "single" === i.lazyType && "carousel" === i.sliderType && (i.lazyType = "smart"), "carousel" === i.sliderType && i.carousel.justify && (i.justifyCarousel = !0, i.keepBPHeight = !0), i.useFullScreenHeight = "carousel" === i.sliderType && "fullscreen" === i.sliderLayout && !0 === i.useFullScreenHeight, i
            }(e.extend(!0, {
                sliderType: "standard",
                sliderLayout: "auto",
                dottedOverlay: "none",
                duration: 9e3,
                imgCrossOrigin: "",
                modal: {
                    useAsModal: !1,
                    cover: !0,
                    coverColor: "rgba(0,0,0,0.5)",
                    horizontal: "center",
                    vertical: "middle"
                },
                navigation: {
                    keyboardNavigation: !1,
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: !0,
                    mouseScrollReverse: "default",
                    touch: {
                        touchenabled: !1,
                        touchOnDesktop: !1,
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: !1,
                        mobileCarousel: !0,
                        desktopCarousel: !0
                    },
                    arrows: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_under: 0,
                        hide_onleave: !1,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_over: 9999,
                        tmp: "",
                        rtl: !1,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0,
                            container: "slider"
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0,
                            container: "slider"
                        }
                    },
                    bullets: {
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !1,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        h_align: "center",
                        v_align: "bottom",
                        space: 5,
                        h_offset: 0,
                        v_offset: 20,
                        tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',
                        container: "slider",
                        rtl: !1,
                        style: ""
                    },
                    thumbnails: {
                        container: "slider",
                        rtl: !1,
                        style: "",
                        enable: !1,
                        width: 100,
                        height: 50,
                        min_width: 100,
                        wrapper_padding: 2,
                        wrapper_color: "transparent",
                        tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !1,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        position: "inner",
                        space: 2,
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 20
                    },
                    tabs: {
                        container: "slider",
                        rtl: !1,
                        style: "",
                        enable: !1,
                        width: 100,
                        min_width: 100,
                        height: 50,
                        wrapper_padding: 10,
                        wrapper_color: "transparent",
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !1,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        space: 0,
                        position: "inner",
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 20
                    }
                },
                responsiveLevels: 4064,
                visibilityLevels: [2048, 1024, 778, 480],
                gridwidth: 960,
                gridheight: 500,
                minHeight: 0,
                maxHeight: 0,
                keepBPHeight: !1,
                useFullScreenHeight: !0,
                overflowHidden: !1,
                forceOverflow: !1,
                fixedOnTop: !1,
                autoHeight: !1,
                gridEQModule: !1,
                disableForceFullWidth: !1,
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                hideLayerAtLimit: 0,
                hideAllLayerAtLimit: 0,
                hideSliderAtLimit: 0,
                progressBar: {
                    disableProgressBar: !1,
                    style: "horizontal",
                    size: "5px",
                    radius: 10,
                    vertical: "bottom",
                    horizontal: "left",
                    x: 0,
                    y: 0,
                    color: "rgba(255,255,255,0.5)",
                    bgcolor: "transparent",
                    basedon: "slide",
                    gapsize: 0,
                    reset: "reset",
                    gaptype: "gapboth",
                    gapcolor: "rgba(255,255,255,0.5)",
                    ease: "none",
                    visibility: {
                        0: !0,
                        1: !0,
                        2: !0,
                        3: !0
                    }
                },
                stopAtSlide: -1,
                stopAfterLoops: 0,
                shadow: 0,
                startDelay: 0,
                lazyType: "none",
                spinner: "off",
                shuffle: !1,
                perspective: "600px",
                perspectiveType: "local",
                viewPort: {
                    enable: !1,
                    outof: "wait",
                    visible_area: "200px",
                    presize: !1
                },
                fallbacks: {
                    isJoomla: !1,
                    panZoomDisableOnMobile: !1,
                    simplifyAll: !0,
                    nextSlideOnWindowFocus: !1,
                    disableFocusListener: !1,
                    allowHTML5AutoPlayOnAndroid: !0
                },
                parallax: {
                    type: "off",
                    levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                    origo: "enterpoint",
                    disable_onmobile: !1,
                    ddd_shadow: !1,
                    ddd_bgfreeze: !1,
                    ddd_overflow: "visible",
                    ddd_layer_overflow: "visible",
                    ddd_z_correction: 65,
                    speed: 400,
                    speedbg: 0,
                    speedls: 0
                },
                scrolleffect: {
                    set: !1,
                    fade: !1,
                    blur: !1,
                    scale: !1,
                    grayscale: !1,
                    maxblur: 10,
                    layers: !1,
                    slide: !1,
                    direction: "both",
                    multiplicator: 1.35,
                    multiplicator_layers: .5,
                    tilt: 30,
                    disable_onmobile: !1
                },
                sbtimeline: {
                    set: !1,
                    fixed: !1,
                    fixStart: 0,
                    fixEnd: 0,
                    layers: !1,
                    slide: !1,
                    ease: "none",
                    speed: 500
                },
                carousel: {
                    easing: "power3.inOut",
                    speed: 800,
                    showLayersAllTime: !1,
                    horizontal_align: "center",
                    vertical_align: "center",
                    infinity: !1,
                    space: 0,
                    maxVisibleItems: 3,
                    stretch: !1,
                    fadeout: !0,
                    maxRotation: 0,
                    maxOpacity: 100,
                    minScale: 0,
                    offsetScale: !1,
                    vary_fade: !1,
                    vary_rotation: !1,
                    vary_scale: !1,
                    border_radius: "0px",
                    padding_top: 0,
                    padding_bottom: 0
                },
                extensions: "extensions/",
                extensions_suffix: ".min.js",
                stopLoop: !1,
                waitForInit: !1,
                ignoreHeightChange: !0
            }, i))
        }
}(jQuery),
function($, undefined) {
    "use strict";
    var _R = jQuery.fn.revolution,
        _ISM = _R.is_mobile();
    jQuery.extend(!0, _R, {
        checkActions: function(e, t) {
            e === undefined ? moduleEnterLeaveActions(t) : checkActions_intern(e, t)
        },
        getURLDetails: function(e) {
            (e = e === undefined ? {} : e).url = e.url === undefined ? window.location.href : e.url, e.url = e.url.replace("www", ""), e.protocol = 0 === e.url.indexOf("http://") ? "http://" : 0 === e.url.indexOf("https://") ? "https://" : 0 === e.url.indexOf("//") ? "//" : "relative";
            var t = e.url.replace("https://", "");
            t = t.replace("http://", ""), "relative" === e.protocol && (t = t.replace("//", "")), t = t.split("#"), e.anchor = (e.anchor === undefined || "" == e.anchor || 0 == e.anchor.length) && t.length > 1 ? t[1] : e.anchor === undefined ? "" : e.anchor.replace("#", ""), e.anchor = e.anchor.split("?"), e.queries = t[0].split("?"), e.queries = e.queries.length > 1 ? e.queries[1] : "", e.queries = e.queries.length > 1 ? e.queries[1] : e.anchor.length > 1 ? e.anchor[1] : e.queries, e.anchor = e.anchor[0];
            (t = t[0]).split("/");
            var i = t.split("/");
            return e.host = i[0], i.splice(0, 1), e.path = "/" + i.join("/"), "/" == e.path[e.path.length - 1] && (e.path = e.path.slice(0, -1)), e.origin = "relative" !== e.protocol ? e.protocol + e.host : window.location.origin.replace("www", "") + window.location.pathname, e.hash = ("" !== e.queries && e.queries !== undefined ? "?" + e.queries : "") + ("" !== e.anchor && e.anchor !== undefined ? "#" + e.anchor : ""), e
        },
        scrollToId: function(e) {
            var t = "scrollbelow" === e.action ? (getOffContH(_R[e.id].fullScreenOffsetContainer) || 0) - (parseInt(e.offset, 0) || 0) || 0 : 0 - (parseInt(e.offset, 0) || 0),
                i = "scrollbelow" === e.action ? _R[e.id].c : jQuery("#" + e.anchor),
                a = i.length > 0 ? i.offset().top : 0,
                r = {
                    _y: window.pageYOffset !== document.documentElement.scrollTop ? 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop : window.pageYOffset
                };
            a += "scrollbelow" === e.action ? jQuery(_R[e.id].slides[0]).height() : 0, tpGS.gsap.to(r, e.speed / 1e3, {
                _y: a - t,
                ease: e.ease,
                onUpdate: function() {
                    _R.document.scrollTop(r._y)
                },
                onComplete: function() {
                    e.hash !== undefined && (window.location.hash = e.hash)
                }
            })
        }
    });
    var moduleEnterLeaveActions = function(e) {
            !_R[e].moduleActionsPrepared && _R[e].c[0].getElementsByClassName("rs-on-sh").length > 0 && (_R[e].c.on("tp-mouseenter", function() {
                _R[e].mouseoncontainer = !0;
                var t, i = _R[e].pr_next_key !== undefined ? _R[e].pr_next_key : _R[e].pr_processing_key !== undefined ? _R[e].pr_processing_key : _R[e].pr_active_key !== undefined ? _R[e].pr_active_key : _R[e].pr_next_key;
                if ("none" !== i && i !== undefined) {
                    if ((i = _R.gA(_R[e].slides[i], "key")) !== undefined && _R[e].layers[i])
                        for (t in _R[e].layers[i]) _R[e].layers[i][t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                            layer: jQuery(_R[e].layers[i][t]),
                            frame: "frame_1",
                            mode: "trigger",
                            id: e
                        });
                    for (t in _R[e].layers.static) _R[e].layers.static[t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                        layer: jQuery(_R[e].layers.static[t]),
                        frame: "frame_1",
                        mode: "trigger",
                        id: e
                    })
                }
            }), _R[e].c.on("tp-mouseleft", function() {
                _R[e].mouseoncontainer = !0;
                var t, i = _R[e].pr_next_key !== undefined ? _R[e].pr_next_key : _R[e].pr_processing_key !== undefined ? _R[e].pr_processing_key : _R[e].pr_active_key !== undefined ? _R[e].pr_active_key : _R[e].pr_next_key;
                if ("none" !== i && i !== undefined) {
                    if ((i = _R.gA(_R[e].slides[i], "key")) !== undefined && _R[e].layers[i])
                        for (t in _R[e].layers[i]) _R[e].layers[i][t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                            layer: jQuery(_R[e].layers[i][t]),
                            frame: "frame_999",
                            mode: "trigger",
                            id: e
                        });
                    for (t in _R[e].layers.static) _R[e].layers.static[t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                        layer: jQuery(_R[e].layers.static[t]),
                        frame: "frame_999",
                        mode: "trigger",
                        id: e
                    })
                }
            })), _R[e].moduleActionsPrepared = !0
        },
        checkActions_intern = function(layer, id) {
            var actions = _R.gA(layer[0], "actions"),
                _L = layer.data();
            for (var ei in actions = actions.split("||"), layer.addClass("rs-waction"), _L.events = _L.events === undefined ? [] : _L.events, actions)
                if (actions.hasOwnProperty(ei)) {
                    var event = getEventParams(actions[ei].split(";"));
                    _L.events.push(event), _R[id].fullscreen_esclistener || "exitfullscreen" != event.action && "togglefullscreen" != event.action || (_R.document.keyup(function(e) {
                        27 == e.keyCode && jQuery("#rs-go-fullscreen").length > 0 && layer.trigger(event.on)
                    }), _R[id].fullscreen_esclistener = !0);
                    var targetlayer = "backgroundvideo" == event.layer ? jQuery("rs-bgvideo") : "firstvideo" == event.layer ? jQuery("rs-slide").find(".rs-layer-video") : jQuery("#" + event.layer);
                    switch (-1 != jQuery.inArray(event.action, ["toggleslider", "toggle_mute_video", "toggle_global_mute_video", "togglefullscreen"]) && (_L._togglelisteners = !0), event.action) {
                        case "togglevideo":
                            jQuery.each(targetlayer, function() {
                                updateToggleByList(jQuery(this), "videotoggledby", layer[0].id)
                            });
                            break;
                        case "togglelayer":
                            jQuery.each(targetlayer, function() {
                                updateToggleByList(jQuery(this), "layertoggledby", layer[0].id), jQuery(this).data("triggered_startstatus", event.togglestate)
                            });
                            break;
                        case "toggle_global_mute_video":
                        case "toggle_mute_video":
                            jQuery.each(targetlayer, function() {
                                updateToggleByList(jQuery(this), "videomutetoggledby", layer[0].id)
                            });
                            break;
                        case "toggleslider":
                            _R[id].slidertoggledby == undefined && (_R[id].slidertoggledby = []), _R[id].slidertoggledby.push(layer[0].id);
                            break;
                        case "togglefullscreen":
                            _R[id].fullscreentoggledby == undefined && (_R[id].fullscreentoggledby = []), _R[id].fullscreentoggledby.push(layer[0].id)
                    }
                }
            _R[id].actionsPrepared = !0, layer.on("click mouseenter mouseleave", function(e) {
                for (var i in _L.events)
                    if (_L.events.hasOwnProperty(i) && _L.events[i].on === e.type) {
                        var event = _L.events[i];
                        if ("click" === event.on && layer.hasClass("tp-temporarydisabled")) return !1;
                        var targetlayer = "backgroundvideo" == event.layer ? jQuery(_R[id].slides[_R[id].pr_active_key]).find("rs-sbg-wrap rs-bgvideo") : "firstvideo" == event.layer ? jQuery(_R[id].slides[_R[id].pr_active_key]).find(".rs-layer-video").first() : jQuery("#" + event.layer),
                            tex = targetlayer.length > 0;
                        switch (event.action) {
                            case "menulink":
                                var linkto = _R.getURLDetails({
                                        url: event.url,
                                        anchor: event.anchor
                                    }),
                                    linkfrom = _R.getURLDetails();
                                linkto.host == linkfrom.host && linkto.path == linkfrom.path && "_self" === event.target ? _R.scrollToId({
                                    id: id,
                                    offset: event.offset,
                                    action: event.action,
                                    anchor: event.anchor,
                                    hash: linkto.hash,
                                    speed: event.speed,
                                    ease: event.ease
                                }) : "_self" === event.target ? window.location = linkto.url + (linkto.anchor !== undefined && "" !== linkto.anchor ? "#" + linkto.anchor : "") : window.open(linkto.url + (linkto.anchor !== undefined && "" !== linkto.anchor ? "#" + linkto.anchor : "")), e.preventDefault();
                                break;
                            case "nextframe":
                            case "prevframe":
                            case "gotoframe":
                            case "togglelayer":
                            case "toggleframes":
                            case "startlayer":
                            case "stoplayer":
                                if (targetlayer[0] === undefined) continue;
                                var _ = _R[id]._L[targetlayer[0].id],
                                    frame = event.frame,
                                    tou = "triggerdelay";
                                if ("click" === e.type && _.clicked_time_stamp !== undefined && (new Date).getTime() - _.clicked_time_stamp < 300) return;
                                if ("mouseenter" === e.type && _.mouseentered_time_stamp !== undefined && (new Date).getTime() - _.mouseentered_time_stamp < 300) return;
                                if (clearTimeout(_.triggerdelayIn), clearTimeout(_.triggerdelayOut), clearTimeout(_.triggerdelay), "click" === e.type && (_.clicked_time_stamp = (new Date).getTime()), "mouseenter" === e.type && (_.mouseentered_time_stamp = (new Date).getTime()), "mouseleave" === e.type && (_.mouseentered_time_stamp = undefined), "nextframe" === event.action || "prevframe" === event.action) {
                                    _.forda = _.forda === undefined ? getFordWithAction(_) : _.forda;
                                    var inx = jQuery.inArray(_.currentframe, _.ford);
                                    for ("nextframe" === event.action && inx++, "prevframe" === event.action && inx--;
                                        "skip" !== _.forda[inx] && inx > 0 && inx < _.forda.length - 1;) "nextframe" === event.action && inx++, "prevframe" === event.action && inx--, inx = Math.min(Math.max(0, inx), _.forda.length - 1);
                                    frame = _.ford[inx]
                                }
                                jQuery.inArray(event.action, ["toggleframes", "togglelayer", "startlayer", "stoplayer"]) >= 0 && (_.triggeredstate = "startlayer" === event.action || "togglelayer" === event.action && "frame_1" !== _.currentframe || "toggleframes" === event.action && _.currentframe !== event.frameN, "togglelayer" === event.action && !0 === _.triggeredstate && _.currentframe !== undefined && "frame_999" !== _.currentframe && (_.triggeredstate = !1), frame = _.triggeredstate ? "toggleframes" === event.action ? event.frameN : "frame_1" : "toggleframes" === event.action ? event.frameM : "frame_999", tou = _.triggeredstate ? "triggerdelayIn" : "triggerdelayOut", _.triggeredstate ? _R.toggleState(_.layertoggledby) : (_R.stopVideo && _R.stopVideo(targetlayer, id), _R.unToggleState(_.layertoggledby)));
                                var pars = {
                                    layer: targetlayer,
                                    frame: frame,
                                    mode: "trigger",
                                    id: id
                                };
                                !0 === event.children && (pars.updateChildren = !0, pars.fastforward = !0), _R.renderLayerAnimation && (clearTimeout(_[tou]), _[tou] = setTimeout(function(e) {
                                    _R.renderLayerAnimation(e)
                                }, 1e3 * event.delay, pars));
                                break;
                            case "playvideo":
                                tex && _R.playVideo(targetlayer, id);
                                break;
                            case "stopvideo":
                                tex && _R.stopVideo && _R.stopVideo(targetlayer, id);
                                break;
                            case "togglevideo":
                                tex && (_R.isVideoPlaying(targetlayer, id) ? _R.stopVideo && _R.stopVideo(targetlayer, id) : _R.playVideo(targetlayer, id));
                                break;
                            case "mutevideo":
                                tex && _R.Mute(targetlayer, id, !0);
                                break;
                            case "unmutevideo":
                                tex && _R.Mute && _R.Mute(targetlayer, id, !1);
                                break;
                            case "toggle_mute_video":
                                tex && (_R.Mute(targetlayer, id) ? _R.Mute(targetlayer, id, !1) : _R.Mute && _R.Mute(targetlayer, id, !0));
                                break;
                            case "toggle_global_mute_video":
                                var pvl = _R[id].playingvideos != undefined && _R[id].playingvideos.length > 0;
                                pvl && (_R[id].globalmute ? jQuery.each(_R[id].playingvideos, function(e, t) {
                                    _R.Mute && _R.Mute(t, id, !1)
                                }) : jQuery.each(_R[id].playingvideos, function(e, t) {
                                    _R.Mute && _R.Mute(t, id, !0)
                                })), _R[id].globalmute = !_R[id].globalmute;
                                break;
                            default:
                                tpGS.gsap.delayedCall(event.delay, function(targetlayer, id, event, layer) {
                                    switch (event.action) {
                                        case "openmodal":
                                            if (event.modalslide = event.modalslide === undefined ? 0 : event.modalslide, window.RS_60_MODALS === undefined || -1 == jQuery.inArray(event.modal, window.RS_60_MODALS)) {
                                                _R.showModalCover(id, event, "show");
                                                var data = {
                                                    action: "revslider_ajax_call_front",
                                                    client_action: "get_slider_html",
                                                    token: _R[id].ajaxNonce,
                                                    alias: event.modal,
                                                    usage: "modal"
                                                };
                                                jQuery.ajax({
                                                    type: "post",
                                                    url: _R[id].ajaxUrl,
                                                    dataType: "json",
                                                    data: data,
                                                    success: function(e, t, i) {
                                                        1 == e.success && (jQuery("body").append(e.data), setTimeout(function() {
                                                            _R.showModalCover(id, event, "hide"), _R.document.trigger("RS_OPENMODAL_" + event.modal, event.modalslide)
                                                        }, 49))
                                                    },
                                                    error: function(e) {
                                                        console.log("Modal Can not be Loaded"), console.log(e)
                                                    }
                                                })
                                            } else _R.document.trigger("RS_OPENMODAL_" + event.modal, event.modalslide);
                                            break;
                                        case "closemodal":
                                            _R.revModal(id, {
                                                mode: "close"
                                            });
                                            break;
                                        case "callback":
                                            eval(event.callback);
                                            break;
                                        case "simplelink":
                                            window.open(event.url, event.target);
                                            break;
                                        case "simulateclick":
                                            targetlayer.length > 0 && targetlayer.click();
                                            break;
                                        case "toggleclass":
                                            targetlayer.length > 0 && targetlayer.toggleClass(event.classname);
                                            break;
                                        case "scrollbelow":
                                        case "scrollto":
                                            "scrollbelow" === event.action && layer.addClass("tp-scrollbelowslider"), _R.scrollToId({
                                                id: id,
                                                offset: event.offset,
                                                action: event.action,
                                                anchor: event.id,
                                                speed: event.speed,
                                                ease: event.ease
                                            });
                                            break;
                                        case "jumptoslide":
                                            switch (event.slide.toLowerCase()) {
                                                case "+1":
                                                case "next":
                                                case "rs-next":
                                                    _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 0, _R.callingNewSlide(id, 1, "carousel" === _R[id].sliderType);
                                                    break;
                                                case "rs-previous":
                                                case "rs-prev":
                                                case "previous":
                                                case "prev":
                                                case "-1":
                                                    _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 1, _R.callingNewSlide(id, -1, "carousel" === _R[id].sliderType);
                                                    break;
                                                case "first":
                                                case "rs-first":
                                                    _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 1, _R.callingNewSlide(id, 0, "carousel" === _R[id].sliderType);
                                                    break;
                                                case "last":
                                                case "rs-last":
                                                    _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 0, _R.callingNewSlide(id, _R[id].slideamount - 1, "carousel" === _R[id].sliderType);
                                                    break;
                                                default:
                                                    var ts = jQuery.isNumeric(event.slide) ? parseInt(event.slide, 0) : event.slide;
                                                    _R.callingNewSlide(id, ts, "carousel" === _R[id].sliderType)
                                            }
                                            break;
                                        case "toggleslider":
                                            _R[id].noloopanymore = 0, "playing" == _R[id].sliderstatus ? (_R[id].c.revpause(), _R[id].forcepaused = !0, _R.unToggleState(_R[id].slidertoggledby)) : (_R[id].forcepaused = !1, _R[id].c.revresume(), _R.toggleState(_R[id].slidertoggledby));
                                            break;
                                        case "pauseslider":
                                            _R[id].c.revpause(), _R.unToggleState(_R[id].slidertoggledby);
                                            break;
                                        case "playslider":
                                            _R[id].noloopanymore = 0, _R[id].c.revresume(), _R.toggleState(_R[id].slidertoggledby);
                                            break;
                                        case "gofullscreen":
                                        case "exitfullscreen":
                                        case "togglefullscreen":
                                            var gf;
                                            jQuery(".rs-go-fullscreen").length > 0 && ("togglefullscreen" == event.action || "exitfullscreen" == event.action) ? (jQuery(".rs-go-fullscreen").removeClass("rs-go-fullscreen"), gf = _R[id].c.closest("rs-fullwidth-wrap").length > 0 ? _R[id].c.closest("rs-fullwidth-wrap") : _R[id].c.closest("rs-module-wrap"), _R[id].minHeight = _R[id].oldminheight, _R[id].infullscreenmode = !1, _R[id].c.revredraw(), _R[id].c.revredraw(), jQuery(window).trigger("resize"), _R.unToggleState(_R[id].fullscreentoggledby)) : 0 != jQuery(".rs-go-fullscreen").length || "togglefullscreen" != event.action && "gofullscreen" != event.action || (gf = _R[id].c.closest("rs-fullwidth-wrap").length > 0 ? _R[id].c.closest("rs-fullwidth-wrap") : _R[id].c.closest("rs-module-wrap"), gf.addClass("rs-go-fullscreen"), _R[id].oldminheight = _R[id].minHeight, _R[id].minHeight = _R.getWinH(id), _R[id].infullscreenmode = !0, jQuery(window).trigger("resize"), _R.toggleState(_R[id].fullscreentoggledby), _R[id].c.revredraw());
                                            break;
                                        default:
                                            _R[id].c.trigger("layeraction", [event.action, layer, event])
                                    }
                                }, [targetlayer, id, event, layer])
                        }
                    }
            })
        };

    function getFordWithAction(e) {
        var t = [];
        for (var i in e.ford) e.frames[e.ford[i]].timeline.waitoncall ? t.push(e.ford[i]) : t.push("skip");
        return t
    }

    function updateToggleByList(e, t, i) {
        var a = e.data(t);
        a === undefined && (a = []), a.push(i), e.data(t, a)
    }

    function getEventParams(e) {
        var t = {
            on: "click",
            delay: 0,
            ease: "power2.out",
            speed: 400
        };
        for (var i in e)
            if (e.hasOwnProperty(i)) {
                var a = e[i].split(":");
                switch (a[0]) {
                    case "modal":
                        t.modal = a[1];
                        break;
                    case "ms":
                        t.modalslide = a[1];
                        break;
                    case "m":
                        t.frameM = a[1];
                        break;
                    case "n":
                        t.frameN = a[1];
                        break;
                    case "o":
                        t.on = "click" === a[1] || "c" === a[1] ? "click" : "ml" === a[1] || "mouseleave" === a[1] ? "mouseleave" : "mouseenter" === a[1] || "me" === a[1] ? "mouseenter" : a[1];
                        break;
                    case "d":
                        t.delay = parseInt(a[1], 0) / 1e3, t.delay = "NaN" === t.delay || isNaN(t.delay) ? 0 : t.delay;
                        break;
                    case "a":
                        t.action = a[1];
                        break;
                    case "f":
                        t.frame = a[1];
                        break;
                    case "slide":
                        t.slide = a[1];
                        break;
                    case "layer":
                        t.layer = a[1];
                        break;
                    case "sp":
                        t.speed = parseInt(a[1], 0);
                        break;
                    case "e":
                        t.ease = a[1];
                        break;
                    case "ls":
                        t.togglestate = a[1];
                        break;
                    case "offset":
                        t.offset = a[1];
                        break;
                    case "call":
                        t.callback = a[1];
                        break;
                    case "url":
                        t.url = "";
                        for (var r = 1; r < a.length; r++) t.url += a[r] + (r === a.length - 1 ? "" : ":");
                        break;
                    case "target":
                        t.target = a[1];
                        break;
                    case "class":
                        t.classname = a[1];
                        break;
                    case "ch":
                        t.children = "true" == a[1] || 1 == a[1] || "t" == a[1];
                        break;
                    default:
                        a[0].length > 0 && "" !== a[0] && (t[a[0]] = a[1])
                }
            }
        return t
    }
    var getOffContH = function(e) {
        if (e == undefined) return 0;
        if (e.split(",").length > 1) {
            var t = e.split(","),
                i = 0;
            return t && jQuery.each(t, function(e, t) {
                jQuery(t).length > 0 && (i += jQuery(t).outerHeight(!0))
            }), i
        }
        return jQuery(e).height()
    }
}(jQuery),
function(e) {
    "use strict";
    var t = jQuery.fn.revolution;
    t.is_mobile();
    jQuery.extend(!0, t, {
        prepareCarousel: function(e, i, a) {
            if (void 0 !== e) {
                var o = t[e].carousel;
                o.slidepositions = void 0 === o.slidepositions ? [] : o.slidepositions, o.slideFakePositions = void 0 === o.slideFakePositions ? [] : o.slideFakePositions, i = o.lastdirection = r(i, o.lastdirection), t.setCarouselDefaults(e), void 0 === o.slidepositions[0] && (o.slideAnims = [], t.organiseCarousel(e, "right", !0, !1, !1), o.focused = 0, o.keepFocusedFirst = !0), o.slide_offset = void 0 !== o.slide_offset && jQuery.isNumeric(o.slide_offset) ? o.slide_offset : 0, o.swipeTo = o.slide_offset + s(e), o.swipeToDistance = Math.abs(o.slide_offset) + Math.abs(s(e)), void 0 !== o.swipeTo && jQuery.isNumeric(o.swipeTo) ? void 0 !== a ? t.swipeAnimate({
                    id: e,
                    to: o.swipeTo,
                    distance: o.swipeToDistance,
                    direction: i,
                    fix: !0,
                    speed: a
                }) : t.swipeAnimate({
                    id: e,
                    to: o.swipeTo,
                    distance: o.swipeToDistance,
                    direction: i,
                    fix: !0
                }) : t.swipeAnimate({
                    id: e,
                    to: 0,
                    direction: i,
                    speed: 0
                })
            }
        },
        carouselToEvalPosition: function(e, a, o) {
            var s = t[e].carousel;
            if (s.justify) s.focused = void 0 === s.focused ? 0 : s.focused, s.slidepositions[s.focused] = void 0 === s.slidepositions[s.focused] ? 0 : s.slidepositions[s.focused], s.slide_offset_target = i(e, s.focused);
            else {
                a = s.lastdirection = r(a, s.lastdirection);
                var n = "center" === s.horizontal_align ? (s.wrapwidth / 2 - s.slide_width / 2 - s.slide_offset) / s.slide_width : (0 - s.slide_offset) / s.slide_width,
                    l = n % t[e].slideamount,
                    d = l - Math.floor(l),
                    c = -1 * (Math.ceil(l) - l),
                    p = -1 * (Math.floor(l) - l),
                    g = d * s.slide_width,
                    u = g >= 20 && "left" === a ? 1 : g >= s.slide_width - 20 && "right" === a ? 2 : g < 20 && "left" === a ? 3 : g < s.slide_width - 20 && "right" === a ? 4 : 5,
                    m = 1 === u || 2 === u ? c : 3 === u || 4 === u ? p : 0;
                s.slide_offset_target = (s.infinity ? m : l < 0 ? l : n > t[e].slideamount - 1 ? n - (t[e].slideamount - 1) : m) * s.slide_width
            }
            return s.slide_offset_target !== s.slide_offset_targetCACHE && !0 !== o && (0 !== Math.abs(s.slide_offset_target) ? t.animateCarousel(e, a, !0) : t.organiseCarousel(e, a), s.slide_offset_targetCACHE = s.slide_offset_target), s.slide_offset_target
        },
        loadVisibleCarouselItems: function(e, i) {
            var a = [];
            t[e].carousel.focused = parseInt(t[e].carousel.focused, 0), t[e].carousel.focused = jQuery.isNumeric(t[e].carousel.focused) ? t[e].carousel.focused : 0;
            for (var r = 0; r < Math.ceil(t[e].carousel.maxVisibleItems / 2); r++) {
                var o = "right" === t[e].carousel.horizontal_align ? t[e].carousel.focused - r : t[e].carousel.focused + r,
                    s = "center" === t[e].carousel.horizontal_align ? t[e].carousel.focused - r : "left" === t[e].carousel.horizontal_align ? t[e].carousel.maxVisibleItems + o - 1 : o - t[e].carousel.maxVisibleItems + 1;
                o = o >= t[e].slideamount ? o - t[e].slideamount + 0 : o, s = s >= t[e].slideamount ? s - t[e].slideamount + 0 : s, o = o < 0 ? t[e].slideamount + o : o, s = s < 0 ? t[e].slideamount + s : s, a.push(t[e].slides[o]), o !== s && a.push(t[e].slides[s])
            }
            return i && (t.loadImages(a, e, 1), t.waitForCurrentImages(a, e)), a
        },
        organiseCarousel: function(e, i, a, r, o) {
            Math.round(1e5 * Math.random());
            var s = t[e].carousel,
                n = "center" === s.horizontal_align ? 2 : 1,
                l = Math.ceil(s.maxVisibleItems / n),
                d = "center" === s.horizontal_align ? s.wrapwidth / 2 + s.maxwidth / 2 : s.maxwidth - s.slide_width,
                c = "center" === s.horizontal_align ? s.wrapwidth / 2 - s.maxwidth / 2 : 0 - s.slide_width,
                p = 0,
                g = 0,
                u = 0;
            if (i = s.slide_offset < s.cached_slide_offset ? "left" : "right", s.cached_slide_offset = s.slide_offset, !0 !== s.justify && "center" === s.horizontal_align) {
                var m = 2 * (s.windhalf - s.wrapoffset) + s.slide_width;
                m >= s.maxwidth && ("left" === i && (d = 2 * s.windhalf, c = 0 - (s.slide_width - (m - s.maxwidth))), "right" === i && (d = 2 * s.windhalf - (m - s.maxwidth), c = 0 - s.slide_width))
            }
            for (var h = 2 * s.windhalf, f = 0, v = -1, y = 0; y < s.len; y++) !0 === s.justify ? (p += y > 0 ? s.slide_widths[y - 1] + s.space : s.slide_offset, s.wrapwidth >= s.maxwidth && "center" !== s.horizontal_align && (s.slideFakePositions[y] = p - s.slide_offset), c = 0 - s.slide_widths[y], d = s.maxwidth - s.slide_widths[y], s.inneroffset = 0) : (p = y * s.slide_width + s.slide_offset, s.wrapwidth >= s.maxwidth && "left" === s.horizontal_align && (s.slideFakePositions[y] = y * s.slide_width), s.wrapwidth >= s.maxwidth && "right" === s.horizontal_align && (s.slideFakePositions[y] = s.wrapwidth - (y + 1) * s.slide_width)), u = g = p, s.infinity && (g = g >= d - s.inneroffset ? g - s.maxwidth : g <= c - s.inneroffset ? g + s.maxwidth : g), h > g && (h = g, y), f < g && (f = g, v = y), s.slidepositions[y] = u > s.maxwidth + d ? g - s.maxwidth : u < c - s.maxwidth ? g + s.maxwidth : g;
            s.infinity && h > 0 && f > s.wrapwidth && (s.slidepositions[v] -= s.maxwidth);
            var b = 999,
                _ = 0,
                w = (t[e].width, !1),
                x = "right" === s.horizontal_align ? 0 : s.wrapwidth;
            if (t[e].slides)
                for (y = 0; y < t[e].slides.length; y++) {
                    var k = {
                            left: (g = s.slidepositions[y]) + s.inneroffset,
                            width: !0 === s.justify ? s.slide_widths[y] : s.slide_width,
                            x: 0
                        },
                        S = 0;
                    if (void 0 === s.slideAnims[y] && (k.transformOrigin = "50% " + s.vertical_align, k.scale = 1, k.force3D = !0, k.transformStyle = "3D" != t[e].parallax.type && "3d" != t[e].parallax.type ? "flat" : "preserve-3d"), s.justify) k.autoAlpha = 1, s.wrapwidth >= s.maxwidth && "center" !== s.horizontal_align || ("center" === s.horizontal_align && s.slidepositions[y] < s.windhalf && s.slidepositions[y] + s.slide_widths[y] > s.windhalf ? s.focused = y : "left" === s.horizontal_align && s.slidepositions[y] >= -25 && s.slidepositions[y] < s.windhalf && (!w || s.slidepositions[y] < x) ? (s.focused = y, w = !0, x = s.slidepositions[y]) : "right" === s.horizontal_align && s.slidepositions[y] + s.slide_widths[y] <= s.wrapwidth + 25 && (s.slide_widths[y] < s.windhalf && s.slidepositions[y] > s.windhalf || s.slidepositions[y] > s.wrapwidth - s.slide_widths[y]) && (!w || s.slidepositions[y] > x) && (s.focused = y, w = !0, x = s.slidepositions[y]), s.focused = s.focused >= s.len ? s.infinity ? 0 : s.len - 1 : s.focused < 0 ? s.infinity ? s.len - 1 : 0 : s.focused);
                    else {
                        S = "center" === s.horizontal_align ? (Math.abs(s.wrapwidth / 2) - (k.left + s.slide_width / 2)) / s.slide_width : (s.inneroffset - k.left) / s.slide_width, (Math.abs(S) < b || 0 === S) && (b = Math.abs(S), s.focused = y), void 0 !== s.minScale && s.minScale > 0 && (s.vary_scale ? k.scale = 1 - Math.abs((1 - s.minScale) / l * S) : k.scale = S >= 1 || S <= -1 ? s.minScale : s.minScale + (1 - s.minScale) * (1 - Math.abs(S)), _ = S * (k.width - k.width * k.scale) / 2), s.fadeout && (s.vary_fade ? k.autoAlpha = 1 - Math.abs(s.maxOpacity / l * S) : k.autoAlpha = S >= 1 || S <= -1 ? s.maxOpacity : s.maxOpacity + (1 - s.maxOpacity) * (1 - Math.abs(S)));
                        var L = Math.ceil(s.maxVisibleItems / n) - Math.abs(S);
                        k.autoAlpha = void 0 === k.autoAlpha ? 1 : k.autoAlpha, k.autoAlpha = Math.max(0, Math.min(L, k.autoAlpha)), void 0 !== s.maxRotation && 0 != Math.abs(s.maxRotation) && (s.vary_rotation ? (k.rotationY = Math.abs(s.maxRotation) - Math.abs((1 - Math.abs(1 / l * S)) * s.maxRotation), k.autoAlpha = Math.abs(k.rotationY) > 90 ? 0 : k.autoAlpha) : k.rotationY = S >= 1 || S <= -1 ? s.maxRotation : Math.abs(S) * s.maxRotation, k.rotationY = S < 0 ? -1 * k.rotationY : k.rotationY, t.isSafari11() && (k.z = 0 !== S ? 0 - Math.abs(k.rotationY) : 0)), k.x = Math.floor(-1 * s.space * S * (s.offsetScale ? k.scale : 1)), void 0 !== k.scale && (k.x = k.x + _)
                    }
                    k.x += s.wrapwidth >= s.maxwidth && ("left" === s.horizontal_align || "right" === s.horizontal_align) ? s.slideFakePositions[y] : Math.floor(k.left), delete k.left, k.zIndex = s.justify ? 95 : Math.round(100 - Math.abs(5 * S)), !0 !== o && (void 0 !== s.slideAnims[y] && (k.width === s.slideAnims[y].width && delete k.width, k.x === s.slideAnims[y].x && delete k.x, k.autoAlpha === s.slideAnims[y].autoAlpha && delete k.autoAlpha, k.scale === s.slideAnims[y].scale && delete k.scale, k.zIndex === s.slideAnims[y].zIndex && delete k.zIndex, k.rotationY === s.slideAnims[y].rotationY && delete k.rotationY), tpGS.gsap.set(t[e].slides[y], k), s.slideAnims[y] = jQuery.extend(!0, s.slideAnims[y], k))
                }
            r && !0 !== o && (s.focused = void 0 === s.focused ? 0 : s.focused, s.oldfocused = void 0 === s.oldfocused ? 0 : s.oldfocused, t[e].pr_next_key = s.focused, s.focused !== s.oldfocused && t.animateTheLayers && (t.removeTheLayers(jQuery(t[e].slides[s.oldfocused]), e), t.animateTheLayers({
                slide: s.focused,
                id: e,
                mode: "start"
            }), t.loadVisibleCarouselItems(e, !0)), s.oldfocused = s.focused, t[e].c.trigger("revolution.nextslide.waiting"))
        },
        swipeAnimate: function(e) {
            var i = t[e.id].carousel,
                r = {
                    from: i.slide_offset,
                    to: e.to
                },
                o = void 0 === e.speed ? .5 : e.speed;
            if (i.distance = void 0 !== e.distance ? e.distance : e.to, void 0 !== i.positionanim && i.positionanim.pause(), e.fix) {
                if (!1 !== i.snap) {
                    var s = i.slide_offset,
                        n = "end" === e.phase ? i.focusedBeforeSwipe : i.focused;
                    i.slide_offset = e.to, t.organiseCarousel(e.id, e.direction, !0, !1, !1), Math.abs(i.swipeDistance) > 40 && n == i.focused && (i.focused = "right" === e.direction ? i.focused - 1 : i.focused + 1, i.focused = i.focused >= i.len ? i.infinity ? 0 : i.len - 1 : i.focused < 0 ? i.infinity ? i.len - 1 : 0 : i.focused), r.to += t.carouselToEvalPosition(e.id, e.direction, !0), i.slide_offset = s, t.organiseCarousel(e.id, e.direction, !0, !1, !1), i.keepFocusedFirst && (i.keepFocusedFirst = !1, i.focused = 0)
                } else !0 !== i.infinity ? (r.to > 0 && (r.to = 0), r.to < i.wrapwidth - i.maxwidth && (r.to = i.wrapwidth - i.maxwidth)) : "end" === e.phase ? i.dragModeJustEnded = !0 : !0 !== i.dragModeJustEnded ? r.to += t.carouselToEvalPosition(e.id, e.direction, !0) : i.dragModeJustEnded = !1;
                0 !== (o = i.speed / 1e3 * a(Math.abs(Math.abs(r.from) - Math.abs(i.distance)) / i.wrapwidth)) && o < .1 && Math.abs(r.to) > 25 && (o = .3)
            }
            i.swipeDistance = 0, o = !0 !== i.firstSwipedDone ? 0 : o, i.firstSwipedDone = !0, i.positionanim = tpGS.gsap.to(r, o, {
                from: r.to,
                onUpdate: function() {
                    i.slide_offset = r.from % i.maxwidth, t.organiseCarousel(e.id, e.direction, !0 !== e.fix, !0 !== e.fix), i.slide_offset = r.from
                },
                onComplete: function() {
                    i.slide_offset = r.from % i.maxwidth, "carousel" !== t[e.id].sliderType || i.fadein || (tpGS.gsap.to(t[e.id].canvas, 1, {
                        scale: 1,
                        opacity: 1
                    }), i.fadein = !0), i.lastNotSimplifedSlideOffset = i.slide_offset, i.justDragged = !1, e.fix && (i.focusedAfterAnimation = i.focused, e.newSlide && i.focusedBeforeSwipe !== i.focused && t.callingNewSlide(e.id, jQuery(t[e.id].slides[i.focused]).data("key"), !0), t.organiseCarousel(e.id, e.direction, !0, !0), t[e.id].c.trigger("revolution.slide.carouselchange", {
                        slider: e.id,
                        slideIndex: parseInt(t[e.id].pr_active_key, 0) + 1,
                        slideLIIndex: t[e.id].pr_active_key,
                        slide: t[e.id].pr_next_slide,
                        currentslide: t[e.id].pr_next_slide,
                        prevSlideIndex: void 0 !== t[e.id].pr_lastshown_key && parseInt(t[e.id].pr_lastshown_key, 0) + 1,
                        prevSlideLIIndex: void 0 !== t[e.id].pr_lastshown_key && parseInt(t[e.id].pr_lastshown_key, 0),
                        prevSlide: void 0 !== t[e.id].pr_lastshown_key && t[e.id].slides[t[e.id].pr_lastshown_key]
                    }))
                },
                ease: e.easing ? e.easing : i.easing
            })
        },
        defineCarouselElements: function(e) {
            var i = t[e].carousel;
            i.infbackup = i.infinity, i.maxVisiblebackup = i.maxVisibleItems, i.slide_offset = "none", i.slide_offset = 0, i.cached_slide_offset = 0, i.wrap = jQuery(t[e].canvas[0].parentNode), 0 !== i.maxRotation && ("3D" !== t[e].parallax.type && "3d" !== t[e].parallax.type || tpGS.gsap.set(i.wrap, {
                perspective: "1600px",
                transformStyle: "preserve-3d"
            }))
        },
        setCarouselDefaults: function(e, i) {
            var a, r, o = t[e].carousel;
            if (!0 !== o.carouselDefaultsCalled && (t.callContWidthManager(e), t.setSize(e), t.updateDimensions(e), o.carouselDefaultsCalled = !0), void 0 === t[e].navOutterOffsets && (t[e].navOutterOffsets = t.getHorizontalOffset(t[e].c, "all")), !0 !== i && (a = t[e].navOutterOffsets.left, r = t[e].navOutterOffsets.right), o.slide_width = !0 !== o.stretch ? t[e].gridwidth[t[e].level] * (0 === t[e].bw ? 1 : t[e].bw) : t[e].conw, o.slide_height = !0 !== o.stretch ? t[e].gridheight[t[e].level] * (0 === t[e].bw ? 1 : t[e].bw) : t[e].conh, o.ratio = o.slide_width / o.slide_height, o.len = t[e].slides.length, o.maxwidth = t[e].slideamount * o.slide_width, 1 != o.justify && o.maxVisiblebackup > o.len && (o.maxVisibleItems = o.len % 2 ? o.len : o.len + 1), o.wrapwidth = o.maxVisibleItems * o.slide_width + (o.maxVisibleItems - 1) * o.space, o.wrapwidth = "auto" != t[e].sliderLayout ? o.wrapwidth > t[e].conw ? t[e].conw : o.wrapwidth : o.wrapwidth > t[e].width ? t[e].width : o.wrapwidth, !0 === o.justify) {
                o.slide_height = t[e].gridheight[t[e].level], o.slide_widths = [], o.slide_widthsCache = void 0 === o.slide_widthsCache ? [] : o.slide_widthsCache, o.maxwidth = 0;
                for (var s = 0; s < o.len; s++)
                    if (t[e].slides.hasOwnProperty(s)) {
                        var n = t.gA(t[e].slides[s], "iratio");
                        n = void 0 === n || 0 === n || null === n ? o.ratio : n, o.slide_widths[s] = Math.round(o.slide_height * n), !1 !== o.justifyMaxWidth && (o.slide_widths[s] = Math.min(o.wrapwidth, o.slide_widths[s])), o.slide_widths[s] !== o.slide_widthsCache[s] && (o.slide_widthsCache[s] = o.slide_widths[s], !0 !== i && tpGS.gsap.set(t[e].slides[s], {
                            width: o.slide_widths[s]
                        })), o.maxwidth += o.slide_widths[s] + o.space
                    }
            }
            if (o.infinity = !(o.wrapwidth >= o.maxwidth) && o.infbackup, !0 !== o.quickmode) {
                o.wrapoffset = "center" === o.horizontal_align ? (t[e].conw - r - a - o.wrapwidth) / 2 : 0, o.wrapoffset = "auto" != t[e].sliderLayout && t[e].outernav ? 0 : o.wrapoffset < a ? a : o.wrapoffset;
                var l = "3D" == t[e].parallax.type || "3d" == t[e].parallax.type ? "visible" : "hidden",
                    d = "right" === o.horizontal_align ? {
                        left: "auto",
                        right: o.wrapoffset + "px",
                        width: o.wrapwidth,
                        overflow: l
                    } : "left" === o.horizontal_align || o.wrapwidth < t.winW ? {
                        right: "auto",
                        left: o.wrapoffset + "px",
                        width: o.wrapwidth,
                        overflow: l
                    } : {
                        right: "auto",
                        left: "auto",
                        width: "100%",
                        overflow: l
                    };
                void 0 !== o.cacheWrapObj && d.left === o.cacheWrapObj.left && d.right === o.cacheWrapObj.right && d.width === o.cacheWrapObj.width || (window.requestAnimationFrame(function() {
                    tpGS.gsap.set(o.wrap, d)
                }), o.cacheWrapObj = jQuery.extend(!0, {}, d)), o.inneroffset = "right" === o.horizontal_align ? o.wrapwidth - o.slide_width : 0, o.windhalf = "auto" === t[e].sliderLayout ? t[e].width / 2 : t.winW / 2
            }
        }
    });
    var i = function(e, i) {
            var a = t[e].carousel;
            return "center" === a.horizontal_align ? a.windhalf - a.slide_widths[i] / 2 - a.slidepositions[i] : "left" === a.horizontal_align ? 0 - a.slidepositions[i] : a.wrapwidth - a.slide_widths[i] - a.slidepositions[i]
        },
        a = function(e) {
            return e < 1 ? Math.sqrt(1 - (e -= 1) * e) : Math.sqrt(e)
        },
        r = function(e, t) {
            return null === e || jQuery.isEmptyObject(e) ? t : void 0 === e ? "right" : e
        },
        o = function(e, t) {
            return Math.abs(e) > Math.abs(t) ? e > 0 ? e - Math.abs(Math.floor(e / t) * t) : e + Math.abs(Math.floor(e / t) * t) : e
        },
        s = function(e) {
            var i, a, r, s, n, l = 0,
                d = t[e].carousel;
            if (void 0 !== d.positionanim && d.positionanim.pause(), d.justify) "center" === d.horizontal_align ? l = d.windhalf - d.slide_widths[d.focused] / 2 - d.slidepositions[d.focused] : "left" === d.horizontal_align ? l = 0 - d.slidepositions[d.focused] : "right" === d.horizontal_align && (l = d.wrapwidth - d.slide_widths[d.focused] - d.slidepositions[d.focused]), l = l > d.maxwidth / 2 ? d.maxwidth - l : l < 0 - d.maxwidth / 2 ? l + d.maxwidth : l;
            else {
                var c = t[e].pr_processing_key >= 0 ? t[e].pr_processing_key : t[e].pr_active_key >= 0 ? t[e].pr_active_key : 0,
                    p = ("center" === d.horizontal_align ? (d.wrapwidth / 2 - d.slide_width / 2 - d.slide_offset) / d.slide_width : (0 - d.slide_offset) / d.slide_width) % t[e].slideamount;
                l = (d.infinity ? (i = p, a = c, r = t[e].slideamount, n = a - r - i, s = o(s = a - i, r), n = o(n, r), -(Math.abs(s) > Math.abs(n) ? n : s)) : p - c) * d.slide_width
            }
            return !1 === d.snap && d.justDragged && (l = 0), d.justDragged = !1, l
        }
}(jQuery),
function(e) {
    "use strict";
    var t = ["chars", "words", "lines"],
        i = ["Top", "Right", "Bottom", "Left"],
        a = ["TopLeft", "TopRight", "BottomRight", "BottomLeft"],
        r = ["top", "right", "bottom", "left"],
        o = jQuery.fn.revolution,
        s = o.is_mobile();
    o.is_android();
    jQuery.extend(!0, o, {
        checkLayerDimensions: function(e) {
            var t = !1;
            for (var i in o[e.id].layers[e.skey])
                if (o[e.id].layers[e.skey].hasOwnProperty(i)) {
                    var a = o[e.id].layers[e.skey][i],
                        r = o[e.id]._L[a.id];
                    r.eow !== a.offsetWidth && "true" !== o.gA(a, "vary-layer-dims") && (t = !0), r.lastknownwidth = r.eow, r.lastknownheight = r.eoh, r._slidelink || o[e.id].caches.calcResponsiveLayersList.push({
                        a: o[e.id]._L[a.id].c,
                        b: e.id,
                        c: 0,
                        d: r.rsp_bd,
                        e: e.slideIndex
                    })
                }
            return t
        },
        requestLayerUpdates: function(e, t, i, a) {
            var r;
            if (void 0 !== i) r = i, o[e]._L[r].pVisRequest !== o[e]._L[r].pVisStatus && (void 0 === o[e]._L[r]._ligid || !0 !== o[e]._L[o[e]._L[r]._ligid].childrenAtStartNotVisible ? (o[e]._L[r].pVisStatus = o[e]._L[r].pVisRequest, 0 === o[e]._L[r].pVisStatus ? o[e]._L[r].p[0].classList.add("rs-forcehidden") : o[e]._L[r].p[0].classList.remove("rs-forcehidden")) : o[e]._L[r].p[0].classList.add("rs-forcehidden")), o[e]._L[r].pPointerStatus !== o[e]._L[r].pPeventsRequest && (o[e]._L[r].pPointerStatus = o[e]._L[r].pPeventsRequest, tpGS.gsap.set(o[e]._L[r].p[0], {
                pointerEvents: o[e]._L[r].pPointerStatus,
                visibility: o[e]._L[r].pVisStatus
            })), void 0 !== a && "ignore" !== a && 0 !== a && (a++, "enterstage" === t || "leavestage" === t || "framestarted" === t ? o.isFirefox(e) ? -1 === o[e]._L[r].p[0].style.transform.indexOf("perspective") && (o[e]._L[r].p[0].style.transform += (0 === o[e]._L[r].p[0].style.transform.length ? " " : "") + "perspective(" + a + "px)") : (!window.isSafari11 && 0 === o[e]._L[r].p[0].style.perspective.length || "none" == o[e]._L[r].p[0].style.perspective) && (o[e]._L[r].p[0].style.perspective = a + "px") : "frameended" === t && (o.isFirefox(e) ? o[e]._L[r].p[0].style.transform = o[e]._L[r].p[0].style.transform.replace("perspective(" + a + "px)", "") : window.isSafari11 || (o[e]._L[r].p[0].style.perspective = o[e]._L[r].p[0].style.perspective.replace(a + "px", ""))));
            else
                for (r in o[e]._L) o[e]._L.hasOwnProperty(r) && (o[e]._L[r].pVisRequest !== o[e]._L[r].pVisStatus && (o[e]._L[r].pVisStatus = o[e]._L[r].pVisRequest, 0 === o[e]._L[r].pVisStatus ? o[e]._L[r].p[0].classList.add("rs-forcehidden") : o[e]._L[r].p[0].classList.remove("rs-forcehidden")), o[e]._L[r].pPointerStatus !== o[e]._L[r].pPeventsRequest && (o[e]._L[r].pPointerStatus = o[e]._L[r].pPeventsRequest, tpGS.gsap.set(o[e]._L[r].p[0], {
                    pointerEvents: o[e]._L[r].pPointerStatus,
                    visibility: o[e]._L[r].pVisStatus
                })));
            if ("enterstage" === t) {
                var s = o[e].pr_processing_key || o[e].pr_active_key || 0;
                if (o[e].middleZones && o[e].middleZones.length > 0 && void 0 !== o[e].middleZones[s])
                    for (r = 0; r < o[e].middleZones[s].length; r++) tpGS.gsap.set(o[e].middleZones[s][r], {
                        y: Math.round(o[e].height / 2 - o[e].middleZones[s][r].offsetHeight / 2) + "px"
                    });
                if (o[e].smiddleZones && o[e].smiddleZones.length > 0)
                    for (r = 0; r < o[e].smiddleZones.length; r++) tpGS.gsap.set(o[e].smiddleZones[r], {
                        y: Math.round(o[e].height / 2 - o[e].smiddleZones[r].offsetHeight / 2) + "px"
                    });
                void 0 !== i && void 0 !== o[e]._L[i].esginside && o[e]._L[i].esginside.length > 0 && void 0 !== o[e]._L[i].esginside.esredraw && o[e]._L[i].esginside.esredraw()
            }
        },
        initLayer: function(e) {
            var t, i, a, r = e.id,
                s = e.skey;
            for (var n in o[r].layers[e.skey])
                if (o[r].layers[e.skey].hasOwnProperty(n)) {
                    var l = o[r].layers[e.skey][n],
                        d = jQuery(l),
                        c = o.gA(l, "initialised"),
                        p = c ? o[r]._L[l.id] : d.data();
                    "individual" === e.skey && (p.slideKey = void 0 === p.slideKey ? o.gA(d.closest("rs-slide")[0], "key") : p.slideKey, p.slideIndex = void 0 === p.slideIndex ? o.getSlideIndex(r, p.slideKey) : p.slideIndex, e.slideIndex = p.slideIndex, s = p.slideKey);
                    var g = "carousel" === o[r].sliderType ? 0 : o[r].width / 2 - o.iWA(r, e.slideIndex) * o[r].bw / 2,
                        u = 0;
                    if (void 0 === c) {
                        if (o.revCheckIDS(r, l), o[r]._L[l.id] = p, p.ford = void 0 === p.ford ? "frame_0;frame_1;frame_999" : p.ford, p.ford = ";" == p.ford[p.ford.length - 1] ? p.ford.substring(0, p.ford.length - 1) : p.ford, p.ford = p.ford.split(";"), void 0 !== p.clip)
                            for (t in p.clipPath = {
                                    use: !1,
                                    origin: "l",
                                    type: "rectangle"
                                }, p.clip = p.clip.split(";"), p.clip) p.clip.hasOwnProperty(t) && ("u" == (i = p.clip[t].split(":"))[0] && (p.clipPath.use = "true" == i[1]), "o" == i[0] && (p.clipPath.origin = i[1]), "t" == i[0] && (p.clipPath.type = i[1]));
                        if (p.frames = k(p, r), p.caches = {}, p.OBJUPD = {}, p.c = d, p.p = d.closest(".rs-parallax-wrap"), p.lp = d.closest("rs-loop-wrap"), p.m = d.closest("rs-mask-wrap"), p.triggercache = void 0 === p.triggercache ? "reset" : p.triggercache, p.rsp_bd = void 0 === p.rsp_bd ? "column" === p.type || "row" === p.type ? "off" : "on" : p.rsp_bd, p.rsp_o = void 0 === p.rsp_o ? "on" : p.rsp_o, p.basealign = void 0 === p.basealign ? "grid" : p.basealign, p.group = "group" !== p.type && d.closest("rs-group-wrap").length > 0 ? "group" : "column" !== p.type && d.closest("rs-column").length > 0 ? "column" : "row" !== p.type && d.closest("rs-row").length > 0 ? "row" : void 0, p._lig = "group" === p.group ? d.closest("rs-group") : "column" === p.group ? d.closest("rs-column") : "row" === p.group ? d.closest("rs-row") : void 0, p._ligid = void 0 !== p._lig ? p._lig[0].id : void 0, p._column = "RS-COLUMN" === d[0].tagName ? d.closest("rs-column-wrap") : "none", p._row = "RS-COLUMN" === d[0].tagName && d.closest("rs-row"), p._ingroup = "group" === p.group, p._incolumn = "column" === p.group, p._inrow = "row" === p.group, (p._ingroup || p._incolumn) && p._lig[0].className.indexOf("rs-sba") >= 0 && (!1 !== p.animationonscroll || void 0 === p.frames.loop) && !0 !== p.animOnScrollForceDisable && (p.animationonscroll = !0, d[0].className += " rs-sba", o[r].sbas[s][l.id] = d[0]), p.animOnScrollRepeats = 0, p._isgroup = "RS-GROUP" === d[0].tagName, p.type = p.type || "none", "row" === p.type && void 0 === p.cbreak && (p.cbreak = 2), p.esginside = jQuery(d.find(".esg-grid")), p._isnotext = -1 !== jQuery.inArray(p.type, ["video", "image", "audio", "shape", "row", "group"]), p._mediatag = "html5" == p.audio ? "audio" : "video", p.img = d.find("img"), p.deepiframe = d[0].getElementsByTagName("iframe"), p.deepmedia = d[0].getElementsByTagName(p._mediatag), p.layertype = "image" === p.type ? "image" : d[0].className.indexOf("rs-layer-video") >= 0 || d[0].className.indexOf("rs-layer-audio") >= 0 || p.deepiframe.length > 0 && (p.deepiframe[0].src.toLowerCase().indexOf("youtube") > 0 || p.deepiframe[0].src.toLowerCase().indexOf("vimeo") > 0) || p.deepmedia.length > 0 ? "video" : "html", p.deepiframe.length > 0 && o.sA(p.deepiframe[0], "layertype", p.layertype), "column" === p.type && (p.cbg = p.p.find("rs-column-bg"), p.cbgmask = p.p.find("rs-cbg-mask-wrap")), p._slidelink = d[0].className.indexOf("slidelink") >= 0, p._isstatic = d[0].className.indexOf("rs-layer-static") >= 0, p.slidekey = p._isstatic ? "staticlayers" : s, p._togglelisteners = d.find(".rs-toggled-content").length > 0, p.bgcol = void 0 === p.bgcol ? d[0].style.background.indexOf("gradient") >= 0 ? d[0].style.background : d[0].style.backgroundColor : p.bgcol, p.bgcol = "" === p.bgcol ? "rgba(0, 0, 0, 0)" : p.bgcol, p.bgcol = 0 === p.bgcol.indexOf("rgba(0, 0, 0, 0)") && p.bgcol.length > 18 ? p.bgcol.replace("rgba(0, 0, 0, 0)", "") : p.bgcol, p.zindex = d[0].style.zIndex, p._isgroup && (p.frames.frame_1.timeline.waitoncall && (p.childrenAtStartNotVisible = !0), p.pVisRequest = 0), p._togglelisteners && d.click(function() {
                                o.swaptoggleState([this.id])
                            }), void 0 !== p.border)
                            for (t in p.border = p.border.split(";"), p.bordercolor = "transparent", p.border)
                                if (p.border.hasOwnProperty(t)) switch ((i = p.border[t].split(":"))[0]) {
                                    case "boc":
                                        p.bordercolor = i[1];
                                        break;
                                    case "bow":
                                        p.borderwidth = o.revToResp(i[1], 4, 0);
                                        break;
                                    case "bos":
                                        p.borderstyle = o.revToResp(i[1], 4, 0);
                                        break;
                                    case "bor":
                                        p.borderradius = o.revToResp(i[1], 4, 0)
                                }
                        if ("svg" === p.type && (p.svg = d.find("svg"), p.svgPath = p.svg.find("path"), p.svgI = f(p.svgi, r), p.svgH = f(p.svgh, r)), void 0 !== p.btrans) {
                            var m = p.btrans;
                            for (t in p.btrans = {
                                    rX: 0,
                                    rY: 0,
                                    rZ: 0,
                                    o: 1
                                }, m = m.split(";"))
                                if (m.hasOwnProperty(t)) switch ((i = m[t].split(":"))[0]) {
                                    case "rX":
                                        p.btrans.rX = i[1];
                                        break;
                                    case "rY":
                                        p.btrans.rY = i[1];
                                        break;
                                    case "rZ":
                                        p.btrans.rZ = i[1];
                                        break;
                                    case "o":
                                        p.btrans.o = i[1]
                                }
                        }
                        if (void 0 !== p.tsh)
                            for (t in p.tshadow = {
                                    c: "rgba(0,0,0,0.25)",
                                    v: 0,
                                    h: 0,
                                    b: 0
                                }, p.tsh = p.tsh.split(";"), p.tsh)
                                if (p.tsh.hasOwnProperty(t)) switch ((i = p.tsh[t].split(":"))[0]) {
                                    case "c":
                                        p.tshadow.c = i[1];
                                        break;
                                    case "h":
                                        p.tshadow.h = i[1];
                                        break;
                                    case "v":
                                        p.tshadow.v = i[1];
                                        break;
                                    case "b":
                                        p.tshadow.b = i[1]
                                }
                        if (void 0 !== p.tst)
                            for (t in p.tstroke = {
                                    c: "rgba(0,0,0,0.25)",
                                    w: 1
                                }, p.tst = p.tst.split(";"), p.tst)
                                if (p.tst.hasOwnProperty(t)) switch ((i = p.tst[t].split(":"))[0]) {
                                    case "c":
                                        p.tstroke.c = i[1];
                                        break;
                                    case "w":
                                        p.tstroke.w = i[1]
                                }
                        if (void 0 !== p.bsh)
                            for (t in p.bshadow = {
                                    e: "c",
                                    c: "rgba(0,0,0,0.25)",
                                    v: 0,
                                    h: 0,
                                    b: 0,
                                    s: 0
                                }, p.bsh = p.bsh.split(";"), p.bsh)
                                if (p.bsh.hasOwnProperty(t)) switch ((i = p.bsh[t].split(":"))[0]) {
                                    case "c":
                                        p.bshadow.c = i[1];
                                        break;
                                    case "h":
                                        p.bshadow.h = i[1];
                                        break;
                                    case "v":
                                        p.bshadow.v = i[1];
                                        break;
                                    case "b":
                                        p.bshadow.b = i[1];
                                        break;
                                    case "s":
                                        p.bshadow.s = i[1];
                                        break;
                                    case "e":
                                        p.bshadow.e = i[1]
                                }
                        if (void 0 !== p.dim)
                            for (t in p.dim = p.dim.split(";"), p.dim)
                                if (p.dim.hasOwnProperty(t)) switch ((i = p.dim[t].split(":"))[0]) {
                                    case "w":
                                        p.width = i[1];
                                        break;
                                    case "h":
                                        p.height = i[1];
                                        break;
                                    case "maxw":
                                        p.maxwidth = i[1];
                                        break;
                                    case "maxh":
                                        p.maxheight = i[1];
                                        break;
                                    case "minw":
                                        p.minwidth = i[1];
                                        break;
                                    case "minh":
                                        p.minheight = i[1]
                                }
                        if (void 0 !== p.xy)
                            for (t in p.xy = p.xy.split(";"), p.xy)
                                if (p.xy.hasOwnProperty(t)) switch ((i = p.xy[t].split(":"))[0]) {
                                    case "x":
                                        p.x = i[1].replace("px", "");
                                        break;
                                    case "y":
                                        p.y = i[1].replace("px", "");
                                        break;
                                    case "xo":
                                        p.hoffset = i[1].replace("px", "");
                                        break;
                                    case "yo":
                                        p.voffset = i[1].replace("px", "")
                                }
                        if (!p._isnotext && void 0 !== p.text)
                            for (t in p.text = p.text.split(";"), p.text)
                                if (p.text.hasOwnProperty(t)) switch ((i = p.text[t].split(":"))[0]) {
                                    case "w":
                                        p.whitespace = i[1];
                                        break;
                                    case "td":
                                        p.textDecoration = i[1];
                                        break;
                                    case "c":
                                        p.clear = i[1];
                                        break;
                                    case "f":
                                        p.float = i[1];
                                        break;
                                    case "s":
                                        p.fontsize = i[1];
                                        break;
                                    case "l":
                                        p.lineheight = i[1];
                                        break;
                                    case "ls":
                                        p.letterspacing = i[1];
                                        break;
                                    case "fw":
                                        p.fontweight = i[1];
                                        break;
                                    case "a":
                                        p.textalign = i[1]
                                }
                        if ("column" === p.type && void 0 !== p.textDecoration && delete p.textDecoration, void 0 !== p.flcr)
                            for (t in p.flcr = p.flcr.split(";"), p.flcr)
                                if (p.flcr.hasOwnProperty(t)) switch ((i = p.flcr[t].split(":"))[0]) {
                                    case "c":
                                        p.clear = i[1];
                                        break;
                                    case "f":
                                        p.float = i[1]
                                }
                        if (void 0 !== p.padding)
                            for (t in p.padding = p.padding.split(";"), p.padding)
                                if (p.padding.hasOwnProperty(t)) switch ((i = p.padding[t].split(":"))[0]) {
                                    case "t":
                                        p.paddingtop = i[1];
                                        break;
                                    case "b":
                                        p.paddingbottom = i[1];
                                        break;
                                    case "l":
                                        p.paddingleft = i[1];
                                        break;
                                    case "r":
                                        p.paddingright = i[1]
                                }
                        if (void 0 !== p.margin)
                            for (t in p.margin = p.margin.split(";"), p.margin)
                                if (p.margin.hasOwnProperty(t)) switch ((i = p.margin[t].split(":"))[0]) {
                                    case "t":
                                        p.margintop = i[1];
                                        break;
                                    case "b":
                                        p.marginbottom = i[1];
                                        break;
                                    case "l":
                                        p.marginleft = i[1];
                                        break;
                                    case "r":
                                        p.marginright = i[1]
                                }
                        if (void 0 !== p.spike && (p.spike = C(p.spike)), void 0 !== p.corners)
                            for (t in a = p.corners.split(";"), p.corners = {}, a) a.hasOwnProperty(t) && a[t].length > 0 && (p.corners[a[t]] = jQuery("<" + a[t] + "></" + a[t] + ">"), p.c.append(p.corners[a[t]]));
                        p.textalign = v(p.textalign), p.vbility = o.revToResp(p.vbility, o[r].rle, !0), p.hoffset = o.revToResp(p.hoffset, o[r].rle, 0), p.voffset = o.revToResp(p.voffset, o[r].rle, 0), p.x = o.revToResp(p.x, o[r].rle, "l"), p.y = o.revToResp(p.y, o[r].rle, "t"), O(d, 0, r), o.sA(l, "initialised", !0), o[r].c.trigger("layerinitialised", {
                            layer: d[0].id,
                            slider: r
                        })
                    }
                    var h = "grid" === p.basealign ? o[r].width : "carousel" !== o[r].sliderType || p._isstatic ? o[r].width : o[r].carousel.slide_width,
                        y = o[r].useFullScreenHeight ? o[r].height : "grid" === p.basealign ? o[r].height : ("carousel" !== o[r].sliderType || p._isstatic, o[r].height),
                        b = p.x[o[r].level],
                        _ = p.y[o[r].level];
                    if (u = "slide" === p.basealign ? 0 : Math.max(0, "fullscreen" == o[r].sliderLayout ? y / 2 - o.iHE(r) * (o[r].keepBPHeight ? 1 : o[r].bh) / 2 : o[r].autoHeight || null != o[r].minHeight && o[r].minHeight > 0 ? o[r].conh / 2 - o.iHE(r) * o[r].bh / 2 : u), g = "slide" === p.basealign ? 0 : Math.max(0, g), "slide" !== p.basealign && "carousel" === o[r].sliderType && p._isstatic && void 0 !== o[r].carousel && void 0 !== o[r].carousel.horizontal_align && (g = Math.max(0, "center" === o[r].carousel.horizontal_align ? 0 + (o[r].width - o.iWA(r, "static") * o[r].bw) / 2 : "right" === o[r].carousel.horizontal_align ? o[r].width - o[r].gridwidth[o[r].level] * o[r].bw : g)), "updateposition" !== e.mode) {
                        if (0 == p.vbility[o[r].levelForced] || "f" == p.vbility[o[r].levelForced] || h < o[r].hideLayerAtLimit && "on" == p.layeronlimit || h < o[r].hideAllLayerAtLimit ? (!0 !== p.layerIsHidden && p.p[0].classList.add("rs-layer-hidden"), p.layerIsHidden = !0) : (p.layerIsHidden && p.p[0].classList.remove("rs-layer-hidden"), p.layerIsHidden = !1), p.poster = null == p.poster && void 0 !== p.thumbimage ? p.thumbimage : p.poster, "image" === p.layertype)
                            if (p.imgOBJ = {}, "cover-proportional" === p.img.data("c")) {
                                o.sA(p.img[0], "owidth", o.gA(p.img[0], "owidth", p.img[0].width)), o.sA(p.img[0], "oheight", o.gA(p.img[0], "oheight", p.img[0].height));
                                var w = o.gA(p.img[0], "owidth") / o.gA(p.img[0], "oheight"),
                                    x = h / y;
                                p.imgOBJ = w > x && w <= 1 || w < x && w > 1 ? {
                                    width: "100%",
                                    height: "auto",
                                    left: "c" === b || "center" === b ? "50%" : "left" === b || "l" === b ? "0" : "auto",
                                    right: "r" === b || "right" === b ? "0" : "auto",
                                    top: "c" === _ || "center" === _ ? "50%" : "top" === _ || "t" === _ ? "0" : "auto",
                                    bottom: "b" === _ || "bottom" === _ ? "0" : "auto",
                                    x: "c" === b || "center" === b ? "-50%" : "0",
                                    y: "c" === _ || "center" === b ? "-50%" : "0"
                                } : {
                                    height: "100%",
                                    width: "auto",
                                    left: "c" === b || "center" === b ? "50%" : "left" === b || "l" === b ? "0" : "auto",
                                    right: "r" === b || "right" === b ? "0" : "auto",
                                    top: "c" === _ || "center" === _ ? "50%" : "top" === _ || "t" === _ ? "0" : "auto",
                                    bottom: "b" === _ || "bottom" === _ ? "0" : "auto",
                                    x: "c" === b || "center" === b ? "-50%" : "0",
                                    y: "c" === _ || "center" === b ? "-50%" : "0"
                                }
                            } else void 0 === p.group && "auto" === p.width[o[r].level] && "auto" === p.height[o[r].level] && (p.width[o[r].level] = o.gA(p.img[0], "owidth", p.img[0].width), p.height[o[r].level] = o.gA(p.img[0], "owidth", p.img[0].height)), p.imgOBJ = {
                                width: "auto" !== p.width[o[r].level] || isNaN(p.width[o[r].level]) && p.width[o[r].level].indexOf("%") >= 0 ? "100%" : "auto",
                                height: "auto" !== p.height[o[r].level] || isNaN(p.height[o[r].level]) && p.height[o[r].level].indexOf("%") >= 0 ? "100%" : "auto"
                            };
                        else if ("video" === p.layertype) {
                            o.manageVideoLayer && !p.videoLayerManaged && o.manageVideoLayer(d, r, s), "rebuild" !== e.mode && o.resetVideo && o.resetVideo(d, r, e.mode), null != p.aspectratio && p.aspectratio.split(":").length > 1 && (1 == p.bgvideo || 1 == p.forcecover) && o.prepareCoveredVideo(r, d), p.media = void 0 === p.media ? p.deepiframe.length > 0 ? jQuery(p.deepiframe[0]) : jQuery(p.deepmedia[0]) : p.media, p.html5vid = void 0 === p.html5vid ? !(p.deepiframe.length > 0) : p.html5vid;
                            var S = d[0].className.indexOf("coverscreenvideo") >= 0;
                            p.mediaOBJ = {
                                display: "block"
                            };
                            var L = p.width[o[r].level],
                                T = p.height[o[r].level];
                            if (L = "auto" === L ? L : !jQuery.isNumeric(L) && L.indexOf("%") > 0 ? p._incolumn || p._ingroup ? "100%" : "grid" === p.basealign ? o.iWA(r, e.slideIndex) * o[r].bw : h : "off" !== p.rsp_bd ? parseFloat(L) * o[r].bw + "px" : parseFloat(L) + "px", T = "auto" === T ? T : !jQuery.isNumeric(T) && T.indexOf("%") > 0 ? "grid" === p.basealign ? o.iHE(r) * o[r].bw : y : "off" !== p.rsp_bd ? parseFloat(T) * o[r].bh + "px" : parseFloat(T) + "px", p.vd = void 0 === p.vd ? o[r].videos[d[0].id].ratio.split(":").length > 1 ? o[r].videos[d[0].id].ratio.split(":")[0] / o[r].videos[d[0].id].ratio.split(":")[1] : 1 : p.vd, !p._incolumn || "100%" !== L && "auto" !== T || void 0 === p.ytid) - 1 != d[0].className.indexOf("rs-fsv") || S ? (g = 0, u = 0, p.x = o.revToResp(0, o[r].rle, 0), p.y = o.revToResp(0, o[r].rle, 0), p.vidOBJ = {
                                width: L,
                                height: o[r].autoHeight ? o[r].conh : T
                            }) : (T = "auto" === T && void 0 !== p.vd && "auto" !== L ? L / p.vd : T, p.vidOBJ = {
                                width: L,
                                height: T
                            }), (0 == p.html5vid && !S || 1 != p.forcecover && !d.hasClass("rs-fsv") && !S) && (p.mediaOBJ = {
                                width: L,
                                height: T,
                                display: "block"
                            }), p._ingroup && null !== p.vidOBJ.width && void 0 !== p.vidOBJ.width && !jQuery.isNumeric(p.vidOBJ.width) && p.vidOBJ.width.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ = {
                                minWidth: L
                            });
                            else {
                                var A = d.width(),
                                    R = "auto" === T ? A / p.vd : T;
                                p.vidOBJ = {
                                    width: "auto",
                                    height: R
                                }, p.heightSetByVideo = !0
                            }
                        }
                        p._slidelink || o[r].caches.calcResponsiveLayersList.push({
                            a: d,
                            b: r,
                            c: 0,
                            d: p.rsp_bd,
                            e: e.slideIndex
                        }), "on" === p.rsp_ch && "row" !== p.type && "column" !== p.type && "group" !== p.type && "image" !== p.type && "video" !== p.type && "shape" !== p.type && d.find("*").each(function() {
                            var t = jQuery(this);
                            "true" !== o.gA(this, "stylerecorder") && !0 !== o.gA(this, "stylerecorder") && O(t, "rekursive", r), o[r].caches.calcResponsiveLayersList.push({
                                a: t,
                                b: r,
                                c: "rekursive",
                                d: p.rsp_bd,
                                e: e.slideIndex,
                                RSL: d
                            })
                        })
                    }
                    if ("preset" !== e.mode) {
                        if (p.eow = d.outerWidth(!0), p.eoh = d.outerHeight(!0), p.imgInFirefox = "image" == p.type && "auto" == p.width[o[r].level] && "100%" == p.height[o[r].level] && o.isFirefox(r), p.imgInFirefox) {
                            var I = p.img.width();
                            p.eow = 0 !== I ? I : p.eow
                        }
                        if (p.eow <= 0 && void 0 !== p.lastknownwidth && (p.eow = p.lastknownwidth), p.eoh <= 0 && void 0 !== p.lastknownheight && (p.eoh = p.lastknownheight), void 0 !== p.corners && ("text" === p.type || "button" === p.type || "shape" === p.type)) {
                            for (a in p.corners)
                                if (p.corners.hasOwnProperty(a)) {
                                    p.corners[a].css("borderWidth", p.eoh + "px");
                                    var z = "rs-fcrt" === a || "rs-fcr" === a;
                                    p.corners[a].css("border" + (z ? "Right" : "Left"), "0px solid transparent"), p.corners[a].css("border" + ("rs-fcrt" == a || "rs-bcr" == a ? "Bottom" : "Top") + "Color", p.bgcol)
                                }
                            p.eow = d.outerWidth(!0)
                        }
                        0 == p.eow && 0 == p.eoh && (p.eow = o[r].width, p.eoh = o[r].height), p.basealign = o[r].justifyCarousel ? "grid" : p.basealign;
                        var P = "on" === p.rsp_o ? parseInt(p.voffset[o[r].level], 0) * o[r].bw : parseInt(p.voffset[o[r].level], 0),
                            B = "on" === p.rsp_o ? parseInt(p.hoffset[o[r].level], 0) * o[r].bw : parseInt(p.hoffset[o[r].level], 0),
                            G = "grid" === p.basealign ? o.iWA(r, e.slideIndex) * o[r].bw : h,
                            M = "grid" === p.basealign ? o.iHE(r) * (o[r].keepBPHeight || o[r].currentRowsHeight > o[r].gridheight[o[r].level] ? 1 : o[r].bh) : y;
                        (1 == o[r].gridEQModule || void 0 !== p._lig && "row" !== p.type && "column" !== p.type && "group" !== p.type) && (G = void 0 !== p._lig ? p._lig.width() : o[r].width, M = void 0 !== p._lig ? p._lig.height() : o[r].height, g = 0, u = 0), b = "c" === b || "m" === b || "center" === b || "middle" === b ? G / 2 - p.eow / 2 + B : "l" === b || "left" === b ? B : "r" === b || "right" === b ? G - p.eow - B : "off" !== p.rsp_o ? b * o[r].bw : b, _ = "m" === _ || "c" === _ || "center" === _ || "middle" === _ ? M / 2 - p.eoh / 2 + P : "t" === _ || "top" == _ ? P : "b" === _ || "bottom" == _ ? M - p.eoh - P : "off" !== p.rsp_o ? _ * o[r].bw : _, b = p._slidelink ? 0 : o[r].rtl && "100%" !== p.width[o[r].level] ? b + p.eow : b, p.calcx = parseInt(b, 0) + g, p.calcy = parseInt(_, 0) + u, "row" !== p.type && "column" !== p.type ? p.OBJUPD.POBJ = {
                            zIndex: p.zindex,
                            top: p.calcy,
                            left: p.calcx,
                            overwrite: "auto"
                        } : "row" !== p.type ? p.OBJUPD.POBJ = {
                            zIndex: p.zindex,
                            width: p.columnwidth,
                            top: 0,
                            left: 0,
                            overwrite: "auto"
                        } : "row" === p.type && (p.OBJUPD.POBJ = {
                            zIndex: p.zindex,
                            width: "grid" === p.basealign ? G + "px" : "100%",
                            top: 0,
                            left: g,
                            overwrite: "auto"
                        }, p.cbreak <= o[r].level ? -1 === d[0].className.indexOf("rev_break_columns") && d[0].classList.add("rev_break_columns") : d[0].className.indexOf("rev_break_columns") > 0 && d[0].classList.remove("rev_break_columns")), void 0 !== p.blendmode && (p.OBJUPD.POBJ.mixBlendMode = p.blendmode), (void 0 !== p.frames.loop || p.imgInFirefox) && (p.OBJUPD.LPOBJ = {
                            width: p.eow,
                            height: p.eoh
                        }), p._ingroup && (void 0 !== p._groupw && !jQuery.isNumeric(p._groupw) && p._groupw.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ.minWidth = p._groupw), void 0 !== p._grouph && !jQuery.isNumeric(p._grouph) && p._grouph.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ.minHeight = p._grouph)), "updateposition" === e.mode && (p.caches.POBJ_LEFT === p.OBJUPD.POBJ.left && p.caches.POBJ_TOP === p.OBJUPD.POBJ.top || (tpGS.gsap.set(p.p, p.OBJUPD.POBJ), p.caches.POBJ_LEFT = p.OBJUPD.POBJ.left, p.caches.POBJ_TOP = p.OBJUPD.POBJ.top)), e.animcompleted && o.animcompleted(d, r)
                    }
                }
        },
        hoverReverseDone: function(e) {
            o[e.id]._L[e.L[0].id].textDecoration && tpGS.gsap.set(o[e.id]._L[e.L[0].id].c, {
                textDecoration: o[e.id]._L[e.L[0].id].textDecoration
            })
        },
        animcompleted: function(e, t, i) {
            if (void 0 !== o[t].videos) {
                var a = o[t].videos[e[0].id];
                null != a && null != a.type && "none" != a.type && (1 == a.aplay || "true" == a.aplay || "on" == a.aplay || "1sttime" == a.aplay ? (("carousel" !== o[t].sliderType || e.closest("rs-slide").index() == o[t].carousel.focused || e.closest("rs-slide").index() == o[t].activeRSSlide && o[t].carousel.oldfocused == o[t].carousel.focused || i) && o.playVideo(e, t), o.toggleState(e.data("videotoggledby")), (a.aplay1 || "1sttime" == a.aplay) && (a.aplay1 = !1, a.aplay = !1)) : ("no1sttime" == a.aplay && (a.aplay = !0), o.unToggleState(e.data("videotoggledby"))))
            }
        },
        handleStaticLayers: function(e, t) {
            var i = 0,
                a = o[t].realslideamount + 1;
            if (void 0 !== o.gA(e[0], "onslides")) {
                var r = o.gA(e[0], "onslides").split(";");
                for (var s in r)
                    if (r.hasOwnProperty(s)) {
                        var n = r[s].split(":");
                        "s" === n[0] && (i = parseInt(n[1], 0)), "e" === n[0] && (a = parseInt(n[1], 0))
                    }
            }
            i = Math.max(0, i), a = Math.min(o[t].realslideamount, a < 0 ? o[t].realslideamount : a), a = 1 !== i && 0 !== i || a !== o[t].realslideamount ? a : o[t].realslideamount + 1, e.data("startslide", i), e.data("endslide", a), o.sA(e[0], "startslide", i), o.sA(e[0], "endslide", a)
        },
        updateLayersOnFullStage: function(e) {
            if (o[e].caches.calcResponsiveLayersList.length > 0) {
                !0 !== o[e].slideHasIframe && !0 !== o[e].fullScreenMode && ("carousel" === o[e].sliderType ? o[e].carousel.wrap.detach() : o[e].canvas.detach());
                for (var t = 0; t < o[e].caches.calcResponsiveLayersList.length; t++) void 0 !== o[e].caches.calcResponsiveLayersList[t] && z(o[e].caches.calcResponsiveLayersList[t]);
                !0 !== o[e].slideHasIframe && !0 !== o[e].fullScreenMode && ("carousel" === o[e].sliderType ? o[e].c[0].appendChild(o[e].carousel.wrap[0]) : o[e].c[0].appendChild(o[e].canvas[0]))
            }
        },
        animateTheLayers: function(e) {
            if (void 0 === e.slide) return !1;
            var t = e.id;
            if (void 0 === o[t].slides[e.slide] && "individual" !== e.slide) return !1;
            if ("carousel" === o[t].sliderType) {
                if ("start" === e.mode && "start" === o[t].lastATLmode) {
                    if (e.slide === o[t].lastATLslide && (new Date).getTime() - o[t].lastATLtime < 1500) return;
                    o[t].lastATLtime = (new Date).getTime()
                }
                o[t].lastATLmode = e.mode, o[t].lastATLslide = e.slide
            }
            var i = "individual" !== e.slide ? o.gA(o[t].slides[e.slide], "key") : "individual",
                a = o[t].pr_processing_key || o[t].pr_active_key || 0;
            o[t].caches.calcResponsiveLayersList = [], o[t].layers = o[t].layers || {}, "individual" === i ? o[t].layers.individual = void 0 === o[t].layers.individual ? "all" === o[t].carousel.showLayersAllTime ? L(jQuery(o[t].c), "rs-layer", "rs-layer-static") : L(jQuery(o[t].c), "rs-on-car") : o[t].layers.individual : (o[t].layers[i] = void 0 === o[t].layers[i] ? "all" === o[t].carousel.showLayersAllTime ? [] : L(jQuery(o[t].slides[e.slide]), "rs-layer", "carousel" === o[t].sliderType ? "rs-on-car" : void 0) : o[t].layers[i], o[t].layers.static = void 0 === o[t].layers.static ? L(jQuery(o[t].c.find("rs-static-layers")), "rs-layer", "rs-on-car") : o[t].layers.static, o[t].sbas[i] = void 0 === o[t].sbas[i] ? L(jQuery(o[t].slides[e.slide]), "rs-sba") : o[t].sbas[i]), o.updateDimensions(t);
            var r = "rebuild" === e.mode && "carousel" === o[t].sliderType && "individual" === i;
            void 0 !== i && o[t].layers[i] && o.initLayer({
                id: t,
                slideIndex: e.slide,
                skey: i,
                mode: e.mode,
                animcompleted: r
            }), o[t].layers.static && o.initLayer({
                id: t,
                skey: "static",
                slideIndex: "static",
                mode: e.mode,
                animcompleted: r
            }), o.updateLayersOnFullStage(t), "preset" !== e.mode || void 0 !== o[t].slidePresets && void 0 !== o[t].slidePresets[e.slide] || (o[t].slidePresets = void 0 === o[t].slidePresets ? {} : o[t].slidePresets, o[t].slidePresets[e.slide] = !0, o[t].c.trigger("revolution.slideprepared", {
                slide: e.slide
            })), o[t].lastAnimateLayersCall = {
                id: t,
                skey: i,
                slide: e.slide,
                key: i,
                mode: e.mode,
                index: a
            }, window.requestAnimationFrame(function() {
                if (void 0 === o[t].dimensionReCheck[i] ? (o.updateLayerDimensions(o[t].lastAnimateLayersCall), !0 !== o[t].doubleDimensionCheck ? setTimeout(function() {
                        o.updateLayerDimensions(o[t].lastAnimateLayersCall), o.updateRowZones(o[t].lastAnimateLayersCall)
                    }, 150) : o.updateRowZones(o[t].lastAnimateLayersCall), o[t].doubleDimensionCheck = !0, o[t].dimensionReCheck[i] = !0) : o.updateRowZones(o[t].lastAnimateLayersCall), void 0 !== i && o[t].layers[i])
                    for (var a in o[t].layers[i]) o[t].layers[i].hasOwnProperty(a) && o.renderLayerAnimation({
                        layer: jQuery(o[t].layers[i][a]),
                        id: t,
                        mode: e.mode,
                        caller: e.caller
                    });
                if (o[t].layers.static)
                    for (var a in o[t].layers.static) o[t].layers.static.hasOwnProperty(a) && o.renderLayerAnimation({
                        layer: jQuery(o[t].layers.static[a]),
                        id: t,
                        mode: e.mode,
                        caller: e.caller
                    });
                null != o[t].mtl && o[t].mtl.resume()
            })
        },
        updateRowZones: function(e) {
            (void 0 !== o[e.id].rowzones && o[e.id].rowzones.length > 0 && e.index >= 0 && o[e.id].rowzones[Math.min(e.index, o[e.id].rowzones.length)].length > 0 || void 0 !== o[e.id].srowzones && o[e.id].srowzones.length > 0 || void 0 !== o[e.id].smiddleZones && o[e.id].smiddleZones.length > 0) && (o.setSize(e.id), o.updateDimensions(e.id), o.initLayer({
                id: e.id,
                skey: e.key,
                slideIndex: e.slide,
                mode: "updateposition"
            }), o.initLayer({
                id: e.id,
                skey: "static",
                slideIndex: "static",
                mode: "updateposition"
            }), "start" !== e.mode && "preset" !== e.mode || o.manageNavigation(e.id))
        },
        updateLayerDimensionsTimeout: function(e) {
            clearTimeout(o[e].gFLoadedTimer), o[e].gFLoadedTimer = setTimeout(function() {
                var t = o[e].lastAnimateLayersCall;
                void 0 !== t && o.updateLayerDimensions(o[t.id].lastAnimateLayersCall)
            }, 19)
        },
        updateLayerDimensions: function(e) {
            var t = !1;
            o[e.id].caches.calcResponsiveLayersList = [], void 0 !== e.key && o[e.id].layers[e.key] && o.checkLayerDimensions({
                id: e.id,
                skey: e.key,
                slideIndex: e.slide
            }) && (t = !0, o.initLayer({
                id: e.id,
                skey: e.key,
                slideIndex: e.slide,
                mode: "updateAndResize"
            })), o.checkLayerDimensions({
                id: e.id,
                skey: "individual",
                slideIndex: "individual"
            }) && (t = !0, o.initLayer({
                id: e.id,
                skey: "individual",
                slideIndex: "individual",
                mode: "updateAndResize"
            })), o[e.id].layers.static && o.checkLayerDimensions({
                id: e.id,
                skey: "static",
                slideIndex: "static"
            }) && (t = !0, o.initLayer({
                id: e.id,
                skey: "static",
                slideIndex: "static",
                mode: "updateAndResize"
            })), t && o.updateLayersOnFullStage(e.id)
        },
        updateAnimatingLayerPositions: function(e) {
            o.initLayer({
                id: e.id,
                skey: e.key,
                slideIndex: e.slide,
                mode: "updateposition"
            })
        },
        removeTheLayers: function(e, t, i) {
            var a = o.gA(e[0], "key");
            for (var r in o[t].sloops && o[t].sloops[a] && o[t].sloops[a].tl && o[t].sloops[a].tl.pause(), o[t].layers[a]) o[t].layers[a].hasOwnProperty(r) && o.renderLayerAnimation({
                layer: jQuery(o[t].layers[a][r]),
                frame: "frame_999",
                mode: "continue",
                remove: !0,
                id: t,
                allforce: i
            });
            for (var r in o[t].layers.static) o[t].layers.static.hasOwnProperty(r) && o.renderLayerAnimation({
                layer: jQuery(o[t].layers.static[r]),
                frame: "frame_999",
                mode: "continue",
                remove: !0,
                id: t,
                allforce: i
            })
        },
        renderLayerAnimation: function(e) {
            var i, a = e.layer,
                r = e.id,
                s = o[r].level,
                m = o[r]._L[a[0].id],
                h = void 0 !== m.timeline ? m.timeline.time() : void 0,
                f = !1,
                v = !1,
                _ = "none";
            if (("containerResized_2" !== e.caller && "swapSlideProgress_2" !== e.caller || !0 === m.animationRendered) && (m.animationRendered = !0, "preset" !== e.mode || !0 === m.frames.frame_1.timeline.waitoncall || void 0 !== m.scrollBasedOffset)) {
                if ("trigger" == e.mode && (m.triggeredFrame = e.frame), m._isstatic) {
                    var x = "carousel" === o[r].sliderType && void 0 !== o[r].carousel.oldfocused ? o[r].carousel.oldfocused : void 0 === o[r].pr_lastshown_key ? 1 : parseInt(o[r].pr_lastshown_key, 0) + 1,
                        k = "carousel" === o[r].sliderType ? void 0 === o[r].pr_next_key ? 0 === x ? 1 : x : parseInt(o[r].pr_next_key, 0) + 1 : void 0 === o[r].pr_processing_key ? x : parseInt(o[r].pr_processing_key, 0) + 1,
                        S = x >= m.startslide && x <= m.endslide,
                        L = k >= m.startslide && k <= m.endslide;
                    if (_ = x === m.endslide && "continue" === e.mode || ("continue" === e.mode || x === m.endslide) && "none", !0 === e.allforce || !0 === _);
                    else {
                        if ("preset" === e.mode && (m.elementHovered || !L)) return;
                        if ("rebuild" === e.mode && !S && !L) return;
                        if ("start" === e.mode && L && "frame_1" === m.lastRequestedMainFrame) return;
                        if (("start" === e.mode || "preset" === e.mode) && "frame_999" === m.lastRequestedMainFrame && !0 !== m.leftstage) return;
                        if ("continue" === e.mode && "frame_999" === e.frame && (L || void 0 === m.lastRequestedMainFrame)) return;
                        if ("start" === e.mode && !L) return
                    }
                } else "start" === e.mode && "keep" !== m.triggercache && (m.triggeredFrame = void 0);
                for (var T in "start" === e.mode && (void 0 !== m.layerLoop && (m.layerLoop.count = 0), e.frame = void 0 === m.triggeredFrame ? 0 : m.triggeredFrame), "continue" !== e.mode && "trigger" !== e.mode && void 0 !== m.timeline && m.timeline.pause(0), "continue" !== e.mode && "trigger" !== e.mode || void 0 === m.timeline || m.timeline.pause(), m.timeline = tpGS.gsap.timeline({
                        paused: !0
                    }), "text" !== m.type && "button" !== m.type || void 0 !== m.splitText && (void 0 !== m.splitTextFix || "start" !== e.mode && "preset" !== e.mode) || (y({
                        layer: a,
                        id: r
                    }), "start" === e.mode && (m.splitTextFix = !0)), m.ford)
                    if (m.ford.hasOwnProperty(T)) {
                        var O = m.ford[T],
                            A = !1;
                        if ("frame_0" !== O && "frame_hover" !== O && "loop" !== O) {
                            if ("frame_999" === O && !m.frames[O].timeline.waitoncall && m.frames[O].timeline.start >= o[r].duration && !0 !== e.remove && (m.frames[O].timeline.waitoncall = !0), "start" === e.mode && "keep" !== m.triggercache && (m.frames[O].timeline.callstate = m.frames[O].timeline.waitoncall ? "waiting" : ""), "trigger" === e.mode && m.frames[O].timeline.waitoncall && (O === e.frame ? (m.frames[O].timeline.triggered = !0, m.frames[O].timeline.callstate = "called") : m.frames[O].timeline.triggered = !1), "rebuild" === e.mode || m.frames[O].timeline.triggered || (m.frames[O].timeline.callstate = m.frames[O].timeline.waitoncall ? "waiting" : ""), !1 !== e.fastforward) {
                                if (("continue" === e.mode || "trigger" === e.mode) && !1 === v && O !== e.frame) continue;
                                if (("rebuild" === e.mode || "preset" === e.mode) && !1 === v && void 0 !== m.triggeredFrame && O !== m.triggeredFrame) continue;
                                (O === e.frame || "rebuild" === e.mode && O === m.triggeredFrame) && (v = !0)
                            } else O === e.frame && (v = !0);
                            if (O !== e.frame && m.frames[O].timeline.waitoncall && "called" !== m.frames[O].timeline.callstate && (f = !0), O !== e.frame && v && (f = !0 === f && m.frames[O].timeline.waitoncall ? "skiprest" : !0 !== f && f), void 0 === m.hideonfirststart && "frame_1" === O && m.frames[O].timeline.waitoncall && (m.hideonfirststart = !0), f && "waiting" === m.frames[O].timeline.callstate && "preset" === e.mode && 1 != m.firstTimeRendered) {
                                if (m._isstatic && void 0 === m.currentframe) continue;
                                A = !0, m.firstTimeRendered = !0
                            } else if ("skiprest" === f || "called" !== m.frames[O].timeline.callstate && f && e.toframe !== O) continue;
                            if ("frame_999" !== O || !1 !== _ || "continue" !== e.mode && "start" !== e.mode && "rebuild" !== e.mode) {
                                m.fff = "frame_1" === O && ("trigger" !== e.mode || "frame_999" === m.currentframe || "frame_0" === m.currentframe || void 0 === m.currentframe), "trigger" === e.mode && "frame_1" === e.frame && !1 === m.leftstage && (m.fff = !1), A || (m.frames[O].timeline.callstate = "called", m.currentframe = O);
                                var R = m.frames[O],
                                    I = m.fff ? m.frames.frame_0 : void 0,
                                    z = tpGS.gsap.timeline(),
                                    C = tpGS.gsap.timeline(),
                                    P = m.c,
                                    B = void 0 !== R.sfx && b(R.sfx.effect, m.m, R.timeline.ease),
                                    G = R.timeline.speed / 1e3,
                                    M = 0,
                                    D = w({
                                        id: r,
                                        frame: R,
                                        layer: a,
                                        ease: R.timeline.ease,
                                        splitAmount: P.length,
                                        target: O,
                                        forcefilter: void 0 !== m.frames.frame_hover && void 0 !== m.frames.frame_hover.filter
                                    }),
                                    j = m.fff ? w({
                                        id: r,
                                        frame: I,
                                        layer: a,
                                        ease: R.timeline.ease,
                                        splitAmount: P.length,
                                        target: "frame_0"
                                    }) : void 0,
                                    H = void 0 !== R.mask ? w({
                                        id: r,
                                        frame: {
                                            transform: {
                                                x: R.mask.x,
                                                y: R.mask.y
                                            }
                                        },
                                        layer: a,
                                        ease: D.ease,
                                        target: "mask"
                                    }) : void 0,
                                    N = void 0 !== H && m.fff ? w({
                                        id: r,
                                        frame: {
                                            transform: {
                                                x: I.mask.x,
                                                y: I.mask.y
                                            }
                                        },
                                        layer: a,
                                        ease: D.ease,
                                        target: "frommask"
                                    }) : void 0,
                                    W = D.ease;
                                if (D.force3D = !0, "block" === B.type && (B.ft[0].background = R.sfx.fxc, B.ft[0].visibility = "visible", B.ft[1].visibility = "visible", z.add(tpGS.gsap.fromTo(B.bmask_in, G / 2, B.ft[0], B.ft[1], 0)), z.add(tpGS.gsap.fromTo(B.bmask_in, G / 2, B.ft[1], B.t, G / 2)), "frame_0" !== O && "frame_1" !== O || (j.opacity = 0)), void 0 !== R.color ? D.color = R.color : void 0 !== m.color && "npc" !== m.color[s] && (D.color = m.color[s]), void 0 !== I && void 0 !== I.color ? j.color = I.color : void 0 !== I && void 0 !== m.color && "npc" !== m.color[s] && (j.color = m.color[s]), void 0 !== R.bgcolor ? R.bgcolor.indexOf("gradient") >= 0 ? D.background = R.bgcolor : D.backgroundColor = R.bgcolor : !0 === m.bgcolinuse && (m.bgcol.indexOf("gradient") >= 0 ? D.background = m.bgcol : D.backgroundColor = m.bgcol), void 0 !== I && (void 0 !== I.bgcolor ? I.bgcolor.indexOf("gradient") >= 0 ? j.background = I.bgcolor : j.backgroundColor = I.bgcolor : !0 === m.bgcolinuse && (m.bgcol.indexOf("gradient") >= 0 ? j.background = m.bgcol : j.backgroundColor = m.bgcol)), void 0 !== m.splitText && !1 !== m.splitText)
                                    for (var F in t)
                                        if (void 0 !== R[t[F]] && !m.quickRendering) {
                                            var E = m.splitText[t[F]],
                                                Q = w({
                                                    id: r,
                                                    frame: R,
                                                    source: t[F],
                                                    ease: W,
                                                    layer: a,
                                                    splitAmount: E.length,
                                                    target: O + "_" + t[F]
                                                }),
                                                V = m.fff ? w({
                                                    id: r,
                                                    frame: I,
                                                    ease: Q.ease,
                                                    source: t[F],
                                                    layer: a,
                                                    splitAmount: E.length,
                                                    target: "frame_0_" + t[F]
                                                }) : void 0,
                                                Y = m.frames[O].dosplit ? void 0 === R[t[F]].delay ? .05 : R[t[F]].delay / 100 : 0;
                                            m.color[s] === D.color && "frame_1" === O || (Q.color = D.color), void 0 !== j && m.color[s] !== j.color && (V.color = j.color), void 0 !== V && V.color !== D.color && (Q.color = D.color);
                                            var X = jQuery.extend(!0, {}, Q),
                                                J = m.fff ? jQuery.extend(!0, {}, V) : void 0,
                                                q = R[t[F]].dir;
                                            delete X.dir, X.data = {
                                                splitted: !0
                                            }, X.stagger = "center" === q || "edge" === q ? d({
                                                each: Y,
                                                offset: Y / 2,
                                                from: q
                                            }) : {
                                                each: Y,
                                                from: q
                                            }, X.duration = G, void 0 !== J && delete J.dir, m.fff ? z.add(C.fromTo(E, J, X), 0) : z.add(C.to(E, X), 0), M = Math.max(M, E.length * Y)
                                        }
                                if (G += M, void 0 === i && (i = "isometric" === o[r].perspectiveType ? 0 : "local" === o[r].perspectiveType ? void 0 !== D.transformPerspective ? D.transformPerspective : m.fff && void 0 !== j.transfromPerspective ? j.transfromPerspective : o[r].perspective : o[r].perspective), m.pxundermask || void 0 !== H && (void 0 !== I && "hidden" === I.mask.overflow || "hidden" === R.mask.overflow)) z.add(tpGS.gsap.to(m.m, .001, {
                                    overflow: "hidden"
                                }), 0), "column" === m.type && z.add(tpGS.gsap.to(m.cbgmask, .001, {
                                    overflow: "hidden"
                                }), 0), m.btrans && (N && (N.rotationX = m.btrans.rX, N.rotationY = m.btrans.rY, N.rotationZ = m.btrans.rZ, N.opacity = m.btrans.o), H.rotationX = m.btrans.rX, H.rotationY = m.btrans.rY, H.rotationZ = m.btrans.rZ, H.opacity = m.btrans.o), m.fff ? z.add(tpGS.gsap.fromTo([m.m, m.cbgmask], G, jQuery.extend(!0, {}, N), jQuery.extend(!0, {}, H)), .001) : z.add(tpGS.gsap.to([m.m, m.cbgmask], G, jQuery.extend(!0, {}, H)), .001);
                                else if (void 0 !== m.btrans) {
                                    var Z = {
                                        x: 0,
                                        y: 0,
                                        filter: "none",
                                        opacity: m.btrans.o,
                                        rotationX: m.btrans.rX,
                                        rotationY: m.btrans.rY,
                                        rotationZ: m.btrans.rZ,
                                        overflow: "visible"
                                    };
                                    0 === m.btrans.rX && 0 == m.btrans.rY || (Z.transformPerspective = i), z.add(tpGS.gsap.to(m.m, .001, Z), 0)
                                } else z.add(tpGS.gsap.to(m.m, .001, {
                                    clearProps: "transform",
                                    overflow: "visible"
                                }), 0);
                                D.force3D = "auto", m.fff ? (D.visibility = "visible", void 0 !== m.cbg && z.fromTo(m.cbg, G, j, D, 0), o[r].BUG_safari_clipPath && (j.clipPath || D.clipPath || m.spike) && (j.z && parseInt(j.z, 10) || (j.z = -1e-4), D.z && parseInt(D.z, 10) || (D.z = 0)), void 0 !== m.cbg && "column" === m.type ? z.fromTo(P, G, n(j), n(D), 0) : z.fromTo(P, G, j, D, 0), z.invalidate()) : (void 0 !== m.cbg && z.to(m.cbg, G, D, 0), !o[r].BUG_safari_clipPath || !D.clipPath && !m.spike || D.z && parseInt(D.z, 10) || (D.z = 0 - .01 * Math.random()), void 0 !== m.cbg && "column" === m.type ? z.to(P, G, n(D), 0) : z.to(P, G, D, 0)), void 0 !== W && "object" != typeof W && "function" != typeof W && W.indexOf("SFXBounce") >= 0 && z.to(P, G, {
                                    scaleY: .5,
                                    scaleX: 1.3,
                                    ease: D.ease + "-squash",
                                    transformOrigin: "bottom"
                                }, 1e-4);
                                var U = "trigger" !== e.mode && (!0 !== f && "skiprest" !== f || "rebuild" !== e.mode) || e.frame === O || void 0 === R.timeline.start || !jQuery.isNumeric(R.timeline.start) ? "+=0" === R.timeline.start || void 0 === R.timeline.start ? "+=0.05" : parseInt(R.timeline.start, 0) / 1e3 : "+=" + parseInt(R.timeline.startRelative, 0) / 1e3;
                                m.timeline.addLabel(O, U), m.timeline.add(z, U), m.timeline.addLabel(O + "_end", "+=0.01"), z.eventCallback("onStart", c, [{
                                    id: r,
                                    frame: O,
                                    L: a,
                                    tPE: i
                                }]), "true" == m.animationonscroll || 1 == m.animationonscroll ? (z.eventCallback("onUpdate", p, [{
                                    id: r,
                                    frame: O,
                                    L: a
                                }]), z.smoothChildTiming = !0) : z.eventCallback("onUpdate", p, [{
                                    id: r,
                                    frame: O,
                                    L: a
                                }]), z.eventCallback("onComplete", g, [{
                                    id: r,
                                    frame: O,
                                    L: a,
                                    tPE: i
                                }])
                            }
                        }
                    }
                if (void 0 !== m.frames.loop) {
                    var K = m.frames.loop.frame_0,
                        $ = m.frames.loop.frame_999,
                        ee = tpGS.gsap.timeline({}),
                        te = tpGS.gsap.timeline({
                            repeat: -1,
                            yoyo: m.frames.loop.timeline.yoyo_move
                        }),
                        ie = tpGS.gsap.timeline({
                            repeat: -1,
                            yoyo: m.frames.loop.timeline.yoyo_rotate
                        }),
                        ae = tpGS.gsap.timeline({
                            repeat: -1,
                            yoyo: m.frames.loop.timeline.yoyo_scale
                        }),
                        re = tpGS.gsap.timeline({
                            repeat: -1,
                            yoyo: m.frames.loop.timeline.yoyo_filter
                        }),
                        oe = parseInt(m.frames.loop.timeline.speed, 0) / 1e3,
                        se = parseInt(m.frames.loop.timeline.start) / 1e3 || 0,
                        ne = se + .2,
                        le = "blur(" + parseInt(K.blur || 0, 0) + "px) grayscale(" + parseInt(K.grayscale || 0, 0) + "%) brightness(" + parseInt(K.brightness || 100, 0) + "%)",
                        de = "blur(" + ($.blur || 0) + "px) grayscale(" + ($.grayscale || 0) + "%) brightness(" + ($.brightness || 100) + "%)";
                    if ("blur(0px) grayscale(0%) brightness(100%)" === le && "blur(0px) grayscale(0%) brightness(100%)" === de && (le = "none", de = "none"), ee.add(te, 0), ee.add(ie, 0), ee.add(ae, 0), ee.add(re, 0), $.originX = K.originX, $.originY = K.originY, $.originZ = K.originZ, m.frames.loop.timeline.curved) {
                        var ce = parseInt(m.frames.loop.timeline.radiusAngle, 0) || 0,
                            pe = [{
                                x: (K.x - K.xr) * o[r].bw,
                                y: 0,
                                z: (K.z - K.zr) * o[r].bw
                            }, {
                                x: 0,
                                y: (K.y + K.yr) * o[r].bw,
                                z: 0
                            }, {
                                x: ($.x + $.xr) * o[r].bw,
                                y: 0,
                                z: ($.z + $.zr) * o[r].bw
                            }, {
                                x: 0,
                                y: ($.y - $.yr) * o[r].bw,
                                z: 0
                            }],
                            ge = {
                                type: "thru",
                                curviness: m.frames.loop.timeline.curviness,
                                path: [],
                                autoRotate: m.frames.loop.timeline.autoRotate
                            };
                        for (var ue in pe) pe.hasOwnProperty(ue) && (ge.path[ue] = pe[ce], ce = ++ce == pe.length ? 0 : ce);
                        m.timeline.fromTo(m.lp, .2, {
                            "-webkit-filter": le,
                            filter: le,
                            x: 0,
                            y: 0,
                            z: 0,
                            minWidth: m._incolumn || m._ingroup ? "100%" : void 0 === m.eow ? 0 : m.eow,
                            minHeight: m._incolumn || m._ingroup ? "100%" : void 0 === m.eoh ? 0 : m.eoh,
                            scaleX: 1,
                            scaleY: 1,
                            skewX: 0,
                            skewY: 0,
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: 0,
                            transformPerspective: i,
                            transformOrigin: $.originX + " " + $.originY + " " + $.originZ,
                            opacity: 1
                        }, l({
                            x: ge.path[3].x,
                            y: ge.path[3].y,
                            z: ge.path[3].z,
                            scaleX: K.scaleX,
                            skewX: K.skewX,
                            skewY: K.skewY,
                            scaleY: K.scaleY,
                            rotationX: K.rotationX,
                            rotationY: K.rotationY,
                            rotationZ: K.rotationZ,
                            "-webkit-filter": le,
                            filter: le,
                            ease: "sine.inOut",
                            opacity: K.opacity
                        }), se), te.to(m.lp, m.frames.loop.timeline.yoyo_move ? oe / 2 : oe, {
                            motionPath: ge,
                            ease: m.frames.loop.timeline.ease
                        })
                    } else m.timeline.fromTo(m.lp, .2, {
                        "-webkit-filter": le,
                        filter: le,
                        x: 0,
                        y: 0,
                        z: 0,
                        minWidth: m._incolumn || m._ingroup ? "100%" : void 0 === m.eow ? 0 : m.eow,
                        minHeight: m._incolumn || m._ingroup ? "100%" : void 0 === m.eoh ? 0 : m.eoh,
                        scaleX: 1,
                        scaleY: 1,
                        skewX: 0,
                        skewY: 0,
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: 0,
                        transformPerspective: i,
                        transformOrigin: $.originX + " " + $.originY + " " + $.originZ,
                        opacity: 1
                    }, l({
                        x: K.x * o[r].bw,
                        y: K.y * o[r].bw,
                        z: K.z * o[r].bw,
                        scaleX: K.scaleX,
                        skewX: K.skewX,
                        skewY: K.skewY,
                        scaleY: K.scaleY,
                        rotationX: K.rotationX,
                        rotationY: K.rotationY,
                        rotationZ: K.rotationZ,
                        ease: "sine.out",
                        opacity: K.opacity,
                        "-webkit-filter": le,
                        filter: le
                    }), se), te.to(m.lp, m.frames.loop.timeline.yoyo_move ? oe / 2 : oe, {
                        x: $.x * o[r].bw,
                        y: $.y * o[r].bw,
                        z: $.z * o[r].bw,
                        ease: m.frames.loop.timeline.ease
                    });
                    ie.to(m.lp, m.frames.loop.timeline.yoyo_rotate ? oe / 2 : oe, {
                        rotationX: $.rotationX,
                        rotationY: $.rotationY,
                        rotationZ: $.rotationZ,
                        ease: m.frames.loop.timeline.ease
                    }), ae.to(m.lp, m.frames.loop.timeline.yoyo_scale ? oe / 2 : oe, l({
                        scaleX: $.scaleX,
                        scaleY: $.scaleY,
                        skewX: $.skewX,
                        skewY: $.skewY,
                        ease: m.frames.loop.timeline.ease
                    }));
                    var me = {
                        opacity: $.opacity || 1,
                        ease: m.frames.loop.timeline.ease,
                        "-webkit-filter": de,
                        filter: de
                    };
                    re.to(m.lp, m.frames.loop.timeline.yoyo_filter ? oe / 2 : oe, me), m.timeline.add(ee, ne)
                }
                if (void 0 !== m.frames.frame_hover && ("start" === e.mode || void 0 === m.hoverframeadded)) {
                    m.hoverframeadded = !0;
                    var he = m.frames.frame_hover.timeline.speed / 1e3;
                    he = 0 === he ? 1e-5 : he, m.hoverlistener || (m.hoverlistener = !0, o.document.on("mouseenter mousemove", ("column" === m.type ? "#" + m.cbg[0].id + "," : "") + "#" + m.c[0].id, function(e) {
                        if ("mousemove" !== e.type || !0 !== m.ignoremousemove) {
                            if (m.animationonscroll || m.readyForHover) {
                                if (m.elementHovered = !0, m.hovertimeline || (m.hovertimeline = tpGS.gsap.timeline({
                                        paused: !0
                                    })), 0 == m.hovertimeline.progress() && (void 0 === m.lastHoveredTimeStamp || (new Date).getTime() - m.lastHoveredTimeStamp > 150) && (m.ignoremousemove = !0, m.hovertimeline.to([m.m, m.cbgmask], he, {
                                        overflow: m.frames.frame_hover.mask ? "hidden" : "visible"
                                    }, 0), "column" === m.type && m.hovertimeline.to(m.cbg, he, jQuery.extend(!0, {}, u(m.frames.frame_hover, m.cbg)), 0), "text" !== m.type && "button" !== m.type || void 0 === m.splitText || !1 === m.splitText || m.hovertimeline.to([m.splitText.lines, m.splitText.words, m.splitText.chars], he, {
                                        color: m.frames.frame_hover.color,
                                        ease: m.frames.frame_hover.transform.ease
                                    }, 0), "column" === m.type ? m.hovertimeline.to(m.c, he, n(jQuery.extend(!0, {}, u(m.frames.frame_hover, m.c))), 0) : m.hovertimeline.to(m.c, he, jQuery.extend(!0, {}, u(m.frames.frame_hover, m.c)), 0), "svg" === m.type)) {
                                    m.svgHTemp = jQuery.extend(!0, {}, m.svgH);
                                    var t = Array.isArray(m.svgHTemp.fill) ? m.svgHTemp.fill[o[r].level] : m.svgHTemp.fill;
                                    m.svgHTemp.fill = t, m.hovertimeline.to(m.svg, he, m.svgHTemp, 0), m.hovertimeline.to(m.svgPath, he, {
                                        fill: t
                                    }, 0)
                                }
                                m.hovertimeline.play()
                            }
                            m.lastHoveredTimeStamp = (new Date).getTime()
                        }
                    }), o.document.on("mouseleave", ("column" === m.type ? "#" + m.cbg[0].id + "," : "") + "#" + m.c[0].id, function() {
                        m.elementHovered = !1, (m.animationonscroll || m.readyForHover) && void 0 !== m.hovertimeline && (m.hovertimeline.reverse(), m.hovertimeline.eventCallback("onReverseComplete", o.hoverReverseDone, [{
                            id: r,
                            L: a
                        }]))
                    }))
                }
                if (A || (m.lastRequestedMainFrame = "start" === e.mode ? "frame_1" : "continue" === e.mode ? void 0 === e.frame ? m.currentframe : e.frame : m.lastRequestedMainFrame), void 0 !== e.totime ? m.tSTART = e.totime : void 0 !== h && void 0 === e.frame ? m.tSTART = h : void 0 !== e.frame ? m.tSTART = e.frame : m.tSTART = 0, 0 === m.tSTART && void 0 === m.startedAnimOnce && void 0 === m.leftstage && void 0 === m.startedAnimOnce && !0 === m.hideonfirststart && "preset" === e.mode && (o[r]._L[a[0].id].pVisRequest = 0, m.hideonfirststart = !1), "frame_999" !== m.tSTART && "frame_999" !== m.triggeredFrame || !m.leftstage && void 0 !== m.startedAnimOnce) {
                    if ("true" != m.animationonscroll && 1 != m.animationonscroll ? m.timeline.play(m.tSTART) : m.timeline.time(m.tSTART), jQuery.inArray(m.type, ["group", "row", "column"]) >= 0 && void 0 !== e.frame) {
                        if (void 0 === m.childrenJS)
                            for (var F in m.childrenJS = {}, o[r]._L) void 0 !== o[r]._L[F]._lig && void 0 !== o[r]._L[F]._lig[0] && o[r]._L[F]._lig[0].id === a[0].id && o[r]._L[F]._lig[0].id !== o[r]._L[F].c[0].id && (m.childrenJS[o[r]._L[F].c[0].id] = o[r]._L[F].c);
                        e.frame = "0" == e.frame ? "frame_0" : e.frame, e.frame = "1" == e.frame ? "frame_1" : e.frame, e.frame = "999" == e.frame ? "frame_999" : e.frame;
                        var fe = void 0 === e.totime ? void 0 !== m.frames[e.frame].timeline.startAbsolute ? parseInt(m.frames[e.frame].timeline.startAbsolute, 0) / 1e3 : void 0 !== m.frames[e.frame].timeline.start ? jQuery.isNumeric(m.frames[e.frame].timeline.start) ? parseInt(m.frames[e.frame].timeline.start, 0) / 1e3 : 0 : .001 : e.totime;
                        if (!0 === e.updateChildren)
                            for (var F in m.childrenJS) m.childrenJS.hasOwnProperty(F) && o.renderLayerAnimation({
                                layer: m.childrenJS[F],
                                fastforward: !1,
                                id: r,
                                mode: "continue",
                                updateChildren: !0,
                                totime: fe
                            });
                        else
                            for (var F in m.childrenJS) m.childrenJS.hasOwnProperty(F) && o[r]._L[F].pausedTrueParrent && (o.renderLayerAnimation({
                                layer: m.childrenJS[F],
                                fastforward: !1,
                                id: r,
                                mode: "continue",
                                updateChildren: !0,
                                totime: fe
                            }), o[r]._L[F].pausedTrueParrent = !1)
                    }
                } else;
            }
        }
    });
    var n = function(e) {
            var t = jQuery.extend(!0, {}, e);
            return delete t.backgroundColor, delete t.background, delete t.backgroundImage, delete t.borderSize, delete t.borderStyle, t
        },
        l = function(e) {
            return void 0 === e.skewX && delete e.skewX, void 0 === e.skewY && delete e.skewY, e
        },
        d = function(e) {
            var t = tpGS.gsap.utils.distribute(e);
            return function(i, a, r) {
                return t(i, a, r) + (i <= r.length / 2 ? 0 : e.offset || 0)
            }
        },
        c = function(e) {
            o[e.id].BUG_safari_clipPath && e.L[0].classList.remove("rs-pelock"), (o[e.id]._L[e.L[0].id]._ingroup || o[e.id]._L[e.L[0].id]._incolumn || o[e.id]._L[e.L[0].id]._inrow) && void 0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid] && void 0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timeline && (o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timeline.isActive() || void 0 === o[e.id]._L[e.L[0].id] || void 0 === o[e.id]._L[e.L[0].id].frames[o[e.id]._L[e.L[0].id].timeline.currentLabel()] || (null == o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timezone || o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timezone.to <= parseInt(o[e.id]._L[e.L[0].id].frames[o[e.id]._L[e.L[0].id].timeline.currentLabel()].timeline.start, 0)) && !0 !== o[e.id]._L[e.L[0].id].animOnScrollForceDisable && (o[e.id]._L[e.L[0].id].pausedTrueParrent = !0, o[e.id]._L[e.L[0].id].timeline.pause()));
            var t = o[e.id]._L[e.L[0].id],
                i = t.hovertimeline;
            i && i.time() > 0 && (i.pause(), i.time(0), i.kill(), delete t.hovertimeline), delete o[e.id]._L[e.L[0].id].childrenAtStartNotVisible, o[e.id]._L[e.L[0].id].pVisRequest = 1;
            var a = {
                layer: e.L
            };
            o[e.id]._L[e.L[0].id].ignoremousemove = !1, o[e.id]._L[e.L[0].id].leftstage = !1, o[e.id]._L[e.L[0].id].readyForHover = !1, void 0 !== o[e.id]._L[e.L[0].id].layerLoop && o[e.id]._L[e.L[0].id].layerLoop.from === e.frame && o[e.id]._L[e.L[0].id].layerLoop.count++, "frame_1" === e.frame && "Safari" === window.RSBrowser && void 0 === o[e.id]._L[e.L[0].id].safariRenderIssue && (tpGS.gsap.set([o[e.id]._L[e.L[0].id].c], {
                opacity: 1
            }), o[e.id]._L[e.L[0].id].safariRenderIssue = !0), "frame_999" !== e.frame && (o[e.id]._L[e.L[0].id].startedAnimOnce = !0, o[e.id]._L[e.L[0].id].pPeventsRequest = o[e.id]._L[e.L[0].id].noPevents ? "none" : "auto"), a.eventtype = "frame_0" === e.frame || "frame_1" === e.frame ? "enterstage" : "frame_999" === e.frame ? "leavestage" : "framestarted", window.requestAnimationFrame(function() {
                o[e.id]._L[e.L[0].id]._ingroup && !0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._lig[0].id].frames.frame_1.timeline.waitoncall && (o[e.id]._L[o[e.id]._L[e.L[0].id]._lig[0].id].pVisRequest = 1), o.requestLayerUpdates(e.id, a.eventtype, e.L[0].id, void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame] && void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame].timeline && 0 == o[e.id]._L[e.L[0].id].frames[e.frame].timeline.usePerspective ? e.tPE : "ignore")
            }), a.layertype = o[e.id]._L[e.L[0].id].type, a.frame_index = e.frame, a.layersettings = o[e.id]._L[e.L[0].id], o[e.id].c.trigger("revolution.layeraction", [a]), "enterstage" === a.eventtype && o.toggleState(o[e.id]._L[e.L[0].id].layertoggledby), "frame_1" === e.frame && o.animcompleted(e.L, e.id)
        },
        p = function(e) {
            "frame_999" === e.frame && (o[e.id]._L[e.L[0].id].pVisRequest = 1, o[e.id]._L[e.L[0].id].pPeventsRequest = o[e.id]._L[e.L[0].id].noPevents ? "none" : "auto", o[e.id]._L[e.L[0].id].leftstage = !1, window.requestAnimationFrame(function() {
                o.requestLayerUpdates(e.id, "update", e.L[0].id)
            }))
        },
        g = function(e) {
            var t = !0;
            if ("column" === o[e.id]._L[e.L[0].id].type || "row" === o[e.id]._L[e.L[0].id].type || "group" === o[e.id]._L[e.L[0].id].type) {
                var i = o[e.id]._L[e.L[0].id].timeline.currentLabel(),
                    a = jQuery.inArray(i, o[e.id]._L[e.L[0].id].ford);
                a++, a = o[e.id]._L[e.L[0].id].ford.length > a ? o[e.id]._L[e.L[0].id].ford[a] : i, void 0 !== o[e.id]._L[e.L[0].id].frames[a] && void 0 !== o[e.id]._L[e.L[0].id].frames[i] && (o[e.id]._L[e.L[0].id].timezone = {
                    from: parseInt(o[e.id]._L[e.L[0].id].frames[i].timeline.startAbsolute, 0),
                    to: parseInt(o[e.id]._L[e.L[0].id].frames[a].timeline.startAbsolute, 0)
                })
            }
            if ("frame_999" !== e.frame && o[e.id].isEdge && "shape" === o[e.id]._L[e.L[0].id].type) {
                var r = o[e.id]._L[e.L[0].id].c[0].style.opacity;
                o[e.id]._L[e.L[0].id].c[0].style.opacity = r - 1e-4, tpGS.gsap.set(o[e.id]._L[e.L[0].id].c[0], {
                    opacity: r - .001,
                    delay: .05
                }), tpGS.gsap.set(o[e.id]._L[e.L[0].id].c[0], {
                    opacity: r,
                    delay: .1
                })
            }
            var s = {};
            s.layer = e.L, s.eventtype = "frame_0" === e.frame || "frame_1" === e.frame ? "enteredstage" : "frame_999" === e.frame ? "leftstage" : "frameended", o[e.id]._L[e.L[0].id].readyForHover = !0, s.layertype = o[e.id]._L[e.L[0].id].type, s.frame_index = e.frame, s.layersettings = o[e.id]._L[e.L[0].id], o[e.id].c.trigger("revolution.layeraction", [s]), "frame_999" === e.frame && "leftstage" === s.eventtype ? (o[e.id]._L[e.L[0].id].leftstage = !0, o[e.id]._L[e.L[0].id].pVisRequest = 0, o[e.id]._L[e.L[0].id].pPeventsRequest = "none", t = !1, window.requestAnimationFrame(function() {
                o.requestLayerUpdates(e.id, "leftstage", e.L[0].id)
            })) : (e.L[0].id, void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame] && void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame].timeline && 0 == o[e.id]._L[e.L[0].id].frames[e.frame].timeline.usePerspective && window.requestAnimationFrame(function() {
                o.requestLayerUpdates(e.id, "frameended", e.L[0].id, e.tPE)
            })), "leftstage" === s.eventtype && void 0 !== o[e.id].videos && void 0 !== o[e.id].videos[e.L[0].id] && o.stopVideo && o.stopVideo(e.L, e.id), "column" === o[e.id]._L[e.L[0].id].type && tpGS.gsap.to(o[e.id]._L[e.L[0].id].cbg, .01, {
                visibility: "visible"
            }), "leftstage" === s.eventtype && (o.unToggleState(e.layertoggledby), "video" === o[e.id]._L[e.L[0].id].type && o.resetVideo && setTimeout(function() {
                o.resetVideo(e.L, e.id)
            }, 100)), o[e.id].BUG_safari_clipPath && !t && e.L[0].classList.add("rs-pelock"), void 0 !== o[e.id]._L[e.L[0].id].layerLoop && o[e.id]._L[e.L[0].id].layerLoop.to === e.frame && (-1 == o[e.id]._L[e.L[0].id].layerLoop.repeat || o[e.id]._L[e.L[0].id].layerLoop.repeat > o[e.id]._L[e.L[0].id].layerLoop.count) && o.renderLayerAnimation({
                layer: o[e.id]._L[e.L[0].id].c,
                frame: o[e.id]._L[e.L[0].id].layerLoop.from,
                updateChildren: o[e.id]._L[e.L[0].id].layerLoop.children,
                mode: "continue",
                fastforward: !0 === o[e.id]._L[e.L[0].id].layerLoop.keep,
                id: e.id
            })
        },
        u = function(e, t) {
            var i, a = jQuery.extend(!0, {}, e.transform);
            return (a.originX || a.originY || a.originZ) && (a.transformOrigin = (void 0 === a.originX ? "50%" : a.originX) + " " + (void 0 === a.originY ? "50%" : a.originY) + " " + (void 0 === a.originZ ? "50%" : a.originZ), delete a.originX, delete a.originY, delete a.originZ), void 0 !== e && void 0 !== e.filter && (a["-webkit-filter"] = "blur(" + (e.filter.blur || 0) + "px) grayscale(" + (e.filter.grayscale || 0) + "%) brightness(" + (e.filter.brightness || 100) + "%)", a.filter = "blur(" + (e.filter.blur || 0) + "px) grayscale(" + (e.filter.grayscale || 0) + "%) brightness(" + (e.filter.brightness || 100) + "%)"), a.color = void 0 === a.color ? "rgba(255,255,255,1)" : a.color, a.force3D = "auto", void 0 !== a.borderRadius && ((i = a.borderRadius.split(" ")).length, a.borderTopLeftRadius = i[0], a.borderTopRightRadius = i[1], a.borderBottomRightRadius = i[2], a.borderBottomLeftRadius = i[3], delete a.borderRadius), void 0 !== a.borderWidth && ((i = a.borderWidth.split(" ")).length, a.borderTopWidth = i[0], a.borderRightWidth = i[1], a.borderBottomWidth = i[2], a.borderLeftWidth = i[3], delete a.borderWidth), a.backgroundImage && "string" == typeof a.backgroundImage && -1 !== a.backgroundImage.search("gradient") && 180 !== h(t.css("backgroundImage")) && 180 === h(a.backgroundImage) && (a.backgroundImage = m(a.backgroundImage, 180)), a
        },
        m = function(e, t) {
            var i = (e = e.split("("))[0];
            return e.shift(), i + "(" + t + "deg, " + e.join("(")
        },
        h = function(e) {
            if (-1 !== e.search("deg,")) {
                var t = e.split("deg,")[0];
                if (-1 !== t.search(/\(/)) return parseInt(t.split("(")[1], 10)
            }
            return 180
        },
        f = function(e, t) {
            e = void 0 === e ? "" : e.split(";");
            var i = {
                fill: o.revToResp("#ffffff", o[t].rle),
                stroke: "transparent",
                "stroke-width": "0px",
                "stroke-dasharray": "0",
                "stroke-dashoffset": "0"
            };
            for (var a in e)
                if (e.hasOwnProperty(a)) {
                    var r = e[a].split(":");
                    switch (r[0]) {
                        case "c":
                            i.fill = o.revToResp(r[1], o[t].rle, void 0, "||");
                            break;
                        case "sw":
                            i["stroke-width"] = r[1];
                            break;
                        case "sc":
                            i.stroke = r[1];
                            break;
                        case "so":
                            i["stroke-dashoffset"] = r[1];
                            break;
                        case "sa":
                            i["stroke-dasharray"] = r[1]
                    }
                }
            return i
        },
        v = function(e) {
            return "c" === e ? "center" : "l" === e ? "left" : "r" === e ? "right" : e
        },
        y = function(e) {
            var t = o[e.id]._L[e.layer[0].id],
                i = !1;
            if (t.splitText && !1 !== t.splitText && t.splitText.revert(), "text" === t.type || "button" === t.type) {
                for (var a in t.frames)
                    if (void 0 !== t.frames[a].chars || void 0 !== t.frames[a].words || void 0 !== t.frames[a].lines) {
                        i = !0;
                        break
                    }
                t.splitText = !!i && new tpGS.SplitText(t.c, {
                    type: "lines,words,chars",
                    wordsClass: "rs_splitted_words",
                    linesClass: "rs_splitted_lines",
                    charsClass: "rs_splitted_chars"
                })
            } else t.splitText = !1
        },
        b = function(e, t, i) {
            if (void 0 !== e && e.indexOf("block") >= 0) {
                var a = {};
                switch (0 === t.find(".tp-blockmask_in").length && (t.append('<div class="tp-blockmask_in"></div>'), t.append('<div class="tp-blockmask_out"></div>')), i = void 0 === i ? "power3.inOut" : i, a.ft = [{
                    scaleY: 1,
                    scaleX: 0,
                    transformOrigin: "0% 50%"
                }, {
                    scaleY: 1,
                    scaleX: 1,
                    ease: i,
                    immediateRender: !1
                }], a.t = {
                    scaleY: 1,
                    scaleX: 0,
                    transformOrigin: "100% 50%",
                    ease: i,
                    immediateRender: !1
                }, a.bmask_in = t.find(".tp-blockmask_in"), a.bmask_out = t.find(".tp-blockmask_out"), a.type = "block", e) {
                    case "blocktoleft":
                    case "blockfromright":
                        a.ft[0].transformOrigin = "100% 50%", a.t.transformOrigin = "0% 50%";
                        break;
                    case "blockfromtop":
                    case "blocktobottom":
                        a.ft = [{
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 0%"
                        }, {
                            scaleX: 1,
                            scaleY: 1,
                            ease: i,
                            immediateRender: !1
                        }], a.t = {
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 100%",
                            ease: i,
                            immediateRender: !1
                        };
                        break;
                    case "blocktotop":
                    case "blockfrombottom":
                        a.ft = [{
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 100%"
                        }, {
                            scaleX: 1,
                            scaleY: 1,
                            ease: i,
                            immediateRender: !1
                        }], a.t = {
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 0%",
                            ease: i,
                            immediateRender: !1
                        }
                }
                return a.ft[1].overwrite = "auto", a.t.overwrite = "auto", a
            }
            return !1
        },
        _ = function(e, t, i, a, r) {
            return 0 === o[r].sdir || void 0 === t ? e : ("mask" === i ? a = "x" === a ? "mX" : "y" === a ? "mY" : a : "chars" === i ? a = "x" === a ? "cX" : "y" === a ? "cY" : "dir" === a ? "cD" : a : "words" === i ? a = "x" === a ? "wX" : "y" === a ? "wY" : "dir" === a ? "wD" : a : "lines" === i && (a = "x" === a ? "lX" : "y" === a ? "lY" : "dir" === a ? "lD" : a), void 0 === t[a] || !1 === t[a] ? e : void 0 !== t && !0 === t[a] ? "t" === e || "top" === e ? "b" : "b" === e || "bottom" === e ? "t" : "l" === e || "left" === e ? "r" : "r" === e || "right" === e ? "l" : -1 * e : void 0)
        },
        w = function(e) {
            var t, i = o[e.id]._L[e.layer[0].id],
                a = void 0 === e.source ? jQuery.extend(!0, {}, e.frame.transform) : jQuery.extend(!0, {}, e.frame[e.source]),
                r = {
                    originX: "50%",
                    originY: "50%",
                    originZ: "0"
                },
                s = void 0 !== i._lig ? o[e.id]._L[i._lig[0].id].eow : o[e.id].conw,
                n = void 0 !== i._lig ? o[e.id]._L[i._lig[0].id].eoh : o[e.id].conh;
            for (var l in a)
                if (a.hasOwnProperty(l)) {
                    if (a[l] = "object" == typeof a[l] ? a[l][o[e.id].level] : a[l], "inherit" === a[l] || "delay" === l || "direction" === l || "use" === l) delete a[l];
                    else if ("originX" === l || "originY" === l || "originZ" === l) r[l] = a[l], delete a[l];
                    else if (jQuery.isNumeric(a[l], 0)) a[l] = _(a[l], e.frame.reverse, e.target, l, e.id, e.id);
                    else if ("r" === a[l][0] && "a" === a[l][1] && "(" === a[l][3]) a[l] = a[l].replace("ran", "random");
                    else if (a[l].indexOf("cyc(") >= 0) {
                        var d = a[l].replace("cyc(", "").replace(")", "").replace("[", "").replace("]", "").split("|");
                        a[l] = new function(e) {
                            return tpGS.gsap.utils.wrap(d, void 0)
                        }
                    } else if (a[l].indexOf("%") >= 0 && jQuery.isNumeric(t = parseInt(a[l], 0))) a[l] = "x" === l ? _((i.eow || 0) * t / 100, e.frame.reverse, e.target, l, e.id) : "y" === l ? _((i.eoh || 0) * t / 100, e.frame.reverse, e.target, l, e.id) : a[l];
                    else switch (a[l] = a[l].replace("[", "").replace("]", ""), a[l] = _(a[l], e.frame.reverse, e.target, l, e.id, e.id), a[l]) {
                        case "t":
                        case "top":
                            a[l] = 0 - (i.eoh || 0) - ("column" === i.type ? 0 : i.calcy || 0);
                            break;
                        case "b":
                        case "bottom":
                            a[l] = n - ("column" === i.type ? 0 : i.calcy || 0);
                            break;
                        case "l":
                        case "left":
                            a[l] = 0 - (i.eow || 0) - ("column" === i.type ? 0 : i.calcx || 0);
                            break;
                        case "r":
                        case "right":
                            a[l] = s - ("column" === i.type ? 0 : i.calcx || 0);
                            break;
                        case "m":
                        case "c":
                        case "middle":
                        case "center":
                            a[l] = "x" === l ? _(s / 2 - ("column" === i.type ? 0 : i.calcx || 0) - (i.eow || 0) / 2, e.frame.reverse, e.target, l, e.id) : "y" === l ? _(n / 2 - ("column" === i.type ? 0 : i.calcy || 0) - (i.eoh || 0) / 2, e.frame.reverse, e.target, l, e.id) : a[l]
                    }
                    "skewX" === l && void 0 !== a[l] && (a.scaleY = void 0 === a.scaleY ? 1 : parseFloat(a.scaleY), a.scaleY *= Math.cos(parseFloat(a[l]) * tpGS.DEG2RAD)), "skewY" === l && void 0 !== a[l] && (a.scaleX = void 0 === a.scaleX ? 1 : parseFloat(a.scaleX), a.scaleX *= Math.cos(parseFloat(a[l]) * tpGS.DEG2RAD))
                }
            if (a.transformOrigin = r.originX + " " + r.originY + " " + r.originZ, !o[e.id].BUG_ie_clipPath && void 0 !== a.clip && void 0 !== i.clipPath && i.clipPath.use) {
                var c = "rectangle" == i.clipPath.type,
                    p = parseInt(a.clip, 0),
                    g = 100 - parseInt(a.clipB, 0),
                    u = Math.round(p / 2);
                switch (i.clipPath.origin) {
                    case "invh":
                        a.clipPath = "polygon(0% 0%, 0% 100%, " + p + "% 100%, " + p + "% 0%, 100% 0%, 100% 100%, " + g + "% 100%, " + g + "% 0%, 0% 0%)";
                        break;
                    case "invv":
                        a.clipPath = "polygon(100% 0%, 0% 0%, 0% " + p + "%, 100% " + p + "%, 100% 100%, 0% 100%, 0% " + g + "%, 100% " + g + "%, 100% 0%)";
                        break;
                    case "cv":
                        a.clipPath = c ? "polygon(" + (50 - u) + "% 0%, " + (50 + u) + "% 0%, " + (50 + u) + "% 100%, " + (50 - u) + "% 100%)" : "circle(" + p + "% at 50% 50%)";
                        break;
                    case "ch":
                        a.clipPath = c ? "polygon(0% " + (50 - u) + "%, 0% " + (50 + u) + "%, 100% " + (50 + u) + "%, 100% " + (50 - u) + "%)" : "circle(" + p + "% at 50% 50%)";
                        break;
                    case "l":
                        a.clipPath = c ? "polygon(0% 0%, " + p + "% 0%, " + p + "% 100%, 0% 100%)" : "circle(" + p + "% at 0% 50%)";
                        break;
                    case "r":
                        a.clipPath = c ? "polygon(" + (100 - p) + "% 0%, 100% 0%, 100% 100%, " + (100 - p) + "% 100%)" : "circle(" + p + "% at 100% 50%)";
                        break;
                    case "t":
                        a.clipPath = c ? "polygon(0% 0%, 100% 0%, 100% " + p + "%, 0% " + p + "%)" : "circle(" + p + "% at 50% 0%)";
                        break;
                    case "b":
                        a.clipPath = c ? "polygon(0% 100%, 100% 100%, 100% " + (100 - p) + "%, 0% " + (100 - p) + "%)" : "circle(" + p + "% at 50% 100%)";
                        break;
                    case "lt":
                        a.clipPath = c ? "polygon(0% 0%," + 2 * p + "% 0%, 0% " + 2 * p + "%)" : "circle(" + p + "% at 0% 0%)";
                        break;
                    case "lb":
                        a.clipPath = c ? "polygon(0% " + (100 - 2 * p) + "%, 0% 100%," + 2 * p + "% 100%)" : "circle(" + p + "% at 0% 100%)";
                        break;
                    case "rt":
                        a.clipPath = c ? "polygon(" + (100 - 2 * p) + "% 0%, 100% 0%, 100% " + 2 * p + "%)" : "circle(" + p + "% at 100% 0%)";
                        break;
                    case "rb":
                        a.clipPath = c ? "polygon(" + (100 - 2 * p) + "% 100%, 100% 100%, 100% " + (100 - 2 * p) + "%)" : "circle(" + p + "% at 100% 100%)";
                        break;
                    case "clr":
                        a.clipPath = c ? "polygon(0% 0%, 0% " + p + "%, " + (100 - p) + "% 100%, 100% 100%, 100% " + (100 - p) + "%, " + p + "% 0%)" : "circle(" + p + "% at 50% 50%)";
                        break;
                    case "crl":
                        a.clipPath = c ? "polygon(0% " + (100 - p) + "%, 0% 100%, " + p + "% 100%, 100% " + p + "%, 100% 0%, " + (100 - p) + "% 0%)" : "circle(" + p + "% at 50% 50%)"
                }!0 !== o.isFirefox(e.id) && (a["-webkit-clip-path"] = a.clipPath), a["clip-path"] = a.clipPath, delete a.clip, delete a.clipB
            } else delete a.clip;
            return "mask" !== e.target && (void 0 === e.frame || void 0 === e.frame.filter && !e.forcefilter || (a["-webkit-filter"] = "blur(" + (null == e.frame.filter ? 0 : e.frame.filter.blur || 0) + "px) grayscale(" + (null == e.frame.filter ? 0 : e.frame.filter.grayscale || 0) + "%) brightness(" + (null == e.frame.filter ? 100 : e.frame.filter.brightness || 100) + "%)", a.filter = "blur(" + (null == e.frame.filter ? 0 : e.frame.filter.blur || 0) + "px) grayscale(" + (null == e.frame.filter ? 0 : e.frame.filter.grayscale || 0) + "%) brightness(" + (null == e.frame.filter ? 100 : e.frame.filter.brightness || 100) + "%)"), jQuery.inArray(e.source, ["chars", "words", "lines"]) >= 0 && (void 0 !== e.frame[e.source].blur || e.forcefilter) && (a["-webkit-filter"] = "blur(" + (parseInt(e.frame[e.source].blur, 0) || 0) + "px) grayscale(" + (parseInt(e.frame[e.source].grayscale, 0) || 0) + "%) brightness(" + (parseInt(e.frame[e.source].brightness, 0) || 100) + "%)", a.filter = "blur(" + (parseInt(e.frame[e.source].blur, 0) || 0) + "px) grayscale(" + (parseInt(e.frame[e.source].grayscale, 0) || 0) + "%) brightness(" + (parseInt(e.frame[e.source].brightness, 0) || 100) + "%)")), a.ease = void 0 !== a.ease ? a.ease : void 0 === a.ease && void 0 !== e.ease || void 0 !== a.ease && void 0 !== e.ease && "inherit" === a.ease ? e.ease : e.frame.timeline.ease, a.ease = void 0 === a.ease || "default" === a.ease ? "power3.inOut" : a.ease, a
        },
        x = function(e, t, i, a, r) {
            var s, n, l = {},
                d = {},
                c = {};
            for (var p in a = void 0 === a ? "transform" : a, "loop" === r ? (c.autoRotate = !1, c.yoyo_filter = !1, c.yoyo_rotate = !1, c.yoyo_move = !1, c.yoyo_scale = !1, c.curved = !1, c.curviness = 2, c.ease = "none", c.speed = 1e3, c.st = 0, l.x = 0, l.y = 0, l.z = 0, l.xr = 0, l.yr = 0, l.zr = 0, l.scaleX = 1, l.scaleY = 1, l.originX = "50%", l.originY = "50%", l.originZ = "0", l.rotationX = "0deg", l.rotationY = "0deg", l.rotationZ = "0deg") : (c.speed = 300, i ? c.ease = "default" : l.ease = "default"), "sfx" === r && (l.fxc = "#ffffff"), e = e.split(";"))
                if (e.hasOwnProperty(p)) {
                    var g = e[p].split(":");
                    switch (g[0]) {
                        case "u":
                            l.use = "true" === g[1] || "t" === g[1] || fasle;
                            break;
                        case "c":
                            s = g[1];
                            break;
                        case "fxc":
                            l.fxc = g[1];
                            break;
                        case "bgc":
                            n = g[1];
                            break;
                        case "auto":
                            l.auto = "t" === g[1] || void 0 === g[1] || "true" === g[1];
                            break;
                        case "o":
                            l.opacity = g[1];
                            break;
                        case "oX":
                            l.originX = g[1];
                            break;
                        case "oY":
                            l.originY = g[1];
                            break;
                        case "oZ":
                            l.originZ = g[1];
                            break;
                        case "sX":
                            l.scaleX = g[1];
                            break;
                        case "sY":
                            l.scaleY = g[1];
                            break;
                        case "skX":
                            l.skewX = g[1];
                            break;
                        case "skY":
                            l.skewY = g[1];
                            break;
                        case "rX":
                            l.rotationX = g[1], 0 != g[1] && "0deg" !== g[1] && o.addSafariFix(t);
                            break;
                        case "rY":
                            l.rotationY = g[1], 0 != g[1] && "0deg" !== g[1] && o.addSafariFix(t);
                            break;
                        case "rZ":
                            l.rotationZ = g[1];
                            break;
                        case "sc":
                            l.color = g[1];
                            break;
                        case "se":
                            l.effect = g[1];
                            break;
                        case "bos":
                            l.borderStyle = g[1];
                            break;
                        case "boc":
                            l.borderColor = g[1];
                            break;
                        case "td":
                            l.textDecoration = g[1];
                            break;
                        case "zI":
                            l.zIndex = g[1];
                            break;
                        case "tp":
                            l.transformPerspective = "isometric" === o[t].perspectiveType ? 0 : "global" === o[t].perspectiveType ? o[t].perspective : g[1];
                            break;
                        case "cp":
                            l.clip = parseInt(g[1], 0);
                            break;
                        case "cpb":
                            l.clipB = parseInt(g[1], 0);
                            break;
                        case "aR":
                            c.autoRotate = "t" == g[1];
                            break;
                        case "rA":
                            c.radiusAngle = g[1];
                            break;
                        case "yyf":
                            c.yoyo_filter = "t" == g[1];
                            break;
                        case "yym":
                            c.yoyo_move = "t" == g[1];
                            break;
                        case "yyr":
                            c.yoyo_rotate = "t" == g[1];
                            break;
                        case "yys":
                            c.yoyo_scale = "t" == g[1];
                            break;
                        case "crd":
                            c.curved = "t" == g[1];
                            break;
                        case "x":
                            l.x = "reverse" === r ? "t" === g[1] || !0 === g[1] || "true" == g[1] : "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[t].rle);
                            break;
                        case "y":
                            l.y = "reverse" === r ? "t" === g[1] || !0 === g[1] || "true" == g[1] : "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[t].rle);
                            break;
                        case "z":
                            l.z = "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[t].rle), 0 != g[1] && o.addSafariFix(t);
                            break;
                        case "bow":
                            l.borderWidth = o.revToResp(g[1], 4, 0).toString().replace(/,/g, " ");
                            break;
                        case "bor":
                            l.borderRadius = o.revToResp(g[1], 4, 0).toString().replace(/,/g, " ");
                            break;
                        case "m":
                            l.mask = "t" === g[1] || "f" !== g[1] && g[1];
                            break;
                        case "iC":
                            l.instantClick = "t" === g[1] || "f" !== g[1] && g[1];
                            break;
                        case "xR":
                            l.xr = parseInt(g[1], 0), o.addSafariFix(t);
                            break;
                        case "yR":
                            l.yr = parseInt(g[1], 0), o.addSafariFix(t);
                            break;
                        case "zR":
                            l.zr = parseInt(g[1], 0);
                            break;
                        case "blu":
                            "loop" === r ? l.blur = parseInt(g[1], 0) : d.blur = parseInt(g[1], 0);
                            break;
                        case "gra":
                            "loop" === r ? l.grayscale = parseInt(g[1], 0) : d.grayscale = parseInt(g[1], 0);
                            break;
                        case "bri":
                            "loop" === r ? l.brightness = parseInt(g[1], 0) : d.brightness = parseInt(g[1], 0);
                            break;
                        case "sp":
                            c.speed = parseInt(g[1], 0);
                            break;
                        case "d":
                            l.delay = parseInt(g[1], 0);
                            break;
                        case "crns":
                            c.curviness = parseInt(g[1], 0);
                            break;
                        case "st":
                            c.start = "w" === g[1] || "a" === g[1] ? "+=0" : g[1], c.waitoncall = "w" === g[1] || "a" === g[1];
                            break;
                        case "sA":
                            c.startAbsolute = g[1];
                            break;
                        case "sR":
                            c.startRelative = g[1];
                            break;
                        case "e":
                            i ? c.ease = g[1] : l.ease = g[1];
                            break;
                        default:
                            g[0].length > 0 && (l[g[0]] = "t" === g[1] || "f" !== g[1] && g[1])
                    }
                }
            var u = {
                timeline: c
            };
            return jQuery.isEmptyObject(d) || ("split" === r ? l = jQuery.extend(!0, l, d) : u.filter = d), "split" === r && (l.dir = void 0 === l.dir ? "start" : "backward" === l.dir ? "end" : "middletoedge" === l.dir ? "center" : "edgetomiddle" === l.dir ? "edge" : l.dir), jQuery.isEmptyObject(s) || (u.color = s), jQuery.isEmptyObject(n) || (u.bgcolor = n), u[a] = l, u
        },
        k = function(e, t) {
            var i = {},
                a = 0;
            if (void 0 === window.rdF0) {
                var r = x("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;dir:forward;d:5", t).transform;
                window.rdF0 = window.rdF1 = {
                    transform: x("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;tp:600px", t, !0).transform,
                    mask: x("x:0;y:0", t, !0).transform,
                    chars: jQuery.extend(!0, {
                        blur: 0,
                        grayscale: 0,
                        brightness: 100
                    }, r),
                    words: jQuery.extend(!0, {
                        blur: 0,
                        grayscale: 0,
                        brightness: 100
                    }, r),
                    lines: jQuery.extend(!0, {
                        blur: 0,
                        grayscale: 0,
                        brightness: 100
                    }, r)
                }, window.rdF1.transform.opacity = window.rdF1.chars.opacity = window.rdF1.words.opacity = window.rdF1.lines.opacity = window.rdF1.transform.scaleX = window.rdF1.chars.scaleX = window.rdF1.words.scaleX = window.rdF1.lines.scaleX = window.rdF1.transform.scaleY = window.rdF1.chars.scaleY = window.rdF1.words.scaleY = window.rdF1.lines.scaleY = 1
            }
            for (var a in void 0 === e.frame_0 && (e.frame_0 = "x:0"), void 0 === e.frame_1 && (e.frame_1 = "x:0"), e.dddNeeded = !1, e.ford)
                if (e.ford.hasOwnProperty(a)) {
                    var n = e.ford[a];
                    if (e[n]) {
                        if (i[n] = x(e[n], t, !0), void 0 !== i[n].bgcolor && (e.bgcolinuse = !0), o[t].BUG_ie_clipPath && void 0 !== e.clipPath && e.clipPath.use && void 0 !== i[n].transform.clip) {
                            var l = "rectangle" === e.clipPath.type ? 100 - parseInt(i[n].transform.clip) : 100 - Math.min(100, 2 * parseInt(i[n].transform.clip));
                            switch (e.clipPath.origin) {
                                case "clr":
                                case "rb":
                                case "rt":
                                case "r":
                                    e[n + "_mask"] = "u:t;x:" + l + "%;y:0px;", i[n].transform.x = o.revToResp("-" + l + "%", o[t].rle);
                                    break;
                                case "crl":
                                case "lb":
                                case "lt":
                                case "cv":
                                case "l":
                                    e[n + "_mask"] = "u:t;x:-" + l + "%;y:0px;", i[n].transform.x = o.revToResp(l + "%", o[t].rle);
                                    break;
                                case "ch":
                                case "t":
                                    e[n + "_mask"] = "u:t;y:-" + l + "%;y:0px;", i[n].transform.y = o.revToResp(l + "%", o[t].rle);
                                    break;
                                case "b":
                                    e[n + "_mask"] = "u:t;y:" + l + "%;y:0px;", i[n].transform.y = o.revToResp("-" + l + "%", o[t].rle)
                            }
                            delete i[n].transform.clip, delete i[n].transform.clipB
                        }
                        e[n + "_mask"] && (i[n].mask = x(e[n + "_mask"], t).transform), null != i[n].mask && i[n].mask.use ? (i[n].mask.x = void 0 === i[n].mask.x ? 0 : i[n].mask.x, i[n].mask.y = void 0 === i[n].mask.y ? 0 : i[n].mask.y, delete i[n].mask.use, i[n].mask.overflow = "hidden") : i[n].mask = {
                            ease: "default",
                            overflow: "visible"
                        }, e[n + "_chars"] && (i[n].chars = x(e[n + "_chars"], t, void 0, void 0, "split").transform), e[n + "_words"] && (i[n].words = x(e[n + "_words"], t, void 0, void 0, "split").transform), e[n + "_lines"] && (i[n].lines = x(e[n + "_lines"], t, void 0, void 0, "split").transform), (e[n + "_chars"] || e[n + "_words"] || e[n + "_lines"]) && (i[n].dosplit = !0), i.frame_0 = void 0 === i.frame_0 ? {
                            transform: {}
                        } : i.frame_0, i[n].transform.auto && (i[n].transform = jQuery.extend(!0, {}, i.frame_0.transform), i[n].transform.opacity = void 0 === i[n].transform.opacity ? 0 : i[n].transform.opacity, void 0 !== i.frame_0.filter && (i[n].filter = jQuery.extend(!0, {}, i.frame_0.filter)), void 0 !== i.frame_0.mask && (i[n].mask = jQuery.extend(!0, {}, i.frame_0.mask)), void 0 !== i.frame_0.chars && (i[n].chars = jQuery.extend(!0, {}, i.frame_0.chars)), void 0 !== i.frame_0.words && (i[n].words = jQuery.extend(!0, {}, i.frame_0.words)), void 0 !== i.frame_0.lines && (i[n].lines = jQuery.extend(!0, {}, i.frame_0.lines))), e[n + "_sfx"] && (i[n].sfx = x(e[n + "_sfx"], t, !1, void 0, "sfx").transform), e[n + "_reverse"] && (i[n].reverse = x(e[n + "_reverse"], t, !1, void 0, "reverse").transform)
                    }
                }
            if (i.frame_0.dosplit && (i.frame_1.dosplit = !0), void 0 === e.frame_hover && void 0 === e.svgh || (i.frame_hover = x(void 0 === e.frame_hover ? "" : e.frame_hover, t), !s || "true" != i.frame_hover.transform.instantClick && 1 != i.frame_hover.transform.instantClick ? (delete i.frame_hover.transform.instantClick, i.frame_hover.transform.color = i.frame_hover.color, void 0 === i.frame_hover.transform.color && delete i.frame_hover.transform.color, void 0 !== i.frame_hover.bgcolor && i.frame_hover.bgcolor.indexOf("gradient") >= 0 ? i.frame_hover.transform.backgroundImage = i.frame_hover.bgcolor : void 0 !== i.frame_hover.bgcolor && (i.frame_hover.transform.backgroundColor = i.frame_hover.bgcolor), void 0 !== i.frame_hover.bgcolor && (e.bgcolinuse = !0), i.frame_hover.transform.opacity = void 0 === i.frame_hover.transform.opacity ? 1 : i.frame_hover.transform.opacity, i.frame_hover.mask = void 0 !== i.frame_hover.transform.mask && i.frame_hover.transform.mask, delete i.frame_hover.transform.mask, void 0 !== i.frame_hover.transform && ((i.frame_hover.transform.borderWidth || i.frame_hover.transform.borderStyle) && (i.frame_hover.transform.borderColor = void 0 === i.frame_hover.transform.borderColor ? "transparent" : i.frame_hover.transform.borderColor), "none" !== i.frame_hover.transform.borderStyle && void 0 === i.frame_hover.transform.borderWidth && (i.frame_hover.transform.borderWidth = o.revToResp(0, 4, 0).toString().replace(/,/g, " ")), void 0 === e.bordercolor && void 0 !== i.frame_hover.transform.borderColor && (e.bordercolor = "transparent"), void 0 === e.borderwidth && void 0 !== i.frame_hover.transform.borderWidth && (e.borderwidth = o.revToResp(i.frame_hover.transform.borderWidth, 4, 0)), void 0 === e.borderstyle && void 0 !== i.frame_hover.transform.borderStyle && (e.borderstyle = o.revToResp(i.frame_hover.transform.borderStyle, 4, 0)))) : delete i.frame_hover), void 0 !== e.tloop) {
                e.layerLoop = {
                    from: "frame_1",
                    to: "frame_999",
                    repeat: -1,
                    keep: !0,
                    children: !0
                };
                var d = e.tloop.split(";");
                for (var a in d)
                    if (d.hasOwnProperty(a)) {
                        var c = d[a].split(":");
                        switch (c[0]) {
                            case "f":
                                e.layerLoop.from = c[1];
                                break;
                            case "t":
                                e.layerLoop.to = c[1];
                                break;
                            case "k":
                                e.layerLoop.keep = c[1];
                                break;
                            case "r":
                                e.layerLoop.repeat = parseInt(c[1], 0);
                                break;
                            case "c":
                                e.layerLoop.children = c[1]
                        }
                    }
                e.layerLoop.count = 0
            }
            for (var a in (e.loop_0 || e.loop_999) && (i.loop = x(e.loop_999, t, !0, "frame_999", "loop"), i.loop.frame_0 = x(e.loop_0 || "", t, !1, void 0, "loop").transform), i.frame_0.transform.opacity = void 0 === i.frame_0.transform.opacity ? 0 : i.frame_0.transform.opacity, i.frame_1.transform.opacity = void 0 === i.frame_1.transform.opacity ? 1 : i.frame_1.transform.opacity, i.frame_999.transform.opacity = void 0 === i.frame_999.transform.opacity ? "inherit" : i.frame_999.transform.opacity, e.clipPath && e.clipPath.use && (i.frame_0.transform.clip = void 0 === i.frame_0.transform.clip ? 100 : parseInt(i.frame_0.transform.clip), i.frame_1.transform.clip = void 0 === i.frame_1.transform.clip ? 100 : parseInt(i.frame_1.transform.clip)), e.resetfilter = !1, i) void 0 !== i[a].filter && (e.resetfilter = !0);
            return e.resetfilter && (i.frame_0.filter = jQuery.extend(!0, {}, i.frame_0.filter), i.frame_0.filter.blur = void 0 === i.frame_0.filter.blur ? 0 : i.frame_0.filter.blur, i.frame_0.filter.brightness = void 0 === i.frame_0.filter.brightness ? 100 : i.frame_0.filter.brightness, i.frame_0.filter.grayscale = void 0 === i.frame_0.filter.grayscale ? 0 : i.frame_0.filter.grayscale), void 0 !== i.frame_0.filter && (i.frame_1.filter = jQuery.extend(!0, {}, i.frame_1.filter), void 0 !== i.frame_0.filter.blur && 0 !== i.frame_1.filter.blur && (i.frame_1.filter.blur = void 0 === i.frame_1.filter.blur ? 0 : i.frame_1.filter.blur), void 0 !== i.frame_0.filter.brightness && 100 !== i.frame_1.filter.brightness && (i.frame_1.filter.brightness = void 0 === i.frame_1.filter.brightness ? 100 : i.frame_1.filter.brightness), void 0 !== i.frame_0.filter.grayscale && 0 !== i.frame_1.filter.grayscale && (i.frame_1.filter.grayscale = void 0 === i.frame_1.filter.grayscale ? 0 : i.frame_1.filter.grayscale)), S(i, t)
        },
        S = function(e, t) {
            var i, a = {},
                r = ["transform", "words", "chars", "lines", "mask"],
                s = "global" == o[t].perspectiveType ? o[t].perspective : 0,
                n = !0;
            for (var l in e) "loop" !== l && "frame_hover" !== l && (a = jQuery.extend(!0, a, e[l]));
            for (var l in e)
                if (e.hasOwnProperty(l) && (void 0 !== e[l].timeline && (e[l].timeline.usePerspective = !1), "loop" !== l && "frame_hover" !== l)) {
                    for (i in a.transform) a.transform.hasOwnProperty(i) && (a.transform[i] = void 0 === e[l].transform[i] ? "frame_0" === l ? window.rdF0.transform[i] : "frame_1" === l ? window.rdF1.transform[i] : a.transform[i] : e[l].transform[i], e[l].transform[i] = void 0 === e[l].transform[i] ? a.transform[i] : e[l].transform[i]);
                    for (var d = 1; d <= 4; d++)
                        for (i in a[r[d]]) a[r[d]].hasOwnProperty(i) && (e[l][r[d]] = void 0 === e[l][r[d]] ? {} : e[l][r[d]], a[r[d]][i] = void 0 === e[l][r[d]][i] ? "frame_0" === l ? window.rdF0[r[d]][i] : "frame_1" === l ? window.rdF1[r[d]][i] : a[r[d]][i] : e[l][r[d]][i], e[l][r[d]][i] = void 0 === e[l][r[d]][i] ? a[r[d]][i] : e[l][r[d]][i]);
                    void 0 === e[l].timeline || !1 !== e[l].timeline.usePerspective || void 0 === e[l].transform || void 0 === e[l].transform.rotationY && void 0 === e[l].transform.rotationX && void 0 === e[l].transform.z || (s = "local" == o[t].perspectiveType ? void 0 === e[l].transform.transformPerspective ? 600 : e[l].transform.transformPerspective : s, e[l].timeline.usePerspective = !0, n = !1)
                }
            if (void 0 !== e.frame_0.timeline && e.frame_0.timeline.usePerspective && (e.frame_0.transform.transformPerspective = "local" === o[t].perspectiveType ? void 0 === e.frame_0.transform.transformPerspective ? s : e.frame_0.transform.transformPerspective : "isometric" === o[t].perspectiveType ? 0 : o[t].perspective), n)
                for (var l in e) {
                    if (!e.hasOwnProperty(l) || void 0 === e[l].transform) continue;
                    delete e[l].transform.transformPerspective
                }
            return e
        },
        L = function(e, t, i) {
            if (0 === e.length) return {};
            for (var a = e[0].getElementsByClassName(t), r = {}, o = 0; o < a.length; o++) void 0 !== i && -1 !== a[o].className.indexOf(i) || (r[a[o].id] = a[o]);
            return r
        },
        T = function(e) {
            return "thin" === (e = jQuery.isNumeric(e) ? e : e.toLowerCase()) ? "00" : "extra light" === e ? 200 : "light" === e ? 300 : "normal" === e ? 400 : "medium" === e ? 500 : "semi bold" === e ? 600 : "bold" === e ? 700 : "extra bold" === e ? 800 : "ultra bold" === e ? 900 : "black" === e ? 900 : e
        },
        O = function(e, t, s) {
            var n;
            if ("BR" == e[0].nodeName || "br" == e[0].tagName || "object" != typeof e[0].className && e[0].className.indexOf("rs_splitted_") >= 0) return !1;
            o.sA(e[0], "stylerecorder", !0);
            var l = window.getComputedStyle(e[0], null),
                d = void 0 !== e[0].id && void 0 !== o[s]._L[e[0].id] ? o[s]._L[e[0].id] : e.data(),
                c = "rekursive" === t ? e.closest(".rs-layer") : void 0,
                p = void 0 !== c && l.fontSize == c.css("fontSize") && T(l.fontWeight) == T(c.css("fontWeight")) && l.lineHeight == c.css("lineHeight"),
                g = p ? void 0 !== c[0].id && void 0 !== o[s]._L[c[0].id] ? o[s]._L[c[0].id] : c.data() : void 0,
                u = 0;
            for (d.basealign = void 0 === d.basealign ? "grid" : d.basealign, d._isnotext || (d.fontSize = o.revToResp(p ? void 0 === g.fontsize ? parseInt(c.css("fontSize"), 0) || 20 : g.fontsize : void 0 === d.fontsize ? "rekursive" !== t ? 20 : "inherit" : d.fontsize, o[s].rle), d.fontWeight = o.revToResp(p ? void 0 === g.fontweight ? c.css("fontWeight") || "inherit" : g.fontweight : void 0 === d.fontweight ? e.css("fontWeight") || "inherit" : d.fontweight, o[s].rle), d.whiteSpace = o.revToResp(p ? void 0 === g.whitespace ? "nowrap" : g.whitespace : void 0 === d.whitespace ? "nowrap" : d.whitespace, o[s].rle), d.textAlign = o.revToResp(p ? void 0 === g.textalign ? "left" : g.textalign : void 0 === d.textalign ? "left" : d.textalign, o[s].rle), d.letterSpacing = o.revToResp(p ? void 0 === g.letterspacing ? parseInt(c.css("letterSpacing"), 0) || "inherit" : g.letterspacing : void 0 === d.letterspacing ? parseInt("normal" === l.letterSpacing ? 0 : l.letterSpacing, 0) || "inherit" : d.letterspacing, o[s].rle), d.textDecoration = p ? void 0 === g.textDecoration ? "none" : g.textDecoration : void 0 === d.textDecoration ? "none" : d.textDecoration, u = 25, u = void 0 !== c && "I" === e[0].tagName ? "inherit" : u, void 0 !== d.tshadow && (d.tshadow.b = o.revToResp(d.tshadow.b, o[s].rle), d.tshadow.h = o.revToResp(d.tshadow.h, o[s].rle), d.tshadow.v = o.revToResp(d.tshadow.v, o[s].rle))), void 0 !== d.bshadow && (d.bshadow.b = o.revToResp(d.bshadow.b, o[s].rle), d.bshadow.h = o.revToResp(d.bshadow.h, o[s].rle), d.bshadow.v = o.revToResp(d.bshadow.v, o[s].rle), d.bshadow.s = o.revToResp(d.bshadow.s, o[s].rle)), d.display = p ? void 0 === g.display ? c.css("display") : g.display : void 0 === d.display ? l.display : d.display, d.float = o.revToResp(p ? void 0 === g.float ? c.css("float") || "none" : g.float : void 0 === d.float ? "none" : d.float, o[s].rle), d.clear = o.revToResp(p ? void 0 === g.clear ? c.css("clear") || "none" : g.clear : void 0 === d.clear ? "none" : d.clear, o[s].rle), d.lineHeight = o.revToResp(e.is("img") || -1 != jQuery.inArray(d.layertype, ["video", "image", "audio"]) ? u : p ? void 0 === g.lineheight ? parseInt(c.css("lineHeight"), 0) || u : g.lineheight : void 0 === d.lineheight ? u : d.lineheight, o[s].rle), d.zIndex = p ? void 0 === g.zindex ? parseInt(c.css("zIndex"), 0) || "inherit" : g.zindex : void 0 === d.zindex ? parseInt(l.zIndex, 0) || "inherit" : d.zindex, n = 0; n < 4; n++) d["padding" + i[n]] = o.revToResp(void 0 === d["padding" + r[n]] ? parseInt(l["padding" + i[n]], 0) || 0 : d["padding" + r[n]], o[s].rle), d["margin" + i[n]] = o.revToResp(void 0 === d["margin" + r[n]] ? parseInt(l["margin" + i[n]], 0) || 0 : d["margin" + r[n]], o[s].rle), d["border" + i[n] + "Width"] = void 0 === d.borderwidth ? parseInt(l["border" + i[n] + "Width"], 0) || 0 : d.borderwidth[n], d["border" + i[n] + "Color"] = void 0 === d.bordercolor ? l["border-" + r[n] + "-color"] : d.bordercolor, d["border" + a[n] + "Radius"] = o.revToResp(void 0 === d.borderradius ? l["border" + a[n] + "Radius"] || 0 : d.borderradius[n], o[s].rle);
            for (d.borderStyle = o.revToResp(void 0 === d.borderstyle ? l.borderStyle || 0 : d.borderstyle, o[s].rle), "rekursive" !== t ? (d.color = o.revToResp(void 0 === d.color ? "#ffffff" : d.color, o[s].rle, void 0, "||"), d.minWidth = o.revToResp(void 0 === d.minwidth ? parseInt(l.minWidth, 0) || 0 : d.minwidth, o[s].rle), d.minHeight = o.revToResp(void 0 === d.minheight ? parseInt(l.minHeight, 0) || 0 : d.minheight, o[s].rle), d.width = o.revToResp(void 0 === d.width ? "auto" : o.smartConvertDivs(d.width), o[s].rle), d.height = o.revToResp(void 0 === d.height ? "auto" : o.smartConvertDivs(d.height), o[s].rle), d.maxWidth = o.revToResp(void 0 === d.maxwidth ? parseInt(l.maxWidth, 0) || "none" : d.maxwidth, o[s].rle), d.maxHeight = o.revToResp(-1 !== jQuery.inArray(d.type, ["column", "row"]) ? "none" : void 0 !== d.maxheight ? parseInt(l.maxHeight, 0) || "none" : d.maxheight, o[s].rle)) : "html" === d.layertype && (d.width = o.revToResp(e[0].width, o[s].rle), d.height = o.revToResp(e[0].height, o[s].rle)), d.styleProps = {
                    background: e[0].style.background,
                    "background-color": e[0].style["background-color"],
                    color: e[0].style.color,
                    cursor: e[0].style.cursor,
                    "font-style": e[0].style["font-style"]
                }, null == d.bshadow && (d.styleProps.boxShadow = e[0].style.boxShadow), "" !== d.styleProps.background && void 0 !== d.styleProps.background && d.styleProps.background !== d.styleProps["background-color"] || delete d.styleProps.background, "" == d.styleProps.color && (d.styleProps.color = l.color), n = 0; n < 4; n++) A(d["padding" + i[n]], 0) && delete d["padding" + i[n]], A(d["margin" + i[n]], 0) && delete d["margin" + i[n]], A(d["border" + a[n] + "Radius"], "0px") ? delete d["border" + a[n] + "Radius"] : A(d["border" + a[n] + "Radius"], "0") && delete d["border" + a[n] + "Radius"];
            if (A(d.borderStyle, "none"))
                for (delete d.borderStyle, n = 0; n < 4; n++) delete d["border" + i[n] + "Width"], delete d["border" + i[n] + "Color"]
        },
        A = function(e, t) {
            return t === e[0] && t === e[1] && t === e[2] && t === e[3]
        },
        R = function(e, t, i, a, r) {
            var o = jQuery.isNumeric(e) || void 0 === e ? "" : e.indexOf("px") >= 0 ? "px" : e.indexOf("%") >= 0 ? "%" : "";
            return e = jQuery.isNumeric(parseInt(e)) ? parseInt(e) : e, e = null == (e = "full" === (e = jQuery.isNumeric(e) ? e * t + o : e) ? a : "auto" === e || "none" === e ? i : e) ? r : e
        },
        I = function(e) {
            return null != e && 0 !== parseInt(e, 0)
        },
        z = function(e) {
            var t, s, n, l, d, c, p, g, u, m, h = e.a,
                f = e.b,
                v = e.c,
                y = e.d,
                b = e.e,
                _ = {},
                w = {},
                x = o[f]._L[h[0].id],
                k = h[0].className;
            if (x = void 0 === x ? {} : x, "object" == typeof k && (k = ""), void 0 !== h && void 0 !== h[0] && (k.indexOf("rs_splitted") >= 0 || "BR" == h[0].nodeName || "br" == h[0].tagName || h[0].tagName.indexOf("FCR") > 0 || h[0].tagName.indexOf("BCR") > 0)) return !1;
            b = "individual" === b ? x.slideIndex : b;
            e = function(e, t, r) {
                if (void 0 !== e) {
                    if ("BR" == e[0].nodeName || "br" == e[0].tagName) return !1;
                    var s, n = o[t].level,
                        l = void 0 !== e[0] && void 0 !== e[0].id && void 0 !== o[t]._L[e[0].id] ? o[t]._L[e[0].id] : e.data();
                    void 0 === (l = void 0 === l.basealign ? r.data() : l)._isnotext && (l._isnotext = void 0 !== r && void 0 !== r[0] && r[0].length > 0 ? o.gA(r[0], "_isnotext") : l._isnotext);
                    var d = {
                        basealign: void 0 === l.basealign ? "grid" : l.basealign,
                        lineHeight: void 0 === l.basealign ? "inherit" : parseInt(l.lineHeight[n]),
                        color: void 0 === l.color ? void 0 : l.color[n],
                        width: void 0 === l.width ? void 0 : "a" === l.width[n] ? "auto" : l.width[n],
                        height: void 0 === l.height ? void 0 : "a" === l.height[n] ? "auto" : l.height[n],
                        minWidth: void 0 === l.minWidth ? void 0 : "n" === l.minWidth[n] ? "none" : l.minWidth[n],
                        minHeight: void 0 === l.minHeight ? void 0 : "n" == l.minHeight[n] ? "none" : l.minHeight[n],
                        maxWidth: void 0 === l.maxWidth ? void 0 : "n" == l.maxWidth[n] ? "none" : l.maxWidth[n],
                        maxHeight: void 0 === l.maxHeight ? void 0 : "n" == l.maxHeight[n] ? "none" : l.maxHeight[n],
                        float: l.float[n],
                        clear: l.clear[n]
                    };
                    for (l.borderStyle && (d.borderStyle = l.borderStyle[n]), s = 0; s < 4; s++) l["padding" + i[s]] && (d["padding" + i[s]] = l["padding" + i[s]][n]), l["margin" + i[s]] && (d["margin" + i[s]] = parseInt(l["margin" + i[s]][n])), l["border" + a[s] + "Radius"] && (d["border" + a[s] + "Radius"] = l["border" + a[s] + "Radius"][n]), l["border" + i[s] + "Color"] && (d["border" + i[s] + "Color"] = l["border" + i[s] + "Color"]), l["border" + i[s] + "Width"] && (d["border" + i[s] + "Width"] = parseInt(l["border" + i[s] + "Width"]));
                    return l._isnotext || (d.textDecoration = l.textDecoration, d.fontSize = parseInt(l.fontSize[n]), d.fontWeight = parseInt(l.fontWeight[n]), d.letterSpacing = parseInt(l.letterSpacing[n]) || 0, d.textAlign = l.textAlign[n], d.whiteSpace = l.whiteSpace[n], d.whiteSpace = "normal" === d.whiteSpace && "auto" === d.width && !0 !== l._incolumn ? "nowrap" : d.whiteSpace, d.display = l.display, void 0 !== l.tshadow && (d.textShadow = parseInt(l.tshadow.h[n], 0) + "px " + parseInt(l.tshadow.v[n], 0) + "px " + l.tshadow.b[n] + " " + l.tshadow.c), void 0 !== l.tstroke && (d.textStroke = parseInt(l.tstroke.w, 0) + "px " + l.tstroke.c)), void 0 !== l.bshadow && (d.boxShadow = parseInt(l.bshadow.h[n], 0) + "px " + parseInt(l.bshadow.v[n], 0) + "px " + parseInt(l.bshadow.b[n], 0) + "px " + parseInt(l.bshadow.s[n], 0) + "px " + l.bshadow.c), d
                }
            }(h, f, e.RSL);
            var S, L = "off" === y ? 1 : o[f].bw;
            if (void 0 === x._isnotext && (x._isnotext = void 0 !== e.RSL && void 0 !== e.RSL[0] && e.RSL[0].length > 0 ? o.gA(e.RSL[0], "_isnotext") : x._isnotext), x.OBJUPD = null == x.OBJUPD ? {} : x.OBJUPD, x.caches = null == x.caches ? {} : x.caches, "column" === x.type) {
                for (s = {}, S = {}, t = 0; t < 4; t++) void 0 !== e["margin" + i[t]] && (s["padding" + i[t]] = Math.round(e["margin" + i[t]] * L) + "px", S["margin" + i[t]] = e["margin" + i[t]], delete e["margin" + i[t]]);
                jQuery.isEmptyObject(s) || tpGS.gsap.set(x._column, s)
            }
            var T = jQuery.extend(!0, {}, x.OBJUPD.POBJ),
                O = jQuery.extend(!0, {}, x.OBJUPD.LPOBJ);
            if (-1 === k.indexOf("rs_splitted_")) {
                for (s = {
                        overwrite: "auto"
                    }, t = 0; t < 4; t++) void 0 !== e["border" + a[t] + "Radius"] && (s["border" + a[t] + "Radius"] = e["border" + a[t] + "Radius"]), void 0 !== e["padding" + i[t]] && (s["padding" + i[t]] = Math.round(e["padding" + i[t]] * L) + "px"), void 0 === e["margin" + i[t]] || x._incolumn || (s["margin" + i[t]] = "row" === x.type ? 0 : Math.round(e["margin" + i[t]] * L) + "px");
                if (void 0 !== x.spike && (s["clip-path"] = s["-webkit-clip-path"] = x.spike), e.boxShadow && (s.boxShadow = e.boxShadow), "column" !== x.type && (void 0 !== e.borderStyle && "none" !== e.borderStyle && (0 !== e.borderTopWidth || e.borderBottomWidth > 0 || e.borderLeftWidth > 0 || e.borderRightWidth > 0) ? (s.borderTopWidth = Math.round(e.borderTopWidth * L) + "px", s.borderBottomWidth = Math.round(e.borderBottomWidth * L) + "px", s.borderLeftWidth = Math.round(e.borderLeftWidth * L) + "px", s.borderRightWidth = Math.round(e.borderRightWidth * L) + "px", s.borderStyle = e.borderStyle, s.borderTopColor = e.borderTopColor, s.borderBottomColor = e.borderBottomColor, s.borderLeftColor = e.borderLeftColor, s.borderRightColor = e.borderRightColor) : ("none" === e.borderStyle && (s.borderStyle = "none"), s.borderTopColor = e.borderTopColor, s.borderBottomColor = e.borderBottomColor, s.borderLeftColor = e.borderLeftColor, s.borderRightColor = e.borderRightColor)), "shape" !== x.type && "image" !== x.type || !(I(e.borderTopLeftRadius) || I(e.borderTopRightRadius) || I(e.borderBottomLeftRadius) || I(e.borderBottomRightRadius)) || (s.overflow = "hidden"), x._isnotext || ("column" !== x.type && (s.fontSize = Math.round(e.fontSize * L) + "px", s.fontWeight = e.fontWeight, s.letterSpacing = e.letterSpacing * L + "px", e.textShadow && (s.textShadow = e.textShadow), e.textStroke && (s["-webkit-text-stroke"] = e.textStroke)), s.lineHeight = Math.round(e.lineHeight * L) + "px", s.textAlign = e.textAlign), "column" === x.type && (void 0 === x.cbg_set && (x.cbg_set = x.styleProps["background-color"], x.cbg_set = "" == x.cbg_set || void 0 === x.cbg_set || 0 == x.cbg_set.length ? "transparent" : x.cbg_set, x.cbg_img = h.css("backgroundImage"), "" !== x.cbg_img && void 0 !== x.cbg_img && "none" !== x.cbg_img && (x.cbg_img_r = h.css("backgroundRepeat"), x.cbg_img_p = h.css("backgroundPosition"), x.cbg_img_s = h.css("backgroundSize")), x.cbg_o = x.bgopacity ? 1 : x.bgopacity, _.backgroundColor = "transparent", _.backgroundImage = ""), s.backgroundColor = "transparent", s.backgroundImage = "none"), x._isstatic && x.elementHovered && (p = h.data("frames")) && p.frame_hover && p.frame_hover.transform)
                    for (g in s) s.hasOwnProperty(g) && p.frame_hover.transform.hasOwnProperty(g) && delete s[g];
                if ("IFRAME" == h[0].nodeName && "html" === o.gA(h[0], "layertype") && (u = "slide" == e.basealign ? o[f].width : o.iWA(f, b), m = "slide" == e.basealign ? o[f].height : o.iHE(f), s.width = !jQuery.isNumeric(e.width) && e.width.indexOf("%") >= 0 ? !x._isstatic || x._incolumn || x._ingroup ? e.width : u * parseInt(e.width, 0) / 100 : R(e.width, L, "auto", u, "auto"), s.height = !jQuery.isNumeric(e.height) && e.height.indexOf("%") >= 0 ? !x._isstatic || x._incolumn || x._ingroup ? e.height : m * parseInt(e.height, 0) / 100 : R(e.height, L, "auto", u, "auto")), _ = jQuery.extend(!0, _, s), "rekursive" != v) {
                    u = "slide" == e.basealign ? o[f].width : o.iWA(f, b), m = "slide" == e.basealign ? o[f].height : o.iHE(f);
                    var A = !jQuery.isNumeric(e.width) && e.width.indexOf("%") >= 0 ? !x._isstatic || x._incolumn || x._ingroup ? e.width : u * parseInt(e.width, 0) / 100 : R(e.width, L, "auto", u, "auto"),
                        z = !jQuery.isNumeric(e.height) && e.height.indexOf("%") >= 0 ? !x._isstatic || x._incolumn || x._ingroup ? e.height : m * parseInt(e.height, 0) / 100 : R(e.height, L, "auto", u, "auto"),
                        C = {
                            maxWidth: R(e.maxWidth, L, "none", u, "none"),
                            maxHeight: R(e.maxHeight, L, "none", m, "none"),
                            minWidth: R(e.minWidth, L, "0px", u, 0),
                            minHeight: R(e.minHeight, L, "0px", m, 0),
                            height: z,
                            width: A,
                            overwrite: "auto"
                        };
                    if (1 == x.heightSetByVideo && (C.height = x.vidOBJ.height), x._incolumn) {
                        for (T = jQuery.extend(!0, T, {
                                minWidth: A,
                                maxWidth: A,
                                float: e.float,
                                clear: e.clear
                            }), t = 0; t < 4; t++) void 0 !== e["margin" + i[t]] && (T["margin" + i[t]] = e["margin" + i[t]] * L + "px");
                        O.width = "100%", void 0 !== e.display && "inline-block" !== e.display || (w = {
                            width: "100%"
                        }), C.width = !jQuery.isNumeric(e.width) && e.width.indexOf("%") >= 0 ? "100%" : A, "image" === x.type && tpGS.gsap.set(x.img, {
                            width: C.width
                        })
                    } else !jQuery.isNumeric(e.width) && e.width.indexOf("%") >= 0 && (T.minWidth = "slide" === x.basealign || !0 === x._ingroup ? A : o.iWA(f, b) * o[f].bw * parseInt(A) / 100 + "px", O.width = "100%", w.width = "100%");
                    if (!jQuery.isNumeric(e.height) && e.height.indexOf("%") >= 0 && (T.minHeight = "slide" === x.basealign || !0 === x._ingroup ? z : o.iHE(f) * (o[f].keepBPHeight || o[f].currentRowsHeight > o[f].gridheight[o[f].level] ? 1 : o[f].bw) * parseInt(z) / 100 + "px", O.height = "100%", w.height = "100%"), x._isnotext || (C.whiteSpace = e.whiteSpace, C.textAlign = e.textAlign, C.textDecoration = e.textDecoration), "npc" != e.color && void 0 !== e.color && (C.color = e.color), x._ingroup && (x._groupw = C.minWidth, x._grouph = C.minHeight), "row" === x.type && (jQuery.isNumeric(C.minHeight) || C.minHeight.indexOf("px") >= 0) && "0px" !== C.minHeight && 0 !== C.minHeight && "0" !== C.minHeight && "none" !== C.minHeight ? C.height = C.minHeight : "row" === x.type && (C.height = "auto"), x._isstatic && x.elementHovered && (p = h.data("frames")) && p.frame_hover && p.frame_hover.transform)
                        for (g in C) C.hasOwnProperty(g) && p.frame_hover.transform.hasOwnProperty(g) && delete C[g];
                    "group" !== x.type && "row" !== x.type && "column" !== x.type && (!jQuery.isNumeric(C.width) && C.width.indexOf("%") >= 0 && (C.width = "100%"), !jQuery.isNumeric(C.height) && C.height.indexOf("%") >= 0 && (C.height = "100%")), x._isgroup && (!jQuery.isNumeric(C.width) && C.width.indexOf("%") >= 0 && (C.width = "100%"), T.height = C.height), _ = jQuery.extend(!0, _, C), null != x.svg_src && void 0 !== x.svgI && ("string" == typeof x.svgI.fill && (x.svgI.fill = [x.svgI.fill]), x.svgTemp = jQuery.extend(!0, {}, x.svgI), x.svgTemp.fill = x.svgTemp.fill[o[f].level], tpGS.gsap.set(x.svg, x.svgTemp), tpGS.gsap.set(x.svgPath, {
                        fill: x.svgI.fill[o[f].level]
                    }))
                }
                if ("row" === x.type)
                    for (t = 0; t < 4; t++) void 0 !== e["margin" + i[t]] && (T["padding" + i[t]] = e["margin" + i[t]] * L + "px");
                if ("column" === x.type && x.cbg && x.cbg.length > 0) {
                    for (void 0 !== x.cbg_img_s && (x.cbg[0].style.backgroundSize = x.cbg_img_s), s = {}, "" !== x.styleProps.cursor && (s.cursor = x.styleProps.cursor), "" !== x.cbg_set && "transparent" !== x.cbg_set && (s.backgroundColor = x.cbg_set), "" !== x.cbg_img && "none" !== x.cbg_img && (s.backgroundImage = x.cbg_img, "" !== x.cbg_img_r && (s.backgroundRepeat = x.cbg_img_r), "" !== x.cbg_img_p && (s.backgroundPosition = x.cbg_img_p)), "" !== x.cbg_o && void 0 !== x.cbg_o && (s.opacity = x.cbg_o), t = 0; t < 4; t++) void 0 !== e.borderStyle && "none" !== e.borderStyle && (void 0 !== e["border" + i[t] + "Width"] && (s["border" + i[t] + "Width"] = Math.round(parseInt(e["border" + i[t] + "Width"]) * L) + "px"), void 0 !== e["border" + i[t] + "Color"] && (s["border" + i[t] + "Color"] = e["border" + i[t] + "Color"])), e["border" + a[t] + "Radius"] && (s["border" + a[t] + "Radius"] = e["border" + a[t] + "Radius"]);
                    for (void 0 !== e.borderStyle && "none" !== e.borderStyle && (s.borderStyle = e.borderStyle), (n = JSON.stringify(s)) !== o[f].emptyObject && n !== x.caches.cbgS && tpGS.gsap.set(x.cbg, s), x.caches.cbgS = n, s = {}, t = 0; t < 4; t++) S["margin" + i[t]] && (s[r[t]] = S["margin" + i[t]] * L + "px");
                    (n = JSON.stringify(s)) !== o[f].emptyObject && n !== x.caches.cbgmaskS && (tpGS.gsap.set(x.cbgmask, s), x.caches.cbgmaskS = n)
                }
                "auto" === T.maxWidth && (T.maxWidth = "inherit"), "auto" === T.maxHeight && (T.maxHeight = "inherit"), "auto" === w.maxWidth && (w.maxWidth = "inherit"), "auto" === w.maxHeight && (w.maxHeight = "inherit"), "auto" === O.maxWidth && (O.maxWidth = "inherit"), "auto" === O.maxHeight && (O.maxHeight = "inherit"), void 0 !== x.vidOBJ && (_.width = x.vidOBJ.width, _.height = x.vidOBJ.height), void 0 !== x.OBJUPD.lppmOBJ && (void 0 !== x.OBJUPD.lppmOBJ.minWidth && (O.minWidth = x.OBJUPD.lppmOBJ.minWidth, w.minWidth = x.OBJUPD.lppmOBJ.minWidth, T.minWidth = x.OBJUPD.lppmOBJ.minWidth), void 0 !== x.OBJUPD.lppmOBJ.minHeight && (O.minHeight = x.OBJUPD.lppmOBJ.minHeight, w.minHeight = x.OBJUPD.lppmOBJ.minHeight, T.minHeight = x.OBJUPD.lppmOBJ.minHeight)), n = JSON.stringify(_), l = JSON.stringify(O), d = JSON.stringify(w), c = JSON.stringify(T), void 0 === x.imgOBJ || void 0 !== x.caches.imgOBJ && x.caches.imgOBJ.width === x.imgOBJ.width && x.caches.imgOBJ.height === x.imgOBJ.height && x.caches.imgOBJ.left === x.imgOBJ.left && x.caches.imgOBJ.right === x.imgOBJ.right && x.caches.imgOBJ.top === x.imgOBJ.top && x.caches.imgOBJ.bottom === x.imgOBJ.bottom || (x.caches.imgOBJ = jQuery.extend(!0, {}, x.imgOBJ), x.imgOBJ.position = "relative", tpGS.gsap.set(x.img, x.imgOBJ)), void 0 === x.mediaOBJ || void 0 !== x.caches.mediaOBJ && x.caches.mediaOBJ.width === x.mediaOBJ.width && x.caches.mediaOBJ.height === x.mediaOBJ.height && x.caches.mediaOBJ.display === x.mediaOBJ.display || (x.caches.mediaOBJ = jQuery.extend(!0, {}, x.mediaOBJ), x.media.css(x.mediaOBJ)), n != o[f].emptyObject && n != x.caches.LOBJ && (tpGS.gsap.set(h, _), x.caches.LOBJ = n), l != o[f].emptyObject && l != x.caches.LPOBJ && (tpGS.gsap.set(x.lp, O), x.caches.LPOBJ = l), d != o[f].emptyObject && d != x.caches.MOBJ && (tpGS.gsap.set(x.m, w), x.caches.MOBJ = d), c != o[f].emptyObject && c != x.caches.POBJ && (tpGS.gsap.set(x.p, T), x.caches.POBJ = c, x.caches.POBJ_LEFT = T.left, x.caches.POBJ_TOP = T.top)
            }
        },
        C = function(e) {
            var t = {
                l: "none",
                lw: 10,
                r: "none",
                rw: 10
            };
            for (var i in e = e.split(";"))
                if (e.hasOwnProperty(i)) {
                    var a = e[i].split(":");
                    switch (a[0]) {
                        case "l":
                            t.l = a[1];
                            break;
                        case "r":
                            t.r = a[1];
                            break;
                        case "lw":
                            t.lw = a[1];
                            break;
                        case "rw":
                            t.rw = a[1]
                    }
                }
            return "polygon(" + P(t.l, 0, parseFloat(t.lw)) + "," + P(t.r, 100, 100 - parseFloat(t.rw), !0) + ")"
        },
        P = function(e, t, i, a) {
            var r;
            switch (e) {
                case "none":
                    r = t + "% 100%," + t + "% 0%";
                    break;
                case "top":
                    r = i + "% 100%," + t + "% 0%";
                    break;
                case "middle":
                    r = i + "% 100%," + t + "% 50%," + i + "% 0%";
                    break;
                case "bottom":
                    r = t + "% 100%," + i + "% 0%";
                    break;
                case "two":
                    r = i + "% 100%," + t + "% 75%," + i + "% 50%," + t + "% 25%," + i + "% 0%";
                    break;
                case "three":
                    r = t + "% 100%," + i + "% 75%," + t + "% 50%," + i + "% 25%," + t + "% 0%";
                    break;
                case "four":
                    r = t + "% 100%," + i + "% 87.5%," + t + "% 75%," + i + "% 62.5%," + t + "% 50%," + i + "% 37.5%," + t + "% 25%," + i + "% 12.5%," + t + "% 0%";
                    break;
                case "five":
                    r = t + "% 100%," + i + "% 90%," + t + "% 80%," + i + "% 70%," + t + "% 60%," + i + "% 50%," + t + "% 40%," + i + "% 30%," + t + "% 20%," + i + "% 10%," + t + "% 0%"
            }
            if (a) {
                var o = r.split(",");
                for (var i in r = "", o) o.hasOwnProperty(i) && (r += o[o.length - 1 - i] + (i < o.length - 1 ? "," : ""))
            }
            return r
        }
}(jQuery),
function(e) {
    "use strict";
    var t = jQuery.fn.revolution,
        i = t.is_mobile();

    function a(e, i) {
        var a = new Object({
            single: ".tp-" + i,
            c: t[e].cpar.find(".tp-" + i + "s")
        });
        return a.mask = a.c.find(".tp-" + i + "-mask"), a.wrap = a.c.find(".tp-" + i + "s-inner-wrapper"), a
    }
    jQuery.extend(!0, t, {
        hideUnHideNav: function(e) {
            window.requestAnimationFrame(function() {
                var i = !1;
                p(t[e].navigation.arrows) && (i = S(t[e].navigation.arrows, e, i)), p(t[e].navigation.bullets) && (i = S(t[e].navigation.bullets, e, i)), p(t[e].navigation.thumbnails) && (i = S(t[e].navigation.thumbnails, e, i)), p(t[e].navigation.tabs) && (i = S(t[e].navigation.tabs, e, i)), k(e), i && t.manageNavigation(e)
            })
        },
        resizeThumbsTabs: function(e, i) {
            if (void 0 !== t[e] && t[e].navigation.use && (t[e].navigation && t[e].navigation.bullets.enable || t[e].navigation && t[e].navigation.tabs.enable || t[e].navigation && t[e].navigation.thumbnails.enable)) {
                var a = (t.winW - 480) / 500,
                    r = tpGS.gsap.timeline(),
                    s = t[e].navigation.tabs,
                    n = t[e].navigation.thumbnails,
                    l = t[e].navigation.bullets;
                if (r.pause(), a = a > 1 ? 1 : a < 0 ? 0 : a, p(s) && (i || s.width > s.min_width) && o(a, r, t[e].c, s, t[e].slideamount, "tab"), p(n) && (i || n.width > n.min_width) && o(a, r, t[e].c, n, t[e].slideamount, "thumb"), p(l) && i) {
                    var d = t[e].c.find(".tp-bullets");
                    d.find(".tp-bullet").each(function(e) {
                        var t = jQuery(this),
                            i = e + 1,
                            a = t.outerWidth() + parseInt(void 0 === l.space ? 0 : l.space, 0),
                            r = t.outerHeight() + parseInt(void 0 === l.space ? 0 : l.space, 0);
                        "vertical" === l.direction ? (t.css({
                            top: (i - 1) * r + "px",
                            left: "0px"
                        }), d.css({
                            height: (i - 1) * r + t.outerHeight(),
                            width: t.outerWidth()
                        })) : (t.css({
                            left: (i - 1) * a + "px",
                            top: "0px"
                        }), d.css({
                            width: (i - 1) * a + t.outerWidth(),
                            height: t.outerHeight()
                        }))
                    })
                }
                r.play(), k(e)
            }
            return !0
        },
        updateNavIndexes: function(e) {
            var i = t[e].c;

            function a(e) {
                i.find(e).lenght > 0 && i.find(e).each(function(e) {
                    jQuery(this).data("liindex", e)
                })
            }
            a("rs-tab"), a("rs-bullet"), a("rs-thumb"), t.resizeThumbsTabs(e, !0), t.manageNavigation(e)
        },
        manageNavigation: function(e, i) {
            if (t[e].navigation.use) {
                void 0 === t[e].navOutterOffsets && (t[e].navOutterOffsets = t.getHorizontalOffset(t[e].c, "all"));
                var a = t[e].navOutterOffsets.left,
                    o = t[e].navOutterOffsets.right;
                p(t[e].navigation.bullets) && ("fullscreen" != t[e].sliderLayout && "fullwidth" != t[e].sliderLayout && (t[e].navigation.bullets.h_offset_old = void 0 === t[e].navigation.bullets.h_offset_old ? parseInt(t[e].navigation.bullets.h_offset, 0) : t[e].navigation.bullets.h_offset_old, t[e].navigation.bullets.h_offset = "center" === t[e].navigation.bullets.h_align ? t[e].navigation.bullets.h_offset_old + a / 2 - o / 2 : t[e].navigation.bullets.h_offset_old + a - o), _(t[e].navigation.bullets.c, t[e].navigation.bullets, e)), p(t[e].navigation.thumbnails) && _(t[e].navigation.thumbnails, e), p(t[e].navigation.tabs) && _(t[e].navigation.tabs, e), p(t[e].navigation.arrows) && ("fullscreen" != t[e].sliderLayout && "fullwidth" != t[e].sliderLayout && (t[e].navigation.arrows.left.h_offset_old = void 0 === t[e].navigation.arrows.left.h_offset_old ? parseInt(t[e].navigation.arrows.left.h_offset, 0) : t[e].navigation.arrows.left.h_offset_old, t[e].navigation.arrows.left.h_offset = "right" === t[e].navigation.arrows.left.h_align ? t[e].navigation.arrows.left.h_offset_old + o : t[e].navigation.arrows.left.h_offset_old + a, t[e].navigation.arrows.right.h_offset_old = void 0 === t[e].navigation.arrows.right.h_offset_old ? parseInt(t[e].navigation.arrows.right.h_offset, 0) : t[e].navigation.arrows.right.h_offset_old, t[e].navigation.arrows.right.h_offset = "right" === t[e].navigation.arrows.right.h_align ? t[e].navigation.arrows.right.h_offset_old + o : t[e].navigation.arrows.right.h_offset_old + a), _(t[e].navigation.arrows.left, e), _(t[e].navigation.arrows.right, e)), !1 !== i && (p(t[e].navigation.thumbnails) && r(t[e].navigation.thumbnails, e), p(t[e].navigation.tabs) && r(t[e].navigation.tabs, e))
            }
        },
        showFirstTime: function(e) {
            u(e), jQuery.isEmptyObject(t[e].caches.contWidthManager) && t.callContWidthManager(e), t.hideUnHideNav(e)
        },
        selectNavElement: function(e, i, a, r) {
            for (var o = t[e].cpar[0].getElementsByClassName(a), s = 0; s < o.length; s++) t.gA(o[s], "key") === i ? (o[s].classList.add("selected"), void 0 !== r && r()) : o[s].classList.remove("selected")
        },
        transferParams: function(e, t) {
            if (void 0 !== t)
                for (var i in t.params) e = e.replace(t.params[i].from, t.params[i].to);
            return e
        },
        updateNavElementContent: function(e, i, a, o, s) {
            if (void 0 !== t[e].pr_next_key || void 0 !== t[e].pr_active_key) {
                var n = void 0 === t[e].pr_next_key ? void 0 === t[e].pr_cache_pr_next_key ? t[e].pr_active_key : t[e].pr_cache_pr_next_key : t[e].pr_next_key,
                    l = t.gA(t[e].slides[n], "key"),
                    d = 0,
                    c = !1;
                for (var p in a.enable && t.selectNavElement(e, l, "tp-bullet"), o.enable && t.selectNavElement(e, l, "tp-thumb", function() {
                        r(o, e)
                    }), s.enable && t.selectNavElement(e, l, "tp-tab", function() {
                        r(s, e)
                    }), t[e].thumbs) d = !0 === c ? d : p, c = t[e].thumbs[p].id === l || p == l || c;
                var g = (d = parseInt(d, 0)) > 0 ? d - 1 : t[e].slideamount - 1,
                    u = d + 1 == t[e].slideamount ? 0 : d + 1;
                if (!0 === i.enable && i.pi !== g && i.ni !== u) {
                    if (i.pi = g, i.ni = u, i.left.c[0].innerHTML = t.transferParams(i.tmp, t[e].thumbs[g]), u > t[e].slideamount) return;
                    i.right.c[0].innerHTML = t.transferParams(i.tmp, t[e].thumbs[u]), i.right.iholder = i.right.c.find(".tp-arr-imgholder"), i.left.iholder = i.left.c.find(".tp-arr-imgholder"), i.rtl ? (void 0 !== i.left.iholder[0] && tpGS.gsap.set(i.left.iholder, {
                        backgroundImage: "url(" + t[e].thumbs[u].src + ")"
                    }), void 0 !== t[e].thumbs[g] && void 0 !== i.right.iholder[0] && tpGS.gsap.set(i.right.iholder, {
                        backgroundImage: "url(" + t[e].thumbs[g].src + ")"
                    })) : (void 0 !== t[e].thumbs[g] && void 0 !== i.left.iholder[0] && tpGS.gsap.set(i.left.iholder, {
                        backgroundImage: "url(" + t[e].thumbs[g].src + ")"
                    }), void 0 !== i.right.iholder[0] && tpGS.gsap.set(i.right.iholder, {
                        backgroundImage: "url(" + t[e].thumbs[u].src + ")"
                    }))
                }
            }
        },
        createNavigation: function(e) {
            var r = t[e].navigation.arrows,
                o = t[e].navigation.bullets,
                l = t[e].navigation.thumbnails,
                m = t[e].navigation.tabs,
                f = p(r),
                y = p(o),
                b = p(l),
                k = p(m);
            for (var S in s(e), n(e), f && (v(r, e), r.c = t[e].cpar.find(".tparrows")), t[e].slides)
                if (t[e].slides.hasOwnProperty(S) && "true" != t.gA(t[e].slides[S], "not_in_nav")) {
                    var L = jQuery(t[e].slides[t[e].slides.length - 1 - S]),
                        T = jQuery(t[e].slides[S]);
                    y && (t[e].navigation.bullets.rtl ? w(t[e].c, o, L, e) : w(t[e].c, o, T, e)), b && (t[e].navigation.thumbnails.rtl ? x(t[e].c, l, L, "tp-thumb", e) : x(t[e].c, l, T, "tp-thumb", e)), k && (t[e].navigation.tabs.rtl ? x(t[e].c, m, L, "tp-tab", e) : x(t[e].c, m, T, "tp-tab", e))
                }
            y && _(o, e), b && _(l, e), k && _(m, e), (b || k) && t.callContWidthManager(e), t[e].navigation.createNavigationDone = !0, b && jQuery.extend(!0, l, a(e, "thumb")), k && jQuery.extend(!0, m, a(e, "tab")), t[e].c.bind("revolution.slide.onafterswap revolution.nextslide.waiting", function() {
                t.updateNavElementContent(e, r, o, l, m)
            }), c(r), c(o), c(l), c(m), t[e].cpar.on("mouseenter mousemove", function(a) {
                void 0 !== a.target && void 0 !== a.target.className && "string" == typeof a.target.className && a.target.className.indexOf("rs-waction") >= 0 || !0 !== t[e].tpMouseOver && t[e].firstSlideAvailable && (t[e].tpMouseOver = !0, u(e), i && !0 !== t[e].someNavIsDragged && (g(t[e].hideAllNavElementTimer), t[e].hideAllNavElementTimer = setTimeout(function() {
                    t[e].tpMouseOver = !1, h(e)
                }, 150)))
            }), t[e].cpar.on("mouseleave ", function() {
                t[e].tpMouseOver = !1, h(e)
            }), (b || k || "carousel" === t[e].sliderType || t[e].navigation.touch.touchOnDesktop || t[e].navigation.touch.touchenabled && i) && d(e), t[e].navigation.initialised = !0, t.updateNavElementContent(e, r, o, l, m), t.showFirstTime(e)
        }
    });
    var r = function(e, i) {
            if (void 0 !== e && null != e.mask) {
                var a = "vertical" === e.direction ? e.mask.find(e.single).first().outerHeight(!0) + e.space : e.mask.find(e.single).first().outerWidth(!0) + e.space,
                    r = "vertical" === e.direction ? e.mask.height() : e.mask.width(),
                    o = e.mask.find(e.single + ".selected").data("liindex");
                o = (o = void 0 === (o = e.rtl ? t[i].slideamount - o : o) ? 0 : o) > 0 && 1 === t[i].sdir && e.visibleAmount > 1 ? o - 1 : o;
                var s = r / a,
                    n = "vertical" === e.direction ? e.mask.height() : e.mask.width(),
                    l = 0 - o * a,
                    d = "vertical" === e.direction ? e.wrap.height() : e.wrap.width(),
                    c = l < 0 - (d - n) ? 0 - (d - n) : l,
                    p = t.gA(e.wrap[0], "offset");
                p = void 0 === p ? 0 : p, s > 2 && (c = l - (p + a) <= 0 ? l - (p + a) < 0 - a ? p : c + a : c, c = l - a + p + r < a && l + (Math.round(s) - 2) * a < p ? l + (Math.round(s) - 2) * a : c), c = "vertical" !== e.direction && e.mask.width() >= e.wrap.width() || "vertical" === e.direction && e.mask.height() >= e.wrap.height() ? 0 : c < 0 - (d - n) ? 0 - (d - n) : c > 0 ? 0 : c, e.c.hasClass("dragged") || ("vertical" === e.direction ? e.wrap.data("tmmove", tpGS.gsap.to(e.wrap, .5, {
                    top: c + "px",
                    ease: "power3.inOut"
                })) : e.wrap.data("tmmove", tpGS.gsap.to(e.wrap, .5, {
                    left: c + "px",
                    ease: "power3.inOut"
                })), e.wrap.data("offset", c))
            }
        },
        o = function(e, t, i, a, r, o) {
            var s = i.parent().find(".tp-" + o + "s"),
                n = s.find(".tp-" + o + "s-inner-wrapper"),
                l = s.find(".tp-" + o + "-mask"),
                d = a.width * e < a.min_width ? a.min_width : Math.round(a.width * e),
                c = Math.round(d / a.width * a.height),
                p = "vertical" === a.direction ? d : d * r + a.space * (r - 1),
                g = "vertical" === a.direction ? c * r + a.space * (r - 1) : c,
                u = "vertical" === a.direction ? {
                    width: d + "px"
                } : {
                    height: c + "px"
                };
            t.add(tpGS.gsap.set(s, u)), t.add(tpGS.gsap.set(n, {
                width: p + "px",
                height: g + "px"
            })), t.add(tpGS.gsap.set(l, {
                width: p + "px",
                height: g + "px"
            }));
            var m = n.find(".tp-" + o);
            return m && jQuery.each(m, function(e, i) {
                "vertical" === a.direction ? t.add(tpGS.gsap.set(i, {
                    top: e * (c + parseInt(void 0 === a.space ? 0 : a.space, 0)),
                    width: d + "px",
                    height: c + "px"
                })) : "horizontal" === a.direction && t.add(tpGS.gsap.set(i, {
                    left: e * (d + parseInt(void 0 === a.space ? 0 : a.space, 0)),
                    width: d + "px",
                    height: c + "px"
                }))
            }), t
        },
        s = function(e) {
            !0 === t[e].navigation.keyboardNavigation && t.document.keydown(function(i) {
                if ("horizontal" == t[e].navigation.keyboard_direction && 39 == i.keyCode || "vertical" == t[e].navigation.keyboard_direction && 40 == i.keyCode) {
                    if (void 0 !== t[e].keydown_time_stamp && (new Date).getTime() - t[e].keydown_time_stamp < 1e3) return;
                    t[e].sc_indicator = "arrow", t[e].sc_indicator_dir = 0, "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, 1, "carousel" === t[e].sliderType)
                }
                if ("horizontal" == t[e].navigation.keyboard_direction && 37 == i.keyCode || "vertical" == t[e].navigation.keyboard_direction && 38 == i.keyCode) {
                    if (void 0 !== t[e].keydown_time_stamp && (new Date).getTime() - t[e].keydown_time_stamp < 1e3) return;
                    t[e].sc_indicator = "arrow", t[e].sc_indicator_dir = 1, "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, -1, "carousel" === t[e].sliderType)
                }
                t[e].keydown_time_stamp = (new Date).getTime()
            })
        },
        n = function(e) {
            if (!0 === t[e].navigation.mouseScrollNavigation || "on" === t[e].navigation.mouseScrollNavigation || "carousel" === t[e].navigation.mouseScrollNavigation) {
                t[e].isIEEleven = !!navigator.userAgent.match(/Trident.*rv\:11\./), t[e].isSafari = !!navigator.userAgent.match(/safari/i), t[e].ischrome = !!navigator.userAgent.match(/chrome/i);
                var i = t[e].ischrome ? -49 : t[e].isIEEleven || t[e].isSafari ? -9 : navigator.userAgent.match(/mozilla/i) ? -29 : -49,
                    a = t[e].ischrome ? 49 : t[e].isIEEleven || t[e].isSafari ? 9 : navigator.userAgent.match(/mozilla/i) ? 29 : 49;
                t[e].c.on("mousewheel DOMMouseScroll", function(r) {
                    var o, s, n, l, d, c = (o = r.originalEvent, s = 0, n = 0, l = 0, d = 0, "detail" in o && (n = o.detail), "wheelDelta" in o && (n = -o.wheelDelta / 120), "wheelDeltaY" in o && (n = -o.wheelDeltaY / 120), "wheelDeltaX" in o && (s = -o.wheelDeltaX / 120), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (s = n, n = 0), l = 1 * s, d = 1 * n, "deltaY" in o && (d = o.deltaY), "deltaX" in o && (l = o.deltaX), (l || d) && o.deltaMode && (o.deltaMode, l *= 1, d *= 1), l && !s && (s = l < 1 ? -1 : 1), d && !n && (n = d < 1 ? -1 : 1), ((d = navigator.userAgent.match(/mozilla/i) ? 10 * d : d) > 300 || d < -300) && (d /= 10), {
                            spinX: s,
                            spinY: n,
                            pixelX: l,
                            pixelY: d
                        }),
                        p = !0,
                        g = 0 == t[e].pr_active_key || 0 == t[e].pr_processing_key,
                        u = t[e].pr_active_key == t[e].slideamount - 1 || t[e].pr_processing_key == t[e].slideamount - 1;
                    if ("carousel" === t[e].sliderType && !1 === t[e].carousel.snap) p = !1, t.swipeAnimate({
                        id: e,
                        to: t[e].carousel.slide_offset + 5 * c.pixelY,
                        direction: c.pixelY < 0 ? "left" : "right",
                        easing: "power2.out",
                        phase: "move"
                    });
                    else {
                        if (t[e].isSafari) {
                            var m = c.pixelY < 0 ? -1 : 1;
                            if (void 0 !== t[e].doubleScrollEventTimeStamp && r.timeStamp - t[e].doubleScrollEventTimeStamp < 750 && t[e].doubleScrollEventDir === m) return void r.preventDefault(r);
                            t[e].doubleScrollEventTimeStamp = r.timeStamp, t[e].doubleScrollEventDir = m
                        }
                        "carousel" == t[e].navigation.mouseScrollNavigation && (g = u = !1), void 0 === t[e].pr_processing_key ? c.pixelY < i ? (g || (t[e].sc_indicator = "arrow", "reverse" !== t[e].navigation.mouseScrollReverse && (t[e].sc_indicator_dir = 1, "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, -1, "carousel" === t[e].sliderType)), p = !1), u || (t[e].sc_indicator = "arrow", "reverse" === t[e].navigation.mouseScrollReverse && (t[e].sc_indicator_dir = 0, "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, 1, "carousel" === t[e].sliderType)), p = !1)) : c.pixelY > a && (u || (t[e].sc_indicator = "arrow", "reverse" !== t[e].navigation.mouseScrollReverse && (t[e].sc_indicator_dir = 0, "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, 1, "carousel" === t[e].sliderType)), p = !1), g || (t[e].sc_indicator = "arrow", "reverse" === t[e].navigation.mouseScrollReverse && (t[e].sc_indicator_dir = 1, "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, -1, "carousel" === t[e].sliderType)), p = !1)) : p = !1;
                        var h = t[e].c.offset().top - jQuery("body").scrollTop(),
                            f = h + t[e].c.height();
                        "carousel" != t[e].navigation.mouseScrollNavigation ? ("reverse" !== t[e].navigation.mouseScrollReverse && (h > 0 && c.pixelY > 0 || f < t.getWinH(e) && c.pixelY < 0) && (p = !0), "reverse" === t[e].navigation.mouseScrollReverse && (h < 0 && c.pixelY < 0 || f > t.getWinH(e) && c.pixelY > 0) && (p = !0)) : p = !1
                    }
                    return p ? void 0 : (r.preventDefault(r), !1)
                })
            }
        },
        l = function(e, t) {
            var a = !1;
            for (var r in (void 0 === t.path || i) && (a = function(e, t) {
                    for (; e && e !== document; e = e.parentNode)
                        if (e.tagName === t) return e;
                    return !1
                }(t.target, e)), t.path) t.path.hasOwnProperty(r) && t.path[r].tagName === e && (a = !0);
            return a
        },
        d = function(e) {
            var a = t[e].carousel,
                r = t.is_android();
            jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), t[e].navigation.touch = void 0 === t[e].navigation.touch ? {} : t[e].navigation.touch, t[e].navigation.touch.swipe_direction = void 0 === t[e].navigation.touch.swipe_direction ? "horizontal" : t[e].navigation.touch.swipe_direction, jQuery(".rs-nav-element").rsswipe({
                allowPageScroll: "vertical",
                triggerOnTouchLeave: !0,
                treshold: t[e].navigation.touch.swipe_treshold,
                fingers: t[e].navigation.touch.swipe_min_touches > 5 ? 1 : t[e].navigation.touch.swipe_min_touches,
                excludedElements: "button, input, select, textarea, .noSwipe, .rs-waction",
                tap: function(e, t) {
                    if (void 0 !== t) var i = jQuery(t).closest("rs-thumb");
                    void 0 !== i && i.length > 0 ? i.trigger("click") : (i = jQuery(t).closest("rs-tab")).length > 0 ? i.trigger("click") : (i = jQuery(t).closest("rs-bullet")).length > 0 && i.trigger("click")
                },
                swipeStatus: function(i, o, s, n, d, c, p) {
                    if ("start" !== o && "move" !== o && "end" !== o && "cancel" != o) return !0;
                    var u = l("RS-THUMB", i),
                        h = l("RS-TAB", i);
                    !1 === u && !1 === h && !0 !== (u = "RS-THUMBS-WRAP" === i.target.tagName || "RS-THUMBS" === i.target.tagName || i.target.className.indexOf("tp-thumb-mask") >= 0) && (h = "RS-TABS-WRAP" === i.target.tagName || "RS-TABS" === i.target.tagName || i.target.className.indexOf("tp-tab-mask") >= 0);
                    var f = "start" === o ? 0 : r ? p[0].end.x - p[0].start.x : i.pageX - a.screenX,
                        v = "start" === o ? 0 : r ? p[0].end.y - p[0].start.y : i.pageY - a.screenY,
                        y = u ? ".tp-thumbs" : ".tp-tabs",
                        b = u ? ".tp-thumb-mask" : ".tp-tab-mask",
                        _ = u ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                        w = u ? ".tp-thumb" : ".tp-tab",
                        x = u ? t[e].navigation.thumbnails : t[e].navigation.tabs,
                        k = t[e].cpar.find(b),
                        S = k.find(_),
                        L = x.direction,
                        T = "vertical" === L ? S.height() : S.width(),
                        O = "vertical" === L ? k.height() : k.width(),
                        A = "vertical" === L ? k.find(w).first().outerHeight(!0) + x.space : k.find(w).first().outerWidth(!0) + x.space,
                        R = void 0 === S.data("offset") ? 0 : parseInt(S.data("offset"), 0),
                        I = 0;
                    switch (o) {
                        case "start":
                            "vertical" === L && i.preventDefault(), a.screenX = r ? p[0].end.x : i.pageX, a.screenY = r ? p[0].end.y : i.pageY, t[e].cpar.find(y).addClass("dragged"), R = "vertical" === L ? S.position().top : S.position().left, S.data("offset", R), S.data("tmmove") && S.data("tmmove").pause(), t[e].someNavIsDragged = !0, m(e);
                            break;
                        case "move":
                            if (T <= O) return !1;
                            I = (I = R + ("vertical" === L ? v : f)) > 0 ? "horizontal" === L ? I - S.width() * (I / S.width() * I / S.width()) : I - S.height() * (I / S.height() * I / S.height()) : I;
                            var z = "vertical" === L ? 0 - (S.height() - k.height()) : 0 - (S.width() - k.width());
                            I = I < z ? "horizontal" === L ? I + S.width() * (I - z) / S.width() * (I - z) / S.width() : I + S.height() * (I - z) / S.height() * (I - z) / S.height() : I, "vertical" === L ? tpGS.gsap.set(S, {
                                top: I + "px"
                            }) : tpGS.gsap.set(S, {
                                left: I + "px"
                            }), g(t[e].hideAllNavElementTimer);
                            break;
                        case "end":
                        case "cancel":
                            return I = R + ("vertical" === L ? v : f), I = (I = "vertical" === L ? I < 0 - (S.height() - k.height()) ? 0 - (S.height() - k.height()) : I : I < 0 - (S.width() - k.width()) ? 0 - (S.width() - k.width()) : I) > 0 ? 0 : I, I = Math.abs(n) > A / 10 ? n <= 0 ? Math.floor(I / A) * A : Math.ceil(I / A) * A : n < 0 ? Math.ceil(I / A) * A : Math.floor(I / A) * A, I = (I = "vertical" === L ? I < 0 - (S.height() - k.height()) ? 0 - (S.height() - k.height()) : I : I < 0 - (S.width() - k.width()) ? 0 - (S.width() - k.width()) : I) > 0 ? 0 : I, "vertical" === L ? tpGS.gsap.to(S, .5, {
                                top: I + "px",
                                ease: "power3.out"
                            }) : tpGS.gsap.to(S, .5, {
                                left: I + "px",
                                ease: "power3.out"
                            }), I = I || ("vertical" === L ? S.position().top : S.position().left), S.data("offset", I), S.data("distance", n), t[e].cpar.find(y).removeClass("dragged"), t[e].someNavIsDragged = !1, !0
                    }
                }
            }), ("carousel" !== t[e].sliderType && (i && t[e].navigation.touch.touchenabled || !0 !== i && t[e].navigation.touch.touchOnDesktop) || "carousel" === t[e].sliderType && (i && t[e].navigation.touch.mobileCarousel || !0 !== i && t[e].navigation.touch.desktopCarousel)) && t[e].c.rsswipe({
                allowPageScroll: "vertical",
                triggerOnTouchLeave: !0,
                treshold: t[e].navigation.touch.swipe_treshold,
                fingers: t[e].navigation.touch.swipe_min_touches > 5 ? 1 : t[e].navigation.touch.swipe_min_touches,
                excludedElements: "label, button, input, select, textarea, .noSwipe, .rs-nav-element, .rs-waction",
                swipeStatus: function(o, s, n, l, d, c, p) {
                    var g = "start" === s ? 0 : r ? p[0].end.x - p[0].start.x : o.pageX - a.screenX;
                    "start" === s || (r ? (p[0].end.x, p[0].start.y) : (o.pageY, a.screenY));
                    if (!("carousel" === t[e].sliderType && t[e].carousel.wrapwidth > t[e].carousel.maxwidth && "center" !== t[e].carousel.horizontal_align)) {
                        if ("carousel" !== t[e].sliderType) {
                            if ("end" == s) {
                                if (t[e].sc_indicator = "arrow", "horizontal" == t[e].navigation.touch.swipe_direction && "left" == n || "vertical" == t[e].navigation.touch.swipe_direction && "up" == n) return t[e].sc_indicator_dir = 0, t.callingNewSlide(e, 1), !1;
                                if ("horizontal" == t[e].navigation.touch.swipe_direction && "right" == n || "vertical" == t[e].navigation.touch.swipe_direction && "down" == n) return t[e].sc_indicator_dir = 1, t.callingNewSlide(e, -1), !1
                            }
                            return !0
                        }
                        switch ((a.preventSwipe || i && ("left" === n || "right" === n)) && o.preventDefault(), void 0 !== a.positionanim && a.positionanim.pause(), a.carouselAutomatic = !1, s) {
                            case "start":
                                clearTimeout(a.swipeMainTimer), a.beforeSwipeOffet = a.slide_offset, a.focusedBeforeSwipe = a.focused, a.beforeDragStatus = t[e].sliderstatus, t[e].c.trigger("stoptimer"), a.swipeStartPos = r ? p[0].start.x : o.pageX, a.swipeStartTime = (new Date).getTime(), a.screenX = r ? p[0].end.x : o.pageX, a.screenY = r ? p[0].end.y : o.pageY, void 0 !== a.positionanim && (a.positionanim.pause(), a.carouselAutomatic = !1), a.overpull = "none", a.wrap.addClass("dragged");
                                break;
                            case "move":
                                if ("left" !== n && "right" !== n || (a.preventSwipe = !0), a.justDragged = !0, Math.abs(g) >= 10 || t[e].carousel.isDragged) {
                                    if (t[e].carousel.isDragged = !0, t[e].c.find(".rs-waction").addClass("tp-temporarydisabled"), a.CACHE_slide_offset = a.beforeSwipeOffet + g, !a.infinity) {
                                        var u = "center" === a.horizontal_align ? (a.wrapwidth / 2 - a.slide_width / 2 - a.CACHE_slide_offset) / a.slide_width : (0 - a.CACHE_slide_offset) / a.slide_width;
                                        "none" !== a.overpull && 0 !== a.overpull || !(u < 0 || u > t[e].slideamount - 1) ? u >= 0 && u <= t[e].slideamount - 1 && (u >= 0 && g > a.overpull || u <= t[e].slideamount - 1 && g < a.overpull) && (a.overpull = 0) : a.overpull = g, a.CACHE_slide_offset = u < 0 ? a.CACHE_slide_offset + (a.overpull - g) / 1.5 + Math.sqrt(Math.abs((a.overpull - g) / 1.5)) : u > t[e].slideamount - 1 ? a.CACHE_slide_offset + (a.overpull - g) / 1.5 - Math.sqrt(Math.abs((a.overpull - g) / 1.5)) : a.CACHE_slide_offset
                                    }
                                    t.swipeAnimate({
                                        id: e,
                                        to: a.CACHE_slide_offset,
                                        direction: n,
                                        easing: "power2.out",
                                        phase: "move"
                                    })
                                }
                                break;
                            case "end":
                            case "cancel":
                                clearTimeout(a.swipeMainTimer), a.swipeMainTimer = setTimeout(function() {
                                    a.preventSwipe = !1
                                }, 500), t[e].carousel.isDragged = !1, a.wrap.removeClass("dragged"), a.swipeEndPos = r ? p[0].end.x : o.pageX, a.swipeEndTime = (new Date).getTime(), a.swipeDuration = a.swipeEndTime - a.swipeStartTime, a.swipeDistance = i ? a.swipeEndPos - a.swipeStartPos : (a.swipeEndPos - a.swipeStartPos) / 1.5, a.swipePower = a.swipeDistance / a.swipeDuration, a.CACHE_slide_offset = a.slide_offset + a.swipeDistance * Math.abs(a.swipePower), t.swipeAnimate({
                                    id: e,
                                    to: a.CACHE_slide_offset,
                                    direction: n,
                                    fix: !0,
                                    newSlide: !0,
                                    easing: "power2.out",
                                    phase: "end"
                                }), "playing" === a.beforeDragStatus && t[e].c.trigger("restarttimer"), setTimeout(function() {
                                    t[e].c.find(".rs-waction").removeClass("tp-temporarydisabled")
                                }, 19)
                        }
                    }
                }
            }), "carousel" === t[e].sliderType && (i && 0 == t[e].navigation.touch.mobileCarousel || !0 !== i && !1 === t[e].navigation.touch.desktopCarousel) && a.wrap.addClass("noswipe"), t[e].navigation.touch.drag_block_vertical && t[e].c.addClass("disableVerticalScroll")
        },
        c = function(e) {
            e.hide_delay = jQuery.isNumeric(parseInt(e.hide_delay, 0)) ? e.hide_delay : .2, e.hide_delay_mobile = jQuery.isNumeric(parseInt(e.hide_delay_mobile, 0)) ? e.hide_delay_mobile : .2
        },
        p = function(e) {
            return e && e.enable
        },
        g = function(e) {
            clearTimeout(e)
        },
        u = function(e) {
            var i = t[e].navigation.maintypes;
            for (var a in i) i.hasOwnProperty(a) && p(t[e].navigation[i[a]]) && void 0 !== t[e].navigation[i[a]].c && (g(t[e].navigation[i[a]].showCall), t[e].navigation[i[a]].showCall = setTimeout(function(i) {
                g(i.hideCall), i.hide_onleave && !0 !== t[e].tpMouseOver || (void 0 === i.tween ? i.tween = f(i) : i.tween.play())
            }, t[e].navigation[i[a]].hide_onleave && !0 !== t[e].tpMouseOver ? 0 : parseInt(t[e].navigation[i[a]].animDelay), t[e].navigation[i[a]]))
        },
        m = function(e) {
            var i = t[e].navigation.maintypes;
            for (var a in i) i.hasOwnProperty(a) && void 0 !== t[e].navigation[i[a]] && t[e].navigation[i[a]].hide_onleave && p(t[e].navigation[i[a]]) && g(t[e].navigation[i[a]].hideCall)
        },
        h = function(e, a) {
            var r = t[e].navigation.maintypes;
            for (var o in r) r.hasOwnProperty(o) && void 0 !== t[e].navigation[r[o]] && t[e].navigation[r[o]].hide_onleave && p(t[e].navigation[r[o]]) && (g(t[e].navigation[r[o]].hideCall), t[e].navigation[r[o]].hideCall = setTimeout(function(e) {
                g(e.showCall), e.tween && e.tween.reverse()
            }, i ? parseInt(t[e].navigation[r[o]].hide_delay_mobile, 0) : parseInt(t[e].navigation[r[o]].hide_delay, 0), t[e].navigation[r[o]]))
        },
        f = function(e) {
            e.speed = void 0 === e.speed ? .5 : e.speed, e.anims = [], void 0 !== e.anim && void 0 === e.left && e.anims.push(e.anim), void 0 !== e.left && e.anims.push(e.left.anim), void 0 !== e.right && e.anims.push(e.right.anim);
            var t = tpGS.gsap.timeline();
            for (var i in t.add(tpGS.gsap.to(e.c, e.speed, {
                    opacity: 1,
                    ease: "power3.inOut"
                }), 0), e.anims)
                if (e.anims.hasOwnProperty(i)) switch (e.anims[i]) {
                    case "left":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
                            marginLeft: -50
                        }, {
                            marginLeft: 0,
                            ease: "power3.inOut"
                        }), 0);
                        break;
                    case "right":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
                            marginLeft: 50
                        }, {
                            marginLeft: 0,
                            ease: "power3.inOut"
                        }), 0);
                        break;
                    case "top":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
                            marginTop: -50
                        }, {
                            marginTop: 0,
                            ease: "power3.inOut"
                        }), 0);
                        break;
                    case "bottom":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
                            marginTop: 50
                        }, {
                            marginTop: 0,
                            ease: "power3.inOut"
                        }), 0);
                        break;
                    case "zoomin":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
                            scale: .5
                        }, {
                            scale: 1,
                            ease: "power3.inOut"
                        }), 0);
                        break;
                    case "zoomout":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
                            scale: 1.2
                        }, {
                            scale: 1,
                            ease: "power3.inOut"
                        }), 0)
                }
            return t.play(), t
        },
        v = function(e, i) {
            e.style = void 0 === e.style ? "" : e.style, e.left.style = void 0 === e.left.style ? "" : e.left.style, e.right.style = void 0 === e.right.style ? "" : e.right.style, void 0 === e.left.c && (e.left.c = jQuery('<rs-arrow style="opacity:0" class="tp-leftarrow tparrows ' + e.style + " " + e.left.style + '">' + e.tmp + "</rs-arrow>"), t[i].c.append(e.left.c)), void 0 === e.right.c && (e.right.c = jQuery('<rs-arrow style="opacity:0"  class="tp-rightarrow tparrows ' + e.style + " " + e.right.style + '">' + e.tmp + "</rs-arrow>"), t[i].c.append(e.right.c)), e[e.rtl ? "left" : "right"].c.click(function() {
                "carousel" === t[i].sliderType && (t[i].ctNavElement = !0), t[i].sc_indicator = "arrow", t[i].sc_indicator_dir = 0, t[i].c.revnext()
            }), e[e.rtl ? "right" : "left"].c.click(function() {
                "carousel" === t[i].sliderType && (t[i].ctNavElement = !0), t[i].sc_indicator = "arrow", t[i].sc_indicator_dir = 1, t[i].c.revprev()
            }), e.padding_top = parseInt(t[i].carousel.padding_top || 0, 0), e.padding_bottom = parseInt(t[i].carousel.padding_bottom || 0, 0), _(e.left, i), _(e.right, i), "outer-left" != e.position && "outer-right" != e.position || (t[i].outernav = !0)
        },
        y = function(e, i, a, r) {
            r = void 0 === r ? e.outerHeight(!0) : r;
            var o = null == t[a] ? 0 : 0 == t[a].conh ? t[a].height : t[a].conh,
                s = "layergrid" == i.container ? "fullscreen" == t[a].sliderLayout ? t[a].height / 2 - t[a].gridheight[t[a].level] * t[a].bh / 2 : t[a].autoHeight || null != t[a].minHeight && t[a].minHeight > 0 ? o / 2 - t[a].gridheight[t[a].level] * t[a].bh / 2 : 0 : 0,
                n = "top" === i.v_align ? {
                    top: "0px",
                    y: Math.round(i.v_offset + s) + "px"
                } : "center" === i.v_align ? {
                    top: "50%",
                    y: Math.round(0 - r / 2 + i.v_offset) + "px"
                } : {
                    top: "100%",
                    y: Math.round(0 - (r + i.v_offset + s)) + "px"
                };
            e.hasClass("outer-bottom") || tpGS.gsap.set(e, n)
        },
        b = function(e, i, a, r) {
            r = void 0 === r ? e.outerWidth(!0) : r;
            var o = "layergrid" === i.container ? t[a].width / 2 - t[a].gridwidth[t[a].level] * t[a].bw / 2 : 0,
                s = "left" === i.h_align ? {
                    left: "0px",
                    x: Math.round(i.h_offset + o) + "px"
                } : "center" === i.h_align ? {
                    left: "50%",
                    x: Math.round(0 - r / 2 + i.h_offset) + "px"
                } : {
                    left: "100%",
                    x: Math.round(0 - (r + i.h_offset + o)) + "px"
                };
            tpGS.gsap.set(e, s)
        },
        _ = function(e, i) {
            if (null != e && void 0 !== e.c) {
                var a = "fullwidth" == t[i].sliderLayout || "fullscreen" == t[i].sliderLayout,
                    r = a ? t[i].conw : t[i].topc.width(),
                    o = e.c.outerWidth(!0),
                    s = e.c.outerHeight(!0);
                if (0 !== o && 0 !== s && (y(e.c, e, i, s), b(e.c, e, i, o), "outer-left" === e.position && a ? tpGS.gsap.set(e.c, {
                        left: 0 - o + "px",
                        x: e.h_offset + "px"
                    }) : "outer-right" === e.position && a && tpGS.gsap.set(e.c, {
                        right: 0 - o + "px",
                        x: e.h_offset + "px"
                    }), "tp-thumb" === e.type || "tp-tab" === e.type)) {
                    var n = parseInt(e.padding_top || 0, 0),
                        l = parseInt(e.padding_bottom || 0, 0),
                        d = {},
                        c = {};
                    e.maxw > r && "outer-left" !== e.position && "outer-right" !== e.position ? (d.left = "0px", d.x = 0, d.maxWidth = r - 2 * e.wpad + "px", c.maxWidth = r - 2 * e.wpad + "px") : (d.maxWidth = e.maxw, c.maxWidth = r + "px"), e.maxh + 2 * e.wpad > t[i].conh && "outer-bottom" !== e.position && "outer-top" !== e.position ? (d.top = "0px", d.y = 0, d.maxHeight = n + l + (t[i].conh - 2 * e.wpad) + "px", c.maxHeight = n + l + (t[i].conh - 2 * e.wpad) + "px") : (d.maxHeight = e.maxh + "px", c.maxHeight = e.maxh + "px"), e.mask = void 0 === e.mask ? e.c.find("rs-navmask") : e.mask, e.span ? ("layergrid" == e.container && "outer-left" !== e.position && "outer-right" !== e.position && (n = l = 0), "vertical" === e.direction ? (d.maxHeight = n + l + (t[i].conh - 2 * e.wpad) + "px", d.height = n + l + (t[i].conh - 2 * e.wpad) + "px", d.top = 0, d.y = 0, c.maxHeight = n + l + Math.min(e.maxh, t[i].conh - 2 * e.wpad) + "px", tpGS.gsap.set(e.c, d), tpGS.gsap.set(e.mask, c), y(e.mask, e, i)) : "horizontal" === e.direction && (d.maxWidth = "100%", d.width = r - 2 * e.wpad + "px", d.left = 0, d.x = 0, c.maxWidth = e.maxw >= r ? "100%" : Math.min(e.maxw, r) + "px", tpGS.gsap.set(e.c, d), tpGS.gsap.set(e.mask, c), b(e.mask, e, i))) : (tpGS.gsap.set(e.c, d), tpGS.gsap.set(e.mask, c))
                }
            }
        },
        w = function(e, i, a, r) {
            0 === e.find(".tp-bullets").length && (i.style = void 0 === i.style ? "" : i.style, i.c = jQuery('<rs-bullets style="opacity:0"  class="tp-bullets ' + i.style + " " + i.direction + " nav-pos-hor-" + i.h_align + "nav-pos-ver-" + i.v_align + "nav-dir-" + i.direction + '"></rs-bullets>'));
            var o = a.data("key"),
                s = i.tmp;
            void 0 !== t[r].thumbs[a.index()] && jQuery.each(t[r].thumbs[a.index()].params, function(e, t) {
                s = s.replace(t.from, t.to)
            });
            var n = jQuery('<rs-bullet data-key="' + o + '" class="tp-bullet">' + s + "</rs-bullet>");
            void 0 !== t[r].thumbs[a.index()] && n.find(".tp-bullet-image").css({
                backgroundImage: "url(" + t[r].thumbs[a.index()].src + ")"
            }), i.c.append(n), e.append(i.c);
            var l = i.c.find(".tp-bullet").length,
                d = n.outerWidth(),
                c = n.outerHeight(),
                p = d + parseInt(void 0 === i.space ? 0 : i.space, 0),
                g = c + parseInt(void 0 === i.space ? 0 : i.space, 0);
            "vertical" === i.direction ? (n.css({
                top: (l - 1) * g + "px",
                left: "0px"
            }), i.c.css({
                height: (l - 1) * g + c,
                width: d
            })) : (n.css({
                left: (l - 1) * p + "px",
                top: "0px"
            }), i.c.css({
                width: (l - 1) * p + d,
                height: c
            })), n.click(function() {
                "carousel" === t[r].sliderType && (t[r].ctNavElement = !0), t[r].sc_indicator = "bullet", e.revcallslidewithid(o), e.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected")
            }), i.padding_top = parseInt(t[r].carousel.padding_top || 0, 0), i.padding_bottom = parseInt(t[r].carousel.padding_bottom || 0, 0), "outer-left" != i.position && "outer-right" != i.position || (t[r].outernav = !0)
        },
        x = function(e, i, a, r, o) {
            var s = "tp-thumb" === r ? ".tp-thumbs" : ".tp-tabs",
                n = "tp-thumb" === r ? ".tp-thumb-mask" : ".tp-tab-mask",
                l = "tp-thumb" === r ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                d = "tp-thumb" === r ? ".tp-thumb" : ".tp-tab",
                c = "tp-thumb" === r ? ".tp-thumb-image" : ".tp-tab-image",
                p = "tp-thumb" === r ? "rs-thumb" : "rs-tab";
            i.type = r, i.visibleAmount = i.visibleAmount > t[o].slideamount ? t[o].slideamount : i.visibleAmount, i.sliderLayout = t[o].sliderLayout, void 0 === i.c && (i.wpad = i.wrapper_padding, i.c = jQuery("<" + p + 's style="opacity:0" class="nav-dir-' + i.direction + " nav-pos-ver-" + i.v_align + " nav-pos-hor-" + i.h_align + " rs-nav-element " + r + "s " + (!0 === i.span ? "tp-span-wrapper" : "") + " " + i.position + " " + (void 0 === i.style ? "" : i.style) + '"><rs-navmask class="' + r + '-mask" style="overflow:hidden;position:relative"><' + p + 's-wrap class="' + r + 's-inner-wrapper" style="position:relative;"></' + p + "s-wrap></rs-navmask></" + p + "s>"), i.c.css({
                overflow: "visible",
                position: "outer-top" === i.position || "outer-bottom" === i.position ? "relative" : "absolute",
                background: i.wrapper_color,
                padding: i.wpad + "px",
                boxSizing: "contet-box"
            }), "outer-top" === i.position ? e.parent().prepend(i.c) : "outer-bottom" === i.position ? e.after(i.c) : e.append(i.c), "outer-left" !== i.position && "outer-right" !== i.position || tpGS.gsap.set(t[o].c, {
                overflow: "visible"
            }), i.padding_top = parseInt(t[o].carousel.padding_top || 0, 0), i.padding_bottom = parseInt(t[o].carousel.padding_bottom || 0, 0), "outer-left" != i.position && "outer-right" != i.position || (t[o].outernav = !0));
            var g = a.data("key"),
                u = i.c.find(n),
                m = u.find(l),
                h = i.tmp;
            i.maxw = "horizontal" === i.direction ? i.width * i.visibleAmount + i.space * (i.visibleAmount - 1) : i.width, i.maxh = "horizontal" === i.direction ? i.height : i.height * i.visibleAmount + i.space * (i.visibleAmount - 1), void 0 !== t[o].thumbs[a.index()] && jQuery.each(t[o].thumbs[a.index()].params, function(e, t) {
                h = h.replace(t.from, t.to)
            });
            var f = jQuery("<" + p + ' data-liindex="' + a.index() + '" data-key="' + g + '" class="' + r + '" style="width:' + i.width + "px;height:" + i.height + 'px;">' + h + "<" + p + ">");
            void 0 !== t[o].thumbs[a.index()] && f.find(c).css({
                backgroundImage: "url(" + t[o].thumbs[a.index()].src + ")"
            }), m.append(f);
            var v = i.c.find(d).length,
                y = f.outerWidth(),
                b = f.outerHeight(),
                _ = y + parseInt(void 0 === i.space ? 0 : i.space, 0),
                w = b + parseInt(void 0 === i.space ? 0 : i.space, 0);
            "vertical" === i.direction ? (f.css({
                top: (v - 1) * w + "px",
                left: "0px"
            }), m.css({
                height: (v - 1) * w + b,
                width: y
            })) : (f.css({
                left: (v - 1) * _ + "px",
                top: "0px"
            }), m.css({
                width: (v - 1) * _ + y,
                height: b
            })), u.css({
                maxWidth: i.maxw + "px",
                maxHeight: i.maxh + "px"
            }), i.c.css({
                maxWidth: i.maxw + "px",
                maxHeight: i.maxh + "px"
            }), f.click(function() {
                t[o].sc_indicator = "bullet", "carousel" === t[o].sliderType && (t[o].ctNavElement = !0);
                var i = e.parent().find(l).data("distance");
                i = void 0 === i ? 0 : i, Math.abs(i) < 10 && (e.revcallslidewithid(g), e.parent().find(s).removeClass("selected"), jQuery(this).addClass("selected"))
            })
        },
        k = function(e) {
            var i = t[e].cpar.find(".outer-top"),
                a = t[e].cpar.find(".outer-bottom"),
                r = t[e].top_outer,
                o = t[e].bottom_outer;
            t[e].top_outer = i.hasClass("tp-forcenotvisible") ? 0 : i.outerHeight() || 0, t[e].bottom_outer = a.hasClass("tp-forcenotvisible") ? 0 : a.outerHeight() || 0, (void 0 !== r && r !== t[e].top_outer || void 0 !== o && o !== t[e].bottom_outer) && t.setSize(e)
        },
        S = function(e, i, a) {
            return null == e || void 0 === e.c ? a : (e.hide_under > t[i].conw || t[i].conw > e.hide_over ? (!0 !== e.tpForceNotVisible && (e.c.addClass("tp-forcenotvisible"), a = !0), e.tpForceNotVisible = !0) : (!1 !== e.tpForceNotVisible && (e.c.removeClass("tp-forcenotvisible"), a = !0), e.tpForceNotVisible = !1), a)
        }
}(jQuery),
function(e) {
    "use strict";
    var t = jQuery.fn.revolution;
    jQuery.extend(!0, t, {
        preparePanZoom: function(e) {},
        stopPanZoom: function(e) {
            null != e.data("pztl") && e.data("pztl").pause()
        },
        startPanZoom: function(e, i, a, r, o) {
            "carousel" === t[i].sliderType && (t[i].carousel.justify && void 0 === t[i].carousel.slide_widths && t.setCarouselDefaults(i, !0), t[i].carousel.justify || (void 0 === t[i].carousel.slide_width && (t[i].carousel.slide_width = !0 !== t[i].carousel.stretch ? t[i].gridwidth[t[i].level] * (0 === t[i].bw ? 1 : t[i].bw) : t[i].conw), void 0 === t[i].carousel.slide_height && (t[i].carousel.slide_height = !0 !== t[i].carousel.stretch ? t[i].gridheight[t[i].level] * (0 === t[i].bw ? 1 : t[i].bw) : t[i].conh)), !0 !== t[i].CWMDONE && (t.contWidthManager(i), t.setSize(i)));
            var s = e.data(),
                n = e.find("rs-sbg"),
                l = n.data("lazyload") || n.data("src"),
                d = (s.owidth, s.oheight, "carousel" === t[i].sliderType ? t[i].carousel.justify ? t[i].carousel.slide_widths[void 0 !== r ? r : void 0 === t[i].carousel.focused ? 0 : t[i].carousel.focused] : t[i].carousel.slide_width : t[i].canvas.width()),
                c = t[i].canvas.height();
            if (t[i].panzoomTLs = void 0 === t[i].panzoomTLs ? {} : t[i].panzoomTLs, t[i].panzoomBGs = void 0 === t[i].panzoomBGs ? {} : t[i].panzoomBGs, void 0 === t[i].panzoomBGs[r] && (t[i].panzoomBGs[r] = e), void 0 !== s.panzoom && null !== s.panzoom) {
                if (e.data("pztl") && e.data("pztl").kill(), a = a || 0, 0 == e.find(".rs-pzimg").length) {
                    var p = n.data("mediafilter");
                    p = void 0 === p ? "" : p, e.append('<rs-pzimg-wrap class="' + p + '" style="z-index:25;width:100%;height:100%;top:0px;left:0px;position:absolute;display:block"><img class="rs-pzimg" src="' + l + '" style="position:absolute;" width="' + s.owidth + '" height="' + s.oheight + '"></rs-pzimg-wrap>'), e.data("pzimg", e.find(".rs-pzimg"))
                }
                var g = function(e, t, i, a, r, o, s) {
                    var n = e * i,
                        l = t * i,
                        d = Math.abs(a - n),
                        c = Math.abs(r - l),
                        p = new Object;
                    return p.l = (0 - o) * d, p.r = p.l + n, p.t = (0 - s) * c, p.b = p.t + l, p.h = o, p.v = s, p
                };
                void 0 !== t[i].panzoomTLs[r] && t[i].panzoomTLs[r].kill(), null != e.data("pztl") && (e.data("pztl").kill(), e.removeData("pztl"));
                var u = e.data("pzimg"),
                    m = u.parent(),
                    h = function(e, t, i) {
                        var a = void 0 === i.panvalues ? jQuery.extend(!0, {}, function(e) {
                                var t = e.panzoom.split(";"),
                                    i = {
                                        duration: 10,
                                        ease: "none",
                                        scalestart: 1,
                                        scaleend: 1,
                                        rotatestart: .01,
                                        rotateend: 0,
                                        blurstart: 0,
                                        blurend: 0,
                                        offsetstart: "0/0",
                                        offsetend: "0/0"
                                    };
                                for (var a in t)
                                    if (t.hasOwnProperty(a)) {
                                        var r = t[a].split(":"),
                                            o = r[0],
                                            s = r[1];
                                        switch (o) {
                                            case "d":
                                                i.duration = parseInt(s, 0) / 1e3;
                                                break;
                                            case "e":
                                                i.ease = s;
                                                break;
                                            case "ss":
                                                i.scalestart = parseInt(s, 0) / 100;
                                                break;
                                            case "se":
                                                i.scaleend = parseInt(s, 0) / 100;
                                                break;
                                            case "rs":
                                                i.rotatestart = parseInt(s, 0);
                                                break;
                                            case "re":
                                                i.rotateend = parseInt(s, 0);
                                                break;
                                            case "bs":
                                                i.blurstart = parseInt(s, 0);
                                                break;
                                            case "be":
                                                i.blurend = parseInt(s, 0);
                                                break;
                                            case "os":
                                                i.offsetstart = s;
                                                break;
                                            case "oe":
                                                i.offsetend = s
                                        }
                                    }
                                return i.offsetstart = i.offsetstart.split("/") || [0, 0], i.offsetend = i.offsetend.split("/") || [0, 0], i.rotatestart = 0 === i.rotatestart ? .01 : i.rotatestart, e.panvalues = i, e.bgposition = "center center" == e.bgposition ? "50% 50%" : e.bgposition, i
                            }(i)) : jQuery.extend(!0, {}, i.panvalues),
                            r = a.offsetstart,
                            o = a.offsetend,
                            s = {
                                start: {
                                    width: e,
                                    height: e / i.owidth * i.oheight,
                                    rotation: a.rotatestart + "deg",
                                    scale: a.scalestart,
                                    transformOrigin: i.bgposition
                                },
                                starto: {},
                                end: {
                                    rotation: a.rotateend + "deg",
                                    scale: a.scaleend
                                },
                                endo: {}
                            };
                        a.scalestart, i.owidth, i.oheight, a.scaleend, i.owidth, i.oheight;
                        if (s.start.height < t) {
                            var n = t / s.start.height;
                            s.start.height = t, s.start.width = s.start.width * n
                        }
                        var l = function(e, t, i, a) {
                            var r = e.bgposition.split(" ") || "center center",
                                o = "center" == r[0] ? "50%" : "left" == r[0] || "left" == r[1] ? "0%" : "right" == r[0] || "right" == r[1] ? "100%" : r[0],
                                s = "center" == r[1] ? "50%" : "top" == r[0] || "top" == r[1] ? "0%" : "bottom" == r[0] || "bottom" == r[1] ? "100%" : r[1];
                            o = parseInt(o, 0) / 100 || 0, s = parseInt(s, 0) / 100 || 0;
                            var n = new Object;
                            return n.start = g(a.start.width, a.start.height, a.start.scale, t, i, o, s), n.end = g(a.start.width, a.start.height, a.end.scale, t, i, o, s), n
                        }(i, e, t, s);
                        r[0] = parseFloat(r[0]) + l.start.l, o[0] = parseFloat(o[0]) + l.end.l, r[1] = parseFloat(r[1]) + l.start.t, o[1] = parseFloat(o[1]) + l.end.t;
                        var d = l.start.r - l.start.l,
                            c = l.start.b - l.start.t,
                            p = l.end.r - l.end.l,
                            u = l.end.b - l.end.t;
                        return r[0] = r[0] > 0 ? 0 : d + r[0] < e ? e - d : r[0], o[0] = o[0] > 0 ? 0 : p + o[0] < e ? e - p : o[0], r[1] = r[1] > 0 ? 0 : c + r[1] < t ? t - c : r[1], o[1] = o[1] > 0 ? 0 : u + o[1] < t ? t - u : o[1], s.starto.x = r[0] + "px", s.starto.y = r[1] + "px", s.endo.x = o[0] + "px", s.endo.y = o[1] + "px", s.end.ease = s.endo.ease = a.ease, s.end.force3D = s.endo.force3D = !0, s
                    }(d, c, s);
                if (t[i].panzoomTLs[r] = tpGS.gsap.timeline(), t[i].panzoomTLs[r].pause(), h.start.transformOrigin = "0% 0%", h.starto.transformOrigin = "0% 0%", s.panvalues.duration = NaN === s.panvalues.duration || void 0 === s.panvalues.duration ? 10 : s.panvalues.duration, tpGS.gsap.set(u, {
                        width: h.start.width,
                        height: h.start.height
                    }), delete h.start.width, delete h.start.height, "prepare" === o && tpGS.gsap.fromTo(u, .5, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1
                    }), t[i].panzoomTLs[r].add(tpGS.gsap.fromTo(u, s.panvalues.duration, h.start, h.end), 0), t[i].panzoomTLs[r].add(tpGS.gsap.fromTo(m, s.panvalues.duration, h.starto, h.endo), 0), void 0 !== s.panvalues.blurstart && void 0 !== s.panvalues.blurend && (0 !== s.panvalues.blurstart || 0 !== s.panvalues.blurend)) {
                    var f = {
                            a: s.panvalues.blurstart
                        },
                        v = {
                            a: s.panvalues.blurend,
                            ease: h.endo.ease
                        },
                        y = tpGS.gsap.to(f, s.panvalues.duration, v);
                    y.eventCallback("onUpdate", function(e) {
                        tpGS.gsap.set(e, {
                            filter: "blur(" + f.a + "px)",
                            webkitFilter: "blur(" + f.a + "px)"
                        })
                    }, [m]), tpGS.gsap.set(m, {
                        filter: "blur(" + f.a + "px)",
                        webkitFilter: "blur(" + f.a + "px)"
                    }), t[i].panzoomTLs[r].add(y, 0)
                }
                t[i].panzoomTLs[r].progress(a), "play" !== o && "first" !== o || t[i].panzoomTLs[r].play()
            }
        }
    })
}(jQuery),
function(e) {
    "use strict";
    var t = jQuery.fn.revolution,
        i = t.is_mobile();
    jQuery.extend(!0, t, {
        checkForParallax: function(e) {
            var r = t[e].parallax;
            if (!r.done) {
                if (r.done = !0, i && r.disable_onmobile) return !1;
                if ("3D" == r.type || "3d" == r.type) {
                    if (t.addSafariFix(e), tpGS.gsap.set(t[e].c, {
                            overflow: r.ddd_overflow
                        }), tpGS.gsap.set(t[e].canvas, {
                            overflow: r.ddd_overflow
                        }), "carousel" != t[e].sliderType && r.ddd_shadow) {
                        var o = jQuery('<div class="dddwrappershadow"></div>');
                        tpGS.gsap.set(o, {
                            force3D: "auto",
                            transformPerspective: 1600,
                            transformOrigin: "50% 50%",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }), t[e].c.prepend(o)
                    }
                    for (var s in t[e].slides) t[e].slides.hasOwnProperty(s) && a(jQuery(t[e].slides[s]), e);
                    t[e].c.find("rs-static-layers").length > 0 && (tpGS.gsap.set(t[e].c.find("rs-static-layers"), {
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }), a(t[e].c.find("rs-static-layers"), e))
                }
                r.pcontainers = [], r.pcontainer_depths = [], r.bgcontainers = [], r.bgcontainer_depths = [], r.speed = void 0 === r.speed ? 0 : parseInt(r.speed, 0), r.speedbg = void 0 === r.speedbg ? 0 : parseInt(r.speedbg, 0), r.speedls = void 0 === r.speedls ? 0 : parseInt(r.speedls, 0), t[e].c.find("rs-slide rs-sbg-wrap, rs-slide rs-bgvideo").each(function() {
                    var i = jQuery(this),
                        a = i.data("parallax");
                    void 0 !== (a = "on" == a || !0 === a ? 1 : a) && "off" !== a && !1 !== a && (r.bgcontainers.push(i.closest("rs-sbg-px")), r.bgcontainer_depths.push(t[e].parallax.levels[parseInt(a, 0) - 1] / 100))
                });
                for (s = 1; s <= r.levels.length; s++) t[e].c.find(".rs-pxl-" + s).each(function() {
                    var e = jQuery(this),
                        t = this.className.indexOf("rs-pxmask") >= 0 ? e.closest("rs-px-mask") : e.closest(".rs-parallax-wrap");
                    t.data("parallaxlevel", r.levels[s - 1]), t.addClass("tp-parallax-container"), r.pcontainers.push(t), r.pcontainer_depths.push(r.levels[s - 1])
                });
                if ("mouse" == r.type || "mousescroll" == r.type || "3D" == r.type || "3d" == r.type) {
                    var n = "rs-slide .dddwrapper, .dddwrappershadow, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer";
                    "carousel" === t[e].sliderType && (n = "rs-slide .dddwrapper, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer"), r.sctors = t[e].c.find(n), r.mouseEntered = !1, t[e].c.mouseenter(function(i) {
                        var a = t[e].c.offset().top,
                            o = t[e].c.offset().left;
                        r.mouseEnterX = i.pageX - o, r.mouseEnterY = i.pageY - a, r.mouseEntered = !0
                    });
                    var l = this.updateParallax.bind(this, e, r);
                    t[e].c.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath", function(e) {
                        r.eventData = e, void 0 !== r.frame && "mouseleave" !== e.type || (r.frame = window.requestAnimationFrame(l))
                    }), i && window.addEventListener("deviceorientation", function(e) {
                        r.eventData = e, void 0 === r.frame && (r.frame = window.requestAnimationFrame(l))
                    })
                }
                var d = t[e].scrolleffect;
                d.set && (d.multiplicator_layers = parseFloat(d.multiplicator_layers), d.multiplicator = parseFloat(d.multiplicator)), void 0 !== d._L && 0 === d._L.length && (d._L = !1), void 0 !== d.bgs && 0 === d.bgs.length && (d.bgs = !1)
            }
        },
        updateParallax: function(e, i) {
            i.frame && (i.frame = window.cancelAnimationFrame(i.frame));
            var a, r, o = i.eventData,
                s = t[e].c.offset().left,
                n = t[e].c.offset().top,
                l = t[e].conw,
                d = t[e].conh,
                c = i.speed / 1e3 || 3;
            if ("enterpoint" == i.origo && "deviceorientation" !== o.type ? (!1 === i.mouseEntered && (i.mouseEnterX = o.pageX - s, i.mouseEnterY = o.pageY - n, i.mouseEntered = !0), a = i.mouseEnterX - (o.pageX - s), r = i.mouseEnterY - (o.pageY - n), c = i.speed / 1e3 || .4) : "deviceorientation" !== o.type && (a = l / 2 - (o.pageX - s), r = d / 2 - (o.pageY - n)), "deviceorientation" == o.type) {
                var p, g, u;
                p = o.beta - 60, g = o.gamma, u = p;
                var m = Math.abs(i.orientationX - g) > 1 || Math.abs(i.orientationY - u) > 1;
                if (i.orientationX = g, i.orientationY = u, !m) return;
                if (t.winW > t.getWinH(e)) {
                    var h = g;
                    g = u, u = h
                }
                a = 360 / l * (g *= 1.5), r = 180 / d * (u *= 1.5)
            }
            o.type, "mouseout" === o.type && (a = 0, r = 0, i.mouseEntered = !1);
            for (var f = 0; f < i.pcontainers.length; f++) {
                var v = i.pcontainers[f],
                    y = i.pcontainer_depths[f],
                    b = "3D" == i.type || "3d" == i.type ? y / 200 : y / 100,
                    _ = a * b,
                    w = r * b;
                "mousescroll" == i.type ? tpGS.gsap.to(v, c, {
                    force3D: "auto",
                    x: _,
                    ease: "power3.out",
                    overwrite: "all"
                }) : tpGS.gsap.to(v, c, {
                    force3D: "auto",
                    x: _,
                    y: w,
                    ease: "power3.out",
                    overwrite: "all"
                })
            }
            "3D" != i.type && "3d" != i.type || i.sctors.each(function() {
                var s = jQuery(this),
                    n = t.isFirefox() ? Math.min(25, i.levels[i.levels.length - 1]) / 200 : i.levels[i.levels.length - 1] / 200,
                    l = a * n,
                    d = r * n,
                    p = 0 == t[e].conw ? 0 : Math.round(a / t[e].conw * n * 100) || 0,
                    g = 0 == t[e].conh ? 0 : Math.round(r / t[e].conh * n * 100) || 0,
                    u = s.closest("rs-slide"),
                    m = 0,
                    h = !1;
                "deviceorientation" === o.type && (n = i.levels[i.levels.length - 1] / 200, l = a * n, d = r * n * 3, p = 0 == t[e].conw ? 0 : Math.round(a / t[e].conw * n * 500) || 0, g = 0 == t[e].conh ? 0 : Math.round(r / t[e].conh * n * 700) || 0), s.hasClass("dddwrapper-layer") && (m = i.ddd_z_correction || 65, h = !0), s.hasClass("dddwrapper-layer") && (l = 0, d = 0), u.index() === t[e].pr_active_key || "carousel" != t[e].sliderType ? !i.ddd_bgfreeze || h ? tpGS.gsap.to(s, c, {
                    rotationX: g,
                    rotationY: -p,
                    x: l,
                    z: m,
                    y: d,
                    ease: "power3.out",
                    overwrite: "all"
                }) : tpGS.gsap.to(s, .5, {
                    force3D: "auto",
                    rotationY: 0,
                    rotationX: 0,
                    z: 0,
                    ease: "power3.out",
                    overwrite: "all"
                }) : tpGS.gsap.to(s, .5, {
                    force3D: "auto",
                    rotationY: 0,
                    x: 0,
                    y: 0,
                    rotationX: 0,
                    z: 0,
                    ease: "power3.out",
                    overwrite: "all"
                }), "mouseleave" != o.type && "mouseout" !== o.type || tpGS.gsap.to(this, 3.8, {
                    z: 0,
                    ease: "power3.out"
                })
            })
        },
        parallaxProcesses: function(e, a, r, o) {
            var s = t[e].fixedOnTop ? Math.min(1, Math.max(0, window.scrollY / t.lastwindowheight)) : Math.min(1, Math.max(0, 1 - (a.top + a.hheight) / (a.hheight + t.lastwindowheight))),
                n = (a.top >= 0 && a.top <= t.lastwindowheight || a.top <= 0 && a.bottom >= 0 || a.top <= 0 && a.bottom, t[e].slides[void 0 === t[e].pr_active_key ? 0 : t[e].pr_active_key]);
            if (t[e].sbtimeline.fixed ? (!1 !== t[e].fixedScrollOnState && t.stickySupported && (t[e].topc.addClass("rs-stickyscrollon"), t[e].fixedScrollOnState = !0), void 0 === t[e].sbtimeline.rest && t.updateFixedScrollTimes(e), a.top >= 0 && a.top <= t.lastwindowheight ? (s = t[e].sbtimeline.fixStart * (1 - a.top / t.lastwindowheight) / 1e3, !0 !== t.stickySupported && !1 !== t[e].fixedScrollOnState && (t[e].topc.removeClass("rs-fixedscrollon"), tpGS.gsap.set(t[e].cpar, {
                    top: 0
                }), t[e].fixedScrollOnState = !1)) : a.top <= 0 && a.bottom >= t[e].height ? (!0 !== t.stickySupported && !0 !== t[e].fixedScrollOnState && (t[e].fixedScrollOnState = !0, t[e].topc.addClass("rs-fixedscrollon"), tpGS.gsap.set(t[e].cpar, {
                    top: 0
                })), s = (t[e].sbtimeline.fixStart + t[e].sbtimeline.time * (Math.abs(a.top) / (a.hheight - t[e].height))) / 1e3) : (!0 !== t.stickySupported && (tpGS.gsap.set(t[e].cpar, {
                    top: t[e].scrollproc >= 0 ? 0 : a.height - t[e].height
                }), !1 !== t[e].fixedScrollOnState && (t[e].topc.removeClass("rs-fixedscrollon"), t[e].fixedScrollOnState = !1)), s = a.top > t.lastwindowheight ? 0 : (t[e].sbtimeline.fixEnd + t[e].sbtimeline.rest * (1 - a.bottom / t[e].height)) / 1e3)) : s = t[e].duration * s / 1e3, void 0 !== n && void 0 !== t.gA(n, "key") && !0 !== r)
                for (var l in t[e].sbas[t.gA(n, "key")])
                    if (void 0 !== t[e]._L[l] && void 0 !== t[e]._L[l].timeline && (1 == t[e]._L[l].animationonscroll || "true" == t[e]._L[l].animationonscroll)) {
                        var d = void 0 !== t[e]._L[l].scrollBasedOffset ? s + t[e]._L[l].scrollBasedOffset : s;
                        d = d <= 0 ? 0 : d < .1 ? .1 : d, t[e]._L[l].animteToTime !== d && (t[e]._L[l].animteToTime = d, tpGS.gsap.to(t[e]._L[l].timeline, t[e].sbtimeline.speed, {
                            time: d,
                            ease: t[e].sbtimeline.ease
                        }))
                    }
            if (i && t[e].parallax.disable_onmobile) return !1;
            var c = t[e].parallax;
            if ("3d" != c.type && "3D" != c.type) {
                if (("scroll" == c.type || "mousescroll" == c.type) && c.pcontainers)
                    for (var p = 0; p < c.pcontainers.length; p++)
                        if (c.pcontainers[p].length > 0) {
                            var g = c.pcontainers[p],
                                u = c.pcontainer_depths[p] / 100,
                                m = Math.round(t[e].scrollproc * (-u * t[e].conh) * 10) / 10 || 0,
                                h = void 0 !== o ? o : c.speedls / 1e3 || 0;
                            g.data("parallaxoffset", m), tpGS.gsap.to(g, h, {
                                overwrite: "auto",
                                force3D: "auto",
                                y: m
                            })
                        }
                if (c.bgcontainers)
                    for (p = 0; p < c.bgcontainers.length; p++) {
                        var f = c.bgcontainers[p],
                            v = c.bgcontainer_depths[p];
                        m = t[e].scrollproc * (-v * t[e].conh) || 0, h = void 0 !== o ? o : c.speedbg / 1e3 || .015;
                        h = void 0 !== t[e].parallax.lastBGY && 0 === h && Math.abs(m - t[e].parallax.lastBGY) > 50 ? .15 : h, tpGS.gsap.to(f, h, {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            backfaceVisibility: "hidden",
                            force3D: "true",
                            y: m + "px"
                        }), t[e].parallax.lastBGY = m
                    }
            }
            var y = t[e].scrolleffect;
            if (y.set && (!i || !1 === y.disable_onmobile)) {
                var b = Math.abs(t[e].scrollproc) - y.tilt / 100;
                if (b = b < 0 ? 0 : b, !1 !== y._L) {
                    var _ = 1 - b * y.multiplicator_layers,
                        w = {
                            force3D: "true"
                        };
                    if ("top" == y.direction && t[e].scrollproc >= 0 && (_ = 1), "bottom" == y.direction && t[e].scrollproc <= 0 && (_ = 1), _ = _ > 1 ? 1 : _ < 0 ? 0 : _, y.fade && (w.opacity = _), y.scale) {
                        var x = _;
                        w.scale = 1 - x + 1
                    }
                    if (y.blur) {
                        var k = (1 - _) * y.maxblur;
                        w["-webkit-filter"] = "blur(" + k + "px)", w.filter = "blur(" + k + "px)"
                    }
                    if (y.grayscale) {
                        var S = "grayscale(" + 100 * (1 - _) + "%)";
                        w["-webkit-filter"] = void 0 === w["-webkit-filter"] ? S : w["-webkit-filter"] + " " + S, w.filter = void 0 === w.filter ? S : w.filter + " " + S
                    }
                    tpGS.gsap.set(y._L, w)
                }
                if (!1 !== y.bgs) {
                    _ = 1 - b * y.multiplicator, w = {
                        backfaceVisibility: "hidden",
                        force3D: "true"
                    };
                    for (var L in "top" == y.direction && t[e].scrollproc >= 0 && (_ = 1), "bottom" == y.direction && t[e].scrollproc <= 0 && (_ = 1), _ = _ > 1 ? 1 : _ < 0 ? 0 : _, y.bgs)
                        if (y.bgs.hasOwnProperty(L)) {
                            if (y.bgs[L].fade && (w.opacity = _), y.bgs[L].blur) {
                                k = (1 - _) * y.maxblur;
                                w["-webkit-filter"] = "blur(" + k + "px)", w.filter = "blur(" + k + "px)"
                            }
                            if (y.bgs[L].grayscale) {
                                S = "grayscale(" + 100 * (1 - _) + "%)";
                                w["-webkit-filter"] = void 0 === w["-webkit-filter"] ? S : w["-webkit-filter"] + " " + S, w.filter = void 0 === w.filter ? S : w.filter + " " + S
                            }
                            tpGS.gsap.set(y.bgs[L].c, w)
                        }
                }
            }
        }
    });
    var a = function(e, i) {
        var a = t[i].parallax;
        e.find("rs-sbg-wrap").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'), e.find(".rs-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:' + a.ddd_layer_overflow + ';"></div>'), e.find(".rs-pxl-tobggroup").closest(".rs-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');
        var r = e.find(".dddwrapper"),
            o = e.find(".dddwrapper-layer");
        e.find(".dddwrapper-layertobggroup").appendTo(r), "carousel" == t[i].sliderType && (a.ddd_shadow && r.addClass("dddwrappershadow"), tpGS.gsap.set(r, {
            borderRadius: t[i].carousel.border_radius
        })), tpGS.gsap.set(e, {
            overflow: "visible",
            transformStyle: "preserve-3d",
            perspective: 1600
        }), tpGS.gsap.set(r, {
            force3D: "auto",
            transformOrigin: "50% 50%",
            transformStyle: "preserve-3d",
            transformPerspective: 1600
        }), tpGS.gsap.set(o, {
            force3D: "auto",
            transformOrigin: "50% 50%",
            zIndex: 5,
            transformStyle: "flat",
            transformPerspective: 1600
        }), tpGS.gsap.set(t[i].canvas, {
            transformStyle: "preserve-3d",
            transformPerspective: 1600
        })
    }
}(jQuery),
function(e) {
    "use strict";
    var t = jQuery.fn.revolution;
    jQuery.extend(!0, t, {
        animateSlide: function(e) {
            return a(e)
        }
    });
    var i = function(e, t) {
            var i;
            return void 0 !== (i = jQuery.isArray(e) ? e.length >= t ? e[t] : e[e.length - 1] : e) && jQuery.isNumeric(i) ? parseInt(e, 0) : i
        },
        a = function(e) {
            var a = e.id,
                n = "arrow" == t[a].sc_indicator ? void 0 === t[a].sc_indicator_dir ? t[a].sdir : t[a].sc_indicator_dir : t[a].sdir,
                l = !0 === e.recall ? jQuery.extend(!0, {}, t[a].lastSliderTransition) : function(e, i, a) {
                    var r = "power1.in",
                        o = "power1.out",
                        s = "power1.inOut",
                        n = "power2.in",
                        l = "power2.out",
                        d = "power2.inOut",
                        c = "power3.inOut",
                        p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                        g = [17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
                        u = 0,
                        m = 1,
                        h = 0,
                        f = [
                            ["boxslide", 0, 0, 10, "box", !1, null, 0, o, o, 1e3, 6],
                            ["boxrandomrotate", 0, 1, 10, "box", !1, null, 60, o, o, 1e3, 6],
                            ["boxfade", 1, 0, 10, "box", !1, null, 1, s, s, 1e3, 5],
                            ["slotslide-horizontal", 2, 0, 0, "horizontal", !0, !1, 2, d, d, 1e3, 3],
                            ["slotslide-vertical", 3, 0, 0, "vertical", !0, !1, 3, d, d, 1e3, 3],
                            ["curtain-1", 4, 3, 0, "horizontal", !0, !0, 4, o, o, 900, 5],
                            ["curtain-2", 5, 3, 0, "horizontal", !0, !0, 5, o, o, 900, 5],
                            ["curtain-3", 6, 3, 25, "horizontal", !0, !0, 6, o, o, 900, 5],
                            ["slotzoom-horizontal", 7, 0, 0, "horizontal", !0, !0, 7, o, o, 1e3, 7],
                            ["slotzoom-vertical", 8, 0, 0, "vertical", !0, !0, 8, l, l, 1e3, 8],
                            ["slotzoom-mixed", 8, 1, 0, "vertical", !0, !0, 59, l, l, 1e3, 8],
                            ["slotfade-horizontal", 9, 0, 0, "horizontal", !0, null, 9, d, d, 1500, 10],
                            ["slotfade-vertical", 10, 0, 0, "vertical", !0, null, 10, d, d, 1500, 10],
                            ["crossfade-horizontal", 9, 0, 0, "horizontal", !0, null, 9, d, d, 1500, 10],
                            ["crossfade-vertical", 10, 0, 0, "vertical", !0, null, 10, d, d, 1500, 10],
                            ["fade", 11, 0, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
                            ["crossfade", 11, 1, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
                            ["fadethroughdark", 11, 2, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
                            ["fadethroughlight", 11, 3, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
                            ["fadethroughtransparent", 11, 4, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
                            ["slideleft", 12, 0, 1, "horizontal", !0, !0, 12, c, c, 1e3, 1],
                            ["slideup", 13, 0, 1, "horizontal", !0, !0, 13, c, c, 1e3, 1],
                            ["slidedown", 14, 0, 1, "horizontal", !0, !0, 14, c, c, 1e3, 1],
                            ["slideright", 15, 0, 1, "horizontal", !0, !0, 15, c, c, 1e3, 1],
                            ["slideoverleft", 12, 7, 1, "horizontal", !0, !0, 12, c, c, 1e3, 1],
                            ["slideoverup", 13, 7, 1, "horizontal", !0, !0, 13, c, c, 1e3, 1],
                            ["slideoverdown", 14, 7, 1, "horizontal", !0, !0, 14, c, c, 1e3, 1],
                            ["slideoverright", 15, 7, 1, "horizontal", !0, !0, 15, c, c, 1e3, 1],
                            ["slideremoveleft", 12, 8, 1, "horizontal", !0, !0, 12, c, c, 1e3, 1],
                            ["slideremoveup", 13, 8, 1, "horizontal", !0, !0, 13, c, c, 1e3, 1],
                            ["slideremovedown", 14, 8, 1, "horizontal", !0, !0, 14, c, c, 1e3, 1],
                            ["slideremoveright", 15, 8, 1, "horizontal", !0, !0, 15, c, c, 1e3, 1],
                            ["papercut", 16, 0, 0, "vertical", null, !0, 16, c, c, 1e3, 2],
                            ["3dcurtain-horizontal", 17, 0, 20, "vertical", !0, !0, 17, s, s, 2e3, 7],
                            ["3dcurtain-vertical", 18, 0, 10, "horizontal", !0, !0, 18, s, s, 2e3, 7],
                            ["cubic", 19, 0, 20, "horizontal", !1, !0, 19, d, d, 1e3, 1],
                            ["cube", 19, 0, 20, "horizontal", !1, !0, 20, d, d, 1e3, 1],
                            ["flyin", 20, 0, 4, "vertical", !1, !0, 21, "power3.out", c, 1e3, 1],
                            ["turnoff", 21, 0, 1, "horizontal", !1, !0, 22, c, c, 1e3, 1],
                            ["incube", 22, 0, 20, "horizontal", !1, !0, 23, d, d, 1e3, 1],
                            ["cubic-horizontal", 23, 0, 20, "vertical", !1, !0, 24, d, d, 1e3, 1],
                            ["cube-horizontal", 23, 0, 20, "vertical", !1, !0, 25, d, d, 1e3, 1],
                            ["incube-horizontal", 24, 0, 20, "vertical", !1, !0, 26, d, d, 1e3, 1],
                            ["turnoff-vertical", 25, 0, 1, "horizontal", !1, !0, 27, d, d, 1e3, 1],
                            ["fadefromright", 12, 1, 1, "horizontal", !0, !0, 28, d, d, 1e3, 1],
                            ["fadefromleft", 15, 1, 1, "horizontal", !0, !0, 29, d, d, 1e3, 1],
                            ["fadefromtop", 14, 1, 1, "horizontal", !0, !0, 30, d, d, 1e3, 1],
                            ["fadefrombottom", 13, 1, 1, "horizontal", !0, !0, 31, d, d, 1e3, 1],
                            ["fadetoleftfadefromright", 12, 2, 1, "horizontal", !0, !0, 32, d, d, 1e3, 1],
                            ["fadetorightfadefromleft", 15, 2, 1, "horizontal", !0, !0, 33, d, d, 1e3, 1],
                            ["fadetobottomfadefromtop", 14, 2, 1, "horizontal", !0, !0, 34, d, d, 1e3, 1],
                            ["fadetotopfadefrombottom", 13, 2, 1, "horizontal", !0, !0, 35, d, d, 1e3, 1],
                            ["parallaxtoright", 15, 3, 1, "horizontal", !0, !0, 36, d, d, 1500, 1],
                            ["parallaxtoleft", 12, 3, 1, "horizontal", !0, !0, 37, d, d, 1500, 1],
                            ["parallaxtotop", 14, 3, 1, "horizontal", !0, !0, 38, d, d, 1500, 1],
                            ["parallaxtobottom", 13, 3, 1, "horizontal", !0, !0, 39, d, d, 1500, 1],
                            ["scaledownfromright", 12, 4, 1, "horizontal", !0, !0, 40, d, n, 1e3, 1],
                            ["scaledownfromleft", 15, 4, 1, "horizontal", !0, !0, 41, d, n, 1e3, 1],
                            ["scaledownfromtop", 14, 4, 1, "horizontal", !0, !0, 42, d, n, 1e3, 1],
                            ["scaledownfrombottom", 13, 4, 1, "horizontal", !0, !0, 43, d, n, 1e3, 1],
                            ["zoomout", 13, 5, 1, "horizontal", !0, !0, 44, d, d, 1e3, 1],
                            ["zoomin", 13, 6, 1, "horizontal", !0, !0, 45, d, d, 1e3, 1],
                            ["slidingoverlayup", 27, 0, 1, "horizontal", !0, !0, 47, s, o, 2e3, 1],
                            ["slidingoverlaydown", 28, 0, 1, "horizontal", !0, !0, 48, s, o, 2e3, 1],
                            ["slidingoverlayright", 30, 0, 1, "horizontal", !0, !0, 49, s, o, 2e3, 1],
                            ["slidingoverlayleft", 29, 0, 1, "horizontal", !0, !0, 50, s, o, 2e3, 1],
                            ["parallaxcirclesup", 31, 0, 1, "horizontal", !0, !0, 51, d, r, 1500, 1],
                            ["parallaxcirclesdown", 32, 0, 1, "horizontal", !0, !0, 52, d, r, 1500, 1],
                            ["parallaxcirclesright", 33, 0, 1, "horizontal", !0, !0, 53, d, r, 1500, 1],
                            ["parallaxcirclesleft", 34, 0, 1, "horizontal", !0, !0, 54, d, r, 1500, 1],
                            ["notransition", 26, 0, 1, "horizontal", !0, null, 46, d, n, 1e3, 1],
                            ["parallaxright", 15, 3, 1, "horizontal", !0, !0, 55, d, n, 1500, 1],
                            ["parallaxleft", 12, 3, 1, "horizontal", !0, !0, 56, d, n, 1500, 1],
                            ["parallaxup", 14, 3, 1, "horizontal", !0, !0, 57, d, r, 1500, 1],
                            ["parallaxdown", 13, 3, 1, "horizontal", !0, !0, 58, d, r, 1500, 1],
                            ["grayscale", 11, 5, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
                            ["grayscalecross", 11, 6, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
                            ["brightness", 11, 7, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
                            ["brightnesscross", 11, 8, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
                            ["blurlight", 11, 9, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
                            ["blurlightcross", 11, 10, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
                            ["blurstrong", 11, 9, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
                            ["blurstrongcross", 11, 10, 1, "horizontal", !0, null, 11, d, d, 1e3, 1]
                        ];
                    return t[e].duringslidechange = !0, jQuery.each(["parallaxcircles", "slidingoverlay", "slide", "slideover", "slideremove", "parallax", "parralaxto"], function(e, t) {
                        i == t + "horizontal" && (i = 1 != a ? t + "left" : t + "right"), i == t + "vertical" && (i = 1 != a ? t + "up" : t + "down")
                    }), "random" == i ? i = Math.min(Math.round(Math.random() * (f.length - 1)), f.length - 1) : "random-static" == i ? i = p[Math.min(Math.round(Math.random() * p.length - 1), p.length - 1)] : "random-premium" == i && (i = g[Math.min(Math.round(Math.random() * g.length - 1), g.length - 1)]), 1 == t[e].isJoomla && null != window.MooTools && -1 != [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45].indexOf(i) && (i = g[Math.max(0, Math.min(g.length - 1, Math.round(Math.random() * (g.length - 2)) + 1))]), jQuery.each(f, function(e, t) {
                        t[0] != i && t[7] != i || (u = t[1], m = t[2], h = e)
                    }), {
                        nTR: u = Math.max(0, Math.min(30, u)),
                        TR: f[h],
                        trC: m
                    }
                }(a, e.animation.transition[e.ntrid], n),
                d = t[a].pr_next_bg && void 0 !== t[a].pr_next_bg.data("panzoom") && (l.nTR < 11 || 17 == l.nTR || 18 === l.nTR || l.nTR >= 27 && l.nTR <= 30) ? 11 : l.nTR,
                c = !1,
                p = void 0 !== t[a].pr_next_bg && t[a].pr_next_bg.length > 0 && void 0 !== t[a].pr_next_bg[0],
                g = void 0 !== t[a].pr_active_bg && t[a].pr_active_bg.length > 0 && void 0 !== t[a].pr_active_bg[0];
            !0 !== e.recall ? (t[a].lastSliderAnimation = jQuery.extend(!0, {}, e.animation), t[a].lastSliderTransition = jQuery.extend(!0, {}, l)) : e.animation = jQuery.extend(!0, {}, t[a].lastSliderAnimation);
            var u = !0 === e.recall ? l.ntrid : e.ntrid || 0,
                m = i(e.animation.masterspeed, u);
            if (m = (m = "default" === m || "d" === m ? l.TR[10] : "random" === m ? Math.round(1e3 * Math.random() + 300) : null != m ? parseInt(m, 0) : l.TR[10]) > t[a].duration ? t[a].duration : m, t[a].rotate = i(e.animation.rotate, u), t[a].rotate = null == t[a].rotate || "default" == t[a].rotate || "d" == t[a].rotate ? 0 : 999 == t[a].rotate || "random" == t[a].rotate ? Math.round(360 * Math.random()) : t[a].rotate, t[a].rotate = window._rs_ie || window._rs_ie9 ? 0 : t[a].rotate, (d < 11 || 16 === d || 17 === d || 18 === d || l.nTR >= 27 && l.nTR <= 30) && (t[a].slots = i(e.animation.slotamount, u), t[a].slots = null == t[a].slots || "default" == t[a].slots || "d" == t[a].slots ? l.TR[11] : "random" == t[a].slots ? Math.round(12 * Math.random() + 4) : t[a].slots, t[a].slots = t[a].slots < 1 ? "boxslide" == l.TR[0] ? Math.round(6 * Math.random() + 3) : "boxslide" == l.TR[0] || "flyin" == l.TR[0] ? Math.round(4 * Math.random() + 1) : t[a].slots : t[a].slots, t[a].slots = (4 == d || 5 == d || 6 == d) && t[a].slots < 3 ? 3 : t[a].slots, t[a].slots = 0 != l.TR[3] ? Math.min(t[a].slots, l.TR[3]) : t[a].slots, t[a].slots = 9 == d ? t[a].width / t[a].slots : 10 == d ? t[a].height / t[a].slots : t[a].slots, t[a].slots = jQuery.inArray(d, [19, 20, 21, 22, 23, 24, 25, 27]) >= 0 ? 1 : t[a].slots, t[a].slots = 3 != d && 8 != d && 10 != d || "vertical" !== l.TR[4] ? t[a].slots : t[a].slots + 2, null != l.TR[6] && s(t[a].pr_active_bg, a, l.TR[6], l.TR[4]), null != l.TR[5] && s(t[a].pr_next_bg, a, l.TR[5], l.TR[4])), jQuery.inArray(d, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 17, 18, 27, 28, 29, 30]) >= 0) {
                var h = t[a].pr_next_bg.find("rs-bgvideo");
                h.length > 0 && (c = !0, t[a].mtl.add(tpGS.gsap.set(h, {
                    zIndex: 0,
                    display: "none"
                }), 0), setTimeout(function() {
                    void 0 !== t[a].videoIsPlaying && t[a].videoIsPlaying.length > 0 && t[a].videoIsPlaying[0].id == h[0].id && t.stopVideo(h, a)
                }, m > 50 ? 50 : m - 20), setTimeout(function() {
                    void 0 !== t[a].videoIsPlaying && t[a].videoIsPlaying.length > 0 && t[a].videoIsPlaying[0].id == h[0].id && t.stopVideo(h, a)
                }, m > 100 ? 100 : m - 10))
            }
            var f = 7 === d || 16 === d || 8 === d ? 0 : 1,
                v = d < 11 || 17 === d || 18 === d ? 0 : 1;
            if (p) {
                var y = t[a].pr_next_bg.find("rs-sbg");
                void 0 !== y[0] && t[a].mtl.add(tpGS.gsap.set(y, {
                    scale: 1,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    z: 0,
                    x: 0,
                    y: 0,
                    clearProps: "filter, transform",
                    opacity: v
                }), 0), t[a].mtl.add(tpGS.gsap.set(t[a].pr_next_bg, {
                    transformOrigin: "50% 50% 0",
                    transformPerspective: 600,
                    scale: 1,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    z: 0,
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    clearProps: "filter, transform"
                }), 0), t[a].mtl.add(tpGS.gsap.set(t[a].pr_next_bg.parent(), {
                    backgroundColor: "transparent"
                }), 0)
            }
            if (g) {
                var b = t[a].pr_active_bg.find("rs-sbg");
                void 0 !== b[0] && t[a].mtl.add(tpGS.gsap.set(b, {
                    scale: 1,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    z: 0,
                    x: 0,
                    y: 0,
                    clearProps: "filter, transform",
                    opacity: f
                }), 0), t[a].mtl.add(tpGS.gsap.set(t[a].pr_active_bg, {
                    transformOrigin: "50% 50% 0",
                    transformPerspective: 600,
                    scale: 1,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    z: 0,
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    clearProps: "filter, transform"
                }), 0), t[a].mtl.add(tpGS.gsap.set(t[a].pr_active_bg.parent(), {
                    backgroundColor: "transparent"
                }), 0)
            }
            var _ = i(e.animation.easein, u),
                w = i(e.animation.easeout, u);
            if (_ = "default" === _ || "d" === _ ? l.TR[8] || "power2.inOut" : _ || l.TR[8] || "power2.inOut", w = "default" === w || "d" === w ? l.TR[9] || "power2.inOut" : w || l.TR[9] || "power2.inOut", d >= 31) {
                var x = {
                    canvas: t[a].pr_next_bg[0].getElementsByClassName("bgcanvas")[0]
                };
                if (x.ctx = x.canvas.getContext("2d"), x.oBG_next = t[a].pr_next_bg[0].getElementsByTagName("rs-sbg")[0], x.img_next = t.getLoadObj(a, t.gA(x.oBG_next, "src-rs-ref")), x.col_next = t.gA(x.oBG_next, "bgcolor"), g && (x.oBG_act = t[a].pr_active_bg[0].getElementsByTagName("rs-sbg")[0], x.img_act = t.getLoadObj(a, t.gA(x.oBG_act, "src-rs-ref")), x.col_act = t.gA(x.oBG_act, "bgcolor")), x.ctx.clearRect(0, 0, x.canvas.width, x.canvas.height), x.canvas.width = t[a].width, x.canvas.height = t[a].height, x.canvas.style.background = "transparent", x.canvas.style.display = "block", x.oBG_next.style.display = "none", void 0 !== x.col_next && x.col_next.indexOf("gradient") >= 0 && (x.col_next = "transparent"), void 0 !== x.col_act && x.col_act.indexOf("gradient") >= 0 && (x.col_act = "transparent"), 31 === d) {
                    for (var k = "transparent" !== x.col_next && void 0 !== x.col_next ? {
                            x: 0,
                            y: 0,
                            width: t[a].width,
                            height: t[a].height
                        } : r("contain" === x.oBG_next.style.backgroundSize, t[a].width, t[a].height, x.img_next.width, x.img_next.height), S = void 0 === x.oBG_act ? void 0 : "transparent" !== x.col_act && void 0 !== x.col_act ? {
                            x: 0,
                            y: 0,
                            width: t[a].width,
                            height: t[a].height
                        } : r("contain" === x.oBG_act.style.backgroundSize, t[a].width, t[a].height, x.img_act.width, x.img_act.height), L = t[a].width / t[a].slots, T = L / 2, O = t[a].height, A = [], R = 0; R < t[a].slots + 1; R++) A.push({
                        mt: O,
                        it: O / 4,
                        ml: 0,
                        o: 2
                    });
                    t[a].mtl.add(tpGS.gsap.staggerTo(A, 2 * m / 1e3, {
                        mt: 0,
                        it: 0,
                        ml: T,
                        o: 0,
                        ease: "power3.out",
                        onUpdate: function() {
                            var e = 0;
                            x.ctx.clearRect(0, 0, x.canvas.width, x.canvas.height);
                            for (var i = 0; i < t[a].slots + 1; i++) {
                                var r = A[i].mt,
                                    s = A[i].ml,
                                    n = A[i].it,
                                    l = A[i].mt - O,
                                    d = A[i].ml + T,
                                    c = A[i].it - O / 4;
                                o({
                                    ctx: x.ctx,
                                    poly: [
                                        [e - T + s, 0 + r],
                                        [e + T + 1 + s, 0 + r],
                                        [e + 1 + s, O + r],
                                        [e - L + s, O + r]
                                    ],
                                    bg: {
                                        overlay: "rgba(0,0,0," + A[i].o + ")",
                                        img: x.img_next.img,
                                        col: x.col_next,
                                        offsetx: k.x,
                                        offsety: k.y + n,
                                        width: k.width,
                                        height: k.height
                                    }
                                }), void 0 !== x.col_act && (x.oBG_act.style.display = "none", o({
                                    ctx: x.ctx,
                                    poly: [
                                        [e - T + d, 0 + l],
                                        [e + T + 1 + d, 0 + l],
                                        [e + 1 + d, O + l],
                                        [e - L + d, O + l]
                                    ],
                                    bg: {
                                        overlay: "rgba(0,0,0," + (1 - A[i].o) + ")",
                                        img: x.img_act.img,
                                        col: x.col_act,
                                        offsetx: S.x,
                                        offsety: S.y + c,
                                        width: S.width,
                                        height: S.height
                                    }
                                })), e += L
                            }
                        }
                    }, .2, function() {
                        x.ctx.clearRect(0, 0, x.canvas.width, x.canvas.height), x.canvas.style.display = "none", x.oBG_next.style.display = "block"
                    }), 0)
                }
            }
            if (0 == d) {
                var I = Math.ceil(t[a].height / t[a].sloth),
                    z = 0;
                t[a].pr_next_bg.find(".slotslide").each(function(e) {
                    z = ++z === I ? 0 : z, t[a].rotate = 1 === l.trC ? 45 : t[a].rotate, t[a].mtl.add(tpGS.gsap.from(this, m / 2e3, {
                        opacity: 0,
                        transformStyle: "flat",
                        transformPerspective: 600,
                        scale: 0,
                        rotationZ: 0 !== t[a].rotate ? Math.random() * t[a].rotate - t[a].rotate / 2 : 0,
                        force3D: "auto",
                        ease: _
                    }), (10 * e + 30 * z) / 3e3)
                })
            } else if (1 == d) t[a].pr_next_bg.find(".slotslide").each(function(e) {
                t[a].mtl.add(tpGS.gsap.from(this, (Math.random() * m + 300) / 1e3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    rotation: t[a].rotate,
                    ease: _
                }), (500 * Math.random() + 200) / 1e3)
            });
            else if (2 == d || 3 == d) t[a].pr_active_bg.find(".slotslide").each(function() {
                t[a].mtl.add(tpGS.gsap.to(this, m / 1e3, {
                    y: 3 === d ? t[a].sloth : 0,
                    x: 2 === d ? t[a].slotw : 0,
                    ease: _,
                    force3D: "auto",
                    rotation: 0 - t[a].rotate
                }), 0)
            }), t[a].pr_next_bg.find(".slotslide").each(function() {
                t[a].mtl.add(tpGS.gsap.from(this, m / 1e3, {
                    y: 3 == d ? 1 === n ? 0 - t[a].sloth : t[a].sloth : 0,
                    x: 2 == d ? 1 === n ? 0 - t[a].slotw : t[a].slotw : 0,
                    ease: _,
                    force3D: "auto",
                    rotation: t[a].rotate
                }), 0)
            });
            else if (4 == d || 5 == d || 6 == d) {
                var C = tpGS.gsap.timeline(),
                    P = m / 1e3 - m / 1e3 / t[a].slots;
                t[a].slots -= t[a].slots % 2 == 1 ? 1 : 0, t[a].pr_active_bg.find(".slotslide").each(function(e) {
                    var i = 6 !== d ? e : e > t[a].slots / 2 ? t[a].slots - e : e,
                        r = (5 !== d ? i : t[a].slots - i) * (P / t[a].slots) / (6 === d ? 1.3 : 1);
                    C.add(tpGS.gsap.to(this, P, {
                        transformPerspective: 600,
                        force3D: "auto",
                        y: 1 !== n ? t[a].height : -t[a].height,
                        opacity: .75,
                        rotation: t[a].rotate,
                        ease: _,
                        delay: r
                    }), 0), t[a].mtl.add(C, 0)
                }), t[a].pr_next_bg.find(".slotslide").each(function(e) {
                    var i = 6 !== d ? e : e > t[a].slots / 2 ? t[a].slots - e : e,
                        r = (5 !== d ? i : t[a].slots - i) * (P / t[a].slots) / (6 === d ? 1.3 : 1);
                    C.add(tpGS.gsap.from(this, P, {
                        y: 1 == n ? t[a].height : -t[a].height,
                        opacity: .75,
                        rotation: t[a].rotate,
                        force3D: "auto",
                        ease: w,
                        delay: r
                    }), 0), t[a].mtl.add(C, 0)
                })
            } else if (7 == d || 8 == d) m = Math.min(t[a].duration || m, m), t[a].pr_active_bg.find(".slotslide").each(function(e) {
                var i = e > t[a].slots / 2 ? t[a].slots - e : e;
                t[a].mtl.add(tpGS.gsap.to(this.getElementsByTagName("div"), m / 1e3, {
                    x: 8 === d && 0 === l.trC ? 0 : i * t[a].slotw / 3,
                    y: 8 === d && 0 === l.trC ? i * t[a].sloth / 3 : 0,
                    ease: _,
                    transformPerspective: 600,
                    force3D: "auto",
                    filter: "blur(2px)",
                    scale: 1.2,
                    opacity: 0
                }), 0)
            }), t[a].pr_next_bg.find(".slotslide").each(function(e) {
                var i = e > t[a].slots / 2 ? t[a].slots - e : e;
                t[a].mtl.add(tpGS.gsap.fromTo(this.getElementsByTagName("div"), m / 1e3, {
                    x: 8 === d && 0 === l.trC ? 0 : 0 - i * t[a].slotw / 3,
                    y: 8 === d && 0 === l.trC ? 0 - i * t[a].sloth / 3 : 0,
                    filter: "blur(2px)",
                    opacity: 0,
                    transformPerspective: 600,
                    scale: 1.2
                }, {
                    x: 0,
                    y: 0,
                    ease: w,
                    force3D: "auto",
                    scale: 1,
                    filter: "blur(0px)",
                    opacity: 1,
                    rotation: 0
                }), 0)
            });
            else if (9 == d || 10 == d) {
                var B = t[a].pr_next_bg[0].getElementsByClassName("slotslide"),
                    G = m - m / 1.8;
                for (R = 0; R < B.length; R++) t[a].mtl.add(tpGS.gsap.fromTo(B[R], (m - R * (G / t[a].slots)) / 1e3, {
                    zIndex: 10,
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: "none",
                    delay: R * (G / t[a].slots) / 1e3
                }), 0)
            } else if (11 == d) {
                l.trC = Math.min(12, l.trC);
                var M = 2 == l.trC ? "#000000" : 3 == l.trC ? "#ffffff" : "transparent";
                switch (m = 0 === m ? 10 : m, l.trC) {
                    case 0:
                        p && t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_next_bg, m / 1e3, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            force3D: "auto",
                            ease: _
                        }), 0);
                        break;
                    case 1:
                        p && t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_next_bg, m / 1e3, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            force3D: "auto",
                            ease: _
                        }), 0), t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_active_bg, m / 1e3, {
                            autoAlpha: 1
                        }, {
                            autoAlpha: 0,
                            force3D: "auto",
                            ease: _
                        }), 0);
                        break;
                    case 2:
                    case 3:
                    case 4:
                        t[a].mtl.add(tpGS.gsap.set(t[a].pr_active_bg.parent(), {
                            backgroundColor: M,
                            force3D: "auto"
                        }), 0), t[a].mtl.add(tpGS.gsap.set(t[a].pr_next_bg.parent(), {
                            backgroundColor: "transparent",
                            force3D: "auto"
                        }), 0), g && t[a].mtl.add(tpGS.gsap.to(t[a].pr_active_bg, m / 2e3, {
                            autoAlpha: 0,
                            force3D: "auto",
                            ease: _
                        }), 0), p && t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_next_bg, m / 2e3, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            force3D: "auto",
                            ease: _
                        }), m / 2e3);
                        break;
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        var D = "blur(" + (jQuery.inArray(l.trC, [9, 10]) >= 0 ? 5 : jQuery.inArray(l.trC, [11, 12]) >= 0 ? 10 : 0) + "px) grayscale(" + (jQuery.inArray(l.trC, [5, 6, 7, 8]) >= 0 ? 100 : 0) + "%) brightness(" + (jQuery.inArray(l.trC, [7, 8]) >= 0 ? 300 : 0) + "%)",
                            j = "blur(0px) grayscale(0%) brightness(100%)";
                        p && t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_next_bg, m / 1e3, {
                            autoAlpha: 0,
                            filter: D,
                            "-webkit-filter": D
                        }, {
                            autoAlpha: 1,
                            filter: j,
                            "-webkit-filter": j,
                            force3D: "auto",
                            ease: _
                        }), 0), jQuery.inArray(l.trC, [6, 8, 10]) >= 0 && t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_active_bg, m / 1e3, {
                            autoAlpha: 1,
                            filter: j,
                            "-webkit-filter": j
                        }, {
                            autoAlpha: 0,
                            force3D: "auto",
                            ease: _,
                            filter: D,
                            "-webkit-filter": D
                        }), 0)
                }
                t[a].mtl.add(tpGS.gsap.set(t[a].pr_next_bg.find("rs-sbg"), {
                    autoAlpha: 1
                }), 0), g && t[a].mtl.add(tpGS.gsap.set(t[a].pr_active_bg.find("rs-sbg"), {
                    autoAlpha: 1
                }), 0)
            } else if (12 == d || 13 == d || 14 == d || 15 == d) {
                var H = 3 == l.trC ? m / 1300 : m / 1e3,
                    N = m / 1e3,
                    W = 5 == l.trC || 6 == l.trC ? 0 : t[a].width,
                    F = 5 == l.trC || 6 == l.trC ? 0 : t[a].currentSlideHeight,
                    E = 12 == d ? W : 15 == d ? 0 - W : 0,
                    Q = 13 == d ? 5 == l.trC || 6 == l.trC ? 0 : t[a].height : 14 == d ? 5 == l.trC || 6 == l.trC ? 0 : 0 - t[a].height : 0,
                    V = 1 == l.trC || 2 == l.trC || 5 == l.trC || 6 == l.trC ? 0 : 1,
                    Y = 4 == l.trC || 5 == l.trC ? .6 : 6 == l.trC ? 1.4 : 1,
                    X = 5 == l.trC ? 1.4 : 6 == l.trC ? .6 : 1;
                if (7 != l.trC && 4 != l.trC || (W = 0, F = 0), 8 == l.trC ? (t[a].mtl.add(tpGS.gsap.set(t[a].pr_active_slide, {
                        zIndex: 20
                    }), 0), t[a].mtl.add(tpGS.gsap.set(t[a].pr_next_slide, {
                        zIndex: 15
                    }), 0), t[a].mtl.add(tpGS.gsap.to(t[a].pr_next_bg, .01, {
                        overflow: "hidden",
                        x: 0,
                        y: 0,
                        scale: 1,
                        autoAlpha: 1,
                        rotation: 0,
                        overwrite: !0,
                        immediateRender: !0,
                        force3D: "auto"
                    }), 0)) : (void 0 !== t[a].pr_active_slide && t[a].pr_active_slide.length > 0 && t[a].mtl.add(tpGS.gsap.set(t[a].pr_active_slide, {
                        zIndex: 15
                    }), 0), void 0 !== t[a].pr_next_slide && t[a].pr_next_slide.length > 0 && t[a].mtl.add(tpGS.gsap.set(t[a].pr_next_slide, {
                        zIndex: 20
                    }), 0), p && t[a].mtl.add(tpGS.gsap.from(t[a].pr_next_bg, H, {
                        x: E,
                        y: Q,
                        overflow: "hidden",
                        scale: X,
                        autoAlpha: V,
                        rotation: t[a].rotate,
                        ease: _,
                        force3D: "auto"
                    }), 0)), 1 != l.trC) switch (d) {
                    case 12:
                        g && t[a].mtl.add(tpGS.gsap.to(t[a].pr_active_bg, N, {
                            x: 0 - W + "px",
                            overflow: "hidden",
                            force3D: "auto",
                            scale: Y,
                            autoAlpha: V,
                            rotation: t[a].rotate,
                            ease: w
                        }), 0);
                        break;
                    case 15:
                        g && t[a].mtl.add(tpGS.gsap.to(t[a].pr_active_bg, N, {
                            x: W + "px",
                            overflow: "hidden",
                            force3D: "auto",
                            scale: Y,
                            autoAlpha: V,
                            rotation: t[a].rotate,
                            ease: w
                        }), 0);
                        break;
                    case 13:
                        g && t[a].mtl.add(tpGS.gsap.to(t[a].pr_active_bg, N, {
                            y: 0 - F + "px",
                            overflow: "hidden",
                            force3D: "auto",
                            scale: Y,
                            autoAlpha: V,
                            rotation: t[a].rotate,
                            ease: w
                        }), 0);
                        break;
                    case 14:
                        g && t[a].mtl.add(tpGS.gsap.to(t[a].pr_active_bg, N, {
                            y: F + "px",
                            overflow: "hidden",
                            force3D: "auto",
                            scale: Y,
                            autoAlpha: V,
                            rotation: t[a].rotate,
                            ease: w
                        }), 0)
                }
            } else if (16 == d) {
                var J = 1 === n ? "80% 50% 0" : "20%  50% 0";
                t[a].mtl.add(tpGS.gsap.set(t[a].pr_active_slide, {
                    zIndex: 20
                }), 0), t[a].mtl.add(tpGS.gsap.set(t[a].pr_next_slide, {
                    zIndex: 15
                }), 0), t[a].pr_active_bg.find(".slotslide").each(function(e) {
                    t[a].mtl.add(tpGS.gsap.fromTo(this, m / 1e3, {
                        x: 0,
                        rotationZ: 0,
                        opacity: 1,
                        y: 0,
                        z: 0,
                        scale: 1
                    }, {
                        opacity: 1,
                        x: 1 === n ? 0 == e ? -t[a].width / 1.6 : -t[a].width / 1.8 : 0 === e ? t[a].width / 1.6 : t[a].width / 1.8,
                        rotationZ: 1 === n ? 0 === e ? -35 : 25 : 0 === e ? 25 : -35,
                        z: 0,
                        y: 0 == e ? "-120%" : "140%",
                        scale: .8,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: J,
                        delay: 0,
                        ease: _
                    }), 0), t[a].mtl.add(tpGS.gsap.fromTo(this, m / 2e3, {
                        opacity: 1
                    }, {
                        opacity: 0,
                        delay: m / 2e3
                    }), 0)
                }), p && t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_next_bg, m / 1e3 - m / 7e3, {
                    x: 100 * Math.random() - 50,
                    opacity: 1,
                    scale: .9,
                    rotationZ: 10 * Math.random() - 5
                }, {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    rotationZ: 0,
                    ease: _,
                    force3D: "auto",
                    delay: m / 7e3
                }), 0)
            } else if (17 == d || 18 == d) t[a].pr_next_bg.find(".slotslide").each(function(e) {
                t[a].mtl.add(tpGS.gsap.fromTo(this, m / t[a].slots / 1e3, {
                    opacity: 0,
                    y: 0,
                    x: 0,
                    rotationY: 17 === d ? 0 : 90,
                    scale: 1,
                    rotationX: 17 === d ? -90 : 0,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: 17 === d ? "top center" : "center left"
                }, {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    rotationX: 0,
                    rotationY: 0,
                    force3D: "auto",
                    ease: w,
                    delay: e * (m / t[a].slots / 2e3)
                }), 0)
            }), t[a].pr_active_bg.find(".slotslide").each(function(e) {
                t[a].mtl.add(tpGS.gsap.fromTo(this, m / t[a].slots / 1e3, {
                    opacity: 1,
                    rotationY: 0,
                    scale: 1,
                    rotationX: 0,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: 17 === d ? "bottom center" : "center right"
                }, {
                    opacity: 0,
                    rotationX: 17 === d ? 110 : 0,
                    rotationY: 17 === d ? 0 : 110,
                    force3D: "auto",
                    ease: _,
                    delay: e * (m / t[a].slots / 2e3)
                }), 0)
            });
            else if (19 == d || 22 == d || 23 == d || 24 == d) {
                t[a].mtl.add(tpGS.gsap.set(t[a].pr_active_slide, {
                    zIndex: 20
                }), 0), t[a].mtl.add(tpGS.gsap.set(t[a].pr_next_slide, {
                    zIndex: 10
                }), 0);
                J = 19 === d ? "center center -" + t[a].height / 2 : 22 === d ? "center center " + t[a].height / 2 : 23 === d ? "center center -" + t[a].width / 2 : "center center " + t[a].width / 2;
                var q = [];
                tpGS.gsap.set(t[a].c, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    transformPerspective: 600
                }), p && (q.push(t[a].pr_next_bg), t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_next_bg, m / 1e3, {
                    rotationX: 19 == d || 22 === d ? 1 == n ? -90 : 90 : 0,
                    rotationY: 23 == d || 24 === d ? 1 == n ? -90 : 90 : 0,
                    x: 0,
                    scale: 1,
                    y: 0,
                    overflow: "hidden",
                    autoAlpha: 1,
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    force3D: "auto",
                    transformPerspective: 1200,
                    transformOrigin: J
                }, {
                    overflow: "hidden",
                    x: 0,
                    autoAlpha: 1,
                    rotationX: 0,
                    rotationY: 0,
                    y: 0,
                    scale: 1,
                    delay: 0,
                    ease: _,
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    force3D: "auto",
                    transformPerspective: 1200,
                    transformOrigin: J
                }), 0), t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_next_bg, m / 2e3, {
                    z: 19 == d || 23 === d ? -200 : 0
                }, {
                    z: 19 === d || 23 === d ? 0 : -200,
                    ease: "power3.inOut",
                    delay: 19 === d || 23 === d ? m / 2e3 : 0
                }), 0)), 22 !== d && 24 !== d || (g && q.push(t[a].pr_active_bg), t[a].mtl.add(tpGS.gsap.fromTo(q, m / 2e3, {
                    z: -200
                }, {
                    z: 0,
                    ease: "power2.in",
                    delay: m / 2e3
                }), 0)), g && t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_active_bg, m / 2e3, {
                    z: 0
                }, {
                    z: -200,
                    ease: "power3.inOut",
                    delay: 0,
                    force3D: "auto"
                }), 0), !g || 19 !== d && 23 !== d || t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_active_bg, m / 2e3, {
                    autoAlpha: 1
                }, {
                    autoAlpha: 0,
                    ease: "none",
                    delay: m / 2e3,
                    force3D: "auto"
                }), 0), g && t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_active_bg, m / 1e3, {
                    overflow: "hidden",
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    y: 0,
                    x: 0,
                    scale: 1,
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    force3D: "auto",
                    transformPerspective: 1200,
                    transformOrigin: J
                }, {
                    rotationX: 19 === d || 22 === d ? 1 == n ? 90 : -90 : 0,
                    rotationY: 23 === d || 24 === d ? 1 == n ? 90 : -90 : 0,
                    overflow: "hidden",
                    y: 0,
                    scale: 1,
                    delay: 0,
                    force3D: "auto",
                    ease: _,
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    transformPerspective: 1200,
                    transformOrigin: J
                }), 0)
            } else if (20 == d) {
                J = 1 === n ? "20% " : "80% ";
                J += "60% -50%", p && t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_next_bg, m / 1e3, {
                    x: 1 === n ? -t[a].width : t[a].width,
                    rotationX: 20,
                    z: -t[a].width,
                    autoAlpha: 0,
                    y: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: J,
                    rotationY: 1 === n ? 50 : -50
                }, {
                    x: 0,
                    rotationX: 0,
                    autoAlpha: 1,
                    y: 0,
                    z: 0,
                    scale: 1,
                    rotationY: 0,
                    delay: 0,
                    ease: _
                }), 0), J = 1 != n ? "20% " : "80% ", J += "60% -50%", t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_active_bg, m / 1e3, {
                    autoAlpha: 1,
                    rotationX: 0,
                    y: 0,
                    z: 0,
                    scale: 1,
                    x: 0,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: J,
                    rotationY: 0
                }, {
                    autoAlpha: 1,
                    rotationX: 20,
                    y: 0,
                    z: -t[a].width,
                    x: 1 != n ? -t[a].width / 1.2 : t[a].width / 1.2,
                    force3D: "auto",
                    rotationY: 1 === n ? -50 : 50,
                    delay: 0,
                    ease: "power2.inOut"
                }), 0)
            } else if (21 == d || 25 == d) {
                var Z = 25 === d ? t[a].rotate : 1 === n ? 90 : -90,
                    U = 25 === d ? 1 === n ? -90 : 90 : t[a].rotate;
                J = 1 === n ? 25 === d ? "center top 0" : "left center 0" : 25 === d ? "center bottom 0" : "right center 0";
                p && t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_next_bg, m / 1e3, {
                    transformStyle: "flat",
                    rotationX: U,
                    y: 0,
                    x: 0,
                    autoAlpha: 0,
                    force3D: "auto",
                    transformPerspective: 1200,
                    transformOrigin: J,
                    rotationY: Z
                }, {
                    autoAlpha: 1,
                    rotationX: 0,
                    rotationY: 0,
                    ease: _
                }), 0), J = 1 === n ? 25 === d ? "center bottom 0" : "right center 0" : 25 === d ? "center top 0" : "left center 0", Z = 25 !== d ? -Z : Z, U = 25 !== d ? U : -U, t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_active_bg, m / 1e3, {
                    rotationX: 0,
                    rotationY: 0,
                    transformStyle: "flat",
                    transformPerspective: 1200,
                    force3D: "auto"
                }, {
                    immediateRender: !0,
                    rotationX: U,
                    transformOrigin: J,
                    rotationY: Z,
                    ease: w
                }), 0)
            } else if (26 == d) m = 0, p && (t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_next_bg, .001, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                force3D: "auto",
                ease: _
            }), 0), t[a].mtl.add(tpGS.gsap.set(t[a].pr_next_bg.find("rs-sbg"), {
                autoAlpha: 1
            }), 0)), g && (t[a].mtl.add(tpGS.gsap.to(t[a].pr_active_bg, .001, {
                autoAlpha: 0,
                force3D: "auto",
                ease: _
            }), 0), t[a].mtl.add(tpGS.gsap.set(t[a].pr_active_bg.find("rs-sbg"), {
                autoAlpha: 1
            }), 0));
            else if (27 == d || 28 == d || 29 == d || 30 == d) {
                var K = t[a].pr_next_bg.find(".slot"),
                    $ = 27 == d || 29 == d ? "-100%" : "100%",
                    ee = 27 == d || 29 == d ? "100%" : "-100%",
                    te = 27 == d || 29 == d ? "-80%" : "80%",
                    ie = 27 == d || 29 == d ? "80%" : "-80%",
                    ae = 27 == d || 29 == d ? "10%" : "-10%",
                    re = {
                        overwrite: "all"
                    },
                    oe = {
                        autoAlpha: 0,
                        zIndex: 1,
                        force3D: "auto",
                        ease: _
                    },
                    se = {
                        position: "inherit",
                        autoAlpha: 0,
                        overwrite: "all",
                        zIndex: 1
                    },
                    ne = {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: w
                    },
                    le = {
                        overwrite: "all",
                        zIndex: 2,
                        opacity: 1,
                        autoAlpha: 1
                    },
                    de = {
                        autoAlpha: 1,
                        force3D: "auto",
                        overwrite: "all",
                        ease: _
                    },
                    ce = {
                        overwrite: "all",
                        zIndex: 2,
                        autoAlpha: 1
                    },
                    pe = {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: _
                    },
                    ge = 1 == (27 == d || 28 == d ? 1 : 2) ? "y" : "x";
                re[ge] = "0%", oe[ge] = $, se[ge] = ae, ne[ge] = 0, le[ge] = ee, de[ge] = $, ce[ge] = te, pe[ge] = ie, K.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'), g && t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_active_bg, m / 1e3, re, oe), 0), p && t[a].mtl.add(tpGS.gsap.fromTo(t[a].pr_next_bg.find("rs-sbg"), m / 2e3, se, ne), m / 2e3), t[a].mtl.add(tpGS.gsap.fromTo(K, m / 1e3, le, de), 0), t[a].mtl.add(tpGS.gsap.fromTo(K.find(".slotslide div"), m / 1e3, ce, pe), 0)
            }
            c && h.length > 0 && t[a].mtl.add(tpGS.gsap.set(h, {
                zIndex: 30,
                display: "block",
                onComplete: function() {
                    t.playVideo(h, a)
                }
            }))
        },
        r = function(e, t, i, a, r) {
            var o = a / r,
                s = t / i,
                n = t,
                l = i;
            return (e ? o > s : o < s) ? l = n / o : n = l * o, {
                width: n,
                height: l,
                x: (t - n) / 2,
                y: (i - l) / 2
            }
        },
        o = function(e) {
            e.ctx.save(), e.ctx.beginPath(), e.ctx.moveTo(e.poly[0][0], e.poly[0][1]);
            for (var t = 1; t < e.poly.length; t++) e.ctx.lineTo(e.poly[t][0], e.poly[t][1]);
            e.ctx.closePath(), e.ctx.lineWidth = 2, e.ctx.stroke(), e.ctx.clip(), void 0 !== e.bg.img && e.ctx.drawImage(e.bg.img, e.bg.offsetx, e.bg.offsety, e.bg.width, e.bg.height), "transparent" !== e.bg.col && void 0 !== e.bg.col && (e.ctx.fillStyle = e.bg.col, e.ctx.fillRect(e.bg.offsetx, e.bg.offsety, e.bg.width, e.bg.height)), void 0 !== e.bg.overlay && (e.ctx.fillStyle = e.bg.overlay, e.ctx.fillRect(e.bg.offsetx, e.bg.offsety, e.bg.width, e.bg.height)), e.ctx.restore()
        },
        s = function(e, i, a, r) {
            if (0 !== e.length) {
                var o = e.find("rs-sbg"),
                    s = o.data("mediafilter"),
                    n = e.data("zoomstart"),
                    l = e.data("rotationstart");
                null != o.data("currotate") && (l = o.data("currotate")), null != o.data("curscale") && "box" == r ? n = 100 * o.data("curscale") : null != o.data("curscale") && (n = o.data("curscale")),
                    function(e, i) {
                        t[i].slotw = Math.ceil(t[i].width / t[i].slots), "fullscreen" == t[i].sliderLayout ? t[i].sloth = Math.ceil(t.getWinH(i) / t[i].slots) : t[i].sloth = Math.ceil(t[i].height / t[i].slots)
                    }(0, i);
                var d = void 0 !== o[0] && void 0 !== o[0].dataset && void 0 !== o[0].dataset.lazyload ? o[0].dataset.lazyload : o.attr("src"),
                    c = t[i].width,
                    p = t[i].autoHeight ? t[i].c.height() : t[i].height,
                    g = o.data("fxof"),
                    u = 0,
                    m = e.data("bgcolor") || "transparent",
                    h = e.data("bgfit") || "cover",
                    f = e.data("bgrepeat") || "no-repeat",
                    v = e.data("bgposition") || "center center",
                    y = void 0 !== m && m.indexOf("gradient") >= 0 ? "background:" + m : "background-color:" + m + ";background-image:url(" + d + ");background-repeat:" + f + ";background-size:" + h + ";background-position:" + v,
                    b = "";
                g = null == g ? 0 : g;
                var _ = e[0].parentNode;
                if (e.detach(), e.find(".slot").each(function() {
                        jQuery(this).remove()
                    }), "box" === r)
                    for (var w = 0, x = 0, k = 0; k < t[i].slots; k++) {
                        x = 0;
                        for (var S = 0; S < t[i].slots; S++) b += '<div class="slot" style="' + (null != n && null != l ? "transform:rotateZ(" + l + "deg)" : "") + ";position:absolute;overflow:hidden;top:" + (0 + x) + "px;left:" + (g + w) + "px;width:" + t[i].slotw + "px;height:" + t[i].sloth + 'px;"><div class="slotslide ' + s + '" data-x="' + w + '" data-y="' + x + '" style="position:absolute;top:0px;left:0px;width:' + t[i].slotw + "px;height:" + t[i].sloth + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - x) + "px;left:" + (0 - w) + "px;width:" + c + "px;height:" + p + "px;" + y + ';"></div></div></div>', x += t[i].sloth;
                        w += t[i].slotw
                    } else if ("horizontal" === r) {
                        if (!a) u = 0 - t[i].slotw;
                        for (S = 0; S < t[i].slots; S++) b += '<div class="slot" style="' + (null != n && null != l ? "transform:rotateZ(" + l + "deg)" : "") + ";position:absolute;overflow:hidden;top:0px;left:" + (g + S * t[i].slotw) + "px;width:" + (t[i].slotw + .3) + "px;height:" + p + 'px"><div class="slotslide ' + s + '" style="position:absolute;top:0px;left:' + u + "px;width:" + (t[i].slotw + .6) + "px;height:" + p + 'px;overflow:hidden;"><div style="position:absolute;top:0px;left:' + (0 - S * t[i].slotw) + "px;width:" + c + "px;height:" + p + "px;" + y + ';"></div></div></div>'
                    }
                if ("vertical" === r) {
                    if (!a) u = 0 - t[i].sloth;
                    for (S = 0; S < t[i].slots; S++) b += '<div class="slot" style="' + (null != n && null != l ? "transform:rotateZ(" + l + "deg)" : "") + ";position:absolute;overflow:hidden;top:" + (0 + S * t[i].sloth) + "px;left:" + g + "px;width:" + c + "px;height:" + t[i].sloth + 'px"><div class="slotslide ' + s + '" style="position:absolute;top:' + u + "px;left:0px;width:" + c + "px;height:" + t[i].sloth + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - S * t[i].sloth) + "px;left:0px;width:" + c + "px;height:" + p + "px;" + y + ';"></div></div></div>'
                }
                e.append(b), _.appendChild(e[0])
            }
        }
}(jQuery),
function(e) {
    "use strict";
    var t = jQuery.fn.revolution,
        i = t.is_mobile();
    t.is_android();

    function a(e) {
        return null == e ? -1 : jQuery.isNumeric(e) ? e : e.split(":").length > 1 ? 60 * parseInt(e.split(":")[0], 0) + parseInt(e.split(":")[1], 0) : e
    }
    jQuery.extend(!0, t, {
        preLoadAudio: function(e, i) {
            t[i].videos = void 0 === t[i].videos ? {} : t[i].videos, e.find(".rs-layer-audio").each(function() {
                var a = jQuery(this),
                    r = t[i].videos[a[0].id] = void 0 === t[i].videos[a[0].id] ? v(a.data(), "audio", t.gA(e[0], "key")) : t[i].videos[a[0].id],
                    o = {};
                0 === a.find("audio").length && (o.src = null != r.mp4 ? r.mp4 : "", o.pre = r.pload || "", this.id = void 0 === this.id || "" === this.id ? a.attr("audio-layer-" + Math.round(199999 * Math.random())) : this.id, o.id = this.id, o.status = "prepared", o.start = jQuery.now(), o.waittime = void 0 !== r.ploadwait ? 1e3 * r.ploadwait : 5e3, "auto" != o.pre && "canplaythrough" != o.pre && "canplay" != o.pre && "progress" != o.pre || (void 0 === t[i].audioqueue && (t[i].audioqueue = []), t[i].audioqueue.push(o), t.manageVideoLayer(a, i, t.gA(e[0], "key"))))
            })
        },
        preLoadAudioDone: function(e, i, a) {
            var r = t[i].videos[e[0].id];
            t[i].audioqueue && t[i].audioqueue.length > 0 && jQuery.each(t[i].audioqueue, function(e, t) {
                r.mp4 !== t.src || t.pre !== a && "auto" !== t.pre || (t.status = "loaded")
            })
        },
        resetVideo: function(e, a, r, o) {
            var s = t[a].videos[e[0].id];
            switch (s.type) {
                case "youtube":
                    s.rwd && null != s.player && void 0 !== s.player.seekTo && (s.player.seekTo(-1 == s.ssec ? 0 : s.ssec), s.player.pauseVideo()), 0 != e.find("rs-poster").length || s.bgvideo || "preset" === r || tpGS.gsap.to(e.find("iframe"), .3, {
                        opacity: 1,
                        display: "block",
                        ease: "power3.inOut"
                    });
                    break;
                case "vimeo":
                    void 0 !== s.vimeoplayer && !o && s.rwd && (0 !== s.ssec && -1 !== s.ssec || s.bgvideo || e.find("rs-poster").length > 0) && (s.vimeoplayer.setCurrentTime(-1 == s.ssec ? 0 : s.ssec), s.vimeoplayer.pause()), 0 != e.find("rs-poster").length || s.bgvideo || "preset" === r || tpGS.gsap.to(e.find("iframe"), .3, {
                        opacity: 1,
                        display: "block",
                        ease: "power3.inOut"
                    });
                    break;
                case "html5":
                    if (i && s.notonmobile) return !1;
                    tpGS.gsap.to(s.jvideo, .3, {
                        opacity: 1,
                        display: "block",
                        ease: "power3.inOut"
                    }), !s.rwd || e.hasClass("videoisplaying") || isNaN(s.video.duration) || (s.justReseted = !0, s.video.currentTime = -1 == s.ssec ? 0 : s.ssec), ("mute" == s.volume || t.lastToggleState(e.videomutetoggledby) || !0 === t[a].globalmute) && (s.video.muted = !0)
            }
        },
        Mute: function(e, i, a) {
            var r = !1,
                o = t[i].videos[e[0].id];
            switch (o.type) {
                case "youtube":
                    o.player && (!0 === a && o.player.mute(), !1 === a && l(o, parseInt(o.volcache, 0)), r = o.player.isMuted());
                    break;
                case "vimeo":
                    o.volcachecheck || (o.volcache = o.volcache > 1 ? o.volcache / 100 : o.volcache, o.volcachecheck = !0), o.volume = !0 === a ? "mute" : !1 === a ? o.volcache : o.volume, void 0 !== a && null != o.vimeoplayer && n(o, !0 === a ? 0 : o.volcache), r = "mute" == o.volume || 0 === o.volume;
                    break;
                case "html5":
                    o.volcachecheck || (o.volcache = o.volcache > 1 ? o.volcache / 100 : o.volcache, o.volcachecheck = !0), o.video.volume = o.volcache, void 0 !== a && o.video && (o.video.muted = a), r = void 0 !== o.video ? o.video.muted : r
            }
            if (void 0 === a) return r
        },
        stopVideo: function(e, i) {
            if (void 0 !== t[i] && void 0 !== t[i]) {
                var a = t[i].videos[e[0].id];
                if (void 0 !== a) switch (t[i].leaveViewPortBasedStop || (t[i].lastplayedvideos = []), t[i].leaveViewPortBasedStop = !1, a.type) {
                    case "youtube":
                        if (void 0 === a.player || 2 === a.player.getPlayerState() || 5 === a.player.getPlayerState()) return;
                        a.player.pauseVideo(), a.youtubepausecalled = !0, setTimeout(function() {
                            a.youtubepausecalled = !1
                        }, 80);
                        break;
                    case "vimeo":
                        if (void 0 === a.vimeoplayer) return;
                        a.vimeoplayer.pause(), a.vimeopausecalled = !0, setTimeout(function() {
                            a.vimeopausecalled = !1
                        }, 80);
                        break;
                    case "html5":
                        a.video && a.video.pause()
                }
            }
        },
        playVideo: function(e, i) {
            var a = t[i].videos[e[0].id];
            switch (clearTimeout(a.videoplaywait), a.type) {
                case "youtube":
                    if (0 == e.find("iframe").length) e.append(a.videomarkup), u(e, i, !0);
                    else if (null != a.player.playVideo) {
                        var o = a.player.getCurrentTime();
                        a.nseTriggered && (o = -1, a.nseTriggered = !1), -1 != a.ssec && a.ssec > o && a.player.seekTo(a.ssec), !0 !== a.youtubepausecalled && p(a)
                    } else a.videoplaywait = setTimeout(function() {
                        !0 !== a.youtubepausecalled && t.playVideo(e, i)
                    }, 50);
                    break;
                case "vimeo":
                    0 == e.find("iframe").length ? (delete a.vimeoplayer, e.append(a.videomarkup), u(e, i, !0)) : e.hasClass("rs-apiready") ? (a.vimeoplayer = null == a.vimeoplayer ? new Vimeo.Player(e.find("iframe").attr("id")) : a.vimeoplayer, a.vimeoplayer.getPaused() ? setTimeout(function() {
                        var r = void 0 === a.currenttime ? 0 : a.currenttime;
                        a.nseTriggered && (r = -1, a.nseTriggered = !1), -1 != a.ssec && a.ssec > r && a.vimeoplayer.setCurrentTime(a.ssec), ("mute" == a.volume || 0 === a.volume || t.lastToggleState(e.data("videomutetoggledby")) || !0 === t[i].globalmute) && (a.volumetoken = !0, a.vimeoplayer.setVolume(0)), c(a.vimeoplayer)
                    }, 510) : a.videoplaywait = setTimeout(function() {
                        !0 !== a.vimeopausecalled && t.playVideo(e, i)
                    }, 50)) : a.videoplaywait = setTimeout(function() {
                        !0 !== a.vimeopausecalled && t.playVideo(e, i)
                    }, 100);
                    break;
                case "html5":
                    if (a.metaloaded) {
                        d(a.video);
                        o = a.video.currentTime;
                        a.nseTriggered && (o = -1, a.nseTriggered = !1), -1 != a.ssec && a.ssec > o && (a.video.currentTime = a.ssec)
                    } else r(a.video, "loadedmetadata", function(e) {
                        t.resetVideo(e, i), a.video.play();
                        var r = a.video.currentTime;
                        a.nseTriggered && (r = -1, a.nseTriggered = !1), -1 != a.ssec && a.ssec > r && (a.video.currentTime = a.ssec)
                    }(e))
            }
        },
        isVideoPlaying: function(e, i) {
            var a = !1;
            return null != t[i].playingvideos && jQuery.each(t[i].playingvideos, function(t, i) {
                e.attr("id") == i.attr("id") && (a = !0)
            }), a
        },
        removeMediaFromList: function(e, t) {
            b(e, t)
        },
        prepareCoveredVideo: function(e) {
            clearTimeout(t[e].resizePrepareCoverVideolistener);
            var i = "carousel" === t[e].sliderType ? t[e].carousel.justify ? void 0 === t[e].carousel.slide_widths ? void 0 : t[e].carousel.slide_widths[t[e].carousel.focused] : t[e].carousel.slide_width : t[e].conw,
                a = "carousel" === t[e].sliderType ? t[e].carousel.slide_height : t[e].conh;
            if (0 === i || 0 === a || void 0 === i || void 0 === a) return t.contWidthManager(e, "containerResized_1"), t.updateDimensions(e), t.setSize(e), void(t[e].resizePrepareCoverVideolistener = setTimeout(function() {
                t.prepareCoveredVideo(e)
            }, 100));
            for (var r in t[e].videos) {
                var o = t[e].videos[r];
                if ((o.bgvideo || o.fcover) && ("html5" === o.type && void 0 !== o.jvideo && tpGS.gsap.set(o.jvideo, {
                        width: i
                    }), void 0 === t[e].activeRSSlide || o.slideid === t.gA(t[e].slides[t[e].activeRSSlide], "key") || void 0 === t[e].pr_next_slide || o.slideid === t.gA(t[e].pr_next_slide[0], "key"))) {
                    o.vd = o.ratio.split(":").length > 1 ? o.ratio.split(":")[0] / o.ratio.split(":")[1] : 1;
                    var s = i / a,
                        n = s / o.vd * 100,
                        l = o.vd / s * 100;
                    "Edge" === t.get_browser() || "IE" === t.get_browser() ? (o.ifr = void 0 === o.ifr ? o.video : o.ifr, s > o.vd ? tpGS.gsap.set(o.ifr, {
                        minWidth: "100%",
                        height: n + "%",
                        x: "-50%",
                        y: "-50%",
                        top: "50%",
                        left: "50%",
                        position: "absolute"
                    }) : tpGS.gsap.set(o.ifr, {
                        minHeight: "100%",
                        width: l + "%",
                        x: "-50%",
                        y: "-50%",
                        top: "50%",
                        left: "50%",
                        position: "absolute"
                    })) : s > o.vd ? tpGS.gsap.set(o.ifr, {
                        height: n + "%",
                        width: "100%",
                        top: -(n - 100) / 2 + "%",
                        left: "0px",
                        position: "absolute"
                    }) : tpGS.gsap.set(o.ifr, {
                        width: l + "%",
                        height: "100%",
                        left: -(l - 100) / 2 + "%",
                        top: "0px",
                        position: "absolute"
                    })
                }
            }
        },
        checkVideoApis: function(e, i) {
            location.protocol;
            if (!t[i].youtubeapineeded && ((null != e.data("ytid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (t[i].youtubeapineeded = !0), t[i].youtubeapineeded && !window.rs_addedyt)) {
                t[i].youtubestarttime = jQuery.now(), window.rs_addedyt = !0;
                var a = document.createElement("script"),
                    r = document.getElementsByTagName("script")[0],
                    o = !0;
                a.src = "https://www.youtube.com/iframe_api", jQuery("head").find("*").each(function() {
                    "https://www.youtube.com/iframe_api" == jQuery(this).attr("src") && (o = !1)
                }), o && r.parentNode.insertBefore(a, r)
            }
            if (!t[i].vimeoapineeded && ((null != e.data("vimeoid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (t[i].vimeoapineeded = !0), t[i].vimeoapineeded && !window.rs_addedvim)) {
                t[i].vimeostarttime = jQuery.now(), window.rs_addedvim = !0;
                var s = document.createElement("script");
                r = document.getElementsByTagName("script")[0], o = !0;
                s.src = "https://player.vimeo.com/api/player.js", jQuery("head").find("*").each(function() {
                    "https://player.vimeo.com/api/player.js" == jQuery(this).attr("src") && (o = !1)
                }), o && r.parentNode.insertBefore(s, r)
            }
        },
        manageVideoLayer: function(e, a, o) {
            if (!0 === t.gA(e[0], "videoLayerManaged") || "true" === t.gA(e[0], "videoLayerManaged")) return !1;
            t[a].videos = void 0 === t[a].videos ? {} : t[a].videos;
            var s = t[a].videos[e[0].id] = void 0 === t[a].videos[e[0].id] ? v(e.data(), void 0, o) : t[a].videos[e[0].id];
            if (s.audio = void 0 !== s.audio && s.audio, i && s.opom) 0 == e.find("rs-poster").length && e.append('<rs-poster class="noSwipe" style="background-image:url(' + s.poster + ');"></rs-poster>');
            else {
                switch (s.id = e[0].id, s.pload = "auto" === s.pload || "canplay" === s.pload || "canplaythrough" === s.pload || "progress" === s.pload ? "auto" : s.pload, s.type = null != s.mp4 || null != s.webm ? "html5" : null != s.ytid && String(s.ytid).length > 1 ? "youtube" : null != s.vimeoid && String(s.vimeoid).length > 1 ? "vimeo" : "none", s.newtype = "html5" == s.type && 0 == e.find(s.audio ? "audio" : "video").length ? "html5" : "youtube" == s.type && 0 == e.find("iframe").length ? "youtube" : "vimeo" == s.type && 0 == e.find("iframe").length ? "vimeo" : "none", !s.audio && "1sttime" == s.aplay && s.pausetimer && s.bgvideo && t.sA(e.closest("rs-slide")[0], "rspausetimeronce", 1), s.audio || !s.bgvideo || !s.pausetimer || 1 != s.aplay && "true" != s.aplay && "no1sttime" != s.aplay || t.sA(e.closest("rs-slide")[0], "rspausetimeralways", 1), s.noInt && e.addClass("rs-nointeraction"), s.newtype) {
                    case "html5":
                        1 == window.isSafari11 && (t[a].slideHasIframe = !0), s.audio && e.addClass("rs-audio"), s.tag = s.audio ? "audio" : "video";
                        var n = "video" === s.tag && (t.is_mobile() || t.isSafari11()) ? s.aplay || "true" === s.aplay ? "muted playsinline autoplay" : s.inline ? " playsinline" : "" : "",
                            l = "<" + s.tag + " " + n + " " + (s.controls && "none" !== s.controls ? " controls " : "") + ' style="' + ("Edge" !== t.get_browser() ? "object-fit:cover;background-size:cover;opacity:0;width:100%; height:100%" : "") + '" class="" ' + (s.loop ? "loop" : "") + ' preload="' + s.pload + '">';
                        "video" === s.tag && null != s.webm && "firefox" == t.get_browser().toLowerCase() && (l = l + '<source src="' + s.webm + '" type="video/webm" />'), null != s.mp4 && (l = l + '<source src="' + s.mp4 + '" type="' + ("video" === s.tag ? "video/mp4" : "audio/mpeg") + '" />'), null != s.ogv && (l = l + '<source src="' + s.mp4 + '" type="' + s.tag + '/ogg" />'), l += "</" + s.tag + ">", s.videomarkup = l, i && s.notonmobile || t.isIE(8) || e.append(l), e.find(s.tag).parent().hasClass("html5vid") || e.find(s.tag).wrap('<div class="html5vid ' + (!1 === s.afs ? "hidefullscreen" : "") + '" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>'), s.jvideo = e.find(s.tag), s.video = s.jvideo[0], s.html5vid = s.jvideo.parent(), s.metaloaded || r(s.video, "loadedmetadata", function(e) {
                            h(e, a), t.resetVideo(e, a)
                        }(e));
                        break;
                    case "youtube":
                        t[a].slideHasIframe = !0, s.controls && "none" !== s.controls || (s.vatr = s.vatr.replace("controls=1", "controls=0"), -1 == s.vatr.toLowerCase().indexOf("controls") && (s.vatr = s.vatr + "&controls=0")), (s.inline || "RS-BGVIDEO" === e[0].tagName) && (s.vatr = s.vatr + "&playsinline=1"), -1 != s.ssec && (s.vatr += "&start=" + s.ssec), -1 != s.esec && (s.vatr += "&end=" + s.esec);
                        var d = s.vatr.split("origin=https://");
                        s.vatrnew = d.length > 1 ? d[0] + "origin=https://" + (self.location.href.match(/www/gi) && !d[1].match(/www/gi) ? "www." + d[1] : d[1]) : s.vatr, s.videomarkup = '<iframe allow="autoplay; ' + (!0 === s.afs ? "fullscreen" : "") + '" type="text/html" src="https://www.youtube-nocookie.com/embed/' + s.ytid + "?" + s.vatrnew + '" ' + (!0 === s.afs ? "allowfullscreen" : "") + ' width="100%" height="100%" class="intrinsic-ignore" style="opacity:0;visibility:visible;width:100%;height:100%"></iframe>';
                        break;
                    case "vimeo":
                        t[a].slideHasIframe = !0, s.controls && "none" !== s.controls ? (s.vatr = s.vatr.replace("background=0", "background=1"), -1 == s.vatr.toLowerCase().indexOf("background") && (s.vatr = s.vatr + "&background=1")) : (s.vatr = s.vatr.replace("background=1", "background=0"), -1 == s.vatr.toLowerCase().indexOf("background") && (s.vatr = s.vatr + "&background=0")), s.vatr = "autoplay=" + (!0 === s.aplay ? 1 : 0) + "&" + s.vatr, i && (s.vatr = "muted=1&" + s.vatr), s.loop && (s.vatr = "loop=1&" + s.vatr), s.videomarkup = '<iframe  allow="autoplay; ' + (!0 === s.afs ? "fullscreen" : "") + '" src="https://player.vimeo.com/video/' + s.vimeoid + "?" + s.vatr + '" ' + (!0 === s.afs ? "webkitallowfullscreen mozallowfullscreen allowfullscreen" : "") + ' width="100%" height="100%" class="intrinsic-ignore" style="opacity:0;visibility:visible;100%;height:100%"></iframe>'
                }
                if (!(null != s.poster && s.poster.length > 2) || i && s.npom) {
                    if (i && s.notonmobile) return !1;
                    0 != e.find("iframe").length || "youtube" != s.type && "vimeo" != s.type || (delete s.vimeoplayer, e.append(s.videomarkup), u(e, a, !1))
                } else 0 == e.find("rs-poster").length && e.append('<rs-poster class="noSwipe" style="background-image:url(' + s.poster + ');"></rs-poster>'), 0 == e.find("iframe").length && e.find("rs-poster").click(function() {
                    if (t.playVideo(e, a), i) {
                        if (s.notonmobile) return !1;
                        tpGS.gsap.to(e.find("rs-poster"), .3, {
                            opacity: 0,
                            visibility: "hidden",
                            force3D: "auto",
                            ease: "power3.inOut"
                        }), tpGS.gsap.to(e.find("iframe"), .3, {
                            opacity: 1,
                            display: "block",
                            ease: "power3.inOut"
                        })
                    }
                });
                "none" !== s.doverlay && void 0 !== s.doverlay && (s.bgvideo ? 1 != e.closest("rs-sbg-wrap").find("rs-dotted").length && e.closest("rs-sbg-wrap").append('<rs-dotted class="' + s.doverlay + '"></rs-dotted>') : 1 != e.find("rs-dotted").length && e.append('<rs-dotted class="' + s.doverlay + '"></rs-dotted>')), t.sA(e[0], "videoLayerManaged", !0), s.bgvideo && tpGS.gsap.set(e.find("video, iframe"), {
                    opacity: 0
                })
            }
        }
    });
    var r = function(e, t, i) {
            e.addEventListener ? e.addEventListener(t, i, {
                capture: !1,
                passive: !0
            }) : e.attachEvent(t, i, {
                capture: !1,
                passive: !0
            })
        },
        o = function(e, t, i) {
            var a = {};
            return a.video = e, a.type = t, a.settings = i, a
        },
        s = function(e, i) {
            var a = t[e].videos[i[0].id];
            (a.bgvideo || a.fcover) && (a.fcover && i.removeClass("rs-fsv").addClass("coverscreenvideo"), (void 0 === a.ratio || a.ratio.split(":").length <= 1) && (a.ratio = "16:9"), t.prepareCoveredVideo(e))
        },
        n = function(e, t) {
            var i = e.vimeoplayer;
            i.getPaused().then(function(a) {
                e.volumetoken = !0;
                var r = !a,
                    o = i.setVolume(t);
                void 0 !== o && o.then(function(t) {
                    i.getPaused().then(function(t) {
                        r === t && (e.volume = "mute", e.volumetoken = !0, i.setVolume(0), i.play())
                    }).catch(function(e) {
                        console.log("Get Paused Function Failed for Vimeo Volume Changes Inside the Promise")
                    })
                }).catch(function(t) {
                    r && (e.volume = "mute", e.volumetoken = !0, i.setVolume(0), i.play())
                })
            }).catch(function() {
                console.log("Get Paused Function Failed for Vimeo Volume Changes")
            })
        },
        l = function(e, t) {
            var i = e.player.getPlayerState();
            "mute" === t ? e.player.mute() : (e.player.unMute(), e.player.setVolume(t)), setTimeout(function() {
                1 === i && 1 !== e.player.getPlayerState() && (e.player.mute(), e.player.playVideo())
            }, 39)
        },
        d = function(e) {
            var t = e.play();
            void 0 !== t && t.then(function(e) {}).catch(function(t) {
                e.pause()
            })
        },
        c = function(e) {
            var t = e.play();
            void 0 !== t && t.then(function(e) {}).catch(function(t) {
                e.volumetoken = !0, e.setVolume(0), e.play()
            })
        },
        p = function(e) {
            e.player.playVideo(), setTimeout(function() {
                1 !== e.player.getPlayerState() && 3 !== e.player.getPlayerState() && (e.volume = "mute", e.player.mute(), e.player.playVideo())
            }, 39)
        },
        g = function(e, i, a) {
            e.vimeostarted = !0, e.nextslidecalled = !1;
            var r = i.find("rs-poster");
            e.ifr = i.find("iframe"), void 0 !== r && r.length > 0 ? (tpGS.gsap.to(r, .3, {
                opacity: 0,
                visibility: "hidden",
                force3D: "auto",
                ease: "power3.inOut"
            }), void 0 !== e.ifr && e.ifr.length > 0 && tpGS.gsap.to(e.ifr, .3, {
                opacity: 1,
                display: "block",
                ease: "power3.inOut"
            })) : void 0 !== e.ifr && e.ifr.length > 0 && tpGS.gsap.to(e.ifr, .001, {
                opacity: 1,
                display: "block",
                ease: "power3.out"
            }), t[a].c.trigger("revolution.slide.onvideoplay", o(e.vimeoplayer, "vimeo", e)), t[a].stopByVideo = e.pausetimer, y(i, a), "mute" == e.volume || 0 === e.volume || t.lastToggleState(i.data("videomutetoggledby")) || !0 === t[a].globalmute ? (e.volumetoken = !0, e.vimeoplayer.setVolume(0)) : n(e, parseInt(e.volcache, 0) / 100 || .75), t.toggleState(e.videotoggledby)
        },
        u = function(e, a, r) {
            var n = t[a].videos[e[0].id],
                d = "iframe" + Math.round(1e5 * Math.random() + 1);
            if (n.ifr = e.find("iframe"), s(a, e), n.ifr.attr("id", d), n.startvideonow = r, n.videolistenerexist) {
                if (r) switch (n.type) {
                    case "youtube":
                        p(n), -1 != n.ssec && n.player.seekTo(n.ssec);
                        break;
                    case "vimeo":
                        c(n.vimeoplayer), -1 != n.ssec && n.vimeoplayer.seekTo(n.ssec)
                }
            } else switch (n.type) {
                case "youtube":
                    if ("undefined" == typeof YT || void 0 === YT.Player) return t.checkVideoApis(e, a), void setTimeout(function() {
                        u(e, a, r)
                    }, 50);
                    n.player = new YT.Player(d, {
                        events: {
                            onStateChange: function(i) {
                                i.data == YT.PlayerState.PLAYING ? (tpGS.gsap.to(e.find("rs-poster"), .3, {
                                    opacity: 0,
                                    visibility: "hidden",
                                    force3D: "auto",
                                    ease: "power3.inOut"
                                }), tpGS.gsap.to(n.ifr, .3, {
                                    opacity: 1,
                                    display: "block",
                                    ease: "power3.inOut"
                                }), "mute" == n.volume || 0 === n.volume || t.lastToggleState(e.data("videomutetoggledby")) || !0 === t[a].globalmute ? n.player.mute() : l(n, parseInt(n.volcache, 0) || 75), t[a].stopByVideo = !0, y(e, a), n.pausetimer ? t[a].c.trigger("stoptimer") : t[a].stopByVideo = !1, t[a].c.trigger("revolution.slide.onvideoplay", o(n.player, "youtube", n)), t.toggleState(n.videotoggledby)) : (0 == i.data && n.loop && (-1 != n.ssec && n.player.seekTo(n.ssec), p(n), t.toggleState(n.videotoggledby)), t.checkfullscreenEnabled(a) || 0 != i.data && 2 != i.data || !(n.scop && e.find("rs-poster").length > 0 || n.bgvideo && e.find(".rs-fullvideo-cover").length > 0) || (n.bgvideo ? tpGS.gsap.to(e.find(".rs-fullvideo-cover"), .1, {
                                    opacity: 1,
                                    force3D: "auto",
                                    ease: "power3.inOut"
                                }) : tpGS.gsap.to(e.find("rs-poster"), .1, {
                                    opacity: 1,
                                    visibility: "visible",
                                    force3D: "auto",
                                    ease: "power3.inOut"
                                }), tpGS.gsap.to(n.ifr, .1, {
                                    opacity: 0,
                                    ease: "power3.inOut"
                                })), -1 != i.data && 3 != i.data && (t[a].stopByVideo = !1, t[a].tonpause = !1, b(e, a), t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.player, "youtube", n)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby)), 0 == i.data && n.nse ? (m(), n.nseTriggered = !0, t[a].c.revnext(), b(e, a)) : (b(e, a), t[a].stopByVideo = !1, 3 !== i.data && (-1 != n.lasteventdata && 3 != n.lasteventdata && void 0 !== n.lasteventdata || -1 != i.data && 3 != i.data) && t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.player, "youtube", n)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby))), n.lasteventdata = i.data
                            },
                            onReady: function(a) {
                                var r, o = t.is_mobile(),
                                    s = e.hasClass("rs-layer-video");
                                !o && (!t.isSafari11() || o && s) || "RS-BGVIDEO" !== e[0].tagName && (!s || !0 !== n.aplay && "true" !== n.aplay) || (r = !0, n.player.setVolume(0), n.volume = "mute", n.player.mute(), clearTimeout(e.data("mobilevideotimr")), 2 !== n.player.getPlayerState() && -1 !== n.player.getPlayerState() || e.data("mobilevideotimr", setTimeout(function() {
                                    p(n)
                                }, 500))), r || "mute" != n.volume || (n.player.setVolume(0), n.player.mute()), e.addClass("rs-apiready"), null == n.speed && 1 === n.speed || a.target.setPlaybackRate(parseFloat(n.speed)), e.find("rs-poster").unbind("click"), e.find("rs-poster").click(function() {
                                    i || p(n)
                                }), n.startvideonow && (p(n), -1 != n.ssec && n.player.seekTo(n.ssec)), n.videolistenerexist = !0
                            }
                        }
                    });
                    break;
                case "vimeo":
                    if ("undefined" == typeof Vimeo || void 0 === Vimeo.Player) return t.checkVideoApis(e, a), void setTimeout(function() {
                        u(e, a, r)
                    }, 50);
                    for (var h, f = n.ifr.attr("src"), v = {}, _ = f, w = /([^&=]+)=([^&]*)/g; h = w.exec(_);) v[decodeURIComponent(h[1])] = decodeURIComponent(h[2]);
                    f = (f = null != v.player_id ? f.replace(v.player_id, d) : f + "&player_id=" + d).replace(/&api=0|&api=1/g, "");
                    var x, k = t.is_mobile() || t.isSafari11(),
                        S = "RS-BGVIDEO" === e[0].tagName;
                    if (k && S && (f += "&background=1"), n.ifr.attr("src", f), n.vimeoplayer = void 0 === n.vimeoplayer || !1 === n.vimeoplayer ? new Vimeo.Player(d) : n.vimeoplayer, k) S ? x = !0 : (n.aplay || "true" === n.aplay) && (x = !0), x && (n.volumetoken = !0, n.vimeoplayer.setVolume(0), n.volume = "mute");
                    n.vimeoplayer.on("play", function(t) {
                        n.vimeostarted || g(n, e, a)
                    }), n.vimeoplayer.on("loaded", function(t) {
                        var i = {};
                        n.vimeoplayer.getVideoWidth().then(function(t) {
                            i.width = t, void 0 !== i.width && void 0 !== i.height && (n.ratio = i.width + ":" + i.height, n.vimeoplayerloaded = !0, s(a, e))
                        }), n.vimeoplayer.getVideoHeight().then(function(t) {
                            i.height = t, void 0 !== i.width && void 0 !== i.height && (n.ratio = i.width + ":" + i.height, n.vimeoplayerloaded = !0, s(a, e))
                        }), n.startvideonow && ("mute" === n.volume && (n.volumetoken = !0, n.vimeoplayer.setVolume(0)), c(n.vimeoplayer), -1 != n.ssec && n.vimeoplayer.setCurrentTime(n.ssec))
                    }), e.addClass("rs-apiready"), n.vimeoplayer.on("volumechange", function(e) {
                        n.volumetoken && (n.volume = e.volume), n.volumetoken = !1
                    }), n.vimeoplayer.on("timeupdate", function(i) {
                        n.vimeostarted || 0 === i.percent || void 0 !== t[a].activeRSSlide && n.slideid !== t.gA(t[a].slides[t[a].activeRSSlide], "key") || g(n, e, a), n.pausetimer && "playing" == t[a].sliderstatus && (t[a].stopByVideo = !0, t[a].c.trigger("stoptimer")), n.currenttime = i.seconds, 0 != n.esec && -1 !== n.esec && n.esec < i.seconds && !0 !== n.nextslidecalled && (n.loop ? (c(n.vimeoplayer), n.vimeoplayer.setCurrentTime(-1 !== n.ssec ? n.ssec : 0)) : (n.nse && (n.nseTriggered = !0, n.nextslidecalled = !0, t[a].c.revnext()), n.vimeoplayer.pause()))
                    }), n.vimeoplayer.on("ended", function(i) {
                        n.vimeostarted = !1, b(e, a), t[a].stopByVideo = !1, t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.vimeoplayer, "vimeo", n)), n.nse && (n.nseTriggered = !0, t[a].c.revnext()), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby)
                    }), n.vimeoplayer.on("pause", function(i) {
                        n.vimeostarted = !1, (n.scop && e.find("rs-poster").length > 0 || n.bgvideo && e.find(".rs-fullvideo-cover").length > 0) && (n.bgvideo ? tpGS.gsap.to(e.find(".rs-fullvideo-cover"), .1, {
                            opacity: 1,
                            force3D: "auto",
                            ease: "power3.inOut"
                        }) : tpGS.gsap.to(e.find("rs-poster"), .1, {
                            opacity: 1,
                            visibility: "visible",
                            force3D: "auto",
                            ease: "power3.inOut"
                        }), tpGS.gsap.to(e.find("iframe"), .1, {
                            opacity: 0,
                            ease: "power3.inOut"
                        })), t[a].stopByVideo = !1, t[a].tonpause = !1, b(e, a), t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.vimeoplayer, "vimeo", n)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby)
                    }), e.find("rs-poster").unbind("click"), e.find("rs-poster").click(function() {
                        if (!i) return c(n.vimeoplayer), !1
                    }), n.videolistenerexist = !0
            }
        },
        m = function() {
            document.exitFullscreen && document.fullscreen ? document.exitFullscreen() : document.mozCancelFullScreen && document.mozFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitIsFullScreen && document.webkitExitFullscreen()
        };
    t.checkfullscreenEnabled = function(e) {
        if (void 0 !== window.fullScreen) return window.fullScreen;
        if (void 0 !== document.fullscreen) return document.fullscreen;
        if (void 0 !== document.mozFullScreen) return document.mozFullScreen;
        if (void 0 !== document.webkitIsFullScreen) return document.webkitIsFullScreen;
        var i = jQuery.browser.webkit && /Apple Computer/.test(navigator.vendor) ? 42 : 5;
        return screen.width == t.winW && Math.abs(screen.height - t.getWinH(e)) < i
    };
    var h = function(e, a, s) {
            var n = t[a].videos[e[0].id];
            if (i && n.notonmobile) return !1;
            n.metaloaded = !0, n.controls && !n.audio || (0 != e.find(".tp-video-play-button").length || i || e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'), e.find("video, rs-poster, .tp-video-play-button").click(function() {
                e.hasClass("videoisplaying") ? n.video.pause() : n.video.play()
            })), (n.fcover || e.hasClass("rs-fsv") || n.bgvideo) && (n.fcover || n.bgvideo ? (n.html5vid.addClass("fullcoveredvideo"), void 0 !== n.ratio && 1 != n.ratio.split(":").length || (n.ratio = "16:9"), t.prepareCoveredVideo(a)) : n.html5vid.addClass("rs-fsv")), r(n.video, "canplaythrough", function() {
                t.preLoadAudioDone(e, a, "canplaythrough")
            }), r(n.video, "canplay", function() {
                t.preLoadAudioDone(e, a, "canplay")
            }), r(n.video, "progress", function() {
                t.preLoadAudioDone(e, a, "progress")
            }), r(n.video, "timeupdate", function(i) {
                void 0 !== e && void 0 !== e[0] && !0 !== n.VideoIsVisible && !0 !== n.justReseted && (e[0].getElementsByTagName("rs-poster").length > 0 ? (tpGS.gsap.to(e[0].getElementsByTagName("rs-poster"), .3, {
                    opacity: 0,
                    visibility: "hidden",
                    force3D: "auto",
                    ease: "power3.inOut"
                }), e.find(n.tag).length > 0 && tpGS.gsap.to(e.find(n.tag), .3, {
                    opacity: 1,
                    display: "block",
                    ease: "power3.inOut"
                })) : e.find(n.tag).length > 0 && tpGS.gsap.to(e.find(n.tag), .001, {
                    opacity: 1,
                    display: "block",
                    ease: "power3.out"
                }), n.VideoIsVisible = !0, clearTimeout(n.showCoverSoon)), n.justReseted && 1 != t.checkfullscreenEnabled(a) && e.find("rs-poster").length > 0 && (n.showCoverSoon = setTimeout(function() {
                    n.seeking || (tpGS.gsap.to(e.find("rs-poster"), .001, {
                        opacity: 1,
                        visibility: "visible",
                        force3D: "auto",
                        ease: "power3.inOut"
                    }), tpGS.gsap.to(e.find(n.tag), 1e-4, {
                        opacity: 0,
                        ease: "power3.inOut"
                    })), n.VideoIsVisible = !1
                }, 500)), n.justReseted = !1, -1 === n.esec && n.loop && 1 == window.isSafari11 && (n.esec = n.video.duration - .075), 0 != n.esec && -1 != n.esec && n.esec < n.video.currentTime && !n.nextslidecalled && (n.loop ? (n.video.play(), n.video.currentTime = -1 === n.ssec ? .5 : n.ssec) : (n.nse && (n.nseTriggered = !0, n.nextslidecalled = !0, t[a].jcnah = !0, t[a].c.revnext(), setTimeout(function() {
                    t[a].jcnah = !1
                }, 1e3)), n.video.pause()))
            }), r(n.video, "play", function() {
                n.nextslidecalled = !1, n.volume = null != n.volume && "mute" != n.volume ? parseFloat(n.volcache) : n.volume, n.volcache = null != n.volcache && "mute" != n.volcache ? parseFloat(n.volcache) : n.volcache, t.is_mobile() || t.isSafari11() || (!0 === t[a].globalmute ? n.video.muted = !0 : n.video.muted = "mute" == n.volume, n.volcache = jQuery.isNumeric(n.volcache) && n.volcache > 1 ? n.volcache / 100 : n.volcache, "mute" == n.volume ? n.video.muted = !0 : null != n.volcache && (n.video.volume = n.volcache)), e.addClass("videoisplaying"), y(e, a), clearTimeout(n.showCoverSoon), !0 !== n.pausetimer || "audio" == n.tag ? (t[a].stopByVideo = !1, t[a].c.trigger("revolution.slide.onvideostop", o(n.video, "html5", n))) : (t[a].stopByVideo = !0, t[a].c.trigger("revolution.slide.onvideoplay", o(n.video, "html5", n))), n.pausetimer && "playing" == t[a].sliderstatus && (t[a].stopByVideo = !0, t[a].c.trigger("stoptimer")), t.toggleState(n.videotoggledby)
            }), r(n.video, "seeked", function() {
                n.seeking = !1
            }), r(n.video, "seeking", function() {
                n.seeking = !0
            }), r(n.video, "pause", function(i) {
                !t.checkfullscreenEnabled(a) && e.find("rs-poster").length > 0 && n.scop && (n.showCoverSoon = setTimeout(function() {
                    n.seeking || (tpGS.gsap.to(e.find("rs-poster"), .001, {
                        opacity: 1,
                        visibility: "visible",
                        force3D: "auto",
                        ease: "power3.inOut"
                    }), tpGS.gsap.to(e.find(n.tag), 1e-4, {
                        opacity: 0,
                        ease: "power3.inOut"
                    }))
                }, 500), n.VideoIsVisible = !1), e.removeClass("videoisplaying"), t[a].stopByVideo = !1, b(e, a), "audio" != n.tag && t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.video, "html5", n)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby)
            }), r(n.video, "ended", function() {
                m(), b(e, a), t[a].stopByVideo = !1, b(e, a), "audio" != n.tag && t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.video, "html5", e.data())), n.nse && n.video.currentTime > 0 && (1 == !t[a].jcnah && (n.nseTriggered = !0, t[a].c.revnext(), t[a].jcnah = !0), setTimeout(function() {
                    t[a].jcnah = !1
                }, 1500)), e.removeClass("videoisplaying"), !0 !== t[a].inviewport && void 0 !== t[a].inviewport || (t[a].lastplayedvideos = [])
            })
        },
        f = function(e) {
            return "t" === e || !0 === e || "true" === e || "f" !== e && !1 !== e && "false" !== e && e
        },
        v = function(e, t, i) {
            e.audio = "audio" === t;
            var r = void 0 === e.video ? [] : e.video.split(";"),
                o = {
                    volume: e.audio ? 1 : "mute",
                    pload: "auto",
                    ratio: "16:9",
                    loop: !0,
                    aplay: "true",
                    fcover: 1 === e.bgvideo,
                    afs: !0,
                    controls: !1,
                    nse: !0,
                    npom: !1,
                    opom: !1,
                    inline: !0,
                    notonmobile: !1,
                    start: -1,
                    end: -1,
                    doverlay: "none",
                    scop: !1,
                    rwd: !0,
                    speed: 1,
                    ploadwait: 5,
                    stopAV: 1 !== e.bgvideo,
                    noInt: !1,
                    volcache: 75
                };
            for (var s in r)
                if (r.hasOwnProperty(s)) {
                    var n = r[s].split(":");
                    switch (n[0]) {
                        case "v":
                            o.volume = n[1];
                            break;
                        case "vd":
                            o.volcache = n[1];
                            break;
                        case "p":
                            o.pload = n[1];
                            break;
                        case "ar":
                            o.ratio = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
                            break;
                        case "ap":
                            o.aplay = f(n[1]);
                            break;
                        case "fc":
                            o.fcover = f(n[1]);
                            break;
                        case "afs":
                            o.afs = f(n[1]);
                            break;
                        case "vc":
                            o.controls = n[1];
                            break;
                        case "nse":
                            o.nse = f(n[1]);
                            break;
                        case "npom":
                            o.npom = f(n[1]);
                            break;
                        case "opom":
                            o.opom = f(n[1]);
                            break;
                        case "t":
                            o.vtype = n[1];
                            break;
                        case "inl":
                            o.inline = f(n[1]);
                            break;
                        case "nomo":
                            o.notonmobile = f(n[1]);
                            break;
                        case "sta":
                            o.start = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
                            break;
                        case "end":
                            o.end = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
                            break;
                        case "do":
                            o.doverlay = n[1];
                            break;
                        case "scop":
                            o.scop = f(n[1]);
                            break;
                        case "rwd":
                            o.rwd = f(n[1]);
                            break;
                        case "sp":
                            o.speed = n[1];
                            break;
                        case "vw":
                            o.ploadwait = parseInt(n[1], 0) || 5;
                            break;
                        case "sav":
                            o.stopAV = f(n[1]);
                            break;
                        case "noint":
                            o.noInt = f(n[1]);
                            break;
                        case "l":
                            o.loopcache = n[1], o.loop = "loop" === n[1] || "loopandnoslidestop" === n[1] || "none" !== n[1] && f(n[1]);
                            break;
                        case "ptimer":
                            o.pausetimer = f(n[1])
                    }
                }
            return void 0 !== e.bgvideo && (o.bgvideo = e.bgvideo), void 0 === e.bgvideo || !1 !== o.fcover && "false" !== o.fcover || (o.doverlay = "none"), o.noInt && (o.controls = !1), void 0 !== e.mp4 && (o.mp4 = e.mp4), void 0 !== e.videomp4 && (o.mp4 = e.videomp4), void 0 !== e.ytid && (o.ytid = e.ytid), void 0 !== e.ogv && (o.ogv = e.ogv), void 0 !== e.webm && (o.webm = e.webm), void 0 !== e.vimeoid && (o.vimeoid = e.vimeoid), void 0 !== e.vatr && (o.vatr = e.vatr), void 0 !== e.videoattributes && (o.vatr = e.videoattributes), void 0 !== e.poster && (o.poster = e.poster), o.slideid = i, o.aplay = "true" === o.aplay || o.aplay, 1 === o.bgvideo && (o.volume = "mute"), o.ssec = a(o.start), o.esec = a(o.end), o.pausetimer = void 0 === o.pausetimer ? "loopandnoslidestop" !== o.loopcache : o.pausetimer, o.inColumn = e._incolumn, o.audio = e.audio, !0 !== o.loop && "true" !== o.loop || !0 !== o.nse && "true" !== o.nse || (o.loop = !1), o
        },
        y = function(e, i) {
            if (t[i].playingvideos = void 0 === t[i].playingvideos ? new Array : t[i].playingvideos, t[i].videos[e[0].id].stopAV && void 0 !== t[i].playingvideos && t[i].playingvideos.length > 0)
                for (var a in t[i].lastplayedvideos = jQuery.extend(!0, [], t[i].playingvideos), t[i].playingvideos) t[i].playingvideos.hasOwnProperty(a) && t.stopVideo(t[i].playingvideos[a], i);
            t[i].playingvideos.push(e), t[i].videoIsPlaying = e
        },
        b = function(e, i) {
            void 0 !== t[i] && void 0 !== t[i] && null != t[i].playingvideos && jQuery.inArray(e, t[i].playingvideos) >= 0 && t[i].playingvideos.splice(jQuery.inArray(e, t[i].playingvideos), 1)
        }
}(jQuery);