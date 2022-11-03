(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    418: function (e, t, r) {
      var n;
      "undefined" != typeof window &&
        ((n = function () {
          return (function (e) {
            var t = {};
            function r(n) {
              if (t[n]) return t[n].exports;
              var o = (t[n] = { i: n, l: !1, exports: {} });
              return (
                e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
              );
            }
            return (
              (r.m = e),
              (r.c = t),
              (r.d = function (e, t, n) {
                r.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: n });
              }),
              (r.r = function (e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (r.t = function (e, t) {
                if ((1 & t && (e = r(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                  return e;
                var n = Object.create(null);
                if (
                  (r.r(n),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var o in e)
                    r.d(
                      n,
                      o,
                      function (t) {
                        return e[t];
                      }.bind(null, o)
                    );
                return n;
              }),
              (r.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return r.d(t, "a", t), t;
              }),
              (r.o = function (object, e) {
                return Object.prototype.hasOwnProperty.call(object, e);
              }),
              (r.p = "/dist/"),
              r((r.s = "./src/hls.ts"))
            );
          })({
            "./node_modules/eventemitter3/index.js": function (e, t, r) {
              "use strict";
              var n = Object.prototype.hasOwnProperty,
                o = "~";
              function l() {}
              function d(e, t, r) {
                (this.fn = e), (this.context = t), (this.once = r || !1);
              }
              function c(e, t, r, n, l) {
                if ("function" != typeof r)
                  throw new TypeError("The listener must be a function");
                var c = new d(r, n || e, l),
                  f = o ? o + t : t;
                return (
                  e._events[f]
                    ? e._events[f].fn
                      ? (e._events[f] = [e._events[f], c])
                      : e._events[f].push(c)
                    : ((e._events[f] = c), e._eventsCount++),
                  e
                );
              }
              function f(e, t) {
                0 == --e._eventsCount
                  ? (e._events = new l())
                  : delete e._events[t];
              }
              function h() {
                (this._events = new l()), (this._eventsCount = 0);
              }
              Object.create &&
                ((l.prototype = Object.create(null)),
                new l().__proto__ || (o = !1)),
                (h.prototype.eventNames = function () {
                  var e,
                    t,
                    r = [];
                  if (0 === this._eventsCount) return r;
                  for (t in (e = this._events))
                    n.call(e, t) && r.push(o ? t.slice(1) : t);
                  return Object.getOwnPropertySymbols
                    ? r.concat(Object.getOwnPropertySymbols(e))
                    : r;
                }),
                (h.prototype.listeners = function (e) {
                  var t = o ? o + e : e,
                    r = this._events[t];
                  if (!r) return [];
                  if (r.fn) return [r.fn];
                  for (var i = 0, n = r.length, l = new Array(n); i < n; i++)
                    l[i] = r[i].fn;
                  return l;
                }),
                (h.prototype.listenerCount = function (e) {
                  var t = o ? o + e : e,
                    r = this._events[t];
                  return r ? (r.fn ? 1 : r.length) : 0;
                }),
                (h.prototype.emit = function (e, t, r, n, l, d) {
                  var c = o ? o + e : e;
                  if (!this._events[c]) return !1;
                  var f,
                    i,
                    h = this._events[c],
                    v = arguments.length;
                  if (h.fn) {
                    switch (
                      (h.once && this.removeListener(e, h.fn, void 0, !0), v)
                    ) {
                      case 1:
                        return h.fn.call(h.context), !0;
                      case 2:
                        return h.fn.call(h.context, t), !0;
                      case 3:
                        return h.fn.call(h.context, t, r), !0;
                      case 4:
                        return h.fn.call(h.context, t, r, n), !0;
                      case 5:
                        return h.fn.call(h.context, t, r, n, l), !0;
                      case 6:
                        return h.fn.call(h.context, t, r, n, l, d), !0;
                    }
                    for (i = 1, f = new Array(v - 1); i < v; i++)
                      f[i - 1] = arguments[i];
                    h.fn.apply(h.context, f);
                  } else {
                    var m,
                      y = h.length;
                    for (i = 0; i < y; i++)
                      switch (
                        (h[i].once &&
                          this.removeListener(e, h[i].fn, void 0, !0),
                        v)
                      ) {
                        case 1:
                          h[i].fn.call(h[i].context);
                          break;
                        case 2:
                          h[i].fn.call(h[i].context, t);
                          break;
                        case 3:
                          h[i].fn.call(h[i].context, t, r);
                          break;
                        case 4:
                          h[i].fn.call(h[i].context, t, r, n);
                          break;
                        default:
                          if (!f)
                            for (m = 1, f = new Array(v - 1); m < v; m++)
                              f[m - 1] = arguments[m];
                          h[i].fn.apply(h[i].context, f);
                      }
                  }
                  return !0;
                }),
                (h.prototype.on = function (e, t, r) {
                  return c(this, e, t, r, !1);
                }),
                (h.prototype.once = function (e, t, r) {
                  return c(this, e, t, r, !0);
                }),
                (h.prototype.removeListener = function (e, t, r, n) {
                  var l = o ? o + e : e;
                  if (!this._events[l]) return this;
                  if (!t) return f(this, l), this;
                  var d = this._events[l];
                  if (d.fn)
                    d.fn !== t ||
                      (n && !d.once) ||
                      (r && d.context !== r) ||
                      f(this, l);
                  else {
                    for (var i = 0, c = [], h = d.length; i < h; i++)
                      (d[i].fn !== t ||
                        (n && !d[i].once) ||
                        (r && d[i].context !== r)) &&
                        c.push(d[i]);
                    c.length
                      ? (this._events[l] = 1 === c.length ? c[0] : c)
                      : f(this, l);
                  }
                  return this;
                }),
                (h.prototype.removeAllListeners = function (e) {
                  var t;
                  return (
                    e
                      ? ((t = o ? o + e : e), this._events[t] && f(this, t))
                      : ((this._events = new l()), (this._eventsCount = 0)),
                    this
                  );
                }),
                (h.prototype.off = h.prototype.removeListener),
                (h.prototype.addListener = h.prototype.on),
                (h.prefixed = o),
                (h.EventEmitter = h),
                (e.exports = h);
            },
            "./node_modules/url-toolkit/src/url-toolkit.js": function (
              e,
              t,
              r
            ) {
              var n, o, l, d, c;
              (n =
                /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/),
                (o = /^([^\/?#]*)(.*)$/),
                (l = /(?:\/|^)\.(?=\/)/g),
                (d = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g),
                (c = {
                  buildAbsoluteURL: function (e, t, r) {
                    if (((r = r || {}), (e = e.trim()), !(t = t.trim()))) {
                      if (!r.alwaysNormalize) return e;
                      var n = c.parseURL(e);
                      if (!n)
                        throw new Error("Error trying to parse base URL.");
                      return (
                        (n.path = c.normalizePath(n.path)),
                        c.buildURLFromParts(n)
                      );
                    }
                    var l = c.parseURL(t);
                    if (!l)
                      throw new Error("Error trying to parse relative URL.");
                    if (l.scheme)
                      return r.alwaysNormalize
                        ? ((l.path = c.normalizePath(l.path)),
                          c.buildURLFromParts(l))
                        : t;
                    var d = c.parseURL(e);
                    if (!d) throw new Error("Error trying to parse base URL.");
                    if (!d.netLoc && d.path && "/" !== d.path[0]) {
                      var f = o.exec(d.path);
                      (d.netLoc = f[1]), (d.path = f[2]);
                    }
                    d.netLoc && !d.path && (d.path = "/");
                    var h = {
                      scheme: d.scheme,
                      netLoc: l.netLoc,
                      path: null,
                      params: l.params,
                      query: l.query,
                      fragment: l.fragment,
                    };
                    if (!l.netLoc && ((h.netLoc = d.netLoc), "/" !== l.path[0]))
                      if (l.path) {
                        var v = d.path,
                          m = v.substring(0, v.lastIndexOf("/") + 1) + l.path;
                        h.path = c.normalizePath(m);
                      } else
                        (h.path = d.path),
                          l.params ||
                            ((h.params = d.params),
                            l.query || (h.query = d.query));
                    return (
                      null === h.path &&
                        (h.path = r.alwaysNormalize
                          ? c.normalizePath(l.path)
                          : l.path),
                      c.buildURLFromParts(h)
                    );
                  },
                  parseURL: function (e) {
                    var t = n.exec(e);
                    return t
                      ? {
                          scheme: t[1] || "",
                          netLoc: t[2] || "",
                          path: t[3] || "",
                          params: t[4] || "",
                          query: t[5] || "",
                          fragment: t[6] || "",
                        }
                      : null;
                  },
                  normalizePath: function (path) {
                    for (
                      path = path.split("").reverse().join("").replace(l, "");
                      path.length !== (path = path.replace(d, "")).length;

                    );
                    return path.split("").reverse().join("");
                  },
                  buildURLFromParts: function (e) {
                    return (
                      e.scheme +
                      e.netLoc +
                      e.path +
                      e.params +
                      e.query +
                      e.fragment
                    );
                  },
                }),
                (e.exports = c);
            },
            "./node_modules/webworkify-webpack/index.js": function (e, t, r) {
              function n(e) {
                var t = {};
                function r(n) {
                  if (t[n]) return t[n].exports;
                  var o = (t[n] = { i: n, l: !1, exports: {} });
                  return (
                    e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
                  );
                }
                (r.m = e),
                  (r.c = t),
                  (r.i = function (e) {
                    return e;
                  }),
                  (r.d = function (e, t, n) {
                    r.o(e, t) ||
                      Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: n,
                      });
                  }),
                  (r.r = function (e) {
                    Object.defineProperty(e, "__esModule", { value: !0 });
                  }),
                  (r.n = function (e) {
                    var t =
                      e && e.__esModule
                        ? function () {
                            return e.default;
                          }
                        : function () {
                            return e;
                          };
                    return r.d(t, "a", t), t;
                  }),
                  (r.o = function (object, e) {
                    return Object.prototype.hasOwnProperty.call(object, e);
                  }),
                  (r.p = "/"),
                  (r.oe = function (e) {
                    throw (console.error(e), e);
                  });
                var n = r((r.s = ENTRY_MODULE));
                return n.default || n;
              }
              function o(e) {
                return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
              }
              function l(e, t, n) {
                var l = {};
                l[n] = [];
                var d = t.toString(),
                  c = d.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
                if (!c) return l;
                for (
                  var f,
                    h = c[1],
                    v = new RegExp(
                      "(\\\\n|\\W)" +
                        o(h) +
                        "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)",
                      "g"
                    );
                  (f = v.exec(d));

                )
                  "dll-reference" !== f[3] && l[n].push(f[3]);
                for (
                  v = new RegExp(
                    "\\(" +
                      o(h) +
                      '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',
                    "g"
                  );
                  (f = v.exec(d));

                )
                  e[f[2]] || (l[n].push(f[1]), (e[f[2]] = r(f[1]).m)),
                    (l[f[2]] = l[f[2]] || []),
                    l[f[2]].push(f[4]);
                for (var m, y = Object.keys(l), i = 0; i < y.length; i++)
                  for (var E = 0; E < l[y[i]].length; E++)
                    (m = l[y[i]][E]),
                      isNaN(1 * m) || (l[y[i]][E] = 1 * l[y[i]][E]);
                return l;
              }
              function d(e) {
                return Object.keys(e).reduce(function (t, r) {
                  return t || e[r].length > 0;
                }, !1);
              }
              e.exports = function (e, t) {
                t = t || {};
                var o = { main: r.m },
                  c = t.all
                    ? { main: Object.keys(o.main) }
                    : (function (e, t) {
                        for (
                          var r = { main: [t] },
                            n = { main: [] },
                            o = { main: {} };
                          d(r);

                        )
                          for (
                            var c = Object.keys(r), i = 0;
                            i < c.length;
                            i++
                          ) {
                            var f = c[i],
                              h = r[f].pop();
                            if (((o[f] = o[f] || {}), !o[f][h] && e[f][h])) {
                              (o[f][h] = !0), (n[f] = n[f] || []), n[f].push(h);
                              for (
                                var v = l(e, e[f][h], f),
                                  m = Object.keys(v),
                                  y = 0;
                                y < m.length;
                                y++
                              )
                                (r[m[y]] = r[m[y]] || []),
                                  (r[m[y]] = r[m[y]].concat(v[m[y]]));
                            }
                          }
                        return n;
                      })(o, e),
                  f = "";
                Object.keys(c)
                  .filter(function (e) {
                    return "main" !== e;
                  })
                  .forEach(function (e) {
                    for (var t = 0; c[e][t]; ) t++;
                    c[e].push(t),
                      (o[e][t] =
                        "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })"),
                      (f =
                        f +
                        "var " +
                        e +
                        " = (" +
                        n
                          .toString()
                          .replace("ENTRY_MODULE", JSON.stringify(t)) +
                        ")({" +
                        c[e]
                          .map(function (t) {
                            return (
                              JSON.stringify(t) + ": " + o[e][t].toString()
                            );
                          })
                          .join(",") +
                        "});\n");
                  }),
                  (f =
                    f +
                    "new ((" +
                    n.toString().replace("ENTRY_MODULE", JSON.stringify(e)) +
                    ")({" +
                    c.main
                      .map(function (e) {
                        return JSON.stringify(e) + ": " + o.main[e].toString();
                      })
                      .join(",") +
                    "}))(self);");
                var h = new window.Blob([f], { type: "text/javascript" });
                if (t.bare) return h;
                var v = (
                    window.URL ||
                    window.webkitURL ||
                    window.mozURL ||
                    window.msURL
                  ).createObjectURL(h),
                  m = new window.Worker(v);
                return (m.objectURL = v), m;
              };
            },
            "./src/crypt/decrypter.js": function (e, t, r) {
              "use strict";
              r.r(t);
              var n = (function () {
                  function e(e, t) {
                    (this.subtle = e), (this.aesIV = t);
                  }
                  return (
                    (e.prototype.decrypt = function (data, e) {
                      return this.subtle.decrypt(
                        { name: "AES-CBC", iv: this.aesIV },
                        e,
                        data
                      );
                    }),
                    e
                  );
                })(),
                o = (function () {
                  function e(e, t) {
                    (this.subtle = e), (this.key = t);
                  }
                  return (
                    (e.prototype.expandKey = function () {
                      return this.subtle.importKey(
                        "raw",
                        this.key,
                        { name: "AES-CBC" },
                        !1,
                        ["encrypt", "decrypt"]
                      );
                    }),
                    e
                  );
                })(),
                l = (function () {
                  function e() {
                    (this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]),
                      (this.subMix = [
                        new Uint32Array(256),
                        new Uint32Array(256),
                        new Uint32Array(256),
                        new Uint32Array(256),
                      ]),
                      (this.invSubMix = [
                        new Uint32Array(256),
                        new Uint32Array(256),
                        new Uint32Array(256),
                        new Uint32Array(256),
                      ]),
                      (this.sBox = new Uint32Array(256)),
                      (this.invSBox = new Uint32Array(256)),
                      (this.key = new Uint32Array(0)),
                      this.initTable();
                  }
                  var t = e.prototype;
                  return (
                    (t.uint8ArrayToUint32Array_ = function (e) {
                      for (
                        var view = new DataView(e),
                          t = new Uint32Array(4),
                          i = 0;
                        i < 4;
                        i++
                      )
                        t[i] = view.getUint32(4 * i);
                      return t;
                    }),
                    (t.initTable = function () {
                      var e = this.sBox,
                        t = this.invSBox,
                        r = this.subMix,
                        n = r[0],
                        o = r[1],
                        l = r[2],
                        d = r[3],
                        c = this.invSubMix,
                        f = c[0],
                        h = c[1],
                        v = c[2],
                        m = c[3],
                        y = new Uint32Array(256),
                        E = 0,
                        T = 0,
                        i = 0;
                      for (i = 0; i < 256; i++)
                        y[i] = i < 128 ? i << 1 : (i << 1) ^ 283;
                      for (i = 0; i < 256; i++) {
                        var S = T ^ (T << 1) ^ (T << 2) ^ (T << 3) ^ (T << 4);
                        (S = (S >>> 8) ^ (255 & S) ^ 99),
                          (e[E] = S),
                          (t[S] = E);
                        var _ = y[E],
                          A = y[_],
                          R = y[A],
                          w = (257 * y[S]) ^ (16843008 * S);
                        (n[E] = (w << 24) | (w >>> 8)),
                          (o[E] = (w << 16) | (w >>> 16)),
                          (l[E] = (w << 8) | (w >>> 24)),
                          (d[E] = w),
                          (w =
                            (16843009 * R) ^
                            (65537 * A) ^
                            (257 * _) ^
                            (16843008 * E)),
                          (f[S] = (w << 24) | (w >>> 8)),
                          (h[S] = (w << 16) | (w >>> 16)),
                          (v[S] = (w << 8) | (w >>> 24)),
                          (m[S] = w),
                          E
                            ? ((E = _ ^ y[y[y[R ^ _]]]), (T ^= y[y[T]]))
                            : (E = T = 1);
                      }
                    }),
                    (t.expandKey = function (e) {
                      for (
                        var t = this.uint8ArrayToUint32Array_(e), r = !0, n = 0;
                        n < t.length && r;

                      )
                        (r = t[n] === this.key[n]), n++;
                      if (!r) {
                        this.key = t;
                        var o = (this.keySize = t.length);
                        if (4 !== o && 6 !== o && 8 !== o)
                          throw new Error("Invalid aes key size=" + o);
                        var l,
                          d,
                          c,
                          f,
                          h = (this.ksRows = 4 * (o + 6 + 1)),
                          v = (this.keySchedule = new Uint32Array(h)),
                          m = (this.invKeySchedule = new Uint32Array(h)),
                          y = this.sBox,
                          E = this.rcon,
                          T = this.invSubMix,
                          S = T[0],
                          _ = T[1],
                          A = T[2],
                          R = T[3];
                        for (l = 0; l < h; l++)
                          l < o
                            ? (c = v[l] = t[l])
                            : ((f = c),
                              l % o == 0
                                ? ((f =
                                    (y[(f = (f << 8) | (f >>> 24)) >>> 24] <<
                                      24) |
                                    (y[(f >>> 16) & 255] << 16) |
                                    (y[(f >>> 8) & 255] << 8) |
                                    y[255 & f]),
                                  (f ^= E[(l / o) | 0] << 24))
                                : o > 6 &&
                                  l % o == 4 &&
                                  (f =
                                    (y[f >>> 24] << 24) |
                                    (y[(f >>> 16) & 255] << 16) |
                                    (y[(f >>> 8) & 255] << 8) |
                                    y[255 & f]),
                              (v[l] = c = (v[l - o] ^ f) >>> 0));
                        for (d = 0; d < h; d++)
                          (l = h - d),
                            (f = 3 & d ? v[l] : v[l - 4]),
                            (m[d] =
                              d < 4 || l <= 4
                                ? f
                                : S[y[f >>> 24]] ^
                                  _[y[(f >>> 16) & 255]] ^
                                  A[y[(f >>> 8) & 255]] ^
                                  R[y[255 & f]]),
                            (m[d] = m[d] >>> 0);
                      }
                    }),
                    (t.networkToHostOrderSwap = function (e) {
                      return (
                        (e << 24) |
                        ((65280 & e) << 8) |
                        ((16711680 & e) >> 8) |
                        (e >>> 24)
                      );
                    }),
                    (t.decrypt = function (e, t, r, n) {
                      for (
                        var o,
                          l,
                          d,
                          c,
                          f,
                          h,
                          v,
                          m,
                          y,
                          E,
                          T,
                          S,
                          _,
                          i,
                          A,
                          R,
                          w,
                          k = this.keySize + 6,
                          L = this.invKeySchedule,
                          D = this.invSBox,
                          C = this.invSubMix,
                          O = C[0],
                          I = C[1],
                          x = C[2],
                          P = C[3],
                          F = this.uint8ArrayToUint32Array_(r),
                          M = F[0],
                          N = F[1],
                          U = F[2],
                          B = F[3],
                          G = new Int32Array(e),
                          j = new Int32Array(G.length),
                          K = this.networkToHostOrderSwap;
                        t < G.length;

                      ) {
                        for (
                          y = K(G[t]),
                            E = K(G[t + 1]),
                            T = K(G[t + 2]),
                            S = K(G[t + 3]),
                            f = y ^ L[0],
                            h = S ^ L[1],
                            v = T ^ L[2],
                            m = E ^ L[3],
                            _ = 4,
                            i = 1;
                          i < k;
                          i++
                        )
                          (o =
                            O[f >>> 24] ^
                            I[(h >> 16) & 255] ^
                            x[(v >> 8) & 255] ^
                            P[255 & m] ^
                            L[_]),
                            (l =
                              O[h >>> 24] ^
                              I[(v >> 16) & 255] ^
                              x[(m >> 8) & 255] ^
                              P[255 & f] ^
                              L[_ + 1]),
                            (d =
                              O[v >>> 24] ^
                              I[(m >> 16) & 255] ^
                              x[(f >> 8) & 255] ^
                              P[255 & h] ^
                              L[_ + 2]),
                            (c =
                              O[m >>> 24] ^
                              I[(f >> 16) & 255] ^
                              x[(h >> 8) & 255] ^
                              P[255 & v] ^
                              L[_ + 3]),
                            (f = o),
                            (h = l),
                            (v = d),
                            (m = c),
                            (_ += 4);
                        (o =
                          (D[f >>> 24] << 24) ^
                          (D[(h >> 16) & 255] << 16) ^
                          (D[(v >> 8) & 255] << 8) ^
                          D[255 & m] ^
                          L[_]),
                          (l =
                            (D[h >>> 24] << 24) ^
                            (D[(v >> 16) & 255] << 16) ^
                            (D[(m >> 8) & 255] << 8) ^
                            D[255 & f] ^
                            L[_ + 1]),
                          (d =
                            (D[v >>> 24] << 24) ^
                            (D[(m >> 16) & 255] << 16) ^
                            (D[(f >> 8) & 255] << 8) ^
                            D[255 & h] ^
                            L[_ + 2]),
                          (c =
                            (D[m >>> 24] << 24) ^
                            (D[(f >> 16) & 255] << 16) ^
                            (D[(h >> 8) & 255] << 8) ^
                            D[255 & v] ^
                            L[_ + 3]),
                          (_ += 3),
                          (j[t] = K(o ^ M)),
                          (j[t + 1] = K(c ^ N)),
                          (j[t + 2] = K(d ^ U)),
                          (j[t + 3] = K(l ^ B)),
                          (M = y),
                          (N = E),
                          (U = T),
                          (B = S),
                          (t += 4);
                      }
                      return n
                        ? ((A = j.buffer),
                          (R = A.byteLength),
                          (w = R && new DataView(A).getUint8(R - 1))
                            ? A.slice(0, R - w)
                            : A)
                        : j.buffer;
                    }),
                    (t.destroy = function () {
                      (this.key = void 0),
                        (this.keySize = void 0),
                        (this.ksRows = void 0),
                        (this.sBox = void 0),
                        (this.invSBox = void 0),
                        (this.subMix = void 0),
                        (this.invSubMix = void 0),
                        (this.keySchedule = void 0),
                        (this.invKeySchedule = void 0),
                        (this.rcon = void 0);
                    }),
                    e
                  );
                })(),
                d = r("./src/errors.ts"),
                c = r("./src/utils/logger.js"),
                f = r("./src/events.js"),
                h = r("./src/utils/get-self-scope.js"),
                v = Object(h.getSelfScope)(),
                m = (function () {
                  function e(e, t, r) {
                    var n = (void 0 === r ? {} : r).removePKCS7Padding,
                      o = void 0 === n || n;
                    if (
                      ((this.logEnabled = !0),
                      (this.observer = e),
                      (this.config = t),
                      (this.removePKCS7Padding = o),
                      o)
                    )
                      try {
                        var l = v.crypto;
                        l && (this.subtle = l.subtle || l.webkitSubtle);
                      } catch (e) {}
                    this.disableWebCrypto = !this.subtle;
                  }
                  var t = e.prototype;
                  return (
                    (t.isSync = function () {
                      return (
                        this.disableWebCrypto && this.config.enableSoftwareAES
                      );
                    }),
                    (t.decrypt = function (data, e, t, r) {
                      var d = this;
                      if (
                        this.disableWebCrypto &&
                        this.config.enableSoftwareAES
                      ) {
                        this.logEnabled &&
                          (c.logger.log("JS AES decrypt"),
                          (this.logEnabled = !1));
                        var f = this.decryptor;
                        f || (this.decryptor = f = new l()),
                          f.expandKey(e),
                          r(f.decrypt(data, 0, t, this.removePKCS7Padding));
                      } else {
                        this.logEnabled &&
                          (c.logger.log("WebCrypto AES decrypt"),
                          (this.logEnabled = !1));
                        var h = this.subtle;
                        this.key !== e &&
                          ((this.key = e), (this.fastAesKey = new o(h, e))),
                          this.fastAesKey
                            .expandKey()
                            .then(function (o) {
                              new n(h, t)
                                .decrypt(data, o)
                                .catch(function (n) {
                                  d.onWebCryptoError(n, data, e, t, r);
                                })
                                .then(function (e) {
                                  r(e);
                                });
                            })
                            .catch(function (n) {
                              d.onWebCryptoError(n, data, e, t, r);
                            });
                      }
                    }),
                    (t.onWebCryptoError = function (e, data, t, r, n) {
                      this.config.enableSoftwareAES
                        ? (c.logger.log(
                            "WebCrypto Error, disable WebCrypto API"
                          ),
                          (this.disableWebCrypto = !0),
                          (this.logEnabled = !0),
                          this.decrypt(data, t, r, n))
                        : (c.logger.error("decrypting error : " + e.message),
                          this.observer.trigger(f.default.ERROR, {
                            type: d.ErrorTypes.MEDIA_ERROR,
                            details: d.ErrorDetails.FRAG_DECRYPT_ERROR,
                            fatal: !0,
                            reason: e.message,
                          }));
                    }),
                    (t.destroy = function () {
                      var e = this.decryptor;
                      e && (e.destroy(), (this.decryptor = void 0));
                    }),
                    e
                  );
                })();
              t.default = m;
            },
            "./src/demux/demuxer-inline.js": function (e, t, r) {
              "use strict";
              r.r(t);
              var n = r("./src/events.js"),
                o = r("./src/errors.ts"),
                l = r("./src/crypt/decrypter.js"),
                d = r("./src/polyfills/number-isFinite.js"),
                c = r("./src/utils/logger.js"),
                f = r("./src/utils/get-self-scope.js");
              function h(data, e) {
                return 255 === data[e] && 240 == (246 & data[e + 1]);
              }
              function v(data, e) {
                return 1 & data[e + 1] ? 7 : 9;
              }
              function m(data, e) {
                return (
                  ((3 & data[e + 3]) << 11) |
                  (data[e + 4] << 3) |
                  ((224 & data[e + 5]) >>> 5)
                );
              }
              function y(data, e) {
                return !!(e + 1 < data.length && h(data, e));
              }
              function E(data, e) {
                if (y(data, e)) {
                  var t = v(data, e);
                  e + 5 < data.length && (t = m(data, e));
                  var r = e + t;
                  if (r === data.length || (r + 1 < data.length && h(data, r)))
                    return !0;
                }
                return !1;
              }
              function T(track, e, data, t, r) {
                if (!track.samplerate) {
                  var l = (function (e, data, t, r) {
                    var l,
                      d,
                      f,
                      h,
                      v,
                      m = navigator.userAgent.toLowerCase(),
                      y = r,
                      E = [
                        96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3,
                        12e3, 11025, 8e3, 7350,
                      ];
                    if (
                      ((l = 1 + ((192 & data[t + 2]) >>> 6)),
                      !((d = (60 & data[t + 2]) >>> 2) > E.length - 1))
                    )
                      return (
                        (h = (1 & data[t + 2]) << 2),
                        (h |= (192 & data[t + 3]) >>> 6),
                        c.logger.log(
                          "manifest codec:" +
                            r +
                            ",ADTS data:type:" +
                            l +
                            ",sampleingIndex:" +
                            d +
                            "[" +
                            E[d] +
                            "Hz],channelConfig:" +
                            h
                        ),
                        /firefox/i.test(m)
                          ? d >= 6
                            ? ((l = 5), (v = new Array(4)), (f = d - 3))
                            : ((l = 2), (v = new Array(2)), (f = d))
                          : -1 !== m.indexOf("android")
                          ? ((l = 2), (v = new Array(2)), (f = d))
                          : ((l = 5),
                            (v = new Array(4)),
                            (r &&
                              (-1 !== r.indexOf("mp4a.40.29") ||
                                -1 !== r.indexOf("mp4a.40.5"))) ||
                            (!r && d >= 6)
                              ? (f = d - 3)
                              : (((r &&
                                  -1 !== r.indexOf("mp4a.40.2") &&
                                  ((d >= 6 && 1 === h) ||
                                    /vivaldi/i.test(m))) ||
                                  (!r && 1 === h)) &&
                                  ((l = 2), (v = new Array(2))),
                                (f = d))),
                        (v[0] = l << 3),
                        (v[0] |= (14 & d) >> 1),
                        (v[1] |= (1 & d) << 7),
                        (v[1] |= h << 3),
                        5 === l &&
                          ((v[1] |= (14 & f) >> 1),
                          (v[2] = (1 & f) << 7),
                          (v[2] |= 8),
                          (v[3] = 0)),
                        {
                          config: v,
                          samplerate: E[d],
                          channelCount: h,
                          codec: "mp4a.40." + l,
                          manifestCodec: y,
                        }
                      );
                    e.trigger(n.default.ERROR, {
                      type: o.ErrorTypes.MEDIA_ERROR,
                      details: o.ErrorDetails.FRAG_PARSING_ERROR,
                      fatal: !0,
                      reason: "invalid ADTS sampling index:" + d,
                    });
                  })(e, data, t, r);
                  (track.config = l.config),
                    (track.samplerate = l.samplerate),
                    (track.channelCount = l.channelCount),
                    (track.codec = l.codec),
                    (track.manifestCodec = l.manifestCodec),
                    c.logger.log(
                      "parsed codec:" +
                        track.codec +
                        ",rate:" +
                        l.samplerate +
                        ",nb channel:" +
                        l.channelCount
                    );
                }
              }
              function S(e) {
                return 9216e4 / e;
              }
              function _(track, data, e, t, r) {
                var header = (function (data, e, t, r, n) {
                  var o,
                    l,
                    d = data.length;
                  if (
                    ((o = v(data, e)),
                    (l = m(data, e)),
                    (l -= o) > 0 && e + o + l <= d)
                  )
                    return {
                      headerLength: o,
                      frameLength: l,
                      stamp: t + r * n,
                    };
                })(data, e, t, r, S(track.samplerate));
                if (header) {
                  var n = header.stamp,
                    o = header.headerLength,
                    l = header.frameLength,
                    d = {
                      unit: data.subarray(e + o, e + o + l),
                      pts: n,
                      dts: n,
                    };
                  return track.samples.push(d), { sample: d, length: l + o };
                }
              }
              var A = r("./src/demux/id3.js"),
                R = (function () {
                  function e(e, t, r) {
                    (this.observer = e), (this.config = r), (this.remuxer = t);
                  }
                  var t = e.prototype;
                  return (
                    (t.resetInitSegment = function (e, t, r, n) {
                      this._audioTrack = {
                        container: "audio/adts",
                        type: "audio",
                        id: 0,
                        sequenceNumber: 0,
                        isAAC: !0,
                        samples: [],
                        len: 0,
                        manifestCodec: t,
                        duration: n,
                        inputTimeScale: 9e4,
                      };
                    }),
                    (t.resetTimeStamp = function () {}),
                    (e.probe = function (data) {
                      if (!data) return !1;
                      for (
                        var e = (A.default.getID3Data(data, 0) || []).length,
                          t = data.length;
                        e < t;
                        e++
                      )
                        if (E(data, e))
                          return c.logger.log("ADTS sync word found !"), !0;
                      return !1;
                    }),
                    (t.append = function (data, e, t, r) {
                      for (
                        var track = this._audioTrack,
                          n = A.default.getID3Data(data, 0) || [],
                          o = A.default.getTimeStamp(n),
                          l = Object(d.isFiniteNumber)(o) ? 90 * o : 9e4 * e,
                          f = 0,
                          h = l,
                          v = data.length,
                          m = n.length,
                          E = [{ pts: h, dts: h, data: n }];
                        m < v - 1;

                      )
                        if (y(data, m) && m + 5 < v) {
                          T(track, this.observer, data, m, track.manifestCodec);
                          var S = _(track, data, m, l, f);
                          if (!S) {
                            c.logger.log("Unable to parse AAC frame");
                            break;
                          }
                          (m += S.length), (h = S.sample.pts), f++;
                        } else
                          A.default.isHeader(data, m)
                            ? ((n = A.default.getID3Data(data, m)),
                              E.push({ pts: h, dts: h, data: n }),
                              (m += n.length))
                            : m++;
                      this.remuxer.remux(
                        track,
                        { samples: [] },
                        { samples: E, inputTimeScale: 9e4 },
                        { samples: [] },
                        e,
                        t,
                        r
                      );
                    }),
                    (t.destroy = function () {}),
                    e
                  );
                })(),
                w = r("./src/demux/mp4demuxer.js"),
                k = {
                  BitratesMap: [
                    32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384,
                    416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224,
                    256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160,
                    192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144,
                    160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80,
                    96, 112, 128, 144, 160,
                  ],
                  SamplingRateMap: [
                    44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3,
                  ],
                  SamplesCoefficients: [
                    [0, 72, 144, 12],
                    [0, 0, 0, 0],
                    [0, 72, 144, 12],
                    [0, 144, 144, 12],
                  ],
                  BytesInSlot: [0, 1, 1, 4],
                  appendFrame: function (track, data, e, t, r) {
                    if (!(e + 24 > data.length)) {
                      var header = this.parseHeader(data, e);
                      if (header && e + header.frameLength <= data.length) {
                        var n =
                            t +
                            r *
                              ((9e4 * header.samplesPerFrame) /
                                header.sampleRate),
                          o = {
                            unit: data.subarray(e, e + header.frameLength),
                            pts: n,
                            dts: n,
                          };
                        return (
                          (track.config = []),
                          (track.channelCount = header.channelCount),
                          (track.samplerate = header.sampleRate),
                          track.samples.push(o),
                          { sample: o, length: header.frameLength }
                        );
                      }
                    }
                  },
                  parseHeader: function (data, e) {
                    var t = (data[e + 1] >> 3) & 3,
                      r = (data[e + 1] >> 1) & 3,
                      n = (data[e + 2] >> 4) & 15,
                      o = (data[e + 2] >> 2) & 3,
                      l = (data[e + 2] >> 1) & 1;
                    if (1 !== t && 0 !== n && 15 !== n && 3 !== o) {
                      var d = 3 === t ? 3 - r : 3 === r ? 3 : 4,
                        c = 1e3 * k.BitratesMap[14 * d + n - 1],
                        f = 3 === t ? 0 : 2 === t ? 1 : 2,
                        h = k.SamplingRateMap[3 * f + o],
                        v = data[e + 3] >> 6 == 3 ? 1 : 2,
                        m = k.SamplesCoefficients[t][r],
                        y = k.BytesInSlot[r],
                        E = 8 * m * y;
                      return {
                        sampleRate: h,
                        channelCount: v,
                        frameLength: parseInt((m * c) / h + l, 10) * y,
                        samplesPerFrame: E,
                      };
                    }
                  },
                  isHeaderPattern: function (data, e) {
                    return (
                      255 === data[e] &&
                      224 == (224 & data[e + 1]) &&
                      0 != (6 & data[e + 1])
                    );
                  },
                  isHeader: function (data, e) {
                    return !!(
                      e + 1 < data.length && this.isHeaderPattern(data, e)
                    );
                  },
                  probe: function (data, e) {
                    if (e + 1 < data.length && this.isHeaderPattern(data, e)) {
                      var header = this.parseHeader(data, e),
                        t = 4;
                      header && header.frameLength && (t = header.frameLength);
                      var r = e + t;
                      if (
                        r === data.length ||
                        (r + 1 < data.length && this.isHeaderPattern(data, r))
                      )
                        return !0;
                    }
                    return !1;
                  },
                },
                L = k,
                D = (function () {
                  function e(data) {
                    (this.data = data),
                      (this.bytesAvailable = data.byteLength),
                      (this.word = 0),
                      (this.bitsAvailable = 0);
                  }
                  var t = e.prototype;
                  return (
                    (t.loadWord = function () {
                      var data = this.data,
                        e = this.bytesAvailable,
                        t = data.byteLength - e,
                        r = new Uint8Array(4),
                        n = Math.min(4, e);
                      if (0 === n) throw new Error("no bytes available");
                      r.set(data.subarray(t, t + n)),
                        (this.word = new DataView(r.buffer).getUint32(0)),
                        (this.bitsAvailable = 8 * n),
                        (this.bytesAvailable -= n);
                    }),
                    (t.skipBits = function (e) {
                      var t;
                      this.bitsAvailable > e
                        ? ((this.word <<= e), (this.bitsAvailable -= e))
                        : ((e -= this.bitsAvailable),
                          (e -= (t = e >> 3) >> 3),
                          (this.bytesAvailable -= t),
                          this.loadWord(),
                          (this.word <<= e),
                          (this.bitsAvailable -= e));
                    }),
                    (t.readBits = function (e) {
                      var t = Math.min(this.bitsAvailable, e),
                        r = this.word >>> (32 - t);
                      return (
                        e > 32 &&
                          c.logger.error(
                            "Cannot read more than 32 bits at a time"
                          ),
                        (this.bitsAvailable -= t),
                        this.bitsAvailable > 0
                          ? (this.word <<= t)
                          : this.bytesAvailable > 0 && this.loadWord(),
                        (t = e - t) > 0 && this.bitsAvailable
                          ? (r << t) | this.readBits(t)
                          : r
                      );
                    }),
                    (t.skipLZ = function () {
                      var e;
                      for (e = 0; e < this.bitsAvailable; ++e)
                        if (0 != (this.word & (2147483648 >>> e)))
                          return (
                            (this.word <<= e), (this.bitsAvailable -= e), e
                          );
                      return this.loadWord(), e + this.skipLZ();
                    }),
                    (t.skipUEG = function () {
                      this.skipBits(1 + this.skipLZ());
                    }),
                    (t.skipEG = function () {
                      this.skipBits(1 + this.skipLZ());
                    }),
                    (t.readUEG = function () {
                      var e = this.skipLZ();
                      return this.readBits(e + 1) - 1;
                    }),
                    (t.readEG = function () {
                      var e = this.readUEG();
                      return 1 & e ? (1 + e) >>> 1 : -1 * (e >>> 1);
                    }),
                    (t.readBoolean = function () {
                      return 1 === this.readBits(1);
                    }),
                    (t.readUByte = function () {
                      return this.readBits(8);
                    }),
                    (t.readUShort = function () {
                      return this.readBits(16);
                    }),
                    (t.readUInt = function () {
                      return this.readBits(32);
                    }),
                    (t.skipScalingList = function (e) {
                      var t,
                        r = 8,
                        n = 8;
                      for (t = 0; t < e; t++)
                        0 !== n && (n = (r + this.readEG() + 256) % 256),
                          (r = 0 === n ? r : n);
                    }),
                    (t.readSPS = function () {
                      var e,
                        t,
                        r,
                        n,
                        o,
                        l,
                        i,
                        d = 0,
                        c = 0,
                        f = 0,
                        h = 0,
                        v = this.readUByte.bind(this),
                        m = this.readBits.bind(this),
                        y = this.readUEG.bind(this),
                        E = this.readBoolean.bind(this),
                        T = this.skipBits.bind(this),
                        S = this.skipEG.bind(this),
                        _ = this.skipUEG.bind(this),
                        A = this.skipScalingList.bind(this);
                      if (
                        (v(),
                        (e = v()),
                        m(5),
                        T(3),
                        v(),
                        _(),
                        100 === e ||
                          110 === e ||
                          122 === e ||
                          244 === e ||
                          44 === e ||
                          83 === e ||
                          86 === e ||
                          118 === e ||
                          128 === e)
                      ) {
                        var R = y();
                        if ((3 === R && T(1), _(), _(), T(1), E()))
                          for (l = 3 !== R ? 8 : 12, i = 0; i < l; i++)
                            E() && A(i < 6 ? 16 : 64);
                      }
                      _();
                      var w = y();
                      if (0 === w) y();
                      else if (1 === w)
                        for (T(1), S(), S(), t = y(), i = 0; i < t; i++) S();
                      _(),
                        T(1),
                        (r = y()),
                        (n = y()),
                        0 === (o = m(1)) && T(1),
                        T(1),
                        E() && ((d = y()), (c = y()), (f = y()), (h = y()));
                      var k = [1, 1];
                      if (E() && E())
                        switch (v()) {
                          case 1:
                            k = [1, 1];
                            break;
                          case 2:
                            k = [12, 11];
                            break;
                          case 3:
                            k = [10, 11];
                            break;
                          case 4:
                            k = [16, 11];
                            break;
                          case 5:
                            k = [40, 33];
                            break;
                          case 6:
                            k = [24, 11];
                            break;
                          case 7:
                            k = [20, 11];
                            break;
                          case 8:
                            k = [32, 11];
                            break;
                          case 9:
                            k = [80, 33];
                            break;
                          case 10:
                            k = [18, 11];
                            break;
                          case 11:
                            k = [15, 11];
                            break;
                          case 12:
                            k = [64, 33];
                            break;
                          case 13:
                            k = [160, 99];
                            break;
                          case 14:
                            k = [4, 3];
                            break;
                          case 15:
                            k = [3, 2];
                            break;
                          case 16:
                            k = [2, 1];
                            break;
                          case 255:
                            k = [(v() << 8) | v(), (v() << 8) | v()];
                        }
                      return {
                        width: Math.ceil(16 * (r + 1) - 2 * d - 2 * c),
                        height: (2 - o) * (n + 1) * 16 - (o ? 2 : 4) * (f + h),
                        pixelRatio: k,
                      };
                    }),
                    (t.readSliceType = function () {
                      return this.readUByte(), this.readUEG(), this.readUEG();
                    }),
                    e
                  );
                })(),
                C = (function () {
                  function e(e, t, r, n) {
                    (this.decryptdata = r),
                      (this.discardEPB = n),
                      (this.decrypter = new l.default(e, t, {
                        removePKCS7Padding: !1,
                      }));
                  }
                  var t = e.prototype;
                  return (
                    (t.decryptBuffer = function (e, t) {
                      this.decrypter.decrypt(
                        e,
                        this.decryptdata.key.buffer,
                        this.decryptdata.iv.buffer,
                        t
                      );
                    }),
                    (t.decryptAacSample = function (e, t, r, n) {
                      var o = e[t].unit,
                        l = o.subarray(16, o.length - (o.length % 16)),
                        d = l.buffer.slice(
                          l.byteOffset,
                          l.byteOffset + l.length
                        ),
                        c = this;
                      this.decryptBuffer(d, function (l) {
                        (l = new Uint8Array(l)),
                          o.set(l, 16),
                          n || c.decryptAacSamples(e, t + 1, r);
                      });
                    }),
                    (t.decryptAacSamples = function (e, t, r) {
                      for (; ; t++) {
                        if (t >= e.length) return void r();
                        if (!(e[t].unit.length < 32)) {
                          var n = this.decrypter.isSync();
                          if ((this.decryptAacSample(e, t, r, n), !n)) return;
                        }
                      }
                    }),
                    (t.getAvcEncryptedData = function (e) {
                      for (
                        var t = 16 * Math.floor((e.length - 48) / 160) + 16,
                          r = new Int8Array(t),
                          n = 0,
                          o = 32;
                        o <= e.length - 16;
                        o += 160, n += 16
                      )
                        r.set(e.subarray(o, o + 16), n);
                      return r;
                    }),
                    (t.getAvcDecryptedUnit = function (e, t) {
                      t = new Uint8Array(t);
                      for (
                        var r = 0, n = 32;
                        n <= e.length - 16;
                        n += 160, r += 16
                      )
                        e.set(t.subarray(r, r + 16), n);
                      return e;
                    }),
                    (t.decryptAvcSample = function (e, t, r, n, o, l) {
                      var d = this.discardEPB(o.data),
                        c = this.getAvcEncryptedData(d),
                        f = this;
                      this.decryptBuffer(c.buffer, function (c) {
                        (o.data = f.getAvcDecryptedUnit(d, c)),
                          l || f.decryptAvcSamples(e, t, r + 1, n);
                      });
                    }),
                    (t.decryptAvcSamples = function (e, t, r, n) {
                      for (; ; t++, r = 0) {
                        if (t >= e.length) return void n();
                        for (var o = e[t].units; !(r >= o.length); r++) {
                          var l = o[r];
                          if (
                            !(l.length <= 48 || (1 !== l.type && 5 !== l.type))
                          ) {
                            var d = this.decrypter.isSync();
                            if ((this.decryptAvcSample(e, t, r, n, l, d), !d))
                              return;
                          }
                        }
                      }
                    }),
                    e
                  );
                })(),
                O = { video: 1, audio: 2, id3: 3, text: 4 },
                I = (function () {
                  function e(e, t, r, n) {
                    (this.observer = e),
                      (this.config = r),
                      (this.typeSupported = n),
                      (this.remuxer = t),
                      (this.sampleAes = null);
                  }
                  var t = e.prototype;
                  return (
                    (t.setDecryptData = function (e) {
                      null != e && null != e.key && "SAMPLE-AES" === e.method
                        ? (this.sampleAes = new C(
                            this.observer,
                            this.config,
                            e,
                            this.discardEPB
                          ))
                        : (this.sampleAes = null);
                    }),
                    (e.probe = function (data) {
                      var t = e._syncOffset(data);
                      return !(
                        t < 0 ||
                        (t &&
                          c.logger.warn(
                            "MPEG2-TS detected but first sync word found @ offset " +
                              t +
                              ", junk ahead ?"
                          ),
                        0)
                      );
                    }),
                    (e._syncOffset = function (data) {
                      for (
                        var e = Math.min(1e3, data.length - 564), i = 0;
                        i < e;

                      ) {
                        if (
                          71 === data[i] &&
                          71 === data[i + 188] &&
                          71 === data[i + 376]
                        )
                          return i;
                        i++;
                      }
                      return -1;
                    }),
                    (e.createTrack = function (e, t) {
                      return {
                        container:
                          "video" === e || "audio" === e
                            ? "video/mp2t"
                            : void 0,
                        type: e,
                        id: O[e],
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: 0,
                        samples: [],
                        dropped: "video" === e ? 0 : void 0,
                        isAAC: "audio" === e || void 0,
                        duration: "audio" === e ? t : void 0,
                      };
                    }),
                    (t.resetInitSegment = function (t, r, n, o) {
                      (this.pmtParsed = !1),
                        (this._pmtId = -1),
                        (this._avcTrack = e.createTrack("video", o)),
                        (this._audioTrack = e.createTrack("audio", o)),
                        (this._id3Track = e.createTrack("id3", o)),
                        (this._txtTrack = e.createTrack("text", o)),
                        (this.aacOverFlow = null),
                        (this.aacLastPTS = null),
                        (this.avcSample = null),
                        (this.audioCodec = r),
                        (this.videoCodec = n),
                        (this._duration = o);
                    }),
                    (t.resetTimeStamp = function () {}),
                    (t.append = function (data, t, r, l) {
                      var d,
                        f,
                        h,
                        v,
                        m,
                        y = data.length,
                        E = !1;
                      this.contiguous = r;
                      var T = this.pmtParsed,
                        S = this._avcTrack,
                        _ = this._audioTrack,
                        A = this._id3Track,
                        R = S.pid,
                        w = _.pid,
                        k = A.pid,
                        L = this._pmtId,
                        D = S.pesData,
                        C = _.pesData,
                        O = A.pesData,
                        I = this._parsePAT,
                        x = this._parsePMT,
                        P = this._parsePES,
                        F = this._parseAVCPES.bind(this),
                        M = this._parseAACPES.bind(this),
                        N = this._parseMPEGPES.bind(this),
                        U = this._parseID3PES.bind(this),
                        B = e._syncOffset(data);
                      for (y -= (y + B) % 188, d = B; d < y; d += 188)
                        if (71 === data[d]) {
                          if (
                            ((f = !!(64 & data[d + 1])),
                            (h = ((31 & data[d + 1]) << 8) + data[d + 2]),
                            (48 & data[d + 3]) >> 4 > 1)
                          ) {
                            if ((v = d + 5 + data[d + 4]) === d + 188) continue;
                          } else v = d + 4;
                          switch (h) {
                            case R:
                              f &&
                                (D && (m = P(D)) && F(m, !1),
                                (D = { data: [], size: 0 })),
                                D &&
                                  (D.data.push(data.subarray(v, d + 188)),
                                  (D.size += d + 188 - v));
                              break;
                            case w:
                              f &&
                                (C && (m = P(C)) && (_.isAAC ? M(m) : N(m)),
                                (C = { data: [], size: 0 })),
                                C &&
                                  (C.data.push(data.subarray(v, d + 188)),
                                  (C.size += d + 188 - v));
                              break;
                            case k:
                              f &&
                                (O && (m = P(O)) && U(m),
                                (O = { data: [], size: 0 })),
                                O &&
                                  (O.data.push(data.subarray(v, d + 188)),
                                  (O.size += d + 188 - v));
                              break;
                            case 0:
                              f && (v += data[v] + 1),
                                (L = this._pmtId = I(data, v));
                              break;
                            case L:
                              f && (v += data[v] + 1);
                              var G = x(
                                data,
                                v,
                                !0 === this.typeSupported.mpeg ||
                                  !0 === this.typeSupported.mp3,
                                null != this.sampleAes
                              );
                              (R = G.avc) > 0 && (S.pid = R),
                                (w = G.audio) > 0 &&
                                  ((_.pid = w), (_.isAAC = G.isAAC)),
                                (k = G.id3) > 0 && (A.pid = k),
                                E &&
                                  !T &&
                                  (c.logger.log("reparse from beginning"),
                                  (E = !1),
                                  (d = B - 188)),
                                (T = this.pmtParsed = !0);
                              break;
                            case 17:
                            case 8191:
                              break;
                            default:
                              E = !0;
                          }
                        } else
                          this.observer.trigger(n.default.ERROR, {
                            type: o.ErrorTypes.MEDIA_ERROR,
                            details: o.ErrorDetails.FRAG_PARSING_ERROR,
                            fatal: !1,
                            reason: "TS packet did not start with 0x47",
                          });
                      D && (m = P(D))
                        ? (F(m, !0), (S.pesData = null))
                        : (S.pesData = D),
                        C && (m = P(C))
                          ? (_.isAAC ? M(m) : N(m), (_.pesData = null))
                          : (C &&
                              C.size &&
                              c.logger.log(
                                "last AAC PES packet truncated,might overlap between fragments"
                              ),
                            (_.pesData = C)),
                        O && (m = P(O))
                          ? (U(m), (A.pesData = null))
                          : (A.pesData = O),
                        null == this.sampleAes
                          ? this.remuxer.remux(_, S, A, this._txtTrack, t, r, l)
                          : this.decryptAndRemux(
                              _,
                              S,
                              A,
                              this._txtTrack,
                              t,
                              r,
                              l
                            );
                    }),
                    (t.decryptAndRemux = function (e, t, r, n, o, l, d) {
                      if (e.samples && e.isAAC) {
                        var c = this;
                        this.sampleAes.decryptAacSamples(
                          e.samples,
                          0,
                          function () {
                            c.decryptAndRemuxAvc(e, t, r, n, o, l, d);
                          }
                        );
                      } else this.decryptAndRemuxAvc(e, t, r, n, o, l, d);
                    }),
                    (t.decryptAndRemuxAvc = function (e, t, r, n, o, l, d) {
                      if (t.samples) {
                        var c = this;
                        this.sampleAes.decryptAvcSamples(
                          t.samples,
                          0,
                          0,
                          function () {
                            c.remuxer.remux(e, t, r, n, o, l, d);
                          }
                        );
                      } else this.remuxer.remux(e, t, r, n, o, l, d);
                    }),
                    (t.destroy = function () {
                      (this._initPTS = this._initDTS = void 0),
                        (this._duration = 0);
                    }),
                    (t._parsePAT = function (data, e) {
                      return ((31 & data[e + 10]) << 8) | data[e + 11];
                    }),
                    (t._parsePMT = function (data, e, t, r) {
                      var n,
                        o,
                        l = { audio: -1, avc: -1, id3: -1, isAAC: !0 };
                      for (
                        n =
                          e + 3 + (((15 & data[e + 1]) << 8) | data[e + 2]) - 4,
                          e += 12 + (((15 & data[e + 10]) << 8) | data[e + 11]);
                        e < n;

                      ) {
                        switch (
                          ((o = ((31 & data[e + 1]) << 8) | data[e + 2]),
                          data[e])
                        ) {
                          case 207:
                            if (!r) {
                              c.logger.log("unknown stream type:" + data[e]);
                              break;
                            }
                          case 15:
                            -1 === l.audio && (l.audio = o);
                            break;
                          case 21:
                            -1 === l.id3 && (l.id3 = o);
                            break;
                          case 219:
                            if (!r) {
                              c.logger.log("unknown stream type:" + data[e]);
                              break;
                            }
                          case 27:
                            -1 === l.avc && (l.avc = o);
                            break;
                          case 3:
                          case 4:
                            t
                              ? -1 === l.audio &&
                                ((l.audio = o), (l.isAAC = !1))
                              : c.logger.log(
                                  "MPEG audio found, not supported in this browser for now"
                                );
                            break;
                          case 36:
                            c.logger.warn(
                              "HEVC stream type found, not supported for now"
                            );
                            break;
                          default:
                            c.logger.log("unknown stream type:" + data[e]);
                        }
                        e += 5 + (((15 & data[e + 3]) << 8) | data[e + 4]);
                      }
                      return l;
                    }),
                    (t._parsePES = function (e) {
                      var t,
                        r,
                        n,
                        o,
                        l,
                        d,
                        f,
                        h,
                        i = 0,
                        data = e.data;
                      if (!e || 0 === e.size) return null;
                      for (; data[0].length < 19 && data.length > 1; ) {
                        var v = new Uint8Array(data[0].length + data[1].length);
                        v.set(data[0]),
                          v.set(data[1], data[0].length),
                          (data[0] = v),
                          data.splice(1, 1);
                      }
                      if (1 === ((t = data[0])[0] << 16) + (t[1] << 8) + t[2]) {
                        if ((n = (t[4] << 8) + t[5]) && n > e.size - 6)
                          return null;
                        if (
                          (192 & (r = t[7]) &&
                            ((d =
                              536870912 * (14 & t[9]) +
                              4194304 * (255 & t[10]) +
                              16384 * (254 & t[11]) +
                              128 * (255 & t[12]) +
                              (254 & t[13]) / 2) > 4294967295 &&
                              (d -= 8589934592),
                            64 & r
                              ? ((f =
                                  536870912 * (14 & t[14]) +
                                  4194304 * (255 & t[15]) +
                                  16384 * (254 & t[16]) +
                                  128 * (255 & t[17]) +
                                  (254 & t[18]) / 2) > 4294967295 &&
                                  (f -= 8589934592),
                                d - f > 54e5 &&
                                  (c.logger.warn(
                                    Math.round((d - f) / 9e4) +
                                      "s delta between PTS and DTS, align them"
                                  ),
                                  (d = f)))
                              : (f = d)),
                          (h = (o = t[8]) + 9),
                          e.size <= h)
                        )
                          return null;
                        (e.size -= h), (l = new Uint8Array(e.size));
                        for (var m = 0, y = data.length; m < y; m++) {
                          var E = (t = data[m]).byteLength;
                          if (h) {
                            if (h > E) {
                              h -= E;
                              continue;
                            }
                            (t = t.subarray(h)), (E -= h), (h = 0);
                          }
                          l.set(t, i), (i += E);
                        }
                        return (
                          n && (n -= o + 3), { data: l, pts: d, dts: f, len: n }
                        );
                      }
                      return null;
                    }),
                    (t.pushAccesUnit = function (e, t) {
                      if (e.units.length && e.frame) {
                        var r = t.samples,
                          n = r.length;
                        if (isNaN(e.pts)) {
                          if (!n) return void t.dropped++;
                          var o = r[n - 1];
                          (e.pts = o.pts), (e.dts = o.dts);
                        }
                        !this.config.forceKeyFrameOnDiscontinuity ||
                        !0 === e.key ||
                        (t.sps && (n || this.contiguous))
                          ? ((e.id = n), r.push(e))
                          : t.dropped++;
                      }
                      e.debug.length &&
                        c.logger.log(e.pts + "/" + e.dts + ":" + e.debug);
                    }),
                    (t._parseAVCPES = function (e, t) {
                      var r,
                        n,
                        i,
                        o = this,
                        track = this._avcTrack,
                        l = this._parseAVCNALu(e.data),
                        d = this.avcSample,
                        c = !1,
                        f = this.pushAccesUnit.bind(this),
                        h = function (e, t, r, n) {
                          return {
                            key: e,
                            pts: t,
                            dts: r,
                            units: [],
                            debug: n,
                          };
                        };
                      (e.data = null),
                        d &&
                          l.length &&
                          !track.audFound &&
                          (f(d, track),
                          (d = this.avcSample = h(!1, e.pts, e.dts, ""))),
                        l.forEach(function (t) {
                          switch (t.type) {
                            case 1:
                              (n = !0),
                                d ||
                                  (d = o.avcSample = h(!0, e.pts, e.dts, "")),
                                (d.frame = !0);
                              var data = t.data;
                              if (c && data.length > 4) {
                                var l = new D(data).readSliceType();
                                (2 !== l && 4 !== l && 7 !== l && 9 !== l) ||
                                  (d.key = !0);
                              }
                              break;
                            case 5:
                              (n = !0),
                                d ||
                                  (d = o.avcSample = h(!0, e.pts, e.dts, "")),
                                (d.key = !0),
                                (d.frame = !0);
                              break;
                            case 6:
                              (n = !0),
                                (r = new D(o.discardEPB(t.data))).readUByte();
                              for (
                                var v = 0, m = 0, y = !1, b = 0;
                                !y && r.bytesAvailable > 1;

                              ) {
                                v = 0;
                                do {
                                  v += b = r.readUByte();
                                } while (255 === b);
                                m = 0;
                                do {
                                  m += b = r.readUByte();
                                } while (255 === b);
                                if (4 === v && 0 !== r.bytesAvailable) {
                                  if (
                                    ((y = !0),
                                    181 === r.readUByte() &&
                                      49 === r.readUShort() &&
                                      1195456820 === r.readUInt() &&
                                      3 === r.readUByte())
                                  ) {
                                    var E = r.readUByte(),
                                      T = 31 & E,
                                      S = [E, r.readUByte()];
                                    for (i = 0; i < T; i++)
                                      S.push(r.readUByte()),
                                        S.push(r.readUByte()),
                                        S.push(r.readUByte());
                                    o._insertSampleInOrder(
                                      o._txtTrack.samples,
                                      { type: 3, pts: e.pts, bytes: S }
                                    );
                                  }
                                } else if (5 === v && 0 !== r.bytesAvailable) {
                                  if (((y = !0), m > 16)) {
                                    var _ = [];
                                    for (i = 0; i < 16; i++)
                                      _.push(r.readUByte().toString(16)),
                                        (3 !== i &&
                                          5 !== i &&
                                          7 !== i &&
                                          9 !== i) ||
                                          _.push("-");
                                    var R = m - 16,
                                      w = new Uint8Array(R);
                                    for (i = 0; i < R; i++)
                                      w[i] = r.readUByte();
                                    o._insertSampleInOrder(
                                      o._txtTrack.samples,
                                      {
                                        pts: e.pts,
                                        payloadType: v,
                                        uuid: _.join(""),
                                        userDataBytes: w,
                                        userData: Object(A.utf8ArrayToStr)(
                                          w.buffer
                                        ),
                                      }
                                    );
                                  }
                                } else if (m < r.bytesAvailable)
                                  for (i = 0; i < m; i++) r.readUByte();
                              }
                              break;
                            case 7:
                              if (((n = !0), (c = !0), !track.sps)) {
                                var k = (r = new D(t.data)).readSPS();
                                (track.width = k.width),
                                  (track.height = k.height),
                                  (track.pixelRatio = k.pixelRatio),
                                  (track.sps = [t.data]),
                                  (track.duration = o._duration);
                                var L = t.data.subarray(1, 4),
                                  C = "avc1.";
                                for (i = 0; i < 3; i++) {
                                  var O = L[i].toString(16);
                                  O.length < 2 && (O = "0" + O), (C += O);
                                }
                                track.codec = C;
                              }
                              break;
                            case 8:
                              (n = !0), track.pps || (track.pps = [t.data]);
                              break;
                            case 9:
                              (n = !1),
                                (track.audFound = !0),
                                d && f(d, track),
                                (d = o.avcSample = h(!1, e.pts, e.dts, ""));
                              break;
                            case 12:
                              n = !1;
                              break;
                            default:
                              (n = !1),
                                d && (d.debug += "unknown NAL " + t.type + " ");
                          }
                          d && n && d.units.push(t);
                        }),
                        t && d && (f(d, track), (this.avcSample = null));
                    }),
                    (t._insertSampleInOrder = function (e, data) {
                      var t = e.length;
                      if (t > 0) {
                        if (data.pts >= e[t - 1].pts) e.push(data);
                        else
                          for (var r = t - 1; r >= 0; r--)
                            if (data.pts < e[r].pts) {
                              e.splice(r, 0, data);
                              break;
                            }
                      } else e.push(data);
                    }),
                    (t._getLastNalUnit = function () {
                      var e,
                        t = this.avcSample;
                      if (!t || 0 === t.units.length) {
                        var r = this._avcTrack.samples;
                        t = r[r.length - 1];
                      }
                      if (t) {
                        var n = t.units;
                        e = n[n.length - 1];
                      }
                      return e;
                    }),
                    (t._parseAVCNALu = function (e) {
                      var t,
                        r,
                        n,
                        o,
                        i = 0,
                        l = e.byteLength,
                        track = this._avcTrack,
                        d = track.naluState || 0,
                        c = d,
                        f = [],
                        h = -1;
                      for (
                        -1 === d &&
                        ((h = 0), (o = 31 & e[0]), (d = 0), (i = 1));
                        i < l;

                      )
                        if (((t = e[i++]), d))
                          if (1 !== d)
                            if (t)
                              if (1 === t) {
                                if (h >= 0)
                                  (n = {
                                    data: e.subarray(h, i - d - 1),
                                    type: o,
                                  }),
                                    f.push(n);
                                else {
                                  var v = this._getLastNalUnit();
                                  if (
                                    v &&
                                    (c &&
                                      i <= 4 - c &&
                                      v.state &&
                                      (v.data = v.data.subarray(
                                        0,
                                        v.data.byteLength - c
                                      )),
                                    (r = i - d - 1) > 0)
                                  ) {
                                    var m = new Uint8Array(
                                      v.data.byteLength + r
                                    );
                                    m.set(v.data, 0),
                                      m.set(
                                        e.subarray(0, r),
                                        v.data.byteLength
                                      ),
                                      (v.data = m);
                                  }
                                }
                                i < l
                                  ? ((h = i), (o = 31 & e[i]), (d = 0))
                                  : (d = -1);
                              } else d = 0;
                            else d = 3;
                          else d = t ? 0 : 2;
                        else d = t ? 0 : 1;
                      if (
                        (h >= 0 &&
                          d >= 0 &&
                          ((n = { data: e.subarray(h, l), type: o, state: d }),
                          f.push(n)),
                        0 === f.length)
                      ) {
                        var y = this._getLastNalUnit();
                        if (y) {
                          var E = new Uint8Array(
                            y.data.byteLength + e.byteLength
                          );
                          E.set(y.data, 0),
                            E.set(e, y.data.byteLength),
                            (y.data = E);
                        }
                      }
                      return (track.naluState = d), f;
                    }),
                    (t.discardEPB = function (data) {
                      for (
                        var e, t, r = data.byteLength, n = [], i = 1;
                        i < r - 2;

                      )
                        0 === data[i] && 0 === data[i + 1] && 3 === data[i + 2]
                          ? (n.push(i + 2), (i += 2))
                          : i++;
                      if (0 === n.length) return data;
                      (e = r - n.length), (t = new Uint8Array(e));
                      var o = 0;
                      for (i = 0; i < e; o++, i++)
                        o === n[0] && (o++, n.shift()), (t[i] = data[o]);
                      return t;
                    }),
                    (t._parseAACPES = function (e) {
                      var t,
                        r,
                        l,
                        d,
                        f,
                        h,
                        v,
                        track = this._audioTrack,
                        data = e.data,
                        m = e.pts,
                        E = this.aacOverFlow,
                        A = this.aacLastPTS;
                      if (E) {
                        var R = new Uint8Array(E.byteLength + data.byteLength);
                        R.set(E, 0), R.set(data, E.byteLength), (data = R);
                      }
                      for (
                        l = 0, f = data.length;
                        l < f - 1 && !y(data, l);
                        l++
                      );
                      if (
                        !l ||
                        (l < f - 1
                          ? ((h =
                              "AAC PES did not start with ADTS header,offset:" +
                              l),
                            (v = !1))
                          : ((h = "no ADTS header found in AAC PES"), (v = !0)),
                        c.logger.warn("parsing error:" + h),
                        this.observer.trigger(n.default.ERROR, {
                          type: o.ErrorTypes.MEDIA_ERROR,
                          details: o.ErrorDetails.FRAG_PARSING_ERROR,
                          fatal: v,
                          reason: h,
                        }),
                        !v)
                      ) {
                        if (
                          (T(track, this.observer, data, l, this.audioCodec),
                          (r = 0),
                          (t = S(track.samplerate)),
                          E && A)
                        ) {
                          var w = A + t;
                          Math.abs(w - m) > 1 &&
                            (c.logger.log(
                              "AAC: align PTS for overlapping frames by " +
                                Math.round((w - m) / 90)
                            ),
                            (m = w));
                        }
                        for (; l < f; ) {
                          if (y(data, l)) {
                            if (l + 5 < f) {
                              var k = _(track, data, l, m, r);
                              if (k) {
                                (l += k.length), (d = k.sample.pts), r++;
                                continue;
                              }
                            }
                            break;
                          }
                          l++;
                        }
                        (E = l < f ? data.subarray(l, f) : null),
                          (this.aacOverFlow = E),
                          (this.aacLastPTS = d);
                      }
                    }),
                    (t._parseMPEGPES = function (e) {
                      for (
                        var data = e.data,
                          t = data.length,
                          r = 0,
                          n = 0,
                          o = e.pts;
                        n < t;

                      )
                        if (L.isHeader(data, n)) {
                          var l = L.appendFrame(
                            this._audioTrack,
                            data,
                            n,
                            o,
                            r
                          );
                          if (!l) break;
                          (n += l.length), r++;
                        } else n++;
                    }),
                    (t._parseID3PES = function (e) {
                      this._id3Track.samples.push(e);
                    }),
                    e
                  );
                })(),
                x = (function () {
                  function e(e, t, r) {
                    (this.observer = e), (this.config = r), (this.remuxer = t);
                  }
                  var t = e.prototype;
                  return (
                    (t.resetInitSegment = function (e, t, r, n) {
                      this._audioTrack = {
                        container: "audio/mpeg",
                        type: "audio",
                        id: -1,
                        sequenceNumber: 0,
                        isAAC: !1,
                        samples: [],
                        len: 0,
                        manifestCodec: t,
                        duration: n,
                        inputTimeScale: 9e4,
                      };
                    }),
                    (t.resetTimeStamp = function () {}),
                    (e.probe = function (data) {
                      var e,
                        t,
                        r = A.default.getID3Data(data, 0);
                      if (r && void 0 !== A.default.getTimeStamp(r))
                        for (
                          e = r.length, t = Math.min(data.length - 1, e + 100);
                          e < t;
                          e++
                        )
                          if (L.probe(data, e))
                            return (
                              c.logger.log("MPEG Audio sync word found !"), !0
                            );
                      return !1;
                    }),
                    (t.append = function (data, e, t, r) {
                      for (
                        var n = A.default.getID3Data(data, 0),
                          o = A.default.getTimeStamp(n),
                          l = o ? 90 * o : 9e4 * e,
                          d = n.length,
                          c = data.length,
                          f = 0,
                          h = 0,
                          track = this._audioTrack,
                          v = [{ pts: l, dts: l, data: n }];
                        d < c;

                      )
                        if (L.isHeader(data, d)) {
                          var m = L.appendFrame(track, data, d, l, f);
                          if (!m) break;
                          (d += m.length), (h = m.sample.pts), f++;
                        } else
                          A.default.isHeader(data, d)
                            ? ((n = A.default.getID3Data(data, d)),
                              v.push({ pts: h, dts: h, data: n }),
                              (d += n.length))
                            : d++;
                      this.remuxer.remux(
                        track,
                        { samples: [] },
                        { samples: v, inputTimeScale: 9e4 },
                        { samples: [] },
                        e,
                        t,
                        r
                      );
                    }),
                    (t.destroy = function () {}),
                    e
                  );
                })(),
                P = (function () {
                  function e() {}
                  return (
                    (e.getSilentFrame = function (e, t) {
                      switch (e) {
                        case "mp4a.40.2":
                          if (1 === t)
                            return new Uint8Array([0, 200, 0, 128, 35, 128]);
                          if (2 === t)
                            return new Uint8Array([
                              33, 0, 73, 144, 2, 25, 0, 35, 128,
                            ]);
                          if (3 === t)
                            return new Uint8Array([
                              0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0,
                              142,
                            ]);
                          if (4 === t)
                            return new Uint8Array([
                              0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0,
                              128, 44, 128, 8, 2, 56,
                            ]);
                          if (5 === t)
                            return new Uint8Array([
                              0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0,
                              130, 48, 4, 153, 0, 33, 144, 2, 56,
                            ]);
                          if (6 === t)
                            return new Uint8Array([
                              0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0,
                              130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8,
                              224,
                            ]);
                          break;
                        default:
                          if (1 === t)
                            return new Uint8Array([
                              1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0,
                              0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90,
                              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
                            ]);
                          if (2 === t)
                            return new Uint8Array([
                              1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0,
                              0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90,
                              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                              90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
                            ]);
                          if (3 === t)
                            return new Uint8Array([
                              1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0,
                              0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90,
                              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                              90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
                            ]);
                      }
                      return null;
                    }),
                    e
                  );
                })(),
                F = Math.pow(2, 32) - 1,
                M = (function () {
                  function e() {}
                  return (
                    (e.init = function () {
                      var i;
                      for (i in ((e.types = {
                        avc1: [],
                        avcC: [],
                        btrt: [],
                        dinf: [],
                        dref: [],
                        esds: [],
                        ftyp: [],
                        hdlr: [],
                        mdat: [],
                        mdhd: [],
                        mdia: [],
                        mfhd: [],
                        minf: [],
                        moof: [],
                        moov: [],
                        mp4a: [],
                        ".mp3": [],
                        mvex: [],
                        mvhd: [],
                        pasp: [],
                        sdtp: [],
                        stbl: [],
                        stco: [],
                        stsc: [],
                        stsd: [],
                        stsz: [],
                        stts: [],
                        tfdt: [],
                        tfhd: [],
                        traf: [],
                        trak: [],
                        trun: [],
                        trex: [],
                        tkhd: [],
                        vmhd: [],
                        smhd: [],
                      }),
                      e.types))
                        e.types.hasOwnProperty(i) &&
                          (e.types[i] = [
                            i.charCodeAt(0),
                            i.charCodeAt(1),
                            i.charCodeAt(2),
                            i.charCodeAt(3),
                          ]);
                      var t = new Uint8Array([
                          0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0,
                          0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72,
                          97, 110, 100, 108, 101, 114, 0,
                        ]),
                        r = new Uint8Array([
                          0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0,
                          0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72,
                          97, 110, 100, 108, 101, 114, 0,
                        ]);
                      e.HDLR_TYPES = { video: t, audio: r };
                      var n = new Uint8Array([
                          0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108,
                          32, 0, 0, 0, 1,
                        ]),
                        o = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                      (e.STTS = e.STSC = e.STCO = o),
                        (e.STSZ = new Uint8Array([
                          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        ])),
                        (e.VMHD = new Uint8Array([
                          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
                        ])),
                        (e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                        (e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]));
                      var l = new Uint8Array([105, 115, 111, 109]),
                        d = new Uint8Array([97, 118, 99, 49]),
                        c = new Uint8Array([0, 0, 0, 1]);
                      (e.FTYP = e.box(e.types.ftyp, l, c, l, d)),
                        (e.DINF = e.box(e.types.dinf, e.box(e.types.dref, n)));
                    }),
                    (e.box = function (e) {
                      for (
                        var t,
                          r = Array.prototype.slice.call(arguments, 1),
                          n = 8,
                          i = r.length,
                          o = i;
                        i--;

                      )
                        n += r[i].byteLength;
                      for (
                        (t = new Uint8Array(n))[0] = (n >> 24) & 255,
                          t[1] = (n >> 16) & 255,
                          t[2] = (n >> 8) & 255,
                          t[3] = 255 & n,
                          t.set(e, 4),
                          i = 0,
                          n = 8;
                        i < o;
                        i++
                      )
                        t.set(r[i], n), (n += r[i].byteLength);
                      return t;
                    }),
                    (e.hdlr = function (t) {
                      return e.box(e.types.hdlr, e.HDLR_TYPES[t]);
                    }),
                    (e.mdat = function (data) {
                      return e.box(e.types.mdat, data);
                    }),
                    (e.mdhd = function (t, r) {
                      r *= t;
                      var n = Math.floor(r / (F + 1)),
                        o = Math.floor(r % (F + 1));
                      return e.box(
                        e.types.mdhd,
                        new Uint8Array([
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          2,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          3,
                          (t >> 24) & 255,
                          (t >> 16) & 255,
                          (t >> 8) & 255,
                          255 & t,
                          n >> 24,
                          (n >> 16) & 255,
                          (n >> 8) & 255,
                          255 & n,
                          o >> 24,
                          (o >> 16) & 255,
                          (o >> 8) & 255,
                          255 & o,
                          85,
                          196,
                          0,
                          0,
                        ])
                      );
                    }),
                    (e.mdia = function (track) {
                      return e.box(
                        e.types.mdia,
                        e.mdhd(track.timescale, track.duration),
                        e.hdlr(track.type),
                        e.minf(track)
                      );
                    }),
                    (e.mfhd = function (t) {
                      return e.box(
                        e.types.mfhd,
                        new Uint8Array([
                          0,
                          0,
                          0,
                          0,
                          t >> 24,
                          (t >> 16) & 255,
                          (t >> 8) & 255,
                          255 & t,
                        ])
                      );
                    }),
                    (e.minf = function (track) {
                      return "audio" === track.type
                        ? e.box(
                            e.types.minf,
                            e.box(e.types.smhd, e.SMHD),
                            e.DINF,
                            e.stbl(track)
                          )
                        : e.box(
                            e.types.minf,
                            e.box(e.types.vmhd, e.VMHD),
                            e.DINF,
                            e.stbl(track)
                          );
                    }),
                    (e.moof = function (t, r, track) {
                      return e.box(e.types.moof, e.mfhd(t), e.traf(track, r));
                    }),
                    (e.moov = function (t) {
                      for (var i = t.length, r = []; i--; ) r[i] = e.trak(t[i]);
                      return e.box.apply(
                        null,
                        [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)]
                          .concat(r)
                          .concat(e.mvex(t))
                      );
                    }),
                    (e.mvex = function (t) {
                      for (var i = t.length, r = []; i--; ) r[i] = e.trex(t[i]);
                      return e.box.apply(null, [e.types.mvex].concat(r));
                    }),
                    (e.mvhd = function (t, r) {
                      r *= t;
                      var n = Math.floor(r / (F + 1)),
                        o = Math.floor(r % (F + 1)),
                        l = new Uint8Array([
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          2,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          3,
                          (t >> 24) & 255,
                          (t >> 16) & 255,
                          (t >> 8) & 255,
                          255 & t,
                          n >> 24,
                          (n >> 16) & 255,
                          (n >> 8) & 255,
                          255 & n,
                          o >> 24,
                          (o >> 16) & 255,
                          (o >> 8) & 255,
                          255 & o,
                          0,
                          1,
                          0,
                          0,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          64,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          255,
                          255,
                          255,
                          255,
                        ]);
                      return e.box(e.types.mvhd, l);
                    }),
                    (e.sdtp = function (track) {
                      var t,
                        i,
                        r = track.samples || [],
                        n = new Uint8Array(4 + r.length);
                      for (i = 0; i < r.length; i++)
                        (t = r[i].flags),
                          (n[i + 4] =
                            (t.dependsOn << 4) |
                            (t.isDependedOn << 2) |
                            t.hasRedundancy);
                      return e.box(e.types.sdtp, n);
                    }),
                    (e.stbl = function (track) {
                      return e.box(
                        e.types.stbl,
                        e.stsd(track),
                        e.box(e.types.stts, e.STTS),
                        e.box(e.types.stsc, e.STSC),
                        e.box(e.types.stsz, e.STSZ),
                        e.box(e.types.stco, e.STCO)
                      );
                    }),
                    (e.avc1 = function (track) {
                      var i,
                        data,
                        t,
                        r = [],
                        n = [];
                      for (i = 0; i < track.sps.length; i++)
                        (t = (data = track.sps[i]).byteLength),
                          r.push((t >>> 8) & 255),
                          r.push(255 & t),
                          (r = r.concat(Array.prototype.slice.call(data)));
                      for (i = 0; i < track.pps.length; i++)
                        (t = (data = track.pps[i]).byteLength),
                          n.push((t >>> 8) & 255),
                          n.push(255 & t),
                          (n = n.concat(Array.prototype.slice.call(data)));
                      var o = e.box(
                          e.types.avcC,
                          new Uint8Array(
                            [1, r[3], r[4], r[5], 255, 224 | track.sps.length]
                              .concat(r)
                              .concat([track.pps.length])
                              .concat(n)
                          )
                        ),
                        l = track.width,
                        d = track.height,
                        c = track.pixelRatio[0],
                        f = track.pixelRatio[1];
                      return e.box(
                        e.types.avc1,
                        new Uint8Array([
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          (l >> 8) & 255,
                          255 & l,
                          (d >> 8) & 255,
                          255 & d,
                          0,
                          72,
                          0,
                          0,
                          0,
                          72,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          1,
                          18,
                          100,
                          97,
                          105,
                          108,
                          121,
                          109,
                          111,
                          116,
                          105,
                          111,
                          110,
                          47,
                          104,
                          108,
                          115,
                          46,
                          106,
                          115,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          24,
                          17,
                          17,
                        ]),
                        o,
                        e.box(
                          e.types.btrt,
                          new Uint8Array([
                            0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192,
                          ])
                        ),
                        e.box(
                          e.types.pasp,
                          new Uint8Array([
                            c >> 24,
                            (c >> 16) & 255,
                            (c >> 8) & 255,
                            255 & c,
                            f >> 24,
                            (f >> 16) & 255,
                            (f >> 8) & 255,
                            255 & f,
                          ])
                        )
                      );
                    }),
                    (e.esds = function (track) {
                      var e = track.config.length;
                      return new Uint8Array(
                        [
                          0,
                          0,
                          0,
                          0,
                          3,
                          23 + e,
                          0,
                          1,
                          0,
                          4,
                          15 + e,
                          64,
                          21,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          5,
                        ]
                          .concat([e])
                          .concat(track.config)
                          .concat([6, 1, 2])
                      );
                    }),
                    (e.mp4a = function (track) {
                      var t = track.samplerate;
                      return e.box(
                        e.types.mp4a,
                        new Uint8Array([
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          track.channelCount,
                          0,
                          16,
                          0,
                          0,
                          0,
                          0,
                          (t >> 8) & 255,
                          255 & t,
                          0,
                          0,
                        ]),
                        e.box(e.types.esds, e.esds(track))
                      );
                    }),
                    (e.mp3 = function (track) {
                      var t = track.samplerate;
                      return e.box(
                        e.types[".mp3"],
                        new Uint8Array([
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          track.channelCount,
                          0,
                          16,
                          0,
                          0,
                          0,
                          0,
                          (t >> 8) & 255,
                          255 & t,
                          0,
                          0,
                        ])
                      );
                    }),
                    (e.stsd = function (track) {
                      return "audio" === track.type
                        ? track.isAAC || "mp3" !== track.codec
                          ? e.box(e.types.stsd, e.STSD, e.mp4a(track))
                          : e.box(e.types.stsd, e.STSD, e.mp3(track))
                        : e.box(e.types.stsd, e.STSD, e.avc1(track));
                    }),
                    (e.tkhd = function (track) {
                      var t = track.id,
                        r = track.duration * track.timescale,
                        n = track.width,
                        o = track.height,
                        l = Math.floor(r / (F + 1)),
                        d = Math.floor(r % (F + 1));
                      return e.box(
                        e.types.tkhd,
                        new Uint8Array([
                          1,
                          0,
                          0,
                          7,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          2,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          3,
                          (t >> 24) & 255,
                          (t >> 16) & 255,
                          (t >> 8) & 255,
                          255 & t,
                          0,
                          0,
                          0,
                          0,
                          l >> 24,
                          (l >> 16) & 255,
                          (l >> 8) & 255,
                          255 & l,
                          d >> 24,
                          (d >> 16) & 255,
                          (d >> 8) & 255,
                          255 & d,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          64,
                          0,
                          0,
                          0,
                          (n >> 8) & 255,
                          255 & n,
                          0,
                          0,
                          (o >> 8) & 255,
                          255 & o,
                          0,
                          0,
                        ])
                      );
                    }),
                    (e.traf = function (track, t) {
                      var r = e.sdtp(track),
                        n = track.id,
                        o = Math.floor(t / (F + 1)),
                        l = Math.floor(t % (F + 1));
                      return e.box(
                        e.types.traf,
                        e.box(
                          e.types.tfhd,
                          new Uint8Array([
                            0,
                            0,
                            0,
                            0,
                            n >> 24,
                            (n >> 16) & 255,
                            (n >> 8) & 255,
                            255 & n,
                          ])
                        ),
                        e.box(
                          e.types.tfdt,
                          new Uint8Array([
                            1,
                            0,
                            0,
                            0,
                            o >> 24,
                            (o >> 16) & 255,
                            (o >> 8) & 255,
                            255 & o,
                            l >> 24,
                            (l >> 16) & 255,
                            (l >> 8) & 255,
                            255 & l,
                          ])
                        ),
                        e.trun(track, r.length + 16 + 20 + 8 + 16 + 8 + 8),
                        r
                      );
                    }),
                    (e.trak = function (track) {
                      return (
                        (track.duration = track.duration || 4294967295),
                        e.box(e.types.trak, e.tkhd(track), e.mdia(track))
                      );
                    }),
                    (e.trex = function (track) {
                      var t = track.id;
                      return e.box(
                        e.types.trex,
                        new Uint8Array([
                          0,
                          0,
                          0,
                          0,
                          t >> 24,
                          (t >> 16) & 255,
                          (t >> 8) & 255,
                          255 & t,
                          0,
                          0,
                          0,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          1,
                          0,
                          1,
                        ])
                      );
                    }),
                    (e.trun = function (track, t) {
                      var i,
                        r,
                        n,
                        o,
                        l,
                        d,
                        c = track.samples || [],
                        f = c.length,
                        h = 12 + 16 * f,
                        v = new Uint8Array(h);
                      for (
                        t += 8 + h,
                          v.set(
                            [
                              0,
                              0,
                              15,
                              1,
                              (f >>> 24) & 255,
                              (f >>> 16) & 255,
                              (f >>> 8) & 255,
                              255 & f,
                              (t >>> 24) & 255,
                              (t >>> 16) & 255,
                              (t >>> 8) & 255,
                              255 & t,
                            ],
                            0
                          ),
                          i = 0;
                        i < f;
                        i++
                      )
                        (n = (r = c[i]).duration),
                          (o = r.size),
                          (l = r.flags),
                          (d = r.cts),
                          v.set(
                            [
                              (n >>> 24) & 255,
                              (n >>> 16) & 255,
                              (n >>> 8) & 255,
                              255 & n,
                              (o >>> 24) & 255,
                              (o >>> 16) & 255,
                              (o >>> 8) & 255,
                              255 & o,
                              (l.isLeading << 2) | l.dependsOn,
                              (l.isDependedOn << 6) |
                                (l.hasRedundancy << 4) |
                                (l.paddingValue << 1) |
                                l.isNonSync,
                              61440 & l.degradPrio,
                              15 & l.degradPrio,
                              (d >>> 24) & 255,
                              (d >>> 16) & 255,
                              (d >>> 8) & 255,
                              255 & d,
                            ],
                            12 + 16 * i
                          );
                      return e.box(e.types.trun, v);
                    }),
                    (e.initSegment = function (t) {
                      e.types || e.init();
                      var r,
                        n = e.moov(t);
                      return (
                        (r = new Uint8Array(
                          e.FTYP.byteLength + n.byteLength
                        )).set(e.FTYP),
                        r.set(n, e.FTYP.byteLength),
                        r
                      );
                    }),
                    e
                  );
                })();
              function N(e, t, r, n) {
                void 0 === r && (r = 1), void 0 === n && (n = !1);
                var o = e * t * r;
                return n ? Math.round(o) : o;
              }
              function U(e, t) {
                return void 0 === t && (t = !1), N(e, 1e3, 1 / 9e4, t);
              }
              function B(e, t) {
                return void 0 === t && (t = 1), N(e, 9e4, 1 / t);
              }
              var G,
                j = B(10),
                K = B(0.2),
                H = (function () {
                  function e(e, t, r, n) {
                    (this.observer = e),
                      (this.config = t),
                      (this.typeSupported = r);
                    var o = navigator.userAgent;
                    (this.isSafari =
                      n && n.indexOf("Apple") > -1 && o && !o.match("CriOS")),
                      (this.ISGenerated = !1);
                  }
                  var t = e.prototype;
                  return (
                    (t.destroy = function () {}),
                    (t.resetTimeStamp = function (e) {
                      this._initPTS = this._initDTS = e;
                    }),
                    (t.resetInitSegment = function () {
                      this.ISGenerated = !1;
                    }),
                    (t.remux = function (e, t, r, o, l, d, f) {
                      if (
                        (this.ISGenerated || this.generateIS(e, t, l),
                        this.ISGenerated)
                      ) {
                        var h = e.samples.length,
                          v = t.samples.length,
                          m = l,
                          y = l;
                        if (h && v) {
                          var E =
                            (e.samples[0].pts - t.samples[0].pts) /
                            t.inputTimeScale;
                          (m += Math.max(0, E)), (y += Math.max(0, -E));
                        }
                        if (h) {
                          e.timescale ||
                            (c.logger.warn(
                              "regenerate InitSegment as audio detected"
                            ),
                            this.generateIS(e, t, l));
                          var T,
                            S = this.remuxAudio(e, m, d, f);
                          v &&
                            (S && (T = S.endPTS - S.startPTS),
                            t.timescale ||
                              (c.logger.warn(
                                "regenerate InitSegment as video detected"
                              ),
                              this.generateIS(e, t, l)),
                            this.remuxVideo(t, y, d, T, f));
                        } else if (v) {
                          var _ = this.remuxVideo(t, y, d, 0, f);
                          _ && e.codec && this.remuxEmptyAudio(e, m, d, _);
                        }
                      }
                      r.samples.length && this.remuxID3(r, l),
                        o.samples.length && this.remuxText(o, l),
                        this.observer.trigger(n.default.FRAG_PARSED);
                    }),
                    (t.generateIS = function (e, t, r) {
                      var l,
                        d,
                        f = this.observer,
                        h = e.samples,
                        v = t.samples,
                        m = this.typeSupported,
                        y = "audio/mp4",
                        E = {},
                        data = { tracks: E },
                        T = void 0 === this._initPTS;
                      if (
                        (T && (l = d = 1 / 0),
                        e.config &&
                          h.length &&
                          ((e.timescale = e.samplerate),
                          c.logger.log("audio sampling rate : " + e.samplerate),
                          e.isAAC ||
                            (m.mpeg
                              ? ((y = "audio/mpeg"), (e.codec = ""))
                              : m.mp3 && (e.codec = "mp3")),
                          (E.audio = {
                            container: y,
                            codec: e.codec,
                            initSegment:
                              !e.isAAC && m.mpeg
                                ? new Uint8Array()
                                : M.initSegment([e]),
                            metadata: { channelCount: e.channelCount },
                          }),
                          T && (l = d = h[0].pts - e.inputTimeScale * r)),
                        t.sps && t.pps && v.length)
                      ) {
                        var S = t.inputTimeScale;
                        (t.timescale = S),
                          (E.video = {
                            container: "video/mp4",
                            codec: t.codec,
                            initSegment: M.initSegment([t]),
                            metadata: { width: t.width, height: t.height },
                          }),
                          T &&
                            ((l = Math.min(l, v[0].pts - S * r)),
                            (d = Math.min(d, v[0].dts - S * r)),
                            this.observer.trigger(n.default.INIT_PTS_FOUND, {
                              initPTS: l,
                            }));
                      }
                      Object.keys(E).length
                        ? (f.trigger(n.default.FRAG_PARSING_INIT_SEGMENT, data),
                          (this.ISGenerated = !0),
                          T && ((this._initPTS = l), (this._initDTS = d)))
                        : f.trigger(n.default.ERROR, {
                            type: o.ErrorTypes.MEDIA_ERROR,
                            details: o.ErrorDetails.FRAG_PARSING_ERROR,
                            fatal: !1,
                            reason: "no audio/video samples found",
                          });
                    }),
                    (t.remuxVideo = function (track, e, t, r, l) {
                      var d,
                        f,
                        h,
                        v,
                        m,
                        y,
                        E,
                        T = 8,
                        S = track.timescale,
                        _ = track.samples,
                        A = [],
                        R = _.length,
                        w = this._PTSNormalize,
                        k = this._initPTS,
                        L = this.nextAvcDts,
                        D = this.isSafari;
                      if (0 !== R) {
                        D &&
                          (t |=
                            _.length &&
                            L &&
                            ((l && Math.abs(e - L / S) < 0.1) ||
                              Math.abs(_[0].pts - L - k) < S / 5)),
                          t || (L = e * S),
                          _.forEach(function (e) {
                            (e.pts = w(e.pts - k, L)),
                              (e.dts = w(e.dts - k, L));
                          }),
                          _.sort(function (a, b) {
                            var e = a.dts - b.dts,
                              t = a.pts - b.pts;
                            return e || t || a.id - b.id;
                          });
                        var C = _.reduce(function (e, t) {
                          return Math.max(Math.min(e, t.pts - t.dts), -1 * K);
                        }, 0);
                        if (C < 0) {
                          c.logger.warn(
                            "PTS < DTS detected in video samples, shifting DTS by " +
                              U(C, !0) +
                              " ms to overcome this issue"
                          );
                          for (var i = 0; i < _.length; i++) _[i].dts += C;
                        }
                        var O = _[0];
                        (m = Math.max(O.dts, 0)), (v = Math.max(O.pts, 0));
                        var I = m - L;
                        t &&
                          I &&
                          (I > 1
                            ? c.logger.log(
                                "AVC: " +
                                  U(I, !0) +
                                  " ms hole between fragments detected,filling it"
                              )
                            : I < -1 &&
                              c.logger.log(
                                "AVC: " +
                                  U(-I, !0) +
                                  " ms overlapping between fragments detected"
                              ),
                          (m = L),
                          (_[0].dts = m),
                          (v = Math.max(v - I, L)),
                          (_[0].pts = v),
                          c.logger.log(
                            "Video: PTS/DTS adjusted: " +
                              U(v, !0) +
                              "/" +
                              U(m, !0) +
                              ", delta: " +
                              U(I, !0) +
                              " ms"
                          )),
                          (O = _[_.length - 1]),
                          (E = Math.max(O.dts, 0)),
                          (y = Math.max(O.pts, 0, E)),
                          D && (d = Math.round((E - m) / (_.length - 1)));
                        for (var x = 0, P = 0, F = 0; F < R; F++) {
                          for (
                            var N = _[F],
                              B = N.units,
                              G = B.length,
                              j = 0,
                              H = 0;
                            H < G;
                            H++
                          )
                            j += B[H].data.length;
                          (P += j),
                            (x += G),
                            (N.length = j),
                            (N.dts = D ? m + F * d : Math.max(N.dts, m)),
                            (N.pts = Math.max(N.pts, N.dts));
                        }
                        var V = P + 4 * x + 8;
                        try {
                          f = new Uint8Array(V);
                        } catch (e) {
                          return void this.observer.trigger(n.default.ERROR, {
                            type: o.ErrorTypes.MUX_ERROR,
                            details: o.ErrorDetails.REMUX_ALLOC_ERROR,
                            fatal: !1,
                            bytes: V,
                            reason: "fail allocating video mdat " + V,
                          });
                        }
                        var view = new DataView(f.buffer);
                        view.setUint32(0, V), f.set(M.types.mdat, 4);
                        for (var Y = 0; Y < R; Y++) {
                          for (
                            var W = _[Y],
                              z = W.units,
                              X = 0,
                              Q = void 0,
                              J = 0,
                              $ = z.length;
                            J < $;
                            J++
                          ) {
                            var Z = z[J],
                              ee = Z.data,
                              te = Z.data.byteLength;
                            view.setUint32(T, te),
                              (T += 4),
                              f.set(ee, T),
                              (T += te),
                              (X += 4 + te);
                          }
                          if (D)
                            Q = Math.max(
                              0,
                              d * Math.round((W.pts - W.dts) / d)
                            );
                          else {
                            if (Y < R - 1) d = _[Y + 1].dts - W.dts;
                            else {
                              var re = this.config,
                                ie = W.dts - _[Y > 0 ? Y - 1 : Y].dts;
                              if (re.stretchShortVideoTrack) {
                                var ae = re.maxBufferHole,
                                  ne = Math.floor(ae * S),
                                  se =
                                    (r ? v + r * S : this.nextAudioPts) - W.pts;
                                se > ne
                                  ? ((d = se - ie) < 0 && (d = ie),
                                    c.logger.log(
                                      "It is approximately " +
                                        U(se, !1) +
                                        " ms to the next segment; using duration " +
                                        U(d, !1) +
                                        " ms for the last video frame."
                                    ))
                                  : (d = ie);
                              } else d = ie;
                            }
                            Q = Math.round(W.pts - W.dts);
                          }
                          A.push({
                            size: X,
                            duration: d,
                            cts: Q,
                            flags: {
                              isLeading: 0,
                              isDependedOn: 0,
                              hasRedundancy: 0,
                              degradPrio: 0,
                              dependsOn: W.key ? 2 : 1,
                              isNonSync: W.key ? 0 : 1,
                            },
                          });
                        }
                        this.nextAvcDts = E + d;
                        var oe = track.dropped;
                        if (
                          ((track.nbNalu = 0),
                          (track.dropped = 0),
                          A.length &&
                            navigator.userAgent
                              .toLowerCase()
                              .indexOf("chrome") > -1)
                        ) {
                          var le = A[0].flags;
                          (le.dependsOn = 2), (le.isNonSync = 0);
                        }
                        (track.samples = A),
                          (h = M.moof(track.sequenceNumber++, m, track)),
                          (track.samples = []);
                        var data = {
                          data1: h,
                          data2: f,
                          startPTS: v / S,
                          endPTS: (y + d) / S,
                          startDTS: m / S,
                          endDTS: this.nextAvcDts / S,
                          type: "video",
                          hasAudio: !1,
                          hasVideo: !0,
                          nb: A.length,
                          dropped: oe,
                        };
                        return (
                          this.observer.trigger(
                            n.default.FRAG_PARSING_DATA,
                            data
                          ),
                          data
                        );
                      }
                    }),
                    (t.remuxAudio = function (track, e, t, r) {
                      var l,
                        d,
                        f,
                        h,
                        v,
                        m,
                        y = track.inputTimeScale,
                        E = track.timescale,
                        T = y / E,
                        S = (track.isAAC ? 1024 : 1152) * T,
                        _ = this._PTSNormalize,
                        A = this._initPTS,
                        R = !track.isAAC && this.typeSupported.mpeg,
                        w = R ? 0 : 8,
                        k = track.samples,
                        L = [],
                        D = this.nextAudioPts;
                      if (
                        ((t |=
                          k.length &&
                          D &&
                          ((r && Math.abs(e - D / y) < 0.1) ||
                            Math.abs(k[0].pts - D - A) < 20 * S)),
                        k.forEach(function (t) {
                          t.pts = t.dts = _(t.pts - A, e * y);
                        }),
                        0 !==
                          (k = k.filter(function (e) {
                            return e.pts >= 0;
                          })).length)
                      ) {
                        if ((t || (D = r ? e * y : k[0].pts), track.isAAC))
                          for (
                            var C = this.config.maxAudioFramesDrift,
                              i = 0,
                              O = D;
                            i < k.length;

                          ) {
                            var I,
                              x = k[i];
                            if ((I = x.pts - O) <= -C * S)
                              c.logger.warn(
                                "Dropping 1 audio frame @ " +
                                  U(O, !0) +
                                  " ms due to " +
                                  U(I, !0) +
                                  " ms overlap."
                              ),
                                k.splice(i, 1);
                            else if (I >= C * S && I < j && O) {
                              var F = Math.round(I / S);
                              c.logger.warn(
                                "Injecting " +
                                  F +
                                  " audio frames @ " +
                                  U(O, !0) +
                                  " ms due to " +
                                  U(O, !0) +
                                  " ms gap."
                              );
                              for (var N = 0; N < F; N++) {
                                var B = Math.max(O, 0);
                                (d = P.getSilentFrame(
                                  track.manifestCodec || track.codec,
                                  track.channelCount
                                )) ||
                                  (c.logger.log(
                                    "Unable to get silent frame for given audio codec; duplicating last frame instead."
                                  ),
                                  (d = x.unit.subarray())),
                                  k.splice(i, 0, { unit: d, pts: B, dts: B }),
                                  (O += S),
                                  i++;
                              }
                              (x.pts = x.dts = O), (O += S), i++;
                            } else
                              Math.abs(I), (x.pts = x.dts = O), (O += S), i++;
                          }
                        for (var G = k.length, K = 0; G--; )
                          K += k[G].unit.byteLength;
                        for (var H = 0, V = k.length; H < V; H++) {
                          var Y = k[H],
                            W = Y.unit,
                            z = Y.pts;
                          if (void 0 !== m)
                            l.duration = Math.round((z - m) / T);
                          else {
                            var X = z - D,
                              Q = 0;
                            if (t && track.isAAC && X) {
                              if (X > 0 && X < j)
                                (Q = Math.round((z - D) / S)),
                                  c.logger.log(
                                    U(X, !0) +
                                      " ms hole between AAC samples detected,filling it"
                                  ),
                                  Q > 0 &&
                                    ((d = P.getSilentFrame(
                                      track.manifestCodec || track.codec,
                                      track.channelCount
                                    )) || (d = W.subarray()),
                                    (K += Q * d.length));
                              else if (X < -12) {
                                c.logger.log(
                                  "drop overlapping AAC sample, expected/parsed/delta: " +
                                    U(D, !0) +
                                    " ms / " +
                                    U(z, !0) +
                                    " ms / " +
                                    U(-X, !0) +
                                    " ms"
                                ),
                                  (K -= W.byteLength);
                                continue;
                              }
                              z = D;
                            }
                            if (((v = z), !(K > 0))) return;
                            K += w;
                            try {
                              f = new Uint8Array(K);
                            } catch (e) {
                              return void this.observer.trigger(
                                n.default.ERROR,
                                {
                                  type: o.ErrorTypes.MUX_ERROR,
                                  details: o.ErrorDetails.REMUX_ALLOC_ERROR,
                                  fatal: !1,
                                  bytes: K,
                                  reason: "fail allocating audio mdat " + K,
                                }
                              );
                            }
                            R ||
                              (new DataView(f.buffer).setUint32(0, K),
                              f.set(M.types.mdat, 4));
                            for (var J = 0; J < Q; J++)
                              (d = P.getSilentFrame(
                                track.manifestCodec || track.codec,
                                track.channelCount
                              )) ||
                                (c.logger.log(
                                  "Unable to get silent frame for given audio codec; duplicating this frame instead."
                                ),
                                (d = W.subarray())),
                                f.set(d, w),
                                (w += d.byteLength),
                                (l = {
                                  size: d.byteLength,
                                  cts: 0,
                                  duration: 1024,
                                  flags: {
                                    isLeading: 0,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradPrio: 0,
                                    dependsOn: 1,
                                  },
                                }),
                                L.push(l);
                          }
                          f.set(W, w);
                          var $ = W.byteLength;
                          (w += $),
                            (l = {
                              size: $,
                              cts: 0,
                              duration: 0,
                              flags: {
                                isLeading: 0,
                                isDependedOn: 0,
                                hasRedundancy: 0,
                                degradPrio: 0,
                                dependsOn: 1,
                              },
                            }),
                            L.push(l),
                            (m = z);
                        }
                        var Z = 0;
                        if (
                          ((G = L.length) >= 2 &&
                            ((Z = L[G - 2].duration), (l.duration = Z)),
                          G)
                        ) {
                          (this.nextAudioPts = D = m + T * Z),
                            (track.samples = L),
                            (h = R
                              ? new Uint8Array()
                              : M.moof(track.sequenceNumber++, v / T, track)),
                            (track.samples = []);
                          var ee = v / y,
                            te = D / y,
                            re = {
                              data1: h,
                              data2: f,
                              startPTS: ee,
                              endPTS: te,
                              startDTS: ee,
                              endDTS: te,
                              type: "audio",
                              hasAudio: !0,
                              hasVideo: !1,
                              nb: G,
                            };
                          return (
                            this.observer.trigger(
                              n.default.FRAG_PARSING_DATA,
                              re
                            ),
                            re
                          );
                        }
                        return null;
                      }
                    }),
                    (t.remuxEmptyAudio = function (track, e, t, r) {
                      var n = track.inputTimeScale,
                        o = n / (track.samplerate ? track.samplerate : n),
                        l = this.nextAudioPts,
                        d = (void 0 !== l ? l : r.startDTS * n) + this._initDTS,
                        f = r.endDTS * n + this._initDTS,
                        h = 1024 * o,
                        v = Math.ceil((f - d) / h),
                        m = P.getSilentFrame(
                          track.manifestCodec || track.codec,
                          track.channelCount
                        );
                      if ((c.logger.warn("remux empty Audio"), m)) {
                        for (var y = [], i = 0; i < v; i++) {
                          var E = d + i * h;
                          y.push({ unit: m, pts: E, dts: E });
                        }
                        (track.samples = y), this.remuxAudio(track, e, t);
                      } else
                        c.logger.trace(
                          "Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!"
                        );
                    }),
                    (t.remuxID3 = function (track) {
                      var e,
                        t = track.samples.length,
                        r = track.inputTimeScale,
                        o = this._initPTS,
                        l = this._initDTS;
                      if (t) {
                        for (var d = 0; d < t; d++)
                          ((e = track.samples[d]).pts = (e.pts - o) / r),
                            (e.dts = (e.dts - l) / r);
                        this.observer.trigger(n.default.FRAG_PARSING_METADATA, {
                          samples: track.samples,
                        });
                      }
                      track.samples = [];
                    }),
                    (t.remuxText = function (track) {
                      track.samples.sort(function (a, b) {
                        return a.pts - b.pts;
                      });
                      var e,
                        t = track.samples.length,
                        r = track.inputTimeScale,
                        o = this._initPTS;
                      if (t) {
                        for (var l = 0; l < t; l++)
                          (e = track.samples[l]).pts = (e.pts - o) / r;
                        this.observer.trigger(n.default.FRAG_PARSING_USERDATA, {
                          samples: track.samples,
                        });
                      }
                      track.samples = [];
                    }),
                    (t._PTSNormalize = function (e, t) {
                      var r;
                      if (void 0 === t) return e;
                      for (
                        r = t < e ? -8589934592 : 8589934592;
                        Math.abs(e - t) > 4294967296;

                      )
                        e += r;
                      return e;
                    }),
                    e
                  );
                })(),
                V = (function () {
                  function e(e) {
                    this.observer = e;
                  }
                  var t = e.prototype;
                  return (
                    (t.destroy = function () {}),
                    (t.resetTimeStamp = function () {}),
                    (t.resetInitSegment = function () {}),
                    (t.remux = function (e, t, r, o, l, d, c, f) {
                      var h = this.observer,
                        v = "";
                      e && (v += "audio"),
                        t && (v += "video"),
                        h.trigger(n.default.FRAG_PARSING_DATA, {
                          data1: f,
                          startPTS: l,
                          startDTS: l,
                          type: v,
                          hasAudio: !!e,
                          hasVideo: !!t,
                          nb: 1,
                          dropped: 0,
                        }),
                        h.trigger(n.default.FRAG_PARSED);
                    }),
                    e
                  );
                })(),
                Y = Object(f.getSelfScope)();
              try {
                G = Y.performance.now.bind(Y.performance);
              } catch (e) {
                c.logger.debug(
                  "Unable to use Performance API on this environment"
                ),
                  (G = Y.Date.now);
              }
              var W = (function () {
                function e(e, t, r, n) {
                  (this.observer = e),
                    (this.typeSupported = t),
                    (this.config = r),
                    (this.vendor = n);
                }
                var t = e.prototype;
                return (
                  (t.destroy = function () {
                    var e = this.demuxer;
                    e && e.destroy();
                  }),
                  (t.push = function (data, e, t, r, o, d, c, f, h, v, m, y) {
                    var E = this;
                    if (
                      data.byteLength > 0 &&
                      null != e &&
                      null != e.key &&
                      "AES-128" === e.method
                    ) {
                      var T = this.decrypter;
                      null == T &&
                        (T = this.decrypter =
                          new l.default(this.observer, this.config));
                      var S = G();
                      T.decrypt(data, e.key.buffer, e.iv.buffer, function (l) {
                        var T = G();
                        E.observer.trigger(n.default.FRAG_DECRYPTED, {
                          stats: { tstart: S, tdecrypt: T },
                        }),
                          E.pushDecrypted(
                            new Uint8Array(l),
                            e,
                            new Uint8Array(t),
                            r,
                            o,
                            d,
                            c,
                            f,
                            h,
                            v,
                            m,
                            y
                          );
                      });
                    } else
                      this.pushDecrypted(
                        new Uint8Array(data),
                        e,
                        new Uint8Array(t),
                        r,
                        o,
                        d,
                        c,
                        f,
                        h,
                        v,
                        m,
                        y
                      );
                  }),
                  (t.pushDecrypted = function (
                    data,
                    e,
                    t,
                    r,
                    l,
                    d,
                    c,
                    f,
                    h,
                    v,
                    m,
                    y
                  ) {
                    var E = this.demuxer;
                    if (!E || ((c || f) && !this.probe(data))) {
                      for (
                        var T = this.observer,
                          S = this.typeSupported,
                          _ = this.config,
                          A = [
                            { demux: I, remux: H },
                            { demux: w.default, remux: V },
                            { demux: R, remux: H },
                            { demux: x, remux: H },
                          ],
                          i = 0,
                          k = A.length;
                        i < k;
                        i++
                      ) {
                        var L = A[i],
                          D = L.demux.probe;
                        if (D(data)) {
                          var C = (this.remuxer = new L.remux(
                            T,
                            _,
                            S,
                            this.vendor
                          ));
                          (E = new L.demux(T, C, _, S)), (this.probe = D);
                          break;
                        }
                      }
                      if (!E)
                        return void T.trigger(n.default.ERROR, {
                          type: o.ErrorTypes.MEDIA_ERROR,
                          details: o.ErrorDetails.FRAG_PARSING_ERROR,
                          fatal: !0,
                          reason: "no demux matching with content found",
                        });
                      this.demuxer = E;
                    }
                    var O = this.remuxer;
                    (c || f) &&
                      (E.resetInitSegment(t, r, l, v), O.resetInitSegment()),
                      c && (E.resetTimeStamp(y), O.resetTimeStamp(y)),
                      "function" == typeof E.setDecryptData &&
                        E.setDecryptData(e),
                      E.append(data, d, h, m);
                  }),
                  e
                );
              })();
              t.default = W;
            },
            "./src/demux/demuxer-worker.js": function (e, t, r) {
              "use strict";
              r.r(t);
              var n = r("./src/demux/demuxer-inline.js"),
                o = r("./src/events.js"),
                l = r("./src/utils/logger.js"),
                d = r("./node_modules/eventemitter3/index.js");
              t.default = function (e) {
                var t = new d.EventEmitter();
                (t.trigger = function (e) {
                  for (
                    var r = arguments.length,
                      data = new Array(r > 1 ? r - 1 : 0),
                      n = 1;
                    n < r;
                    n++
                  )
                    data[n - 1] = arguments[n];
                  t.emit.apply(t, [e, e].concat(data));
                }),
                  (t.off = function (e) {
                    for (
                      var r = arguments.length,
                        data = new Array(r > 1 ? r - 1 : 0),
                        n = 1;
                      n < r;
                      n++
                    )
                      data[n - 1] = arguments[n];
                    t.removeListener.apply(t, [e].concat(data));
                  });
                var r = function (t, data) {
                  e.postMessage({ event: t, data: data });
                };
                e.addEventListener("message", function (o) {
                  var data = o.data;
                  switch (data.cmd) {
                    case "init":
                      var d = JSON.parse(data.config);
                      (e.demuxer = new n.default(
                        t,
                        data.typeSupported,
                        d,
                        data.vendor
                      )),
                        Object(l.enableLogs)(d.debug),
                        r("init", null);
                      break;
                    case "demux":
                      e.demuxer.push(
                        data.data,
                        data.decryptdata,
                        data.initSegment,
                        data.audioCodec,
                        data.videoCodec,
                        data.timeOffset,
                        data.discontinuity,
                        data.trackSwitch,
                        data.contiguous,
                        data.duration,
                        data.accurateTimeOffset,
                        data.defaultInitPTS
                      );
                  }
                }),
                  t.on(o.default.FRAG_DECRYPTED, r),
                  t.on(o.default.FRAG_PARSING_INIT_SEGMENT, r),
                  t.on(o.default.FRAG_PARSED, r),
                  t.on(o.default.ERROR, r),
                  t.on(o.default.FRAG_PARSING_METADATA, r),
                  t.on(o.default.FRAG_PARSING_USERDATA, r),
                  t.on(o.default.INIT_PTS_FOUND, r),
                  t.on(o.default.FRAG_PARSING_DATA, function (t, data) {
                    var r = [],
                      n = { event: t, data: data };
                    data.data1 &&
                      ((n.data1 = data.data1.buffer),
                      r.push(data.data1.buffer),
                      delete data.data1),
                      data.data2 &&
                        ((n.data2 = data.data2.buffer),
                        r.push(data.data2.buffer),
                        delete data.data2),
                      e.postMessage(n, r);
                  });
              };
            },
            "./src/demux/id3.js": function (e, t, r) {
              "use strict";
              r.r(t),
                r.d(t, "utf8ArrayToStr", function () {
                  return c;
                });
              var n,
                o = r("./src/utils/get-self-scope.js"),
                l = (function () {
                  function e() {}
                  return (
                    (e.isHeader = function (data, e) {
                      return (
                        e + 10 <= data.length &&
                        73 === data[e] &&
                        68 === data[e + 1] &&
                        51 === data[e + 2] &&
                        data[e + 3] < 255 &&
                        data[e + 4] < 255 &&
                        data[e + 6] < 128 &&
                        data[e + 7] < 128 &&
                        data[e + 8] < 128 &&
                        data[e + 9] < 128
                      );
                    }),
                    (e.isFooter = function (data, e) {
                      return (
                        e + 10 <= data.length &&
                        51 === data[e] &&
                        68 === data[e + 1] &&
                        73 === data[e + 2] &&
                        data[e + 3] < 255 &&
                        data[e + 4] < 255 &&
                        data[e + 6] < 128 &&
                        data[e + 7] < 128 &&
                        data[e + 8] < 128 &&
                        data[e + 9] < 128
                      );
                    }),
                    (e.getID3Data = function (data, t) {
                      for (var r = t, n = 0; e.isHeader(data, t); )
                        (n += 10),
                          (n += e._readSize(data, t + 6)),
                          e.isFooter(data, t + 10) && (n += 10),
                          (t += n);
                      if (n > 0) return data.subarray(r, r + n);
                    }),
                    (e._readSize = function (data, e) {
                      var t = 0;
                      return (
                        (t = (127 & data[e]) << 21),
                        (t |= (127 & data[e + 1]) << 14),
                        (t |= (127 & data[e + 2]) << 7),
                        (t |= 127 & data[e + 3])
                      );
                    }),
                    (e.getTimeStamp = function (data) {
                      for (
                        var t = e.getID3Frames(data), i = 0;
                        i < t.length;
                        i++
                      ) {
                        var r = t[i];
                        if (e.isTimeStampFrame(r)) return e._readTimeStamp(r);
                      }
                    }),
                    (e.isTimeStampFrame = function (e) {
                      return (
                        e &&
                        "PRIV" === e.key &&
                        "com.apple.streaming.transportStreamTimestamp" ===
                          e.info
                      );
                    }),
                    (e._getFrameData = function (data) {
                      var t = String.fromCharCode(
                          data[0],
                          data[1],
                          data[2],
                          data[3]
                        ),
                        r = e._readSize(data, 4);
                      return {
                        type: t,
                        size: r,
                        data: data.subarray(10, 10 + r),
                      };
                    }),
                    (e.getID3Frames = function (t) {
                      for (var r = 0, n = []; e.isHeader(t, r); ) {
                        for (
                          var o = e._readSize(t, r + 6), l = (r += 10) + o;
                          r + 8 < l;

                        ) {
                          var d = e._getFrameData(t.subarray(r)),
                            c = e._decodeFrame(d);
                          c && n.push(c), (r += d.size + 10);
                        }
                        e.isFooter(t, r) && (r += 10);
                      }
                      return n;
                    }),
                    (e._decodeFrame = function (t) {
                      return "PRIV" === t.type
                        ? e._decodePrivFrame(t)
                        : "T" === t.type[0]
                        ? e._decodeTextFrame(t)
                        : "W" === t.type[0]
                        ? e._decodeURLFrame(t)
                        : void 0;
                    }),
                    (e._readTimeStamp = function (e) {
                      if (8 === e.data.byteLength) {
                        var data = new Uint8Array(e.data),
                          t = 1 & data[3],
                          r =
                            (data[4] << 23) +
                            (data[5] << 15) +
                            (data[6] << 7) +
                            data[7];
                        return (
                          (r /= 45), t && (r += 47721858.84), Math.round(r)
                        );
                      }
                    }),
                    (e._decodePrivFrame = function (t) {
                      if (!(t.size < 2)) {
                        var r = e._utf8ArrayToStr(t.data, !0),
                          n = new Uint8Array(t.data.subarray(r.length + 1));
                        return { key: t.type, info: r, data: n.buffer };
                      }
                    }),
                    (e._decodeTextFrame = function (t) {
                      if (!(t.size < 2)) {
                        if ("TXXX" === t.type) {
                          var r = 1,
                            n = e._utf8ArrayToStr(t.data.subarray(r), !0);
                          r += n.length + 1;
                          var o = e._utf8ArrayToStr(t.data.subarray(r));
                          return { key: t.type, info: n, data: o };
                        }
                        var text = e._utf8ArrayToStr(t.data.subarray(1));
                        return { key: t.type, data: text };
                      }
                    }),
                    (e._decodeURLFrame = function (t) {
                      if ("WXXX" === t.type) {
                        if (t.size < 2) return;
                        var r = 1,
                          n = e._utf8ArrayToStr(t.data.subarray(r));
                        r += n.length + 1;
                        var o = e._utf8ArrayToStr(t.data.subarray(r));
                        return { key: t.type, info: n, data: o };
                      }
                      var l = e._utf8ArrayToStr(t.data);
                      return { key: t.type, data: l };
                    }),
                    (e._utf8ArrayToStr = function (e, t) {
                      void 0 === t && (t = !1);
                      var r = d();
                      if (r) {
                        var n = r.decode(e);
                        if (t) {
                          var o = n.indexOf("\0");
                          return -1 !== o ? n.substring(0, o) : n;
                        }
                        return n.replace(/\0/g, "");
                      }
                      for (var l, c, f, h = e.length, v = "", i = 0; i < h; ) {
                        if (0 === (l = e[i++]) && t) return v;
                        if (0 !== l && 3 !== l)
                          switch (l >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                              v += String.fromCharCode(l);
                              break;
                            case 12:
                            case 13:
                              (c = e[i++]),
                                (v += String.fromCharCode(
                                  ((31 & l) << 6) | (63 & c)
                                ));
                              break;
                            case 14:
                              (c = e[i++]),
                                (f = e[i++]),
                                (v += String.fromCharCode(
                                  ((15 & l) << 12) |
                                    ((63 & c) << 6) |
                                    ((63 & f) << 0)
                                ));
                          }
                      }
                      return v;
                    }),
                    e
                  );
                })();
              function d() {
                var e = Object(o.getSelfScope)();
                return (
                  n ||
                    void 0 === e.TextDecoder ||
                    (n = new e.TextDecoder("utf-8")),
                  n
                );
              }
              var c = l._utf8ArrayToStr;
              t.default = l;
            },
            "./src/demux/mp4demuxer.js": function (e, t, r) {
              "use strict";
              r.r(t);
              var n = r("./src/utils/logger.js"),
                o = r("./src/events.js"),
                l = Math.pow(2, 32) - 1,
                d = (function () {
                  function e(e, t) {
                    (this.observer = e), (this.remuxer = t);
                  }
                  var t = e.prototype;
                  return (
                    (t.resetTimeStamp = function (e) {
                      this.initPTS = e;
                    }),
                    (t.resetInitSegment = function (t, r, n, l) {
                      if (t && t.byteLength) {
                        var d = (this.initData = e.parseInitSegment(t));
                        null == r && (r = "mp4a.40.5"),
                          null == n && (n = "avc1.42e01e");
                        var c = {};
                        d.audio && d.video
                          ? (c.audiovideo = {
                              container: "video/mp4",
                              codec: r + "," + n,
                              initSegment: l ? t : null,
                            })
                          : (d.audio &&
                              (c.audio = {
                                container: "audio/mp4",
                                codec: r,
                                initSegment: l ? t : null,
                              }),
                            d.video &&
                              (c.video = {
                                container: "video/mp4",
                                codec: n,
                                initSegment: l ? t : null,
                              })),
                          this.observer.trigger(
                            o.default.FRAG_PARSING_INIT_SEGMENT,
                            { tracks: c }
                          );
                      } else
                        r && (this.audioCodec = r), n && (this.videoCodec = n);
                    }),
                    (e.probe = function (data) {
                      return (
                        e.findBox(
                          {
                            data: data,
                            start: 0,
                            end: Math.min(data.length, 16384),
                          },
                          ["moof"]
                        ).length > 0
                      );
                    }),
                    (e.bin2str = function (e) {
                      return String.fromCharCode.apply(null, e);
                    }),
                    (e.readUint16 = function (e, t) {
                      e.data && ((t += e.start), (e = e.data));
                      var r = (e[t] << 8) | e[t + 1];
                      return r < 0 ? 65536 + r : r;
                    }),
                    (e.readUint32 = function (e, t) {
                      e.data && ((t += e.start), (e = e.data));
                      var r =
                        (e[t] << 24) |
                        (e[t + 1] << 16) |
                        (e[t + 2] << 8) |
                        e[t + 3];
                      return r < 0 ? 4294967296 + r : r;
                    }),
                    (e.writeUint32 = function (e, t, r) {
                      e.data && ((t += e.start), (e = e.data)),
                        (e[t] = r >> 24),
                        (e[t + 1] = (r >> 16) & 255),
                        (e[t + 2] = (r >> 8) & 255),
                        (e[t + 3] = 255 & r);
                    }),
                    (e.findBox = function (data, path) {
                      var i,
                        t,
                        r,
                        n,
                        o,
                        l,
                        d = [];
                      if (
                        (data.data
                          ? ((o = data.start),
                            (r = data.end),
                            (data = data.data))
                          : ((o = 0), (r = data.byteLength)),
                        !path.length)
                      )
                        return null;
                      for (i = o; i < r; )
                        (l = (t = e.readUint32(data, i)) > 1 ? i + t : r),
                          e.bin2str(data.subarray(i + 4, i + 8)) === path[0] &&
                            (1 === path.length
                              ? d.push({ data: data, start: i + 8, end: l })
                              : (n = e.findBox(
                                  { data: data, start: i + 8, end: l },
                                  path.slice(1)
                                )).length && (d = d.concat(n))),
                          (i = l);
                      return d;
                    }),
                    (e.parseSegmentIndex = function (t) {
                      var r,
                        n = e.findBox(t, ["moov"])[0],
                        o = n ? n.end : null,
                        l = 0,
                        d = e.findBox(t, ["sidx"]);
                      if (!d || !d[0]) return null;
                      r = [];
                      var c = (d = d[0]).data[0];
                      l = 0 === c ? 8 : 16;
                      var f = e.readUint32(d, l);
                      (l += 4), (l += 0 === c ? 8 : 16), (l += 2);
                      var h = d.end + 0,
                        v = e.readUint16(d, l);
                      l += 2;
                      for (var i = 0; i < v; i++) {
                        var m = l,
                          y = e.readUint32(d, m);
                        m += 4;
                        var E = 2147483647 & y;
                        if (1 == (2147483648 & y) >>> 31)
                          return void console.warn(
                            "SIDX has hierarchical references (not supported)"
                          );
                        var T = e.readUint32(d, m);
                        (m += 4),
                          r.push({
                            referenceSize: E,
                            subsegmentDuration: T,
                            info: { duration: T / f, start: h, end: h + E - 1 },
                          }),
                          (h += E),
                          (l = m += 4);
                      }
                      return {
                        earliestPresentationTime: 0,
                        timescale: f,
                        version: c,
                        referencesCount: v,
                        references: r,
                        moovEndOffset: o,
                      };
                    }),
                    (e.parseInitSegment = function (t) {
                      var r = [];
                      return (
                        e.findBox(t, ["moov", "trak"]).forEach(function (t) {
                          var o = e.findBox(t, ["tkhd"])[0];
                          if (o) {
                            var l = o.data[o.start],
                              d = 0 === l ? 12 : 20,
                              c = e.readUint32(o, d),
                              f = e.findBox(t, ["mdia", "mdhd"])[0];
                            if (f) {
                              d = 0 === (l = f.data[f.start]) ? 12 : 20;
                              var h = e.readUint32(f, d),
                                v = e.findBox(t, ["mdia", "hdlr"])[0];
                              if (v) {
                                var m = { soun: "audio", vide: "video" }[
                                  e.bin2str(
                                    v.data.subarray(v.start + 8, v.start + 12)
                                  )
                                ];
                                if (m) {
                                  var y = e.findBox(t, [
                                    "mdia",
                                    "minf",
                                    "stbl",
                                    "stsd",
                                  ]);
                                  if (y.length) {
                                    y = y[0];
                                    var E = e.bin2str(
                                      y.data.subarray(
                                        y.start + 12,
                                        y.start + 16
                                      )
                                    );
                                    n.logger.log(
                                      "MP4Demuxer:" + m + ":" + E + " found"
                                    );
                                  }
                                  (r[c] = { timescale: h, type: m }),
                                    (r[m] = { timescale: h, id: c });
                                }
                              }
                            }
                          }
                        }),
                        r
                      );
                    }),
                    (e.getStartDTS = function (t, r) {
                      var n, o, l;
                      return (
                        (n = e.findBox(r, ["moof", "traf"])),
                        (o = [].concat.apply(
                          [],
                          n.map(function (r) {
                            return e.findBox(r, ["tfhd"]).map(function (n) {
                              var o, l;
                              return (
                                (o = e.readUint32(n, 4)),
                                (l = t[o].timescale || 9e4),
                                e.findBox(r, ["tfdt"]).map(function (t) {
                                  var r, n;
                                  return (
                                    (r = t.data[t.start]),
                                    (n = e.readUint32(t, 4)),
                                    1 === r &&
                                      ((n *= Math.pow(2, 32)),
                                      (n += e.readUint32(t, 8))),
                                    n
                                  );
                                })[0] / l
                              );
                            });
                          })
                        )),
                        (l = Math.min.apply(null, o)),
                        isFinite(l) ? l : 0
                      );
                    }),
                    (e.offsetStartDTS = function (t, r, n) {
                      e.findBox(r, ["moof", "traf"]).map(function (r) {
                        return e.findBox(r, ["tfhd"]).map(function (o) {
                          var d = e.readUint32(o, 4),
                            c = t[d].timescale || 9e4;
                          e.findBox(r, ["tfdt"]).map(function (t) {
                            var r = t.data[t.start],
                              o = e.readUint32(t, 4);
                            if (0 === r) e.writeUint32(t, 4, o - n * c);
                            else {
                              (o *= Math.pow(2, 32)),
                                (o += e.readUint32(t, 8)),
                                (o -= n * c),
                                (o = Math.max(o, 0));
                              var d = Math.floor(o / (l + 1)),
                                f = Math.floor(o % (l + 1));
                              e.writeUint32(t, 4, d), e.writeUint32(t, 8, f);
                            }
                          });
                        });
                      });
                    }),
                    (t.append = function (data, t, r, n) {
                      var l = this.initData;
                      l ||
                        (this.resetInitSegment(
                          data,
                          this.audioCodec,
                          this.videoCodec,
                          !1
                        ),
                        (l = this.initData));
                      var d,
                        c = this.initPTS;
                      if (void 0 === c) {
                        var f = e.getStartDTS(l, data);
                        (this.initPTS = c = f - t),
                          this.observer.trigger(o.default.INIT_PTS_FOUND, {
                            initPTS: c,
                          });
                      }
                      e.offsetStartDTS(l, data, c),
                        (d = e.getStartDTS(l, data)),
                        this.remuxer.remux(
                          l.audio,
                          l.video,
                          null,
                          null,
                          d,
                          r,
                          n,
                          data
                        );
                    }),
                    (t.destroy = function () {}),
                    e
                  );
                })();
              t.default = d;
            },
            "./src/errors.ts": function (e, t, r) {
              "use strict";
              var n, o;
              r.r(t),
                r.d(t, "ErrorTypes", function () {
                  return n;
                }),
                r.d(t, "ErrorDetails", function () {
                  return o;
                }),
                (function (e) {
                  (e.NETWORK_ERROR = "networkError"),
                    (e.MEDIA_ERROR = "mediaError"),
                    (e.KEY_SYSTEM_ERROR = "keySystemError"),
                    (e.MUX_ERROR = "muxError"),
                    (e.OTHER_ERROR = "otherError");
                })(n || (n = {})),
                (function (e) {
                  (e.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys"),
                    (e.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess"),
                    (e.KEY_SYSTEM_NO_SESSION = "keySystemNoSession"),
                    (e.KEY_SYSTEM_LICENSE_REQUEST_FAILED =
                      "keySystemLicenseRequestFailed"),
                    (e.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData"),
                    (e.MANIFEST_LOAD_ERROR = "manifestLoadError"),
                    (e.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut"),
                    (e.MANIFEST_PARSING_ERROR = "manifestParsingError"),
                    (e.MANIFEST_INCOMPATIBLE_CODECS_ERROR =
                      "manifestIncompatibleCodecsError"),
                    (e.LEVEL_LOAD_ERROR = "levelLoadError"),
                    (e.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut"),
                    (e.LEVEL_SWITCH_ERROR = "levelSwitchError"),
                    (e.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError"),
                    (e.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut"),
                    (e.FRAG_LOAD_ERROR = "fragLoadError"),
                    (e.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut"),
                    (e.FRAG_DECRYPT_ERROR = "fragDecryptError"),
                    (e.FRAG_PARSING_ERROR = "fragParsingError"),
                    (e.REMUX_ALLOC_ERROR = "remuxAllocError"),
                    (e.KEY_LOAD_ERROR = "keyLoadError"),
                    (e.KEY_LOAD_TIMEOUT = "keyLoadTimeOut"),
                    (e.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError"),
                    (e.BUFFER_APPEND_ERROR = "bufferAppendError"),
                    (e.BUFFER_APPENDING_ERROR = "bufferAppendingError"),
                    (e.BUFFER_STALLED_ERROR = "bufferStalledError"),
                    (e.BUFFER_FULL_ERROR = "bufferFullError"),
                    (e.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole"),
                    (e.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall"),
                    (e.INTERNAL_EXCEPTION = "internalException");
                })(o || (o = {}));
            },
            "./src/events.js": function (e, t, r) {
              "use strict";
              r.r(t),
                (t.default = {
                  MEDIA_ATTACHING: "hlsMediaAttaching",
                  MEDIA_ATTACHED: "hlsMediaAttached",
                  MEDIA_DETACHING: "hlsMediaDetaching",
                  MEDIA_DETACHED: "hlsMediaDetached",
                  BUFFER_RESET: "hlsBufferReset",
                  BUFFER_CODECS: "hlsBufferCodecs",
                  BUFFER_CREATED: "hlsBufferCreated",
                  BUFFER_APPENDING: "hlsBufferAppending",
                  BUFFER_APPENDED: "hlsBufferAppended",
                  BUFFER_EOS: "hlsBufferEos",
                  BUFFER_FLUSHING: "hlsBufferFlushing",
                  BUFFER_FLUSHED: "hlsBufferFlushed",
                  MANIFEST_LOADING: "hlsManifestLoading",
                  MANIFEST_LOADED: "hlsManifestLoaded",
                  MANIFEST_PARSED: "hlsManifestParsed",
                  LEVEL_SWITCHING: "hlsLevelSwitching",
                  LEVEL_SWITCHED: "hlsLevelSwitched",
                  LEVEL_LOADING: "hlsLevelLoading",
                  LEVEL_LOADED: "hlsLevelLoaded",
                  LEVEL_UPDATED: "hlsLevelUpdated",
                  LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
                  AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
                  AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
                  AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
                  AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
                  AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
                  SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
                  SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
                  SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
                  SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
                  SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
                  INIT_PTS_FOUND: "hlsInitPtsFound",
                  FRAG_LOADING: "hlsFragLoading",
                  FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
                  FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
                  FRAG_LOADED: "hlsFragLoaded",
                  FRAG_DECRYPTED: "hlsFragDecrypted",
                  FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
                  FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
                  FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
                  FRAG_PARSING_DATA: "hlsFragParsingData",
                  FRAG_PARSED: "hlsFragParsed",
                  FRAG_BUFFERED: "hlsFragBuffered",
                  FRAG_CHANGED: "hlsFragChanged",
                  FPS_DROP: "hlsFpsDrop",
                  FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
                  ERROR: "hlsError",
                  DESTROYING: "hlsDestroying",
                  KEY_LOADING: "hlsKeyLoading",
                  KEY_LOADED: "hlsKeyLoaded",
                  STREAM_STATE_TRANSITION: "hlsStreamStateTransition",
                  LIVE_BACK_BUFFER_REACHED: "hlsLiveBackBufferReached",
                });
            },
            "./src/hls.ts": function (e, t, r) {
              "use strict";
              r.r(t);
              var n = {};
              r.r(n),
                r.d(n, "newCue", function () {
                  return wt;
                });
              var o,
                l,
                d = r("./node_modules/url-toolkit/src/url-toolkit.js"),
                c = r("./src/errors.ts"),
                f = r("./src/polyfills/number-isFinite.js"),
                h = r("./src/events.js"),
                v = r("./src/utils/logger.js"),
                m = {
                  hlsEventGeneric: !0,
                  hlsHandlerDestroying: !0,
                  hlsHandlerDestroyed: !0,
                },
                y = (function () {
                  function e(e) {
                    (this.hls = void 0),
                      (this.handledEvents = void 0),
                      (this.useGenericHandler = void 0),
                      (this.hls = e),
                      (this.onEvent = this.onEvent.bind(this));
                    for (
                      var t = arguments.length,
                        r = new Array(t > 1 ? t - 1 : 0),
                        n = 1;
                      n < t;
                      n++
                    )
                      r[n - 1] = arguments[n];
                    (this.handledEvents = r),
                      (this.useGenericHandler = !0),
                      this.registerListeners();
                  }
                  var t = e.prototype;
                  return (
                    (t.destroy = function () {
                      this.onHandlerDestroying(),
                        this.unregisterListeners(),
                        this.onHandlerDestroyed();
                    }),
                    (t.onHandlerDestroying = function () {}),
                    (t.onHandlerDestroyed = function () {}),
                    (t.isEventHandler = function () {
                      return (
                        "object" == typeof this.handledEvents &&
                        this.handledEvents.length &&
                        "function" == typeof this.onEvent
                      );
                    }),
                    (t.registerListeners = function () {
                      this.isEventHandler() &&
                        this.handledEvents.forEach(function (e) {
                          if (m[e])
                            throw new Error("Forbidden event-name: " + e);
                          this.hls.on(e, this.onEvent);
                        }, this);
                    }),
                    (t.unregisterListeners = function () {
                      this.isEventHandler() &&
                        this.handledEvents.forEach(function (e) {
                          this.hls.off(e, this.onEvent);
                        }, this);
                    }),
                    (t.onEvent = function (e, data) {
                      this.onEventGeneric(e, data);
                    }),
                    (t.onEventGeneric = function (e, data) {
                      try {
                        (function (e, data) {
                          var t = "on" + e.replace("hls", "");
                          if ("function" != typeof this[t])
                            throw new Error(
                              "Event " +
                                e +
                                " has no generic handler in this " +
                                this.constructor.name +
                                " class (tried " +
                                t +
                                ")"
                            );
                          return this[t].bind(this, data);
                        }
                          .call(this, e, data)
                          .call());
                      } catch (t) {
                        v.logger.error(
                          "An internal error happened while handling event " +
                            e +
                            '. Error message: "' +
                            t.message +
                            '". Here is a stacktrace:',
                          t
                        ),
                          this.hls.trigger(h.default.ERROR, {
                            type: c.ErrorTypes.OTHER_ERROR,
                            details: c.ErrorDetails.INTERNAL_EXCEPTION,
                            fatal: !1,
                            event: e,
                            err: t,
                          });
                      }
                    }),
                    e
                  );
                })();
              !(function (e) {
                (e.MANIFEST = "manifest"),
                  (e.LEVEL = "level"),
                  (e.AUDIO_TRACK = "audioTrack"),
                  (e.SUBTITLE_TRACK = "subtitleTrack");
              })(o || (o = {})),
                (function (e) {
                  (e.MAIN = "main"),
                    (e.AUDIO = "audio"),
                    (e.SUBTITLE = "subtitle");
                })(l || (l = {}));
              var E = r("./src/demux/mp4demuxer.js");
              function T(e, t) {
                for (var i = 0; i < t.length; i++) {
                  var r = t[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              var S,
                _ = (function () {
                  function e(e, t) {
                    (this._uri = null),
                      (this.baseuri = void 0),
                      (this.reluri = void 0),
                      (this.method = null),
                      (this.key = null),
                      (this.iv = null),
                      (this.baseuri = e),
                      (this.reluri = t);
                  }
                  var t, r, n;
                  return (
                    (t = e),
                    (r = [
                      {
                        key: "uri",
                        get: function () {
                          return (
                            !this._uri &&
                              this.reluri &&
                              (this._uri = Object(d.buildAbsoluteURL)(
                                this.baseuri,
                                this.reluri,
                                { alwaysNormalize: !0 }
                              )),
                            this._uri
                          );
                        },
                      },
                    ]) && T(t.prototype, r),
                    n && T(t, n),
                    e
                  );
                })();
              function A(e, t) {
                for (var i = 0; i < t.length; i++) {
                  var r = t[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              !(function (e) {
                (e.AUDIO = "audio"), (e.VIDEO = "video");
              })(S || (S = {}));
              var R = (function () {
                function e() {
                  var e;
                  (this._url = null),
                    (this._byteRange = null),
                    (this._decryptdata = null),
                    (this._elementaryStreams =
                      (((e = {})[S.AUDIO] = !1), (e[S.VIDEO] = !1), e)),
                    (this.deltaPTS = 0),
                    (this.rawProgramDateTime = null),
                    (this.programDateTime = null),
                    (this.title = null),
                    (this.tagList = []),
                    (this.cc = void 0),
                    (this.type = void 0),
                    (this.relurl = void 0),
                    (this.baseurl = void 0),
                    (this.duration = void 0),
                    (this.start = void 0),
                    (this.sn = 0),
                    (this.urlId = 0),
                    (this.level = 0),
                    (this.levelkey = void 0),
                    (this.loader = void 0);
                }
                var t,
                  r,
                  n,
                  o = e.prototype;
                return (
                  (o.setByteRange = function (e, t) {
                    var r = e.split("@", 2),
                      n = [];
                    1 === r.length
                      ? (n[0] = t ? t.byteRangeEndOffset : 0)
                      : (n[0] = parseInt(r[1])),
                      (n[1] = parseInt(r[0]) + n[0]),
                      (this._byteRange = n);
                  }),
                  (o.addElementaryStream = function (e) {
                    this._elementaryStreams[e] = !0;
                  }),
                  (o.hasElementaryStream = function (e) {
                    return !0 === this._elementaryStreams[e];
                  }),
                  (o.createInitializationVector = function (e) {
                    for (var t = new Uint8Array(16), i = 12; i < 16; i++)
                      t[i] = (e >> (8 * (15 - i))) & 255;
                    return t;
                  }),
                  (o.setDecryptDataFromLevelKey = function (e, t) {
                    var r = e;
                    return (
                      e &&
                        e.method &&
                        e.uri &&
                        !e.iv &&
                        (((r = new _(e.baseuri, e.reluri)).method = e.method),
                        (r.iv = this.createInitializationVector(t))),
                      r
                    );
                  }),
                  (t = e),
                  (r = [
                    {
                      key: "url",
                      get: function () {
                        return (
                          !this._url &&
                            this.relurl &&
                            (this._url = Object(d.buildAbsoluteURL)(
                              this.baseurl,
                              this.relurl,
                              { alwaysNormalize: !0 }
                            )),
                          this._url
                        );
                      },
                      set: function (e) {
                        this._url = e;
                      },
                    },
                    {
                      key: "byteRange",
                      get: function () {
                        return this._byteRange ? this._byteRange : [];
                      },
                    },
                    {
                      key: "byteRangeStartOffset",
                      get: function () {
                        return this.byteRange[0];
                      },
                    },
                    {
                      key: "byteRangeEndOffset",
                      get: function () {
                        return this.byteRange[1];
                      },
                    },
                    {
                      key: "decryptdata",
                      get: function () {
                        if (!this.levelkey && !this._decryptdata) return null;
                        if (!this._decryptdata && this.levelkey) {
                          var e = this.sn;
                          "number" != typeof e &&
                            (this.levelkey &&
                              "AES-128" === this.levelkey.method &&
                              !this.levelkey.iv &&
                              v.logger.warn(
                                'missing IV for initialization segment with method="' +
                                  this.levelkey.method +
                                  '" - compliance issue'
                              ),
                            (e = 0)),
                            (this._decryptdata =
                              this.setDecryptDataFromLevelKey(
                                this.levelkey,
                                e
                              ));
                        }
                        return this._decryptdata;
                      },
                    },
                    {
                      key: "endProgramDateTime",
                      get: function () {
                        if (null === this.programDateTime) return null;
                        if (!Object(f.isFiniteNumber)(this.programDateTime))
                          return null;
                        var e = Object(f.isFiniteNumber)(this.duration)
                          ? this.duration
                          : 0;
                        return this.programDateTime + 1e3 * e;
                      },
                    },
                    {
                      key: "encrypted",
                      get: function () {
                        return !(
                          !this.decryptdata ||
                          null === this.decryptdata.uri ||
                          null !== this.decryptdata.key
                        );
                      },
                    },
                  ]) && A(t.prototype, r),
                  n && A(t, n),
                  e
                );
              })();
              function w(e, t) {
                for (var i = 0; i < t.length; i++) {
                  var r = t[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              var k = (function () {
                  function e(e) {
                    (this.endCC = 0),
                      (this.endSN = 0),
                      (this.fragments = []),
                      (this.initSegment = null),
                      (this.live = !0),
                      (this.needSidxRanges = !1),
                      (this.startCC = 0),
                      (this.startSN = 0),
                      (this.startTimeOffset = null),
                      (this.targetduration = 0),
                      (this.totalduration = 0),
                      (this.type = null),
                      (this.url = e),
                      (this.version = null);
                  }
                  var t, r, n;
                  return (
                    (t = e),
                    (r = [
                      {
                        key: "hasProgramDateTime",
                        get: function () {
                          return !(
                            !this.fragments[0] ||
                            !Object(f.isFiniteNumber)(
                              this.fragments[0].programDateTime
                            )
                          );
                        },
                      },
                    ]) && w(t.prototype, r),
                    n && w(t, n),
                    e
                  );
                })(),
                L = /^(\d+)x(\d+)$/,
                D = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
                C = (function () {
                  function e(t) {
                    for (var r in ("string" == typeof t &&
                      (t = e.parseAttrList(t)),
                    t))
                      t.hasOwnProperty(r) && (this[r] = t[r]);
                  }
                  var t = e.prototype;
                  return (
                    (t.decimalInteger = function (e) {
                      var t = parseInt(this[e], 10);
                      return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
                    }),
                    (t.hexadecimalInteger = function (e) {
                      if (this[e]) {
                        var t = (this[e] || "0x").slice(2);
                        t = (1 & t.length ? "0" : "") + t;
                        for (
                          var r = new Uint8Array(t.length / 2), i = 0;
                          i < t.length / 2;
                          i++
                        )
                          r[i] = parseInt(t.slice(2 * i, 2 * i + 2), 16);
                        return r;
                      }
                      return null;
                    }),
                    (t.hexadecimalIntegerAsNumber = function (e) {
                      var t = parseInt(this[e], 16);
                      return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
                    }),
                    (t.decimalFloatingPoint = function (e) {
                      return parseFloat(this[e]);
                    }),
                    (t.enumeratedString = function (e) {
                      return this[e];
                    }),
                    (t.decimalResolution = function (e) {
                      var t = L.exec(this[e]);
                      if (null !== t)
                        return {
                          width: parseInt(t[1], 10),
                          height: parseInt(t[2], 10),
                        };
                    }),
                    (e.parseAttrList = function (input) {
                      var e,
                        t = {};
                      for (D.lastIndex = 0; null !== (e = D.exec(input)); ) {
                        var r = e[2];
                        0 === r.indexOf('"') &&
                          r.lastIndexOf('"') === r.length - 1 &&
                          (r = r.slice(1, -1)),
                          (t[e[1]] = r);
                      }
                      return t;
                    }),
                    e
                  );
                })(),
                O = {
                  audio: {
                    a3ds: !0,
                    "ac-3": !0,
                    "ac-4": !0,
                    alac: !0,
                    alaw: !0,
                    dra1: !0,
                    "dts+": !0,
                    "dts-": !0,
                    dtsc: !0,
                    dtse: !0,
                    dtsh: !0,
                    "ec-3": !0,
                    enca: !0,
                    g719: !0,
                    g726: !0,
                    m4ae: !0,
                    mha1: !0,
                    mha2: !0,
                    mhm1: !0,
                    mhm2: !0,
                    mlpa: !0,
                    mp4a: !0,
                    "raw ": !0,
                    Opus: !0,
                    samr: !0,
                    sawb: !0,
                    sawp: !0,
                    sevc: !0,
                    sqcp: !0,
                    ssmv: !0,
                    twos: !0,
                    ulaw: !0,
                  },
                  video: {
                    avc1: !0,
                    avc2: !0,
                    avc3: !0,
                    avc4: !0,
                    avcp: !0,
                    drac: !0,
                    dvav: !0,
                    dvhe: !0,
                    encv: !0,
                    hev1: !0,
                    hvc1: !0,
                    mjp2: !0,
                    mp4v: !0,
                    mvc1: !0,
                    mvc2: !0,
                    mvc3: !0,
                    mvc4: !0,
                    resv: !0,
                    rv60: !0,
                    s263: !0,
                    svc1: !0,
                    svc2: !0,
                    "vc-1": !0,
                    vp08: !0,
                    vp09: !0,
                  },
                };
              function I(e, t) {
                return MediaSource.isTypeSupported(
                  (t || "video") + '/mp4;codecs="' + e + '"'
                );
              }
              var x = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
                P = /#EXT-X-MEDIA:(.*)/g,
                F = new RegExp(
                  [
                    /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
                    /|(?!#)([\S+ ?]+)/.source,
                    /|#EXT-X-BYTERANGE:*(.+)/.source,
                    /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
                    /|#.*/.source,
                  ].join(""),
                  "g"
                ),
                M =
                  /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
                N = /\.(mp4|m4s|m4v|m4a)$/i,
                U = (function () {
                  function e() {}
                  return (
                    (e.findGroup = function (e, t) {
                      for (var i = 0; i < e.length; i++) {
                        var r = e[i];
                        if (r.id === t) return r;
                      }
                    }),
                    (e.convertAVC1ToAVCOTI = function (e) {
                      var t,
                        r = e.split(".");
                      return (
                        r.length > 2
                          ? ((t = r.shift() + "."),
                            (t += parseInt(r.shift()).toString(16)),
                            (t += (
                              "000" + parseInt(r.shift()).toString(16)
                            ).substr(-4)))
                          : (t = e),
                        t
                      );
                    }),
                    (e.resolve = function (e, t) {
                      return d.buildAbsoluteURL(t, e, { alwaysNormalize: !0 });
                    }),
                    (e.parseMasterPlaylist = function (t, r) {
                      var n,
                        o = [];
                      function l(e, t) {
                        ["video", "audio"].forEach(function (r) {
                          var n = e.filter(function (e) {
                            return (function (e, t) {
                              var r = O[t];
                              return !!r && !0 === r[e.slice(0, 4)];
                            })(e, r);
                          });
                          if (n.length) {
                            var o = n.filter(function (e) {
                              return (
                                0 === e.lastIndexOf("avc1", 0) ||
                                0 === e.lastIndexOf("mp4a", 0)
                              );
                            });
                            (t[r + "Codec"] = o.length > 0 ? o[0] : n[0]),
                              (e = e.filter(function (e) {
                                return -1 === n.indexOf(e);
                              }));
                          }
                        }),
                          (t.unknownCodecs = e);
                      }
                      for (x.lastIndex = 0; null != (n = x.exec(t)); ) {
                        var d = {},
                          c = (d.attrs = new C(n[1]));
                        d.url = e.resolve(n[2], r);
                        var f = c.decimalResolution("RESOLUTION");
                        f && ((d.width = f.width), (d.height = f.height)),
                          (d.bitrate =
                            c.decimalInteger("AVERAGE-BANDWIDTH") ||
                            c.decimalInteger("BANDWIDTH")),
                          (d.name = c.NAME),
                          l([].concat((c.CODECS || "").split(/[ ,]+/)), d),
                          d.videoCodec &&
                            -1 !== d.videoCodec.indexOf("avc1") &&
                            (d.videoCodec = e.convertAVC1ToAVCOTI(
                              d.videoCodec
                            )),
                          o.push(d);
                      }
                      return o;
                    }),
                    (e.parseMasterPlaylistMedia = function (t, r, n, o) {
                      var l;
                      void 0 === o && (o = []);
                      var d = [],
                        c = 0;
                      for (P.lastIndex = 0; null !== (l = P.exec(t)); ) {
                        var f = new C(l[1]);
                        if (f.TYPE === n) {
                          var h = {
                            id: c++,
                            groupId: f["GROUP-ID"],
                            name: f.NAME || f.LANGUAGE,
                            type: n,
                            default: "YES" === f.DEFAULT,
                            autoselect: "YES" === f.AUTOSELECT,
                            forced: "YES" === f.FORCED,
                            lang: f.LANGUAGE,
                          };
                          if (
                            (f.URI && (h.url = e.resolve(f.URI, r)), o.length)
                          ) {
                            var v = e.findGroup(o, h.groupId);
                            h.audioCodec = v ? v.codec : o[0].codec;
                          }
                          d.push(h);
                        }
                      }
                      return d;
                    }),
                    (e.parseLevelPlaylist = function (e, t, r, n, o) {
                      var l,
                        i,
                        d,
                        c = 0,
                        h = 0,
                        m = new k(t),
                        y = 0,
                        E = null,
                        T = new R(),
                        S = null;
                      for (F.lastIndex = 0; null !== (l = F.exec(e)); ) {
                        var A = l[1];
                        if (A) {
                          T.duration = parseFloat(A);
                          var title = (" " + l[2]).slice(1);
                          (T.title = title || null),
                            T.tagList.push(
                              title ? ["INF", A, title] : ["INF", A]
                            );
                        } else if (l[3]) {
                          if (Object(f.isFiniteNumber)(T.duration)) {
                            var w = c++;
                            (T.type = n),
                              (T.start = h),
                              d && (T.levelkey = d),
                              (T.sn = w),
                              (T.level = r),
                              (T.cc = y),
                              (T.urlId = o),
                              (T.baseurl = t),
                              (T.relurl = (" " + l[3]).slice(1)),
                              B(T, E),
                              m.fragments.push(T),
                              (E = T),
                              (h += T.duration),
                              (T = new R());
                          }
                        } else if (l[4]) {
                          var data = (" " + l[4]).slice(1);
                          E ? T.setByteRange(data, E) : T.setByteRange(data);
                        } else if (l[5])
                          (T.rawProgramDateTime = (" " + l[5]).slice(1)),
                            T.tagList.push([
                              "PROGRAM-DATE-TIME",
                              T.rawProgramDateTime,
                            ]),
                            null === S && (S = m.fragments.length);
                        else {
                          if (!(l = l[0].match(M))) {
                            v.logger.warn(
                              "No matches on slow regex match for level playlist!"
                            );
                            continue;
                          }
                          for (i = 1; i < l.length && void 0 === l[i]; i++);
                          var L = (" " + l[i + 1]).slice(1),
                            D = (" " + l[i + 2]).slice(1);
                          switch (l[i]) {
                            case "#":
                              T.tagList.push(D ? [L, D] : [L]);
                              break;
                            case "PLAYLIST-TYPE":
                              m.type = L.toUpperCase();
                              break;
                            case "MEDIA-SEQUENCE":
                              c = m.startSN = parseInt(L);
                              break;
                            case "TARGETDURATION":
                              m.targetduration = parseFloat(L);
                              break;
                            case "VERSION":
                              m.version = parseInt(L);
                              break;
                            case "EXTM3U":
                              break;
                            case "ENDLIST":
                              m.live = !1;
                              break;
                            case "DIS":
                              y++, T.tagList.push(["DIS"]);
                              break;
                            case "DISCONTINUITY-SEQ":
                              y = parseInt(L);
                              break;
                            case "KEY":
                              var O = new C(L),
                                I = O.enumeratedString("METHOD"),
                                x = O.URI,
                                P = O.hexadecimalInteger("IV");
                              I &&
                                ((d = new _(t, x)),
                                x &&
                                  [
                                    "AES-128",
                                    "SAMPLE-AES",
                                    "SAMPLE-AES-CENC",
                                  ].indexOf(I) >= 0 &&
                                  ((d.method = I), (d.key = null), (d.iv = P)));
                              break;
                            case "START":
                              var U = new C(L).decimalFloatingPoint(
                                "TIME-OFFSET"
                              );
                              Object(f.isFiniteNumber)(U) &&
                                (m.startTimeOffset = U);
                              break;
                            case "MAP":
                              var G = new C(L);
                              (T.relurl = G.URI),
                                G.BYTERANGE && T.setByteRange(G.BYTERANGE),
                                (T.baseurl = t),
                                (T.level = r),
                                (T.type = n),
                                (T.sn = "initSegment"),
                                (m.initSegment = T),
                                ((T = new R()).rawProgramDateTime =
                                  m.initSegment.rawProgramDateTime);
                              break;
                            default:
                              v.logger.warn(
                                "line parsed but not handled: " + l
                              );
                          }
                        }
                      }
                      return (
                        (T = E) &&
                          !T.relurl &&
                          (m.fragments.pop(), (h -= T.duration)),
                        (m.totalduration = h),
                        (m.averagetargetduration = h / m.fragments.length),
                        (m.endSN = c - 1),
                        (m.startCC = m.fragments[0] ? m.fragments[0].cc : 0),
                        (m.endCC = y),
                        !m.initSegment &&
                          m.fragments.length &&
                          m.fragments.every(function (e) {
                            return N.test(e.relurl);
                          }) &&
                          (v.logger.warn(
                            "MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"
                          ),
                          ((T = new R()).relurl = m.fragments[0].relurl),
                          (T.baseurl = t),
                          (T.level = r),
                          (T.type = n),
                          (T.sn = "initSegment"),
                          (m.initSegment = T),
                          (m.needSidxRanges = !0)),
                        S &&
                          (function (e, t) {
                            for (var r = e[t], i = t - 1; i >= 0; i--) {
                              var n = e[i];
                              (n.programDateTime =
                                r.programDateTime - 1e3 * n.duration),
                                (r = n);
                            }
                          })(m.fragments, S),
                        m
                      );
                    }),
                    e
                  );
                })();
              function B(e, t) {
                e.rawProgramDateTime
                  ? (e.programDateTime = Date.parse(e.rawProgramDateTime))
                  : t &&
                    t.programDateTime &&
                    (e.programDateTime = t.endProgramDateTime),
                  Object(f.isFiniteNumber)(e.programDateTime) ||
                    ((e.programDateTime = null), (e.rawProgramDateTime = null));
              }
              var G = window.performance,
                j = (function (e) {
                  var t, r;
                  function n(t) {
                    var r;
                    return (
                      ((r =
                        e.call(
                          this,
                          t,
                          h.default.MANIFEST_LOADING,
                          h.default.LEVEL_LOADING,
                          h.default.AUDIO_TRACK_LOADING,
                          h.default.SUBTITLE_TRACK_LOADING
                        ) || this).loaders = {}),
                      r
                    );
                  }
                  (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r),
                    (n.canHaveQualityLevels = function (e) {
                      return e !== o.AUDIO_TRACK && e !== o.SUBTITLE_TRACK;
                    }),
                    (n.mapContextToLevelType = function (e) {
                      switch (e.type) {
                        case o.AUDIO_TRACK:
                          return l.AUDIO;
                        case o.SUBTITLE_TRACK:
                          return l.SUBTITLE;
                        default:
                          return l.MAIN;
                      }
                    }),
                    (n.getResponseUrl = function (e, t) {
                      var r = e.url;
                      return (
                        (void 0 !== r && 0 !== r.indexOf("data:")) ||
                          (r = t.url),
                        r
                      );
                    });
                  var d = n.prototype;
                  return (
                    (d.createInternalLoader = function (e) {
                      var t = this.hls.config,
                        r = t.pLoader,
                        n = t.loader,
                        o = new (r || n)(t);
                      return (e.loader = o), (this.loaders[e.type] = o), o;
                    }),
                    (d.getInternalLoader = function (e) {
                      return this.loaders[e.type];
                    }),
                    (d.resetInternalLoader = function (e) {
                      this.loaders[e] && delete this.loaders[e];
                    }),
                    (d.destroyInternalLoaders = function () {
                      for (var e in this.loaders) {
                        var t = this.loaders[e];
                        t && t.destroy(), this.resetInternalLoader(e);
                      }
                    }),
                    (d.destroy = function () {
                      this.destroyInternalLoaders(),
                        e.prototype.destroy.call(this);
                    }),
                    (d.onManifestLoading = function (data) {
                      this.load({
                        url: data.url,
                        type: o.MANIFEST,
                        level: 0,
                        id: null,
                        responseType: "text",
                      });
                    }),
                    (d.onLevelLoading = function (data) {
                      this.load({
                        url: data.url,
                        type: o.LEVEL,
                        level: data.level,
                        id: data.id,
                        responseType: "text",
                      });
                    }),
                    (d.onAudioTrackLoading = function (data) {
                      this.load({
                        url: data.url,
                        type: o.AUDIO_TRACK,
                        level: null,
                        id: data.id,
                        responseType: "text",
                      });
                    }),
                    (d.onSubtitleTrackLoading = function (data) {
                      this.load({
                        url: data.url,
                        type: o.SUBTITLE_TRACK,
                        level: null,
                        id: data.id,
                        responseType: "text",
                      });
                    }),
                    (d.load = function (e) {
                      var t = this.hls.config;
                      v.logger.debug(
                        "Loading playlist of type " +
                          e.type +
                          ", level: " +
                          e.level +
                          ", id: " +
                          e.id
                      );
                      var r,
                        n,
                        l,
                        d,
                        c = this.getInternalLoader(e);
                      if (c) {
                        var f = c.context;
                        if (f && f.url === e.url)
                          return v.logger.trace("playlist request ongoing"), !1;
                        v.logger.warn(
                          "aborting previous loader for type: " + e.type
                        ),
                          c.abort();
                      }
                      switch (e.type) {
                        case o.MANIFEST:
                          (r = t.manifestLoadingMaxRetry),
                            (n = t.manifestLoadingTimeOut),
                            (l = t.manifestLoadingRetryDelay),
                            (d = t.manifestLoadingMaxRetryTimeout);
                          break;
                        case o.LEVEL:
                          (r = 0),
                            (d = 0),
                            (l = 0),
                            (n = t.levelLoadingTimeOut);
                          break;
                        default:
                          (r = t.levelLoadingMaxRetry),
                            (n = t.levelLoadingTimeOut),
                            (l = t.levelLoadingRetryDelay),
                            (d = t.levelLoadingMaxRetryTimeout);
                      }
                      c = this.createInternalLoader(e);
                      var h = {
                          timeout: n,
                          maxRetry: r,
                          retryDelay: l,
                          maxRetryDelay: d,
                        },
                        m = {
                          onSuccess: this.loadsuccess.bind(this),
                          onError: this.loaderror.bind(this),
                          onTimeout: this.loadtimeout.bind(this),
                        };
                      return (
                        v.logger.debug(
                          "Calling internal loader delegate for URL: " + e.url
                        ),
                        c.load(e, h, m),
                        !0
                      );
                    }),
                    (d.loadsuccess = function (e, t, r, n) {
                      if ((void 0 === n && (n = null), r.isSidxRequest))
                        return (
                          this._handleSidxRequest(e, r),
                          void this._handlePlaylistLoaded(e, t, r, n)
                        );
                      if (
                        (this.resetInternalLoader(r.type),
                        "string" != typeof e.data)
                      )
                        throw new Error(
                          'expected responseType of "text" for PlaylistLoader'
                        );
                      var o = e.data;
                      (t.tload = G.now()),
                        0 === o.indexOf("#EXTM3U")
                          ? o.indexOf("#EXTINF:") > 0 ||
                            o.indexOf("#EXT-X-TARGETDURATION:") > 0
                            ? this._handleTrackOrLevelPlaylist(e, t, r, n)
                            : this._handleMasterPlaylist(e, t, r, n)
                          : this._handleManifestParsingError(
                              e,
                              r,
                              "no EXTM3U delimiter",
                              n
                            );
                    }),
                    (d.loaderror = function (e, t, r) {
                      void 0 === r && (r = null),
                        this._handleNetworkError(t, r, !1, e);
                    }),
                    (d.loadtimeout = function (e, t, r) {
                      void 0 === r && (r = null),
                        this._handleNetworkError(t, r, !0);
                    }),
                    (d._handleMasterPlaylist = function (e, t, r, o) {
                      var l = this.hls,
                        d = e.data,
                        c = n.getResponseUrl(e, r),
                        f = U.parseMasterPlaylist(d, c);
                      if (f.length) {
                        var m = f.map(function (e) {
                            return { id: e.attrs.AUDIO, codec: e.audioCodec };
                          }),
                          y = U.parseMasterPlaylistMedia(d, c, "AUDIO", m),
                          E = U.parseMasterPlaylistMedia(d, c, "SUBTITLES");
                        if (y.length) {
                          var T = !1;
                          y.forEach(function (e) {
                            e.url || (T = !0);
                          }),
                            !1 === T &&
                              f[0].audioCodec &&
                              !f[0].attrs.AUDIO &&
                              (v.logger.log(
                                "audio codec signaled in quality level, but no embedded audio track signaled, create one"
                              ),
                              y.unshift({
                                type: "main",
                                name: "main",
                                default: !1,
                                autoselect: !1,
                                forced: !1,
                                id: -1,
                              }));
                        }
                        l.trigger(h.default.MANIFEST_LOADED, {
                          levels: f,
                          audioTracks: y,
                          subtitles: E,
                          url: c,
                          stats: t,
                          networkDetails: o,
                        });
                      } else
                        this._handleManifestParsingError(
                          e,
                          r,
                          "no level found in manifest",
                          o
                        );
                    }),
                    (d._handleTrackOrLevelPlaylist = function (e, t, r, l) {
                      var d = this.hls,
                        c = r.id,
                        v = r.level,
                        m = r.type,
                        y = n.getResponseUrl(e, r),
                        E = Object(f.isFiniteNumber)(c) ? c : 0,
                        T = Object(f.isFiniteNumber)(v) ? v : E,
                        S = n.mapContextToLevelType(r),
                        _ = U.parseLevelPlaylist(e.data, y, T, S, E);
                      if (((_.tload = t.tload), m === o.MANIFEST)) {
                        var A = { url: y, details: _ };
                        d.trigger(h.default.MANIFEST_LOADED, {
                          levels: [A],
                          audioTracks: [],
                          url: y,
                          stats: t,
                          networkDetails: l,
                        });
                      }
                      if (((t.tparsed = G.now()), _.needSidxRanges)) {
                        var R = _.initSegment.url;
                        this.load({
                          url: R,
                          isSidxRequest: !0,
                          type: m,
                          level: v,
                          levelDetails: _,
                          id: c,
                          rangeStart: 0,
                          rangeEnd: 2048,
                          responseType: "arraybuffer",
                        });
                      } else
                        (r.levelDetails = _),
                          this._handlePlaylistLoaded(e, t, r, l);
                    }),
                    (d._handleSidxRequest = function (e, t) {
                      if ("string" == typeof e.data)
                        throw new Error(
                          "sidx request must be made with responseType of array buffer"
                        );
                      var r = E.default.parseSegmentIndex(
                        new Uint8Array(e.data)
                      );
                      if (r) {
                        var n = r.references,
                          o = t.levelDetails;
                        n.forEach(function (e, t) {
                          var r = e.info;
                          if (o) {
                            var n = o.fragments[t];
                            0 === n.byteRange.length &&
                              n.setByteRange(
                                String(1 + r.end - r.start) +
                                  "@" +
                                  String(r.start)
                              );
                          }
                        }),
                          o &&
                            o.initSegment.setByteRange(
                              String(r.moovEndOffset) + "@0"
                            );
                      }
                    }),
                    (d._handleManifestParsingError = function (e, t, r, n) {
                      this.hls.trigger(h.default.ERROR, {
                        type: c.ErrorTypes.NETWORK_ERROR,
                        details: c.ErrorDetails.MANIFEST_PARSING_ERROR,
                        fatal: !0,
                        url: e.url,
                        reason: r,
                        networkDetails: n,
                      });
                    }),
                    (d._handleNetworkError = function (e, t, r, n) {
                      var details, l;
                      void 0 === r && (r = !1),
                        void 0 === n && (n = null),
                        v.logger.info(
                          "A network error occured while loading a " +
                            e.type +
                            "-type playlist"
                        );
                      var d = this.getInternalLoader(e);
                      switch (e.type) {
                        case o.MANIFEST:
                          (details = r
                            ? c.ErrorDetails.MANIFEST_LOAD_TIMEOUT
                            : c.ErrorDetails.MANIFEST_LOAD_ERROR),
                            (l = !0);
                          break;
                        case o.LEVEL:
                          (details = r
                            ? c.ErrorDetails.LEVEL_LOAD_TIMEOUT
                            : c.ErrorDetails.LEVEL_LOAD_ERROR),
                            (l = !1);
                          break;
                        case o.AUDIO_TRACK:
                          (details = r
                            ? c.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT
                            : c.ErrorDetails.AUDIO_TRACK_LOAD_ERROR),
                            (l = !1);
                          break;
                        default:
                          l = !1;
                      }
                      d && (d.abort(), this.resetInternalLoader(e.type));
                      var f = {
                        type: c.ErrorTypes.NETWORK_ERROR,
                        details: details,
                        fatal: l,
                        url: e.url,
                        loader: d,
                        context: e,
                        networkDetails: t,
                      };
                      n && (f.response = n),
                        this.hls.trigger(h.default.ERROR, f);
                    }),
                    (d._handlePlaylistLoaded = function (e, t, r, l) {
                      var d = r.type,
                        c = r.level,
                        f = r.id,
                        v = r.levelDetails;
                      if (v && v.targetduration)
                        if (n.canHaveQualityLevels(r.type))
                          this.hls.trigger(h.default.LEVEL_LOADED, {
                            details: v,
                            level: c || 0,
                            id: f || 0,
                            stats: t,
                            networkDetails: l,
                          });
                        else
                          switch (d) {
                            case o.AUDIO_TRACK:
                              this.hls.trigger(h.default.AUDIO_TRACK_LOADED, {
                                details: v,
                                id: f,
                                stats: t,
                                networkDetails: l,
                              });
                              break;
                            case o.SUBTITLE_TRACK:
                              this.hls.trigger(
                                h.default.SUBTITLE_TRACK_LOADED,
                                {
                                  details: v,
                                  id: f,
                                  stats: t,
                                  networkDetails: l,
                                }
                              );
                          }
                      else
                        this._handleManifestParsingError(
                          e,
                          r,
                          "invalid target duration",
                          l
                        );
                    }),
                    n
                  );
                })(y),
                K = (function (e) {
                  var t, r;
                  function n(t) {
                    var r;
                    return (
                      ((r =
                        e.call(this, t, h.default.FRAG_LOADING) ||
                        this).loaders = {}),
                      r
                    );
                  }
                  (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r);
                  var o = n.prototype;
                  return (
                    (o.destroy = function () {
                      var t = this.loaders;
                      for (var r in t) {
                        var n = t[r];
                        n && n.destroy();
                      }
                      (this.loaders = {}), e.prototype.destroy.call(this);
                    }),
                    (o.onFragLoading = function (data) {
                      var e = data.frag,
                        t = e.type,
                        r = this.loaders,
                        n = this.hls.config,
                        o = n.fLoader,
                        l = n.loader;
                      e.loaded = 0;
                      var d,
                        c,
                        h,
                        m = r[t];
                      m &&
                        (v.logger.warn(
                          "abort previous fragment loader for type: " + t
                        ),
                        m.abort()),
                        (m = r[t] = e.loader = n.fLoader ? new o(n) : new l(n)),
                        (d = {
                          url: e.url,
                          frag: e,
                          responseType: "arraybuffer",
                          progressData: !1,
                        });
                      var y = e.byteRangeStartOffset,
                        E = e.byteRangeEndOffset;
                      Object(f.isFiniteNumber)(y) &&
                        Object(f.isFiniteNumber)(E) &&
                        ((d.rangeStart = y), (d.rangeEnd = E)),
                        (c = {
                          timeout: n.fragLoadingTimeOut,
                          maxRetry: 0,
                          retryDelay: 0,
                          maxRetryDelay: n.fragLoadingMaxRetryTimeout,
                        }),
                        (h = {
                          onSuccess: this.loadsuccess.bind(this),
                          onError: this.loaderror.bind(this),
                          onTimeout: this.loadtimeout.bind(this),
                          onProgress: this.loadprogress.bind(this),
                        }),
                        m.load(d, c, h);
                    }),
                    (o.loadsuccess = function (e, t, r, n) {
                      void 0 === n && (n = null);
                      var o = e.data,
                        l = r.frag;
                      (l.loader = void 0),
                        (this.loaders[l.type] = void 0),
                        this.hls.trigger(h.default.FRAG_LOADED, {
                          payload: o,
                          frag: l,
                          stats: t,
                          networkDetails: n,
                        });
                    }),
                    (o.loaderror = function (e, t, r) {
                      void 0 === r && (r = null);
                      var n = t.frag,
                        o = n.loader;
                      o && o.abort(),
                        (this.loaders[n.type] = void 0),
                        this.hls.trigger(h.default.ERROR, {
                          type: c.ErrorTypes.NETWORK_ERROR,
                          details: c.ErrorDetails.FRAG_LOAD_ERROR,
                          fatal: !1,
                          frag: t.frag,
                          response: e,
                          networkDetails: r,
                        });
                    }),
                    (o.loadtimeout = function (e, t, r) {
                      void 0 === r && (r = null);
                      var n = t.frag,
                        o = n.loader;
                      o && o.abort(),
                        (this.loaders[n.type] = void 0),
                        this.hls.trigger(h.default.ERROR, {
                          type: c.ErrorTypes.NETWORK_ERROR,
                          details: c.ErrorDetails.FRAG_LOAD_TIMEOUT,
                          fatal: !1,
                          frag: t.frag,
                          networkDetails: r,
                        });
                    }),
                    (o.loadprogress = function (e, t, data, r) {
                      void 0 === r && (r = null);
                      var n = t.frag;
                      (n.loaded = e.loaded),
                        this.hls.trigger(h.default.FRAG_LOAD_PROGRESS, {
                          frag: n,
                          stats: e,
                          networkDetails: r,
                        });
                    }),
                    n
                  );
                })(y),
                H = (function (e) {
                  var t, r;
                  function n(t) {
                    var r;
                    return (
                      ((r =
                        e.call(this, t, h.default.KEY_LOADING) ||
                        this).loaders = {}),
                      (r.decryptkey = null),
                      (r.decrypturl = null),
                      r
                    );
                  }
                  (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r);
                  var o = n.prototype;
                  return (
                    (o.destroy = function () {
                      for (var t in this.loaders) {
                        var r = this.loaders[t];
                        r && r.destroy();
                      }
                      (this.loaders = {}), e.prototype.destroy.call(this);
                    }),
                    (o.onKeyLoading = function (data) {
                      var e = data.frag,
                        t = e.type,
                        r = this.loaders[t];
                      if (e.decryptdata) {
                        var n = e.decryptdata.uri;
                        if (n !== this.decrypturl || null === this.decryptkey) {
                          var o = this.hls.config;
                          if (
                            (r &&
                              (v.logger.warn(
                                "abort previous key loader for type:" + t
                              ),
                              r.abort()),
                            !n)
                          )
                            return void v.logger.warn("key uri is falsy");
                          (e.loader = this.loaders[t] = new o.loader(o)),
                            (this.decrypturl = n),
                            (this.decryptkey = null);
                          var l = {
                              url: n,
                              frag: e,
                              responseType: "arraybuffer",
                            },
                            d = {
                              timeout: o.fragLoadingTimeOut,
                              maxRetry: 0,
                              retryDelay: o.fragLoadingRetryDelay,
                              maxRetryDelay: o.fragLoadingMaxRetryTimeout,
                            },
                            c = {
                              onSuccess: this.loadsuccess.bind(this),
                              onError: this.loaderror.bind(this),
                              onTimeout: this.loadtimeout.bind(this),
                            };
                          e.loader.load(l, d, c);
                        } else
                          this.decryptkey &&
                            ((e.decryptdata.key = this.decryptkey),
                            this.hls.trigger(h.default.KEY_LOADED, {
                              frag: e,
                            }));
                      } else
                        v.logger.warn(
                          "Missing decryption data on fragment in onKeyLoading"
                        );
                    }),
                    (o.loadsuccess = function (e, t, r) {
                      var n = r.frag;
                      n.decryptdata
                        ? ((this.decryptkey = n.decryptdata.key =
                            new Uint8Array(e.data)),
                          (n.loader = void 0),
                          delete this.loaders[n.type],
                          this.hls.trigger(h.default.KEY_LOADED, { frag: n }))
                        : v.logger.error("after key load, decryptdata unset");
                    }),
                    (o.loaderror = function (e, t) {
                      var r = t.frag,
                        n = r.loader;
                      n && n.abort(),
                        delete this.loaders[r.type],
                        this.hls.trigger(h.default.ERROR, {
                          type: c.ErrorTypes.NETWORK_ERROR,
                          details: c.ErrorDetails.KEY_LOAD_ERROR,
                          fatal: !1,
                          frag: r,
                          response: e,
                        });
                    }),
                    (o.loadtimeout = function (e, t) {
                      var r = t.frag,
                        n = r.loader;
                      n && n.abort(),
                        delete this.loaders[r.type],
                        this.hls.trigger(h.default.ERROR, {
                          type: c.ErrorTypes.NETWORK_ERROR,
                          details: c.ErrorDetails.KEY_LOAD_TIMEOUT,
                          fatal: !1,
                          frag: r,
                        });
                    }),
                    n
                  );
                })(y),
                V = "NOT_LOADED",
                Y = "APPENDING",
                W = "PARTIAL",
                z = "OK",
                X = (function (e) {
                  var t, r;
                  function n(t) {
                    var r;
                    return (
                      ((r =
                        e.call(
                          this,
                          t,
                          h.default.BUFFER_APPENDED,
                          h.default.FRAG_BUFFERED,
                          h.default.FRAG_LOADED
                        ) || this).bufferPadding = 0.2),
                      (r.fragments = Object.create(null)),
                      (r.timeRanges = Object.create(null)),
                      (r.config = t.config),
                      r
                    );
                  }
                  (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r);
                  var o = n.prototype;
                  return (
                    (o.destroy = function () {
                      (this.fragments = Object.create(null)),
                        (this.timeRanges = Object.create(null)),
                        (this.config = null),
                        y.prototype.destroy.call(this),
                        e.prototype.destroy.call(this);
                    }),
                    (o.getBufferedFrag = function (e, t) {
                      var r = this.fragments,
                        n = Object.keys(r).filter(function (n) {
                          var o = r[n];
                          if (o.body.type !== t) return !1;
                          if (!o.buffered) return !1;
                          var l = o.body;
                          return l.startPTS <= e && e <= l.endPTS;
                        });
                      if (0 === n.length) return null;
                      var o = n.pop();
                      return r[o].body;
                    }),
                    (o.detectEvictedFragments = function (e, t) {
                      var r,
                        time,
                        n = this;
                      Object.keys(this.fragments).forEach(function (o) {
                        var l = n.fragments[o];
                        if (!0 === l.buffered) {
                          var d = l.range[e];
                          if (d) {
                            r = d.time;
                            for (var i = 0; i < r.length; i++)
                              if (
                                ((time = r[i]),
                                !1 ===
                                  n.isTimeBuffered(
                                    time.startPTS,
                                    time.endPTS,
                                    t
                                  ))
                              ) {
                                n.removeFragment(l.body);
                                break;
                              }
                          }
                        }
                      });
                    }),
                    (o.detectPartialFragments = function (e) {
                      var t = this,
                        r = this.getFragmentKey(e),
                        n = this.fragments[r];
                      n &&
                        ((n.buffered = !0),
                        Object.keys(this.timeRanges).forEach(function (r) {
                          if (e.hasElementaryStream(r)) {
                            var o = t.timeRanges[r];
                            n.range[r] = t.getBufferedTimes(
                              e.startPTS,
                              e.endPTS,
                              o
                            );
                          }
                        }));
                    }),
                    (o.getBufferedTimes = function (e, t, r) {
                      for (var n, o, l = [], d = !1, i = 0; i < r.length; i++) {
                        if (
                          ((n = r.start(i) - this.bufferPadding),
                          (o = r.end(i) + this.bufferPadding),
                          e >= n && t <= o)
                        ) {
                          l.push({
                            startPTS: Math.max(e, r.start(i)),
                            endPTS: Math.min(t, r.end(i)),
                          });
                          break;
                        }
                        if (e < o && t > n)
                          l.push({
                            startPTS: Math.max(e, r.start(i)),
                            endPTS: Math.min(t, r.end(i)),
                          }),
                            (d = !0);
                        else if (t <= n) break;
                      }
                      return { time: l, partial: d };
                    }),
                    (o.getFragmentKey = function (e) {
                      return (
                        e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
                      );
                    }),
                    (o.getPartialFragment = function (time) {
                      var e,
                        t,
                        r,
                        n = this,
                        o = null,
                        l = 0;
                      return (
                        Object.keys(this.fragments).forEach(function (d) {
                          var c = n.fragments[d];
                          n.isPartial(c) &&
                            ((t = c.body.startPTS - n.bufferPadding),
                            (r = c.body.endPTS + n.bufferPadding),
                            time >= t &&
                              time <= r &&
                              ((e = Math.min(time - t, r - time)),
                              l <= e && ((o = c.body), (l = e))));
                        }),
                        o
                      );
                    }),
                    (o.getState = function (e) {
                      var t = this.getFragmentKey(e),
                        r = this.fragments[t],
                        n = V;
                      return (
                        void 0 !== r &&
                          (n = r.buffered
                            ? !0 === this.isPartial(r)
                              ? W
                              : z
                            : Y),
                        n
                      );
                    }),
                    (o.isPartial = function (e) {
                      return (
                        !0 === e.buffered &&
                        ((void 0 !== e.range.video &&
                          !0 === e.range.video.partial) ||
                          (void 0 !== e.range.audio &&
                            !0 === e.range.audio.partial))
                      );
                    }),
                    (o.isTimeBuffered = function (e, t, r) {
                      for (var n, o, i = 0; i < r.length; i++) {
                        if (
                          ((n = r.start(i) - this.bufferPadding),
                          (o = r.end(i) + this.bufferPadding),
                          e >= n && t <= o)
                        )
                          return !0;
                        if (t <= n) return !1;
                      }
                      return !1;
                    }),
                    (o.onFragLoaded = function (e) {
                      var t = e.frag;
                      Object(f.isFiniteNumber)(t.sn) &&
                        !t.bitrateTest &&
                        (this.fragments[this.getFragmentKey(t)] = {
                          body: t,
                          range: Object.create(null),
                          buffered: !1,
                        });
                    }),
                    (o.onBufferAppended = function (e) {
                      var t = this;
                      (this.timeRanges = e.timeRanges),
                        Object.keys(this.timeRanges).forEach(function (e) {
                          var r = t.timeRanges[e];
                          t.detectEvictedFragments(e, r);
                        });
                    }),
                    (o.onFragBuffered = function (e) {
                      this.detectPartialFragments(e.frag);
                    }),
                    (o.hasFragment = function (e) {
                      var t = this.getFragmentKey(e);
                      return void 0 !== this.fragments[t];
                    }),
                    (o.removeFragment = function (e) {
                      var t = this.getFragmentKey(e);
                      delete this.fragments[t];
                    }),
                    (o.removeAllFragments = function () {
                      this.fragments = Object.create(null);
                    }),
                    n
                  );
                })(y),
                Q = {
                  search: function (e, t) {
                    for (
                      var r = 0, n = e.length - 1, o = null, l = null;
                      r <= n;

                    ) {
                      var d = t((l = e[(o = ((r + n) / 2) | 0)]));
                      if (d > 0) r = o + 1;
                      else {
                        if (!(d < 0)) return l;
                        n = o - 1;
                      }
                    }
                    return null;
                  },
                },
                J = (function () {
                  function e() {}
                  return (
                    (e.isBuffered = function (e, t) {
                      try {
                        if (e)
                          for (var r = e.buffered, i = 0; i < r.length; i++)
                            if (t >= r.start(i) && t <= r.end(i)) return !0;
                      } catch (e) {}
                      return !1;
                    }),
                    (e.bufferInfo = function (e, t, r) {
                      try {
                        if (e) {
                          var i,
                            n = e.buffered,
                            o = [];
                          for (i = 0; i < n.length; i++)
                            o.push({ start: n.start(i), end: n.end(i) });
                          return this.bufferedInfo(o, t, r);
                        }
                      } catch (e) {}
                      return { len: 0, start: t, end: t, nextStart: void 0 };
                    }),
                    (e.bufferedInfo = function (e, t, r) {
                      e.sort(function (a, b) {
                        var e = a.start - b.start;
                        return e || b.end - a.end;
                      });
                      var n = [];
                      if (r)
                        for (var i = 0; i < e.length; i++) {
                          var o = n.length;
                          if (o) {
                            var l = n[o - 1].end;
                            e[i].start - l < r
                              ? e[i].end > l && (n[o - 1].end = e[i].end)
                              : n.push(e[i]);
                          } else n.push(e[i]);
                        }
                      else n = e;
                      for (
                        var d, c = 0, f = t, h = t, v = 0;
                        v < n.length;
                        v++
                      ) {
                        var m = n[v].start,
                          y = n[v].end;
                        if (t + r >= m && t < y) (f = m), (c = (h = y) - t);
                        else if (t + r < m) {
                          d = m;
                          break;
                        }
                      }
                      return { len: c, start: f, end: h, nextStart: d };
                    }),
                    e
                  );
                })(),
                $ = r("./node_modules/eventemitter3/index.js"),
                Z = r("./node_modules/webworkify-webpack/index.js"),
                ee = r("./src/demux/demuxer-inline.js");
              function te() {
                return window.MediaSource || window.WebKitMediaSource;
              }
              var re = r("./src/utils/get-self-scope.js"),
                ie = (function (e) {
                  var t, r;
                  function n() {
                    return e.apply(this, arguments) || this;
                  }
                  return (
                    (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r),
                    (n.prototype.trigger = function (e) {
                      for (
                        var t = arguments.length,
                          data = new Array(t > 1 ? t - 1 : 0),
                          r = 1;
                        r < t;
                        r++
                      )
                        data[r - 1] = arguments[r];
                      this.emit.apply(this, [e, e].concat(data));
                    }),
                    n
                  );
                })($.EventEmitter),
                ae = Object(re.getSelfScope)(),
                ne = te() || {
                  isTypeSupported: function () {
                    return !1;
                  },
                },
                se = (function () {
                  function e(e, t) {
                    var r = this;
                    (this.hls = e), (this.id = t);
                    var n = (this.observer = new ie()),
                      o = e.config,
                      l = function (t, data) {
                        ((data = data || {}).frag = r.frag),
                          (data.id = r.id),
                          e.trigger(t, data);
                      };
                    n.on(h.default.FRAG_DECRYPTED, l),
                      n.on(h.default.FRAG_PARSING_INIT_SEGMENT, l),
                      n.on(h.default.FRAG_PARSING_DATA, l),
                      n.on(h.default.FRAG_PARSED, l),
                      n.on(h.default.ERROR, l),
                      n.on(h.default.FRAG_PARSING_METADATA, l),
                      n.on(h.default.FRAG_PARSING_USERDATA, l),
                      n.on(h.default.INIT_PTS_FOUND, l);
                    var d = {
                        mp4: ne.isTypeSupported("video/mp4"),
                        mpeg: ne.isTypeSupported("audio/mpeg"),
                        mp3: ne.isTypeSupported('audio/mp4; codecs="mp3"'),
                      },
                      f = navigator.vendor;
                    if (o.enableWorker && "undefined" != typeof Worker) {
                      var m;
                      v.logger.log("demuxing in webworker");
                      try {
                        (m = this.w = Z("./src/demux/demuxer-worker.js")),
                          (this.onwmsg = this.onWorkerMessage.bind(this)),
                          m.addEventListener("message", this.onwmsg),
                          (m.onerror = function (t) {
                            e.trigger(h.default.ERROR, {
                              type: c.ErrorTypes.OTHER_ERROR,
                              details: c.ErrorDetails.INTERNAL_EXCEPTION,
                              fatal: !0,
                              event: "demuxerWorker",
                              err: {
                                message:
                                  t.message +
                                  " (" +
                                  t.filename +
                                  ":" +
                                  t.lineno +
                                  ")",
                              },
                            });
                          }),
                          m.postMessage({
                            cmd: "init",
                            typeSupported: d,
                            vendor: f,
                            id: t,
                            config: JSON.stringify(o),
                          });
                      } catch (e) {
                        v.logger.warn("Error in worker:", e),
                          v.logger.error(
                            "Error while initializing DemuxerWorker, fallback on DemuxerInline"
                          ),
                          m && ae.URL.revokeObjectURL(m.objectURL),
                          (this.demuxer = new ee.default(n, d, o, f)),
                          (this.w = void 0);
                      }
                    } else this.demuxer = new ee.default(n, d, o, f);
                  }
                  var t = e.prototype;
                  return (
                    (t.destroy = function () {
                      var e = this.w;
                      if (e)
                        e.removeEventListener("message", this.onwmsg),
                          e.terminate(),
                          (this.w = null);
                      else {
                        var t = this.demuxer;
                        t && (t.destroy(), (this.demuxer = null));
                      }
                      var r = this.observer;
                      r && (r.removeAllListeners(), (this.observer = null));
                    }),
                    (t.push = function (data, e, t, r, n, o, l, d) {
                      var c = this.w,
                        h = Object(f.isFiniteNumber)(n.startPTS)
                          ? n.startPTS
                          : n.start,
                        m = n.decryptdata,
                        y = this.frag,
                        E = !(y && n.cc === y.cc),
                        T = !(y && n.level === y.level),
                        S = y && n.sn === y.sn + 1,
                        _ = !T && S;
                      if (
                        (E && v.logger.log(this.id + ":discontinuity detected"),
                        T && v.logger.log(this.id + ":switch detected"),
                        (this.frag = n),
                        c)
                      )
                        c.postMessage(
                          {
                            cmd: "demux",
                            data: data,
                            decryptdata: m,
                            initSegment: e,
                            audioCodec: t,
                            videoCodec: r,
                            timeOffset: h,
                            discontinuity: E,
                            trackSwitch: T,
                            contiguous: _,
                            duration: o,
                            accurateTimeOffset: l,
                            defaultInitPTS: d,
                          },
                          data instanceof ArrayBuffer ? [data] : []
                        );
                      else {
                        var A = this.demuxer;
                        A && A.push(data, m, e, t, r, h, E, T, _, o, l, d);
                      }
                    }),
                    (t.onWorkerMessage = function (e) {
                      var data = e.data,
                        t = this.hls;
                      switch (data.event) {
                        case "init":
                          ae.URL.revokeObjectURL(this.w.objectURL);
                          break;
                        case h.default.FRAG_PARSING_DATA:
                          (data.data.data1 = new Uint8Array(data.data1)),
                            data.data2 &&
                              (data.data.data2 = new Uint8Array(data.data2));
                        default:
                          (data.data = data.data || {}),
                            (data.data.frag = this.frag),
                            (data.data.id = this.id),
                            t.trigger(data.event, data.data);
                      }
                    }),
                    e
                  );
                })();
              function oe(e, t, r) {
                switch (t) {
                  case "audio":
                    e.audioGroupIds || (e.audioGroupIds = []),
                      e.audioGroupIds.push(r);
                    break;
                  case "text":
                    e.textGroupIds || (e.textGroupIds = []),
                      e.textGroupIds.push(r);
                }
              }
              function le(e, t, r) {
                var n = e[t],
                  o = e[r],
                  l = o.startPTS;
                Object(f.isFiniteNumber)(l)
                  ? r > t
                    ? ((n.duration = l - n.start),
                      n.duration < 0 &&
                        v.logger.warn(
                          "negative duration computed for frag " +
                            n.sn +
                            ",level " +
                            n.level +
                            ", there should be some duration drift between playlist and fragment!"
                        ))
                    : ((o.duration = n.start - l),
                      o.duration < 0 &&
                        v.logger.warn(
                          "negative duration computed for frag " +
                            o.sn +
                            ",level " +
                            o.level +
                            ", there should be some duration drift between playlist and fragment!"
                        ))
                  : (o.start =
                      r > t
                        ? n.start + n.duration
                        : Math.max(n.start - o.duration, 0));
              }
              function ue(details, e, t, r, n, o) {
                var l = t;
                if (Object(f.isFiniteNumber)(e.startPTS)) {
                  var d = Math.abs(e.startPTS - t);
                  Object(f.isFiniteNumber)(e.deltaPTS)
                    ? (e.deltaPTS = Math.max(d, e.deltaPTS))
                    : (e.deltaPTS = d),
                    (l = Math.max(t, e.startPTS)),
                    (t = Math.min(t, e.startPTS)),
                    (r = Math.max(r, e.endPTS)),
                    (n = Math.min(n, e.startDTS)),
                    (o = Math.max(o, e.endDTS));
                }
                var c = t - e.start;
                (e.start = e.startPTS = t),
                  (e.maxStartPTS = l),
                  (e.endPTS = r),
                  (e.startDTS = n),
                  (e.endDTS = o),
                  (e.duration = r - t);
                var h,
                  v,
                  i,
                  m = e.sn;
                if (!details || m < details.startSN || m > details.endSN)
                  return 0;
                for (
                  h = m - details.startSN,
                    (v = details.fragments)[h] = e,
                    i = h;
                  i > 0;
                  i--
                )
                  le(v, i, i - 1);
                for (i = h; i < v.length - 1; i++) le(v, i, i + 1);
                return (details.PTSKnown = !0), c;
              }
              function de(e, t) {
                t.initSegment &&
                  e.initSegment &&
                  (t.initSegment = e.initSegment);
                var r,
                  n = 0;
                if (
                  (ce(e, t, function (e, o) {
                    (n = e.cc - o.cc),
                      Object(f.isFiniteNumber)(e.startPTS) &&
                        ((o.start = o.startPTS = e.startPTS),
                        (o.endPTS = e.endPTS),
                        (o.duration = e.duration),
                        (o.backtracked = e.backtracked),
                        (o.dropped = e.dropped),
                        (r = o)),
                      (t.PTSKnown = !0);
                  }),
                  t.PTSKnown)
                ) {
                  if (n) {
                    v.logger.log(
                      "discontinuity sliding from playlist, take drift into account"
                    );
                    for (var o = t.fragments, i = 0; i < o.length; i++)
                      o[i].cc += n;
                  }
                  r
                    ? ue(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS)
                    : (function (e, t) {
                        var r = t.startSN - e.startSN,
                          n = e.fragments,
                          o = t.fragments;
                        if (!(r < 0 || r > n.length))
                          for (var i = 0; i < o.length; i++)
                            o[i].start += n[r].start;
                      })(e, t),
                    (t.PTSKnown = e.PTSKnown);
                }
              }
              function ce(e, t, r) {
                if (e && t)
                  for (
                    var n = Math.max(e.startSN, t.startSN) - t.startSN,
                      o = Math.min(e.endSN, t.endSN) - t.startSN,
                      l = t.startSN - e.startSN,
                      i = n;
                    i <= o;
                    i++
                  ) {
                    var d = e.fragments[l + i],
                      c = t.fragments[i];
                    if (!d || !c) break;
                    r(d, c, i);
                  }
              }
              function fe(e, t, r) {
                var n =
                    1e3 *
                    (t.averagetargetduration
                      ? t.averagetargetduration
                      : t.targetduration),
                  o = n / 2;
                return (
                  e && t.endSN === e.endSN && (n = o),
                  r && (n = Math.max(o, n - (window.performance.now() - r))),
                  Math.round(n)
                );
              }
              var he = {
                toString: function (e) {
                  for (var t = "", r = e.length, i = 0; i < r; i++)
                    t +=
                      "[" +
                      e.start(i).toFixed(3) +
                      "," +
                      e.end(i).toFixed(3) +
                      "]";
                  return t;
                },
              };
              function ge(e, details) {
                details.fragments.forEach(function (t) {
                  if (t) {
                    var r = t.start + e;
                    (t.start = t.startPTS = r), (t.endPTS = r + t.duration);
                  }
                }),
                  (details.PTSKnown = !0);
              }
              function pe(e, t, details) {
                !(function (e, details, t) {
                  if (
                    (function (e, t, details) {
                      var r = !1;
                      return (
                        t &&
                          t.details &&
                          details &&
                          (details.endCC > details.startCC ||
                            (e && e.cc < details.startCC)) &&
                          (r = !0),
                        r
                      );
                    })(e, t, details)
                  ) {
                    var r = (function (e, t) {
                      var r = e.fragments,
                        n = t.fragments;
                      if (n.length && r.length) {
                        var o = (function (e, t) {
                          for (var r = null, i = 0; i < e.length; i += 1) {
                            var n = e[i];
                            if (n && n.cc === t) {
                              r = n;
                              break;
                            }
                          }
                          return r;
                        })(r, n[0].cc);
                        if (o && (!o || o.startPTS)) return o;
                        v.logger.log("No frag in previous level to align on");
                      } else v.logger.log("No fragments to align");
                    })(t.details, details);
                    r &&
                      (v.logger.log(
                        "Adjusting PTS using last level due to CC increase within current level"
                      ),
                      ge(r.start, details));
                  }
                })(e, details, t),
                  !details.PTSKnown &&
                    t &&
                    (function (details, e) {
                      if (e && e.fragments.length) {
                        if (
                          !details.hasProgramDateTime ||
                          !e.hasProgramDateTime
                        )
                          return;
                        var t = e.fragments[0].programDateTime,
                          r =
                            (details.fragments[0].programDateTime - t) / 1e3 +
                            e.fragments[0].start;
                        Object(f.isFiniteNumber)(r) &&
                          (v.logger.log(
                            "adjusting PTS using programDateTime delta, sliding:" +
                              r.toFixed(3)
                          ),
                          ge(r, details));
                      }
                    })(details, t.details);
              }
              function ve(e, t, r) {
                if (
                  null === t ||
                  !Array.isArray(e) ||
                  !e.length ||
                  !Object(f.isFiniteNumber)(t)
                )
                  return null;
                if (t < (e[0].programDateTime || 0)) return null;
                if (t >= (e[e.length - 1].endProgramDateTime || 0)) return null;
                r = r || 0;
                for (var n = 0; n < e.length; ++n) {
                  var o = e[n];
                  if (Ee(t, r, o)) return o;
                }
                return null;
              }
              function me(e, t, r, n) {
                void 0 === r && (r = 0), void 0 === n && (n = 0);
                var o = e ? t[e.sn - t[0].sn + 1] : null;
                return o && !ye(r, n, o) ? o : Q.search(t, ye.bind(null, r, n));
              }
              function ye(e, t, r) {
                void 0 === e && (e = 0), void 0 === t && (t = 0);
                var n = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
                return r.start + r.duration - n <= e
                  ? 1
                  : r.start - n > e && r.start
                  ? -1
                  : 0;
              }
              function Ee(e, t, r) {
                var n =
                  1e3 * Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
                return (r.endProgramDateTime || 0) - n > e;
              }
              var Te = (function () {
                function e(e, t, r, n) {
                  (this.config = e),
                    (this.media = t),
                    (this.fragmentTracker = r),
                    (this.hls = n),
                    (this.nudgeRetry = 0),
                    (this.stallReported = !1),
                    (this.stalled = null),
                    (this.moved = !1),
                    (this.seeking = !1);
                }
                var t = e.prototype;
                return (
                  (t.poll = function (e) {
                    var t = this.config,
                      r = this.media,
                      n = this.stalled,
                      o = r.currentTime,
                      l = r.seeking,
                      d = this.seeking && !l,
                      c = !this.seeking && l;
                    if (((this.seeking = l), o === e)) {
                      if (
                        ((c || d) && (this.stalled = null),
                        !r.paused &&
                          !r.ended &&
                          0 !== r.playbackRate &&
                          r.buffered.length)
                      ) {
                        var f = J.bufferInfo(r, o, 0),
                          h = f.len > 0,
                          m = f.nextStart || 0;
                        if (h || m) {
                          if (l) {
                            if (f.len > 2 || !m || m - o > 2) return;
                            this.moved = !1;
                          }
                          if (!this.moved && this.stalled) {
                            var y = Math.max(m, f.start || 0) - o;
                            if (y > 0 && y <= 2)
                              return void this._trySkipBufferHole(null);
                          }
                          var E = self.performance.now();
                          if (null !== n) {
                            var T = E - n;
                            !l && T >= 250 && this._reportStall(f.len);
                            var S = J.bufferInfo(r, o, t.maxBufferHole);
                            this._tryFixBufferStall(S, T);
                          } else this.stalled = E;
                        }
                      }
                    } else if (((this.moved = !0), null !== n)) {
                      if (this.stallReported) {
                        var _ = self.performance.now() - n;
                        v.logger.warn(
                          "playback not stuck anymore @" +
                            o +
                            ", after " +
                            Math.round(_) +
                            "ms"
                        ),
                          (this.stallReported = !1);
                      }
                      (this.stalled = null), (this.nudgeRetry = 0);
                    }
                  }),
                  (t._tryFixBufferStall = function (e, t) {
                    var r = this.config,
                      n = this.fragmentTracker,
                      o = this.media.currentTime,
                      l = n.getPartialFragment(o);
                    (l && this._trySkipBufferHole(l)) ||
                      (e.len > r.maxBufferHole &&
                        t > 1e3 * r.highBufferWatchdogPeriod &&
                        (v.logger.warn(
                          "Trying to nudge playhead over buffer-hole"
                        ),
                        (this.stalled = null),
                        this._tryNudgeBuffer()));
                  }),
                  (t._reportStall = function (e) {
                    var t = this.hls,
                      r = this.media;
                    this.stallReported ||
                      ((this.stallReported = !0),
                      v.logger.warn(
                        "Playback stalling at @" +
                          r.currentTime +
                          " due to low buffer"
                      ),
                      t.trigger(h.default.ERROR, {
                        type: c.ErrorTypes.MEDIA_ERROR,
                        details: c.ErrorDetails.BUFFER_STALLED_ERROR,
                        fatal: !1,
                        buffer: e,
                      }));
                  }),
                  (t._trySkipBufferHole = function (e) {
                    for (
                      var t = this.config,
                        r = this.hls,
                        n = this.media,
                        o = n.currentTime,
                        l = 0,
                        i = 0;
                      i < n.buffered.length;
                      i++
                    ) {
                      var d = n.buffered.start(i);
                      if (o + t.maxBufferHole >= l && o < d) {
                        var f = Math.max(d + 0.05, n.currentTime + 0.1);
                        return (
                          v.logger.warn(
                            "skipping hole, adjusting currentTime from " +
                              o +
                              " to " +
                              f
                          ),
                          (this.moved = !0),
                          (this.stalled = null),
                          (n.currentTime = f),
                          e &&
                            r.trigger(h.default.ERROR, {
                              type: c.ErrorTypes.MEDIA_ERROR,
                              details: c.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                              fatal: !1,
                              reason:
                                "fragment loaded with buffer holes, seeking from " +
                                o +
                                " to " +
                                f,
                              frag: e,
                            }),
                          f
                        );
                      }
                      l = n.buffered.end(i);
                    }
                    return 0;
                  }),
                  (t._tryNudgeBuffer = function () {
                    var e = this.config,
                      t = this.hls,
                      r = this.media,
                      n = r.currentTime,
                      o = (this.nudgeRetry || 0) + 1;
                    if (((this.nudgeRetry = o), o < e.nudgeMaxRetry)) {
                      var l = n + o * e.nudgeOffset;
                      v.logger.warn(
                        "Nudging 'currentTime' from " + n + " to " + l
                      ),
                        (r.currentTime = l),
                        t.trigger(h.default.ERROR, {
                          type: c.ErrorTypes.MEDIA_ERROR,
                          details: c.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                          fatal: !1,
                        });
                    } else
                      v.logger.error(
                        "Playhead still not moving while enough data buffered @" +
                          n +
                          " after " +
                          e.nudgeMaxRetry +
                          " nudges"
                      ),
                        t.trigger(h.default.ERROR, {
                          type: c.ErrorTypes.MEDIA_ERROR,
                          details: c.ErrorDetails.BUFFER_STALLED_ERROR,
                          fatal: !0,
                        });
                  }),
                  e
                );
              })();
              function be(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              }
              var Se = (function (e) {
                  var t, r;
                  function n(t) {
                    for (
                      var r,
                        n = arguments.length,
                        o = new Array(n > 1 ? n - 1 : 0),
                        l = 1;
                      l < n;
                      l++
                    )
                      o[l - 1] = arguments[l];
                    return (
                      ((r =
                        e.call.apply(e, [this, t].concat(o)) ||
                        this)._boundTick = void 0),
                      (r._tickTimer = null),
                      (r._tickInterval = null),
                      (r._tickCallCount = 0),
                      (r._boundTick = r.tick.bind(be(r))),
                      r
                    );
                  }
                  (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r);
                  var o = n.prototype;
                  return (
                    (o.onHandlerDestroying = function () {
                      this.clearNextTick(), this.clearInterval();
                    }),
                    (o.hasInterval = function () {
                      return !!this._tickInterval;
                    }),
                    (o.hasNextTick = function () {
                      return !!this._tickTimer;
                    }),
                    (o.setInterval = function (e) {
                      return (
                        !this._tickInterval &&
                        ((this._tickInterval = self.setInterval(
                          this._boundTick,
                          e
                        )),
                        !0)
                      );
                    }),
                    (o.clearInterval = function () {
                      return (
                        !!this._tickInterval &&
                        (self.clearInterval(this._tickInterval),
                        (this._tickInterval = null),
                        !0)
                      );
                    }),
                    (o.clearNextTick = function () {
                      return (
                        !!this._tickTimer &&
                        (self.clearTimeout(this._tickTimer),
                        (this._tickTimer = null),
                        !0)
                      );
                    }),
                    (o.tick = function () {
                      this._tickCallCount++,
                        1 === this._tickCallCount &&
                          (this.doTick(),
                          this._tickCallCount > 1 &&
                            (this.clearNextTick(),
                            (this._tickTimer = self.setTimeout(
                              this._boundTick,
                              0
                            ))),
                          (this._tickCallCount = 0));
                    }),
                    (o.doTick = function () {}),
                    n
                  );
                })(y),
                _e = "STOPPED",
                Ae = "STARTING",
                Re = "IDLE",
                we = "PAUSED",
                ke = "KEY_LOADING",
                Le = "FRAG_LOADING",
                De = "FRAG_LOADING_WAITING_RETRY",
                Ce = "WAITING_TRACK",
                Oe = "PARSING",
                Ie = "PARSED",
                xe = "BUFFER_FLUSHING",
                Pe = "ENDED",
                Fe = "ERROR",
                Me = "WAITING_INIT_PTS",
                Ne = "WAITING_LEVEL",
                Ue = (function (e) {
                  var t, r;
                  function n() {
                    return e.apply(this, arguments) || this;
                  }
                  (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r);
                  var o = n.prototype;
                  return (
                    (o.doTick = function () {}),
                    (o.startLoad = function () {}),
                    (o.stopLoad = function () {
                      var e = this.fragCurrent;
                      e &&
                        (e.loader && e.loader.abort(),
                        this.fragmentTracker.removeFragment(e)),
                        this.demuxer &&
                          (this.demuxer.destroy(), (this.demuxer = null)),
                        (this.fragCurrent = null),
                        (this.fragPrevious = null),
                        this.clearInterval(),
                        this.clearNextTick(),
                        (this.state = _e);
                    }),
                    (o._streamEnded = function (e, t) {
                      var r = this.fragCurrent,
                        n = this.fragmentTracker;
                      if (
                        !t.live &&
                        r &&
                        !r.backtracked &&
                        r.sn === t.endSN &&
                        !e.nextStart
                      ) {
                        var o = n.getState(r);
                        return o === W || o === z;
                      }
                      return !1;
                    }),
                    (o.onMediaSeeking = function () {
                      var e = this.config,
                        t = this.media,
                        r = this.mediaBuffer,
                        n = this.state,
                        o = t ? t.currentTime : null,
                        l = J.bufferInfo(r || t, o, this.config.maxBufferHole);
                      if (
                        (Object(f.isFiniteNumber)(o) &&
                          v.logger.log("media seeking to " + o.toFixed(3)),
                        n === Le)
                      ) {
                        var d = this.fragCurrent;
                        if (0 === l.len && d) {
                          var c = e.maxFragLookUpTolerance,
                            h = d.start - c,
                            m = d.start + d.duration + c;
                          o < h || o > m
                            ? (d.loader &&
                                (v.logger.log(
                                  "seeking outside of buffer while fragment load in progress, cancel fragment load"
                                ),
                                d.loader.abort()),
                              (this.fragCurrent = null),
                              (this.fragPrevious = null),
                              (this.state = Re))
                            : v.logger.log(
                                "seeking outside of buffer but within currently loaded fragment range"
                              );
                        }
                      } else
                        n === Pe &&
                          (0 === l.len &&
                            ((this.fragPrevious = null),
                            (this.fragCurrent = null)),
                          (this.state = Re));
                      t && (this.lastCurrentTime = o),
                        this.loadedmetadata ||
                          (this.nextLoadPosition = this.startPosition = o),
                        this.tick();
                    }),
                    (o.onMediaEnded = function () {
                      this.startPosition = this.lastCurrentTime = 0;
                    }),
                    (o.onHandlerDestroying = function () {
                      this.stopLoad(),
                        e.prototype.onHandlerDestroying.call(this);
                    }),
                    (o.onHandlerDestroyed = function () {
                      (this.state = _e), (this.fragmentTracker = null);
                    }),
                    (o.computeLivePosition = function (e, t) {
                      var r =
                        void 0 !== this.config.liveSyncDuration
                          ? this.config.liveSyncDuration
                          : this.config.liveSyncDurationCount *
                            t.targetduration;
                      return e + Math.max(0, t.totalduration - r);
                    }),
                    n
                  );
                })(Se);
              function Be(e, t) {
                for (var i = 0; i < t.length; i++) {
                  var r = t[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              var Ge = (function (e) {
                var t, r;
                function n(t, r) {
                  var n;
                  return (
                    ((n =
                      e.call(
                        this,
                        t,
                        h.default.MEDIA_ATTACHED,
                        h.default.MEDIA_DETACHING,
                        h.default.MANIFEST_LOADING,
                        h.default.MANIFEST_PARSED,
                        h.default.LEVEL_LOADED,
                        h.default.KEY_LOADED,
                        h.default.FRAG_LOADED,
                        h.default.FRAG_LOAD_EMERGENCY_ABORTED,
                        h.default.FRAG_PARSING_INIT_SEGMENT,
                        h.default.FRAG_PARSING_DATA,
                        h.default.FRAG_PARSED,
                        h.default.ERROR,
                        h.default.AUDIO_TRACK_SWITCHING,
                        h.default.AUDIO_TRACK_SWITCHED,
                        h.default.BUFFER_CREATED,
                        h.default.BUFFER_APPENDED,
                        h.default.BUFFER_FLUSHED
                      ) || this).fragmentTracker = r),
                    (n.config = t.config),
                    (n.audioCodecSwap = !1),
                    (n._state = _e),
                    (n.stallReported = !1),
                    (n.gapController = null),
                    (n.altAudio = !1),
                    n
                  );
                }
                (r = e),
                  ((t = n).prototype = Object.create(r.prototype)),
                  (t.prototype.constructor = t),
                  (t.__proto__ = r);
                var o,
                  d,
                  m,
                  y = n.prototype;
                return (
                  (y.startLoad = function (e) {
                    if (this.levels) {
                      var t = this.lastCurrentTime,
                        r = this.hls;
                      if (
                        (this.stopLoad(),
                        this.setInterval(100),
                        (this.level = -1),
                        (this.fragLoadError = 0),
                        !this.startFragRequested)
                      ) {
                        var n = r.startLevel;
                        -1 === n && ((n = 0), (this.bitrateTest = !0)),
                          (this.level = r.nextLoadLevel = n),
                          (this.loadedmetadata = !1);
                      }
                      t > 0 &&
                        -1 === e &&
                        (v.logger.log(
                          "override startPosition with lastCurrentTime @" +
                            t.toFixed(3)
                        ),
                        (e = t)),
                        (this.state = Re),
                        (this.nextLoadPosition =
                          this.startPosition =
                          this.lastCurrentTime =
                            e),
                        this.tick();
                    } else (this.forceStartLoad = !0), (this.state = _e);
                  }),
                  (y.stopLoad = function () {
                    (this.forceStartLoad = !1), e.prototype.stopLoad.call(this);
                  }),
                  (y.doTick = function () {
                    switch (this.state) {
                      case xe:
                        this.fragLoadError = 0;
                        break;
                      case Re:
                        this._doTickIdle();
                        break;
                      case Ne:
                        var e = this.levels[this.level];
                        e && e.details && (this.state = Re);
                        break;
                      case De:
                        var t = window.performance.now(),
                          r = this.retryDate;
                        (!r || t >= r || (this.media && this.media.seeking)) &&
                          (v.logger.log(
                            "mediaController: retryDate reached, switch back to IDLE state"
                          ),
                          (this.state = Re));
                    }
                    this._checkBuffer(), this._checkFragmentChanged();
                  }),
                  (y._doTickIdle = function () {
                    var e = this.hls,
                      t = e.config,
                      r = this.media;
                    if (
                      void 0 !== this.levelLastLoaded &&
                      (r || (!this.startFragRequested && t.startFragPrefetch))
                    ) {
                      var n;
                      n = this.loadedmetadata
                        ? r.currentTime
                        : this.nextLoadPosition;
                      var o = e.nextLoadLevel,
                        l = this.levels[o];
                      if (l) {
                        var d,
                          c = l.bitrate;
                        (d = c
                          ? Math.max(
                              (8 * t.maxBufferSize) / c,
                              t.maxBufferLength
                            )
                          : t.maxBufferLength),
                          (d = Math.min(d, t.maxMaxBufferLength));
                        var f = J.bufferInfo(
                            this.mediaBuffer ? this.mediaBuffer : r,
                            n,
                            t.maxBufferHole
                          ),
                          m = f.len;
                        if (!(m >= d)) {
                          v.logger.trace(
                            "buffer length of " +
                              m.toFixed(3) +
                              " is below max of " +
                              d.toFixed(3) +
                              ". checking for more payload ..."
                          ),
                            (this.level = e.nextLoadLevel = o);
                          var y = l.details;
                          if (!y || (y.live && this.levelLastLoaded !== o))
                            this.state = Ne;
                          else {
                            if (this._streamEnded(f, y)) {
                              var data = {};
                              return (
                                this.altAudio && (data.type = "video"),
                                this.hls.trigger(h.default.BUFFER_EOS, data),
                                void (this.state = Pe)
                              );
                            }
                            this._fetchPayloadOrEos(n, f, y);
                          }
                        }
                      }
                    }
                  }),
                  (y._fetchPayloadOrEos = function (e, t, r) {
                    var n = this.fragPrevious,
                      o = this.level,
                      l = r.fragments,
                      d = l.length;
                    if (0 !== d) {
                      var c,
                        f = l[0].start,
                        h = l[d - 1].start + l[d - 1].duration,
                        m = t.end;
                      if (r.initSegment && !r.initSegment.data)
                        c = r.initSegment;
                      else if (r.live) {
                        var y = this.config.initialLiveManifestSize;
                        if (d < y)
                          return void v.logger.warn(
                            "Can not start playback of a level, reason: not enough fragments " +
                              d +
                              " < " +
                              y
                          );
                        if (
                          null ===
                          (c = this._ensureFragmentAtLivePoint(
                            r,
                            m,
                            f,
                            h,
                            n,
                            l,
                            d
                          ))
                        )
                          return;
                      } else m < f && (c = l[0]);
                      c || (c = this._findFragment(f, n, d, l, m, h, r)),
                        c &&
                          (c.encrypted
                            ? (v.logger.log(
                                "Loading key for " +
                                  c.sn +
                                  " of [" +
                                  r.startSN +
                                  " ," +
                                  r.endSN +
                                  "],level " +
                                  o
                              ),
                              this._loadKey(c))
                            : (v.logger.log(
                                "Loading " +
                                  c.sn +
                                  " of [" +
                                  r.startSN +
                                  " ," +
                                  r.endSN +
                                  "],level " +
                                  o +
                                  ", currentTime:" +
                                  e.toFixed(3) +
                                  ",bufferEnd:" +
                                  m.toFixed(3)
                              ),
                              this._loadFragment(c)));
                    }
                  }),
                  (y._ensureFragmentAtLivePoint = function (
                    e,
                    t,
                    r,
                    n,
                    o,
                    l,
                    d
                  ) {
                    var c,
                      f = this.hls.config,
                      h = this.media,
                      m =
                        void 0 !== f.liveMaxLatencyDuration
                          ? f.liveMaxLatencyDuration
                          : f.liveMaxLatencyDurationCount * e.targetduration;
                    if (t < Math.max(r - f.maxFragLookUpTolerance, n - m)) {
                      var y = (this.liveSyncPosition = this.computeLivePosition(
                        r,
                        e
                      ));
                      (t = y),
                        h &&
                          !h.paused &&
                          h.readyState &&
                          h.duration > y &&
                          y > h.currentTime &&
                          (v.logger.log(
                            "buffer end: " +
                              t.toFixed(3) +
                              " is located too far from the end of live sliding playlist, reset currentTime to : " +
                              y.toFixed(3)
                          ),
                          (h.currentTime = y)),
                        (this.nextLoadPosition = y);
                    }
                    if (e.PTSKnown && t > n && h && h.readyState) return null;
                    if (this.startFragRequested && !e.PTSKnown) {
                      if (o)
                        if (e.hasProgramDateTime)
                          v.logger.log(
                            "live playlist, switching playlist, load frag with same PDT: " +
                              o.programDateTime
                          ),
                            (c = ve(
                              l,
                              o.endProgramDateTime,
                              f.maxFragLookUpTolerance
                            ));
                        else {
                          var E = o.sn + 1;
                          if (E >= e.startSN && E <= e.endSN) {
                            var T = l[E - e.startSN];
                            o.cc === T.cc &&
                              ((c = T),
                              v.logger.log(
                                "live playlist, switching playlist, load frag with next SN: " +
                                  c.sn
                              ));
                          }
                          c ||
                            ((c = Q.search(l, function (e) {
                              return o.cc - e.cc;
                            })) &&
                              v.logger.log(
                                "live playlist, switching playlist, load frag with same CC: " +
                                  c.sn
                              ));
                        }
                      c ||
                        ((c = l[Math.min(d - 1, Math.round(d / 2))]),
                        v.logger.log(
                          "live playlist, switching playlist, unknown, load middle frag : " +
                            c.sn
                        ));
                    }
                    return c;
                  }),
                  (y._findFragment = function (e, t, r, n, o, l, d) {
                    var c,
                      f = this.hls.config;
                    if (
                      (c =
                        o < l
                          ? me(
                              t,
                              n,
                              o,
                              o > l - f.maxFragLookUpTolerance
                                ? 0
                                : f.maxFragLookUpTolerance
                            )
                          : n[r - 1])
                    ) {
                      var h = c.sn - d.startSN,
                        m = t && c.level === t.level,
                        y = n[h - 1],
                        E = n[h + 1];
                      if (t && c.sn === t.sn)
                        if (m && !c.backtracked)
                          if (c.sn < d.endSN) {
                            var T = t.deltaPTS;
                            T && T > f.maxBufferHole && t.dropped && h
                              ? ((c = y),
                                v.logger.warn(
                                  "Previous fragment was dropped with large PTS gap between audio and video. Maybe fragment is not starting with a keyframe? Loading previous one to try to overcome this"
                                ))
                              : ((c = E),
                                v.logger.log(
                                  "Re-loading fragment with SN: " + c.sn
                                ));
                          } else c = null;
                        else
                          c.backtracked &&
                            (E && E.backtracked
                              ? (v.logger.warn(
                                  "Already backtracked from fragment " +
                                    E.sn +
                                    ", will not backtrack to fragment " +
                                    c.sn +
                                    ". Loading fragment " +
                                    E.sn
                                ),
                                (c = E))
                              : (v.logger.warn(
                                  "Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"
                                ),
                                (c.dropped = 0),
                                y
                                  ? ((c = y).backtracked = !0)
                                  : h && (c = null)));
                    }
                    return c;
                  }),
                  (y._loadKey = function (e) {
                    (this.state = ke),
                      this.hls.trigger(h.default.KEY_LOADING, { frag: e });
                  }),
                  (y._loadFragment = function (e) {
                    var t = this.fragmentTracker.getState(e);
                    (this.fragCurrent = e),
                      "initSegment" !== e.sn && (this.startFragRequested = !0),
                      Object(f.isFiniteNumber)(e.sn) &&
                        !e.bitrateTest &&
                        (this.nextLoadPosition = e.start + e.duration),
                      e.backtracked || t === V || t === W
                        ? ((e.autoLevel = this.hls.autoLevelEnabled),
                          (e.bitrateTest = this.bitrateTest),
                          this.hls.trigger(h.default.FRAG_LOADING, { frag: e }),
                          this.demuxer ||
                            (this.demuxer = new se(this.hls, "main")),
                          (this.state = Le))
                        : t === Y &&
                          this._reduceMaxBufferLength(e.duration) &&
                          this.fragmentTracker.removeFragment(e);
                  }),
                  (y.getBufferedFrag = function (e) {
                    return this.fragmentTracker.getBufferedFrag(e, l.MAIN);
                  }),
                  (y.followingBufferedFrag = function (e) {
                    return e ? this.getBufferedFrag(e.endPTS + 0.5) : null;
                  }),
                  (y._checkFragmentChanged = function () {
                    var e,
                      t,
                      video = this.media;
                    if (
                      video &&
                      video.readyState &&
                      !1 === video.seeking &&
                      ((t = video.currentTime) > this.lastCurrentTime &&
                        (this.lastCurrentTime = t),
                      J.isBuffered(video, t)
                        ? (e = this.getBufferedFrag(t))
                        : J.isBuffered(video, t + 0.1) &&
                          (e = this.getBufferedFrag(t + 0.1)),
                      e)
                    ) {
                      var r = e;
                      if (r !== this.fragPlaying) {
                        this.hls.trigger(h.default.FRAG_CHANGED, { frag: r });
                        var n = r.level;
                        (this.fragPlaying && this.fragPlaying.level === n) ||
                          this.hls.trigger(h.default.LEVEL_SWITCHED, {
                            level: n,
                          }),
                          (this.fragPlaying = r);
                      }
                    }
                  }),
                  (y.immediateLevelSwitch = function () {
                    if (
                      (v.logger.log("immediateLevelSwitch"),
                      !this.immediateSwitch)
                    ) {
                      this.immediateSwitch = !0;
                      var e,
                        t = this.media;
                      t ? ((e = t.paused), t.pause()) : (e = !0),
                        (this.previouslyPaused = e);
                    }
                    var r = this.fragCurrent;
                    r && r.loader && r.loader.abort(),
                      (this.fragCurrent = null),
                      this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                  }),
                  (y.immediateLevelSwitchEnd = function () {
                    var e = this.media;
                    e &&
                      e.buffered.length &&
                      ((this.immediateSwitch = !1),
                      J.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4),
                      this.previouslyPaused || e.play());
                  }),
                  (y.nextLevelSwitch = function () {
                    var e = this.media;
                    if (e && e.readyState) {
                      var t, r, n;
                      if (
                        ((r = this.getBufferedFrag(e.currentTime)) &&
                          r.startPTS > 1 &&
                          this.flushMainBuffer(0, r.startPTS - 1),
                        e.paused)
                      )
                        t = 0;
                      else {
                        var o = this.hls.nextLoadLevel,
                          l = this.levels[o],
                          d = this.fragLastKbps;
                        t =
                          d && this.fragCurrent
                            ? (this.fragCurrent.duration * l.bitrate) /
                                (1e3 * d) +
                              1
                            : 0;
                      }
                      if (
                        (n = this.getBufferedFrag(e.currentTime + t)) &&
                        (n = this.followingBufferedFrag(n))
                      ) {
                        var c = this.fragCurrent;
                        c && c.loader && c.loader.abort(),
                          (this.fragCurrent = null),
                          this.flushMainBuffer(
                            n.maxStartPTS,
                            Number.POSITIVE_INFINITY
                          );
                      }
                    }
                  }),
                  (y.flushMainBuffer = function (e, t) {
                    this.state = xe;
                    var r = { startOffset: e, endOffset: t };
                    this.altAudio && (r.type = "video"),
                      this.hls.trigger(h.default.BUFFER_FLUSHING, r);
                  }),
                  (y.onMediaAttached = function (data) {
                    var e = (this.media = this.mediaBuffer = data.media);
                    (this.onvseeking = this.onMediaSeeking.bind(this)),
                      (this.onvseeked = this.onMediaSeeked.bind(this)),
                      (this.onvended = this.onMediaEnded.bind(this)),
                      e.addEventListener("seeking", this.onvseeking),
                      e.addEventListener("seeked", this.onvseeked),
                      e.addEventListener("ended", this.onvended);
                    var t = this.config;
                    this.levels &&
                      t.autoStartLoad &&
                      this.hls.startLoad(t.startPosition),
                      (this.gapController = new Te(
                        t,
                        e,
                        this.fragmentTracker,
                        this.hls
                      ));
                  }),
                  (y.onMediaDetaching = function () {
                    var e = this.media;
                    e &&
                      e.ended &&
                      (v.logger.log(
                        "MSE detaching and video ended, reset startPosition"
                      ),
                      (this.startPosition = this.lastCurrentTime = 0));
                    var t = this.levels;
                    t &&
                      t.forEach(function (e) {
                        e.details &&
                          e.details.fragments.forEach(function (e) {
                            e.backtracked = void 0;
                          });
                      }),
                      e &&
                        (e.removeEventListener("seeking", this.onvseeking),
                        e.removeEventListener("seeked", this.onvseeked),
                        e.removeEventListener("ended", this.onvended),
                        (this.onvseeking =
                          this.onvseeked =
                          this.onvended =
                            null)),
                      this.fragmentTracker.removeAllFragments(),
                      (this.media = this.mediaBuffer = null),
                      (this.loadedmetadata = !1),
                      this.stopLoad();
                  }),
                  (y.onMediaSeeked = function () {
                    var e = this.media,
                      t = e ? e.currentTime : void 0;
                    Object(f.isFiniteNumber)(t) &&
                      v.logger.log("media seeked to " + t.toFixed(3)),
                      this.tick();
                  }),
                  (y.onManifestLoading = function () {
                    v.logger.log("trigger BUFFER_RESET"),
                      this.hls.trigger(h.default.BUFFER_RESET),
                      this.fragmentTracker.removeAllFragments(),
                      (this.stalled = !1),
                      (this.startPosition = this.lastCurrentTime = 0);
                  }),
                  (y.onManifestParsed = function (data) {
                    var e,
                      t = !1,
                      r = !1;
                    data.levels.forEach(function (n) {
                      (e = n.audioCodec) &&
                        (-1 !== e.indexOf("mp4a.40.2") && (t = !0),
                        -1 !== e.indexOf("mp4a.40.5") && (r = !0));
                    }),
                      (this.audioCodecSwitch = t && r),
                      this.audioCodecSwitch &&
                        v.logger.log(
                          "both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"
                        ),
                      (this.altAudio = data.altAudio),
                      (this.levels = data.levels),
                      (this.startFragRequested = !1);
                    var n = this.config;
                    (n.autoStartLoad || this.forceStartLoad) &&
                      this.hls.startLoad(n.startPosition);
                  }),
                  (y.onLevelLoaded = function (data) {
                    var e = data.details,
                      t = data.level,
                      r = this.levels[this.levelLastLoaded],
                      n = this.levels[t],
                      o = e.totalduration,
                      l = 0;
                    if (
                      (v.logger.log(
                        "level " +
                          t +
                          " loaded [" +
                          e.startSN +
                          "," +
                          e.endSN +
                          "],duration:" +
                          o
                      ),
                      e.live)
                    ) {
                      var d = n.details;
                      d && e.fragments.length > 0
                        ? (de(d, e),
                          (l = e.fragments[0].start),
                          (this.liveSyncPosition = this.computeLivePosition(
                            l,
                            d
                          )),
                          e.PTSKnown && Object(f.isFiniteNumber)(l)
                            ? v.logger.log(
                                "live playlist sliding:" + l.toFixed(3)
                              )
                            : (v.logger.log(
                                "live playlist - outdated PTS, unknown sliding"
                              ),
                              pe(this.fragPrevious, r, e)))
                        : (v.logger.log(
                            "live playlist - first load, unknown sliding"
                          ),
                          (e.PTSKnown = !1),
                          pe(this.fragPrevious, r, e));
                    } else e.PTSKnown = !1;
                    if (
                      ((n.details = e),
                      (this.levelLastLoaded = t),
                      this.hls.trigger(h.default.LEVEL_UPDATED, {
                        details: e,
                        level: t,
                      }),
                      !1 === this.startFragRequested)
                    ) {
                      if (
                        -1 === this.startPosition ||
                        -1 === this.lastCurrentTime
                      ) {
                        var c = e.startTimeOffset;
                        Object(f.isFiniteNumber)(c)
                          ? (c < 0 &&
                              (v.logger.log(
                                "negative start time offset " +
                                  c +
                                  ", count from end of last fragment"
                              ),
                              (c = l + o + c)),
                            v.logger.log(
                              "start time offset found in playlist, adjust startPosition to " +
                                c
                            ),
                            (this.startPosition = c))
                          : e.live
                          ? ((this.startPosition = this.computeLivePosition(
                              l,
                              e
                            )),
                            v.logger.log(
                              "configure startPosition to " + this.startPosition
                            ))
                          : (this.startPosition = 0),
                          (this.lastCurrentTime = this.startPosition);
                      }
                      this.nextLoadPosition = this.startPosition;
                    }
                    this.state === Ne && (this.state = Re), this.tick();
                  }),
                  (y.onKeyLoaded = function () {
                    this.state === ke && ((this.state = Re), this.tick());
                  }),
                  (y.onFragLoaded = function (data) {
                    var e = this.fragCurrent,
                      t = this.hls,
                      r = this.levels,
                      n = this.media,
                      o = data.frag;
                    if (
                      this.state === Le &&
                      e &&
                      "main" === o.type &&
                      o.level === e.level &&
                      o.sn === e.sn
                    ) {
                      var l = data.stats,
                        d = r[e.level],
                        details = d.details;
                      if (
                        ((this.bitrateTest = !1),
                        (this.stats = l),
                        v.logger.log(
                          "Loaded " +
                            e.sn +
                            " of [" +
                            details.startSN +
                            " ," +
                            details.endSN +
                            "],level " +
                            e.level
                        ),
                        o.bitrateTest && t.nextLoadLevel)
                      )
                        (this.state = Re),
                          (this.startFragRequested = !1),
                          (l.tparsed = l.tbuffered = window.performance.now()),
                          t.trigger(h.default.FRAG_BUFFERED, {
                            stats: l,
                            frag: e,
                            id: "main",
                          }),
                          this.tick();
                      else if ("initSegment" === o.sn)
                        (this.state = Re),
                          (l.tparsed = l.tbuffered = window.performance.now()),
                          (details.initSegment.data = data.payload),
                          t.trigger(h.default.FRAG_BUFFERED, {
                            stats: l,
                            frag: e,
                            id: "main",
                          }),
                          this.tick();
                      else {
                        v.logger.log(
                          "Parsing " +
                            e.sn +
                            " of [" +
                            details.startSN +
                            " ," +
                            details.endSN +
                            "],level " +
                            e.level +
                            ", cc " +
                            e.cc
                        ),
                          (this.state = Oe),
                          (this.pendingBuffering = !0),
                          (this.appended = !1),
                          o.bitrateTest &&
                            ((o.bitrateTest = !1),
                            this.fragmentTracker.onFragLoaded({ frag: o }));
                        var c =
                            !(n && n.seeking) &&
                            (details.PTSKnown || !details.live),
                          f = details.initSegment
                            ? details.initSegment.data
                            : [],
                          m = this._getAudioCodec(d);
                        (this.demuxer =
                          this.demuxer || new se(this.hls, "main")).push(
                          data.payload,
                          f,
                          m,
                          d.videoCodec,
                          e,
                          details.totalduration,
                          c
                        );
                      }
                    }
                    this.fragLoadError = 0;
                  }),
                  (y.onFragParsingInitSegment = function (data) {
                    var e = this.fragCurrent,
                      t = data.frag;
                    if (
                      e &&
                      "main" === data.id &&
                      t.sn === e.sn &&
                      t.level === e.level &&
                      this.state === Oe
                    ) {
                      var r,
                        track,
                        n = data.tracks;
                      if (
                        (n.audio && this.altAudio && delete n.audio,
                        (track = n.audio))
                      ) {
                        var o = this.levels[this.level].audioCodec,
                          l = navigator.userAgent.toLowerCase();
                        o &&
                          this.audioCodecSwap &&
                          (v.logger.log("swapping playlist audio codec"),
                          (o =
                            -1 !== o.indexOf("mp4a.40.5")
                              ? "mp4a.40.2"
                              : "mp4a.40.5")),
                          this.audioCodecSwitch &&
                            1 !== track.metadata.channelCount &&
                            -1 === l.indexOf("firefox") &&
                            (o = "mp4a.40.5"),
                          -1 !== l.indexOf("android") &&
                            "audio/mpeg" !== track.container &&
                            ((o = "mp4a.40.2"),
                            v.logger.log("Android: force audio codec to " + o)),
                          (track.levelCodec = o),
                          (track.id = data.id);
                      }
                      for (r in ((track = n.video) &&
                        ((track.levelCodec =
                          this.levels[this.level].videoCodec),
                        (track.id = data.id)),
                      this.hls.trigger(h.default.BUFFER_CODECS, n),
                      n)) {
                        (track = n[r]),
                          v.logger.log(
                            "main track:" +
                              r +
                              ",container:" +
                              track.container +
                              ",codecs[level/parsed]=[" +
                              track.levelCodec +
                              "/" +
                              track.codec +
                              "]"
                          );
                        var d = track.initSegment;
                        d &&
                          ((this.appended = !0),
                          (this.pendingBuffering = !0),
                          this.hls.trigger(h.default.BUFFER_APPENDING, {
                            type: r,
                            data: d,
                            parent: "main",
                            content: "initSegment",
                          }));
                      }
                      this.tick();
                    }
                  }),
                  (y.onFragParsingData = function (data) {
                    var e = this,
                      t = this.fragCurrent,
                      r = data.frag;
                    if (
                      t &&
                      "main" === data.id &&
                      r.sn === t.sn &&
                      r.level === t.level &&
                      ("audio" !== data.type || !this.altAudio) &&
                      this.state === Oe
                    ) {
                      var n = this.levels[this.level],
                        o = t;
                      if (
                        (Object(f.isFiniteNumber)(data.endPTS) ||
                          ((data.endPTS = data.startPTS + t.duration),
                          (data.endDTS = data.startDTS + t.duration)),
                        !0 === data.hasAudio && o.addElementaryStream(S.AUDIO),
                        !0 === data.hasVideo && o.addElementaryStream(S.VIDEO),
                        v.logger.log(
                          "Parsed " +
                            data.type +
                            ",PTS:[" +
                            data.startPTS.toFixed(3) +
                            "," +
                            data.endPTS.toFixed(3) +
                            "],DTS:[" +
                            data.startDTS.toFixed(3) +
                            "/" +
                            data.endDTS.toFixed(3) +
                            "],nb:" +
                            data.nb +
                            ",dropped:" +
                            (data.dropped || 0)
                        ),
                        "video" === data.type)
                      )
                        if (((o.dropped = data.dropped), o.dropped))
                          if (o.backtracked)
                            v.logger.warn(
                              "Already backtracked on this fragment, appending with the gap",
                              o.sn
                            );
                          else {
                            var l = n.details;
                            if (!l || o.sn !== l.startSN)
                              return (
                                v.logger.warn(
                                  "missing video frame(s), backtracking fragment",
                                  o.sn
                                ),
                                this.fragmentTracker.removeFragment(o),
                                (o.backtracked = !0),
                                (this.nextLoadPosition = data.startPTS),
                                (this.state = Re),
                                (this.fragPrevious = o),
                                void this.tick()
                              );
                            v.logger.warn(
                              "missing video frame(s) on first frag, appending with gap",
                              o.sn
                            );
                          }
                        else o.backtracked = !1;
                      var d = ue(
                          n.details,
                          o,
                          data.startPTS,
                          data.endPTS,
                          data.startDTS,
                          data.endDTS
                        ),
                        c = this.hls;
                      c.trigger(h.default.LEVEL_PTS_UPDATED, {
                        details: n.details,
                        level: this.level,
                        drift: d,
                        type: data.type,
                        start: data.startPTS,
                        end: data.endPTS,
                      }),
                        [data.data1, data.data2].forEach(function (t) {
                          t &&
                            t.length &&
                            e.state === Oe &&
                            ((e.appended = !0),
                            (e.pendingBuffering = !0),
                            c.trigger(h.default.BUFFER_APPENDING, {
                              type: data.type,
                              data: t,
                              parent: "main",
                              content: "data",
                            }));
                        }),
                        this.tick();
                    }
                  }),
                  (y.onFragParsed = function (data) {
                    var e = this.fragCurrent,
                      t = data.frag;
                    e &&
                      "main" === data.id &&
                      t.sn === e.sn &&
                      t.level === e.level &&
                      this.state === Oe &&
                      ((this.stats.tparsed = window.performance.now()),
                      (this.state = Ie),
                      this._checkAppendedParsed());
                  }),
                  (y.onAudioTrackSwitching = function (data) {
                    var e = !!data.url,
                      t = data.id;
                    if (!e) {
                      if (this.mediaBuffer !== this.media) {
                        v.logger.log(
                          "switching on main audio, use media.buffered to schedule main fragment loading"
                        ),
                          (this.mediaBuffer = this.media);
                        var r = this.fragCurrent;
                        r.loader &&
                          (v.logger.log(
                            "switching to main audio track, cancel main fragment load"
                          ),
                          r.loader.abort()),
                          (this.fragCurrent = null),
                          (this.fragPrevious = null),
                          this.demuxer &&
                            (this.demuxer.destroy(), (this.demuxer = null)),
                          (this.state = Re);
                      }
                      var n = this.hls;
                      n.trigger(h.default.BUFFER_FLUSHING, {
                        startOffset: 0,
                        endOffset: Number.POSITIVE_INFINITY,
                        type: "audio",
                      }),
                        n.trigger(h.default.AUDIO_TRACK_SWITCHED, { id: t }),
                        (this.altAudio = !1);
                    }
                  }),
                  (y.onAudioTrackSwitched = function (data) {
                    var e = data.id,
                      t = !!this.hls.audioTracks[e].url;
                    if (t) {
                      var r = this.videoBuffer;
                      r &&
                        this.mediaBuffer !== r &&
                        (v.logger.log(
                          "switching on alternate audio, use video.buffered to schedule main fragment loading"
                        ),
                        (this.mediaBuffer = r));
                    }
                    (this.altAudio = t), this.tick();
                  }),
                  (y.onBufferCreated = function (data) {
                    var e,
                      t,
                      r = data.tracks,
                      n = !1;
                    for (var o in r) {
                      var track = r[o];
                      "main" === track.id
                        ? ((t = o),
                          (e = track),
                          "video" === o && (this.videoBuffer = r[o].buffer))
                        : (n = !0);
                    }
                    n && e
                      ? (v.logger.log(
                          "alternate track found, use " +
                            t +
                            ".buffered to schedule main fragment loading"
                        ),
                        (this.mediaBuffer = e.buffer))
                      : (this.mediaBuffer = this.media);
                  }),
                  (y.onBufferAppended = function (data) {
                    if ("main" === data.parent) {
                      var e = this.state;
                      (e !== Oe && e !== Ie) ||
                        ((this.pendingBuffering = data.pending > 0),
                        this._checkAppendedParsed());
                    }
                  }),
                  (y._checkAppendedParsed = function () {
                    if (
                      !(
                        this.state !== Ie ||
                        (this.appended && this.pendingBuffering)
                      )
                    ) {
                      var e = this.fragCurrent;
                      if (e) {
                        var t = this.mediaBuffer
                          ? this.mediaBuffer
                          : this.media;
                        v.logger.log(
                          "main buffered : " + he.toString(t.buffered)
                        ),
                          (this.fragPrevious = e);
                        var r = this.stats;
                        (r.tbuffered = window.performance.now()),
                          (this.fragLastKbps = Math.round(
                            (8 * r.total) / (r.tbuffered - r.tfirst)
                          )),
                          this.hls.trigger(h.default.FRAG_BUFFERED, {
                            stats: r,
                            frag: e,
                            id: "main",
                          }),
                          (this.state = Re);
                      }
                      this.tick();
                    }
                  }),
                  (y.onError = function (data) {
                    var e = data.frag || this.fragCurrent;
                    if (!e || "main" === e.type) {
                      var t =
                        !!this.media &&
                        J.isBuffered(this.media, this.media.currentTime) &&
                        J.isBuffered(this.media, this.media.currentTime + 0.5);
                      switch (data.details) {
                        case c.ErrorDetails.FRAG_LOAD_ERROR:
                        case c.ErrorDetails.FRAG_LOAD_TIMEOUT:
                        case c.ErrorDetails.KEY_LOAD_ERROR:
                        case c.ErrorDetails.KEY_LOAD_TIMEOUT:
                          if (!data.fatal)
                            if (
                              this.fragLoadError + 1 <=
                              this.config.fragLoadingMaxRetry
                            ) {
                              var r = Math.min(
                                Math.pow(2, this.fragLoadError) *
                                  this.config.fragLoadingRetryDelay,
                                this.config.fragLoadingMaxRetryTimeout
                              );
                              v.logger.warn(
                                "mediaController: frag loading failed, retry in " +
                                  r +
                                  " ms"
                              ),
                                (this.retryDate = window.performance.now() + r),
                                this.loadedmetadata ||
                                  ((this.startFragRequested = !1),
                                  (this.nextLoadPosition = this.startPosition)),
                                this.fragLoadError++,
                                (this.state = De);
                            } else
                              v.logger.error(
                                "mediaController: " +
                                  data.details +
                                  " reaches max retry, redispatch as fatal ..."
                              ),
                                (data.fatal = !0),
                                (this.state = Fe);
                          break;
                        case c.ErrorDetails.LEVEL_LOAD_ERROR:
                        case c.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                          this.state !== Fe &&
                            (data.fatal
                              ? ((this.state = Fe),
                                v.logger.warn(
                                  "streamController: " +
                                    data.details +
                                    ",switch to " +
                                    this.state +
                                    " state ..."
                                ))
                              : data.levelRetry ||
                                this.state !== Ne ||
                                (this.state = Re));
                          break;
                        case c.ErrorDetails.BUFFER_FULL_ERROR:
                          "main" !== data.parent ||
                            (this.state !== Oe && this.state !== Ie) ||
                            (t
                              ? (this._reduceMaxBufferLength(
                                  this.config.maxBufferLength
                                ),
                                (this.state = Re))
                              : (v.logger.warn(
                                  "buffer full error also media.currentTime is not buffered, flush everything"
                                ),
                                (this.fragCurrent = null),
                                this.flushMainBuffer(
                                  0,
                                  Number.POSITIVE_INFINITY
                                )));
                      }
                    }
                  }),
                  (y._reduceMaxBufferLength = function (e) {
                    var t = this.config;
                    return (
                      t.maxMaxBufferLength >= e &&
                      ((t.maxMaxBufferLength /= 2),
                      v.logger.warn(
                        "main:reduce max buffer length to " +
                          t.maxMaxBufferLength +
                          "s"
                      ),
                      !0)
                    );
                  }),
                  (y._checkBuffer = function () {
                    var e = this.media;
                    if (e && 0 !== e.readyState) {
                      var t = (this.mediaBuffer ? this.mediaBuffer : e)
                        .buffered;
                      !this.loadedmetadata && t.length
                        ? ((this.loadedmetadata = !0), this._seekToStartPos())
                        : this.immediateSwitch
                        ? this.immediateLevelSwitchEnd()
                        : this.gapController.poll(this.lastCurrentTime, t);
                    }
                  }),
                  (y.onFragLoadEmergencyAborted = function () {
                    (this.state = Re),
                      this.loadedmetadata ||
                        ((this.startFragRequested = !1),
                        (this.nextLoadPosition = this.startPosition)),
                      this.tick();
                  }),
                  (y.onBufferFlushed = function () {
                    var e = this.mediaBuffer ? this.mediaBuffer : this.media;
                    e &&
                      this.fragmentTracker.detectEvictedFragments(
                        S.VIDEO,
                        e.buffered
                      ),
                      (this.state = Re),
                      (this.fragPrevious = null);
                  }),
                  (y.swapAudioCodec = function () {
                    this.audioCodecSwap = !this.audioCodecSwap;
                  }),
                  (y._seekToStartPos = function () {
                    var e = this.media,
                      t = e.currentTime,
                      r = e.seeking ? t : this.startPosition;
                    t !== r &&
                      r >= 0 &&
                      (v.logger.log(
                        "target start position not buffered, seek to buffered.start(0) " +
                          r +
                          " from current time " +
                          t +
                          " "
                      ),
                      (e.currentTime = r));
                  }),
                  (y._getAudioCodec = function (e) {
                    var t = this.config.defaultAudioCodec || e.audioCodec;
                    return (
                      this.audioCodecSwap &&
                        (v.logger.log("swapping playlist audio codec"),
                        t &&
                          (t =
                            -1 !== t.indexOf("mp4a.40.5")
                              ? "mp4a.40.2"
                              : "mp4a.40.5")),
                      t
                    );
                  }),
                  (o = n),
                  (d = [
                    {
                      key: "state",
                      set: function (e) {
                        if (this.state !== e) {
                          var t = this.state;
                          (this._state = e),
                            v.logger.log(
                              "main stream-controller: " + t + "->" + e
                            ),
                            this.hls.trigger(
                              h.default.STREAM_STATE_TRANSITION,
                              { previousState: t, nextState: e }
                            );
                        }
                      },
                      get: function () {
                        return this._state;
                      },
                    },
                    {
                      key: "currentLevel",
                      get: function () {
                        var e = this.media;
                        if (e) {
                          var t = this.getBufferedFrag(e.currentTime);
                          if (t) return t.level;
                        }
                        return -1;
                      },
                    },
                    {
                      key: "nextBufferedFrag",
                      get: function () {
                        var e = this.media;
                        return e
                          ? this.followingBufferedFrag(
                              this.getBufferedFrag(e.currentTime)
                            )
                          : null;
                      },
                    },
                    {
                      key: "nextLevel",
                      get: function () {
                        var e = this.nextBufferedFrag;
                        return e ? e.level : -1;
                      },
                    },
                    {
                      key: "liveSyncPosition",
                      get: function () {
                        return this._liveSyncPosition;
                      },
                      set: function (e) {
                        this._liveSyncPosition = e;
                      },
                    },
                  ]) && Be(o.prototype, d),
                  m && Be(o, m),
                  n
                );
              })(Ue);
              function je(e, t) {
                for (var i = 0; i < t.length; i++) {
                  var r = t[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              window.performance;
              var Ke,
                He = (function (e) {
                  var t, r;
                  function n(t) {
                    var r;
                    return (
                      ((r =
                        e.call(
                          this,
                          t,
                          h.default.MANIFEST_LOADED,
                          h.default.LEVEL_LOADED,
                          h.default.AUDIO_TRACK_SWITCHED,
                          h.default.FRAG_LOADED,
                          h.default.ERROR
                        ) || this).canload = !1),
                      (r.currentLevelIndex = null),
                      (r.manualLevelIndex = -1),
                      (r.timer = null),
                      (Ke = /chrome|firefox/.test(
                        navigator.userAgent.toLowerCase()
                      )),
                      r
                    );
                  }
                  (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r);
                  var o,
                    l,
                    d,
                    f = n.prototype;
                  return (
                    (f.onHandlerDestroying = function () {
                      this.clearTimer(), (this.manualLevelIndex = -1);
                    }),
                    (f.clearTimer = function () {
                      null !== this.timer &&
                        (clearTimeout(this.timer), (this.timer = null));
                    }),
                    (f.startLoad = function () {
                      var e = this._levels;
                      (this.canload = !0),
                        (this.levelRetryCount = 0),
                        e &&
                          e.forEach(function (e) {
                            e.loadError = 0;
                            var t = e.details;
                            t && t.live && (e.details = void 0);
                          }),
                        null !== this.timer && this.loadLevel();
                    }),
                    (f.stopLoad = function () {
                      this.canload = !1;
                    }),
                    (f.onManifestLoaded = function (data) {
                      var e,
                        t = [],
                        r = [],
                        n = {},
                        o = null,
                        l = !1,
                        d = !1;
                      if (
                        (data.levels.forEach(function (e) {
                          var r = e.attrs;
                          (e.loadError = 0),
                            (e.fragmentError = !1),
                            (l = l || !!e.videoCodec),
                            (d = d || !!e.audioCodec),
                            Ke &&
                              e.audioCodec &&
                              -1 !== e.audioCodec.indexOf("mp4a.40.34") &&
                              (e.audioCodec = void 0),
                            (o = n[e.bitrate])
                              ? o.url.push(e.url)
                              : ((e.url = [e.url]),
                                (e.urlId = 0),
                                (n[e.bitrate] = e),
                                t.push(e)),
                            r &&
                              (r.AUDIO &&
                                ((d = !0), oe(o || e, "audio", r.AUDIO)),
                              r.SUBTITLES && oe(o || e, "text", r.SUBTITLES));
                        }),
                        l &&
                          d &&
                          (t = t.filter(function (e) {
                            return !!e.videoCodec;
                          })),
                        (t = t.filter(function (e) {
                          var t = e.audioCodec,
                            r = e.videoCodec;
                          return (!t || I(t, "audio")) && (!r || I(r, "video"));
                        })),
                        data.audioTracks &&
                          (r = data.audioTracks.filter(function (track) {
                            return (
                              !track.audioCodec || I(track.audioCodec, "audio")
                            );
                          })).forEach(function (track, e) {
                            track.id = e;
                          }),
                        t.length > 0)
                      ) {
                        (e = t[0].bitrate),
                          t.sort(function (a, b) {
                            return a.bitrate - b.bitrate;
                          }),
                          (this._levels = t);
                        for (var i = 0; i < t.length; i++)
                          if (t[i].bitrate === e) {
                            (this._firstLevel = i),
                              v.logger.log(
                                "manifest loaded," +
                                  t.length +
                                  " level(s) found, first bitrate:" +
                                  e
                              );
                            break;
                          }
                        this.hls.trigger(h.default.MANIFEST_PARSED, {
                          levels: t,
                          audioTracks: r,
                          firstLevel: this._firstLevel,
                          stats: data.stats,
                          audio: d,
                          video: l,
                          altAudio: r.some(function (e) {
                            return !!e.url;
                          }),
                        });
                      } else
                        this.hls.trigger(h.default.ERROR, {
                          type: c.ErrorTypes.MEDIA_ERROR,
                          details:
                            c.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                          fatal: !0,
                          url: this.hls.url,
                          reason:
                            "no level with compatible codecs found in manifest",
                        });
                    }),
                    (f.setLevelInternal = function (e) {
                      var t = this._levels,
                        r = this.hls;
                      if (e >= 0 && e < t.length) {
                        if ((this.clearTimer(), this.currentLevelIndex !== e)) {
                          v.logger.log("switching to level " + e),
                            (this.currentLevelIndex = e);
                          var n = t[e];
                          (n.level = e),
                            r.trigger(h.default.LEVEL_SWITCHING, n);
                        }
                        var o = t[e],
                          l = o.details;
                        if (!l || l.live) {
                          var d = o.urlId;
                          r.trigger(h.default.LEVEL_LOADING, {
                            url: o.url[d],
                            level: e,
                            id: d,
                          });
                        }
                      } else
                        r.trigger(h.default.ERROR, {
                          type: c.ErrorTypes.OTHER_ERROR,
                          details: c.ErrorDetails.LEVEL_SWITCH_ERROR,
                          level: e,
                          fatal: !1,
                          reason: "invalid level idx",
                        });
                    }),
                    (f.onError = function (data) {
                      if (data.fatal)
                        data.type === c.ErrorTypes.NETWORK_ERROR &&
                          this.clearTimer();
                      else {
                        var e,
                          t = !1,
                          r = !1;
                        switch (data.details) {
                          case c.ErrorDetails.FRAG_LOAD_ERROR:
                          case c.ErrorDetails.FRAG_LOAD_TIMEOUT:
                          case c.ErrorDetails.KEY_LOAD_ERROR:
                          case c.ErrorDetails.KEY_LOAD_TIMEOUT:
                            (e = data.frag.level), (r = !0);
                            break;
                          case c.ErrorDetails.LEVEL_LOAD_ERROR:
                          case c.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                            (e = data.context.level), (t = !0);
                            break;
                          case c.ErrorDetails.REMUX_ALLOC_ERROR:
                            (e = data.level), (t = !0);
                        }
                        void 0 !== e && this.recoverLevel(data, e, t, r);
                      }
                    }),
                    (f.recoverLevel = function (e, t, r, n) {
                      var o,
                        l,
                        d,
                        c = this,
                        f = this.hls.config,
                        h = e.details,
                        m = this._levels[t];
                      if ((m.loadError++, (m.fragmentError = n), r)) {
                        if (
                          !(this.levelRetryCount + 1 <= f.levelLoadingMaxRetry)
                        )
                          return (
                            v.logger.error(
                              "level controller, cannot recover from " +
                                h +
                                " error"
                            ),
                            (this.currentLevelIndex = null),
                            this.clearTimer(),
                            void (e.fatal = !0)
                          );
                        (l = Math.min(
                          Math.pow(2, this.levelRetryCount) *
                            f.levelLoadingRetryDelay,
                          f.levelLoadingMaxRetryTimeout
                        )),
                          (this.timer = setTimeout(function () {
                            return c.loadLevel();
                          }, l)),
                          (e.levelRetry = !0),
                          this.levelRetryCount++,
                          v.logger.warn(
                            "level controller, " +
                              h +
                              ", retry in " +
                              l +
                              " ms, current retry count is " +
                              this.levelRetryCount
                          );
                      }
                      (r || n) &&
                        ((o = m.url.length) > 1 && m.loadError < o
                          ? ((m.urlId = (m.urlId + 1) % o),
                            (m.details = void 0),
                            v.logger.warn(
                              "level controller, " +
                                h +
                                " for level " +
                                t +
                                ": switching to redundant URL-id " +
                                m.urlId
                            ))
                          : -1 === this.manualLevelIndex
                          ? ((d = 0 === t ? this._levels.length - 1 : t - 1),
                            v.logger.warn(
                              "level controller, " + h + ": switch to " + d
                            ),
                            (this.hls.nextAutoLevel = this.currentLevelIndex =
                              d))
                          : n &&
                            (v.logger.warn(
                              "level controller, " + h + ": reload a fragment"
                            ),
                            (this.currentLevelIndex = null)));
                    }),
                    (f.onFragLoaded = function (e) {
                      var t = e.frag;
                      if (void 0 !== t && "main" === t.type) {
                        var r = this._levels[t.level];
                        void 0 !== r &&
                          ((r.fragmentError = !1),
                          (r.loadError = 0),
                          (this.levelRetryCount = 0));
                      }
                    }),
                    (f.onLevelLoaded = function (data) {
                      var e = this,
                        t = data.level,
                        details = data.details;
                      if (t === this.currentLevelIndex) {
                        var r = this._levels[t];
                        if (
                          (r.fragmentError ||
                            ((r.loadError = 0), (this.levelRetryCount = 0)),
                          details.live)
                        ) {
                          var n = fe(r.details, details, data.stats.trequest);
                          v.logger.log(
                            "live playlist, reload in " + Math.round(n) + " ms"
                          ),
                            (this.timer = setTimeout(function () {
                              return e.loadLevel();
                            }, n));
                        } else this.clearTimer();
                      }
                    }),
                    (f.onAudioTrackSwitched = function (data) {
                      var e = this.hls.audioTracks[data.id].groupId,
                        t = this.hls.levels[this.currentLevelIndex];
                      if (t && t.audioGroupIds) {
                        for (var r = -1, i = 0; i < t.audioGroupIds.length; i++)
                          if (t.audioGroupIds[i] === e) {
                            r = i;
                            break;
                          }
                        r !== t.urlId && ((t.urlId = r), this.startLoad());
                      }
                    }),
                    (f.loadLevel = function () {
                      if (
                        (v.logger.debug("call to loadLevel"),
                        null !== this.currentLevelIndex && this.canload)
                      ) {
                        var e = this._levels[this.currentLevelIndex];
                        if ("object" == typeof e && e.url.length > 0) {
                          var t = this.currentLevelIndex,
                            r = e.urlId,
                            n = e.url[r];
                          v.logger.log(
                            "Attempt loading level index " +
                              t +
                              " with URL-id " +
                              r
                          ),
                            this.hls.trigger(h.default.LEVEL_LOADING, {
                              url: n,
                              level: t,
                              id: r,
                            });
                        }
                      }
                    }),
                    (o = n),
                    (l = [
                      {
                        key: "levels",
                        get: function () {
                          return this._levels;
                        },
                      },
                      {
                        key: "level",
                        get: function () {
                          return this.currentLevelIndex;
                        },
                        set: function (e) {
                          var t = this._levels;
                          t &&
                            ((e = Math.min(e, t.length - 1)),
                            (this.currentLevelIndex === e && t[e].details) ||
                              this.setLevelInternal(e));
                        },
                      },
                      {
                        key: "manualLevel",
                        get: function () {
                          return this.manualLevelIndex;
                        },
                        set: function (e) {
                          (this.manualLevelIndex = e),
                            void 0 === this._startLevel &&
                              (this._startLevel = e),
                            -1 !== e && (this.level = e);
                        },
                      },
                      {
                        key: "firstLevel",
                        get: function () {
                          return this._firstLevel;
                        },
                        set: function (e) {
                          this._firstLevel = e;
                        },
                      },
                      {
                        key: "startLevel",
                        get: function () {
                          if (void 0 === this._startLevel) {
                            var e = this.hls.config.startLevel;
                            return void 0 !== e ? e : this._firstLevel;
                          }
                          return this._startLevel;
                        },
                        set: function (e) {
                          this._startLevel = e;
                        },
                      },
                      {
                        key: "nextLoadLevel",
                        get: function () {
                          return -1 !== this.manualLevelIndex
                            ? this.manualLevelIndex
                            : this.hls.nextAutoLevel;
                        },
                        set: function (e) {
                          (this.level = e),
                            -1 === this.manualLevelIndex &&
                              (this.hls.nextAutoLevel = e);
                        },
                      },
                    ]) && je(o.prototype, l),
                    d && je(o, d),
                    n
                  );
                })(y),
                Ve = r("./src/demux/id3.js");
              function Ye(track, e) {
                var t;
                try {
                  t = new Event("addtrack");
                } catch (e) {
                  (t = document.createEvent("Event")).initEvent(
                    "addtrack",
                    !1,
                    !1
                  );
                }
                (t.track = track), e.dispatchEvent(t);
              }
              function qe(track) {
                if (track && track.cues)
                  for (; track.cues.length > 0; )
                    track.removeCue(track.cues[0]);
              }
              var We = (function (e) {
                  var t, r;
                  function n(t) {
                    var r;
                    return (
                      ((r =
                        e.call(
                          this,
                          t,
                          h.default.MEDIA_ATTACHED,
                          h.default.MEDIA_DETACHING,
                          h.default.FRAG_PARSING_METADATA,
                          h.default.LIVE_BACK_BUFFER_REACHED
                        ) || this).id3Track = void 0),
                      (r.media = void 0),
                      r
                    );
                  }
                  (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r);
                  var o = n.prototype;
                  return (
                    (o.destroy = function () {
                      y.prototype.destroy.call(this);
                    }),
                    (o.onMediaAttached = function (data) {
                      (this.media = data.media), this.media;
                    }),
                    (o.onMediaDetaching = function () {
                      qe(this.id3Track),
                        (this.id3Track = void 0),
                        (this.media = void 0);
                    }),
                    (o.getID3Track = function (e) {
                      for (var i = 0; i < e.length; i++) {
                        var t = e[i];
                        if ("metadata" === t.kind && "id3" === t.label)
                          return Ye(t, this.media), t;
                      }
                      return this.media.addTextTrack("metadata", "id3");
                    }),
                    (o.onFragParsingMetadata = function (data) {
                      var e = data.frag,
                        t = data.samples;
                      this.id3Track ||
                        ((this.id3Track = this.getID3Track(
                          this.media.textTracks
                        )),
                        (this.id3Track.mode = "hidden"));
                      for (
                        var r =
                            window.WebKitDataCue ||
                            window.VTTCue ||
                            window.TextTrackCue,
                          i = 0;
                        i < t.length;
                        i++
                      ) {
                        var n = Ve.default.getID3Frames(t[i].data);
                        if (n) {
                          var o = t[i].pts,
                            l = i < t.length - 1 ? t[i + 1].pts : e.endPTS;
                          o === l
                            ? (l += 1e-4)
                            : o > l &&
                              (v.logger.warn(
                                "detected an id3 sample with endTime < startTime, adjusting endTime to (startTime + 0.25)"
                              ),
                              (l = o + 0.25));
                          for (var d = 0; d < n.length; d++) {
                            var c = n[d];
                            if (!Ve.default.isTimeStampFrame(c)) {
                              var f = new r(o, l, "");
                              (f.value = c), this.id3Track.addCue(f);
                            }
                          }
                        }
                      }
                    }),
                    (o.onLiveBackBufferReached = function (e) {
                      var t = e.bufferEnd,
                        r = this.id3Track;
                      if (r && r.cues && r.cues.length) {
                        var n = (function (e, time) {
                          if (time < e[0].endTime) return e[0];
                          if (time > e[e.length - 1].endTime)
                            return e[e.length - 1];
                          for (var t = 0, r = e.length - 1; t <= r; ) {
                            var n = Math.floor((r + t) / 2);
                            if (time < e[n].endTime) r = n - 1;
                            else {
                              if (!(time > e[n].endTime)) return e[n];
                              t = n + 1;
                            }
                          }
                          return e[t].endTime - time < time - e[r].endTime
                            ? e[t]
                            : e[r];
                        })(r.cues, t);
                        if (n) for (; r.cues[0] !== n; ) r.removeCue(r.cues[0]);
                      }
                    }),
                    n
                  );
                })(y),
                ze = (function () {
                  function e(e) {
                    (this.alpha_ = void 0),
                      (this.estimate_ = void 0),
                      (this.totalWeight_ = void 0),
                      (this.alpha_ = e ? Math.exp(Math.log(0.5) / e) : 0),
                      (this.estimate_ = 0),
                      (this.totalWeight_ = 0);
                  }
                  var t = e.prototype;
                  return (
                    (t.sample = function (e, t) {
                      var r = Math.pow(this.alpha_, e);
                      (this.estimate_ = t * (1 - r) + r * this.estimate_),
                        (this.totalWeight_ += e);
                    }),
                    (t.getTotalWeight = function () {
                      return this.totalWeight_;
                    }),
                    (t.getEstimate = function () {
                      if (this.alpha_) {
                        var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
                        return this.estimate_ / e;
                      }
                      return this.estimate_;
                    }),
                    e
                  );
                })(),
                Xe = (function () {
                  function e(e, t, r, n) {
                    (this.hls = void 0),
                      (this.defaultEstimate_ = void 0),
                      (this.minWeight_ = void 0),
                      (this.minDelayMs_ = void 0),
                      (this.slow_ = void 0),
                      (this.fast_ = void 0),
                      (this.hls = e),
                      (this.defaultEstimate_ = n),
                      (this.minWeight_ = 0.001),
                      (this.minDelayMs_ = 50),
                      (this.slow_ = new ze(t)),
                      (this.fast_ = new ze(r));
                  }
                  var t = e.prototype;
                  return (
                    (t.sample = function (e, t) {
                      var r = (e = Math.max(e, this.minDelayMs_)) / 1e3,
                        n = (8 * t) / r;
                      this.fast_.sample(r, n), this.slow_.sample(r, n);
                    }),
                    (t.canEstimate = function () {
                      var e = this.fast_;
                      return e && e.getTotalWeight() >= this.minWeight_;
                    }),
                    (t.getEstimate = function () {
                      return this.canEstimate()
                        ? Math.min(
                            this.fast_.getEstimate(),
                            this.slow_.getEstimate()
                          )
                        : this.defaultEstimate_;
                    }),
                    (t.destroy = function () {}),
                    e
                  );
                })();
              function Qe(e, t) {
                for (var i = 0; i < t.length; i++) {
                  var r = t[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              var Je = window.performance,
                $e = (function (e) {
                  var t, r;
                  function n(t) {
                    var r;
                    return (
                      ((r =
                        e.call(
                          this,
                          t,
                          h.default.FRAG_LOADING,
                          h.default.FRAG_LOADED,
                          h.default.FRAG_BUFFERED,
                          h.default.ERROR
                        ) || this).lastLoadedFragLevel = 0),
                      (r._nextAutoLevel = -1),
                      (r.hls = t),
                      (r.timer = null),
                      (r._bwEstimator = null),
                      (r.onCheck = r._abandonRulesCheck.bind(
                        (function (e) {
                          if (void 0 === e)
                            throw new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called"
                            );
                          return e;
                        })(r)
                      )),
                      r
                    );
                  }
                  (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r);
                  var o,
                    l,
                    d,
                    m = n.prototype;
                  return (
                    (m.destroy = function () {
                      this.clearTimer(), y.prototype.destroy.call(this);
                    }),
                    (m.onFragLoading = function (data) {
                      var e = data.frag;
                      if (
                        "main" === e.type &&
                        (this.timer ||
                          ((this.fragCurrent = e),
                          (this.timer = setInterval(this.onCheck, 100))),
                        !this._bwEstimator)
                      ) {
                        var t,
                          r,
                          n = this.hls,
                          o = n.config,
                          l = e.level;
                        n.levels[l].details.live
                          ? ((t = o.abrEwmaFastLive), (r = o.abrEwmaSlowLive))
                          : ((t = o.abrEwmaFastVoD), (r = o.abrEwmaSlowVoD)),
                          (this._bwEstimator = new Xe(
                            n,
                            r,
                            t,
                            o.abrEwmaDefaultEstimate
                          ));
                      }
                    }),
                    (m._abandonRulesCheck = function () {
                      var e = this.hls,
                        video = e.media,
                        t = this.fragCurrent;
                      if (t) {
                        var r = t.loader,
                          n = e.minAutoLevel;
                        if (!r || (r.stats && r.stats.aborted))
                          return (
                            v.logger.warn(
                              "frag loader destroy or aborted, disarm abandonRules"
                            ),
                            this.clearTimer(),
                            void (this._nextAutoLevel = -1)
                          );
                        var o = r.stats;
                        if (
                          video &&
                          o &&
                          ((!video.paused && 0 !== video.playbackRate) ||
                            !video.readyState) &&
                          t.autoLevel &&
                          t.level
                        ) {
                          var l = Je.now() - o.trequest,
                            d = Math.abs(video.playbackRate);
                          if (l > (500 * t.duration) / d) {
                            var c = e.levels,
                              f = Math.max(
                                1,
                                o.bw ? o.bw / 8 : (1e3 * o.loaded) / l
                              ),
                              m = c[t.level],
                              y = m.realBitrate
                                ? Math.max(m.realBitrate, m.bitrate)
                                : m.bitrate,
                              E = o.total
                                ? o.total
                                : Math.max(
                                    o.loaded,
                                    Math.round((t.duration * y) / 8)
                                  ),
                              T = video.currentTime,
                              S = (E - o.loaded) / f,
                              _ =
                                (J.bufferInfo(video, T, e.config.maxBufferHole)
                                  .end -
                                  T) /
                                d;
                            if (_ < (2 * t.duration) / d && S > _) {
                              var A;
                              for (A = t.level - 1; A > n; A--) {
                                var R = c[A].realBitrate
                                  ? Math.max(c[A].realBitrate, c[A].bitrate)
                                  : c[A].bitrate;
                                if ((t.duration * R) / (6.4 * f) < _) break;
                              }
                              void 0 < S &&
                                (v.logger.warn(
                                  "loading too slow, abort fragment loading and switch to level " +
                                    A +
                                    ":fragLoadedDelay[" +
                                    A +
                                    "]<fragLoadedDelay[" +
                                    (t.level - 1) +
                                    "];bufferStarvationDelay:" +
                                    (void 0).toFixed(1) +
                                    "<" +
                                    S.toFixed(1) +
                                    ":" +
                                    _.toFixed(1)
                                ),
                                (e.nextLoadLevel = A),
                                this._bwEstimator.sample(l, o.loaded),
                                r.abort(),
                                this.clearTimer(),
                                e.trigger(
                                  h.default.FRAG_LOAD_EMERGENCY_ABORTED,
                                  { frag: t, stats: o }
                                ));
                            }
                          }
                        }
                      }
                    }),
                    (m.onFragLoaded = function (data) {
                      var e = data.frag;
                      if ("main" === e.type && Object(f.isFiniteNumber)(e.sn)) {
                        if (
                          (this.clearTimer(),
                          (this.lastLoadedFragLevel = e.level),
                          (this._nextAutoLevel = -1),
                          this.hls.config.abrMaxWithRealBitrate)
                        ) {
                          var t = this.hls.levels[e.level],
                            r =
                              (t.loaded ? t.loaded.bytes : 0) +
                              data.stats.loaded,
                            n =
                              (t.loaded ? t.loaded.duration : 0) +
                              data.frag.duration;
                          (t.loaded = { bytes: r, duration: n }),
                            (t.realBitrate = Math.round((8 * r) / n));
                        }
                        if (data.frag.bitrateTest) {
                          var o = data.stats;
                          (o.tparsed = o.tbuffered = o.tload),
                            this.onFragBuffered(data);
                        }
                      }
                    }),
                    (m.onFragBuffered = function (data) {
                      var e = data.stats,
                        t = data.frag;
                      if (
                        !0 !== e.aborted &&
                        "main" === t.type &&
                        Object(f.isFiniteNumber)(t.sn) &&
                        (!t.bitrateTest || e.tload === e.tbuffered)
                      ) {
                        var r = e.tparsed - e.trequest;
                        v.logger.log(
                          "latency/loading/parsing/append/kbps:" +
                            Math.round(e.tfirst - e.trequest) +
                            "/" +
                            Math.round(e.tload - e.tfirst) +
                            "/" +
                            Math.round(e.tparsed - e.tload) +
                            "/" +
                            Math.round(e.tbuffered - e.tparsed) +
                            "/" +
                            Math.round(
                              (8 * e.loaded) / (e.tbuffered - e.trequest)
                            )
                        ),
                          this._bwEstimator.sample(r, e.loaded),
                          (e.bwEstimate = this._bwEstimator.getEstimate()),
                          t.bitrateTest
                            ? (this.bitrateTestDelay = r / 1e3)
                            : (this.bitrateTestDelay = 0);
                      }
                    }),
                    (m.onError = function (data) {
                      switch (data.details) {
                        case c.ErrorDetails.FRAG_LOAD_ERROR:
                        case c.ErrorDetails.FRAG_LOAD_TIMEOUT:
                          this.clearTimer();
                      }
                    }),
                    (m.clearTimer = function () {
                      clearInterval(this.timer), (this.timer = null);
                    }),
                    (m._findBestLevel = function (e, t, r, n, o, l, d, c, f) {
                      for (var i = o; i >= n; i--) {
                        var h = f[i];
                        if (h) {
                          var m = h.details,
                            y = m ? m.totalduration / m.fragments.length : t,
                            E = !!m && m.live,
                            T = void 0;
                          T = i <= e ? d * r : c * r;
                          var S = f[i].realBitrate
                              ? Math.max(f[i].realBitrate, f[i].bitrate)
                              : f[i].bitrate,
                            _ = (S * y) / T;
                          if (
                            (v.logger.trace(
                              "level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " +
                                i +
                                "/" +
                                Math.round(T) +
                                "/" +
                                S +
                                "/" +
                                y +
                                "/" +
                                l +
                                "/" +
                                _
                            ),
                            T > S &&
                              (!_ || (E && !this.bitrateTestDelay) || _ < l))
                          )
                            return i;
                        }
                      }
                      return -1;
                    }),
                    (o = n),
                    (l = [
                      {
                        key: "nextAutoLevel",
                        get: function () {
                          var e = this._nextAutoLevel,
                            t = this._bwEstimator;
                          if (!(-1 === e || (t && t.canEstimate()))) return e;
                          var r = this._nextABRAutoLevel;
                          return -1 !== e && (r = Math.min(e, r)), r;
                        },
                        set: function (e) {
                          this._nextAutoLevel = e;
                        },
                      },
                      {
                        key: "_nextABRAutoLevel",
                        get: function () {
                          var e = this.hls,
                            t = e.maxAutoLevel,
                            r = e.levels,
                            n = e.config,
                            o = e.minAutoLevel,
                            video = e.media,
                            l = this.lastLoadedFragLevel,
                            d = this.fragCurrent
                              ? this.fragCurrent.duration
                              : 0,
                            c = video ? video.currentTime : 0,
                            f =
                              video && 0 !== video.playbackRate
                                ? Math.abs(video.playbackRate)
                                : 1,
                            h = this._bwEstimator
                              ? this._bwEstimator.getEstimate()
                              : n.abrEwmaDefaultEstimate,
                            m =
                              (J.bufferInfo(video, c, n.maxBufferHole).end -
                                c) /
                              f,
                            y = this._findBestLevel(
                              l,
                              d,
                              h,
                              o,
                              t,
                              m,
                              n.abrBandWidthFactor,
                              n.abrBandWidthUpFactor,
                              r
                            );
                          if (y >= 0) return y;
                          v.logger.trace(
                            "rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering"
                          );
                          var E = d
                              ? Math.min(d, n.maxStarvationDelay)
                              : n.maxStarvationDelay,
                            T = n.abrBandWidthFactor,
                            S = n.abrBandWidthUpFactor;
                          if (0 === m) {
                            var _ = this.bitrateTestDelay;
                            _ &&
                              ((E =
                                (d
                                  ? Math.min(d, n.maxLoadingDelay)
                                  : n.maxLoadingDelay) - _),
                              v.logger.trace(
                                "bitrate test took " +
                                  Math.round(1e3 * _) +
                                  "ms, set first fragment max fetchDuration to " +
                                  Math.round(1e3 * E) +
                                  " ms"
                              ),
                              (T = S = 1));
                          }
                          return (
                            (y = this._findBestLevel(
                              l,
                              d,
                              h,
                              o,
                              t,
                              m + E,
                              T,
                              S,
                              r
                            )),
                            Math.max(y, 0)
                          );
                        },
                      },
                    ]) && Qe(o.prototype, l),
                    d && Qe(o, d),
                    n
                  );
                })(y),
                Ze = te(),
                et = (function (e) {
                  var t, r;
                  function n(t) {
                    var r;
                    return (
                      ((r =
                        e.call(
                          this,
                          t,
                          h.default.MEDIA_ATTACHING,
                          h.default.MEDIA_DETACHING,
                          h.default.MANIFEST_PARSED,
                          h.default.BUFFER_RESET,
                          h.default.BUFFER_APPENDING,
                          h.default.BUFFER_CODECS,
                          h.default.BUFFER_EOS,
                          h.default.BUFFER_FLUSHING,
                          h.default.LEVEL_PTS_UPDATED,
                          h.default.LEVEL_UPDATED
                        ) || this)._msDuration = null),
                      (r._levelDuration = null),
                      (r._levelTargetDuration = 10),
                      (r._live = null),
                      (r._objectUrl = null),
                      (r._needsFlush = !1),
                      (r._needsEos = !1),
                      (r.config = void 0),
                      (r.audioTimestampOffset = void 0),
                      (r.bufferCodecEventsExpected = 0),
                      (r._bufferCodecEventsTotal = 0),
                      (r.media = null),
                      (r.mediaSource = null),
                      (r.segments = []),
                      (r.parent = void 0),
                      (r.appending = !1),
                      (r.appended = 0),
                      (r.appendError = 0),
                      (r.flushBufferCounter = 0),
                      (r.tracks = {}),
                      (r.pendingTracks = {}),
                      (r.sourceBuffer = {}),
                      (r.flushRange = []),
                      (r._onMediaSourceOpen = function () {
                        v.logger.log("media source opened"),
                          r.hls.trigger(h.default.MEDIA_ATTACHED, {
                            media: r.media,
                          });
                        var e = r.mediaSource;
                        e &&
                          e.removeEventListener(
                            "sourceopen",
                            r._onMediaSourceOpen
                          ),
                          r.checkPendingTracks();
                      }),
                      (r._onMediaSourceClose = function () {
                        v.logger.log("media source closed");
                      }),
                      (r._onMediaSourceEnded = function () {
                        v.logger.log("media source ended");
                      }),
                      (r._onSBUpdateEnd = function () {
                        if (r.audioTimestampOffset && r.sourceBuffer.audio) {
                          var e = r.sourceBuffer.audio;
                          v.logger.warn(
                            "change mpeg audio timestamp offset from " +
                              e.timestampOffset +
                              " to " +
                              r.audioTimestampOffset
                          ),
                            (e.timestampOffset = r.audioTimestampOffset),
                            delete r.audioTimestampOffset;
                        }
                        r._needsFlush && r.doFlush(),
                          r._needsEos && r.checkEos(),
                          (r.appending = !1);
                        var t = r.parent,
                          n = r.segments.reduce(function (e, r) {
                            return r.parent === t ? e + 1 : e;
                          }, 0),
                          o = {},
                          l = r.sourceBuffer;
                        for (var d in l) {
                          var c = l[d];
                          if (!c)
                            throw Error(
                              "handling source buffer update end error: source buffer for " +
                                d +
                                " uninitilized and unable to update buffered TimeRanges."
                            );
                          o[d] = c.buffered;
                        }
                        r.hls.trigger(h.default.BUFFER_APPENDED, {
                          parent: t,
                          pending: n,
                          timeRanges: o,
                        }),
                          r._needsFlush || r.doAppending(),
                          r.updateMediaElementDuration(),
                          0 === n && r.flushLiveBackBuffer();
                      }),
                      (r._onSBUpdateError = function (e) {
                        v.logger.error("sourceBuffer error:", e),
                          r.hls.trigger(h.default.ERROR, {
                            type: c.ErrorTypes.MEDIA_ERROR,
                            details: c.ErrorDetails.BUFFER_APPENDING_ERROR,
                            fatal: !1,
                          });
                      }),
                      (r.config = t.config),
                      r
                    );
                  }
                  (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r);
                  var o = n.prototype;
                  return (
                    (o.destroy = function () {
                      y.prototype.destroy.call(this);
                    }),
                    (o.onLevelPtsUpdated = function (data) {
                      var e = data.type,
                        t = this.tracks.audio;
                      if ("audio" === e && t && "audio/mpeg" === t.container) {
                        var r = this.sourceBuffer.audio;
                        if (!r)
                          throw Error(
                            "Level PTS Updated and source buffer for audio uninitalized"
                          );
                        if (Math.abs(r.timestampOffset - data.start) > 0.1) {
                          var n = r.updating;
                          try {
                            r.abort();
                          } catch (e) {
                            v.logger.warn("can not abort audio buffer: " + e);
                          }
                          n
                            ? (this.audioTimestampOffset = data.start)
                            : (v.logger.warn(
                                "change mpeg audio timestamp offset from " +
                                  r.timestampOffset +
                                  " to " +
                                  data.start
                              ),
                              (r.timestampOffset = data.start));
                        }
                      }
                    }),
                    (o.onManifestParsed = function (data) {
                      (this.bufferCodecEventsExpected =
                        this._bufferCodecEventsTotal =
                          data.altAudio ? 2 : 1),
                        v.logger.log(
                          this.bufferCodecEventsExpected +
                            " bufferCodec event(s) expected"
                        );
                    }),
                    (o.onMediaAttaching = function (data) {
                      var e = (this.media = data.media);
                      if (e && Ze) {
                        var t = (this.mediaSource = new Ze());
                        t.addEventListener(
                          "sourceopen",
                          this._onMediaSourceOpen
                        ),
                          t.addEventListener(
                            "sourceended",
                            this._onMediaSourceEnded
                          ),
                          t.addEventListener(
                            "sourceclose",
                            this._onMediaSourceClose
                          ),
                          (e.src = window.URL.createObjectURL(t)),
                          (this._objectUrl = e.src);
                      }
                    }),
                    (o.onMediaDetaching = function () {
                      v.logger.log("media source detaching");
                      var e = this.mediaSource;
                      if (e) {
                        if ("open" === e.readyState)
                          try {
                            e.endOfStream();
                          } catch (e) {
                            v.logger.warn(
                              "onMediaDetaching:" +
                                e.message +
                                " while calling endOfStream"
                            );
                          }
                        e.removeEventListener(
                          "sourceopen",
                          this._onMediaSourceOpen
                        ),
                          e.removeEventListener(
                            "sourceended",
                            this._onMediaSourceEnded
                          ),
                          e.removeEventListener(
                            "sourceclose",
                            this._onMediaSourceClose
                          ),
                          this.media &&
                            (this._objectUrl &&
                              window.URL.revokeObjectURL(this._objectUrl),
                            this.media.src === this._objectUrl
                              ? (this.media.removeAttribute("src"),
                                this.media.load())
                              : v.logger.warn(
                                  "media.src was changed by a third party - skip cleanup"
                                )),
                          (this.mediaSource = null),
                          (this.media = null),
                          (this._objectUrl = null),
                          (this.bufferCodecEventsExpected =
                            this._bufferCodecEventsTotal),
                          (this.pendingTracks = {}),
                          (this.tracks = {}),
                          (this.sourceBuffer = {}),
                          (this.flushRange = []),
                          (this.segments = []),
                          (this.appended = 0);
                      }
                      this.hls.trigger(h.default.MEDIA_DETACHED);
                    }),
                    (o.checkPendingTracks = function () {
                      var e = this.bufferCodecEventsExpected,
                        t = this.pendingTracks,
                        r = Object.keys(t).length;
                      ((r && !e) || 2 === r) &&
                        (this.createSourceBuffers(t),
                        (this.pendingTracks = {}),
                        this.doAppending());
                    }),
                    (o.onBufferReset = function () {
                      var e = this.sourceBuffer;
                      for (var t in e) {
                        var r = e[t];
                        try {
                          r &&
                            (this.mediaSource &&
                              this.mediaSource.removeSourceBuffer(r),
                            r.removeEventListener(
                              "updateend",
                              this._onSBUpdateEnd
                            ),
                            r.removeEventListener(
                              "error",
                              this._onSBUpdateError
                            ));
                        } catch (e) {}
                      }
                      (this.sourceBuffer = {}),
                        (this.flushRange = []),
                        (this.segments = []),
                        (this.appended = 0);
                    }),
                    (o.onBufferCodecs = function (e) {
                      var t = this;
                      Object.keys(this.sourceBuffer).length ||
                        (Object.keys(e).forEach(function (r) {
                          t.pendingTracks[r] = e[r];
                        }),
                        (this.bufferCodecEventsExpected = Math.max(
                          this.bufferCodecEventsExpected - 1,
                          0
                        )),
                        this.mediaSource &&
                          "open" === this.mediaSource.readyState &&
                          this.checkPendingTracks());
                    }),
                    (o.createSourceBuffers = function (e) {
                      var t = this.sourceBuffer,
                        r = this.mediaSource;
                      if (!r)
                        throw Error(
                          "createSourceBuffers called when mediaSource was null"
                        );
                      for (var n in e)
                        if (!t[n]) {
                          var track = e[n];
                          if (!track)
                            throw Error(
                              "source buffer exists for track " +
                                n +
                                ", however track does not"
                            );
                          var o = track.levelCodec || track.codec,
                            l = track.container + ";codecs=" + o;
                          v.logger.log("creating sourceBuffer(" + l + ")");
                          try {
                            var d = (t[n] = r.addSourceBuffer(l));
                            d.addEventListener(
                              "updateend",
                              this._onSBUpdateEnd
                            ),
                              d.addEventListener(
                                "error",
                                this._onSBUpdateError
                              ),
                              (this.tracks[n] = {
                                buffer: d,
                                codec: o,
                                id: track.id,
                                container: track.container,
                                levelCodec: track.levelCodec,
                              });
                          } catch (e) {
                            v.logger.error(
                              "error while trying to add sourceBuffer:" +
                                e.message
                            ),
                              this.hls.trigger(h.default.ERROR, {
                                type: c.ErrorTypes.MEDIA_ERROR,
                                details: c.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                fatal: !1,
                                err: e,
                                mimeType: l,
                              });
                          }
                        }
                      this.hls.trigger(h.default.BUFFER_CREATED, {
                        tracks: this.tracks,
                      });
                    }),
                    (o.onBufferAppending = function (data) {
                      this._needsFlush ||
                        (this.segments
                          ? this.segments.push(data)
                          : (this.segments = [data]),
                        this.doAppending());
                    }),
                    (o.onBufferEos = function (data) {
                      for (var e in this.sourceBuffer)
                        if (!data.type || data.type === e) {
                          var t = this.sourceBuffer[e];
                          t &&
                            !t.ended &&
                            ((t.ended = !0),
                            v.logger.log(e + " sourceBuffer now EOS"));
                        }
                      this.checkEos();
                    }),
                    (o.checkEos = function () {
                      var e = this.sourceBuffer,
                        t = this.mediaSource;
                      if (t && "open" === t.readyState) {
                        for (var r in e) {
                          var n = e[r];
                          if (n) {
                            if (!n.ended) return;
                            if (n.updating) return void (this._needsEos = !0);
                          }
                        }
                        v.logger.log(
                          "all media data are available, signal endOfStream() to MediaSource and stop loading fragment"
                        );
                        try {
                          t.endOfStream();
                        } catch (e) {
                          v.logger.warn(
                            "exception while calling mediaSource.endOfStream()"
                          );
                        }
                        this._needsEos = !1;
                      } else this._needsEos = !1;
                    }),
                    (o.onBufferFlushing = function (data) {
                      data.type
                        ? this.flushRange.push({
                            start: data.startOffset,
                            end: data.endOffset,
                            type: data.type,
                          })
                        : (this.flushRange.push({
                            start: data.startOffset,
                            end: data.endOffset,
                            type: "video",
                          }),
                          this.flushRange.push({
                            start: data.startOffset,
                            end: data.endOffset,
                            type: "audio",
                          })),
                        (this.flushBufferCounter = 0),
                        this.doFlush();
                    }),
                    (o.flushLiveBackBuffer = function () {
                      if (this._live) {
                        var e = this.config.liveBackBufferLength;
                        if (isFinite(e) && !(e < 0))
                          if (this.media)
                            for (
                              var t = this.media.currentTime,
                                r = this.sourceBuffer,
                                n = Object.keys(r),
                                o = t - Math.max(e, this._levelTargetDuration),
                                l = n.length - 1;
                              l >= 0;
                              l--
                            ) {
                              var d = n[l],
                                c = r[d];
                              if (c) {
                                var f = c.buffered;
                                f.length > 0 &&
                                  o > f.start(0) &&
                                  this.removeBufferRange(d, c, 0, o) &&
                                  this.hls.trigger(
                                    h.default.LIVE_BACK_BUFFER_REACHED,
                                    { bufferEnd: o }
                                  );
                              }
                            }
                          else
                            v.logger.error(
                              "flushLiveBackBuffer called without attaching media"
                            );
                      }
                    }),
                    (o.onLevelUpdated = function (e) {
                      var details = e.details;
                      details.fragments.length > 0 &&
                        ((this._levelDuration =
                          details.totalduration + details.fragments[0].start),
                        (this._levelTargetDuration =
                          details.averagetargetduration ||
                          details.targetduration ||
                          10),
                        (this._live = details.live),
                        this.updateMediaElementDuration());
                    }),
                    (o.updateMediaElementDuration = function () {
                      var e,
                        t = this.config;
                      if (
                        null !== this._levelDuration &&
                        this.media &&
                        this.mediaSource &&
                        this.sourceBuffer &&
                        0 !== this.media.readyState &&
                        "open" === this.mediaSource.readyState
                      ) {
                        for (var r in this.sourceBuffer) {
                          var n = this.sourceBuffer[r];
                          if (n && !0 === n.updating) return;
                        }
                        (e = this.media.duration),
                          null === this._msDuration &&
                            (this._msDuration = this.mediaSource.duration),
                          !0 === this._live && !0 === t.liveDurationInfinity
                            ? (v.logger.log(
                                "Media Source duration is set to Infinity"
                              ),
                              (this._msDuration = this.mediaSource.duration =
                                1 / 0))
                            : ((this._levelDuration > this._msDuration &&
                                this._levelDuration > e) ||
                                !Object(f.isFiniteNumber)(e)) &&
                              (v.logger.log(
                                "Updating Media Source duration to " +
                                  this._levelDuration.toFixed(3)
                              ),
                              (this._msDuration = this.mediaSource.duration =
                                this._levelDuration));
                      }
                    }),
                    (o.doFlush = function () {
                      for (; this.flushRange.length; ) {
                        var e = this.flushRange[0];
                        if (!this.flushBuffer(e.start, e.end, e.type))
                          return void (this._needsFlush = !0);
                        this.flushRange.shift(), (this.flushBufferCounter = 0);
                      }
                      if (0 === this.flushRange.length) {
                        this._needsFlush = !1;
                        var t = 0,
                          r = this.sourceBuffer;
                        try {
                          for (var n in r) {
                            var o = r[n];
                            o && (t += o.buffered.length);
                          }
                        } catch (e) {
                          v.logger.error(
                            "error while accessing sourceBuffer.buffered"
                          );
                        }
                        (this.appended = t),
                          this.hls.trigger(h.default.BUFFER_FLUSHED);
                      }
                    }),
                    (o.doAppending = function () {
                      var e = this.config,
                        t = this.hls,
                        r = this.segments,
                        n = this.sourceBuffer;
                      if (Object.keys(n).length) {
                        if (!this.media || this.media.error)
                          return (
                            (this.segments = []),
                            void v.logger.error(
                              "trying to append although a media error occured, flush segment and abort"
                            )
                          );
                        if (!this.appending) {
                          var o = r.shift();
                          if (o)
                            try {
                              var l = n[o.type];
                              if (!l) return void this._onSBUpdateEnd();
                              if (l.updating) return void r.unshift(o);
                              (l.ended = !1),
                                (this.parent = o.parent),
                                l.appendBuffer(o.data),
                                (this.appendError = 0),
                                this.appended++,
                                (this.appending = !0);
                            } catch (n) {
                              v.logger.error(
                                "error while trying to append buffer:" +
                                  n.message
                              ),
                                r.unshift(o);
                              var d = {
                                type: c.ErrorTypes.MEDIA_ERROR,
                                parent: o.parent,
                                details: "",
                                fatal: !1,
                              };
                              22 === n.code
                                ? ((this.segments = []),
                                  (d.details =
                                    c.ErrorDetails.BUFFER_FULL_ERROR))
                                : (this.appendError++,
                                  (d.details =
                                    c.ErrorDetails.BUFFER_APPEND_ERROR),
                                  this.appendError > e.appendErrorMaxRetry &&
                                    (v.logger.log(
                                      "fail " +
                                        e.appendErrorMaxRetry +
                                        " times to append segment in sourceBuffer"
                                    ),
                                    (this.segments = []),
                                    (d.fatal = !0))),
                                t.trigger(h.default.ERROR, d);
                            }
                        }
                      }
                    }),
                    (o.flushBuffer = function (e, t, r) {
                      var n = this.sourceBuffer;
                      if (!Object.keys(n).length) return !0;
                      var o = "null";
                      if (
                        (this.media && (o = this.media.currentTime.toFixed(3)),
                        v.logger.log(
                          "flushBuffer,pos/start/end: " + o + "/" + e + "/" + t
                        ),
                        this.flushBufferCounter >= this.appended)
                      )
                        return (
                          v.logger.warn("abort flushing too many retries"), !0
                        );
                      var l = n[r];
                      if (l) {
                        if (((l.ended = !1), l.updating))
                          return (
                            v.logger.warn(
                              "cannot flush, sb updating in progress"
                            ),
                            !1
                          );
                        if (this.removeBufferRange(r, l, e, t))
                          return this.flushBufferCounter++, !1;
                      }
                      return v.logger.log("buffer flushed"), !0;
                    }),
                    (o.removeBufferRange = function (e, t, r, n) {
                      try {
                        for (var i = 0; i < t.buffered.length; i++) {
                          var o = t.buffered.start(i),
                            l = t.buffered.end(i),
                            d = Math.max(o, r),
                            c = Math.min(l, n);
                          if (Math.min(c, l) - d > 0.5) {
                            var f = "null";
                            return (
                              this.media &&
                                (f = this.media.currentTime.toString()),
                              v.logger.log(
                                "sb remove " +
                                  e +
                                  " [" +
                                  d +
                                  "," +
                                  c +
                                  "], of [" +
                                  o +
                                  "," +
                                  l +
                                  "], pos:" +
                                  f
                              ),
                              t.remove(d, c),
                              !0
                            );
                          }
                        }
                      } catch (e) {
                        v.logger.warn("removeBufferRange failed", e);
                      }
                      return !1;
                    }),
                    n
                  );
                })(y);
              function tt(e, t) {
                for (var i = 0; i < t.length; i++) {
                  var r = t[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              var it = (function (e) {
                  var t, r;
                  function n(t) {
                    var r;
                    return (
                      ((r =
                        e.call(
                          this,
                          t,
                          h.default.FPS_DROP_LEVEL_CAPPING,
                          h.default.MEDIA_ATTACHING,
                          h.default.MANIFEST_PARSED,
                          h.default.BUFFER_CODECS,
                          h.default.MEDIA_DETACHING
                        ) || this).autoLevelCapping = Number.POSITIVE_INFINITY),
                      (r.firstLevel = null),
                      (r.levels = []),
                      (r.media = null),
                      (r.restrictedLevels = []),
                      (r.timer = null),
                      r
                    );
                  }
                  (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r);
                  var o,
                    l,
                    d,
                    c = n.prototype;
                  return (
                    (c.destroy = function () {
                      this.hls.config.capLevelToPlayerSize &&
                        ((this.media = null), this.stopCapping());
                    }),
                    (c.onFpsDropLevelCapping = function (data) {
                      n.isLevelAllowed(
                        data.droppedLevel,
                        this.restrictedLevels
                      ) && this.restrictedLevels.push(data.droppedLevel);
                    }),
                    (c.onMediaAttaching = function (data) {
                      this.media =
                        data.media instanceof window.HTMLVideoElement
                          ? data.media
                          : null;
                    }),
                    (c.onManifestParsed = function (data) {
                      var e = this.hls;
                      (this.restrictedLevels = []),
                        (this.levels = data.levels),
                        (this.firstLevel = data.firstLevel),
                        e.config.capLevelToPlayerSize &&
                          data.video &&
                          this.startCapping();
                    }),
                    (c.onBufferCodecs = function (data) {
                      this.hls.config.capLevelToPlayerSize &&
                        data.video &&
                        this.startCapping();
                    }),
                    (c.onLevelsUpdated = function (data) {
                      this.levels = data.levels;
                    }),
                    (c.onMediaDetaching = function () {
                      this.stopCapping();
                    }),
                    (c.detectPlayerSize = function () {
                      if (this.media) {
                        var e = this.levels ? this.levels.length : 0;
                        if (e) {
                          var t = this.hls;
                          (t.autoLevelCapping = this.getMaxLevel(e - 1)),
                            t.autoLevelCapping > this.autoLevelCapping &&
                              t.streamController.nextLevelSwitch(),
                            (this.autoLevelCapping = t.autoLevelCapping);
                        }
                      }
                    }),
                    (c.getMaxLevel = function (e) {
                      var t = this;
                      if (!this.levels) return -1;
                      var r = this.levels.filter(function (r, o) {
                        return (
                          n.isLevelAllowed(o, t.restrictedLevels) && o <= e
                        );
                      });
                      return n.getMaxLevelByMediaSize(
                        r,
                        this.mediaWidth,
                        this.mediaHeight
                      );
                    }),
                    (c.startCapping = function () {
                      this.timer ||
                        ((this.autoLevelCapping = Number.POSITIVE_INFINITY),
                        (this.hls.firstLevel = this.getMaxLevel(
                          this.firstLevel
                        )),
                        clearInterval(this.timer),
                        (this.timer = setInterval(
                          this.detectPlayerSize.bind(this),
                          1e3
                        )),
                        this.detectPlayerSize());
                    }),
                    (c.stopCapping = function () {
                      (this.restrictedLevels = []),
                        (this.firstLevel = null),
                        (this.autoLevelCapping = Number.POSITIVE_INFINITY),
                        this.timer &&
                          ((this.timer = clearInterval(this.timer)),
                          (this.timer = null));
                    }),
                    (n.isLevelAllowed = function (e, t) {
                      return void 0 === t && (t = []), -1 === t.indexOf(e);
                    }),
                    (n.getMaxLevelByMediaSize = function (e, t, r) {
                      if (!e || (e && !e.length)) return -1;
                      for (
                        var n, o, l = e.length - 1, i = 0;
                        i < e.length;
                        i += 1
                      ) {
                        var d = e[i];
                        if (
                          (d.width >= t || d.height >= r) &&
                          ((n = d),
                          !(o = e[i + 1]) ||
                            n.width !== o.width ||
                            n.height !== o.height)
                        ) {
                          l = i;
                          break;
                        }
                      }
                      return l;
                    }),
                    (o = n),
                    (d = [
                      {
                        key: "contentScaleFactor",
                        get: function () {
                          var e = 1;
                          try {
                            e = window.devicePixelRatio;
                          } catch (e) {}
                          return e;
                        },
                      },
                    ]),
                    (l = [
                      {
                        key: "mediaWidth",
                        get: function () {
                          var e,
                            t = this.media;
                          return (
                            t &&
                              ((e = t.width || t.clientWidth || t.offsetWidth),
                              (e *= n.contentScaleFactor)),
                            e
                          );
                        },
                      },
                      {
                        key: "mediaHeight",
                        get: function () {
                          var e,
                            t = this.media;
                          return (
                            t &&
                              ((e =
                                t.height || t.clientHeight || t.offsetHeight),
                              (e *= n.contentScaleFactor)),
                            e
                          );
                        },
                      },
                    ]) && tt(o.prototype, l),
                    d && tt(o, d),
                    n
                  );
                })(y),
                at = window.performance,
                nt = (function (e) {
                  var t, r;
                  function n(t) {
                    return e.call(this, t, h.default.MEDIA_ATTACHING) || this;
                  }
                  (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r);
                  var o = n.prototype;
                  return (
                    (o.destroy = function () {
                      this.timer && clearInterval(this.timer),
                        (this.isVideoPlaybackQualityAvailable = !1);
                    }),
                    (o.onMediaAttaching = function (data) {
                      var e = this.hls.config;
                      e.capLevelOnFPSDrop &&
                        ("function" ==
                          typeof (this.video =
                            data.media instanceof window.HTMLVideoElement
                              ? data.media
                              : null).getVideoPlaybackQuality &&
                          (this.isVideoPlaybackQualityAvailable = !0),
                        clearInterval(this.timer),
                        (this.timer = setInterval(
                          this.checkFPSInterval.bind(this),
                          e.fpsDroppedMonitoringPeriod
                        )));
                    }),
                    (o.checkFPS = function (video, e, t) {
                      var r = at.now();
                      if (e) {
                        if (this.lastTime) {
                          var n = r - this.lastTime,
                            o = t - this.lastDroppedFrames,
                            l = e - this.lastDecodedFrames,
                            d = (1e3 * o) / n,
                            c = this.hls;
                          if (
                            (c.trigger(h.default.FPS_DROP, {
                              currentDropped: o,
                              currentDecoded: l,
                              totalDroppedFrames: t,
                            }),
                            d > 0 &&
                              o > c.config.fpsDroppedMonitoringThreshold * l)
                          ) {
                            var f = c.currentLevel;
                            v.logger.warn(
                              "drop FPS ratio greater than max allowed value for currentLevel: " +
                                f
                            ),
                              f > 0 &&
                                (-1 === c.autoLevelCapping ||
                                  c.autoLevelCapping >= f) &&
                                ((f -= 1),
                                c.trigger(h.default.FPS_DROP_LEVEL_CAPPING, {
                                  level: f,
                                  droppedLevel: c.currentLevel,
                                }),
                                (c.autoLevelCapping = f),
                                c.streamController.nextLevelSwitch());
                          }
                        }
                        (this.lastTime = r),
                          (this.lastDroppedFrames = t),
                          (this.lastDecodedFrames = e);
                      }
                    }),
                    (o.checkFPSInterval = function () {
                      var video = this.video;
                      if (video)
                        if (this.isVideoPlaybackQualityAvailable) {
                          var e = video.getVideoPlaybackQuality();
                          this.checkFPS(
                            video,
                            e.totalVideoFrames,
                            e.droppedVideoFrames
                          );
                        } else
                          this.checkFPS(
                            video,
                            video.webkitDecodedFrameCount,
                            video.webkitDroppedFrameCount
                          );
                    }),
                    n
                  );
                })(y),
                st = window,
                ot = st.performance,
                lt = st.XMLHttpRequest,
                ut = (function () {
                  function e(e) {
                    e && e.xhrSetup && (this.xhrSetup = e.xhrSetup);
                  }
                  var t = e.prototype;
                  return (
                    (t.destroy = function () {
                      this.abort(), (this.loader = null);
                    }),
                    (t.abort = function () {
                      var e = this.loader;
                      e &&
                        4 !== e.readyState &&
                        ((this.stats.aborted = !0), e.abort()),
                        window.clearTimeout(this.requestTimeout),
                        (this.requestTimeout = null),
                        window.clearTimeout(this.retryTimeout),
                        (this.retryTimeout = null);
                    }),
                    (t.load = function (e, t, r) {
                      (this.context = e),
                        (this.config = t),
                        (this.callbacks = r),
                        (this.stats = { trequest: ot.now(), retry: 0 }),
                        (this.retryDelay = t.retryDelay),
                        this.loadInternal();
                    }),
                    (t.loadInternal = function () {
                      var e,
                        t = this.context;
                      e = this.loader = new lt();
                      var r = this.stats;
                      (r.tfirst = 0), (r.loaded = 0);
                      var n = this.xhrSetup;
                      try {
                        if (n)
                          try {
                            n(e, t.url);
                          } catch (r) {
                            e.open("GET", t.url, !0), n(e, t.url);
                          }
                        e.readyState || e.open("GET", t.url, !0);
                      } catch (r) {
                        return void this.callbacks.onError(
                          { code: e.status, text: r.message },
                          t,
                          e
                        );
                      }
                      t.rangeEnd &&
                        e.setRequestHeader(
                          "Range",
                          "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)
                        ),
                        (e.onreadystatechange =
                          this.readystatechange.bind(this)),
                        (e.onprogress = this.loadprogress.bind(this)),
                        (e.responseType = t.responseType),
                        (this.requestTimeout = window.setTimeout(
                          this.loadtimeout.bind(this),
                          this.config.timeout
                        )),
                        e.send();
                    }),
                    (t.readystatechange = function (e) {
                      var t = e.currentTarget,
                        r = t.readyState,
                        n = this.stats,
                        o = this.context,
                        l = this.config;
                      if (!n.aborted && r >= 2)
                        if (
                          (window.clearTimeout(this.requestTimeout),
                          0 === n.tfirst &&
                            (n.tfirst = Math.max(ot.now(), n.trequest)),
                          4 === r)
                        ) {
                          var d = t.status;
                          if (d >= 200 && d < 300) {
                            var data, c;
                            (n.tload = Math.max(n.tfirst, ot.now())),
                              (c =
                                "arraybuffer" === o.responseType
                                  ? (data = t.response).byteLength
                                  : (data = t.responseText).length),
                              (n.loaded = n.total = c);
                            var f = { url: t.responseURL, data: data };
                            this.callbacks.onSuccess(f, n, o, t);
                          } else
                            n.retry >= l.maxRetry || (d >= 400 && d < 499)
                              ? (v.logger.error(d + " while loading " + o.url),
                                this.callbacks.onError(
                                  { code: d, text: t.statusText },
                                  o,
                                  t
                                ))
                              : (v.logger.warn(
                                  d +
                                    " while loading " +
                                    o.url +
                                    ", retrying in " +
                                    this.retryDelay +
                                    "..."
                                ),
                                this.destroy(),
                                (this.retryTimeout = window.setTimeout(
                                  this.loadInternal.bind(this),
                                  this.retryDelay
                                )),
                                (this.retryDelay = Math.min(
                                  2 * this.retryDelay,
                                  l.maxRetryDelay
                                )),
                                n.retry++);
                        } else
                          this.requestTimeout = window.setTimeout(
                            this.loadtimeout.bind(this),
                            l.timeout
                          );
                    }),
                    (t.loadtimeout = function () {
                      v.logger.warn(
                        "timeout while loading " + this.context.url
                      ),
                        this.callbacks.onTimeout(
                          this.stats,
                          this.context,
                          null
                        );
                    }),
                    (t.loadprogress = function (e) {
                      var t = e.currentTarget,
                        r = this.stats;
                      (r.loaded = e.loaded),
                        e.lengthComputable && (r.total = e.total);
                      var n = this.callbacks.onProgress;
                      n && n(r, this.context, null, t);
                    }),
                    e
                  );
                })();
              function ct(e, t) {
                for (var i = 0; i < t.length; i++) {
                  var r = t[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              var ft = (function (e) {
                var t, r;
                function n(t) {
                  var r;
                  return (
                    ((r =
                      e.call(
                        this,
                        t,
                        h.default.MANIFEST_LOADING,
                        h.default.MANIFEST_PARSED,
                        h.default.AUDIO_TRACK_LOADED,
                        h.default.AUDIO_TRACK_SWITCHED,
                        h.default.LEVEL_LOADED,
                        h.default.ERROR
                      ) || this)._trackId = -1),
                    (r._selectDefaultTrack = !0),
                    (r.tracks = []),
                    (r.trackIdBlacklist = Object.create(null)),
                    (r.audioGroupId = null),
                    r
                  );
                }
                (r = e),
                  ((t = n).prototype = Object.create(r.prototype)),
                  (t.prototype.constructor = t),
                  (t.__proto__ = r);
                var o,
                  l,
                  d,
                  f = n.prototype;
                return (
                  (f.onManifestLoading = function () {
                    (this.tracks = []),
                      (this._trackId = -1),
                      (this._selectDefaultTrack = !0);
                  }),
                  (f.onManifestParsed = function (data) {
                    var e = (this.tracks = data.audioTracks || []);
                    this.hls.trigger(h.default.AUDIO_TRACKS_UPDATED, {
                      audioTracks: e,
                    }),
                      this._selectAudioGroup(this.hls.nextLoadLevel);
                  }),
                  (f.onAudioTrackLoaded = function (data) {
                    if (data.id >= this.tracks.length)
                      v.logger.warn("Invalid audio track id:", data.id);
                    else {
                      if (
                        (v.logger.log("audioTrack " + data.id + " loaded"),
                        (this.tracks[data.id].details = data.details),
                        data.details.live && !this.hasInterval())
                      ) {
                        var e = 1e3 * data.details.targetduration;
                        this.setInterval(e);
                      }
                      !data.details.live &&
                        this.hasInterval() &&
                        this.clearInterval();
                    }
                  }),
                  (f.onAudioTrackSwitched = function (data) {
                    var e = this.tracks[data.id].groupId;
                    e && this.audioGroupId !== e && (this.audioGroupId = e);
                  }),
                  (f.onLevelLoaded = function (data) {
                    this._selectAudioGroup(data.level);
                  }),
                  (f.onError = function (data) {
                    data.type === c.ErrorTypes.NETWORK_ERROR &&
                      (data.fatal && this.clearInterval(),
                      data.details === c.ErrorDetails.AUDIO_TRACK_LOAD_ERROR &&
                        (v.logger.warn(
                          "Network failure on audio-track id:",
                          data.context.id
                        ),
                        this._handleLoadError()));
                  }),
                  (f._setAudioTrack = function (e) {
                    if (
                      this._trackId === e &&
                      this.tracks[this._trackId].details
                    )
                      v.logger.debug(
                        "Same id as current audio-track passed, and track details available -> no-op"
                      );
                    else if (e < 0 || e >= this.tracks.length)
                      v.logger.warn(
                        "Invalid id passed to audio-track controller"
                      );
                    else {
                      var t = this.tracks[e];
                      v.logger.log("Now switching to audio-track index " + e),
                        this.clearInterval(),
                        (this._trackId = e);
                      var r = t.url,
                        n = t.type,
                        o = t.id;
                      this.hls.trigger(h.default.AUDIO_TRACK_SWITCHING, {
                        id: o,
                        type: n,
                        url: r,
                      }),
                        this._loadTrackDetailsIfNeeded(t);
                    }
                  }),
                  (f.doTick = function () {
                    this._updateTrack(this._trackId);
                  }),
                  (f._selectAudioGroup = function (e) {
                    var t = this.hls.levels[e];
                    if (t && t.audioGroupIds) {
                      var r = t.audioGroupIds[t.urlId];
                      this.audioGroupId !== r &&
                        ((this.audioGroupId = r),
                        this._selectInitialAudioTrack());
                    }
                  }),
                  (f._selectInitialAudioTrack = function () {
                    var e = this,
                      t = this.tracks;
                    if (t.length) {
                      var r = this.tracks[this._trackId],
                        n = null;
                      if ((r && (n = r.name), this._selectDefaultTrack)) {
                        var o = t.filter(function (track) {
                          return track.default;
                        });
                        o.length
                          ? (t = o)
                          : v.logger.warn("No default audio tracks defined");
                      }
                      var l = !1,
                        d = function () {
                          t.forEach(function (track) {
                            l ||
                              (e.audioGroupId &&
                                track.groupId !== e.audioGroupId) ||
                              (n && n !== track.name) ||
                              (e._setAudioTrack(track.id), (l = !0));
                          });
                        };
                      d(),
                        l || ((n = null), d()),
                        l ||
                          (v.logger.error(
                            "No track found for running audio group-ID: " +
                              this.audioGroupId
                          ),
                          this.hls.trigger(h.default.ERROR, {
                            type: c.ErrorTypes.MEDIA_ERROR,
                            details: c.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                            fatal: !0,
                          }));
                    }
                  }),
                  (f._needsTrackLoading = function (e) {
                    var details = e.details,
                      t = e.url;
                    return !((details && !details.live) || !t);
                  }),
                  (f._loadTrackDetailsIfNeeded = function (e) {
                    if (this._needsTrackLoading(e)) {
                      var t = e.url,
                        r = e.id;
                      v.logger.log("loading audio-track playlist for id: " + r),
                        this.hls.trigger(h.default.AUDIO_TRACK_LOADING, {
                          url: t,
                          id: r,
                        });
                    }
                  }),
                  (f._updateTrack = function (e) {
                    if (!(e < 0 || e >= this.tracks.length)) {
                      this.clearInterval(),
                        (this._trackId = e),
                        v.logger.log("trying to update audio-track " + e);
                      var t = this.tracks[e];
                      this._loadTrackDetailsIfNeeded(t);
                    }
                  }),
                  (f._handleLoadError = function () {
                    this.trackIdBlacklist[this._trackId] = !0;
                    var e = this._trackId,
                      t = this.tracks[e],
                      r = t.name,
                      n = t.language,
                      o = t.groupId;
                    v.logger.warn(
                      "Loading failed on audio track id: " +
                        e +
                        ", group-id: " +
                        o +
                        ', name/language: "' +
                        r +
                        '" / "' +
                        n +
                        '"'
                    );
                    for (var l = e, i = 0; i < this.tracks.length; i++)
                      if (
                        !this.trackIdBlacklist[i] &&
                        this.tracks[i].name === r
                      ) {
                        l = i;
                        break;
                      }
                    l !== e
                      ? (v.logger.log(
                          "Attempting audio-track fallback id:",
                          l,
                          "group-id:",
                          this.tracks[l].groupId
                        ),
                        this._setAudioTrack(l))
                      : v.logger.warn(
                          'No fallback audio-track found for name/language: "' +
                            r +
                            '" / "' +
                            n +
                            '"'
                        );
                  }),
                  (o = n),
                  (l = [
                    {
                      key: "audioTracks",
                      get: function () {
                        return this.tracks;
                      },
                    },
                    {
                      key: "audioTrack",
                      get: function () {
                        return this._trackId;
                      },
                      set: function (e) {
                        this._setAudioTrack(e), (this._selectDefaultTrack = !1);
                      },
                    },
                  ]) && ct(o.prototype, l),
                  d && ct(o, d),
                  n
                );
              })(Se);
              function ht(e, t) {
                for (var i = 0; i < t.length; i++) {
                  var r = t[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              var gt = window.performance,
                pt = (function (e) {
                  var t, r;
                  function n(t, r) {
                    var n;
                    return (
                      ((n =
                        e.call(
                          this,
                          t,
                          h.default.MEDIA_ATTACHED,
                          h.default.MEDIA_DETACHING,
                          h.default.AUDIO_TRACKS_UPDATED,
                          h.default.AUDIO_TRACK_SWITCHING,
                          h.default.AUDIO_TRACK_LOADED,
                          h.default.KEY_LOADED,
                          h.default.FRAG_LOADED,
                          h.default.FRAG_PARSING_INIT_SEGMENT,
                          h.default.FRAG_PARSING_DATA,
                          h.default.FRAG_PARSED,
                          h.default.ERROR,
                          h.default.BUFFER_RESET,
                          h.default.BUFFER_CREATED,
                          h.default.BUFFER_APPENDED,
                          h.default.BUFFER_FLUSHED,
                          h.default.INIT_PTS_FOUND
                        ) || this).fragmentTracker = r),
                      (n.config = t.config),
                      (n.audioCodecSwap = !1),
                      (n._state = _e),
                      (n.initPTS = []),
                      (n.waitingFragment = null),
                      (n.videoTrackCC = null),
                      n
                    );
                  }
                  (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r);
                  var o,
                    l,
                    d,
                    m = n.prototype;
                  return (
                    (m.onInitPtsFound = function (data) {
                      var e = data.id,
                        t = data.frag.cc,
                        r = data.initPTS;
                      "main" === e &&
                        ((this.initPTS[t] = r),
                        (this.videoTrackCC = t),
                        v.logger.log(
                          "InitPTS for cc: " +
                            t +
                            " found from video track: " +
                            r
                        ),
                        this.state === Me && this.tick());
                    }),
                    (m.startLoad = function (e) {
                      if (this.tracks) {
                        var t = this.lastCurrentTime;
                        this.stopLoad(),
                          this.setInterval(100),
                          (this.fragLoadError = 0),
                          t > 0 && -1 === e
                            ? (v.logger.log(
                                "audio:override startPosition with lastCurrentTime @" +
                                  t.toFixed(3)
                              ),
                              (this.state = Re))
                            : ((this.lastCurrentTime = this.startPosition
                                ? this.startPosition
                                : e),
                              (this.state = Ae)),
                          (this.nextLoadPosition = this.startPosition =
                            this.lastCurrentTime),
                          this.tick();
                      } else (this.startPosition = e), (this.state = _e);
                    }),
                    (m.doTick = function () {
                      var e,
                        track,
                        t,
                        r = this.hls,
                        n = r.config;
                      switch (this.state) {
                        case Fe:
                        case we:
                        case xe:
                          break;
                        case Ae:
                          (this.state = Ce), (this.loadedmetadata = !1);
                          break;
                        case Re:
                          var o = this.tracks;
                          if (!o) break;
                          if (
                            !this.media &&
                            (this.startFragRequested || !n.startFragPrefetch)
                          )
                            break;
                          if (this.loadedmetadata) e = this.media.currentTime;
                          else if (void 0 === (e = this.nextLoadPosition))
                            break;
                          var l = this.mediaBuffer
                              ? this.mediaBuffer
                              : this.media,
                            d = this.videoBuffer
                              ? this.videoBuffer
                              : this.media,
                            c = J.bufferInfo(l, e, n.maxBufferHole),
                            m = J.bufferInfo(d, e, n.maxBufferHole),
                            y = c.len,
                            E = c.end,
                            T = this.fragPrevious,
                            S = Math.min(
                              n.maxBufferLength,
                              n.maxMaxBufferLength
                            ),
                            _ = Math.max(S, m.len),
                            A = this.audioSwitch,
                            R = this.trackId;
                          if ((y < _ || A) && R < o.length) {
                            if (void 0 === (t = o[R].details)) {
                              this.state = Ce;
                              break;
                            }
                            if (!A && this._streamEnded(c, t))
                              return (
                                this.hls.trigger(h.default.BUFFER_EOS, {
                                  type: "audio",
                                }),
                                void (this.state = Pe)
                              );
                            var w,
                              k = t.fragments,
                              L = k.length,
                              D = k[0].start,
                              C = k[L - 1].start + k[L - 1].duration;
                            if (A)
                              if (t.live && !t.PTSKnown)
                                v.logger.log(
                                  "switching audiotrack, live stream, unknown PTS,load first fragment"
                                ),
                                  (E = 0);
                              else if (((E = e), t.PTSKnown && e < D)) {
                                if (!(c.end > D || c.nextStart)) return;
                                v.logger.log(
                                  "alt audio track ahead of main track, seek to start of alt audio track"
                                ),
                                  (this.media.currentTime = D + 0.05);
                              }
                            if (t.initSegment && !t.initSegment.data)
                              w = t.initSegment;
                            else if (E <= D) {
                              if (
                                ((w = k[0]),
                                null !== this.videoTrackCC &&
                                  w.cc !== this.videoTrackCC &&
                                  (w = (function (e, t) {
                                    return Q.search(e, function (e) {
                                      return e.cc < t ? 1 : e.cc > t ? -1 : 0;
                                    });
                                  })(k, this.videoTrackCC)),
                                t.live &&
                                  w.loadIdx &&
                                  w.loadIdx === this.fragLoadIdx)
                              ) {
                                var O = c.nextStart ? c.nextStart : D;
                                return (
                                  v.logger.log(
                                    "no alt audio available @currentTime:" +
                                      this.media.currentTime +
                                      ", seeking @" +
                                      (O + 0.05)
                                  ),
                                  void (this.media.currentTime = O + 0.05)
                                );
                              }
                            } else {
                              var I,
                                x = n.maxFragLookUpTolerance,
                                P = T ? k[T.sn - k[0].sn + 1] : void 0,
                                F = function (e) {
                                  var t = Math.min(x, e.duration);
                                  return e.start + e.duration - t <= E
                                    ? 1
                                    : e.start - t > E && e.start
                                    ? -1
                                    : 0;
                                };
                              E < C
                                ? (E > C - x && (x = 0),
                                  (I = P && !F(P) ? P : Q.search(k, F)))
                                : (I = k[L - 1]),
                                I &&
                                  ((w = I),
                                  (D = I.start),
                                  T &&
                                    w.level === T.level &&
                                    w.sn === T.sn &&
                                    (w.sn < t.endSN
                                      ? ((w = k[w.sn + 1 - t.startSN]),
                                        v.logger.log(
                                          "SN just loaded, load next one: " +
                                            w.sn
                                        ))
                                      : (w = null)));
                            }
                            w &&
                              (w.encrypted
                                ? (v.logger.log(
                                    "Loading key for " +
                                      w.sn +
                                      " of [" +
                                      t.startSN +
                                      " ," +
                                      t.endSN +
                                      "],track " +
                                      R
                                  ),
                                  (this.state = ke),
                                  r.trigger(h.default.KEY_LOADING, { frag: w }))
                                : (v.logger.log(
                                    "Loading " +
                                      w.sn +
                                      ", cc: " +
                                      w.cc +
                                      " of [" +
                                      t.startSN +
                                      " ," +
                                      t.endSN +
                                      "],track " +
                                      R +
                                      ", currentTime:" +
                                      e +
                                      ",bufferEnd:" +
                                      E.toFixed(3)
                                  ),
                                  (this.fragCurrent = w),
                                  (A ||
                                    this.fragmentTracker.getState(w) === V) &&
                                    ("initSegment" !== w.sn &&
                                      (this.startFragRequested = !0),
                                    Object(f.isFiniteNumber)(w.sn) &&
                                      (this.nextLoadPosition =
                                        w.start + w.duration),
                                    r.trigger(h.default.FRAG_LOADING, {
                                      frag: w,
                                    }),
                                    (this.state = Le))));
                          }
                          break;
                        case Ce:
                          (track = this.tracks[this.trackId]) &&
                            track.details &&
                            (this.state = Re);
                          break;
                        case De:
                          var M = gt.now(),
                            N = this.retryDate,
                            U = (l = this.media) && l.seeking;
                          (!N || M >= N || U) &&
                            (v.logger.log(
                              "audioStreamController: retryDate reached, switch back to IDLE state"
                            ),
                            (this.state = Re));
                          break;
                        case Me:
                          var B = this.videoTrackCC;
                          if (void 0 === this.initPTS[B]) break;
                          var G = this.waitingFragment;
                          if (G) {
                            var j = G.frag.cc;
                            B !== j
                              ? (track = this.tracks[this.trackId]).details &&
                                track.details.live &&
                                (v.logger.warn(
                                  "Waiting fragment CC (" +
                                    j +
                                    ") does not match video track CC (" +
                                    B +
                                    ")"
                                ),
                                (this.waitingFragment = null),
                                (this.state = Re))
                              : ((this.state = Le),
                                this.onFragLoaded(this.waitingFragment),
                                (this.waitingFragment = null));
                          } else this.state = Re;
                      }
                    }),
                    (m.onMediaAttached = function (data) {
                      var e = (this.media = this.mediaBuffer = data.media);
                      (this.onvseeking = this.onMediaSeeking.bind(this)),
                        (this.onvended = this.onMediaEnded.bind(this)),
                        e.addEventListener("seeking", this.onvseeking),
                        e.addEventListener("ended", this.onvended);
                      var t = this.config;
                      this.tracks &&
                        t.autoStartLoad &&
                        this.startLoad(t.startPosition);
                    }),
                    (m.onMediaDetaching = function () {
                      var e = this.media;
                      e &&
                        e.ended &&
                        (v.logger.log(
                          "MSE detaching and video ended, reset startPosition"
                        ),
                        (this.startPosition = this.lastCurrentTime = 0)),
                        e &&
                          (e.removeEventListener("seeking", this.onvseeking),
                          e.removeEventListener("ended", this.onvended),
                          (this.onvseeking =
                            this.onvseeked =
                            this.onvended =
                              null)),
                        (this.media =
                          this.mediaBuffer =
                          this.videoBuffer =
                            null),
                        (this.loadedmetadata = !1),
                        this.fragmentTracker.removeAllFragments(),
                        this.stopLoad();
                    }),
                    (m.onAudioTracksUpdated = function (data) {
                      v.logger.log("audio tracks updated"),
                        (this.tracks = data.audioTracks);
                    }),
                    (m.onAudioTrackSwitching = function (data) {
                      var e = !!data.url;
                      (this.trackId = data.id),
                        (this.fragCurrent = null),
                        (this.state = we),
                        (this.waitingFragment = null),
                        e
                          ? this.setInterval(100)
                          : this.demuxer &&
                            (this.demuxer.destroy(), (this.demuxer = null)),
                        e && ((this.audioSwitch = !0), (this.state = Re)),
                        this.tick();
                    }),
                    (m.onAudioTrackLoaded = function (data) {
                      var e = data.details,
                        t = data.id,
                        track = this.tracks[t],
                        r = e.totalduration,
                        n = 0;
                      if (
                        (v.logger.log(
                          "track " +
                            t +
                            " loaded [" +
                            e.startSN +
                            "," +
                            e.endSN +
                            "],duration:" +
                            r
                        ),
                        e.live)
                      ) {
                        var o = track.details;
                        o && e.fragments.length > 0
                          ? (de(o, e),
                            (n = e.fragments[0].start),
                            e.PTSKnown
                              ? v.logger.log(
                                  "live audio playlist sliding:" + n.toFixed(3)
                                )
                              : v.logger.log(
                                  "live audio playlist - outdated PTS, unknown sliding"
                                ))
                          : ((e.PTSKnown = !1),
                            v.logger.log(
                              "live audio playlist - first load, unknown sliding"
                            ));
                      } else e.PTSKnown = !1;
                      if (((track.details = e), !this.startFragRequested)) {
                        if (-1 === this.startPosition) {
                          var l = e.startTimeOffset;
                          Object(f.isFiniteNumber)(l)
                            ? (v.logger.log(
                                "start time offset found in playlist, adjust startPosition to " +
                                  l
                              ),
                              (this.startPosition = l))
                            : e.live
                            ? ((this.startPosition = this.computeLivePosition(
                                n,
                                e
                              )),
                              v.logger.log(
                                "compute startPosition for audio-track to " +
                                  this.startPosition
                              ))
                            : (this.startPosition = 0);
                        }
                        this.nextLoadPosition = this.startPosition;
                      }
                      this.state === Ce && (this.state = Re), this.tick();
                    }),
                    (m.onKeyLoaded = function () {
                      this.state === ke && ((this.state = Re), this.tick());
                    }),
                    (m.onFragLoaded = function (data) {
                      var e = this.fragCurrent,
                        t = data.frag;
                      if (
                        this.state === Le &&
                        e &&
                        "audio" === t.type &&
                        t.level === e.level &&
                        t.sn === e.sn
                      ) {
                        var track = this.tracks[this.trackId],
                          details = track.details,
                          r = details.totalduration,
                          n = e.level,
                          o = e.sn,
                          l = e.cc,
                          d =
                            this.config.defaultAudioCodec ||
                            track.audioCodec ||
                            "mp4a.40.2",
                          c = (this.stats = data.stats);
                        if ("initSegment" === o)
                          (this.state = Re),
                            (c.tparsed = c.tbuffered = gt.now()),
                            (details.initSegment.data = data.payload),
                            this.hls.trigger(h.default.FRAG_BUFFERED, {
                              stats: c,
                              frag: e,
                              id: "audio",
                            }),
                            this.tick();
                        else {
                          (this.state = Oe),
                            (this.appended = !1),
                            this.demuxer ||
                              (this.demuxer = new se(this.hls, "audio"));
                          var f = this.initPTS[l],
                            m = details.initSegment
                              ? details.initSegment.data
                              : [];
                          details.initSegment || void 0 !== f
                            ? ((this.pendingBuffering = !0),
                              v.logger.log(
                                "Demuxing " +
                                  o +
                                  " of [" +
                                  details.startSN +
                                  " ," +
                                  details.endSN +
                                  "],track " +
                                  n
                              ),
                              this.demuxer.push(
                                data.payload,
                                m,
                                d,
                                null,
                                e,
                                r,
                                !1,
                                f
                              ))
                            : (v.logger.log(
                                "unknown video PTS for continuity counter " +
                                  l +
                                  ", waiting for video PTS before demuxing audio frag " +
                                  o +
                                  " of [" +
                                  details.startSN +
                                  " ," +
                                  details.endSN +
                                  "],track " +
                                  n
                              ),
                              (this.waitingFragment = data),
                              (this.state = Me));
                        }
                      }
                      this.fragLoadError = 0;
                    }),
                    (m.onFragParsingInitSegment = function (data) {
                      var e = this.fragCurrent,
                        t = data.frag;
                      if (
                        e &&
                        "audio" === data.id &&
                        t.sn === e.sn &&
                        t.level === e.level &&
                        this.state === Oe
                      ) {
                        var track,
                          r = data.tracks;
                        if ((r.video && delete r.video, (track = r.audio))) {
                          (track.levelCodec = track.codec),
                            (track.id = data.id),
                            this.hls.trigger(h.default.BUFFER_CODECS, r),
                            v.logger.log(
                              "audio track:audio,container:" +
                                track.container +
                                ",codecs[level/parsed]=[" +
                                track.levelCodec +
                                "/" +
                                track.codec +
                                "]"
                            );
                          var n = track.initSegment;
                          if (n) {
                            var o = {
                              type: "audio",
                              data: n,
                              parent: "audio",
                              content: "initSegment",
                            };
                            this.audioSwitch
                              ? (this.pendingData = [o])
                              : ((this.appended = !0),
                                (this.pendingBuffering = !0),
                                this.hls.trigger(
                                  h.default.BUFFER_APPENDING,
                                  o
                                ));
                          }
                          this.tick();
                        }
                      }
                    }),
                    (m.onFragParsingData = function (data) {
                      var e = this,
                        t = this.fragCurrent,
                        r = data.frag;
                      if (
                        t &&
                        "audio" === data.id &&
                        "audio" === data.type &&
                        r.sn === t.sn &&
                        r.level === t.level &&
                        this.state === Oe
                      ) {
                        var n = this.trackId,
                          track = this.tracks[n],
                          o = this.hls;
                        Object(f.isFiniteNumber)(data.endPTS) ||
                          ((data.endPTS = data.startPTS + t.duration),
                          (data.endDTS = data.startDTS + t.duration)),
                          t.addElementaryStream(S.AUDIO),
                          v.logger.log(
                            "parsed " +
                              data.type +
                              ",PTS:[" +
                              data.startPTS.toFixed(3) +
                              "," +
                              data.endPTS.toFixed(3) +
                              "],DTS:[" +
                              data.startDTS.toFixed(3) +
                              "/" +
                              data.endDTS.toFixed(3) +
                              "],nb:" +
                              data.nb
                          ),
                          ue(track.details, t, data.startPTS, data.endPTS);
                        var l = this.audioSwitch,
                          d = this.media,
                          m = !1;
                        if (l)
                          if (d && d.readyState) {
                            var y = d.currentTime;
                            v.logger.log(
                              "switching audio track : currentTime:" + y
                            ),
                              y >= data.startPTS &&
                                (v.logger.log(
                                  "switching audio track : flushing all audio"
                                ),
                                (this.state = xe),
                                o.trigger(h.default.BUFFER_FLUSHING, {
                                  startOffset: 0,
                                  endOffset: Number.POSITIVE_INFINITY,
                                  type: "audio",
                                }),
                                (m = !0),
                                (this.audioSwitch = !1),
                                o.trigger(h.default.AUDIO_TRACK_SWITCHED, {
                                  id: n,
                                }));
                          } else
                            (this.audioSwitch = !1),
                              o.trigger(h.default.AUDIO_TRACK_SWITCHED, {
                                id: n,
                              });
                        var E = this.pendingData;
                        if (!E)
                          return (
                            v.logger.warn(
                              "Apparently attempt to enqueue media payload without codec initialization data upfront"
                            ),
                            void o.trigger(h.default.ERROR, {
                              type: c.ErrorTypes.MEDIA_ERROR,
                              details: null,
                              fatal: !0,
                            })
                          );
                        this.audioSwitch ||
                          ([data.data1, data.data2].forEach(function (e) {
                            e &&
                              e.length &&
                              E.push({
                                type: data.type,
                                data: e,
                                parent: "audio",
                                content: "data",
                              });
                          }),
                          !m &&
                            E.length &&
                            (E.forEach(function (t) {
                              e.state === Oe &&
                                ((e.pendingBuffering = !0),
                                e.hls.trigger(h.default.BUFFER_APPENDING, t));
                            }),
                            (this.pendingData = []),
                            (this.appended = !0))),
                          this.tick();
                      }
                    }),
                    (m.onFragParsed = function (data) {
                      var e = this.fragCurrent,
                        t = data.frag;
                      e &&
                        "audio" === data.id &&
                        t.sn === e.sn &&
                        t.level === e.level &&
                        this.state === Oe &&
                        ((this.stats.tparsed = gt.now()),
                        (this.state = Ie),
                        this._checkAppendedParsed());
                    }),
                    (m.onBufferReset = function () {
                      (this.mediaBuffer = this.videoBuffer = null),
                        (this.loadedmetadata = !1);
                    }),
                    (m.onBufferCreated = function (data) {
                      var e = data.tracks.audio;
                      e &&
                        ((this.mediaBuffer = e.buffer),
                        (this.loadedmetadata = !0)),
                        data.tracks.video &&
                          (this.videoBuffer = data.tracks.video.buffer);
                    }),
                    (m.onBufferAppended = function (data) {
                      if ("audio" === data.parent) {
                        var e = this.state;
                        (e !== Oe && e !== Ie) ||
                          ((this.pendingBuffering = data.pending > 0),
                          this._checkAppendedParsed());
                      }
                    }),
                    (m._checkAppendedParsed = function () {
                      if (
                        !(
                          this.state !== Ie ||
                          (this.appended && this.pendingBuffering)
                        )
                      ) {
                        var e = this.fragCurrent,
                          t = this.stats,
                          r = this.hls;
                        if (e) {
                          (this.fragPrevious = e),
                            (t.tbuffered = gt.now()),
                            r.trigger(h.default.FRAG_BUFFERED, {
                              stats: t,
                              frag: e,
                              id: "audio",
                            });
                          var n = this.mediaBuffer
                            ? this.mediaBuffer
                            : this.media;
                          n &&
                            v.logger.log(
                              "audio buffered : " + he.toString(n.buffered)
                            ),
                            this.audioSwitch &&
                              this.appended &&
                              ((this.audioSwitch = !1),
                              r.trigger(h.default.AUDIO_TRACK_SWITCHED, {
                                id: this.trackId,
                              })),
                            (this.state = Re);
                        }
                        this.tick();
                      }
                    }),
                    (m.onError = function (data) {
                      var e = data.frag;
                      if (!e || "audio" === e.type)
                        switch (data.details) {
                          case c.ErrorDetails.FRAG_LOAD_ERROR:
                          case c.ErrorDetails.FRAG_LOAD_TIMEOUT:
                            var t = data.frag;
                            if (t && "audio" !== t.type) break;
                            if (!data.fatal) {
                              var r = this.fragLoadError;
                              r ? r++ : (r = 1);
                              var n = this.config;
                              if (r <= n.fragLoadingMaxRetry) {
                                this.fragLoadError = r;
                                var o = Math.min(
                                  Math.pow(2, r - 1) * n.fragLoadingRetryDelay,
                                  n.fragLoadingMaxRetryTimeout
                                );
                                v.logger.warn(
                                  "AudioStreamController: frag loading failed, retry in " +
                                    o +
                                    " ms"
                                ),
                                  (this.retryDate = gt.now() + o),
                                  (this.state = De);
                              } else
                                v.logger.error(
                                  "AudioStreamController: " +
                                    data.details +
                                    " reaches max retry, redispatch as fatal ..."
                                ),
                                  (data.fatal = !0),
                                  (this.state = Fe);
                            }
                            break;
                          case c.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                          case c.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                          case c.ErrorDetails.KEY_LOAD_ERROR:
                          case c.ErrorDetails.KEY_LOAD_TIMEOUT:
                            this.state !== Fe &&
                              ((this.state = data.fatal ? Fe : Re),
                              v.logger.warn(
                                "AudioStreamController: " +
                                  data.details +
                                  " while loading frag, now switching to " +
                                  this.state +
                                  " state ..."
                              ));
                            break;
                          case c.ErrorDetails.BUFFER_FULL_ERROR:
                            if (
                              "audio" === data.parent &&
                              (this.state === Oe || this.state === Ie)
                            ) {
                              var l = this.mediaBuffer,
                                d = this.media.currentTime;
                              if (
                                l &&
                                J.isBuffered(l, d) &&
                                J.isBuffered(l, d + 0.5)
                              ) {
                                var f = this.config;
                                f.maxMaxBufferLength >= f.maxBufferLength &&
                                  ((f.maxMaxBufferLength /= 2),
                                  v.logger.warn(
                                    "AudioStreamController: reduce max buffer length to " +
                                      f.maxMaxBufferLength +
                                      "s"
                                  )),
                                  (this.state = Re);
                              } else
                                v.logger.warn(
                                  "AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"
                                ),
                                  (this.fragCurrent = null),
                                  (this.state = xe),
                                  this.hls.trigger(h.default.BUFFER_FLUSHING, {
                                    startOffset: 0,
                                    endOffset: Number.POSITIVE_INFINITY,
                                    type: "audio",
                                  });
                            }
                        }
                    }),
                    (m.onBufferFlushed = function () {
                      var e = this,
                        t = this.pendingData;
                      t && t.length
                        ? (v.logger.log(
                            "AudioStreamController: appending pending audio data after buffer flushed"
                          ),
                          t.forEach(function (t) {
                            e.hls.trigger(h.default.BUFFER_APPENDING, t);
                          }),
                          (this.appended = !0),
                          (this.pendingData = []),
                          (this.state = Ie))
                        : ((this.state = Re),
                          (this.fragPrevious = null),
                          this.tick());
                    }),
                    (o = n),
                    (l = [
                      {
                        key: "state",
                        set: function (e) {
                          if (this.state !== e) {
                            var t = this.state;
                            (this._state = e),
                              v.logger.log("audio stream:" + t + "->" + e);
                          }
                        },
                        get: function () {
                          return this._state;
                        },
                      },
                    ]) && ht(o.prototype, l),
                    d && ht(o, d),
                    n
                  );
                })(Ue),
                vt = (function () {
                  if ("undefined" != typeof window && window.VTTCue)
                    return window.VTTCue;
                  var e = { "": !0, lr: !0, rl: !0 },
                    t = { start: !0, middle: !0, end: !0, left: !0, right: !0 };
                  function r(e) {
                    return (
                      "string" == typeof e &&
                      !!t[e.toLowerCase()] &&
                      e.toLowerCase()
                    );
                  }
                  function n(e) {
                    for (var i = 1; i < arguments.length; i++) {
                      var t = arguments[i];
                      for (var p in t) e[p] = t[p];
                    }
                    return e;
                  }
                  function o(t, o, text) {
                    var l = this,
                      d = { enumerable: !0 };
                    l.hasBeenReset = !1;
                    var c = "",
                      f = !1,
                      h = t,
                      v = o,
                      m = text,
                      y = null,
                      E = "",
                      T = !0,
                      S = "auto",
                      _ = "start",
                      A = 50,
                      R = "middle",
                      w = 50,
                      k = "middle";
                    Object.defineProperty(
                      l,
                      "id",
                      n({}, d, {
                        get: function () {
                          return c;
                        },
                        set: function (e) {
                          c = "" + e;
                        },
                      })
                    ),
                      Object.defineProperty(
                        l,
                        "pauseOnExit",
                        n({}, d, {
                          get: function () {
                            return f;
                          },
                          set: function (e) {
                            f = !!e;
                          },
                        })
                      ),
                      Object.defineProperty(
                        l,
                        "startTime",
                        n({}, d, {
                          get: function () {
                            return h;
                          },
                          set: function (e) {
                            if ("number" != typeof e)
                              throw new TypeError(
                                "Start time must be set to a number."
                              );
                            (h = e), (this.hasBeenReset = !0);
                          },
                        })
                      ),
                      Object.defineProperty(
                        l,
                        "endTime",
                        n({}, d, {
                          get: function () {
                            return v;
                          },
                          set: function (e) {
                            if ("number" != typeof e)
                              throw new TypeError(
                                "End time must be set to a number."
                              );
                            (v = e), (this.hasBeenReset = !0);
                          },
                        })
                      ),
                      Object.defineProperty(
                        l,
                        "text",
                        n({}, d, {
                          get: function () {
                            return m;
                          },
                          set: function (e) {
                            (m = "" + e), (this.hasBeenReset = !0);
                          },
                        })
                      ),
                      Object.defineProperty(
                        l,
                        "region",
                        n({}, d, {
                          get: function () {
                            return y;
                          },
                          set: function (e) {
                            (y = e), (this.hasBeenReset = !0);
                          },
                        })
                      ),
                      Object.defineProperty(
                        l,
                        "vertical",
                        n({}, d, {
                          get: function () {
                            return E;
                          },
                          set: function (t) {
                            var r = (function (t) {
                              return (
                                "string" == typeof t &&
                                !!e[t.toLowerCase()] &&
                                t.toLowerCase()
                              );
                            })(t);
                            if (!1 === r)
                              throw new SyntaxError(
                                "An invalid or illegal string was specified."
                              );
                            (E = r), (this.hasBeenReset = !0);
                          },
                        })
                      ),
                      Object.defineProperty(
                        l,
                        "snapToLines",
                        n({}, d, {
                          get: function () {
                            return T;
                          },
                          set: function (e) {
                            (T = !!e), (this.hasBeenReset = !0);
                          },
                        })
                      ),
                      Object.defineProperty(
                        l,
                        "line",
                        n({}, d, {
                          get: function () {
                            return S;
                          },
                          set: function (e) {
                            if ("number" != typeof e && "auto" !== e)
                              throw new SyntaxError(
                                "An invalid number or illegal string was specified."
                              );
                            (S = e), (this.hasBeenReset = !0);
                          },
                        })
                      ),
                      Object.defineProperty(
                        l,
                        "lineAlign",
                        n({}, d, {
                          get: function () {
                            return _;
                          },
                          set: function (e) {
                            var t = r(e);
                            if (!t)
                              throw new SyntaxError(
                                "An invalid or illegal string was specified."
                              );
                            (_ = t), (this.hasBeenReset = !0);
                          },
                        })
                      ),
                      Object.defineProperty(
                        l,
                        "position",
                        n({}, d, {
                          get: function () {
                            return A;
                          },
                          set: function (e) {
                            if (e < 0 || e > 100)
                              throw new Error(
                                "Position must be between 0 and 100."
                              );
                            (A = e), (this.hasBeenReset = !0);
                          },
                        })
                      ),
                      Object.defineProperty(
                        l,
                        "positionAlign",
                        n({}, d, {
                          get: function () {
                            return R;
                          },
                          set: function (e) {
                            var t = r(e);
                            if (!t)
                              throw new SyntaxError(
                                "An invalid or illegal string was specified."
                              );
                            (R = t), (this.hasBeenReset = !0);
                          },
                        })
                      ),
                      Object.defineProperty(
                        l,
                        "size",
                        n({}, d, {
                          get: function () {
                            return w;
                          },
                          set: function (e) {
                            if (e < 0 || e > 100)
                              throw new Error(
                                "Size must be between 0 and 100."
                              );
                            (w = e), (this.hasBeenReset = !0);
                          },
                        })
                      ),
                      Object.defineProperty(
                        l,
                        "align",
                        n({}, d, {
                          get: function () {
                            return k;
                          },
                          set: function (e) {
                            var t = r(e);
                            if (!t)
                              throw new SyntaxError(
                                "An invalid or illegal string was specified."
                              );
                            (k = t), (this.hasBeenReset = !0);
                          },
                        })
                      ),
                      (l.displayState = void 0);
                  }
                  return (
                    (o.prototype.getCueAsHTML = function () {
                      return window.WebVTT.convertCueToDOMTree(
                        window,
                        this.text
                      );
                    }),
                    o
                  );
                })(),
                mt = function () {
                  return {
                    decode: function (data) {
                      if (!data) return "";
                      if ("string" != typeof data)
                        throw new Error("Error - expected string data.");
                      return decodeURIComponent(encodeURIComponent(data));
                    },
                  };
                };
              function yt() {
                (this.window = window),
                  (this.state = "INITIAL"),
                  (this.buffer = ""),
                  (this.decoder = new mt()),
                  (this.regionList = []);
              }
              function Et() {
                this.values = Object.create(null);
              }
              function Tt(input, e, t, r) {
                var n = r ? input.split(r) : [input];
                for (var i in n)
                  if ("string" == typeof n[i]) {
                    var o = n[i].split(t);
                    2 === o.length && e(o[0], o[1]);
                  }
              }
              Et.prototype = {
                set: function (e, t) {
                  this.get(e) || "" === t || (this.values[e] = t);
                },
                get: function (e, t, r) {
                  return r
                    ? this.has(e)
                      ? this.values[e]
                      : t[r]
                    : this.has(e)
                    ? this.values[e]
                    : t;
                },
                has: function (e) {
                  return e in this.values;
                },
                alt: function (e, t, a) {
                  for (var r = 0; r < a.length; ++r)
                    if (t === a[r]) {
                      this.set(e, t);
                      break;
                    }
                },
                integer: function (e, t) {
                  /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
                },
                percent: function (e, t) {
                  return (
                    !!(
                      t.match(/^([\d]{1,3})(\.[\d]*)?%$/) &&
                      (t = parseFloat(t)) >= 0 &&
                      t <= 100
                    ) && (this.set(e, t), !0)
                  );
                },
              };
              var bt = new vt(0, 0, 0),
                St = "middle" === bt.align ? "middle" : "center";
              function _t(input, e, t) {
                var r = input;
                function n() {
                  var e = (function (input) {
                    function e(e, t, s, r) {
                      return (
                        3600 * (0 | e) + 60 * (0 | t) + (0 | s) + (0 | r) / 1e3
                      );
                    }
                    var t = input.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                    return t
                      ? t[3]
                        ? e(t[1], t[2], t[3].replace(":", ""), t[4])
                        : t[1] > 59
                        ? e(t[1], t[2], 0, t[4])
                        : e(0, t[1], t[2], t[4])
                      : null;
                  })(input);
                  if (null === e) throw new Error("Malformed timestamp: " + r);
                  return (input = input.replace(/^[^\sa-zA-Z-]+/, "")), e;
                }
                function o() {
                  input = input.replace(/^\s+/, "");
                }
                if (
                  (o(),
                  (e.startTime = n()),
                  o(),
                  "--\x3e" !== input.substr(0, 3))
                )
                  throw new Error(
                    "Malformed time stamp (time stamps must be separated by '--\x3e'): " +
                      r
                  );
                (input = input.substr(3)),
                  o(),
                  (e.endTime = n()),
                  o(),
                  (function (input, e) {
                    var r = new Et();
                    Tt(
                      input,
                      function (e, n) {
                        switch (e) {
                          case "region":
                            for (var i = t.length - 1; i >= 0; i--)
                              if (t[i].id === n) {
                                r.set(e, t[i].region);
                                break;
                              }
                            break;
                          case "vertical":
                            r.alt(e, n, ["rl", "lr"]);
                            break;
                          case "line":
                            var o = n.split(","),
                              l = o[0];
                            r.integer(e, l),
                              r.percent(e, l) && r.set("snapToLines", !1),
                              r.alt(e, l, ["auto"]),
                              2 === o.length &&
                                r.alt("lineAlign", o[1], ["start", St, "end"]);
                            break;
                          case "position":
                            (o = n.split(",")),
                              r.percent(e, o[0]),
                              2 === o.length &&
                                r.alt("positionAlign", o[1], [
                                  "start",
                                  St,
                                  "end",
                                  "line-left",
                                  "line-right",
                                  "auto",
                                ]);
                            break;
                          case "size":
                            r.percent(e, n);
                            break;
                          case "align":
                            r.alt(e, n, ["start", St, "end", "left", "right"]);
                        }
                      },
                      /:/,
                      /\s/
                    ),
                      (e.region = r.get("region", null)),
                      (e.vertical = r.get("vertical", ""));
                    var line = r.get("line", "auto");
                    "auto" === line && -1 === bt.line && (line = -1),
                      (e.line = line),
                      (e.lineAlign = r.get("lineAlign", "start")),
                      (e.snapToLines = r.get("snapToLines", !0)),
                      (e.size = r.get("size", 100)),
                      (e.align = r.get("align", St));
                    var n = r.get("position", "auto");
                    "auto" === n &&
                      50 === bt.position &&
                      (n =
                        "start" === e.align || "left" === e.align
                          ? 0
                          : "end" === e.align || "right" === e.align
                          ? 100
                          : 50),
                      (e.position = n);
                  })(input, e);
              }
              function At(input) {
                return input.replace(/<br(?: \/)?>/gi, "\n");
              }
              yt.prototype = {
                parse: function (data) {
                  var e = this;
                  function t() {
                    var t = e.buffer,
                      r = 0;
                    for (
                      t = At(t);
                      r < t.length && "\r" !== t[r] && "\n" !== t[r];

                    )
                      ++r;
                    var line = t.substr(0, r);
                    return (
                      "\r" === t[r] && ++r,
                      "\n" === t[r] && ++r,
                      (e.buffer = t.substr(r)),
                      line
                    );
                  }
                  data && (e.buffer += e.decoder.decode(data, { stream: !0 }));
                  try {
                    var line;
                    if ("INITIAL" === e.state) {
                      if (!/\r\n|\n/.test(e.buffer)) return this;
                      var r = (line = t()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                      if (!r || !r[0])
                        throw new Error("Malformed WebVTT signature.");
                      e.state = "HEADER";
                    }
                    for (var n = !1; e.buffer; ) {
                      if (!/\r\n|\n/.test(e.buffer)) return this;
                      switch ((n ? (n = !1) : (line = t()), e.state)) {
                        case "HEADER":
                          /:/.test(line)
                            ? Tt(line, function (e, t) {}, /:/)
                            : line || (e.state = "ID");
                          continue;
                        case "NOTE":
                          line || (e.state = "ID");
                          continue;
                        case "ID":
                          if (/^NOTE($|[ \t])/.test(line)) {
                            e.state = "NOTE";
                            break;
                          }
                          if (!line) continue;
                          if (
                            ((e.cue = new vt(0, 0, "")),
                            (e.state = "CUE"),
                            -1 === line.indexOf("--\x3e"))
                          ) {
                            e.cue.id = line;
                            continue;
                          }
                        case "CUE":
                          try {
                            _t(line, e.cue, e.regionList);
                          } catch (t) {
                            (e.cue = null), (e.state = "BADCUE");
                            continue;
                          }
                          e.state = "CUETEXT";
                          continue;
                        case "CUETEXT":
                          var o = -1 !== line.indexOf("--\x3e");
                          if (!line || (o && (n = !0))) {
                            e.oncue && e.oncue(e.cue),
                              (e.cue = null),
                              (e.state = "ID");
                            continue;
                          }
                          e.cue.text && (e.cue.text += "\n"),
                            (e.cue.text += line);
                          continue;
                        case "BADCUE":
                          line || (e.state = "ID");
                          continue;
                      }
                    }
                  } catch (t) {
                    "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue),
                      (e.cue = null),
                      (e.state =
                        "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE");
                  }
                  return this;
                },
                flush: function () {
                  try {
                    if (
                      ((this.buffer += this.decoder.decode()),
                      (this.cue || "HEADER" === this.state) &&
                        ((this.buffer += "\n\n"), this.parse()),
                      "INITIAL" === this.state)
                    )
                      throw new Error("Malformed WebVTT signature.");
                  } catch (e) {
                    throw e;
                  }
                  return this.onflush && this.onflush(), this;
                },
              };
              var Rt = yt;
              function wt(track, e, t, r) {
                for (
                  var n,
                    o,
                    l,
                    d,
                    text,
                    c = window.VTTCue || TextTrackCue,
                    f = 0;
                  f < r.rows.length;
                  f++
                )
                  if (
                    ((l = !0), (d = 0), (text = ""), !(n = r.rows[f]).isEmpty())
                  ) {
                    for (var h = 0; h < n.chars.length; h++)
                      n.chars[h].uchar.match(/\s/) && l
                        ? d++
                        : ((text += n.chars[h].uchar), (l = !1));
                    (n.cueStartTime = e),
                      e === t && (t += 1e-4),
                      (o = new c(e, t, At(text.trim()))),
                      d >= 16 ? d-- : d++,
                      navigator.userAgent.match(/Firefox\//)
                        ? (o.line = f + 1)
                        : (o.line = f > 7 ? f - 2 : f + 1),
                      (o.align = "left"),
                      (o.position = Math.max(0, Math.min(100, (d / 32) * 100))),
                      track.addCue(o);
                  }
              }
              var kt,
                Lt = {
                  42: 225,
                  92: 233,
                  94: 237,
                  95: 243,
                  96: 250,
                  123: 231,
                  124: 247,
                  125: 209,
                  126: 241,
                  127: 9608,
                  128: 174,
                  129: 176,
                  130: 189,
                  131: 191,
                  132: 8482,
                  133: 162,
                  134: 163,
                  135: 9834,
                  136: 224,
                  137: 32,
                  138: 232,
                  139: 226,
                  140: 234,
                  141: 238,
                  142: 244,
                  143: 251,
                  144: 193,
                  145: 201,
                  146: 211,
                  147: 218,
                  148: 220,
                  149: 252,
                  150: 8216,
                  151: 161,
                  152: 42,
                  153: 8217,
                  154: 9473,
                  155: 169,
                  156: 8480,
                  157: 8226,
                  158: 8220,
                  159: 8221,
                  160: 192,
                  161: 194,
                  162: 199,
                  163: 200,
                  164: 202,
                  165: 203,
                  166: 235,
                  167: 206,
                  168: 207,
                  169: 239,
                  170: 212,
                  171: 217,
                  172: 249,
                  173: 219,
                  174: 171,
                  175: 187,
                  176: 195,
                  177: 227,
                  178: 205,
                  179: 204,
                  180: 236,
                  181: 210,
                  182: 242,
                  183: 213,
                  184: 245,
                  185: 123,
                  186: 125,
                  187: 92,
                  188: 94,
                  189: 95,
                  190: 124,
                  191: 8764,
                  192: 196,
                  193: 228,
                  194: 214,
                  195: 246,
                  196: 223,
                  197: 165,
                  198: 164,
                  199: 9475,
                  200: 197,
                  201: 229,
                  202: 216,
                  203: 248,
                  204: 9487,
                  205: 9491,
                  206: 9495,
                  207: 9499,
                },
                Dt = function (e) {
                  var t = e;
                  return (
                    Lt.hasOwnProperty(e) && (t = Lt[e]), String.fromCharCode(t)
                  );
                },
                Ct = {
                  17: 1,
                  18: 3,
                  21: 5,
                  22: 7,
                  23: 9,
                  16: 11,
                  19: 12,
                  20: 14,
                },
                Ot = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
                It = {
                  25: 1,
                  26: 3,
                  29: 5,
                  30: 7,
                  31: 9,
                  24: 11,
                  27: 12,
                  28: 14,
                },
                xt = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
                Pt = [
                  "white",
                  "green",
                  "blue",
                  "cyan",
                  "red",
                  "yellow",
                  "magenta",
                  "black",
                  "transparent",
                ];
              !(function (e) {
                (e[(e.ERROR = 0)] = "ERROR"),
                  (e[(e.TEXT = 1)] = "TEXT"),
                  (e[(e.WARNING = 2)] = "WARNING"),
                  (e[(e.INFO = 2)] = "INFO"),
                  (e[(e.DEBUG = 3)] = "DEBUG"),
                  (e[(e.DATA = 3)] = "DATA");
              })(kt || (kt = {}));
              var Ft = {
                  verboseFilter: {
                    DATA: 3,
                    DEBUG: 3,
                    INFO: 2,
                    WARNING: 2,
                    TEXT: 1,
                    ERROR: 0,
                  },
                  time: null,
                  verboseLevel: 0,
                  setTime: function (e) {
                    this.time = e;
                  },
                  log: function (e, t) {
                    this.verboseFilter[e], this.verboseLevel;
                  },
                },
                Mt = function (e) {
                  for (var t = [], r = 0; r < e.length; r++)
                    t.push(e[r].toString(16));
                  return t;
                },
                Nt = (function () {
                  function e(e, t, r, n, o) {
                    (this.foreground = void 0),
                      (this.underline = void 0),
                      (this.italics = void 0),
                      (this.background = void 0),
                      (this.flash = void 0),
                      (this.foreground = e || "white"),
                      (this.underline = t || !1),
                      (this.italics = r || !1),
                      (this.background = n || "black"),
                      (this.flash = o || !1);
                  }
                  var t = e.prototype;
                  return (
                    (t.reset = function () {
                      (this.foreground = "white"),
                        (this.underline = !1),
                        (this.italics = !1),
                        (this.background = "black"),
                        (this.flash = !1);
                    }),
                    (t.setStyles = function (e) {
                      for (
                        var t = [
                            "foreground",
                            "underline",
                            "italics",
                            "background",
                            "flash",
                          ],
                          i = 0;
                        i < t.length;
                        i++
                      ) {
                        var style = t[i];
                        e.hasOwnProperty(style) && (this[style] = e[style]);
                      }
                    }),
                    (t.isDefault = function () {
                      return (
                        "white" === this.foreground &&
                        !this.underline &&
                        !this.italics &&
                        "black" === this.background &&
                        !this.flash
                      );
                    }),
                    (t.equals = function (e) {
                      return (
                        this.foreground === e.foreground &&
                        this.underline === e.underline &&
                        this.italics === e.italics &&
                        this.background === e.background &&
                        this.flash === e.flash
                      );
                    }),
                    (t.copy = function (e) {
                      (this.foreground = e.foreground),
                        (this.underline = e.underline),
                        (this.italics = e.italics),
                        (this.background = e.background),
                        (this.flash = e.flash);
                    }),
                    (t.toString = function () {
                      return (
                        "color=" +
                        this.foreground +
                        ", underline=" +
                        this.underline +
                        ", italics=" +
                        this.italics +
                        ", background=" +
                        this.background +
                        ", flash=" +
                        this.flash
                      );
                    }),
                    e
                  );
                })(),
                Ut = (function () {
                  function e(e, t, r, n, o, l) {
                    (this.uchar = void 0),
                      (this.penState = void 0),
                      (this.uchar = e || " "),
                      (this.penState = new Nt(t, r, n, o, l));
                  }
                  var t = e.prototype;
                  return (
                    (t.reset = function () {
                      (this.uchar = " "), this.penState.reset();
                    }),
                    (t.setChar = function (e, t) {
                      (this.uchar = e), this.penState.copy(t);
                    }),
                    (t.setPenState = function (e) {
                      this.penState.copy(e);
                    }),
                    (t.equals = function (e) {
                      return (
                        this.uchar === e.uchar &&
                        this.penState.equals(e.penState)
                      );
                    }),
                    (t.copy = function (e) {
                      (this.uchar = e.uchar), this.penState.copy(e.penState);
                    }),
                    (t.isEmpty = function () {
                      return " " === this.uchar && this.penState.isDefault();
                    }),
                    e
                  );
                })(),
                Bt = (function () {
                  function e() {
                    (this.chars = void 0),
                      (this.pos = void 0),
                      (this.currPenState = void 0),
                      (this.cueStartTime = void 0),
                      (this.chars = []);
                    for (var i = 0; i < 100; i++) this.chars.push(new Ut());
                    (this.pos = 0), (this.currPenState = new Nt());
                  }
                  var t = e.prototype;
                  return (
                    (t.equals = function (e) {
                      for (var t = !0, i = 0; i < 100; i++)
                        if (!this.chars[i].equals(e.chars[i])) {
                          t = !1;
                          break;
                        }
                      return t;
                    }),
                    (t.copy = function (e) {
                      for (var i = 0; i < 100; i++)
                        this.chars[i].copy(e.chars[i]);
                    }),
                    (t.isEmpty = function () {
                      for (var e = !0, i = 0; i < 100; i++)
                        if (!this.chars[i].isEmpty()) {
                          e = !1;
                          break;
                        }
                      return e;
                    }),
                    (t.setCursor = function (e) {
                      this.pos !== e && (this.pos = e),
                        this.pos < 0
                          ? (Ft.log(
                              "ERROR",
                              "Negative cursor position " + this.pos
                            ),
                            (this.pos = 0))
                          : this.pos > 100 &&
                            (Ft.log(
                              "ERROR",
                              "Too large cursor position " + this.pos
                            ),
                            (this.pos = 100));
                    }),
                    (t.moveCursor = function (e) {
                      var t = this.pos + e;
                      if (e > 1)
                        for (var i = this.pos + 1; i < t + 1; i++)
                          this.chars[i].setPenState(this.currPenState);
                      this.setCursor(t);
                    }),
                    (t.backSpace = function () {
                      this.moveCursor(-1),
                        this.chars[this.pos].setChar(" ", this.currPenState);
                    }),
                    (t.insertChar = function (e) {
                      e >= 144 && this.backSpace();
                      var t = Dt(e);
                      this.pos >= 100
                        ? Ft.log(
                            "ERROR",
                            "Cannot insert " +
                              e.toString(16) +
                              " (" +
                              t +
                              ") at position " +
                              this.pos +
                              ". Skipping it!"
                          )
                        : (this.chars[this.pos].setChar(t, this.currPenState),
                          this.moveCursor(1));
                    }),
                    (t.clearFromPos = function (e) {
                      var i;
                      for (i = e; i < 100; i++) this.chars[i].reset();
                    }),
                    (t.clear = function () {
                      this.clearFromPos(0),
                        (this.pos = 0),
                        this.currPenState.reset();
                    }),
                    (t.clearToEndOfRow = function () {
                      this.clearFromPos(this.pos);
                    }),
                    (t.getTextString = function () {
                      for (var e = [], t = !0, i = 0; i < 100; i++) {
                        var r = this.chars[i].uchar;
                        " " !== r && (t = !1), e.push(r);
                      }
                      return t ? "" : e.join("");
                    }),
                    (t.setPenStyles = function (e) {
                      this.currPenState.setStyles(e),
                        this.chars[this.pos].setPenState(this.currPenState);
                    }),
                    e
                  );
                })(),
                Gt = (function () {
                  function e() {
                    (this.rows = void 0),
                      (this.currRow = void 0),
                      (this.nrRollUpRows = void 0),
                      (this.lastOutputScreen = void 0),
                      (this.rows = []);
                    for (var i = 0; i < 15; i++) this.rows.push(new Bt());
                    (this.currRow = 14),
                      (this.nrRollUpRows = null),
                      this.reset();
                  }
                  var t = e.prototype;
                  return (
                    (t.reset = function () {
                      for (var i = 0; i < 15; i++) this.rows[i].clear();
                      this.currRow = 14;
                    }),
                    (t.equals = function (e) {
                      for (var t = !0, i = 0; i < 15; i++)
                        if (!this.rows[i].equals(e.rows[i])) {
                          t = !1;
                          break;
                        }
                      return t;
                    }),
                    (t.copy = function (e) {
                      for (var i = 0; i < 15; i++) this.rows[i].copy(e.rows[i]);
                    }),
                    (t.isEmpty = function () {
                      for (var e = !0, i = 0; i < 15; i++)
                        if (!this.rows[i].isEmpty()) {
                          e = !1;
                          break;
                        }
                      return e;
                    }),
                    (t.backSpace = function () {
                      this.rows[this.currRow].backSpace();
                    }),
                    (t.clearToEndOfRow = function () {
                      this.rows[this.currRow].clearToEndOfRow();
                    }),
                    (t.insertChar = function (e) {
                      this.rows[this.currRow].insertChar(e);
                    }),
                    (t.setPen = function (e) {
                      this.rows[this.currRow].setPenStyles(e);
                    }),
                    (t.moveCursor = function (e) {
                      this.rows[this.currRow].moveCursor(e);
                    }),
                    (t.setCursor = function (e) {
                      Ft.log("INFO", "setCursor: " + e),
                        this.rows[this.currRow].setCursor(e);
                    }),
                    (t.setPAC = function (e) {
                      Ft.log("INFO", "pacData = " + JSON.stringify(e));
                      var t = e.row - 1;
                      if (
                        (this.nrRollUpRows &&
                          t < this.nrRollUpRows - 1 &&
                          (t = this.nrRollUpRows - 1),
                        this.nrRollUpRows && this.currRow !== t)
                      ) {
                        for (var i = 0; i < 15; i++) this.rows[i].clear();
                        var r = this.currRow + 1 - this.nrRollUpRows,
                          n = this.lastOutputScreen;
                        if (n) {
                          var o = n.rows[r].cueStartTime;
                          if (o && Ft.time && o < Ft.time)
                            for (var l = 0; l < this.nrRollUpRows; l++)
                              this.rows[t - this.nrRollUpRows + l + 1].copy(
                                n.rows[r + l]
                              );
                        }
                      }
                      this.currRow = t;
                      var d = this.rows[this.currRow];
                      if (null !== e.indent) {
                        var c = e.indent,
                          f = Math.max(c - 1, 0);
                        d.setCursor(e.indent),
                          (e.color = d.chars[f].penState.foreground);
                      }
                      var h = {
                        foreground: e.color,
                        underline: e.underline,
                        italics: e.italics,
                        background: "black",
                        flash: !1,
                      };
                      this.setPen(h);
                    }),
                    (t.setBkgData = function (e) {
                      Ft.log("INFO", "bkgData = " + JSON.stringify(e)),
                        this.backSpace(),
                        this.setPen(e),
                        this.insertChar(32);
                    }),
                    (t.setRollUpRows = function (e) {
                      this.nrRollUpRows = e;
                    }),
                    (t.rollUp = function () {
                      if (null !== this.nrRollUpRows) {
                        Ft.log("TEXT", this.getDisplayText());
                        var e = this.currRow + 1 - this.nrRollUpRows,
                          t = this.rows.splice(e, 1)[0];
                        t.clear(),
                          this.rows.splice(this.currRow, 0, t),
                          Ft.log("INFO", "Rolling up");
                      } else
                        Ft.log("DEBUG", "roll_up but nrRollUpRows not set yet");
                    }),
                    (t.getDisplayText = function (e) {
                      e = e || !1;
                      for (var t = [], text = "", r = -1, i = 0; i < 15; i++) {
                        var n = this.rows[i].getTextString();
                        n &&
                          ((r = i + 1),
                          e
                            ? t.push("Row " + r + ": '" + n + "'")
                            : t.push(n.trim()));
                      }
                      return (
                        t.length > 0 &&
                          (text = e ? "[" + t.join(" | ") + "]" : t.join("\n")),
                        text
                      );
                    }),
                    (t.getTextAndFormat = function () {
                      return this.rows;
                    }),
                    e
                  );
                })(),
                jt = (function () {
                  function e(e, t) {
                    (this.chNr = void 0),
                      (this.outputFilter = void 0),
                      (this.mode = void 0),
                      (this.verbose = void 0),
                      (this.displayedMemory = void 0),
                      (this.nonDisplayedMemory = void 0),
                      (this.lastOutputScreen = void 0),
                      (this.currRollUpRow = void 0),
                      (this.writeScreen = void 0),
                      (this.cueStartTime = void 0),
                      (this.lastCueEndTime = void 0),
                      (this.chNr = e),
                      (this.outputFilter = t),
                      (this.mode = null),
                      (this.verbose = 0),
                      (this.displayedMemory = new Gt()),
                      (this.nonDisplayedMemory = new Gt()),
                      (this.lastOutputScreen = new Gt()),
                      (this.currRollUpRow = this.displayedMemory.rows[14]),
                      (this.writeScreen = this.displayedMemory),
                      (this.mode = null),
                      (this.cueStartTime = null);
                  }
                  var t = e.prototype;
                  return (
                    (t.reset = function () {
                      (this.mode = null),
                        this.displayedMemory.reset(),
                        this.nonDisplayedMemory.reset(),
                        this.lastOutputScreen.reset(),
                        (this.currRollUpRow = this.displayedMemory.rows[14]),
                        (this.writeScreen = this.displayedMemory),
                        (this.mode = null),
                        (this.cueStartTime = null);
                    }),
                    (t.getHandler = function () {
                      return this.outputFilter;
                    }),
                    (t.setHandler = function (e) {
                      this.outputFilter = e;
                    }),
                    (t.setPAC = function (e) {
                      this.writeScreen.setPAC(e);
                    }),
                    (t.setBkgData = function (e) {
                      this.writeScreen.setBkgData(e);
                    }),
                    (t.setMode = function (e) {
                      e !== this.mode &&
                        ((this.mode = e),
                        Ft.log("INFO", "MODE=" + e),
                        "MODE_POP-ON" === this.mode
                          ? (this.writeScreen = this.nonDisplayedMemory)
                          : ((this.writeScreen = this.displayedMemory),
                            this.writeScreen.reset()),
                        "MODE_ROLL-UP" !== this.mode &&
                          ((this.displayedMemory.nrRollUpRows = null),
                          (this.nonDisplayedMemory.nrRollUpRows = null)),
                        (this.mode = e));
                    }),
                    (t.insertChars = function (e) {
                      for (var i = 0; i < e.length; i++)
                        this.writeScreen.insertChar(e[i]);
                      var t =
                        this.writeScreen === this.displayedMemory
                          ? "DISP"
                          : "NON_DISP";
                      Ft.log(
                        "INFO",
                        t + ": " + this.writeScreen.getDisplayText(!0)
                      ),
                        ("MODE_PAINT-ON" !== this.mode &&
                          "MODE_ROLL-UP" !== this.mode) ||
                          (Ft.log(
                            "TEXT",
                            "DISPLAYED: " +
                              this.displayedMemory.getDisplayText(!0)
                          ),
                          this.outputDataUpdate());
                    }),
                    (t.ccRCL = function () {
                      Ft.log("INFO", "RCL - Resume Caption Loading"),
                        this.setMode("MODE_POP-ON");
                    }),
                    (t.ccBS = function () {
                      Ft.log("INFO", "BS - BackSpace"),
                        "MODE_TEXT" !== this.mode &&
                          (this.writeScreen.backSpace(),
                          this.writeScreen === this.displayedMemory &&
                            this.outputDataUpdate());
                    }),
                    (t.ccAOF = function () {}),
                    (t.ccAON = function () {}),
                    (t.ccDER = function () {
                      Ft.log("INFO", "DER- Delete to End of Row"),
                        this.writeScreen.clearToEndOfRow(),
                        this.outputDataUpdate();
                    }),
                    (t.ccRU = function (e) {
                      Ft.log("INFO", "RU(" + e + ") - Roll Up"),
                        (this.writeScreen = this.displayedMemory),
                        this.setMode("MODE_ROLL-UP"),
                        this.writeScreen.setRollUpRows(e);
                    }),
                    (t.ccFON = function () {
                      Ft.log("INFO", "FON - Flash On"),
                        this.writeScreen.setPen({ flash: !0 });
                    }),
                    (t.ccRDC = function () {
                      Ft.log("INFO", "RDC - Resume Direct Captioning"),
                        this.setMode("MODE_PAINT-ON");
                    }),
                    (t.ccTR = function () {
                      Ft.log("INFO", "TR"), this.setMode("MODE_TEXT");
                    }),
                    (t.ccRTD = function () {
                      Ft.log("INFO", "RTD"), this.setMode("MODE_TEXT");
                    }),
                    (t.ccEDM = function () {
                      Ft.log("INFO", "EDM - Erase Displayed Memory"),
                        this.displayedMemory.reset(),
                        this.outputDataUpdate(!0);
                    }),
                    (t.ccCR = function () {
                      Ft.log("INFO", "CR - Carriage Return"),
                        this.writeScreen.rollUp(),
                        this.outputDataUpdate(!0);
                    }),
                    (t.ccENM = function () {
                      Ft.log("INFO", "ENM - Erase Non-displayed Memory"),
                        this.nonDisplayedMemory.reset();
                    }),
                    (t.ccEOC = function () {
                      if (
                        (Ft.log("INFO", "EOC - End Of Caption"),
                        "MODE_POP-ON" === this.mode)
                      ) {
                        var e = this.displayedMemory;
                        (this.displayedMemory = this.nonDisplayedMemory),
                          (this.nonDisplayedMemory = e),
                          (this.writeScreen = this.nonDisplayedMemory),
                          Ft.log(
                            "TEXT",
                            "DISP: " + this.displayedMemory.getDisplayText()
                          );
                      }
                      this.outputDataUpdate(!0);
                    }),
                    (t.ccTO = function (e) {
                      Ft.log("INFO", "TO(" + e + ") - Tab Offset"),
                        this.writeScreen.moveCursor(e);
                    }),
                    (t.ccMIDROW = function (e) {
                      var t = { flash: !1 };
                      if (
                        ((t.underline = e % 2 == 1),
                        (t.italics = e >= 46),
                        t.italics)
                      )
                        t.foreground = "white";
                      else {
                        var r = Math.floor(e / 2) - 16;
                        t.foreground = [
                          "white",
                          "green",
                          "blue",
                          "cyan",
                          "red",
                          "yellow",
                          "magenta",
                        ][r];
                      }
                      Ft.log("INFO", "MIDROW: " + JSON.stringify(t)),
                        this.writeScreen.setPen(t);
                    }),
                    (t.outputDataUpdate = function (e) {
                      void 0 === e && (e = !1);
                      var t = Ft.time;
                      null !== t &&
                        this.outputFilter &&
                        (null !== this.cueStartTime ||
                        this.displayedMemory.isEmpty()
                          ? this.displayedMemory.equals(
                              this.lastOutputScreen
                            ) ||
                            (this.outputFilter.newCue(
                              this.cueStartTime,
                              t,
                              this.lastOutputScreen
                            ),
                            e &&
                              this.outputFilter.dispatchCue &&
                              this.outputFilter.dispatchCue(),
                            (this.cueStartTime = this.displayedMemory.isEmpty()
                              ? null
                              : t))
                          : (this.cueStartTime = t),
                        this.lastOutputScreen.copy(this.displayedMemory));
                    }),
                    (t.cueSplitAtTime = function (e) {
                      this.outputFilter &&
                        (this.displayedMemory.isEmpty() ||
                          (this.outputFilter.newCue &&
                            this.outputFilter.newCue(
                              this.cueStartTime,
                              e,
                              this.displayedMemory
                            ),
                          (this.cueStartTime = e)));
                    }),
                    e
                  );
                })(),
                Kt = (function () {
                  function e(e, t, r) {
                    (this.field = void 0),
                      (this.outputs = void 0),
                      (this.channels = void 0),
                      (this.currChNr = void 0),
                      (this.lastCmdA = void 0),
                      (this.lastCmdB = void 0),
                      (this.lastTime = void 0),
                      (this.dataCounters = void 0),
                      (this.field = e || 1),
                      (this.outputs = [t, r]),
                      (this.channels = [new jt(1, t), new jt(2, r)]),
                      (this.currChNr = -1),
                      (this.lastCmdA = null),
                      (this.lastCmdB = null),
                      (this.lastTime = null),
                      (this.dataCounters = {
                        padding: 0,
                        char: 0,
                        cmd: 0,
                        other: 0,
                      });
                  }
                  var t = e.prototype;
                  return (
                    (t.getHandler = function (e) {
                      return this.channels[e].getHandler();
                    }),
                    (t.setHandler = function (e, t) {
                      this.channels[e].setHandler(t);
                    }),
                    (t.addData = function (e, t) {
                      var r,
                        a,
                        b,
                        n = !1;
                      (this.lastTime = e), Ft.setTime(e);
                      for (var i = 0; i < t.length; i += 2)
                        (a = 127 & t[i]),
                          (b = 127 & t[i + 1]),
                          0 !== a || 0 !== b
                            ? (Ft.log(
                                "DATA",
                                "[" +
                                  Mt([t[i], t[i + 1]]) +
                                  "] -> (" +
                                  Mt([a, b]) +
                                  ")"
                              ),
                              (r = this.parseCmd(a, b)) ||
                                (r = this.parseMidrow(a, b)),
                              r || (r = this.parsePAC(a, b)),
                              r || (r = this.parseBackgroundAttributes(a, b)),
                              r ||
                                ((n = this.parseChars(a, b)) &&
                                  (this.currChNr && this.currChNr >= 0
                                    ? this.channels[
                                        this.currChNr - 1
                                      ].insertChars(n)
                                    : Ft.log(
                                        "WARNING",
                                        "No channel found yet. TEXT-MODE?"
                                      ))),
                              r
                                ? (this.dataCounters.cmd += 2)
                                : n
                                ? (this.dataCounters.char += 2)
                                : ((this.dataCounters.other += 2),
                                  Ft.log(
                                    "WARNING",
                                    "Couldn't parse cleaned data " +
                                      Mt([a, b]) +
                                      " orig: " +
                                      Mt([t[i], t[i + 1]])
                                  )))
                            : (this.dataCounters.padding += 2);
                    }),
                    (t.parseCmd = function (a, b) {
                      var e = null;
                      if (
                        !(
                          ((20 === a || 28 === a) && b >= 32 && b <= 47) ||
                          ((23 === a || 31 === a) && b >= 33 && b <= 35)
                        )
                      )
                        return !1;
                      if (a === this.lastCmdA && b === this.lastCmdB)
                        return (
                          (this.lastCmdA = null),
                          (this.lastCmdB = null),
                          Ft.log(
                            "DEBUG",
                            "Repeated command (" + Mt([a, b]) + ") is dropped"
                          ),
                          !0
                        );
                      e = 20 === a || 23 === a ? 1 : 2;
                      var t = this.channels[e - 1];
                      return (
                        20 === a || 28 === a
                          ? 32 === b
                            ? t.ccRCL()
                            : 33 === b
                            ? t.ccBS()
                            : 34 === b
                            ? t.ccAOF()
                            : 35 === b
                            ? t.ccAON()
                            : 36 === b
                            ? t.ccDER()
                            : 37 === b
                            ? t.ccRU(2)
                            : 38 === b
                            ? t.ccRU(3)
                            : 39 === b
                            ? t.ccRU(4)
                            : 40 === b
                            ? t.ccFON()
                            : 41 === b
                            ? t.ccRDC()
                            : 42 === b
                            ? t.ccTR()
                            : 43 === b
                            ? t.ccRTD()
                            : 44 === b
                            ? t.ccEDM()
                            : 45 === b
                            ? t.ccCR()
                            : 46 === b
                            ? t.ccENM()
                            : 47 === b && t.ccEOC()
                          : t.ccTO(b - 32),
                        (this.lastCmdA = a),
                        (this.lastCmdB = b),
                        (this.currChNr = e),
                        !0
                      );
                    }),
                    (t.parseMidrow = function (a, b) {
                      var e = null;
                      return (
                        (17 === a || 25 === a) &&
                        b >= 32 &&
                        b <= 47 &&
                        ((e = 17 === a ? 1 : 2) !== this.currChNr
                          ? (Ft.log(
                              "ERROR",
                              "Mismatch channel in midrow parsing"
                            ),
                            !1)
                          : (this.channels[e - 1].ccMIDROW(b),
                            Ft.log("DEBUG", "MIDROW (" + Mt([a, b]) + ")"),
                            !0))
                      );
                    }),
                    (t.parsePAC = function (a, b) {
                      var e,
                        t = null;
                      if (
                        !(
                          (((a >= 17 && a <= 23) || (a >= 25 && a <= 31)) &&
                            b >= 64 &&
                            b <= 127) ||
                          ((16 === a || 24 === a) && b >= 64 && b <= 95)
                        )
                      )
                        return !1;
                      if (a === this.lastCmdA && b === this.lastCmdB)
                        return (
                          (this.lastCmdA = null), (this.lastCmdB = null), !0
                        );
                      (e = a <= 23 ? 1 : 2),
                        (t =
                          b >= 64 && b <= 95
                            ? 1 === e
                              ? Ct[a]
                              : It[a]
                            : 1 === e
                            ? Ot[a]
                            : xt[a]);
                      var r = this.interpretPAC(t, b);
                      return (
                        this.channels[e - 1].setPAC(r),
                        (this.lastCmdA = a),
                        (this.lastCmdB = b),
                        (this.currChNr = e),
                        !0
                      );
                    }),
                    (t.interpretPAC = function (e, t) {
                      var r = t,
                        n = {
                          color: null,
                          italics: !1,
                          indent: null,
                          underline: !1,
                          row: e,
                        };
                      return (
                        (r = t > 95 ? t - 96 : t - 64),
                        (n.underline = 1 == (1 & r)),
                        r <= 13
                          ? (n.color = [
                              "white",
                              "green",
                              "blue",
                              "cyan",
                              "red",
                              "yellow",
                              "magenta",
                              "white",
                            ][Math.floor(r / 2)])
                          : r <= 15
                          ? ((n.italics = !0), (n.color = "white"))
                          : (n.indent = 4 * Math.floor((r - 16) / 2)),
                        n
                      );
                    }),
                    (t.parseChars = function (a, b) {
                      var e = null,
                        t = null,
                        r = null;
                      if (
                        (a >= 25 ? ((e = 2), (r = a - 8)) : ((e = 1), (r = a)),
                        r >= 17 && r <= 19)
                      ) {
                        var n = b;
                        (n = 17 === r ? b + 80 : 18 === r ? b + 112 : b + 144),
                          Ft.log(
                            "INFO",
                            "Special char '" + Dt(n) + "' in channel " + e
                          ),
                          (t = [n]);
                      } else
                        a >= 32 && a <= 127 && (t = 0 === b ? [a] : [a, b]);
                      if (t) {
                        var o = Mt(t);
                        Ft.log("DEBUG", "Char codes =  " + o.join(",")),
                          (this.lastCmdA = null),
                          (this.lastCmdB = null);
                      }
                      return t;
                    }),
                    (t.parseBackgroundAttributes = function (a, b) {
                      var e, t, r;
                      return (
                        (((16 === a || 24 === a) && b >= 32 && b <= 47) ||
                          ((23 === a || 31 === a) && b >= 45 && b <= 47)) &&
                        ((e = {}),
                        16 === a || 24 === a
                          ? ((t = Math.floor((b - 32) / 2)),
                            (e.background = Pt[t]),
                            b % 2 == 1 &&
                              (e.background = e.background + "_semi"))
                          : 45 === b
                          ? (e.background = "transparent")
                          : ((e.foreground = "black"),
                            47 === b && (e.underline = !0)),
                        (r = a < 24 ? 1 : 2),
                        this.channels[r - 1].setBkgData(e),
                        (this.lastCmdA = null),
                        (this.lastCmdB = null),
                        !0)
                      );
                    }),
                    (t.reset = function () {
                      for (var i = 0; i < this.channels.length; i++)
                        this.channels[i] && this.channels[i].reset();
                      (this.lastCmdA = null), (this.lastCmdB = null);
                    }),
                    (t.cueSplitAtTime = function (e) {
                      for (var i = 0; i < this.channels.length; i++)
                        this.channels[i] && this.channels[i].cueSplitAtTime(e);
                    }),
                    e
                  );
                })(),
                Ht = (function () {
                  function e(e, t) {
                    (this.timelineController = void 0),
                      (this.trackName = void 0),
                      (this.startTime = void 0),
                      (this.endTime = void 0),
                      (this.screen = void 0),
                      (this.timelineController = e),
                      (this.trackName = t),
                      (this.startTime = null),
                      (this.endTime = null),
                      (this.screen = null);
                  }
                  var t = e.prototype;
                  return (
                    (t.dispatchCue = function () {
                      null !== this.startTime &&
                        (this.timelineController.addCues(
                          this.trackName,
                          this.startTime,
                          this.endTime,
                          this.screen
                        ),
                        (this.startTime = null));
                    }),
                    (t.newCue = function (e, t, r) {
                      (null === this.startTime || this.startTime > e) &&
                        (this.startTime = e),
                        (this.endTime = t),
                        (this.screen = r),
                        this.timelineController.createCaptionsTrack(
                          this.trackName
                        );
                    }),
                    e
                  );
                })(),
                Vt = function (e, t, r) {
                  return e.substr(r || 0, t.length) === t;
                },
                Yt = function (text) {
                  for (var e = 5381, i = text.length; i; )
                    e = (33 * e) ^ text.charCodeAt(--i);
                  return (e >>> 0).toString();
                },
                qt = {
                  parse: function (e, t, r, n, o, l) {
                    var d,
                      c = Object(Ve.utf8ArrayToStr)(new Uint8Array(e))
                        .trim()
                        .replace(/\r\n|\n\r|\n|\r/g, "\n")
                        .split("\n"),
                      h = "00:00.000",
                      v = 0,
                      m = 0,
                      y = 0,
                      E = [],
                      T = !0,
                      S = !1,
                      _ = new Rt();
                    (_.oncue = function (e) {
                      var t = r[n],
                        o = r.ccOffset;
                      t &&
                        t.new &&
                        (void 0 !== m
                          ? (o = r.ccOffset = t.start)
                          : (function (e, t, r) {
                              var n = e[t],
                                o = e[n.prevCC];
                              if (!o || (!o.new && n.new))
                                return (
                                  (e.ccOffset = e.presentationOffset = n.start),
                                  void (n.new = !1)
                                );
                              for (; o && o.new; )
                                (e.ccOffset += n.start - o.start),
                                  (n.new = !1),
                                  (o = e[(n = o).prevCC]);
                              e.presentationOffset = r;
                            })(r, n, y)),
                        y && (o = y - r.presentationOffset),
                        S && ((e.startTime += o - m), (e.endTime += o - m)),
                        (e.id =
                          Yt(e.startTime.toString()) +
                          Yt(e.endTime.toString()) +
                          Yt(e.text)),
                        (e.text = decodeURIComponent(
                          encodeURIComponent(e.text)
                        )),
                        e.endTime > 0 && E.push(e);
                    }),
                      (_.onparsingerror = function (e) {
                        d = e;
                      }),
                      (_.onflush = function () {
                        d && l ? l(d) : o(E);
                      }),
                      c.forEach(function (line) {
                        if (T) {
                          if (Vt(line, "X-TIMESTAMP-MAP=")) {
                            (T = !1),
                              (S = !0),
                              line
                                .substr(16)
                                .split(",")
                                .forEach(function (e) {
                                  Vt(e, "LOCAL:")
                                    ? (h = e.substr(6))
                                    : Vt(e, "MPEGTS:") &&
                                      (v = parseInt(e.substr(7)));
                                });
                            try {
                              t + (9e4 * r[n].start || 0) < 0 &&
                                (t += 8589934592),
                                (v -= t),
                                (m =
                                  (function (e) {
                                    var t = parseInt(e.substr(-3)),
                                      r = parseInt(e.substr(-6, 2)),
                                      n = parseInt(e.substr(-9, 2)),
                                      o =
                                        e.length > 9
                                          ? parseInt(
                                              e.substr(0, e.indexOf(":"))
                                            )
                                          : 0;
                                    if (
                                      !(
                                        Object(f.isFiniteNumber)(t) &&
                                        Object(f.isFiniteNumber)(r) &&
                                        Object(f.isFiniteNumber)(n) &&
                                        Object(f.isFiniteNumber)(o)
                                      )
                                    )
                                      throw Error(
                                        "Malformed X-TIMESTAMP-MAP: Local:" + e
                                      );
                                    return (
                                      (t += 1e3 * r),
                                      (t += 6e4 * n),
                                      (t += 36e5 * o)
                                    );
                                  })(h) / 1e3),
                                (y = v / 9e4);
                            } catch (e) {
                              (S = !1), (d = e);
                            }
                            return;
                          }
                          "" === line && (T = !1);
                        }
                        _.parse(line + "\n");
                      }),
                      _.flush();
                  },
                };
              function Wt(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              }
              function zt(e, t) {
                return (
                  e && e.label === t.name && !(e.textTrack1 || e.textTrack2)
                );
              }
              var Xt = (function (e) {
                var t, r;
                function n(t) {
                  var r;
                  if (
                    (((r =
                      e.call(
                        this,
                        t,
                        h.default.MEDIA_ATTACHING,
                        h.default.MEDIA_DETACHING,
                        h.default.FRAG_PARSING_USERDATA,
                        h.default.FRAG_DECRYPTED,
                        h.default.MANIFEST_LOADING,
                        h.default.MANIFEST_LOADED,
                        h.default.FRAG_LOADED,
                        h.default.INIT_PTS_FOUND
                      ) || this).media = null),
                    (r.config = void 0),
                    (r.enabled = !0),
                    (r.Cues = void 0),
                    (r.textTracks = []),
                    (r.tracks = []),
                    (r.initPTS = []),
                    (r.unparsedVttFrags = []),
                    (r.cueRanges = []),
                    (r.captionsTracks = {}),
                    (r.captionsProperties = void 0),
                    (r.cea608Parser = void 0),
                    (r.lastSn = -1),
                    (r.prevCC = -1),
                    (r.vttCCs = null),
                    (r.hls = t),
                    (r.config = t.config),
                    (r.Cues = t.config.cueHandler),
                    (r.captionsProperties = {
                      textTrack1: {
                        label: r.config.captionsTextTrack1Label,
                        languageCode: r.config.captionsTextTrack1LanguageCode,
                      },
                      textTrack2: {
                        label: r.config.captionsTextTrack2Label,
                        languageCode: r.config.captionsTextTrack2LanguageCode,
                      },
                    }),
                    r.config.enableCEA708Captions)
                  ) {
                    var n = new Ht(Wt(r), "textTrack1"),
                      o = new Ht(Wt(r), "textTrack2");
                    r.cea608Parser = new Kt(0, n, o);
                  }
                  return r;
                }
                (r = e),
                  ((t = n).prototype = Object.create(r.prototype)),
                  (t.prototype.constructor = t),
                  (t.__proto__ = r);
                var o = n.prototype;
                return (
                  (o.addCues = function (e, t, r, n) {
                    for (
                      var o, l, d, c, f = this.cueRanges, h = !1, i = f.length;
                      i--;

                    ) {
                      var v = f[i],
                        m =
                          ((o = v[0]),
                          (l = v[1]),
                          (d = t),
                          (c = r),
                          Math.min(l, c) - Math.max(o, d));
                      if (
                        m >= 0 &&
                        ((v[0] = Math.min(v[0], t)),
                        (v[1] = Math.max(v[1], r)),
                        (h = !0),
                        m / (r - t) > 0.5)
                      )
                        return;
                    }
                    h || f.push([t, r]),
                      this.Cues.newCue(this.captionsTracks[e], t, r, n);
                  }),
                  (o.onInitPtsFound = function (data) {
                    var e = this,
                      t = data.frag,
                      r = data.id,
                      n = data.initPTS,
                      o = this.unparsedVttFrags;
                    "main" === r && (this.initPTS[t.cc] = n),
                      o.length &&
                        ((this.unparsedVttFrags = []),
                        o.forEach(function (t) {
                          e.onFragLoaded(t);
                        }));
                  }),
                  (o.getExistingTrack = function (e) {
                    var t = this.media;
                    if (t)
                      for (var i = 0; i < t.textTracks.length; i++) {
                        var r = t.textTracks[i];
                        if (r[e]) return r;
                      }
                    return null;
                  }),
                  (o.createCaptionsTrack = function (e) {
                    var t = this.captionsProperties,
                      r = this.captionsTracks,
                      n = this.media,
                      o = t[e],
                      label = o.label,
                      l = o.languageCode;
                    if (!r[e]) {
                      var d = this.getExistingTrack(e);
                      if (d) (r[e] = d), qe(r[e]), Ye(r[e], n);
                      else {
                        var c = this.createTextTrack("captions", label, l);
                        c && ((c[e] = !0), (r[e] = c));
                      }
                    }
                  }),
                  (o.createTextTrack = function (e, label, t) {
                    var r = this.media;
                    if (r) return r.addTextTrack(e, label, t);
                  }),
                  (o.destroy = function () {
                    e.prototype.destroy.call(this);
                  }),
                  (o.onMediaAttaching = function (data) {
                    (this.media = data.media), this._cleanTracks();
                  }),
                  (o.onMediaDetaching = function () {
                    var e = this.captionsTracks;
                    Object.keys(e).forEach(function (t) {
                      qe(e[t]), delete e[t];
                    });
                  }),
                  (o.onManifestLoading = function () {
                    (this.lastSn = -1),
                      (this.prevCC = -1),
                      (this.vttCCs = {
                        ccOffset: 0,
                        presentationOffset: 0,
                        0: { start: 0, prevCC: -1, new: !1 },
                      }),
                      this._cleanTracks();
                  }),
                  (o._cleanTracks = function () {
                    var e = this.media;
                    if (e) {
                      var t = e.textTracks;
                      if (t) for (var i = 0; i < t.length; i++) qe(t[i]);
                    }
                  }),
                  (o.onManifestLoaded = function (data) {
                    var e = this;
                    if (
                      ((this.textTracks = []),
                      (this.unparsedVttFrags = this.unparsedVttFrags || []),
                      (this.initPTS = []),
                      (this.cueRanges = []),
                      this.config.enableWebVTT)
                    ) {
                      this.tracks = data.subtitles || [];
                      var t = this.media ? this.media.textTracks : [];
                      this.tracks.forEach(function (track, r) {
                        var n;
                        if (r < t.length) {
                          for (var o = null, i = 0; i < t.length; i++)
                            if (zt(t[i], track)) {
                              o = t[i];
                              break;
                            }
                          o && (n = o);
                        }
                        n ||
                          (n = e.createTextTrack(
                            "subtitles",
                            track.name,
                            track.lang
                          )),
                          track.default
                            ? (n.mode = e.hls.subtitleDisplay
                                ? "showing"
                                : "hidden")
                            : (n.mode = "disabled"),
                          e.textTracks.push(n);
                      });
                    }
                  }),
                  (o.onFragLoaded = function (data) {
                    var e = data.frag,
                      t = data.payload,
                      r = this.cea608Parser,
                      n = this.initPTS,
                      o = this.lastSn,
                      l = this.unparsedVttFrags;
                    if ("main" === e.type) {
                      var d = e.sn;
                      e.sn !== o + 1 && r && r.reset(), (this.lastSn = d);
                    } else if ("subtitle" === e.type)
                      if (t.byteLength) {
                        if (!Object(f.isFiniteNumber)(n[e.cc]))
                          return (
                            l.push(data),
                            void (
                              n.length &&
                              this.hls.trigger(
                                h.default.SUBTITLE_FRAG_PROCESSED,
                                { success: !1, frag: e }
                              )
                            )
                          );
                        var c = e.decryptdata;
                        (null != c &&
                          null != c.key &&
                          "AES-128" === c.method) ||
                          this._parseVTTs(e, t);
                      } else
                        this.hls.trigger(h.default.SUBTITLE_FRAG_PROCESSED, {
                          success: !1,
                          frag: e,
                        });
                  }),
                  (o._parseVTTs = function (e, t) {
                    var r = this.hls,
                      n = this.prevCC,
                      o = this.textTracks,
                      l = this.vttCCs;
                    l[e.cc] ||
                      ((l[e.cc] = { start: e.start, prevCC: n, new: !0 }),
                      (this.prevCC = e.cc)),
                      qt.parse(
                        t,
                        this.initPTS[e.cc],
                        l,
                        e.cc,
                        function (t) {
                          var n = o[e.level];
                          "disabled" !== n.mode
                            ? (t.forEach(function (e) {
                                if (!n.cues.getCueById(e.id))
                                  try {
                                    if ((n.addCue(e), !n.cues.getCueById(e.id)))
                                      throw new Error(
                                        "addCue is failed for: " + e
                                      );
                                  } catch (r) {
                                    v.logger.debug(
                                      "Failed occurred on adding cues: " + r
                                    );
                                    var t = new window.TextTrackCue(
                                      e.startTime,
                                      e.endTime,
                                      e.text
                                    );
                                    (t.id = e.id), n.addCue(t);
                                  }
                              }),
                              r.trigger(h.default.SUBTITLE_FRAG_PROCESSED, {
                                success: !0,
                                frag: e,
                              }))
                            : r.trigger(h.default.SUBTITLE_FRAG_PROCESSED, {
                                success: !1,
                                frag: e,
                              });
                        },
                        function (t) {
                          v.logger.log("Failed to parse VTT cue: " + t),
                            r.trigger(h.default.SUBTITLE_FRAG_PROCESSED, {
                              success: !1,
                              frag: e,
                            });
                        }
                      );
                  }),
                  (o.onFragDecrypted = function (data) {
                    var e = data.frag,
                      t = data.payload;
                    if ("subtitle" === e.type) {
                      if (!Object(f.isFiniteNumber)(this.initPTS[e.cc]))
                        return void this.unparsedVttFrags.push(data);
                      this._parseVTTs(e, t);
                    }
                  }),
                  (o.onFragParsingUserdata = function (data) {
                    if (this.enabled && this.cea608Parser)
                      for (var i = 0; i < data.samples.length; i++) {
                        var e = data.samples[i].bytes;
                        if (e) {
                          var t = this.extractCea608Data(e);
                          this.cea608Parser.addData(data.samples[i].pts, t);
                        }
                      }
                  }),
                  (o.extractCea608Data = function (e) {
                    for (
                      var t, r, n, o = 31 & e[0], l = 2, d = [], c = 0;
                      c < o;
                      c++
                    )
                      (t = e[l++]),
                        (r = 127 & e[l++]),
                        (n = 127 & e[l++]),
                        (0 === r && 0 === n) ||
                          (0 != (4 & t) &&
                            0 == (3 & t) &&
                            (d.push(r), d.push(n)));
                    return d;
                  }),
                  n
                );
              })(y);
              function Qt(e, t) {
                for (var i = 0; i < t.length; i++) {
                  var r = t[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              function Jt(e) {
                for (var t = [], i = 0; i < e.length; i++) {
                  var track = e[i];
                  "subtitles" === track.kind && track.label && t.push(e[i]);
                }
                return t;
              }
              var $t,
                Zt = (function (e) {
                  var t, r;
                  function n(t) {
                    var r;
                    return (
                      ((r =
                        e.call(
                          this,
                          t,
                          h.default.MEDIA_ATTACHED,
                          h.default.MEDIA_DETACHING,
                          h.default.MANIFEST_LOADED,
                          h.default.SUBTITLE_TRACK_LOADED
                        ) || this).tracks = []),
                      (r.trackId = -1),
                      (r.media = null),
                      (r.stopped = !0),
                      (r.subtitleDisplay = !0),
                      (r.queuedDefaultTrack = null),
                      r
                    );
                  }
                  (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r);
                  var o,
                    l,
                    d,
                    c = n.prototype;
                  return (
                    (c.destroy = function () {
                      y.prototype.destroy.call(this);
                    }),
                    (c.onMediaAttached = function (data) {
                      var e = this;
                      (this.media = data.media),
                        this.media &&
                          (Object(f.isFiniteNumber)(this.queuedDefaultTrack) &&
                            ((this.subtitleTrack = this.queuedDefaultTrack),
                            (this.queuedDefaultTrack = null)),
                          (this.trackChangeListener =
                            this._onTextTracksChanged.bind(this)),
                          (this.useTextTrackPolling = !(
                            this.media.textTracks &&
                            "onchange" in this.media.textTracks
                          )),
                          this.useTextTrackPolling
                            ? (this.subtitlePollingInterval = setInterval(
                                function () {
                                  e.trackChangeListener();
                                },
                                500
                              ))
                            : this.media.textTracks.addEventListener(
                                "change",
                                this.trackChangeListener
                              ));
                    }),
                    (c.onMediaDetaching = function () {
                      this.media &&
                        (this.useTextTrackPolling
                          ? clearInterval(this.subtitlePollingInterval)
                          : this.media.textTracks.removeEventListener(
                              "change",
                              this.trackChangeListener
                            ),
                        Object(f.isFiniteNumber)(this.subtitleTrack) &&
                          (this.queuedDefaultTrack = this.subtitleTrack),
                        Jt(this.media.textTracks).forEach(function (track) {
                          qe(track);
                        }),
                        (this.subtitleTrack = -1),
                        (this.media = null));
                    }),
                    (c.onManifestLoaded = function (data) {
                      var e = this,
                        t = data.subtitles || [];
                      (this.tracks = t),
                        this.hls.trigger(h.default.SUBTITLE_TRACKS_UPDATED, {
                          subtitleTracks: t,
                        }),
                        t.forEach(function (track) {
                          track.default &&
                            (e.media
                              ? (e.subtitleTrack = track.id)
                              : (e.queuedDefaultTrack = track.id));
                        });
                    }),
                    (c.onSubtitleTrackLoaded = function (data) {
                      var e = this,
                        t = data.id,
                        details = data.details,
                        r = this.trackId,
                        n = this.tracks,
                        o = n[r];
                      if (t >= n.length || t !== r || !o || this.stopped)
                        this._clearReloadTimer();
                      else if (
                        (v.logger.log("subtitle track " + t + " loaded"),
                        details.live)
                      ) {
                        var l = fe(o.details, details, data.stats.trequest);
                        v.logger.log(
                          "Reloading live subtitle playlist in " + l + "ms"
                        ),
                          (this.timer = setTimeout(function () {
                            e._loadCurrentTrack();
                          }, l));
                      } else this._clearReloadTimer();
                    }),
                    (c.startLoad = function () {
                      (this.stopped = !1), this._loadCurrentTrack();
                    }),
                    (c.stopLoad = function () {
                      (this.stopped = !0), this._clearReloadTimer();
                    }),
                    (c._clearReloadTimer = function () {
                      this.timer &&
                        (clearTimeout(this.timer), (this.timer = null));
                    }),
                    (c._loadCurrentTrack = function () {
                      var e = this.trackId,
                        t = this.tracks,
                        r = this.hls,
                        n = t[e];
                      e < 0 ||
                        !n ||
                        (n.details && !n.details.live) ||
                        (v.logger.log("Loading subtitle track " + e),
                        r.trigger(h.default.SUBTITLE_TRACK_LOADING, {
                          url: n.url,
                          id: e,
                        }));
                    }),
                    (c._toggleTrackModes = function (e) {
                      var t = this.media,
                        r = this.subtitleDisplay,
                        n = this.trackId;
                      if (t) {
                        var o = Jt(t.textTracks);
                        if (-1 === e)
                          [].slice.call(o).forEach(function (track) {
                            track.mode = "disabled";
                          });
                        else {
                          var l = o[n];
                          l && (l.mode = "disabled");
                        }
                        var d = o[e];
                        d && (d.mode = r ? "showing" : "hidden");
                      }
                    }),
                    (c._setSubtitleTrackInternal = function (e) {
                      var t = this.hls,
                        r = this.tracks;
                      !Object(f.isFiniteNumber)(e) ||
                        e < -1 ||
                        e >= r.length ||
                        ((this.trackId = e),
                        v.logger.log("Switching to subtitle track " + e),
                        t.trigger(h.default.SUBTITLE_TRACK_SWITCH, { id: e }),
                        this._loadCurrentTrack());
                    }),
                    (c._onTextTracksChanged = function () {
                      if (this.media) {
                        for (
                          var e = -1, t = Jt(this.media.textTracks), r = 0;
                          r < t.length;
                          r++
                        )
                          if ("hidden" === t[r].mode) e = r;
                          else if ("showing" === t[r].mode) {
                            e = r;
                            break;
                          }
                        this.subtitleTrack = e;
                      }
                    }),
                    (o = n),
                    (l = [
                      {
                        key: "subtitleTracks",
                        get: function () {
                          return this.tracks;
                        },
                      },
                      {
                        key: "subtitleTrack",
                        get: function () {
                          return this.trackId;
                        },
                        set: function (e) {
                          this.trackId !== e &&
                            (this._toggleTrackModes(e),
                            this._setSubtitleTrackInternal(e));
                        },
                      },
                    ]) && Qt(o.prototype, l),
                    d && Qt(o, d),
                    n
                  );
                })(y),
                er = r("./src/crypt/decrypter.js"),
                rr = window.performance,
                ir = (function (e) {
                  var t, r;
                  function n(t, r) {
                    var n;
                    return (
                      ((n =
                        e.call(
                          this,
                          t,
                          h.default.MEDIA_ATTACHED,
                          h.default.MEDIA_DETACHING,
                          h.default.ERROR,
                          h.default.KEY_LOADED,
                          h.default.FRAG_LOADED,
                          h.default.SUBTITLE_TRACKS_UPDATED,
                          h.default.SUBTITLE_TRACK_SWITCH,
                          h.default.SUBTITLE_TRACK_LOADED,
                          h.default.SUBTITLE_FRAG_PROCESSED,
                          h.default.LEVEL_UPDATED
                        ) || this).fragmentTracker = r),
                      (n.config = t.config),
                      (n.state = _e),
                      (n.tracks = []),
                      (n.tracksBuffered = []),
                      (n.currentTrackId = -1),
                      (n.decrypter = new er.default(t, t.config)),
                      (n.lastAVStart = 0),
                      (n._onMediaSeeking = n.onMediaSeeking.bind(
                        (function (e) {
                          if (void 0 === e)
                            throw new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called"
                            );
                          return e;
                        })(n)
                      )),
                      n
                    );
                  }
                  (r = e),
                    ((t = n).prototype = Object.create(r.prototype)),
                    (t.prototype.constructor = t),
                    (t.__proto__ = r);
                  var o = n.prototype;
                  return (
                    (o.onSubtitleFragProcessed = function (data) {
                      var e = data.frag,
                        t = data.success;
                      if (((this.fragPrevious = e), (this.state = Re), t)) {
                        var r = this.tracksBuffered[this.currentTrackId];
                        if (r) {
                          for (var n, o = e.start, i = 0; i < r.length; i++)
                            if (o >= r[i].start && o <= r[i].end) {
                              n = r[i];
                              break;
                            }
                          var l = e.start + e.duration;
                          n
                            ? (n.end = l)
                            : ((n = { start: o, end: l }), r.push(n));
                        }
                      }
                    }),
                    (o.onMediaAttached = function (e) {
                      var t = e.media;
                      (this.media = t),
                        t.addEventListener("seeking", this._onMediaSeeking),
                        (this.state = Re);
                    }),
                    (o.onMediaDetaching = function () {
                      var e = this;
                      this.media &&
                        (this.media.removeEventListener(
                          "seeking",
                          this._onMediaSeeking
                        ),
                        this.fragmentTracker.removeAllFragments(),
                        (this.currentTrackId = -1),
                        this.tracks.forEach(function (track) {
                          e.tracksBuffered[track.id] = [];
                        }),
                        (this.media = null),
                        (this.state = _e));
                    }),
                    (o.onError = function (data) {
                      var e = data.frag;
                      e && "subtitle" === e.type && (this.state = Re);
                    }),
                    (o.onSubtitleTracksUpdated = function (data) {
                      var e = this;
                      v.logger.log("subtitle tracks updated"),
                        (this.tracksBuffered = []),
                        (this.tracks = data.subtitleTracks),
                        this.tracks.forEach(function (track) {
                          e.tracksBuffered[track.id] = [];
                        });
                    }),
                    (o.onSubtitleTrackSwitch = function (data) {
                      if (
                        ((this.currentTrackId = data.id),
                        this.tracks &&
                          this.tracks.length &&
                          -1 !== this.currentTrackId)
                      ) {
                        var e = this.tracks[this.currentTrackId];
                        e && e.details && this.setInterval(500);
                      } else this.clearInterval();
                    }),
                    (o.onSubtitleTrackLoaded = function (data) {
                      var e = data.id,
                        details = data.details,
                        t = this.currentTrackId,
                        r = this.tracks,
                        n = r[t];
                      e >= r.length ||
                        e !== t ||
                        !n ||
                        (details.live &&
                          (function (e, t, r) {
                            void 0 === r && (r = 0);
                            var n = -1;
                            ce(e, t, function (e, t, r) {
                              (t.start = e.start), (n = r);
                            });
                            var o = t.fragments;
                            if (n < 0)
                              o.forEach(function (e) {
                                e.start += r;
                              });
                            else
                              for (var i = n + 1; i < o.length; i++)
                                o[i].start = o[i - 1].start + o[i - 1].duration;
                          })(n.details, details, this.lastAVStart),
                        (n.details = details),
                        this.setInterval(500));
                    }),
                    (o.onKeyLoaded = function () {
                      this.state === ke && (this.state = Re);
                    }),
                    (o.onFragLoaded = function (data) {
                      var e = this.fragCurrent,
                        t = data.frag.decryptdata,
                        r = data.frag,
                        n = this.hls;
                      if (
                        this.state === Le &&
                        e &&
                        "subtitle" === data.frag.type &&
                        e.sn === data.frag.sn &&
                        data.payload.byteLength > 0 &&
                        t &&
                        t.key &&
                        "AES-128" === t.method
                      ) {
                        var o = rr.now();
                        this.decrypter.decrypt(
                          data.payload,
                          t.key.buffer,
                          t.iv.buffer,
                          function (e) {
                            var t = rr.now();
                            n.trigger(h.default.FRAG_DECRYPTED, {
                              frag: r,
                              payload: e,
                              stats: { tstart: o, tdecrypt: t },
                            });
                          }
                        );
                      }
                    }),
                    (o.onLevelUpdated = function (e) {
                      var t = e.details.fragments;
                      this.lastAVStart = t.length ? t[0].start : 0;
                    }),
                    (o.doTick = function () {
                      if (this.media)
                        switch (this.state) {
                          case Re:
                            var e = this.config,
                              t = this.currentTrackId,
                              r = this.fragmentTracker,
                              n = this.media,
                              o = this.tracks;
                            if (!o || !o[t] || !o[t].details) break;
                            var l,
                              d = e.maxBufferHole,
                              c = e.maxFragLookUpTolerance,
                              f = Math.min(
                                e.maxBufferLength,
                                e.maxMaxBufferLength
                              ),
                              m = J.bufferedInfo(
                                this._getBuffered(),
                                n.currentTime,
                                d
                              ),
                              y = m.end,
                              E = m.len,
                              T = o[t].details,
                              S = T.fragments,
                              _ = S.length,
                              A = S[_ - 1].start + S[_ - 1].duration;
                            if (E > f) return;
                            var R = this.fragPrevious;
                            y < A
                              ? (R &&
                                  T.hasProgramDateTime &&
                                  (l = ve(S, R.endProgramDateTime, c)),
                                l || (l = me(R, S, y, c)))
                              : (l = S[_ - 1]),
                              l && l.encrypted
                                ? (v.logger.log("Loading key for " + l.sn),
                                  (this.state = ke),
                                  this.hls.trigger(h.default.KEY_LOADING, {
                                    frag: l,
                                  }))
                                : l &&
                                  r.getState(l) === V &&
                                  ((this.fragCurrent = l),
                                  (this.state = Le),
                                  this.hls.trigger(h.default.FRAG_LOADING, {
                                    frag: l,
                                  }));
                        }
                      else this.state = Re;
                    }),
                    (o.stopLoad = function () {
                      (this.lastAVStart = 0), e.prototype.stopLoad.call(this);
                    }),
                    (o._getBuffered = function () {
                      return this.tracksBuffered[this.currentTrackId] || [];
                    }),
                    (o.onMediaSeeking = function () {
                      this.fragPrevious = null;
                    }),
                    n
                  );
                })(Ue);
              !(function (e) {
                (e.WIDEVINE = "com.widevine.alpha"),
                  (e.PLAYREADY = "com.microsoft.playready");
              })($t || ($t = {}));
              var ar =
                "undefined" != typeof window &&
                window.navigator &&
                window.navigator.requestMediaKeySystemAccess
                  ? window.navigator.requestMediaKeySystemAccess.bind(
                      window.navigator
                    )
                  : null;
              function nr(e, t) {
                for (var i = 0; i < t.length; i++) {
                  var r = t[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              var sr = (function (e) {
                var t, r;
                function n(t) {
                  var r;
                  return (
                    ((r =
                      e.call(
                        this,
                        t,
                        h.default.MEDIA_ATTACHED,
                        h.default.MEDIA_DETACHED,
                        h.default.MANIFEST_PARSED
                      ) || this)._widevineLicenseUrl = void 0),
                    (r._licenseXhrSetup = void 0),
                    (r._emeEnabled = void 0),
                    (r._requestMediaKeySystemAccess = void 0),
                    (r._config = void 0),
                    (r._mediaKeysList = []),
                    (r._media = null),
                    (r._hasSetMediaKeys = !1),
                    (r._requestLicenseFailureCount = 0),
                    (r._onMediaEncrypted = function (e) {
                      v.logger.log(
                        'Media is encrypted using "' +
                          e.initDataType +
                          '" init data type'
                      ),
                        r._attemptSetMediaKeys(),
                        r._generateRequestWithPreferredKeySession(
                          e.initDataType,
                          e.initData
                        );
                    }),
                    (r._config = t.config),
                    (r._widevineLicenseUrl = r._config.widevineLicenseUrl),
                    (r._licenseXhrSetup = r._config.licenseXhrSetup),
                    (r._emeEnabled = r._config.emeEnabled),
                    (r._requestMediaKeySystemAccess =
                      r._config.requestMediaKeySystemAccessFunc),
                    r
                  );
                }
                (r = e),
                  ((t = n).prototype = Object.create(r.prototype)),
                  (t.prototype.constructor = t),
                  (t.__proto__ = r);
                var o,
                  l,
                  d,
                  f = n.prototype;
                return (
                  (f.getLicenseServerUrl = function (e) {
                    switch (e) {
                      case $t.WIDEVINE:
                        if (!this._widevineLicenseUrl) break;
                        return this._widevineLicenseUrl;
                    }
                    throw new Error(
                      'no license server URL configured for key-system "' +
                        e +
                        '"'
                    );
                  }),
                  (f._attemptKeySystemAccess = function (e, t, r) {
                    var n = this,
                      o = (function (e, t, r) {
                        switch (e) {
                          case $t.WIDEVINE:
                            return (function (e, t) {
                              var r = { videoCapabilities: [] };
                              return (
                                t.forEach(function (e) {
                                  r.videoCapabilities.push({
                                    contentType:
                                      'video/mp4; codecs="' + e + '"',
                                  });
                                }),
                                [r]
                              );
                            })(0, r);
                          default:
                            throw new Error("Unknown key-system: " + e);
                        }
                      })(e, 0, r);
                    v.logger.log(
                      "Requesting encrypted media key-system access"
                    ),
                      this.requestMediaKeySystemAccess(e, o)
                        .then(function (t) {
                          n._onMediaKeySystemAccessObtained(e, t);
                        })
                        .catch(function (t) {
                          v.logger.error(
                            'Failed to obtain key-system "' + e + '" access:',
                            t
                          );
                        });
                  }),
                  (f._onMediaKeySystemAccessObtained = function (e, t) {
                    var r = this;
                    v.logger.log('Access for key-system "' + e + '" obtained');
                    var n = {
                      mediaKeysSessionInitialized: !1,
                      mediaKeySystemAccess: t,
                      mediaKeySystemDomain: e,
                    };
                    this._mediaKeysList.push(n),
                      t
                        .createMediaKeys()
                        .then(function (t) {
                          (n.mediaKeys = t),
                            v.logger.log(
                              'Media-keys created for key-system "' + e + '"'
                            ),
                            r._onMediaKeysCreated();
                        })
                        .catch(function (e) {
                          v.logger.error("Failed to create media-keys:", e);
                        });
                  }),
                  (f._onMediaKeysCreated = function () {
                    var e = this;
                    this._mediaKeysList.forEach(function (t) {
                      t.mediaKeysSession ||
                        ((t.mediaKeysSession = t.mediaKeys.createSession()),
                        e._onNewMediaKeySession(t.mediaKeysSession));
                    });
                  }),
                  (f._onNewMediaKeySession = function (e) {
                    var t = this;
                    v.logger.log("New key-system session " + e.sessionId),
                      e.addEventListener(
                        "message",
                        function (r) {
                          t._onKeySessionMessage(e, r.message);
                        },
                        !1
                      );
                  }),
                  (f._onKeySessionMessage = function (e, t) {
                    v.logger.log(
                      "Got EME message event, creating license request"
                    ),
                      this._requestLicense(t, function (data) {
                        v.logger.log(
                          "Received license data (length: " +
                            (data ? data.byteLength : data) +
                            "), updating key-session"
                        ),
                          e.update(data);
                      });
                  }),
                  (f._attemptSetMediaKeys = function () {
                    if (!this._media)
                      throw new Error(
                        "Attempted to set mediaKeys without first attaching a media element"
                      );
                    if (!this._hasSetMediaKeys) {
                      var e = this._mediaKeysList[0];
                      if (!e || !e.mediaKeys)
                        return (
                          v.logger.error(
                            "Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"
                          ),
                          void this.hls.trigger(h.default.ERROR, {
                            type: c.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: c.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                            fatal: !0,
                          })
                        );
                      v.logger.log("Setting keys for encrypted media"),
                        this._media.setMediaKeys(e.mediaKeys),
                        (this._hasSetMediaKeys = !0);
                    }
                  }),
                  (f._generateRequestWithPreferredKeySession = function (e, t) {
                    var r = this,
                      n = this._mediaKeysList[0];
                    if (!n)
                      return (
                        v.logger.error(
                          "Fatal: Media is encrypted but not any key-system access has been obtained yet"
                        ),
                        void this.hls.trigger(h.default.ERROR, {
                          type: c.ErrorTypes.KEY_SYSTEM_ERROR,
                          details: c.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                          fatal: !0,
                        })
                      );
                    if (n.mediaKeysSessionInitialized)
                      v.logger.warn(
                        "Key-Session already initialized but requested again"
                      );
                    else {
                      var o = n.mediaKeysSession;
                      if (!o)
                        return (
                          v.logger.error(
                            "Fatal: Media is encrypted but no key-session existing"
                          ),
                          void this.hls.trigger(h.default.ERROR, {
                            type: c.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: c.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                            fatal: !0,
                          })
                        );
                      if (!t)
                        return (
                          v.logger.warn(
                            "Fatal: initData required for generating a key session is null"
                          ),
                          void this.hls.trigger(h.default.ERROR, {
                            type: c.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: c.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
                            fatal: !0,
                          })
                        );
                      v.logger.log(
                        'Generating key-session request for "' +
                          e +
                          '" init data type'
                      ),
                        (n.mediaKeysSessionInitialized = !0),
                        o
                          .generateRequest(e, t)
                          .then(function () {
                            v.logger.debug("Key-session generation succeeded");
                          })
                          .catch(function (e) {
                            v.logger.error(
                              "Error generating key-session request:",
                              e
                            ),
                              r.hls.trigger(h.default.ERROR, {
                                type: c.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: c.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                fatal: !1,
                              });
                          });
                    }
                  }),
                  (f._createLicenseXhr = function (e, t, r) {
                    var n = new XMLHttpRequest(),
                      o = this._licenseXhrSetup;
                    try {
                      if (o)
                        try {
                          o(n, e);
                        } catch (t) {
                          n.open("POST", e, !0), o(n, e);
                        }
                      n.readyState || n.open("POST", e, !0);
                    } catch (e) {
                      throw new Error(
                        "issue setting up KeySystem license XHR " + e
                      );
                    }
                    return (
                      (n.responseType = "arraybuffer"),
                      (n.onreadystatechange =
                        this._onLicenseRequestReadyStageChange.bind(
                          this,
                          n,
                          e,
                          t,
                          r
                        )),
                      n
                    );
                  }),
                  (f._onLicenseRequestReadyStageChange = function (e, t, r, n) {
                    switch (e.readyState) {
                      case 4:
                        if (200 === e.status)
                          (this._requestLicenseFailureCount = 0),
                            v.logger.log("License request succeeded"),
                            "arraybuffer" !== e.responseType &&
                              v.logger.warn(
                                "xhr response type was not set to the expected arraybuffer for license request"
                              ),
                            n(e.response);
                        else {
                          if (
                            (v.logger.error(
                              "License Request XHR failed (" +
                                t +
                                "). Status: " +
                                e.status +
                                " (" +
                                e.statusText +
                                ")"
                            ),
                            this._requestLicenseFailureCount++,
                            this._requestLicenseFailureCount > 3)
                          )
                            return void this.hls.trigger(h.default.ERROR, {
                              type: c.ErrorTypes.KEY_SYSTEM_ERROR,
                              details:
                                c.ErrorDetails
                                  .KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                              fatal: !0,
                            });
                          var o = 3 - this._requestLicenseFailureCount + 1;
                          v.logger.warn(
                            "Retrying license request, " + o + " attempts left"
                          ),
                            this._requestLicense(r, n);
                        }
                    }
                  }),
                  (f._generateLicenseRequestChallenge = function (e, t) {
                    switch (e.mediaKeySystemDomain) {
                      case $t.WIDEVINE:
                        return t;
                    }
                    throw new Error(
                      "unsupported key-system: " + e.mediaKeySystemDomain
                    );
                  }),
                  (f._requestLicense = function (e, t) {
                    v.logger.log("Requesting content license for key-system");
                    var r = this._mediaKeysList[0];
                    if (!r)
                      return (
                        v.logger.error(
                          "Fatal error: Media is encrypted but no key-system access has been obtained yet"
                        ),
                        void this.hls.trigger(h.default.ERROR, {
                          type: c.ErrorTypes.KEY_SYSTEM_ERROR,
                          details: c.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                          fatal: !0,
                        })
                      );
                    try {
                      var n = this.getLicenseServerUrl(r.mediaKeySystemDomain),
                        o = this._createLicenseXhr(n, e, t);
                      v.logger.log("Sending license request to URL: " + n);
                      var l = this._generateLicenseRequestChallenge(r, e);
                      o.send(l);
                    } catch (e) {
                      v.logger.error("Failure requesting DRM license: " + e),
                        this.hls.trigger(h.default.ERROR, {
                          type: c.ErrorTypes.KEY_SYSTEM_ERROR,
                          details:
                            c.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                          fatal: !0,
                        });
                    }
                  }),
                  (f.onMediaAttached = function (data) {
                    if (this._emeEnabled) {
                      var e = data.media;
                      (this._media = e),
                        e.addEventListener("encrypted", this._onMediaEncrypted);
                    }
                  }),
                  (f.onMediaDetached = function () {
                    this._media &&
                      (this._media.removeEventListener(
                        "encrypted",
                        this._onMediaEncrypted
                      ),
                      (this._media = null));
                  }),
                  (f.onManifestParsed = function (data) {
                    if (this._emeEnabled) {
                      var e = data.levels.map(function (e) {
                          return e.audioCodec;
                        }),
                        t = data.levels.map(function (e) {
                          return e.videoCodec;
                        });
                      this._attemptKeySystemAccess($t.WIDEVINE, e, t);
                    }
                  }),
                  (o = n),
                  (l = [
                    {
                      key: "requestMediaKeySystemAccess",
                      get: function () {
                        if (!this._requestMediaKeySystemAccess)
                          throw new Error(
                            "No requestMediaKeySystemAccess function configured"
                          );
                        return this._requestMediaKeySystemAccess;
                      },
                    },
                  ]) && nr(o.prototype, l),
                  d && nr(o, d),
                  n
                );
              })(y);
              function or(e, t, r) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r),
                  e
                );
              }
              var lr = (function (e) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {},
                    t = Object.keys(source);
                  "function" == typeof Object.getOwnPropertySymbols &&
                    (t = t.concat(
                      Object.getOwnPropertySymbols(source).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(
                          source,
                          e
                        ).enumerable;
                      })
                    )),
                    t.forEach(function (t) {
                      or(e, t, source[t]);
                    });
                }
                return e;
              })(
                {
                  autoStartLoad: !0,
                  startPosition: -1,
                  defaultAudioCodec: void 0,
                  debug: !1,
                  capLevelOnFPSDrop: !1,
                  capLevelToPlayerSize: !1,
                  initialLiveManifestSize: 1,
                  maxBufferLength: 30,
                  maxBufferSize: 6e7,
                  maxBufferHole: 0.5,
                  lowBufferWatchdogPeriod: 0.5,
                  highBufferWatchdogPeriod: 3,
                  nudgeOffset: 0.1,
                  nudgeMaxRetry: 3,
                  maxFragLookUpTolerance: 0.25,
                  liveSyncDurationCount: 3,
                  liveMaxLatencyDurationCount: 1 / 0,
                  liveSyncDuration: void 0,
                  liveMaxLatencyDuration: void 0,
                  liveDurationInfinity: !1,
                  liveBackBufferLength: 1 / 0,
                  maxMaxBufferLength: 600,
                  enableWorker: !0,
                  enableSoftwareAES: !0,
                  manifestLoadingTimeOut: 1e4,
                  manifestLoadingMaxRetry: 1,
                  manifestLoadingRetryDelay: 1e3,
                  manifestLoadingMaxRetryTimeout: 64e3,
                  startLevel: void 0,
                  levelLoadingTimeOut: 1e4,
                  levelLoadingMaxRetry: 4,
                  levelLoadingRetryDelay: 1e3,
                  levelLoadingMaxRetryTimeout: 64e3,
                  fragLoadingTimeOut: 2e4,
                  fragLoadingMaxRetry: 6,
                  fragLoadingRetryDelay: 1e3,
                  fragLoadingMaxRetryTimeout: 64e3,
                  startFragPrefetch: !1,
                  fpsDroppedMonitoringPeriod: 5e3,
                  fpsDroppedMonitoringThreshold: 0.2,
                  appendErrorMaxRetry: 3,
                  loader: ut,
                  fLoader: void 0,
                  pLoader: void 0,
                  xhrSetup: void 0,
                  licenseXhrSetup: void 0,
                  abrController: $e,
                  bufferController: et,
                  capLevelController: it,
                  fpsController: nt,
                  stretchShortVideoTrack: !1,
                  maxAudioFramesDrift: 1,
                  forceKeyFrameOnDiscontinuity: !0,
                  abrEwmaFastLive: 3,
                  abrEwmaSlowLive: 9,
                  abrEwmaFastVoD: 3,
                  abrEwmaSlowVoD: 9,
                  abrEwmaDefaultEstimate: 5e5,
                  abrBandWidthFactor: 0.95,
                  abrBandWidthUpFactor: 0.7,
                  abrMaxWithRealBitrate: !1,
                  maxStarvationDelay: 4,
                  maxLoadingDelay: 4,
                  minAutoBitrate: 0,
                  emeEnabled: !1,
                  widevineLicenseUrl: void 0,
                  requestMediaKeySystemAccessFunc: ar,
                },
                {
                  cueHandler: n,
                  enableCEA708Captions: !0,
                  enableWebVTT: !0,
                  captionsTextTrack1Label: "English",
                  captionsTextTrack1LanguageCode: "en",
                  captionsTextTrack2Label: "Spanish",
                  captionsTextTrack2LanguageCode: "es",
                },
                {
                  subtitleStreamController: ir,
                  subtitleTrackController: Zt,
                  timelineController: Xt,
                  audioStreamController: pt,
                  audioTrackController: ft,
                  emeController: sr,
                }
              );
              function ur(e, t, r) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r),
                  e
                );
              }
              function dr(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              }
              function cr(e, t) {
                for (var i = 0; i < t.length; i++) {
                  var r = t[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              function fr(e, t, r) {
                return t && cr(e.prototype, t), r && cr(e, r), e;
              }
              r.d(t, "default", function () {
                return gr;
              });
              var gr = (function (e) {
                var t, r;
                function n(t) {
                  var r;
                  void 0 === t && (t = {}),
                    ((r = e.call(this) || this).config = void 0),
                    (r._autoLevelCapping = void 0),
                    (r.abrController = void 0),
                    (r.capLevelController = void 0),
                    (r.levelController = void 0),
                    (r.streamController = void 0),
                    (r.networkControllers = void 0),
                    (r.audioTrackController = void 0),
                    (r.subtitleTrackController = void 0),
                    (r.emeController = void 0),
                    (r.coreComponents = void 0),
                    (r.media = null),
                    (r.url = null);
                  var o = n.DefaultConfig;
                  if (
                    (t.liveSyncDurationCount ||
                      t.liveMaxLatencyDurationCount) &&
                    (t.liveSyncDuration || t.liveMaxLatencyDuration)
                  )
                    throw new Error(
                      "Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration"
                    );
                  r.config = (function (e) {
                    for (var i = 1; i < arguments.length; i++) {
                      var source = null != arguments[i] ? arguments[i] : {},
                        t = Object.keys(source);
                      "function" == typeof Object.getOwnPropertySymbols &&
                        (t = t.concat(
                          Object.getOwnPropertySymbols(source).filter(function (
                            e
                          ) {
                            return Object.getOwnPropertyDescriptor(source, e)
                              .enumerable;
                          })
                        )),
                        t.forEach(function (t) {
                          ur(e, t, source[t]);
                        });
                    }
                    return e;
                  })({}, o, t);
                  var l = dr(r).config;
                  if (
                    void 0 !== l.liveMaxLatencyDurationCount &&
                    l.liveMaxLatencyDurationCount <= l.liveSyncDurationCount
                  )
                    throw new Error(
                      'Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"'
                    );
                  if (
                    void 0 !== l.liveMaxLatencyDuration &&
                    (void 0 === l.liveSyncDuration ||
                      l.liveMaxLatencyDuration <= l.liveSyncDuration)
                  )
                    throw new Error(
                      'Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"'
                    );
                  Object(v.enableLogs)(l.debug), (r._autoLevelCapping = -1);
                  var d = (r.abrController = new l.abrController(dr(r))),
                    c = new l.bufferController(dr(r)),
                    f = (r.capLevelController = new l.capLevelController(
                      dr(r)
                    )),
                    h = new l.fpsController(dr(r)),
                    m = new j(dr(r)),
                    y = new K(dr(r)),
                    E = new H(dr(r)),
                    T = new We(dr(r)),
                    S = (r.levelController = new He(dr(r))),
                    _ = new X(dr(r)),
                    A = [S, (r.streamController = new Ge(dr(r), _))],
                    R = l.audioStreamController;
                  R && A.push(new R(dr(r), _)), (r.networkControllers = A);
                  var w = [m, y, E, d, c, f, h, T, _];
                  if ((R = l.audioTrackController)) {
                    var k = new R(dr(r));
                    (r.audioTrackController = k), w.push(k);
                  }
                  if ((R = l.subtitleTrackController)) {
                    var L = new R(dr(r));
                    (r.subtitleTrackController = L), A.push(L);
                  }
                  if ((R = l.emeController)) {
                    var D = new R(dr(r));
                    (r.emeController = D), w.push(D);
                  }
                  return (
                    (R = l.subtitleStreamController) && A.push(new R(dr(r), _)),
                    (R = l.timelineController) && w.push(new R(dr(r))),
                    (r.coreComponents = w),
                    r
                  );
                }
                (r = e),
                  ((t = n).prototype = Object.create(r.prototype)),
                  (t.prototype.constructor = t),
                  (t.__proto__ = r),
                  (n.isSupported = function () {
                    return (function () {
                      var e = te();
                      if (!e) return !1;
                      var t = self.SourceBuffer || self.WebKitSourceBuffer,
                        r =
                          e &&
                          "function" == typeof e.isTypeSupported &&
                          e.isTypeSupported(
                            'video/mp4; codecs="avc1.42E01E,mp4a.40.2"'
                          ),
                        n =
                          !t ||
                          (t.prototype &&
                            "function" == typeof t.prototype.appendBuffer &&
                            "function" == typeof t.prototype.remove);
                      return !!r && !!n;
                    })();
                  }),
                  fr(n, null, [
                    {
                      key: "version",
                      get: function () {
                        return "0.13.2";
                      },
                    },
                    {
                      key: "Events",
                      get: function () {
                        return h.default;
                      },
                    },
                    {
                      key: "ErrorTypes",
                      get: function () {
                        return c.ErrorTypes;
                      },
                    },
                    {
                      key: "ErrorDetails",
                      get: function () {
                        return c.ErrorDetails;
                      },
                    },
                    {
                      key: "DefaultConfig",
                      get: function () {
                        return n.defaultConfig ? n.defaultConfig : lr;
                      },
                      set: function (e) {
                        n.defaultConfig = e;
                      },
                    },
                  ]);
                var o = n.prototype;
                return (
                  (o.destroy = function () {
                    v.logger.log("destroy"),
                      this.trigger(h.default.DESTROYING),
                      this.detachMedia(),
                      this.coreComponents
                        .concat(this.networkControllers)
                        .forEach(function (component) {
                          component.destroy();
                        }),
                      (this.url = null),
                      this.removeAllListeners(),
                      (this._autoLevelCapping = -1);
                  }),
                  (o.attachMedia = function (e) {
                    v.logger.log("attachMedia"),
                      (this.media = e),
                      this.trigger(h.default.MEDIA_ATTACHING, { media: e });
                  }),
                  (o.detachMedia = function () {
                    v.logger.log("detachMedia"),
                      this.trigger(h.default.MEDIA_DETACHING),
                      (this.media = null);
                  }),
                  (o.loadSource = function (e) {
                    (e = d.buildAbsoluteURL(window.location.href, e, {
                      alwaysNormalize: !0,
                    })),
                      v.logger.log("loadSource:" + e),
                      (this.url = e),
                      this.trigger(h.default.MANIFEST_LOADING, { url: e });
                  }),
                  (o.startLoad = function (e) {
                    void 0 === e && (e = -1),
                      v.logger.log("startLoad(" + e + ")"),
                      this.networkControllers.forEach(function (t) {
                        t.startLoad(e);
                      });
                  }),
                  (o.stopLoad = function () {
                    v.logger.log("stopLoad"),
                      this.networkControllers.forEach(function (e) {
                        e.stopLoad();
                      });
                  }),
                  (o.swapAudioCodec = function () {
                    v.logger.log("swapAudioCodec"),
                      this.streamController.swapAudioCodec();
                  }),
                  (o.recoverMediaError = function () {
                    v.logger.log("recoverMediaError");
                    var e = this.media;
                    this.detachMedia(), e && this.attachMedia(e);
                  }),
                  fr(n, [
                    {
                      key: "levels",
                      get: function () {
                        return this.levelController.levels;
                      },
                    },
                    {
                      key: "currentLevel",
                      get: function () {
                        return this.streamController.currentLevel;
                      },
                      set: function (e) {
                        v.logger.log("set currentLevel:" + e),
                          (this.loadLevel = e),
                          this.streamController.immediateLevelSwitch();
                      },
                    },
                    {
                      key: "nextLevel",
                      get: function () {
                        return this.streamController.nextLevel;
                      },
                      set: function (e) {
                        v.logger.log("set nextLevel:" + e),
                          (this.levelController.manualLevel = e),
                          this.streamController.nextLevelSwitch();
                      },
                    },
                    {
                      key: "loadLevel",
                      get: function () {
                        return this.levelController.level;
                      },
                      set: function (e) {
                        v.logger.log("set loadLevel:" + e),
                          (this.levelController.manualLevel = e);
                      },
                    },
                    {
                      key: "nextLoadLevel",
                      get: function () {
                        return this.levelController.nextLoadLevel;
                      },
                      set: function (e) {
                        this.levelController.nextLoadLevel = e;
                      },
                    },
                    {
                      key: "firstLevel",
                      get: function () {
                        return Math.max(
                          this.levelController.firstLevel,
                          this.minAutoLevel
                        );
                      },
                      set: function (e) {
                        v.logger.log("set firstLevel:" + e),
                          (this.levelController.firstLevel = e);
                      },
                    },
                    {
                      key: "startLevel",
                      get: function () {
                        return this.levelController.startLevel;
                      },
                      set: function (e) {
                        v.logger.log("set startLevel:" + e),
                          -1 !== e && (e = Math.max(e, this.minAutoLevel)),
                          (this.levelController.startLevel = e);
                      },
                    },
                    {
                      key: "capLevelToPlayerSize",
                      set: function (e) {
                        var t = !!e;
                        t !== this.config.capLevelToPlayerSize &&
                          (t
                            ? this.capLevelController.startCapping()
                            : (this.capLevelController.stopCapping(),
                              (this.autoLevelCapping = -1),
                              this.streamController.nextLevelSwitch()),
                          (this.config.capLevelToPlayerSize = t));
                      },
                    },
                    {
                      key: "autoLevelCapping",
                      get: function () {
                        return this._autoLevelCapping;
                      },
                      set: function (e) {
                        v.logger.log("set autoLevelCapping:" + e),
                          (this._autoLevelCapping = e);
                      },
                    },
                    {
                      key: "bandwidthEstimate",
                      get: function () {
                        var e = this.abrController._bwEstimator;
                        return e ? e.getEstimate() : NaN;
                      },
                    },
                    {
                      key: "autoLevelEnabled",
                      get: function () {
                        return -1 === this.levelController.manualLevel;
                      },
                    },
                    {
                      key: "manualLevel",
                      get: function () {
                        return this.levelController.manualLevel;
                      },
                    },
                    {
                      key: "minAutoLevel",
                      get: function () {
                        for (
                          var e = this.levels,
                            t = this.config.minAutoBitrate,
                            r = e ? e.length : 0,
                            i = 0;
                          i < r;
                          i++
                        )
                          if (
                            (e[i].realBitrate
                              ? Math.max(e[i].realBitrate, e[i].bitrate)
                              : e[i].bitrate) > t
                          )
                            return i;
                        return 0;
                      },
                    },
                    {
                      key: "maxAutoLevel",
                      get: function () {
                        var e = this.levels,
                          t = this.autoLevelCapping;
                        return -1 === t && e && e.length ? e.length - 1 : t;
                      },
                    },
                    {
                      key: "nextAutoLevel",
                      get: function () {
                        return Math.min(
                          Math.max(
                            this.abrController.nextAutoLevel,
                            this.minAutoLevel
                          ),
                          this.maxAutoLevel
                        );
                      },
                      set: function (e) {
                        this.abrController.nextAutoLevel = Math.max(
                          this.minAutoLevel,
                          e
                        );
                      },
                    },
                    {
                      key: "audioTracks",
                      get: function () {
                        var e = this.audioTrackController;
                        return e ? e.audioTracks : [];
                      },
                    },
                    {
                      key: "audioTrack",
                      get: function () {
                        var e = this.audioTrackController;
                        return e ? e.audioTrack : -1;
                      },
                      set: function (e) {
                        var t = this.audioTrackController;
                        t && (t.audioTrack = e);
                      },
                    },
                    {
                      key: "liveSyncPosition",
                      get: function () {
                        return this.streamController.liveSyncPosition;
                      },
                    },
                    {
                      key: "subtitleTracks",
                      get: function () {
                        var e = this.subtitleTrackController;
                        return e ? e.subtitleTracks : [];
                      },
                    },
                    {
                      key: "subtitleTrack",
                      get: function () {
                        var e = this.subtitleTrackController;
                        return e ? e.subtitleTrack : -1;
                      },
                      set: function (e) {
                        var t = this.subtitleTrackController;
                        t && (t.subtitleTrack = e);
                      },
                    },
                    {
                      key: "subtitleDisplay",
                      get: function () {
                        var e = this.subtitleTrackController;
                        return !!e && e.subtitleDisplay;
                      },
                      set: function (e) {
                        var t = this.subtitleTrackController;
                        t && (t.subtitleDisplay = e);
                      },
                    },
                  ]),
                  n
                );
              })(ie);
              gr.defaultConfig = void 0;
            },
            "./src/polyfills/number-isFinite.js": function (e, t, r) {
              "use strict";
              r.r(t),
                r.d(t, "isFiniteNumber", function () {
                  return n;
                });
              var n =
                Number.isFinite ||
                function (e) {
                  return "number" == typeof e && isFinite(e);
                };
            },
            "./src/utils/get-self-scope.js": function (e, t, r) {
              "use strict";
              function n() {
                return "undefined" == typeof window ? self : window;
              }
              r.r(t),
                r.d(t, "getSelfScope", function () {
                  return n;
                });
            },
            "./src/utils/logger.js": function (e, t, r) {
              "use strict";
              r.r(t),
                r.d(t, "enableLogs", function () {
                  return v;
                }),
                r.d(t, "logger", function () {
                  return m;
                });
              var n = r("./src/utils/get-self-scope.js");
              function o() {}
              var l = {
                  trace: o,
                  debug: o,
                  log: o,
                  warn: o,
                  info: o,
                  error: o,
                },
                d = l;
              function c(e, t) {
                return (t = "[" + e + "] > " + t);
              }
              var f = Object(n.getSelfScope)();
              function h(e) {
                var t = f.console[e];
                return t
                  ? function () {
                      for (
                        var r = arguments.length, n = new Array(r), o = 0;
                        o < r;
                        o++
                      )
                        n[o] = arguments[o];
                      n[0] && (n[0] = c(e, n[0])), t.apply(f.console, n);
                    }
                  : o;
              }
              var v = function (e) {
                  if ((f.console && !0 === e) || "object" == typeof e) {
                    !(function (e) {
                      for (
                        var t = arguments.length,
                          r = new Array(t > 1 ? t - 1 : 0),
                          n = 1;
                        n < t;
                        n++
                      )
                        r[n - 1] = arguments[n];
                      r.forEach(function (t) {
                        d[t] = e[t] ? e[t].bind(e) : h(t);
                      });
                    })(e, "debug", "log", "info", "warn", "error");
                    try {
                      d.log();
                    } catch (e) {
                      d = l;
                    }
                  } else d = l;
                },
                m = d;
            },
          }).default;
        }),
        (e.exports = n()));
    },
    419: function (e, t, r) {
      !(function () {
        "use strict";
        var t =
            "undefined" != typeof window && void 0 !== window.document
              ? window.document
              : {},
          r = e.exports,
          n = (function () {
            for (
              var e,
                r = [
                  [
                    "requestFullscreen",
                    "exitFullscreen",
                    "fullscreenElement",
                    "fullscreenEnabled",
                    "fullscreenchange",
                    "fullscreenerror",
                  ],
                  [
                    "webkitRequestFullscreen",
                    "webkitExitFullscreen",
                    "webkitFullscreenElement",
                    "webkitFullscreenEnabled",
                    "webkitfullscreenchange",
                    "webkitfullscreenerror",
                  ],
                  [
                    "webkitRequestFullScreen",
                    "webkitCancelFullScreen",
                    "webkitCurrentFullScreenElement",
                    "webkitCancelFullScreen",
                    "webkitfullscreenchange",
                    "webkitfullscreenerror",
                  ],
                  [
                    "mozRequestFullScreen",
                    "mozCancelFullScreen",
                    "mozFullScreenElement",
                    "mozFullScreenEnabled",
                    "mozfullscreenchange",
                    "mozfullscreenerror",
                  ],
                  [
                    "msRequestFullscreen",
                    "msExitFullscreen",
                    "msFullscreenElement",
                    "msFullscreenEnabled",
                    "MSFullscreenChange",
                    "MSFullscreenError",
                  ],
                ],
                i = 0,
                n = r.length,
                o = {};
              i < n;
              i++
            )
              if ((e = r[i]) && e[1] in t) {
                for (i = 0; i < e.length; i++) o[r[0][i]] = e[i];
                return o;
              }
            return !1;
          })(),
          o = { change: n.fullscreenchange, error: n.fullscreenerror },
          l = {
            request: function (element) {
              return new Promise(
                function (e, r) {
                  var o = function () {
                    this.off("change", o), e();
                  }.bind(this);
                  this.on("change", o);
                  var l = (element = element || t.documentElement)[
                    n.requestFullscreen
                  ]();
                  l instanceof Promise && l.then(o).catch(r);
                }.bind(this)
              );
            },
            exit: function () {
              return new Promise(
                function (e, r) {
                  if (this.isFullscreen) {
                    var o = function () {
                      this.off("change", o), e();
                    }.bind(this);
                    this.on("change", o);
                    var l = t[n.exitFullscreen]();
                    l instanceof Promise && l.then(o).catch(r);
                  } else e();
                }.bind(this)
              );
            },
            toggle: function (element) {
              return this.isFullscreen ? this.exit() : this.request(element);
            },
            onchange: function (e) {
              this.on("change", e);
            },
            onerror: function (e) {
              this.on("error", e);
            },
            on: function (e, r) {
              var n = o[e];
              n && t.addEventListener(n, r, !1);
            },
            off: function (e, r) {
              var n = o[e];
              n && t.removeEventListener(n, r, !1);
            },
            raw: n,
          };
        n
          ? (Object.defineProperties(l, {
              isFullscreen: {
                get: function () {
                  return Boolean(t[n.fullscreenElement]);
                },
              },
              element: {
                enumerable: !0,
                get: function () {
                  return t[n.fullscreenElement];
                },
              },
              isEnabled: {
                enumerable: !0,
                get: function () {
                  return Boolean(t[n.fullscreenEnabled]);
                },
              },
            }),
            r ? (e.exports = l) : (window.screenfull = l))
          : r
          ? (e.exports = { isEnabled: !1 })
          : (window.screenfull = { isEnabled: !1 });
      })();
    },
  },
]);
