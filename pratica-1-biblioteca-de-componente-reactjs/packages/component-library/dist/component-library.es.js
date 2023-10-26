import De, { createContext as br, useId as gr, useState as Pe } from "react";
import w, { styled as C, css as Oe, keyframes as mr } from "styled-components";
var ne = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function xr() {
  if (Fe)
    return L;
  Fe = 1;
  var n = De, u = Symbol.for("react.element"), h = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(j, b, T) {
    var x, E = {}, k = null, z = null;
    T !== void 0 && (k = "" + T), b.key !== void 0 && (k = "" + b.key), b.ref !== void 0 && (z = b.ref);
    for (x in b)
      p.call(b, x) && !Y.hasOwnProperty(x) && (E[x] = b[x]);
    if (j && j.defaultProps)
      for (x in b = j.defaultProps, b)
        E[x] === void 0 && (E[x] = b[x]);
    return { $$typeof: u, type: j, key: k, ref: z, props: E, _owner: v.current };
  }
  return L.Fragment = h, L.jsx = D, L.jsxs = D, L;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function yr() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var n = De, u = Symbol.for("react.element"), h = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), j = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), ae = Symbol.iterator, Ae = "@@iterator";
    function Ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ae && e[ae] || e[Ae];
      return typeof r == "function" ? r : null;
    }
    var P = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        Le("error", e, t);
      }
    }
    function Le(e, r, t) {
      {
        var o = P.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var c = t.map(function(i) {
          return String(i);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var We = !1, Ne = !1, Ye = !1, ze = !1, Ve = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === Y || Ve || e === v || e === T || e === x || ze || e === z || We || Ne || Ye || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === E || e.$$typeof === D || e.$$typeof === j || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case h:
          return "Portal";
        case Y:
          return "Profiler";
        case v:
          return "StrictMode";
        case T:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var r = e;
            return se(r) + ".Consumer";
          case D:
            var t = e;
            return se(t._context) + ".Provider";
          case b:
            return Ue(e, e.render, "ForwardRef");
          case E:
            var o = e.displayName || null;
            return o !== null ? o : R(e.type) || "Memo";
          case k: {
            var s = e, c = s._payload, i = s._init;
            try {
              return R(i(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, A = 0, ce, le, ue, fe, de, pe, ve;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Be() {
      {
        if (A === 0) {
          ce = console.log, le = console.info, ue = console.warn, fe = console.error, de = console.group, pe = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function qe() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ce
            }),
            info: S({}, e, {
              value: le
            }),
            warn: S({}, e, {
              value: ue
            }),
            error: S({}, e, {
              value: fe
            }),
            group: S({}, e, {
              value: de
            }),
            groupCollapsed: S({}, e, {
              value: pe
            }),
            groupEnd: S({}, e, {
              value: ve
            })
          });
        }
        A < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = P.ReactCurrentDispatcher, J;
    function V(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (s) {
            var o = s.stack.trim().match(/\n( *(at )?)/);
            J = o && o[1] || "";
          }
        return `
` + J + e;
      }
    }
    var H = !1, M;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ge();
    }
    function be(e, r) {
      if (!e || H)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      H = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = G.current, G.current = null, Be();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (_) {
              o = _;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (_) {
              o = _;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            o = _;
          }
          e();
        }
      } catch (_) {
        if (_ && o && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), m = o.stack.split(`
`), f = a.length - 1, d = m.length - 1; f >= 1 && d >= 0 && a[f] !== m[d]; )
            d--;
          for (; f >= 1 && d >= 0; f--, d--)
            if (a[f] !== m[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, d < 0 || a[f] !== m[d]) {
                    var y = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, y), y;
                  }
                while (f >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        H = !1, G.current = c, qe(), Error.prepareStackTrace = s;
      }
      var F = e ? e.displayName || e.name : "", Te = F ? V(F) : "";
      return typeof e == "function" && M.set(e, Te), Te;
    }
    function Je(e, r, t) {
      return be(e, !1);
    }
    function He(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, He(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case T:
          return V("Suspense");
        case x:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Je(e.render);
          case E:
            return U(e.type, r, t);
          case k: {
            var o = e, s = o._payload, c = o._init;
            try {
              return U(c(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, ge = {}, me = P.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function Ke(e, r, t, o, s) {
      {
        var c = Function.call.bind(B);
        for (var i in e)
          if (c(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var m = Error((o || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              a = e[i](r, i, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (q(s), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, i, typeof a), q(null)), a instanceof Error && !(a.message in ge) && (ge[a.message] = !0, q(s), g("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var Xe = Array.isArray;
    function K(e) {
      return Xe(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Qe(e) {
      try {
        return xe(e), !1;
      } catch {
        return !0;
      }
    }
    function xe(e) {
      return "" + e;
    }
    function ye(e) {
      if (Qe(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), xe(e);
    }
    var I = P.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re, X;
    X = {};
    function rr(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = R(I.current.type);
        X[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(I.current.type), e.ref), X[t] = !0);
      }
    }
    function or(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          Re || (Re = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, t, o, s, c, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function sr(e, r, t, o, s) {
      {
        var c, i = {}, a = null, m = null;
        t !== void 0 && (ye(t), a = "" + t), tr(r) && (ye(r.key), a = "" + r.key), rr(r) && (m = r.ref, nr(r, s));
        for (c in r)
          B.call(r, c) && !er.hasOwnProperty(c) && (i[c] = r[c]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (c in f)
            i[c] === void 0 && (i[c] = f[c]);
        }
        if (a || m) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && or(i, d), m && ar(i, d);
        }
        return ir(e, a, m, s, o, I.current, i);
      }
    }
    var Z = P.ReactCurrentOwner, _e = P.ReactDebugCurrentFrame;
    function O(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function we() {
      {
        if (Z.current) {
          var e = R(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function cr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ce = {};
    function lr(e) {
      {
        var r = we();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = lr(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var o = "";
        e && e._owner && e._owner !== Z.current && (o = " It was passed a child from " + R(e._owner.type) + "."), O(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), O(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            ee(o) && je(o, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = Ie(e);
          if (typeof s == "function" && s !== e.entries)
            for (var c = s.call(e), i; !(i = c.next()).done; )
              ee(i.value) && je(i.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = R(r);
          Ke(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var s = R(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            O(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), O(null);
            break;
          }
        }
        e.ref !== null && (O(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), O(null));
      }
    }
    function Se(e, r, t, o, s, c) {
      {
        var i = Me(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = cr(s);
          m ? a += m : a += we();
          var f;
          e === null ? f = "null" : K(e) ? f = "array" : e !== void 0 && e.$$typeof === u ? (f = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var d = sr(e, r, t, s, c);
        if (d == null)
          return d;
        if (i) {
          var y = r.children;
          if (y !== void 0)
            if (o)
              if (K(y)) {
                for (var F = 0; F < y.length; F++)
                  ke(y[F], e);
                Object.freeze && Object.freeze(y);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(y, e);
        }
        return e === p ? fr(d) : ur(d), d;
      }
    }
    function dr(e, r, t) {
      return Se(e, r, t, !0);
    }
    function pr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var vr = pr, hr = dr;
    W.Fragment = p, W.jsx = vr, W.jsxs = hr;
  }()), W;
}
process.env.NODE_ENV === "production" ? ne.exports = xr() : ne.exports = yr();
var l = ne.exports;
const Er = w.button`
    border: none;
    border-radius: 0.5rem;
    background-color: #2e836e;
    color: hsl(0deg, 0%, 98%);
    padding: 0.75rem;
    cursor: pointer;
    &:hover {
        background-color: #7b29a1;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #DF9453;
        background-color: #7B400C;
    }
    
    border-radius: 12px;

    height: min-content;
    width: min-content;

    min-height: 1rem;
    min-width: 1rem; 
    text-align: center;
    white-space: nowrap;
`, Mr = ({ caption: n, onClick: u }) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
  /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("p", { children: "Monorepo com TurboRepo" }) }),
  /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx(Er, { onClick: u, children: n }) })
] });
var oe = /* @__PURE__ */ ((n) => (n[n.Vertical = 0] = "Vertical", n[n.Horizontal = 1] = "Horizontal", n))(oe || {});
const Rr = br({}), _r = C.div`
    height: 100%;
    width: 100%;
    display: grid;
    background-color: ${({ backgroundcolor: n }) => n ?? ""};
    color: ${({ color: n }) => n ?? ""};

    ${(n) => n.orientacao == oe.Vertical && Oe`
        grid-template-rows: ${n.splitterpercent ? `minmax(max-content, ${n.splitterpercent}%)` : "max-content"} minmax(max-content, auto);
         ;
    `}

    ${(n) => n.orientacao == oe.Horizontal && Oe`
        grid-template-columns: ${n.splitterpercent ? `minmax(max-content, ${n.splitterpercent}%)` : "max-content"} minmax(max-content, auto);
    `}

`, Ur = (n) => {
  const { orientacao: u, children: h, ...p } = n;
  return /* @__PURE__ */ l.jsx(Rr.Provider, { value: { orientacao: u }, children: /* @__PURE__ */ l.jsx(_r, { orientacao: u, ...p, children: h }) });
}, wr = C.section`
    color: ${({ color: n }) => n || ""};
    background-color: ${({ backgroundcolor: n }) => n ?? ""};
    padding: ${({ padding: n }) => n ?? ""};
    
`, Br = (n) => {
  const { children: u, ...h } = n;
  return /* @__PURE__ */ l.jsx(wr, { ...h, children: u });
}, Cr = C.div`
    display: flex;
    width: max-content;
    align-items: baseline;
    cursor: pointer;
    gap: calc(${({ fontsize: n }) => n ?? "1rem"} * 0.3);

    &:hover > input:not(:checked)::before {
        background-color: #e5f1ff;
        border-color: #037ee2;
    }

    &:hover > input:checked::before {
        background-color: #0967d3;
        border-color: #07467a;
    }
`, jr = C.input`

    --checkbox-size: ${({ fontsize: n }) => n ?? "1rem"};

    cursor: pointer;
    width: calc(var(--checkbox-size) * 0.8);
    height: calc(var(--checkbox-size) * 0.8);
    visibility: hidden;
    display: grid;
    grid-template: 'content';
    overflow: hidden;
    margin: unset;

    &::before {
        content: '';
        visibility: visible;
        grid-area: content;
        box-sizing: border-box;
        border: 1px solid #737373;
        background-color: #FFFFFF;
        border-radius: calc(var(--checkbox-size) * 0.15);
        transition: all linear .15s;
    }

    &::after {
        content: '✔';
        opacity: 0;
        box-sizing: border-box;
        visibility: visible;
        grid-area: content;
        display: flex;
        align-items: center;
        justify-content: center;
        color: whitesmoke;
        transform: rotate(12deg);
        line-height: 0px;
        font-size: calc(var(--checkbox-size) * 0.6);
        transition: all linear .15s;
        font-weight: bold;
    }

    &:checked::before {
        background-color: #0075FF;
        border-color: #024d89;
    }

    &:checked::after {
        opacity: 1;
    }
`, kr = C.label`
    cursor: pointer;
    font-size: ${({ fontsize: n }) => n ?? "1rem"};
`, re = {
  Container: Cr,
  Checkbox: jr,
  Label: kr
}, Sr = (n) => {
  const { label: u, name: h, ...p } = n;
  let v = gr();
  return v = h ?? v, /* @__PURE__ */ l.jsxs(re.Container, { children: [
    /* @__PURE__ */ l.jsx(re.Checkbox, { id: v, name: v, type: "checkbox", ...p }),
    /* @__PURE__ */ l.jsx(re.Label, { htmlFor: v, ...p, children: u })
  ] });
}, Tr = C.fieldset`
    padding: 0.5rem;
    width: 100%;
`, Pr = C.legend`
    margin: 0px .5rem;
    padding: 0px .5rem;
    font-size: ${({ fontsize: n }) => n ?? "1rem"};
`, Or = C.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(${({ fontsize: n }) => n ?? "1rem"} * 4));
    gap: 0.5rem;
    justify-items: center;
    justify-content: space-evenly;
    padding: 0 .5rem;
`, te = {
  Fieldset: Tr,
  Legend: Pr,
  Container: Or
}, qr = (n) => {
  const { elementos: u, titulo: h, ...p } = n;
  return /* @__PURE__ */ l.jsxs(te.Fieldset, { children: [
    /* @__PURE__ */ l.jsx(te.Legend, { ...p, children: h }),
    /* @__PURE__ */ l.jsx(te.Container, { ...p, children: u.map((v) => /* @__PURE__ */ l.jsx(Sr, { label: v.descricao, name: v.name, ...p })) })
  ] });
}, Fr = mr`
  from {
    opacity: 0;
    transform: scale(0.3);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`, $r = w.div`
z-index: 2;
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background: ${(n) => n.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    animation: ${Fr} 0.5s ease-in-out;
`, Dr = w.div`

    display: flex;
    position: relative;
    height: 15%;
    width: 100%;
    align-items: center;
    justify-content: center;
    
`, Ar = w.div`

    display: flex;
    position: relative;
    width: 95%;
    height: 70%;
    flex-direction: column;
   //justify-content: center;
    align-items: center;
    overflow-y: scroll;
   
    &::-webkit-scrollbar {
    width: 8px; 
    
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: red; 
    border-radius: 10px; 
    cursor: pointer;
  }

  
`, Ir = w.div`

    display: flex;
    width: 100%;
    height: 15%;
    position: relative;
    align-items: center;
    justify-content: center;    
    
`, Lr = w.p`
  height: 80%;
  font-size: 22px;
  font-weight: bold;
  color: ${(n) => n.color};
`, Wr = w.button`
  border: none;
  &:hover{
    transition: 500ms;
    background-color: #9b0101;
    cursor: pointer;
  }
  &:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;

  }

`, $ = {
  container: $r,
  button: Wr,
  div: Dr,
  divCetral: Ar,
  divFinal: Ir,
  p: Lr
}, Gr = ({ isOpen: n, setModal: u, children: h, title: p, style: v }) => n ? /* @__PURE__ */ l.jsxs($.container, { background: v.background, children: [
  /* @__PURE__ */ l.jsx($.div, { children: /* @__PURE__ */ l.jsx($.p, { color: v.color, children: p }) }),
  /* @__PURE__ */ l.jsx($.divCetral, { children: h }),
  /* @__PURE__ */ l.jsx($.divFinal, { children: /* @__PURE__ */ l.jsx($.button, { onClick: () => u(), children: "fechar" }) })
] }) : null, Nr = w.div`

    .container{
        width: 100%;
        height: 100vh;
    }
    
    .dropdown{
        width: 400px;
        margin: 100px auto;
        position: relative;
        user-select: none;
        font-family: Arial;
        font-size: 20px;
    }

    .dropdown::before{
        content: '';
        position: absolute;
        right: 30px;
        top: 13px;
        z-index:1;
        width: 15px;
        height: 15px;
        border: 3px solid #333;
        border-top: 3px solid #fff;
        border-right: 3px solid #fff;
        transform: rotate(-45deg);
        transition: 0.5s;
        pointer-events: none;
    }
   
    .dropdown-bnt{
        padding: 15px 20px;
        background: #fff;
        box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.6);
        font-weight: bold;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

    }
   
    .dropdown-content{
        position: absolute;
        top: 110%;
        left: 0;
        padding: 10px;
        background: #fff;
        box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.6);
        font-weight: 500;
        color: #333;
        width: 95%;
    }
    
    .dropdown-item{
        padding: 10px;
        cursor: pointer;
        transition: all 0.2s;
        text-align: left;
    }

    .dropdown-item:hover{
        background: #f4f4f4;
    }
    
`, N = { container: Nr }, Yr = ["Português", "Matemática", "Inglês", "Geografia"], Jr = () => {
  const [n, u] = Pe(!1), [h, p] = Pe("Escolha uma opção");
  return /* @__PURE__ */ l.jsx(N.container, { className: "container", children: /* @__PURE__ */ l.jsxs(N.container, { className: "dropdown", children: [
    /* @__PURE__ */ l.jsx(N.container, { className: "dropdown-bnt", onClick: () => u(!n), children: h }),
    n && /* @__PURE__ */ l.jsx(N.container, { className: "dropdown-content", children: Yr.map((v) => /* @__PURE__ */ l.jsx(N.container, { onClick: () => {
      p(v), u(!1);
    }, className: "dropdown-item", children: v })) })
  ] }) });
};
export {
  Mr as Button,
  Sr as Checkbox,
  qr as CheckboxGroup,
  Jr as Dropdawn,
  Ur as LayoutSplitter,
  Gr as Modal,
  oe as SplitterDirection,
  Br as SplitterPanel
};
