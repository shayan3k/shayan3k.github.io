!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e(require("smooth-scrollbar")))
    : "function" == typeof define && define.amd
    ? define(["smooth-scrollbar"], e)
    : "object" == typeof exports
    ? (exports.OverscrollPlugin = e(require("smooth-scrollbar")))
    : (t.OverscrollPlugin = e(t.Scrollbar));
})(this, function (t) {
  return (function (t) {
    function e(r) {
      if (o[r]) return o[r].exports;
      var n = (o[r] = { i: r, l: !1, exports: {} });
      return t[r].call(n.exports, n, n.exports, e), (n.l = !0), n.exports;
    }
    var o = {};
    return (
      (e.m = t),
      (e.c = o),
      (e.d = function (t, o, r) {
        e.o(t, o) ||
          Object.defineProperty(t, o, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (e.n = function (t) {
        var o =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(o, "a", o), o;
      }),
      (e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (e.p = ""),
      e((e.s = 0))
    );
  })([
    function (t, e, o) {
      t.exports = o(1);
    },
    function (t, e, o) {
      "use strict";
      function r(t, e) {
        function o() {
          this.constructor = t;
        }
        _(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((o.prototype = e.prototype), new o()));
      }
      function n(t, e, o) {
        return (
          t === t &&
            (void 0 !== o && (t = t <= o ? t : o),
            void 0 !== e && (t = t >= e ? t : e)),
          t
        );
      }
      function i(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      }
      function s(t) {
        var e = S.call(t, E),
          o = t[E];
        try {
          t[E] = void 0;
          var r = !0;
        } catch (t) {}
        var n = P.call(t);
        return r && (e ? (t[E] = o) : delete t[E]), n;
      }
      function c(t) {
        return A.call(t);
      }
      function l(t) {
        return null == t
          ? void 0 === t
            ? B
            : N
          : z && z in Object(t)
          ? T(t)
          : C(t);
      }
      function a(t) {
        return null != t && "object" == typeof t;
      }
      function u(t) {
        return "symbol" == typeof t || (U(t) && L(t) == G);
      }
      function h(t) {
        if ("number" == typeof t) return t;
        if (X(t)) return Y;
        if (m(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = m(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(q, "");
        var o = $.test(t);
        return o || I.test(t) ? D(t.slice(2), o ? 2 : 8) : R.test(t) ? Y : +t;
      }
      function f(t, e, o) {
        return (
          void 0 === o && ((o = e), (e = void 0)),
          void 0 !== o && ((o = F(o)), (o = o === o ? o : 0)),
          void 0 !== e && ((e = F(e)), (e = e === e ? e : 0)),
          b(F(t), e, o)
        );
      }
      function p(t, e, o) {
        function r(e) {
          var o = f,
            r = p;
          return (f = p = void 0), (b = e), (v = t.apply(r, o));
        }
        function n(t) {
          return (b = t), (_ = setTimeout(c, e)), x ? r(t) : v;
        }
        function i(t) {
          var o = t - y,
            r = t - b,
            n = e - o;
          return g ? Z(n, d - r) : n;
        }
        function s(t) {
          var o = t - y,
            r = t - b;
          return void 0 === y || o >= e || o < 0 || (g && r >= d);
        }
        function c() {
          var t = K();
          if (s(t)) return l(t);
          _ = setTimeout(c, i(t));
        }
        function l(t) {
          return (_ = void 0), O && f ? r(t) : ((f = p = void 0), v);
        }
        function a() {
          void 0 !== _ && clearTimeout(_), (b = 0), (f = y = p = _ = void 0);
        }
        function u() {
          return void 0 === _ ? v : l(K());
        }
        function h() {
          var t = K(),
            o = s(t);
          if (((f = arguments), (p = this), (y = t), o)) {
            if (void 0 === _) return n(y);
            if (g) return (_ = setTimeout(c, e)), r(y);
          }
          return void 0 === _ && (_ = setTimeout(c, e)), v;
        }
        var f,
          p,
          d,
          v,
          _,
          y,
          b = 0,
          x = !1,
          g = !1,
          O = !0;
        if ("function" != typeof t) throw new TypeError(Q);
        return (
          (e = F(e) || 0),
          m(o) &&
            ((x = !!o.leading),
            (g = "maxWait" in o),
            (d = g ? V(F(o.maxWait) || 0, e) : d),
            (O = "trailing" in o ? !!o.trailing : O)),
          (h.cancel = a),
          (h.flush = u),
          h
        );
      }
      function d(t) {
        var e = {};
        return (
          Object.keys(t).forEach(function (o) {
            if (!rt.test(o)) return void (e[o] = t[o]);
            var r = t[o];
            (o = o.replace(/^-/, "")),
              (e[o] = r),
              ot.forEach(function (t) {
                e["-" + t + "-" + o] = r;
              });
          }),
          e
        );
      }
      function v(t, e) {
        (e = d(e)),
          Object.keys(e).forEach(function (o) {
            var r = o.replace(/^-/, "").replace(/-([a-z])/g, function (t, e) {
              return e.toUpperCase();
            });
            t.style[r] = e[o];
          });
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var _ =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
          },
        y =
          Object.assign ||
          function (t) {
            for (var e, o = 1, r = arguments.length; o < r; o++) {
              e = arguments[o];
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }
            return t;
          },
        b = n,
        m = i,
        x = o(2),
        g = "object" == typeof self && self && self.Object === Object && self,
        O = x.a || g || Function("return this")(),
        w = O,
        j = w.Symbol,
        k = j,
        M = Object.prototype,
        S = M.hasOwnProperty,
        P = M.toString,
        E = k ? k.toStringTag : void 0,
        T = s,
        W = Object.prototype,
        A = W.toString,
        C = c,
        N = "[object Null]",
        B = "[object Undefined]",
        z = k ? k.toStringTag : void 0,
        L = l,
        U = a,
        G = "[object Symbol]",
        X = u,
        Y = NaN,
        q = /^\s+|\s+$/g,
        R = /^[-+]0x[0-9a-f]+$/i,
        $ = /^0b[01]+$/i,
        I = /^0o[0-7]+$/i,
        D = parseInt,
        F = h,
        H = f,
        J = function () {
          return w.Date.now();
        },
        K = J,
        Q = "Expected a function",
        V = Math.max,
        Z = Math.min,
        tt = p,
        et = o(4),
        ot = ["webkit", "moz", "ms", "o"],
        rt = new RegExp("^-(?!(?:" + ot.join("|") + ")-)"),
        nt = (function () {
          function t(t) {
            this._scrollbar = t;
          }
          return (
            (t.prototype.render = function (t) {
              var e = t.x,
                o = void 0 === e ? 0 : e,
                r = t.y,
                n = void 0 === r ? 0 : r,
                i = this._scrollbar,
                s = i.size,
                c = i.track,
                l = i.offset;
              if (
                (v(i.contentEl, {
                  "-transform":
                    "translate3d(" +
                    -(l.x + o) +
                    "px, " +
                    -(l.y + n) +
                    "px, 0)",
                }),
                o)
              ) {
                c.xAxis.show();
                var a = s.container.width / (s.container.width + Math.abs(o));
                v(c.xAxis.thumb.element, {
                  "-transform":
                    "translate3d(" +
                    c.xAxis.thumb.offset +
                    "px, 0, 0) scale3d(" +
                    a +
                    ", 1, 1)",
                  "-transform-origin": o < 0 ? "left" : "right",
                });
              }
              if (n) {
                c.yAxis.show();
                var a = s.container.height / (s.container.height + Math.abs(n));
                v(c.yAxis.thumb.element, {
                  "-transform":
                    "translate3d(0, " +
                    c.yAxis.thumb.offset +
                    "px, 0) scale3d(1, " +
                    a +
                    ", 1)",
                  "-transform-origin": n < 0 ? "top" : "bottom",
                });
              }
              c.autoHideOnIdle();
            }),
            t
          );
        })(),
        it = (function () {
          function t(t) {
            (this._scrollbar = t),
              (this._canvas = document.createElement("canvas")),
              (this._ctx = this._canvas.getContext("2d")),
              v(this._canvas, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "none",
              });
          }
          return (
            (t.prototype.mount = function () {
              this._scrollbar.containerEl.appendChild(this._canvas);
            }),
            (t.prototype.unmount = function () {
              this._canvas.parentNode &&
                this._canvas.parentNode.removeChild(this._canvas);
            }),
            (t.prototype.adjust = function () {
              var t = this._scrollbar.size,
                e = window.devicePixelRatio || 1,
                o = t.container.width * e,
                r = t.container.height * e;
              (o === this._canvas.width && r === this._canvas.height) ||
                ((this._canvas.width = o),
                (this._canvas.height = r),
                this._ctx.scale(e, e));
            }),
            (t.prototype.recordTouch = function (t) {
              var e = t.touches[t.touches.length - 1];
              (this._touchX = e.clientX), (this._touchY = e.clientY);
            }),
            (t.prototype.render = function (t, e) {
              var o = t.x,
                r = void 0 === o ? 0 : o,
                n = t.y,
                i = void 0 === n ? 0 : n;
              if (!r && !i) return void v(this._canvas, { display: "none" });
              v(this._canvas, { display: "block" });
              var s = this._scrollbar.size;
              this._ctx.clearRect(0, 0, s.container.width, s.container.height),
                (this._ctx.fillStyle = e),
                this._renderX(r),
                this._renderY(i);
            }),
            (t.prototype._getMaxOverscroll = function () {
              var t = this._scrollbar.options.plugins.overscroll;
              return t && t.maxOverscroll ? t.maxOverscroll : 150;
            }),
            (t.prototype._renderX = function (t) {
              var e = this._scrollbar.size,
                o = this._getMaxOverscroll(),
                r = e.container,
                n = r.width,
                i = r.height,
                s = this._ctx;
              s.save(), t > 0 && s.transform(-1, 0, 0, 1, n, 0);
              var c = H(Math.abs(t) / o, 0, 0.75),
                l = H(c, 0, 0.25) * n,
                a = Math.abs(t),
                u = this._touchY || i / 2;
              (s.globalAlpha = c),
                s.beginPath(),
                s.moveTo(0, -l),
                s.quadraticCurveTo(a, u, 0, i + l),
                s.fill(),
                s.closePath(),
                s.restore();
            }),
            (t.prototype._renderY = function (t) {
              var e = this._scrollbar.size,
                o = this._getMaxOverscroll(),
                r = e.container,
                n = r.width,
                i = r.height,
                s = this._ctx;
              s.save(), t > 0 && s.transform(1, 0, 0, -1, 0, i);
              var c = H(Math.abs(t) / o, 0, 0.75),
                l = H(c, 0, 0.25) * n,
                a = this._touchX || n / 2,
                u = Math.abs(t);
              (s.globalAlpha = c),
                s.beginPath(),
                s.moveTo(-l, 0),
                s.quadraticCurveTo(a, u, n + l, 0),
                s.fill(),
                s.closePath(),
                s.restore();
            }),
            t
          );
        })();
      o.d(e, "OverscrollEffect", function () {
        return st;
      });
      var st;
      !(function (t) {
        (t.BOUNCE = "bounce"), (t.GLOW = "glow");
      })(st || (st = {}));
      var ct = /wheel|touch/,
        lt = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e._glow = new it(e.scrollbar)),
              (e._bounce = new nt(e.scrollbar)),
              (e._wheelScrollBack = { x: !1, y: !1 }),
              (e._lockWheel = { x: !1, y: !1 }),
              (e._touching = !1),
              (e._amplitude = { x: 0, y: 0 }),
              (e._position = { x: 0, y: 0 }),
              (e._releaseWheel = tt(function () {
                (e._lockWheel.x = !1), (e._lockWheel.y = !1);
              }, 30)),
              e
            );
          }
          return (
            r(e, t),
            Object.defineProperty(e.prototype, "_isWheelLocked", {
              get: function () {
                return this._lockWheel.x || this._lockWheel.y;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "_enabled", {
              get: function () {
                return !!this.options.effect;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.onInit = function () {
              var t = this,
                e = t._glow,
                o = t.options,
                r = t.scrollbar,
                n = o.effect;
              Object.defineProperty(o, "effect", {
                get: function () {
                  return n;
                },
                set: function (t) {
                  if (!t) return void (n = void 0);
                  if (t !== st.BOUNCE && t !== st.GLOW)
                    throw new TypeError("unknow overscroll effect: " + t);
                  (n = t),
                    (r.options.continuousScrolling = !1),
                    t === st.GLOW ? (e.mount(), e.adjust()) : e.unmount();
                },
              }),
                (o.effect = n);
            }),
            (e.prototype.onUpdate = function () {
              this.options.effect === st.GLOW && this._glow.adjust();
            }),
            (e.prototype.onRender = function (t) {
              if (this._enabled) {
                this.scrollbar.options.continuousScrolling &&
                  (this.scrollbar.options.continuousScrolling = !1);
                var e = t.x,
                  o = t.y;
                !this._amplitude.x &&
                  this._willOverscroll("x", t.x) &&
                  ((e = 0), this._absorbMomentum("x", t.x)),
                  !this._amplitude.y &&
                    this._willOverscroll("y", t.y) &&
                    ((o = 0), this._absorbMomentum("y", t.y)),
                  this.scrollbar.setMomentum(e, o),
                  this._render();
              }
            }),
            (e.prototype.transformDelta = function (t, e) {
              if (
                ((this._lastEventType = e.type),
                !this._enabled || !ct.test(e.type))
              )
                return t;
              this._isWheelLocked &&
                /wheel/.test(e.type) &&
                (this._releaseWheel(),
                this._willOverscroll("x", t.x) && (t.x = 0),
                this._willOverscroll("y", t.y) && (t.y = 0));
              var o = t.x,
                r = t.y;
              switch (
                (this._willOverscroll("x", t.x) &&
                  ((o = 0), this._addAmplitude("x", t.x)),
                this._willOverscroll("y", t.y) &&
                  ((r = 0), this._addAmplitude("y", t.y)),
                e.type)
              ) {
                case "touchstart":
                case "touchmove":
                  (this._touching = !0), this._glow.recordTouch(e);
                  break;
                case "touchcancel":
                case "touchend":
                  this._touching = !1;
              }
              return { x: o, y: r };
            }),
            (e.prototype._willOverscroll = function (t, e) {
              if (!e) return !1;
              if (this._position[t]) return !0;
              var o = this.scrollbar.offset[t],
                r = this.scrollbar.limit[t];
              return 0 !== r && H(o + e, 0, r) === o && (0 === o || o === r);
            }),
            (e.prototype._absorbMomentum = function (t, e) {
              var o = this,
                r = o.options,
                n = o._lastEventType,
                i = o._amplitude;
              ct.test(n) && (i[t] = H(e, -r.maxOverscroll, r.maxOverscroll));
            }),
            (e.prototype._addAmplitude = function (t, e) {
              var o,
                r = this,
                n = r.options,
                i = r.scrollbar,
                s = r._amplitude,
                c = r._position,
                l = s[t],
                a = e * l < 0;
              o = a
                ? 0
                : this._wheelScrollBack[t]
                ? 1
                : Math.abs(l / n.maxOverscroll);
              var u = l + e * (1 - o);
              (s[t] =
                0 === i.offset[t]
                  ? H(u, -n.maxOverscroll, 0)
                  : H(u, 0, n.maxOverscroll)),
                a && (c[t] = s[t]);
            }),
            (e.prototype._render = function () {
              var t = this,
                e = t.options,
                o = t._amplitude,
                r = t._position;
              if (this._enabled && (o.x || o.y || r.x || r.y)) {
                var n = this._nextAmp("x"),
                  i = this._nextAmp("y");
                switch (
                  ((o.x = n.amplitude),
                  (r.x = n.position),
                  (o.y = i.amplitude),
                  (r.y = i.position),
                  e.effect)
                ) {
                  case st.BOUNCE:
                    this._bounce.render(r);
                    break;
                  case st.GLOW:
                    this._glow.render(r, this.options.glowColor);
                }
                "function" == typeof e.onScroll &&
                  e.onScroll.call(this, y({}, r));
              }
            }),
            (e.prototype._nextAmp = function (t) {
              var e = this,
                o = e.options,
                r = e._amplitude,
                n = e._position,
                i = 1 - o.damping,
                s = r[t],
                c = n[t],
                l = this._touching ? s : (s * i) | 0,
                a = l - c,
                u = c + a - ((a * i) | 0);
              return (
                !this._touching &&
                  Math.abs(u) < Math.abs(c) &&
                  (this._wheelScrollBack[t] = !0),
                this._wheelScrollBack[t] &&
                  Math.abs(u) <= 1 &&
                  ((this._wheelScrollBack[t] = !1), (this._lockWheel[t] = !0)),
                { amplitude: l, position: u }
              );
            }),
            (e.pluginName = "overscroll"),
            (e.defaultOptions = {
              effect: st.BOUNCE,
              onScroll: void 0,
              damping: 0.2,
              maxOverscroll: 150,
              glowColor: "#87ceeb",
            }),
            e
          );
        })(et.ScrollbarPlugin);
      e.default = lt;
    },
    function (t, e, o) {
      "use strict";
      (function (t) {
        var o = "object" == typeof t && t && t.Object === Object && t;
        e.a = o;
      }.call(e, o(3)));
    },
    function (t, e) {
      var o;
      o = (function () {
        return this;
      })();
      try {
        o = o || Function("return this")() || (0, eval)("this");
      } catch (t) {
        "object" == typeof window && (o = window);
      }
      t.exports = o;
    },
    function (e, o) {
      e.exports = t;
    },
  ]).default;
});
