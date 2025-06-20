(function () {
  const S = document.createElement("link").relList;
  if (S && S.supports && S.supports("modulepreload")) return;
  for (const A of document.querySelectorAll('link[rel="modulepreload"]')) s(A);
  new MutationObserver((A) => {
    for (const j of A)
      if (j.type === "childList")
        for (const H of j.addedNodes)
          H.tagName === "LINK" && H.rel === "modulepreload" && s(H);
  }).observe(document, { childList: !0, subtree: !0 });
  function b(A) {
    const j = {};
    return (
      A.integrity && (j.integrity = A.integrity),
      A.referrerPolicy && (j.referrerPolicy = A.referrerPolicy),
      A.crossOrigin === "use-credentials"
        ? (j.credentials = "include")
        : A.crossOrigin === "anonymous"
        ? (j.credentials = "omit")
        : (j.credentials = "same-origin"),
      j
    );
  }
  function s(A) {
    if (A.ep) return;
    A.ep = !0;
    const j = b(A);
    fetch(A.href, j);
  }
})();
var vf = { exports: {} },
  qn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nd;
function Oh() {
  if (Nd) return qn;
  Nd = 1;
  var f = Symbol.for("react.transitional.element"),
    S = Symbol.for("react.fragment");
  function b(s, A, j) {
    var H = null;
    if (
      (j !== void 0 && (H = "" + j),
      A.key !== void 0 && (H = "" + A.key),
      "key" in A)
    ) {
      j = {};
      for (var w in A) w !== "key" && (j[w] = A[w]);
    } else j = A;
    return (
      (A = j.ref),
      { $$typeof: f, type: s, key: H, ref: A !== void 0 ? A : null, props: j }
    );
  }
  return (qn.Fragment = S), (qn.jsx = b), (qn.jsxs = b), qn;
}
var Td;
function Rh() {
  return Td || ((Td = 1), (vf.exports = Oh())), vf.exports;
}
var o = Rh(),
  yf = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ed;
function Dh() {
  if (Ed) return $;
  Ed = 1;
  var f = Symbol.for("react.transitional.element"),
    S = Symbol.for("react.portal"),
    b = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    A = Symbol.for("react.profiler"),
    j = Symbol.for("react.consumer"),
    H = Symbol.for("react.context"),
    w = Symbol.for("react.forward_ref"),
    T = Symbol.for("react.suspense"),
    x = Symbol.for("react.memo"),
    D = Symbol.for("react.lazy"),
    k = Symbol.iterator;
  function J(d) {
    return d === null || typeof d != "object"
      ? null
      : ((d = (k && d[k]) || d["@@iterator"]),
        typeof d == "function" ? d : null);
  }
  var gl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    nl = Object.assign,
    ol = {};
  function pl(d, M, q) {
    (this.props = d),
      (this.context = M),
      (this.refs = ol),
      (this.updater = q || gl);
  }
  (pl.prototype.isReactComponent = {}),
    (pl.prototype.setState = function (d, M) {
      if (typeof d != "object" && typeof d != "function" && d != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, d, M, "setState");
    }),
    (pl.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, "forceUpdate");
    });
  function Wl() {}
  Wl.prototype = pl.prototype;
  function Il(d, M, q) {
    (this.props = d),
      (this.context = M),
      (this.refs = ol),
      (this.updater = q || gl);
  }
  var Tl = (Il.prototype = new Wl());
  (Tl.constructor = Il), nl(Tl, pl.prototype), (Tl.isPureReactComponent = !0);
  var Gl = Array.isArray,
    W = { H: null, A: null, T: null, S: null, V: null },
    Ml = Object.prototype.hasOwnProperty;
  function ql(d, M, q, R, C, ll) {
    return (
      (q = ll.ref),
      { $$typeof: f, type: d, key: M, ref: q !== void 0 ? q : null, props: ll }
    );
  }
  function Q(d, M) {
    return ql(d.type, M, void 0, void 0, void 0, d.props);
  }
  function Dl(d) {
    return typeof d == "object" && d !== null && d.$$typeof === f;
  }
  function Ct(d) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      d.replace(/[=:]/g, function (q) {
        return M[q];
      })
    );
  }
  var ht = /\/+/g;
  function jl(d, M) {
    return typeof d == "object" && d !== null && d.key != null
      ? Ct("" + d.key)
      : M.toString(36);
  }
  function Mt() {}
  function Nt(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (
          (typeof d.status == "string"
            ? d.then(Mt, Mt)
            : ((d.status = "pending"),
              d.then(
                function (M) {
                  d.status === "pending" &&
                    ((d.status = "fulfilled"), (d.value = M));
                },
                function (M) {
                  d.status === "pending" &&
                    ((d.status = "rejected"), (d.reason = M));
                }
              )),
          d.status)
        ) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function Al(d, M, q, R, C) {
    var ll = typeof d;
    (ll === "undefined" || ll === "boolean") && (d = null);
    var K = !1;
    if (d === null) K = !0;
    else
      switch (ll) {
        case "bigint":
        case "string":
        case "number":
          K = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case f:
            case S:
              K = !0;
              break;
            case D:
              return (K = d._init), Al(K(d._payload), M, q, R, C);
          }
      }
    if (K)
      return (
        (C = C(d)),
        (K = R === "" ? "." + jl(d, 0) : R),
        Gl(C)
          ? ((q = ""),
            K != null && (q = K.replace(ht, "$&/") + "/"),
            Al(C, M, q, "", function (nt) {
              return nt;
            }))
          : C != null &&
            (Dl(C) &&
              (C = Q(
                C,
                q +
                  (C.key == null || (d && d.key === C.key)
                    ? ""
                    : ("" + C.key).replace(ht, "$&/") + "/") +
                  K
              )),
            M.push(C)),
        1
      );
    K = 0;
    var ul = R === "" ? "." : R + ":";
    if (Gl(d))
      for (var vl = 0; vl < d.length; vl++)
        (R = d[vl]), (ll = ul + jl(R, vl)), (K += Al(R, M, q, ll, C));
    else if (((vl = J(d)), typeof vl == "function"))
      for (d = vl.call(d), vl = 0; !(R = d.next()).done; )
        (R = R.value), (ll = ul + jl(R, vl++)), (K += Al(R, M, q, ll, C));
    else if (ll === "object") {
      if (typeof d.then == "function") return Al(Nt(d), M, q, R, C);
      throw (
        ((M = String(d)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]"
              ? "object with keys {" + Object.keys(d).join(", ") + "}"
              : M) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return K;
  }
  function z(d, M, q) {
    if (d == null) return d;
    var R = [],
      C = 0;
    return (
      Al(d, R, "", "", function (ll) {
        return M.call(q, ll, C++);
      }),
      R
    );
  }
  function U(d) {
    if (d._status === -1) {
      var M = d._result;
      (M = M()),
        M.then(
          function (q) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 1), (d._result = q));
          },
          function (q) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 2), (d._result = q));
          }
        ),
        d._status === -1 && ((d._status = 0), (d._result = M));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var O =
    typeof reportError == "function"
      ? reportError
      : function (d) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var M = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof d == "object" &&
                d !== null &&
                typeof d.message == "string"
                  ? String(d.message)
                  : String(d),
              error: d,
            });
            if (!window.dispatchEvent(M)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", d);
            return;
          }
          console.error(d);
        };
  function fl() {}
  return (
    ($.Children = {
      map: z,
      forEach: function (d, M, q) {
        z(
          d,
          function () {
            M.apply(this, arguments);
          },
          q
        );
      },
      count: function (d) {
        var M = 0;
        return (
          z(d, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (d) {
        return (
          z(d, function (M) {
            return M;
          }) || []
        );
      },
      only: function (d) {
        if (!Dl(d))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return d;
      },
    }),
    ($.Component = pl),
    ($.Fragment = b),
    ($.Profiler = A),
    ($.PureComponent = Il),
    ($.StrictMode = s),
    ($.Suspense = T),
    ($.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
    ($.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (d) {
        return W.H.useMemoCache(d);
      },
    }),
    ($.cache = function (d) {
      return function () {
        return d.apply(null, arguments);
      };
    }),
    ($.cloneElement = function (d, M, q) {
      if (d == null)
        throw Error(
          "The argument must be a React element, but you passed " + d + "."
        );
      var R = nl({}, d.props),
        C = d.key,
        ll = void 0;
      if (M != null)
        for (K in (M.ref !== void 0 && (ll = void 0),
        M.key !== void 0 && (C = "" + M.key),
        M))
          !Ml.call(M, K) ||
            K === "key" ||
            K === "__self" ||
            K === "__source" ||
            (K === "ref" && M.ref === void 0) ||
            (R[K] = M[K]);
      var K = arguments.length - 2;
      if (K === 1) R.children = q;
      else if (1 < K) {
        for (var ul = Array(K), vl = 0; vl < K; vl++)
          ul[vl] = arguments[vl + 2];
        R.children = ul;
      }
      return ql(d.type, C, void 0, void 0, ll, R);
    }),
    ($.createContext = function (d) {
      return (
        (d = {
          $$typeof: H,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (d.Provider = d),
        (d.Consumer = { $$typeof: j, _context: d }),
        d
      );
    }),
    ($.createElement = function (d, M, q) {
      var R,
        C = {},
        ll = null;
      if (M != null)
        for (R in (M.key !== void 0 && (ll = "" + M.key), M))
          Ml.call(M, R) &&
            R !== "key" &&
            R !== "__self" &&
            R !== "__source" &&
            (C[R] = M[R]);
      var K = arguments.length - 2;
      if (K === 1) C.children = q;
      else if (1 < K) {
        for (var ul = Array(K), vl = 0; vl < K; vl++)
          ul[vl] = arguments[vl + 2];
        C.children = ul;
      }
      if (d && d.defaultProps)
        for (R in ((K = d.defaultProps), K)) C[R] === void 0 && (C[R] = K[R]);
      return ql(d, ll, void 0, void 0, null, C);
    }),
    ($.createRef = function () {
      return { current: null };
    }),
    ($.forwardRef = function (d) {
      return { $$typeof: w, render: d };
    }),
    ($.isValidElement = Dl),
    ($.lazy = function (d) {
      return { $$typeof: D, _payload: { _status: -1, _result: d }, _init: U };
    }),
    ($.memo = function (d, M) {
      return { $$typeof: x, type: d, compare: M === void 0 ? null : M };
    }),
    ($.startTransition = function (d) {
      var M = W.T,
        q = {};
      W.T = q;
      try {
        var R = d(),
          C = W.S;
        C !== null && C(q, R),
          typeof R == "object" &&
            R !== null &&
            typeof R.then == "function" &&
            R.then(fl, O);
      } catch (ll) {
        O(ll);
      } finally {
        W.T = M;
      }
    }),
    ($.unstable_useCacheRefresh = function () {
      return W.H.useCacheRefresh();
    }),
    ($.use = function (d) {
      return W.H.use(d);
    }),
    ($.useActionState = function (d, M, q) {
      return W.H.useActionState(d, M, q);
    }),
    ($.useCallback = function (d, M) {
      return W.H.useCallback(d, M);
    }),
    ($.useContext = function (d) {
      return W.H.useContext(d);
    }),
    ($.useDebugValue = function () {}),
    ($.useDeferredValue = function (d, M) {
      return W.H.useDeferredValue(d, M);
    }),
    ($.useEffect = function (d, M, q) {
      var R = W.H;
      if (typeof q == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return R.useEffect(d, M);
    }),
    ($.useId = function () {
      return W.H.useId();
    }),
    ($.useImperativeHandle = function (d, M, q) {
      return W.H.useImperativeHandle(d, M, q);
    }),
    ($.useInsertionEffect = function (d, M) {
      return W.H.useInsertionEffect(d, M);
    }),
    ($.useLayoutEffect = function (d, M) {
      return W.H.useLayoutEffect(d, M);
    }),
    ($.useMemo = function (d, M) {
      return W.H.useMemo(d, M);
    }),
    ($.useOptimistic = function (d, M) {
      return W.H.useOptimistic(d, M);
    }),
    ($.useReducer = function (d, M, q) {
      return W.H.useReducer(d, M, q);
    }),
    ($.useRef = function (d) {
      return W.H.useRef(d);
    }),
    ($.useState = function (d) {
      return W.H.useState(d);
    }),
    ($.useSyncExternalStore = function (d, M, q) {
      return W.H.useSyncExternalStore(d, M, q);
    }),
    ($.useTransition = function () {
      return W.H.useTransition();
    }),
    ($.version = "19.1.0"),
    $
  );
}
var _d;
function jf() {
  return _d || ((_d = 1), (yf.exports = Dh())), yf.exports;
}
var xl = jf(),
  gf = { exports: {} },
  Cn = {},
  bf = { exports: {} },
  pf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Md;
function Uh() {
  return (
    Md ||
      ((Md = 1),
      (function (f) {
        function S(z, U) {
          var O = z.length;
          z.push(U);
          l: for (; 0 < O; ) {
            var fl = (O - 1) >>> 1,
              d = z[fl];
            if (0 < A(d, U)) (z[fl] = U), (z[O] = d), (O = fl);
            else break l;
          }
        }
        function b(z) {
          return z.length === 0 ? null : z[0];
        }
        function s(z) {
          if (z.length === 0) return null;
          var U = z[0],
            O = z.pop();
          if (O !== U) {
            z[0] = O;
            l: for (var fl = 0, d = z.length, M = d >>> 1; fl < M; ) {
              var q = 2 * (fl + 1) - 1,
                R = z[q],
                C = q + 1,
                ll = z[C];
              if (0 > A(R, O))
                C < d && 0 > A(ll, R)
                  ? ((z[fl] = ll), (z[C] = O), (fl = C))
                  : ((z[fl] = R), (z[q] = O), (fl = q));
              else if (C < d && 0 > A(ll, O))
                (z[fl] = ll), (z[C] = O), (fl = C);
              else break l;
            }
          }
          return U;
        }
        function A(z, U) {
          var O = z.sortIndex - U.sortIndex;
          return O !== 0 ? O : z.id - U.id;
        }
        if (
          ((f.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var j = performance;
          f.unstable_now = function () {
            return j.now();
          };
        } else {
          var H = Date,
            w = H.now();
          f.unstable_now = function () {
            return H.now() - w;
          };
        }
        var T = [],
          x = [],
          D = 1,
          k = null,
          J = 3,
          gl = !1,
          nl = !1,
          ol = !1,
          pl = !1,
          Wl = typeof setTimeout == "function" ? setTimeout : null,
          Il = typeof clearTimeout == "function" ? clearTimeout : null,
          Tl = typeof setImmediate < "u" ? setImmediate : null;
        function Gl(z) {
          for (var U = b(x); U !== null; ) {
            if (U.callback === null) s(x);
            else if (U.startTime <= z)
              s(x), (U.sortIndex = U.expirationTime), S(T, U);
            else break;
            U = b(x);
          }
        }
        function W(z) {
          if (((ol = !1), Gl(z), !nl))
            if (b(T) !== null) (nl = !0), Ml || ((Ml = !0), jl());
            else {
              var U = b(x);
              U !== null && Al(W, U.startTime - z);
            }
        }
        var Ml = !1,
          ql = -1,
          Q = 5,
          Dl = -1;
        function Ct() {
          return pl ? !0 : !(f.unstable_now() - Dl < Q);
        }
        function ht() {
          if (((pl = !1), Ml)) {
            var z = f.unstable_now();
            Dl = z;
            var U = !0;
            try {
              l: {
                (nl = !1), ol && ((ol = !1), Il(ql), (ql = -1)), (gl = !0);
                var O = J;
                try {
                  t: {
                    for (
                      Gl(z), k = b(T);
                      k !== null && !(k.expirationTime > z && Ct());

                    ) {
                      var fl = k.callback;
                      if (typeof fl == "function") {
                        (k.callback = null), (J = k.priorityLevel);
                        var d = fl(k.expirationTime <= z);
                        if (((z = f.unstable_now()), typeof d == "function")) {
                          (k.callback = d), Gl(z), (U = !0);
                          break t;
                        }
                        k === b(T) && s(T), Gl(z);
                      } else s(T);
                      k = b(T);
                    }
                    if (k !== null) U = !0;
                    else {
                      var M = b(x);
                      M !== null && Al(W, M.startTime - z), (U = !1);
                    }
                  }
                  break l;
                } finally {
                  (k = null), (J = O), (gl = !1);
                }
                U = void 0;
              }
            } finally {
              U ? jl() : (Ml = !1);
            }
          }
        }
        var jl;
        if (typeof Tl == "function")
          jl = function () {
            Tl(ht);
          };
        else if (typeof MessageChannel < "u") {
          var Mt = new MessageChannel(),
            Nt = Mt.port2;
          (Mt.port1.onmessage = ht),
            (jl = function () {
              Nt.postMessage(null);
            });
        } else
          jl = function () {
            Wl(ht, 0);
          };
        function Al(z, U) {
          ql = Wl(function () {
            z(f.unstable_now());
          }, U);
        }
        (f.unstable_IdlePriority = 5),
          (f.unstable_ImmediatePriority = 1),
          (f.unstable_LowPriority = 4),
          (f.unstable_NormalPriority = 3),
          (f.unstable_Profiling = null),
          (f.unstable_UserBlockingPriority = 2),
          (f.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (f.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Q = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (f.unstable_getCurrentPriorityLevel = function () {
            return J;
          }),
          (f.unstable_next = function (z) {
            switch (J) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = J;
            }
            var O = J;
            J = U;
            try {
              return z();
            } finally {
              J = O;
            }
          }),
          (f.unstable_requestPaint = function () {
            pl = !0;
          }),
          (f.unstable_runWithPriority = function (z, U) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var O = J;
            J = z;
            try {
              return U();
            } finally {
              J = O;
            }
          }),
          (f.unstable_scheduleCallback = function (z, U, O) {
            var fl = f.unstable_now();
            switch (
              (typeof O == "object" && O !== null
                ? ((O = O.delay),
                  (O = typeof O == "number" && 0 < O ? fl + O : fl))
                : (O = fl),
              z)
            ) {
              case 1:
                var d = -1;
                break;
              case 2:
                d = 250;
                break;
              case 5:
                d = 1073741823;
                break;
              case 4:
                d = 1e4;
                break;
              default:
                d = 5e3;
            }
            return (
              (d = O + d),
              (z = {
                id: D++,
                callback: U,
                priorityLevel: z,
                startTime: O,
                expirationTime: d,
                sortIndex: -1,
              }),
              O > fl
                ? ((z.sortIndex = O),
                  S(x, z),
                  b(T) === null &&
                    z === b(x) &&
                    (ol ? (Il(ql), (ql = -1)) : (ol = !0), Al(W, O - fl)))
                : ((z.sortIndex = d),
                  S(T, z),
                  nl || gl || ((nl = !0), Ml || ((Ml = !0), jl()))),
              z
            );
          }),
          (f.unstable_shouldYield = Ct),
          (f.unstable_wrapCallback = function (z) {
            var U = J;
            return function () {
              var O = J;
              J = U;
              try {
                return z.apply(this, arguments);
              } finally {
                J = O;
              }
            };
          });
      })(pf)),
    pf
  );
}
var jd;
function Hh() {
  return jd || ((jd = 1), (bf.exports = Uh())), bf.exports;
}
var xf = { exports: {} },
  $l = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Od;
function qh() {
  if (Od) return $l;
  Od = 1;
  var f = jf();
  function S(T) {
    var x = "https://react.dev/errors/" + T;
    if (1 < arguments.length) {
      x += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++)
        x += "&args[]=" + encodeURIComponent(arguments[D]);
    }
    return (
      "Minified React error #" +
      T +
      "; visit " +
      x +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function b() {}
  var s = {
      d: {
        f: b,
        r: function () {
          throw Error(S(522));
        },
        D: b,
        C: b,
        L: b,
        m: b,
        X: b,
        S: b,
        M: b,
      },
      p: 0,
      findDOMNode: null,
    },
    A = Symbol.for("react.portal");
  function j(T, x, D) {
    var k =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: A,
      key: k == null ? null : "" + k,
      children: T,
      containerInfo: x,
      implementation: D,
    };
  }
  var H = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function w(T, x) {
    if (T === "font") return "";
    if (typeof x == "string") return x === "use-credentials" ? x : "";
  }
  return (
    ($l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    ($l.createPortal = function (T, x) {
      var D =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!x || (x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11))
        throw Error(S(299));
      return j(T, x, null, D);
    }),
    ($l.flushSync = function (T) {
      var x = H.T,
        D = s.p;
      try {
        if (((H.T = null), (s.p = 2), T)) return T();
      } finally {
        (H.T = x), (s.p = D), s.d.f();
      }
    }),
    ($l.preconnect = function (T, x) {
      typeof T == "string" &&
        (x
          ? ((x = x.crossOrigin),
            (x =
              typeof x == "string"
                ? x === "use-credentials"
                  ? x
                  : ""
                : void 0))
          : (x = null),
        s.d.C(T, x));
    }),
    ($l.prefetchDNS = function (T) {
      typeof T == "string" && s.d.D(T);
    }),
    ($l.preinit = function (T, x) {
      if (typeof T == "string" && x && typeof x.as == "string") {
        var D = x.as,
          k = w(D, x.crossOrigin),
          J = typeof x.integrity == "string" ? x.integrity : void 0,
          gl = typeof x.fetchPriority == "string" ? x.fetchPriority : void 0;
        D === "style"
          ? s.d.S(T, typeof x.precedence == "string" ? x.precedence : void 0, {
              crossOrigin: k,
              integrity: J,
              fetchPriority: gl,
            })
          : D === "script" &&
            s.d.X(T, {
              crossOrigin: k,
              integrity: J,
              fetchPriority: gl,
              nonce: typeof x.nonce == "string" ? x.nonce : void 0,
            });
      }
    }),
    ($l.preinitModule = function (T, x) {
      if (typeof T == "string")
        if (typeof x == "object" && x !== null) {
          if (x.as == null || x.as === "script") {
            var D = w(x.as, x.crossOrigin);
            s.d.M(T, {
              crossOrigin: D,
              integrity: typeof x.integrity == "string" ? x.integrity : void 0,
              nonce: typeof x.nonce == "string" ? x.nonce : void 0,
            });
          }
        } else x == null && s.d.M(T);
    }),
    ($l.preload = function (T, x) {
      if (
        typeof T == "string" &&
        typeof x == "object" &&
        x !== null &&
        typeof x.as == "string"
      ) {
        var D = x.as,
          k = w(D, x.crossOrigin);
        s.d.L(T, D, {
          crossOrigin: k,
          integrity: typeof x.integrity == "string" ? x.integrity : void 0,
          nonce: typeof x.nonce == "string" ? x.nonce : void 0,
          type: typeof x.type == "string" ? x.type : void 0,
          fetchPriority:
            typeof x.fetchPriority == "string" ? x.fetchPriority : void 0,
          referrerPolicy:
            typeof x.referrerPolicy == "string" ? x.referrerPolicy : void 0,
          imageSrcSet:
            typeof x.imageSrcSet == "string" ? x.imageSrcSet : void 0,
          imageSizes: typeof x.imageSizes == "string" ? x.imageSizes : void 0,
          media: typeof x.media == "string" ? x.media : void 0,
        });
      }
    }),
    ($l.preloadModule = function (T, x) {
      if (typeof T == "string")
        if (x) {
          var D = w(x.as, x.crossOrigin);
          s.d.m(T, {
            as: typeof x.as == "string" && x.as !== "script" ? x.as : void 0,
            crossOrigin: D,
            integrity: typeof x.integrity == "string" ? x.integrity : void 0,
          });
        } else s.d.m(T);
    }),
    ($l.requestFormReset = function (T) {
      s.d.r(T);
    }),
    ($l.unstable_batchedUpdates = function (T, x) {
      return T(x);
    }),
    ($l.useFormState = function (T, x, D) {
      return H.H.useFormState(T, x, D);
    }),
    ($l.useFormStatus = function () {
      return H.H.useHostTransitionStatus();
    }),
    ($l.version = "19.1.0"),
    $l
  );
}
var Rd;
function Ch() {
  if (Rd) return xf.exports;
  Rd = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (S) {
        console.error(S);
      }
  }
  return f(), (xf.exports = qh()), xf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dd;
function Bh() {
  if (Dd) return Cn;
  Dd = 1;
  var f = Hh(),
    S = jf(),
    b = Ch();
  function s(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function A(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function j(l) {
    var t = l,
      e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (e = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function H(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function w(l) {
    if (j(l) !== l) throw Error(s(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = j(l)), t === null)) throw Error(s(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === e) return w(n), l;
          if (u === a) return w(n), t;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (e.return !== a.return) (e = n), (a = u);
      else {
        for (var c = !1, i = n.child; i; ) {
          if (i === e) {
            (c = !0), (e = n), (a = u);
            break;
          }
          if (i === a) {
            (c = !0), (a = n), (e = u);
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = u.child; i; ) {
            if (i === e) {
              (c = !0), (e = u), (a = n);
              break;
            }
            if (i === a) {
              (c = !0), (a = u), (e = n);
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(s(189));
        }
      }
      if (e.alternate !== a) throw Error(s(190));
    }
    if (e.tag !== 3) throw Error(s(188));
    return e.stateNode.current === e ? l : t;
  }
  function x(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = x(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var D = Object.assign,
    k = Symbol.for("react.element"),
    J = Symbol.for("react.transitional.element"),
    gl = Symbol.for("react.portal"),
    nl = Symbol.for("react.fragment"),
    ol = Symbol.for("react.strict_mode"),
    pl = Symbol.for("react.profiler"),
    Wl = Symbol.for("react.provider"),
    Il = Symbol.for("react.consumer"),
    Tl = Symbol.for("react.context"),
    Gl = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    Ml = Symbol.for("react.suspense_list"),
    ql = Symbol.for("react.memo"),
    Q = Symbol.for("react.lazy"),
    Dl = Symbol.for("react.activity"),
    Ct = Symbol.for("react.memo_cache_sentinel"),
    ht = Symbol.iterator;
  function jl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (ht && l[ht]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Mt = Symbol.for("react.client.reference");
  function Nt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Mt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case nl:
        return "Fragment";
      case pl:
        return "Profiler";
      case ol:
        return "StrictMode";
      case W:
        return "Suspense";
      case Ml:
        return "SuspenseList";
      case Dl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case gl:
          return "Portal";
        case Tl:
          return (l.displayName || "Context") + ".Provider";
        case Il:
          return (l._context.displayName || "Context") + ".Consumer";
        case Gl:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case ql:
          return (
            (t = l.displayName || null), t !== null ? t : Nt(l.type) || "Memo"
          );
        case Q:
          (t = l._payload), (l = l._init);
          try {
            return Nt(l(t));
          } catch {}
      }
    return null;
  }
  var Al = Array.isArray,
    z = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    O = { pending: !1, data: null, method: null, action: null },
    fl = [],
    d = -1;
  function M(l) {
    return { current: l };
  }
  function q(l) {
    0 > d || ((l.current = fl[d]), (fl[d] = null), d--);
  }
  function R(l, t) {
    d++, (fl[d] = l.current), (l.current = t);
  }
  var C = M(null),
    ll = M(null),
    K = M(null),
    ul = M(null);
  function vl(l, t) {
    switch ((R(K, t), R(ll, l), R(C, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Io(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = Io(t)), (l = Po(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    q(C), R(C, l);
  }
  function nt() {
    q(C), q(ll), q(K);
  }
  function ee(l) {
    l.memoizedState !== null && R(ul, l);
    var t = C.current,
      e = Po(t, l.type);
    t !== e && (R(ll, l), R(C, e));
  }
  function ae(l) {
    ll.current === l && (q(C), q(ll)),
      ul.current === l && (q(ul), (On._currentValue = O));
  }
  var ne = Object.prototype.hasOwnProperty,
    tc = f.unstable_scheduleCallback,
    ec = f.unstable_cancelCallback,
    f0 = f.unstable_shouldYield,
    s0 = f.unstable_requestPaint,
    jt = f.unstable_now,
    r0 = f.unstable_getCurrentPriorityLevel,
    Rf = f.unstable_ImmediatePriority,
    Df = f.unstable_UserBlockingPriority,
    Yn = f.unstable_NormalPriority,
    o0 = f.unstable_LowPriority,
    Uf = f.unstable_IdlePriority,
    d0 = f.log,
    m0 = f.unstable_setDisableYieldValue,
    Ba = null,
    ut = null;
  function ue(l) {
    if (
      (typeof d0 == "function" && m0(l),
      ut && typeof ut.setStrictMode == "function")
    )
      try {
        ut.setStrictMode(Ba, l);
      } catch {}
  }
  var ct = Math.clz32 ? Math.clz32 : y0,
    h0 = Math.log,
    v0 = Math.LN2;
  function y0(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((h0(l) / v0) | 0)) | 0;
  }
  var Gn = 256,
    wn = 4194304;
  function Oe(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Xn(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var i = a & 134217727;
    return (
      i !== 0
        ? ((a = i & ~u),
          a !== 0
            ? (n = Oe(a))
            : ((c &= i),
              c !== 0
                ? (n = Oe(c))
                : e || ((e = i & ~l), e !== 0 && (n = Oe(e)))))
        : ((i = a & ~u),
          i !== 0
            ? (n = Oe(i))
            : c !== 0
            ? (n = Oe(c))
            : e || ((e = a & ~l), e !== 0 && (n = Oe(e)))),
      n === 0
        ? 0
        : t !== 0 &&
          t !== n &&
          (t & u) === 0 &&
          ((u = n & -n),
          (e = t & -t),
          u >= e || (u === 32 && (e & 4194048) !== 0))
        ? t
        : n
    );
  }
  function Ya(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function g0(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Hf() {
    var l = Gn;
    return (Gn <<= 1), (Gn & 4194048) === 0 && (Gn = 256), l;
  }
  function qf() {
    var l = wn;
    return (wn <<= 1), (wn & 62914560) === 0 && (wn = 4194304), l;
  }
  function ac(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Ga(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function b0(l, t, e, a, n, u) {
    var c = l.pendingLanes;
    (l.pendingLanes = e),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= e),
      (l.entangledLanes &= e),
      (l.errorRecoveryDisabledLanes &= e),
      (l.shellSuspendCounter = 0);
    var i = l.entanglements,
      r = l.expirationTimes,
      y = l.hiddenUpdates;
    for (e = c & ~e; 0 < e; ) {
      var N = 31 - ct(e),
        _ = 1 << N;
      (i[N] = 0), (r[N] = -1);
      var g = y[N];
      if (g !== null)
        for (y[N] = null, N = 0; N < g.length; N++) {
          var p = g[N];
          p !== null && (p.lane &= -536870913);
        }
      e &= ~_;
    }
    a !== 0 && Cf(l, a, 0),
      u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(c & ~t));
  }
  function Cf(l, t, e) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var a = 31 - ct(t);
    (l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (e & 4194090));
  }
  function Bf(l, t) {
    var e = (l.entangledLanes |= t);
    for (l = l.entanglements; e; ) {
      var a = 31 - ct(e),
        n = 1 << a;
      (n & t) | (l[a] & t) && (l[a] |= t), (e &= ~n);
    }
  }
  function nc(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function uc(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Yf() {
    var l = U.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : bd(l.type));
  }
  function p0(l, t) {
    var e = U.p;
    try {
      return (U.p = l), t();
    } finally {
      U.p = e;
    }
  }
  var ce = Math.random().toString(36).slice(2),
    Kl = "__reactFiber$" + ce,
    Pl = "__reactProps$" + ce,
    $e = "__reactContainer$" + ce,
    cc = "__reactEvents$" + ce,
    x0 = "__reactListeners$" + ce,
    S0 = "__reactHandles$" + ce,
    Gf = "__reactResources$" + ce,
    wa = "__reactMarker$" + ce;
  function ic(l) {
    delete l[Kl], delete l[Pl], delete l[cc], delete l[x0], delete l[S0];
  }
  function We(l) {
    var t = l[Kl];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if ((t = e[$e] || e[Kl])) {
        if (
          ((e = t.alternate),
          t.child !== null || (e !== null && e.child !== null))
        )
          for (l = ad(l); l !== null; ) {
            if ((e = l[Kl])) return e;
            l = ad(l);
          }
        return t;
      }
      (l = e), (e = l.parentNode);
    }
    return null;
  }
  function Fe(l) {
    if ((l = l[Kl] || l[$e])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Xa(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(s(33));
  }
  function Ie(l) {
    var t = l[Gf];
    return (
      t ||
        (t = l[Gf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function wl(l) {
    l[wa] = !0;
  }
  var wf = new Set(),
    Xf = {};
  function Re(l, t) {
    Pe(l, t), Pe(l + "Capture", t);
  }
  function Pe(l, t) {
    for (Xf[l] = t, l = 0; l < t.length; l++) wf.add(t[l]);
  }
  var z0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Qf = {},
    Zf = {};
  function A0(l) {
    return ne.call(Zf, l)
      ? !0
      : ne.call(Qf, l)
      ? !1
      : z0.test(l)
      ? (Zf[l] = !0)
      : ((Qf[l] = !0), !1);
  }
  function Qn(l, t, e) {
    if (A0(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function Zn(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Bt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  var fc, Vf;
  function la(l) {
    if (fc === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        (fc = (t && t[1]) || ""),
          (Vf =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      fc +
      l +
      Vf
    );
  }
  var sc = !1;
  function rc(l, t) {
    if (!l || sc) return "";
    sc = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var _ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(_.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(_, []);
                } catch (p) {
                  var g = p;
                }
                Reflect.construct(l, [], _);
              } else {
                try {
                  _.call();
                } catch (p) {
                  g = p;
                }
                l.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                g = p;
              }
              (_ = l()) &&
                typeof _.catch == "function" &&
                _.catch(function () {});
            }
          } catch (p) {
            if (p && g && typeof p.stack == "string") return [p.stack, g.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        c = u[0],
        i = u[1];
      if (c && i) {
        var r = c.split(`
`),
          y = i.split(`
`);
        for (
          n = a = 0;
          a < r.length && !r[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < y.length && !y[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === r.length || n === y.length)
          for (
            a = r.length - 1, n = y.length - 1;
            1 <= a && 0 <= n && r[a] !== y[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (r[a] !== y[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || r[a] !== y[n])) {
                  var N =
                    `
` + r[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", l.displayName)),
                    N
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (sc = !1), (Error.prepareStackTrace = e);
    }
    return (e = l ? l.displayName || l.name : "") ? la(e) : "";
  }
  function N0(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return la(l.type);
      case 16:
        return la("Lazy");
      case 13:
        return la("Suspense");
      case 19:
        return la("SuspenseList");
      case 0:
      case 15:
        return rc(l.type, !1);
      case 11:
        return rc(l.type.render, !1);
      case 1:
        return rc(l.type, !0);
      case 31:
        return la("Activity");
      default:
        return "";
    }
  }
  function Lf(l) {
    try {
      var t = "";
      do (t += N0(l)), (l = l.return);
      while (l);
      return t;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  function vt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function kf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function T0(l) {
    var t = kf(l) ? "checked" : "value",
      e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      a = "" + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var n = e.get,
        u = e.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (c) {
            (a = "" + c), u.call(this, c);
          },
        }),
        Object.defineProperty(l, t, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function Vn(l) {
    l._valueTracker || (l._valueTracker = T0(l));
  }
  function Kf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(),
      a = "";
    return (
      l && (a = kf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== e ? (t.setValue(l), !0) : !1
    );
  }
  function Ln(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var E0 = /[\n"\\]/g;
  function yt(l) {
    return l.replace(E0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function oc(l, t, e, a, n, u, c, i) {
    (l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + vt(t))
          : l.value !== "" + vt(t) && (l.value = "" + vt(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? dc(l, c, vt(t))
        : e != null
        ? dc(l, c, vt(e))
        : a != null && l.removeAttribute("value"),
      n == null && u != null && (l.defaultChecked = !!u),
      n != null &&
        (l.checked = n && typeof n != "function" && typeof n != "symbol"),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.name = "" + vt(i))
        : l.removeAttribute("name");
  }
  function Jf(l, t, e, a, n, u, c, i) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (l.type = u),
      t != null || e != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) return;
      (e = e != null ? "" + vt(e) : ""),
        (t = t != null ? "" + vt(t) : e),
        i || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = i ? l.checked : !!a),
      (l.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c);
  }
  function dc(l, t, e) {
    (t === "number" && Ln(l.ownerDocument) === l) ||
      l.defaultValue === "" + e ||
      (l.defaultValue = "" + e);
  }
  function ta(l, t, e, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var n = 0; n < e.length; n++) t["$" + e[n]] = !0;
      for (e = 0; e < l.length; e++)
        (n = t.hasOwnProperty("$" + l[e].value)),
          l[e].selected !== n && (l[e].selected = n),
          n && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + vt(e), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === e) {
          (l[n].selected = !0), a && (l[n].defaultSelected = !0);
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function $f(l, t, e) {
    if (
      t != null &&
      ((t = "" + vt(t)), t !== l.value && (l.value = t), e == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + vt(e) : "";
  }
  function Wf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(s(92));
        if (Al(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), (t = e);
    }
    (e = vt(t)),
      (l.defaultValue = e),
      (a = l.textContent),
      a === e && a !== "" && a !== null && (l.value = a);
  }
  function ea(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var _0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ff(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : a
      ? l.setProperty(t, e)
      : typeof e != "number" || e === 0 || _0.has(t)
      ? t === "float"
        ? (l.cssFloat = e)
        : (l[t] = ("" + e).trim())
      : (l[t] = e + "px");
  }
  function If(l, t, e) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (((l = l.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
            ? (l.cssFloat = "")
            : (l[a] = ""));
      for (var n in t)
        (a = t[n]), t.hasOwnProperty(n) && e[n] !== a && Ff(l, n, a);
    } else for (var u in t) t.hasOwnProperty(u) && Ff(l, u, t[u]);
  }
  function mc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var M0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    j0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function kn(l) {
    return j0.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var hc = null;
  function vc(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var aa = null,
    na = null;
  function Pf(l) {
    var t = Fe(l);
    if (t && (l = t.stateNode)) {
      var e = l[Pl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (oc(
              l,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name
            ),
            (t = e.name),
            e.type === "radio" && t != null)
          ) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + yt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < e.length;
              t++
            ) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var n = a[Pl] || null;
                if (!n) throw Error(s(90));
                oc(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < e.length; t++)
              (a = e[t]), a.form === l.form && Kf(a);
          }
          break l;
        case "textarea":
          $f(l, e.value, e.defaultValue);
          break l;
        case "select":
          (t = e.value), t != null && ta(l, !!e.multiple, t, !1);
      }
    }
  }
  var yc = !1;
  function ls(l, t, e) {
    if (yc) return l(t, e);
    yc = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((yc = !1),
        (aa !== null || na !== null) &&
          (Ru(), aa && ((t = aa), (l = na), (na = aa = null), Pf(t), l)))
      )
        for (t = 0; t < l.length; t++) Pf(l[t]);
    }
  }
  function Qa(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Pl] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(s(231, t, typeof e));
    return e;
  }
  var Yt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    gc = !1;
  if (Yt)
    try {
      var Za = {};
      Object.defineProperty(Za, "passive", {
        get: function () {
          gc = !0;
        },
      }),
        window.addEventListener("test", Za, Za),
        window.removeEventListener("test", Za, Za);
    } catch {
      gc = !1;
    }
  var ie = null,
    bc = null,
    Kn = null;
  function ts() {
    if (Kn) return Kn;
    var l,
      t = bc,
      e = t.length,
      a,
      n = "value" in ie ? ie.value : ie.textContent,
      u = n.length;
    for (l = 0; l < e && t[l] === n[l]; l++);
    var c = e - l;
    for (a = 1; a <= c && t[e - a] === n[u - a]; a++);
    return (Kn = n.slice(l, 1 < a ? 1 - a : void 0));
  }
  function Jn(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function $n() {
    return !0;
  }
  function es() {
    return !1;
  }
  function lt(l) {
    function t(e, a, n, u, c) {
      (this._reactName = e),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = c),
        (this.currentTarget = null);
      for (var i in l)
        l.hasOwnProperty(i) && ((e = l[i]), (this[i] = e ? e(u) : u[i]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? $n
          : es),
        (this.isPropagationStopped = es),
        this
      );
    }
    return (
      D(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = $n));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = $n));
        },
        persist: function () {},
        isPersistent: $n,
      }),
      t
    );
  }
  var De = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Wn = lt(De),
    Va = D({}, De, { view: 0, detail: 0 }),
    O0 = lt(Va),
    pc,
    xc,
    La,
    Fn = D({}, Va, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: zc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== La &&
              (La && l.type === "mousemove"
                ? ((pc = l.screenX - La.screenX), (xc = l.screenY - La.screenY))
                : (xc = pc = 0),
              (La = l)),
            pc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : xc;
      },
    }),
    as = lt(Fn),
    R0 = D({}, Fn, { dataTransfer: 0 }),
    D0 = lt(R0),
    U0 = D({}, Va, { relatedTarget: 0 }),
    Sc = lt(U0),
    H0 = D({}, De, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    q0 = lt(H0),
    C0 = D({}, De, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    B0 = lt(C0),
    Y0 = D({}, De, { data: 0 }),
    ns = lt(Y0),
    G0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    w0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    X0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Q0(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = X0[l])
      ? !!t[l]
      : !1;
  }
  function zc() {
    return Q0;
  }
  var Z0 = D({}, Va, {
      key: function (l) {
        if (l.key) {
          var t = G0[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Jn(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? w0[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zc,
      charCode: function (l) {
        return l.type === "keypress" ? Jn(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Jn(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    V0 = lt(Z0),
    L0 = D({}, Fn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    us = lt(L0),
    k0 = D({}, Va, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zc,
    }),
    K0 = lt(k0),
    J0 = D({}, De, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $0 = lt(J0),
    W0 = D({}, Fn, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    F0 = lt(W0),
    I0 = D({}, De, { newState: 0, oldState: 0 }),
    P0 = lt(I0),
    lm = [9, 13, 27, 32],
    Ac = Yt && "CompositionEvent" in window,
    ka = null;
  Yt && "documentMode" in document && (ka = document.documentMode);
  var tm = Yt && "TextEvent" in window && !ka,
    cs = Yt && (!Ac || (ka && 8 < ka && 11 >= ka)),
    is = " ",
    fs = !1;
  function ss(l, t) {
    switch (l) {
      case "keyup":
        return lm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function rs(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var ua = !1;
  function em(l, t) {
    switch (l) {
      case "compositionend":
        return rs(t);
      case "keypress":
        return t.which !== 32 ? null : ((fs = !0), is);
      case "textInput":
        return (l = t.data), l === is && fs ? null : l;
      default:
        return null;
    }
  }
  function am(l, t) {
    if (ua)
      return l === "compositionend" || (!Ac && ss(l, t))
        ? ((l = ts()), (Kn = bc = ie = null), (ua = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return cs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var nm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function os(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!nm[l.type] : t === "textarea";
  }
  function ds(l, t, e, a) {
    aa ? (na ? na.push(a) : (na = [a])) : (aa = a),
      (t = Bu(t, "onChange")),
      0 < t.length &&
        ((e = new Wn("onChange", "change", null, e, a)),
        l.push({ event: e, listeners: t }));
  }
  var Ka = null,
    Ja = null;
  function um(l) {
    Ko(l, 0);
  }
  function In(l) {
    var t = Xa(l);
    if (Kf(t)) return l;
  }
  function ms(l, t) {
    if (l === "change") return t;
  }
  var hs = !1;
  if (Yt) {
    var Nc;
    if (Yt) {
      var Tc = "oninput" in document;
      if (!Tc) {
        var vs = document.createElement("div");
        vs.setAttribute("oninput", "return;"),
          (Tc = typeof vs.oninput == "function");
      }
      Nc = Tc;
    } else Nc = !1;
    hs = Nc && (!document.documentMode || 9 < document.documentMode);
  }
  function ys() {
    Ka && (Ka.detachEvent("onpropertychange", gs), (Ja = Ka = null));
  }
  function gs(l) {
    if (l.propertyName === "value" && In(Ja)) {
      var t = [];
      ds(t, Ja, l, vc(l)), ls(um, t);
    }
  }
  function cm(l, t, e) {
    l === "focusin"
      ? (ys(), (Ka = t), (Ja = e), Ka.attachEvent("onpropertychange", gs))
      : l === "focusout" && ys();
  }
  function im(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return In(Ja);
  }
  function fm(l, t) {
    if (l === "click") return In(t);
  }
  function sm(l, t) {
    if (l === "input" || l === "change") return In(t);
  }
  function rm(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var it = typeof Object.is == "function" ? Object.is : rm;
  function $a(l, t) {
    if (it(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var e = Object.keys(l),
      a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!ne.call(t, n) || !it(l[n], t[n])) return !1;
    }
    return !0;
  }
  function bs(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ps(l, t) {
    var e = bs(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = l + e.textContent.length), l <= t && a >= t))
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = bs(e);
    }
  }
  function xs(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? xs(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Ss(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Ln(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Ln(l.document);
    }
    return t;
  }
  function Ec(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var om = Yt && "documentMode" in document && 11 >= document.documentMode,
    ca = null,
    _c = null,
    Wa = null,
    Mc = !1;
  function zs(l, t, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Mc ||
      ca == null ||
      ca !== Ln(a) ||
      ((a = ca),
      "selectionStart" in a && Ec(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Wa && $a(Wa, a)) ||
        ((Wa = a),
        (a = Bu(_c, "onSelect")),
        0 < a.length &&
          ((t = new Wn("onSelect", "select", null, t, e)),
          l.push({ event: t, listeners: a }),
          (t.target = ca))));
  }
  function Ue(l, t) {
    var e = {};
    return (
      (e[l.toLowerCase()] = t.toLowerCase()),
      (e["Webkit" + l] = "webkit" + t),
      (e["Moz" + l] = "moz" + t),
      e
    );
  }
  var ia = {
      animationend: Ue("Animation", "AnimationEnd"),
      animationiteration: Ue("Animation", "AnimationIteration"),
      animationstart: Ue("Animation", "AnimationStart"),
      transitionrun: Ue("Transition", "TransitionRun"),
      transitionstart: Ue("Transition", "TransitionStart"),
      transitioncancel: Ue("Transition", "TransitionCancel"),
      transitionend: Ue("Transition", "TransitionEnd"),
    },
    jc = {},
    As = {};
  Yt &&
    ((As = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ia.animationend.animation,
      delete ia.animationiteration.animation,
      delete ia.animationstart.animation),
    "TransitionEvent" in window || delete ia.transitionend.transition);
  function He(l) {
    if (jc[l]) return jc[l];
    if (!ia[l]) return l;
    var t = ia[l],
      e;
    for (e in t) if (t.hasOwnProperty(e) && e in As) return (jc[l] = t[e]);
    return l;
  }
  var Ns = He("animationend"),
    Ts = He("animationiteration"),
    Es = He("animationstart"),
    dm = He("transitionrun"),
    mm = He("transitionstart"),
    hm = He("transitioncancel"),
    _s = He("transitionend"),
    Ms = new Map(),
    Oc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Oc.push("scrollEnd");
  function Tt(l, t) {
    Ms.set(l, t), Re(t, [l]);
  }
  var js = new WeakMap();
  function gt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = js.get(l);
      return e !== void 0
        ? e
        : ((t = { value: l, source: t, stack: Lf(t) }), js.set(l, t), t);
    }
    return { value: l, source: t, stack: Lf(t) };
  }
  var bt = [],
    fa = 0,
    Rc = 0;
  function Pn() {
    for (var l = fa, t = (Rc = fa = 0); t < l; ) {
      var e = bt[t];
      bt[t++] = null;
      var a = bt[t];
      bt[t++] = null;
      var n = bt[t];
      bt[t++] = null;
      var u = bt[t];
      if (((bt[t++] = null), a !== null && n !== null)) {
        var c = a.pending;
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
          (a.pending = n);
      }
      u !== 0 && Os(e, n, u);
    }
  }
  function lu(l, t, e, a) {
    (bt[fa++] = l),
      (bt[fa++] = t),
      (bt[fa++] = e),
      (bt[fa++] = a),
      (Rc |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a);
  }
  function Dc(l, t, e, a) {
    return lu(l, t, e, a), tu(l);
  }
  function sa(l, t) {
    return lu(l, null, null, t), tu(l);
  }
  function Os(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, u = l.return; u !== null; )
      (u.childLanes |= e),
        (a = u.alternate),
        a !== null && (a.childLanes |= e),
        u.tag === 22 &&
          ((l = u.stateNode), l === null || l._visibility & 1 || (n = !0)),
        (l = u),
        (u = u.return);
    return l.tag === 3
      ? ((u = l.stateNode),
        n &&
          t !== null &&
          ((n = 31 - ct(e)),
          (l = u.hiddenUpdates),
          (a = l[n]),
          a === null ? (l[n] = [t]) : a.push(t),
          (t.lane = e | 536870912)),
        u)
      : null;
  }
  function tu(l) {
    if (50 < zn) throw ((zn = 0), (Yi = null), Error(s(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var ra = {};
  function vm(l, t, e, a) {
    (this.tag = l),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ft(l, t, e, a) {
    return new vm(l, t, e, a);
  }
  function Uc(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Gt(l, t) {
    var e = l.alternate;
    return (
      e === null
        ? ((e = ft(l.tag, t, l.key, l.mode)),
          (e.elementType = l.elementType),
          (e.type = l.type),
          (e.stateNode = l.stateNode),
          (e.alternate = l),
          (l.alternate = e))
        : ((e.pendingProps = t),
          (e.type = l.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = l.flags & 65011712),
      (e.childLanes = l.childLanes),
      (e.lanes = l.lanes),
      (e.child = l.child),
      (e.memoizedProps = l.memoizedProps),
      (e.memoizedState = l.memoizedState),
      (e.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (e.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (e.sibling = l.sibling),
      (e.index = l.index),
      (e.ref = l.ref),
      (e.refCleanup = l.refCleanup),
      e
    );
  }
  function Rs(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return (
      e === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = e.childLanes),
          (l.lanes = e.lanes),
          (l.child = e.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = e.memoizedProps),
          (l.memoizedState = e.memoizedState),
          (l.updateQueue = e.updateQueue),
          (l.type = e.type),
          (t = e.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function eu(l, t, e, a, n, u) {
    var c = 0;
    if (((a = l), typeof l == "function")) Uc(l) && (c = 1);
    else if (typeof l == "string")
      c = gh(l, e, C.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case Dl:
          return (l = ft(31, e, t, n)), (l.elementType = Dl), (l.lanes = u), l;
        case nl:
          return qe(e.children, n, u, t);
        case ol:
          (c = 8), (n |= 24);
          break;
        case pl:
          return (
            (l = ft(12, e, t, n | 2)), (l.elementType = pl), (l.lanes = u), l
          );
        case W:
          return (l = ft(13, e, t, n)), (l.elementType = W), (l.lanes = u), l;
        case Ml:
          return (l = ft(19, e, t, n)), (l.elementType = Ml), (l.lanes = u), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Wl:
              case Tl:
                c = 10;
                break l;
              case Il:
                c = 9;
                break l;
              case Gl:
                c = 11;
                break l;
              case ql:
                c = 14;
                break l;
              case Q:
                (c = 16), (a = null);
                break l;
            }
          (c = 29),
            (e = Error(s(130, l === null ? "null" : typeof l, ""))),
            (a = null);
      }
    return (
      (t = ft(c, e, t, n)), (t.elementType = l), (t.type = a), (t.lanes = u), t
    );
  }
  function qe(l, t, e, a) {
    return (l = ft(7, l, a, t)), (l.lanes = e), l;
  }
  function Hc(l, t, e) {
    return (l = ft(6, l, null, t)), (l.lanes = e), l;
  }
  function qc(l, t, e) {
    return (
      (t = ft(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = e),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var oa = [],
    da = 0,
    au = null,
    nu = 0,
    pt = [],
    xt = 0,
    Ce = null,
    wt = 1,
    Xt = "";
  function Be(l, t) {
    (oa[da++] = nu), (oa[da++] = au), (au = l), (nu = t);
  }
  function Ds(l, t, e) {
    (pt[xt++] = wt), (pt[xt++] = Xt), (pt[xt++] = Ce), (Ce = l);
    var a = wt;
    l = Xt;
    var n = 32 - ct(a) - 1;
    (a &= ~(1 << n)), (e += 1);
    var u = 32 - ct(t) + n;
    if (30 < u) {
      var c = n - (n % 5);
      (u = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (n -= c),
        (wt = (1 << (32 - ct(t) + n)) | (e << n) | a),
        (Xt = u + l);
    } else (wt = (1 << u) | (e << n) | a), (Xt = l);
  }
  function Cc(l) {
    l.return !== null && (Be(l, 1), Ds(l, 1, 0));
  }
  function Bc(l) {
    for (; l === au; )
      (au = oa[--da]), (oa[da] = null), (nu = oa[--da]), (oa[da] = null);
    for (; l === Ce; )
      (Ce = pt[--xt]),
        (pt[xt] = null),
        (Xt = pt[--xt]),
        (pt[xt] = null),
        (wt = pt[--xt]),
        (pt[xt] = null);
  }
  var Fl = null,
    El = null,
    il = !1,
    Ye = null,
    Ot = !1,
    Yc = Error(s(519));
  function Ge(l) {
    var t = Error(s(418, ""));
    throw (Pa(gt(t, l)), Yc);
  }
  function Us(l) {
    var t = l.stateNode,
      e = l.type,
      a = l.memoizedProps;
    switch (((t[Kl] = l), (t[Pl] = a), e)) {
      case "dialog":
        el("cancel", t), el("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        el("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Nn.length; e++) el(Nn[e], t);
        break;
      case "source":
        el("error", t);
        break;
      case "img":
      case "image":
      case "link":
        el("error", t), el("load", t);
        break;
      case "details":
        el("toggle", t);
        break;
      case "input":
        el("invalid", t),
          Jf(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          Vn(t);
        break;
      case "select":
        el("invalid", t);
        break;
      case "textarea":
        el("invalid", t), Wf(t, a.value, a.defaultValue, a.children), Vn(t);
    }
    (e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      t.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      Fo(t.textContent, e)
        ? (a.popover != null && (el("beforetoggle", t), el("toggle", t)),
          a.onScroll != null && el("scroll", t),
          a.onScrollEnd != null && el("scrollend", t),
          a.onClick != null && (t.onclick = Yu),
          (t = !0))
        : (t = !1),
      t || Ge(l);
  }
  function Hs(l) {
    for (Fl = l.return; Fl; )
      switch (Fl.tag) {
        case 5:
        case 13:
          Ot = !1;
          return;
        case 27:
        case 3:
          Ot = !0;
          return;
        default:
          Fl = Fl.return;
      }
  }
  function Fa(l) {
    if (l !== Fl) return !1;
    if (!il) return Hs(l), (il = !0), !1;
    var t = l.tag,
      e;
    if (
      ((e = t !== 3 && t !== 27) &&
        ((e = t === 5) &&
          ((e = l.type),
          (e =
            !(e !== "form" && e !== "button") || lf(l.type, l.memoizedProps))),
        (e = !e)),
      e && El && Ge(l),
      Hs(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(s(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((e = l.data), e === "/$")) {
              if (t === 0) {
                El = _t(l.nextSibling);
                break l;
              }
              t--;
            } else (e !== "$" && e !== "$!" && e !== "$?") || t++;
          l = l.nextSibling;
        }
        El = null;
      }
    } else
      t === 27
        ? ((t = El), Ae(l.type) ? ((l = nf), (nf = null), (El = l)) : (El = t))
        : (El = Fl ? _t(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ia() {
    (El = Fl = null), (il = !1);
  }
  function qs() {
    var l = Ye;
    return (
      l !== null &&
        (at === null ? (at = l) : at.push.apply(at, l), (Ye = null)),
      l
    );
  }
  function Pa(l) {
    Ye === null ? (Ye = [l]) : Ye.push(l);
  }
  var Gc = M(null),
    we = null,
    Qt = null;
  function fe(l, t, e) {
    R(Gc, t._currentValue), (t._currentValue = e);
  }
  function Zt(l) {
    (l._currentValue = Gc.current), q(Gc);
  }
  function wc(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === e)
      )
        break;
      l = l.return;
    }
  }
  function Xc(l, t, e, a) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        l: for (; u !== null; ) {
          var i = u;
          u = n;
          for (var r = 0; r < t.length; r++)
            if (i.context === t[r]) {
              (u.lanes |= e),
                (i = u.alternate),
                i !== null && (i.lanes |= e),
                wc(u.return, e, l),
                a || (c = null);
              break l;
            }
          u = i.next;
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(s(341));
        (c.lanes |= e),
          (u = c.alternate),
          u !== null && (u.lanes |= e),
          wc(c, e, l),
          (c = null);
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((n = c.sibling), n !== null)) {
            (n.return = c.return), (c = n);
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function ln(l, t, e, a) {
    l = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(s(387));
        if (((c = c.memoizedProps), c !== null)) {
          var i = n.type;
          it(n.pendingProps.value, c.value) ||
            (l !== null ? l.push(i) : (l = [i]));
        }
      } else if (n === ul.current) {
        if (((c = n.alternate), c === null)) throw Error(s(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (l !== null ? l.push(On) : (l = [On]));
      }
      n = n.return;
    }
    l !== null && Xc(t, l, e, a), (t.flags |= 262144);
  }
  function uu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!it(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Xe(l) {
    (we = l),
      (Qt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Jl(l) {
    return Cs(we, l);
  }
  function cu(l, t) {
    return we === null && Xe(l), Cs(l, t);
  }
  function Cs(l, t) {
    var e = t._currentValue;
    if (((t = { context: t, memoizedValue: e, next: null }), Qt === null)) {
      if (l === null) throw Error(s(308));
      (Qt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Qt = Qt.next = t;
    return e;
  }
  var ym =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (e) {
                  return e();
                });
            };
          },
    gm = f.unstable_scheduleCallback,
    bm = f.unstable_NormalPriority,
    Cl = {
      $$typeof: Tl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Qc() {
    return { controller: new ym(), data: new Map(), refCount: 0 };
  }
  function tn(l) {
    l.refCount--,
      l.refCount === 0 &&
        gm(bm, function () {
          l.controller.abort();
        });
  }
  var en = null,
    Zc = 0,
    ma = 0,
    ha = null;
  function pm(l, t) {
    if (en === null) {
      var e = (en = []);
      (Zc = 0),
        (ma = Li()),
        (ha = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        });
    }
    return Zc++, t.then(Bs, Bs), t;
  }
  function Bs() {
    if (--Zc === 0 && en !== null) {
      ha !== null && (ha.status = "fulfilled");
      var l = en;
      (en = null), (ma = 0), (ha = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function xm(l, t) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          e.push(n);
        },
      };
    return (
      l.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var n = 0; n < e.length; n++) (0, e[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
            (0, e[n])(void 0);
        }
      ),
      a
    );
  }
  var Ys = z.S;
  z.S = function (l, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      pm(l, t),
      Ys !== null && Ys(l, t);
  };
  var Qe = M(null);
  function Vc() {
    var l = Qe.current;
    return l !== null ? l : bl.pooledCache;
  }
  function iu(l, t) {
    t === null ? R(Qe, Qe.current) : R(Qe, t.pool);
  }
  function Gs() {
    var l = Vc();
    return l === null ? null : { parent: Cl._currentValue, pool: l };
  }
  var an = Error(s(460)),
    ws = Error(s(474)),
    fu = Error(s(542)),
    Lc = { then: function () {} };
  function Xs(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function su() {}
  function Qs(l, t, e) {
    switch (
      ((e = l[e]),
      e === void 0 ? l.push(t) : e !== t && (t.then(su, su), (t = e)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Vs(l), l);
      default:
        if (typeof t.status == "string") t.then(su, su);
        else {
          if (((l = bl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(s(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Vs(l), l);
        }
        throw ((nn = t), an);
    }
  }
  var nn = null;
  function Zs() {
    if (nn === null) throw Error(s(459));
    var l = nn;
    return (nn = null), l;
  }
  function Vs(l) {
    if (l === an || l === fu) throw Error(s(483));
  }
  var se = !1;
  function kc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Kc(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function re(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function oe(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (sl & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = tu(l)),
        Os(l, null, e),
        t
      );
    }
    return lu(l, a, t, e), tu(l);
  }
  function un(l, t, e) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (e & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), Bf(l, e);
    }
  }
  function Jc(l, t) {
    var e = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var n = null,
        u = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var c = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          u === null ? (n = u = c) : (u = u.next = c), (e = e.next);
        } while (e !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      (e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = e);
      return;
    }
    (l = e.lastBaseUpdate),
      l === null ? (e.firstBaseUpdate = t) : (l.next = t),
      (e.lastBaseUpdate = t);
  }
  var $c = !1;
  function cn() {
    if ($c) {
      var l = ha;
      if (l !== null) throw l;
    }
  }
  function fn(l, t, e, a) {
    $c = !1;
    var n = l.updateQueue;
    se = !1;
    var u = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      i = n.shared.pending;
    if (i !== null) {
      n.shared.pending = null;
      var r = i,
        y = r.next;
      (r.next = null), c === null ? (u = y) : (c.next = y), (c = r);
      var N = l.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (i = N.lastBaseUpdate),
        i !== c &&
          (i === null ? (N.firstBaseUpdate = y) : (i.next = y),
          (N.lastBaseUpdate = r)));
    }
    if (u !== null) {
      var _ = n.baseState;
      (c = 0), (N = y = r = null), (i = u);
      do {
        var g = i.lane & -536870913,
          p = g !== i.lane;
        if (p ? (al & g) === g : (a & g) === g) {
          g !== 0 && g === ma && ($c = !0),
            N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var L = l,
              Z = i;
            g = t;
            var hl = e;
            switch (Z.tag) {
              case 1:
                if (((L = Z.payload), typeof L == "function")) {
                  _ = L.call(hl, _, g);
                  break l;
                }
                _ = L;
                break l;
              case 3:
                L.flags = (L.flags & -65537) | 128;
              case 0:
                if (
                  ((L = Z.payload),
                  (g = typeof L == "function" ? L.call(hl, _, g) : L),
                  g == null)
                )
                  break l;
                _ = D({}, _, g);
                break l;
              case 2:
                se = !0;
            }
          }
          (g = i.callback),
            g !== null &&
              ((l.flags |= 64),
              p && (l.flags |= 8192),
              (p = n.callbacks),
              p === null ? (n.callbacks = [g]) : p.push(g));
        } else
          (p = {
            lane: g,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            N === null ? ((y = N = p), (r = _)) : (N = N.next = p),
            (c |= g);
        if (((i = i.next), i === null)) {
          if (((i = n.shared.pending), i === null)) break;
          (p = i),
            (i = p.next),
            (p.next = null),
            (n.lastBaseUpdate = p),
            (n.shared.pending = null);
        }
      } while (!0);
      N === null && (r = _),
        (n.baseState = r),
        (n.firstBaseUpdate = y),
        (n.lastBaseUpdate = N),
        u === null && (n.shared.lanes = 0),
        (pe |= c),
        (l.lanes = c),
        (l.memoizedState = _);
    }
  }
  function Ls(l, t) {
    if (typeof l != "function") throw Error(s(191, l));
    l.call(t);
  }
  function ks(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++) Ls(e[l], t);
  }
  var va = M(null),
    ru = M(0);
  function Ks(l, t) {
    (l = Wt), R(ru, l), R(va, t), (Wt = l | t.baseLanes);
  }
  function Wc() {
    R(ru, Wt), R(va, va.current);
  }
  function Fc() {
    (Wt = ru.current), q(va), q(ru);
  }
  var de = 0,
    F = null,
    dl = null,
    Ul = null,
    ou = !1,
    ya = !1,
    Ze = !1,
    du = 0,
    sn = 0,
    ga = null,
    Sm = 0;
  function Ol() {
    throw Error(s(321));
  }
  function Ic(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!it(l[e], t[e])) return !1;
    return !0;
  }
  function Pc(l, t, e, a, n, u) {
    return (
      (de = u),
      (F = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (z.H = l === null || l.memoizedState === null ? Or : Rr),
      (Ze = !1),
      (u = e(a, n)),
      (Ze = !1),
      ya && (u = $s(t, e, a, n)),
      Js(l),
      u
    );
  }
  function Js(l) {
    z.H = bu;
    var t = dl !== null && dl.next !== null;
    if (((de = 0), (Ul = dl = F = null), (ou = !1), (sn = 0), (ga = null), t))
      throw Error(s(300));
    l === null ||
      Xl ||
      ((l = l.dependencies), l !== null && uu(l) && (Xl = !0));
  }
  function $s(l, t, e, a) {
    F = l;
    var n = 0;
    do {
      if ((ya && (ga = null), (sn = 0), (ya = !1), 25 <= n))
        throw Error(s(301));
      if (((n += 1), (Ul = dl = null), l.updateQueue != null)) {
        var u = l.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (z.H = Mm), (u = t(e, a));
    } while (ya);
    return u;
  }
  function zm() {
    var l = z.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? rn(t) : t),
      (l = l.useState()[0]),
      (dl !== null ? dl.memoizedState : null) !== l && (F.flags |= 1024),
      t
    );
  }
  function li() {
    var l = du !== 0;
    return (du = 0), l;
  }
  function ti(l, t, e) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e);
  }
  function ei(l) {
    if (ou) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      ou = !1;
    }
    (de = 0), (Ul = dl = F = null), (ya = !1), (sn = du = 0), (ga = null);
  }
  function tt() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ul === null ? (F.memoizedState = Ul = l) : (Ul = Ul.next = l), Ul;
  }
  function Hl() {
    if (dl === null) {
      var l = F.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = dl.next;
    var t = Ul === null ? F.memoizedState : Ul.next;
    if (t !== null) (Ul = t), (dl = l);
    else {
      if (l === null)
        throw F.alternate === null ? Error(s(467)) : Error(s(310));
      (dl = l),
        (l = {
          memoizedState: dl.memoizedState,
          baseState: dl.baseState,
          baseQueue: dl.baseQueue,
          queue: dl.queue,
          next: null,
        }),
        Ul === null ? (F.memoizedState = Ul = l) : (Ul = Ul.next = l);
    }
    return Ul;
  }
  function ai() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function rn(l) {
    var t = sn;
    return (
      (sn += 1),
      ga === null && (ga = []),
      (l = Qs(ga, l, t)),
      (t = F),
      (Ul === null ? t.memoizedState : Ul.next) === null &&
        ((t = t.alternate),
        (z.H = t === null || t.memoizedState === null ? Or : Rr)),
      l
    );
  }
  function mu(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return rn(l);
      if (l.$$typeof === Tl) return Jl(l);
    }
    throw Error(s(438, String(l)));
  }
  function ni(l) {
    var t = null,
      e = F.updateQueue;
    if ((e !== null && (t = e.memoCache), t == null)) {
      var a = F.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      e === null && ((e = ai()), (F.updateQueue = e)),
      (e.memoCache = t),
      (e = t.data[t.index]),
      e === void 0)
    )
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Ct;
    return t.index++, e;
  }
  function Vt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function hu(l) {
    var t = Hl();
    return ui(t, dl, l);
  }
  function ui(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var n = l.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var c = n.next;
        (n.next = u.next), (u.next = c);
      }
      (t.baseQueue = n = u), (a.pending = null);
    }
    if (((u = l.baseState), n === null)) l.memoizedState = u;
    else {
      t = n.next;
      var i = (c = null),
        r = null,
        y = t,
        N = !1;
      do {
        var _ = y.lane & -536870913;
        if (_ !== y.lane ? (al & _) === _ : (de & _) === _) {
          var g = y.revertLane;
          if (g === 0)
            r !== null &&
              (r = r.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              _ === ma && (N = !0);
          else if ((de & g) === g) {
            (y = y.next), g === ma && (N = !0);
            continue;
          } else
            (_ = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              r === null ? ((i = r = _), (c = u)) : (r = r.next = _),
              (F.lanes |= g),
              (pe |= g);
          (_ = y.action),
            Ze && e(u, _),
            (u = y.hasEagerState ? y.eagerState : e(u, _));
        } else
          (g = {
            lane: _,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            r === null ? ((i = r = g), (c = u)) : (r = r.next = g),
            (F.lanes |= _),
            (pe |= _);
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (r === null ? (c = u) : (r.next = i),
        !it(u, l.memoizedState) && ((Xl = !0), N && ((e = ha), e !== null)))
      )
        throw e;
      (l.memoizedState = u),
        (l.baseState = c),
        (l.baseQueue = r),
        (a.lastRenderedState = u);
    }
    return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function ci(l) {
    var t = Hl(),
      e = t.queue;
    if (e === null) throw Error(s(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch,
      n = e.pending,
      u = t.memoizedState;
    if (n !== null) {
      e.pending = null;
      var c = (n = n.next);
      do (u = l(u, c.action)), (c = c.next);
      while (c !== n);
      it(u, t.memoizedState) || (Xl = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (e.lastRenderedState = u);
    }
    return [u, a];
  }
  function Ws(l, t, e) {
    var a = F,
      n = Hl(),
      u = il;
    if (u) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else e = t();
    var c = !it((dl || n).memoizedState, e);
    c && ((n.memoizedState = e), (Xl = !0)), (n = n.queue);
    var i = Ps.bind(null, a, n, l);
    if (
      (on(2048, 8, i, [l]),
      n.getSnapshot !== t || c || (Ul !== null && Ul.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ba(9, vu(), Is.bind(null, a, n, e, t), null),
        bl === null)
      )
        throw Error(s(349));
      u || (de & 124) !== 0 || Fs(a, t, e);
    }
    return e;
  }
  function Fs(l, t, e) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: e }),
      (t = F.updateQueue),
      t === null
        ? ((t = ai()), (F.updateQueue = t), (t.stores = [l]))
        : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l));
  }
  function Is(l, t, e, a) {
    (t.value = e), (t.getSnapshot = a), lr(t) && tr(l);
  }
  function Ps(l, t, e) {
    return e(function () {
      lr(t) && tr(l);
    });
  }
  function lr(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !it(l, e);
    } catch {
      return !0;
    }
  }
  function tr(l) {
    var t = sa(l, 2);
    t !== null && mt(t, l, 2);
  }
  function ii(l) {
    var t = tt();
    if (typeof l == "function") {
      var e = l;
      if (((l = e()), Ze)) {
        ue(!0);
        try {
          e();
        } finally {
          ue(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function er(l, t, e, a) {
    return (l.baseState = e), ui(l, dl, typeof a == "function" ? a : Vt);
  }
  function Am(l, t, e, a, n) {
    if (gu(l)) throw Error(s(485));
    if (((l = t.action), l !== null)) {
      var u = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          u.listeners.push(c);
        },
      };
      z.T !== null ? e(!0) : (u.isTransition = !1),
        a(u),
        (e = t.pending),
        e === null
          ? ((u.next = t.pending = u), ar(t, u))
          : ((u.next = e.next), (t.pending = e.next = u));
    }
  }
  function ar(l, t) {
    var e = t.action,
      a = t.payload,
      n = l.state;
    if (t.isTransition) {
      var u = z.T,
        c = {};
      z.T = c;
      try {
        var i = e(n, a),
          r = z.S;
        r !== null && r(c, i), nr(l, t, i);
      } catch (y) {
        fi(l, t, y);
      } finally {
        z.T = u;
      }
    } else
      try {
        (u = e(n, a)), nr(l, t, u);
      } catch (y) {
        fi(l, t, y);
      }
  }
  function nr(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            ur(l, t, a);
          },
          function (a) {
            return fi(l, t, a);
          }
        )
      : ur(l, t, e);
  }
  function ur(l, t, e) {
    (t.status = "fulfilled"),
      (t.value = e),
      cr(t),
      (l.state = e),
      (t = l.pending),
      t !== null &&
        ((e = t.next),
        e === t ? (l.pending = null) : ((e = e.next), (t.next = e), ar(l, e)));
  }
  function fi(l, t, e) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = e), cr(t), (t = t.next);
      while (t !== a);
    }
    l.action = null;
  }
  function cr(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function ir(l, t) {
    return t;
  }
  function fr(l, t) {
    if (il) {
      var e = bl.formState;
      if (e !== null) {
        l: {
          var a = F;
          if (il) {
            if (El) {
              t: {
                for (var n = El, u = Ot; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = _t(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                (u = n.data), (n = u === "F!" || u === "F" ? n : null);
              }
              if (n) {
                (El = _t(n.nextSibling)), (a = n.data === "F!");
                break l;
              }
            }
            Ge(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return (
      (e = tt()),
      (e.memoizedState = e.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ir,
        lastRenderedState: t,
      }),
      (e.queue = a),
      (e = _r.bind(null, F, a)),
      (a.dispatch = e),
      (a = ii(!1)),
      (u = mi.bind(null, F, !1, a.queue)),
      (a = tt()),
      (n = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = n),
      (e = Am.bind(null, F, n, u, e)),
      (n.dispatch = e),
      (a.memoizedState = l),
      [t, e, !1]
    );
  }
  function sr(l) {
    var t = Hl();
    return rr(t, dl, l);
  }
  function rr(l, t, e) {
    if (
      ((t = ui(l, t, ir)[0]),
      (l = hu(Vt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = rn(t);
      } catch (c) {
        throw c === an ? fu : c;
      }
    else a = t;
    t = Hl();
    var n = t.queue,
      u = n.dispatch;
    return (
      e !== t.memoizedState &&
        ((F.flags |= 2048), ba(9, vu(), Nm.bind(null, n, e), null)),
      [a, u, l]
    );
  }
  function Nm(l, t) {
    l.action = t;
  }
  function or(l) {
    var t = Hl(),
      e = dl;
    if (e !== null) return rr(t, e, l);
    Hl(), (t = t.memoizedState), (e = Hl());
    var a = e.queue.dispatch;
    return (e.memoizedState = l), [t, a, !1];
  }
  function ba(l, t, e, a) {
    return (
      (l = { tag: l, create: e, deps: a, inst: t, next: null }),
      (t = F.updateQueue),
      t === null && ((t = ai()), (F.updateQueue = t)),
      (e = t.lastEffect),
      e === null
        ? (t.lastEffect = l.next = l)
        : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function vu() {
    return { destroy: void 0, resource: void 0 };
  }
  function dr() {
    return Hl().memoizedState;
  }
  function yu(l, t, e, a) {
    var n = tt();
    (a = a === void 0 ? null : a),
      (F.flags |= l),
      (n.memoizedState = ba(1 | t, vu(), e, a));
  }
  function on(l, t, e, a) {
    var n = Hl();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    dl !== null && a !== null && Ic(a, dl.memoizedState.deps)
      ? (n.memoizedState = ba(t, u, e, a))
      : ((F.flags |= l), (n.memoizedState = ba(1 | t, u, e, a)));
  }
  function mr(l, t) {
    yu(8390656, 8, l, t);
  }
  function hr(l, t) {
    on(2048, 8, l, t);
  }
  function vr(l, t) {
    return on(4, 2, l, t);
  }
  function yr(l, t) {
    return on(4, 4, l, t);
  }
  function gr(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function () {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function br(l, t, e) {
    (e = e != null ? e.concat([l]) : null), on(4, 4, gr.bind(null, t, l), e);
  }
  function si() {}
  function pr(l, t) {
    var e = Hl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && Ic(t, a[1]) ? a[0] : ((e.memoizedState = [l, t]), l);
  }
  function xr(l, t) {
    var e = Hl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && Ic(t, a[1])) return a[0];
    if (((a = l()), Ze)) {
      ue(!0);
      try {
        l();
      } finally {
        ue(!1);
      }
    }
    return (e.memoizedState = [a, t]), a;
  }
  function ri(l, t, e) {
    return e === void 0 || (de & 1073741824) !== 0
      ? (l.memoizedState = t)
      : ((l.memoizedState = e), (l = No()), (F.lanes |= l), (pe |= l), e);
  }
  function Sr(l, t, e, a) {
    return it(e, t)
      ? e
      : va.current !== null
      ? ((l = ri(l, e, a)), it(l, t) || (Xl = !0), l)
      : (de & 42) === 0
      ? ((Xl = !0), (l.memoizedState = e))
      : ((l = No()), (F.lanes |= l), (pe |= l), t);
  }
  function zr(l, t, e, a, n) {
    var u = U.p;
    U.p = u !== 0 && 8 > u ? u : 8;
    var c = z.T,
      i = {};
    (z.T = i), mi(l, !1, t, e);
    try {
      var r = n(),
        y = z.S;
      if (
        (y !== null && y(i, r),
        r !== null && typeof r == "object" && typeof r.then == "function")
      ) {
        var N = xm(r, a);
        dn(l, t, N, dt(l));
      } else dn(l, t, a, dt(l));
    } catch (_) {
      dn(l, t, { then: function () {}, status: "rejected", reason: _ }, dt());
    } finally {
      (U.p = u), (z.T = c);
    }
  }
  function Tm() {}
  function oi(l, t, e, a) {
    if (l.tag !== 5) throw Error(s(476));
    var n = Ar(l).queue;
    zr(
      l,
      n,
      t,
      O,
      e === null
        ? Tm
        : function () {
            return Nr(l), e(a);
          }
    );
  }
  function Ar(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: O,
      baseState: O,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vt,
        lastRenderedState: O,
      },
      next: null,
    };
    var e = {};
    return (
      (t.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vt,
          lastRenderedState: e,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function Nr(l) {
    var t = Ar(l).next.queue;
    dn(l, t, {}, dt());
  }
  function di() {
    return Jl(On);
  }
  function Tr() {
    return Hl().memoizedState;
  }
  function Er() {
    return Hl().memoizedState;
  }
  function Em(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = dt();
          l = re(e);
          var a = oe(t, l, e);
          a !== null && (mt(a, t, e), un(a, t, e)),
            (t = { cache: Qc() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function _m(l, t, e) {
    var a = dt();
    (e = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      gu(l)
        ? Mr(t, e)
        : ((e = Dc(l, t, e, a)), e !== null && (mt(e, l, a), jr(e, t, a)));
  }
  function _r(l, t, e) {
    var a = dt();
    dn(l, t, e, a);
  }
  function dn(l, t, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (gu(l)) Mr(t, n);
    else {
      var u = l.alternate;
      if (
        l.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var c = t.lastRenderedState,
            i = u(c, e);
          if (((n.hasEagerState = !0), (n.eagerState = i), it(i, c)))
            return lu(l, t, n, 0), bl === null && Pn(), !1;
        } catch {
        } finally {
        }
      if (((e = Dc(l, t, n, a)), e !== null))
        return mt(e, l, a), jr(e, t, a), !0;
    }
    return !1;
  }
  function mi(l, t, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Li(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gu(l))
    ) {
      if (t) throw Error(s(479));
    } else (t = Dc(l, e, a, 2)), t !== null && mt(t, l, 2);
  }
  function gu(l) {
    var t = l.alternate;
    return l === F || (t !== null && t === F);
  }
  function Mr(l, t) {
    ya = ou = !0;
    var e = l.pending;
    e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
      (l.pending = t);
  }
  function jr(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      (a &= l.pendingLanes), (e |= a), (t.lanes = e), Bf(l, e);
    }
  }
  var bu = {
      readContext: Jl,
      use: mu,
      useCallback: Ol,
      useContext: Ol,
      useEffect: Ol,
      useImperativeHandle: Ol,
      useLayoutEffect: Ol,
      useInsertionEffect: Ol,
      useMemo: Ol,
      useReducer: Ol,
      useRef: Ol,
      useState: Ol,
      useDebugValue: Ol,
      useDeferredValue: Ol,
      useTransition: Ol,
      useSyncExternalStore: Ol,
      useId: Ol,
      useHostTransitionStatus: Ol,
      useFormState: Ol,
      useActionState: Ol,
      useOptimistic: Ol,
      useMemoCache: Ol,
      useCacheRefresh: Ol,
    },
    Or = {
      readContext: Jl,
      use: mu,
      useCallback: function (l, t) {
        return (tt().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: Jl,
      useEffect: mr,
      useImperativeHandle: function (l, t, e) {
        (e = e != null ? e.concat([l]) : null),
          yu(4194308, 4, gr.bind(null, t, l), e);
      },
      useLayoutEffect: function (l, t) {
        return yu(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        yu(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var e = tt();
        t = t === void 0 ? null : t;
        var a = l();
        if (Ze) {
          ue(!0);
          try {
            l();
          } finally {
            ue(!1);
          }
        }
        return (e.memoizedState = [a, t]), a;
      },
      useReducer: function (l, t, e) {
        var a = tt();
        if (e !== void 0) {
          var n = e(t);
          if (Ze) {
            ue(!0);
            try {
              e(t);
            } finally {
              ue(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: n,
          }),
          (a.queue = l),
          (l = l.dispatch = _m.bind(null, F, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = tt();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = ii(l);
        var t = l.queue,
          e = _r.bind(null, F, t);
        return (t.dispatch = e), [l.memoizedState, e];
      },
      useDebugValue: si,
      useDeferredValue: function (l, t) {
        var e = tt();
        return ri(e, l, t);
      },
      useTransition: function () {
        var l = ii(!1);
        return (
          (l = zr.bind(null, F, l.queue, !0, !1)),
          (tt().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, e) {
        var a = F,
          n = tt();
        if (il) {
          if (e === void 0) throw Error(s(407));
          e = e();
        } else {
          if (((e = t()), bl === null)) throw Error(s(349));
          (al & 124) !== 0 || Fs(a, t, e);
        }
        n.memoizedState = e;
        var u = { value: e, getSnapshot: t };
        return (
          (n.queue = u),
          mr(Ps.bind(null, a, u, l), [l]),
          (a.flags |= 2048),
          ba(9, vu(), Is.bind(null, a, u, e, t), null),
          e
        );
      },
      useId: function () {
        var l = tt(),
          t = bl.identifierPrefix;
        if (il) {
          var e = Xt,
            a = wt;
          (e = (a & ~(1 << (32 - ct(a) - 1))).toString(32) + e),
            (t = "«" + t + "R" + e),
            (e = du++),
            0 < e && (t += "H" + e.toString(32)),
            (t += "»");
        } else (e = Sm++), (t = "«" + t + "r" + e.toString(32) + "»");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: di,
      useFormState: fr,
      useActionState: fr,
      useOptimistic: function (l) {
        var t = tt();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = e), (t = mi.bind(null, F, !0, e)), (e.dispatch = t), [l, t]
        );
      },
      useMemoCache: ni,
      useCacheRefresh: function () {
        return (tt().memoizedState = Em.bind(null, F));
      },
    },
    Rr = {
      readContext: Jl,
      use: mu,
      useCallback: pr,
      useContext: Jl,
      useEffect: hr,
      useImperativeHandle: br,
      useInsertionEffect: vr,
      useLayoutEffect: yr,
      useMemo: xr,
      useReducer: hu,
      useRef: dr,
      useState: function () {
        return hu(Vt);
      },
      useDebugValue: si,
      useDeferredValue: function (l, t) {
        var e = Hl();
        return Sr(e, dl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = hu(Vt)[0],
          t = Hl().memoizedState;
        return [typeof l == "boolean" ? l : rn(l), t];
      },
      useSyncExternalStore: Ws,
      useId: Tr,
      useHostTransitionStatus: di,
      useFormState: sr,
      useActionState: sr,
      useOptimistic: function (l, t) {
        var e = Hl();
        return er(e, dl, l, t);
      },
      useMemoCache: ni,
      useCacheRefresh: Er,
    },
    Mm = {
      readContext: Jl,
      use: mu,
      useCallback: pr,
      useContext: Jl,
      useEffect: hr,
      useImperativeHandle: br,
      useInsertionEffect: vr,
      useLayoutEffect: yr,
      useMemo: xr,
      useReducer: ci,
      useRef: dr,
      useState: function () {
        return ci(Vt);
      },
      useDebugValue: si,
      useDeferredValue: function (l, t) {
        var e = Hl();
        return dl === null ? ri(e, l, t) : Sr(e, dl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = ci(Vt)[0],
          t = Hl().memoizedState;
        return [typeof l == "boolean" ? l : rn(l), t];
      },
      useSyncExternalStore: Ws,
      useId: Tr,
      useHostTransitionStatus: di,
      useFormState: or,
      useActionState: or,
      useOptimistic: function (l, t) {
        var e = Hl();
        return dl !== null
          ? er(e, dl, l, t)
          : ((e.baseState = l), [l, e.queue.dispatch]);
      },
      useMemoCache: ni,
      useCacheRefresh: Er,
    },
    pa = null,
    mn = 0;
  function pu(l) {
    var t = mn;
    return (mn += 1), pa === null && (pa = []), Qs(pa, l, t);
  }
  function hn(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function xu(l, t) {
    throw t.$$typeof === k
      ? Error(s(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function Dr(l) {
    var t = l._init;
    return t(l._payload);
  }
  function Ur(l) {
    function t(h, m) {
      if (l) {
        var v = h.deletions;
        v === null ? ((h.deletions = [m]), (h.flags |= 16)) : v.push(m);
      }
    }
    function e(h, m) {
      if (!l) return null;
      for (; m !== null; ) t(h, m), (m = m.sibling);
      return null;
    }
    function a(h) {
      for (var m = new Map(); h !== null; )
        h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
      return m;
    }
    function n(h, m) {
      return (h = Gt(h, m)), (h.index = 0), (h.sibling = null), h;
    }
    function u(h, m, v) {
      return (
        (h.index = v),
        l
          ? ((v = h.alternate),
            v !== null
              ? ((v = v.index), v < m ? ((h.flags |= 67108866), m) : v)
              : ((h.flags |= 67108866), m))
          : ((h.flags |= 1048576), m)
      );
    }
    function c(h) {
      return l && h.alternate === null && (h.flags |= 67108866), h;
    }
    function i(h, m, v, E) {
      return m === null || m.tag !== 6
        ? ((m = Hc(v, h.mode, E)), (m.return = h), m)
        : ((m = n(m, v)), (m.return = h), m);
    }
    function r(h, m, v, E) {
      var B = v.type;
      return B === nl
        ? N(h, m, v.props.children, E, v.key)
        : m !== null &&
          (m.elementType === B ||
            (typeof B == "object" &&
              B !== null &&
              B.$$typeof === Q &&
              Dr(B) === m.type))
        ? ((m = n(m, v.props)), hn(m, v), (m.return = h), m)
        : ((m = eu(v.type, v.key, v.props, null, h.mode, E)),
          hn(m, v),
          (m.return = h),
          m);
    }
    function y(h, m, v, E) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== v.containerInfo ||
        m.stateNode.implementation !== v.implementation
        ? ((m = qc(v, h.mode, E)), (m.return = h), m)
        : ((m = n(m, v.children || [])), (m.return = h), m);
    }
    function N(h, m, v, E, B) {
      return m === null || m.tag !== 7
        ? ((m = qe(v, h.mode, E, B)), (m.return = h), m)
        : ((m = n(m, v)), (m.return = h), m);
    }
    function _(h, m, v) {
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return (m = Hc("" + m, h.mode, v)), (m.return = h), m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case J:
            return (
              (v = eu(m.type, m.key, m.props, null, h.mode, v)),
              hn(v, m),
              (v.return = h),
              v
            );
          case gl:
            return (m = qc(m, h.mode, v)), (m.return = h), m;
          case Q:
            var E = m._init;
            return (m = E(m._payload)), _(h, m, v);
        }
        if (Al(m) || jl(m))
          return (m = qe(m, h.mode, v, null)), (m.return = h), m;
        if (typeof m.then == "function") return _(h, pu(m), v);
        if (m.$$typeof === Tl) return _(h, cu(h, m), v);
        xu(h, m);
      }
      return null;
    }
    function g(h, m, v, E) {
      var B = m !== null ? m.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return B !== null ? null : i(h, m, "" + v, E);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case J:
            return v.key === B ? r(h, m, v, E) : null;
          case gl:
            return v.key === B ? y(h, m, v, E) : null;
          case Q:
            return (B = v._init), (v = B(v._payload)), g(h, m, v, E);
        }
        if (Al(v) || jl(v)) return B !== null ? null : N(h, m, v, E, null);
        if (typeof v.then == "function") return g(h, m, pu(v), E);
        if (v.$$typeof === Tl) return g(h, m, cu(h, v), E);
        xu(h, v);
      }
      return null;
    }
    function p(h, m, v, E, B) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return (h = h.get(v) || null), i(m, h, "" + E, B);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case J:
            return (
              (h = h.get(E.key === null ? v : E.key) || null), r(m, h, E, B)
            );
          case gl:
            return (
              (h = h.get(E.key === null ? v : E.key) || null), y(m, h, E, B)
            );
          case Q:
            var P = E._init;
            return (E = P(E._payload)), p(h, m, v, E, B);
        }
        if (Al(E) || jl(E)) return (h = h.get(v) || null), N(m, h, E, B, null);
        if (typeof E.then == "function") return p(h, m, v, pu(E), B);
        if (E.$$typeof === Tl) return p(h, m, v, cu(m, E), B);
        xu(m, E);
      }
      return null;
    }
    function L(h, m, v, E) {
      for (
        var B = null, P = null, X = m, V = (m = 0), Zl = null;
        X !== null && V < v.length;
        V++
      ) {
        X.index > V ? ((Zl = X), (X = null)) : (Zl = X.sibling);
        var cl = g(h, X, v[V], E);
        if (cl === null) {
          X === null && (X = Zl);
          break;
        }
        l && X && cl.alternate === null && t(h, X),
          (m = u(cl, m, V)),
          P === null ? (B = cl) : (P.sibling = cl),
          (P = cl),
          (X = Zl);
      }
      if (V === v.length) return e(h, X), il && Be(h, V), B;
      if (X === null) {
        for (; V < v.length; V++)
          (X = _(h, v[V], E)),
            X !== null &&
              ((m = u(X, m, V)),
              P === null ? (B = X) : (P.sibling = X),
              (P = X));
        return il && Be(h, V), B;
      }
      for (X = a(X); V < v.length; V++)
        (Zl = p(X, h, V, v[V], E)),
          Zl !== null &&
            (l &&
              Zl.alternate !== null &&
              X.delete(Zl.key === null ? V : Zl.key),
            (m = u(Zl, m, V)),
            P === null ? (B = Zl) : (P.sibling = Zl),
            (P = Zl));
      return (
        l &&
          X.forEach(function (Me) {
            return t(h, Me);
          }),
        il && Be(h, V),
        B
      );
    }
    function Z(h, m, v, E) {
      if (v == null) throw Error(s(151));
      for (
        var B = null, P = null, X = m, V = (m = 0), Zl = null, cl = v.next();
        X !== null && !cl.done;
        V++, cl = v.next()
      ) {
        X.index > V ? ((Zl = X), (X = null)) : (Zl = X.sibling);
        var Me = g(h, X, cl.value, E);
        if (Me === null) {
          X === null && (X = Zl);
          break;
        }
        l && X && Me.alternate === null && t(h, X),
          (m = u(Me, m, V)),
          P === null ? (B = Me) : (P.sibling = Me),
          (P = Me),
          (X = Zl);
      }
      if (cl.done) return e(h, X), il && Be(h, V), B;
      if (X === null) {
        for (; !cl.done; V++, cl = v.next())
          (cl = _(h, cl.value, E)),
            cl !== null &&
              ((m = u(cl, m, V)),
              P === null ? (B = cl) : (P.sibling = cl),
              (P = cl));
        return il && Be(h, V), B;
      }
      for (X = a(X); !cl.done; V++, cl = v.next())
        (cl = p(X, h, V, cl.value, E)),
          cl !== null &&
            (l &&
              cl.alternate !== null &&
              X.delete(cl.key === null ? V : cl.key),
            (m = u(cl, m, V)),
            P === null ? (B = cl) : (P.sibling = cl),
            (P = cl));
      return (
        l &&
          X.forEach(function (jh) {
            return t(h, jh);
          }),
        il && Be(h, V),
        B
      );
    }
    function hl(h, m, v, E) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === nl &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case J:
            l: {
              for (var B = v.key; m !== null; ) {
                if (m.key === B) {
                  if (((B = v.type), B === nl)) {
                    if (m.tag === 7) {
                      e(h, m.sibling),
                        (E = n(m, v.props.children)),
                        (E.return = h),
                        (h = E);
                      break l;
                    }
                  } else if (
                    m.elementType === B ||
                    (typeof B == "object" &&
                      B !== null &&
                      B.$$typeof === Q &&
                      Dr(B) === m.type)
                  ) {
                    e(h, m.sibling),
                      (E = n(m, v.props)),
                      hn(E, v),
                      (E.return = h),
                      (h = E);
                    break l;
                  }
                  e(h, m);
                  break;
                } else t(h, m);
                m = m.sibling;
              }
              v.type === nl
                ? ((E = qe(v.props.children, h.mode, E, v.key)),
                  (E.return = h),
                  (h = E))
                : ((E = eu(v.type, v.key, v.props, null, h.mode, E)),
                  hn(E, v),
                  (E.return = h),
                  (h = E));
            }
            return c(h);
          case gl:
            l: {
              for (B = v.key; m !== null; ) {
                if (m.key === B)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === v.containerInfo &&
                    m.stateNode.implementation === v.implementation
                  ) {
                    e(h, m.sibling),
                      (E = n(m, v.children || [])),
                      (E.return = h),
                      (h = E);
                    break l;
                  } else {
                    e(h, m);
                    break;
                  }
                else t(h, m);
                m = m.sibling;
              }
              (E = qc(v, h.mode, E)), (E.return = h), (h = E);
            }
            return c(h);
          case Q:
            return (B = v._init), (v = B(v._payload)), hl(h, m, v, E);
        }
        if (Al(v)) return L(h, m, v, E);
        if (jl(v)) {
          if (((B = jl(v)), typeof B != "function")) throw Error(s(150));
          return (v = B.call(v)), Z(h, m, v, E);
        }
        if (typeof v.then == "function") return hl(h, m, pu(v), E);
        if (v.$$typeof === Tl) return hl(h, m, cu(h, v), E);
        xu(h, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          m !== null && m.tag === 6
            ? (e(h, m.sibling), (E = n(m, v)), (E.return = h), (h = E))
            : (e(h, m), (E = Hc(v, h.mode, E)), (E.return = h), (h = E)),
          c(h))
        : e(h, m);
    }
    return function (h, m, v, E) {
      try {
        mn = 0;
        var B = hl(h, m, v, E);
        return (pa = null), B;
      } catch (X) {
        if (X === an || X === fu) throw X;
        var P = ft(29, X, null, h.mode);
        return (P.lanes = E), (P.return = h), P;
      } finally {
      }
    };
  }
  var xa = Ur(!0),
    Hr = Ur(!1),
    St = M(null),
    Rt = null;
  function me(l) {
    var t = l.alternate;
    R(Bl, Bl.current & 1),
      R(St, l),
      Rt === null &&
        (t === null || va.current !== null || t.memoizedState !== null) &&
        (Rt = l);
  }
  function qr(l) {
    if (l.tag === 22) {
      if ((R(Bl, Bl.current), R(St, l), Rt === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (Rt = l);
      }
    } else he();
  }
  function he() {
    R(Bl, Bl.current), R(St, St.current);
  }
  function Lt(l) {
    q(St), Rt === l && (Rt = null), q(Bl);
  }
  var Bl = M(0);
  function Su(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (
          e !== null &&
          ((e = e.dehydrated), e === null || e.data === "$?" || af(e))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function hi(l, t, e, a) {
    (t = l.memoizedState),
      (e = e(a, t)),
      (e = e == null ? t : D({}, t, e)),
      (l.memoizedState = e),
      l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var vi = {
    enqueueSetState: function (l, t, e) {
      l = l._reactInternals;
      var a = dt(),
        n = re(a);
      (n.payload = t),
        e != null && (n.callback = e),
        (t = oe(l, n, a)),
        t !== null && (mt(t, l, a), un(t, l, a));
    },
    enqueueReplaceState: function (l, t, e) {
      l = l._reactInternals;
      var a = dt(),
        n = re(a);
      (n.tag = 1),
        (n.payload = t),
        e != null && (n.callback = e),
        (t = oe(l, n, a)),
        t !== null && (mt(t, l, a), un(t, l, a));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var e = dt(),
        a = re(e);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = oe(l, a, e)),
        t !== null && (mt(t, l, e), un(t, l, e));
    },
  };
  function Cr(l, t, e, a, n, u, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, u, c)
        : t.prototype && t.prototype.isPureReactComponent
        ? !$a(e, a) || !$a(n, u)
        : !0
    );
  }
  function Br(l, t, e, a) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(e, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(e, a),
      t.state !== l && vi.enqueueReplaceState(t, t.state, null);
  }
  function Ve(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      e === t && (e = D({}, e));
      for (var n in l) e[n] === void 0 && (e[n] = l[n]);
    }
    return e;
  }
  var zu =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function Yr(l) {
    zu(l);
  }
  function Gr(l) {
    console.error(l);
  }
  function wr(l) {
    zu(l);
  }
  function Au(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Xr(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function yi(l, t, e) {
    return (
      (e = re(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        Au(l, t);
      }),
      e
    );
  }
  function Qr(l) {
    return (l = re(l)), (l.tag = 3), l;
  }
  function Zr(l, t, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      (l.payload = function () {
        return n(u);
      }),
        (l.callback = function () {
          Xr(t, e, a);
        });
    }
    var c = e.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        Xr(t, e, a),
          typeof n != "function" &&
            (xe === null ? (xe = new Set([this])) : xe.add(this));
        var i = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: i !== null ? i : "",
        });
      });
  }
  function jm(l, t, e, a, n) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = e.alternate),
        t !== null && ln(t, e, n, !0),
        (e = St.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 13:
            return (
              Rt === null ? wi() : e.alternate === null && _l === 0 && (_l = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = n),
              a === Lc
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null ? (e.updateQueue = new Set([a])) : t.add(a),
                  Qi(l, a, n)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === Lc
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = t))
                    : ((e = t.retryQueue),
                      e === null ? (t.retryQueue = new Set([a])) : e.add(a)),
                  Qi(l, a, n)),
              !1
            );
        }
        throw Error(s(435, e.tag));
      }
      return Qi(l, a, n), wi(), !1;
    }
    if (il)
      return (
        (t = St.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Yc && ((l = Error(s(422), { cause: a })), Pa(gt(l, e))))
          : (a !== Yc && ((t = Error(s(423), { cause: a })), Pa(gt(t, e))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (n &= -n),
            (l.lanes |= n),
            (a = gt(a, e)),
            (n = yi(l.stateNode, a, n)),
            Jc(l, n),
            _l !== 4 && (_l = 2)),
        !1
      );
    var u = Error(s(520), { cause: a });
    if (
      ((u = gt(u, e)),
      Sn === null ? (Sn = [u]) : Sn.push(u),
      _l !== 4 && (_l = 2),
      t === null)
    )
      return !0;
    (a = gt(a, e)), (e = t);
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (l = n & -n),
            (e.lanes |= l),
            (l = yi(e.stateNode, a, l)),
            Jc(e, l),
            !1
          );
        case 1:
          if (
            ((t = e.type),
            (u = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (xe === null || !xe.has(u)))))
          )
            return (
              (e.flags |= 65536),
              (n &= -n),
              (e.lanes |= n),
              (n = Qr(n)),
              Zr(n, l, e, a),
              Jc(e, n),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Vr = Error(s(461)),
    Xl = !1;
  function Vl(l, t, e, a) {
    t.child = l === null ? Hr(t, null, e, a) : xa(t, l.child, e, a);
  }
  function Lr(l, t, e, a, n) {
    e = e.render;
    var u = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var i in a) i !== "ref" && (c[i] = a[i]);
    } else c = a;
    return (
      Xe(t),
      (a = Pc(l, t, e, c, u, n)),
      (i = li()),
      l !== null && !Xl
        ? (ti(l, t, n), kt(l, t, n))
        : (il && i && Cc(t), (t.flags |= 1), Vl(l, t, a, n), t.child)
    );
  }
  function kr(l, t, e, a, n) {
    if (l === null) {
      var u = e.type;
      return typeof u == "function" &&
        !Uc(u) &&
        u.defaultProps === void 0 &&
        e.compare === null
        ? ((t.tag = 15), (t.type = u), Kr(l, t, u, a, n))
        : ((l = eu(e.type, null, a, t, t.mode, n)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((u = l.child), !Ni(l, n))) {
      var c = u.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : $a), e(c, a) && l.ref === t.ref)
      )
        return kt(l, t, n);
    }
    return (
      (t.flags |= 1),
      (l = Gt(u, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Kr(l, t, e, a, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if ($a(u, a) && l.ref === t.ref)
        if (((Xl = !1), (t.pendingProps = a = u), Ni(l, n)))
          (l.flags & 131072) !== 0 && (Xl = !0);
        else return (t.lanes = l.lanes), kt(l, t, n);
    }
    return gi(l, t, e, a, n);
  }
  function Jr(l, t, e) {
    var a = t.pendingProps,
      n = a.children,
      u = l !== null ? l.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((a = u !== null ? u.baseLanes | e : e), l !== null)) {
          for (n = t.child = l.child, u = 0; n !== null; )
            (u = u | n.lanes | n.childLanes), (n = n.sibling);
          t.childLanes = u & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return $r(l, t, a, e);
      }
      if ((e & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && iu(t, u !== null ? u.cachePool : null),
          u !== null ? Ks(t, u) : Wc(),
          qr(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          $r(l, t, u !== null ? u.baseLanes | e : e, e)
        );
    } else
      u !== null
        ? (iu(t, u.cachePool), Ks(t, u), he(), (t.memoizedState = null))
        : (l !== null && iu(t, null), Wc(), he());
    return Vl(l, t, n, e), t.child;
  }
  function $r(l, t, e, a) {
    var n = Vc();
    return (
      (n = n === null ? null : { parent: Cl._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: e, cachePool: n }),
      l !== null && iu(t, null),
      Wc(),
      qr(t),
      l !== null && ln(l, t, a, !0),
      null
    );
  }
  function Nu(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(s(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function gi(l, t, e, a, n) {
    return (
      Xe(t),
      (e = Pc(l, t, e, a, void 0, n)),
      (a = li()),
      l !== null && !Xl
        ? (ti(l, t, n), kt(l, t, n))
        : (il && a && Cc(t), (t.flags |= 1), Vl(l, t, e, n), t.child)
    );
  }
  function Wr(l, t, e, a, n, u) {
    return (
      Xe(t),
      (t.updateQueue = null),
      (e = $s(t, a, e, n)),
      Js(l),
      (a = li()),
      l !== null && !Xl
        ? (ti(l, t, u), kt(l, t, u))
        : (il && a && Cc(t), (t.flags |= 1), Vl(l, t, e, u), t.child)
    );
  }
  function Fr(l, t, e, a, n) {
    if ((Xe(t), t.stateNode === null)) {
      var u = ra,
        c = e.contextType;
      typeof c == "object" && c !== null && (u = Jl(c)),
        (u = new e(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = vi),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        kc(t),
        (c = e.contextType),
        (u.context = typeof c == "object" && c !== null ? Jl(c) : ra),
        (u.state = t.memoizedState),
        (c = e.getDerivedStateFromProps),
        typeof c == "function" && (hi(t, e, c, a), (u.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((c = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          c !== u.state && vi.enqueueReplaceState(u, u.state, null),
          fn(t, a, u, n),
          cn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (l === null) {
      u = t.stateNode;
      var i = t.memoizedProps,
        r = Ve(e, i);
      u.props = r;
      var y = u.context,
        N = e.contextType;
      (c = ra), typeof N == "object" && N !== null && (c = Jl(N));
      var _ = e.getDerivedStateFromProps;
      (N =
        typeof _ == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (i = t.pendingProps !== i),
        N ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i || y !== c) && Br(t, u, a, c)),
        (se = !1);
      var g = t.memoizedState;
      (u.state = g),
        fn(t, a, u, n),
        cn(),
        (y = t.memoizedState),
        i || g !== y || se
          ? (typeof _ == "function" && (hi(t, e, _, a), (y = t.memoizedState)),
            (r = se || Cr(t, e, r, a, g, y, c))
              ? (N ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = y)),
            (u.props = a),
            (u.state = y),
            (u.context = c),
            (a = r))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (u = t.stateNode),
        Kc(l, t),
        (c = t.memoizedProps),
        (N = Ve(e, c)),
        (u.props = N),
        (_ = t.pendingProps),
        (g = u.context),
        (y = e.contextType),
        (r = ra),
        typeof y == "object" && y !== null && (r = Jl(y)),
        (i = e.getDerivedStateFromProps),
        (y =
          typeof i == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((c !== _ || g !== r) && Br(t, u, a, r)),
        (se = !1),
        (g = t.memoizedState),
        (u.state = g),
        fn(t, a, u, n),
        cn();
      var p = t.memoizedState;
      c !== _ ||
      g !== p ||
      se ||
      (l !== null && l.dependencies !== null && uu(l.dependencies))
        ? (typeof i == "function" && (hi(t, e, i, a), (p = t.memoizedState)),
          (N =
            se ||
            Cr(t, e, N, a, g, p, r) ||
            (l !== null && l.dependencies !== null && uu(l.dependencies)))
            ? (y ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, p, r),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, p, r)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (c === l.memoizedProps && g === l.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && g === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = p)),
          (u.props = a),
          (u.state = p),
          (u.context = r),
          (a = N))
        : (typeof u.componentDidUpdate != "function" ||
            (c === l.memoizedProps && g === l.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && g === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Nu(l, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = xa(t, l.child, null, n)),
              (t.child = xa(t, null, e, n)))
            : Vl(l, t, e, n),
          (t.memoizedState = u.state),
          (l = t.child))
        : (l = kt(l, t, n)),
      l
    );
  }
  function Ir(l, t, e, a) {
    return Ia(), (t.flags |= 256), Vl(l, t, e, a), t.child;
  }
  var bi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function pi(l) {
    return { baseLanes: l, cachePool: Gs() };
  }
  function xi(l, t, e) {
    return (l = l !== null ? l.childLanes & ~e : 0), t && (l |= zt), l;
  }
  function Pr(l, t, e) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (Bl.current & 2) !== 0),
      c && ((n = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (il) {
        if ((n ? me(t) : he(), il)) {
          var i = El,
            r;
          if ((r = i)) {
            l: {
              for (r = i, i = Ot; r.nodeType !== 8; ) {
                if (!i) {
                  i = null;
                  break l;
                }
                if (((r = _t(r.nextSibling)), r === null)) {
                  i = null;
                  break l;
                }
              }
              i = r;
            }
            i !== null
              ? ((t.memoizedState = {
                  dehydrated: i,
                  treeContext: Ce !== null ? { id: wt, overflow: Xt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (r = ft(18, null, null, 0)),
                (r.stateNode = i),
                (r.return = t),
                (t.child = r),
                (Fl = t),
                (El = null),
                (r = !0))
              : (r = !1);
          }
          r || Ge(t);
        }
        if (
          ((i = t.memoizedState),
          i !== null && ((i = i.dehydrated), i !== null))
        )
          return af(i) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Lt(t);
      }
      return (
        (i = a.children),
        (a = a.fallback),
        n
          ? (he(),
            (n = t.mode),
            (i = Tu({ mode: "hidden", children: i }, n)),
            (a = qe(a, n, e, null)),
            (i.return = t),
            (a.return = t),
            (i.sibling = a),
            (t.child = i),
            (n = t.child),
            (n.memoizedState = pi(e)),
            (n.childLanes = xi(l, c, e)),
            (t.memoizedState = bi),
            a)
          : (me(t), Si(t, i))
      );
    }
    if (
      ((r = l.memoizedState), r !== null && ((i = r.dehydrated), i !== null))
    ) {
      if (u)
        t.flags & 256
          ? (me(t), (t.flags &= -257), (t = zi(l, t, e)))
          : t.memoizedState !== null
          ? (he(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (he(),
            (n = a.fallback),
            (i = t.mode),
            (a = Tu({ mode: "visible", children: a.children }, i)),
            (n = qe(n, i, e, null)),
            (n.flags |= 2),
            (a.return = t),
            (n.return = t),
            (a.sibling = n),
            (t.child = a),
            xa(t, l.child, null, e),
            (a = t.child),
            (a.memoizedState = pi(e)),
            (a.childLanes = xi(l, c, e)),
            (t.memoizedState = bi),
            (t = n));
      else if ((me(t), af(i))) {
        if (((c = i.nextSibling && i.nextSibling.dataset), c)) var y = c.dgst;
        (c = y),
          (a = Error(s(419))),
          (a.stack = ""),
          (a.digest = c),
          Pa({ value: a, source: null, stack: null }),
          (t = zi(l, t, e));
      } else if (
        (Xl || ln(l, t, e, !1), (c = (e & l.childLanes) !== 0), Xl || c)
      ) {
        if (
          ((c = bl),
          c !== null &&
            ((a = e & -e),
            (a = (a & 42) !== 0 ? 1 : nc(a)),
            (a = (a & (c.suspendedLanes | e)) !== 0 ? 0 : a),
            a !== 0 && a !== r.retryLane))
        )
          throw ((r.retryLane = a), sa(l, a), mt(c, l, a), Vr);
        i.data === "$?" || wi(), (t = zi(l, t, e));
      } else
        i.data === "$?"
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = r.treeContext),
            (El = _t(i.nextSibling)),
            (Fl = t),
            (il = !0),
            (Ye = null),
            (Ot = !1),
            l !== null &&
              ((pt[xt++] = wt),
              (pt[xt++] = Xt),
              (pt[xt++] = Ce),
              (wt = l.id),
              (Xt = l.overflow),
              (Ce = t)),
            (t = Si(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (he(),
        (n = a.fallback),
        (i = t.mode),
        (r = l.child),
        (y = r.sibling),
        (a = Gt(r, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = r.subtreeFlags & 65011712),
        y !== null ? (n = Gt(y, n)) : ((n = qe(n, i, e, null)), (n.flags |= 2)),
        (n.return = t),
        (a.return = t),
        (a.sibling = n),
        (t.child = a),
        (a = n),
        (n = t.child),
        (i = l.child.memoizedState),
        i === null
          ? (i = pi(e))
          : ((r = i.cachePool),
            r !== null
              ? ((y = Cl._currentValue),
                (r = r.parent !== y ? { parent: y, pool: y } : r))
              : (r = Gs()),
            (i = { baseLanes: i.baseLanes | e, cachePool: r })),
        (n.memoizedState = i),
        (n.childLanes = xi(l, c, e)),
        (t.memoizedState = bi),
        a)
      : (me(t),
        (e = l.child),
        (l = e.sibling),
        (e = Gt(e, { mode: "visible", children: a.children })),
        (e.return = t),
        (e.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = e),
        (t.memoizedState = null),
        e);
  }
  function Si(l, t) {
    return (
      (t = Tu({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function Tu(l, t) {
    return (
      (l = ft(22, l, null, t)),
      (l.lanes = 0),
      (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      l
    );
  }
  function zi(l, t, e) {
    return (
      xa(t, l.child, null, e),
      (l = Si(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function lo(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), wc(l.return, t, e);
  }
  function Ai(l, t, e, a, n) {
    var u = l.memoizedState;
    u === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: n,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = e),
        (u.tailMode = n));
  }
  function to(l, t, e) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    if ((Vl(l, t, a.children, e), (a = Bl.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && lo(l, e, t);
          else if (l.tag === 19) lo(l, e, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      a &= 1;
    }
    switch ((R(Bl, a), n)) {
      case "forwards":
        for (e = t.child, n = null; e !== null; )
          (l = e.alternate),
            l !== null && Su(l) === null && (n = e),
            (e = e.sibling);
        (e = n),
          e === null
            ? ((n = t.child), (t.child = null))
            : ((n = e.sibling), (e.sibling = null)),
          Ai(t, !1, n, e, u);
        break;
      case "backwards":
        for (e = null, n = t.child, t.child = null; n !== null; ) {
          if (((l = n.alternate), l !== null && Su(l) === null)) {
            t.child = n;
            break;
          }
          (l = n.sibling), (n.sibling = e), (e = n), (n = l);
        }
        Ai(t, !0, e, null, u);
        break;
      case "together":
        Ai(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function kt(l, t, e) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (pe |= t.lanes),
      (e & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((ln(l, t, e, !1), (e & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        l = t.child, e = Gt(l, l.pendingProps), t.child = e, e.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (e = e.sibling = Gt(l, l.pendingProps)),
          (e.return = t);
      e.sibling = null;
    }
    return t.child;
  }
  function Ni(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && uu(l)));
  }
  function Om(l, t, e) {
    switch (t.tag) {
      case 3:
        vl(t, t.stateNode.containerInfo),
          fe(t, Cl, l.memoizedState.cache),
          Ia();
        break;
      case 27:
      case 5:
        ee(t);
        break;
      case 4:
        vl(t, t.stateNode.containerInfo);
        break;
      case 10:
        fe(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (me(t), (t.flags |= 128), null)
            : (e & t.child.childLanes) !== 0
            ? Pr(l, t, e)
            : (me(t), (l = kt(l, t, e)), l !== null ? l.sibling : null);
        me(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (
          ((a = (e & t.childLanes) !== 0),
          a || (ln(l, t, e, !1), (a = (e & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return to(l, t, e);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          R(Bl, Bl.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Jr(l, t, e);
      case 24:
        fe(t, Cl, l.memoizedState.cache);
    }
    return kt(l, t, e);
  }
  function eo(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Xl = !0;
      else {
        if (!Ni(l, e) && (t.flags & 128) === 0) return (Xl = !1), Om(l, t, e);
        Xl = (l.flags & 131072) !== 0;
      }
    else (Xl = !1), il && (t.flags & 1048576) !== 0 && Ds(t, nu, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType,
            n = a._init;
          if (((a = n(a._payload)), (t.type = a), typeof a == "function"))
            Uc(a)
              ? ((l = Ve(a, l)), (t.tag = 1), (t = Fr(null, t, a, l, e)))
              : ((t.tag = 0), (t = gi(null, t, a, l, e)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === Gl)) {
                (t.tag = 11), (t = Lr(null, t, a, l, e));
                break l;
              } else if (n === ql) {
                (t.tag = 14), (t = kr(null, t, a, l, e));
                break l;
              }
            }
            throw ((t = Nt(a) || a), Error(s(306, t, "")));
          }
        }
        return t;
      case 0:
        return gi(l, t, t.type, t.pendingProps, e);
      case 1:
        return (a = t.type), (n = Ve(a, t.pendingProps)), Fr(l, t, a, n, e);
      case 3:
        l: {
          if ((vl(t, t.stateNode.containerInfo), l === null))
            throw Error(s(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          (n = u.element), Kc(l, t), fn(t, a, null, e);
          var c = t.memoizedState;
          if (
            ((a = c.cache),
            fe(t, Cl, a),
            a !== u.cache && Xc(t, [Cl], e, !0),
            cn(),
            (a = c.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Ir(l, t, a, e);
              break l;
            } else if (a !== n) {
              (n = gt(Error(s(424)), t)), Pa(n), (t = Ir(l, t, a, e));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                El = _t(l.firstChild),
                  Fl = t,
                  il = !0,
                  Ye = null,
                  Ot = !0,
                  e = Hr(t, null, a, e),
                  t.child = e;
                e;

              )
                (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
            }
          else {
            if ((Ia(), a === n)) {
              t = kt(l, t, e);
              break l;
            }
            Vl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Nu(l, t),
          l === null
            ? (e = id(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = e)
              : il ||
                ((e = t.type),
                (l = t.pendingProps),
                (a = Gu(K.current).createElement(e)),
                (a[Kl] = t),
                (a[Pl] = l),
                kl(a, e, l),
                wl(a),
                (t.stateNode = a))
            : (t.memoizedState = id(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          ee(t),
          l === null &&
            il &&
            ((a = t.stateNode = nd(t.type, t.pendingProps, K.current)),
            (Fl = t),
            (Ot = !0),
            (n = El),
            Ae(t.type) ? ((nf = n), (El = _t(a.firstChild))) : (El = n)),
          Vl(l, t, t.pendingProps.children, e),
          Nu(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            il &&
            ((n = a = El) &&
              ((a = nh(a, t.type, t.pendingProps, Ot)),
              a !== null
                ? ((t.stateNode = a),
                  (Fl = t),
                  (El = _t(a.firstChild)),
                  (Ot = !1),
                  (n = !0))
                : (n = !1)),
            n || Ge(t)),
          ee(t),
          (n = t.type),
          (u = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (a = u.children),
          lf(n, u) ? (a = null) : c !== null && lf(n, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = Pc(l, t, zm, null, null, e)), (On._currentValue = n)),
          Nu(l, t),
          Vl(l, t, a, e),
          t.child
        );
      case 6:
        return (
          l === null &&
            il &&
            ((l = e = El) &&
              ((e = uh(e, t.pendingProps, Ot)),
              e !== null
                ? ((t.stateNode = e), (Fl = t), (El = null), (l = !0))
                : (l = !1)),
            l || Ge(t)),
          null
        );
      case 13:
        return Pr(l, t, e);
      case 4:
        return (
          vl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = xa(t, null, a, e)) : Vl(l, t, a, e),
          t.child
        );
      case 11:
        return Lr(l, t, t.type, t.pendingProps, e);
      case 7:
        return Vl(l, t, t.pendingProps, e), t.child;
      case 8:
        return Vl(l, t, t.pendingProps.children, e), t.child;
      case 12:
        return Vl(l, t, t.pendingProps.children, e), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          fe(t, t.type, a.value),
          Vl(l, t, a.children, e),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Xe(t),
          (n = Jl(n)),
          (a = a(n)),
          (t.flags |= 1),
          Vl(l, t, a, e),
          t.child
        );
      case 14:
        return kr(l, t, t.type, t.pendingProps, e);
      case 15:
        return Kr(l, t, t.type, t.pendingProps, e);
      case 19:
        return to(l, t, e);
      case 31:
        return (
          (a = t.pendingProps),
          (e = t.mode),
          (a = { mode: a.mode, children: a.children }),
          l === null
            ? ((e = Tu(a, e)),
              (e.ref = t.ref),
              (t.child = e),
              (e.return = t),
              (t = e))
            : ((e = Gt(l.child, a)),
              (e.ref = t.ref),
              (t.child = e),
              (e.return = t),
              (t = e)),
          t
        );
      case 22:
        return Jr(l, t, e);
      case 24:
        return (
          Xe(t),
          (a = Jl(Cl)),
          l === null
            ? ((n = Vc()),
              n === null &&
                ((n = bl),
                (u = Qc()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= e),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              kc(t),
              fe(t, Cl, n))
            : ((l.lanes & e) !== 0 && (Kc(l, t), fn(t, null, null, e), cn()),
              (n = l.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  fe(t, Cl, a))
                : ((a = u.cache),
                  fe(t, Cl, a),
                  a !== n.cache && Xc(t, [Cl], e, !0))),
          Vl(l, t, t.pendingProps.children, e),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function Kt(l) {
    l.flags |= 4;
  }
  function ao(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !dd(t))) {
      if (
        ((t = St.current),
        t !== null &&
          ((al & 4194048) === al
            ? Rt !== null
            : ((al & 62914560) !== al && (al & 536870912) === 0) || t !== Rt))
      )
        throw ((nn = Lc), ws);
      l.flags |= 8192;
    }
  }
  function Eu(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? qf() : 536870912), (l.lanes |= t), (Na |= t));
  }
  function vn(l, t) {
    if (!il)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            t.alternate !== null && (e = t), (t = t.sibling);
          e === null ? (l.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), (e = e.sibling);
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Nl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      e = 0,
      a = 0;
    if (t)
      for (var n = l.child; n !== null; )
        (e |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = l),
          (n = n.sibling);
    else
      for (n = l.child; n !== null; )
        (e |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = l),
          (n = n.sibling);
    return (l.subtreeFlags |= a), (l.childLanes = e), t;
  }
  function Rm(l, t, e) {
    var a = t.pendingProps;
    switch ((Bc(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Nl(t), null;
      case 1:
        return Nl(t), null;
      case 3:
        return (
          (e = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Zt(Cl),
          nt(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (l === null || l.child === null) &&
            (Fa(t)
              ? Kt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), qs())),
          Nl(t),
          null
        );
      case 26:
        return (
          (e = t.memoizedState),
          l === null
            ? (Kt(t),
              e !== null ? (Nl(t), ao(t, e)) : (Nl(t), (t.flags &= -16777217)))
            : e
            ? e !== l.memoizedState
              ? (Kt(t), Nl(t), ao(t, e))
              : (Nl(t), (t.flags &= -16777217))
            : (l.memoizedProps !== a && Kt(t), Nl(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        ae(t), (e = K.current);
        var n = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return Nl(t), null;
          }
          (l = C.current),
            Fa(t) ? Us(t) : ((l = nd(n, a, e)), (t.stateNode = l), Kt(t));
        }
        return Nl(t), null;
      case 5:
        if ((ae(t), (e = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return Nl(t), null;
          }
          if (((l = C.current), Fa(t))) Us(t);
          else {
            switch (((n = Gu(K.current)), l)) {
              case 1:
                l = n.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                l = n.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    l = n.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    l = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    (l = n.createElement("div")),
                      (l.innerHTML = "<script></script>"),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case "select":
                    (l =
                      typeof a.is == "string"
                        ? n.createElement("select", { is: a.is })
                        : n.createElement("select")),
                      a.multiple
                        ? (l.multiple = !0)
                        : a.size && (l.size = a.size);
                    break;
                  default:
                    l =
                      typeof a.is == "string"
                        ? n.createElement(e, { is: a.is })
                        : n.createElement(e);
                }
            }
            (l[Kl] = t), (l[Pl] = a);
            l: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) l.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === t) break l;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) break l;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
            t.stateNode = l;
            l: switch ((kl(l, e, a), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!a.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Kt(t);
          }
        }
        return Nl(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Kt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
          if (((l = K.current), Fa(t))) {
            if (
              ((l = t.stateNode),
              (e = t.memoizedProps),
              (a = null),
              (n = Fl),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (l[Kl] = t),
              (l = !!(
                l.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Fo(l.nodeValue, e)
              )),
              l || Ge(t);
          } else (l = Gu(l).createTextNode(a)), (l[Kl] = t), (t.stateNode = l);
        }
        return Nl(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((n = Fa(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!n) throw Error(s(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(s(317));
              n[Kl] = t;
            } else
              Ia(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Nl(t), (n = !1);
          } else
            (n = qs()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return t.flags & 256 ? (Lt(t), t) : (Lt(t), null);
        }
        if ((Lt(t), (t.flags & 128) !== 0)) return (t.lanes = e), t;
        if (
          ((e = a !== null), (l = l !== null && l.memoizedState !== null), e)
        ) {
          (a = t.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool);
          var u = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048);
        }
        return (
          e !== l && e && (t.child.flags |= 8192),
          Eu(t, t.updateQueue),
          Nl(t),
          null
        );
      case 4:
        return nt(), l === null && $i(t.stateNode.containerInfo), Nl(t), null;
      case 10:
        return Zt(t.type), Nl(t), null;
      case 19:
        if ((q(Bl), (n = t.memoizedState), n === null)) return Nl(t), null;
        if (((a = (t.flags & 128) !== 0), (u = n.rendering), u === null))
          if (a) vn(n, !1);
          else {
            if (_l !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((u = Su(l)), u !== null)) {
                  for (
                    t.flags |= 128,
                      vn(n, !1),
                      l = u.updateQueue,
                      t.updateQueue = l,
                      Eu(t, l),
                      t.subtreeFlags = 0,
                      l = e,
                      e = t.child;
                    e !== null;

                  )
                    Rs(e, l), (e = e.sibling);
                  return R(Bl, (Bl.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            n.tail !== null &&
              jt() > ju &&
              ((t.flags |= 128), (a = !0), vn(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((l = Su(u)), l !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                Eu(t, l),
                vn(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !u.alternate &&
                  !il)
              )
                return Nl(t), null;
            } else
              2 * jt() - n.renderingStartTime > ju &&
                e !== 536870912 &&
                ((t.flags |= 128), (a = !0), vn(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((l = n.last),
              l !== null ? (l.sibling = u) : (t.child = u),
              (n.last = u));
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = jt()),
            (t.sibling = null),
            (l = Bl.current),
            R(Bl, a ? (l & 1) | 2 : l & 1),
            t)
          : (Nl(t), null);
      case 22:
      case 23:
        return (
          Lt(t),
          Fc(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Nl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Nl(t),
          (e = t.updateQueue),
          e !== null && Eu(t, e.retryQueue),
          (e = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== e && (t.flags |= 2048),
          l !== null && q(Qe),
          null
        );
      case 24:
        return (
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          Zt(Cl),
          Nl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Dm(l, t) {
    switch ((Bc(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Zt(Cl),
          nt(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return ae(t), null;
      case 13:
        if (
          (Lt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Ia();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return q(Bl), null;
      case 4:
        return nt(), null;
      case 10:
        return Zt(t.type), null;
      case 22:
      case 23:
        return (
          Lt(t),
          Fc(),
          l !== null && q(Qe),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Zt(Cl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function no(l, t) {
    switch ((Bc(t), t.tag)) {
      case 3:
        Zt(Cl), nt();
        break;
      case 26:
      case 27:
      case 5:
        ae(t);
        break;
      case 4:
        nt();
        break;
      case 13:
        Lt(t);
        break;
      case 19:
        q(Bl);
        break;
      case 10:
        Zt(t.type);
        break;
      case 22:
      case 23:
        Lt(t), Fc(), l !== null && q(Qe);
        break;
      case 24:
        Zt(Cl);
    }
  }
  function yn(l, t) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var u = e.create,
              c = e.inst;
            (a = u()), (c.destroy = a);
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (i) {
      yl(t, t.return, i);
    }
  }
  function ve(l, t, e) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            var c = a.inst,
              i = c.destroy;
            if (i !== void 0) {
              (c.destroy = void 0), (n = t);
              var r = e,
                y = i;
              try {
                y();
              } catch (N) {
                yl(n, r, N);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (N) {
      yl(t, t.return, N);
    }
  }
  function uo(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        ks(t, e);
      } catch (a) {
        yl(l, l.return, a);
      }
    }
  }
  function co(l, t, e) {
    (e.props = Ve(l.type, l.memoizedProps)), (e.state = l.memoizedState);
    try {
      e.componentWillUnmount();
    } catch (a) {
      yl(l, t, a);
    }
  }
  function gn(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? (l.refCleanup = e(a)) : (e.current = a);
      }
    } catch (n) {
      yl(l, t, n);
    }
  }
  function Dt(l, t) {
    var e = l.ref,
      a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          yl(l, t, n);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          yl(l, t, n);
        }
      else e.current = null;
  }
  function io(l) {
    var t = l.type,
      e = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      yl(l, l.return, n);
    }
  }
  function Ti(l, t, e) {
    try {
      var a = l.stateNode;
      Pm(a, l.type, e, t), (a[Pl] = t);
    } catch (n) {
      yl(l, l.return, n);
    }
  }
  function fo(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && Ae(l.type)) ||
      l.tag === 4
    );
  }
  function Ei(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || fo(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && Ae(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function _i(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode),
        t
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
              ? e.ownerDocument.body
              : e
            ).insertBefore(l, t)
          : ((t =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e),
            t.appendChild(l),
            (e = e._reactRootContainer),
            e != null || t.onclick !== null || (t.onclick = Yu));
    else if (
      a !== 4 &&
      (a === 27 && Ae(l.type) && ((e = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (_i(l, t, e), l = l.sibling; l !== null; )
        _i(l, t, e), (l = l.sibling);
  }
  function _u(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (
      a !== 4 &&
      (a === 27 && Ae(l.type) && (e = l.stateNode), (l = l.child), l !== null)
    )
      for (_u(l, t, e), l = l.sibling; l !== null; )
        _u(l, t, e), (l = l.sibling);
  }
  function so(l) {
    var t = l.stateNode,
      e = l.memoizedProps;
    try {
      for (var a = l.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      kl(t, a, e), (t[Kl] = l), (t[Pl] = e);
    } catch (u) {
      yl(l, l.return, u);
    }
  }
  var Jt = !1,
    Rl = !1,
    Mi = !1,
    ro = typeof WeakSet == "function" ? WeakSet : Set,
    Ql = null;
  function Um(l, t) {
    if (((l = l.containerInfo), (Ii = Lu), (l = Ss(l)), Ec(l))) {
      if ("selectionStart" in l)
        var e = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          e = ((e = l.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, u.nodeType;
            } catch {
              e = null;
              break l;
            }
            var c = 0,
              i = -1,
              r = -1,
              y = 0,
              N = 0,
              _ = l,
              g = null;
            t: for (;;) {
              for (
                var p;
                _ !== e || (n !== 0 && _.nodeType !== 3) || (i = c + n),
                  _ !== u || (a !== 0 && _.nodeType !== 3) || (r = c + a),
                  _.nodeType === 3 && (c += _.nodeValue.length),
                  (p = _.firstChild) !== null;

              )
                (g = _), (_ = p);
              for (;;) {
                if (_ === l) break t;
                if (
                  (g === e && ++y === n && (i = c),
                  g === u && ++N === a && (r = c),
                  (p = _.nextSibling) !== null)
                )
                  break;
                (_ = g), (g = _.parentNode);
              }
              _ = p;
            }
            e = i === -1 || r === -1 ? null : { start: i, end: r };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      Pi = { focusedElem: l, selectionRange: e }, Lu = !1, Ql = t;
      Ql !== null;

    )
      if (
        ((t = Ql), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null)
      )
        (l.return = t), (Ql = l);
      else
        for (; Ql !== null; ) {
          switch (((t = Ql), (u = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && u !== null) {
                (l = void 0),
                  (e = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = e.stateNode);
                try {
                  var L = Ve(e.type, n, e.elementType === e.type);
                  (l = a.getSnapshotBeforeUpdate(L, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = l);
                } catch (Z) {
                  yl(e, e.return, Z);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (e = l.nodeType), e === 9)
                )
                  ef(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ef(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(s(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Ql = l);
            break;
          }
          Ql = t.return;
        }
  }
  function oo(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ye(l, e), a & 4 && yn(5, e);
        break;
      case 1:
        if ((ye(l, e), a & 4))
          if (((l = e.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              yl(e, e.return, c);
            }
          else {
            var n = Ve(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              yl(e, e.return, c);
            }
          }
        a & 64 && uo(e), a & 512 && gn(e, e.return);
        break;
      case 3:
        if ((ye(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
          if (((t = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            ks(l, t);
          } catch (c) {
            yl(e, e.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && so(e);
      case 26:
      case 5:
        ye(l, e), t === null && a & 4 && io(e), a & 512 && gn(e, e.return);
        break;
      case 12:
        ye(l, e);
        break;
      case 13:
        ye(l, e),
          a & 4 && vo(l, e),
          a & 64 &&
            ((l = e.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((e = Qm.bind(null, e)), ch(l, e))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Jt), !a)) {
          (t = (t !== null && t.memoizedState !== null) || Rl), (n = Jt);
          var u = Rl;
          (Jt = a),
            (Rl = t) && !u ? ge(l, e, (e.subtreeFlags & 8772) !== 0) : ye(l, e),
            (Jt = n),
            (Rl = u);
        }
        break;
      case 30:
        break;
      default:
        ye(l, e);
    }
  }
  function mo(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), mo(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && ic(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var zl = null,
    et = !1;
  function $t(l, t, e) {
    for (e = e.child; e !== null; ) ho(l, t, e), (e = e.sibling);
  }
  function ho(l, t, e) {
    if (ut && typeof ut.onCommitFiberUnmount == "function")
      try {
        ut.onCommitFiberUnmount(Ba, e);
      } catch {}
    switch (e.tag) {
      case 26:
        Rl || Dt(e, t),
          $t(l, t, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
        break;
      case 27:
        Rl || Dt(e, t);
        var a = zl,
          n = et;
        Ae(e.type) && ((zl = e.stateNode), (et = !1)),
          $t(l, t, e),
          En(e.stateNode),
          (zl = a),
          (et = n);
        break;
      case 5:
        Rl || Dt(e, t);
      case 6:
        if (
          ((a = zl),
          (n = et),
          (zl = null),
          $t(l, t, e),
          (zl = a),
          (et = n),
          zl !== null)
        )
          if (et)
            try {
              (zl.nodeType === 9
                ? zl.body
                : zl.nodeName === "HTML"
                ? zl.ownerDocument.body
                : zl
              ).removeChild(e.stateNode);
            } catch (u) {
              yl(e, t, u);
            }
          else
            try {
              zl.removeChild(e.stateNode);
            } catch (u) {
              yl(e, t, u);
            }
        break;
      case 18:
        zl !== null &&
          (et
            ? ((l = zl),
              ed(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                e.stateNode
              ),
              Hn(l))
            : ed(zl, e.stateNode));
        break;
      case 4:
        (a = zl),
          (n = et),
          (zl = e.stateNode.containerInfo),
          (et = !0),
          $t(l, t, e),
          (zl = a),
          (et = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Rl || ve(2, e, t), Rl || ve(4, e, t), $t(l, t, e);
        break;
      case 1:
        Rl ||
          (Dt(e, t),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && co(e, t, a)),
          $t(l, t, e);
        break;
      case 21:
        $t(l, t, e);
        break;
      case 22:
        (Rl = (a = Rl) || e.memoizedState !== null), $t(l, t, e), (Rl = a);
        break;
      default:
        $t(l, t, e);
    }
  }
  function vo(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Hn(l);
      } catch (e) {
        yl(t, t.return, e);
      }
  }
  function Hm(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new ro()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new ro()),
          t
        );
      default:
        throw Error(s(435, l.tag));
    }
  }
  function ji(l, t) {
    var e = Hm(l);
    t.forEach(function (a) {
      var n = Zm.bind(null, l, a);
      e.has(a) || (e.add(a), a.then(n, n));
    });
  }
  function st(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a],
          u = l,
          c = t,
          i = c;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (Ae(i.type)) {
                (zl = i.stateNode), (et = !1);
                break l;
              }
              break;
            case 5:
              (zl = i.stateNode), (et = !1);
              break l;
            case 3:
            case 4:
              (zl = i.stateNode.containerInfo), (et = !0);
              break l;
          }
          i = i.return;
        }
        if (zl === null) throw Error(s(160));
        ho(u, c, n),
          (zl = null),
          (et = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) yo(t, l), (t = t.sibling);
  }
  var Et = null;
  function yo(l, t) {
    var e = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        st(t, l),
          rt(l),
          a & 4 && (ve(3, l, l.return), yn(3, l), ve(5, l, l.return));
        break;
      case 1:
        st(t, l),
          rt(l),
          a & 512 && (Rl || e === null || Dt(e, e.return)),
          a & 64 &&
            Jt &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((e = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = e === null ? a : e.concat(a)))));
        break;
      case 26:
        var n = Et;
        if (
          (st(t, l),
          rt(l),
          a & 512 && (Rl || e === null || Dt(e, e.return)),
          a & 4)
        ) {
          var u = e !== null ? e.memoizedState : null;
          if (((a = l.memoizedState), e === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  (a = l.type),
                    (e = l.memoizedProps),
                    (n = n.ownerDocument || n);
                  t: switch (a) {
                    case "title":
                      (u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[wa] ||
                          u[Kl] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title")
                          )),
                        kl(u, a, e),
                        (u[Kl] = l),
                        wl(u),
                        (a = u);
                      break l;
                    case "link":
                      var c = rd("link", "href", n).get(a + (e.href || ""));
                      if (c) {
                        for (var i = 0; i < c.length; i++)
                          if (
                            ((u = c[i]),
                            u.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              u.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              u.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              u.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        kl(u, a, e),
                        n.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (c = rd("meta", "content", n).get(
                          a + (e.content || "")
                        ))
                      ) {
                        for (i = 0; i < c.length; i++)
                          if (
                            ((u = c[i]),
                            u.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              u.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              u.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              u.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        kl(u, a, e),
                        n.head.appendChild(u);
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  (u[Kl] = l), wl(u), (a = u);
                }
                l.stateNode = a;
              } else od(n, l.type, l.stateNode);
            else l.stateNode = sd(n, a, l.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : u.count--,
                a === null
                  ? od(n, l.type, l.stateNode)
                  : sd(n, a, l.memoizedProps))
              : a === null &&
                l.stateNode !== null &&
                Ti(l, l.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        st(t, l),
          rt(l),
          a & 512 && (Rl || e === null || Dt(e, e.return)),
          e !== null && a & 4 && Ti(l, l.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (
          (st(t, l),
          rt(l),
          a & 512 && (Rl || e === null || Dt(e, e.return)),
          l.flags & 32)
        ) {
          n = l.stateNode;
          try {
            ea(n, "");
          } catch (p) {
            yl(l, l.return, p);
          }
        }
        a & 4 &&
          l.stateNode != null &&
          ((n = l.memoizedProps), Ti(l, n, e !== null ? e.memoizedProps : n)),
          a & 1024 && (Mi = !0);
        break;
      case 6:
        if ((st(t, l), rt(l), a & 4)) {
          if (l.stateNode === null) throw Error(s(162));
          (a = l.memoizedProps), (e = l.stateNode);
          try {
            e.nodeValue = a;
          } catch (p) {
            yl(l, l.return, p);
          }
        }
        break;
      case 3:
        if (
          ((Qu = null),
          (n = Et),
          (Et = wu(t.containerInfo)),
          st(t, l),
          (Et = n),
          rt(l),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            Hn(t.containerInfo);
          } catch (p) {
            yl(l, l.return, p);
          }
        Mi && ((Mi = !1), go(l));
        break;
      case 4:
        (a = Et),
          (Et = wu(l.stateNode.containerInfo)),
          st(t, l),
          rt(l),
          (Et = a);
        break;
      case 12:
        st(t, l), rt(l);
        break;
      case 13:
        st(t, l),
          rt(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (qi = jt()),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), ji(l, a)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var r = e !== null && e.memoizedState !== null,
          y = Jt,
          N = Rl;
        if (
          ((Jt = y || n),
          (Rl = N || r),
          st(t, l),
          (Rl = N),
          (Jt = y),
          rt(l),
          a & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (e === null || r || Jt || Rl || Le(l)),
              e = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                r = e = t;
                try {
                  if (((u = r.stateNode), n))
                    (c = u.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    i = r.stateNode;
                    var _ = r.memoizedProps.style,
                      g =
                        _ != null && _.hasOwnProperty("display")
                          ? _.display
                          : null;
                    i.style.display =
                      g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (p) {
                  yl(r, r.return, p);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                r = t;
                try {
                  r.stateNode.nodeValue = n ? "" : r.memoizedProps;
                } catch (p) {
                  yl(r, r.return, p);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), (t = t.return);
            }
            e === t && (e = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = l.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), ji(l, e))));
        break;
      case 19:
        st(t, l),
          rt(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), ji(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        st(t, l), rt(l);
    }
  }
  function rt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (fo(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(s(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode,
              u = Ei(l);
            _u(l, u, n);
            break;
          case 5:
            var c = e.stateNode;
            e.flags & 32 && (ea(c, ""), (e.flags &= -33));
            var i = Ei(l);
            _u(l, i, c);
            break;
          case 3:
          case 4:
            var r = e.stateNode.containerInfo,
              y = Ei(l);
            _i(l, y, r);
            break;
          default:
            throw Error(s(161));
        }
      } catch (N) {
        yl(l, l.return, N);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function go(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        go(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function ye(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) oo(l, t.alternate, t), (t = t.sibling);
  }
  function Le(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ve(4, t, t.return), Le(t);
          break;
        case 1:
          Dt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && co(t, t.return, e),
            Le(t);
          break;
        case 27:
          En(t.stateNode);
        case 26:
        case 5:
          Dt(t, t.return), Le(t);
          break;
        case 22:
          t.memoizedState === null && Le(t);
          break;
        case 30:
          Le(t);
          break;
        default:
          Le(t);
      }
      l = l.sibling;
    }
  }
  function ge(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = l,
        u = t,
        c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ge(n, u, e), yn(4, u);
          break;
        case 1:
          if (
            (ge(n, u, e),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (y) {
              yl(a, a.return, y);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var i = a.stateNode;
            try {
              var r = n.shared.hiddenCallbacks;
              if (r !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < r.length; n++)
                  Ls(r[n], i);
            } catch (y) {
              yl(a, a.return, y);
            }
          }
          e && c & 64 && uo(u), gn(u, u.return);
          break;
        case 27:
          so(u);
        case 26:
        case 5:
          ge(n, u, e), e && a === null && c & 4 && io(u), gn(u, u.return);
          break;
        case 12:
          ge(n, u, e);
          break;
        case 13:
          ge(n, u, e), e && c & 4 && vo(n, u);
          break;
        case 22:
          u.memoizedState === null && ge(n, u, e), gn(u, u.return);
          break;
        case 30:
          break;
        default:
          ge(n, u, e);
      }
      t = t.sibling;
    }
  }
  function Oi(l, t) {
    var e = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (e = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== e && (l != null && l.refCount++, e != null && tn(e));
  }
  function Ri(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && tn(l));
  }
  function Ut(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) bo(l, t, e, a), (t = t.sibling);
  }
  function bo(l, t, e, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ut(l, t, e, a), n & 2048 && yn(9, t);
        break;
      case 1:
        Ut(l, t, e, a);
        break;
      case 3:
        Ut(l, t, e, a),
          n & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && tn(l)));
        break;
      case 12:
        if (n & 2048) {
          Ut(l, t, e, a), (l = t.stateNode);
          try {
            var u = t.memoizedProps,
              c = u.id,
              i = u.onPostCommit;
            typeof i == "function" &&
              i(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (r) {
            yl(t, t.return, r);
          }
        } else Ut(l, t, e, a);
        break;
      case 13:
        Ut(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        (u = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? Ut(l, t, e, a)
              : bn(l, t)
            : u._visibility & 2
            ? Ut(l, t, e, a)
            : ((u._visibility |= 2),
              Sa(l, t, e, a, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && Oi(c, t);
        break;
      case 24:
        Ut(l, t, e, a), n & 2048 && Ri(t.alternate, t);
        break;
      default:
        Ut(l, t, e, a);
    }
  }
  function Sa(l, t, e, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var u = l,
        c = t,
        i = e,
        r = a,
        y = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Sa(u, c, i, r, n), yn(8, c);
          break;
        case 23:
          break;
        case 22:
          var N = c.stateNode;
          c.memoizedState !== null
            ? N._visibility & 2
              ? Sa(u, c, i, r, n)
              : bn(u, c)
            : ((N._visibility |= 2), Sa(u, c, i, r, n)),
            n && y & 2048 && Oi(c.alternate, c);
          break;
        case 24:
          Sa(u, c, i, r, n), n && y & 2048 && Ri(c.alternate, c);
          break;
        default:
          Sa(u, c, i, r, n);
      }
      t = t.sibling;
    }
  }
  function bn(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            bn(e, a), n & 2048 && Oi(a.alternate, a);
            break;
          case 24:
            bn(e, a), n & 2048 && Ri(a.alternate, a);
            break;
          default:
            bn(e, a);
        }
        t = t.sibling;
      }
  }
  var pn = 8192;
  function za(l) {
    if (l.subtreeFlags & pn)
      for (l = l.child; l !== null; ) po(l), (l = l.sibling);
  }
  function po(l) {
    switch (l.tag) {
      case 26:
        za(l),
          l.flags & pn &&
            l.memoizedState !== null &&
            ph(Et, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        za(l);
        break;
      case 3:
      case 4:
        var t = Et;
        (Et = wu(l.stateNode.containerInfo)), za(l), (Et = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = pn), (pn = 16777216), za(l), (pn = t))
            : za(l));
        break;
      default:
        za(l);
    }
  }
  function xo(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function xn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (Ql = a), zo(a, l);
        }
      xo(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) So(l), (l = l.sibling);
  }
  function So(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        xn(l), l.flags & 2048 && ve(9, l, l.return);
        break;
      case 3:
        xn(l);
        break;
      case 12:
        xn(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), Mu(l))
          : xn(l);
        break;
      default:
        xn(l);
    }
  }
  function Mu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          (Ql = a), zo(a, l);
        }
      xo(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          ve(8, t, t.return), Mu(t);
          break;
        case 22:
          (e = t.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), Mu(t));
          break;
        default:
          Mu(t);
      }
      l = l.sibling;
    }
  }
  function zo(l, t) {
    for (; Ql !== null; ) {
      var e = Ql;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ve(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          tn(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) (a.return = e), (Ql = a);
      else
        l: for (e = l; Ql !== null; ) {
          a = Ql;
          var n = a.sibling,
            u = a.return;
          if ((mo(a), a === e)) {
            Ql = null;
            break l;
          }
          if (n !== null) {
            (n.return = u), (Ql = n);
            break l;
          }
          Ql = u;
        }
    }
  }
  var qm = {
      getCacheForType: function (l) {
        var t = Jl(Cl),
          e = t.data.get(l);
        return e === void 0 && ((e = l()), t.data.set(l, e)), e;
      },
    },
    Cm = typeof WeakMap == "function" ? WeakMap : Map,
    sl = 0,
    bl = null,
    tl = null,
    al = 0,
    rl = 0,
    ot = null,
    be = !1,
    Aa = !1,
    Di = !1,
    Wt = 0,
    _l = 0,
    pe = 0,
    ke = 0,
    Ui = 0,
    zt = 0,
    Na = 0,
    Sn = null,
    at = null,
    Hi = !1,
    qi = 0,
    ju = 1 / 0,
    Ou = null,
    xe = null,
    Ll = 0,
    Se = null,
    Ta = null,
    Ea = 0,
    Ci = 0,
    Bi = null,
    Ao = null,
    zn = 0,
    Yi = null;
  function dt() {
    if ((sl & 2) !== 0 && al !== 0) return al & -al;
    if (z.T !== null) {
      var l = ma;
      return l !== 0 ? l : Li();
    }
    return Yf();
  }
  function No() {
    zt === 0 && (zt = (al & 536870912) === 0 || il ? Hf() : 536870912);
    var l = St.current;
    return l !== null && (l.flags |= 32), zt;
  }
  function mt(l, t, e) {
    ((l === bl && (rl === 2 || rl === 9)) || l.cancelPendingCommit !== null) &&
      (_a(l, 0), ze(l, al, zt, !1)),
      Ga(l, e),
      ((sl & 2) === 0 || l !== bl) &&
        (l === bl &&
          ((sl & 2) === 0 && (ke |= e), _l === 4 && ze(l, al, zt, !1)),
        Ht(l));
  }
  function To(l, t, e) {
    if ((sl & 6) !== 0) throw Error(s(327));
    var a = (!e && (t & 124) === 0 && (t & l.expiredLanes) === 0) || Ya(l, t),
      n = a ? Gm(l, t) : Xi(l, t, !0),
      u = a;
    do {
      if (n === 0) {
        Aa && !a && ze(l, t, 0, !1);
        break;
      } else {
        if (((e = l.current.alternate), u && !Bm(e))) {
          (n = Xi(l, t, !1)), (u = !1);
          continue;
        }
        if (n === 2) {
          if (((u = t), l.errorRecoveryDisabledLanes & u)) var c = 0;
          else
            (c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            t = c;
            l: {
              var i = l;
              n = Sn;
              var r = i.current.memoizedState.isDehydrated;
              if ((r && (_a(i, c).flags |= 256), (c = Xi(i, c, !1)), c !== 2)) {
                if (Di && !r) {
                  (i.errorRecoveryDisabledLanes |= u), (ke |= u), (n = 4);
                  break l;
                }
                (u = at),
                  (at = n),
                  u !== null && (at === null ? (at = u) : at.push.apply(at, u));
              }
              n = c;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          _a(l, 0), ze(l, t, 0, !0);
          break;
        }
        l: {
          switch (((a = l), (u = n), u)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ze(a, t, zt, !be);
              break l;
            case 2:
              at = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((n = qi + 300 - jt()), 10 < n)) {
            if ((ze(a, t, zt, !be), Xn(a, 0, !0) !== 0)) break l;
            a.timeoutHandle = ld(
              Eo.bind(null, a, e, at, Ou, Hi, t, zt, ke, Na, be, u, 2, -0, 0),
              n
            );
            break l;
          }
          Eo(a, e, at, Ou, Hi, t, zt, ke, Na, be, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ht(l);
  }
  function Eo(l, t, e, a, n, u, c, i, r, y, N, _, g, p) {
    if (
      ((l.timeoutHandle = -1),
      (_ = t.subtreeFlags),
      (_ & 8192 || (_ & 16785408) === 16785408) &&
        ((jn = { stylesheets: null, count: 0, unsuspend: bh }),
        po(t),
        (_ = xh()),
        _ !== null))
    ) {
      (l.cancelPendingCommit = _(
        Uo.bind(null, l, t, u, e, a, n, c, i, r, N, 1, g, p)
      )),
        ze(l, u, c, !y);
      return;
    }
    Uo(l, t, u, e, a, n, c, i, r);
  }
  function Bm(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        t.flags & 16384 &&
        ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var n = e[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!it(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = t.child), t.subtreeFlags & 16384 && e !== null))
        (e.return = t), (t = e);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ze(l, t, e, a) {
    (t &= ~Ui),
      (t &= ~ke),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes);
    for (var n = t; 0 < n; ) {
      var u = 31 - ct(n),
        c = 1 << u;
      (a[u] = -1), (n &= ~c);
    }
    e !== 0 && Cf(l, e, t);
  }
  function Ru() {
    return (sl & 6) === 0 ? (An(0), !1) : !0;
  }
  function Gi() {
    if (tl !== null) {
      if (rl === 0) var l = tl.return;
      else (l = tl), (Qt = we = null), ei(l), (pa = null), (mn = 0), (l = tl);
      for (; l !== null; ) no(l.alternate, l), (l = l.return);
      tl = null;
    }
  }
  function _a(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && ((l.timeoutHandle = -1), th(e)),
      (e = l.cancelPendingCommit),
      e !== null && ((l.cancelPendingCommit = null), e()),
      Gi(),
      (bl = l),
      (tl = e = Gt(l.current, null)),
      (al = t),
      (rl = 0),
      (ot = null),
      (be = !1),
      (Aa = Ya(l, t)),
      (Di = !1),
      (Na = zt = Ui = ke = pe = _l = 0),
      (at = Sn = null),
      (Hi = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ct(a),
          u = 1 << n;
        (t |= l[n]), (a &= ~u);
      }
    return (Wt = t), Pn(), e;
  }
  function _o(l, t) {
    (F = null),
      (z.H = bu),
      t === an || t === fu
        ? ((t = Zs()), (rl = 3))
        : t === ws
        ? ((t = Zs()), (rl = 4))
        : (rl =
            t === Vr
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (ot = t),
      tl === null && ((_l = 1), Au(l, gt(t, l.current)));
  }
  function Mo() {
    var l = z.H;
    return (z.H = bu), l === null ? bu : l;
  }
  function jo() {
    var l = z.A;
    return (z.A = qm), l;
  }
  function wi() {
    (_l = 4),
      be || ((al & 4194048) !== al && St.current !== null) || (Aa = !0),
      ((pe & 134217727) === 0 && (ke & 134217727) === 0) ||
        bl === null ||
        ze(bl, al, zt, !1);
  }
  function Xi(l, t, e) {
    var a = sl;
    sl |= 2;
    var n = Mo(),
      u = jo();
    (bl !== l || al !== t) && ((Ou = null), _a(l, t)), (t = !1);
    var c = _l;
    l: do
      try {
        if (rl !== 0 && tl !== null) {
          var i = tl,
            r = ot;
          switch (rl) {
            case 8:
              Gi(), (c = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var y = rl;
              if (((rl = 0), (ot = null), Ma(l, i, r, y), e && Aa)) {
                c = 0;
                break l;
              }
              break;
            default:
              (y = rl), (rl = 0), (ot = null), Ma(l, i, r, y);
          }
        }
        Ym(), (c = _l);
        break;
      } catch (N) {
        _o(l, N);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Qt = we = null),
      (sl = a),
      (z.H = n),
      (z.A = u),
      tl === null && ((bl = null), (al = 0), Pn()),
      c
    );
  }
  function Ym() {
    for (; tl !== null; ) Oo(tl);
  }
  function Gm(l, t) {
    var e = sl;
    sl |= 2;
    var a = Mo(),
      n = jo();
    bl !== l || al !== t
      ? ((Ou = null), (ju = jt() + 500), _a(l, t))
      : (Aa = Ya(l, t));
    l: do
      try {
        if (rl !== 0 && tl !== null) {
          t = tl;
          var u = ot;
          t: switch (rl) {
            case 1:
              (rl = 0), (ot = null), Ma(l, t, u, 1);
              break;
            case 2:
            case 9:
              if (Xs(u)) {
                (rl = 0), (ot = null), Ro(t);
                break;
              }
              (t = function () {
                (rl !== 2 && rl !== 9) || bl !== l || (rl = 7), Ht(l);
              }),
                u.then(t, t);
              break l;
            case 3:
              rl = 7;
              break l;
            case 4:
              rl = 5;
              break l;
            case 7:
              Xs(u)
                ? ((rl = 0), (ot = null), Ro(t))
                : ((rl = 0), (ot = null), Ma(l, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (tl.tag) {
                case 26:
                  c = tl.memoizedState;
                case 5:
                case 27:
                  var i = tl;
                  if (!c || dd(c)) {
                    (rl = 0), (ot = null);
                    var r = i.sibling;
                    if (r !== null) tl = r;
                    else {
                      var y = i.return;
                      y !== null ? ((tl = y), Du(y)) : (tl = null);
                    }
                    break t;
                  }
              }
              (rl = 0), (ot = null), Ma(l, t, u, 5);
              break;
            case 6:
              (rl = 0), (ot = null), Ma(l, t, u, 6);
              break;
            case 8:
              Gi(), (_l = 6);
              break l;
            default:
              throw Error(s(462));
          }
        }
        wm();
        break;
      } catch (N) {
        _o(l, N);
      }
    while (!0);
    return (
      (Qt = we = null),
      (z.H = a),
      (z.A = n),
      (sl = e),
      tl !== null ? 0 : ((bl = null), (al = 0), Pn(), _l)
    );
  }
  function wm() {
    for (; tl !== null && !f0(); ) Oo(tl);
  }
  function Oo(l) {
    var t = eo(l.alternate, l, Wt);
    (l.memoizedProps = l.pendingProps), t === null ? Du(l) : (tl = t);
  }
  function Ro(l) {
    var t = l,
      e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Wr(e, t, t.pendingProps, t.type, void 0, al);
        break;
      case 11:
        t = Wr(e, t, t.pendingProps, t.type.render, t.ref, al);
        break;
      case 5:
        ei(t);
      default:
        no(e, t), (t = tl = Rs(t, Wt)), (t = eo(e, t, Wt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? Du(l) : (tl = t);
  }
  function Ma(l, t, e, a) {
    (Qt = we = null), ei(t), (pa = null), (mn = 0);
    var n = t.return;
    try {
      if (jm(l, n, t, e, al)) {
        (_l = 1), Au(l, gt(e, l.current)), (tl = null);
        return;
      }
    } catch (u) {
      if (n !== null) throw ((tl = n), u);
      (_l = 1), Au(l, gt(e, l.current)), (tl = null);
      return;
    }
    t.flags & 32768
      ? (il || a === 1
          ? (l = !0)
          : Aa || (al & 536870912) !== 0
          ? (l = !1)
          : ((be = l = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = St.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Do(t, l))
      : Du(t);
  }
  function Du(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Do(t, be);
        return;
      }
      l = t.return;
      var e = Rm(t.alternate, t, Wt);
      if (e !== null) {
        tl = e;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        tl = t;
        return;
      }
      tl = t = l;
    } while (t !== null);
    _l === 0 && (_l = 5);
  }
  function Do(l, t) {
    do {
      var e = Dm(l.alternate, l);
      if (e !== null) {
        (e.flags &= 32767), (tl = e);
        return;
      }
      if (
        ((e = l.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        tl = l;
        return;
      }
      tl = l = e;
    } while (l !== null);
    (_l = 6), (tl = null);
  }
  function Uo(l, t, e, a, n, u, c, i, r) {
    l.cancelPendingCommit = null;
    do Uu();
    while (Ll !== 0);
    if ((sl & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === l.current) throw Error(s(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Rc),
        b0(l, e, u, c, i, r),
        l === bl && ((tl = bl = null), (al = 0)),
        (Ta = t),
        (Se = l),
        (Ea = e),
        (Ci = u),
        (Bi = n),
        (Ao = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            Vm(Yn, function () {
              return Yo(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = z.T), (z.T = null), (n = U.p), (U.p = 2), (c = sl), (sl |= 4);
        try {
          Um(l, t, e);
        } finally {
          (sl = c), (U.p = n), (z.T = a);
        }
      }
      (Ll = 1), Ho(), qo(), Co();
    }
  }
  function Ho() {
    if (Ll === 1) {
      Ll = 0;
      var l = Se,
        t = Ta,
        e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        (e = z.T), (z.T = null);
        var a = U.p;
        U.p = 2;
        var n = sl;
        sl |= 4;
        try {
          yo(t, l);
          var u = Pi,
            c = Ss(l.containerInfo),
            i = u.focusedElem,
            r = u.selectionRange;
          if (
            c !== i &&
            i &&
            i.ownerDocument &&
            xs(i.ownerDocument.documentElement, i)
          ) {
            if (r !== null && Ec(i)) {
              var y = r.start,
                N = r.end;
              if ((N === void 0 && (N = y), "selectionStart" in i))
                (i.selectionStart = y),
                  (i.selectionEnd = Math.min(N, i.value.length));
              else {
                var _ = i.ownerDocument || document,
                  g = (_ && _.defaultView) || window;
                if (g.getSelection) {
                  var p = g.getSelection(),
                    L = i.textContent.length,
                    Z = Math.min(r.start, L),
                    hl = r.end === void 0 ? Z : Math.min(r.end, L);
                  !p.extend && Z > hl && ((c = hl), (hl = Z), (Z = c));
                  var h = ps(i, Z),
                    m = ps(i, hl);
                  if (
                    h &&
                    m &&
                    (p.rangeCount !== 1 ||
                      p.anchorNode !== h.node ||
                      p.anchorOffset !== h.offset ||
                      p.focusNode !== m.node ||
                      p.focusOffset !== m.offset)
                  ) {
                    var v = _.createRange();
                    v.setStart(h.node, h.offset),
                      p.removeAllRanges(),
                      Z > hl
                        ? (p.addRange(v), p.extend(m.node, m.offset))
                        : (v.setEnd(m.node, m.offset), p.addRange(v));
                  }
                }
              }
            }
            for (_ = [], p = i; (p = p.parentNode); )
              p.nodeType === 1 &&
                _.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
            for (
              typeof i.focus == "function" && i.focus(), i = 0;
              i < _.length;
              i++
            ) {
              var E = _[i];
              (E.element.scrollLeft = E.left), (E.element.scrollTop = E.top);
            }
          }
          (Lu = !!Ii), (Pi = Ii = null);
        } finally {
          (sl = n), (U.p = a), (z.T = e);
        }
      }
      (l.current = t), (Ll = 2);
    }
  }
  function qo() {
    if (Ll === 2) {
      Ll = 0;
      var l = Se,
        t = Ta,
        e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        (e = z.T), (z.T = null);
        var a = U.p;
        U.p = 2;
        var n = sl;
        sl |= 4;
        try {
          oo(l, t.alternate, t);
        } finally {
          (sl = n), (U.p = a), (z.T = e);
        }
      }
      Ll = 3;
    }
  }
  function Co() {
    if (Ll === 4 || Ll === 3) {
      (Ll = 0), s0();
      var l = Se,
        t = Ta,
        e = Ea,
        a = Ao;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ll = 5)
        : ((Ll = 0), (Ta = Se = null), Bo(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (
        (n === 0 && (xe = null),
        uc(e),
        (t = t.stateNode),
        ut && typeof ut.onCommitFiberRoot == "function")
      )
        try {
          ut.onCommitFiberRoot(Ba, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = z.T), (n = U.p), (U.p = 2), (z.T = null);
        try {
          for (var u = l.onRecoverableError, c = 0; c < a.length; c++) {
            var i = a[c];
            u(i.value, { componentStack: i.stack });
          }
        } finally {
          (z.T = t), (U.p = n);
        }
      }
      (Ea & 3) !== 0 && Uu(),
        Ht(l),
        (n = l.pendingLanes),
        (e & 4194090) !== 0 && (n & 42) !== 0
          ? l === Yi
            ? zn++
            : ((zn = 0), (Yi = l))
          : (zn = 0),
        An(0);
    }
  }
  function Bo(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), tn(t)));
  }
  function Uu(l) {
    return Ho(), qo(), Co(), Yo();
  }
  function Yo() {
    if (Ll !== 5) return !1;
    var l = Se,
      t = Ci;
    Ci = 0;
    var e = uc(Ea),
      a = z.T,
      n = U.p;
    try {
      (U.p = 32 > e ? 32 : e), (z.T = null), (e = Bi), (Bi = null);
      var u = Se,
        c = Ea;
      if (((Ll = 0), (Ta = Se = null), (Ea = 0), (sl & 6) !== 0))
        throw Error(s(331));
      var i = sl;
      if (
        ((sl |= 4),
        So(u.current),
        bo(u, u.current, c, e),
        (sl = i),
        An(0, !1),
        ut && typeof ut.onPostCommitFiberRoot == "function")
      )
        try {
          ut.onPostCommitFiberRoot(Ba, u);
        } catch {}
      return !0;
    } finally {
      (U.p = n), (z.T = a), Bo(l, t);
    }
  }
  function Go(l, t, e) {
    (t = gt(e, t)),
      (t = yi(l.stateNode, t, 2)),
      (l = oe(l, t, 2)),
      l !== null && (Ga(l, 2), Ht(l));
  }
  function yl(l, t, e) {
    if (l.tag === 3) Go(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Go(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (xe === null || !xe.has(a)))
          ) {
            (l = gt(e, l)),
              (e = Qr(2)),
              (a = oe(t, e, 2)),
              a !== null && (Zr(e, a, t, l), Ga(a, 2), Ht(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Qi(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Cm();
      var n = new Set();
      a.set(t, n);
    } else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n));
    n.has(e) ||
      ((Di = !0), n.add(e), (l = Xm.bind(null, l, t, e)), t.then(l, l));
  }
  function Xm(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & e),
      (l.warmLanes &= ~e),
      bl === l &&
        (al & e) === e &&
        (_l === 4 || (_l === 3 && (al & 62914560) === al && 300 > jt() - qi)
          ? (sl & 2) === 0 && _a(l, 0)
          : (Ui |= e),
        Na === al && (Na = 0)),
      Ht(l);
  }
  function wo(l, t) {
    t === 0 && (t = qf()), (l = sa(l, t)), l !== null && (Ga(l, t), Ht(l));
  }
  function Qm(l) {
    var t = l.memoizedState,
      e = 0;
    t !== null && (e = t.retryLane), wo(l, e);
  }
  function Zm(l, t) {
    var e = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode,
          n = l.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(t), wo(l, e);
  }
  function Vm(l, t) {
    return tc(l, t);
  }
  var Hu = null,
    ja = null,
    Zi = !1,
    qu = !1,
    Vi = !1,
    Ke = 0;
  function Ht(l) {
    l !== ja &&
      l.next === null &&
      (ja === null ? (Hu = ja = l) : (ja = ja.next = l)),
      (qu = !0),
      Zi || ((Zi = !0), km());
  }
  function An(l, t) {
    if (!Vi && qu) {
      Vi = !0;
      do
        for (var e = !1, a = Hu; a !== null; ) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes,
                i = a.pingedLanes;
              (u = (1 << (31 - ct(42 | l) + 1)) - 1),
                (u &= n & ~(c & ~i)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((e = !0), Vo(a, u));
          } else
            (u = al),
              (u = Xn(
                a,
                a === bl ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Ya(a, u) || ((e = !0), Vo(a, u));
          a = a.next;
        }
      while (e);
      Vi = !1;
    }
  }
  function Lm() {
    Xo();
  }
  function Xo() {
    qu = Zi = !1;
    var l = 0;
    Ke !== 0 && (lh() && (l = Ke), (Ke = 0));
    for (var t = jt(), e = null, a = Hu; a !== null; ) {
      var n = a.next,
        u = Qo(a, t);
      u === 0
        ? ((a.next = null),
          e === null ? (Hu = n) : (e.next = n),
          n === null && (ja = e))
        : ((e = a), (l !== 0 || (u & 3) !== 0) && (qu = !0)),
        (a = n);
    }
    An(l);
  }
  function Qo(l, t) {
    for (
      var e = l.suspendedLanes,
        a = l.pingedLanes,
        n = l.expirationTimes,
        u = l.pendingLanes & -62914561;
      0 < u;

    ) {
      var c = 31 - ct(u),
        i = 1 << c,
        r = n[c];
      r === -1
        ? ((i & e) === 0 || (i & a) !== 0) && (n[c] = g0(i, t))
        : r <= t && (l.expiredLanes |= i),
        (u &= ~i);
    }
    if (
      ((t = bl),
      (e = al),
      (e = Xn(
        l,
        l === t ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (a = l.callbackNode),
      e === 0 ||
        (l === t && (rl === 2 || rl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && ec(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((e & 3) === 0 || Ya(l, e)) {
      if (((t = e & -e), t === l.callbackPriority)) return t;
      switch ((a !== null && ec(a), uc(e))) {
        case 2:
        case 8:
          e = Df;
          break;
        case 32:
          e = Yn;
          break;
        case 268435456:
          e = Uf;
          break;
        default:
          e = Yn;
      }
      return (
        (a = Zo.bind(null, l)),
        (e = tc(e, a)),
        (l.callbackPriority = t),
        (l.callbackNode = e),
        t
      );
    }
    return (
      a !== null && a !== null && ec(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function Zo(l, t) {
    if (Ll !== 0 && Ll !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var e = l.callbackNode;
    if (Uu() && l.callbackNode !== e) return null;
    var a = al;
    return (
      (a = Xn(
        l,
        l === bl ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (To(l, a, t),
          Qo(l, jt()),
          l.callbackNode != null && l.callbackNode === e
            ? Zo.bind(null, l)
            : null)
    );
  }
  function Vo(l, t) {
    if (Uu()) return null;
    To(l, t, !0);
  }
  function km() {
    eh(function () {
      (sl & 6) !== 0 ? tc(Rf, Lm) : Xo();
    });
  }
  function Li() {
    return Ke === 0 && (Ke = Hf()), Ke;
  }
  function Lo(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : kn("" + l);
  }
  function ko(l, t) {
    var e = t.ownerDocument.createElement("input");
    return (
      (e.name = t.name),
      (e.value = t.value),
      l.id && e.setAttribute("form", l.id),
      t.parentNode.insertBefore(e, t),
      (l = new FormData(l)),
      e.parentNode.removeChild(e),
      l
    );
  }
  function Km(l, t, e, a, n) {
    if (t === "submit" && e && e.stateNode === n) {
      var u = Lo((n[Pl] || null).action),
        c = a.submitter;
      c &&
        ((t = (t = c[Pl] || null)
          ? Lo(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((u = t), (c = null)));
      var i = new Wn("action", "action", null, a, n);
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ke !== 0) {
                  var r = c ? ko(n, c) : new FormData(n);
                  oi(
                    e,
                    { pending: !0, data: r, method: n.method, action: u },
                    null,
                    r
                  );
                }
              } else
                typeof u == "function" &&
                  (i.preventDefault(),
                  (r = c ? ko(n, c) : new FormData(n)),
                  oi(
                    e,
                    { pending: !0, data: r, method: n.method, action: u },
                    u,
                    r
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var ki = 0; ki < Oc.length; ki++) {
    var Ki = Oc[ki],
      Jm = Ki.toLowerCase(),
      $m = Ki[0].toUpperCase() + Ki.slice(1);
    Tt(Jm, "on" + $m);
  }
  Tt(Ns, "onAnimationEnd"),
    Tt(Ts, "onAnimationIteration"),
    Tt(Es, "onAnimationStart"),
    Tt("dblclick", "onDoubleClick"),
    Tt("focusin", "onFocus"),
    Tt("focusout", "onBlur"),
    Tt(dm, "onTransitionRun"),
    Tt(mm, "onTransitionStart"),
    Tt(hm, "onTransitionCancel"),
    Tt(_s, "onTransitionEnd"),
    Pe("onMouseEnter", ["mouseout", "mouseover"]),
    Pe("onMouseLeave", ["mouseout", "mouseover"]),
    Pe("onPointerEnter", ["pointerout", "pointerover"]),
    Pe("onPointerLeave", ["pointerout", "pointerover"]),
    Re(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Re(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Re("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Re(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Re(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Re(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Nn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Wm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Nn)
    );
  function Ko(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e],
        n = a.event;
      a = a.listeners;
      l: {
        var u = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var i = a[c],
              r = i.instance,
              y = i.currentTarget;
            if (((i = i.listener), r !== u && n.isPropagationStopped()))
              break l;
            (u = i), (n.currentTarget = y);
            try {
              u(n);
            } catch (N) {
              zu(N);
            }
            (n.currentTarget = null), (u = r);
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((i = a[c]),
              (r = i.instance),
              (y = i.currentTarget),
              (i = i.listener),
              r !== u && n.isPropagationStopped())
            )
              break l;
            (u = i), (n.currentTarget = y);
            try {
              u(n);
            } catch (N) {
              zu(N);
            }
            (n.currentTarget = null), (u = r);
          }
      }
    }
  }
  function el(l, t) {
    var e = t[cc];
    e === void 0 && (e = t[cc] = new Set());
    var a = l + "__bubble";
    e.has(a) || (Jo(t, l, 2, !1), e.add(a));
  }
  function Ji(l, t, e) {
    var a = 0;
    t && (a |= 4), Jo(e, l, a, t);
  }
  var Cu = "_reactListening" + Math.random().toString(36).slice(2);
  function $i(l) {
    if (!l[Cu]) {
      (l[Cu] = !0),
        wf.forEach(function (e) {
          e !== "selectionchange" && (Wm.has(e) || Ji(e, !1, l), Ji(e, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Cu] || ((t[Cu] = !0), Ji("selectionchange", !1, t));
    }
  }
  function Jo(l, t, e, a) {
    switch (bd(t)) {
      case 2:
        var n = Ah;
        break;
      case 8:
        n = Nh;
        break;
      default:
        n = rf;
    }
    (e = n.bind(null, t, e, l)),
      (n = void 0),
      !gc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? l.addEventListener(t, e, { capture: !0, passive: n })
          : l.addEventListener(t, e, !0)
        : n !== void 0
        ? l.addEventListener(t, e, { passive: n })
        : l.addEventListener(t, e, !1);
  }
  function Wi(l, t, e, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var i = a.stateNode.containerInfo;
          if (i === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var r = c.tag;
              if ((r === 3 || r === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; i !== null; ) {
            if (((c = We(i)), c === null)) return;
            if (((r = c.tag), r === 5 || r === 6 || r === 26 || r === 27)) {
              a = u = c;
              continue l;
            }
            i = i.parentNode;
          }
        }
        a = a.return;
      }
    ls(function () {
      var y = u,
        N = vc(e),
        _ = [];
      l: {
        var g = Ms.get(l);
        if (g !== void 0) {
          var p = Wn,
            L = l;
          switch (l) {
            case "keypress":
              if (Jn(e) === 0) break l;
            case "keydown":
            case "keyup":
              p = V0;
              break;
            case "focusin":
              (L = "focus"), (p = Sc);
              break;
            case "focusout":
              (L = "blur"), (p = Sc);
              break;
            case "beforeblur":
            case "afterblur":
              p = Sc;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = as;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = D0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = K0;
              break;
            case Ns:
            case Ts:
            case Es:
              p = q0;
              break;
            case _s:
              p = $0;
              break;
            case "scroll":
            case "scrollend":
              p = O0;
              break;
            case "wheel":
              p = F0;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = B0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = us;
              break;
            case "toggle":
            case "beforetoggle":
              p = P0;
          }
          var Z = (t & 4) !== 0,
            hl = !Z && (l === "scroll" || l === "scrollend"),
            h = Z ? (g !== null ? g + "Capture" : null) : g;
          Z = [];
          for (var m = y, v; m !== null; ) {
            var E = m;
            if (
              ((v = E.stateNode),
              (E = E.tag),
              (E !== 5 && E !== 26 && E !== 27) ||
                v === null ||
                h === null ||
                ((E = Qa(m, h)), E != null && Z.push(Tn(m, E, v))),
              hl)
            )
              break;
            m = m.return;
          }
          0 < Z.length &&
            ((g = new p(g, L, null, e, N)), _.push({ event: g, listeners: Z }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((g = l === "mouseover" || l === "pointerover"),
            (p = l === "mouseout" || l === "pointerout"),
            g &&
              e !== hc &&
              (L = e.relatedTarget || e.fromElement) &&
              (We(L) || L[$e]))
          )
            break l;
          if (
            (p || g) &&
            ((g =
              N.window === N
                ? N
                : (g = N.ownerDocument)
                ? g.defaultView || g.parentWindow
                : window),
            p
              ? ((L = e.relatedTarget || e.toElement),
                (p = y),
                (L = L ? We(L) : null),
                L !== null &&
                  ((hl = j(L)),
                  (Z = L.tag),
                  L !== hl || (Z !== 5 && Z !== 27 && Z !== 6)) &&
                  (L = null))
              : ((p = null), (L = y)),
            p !== L)
          ) {
            if (
              ((Z = as),
              (E = "onMouseLeave"),
              (h = "onMouseEnter"),
              (m = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((Z = us),
                (E = "onPointerLeave"),
                (h = "onPointerEnter"),
                (m = "pointer")),
              (hl = p == null ? g : Xa(p)),
              (v = L == null ? g : Xa(L)),
              (g = new Z(E, m + "leave", p, e, N)),
              (g.target = hl),
              (g.relatedTarget = v),
              (E = null),
              We(N) === y &&
                ((Z = new Z(h, m + "enter", L, e, N)),
                (Z.target = v),
                (Z.relatedTarget = hl),
                (E = Z)),
              (hl = E),
              p && L)
            )
              t: {
                for (Z = p, h = L, m = 0, v = Z; v; v = Oa(v)) m++;
                for (v = 0, E = h; E; E = Oa(E)) v++;
                for (; 0 < m - v; ) (Z = Oa(Z)), m--;
                for (; 0 < v - m; ) (h = Oa(h)), v--;
                for (; m--; ) {
                  if (Z === h || (h !== null && Z === h.alternate)) break t;
                  (Z = Oa(Z)), (h = Oa(h));
                }
                Z = null;
              }
            else Z = null;
            p !== null && $o(_, g, p, Z, !1),
              L !== null && hl !== null && $o(_, hl, L, Z, !0);
          }
        }
        l: {
          if (
            ((g = y ? Xa(y) : window),
            (p = g.nodeName && g.nodeName.toLowerCase()),
            p === "select" || (p === "input" && g.type === "file"))
          )
            var B = ms;
          else if (os(g))
            if (hs) B = sm;
            else {
              B = im;
              var P = cm;
            }
          else
            (p = g.nodeName),
              !p ||
              p.toLowerCase() !== "input" ||
              (g.type !== "checkbox" && g.type !== "radio")
                ? y && mc(y.elementType) && (B = ms)
                : (B = fm);
          if (B && (B = B(l, y))) {
            ds(_, B, e, N);
            break l;
          }
          P && P(l, g, y),
            l === "focusout" &&
              y &&
              g.type === "number" &&
              y.memoizedProps.value != null &&
              dc(g, "number", g.value);
        }
        switch (((P = y ? Xa(y) : window), l)) {
          case "focusin":
            (os(P) || P.contentEditable === "true") &&
              ((ca = P), (_c = y), (Wa = null));
            break;
          case "focusout":
            Wa = _c = ca = null;
            break;
          case "mousedown":
            Mc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Mc = !1), zs(_, e, N);
            break;
          case "selectionchange":
            if (om) break;
          case "keydown":
          case "keyup":
            zs(_, e, N);
        }
        var X;
        if (Ac)
          l: {
            switch (l) {
              case "compositionstart":
                var V = "onCompositionStart";
                break l;
              case "compositionend":
                V = "onCompositionEnd";
                break l;
              case "compositionupdate":
                V = "onCompositionUpdate";
                break l;
            }
            V = void 0;
          }
        else
          ua
            ? ss(l, e) && (V = "onCompositionEnd")
            : l === "keydown" &&
              e.keyCode === 229 &&
              (V = "onCompositionStart");
        V &&
          (cs &&
            e.locale !== "ko" &&
            (ua || V !== "onCompositionStart"
              ? V === "onCompositionEnd" && ua && (X = ts())
              : ((ie = N),
                (bc = "value" in ie ? ie.value : ie.textContent),
                (ua = !0))),
          (P = Bu(y, V)),
          0 < P.length &&
            ((V = new ns(V, l, null, e, N)),
            _.push({ event: V, listeners: P }),
            X ? (V.data = X) : ((X = rs(e)), X !== null && (V.data = X)))),
          (X = tm ? em(l, e) : am(l, e)) &&
            ((V = Bu(y, "onBeforeInput")),
            0 < V.length &&
              ((P = new ns("onBeforeInput", "beforeinput", null, e, N)),
              _.push({ event: P, listeners: V }),
              (P.data = X))),
          Km(_, l, y, e, N);
      }
      Ko(_, t);
    });
  }
  function Tn(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function Bu(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var n = l,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Qa(l, e)),
          n != null && a.unshift(Tn(l, n, u)),
          (n = Qa(l, t)),
          n != null && a.push(Tn(l, n, u))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function Oa(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function $o(l, t, e, a, n) {
    for (var u = t._reactName, c = []; e !== null && e !== a; ) {
      var i = e,
        r = i.alternate,
        y = i.stateNode;
      if (((i = i.tag), r !== null && r === a)) break;
      (i !== 5 && i !== 26 && i !== 27) ||
        y === null ||
        ((r = y),
        n
          ? ((y = Qa(e, u)), y != null && c.unshift(Tn(e, y, r)))
          : n || ((y = Qa(e, u)), y != null && c.push(Tn(e, y, r)))),
        (e = e.return);
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var Fm = /\r\n?/g,
    Im = /\u0000|\uFFFD/g;
  function Wo(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Fm,
        `
`
      )
      .replace(Im, "");
  }
  function Fo(l, t) {
    return (t = Wo(t)), Wo(l) === t;
  }
  function Yu() {}
  function ml(l, t, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || ea(l, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            ea(l, "" + a);
        break;
      case "className":
        Zn(l, "class", a);
        break;
      case "tabIndex":
        Zn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Zn(l, e, a);
        break;
      case "style":
        If(l, a, u);
        break;
      case "data":
        if (t !== "object") {
          Zn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(e);
          break;
        }
        (a = kn("" + a)), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (e === "formAction"
              ? (t !== "input" && ml(l, t, "name", n.name, n, null),
                ml(l, t, "formEncType", n.formEncType, n, null),
                ml(l, t, "formMethod", n.formMethod, n, null),
                ml(l, t, "formTarget", n.formTarget, n, null))
              : (ml(l, t, "encType", n.encType, n, null),
                ml(l, t, "method", n.method, n, null),
                ml(l, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        (a = kn("" + a)), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Yu);
        break;
      case "onScroll":
        a != null && el("scroll", l);
        break;
      case "onScrollEnd":
        a != null && el("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((e = a.__html), e != null)) {
            if (n.children != null) throw Error(s(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (e = kn("" + a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "" + a)
          : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "")
          : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(e, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(e)
          : l.setAttribute(e, a);
        break;
      case "popover":
        el("beforetoggle", l), el("toggle", l), Qn(l, "popover", a);
        break;
      case "xlinkActuate":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Qn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = M0.get(e) || e), Qn(l, e, a));
    }
  }
  function Fi(l, t, e, a, n, u) {
    switch (e) {
      case "style":
        If(l, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((e = a.__html), e != null)) {
            if (n.children != null) throw Error(s(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? ea(l, a)
          : (typeof a == "number" || typeof a == "bigint") && ea(l, "" + a);
        break;
      case "onScroll":
        a != null && el("scroll", l);
        break;
      case "onScrollEnd":
        a != null && el("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Yu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Xf.hasOwnProperty(e))
          l: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((n = e.endsWith("Capture")),
              (t = e.slice(2, n ? e.length - 7 : void 0)),
              (u = l[Pl] || null),
              (u = u != null ? u[e] : null),
              typeof u == "function" && l.removeEventListener(t, u, n),
              typeof a == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (e in l
                  ? (l[e] = null)
                  : l.hasAttribute(e) && l.removeAttribute(e)),
                l.addEventListener(t, a, n);
              break l;
            }
            e in l
              ? (l[e] = a)
              : a === !0
              ? l.setAttribute(e, "")
              : Qn(l, e, a);
          }
    }
  }
  function kl(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        el("error", l), el("load", l);
        var a = !1,
          n = !1,
          u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var c = e[u];
            if (c != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  ml(l, t, u, c, e, null);
              }
          }
        n && ml(l, t, "srcSet", e.srcSet, e, null),
          a && ml(l, t, "src", e.src, e, null);
        return;
      case "input":
        el("invalid", l);
        var i = (u = c = n = null),
          r = null,
          y = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var N = e[a];
            if (N != null)
              switch (a) {
                case "name":
                  n = N;
                  break;
                case "type":
                  c = N;
                  break;
                case "checked":
                  r = N;
                  break;
                case "defaultChecked":
                  y = N;
                  break;
                case "value":
                  u = N;
                  break;
                case "defaultValue":
                  i = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null) throw Error(s(137, t));
                  break;
                default:
                  ml(l, t, a, N, e, null);
              }
          }
        Jf(l, u, i, r, y, c, n, !1), Vn(l);
        return;
      case "select":
        el("invalid", l), (a = c = u = null);
        for (n in e)
          if (e.hasOwnProperty(n) && ((i = e[n]), i != null))
            switch (n) {
              case "value":
                u = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                a = i;
              default:
                ml(l, t, n, i, e, null);
            }
        (t = u),
          (e = c),
          (l.multiple = !!a),
          t != null ? ta(l, !!a, t, !1) : e != null && ta(l, !!a, e, !0);
        return;
      case "textarea":
        el("invalid", l), (u = n = a = null);
        for (c in e)
          if (e.hasOwnProperty(c) && ((i = e[c]), i != null))
            switch (c) {
              case "value":
                a = i;
                break;
              case "defaultValue":
                n = i;
                break;
              case "children":
                u = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(s(91));
                break;
              default:
                ml(l, t, c, i, e, null);
            }
        Wf(l, a, n, u), Vn(l);
        return;
      case "option":
        for (r in e)
          if (e.hasOwnProperty(r) && ((a = e[r]), a != null))
            switch (r) {
              case "selected":
                l.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                ml(l, t, r, a, e, null);
            }
        return;
      case "dialog":
        el("beforetoggle", l), el("toggle", l), el("cancel", l), el("close", l);
        break;
      case "iframe":
      case "object":
        el("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Nn.length; a++) el(Nn[a], l);
        break;
      case "image":
        el("error", l), el("load", l);
        break;
      case "details":
        el("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        el("error", l), el("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in e)
          if (e.hasOwnProperty(y) && ((a = e[y]), a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                ml(l, t, y, a, e, null);
            }
        return;
      default:
        if (mc(t)) {
          for (N in e)
            e.hasOwnProperty(N) &&
              ((a = e[N]), a !== void 0 && Fi(l, t, N, a, e, void 0));
          return;
        }
    }
    for (i in e)
      e.hasOwnProperty(i) && ((a = e[i]), a != null && ml(l, t, i, a, e, null));
  }
  function Pm(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          c = null,
          i = null,
          r = null,
          y = null,
          N = null;
        for (p in e) {
          var _ = e[p];
          if (e.hasOwnProperty(p) && _ != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = _;
              default:
                a.hasOwnProperty(p) || ml(l, t, p, null, a, _);
            }
        }
        for (var g in a) {
          var p = a[g];
          if (((_ = e[g]), a.hasOwnProperty(g) && (p != null || _ != null)))
            switch (g) {
              case "type":
                u = p;
                break;
              case "name":
                n = p;
                break;
              case "checked":
                y = p;
                break;
              case "defaultChecked":
                N = p;
                break;
              case "value":
                c = p;
                break;
              case "defaultValue":
                i = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(s(137, t));
                break;
              default:
                p !== _ && ml(l, t, g, p, a, _);
            }
        }
        oc(l, c, i, r, y, N, u, n);
        return;
      case "select":
        p = c = i = g = null;
        for (u in e)
          if (((r = e[u]), e.hasOwnProperty(u) && r != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                p = r;
              default:
                a.hasOwnProperty(u) || ml(l, t, u, null, a, r);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (r = e[n]),
            a.hasOwnProperty(n) && (u != null || r != null))
          )
            switch (n) {
              case "value":
                g = u;
                break;
              case "defaultValue":
                i = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== r && ml(l, t, n, u, a, r);
            }
        (t = i),
          (e = c),
          (a = p),
          g != null
            ? ta(l, !!e, g, !1)
            : !!a != !!e &&
              (t != null ? ta(l, !!e, t, !0) : ta(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        p = g = null;
        for (i in e)
          if (
            ((n = e[i]),
            e.hasOwnProperty(i) && n != null && !a.hasOwnProperty(i))
          )
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                ml(l, t, i, null, a, n);
            }
        for (c in a)
          if (
            ((n = a[c]),
            (u = e[c]),
            a.hasOwnProperty(c) && (n != null || u != null))
          )
            switch (c) {
              case "value":
                g = n;
                break;
              case "defaultValue":
                p = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(s(91));
                break;
              default:
                n !== u && ml(l, t, c, n, a, u);
            }
        $f(l, g, p);
        return;
      case "option":
        for (var L in e)
          if (
            ((g = e[L]),
            e.hasOwnProperty(L) && g != null && !a.hasOwnProperty(L))
          )
            switch (L) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ml(l, t, L, null, a, g);
            }
        for (r in a)
          if (
            ((g = a[r]),
            (p = e[r]),
            a.hasOwnProperty(r) && g !== p && (g != null || p != null))
          )
            switch (r) {
              case "selected":
                l.selected =
                  g && typeof g != "function" && typeof g != "symbol";
                break;
              default:
                ml(l, t, r, g, a, p);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Z in e)
          (g = e[Z]),
            e.hasOwnProperty(Z) &&
              g != null &&
              !a.hasOwnProperty(Z) &&
              ml(l, t, Z, null, a, g);
        for (y in a)
          if (
            ((g = a[y]),
            (p = e[y]),
            a.hasOwnProperty(y) && g !== p && (g != null || p != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(s(137, t));
                break;
              default:
                ml(l, t, y, g, a, p);
            }
        return;
      default:
        if (mc(t)) {
          for (var hl in e)
            (g = e[hl]),
              e.hasOwnProperty(hl) &&
                g !== void 0 &&
                !a.hasOwnProperty(hl) &&
                Fi(l, t, hl, void 0, a, g);
          for (N in a)
            (g = a[N]),
              (p = e[N]),
              !a.hasOwnProperty(N) ||
                g === p ||
                (g === void 0 && p === void 0) ||
                Fi(l, t, N, g, a, p);
          return;
        }
    }
    for (var h in e)
      (g = e[h]),
        e.hasOwnProperty(h) &&
          g != null &&
          !a.hasOwnProperty(h) &&
          ml(l, t, h, null, a, g);
    for (_ in a)
      (g = a[_]),
        (p = e[_]),
        !a.hasOwnProperty(_) ||
          g === p ||
          (g == null && p == null) ||
          ml(l, t, _, g, a, p);
  }
  var Ii = null,
    Pi = null;
  function Gu(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Io(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Po(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function lf(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var tf = null;
  function lh() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === tf
        ? !1
        : ((tf = l), !0)
      : ((tf = null), !1);
  }
  var ld = typeof setTimeout == "function" ? setTimeout : void 0,
    th = typeof clearTimeout == "function" ? clearTimeout : void 0,
    td = typeof Promise == "function" ? Promise : void 0,
    eh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof td < "u"
        ? function (l) {
            return td.resolve(null).then(l).catch(ah);
          }
        : ld;
  function ah(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function Ae(l) {
    return l === "head";
  }
  function ed(l, t) {
    var e = t,
      a = 0,
      n = 0;
    do {
      var u = e.nextSibling;
      if ((l.removeChild(e), u && u.nodeType === 8))
        if (((e = u.data), e === "/$")) {
          if (0 < a && 8 > a) {
            e = a;
            var c = l.ownerDocument;
            if ((e & 1 && En(c.documentElement), e & 2 && En(c.body), e & 4))
              for (e = c.head, En(e), c = e.firstChild; c; ) {
                var i = c.nextSibling,
                  r = c.nodeName;
                c[wa] ||
                  r === "SCRIPT" ||
                  r === "STYLE" ||
                  (r === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  e.removeChild(c),
                  (c = i);
              }
          }
          if (n === 0) {
            l.removeChild(u), Hn(t);
            return;
          }
          n--;
        } else
          e === "$" || e === "$?" || e === "$!"
            ? n++
            : (a = e.charCodeAt(0) - 48);
      else a = 0;
      e = u;
    } while (e);
    Hn(t);
  }
  function ef(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (((t = t.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ef(e), ic(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function nh(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var n = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[wa])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((u = l.getAttribute("rel")),
                u === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                l.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                l.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                l.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((u = l.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  l.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  l.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === u) return l;
      } else return l;
      if (((l = _t(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function uh(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !e) ||
        ((l = _t(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function af(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState === "complete")
    );
  }
  function ch(l, t) {
    var e = l.ownerDocument;
    if (l.data !== "$?" || e.readyState === "complete") t();
    else {
      var a = function () {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a);
    }
  }
  function _t(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var nf = null;
  function ad(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (t === 0) return l;
          t--;
        } else e === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function nd(l, t, e) {
    switch (((t = Gu(e)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(s(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(s(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(s(454));
        return l;
      default:
        throw Error(s(451));
    }
  }
  function En(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    ic(l);
  }
  var At = new Map(),
    ud = new Set();
  function wu(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Ft = U.d;
  U.d = { f: ih, r: fh, D: sh, C: rh, L: oh, m: dh, X: hh, S: mh, M: vh };
  function ih() {
    var l = Ft.f(),
      t = Ru();
    return l || t;
  }
  function fh(l) {
    var t = Fe(l);
    t !== null && t.tag === 5 && t.type === "form" ? Nr(t) : Ft.r(l);
  }
  var Ra = typeof document > "u" ? null : document;
  function cd(l, t, e) {
    var a = Ra;
    if (a && typeof t == "string" && t) {
      var n = yt(t);
      (n = 'link[rel="' + l + '"][href="' + n + '"]'),
        typeof e == "string" && (n += '[crossorigin="' + e + '"]'),
        ud.has(n) ||
          (ud.add(n),
          (l = { rel: l, crossOrigin: e, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            kl(t, "link", l),
            wl(t),
            a.head.appendChild(t)));
    }
  }
  function sh(l) {
    Ft.D(l), cd("dns-prefetch", l, null);
  }
  function rh(l, t) {
    Ft.C(l, t), cd("preconnect", l, t);
  }
  function oh(l, t, e) {
    Ft.L(l, t, e);
    var a = Ra;
    if (a && l && t) {
      var n = 'link[rel="preload"][as="' + yt(t) + '"]';
      t === "image" && e && e.imageSrcSet
        ? ((n += '[imagesrcset="' + yt(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (n += '[imagesizes="' + yt(e.imageSizes) + '"]'))
        : (n += '[href="' + yt(l) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = Da(l);
          break;
        case "script":
          u = Ua(l);
      }
      At.has(u) ||
        ((l = D(
          {
            rel: "preload",
            href: t === "image" && e && e.imageSrcSet ? void 0 : l,
            as: t,
          },
          e
        )),
        At.set(u, l),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(_n(u))) ||
          (t === "script" && a.querySelector(Mn(u))) ||
          ((t = a.createElement("link")),
          kl(t, "link", l),
          wl(t),
          a.head.appendChild(t)));
    }
  }
  function dh(l, t) {
    Ft.m(l, t);
    var e = Ra;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + yt(a) + '"][href="' + yt(l) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ua(l);
      }
      if (
        !At.has(u) &&
        ((l = D({ rel: "modulepreload", href: l }, t)),
        At.set(u, l),
        e.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Mn(u))) return;
        }
        (a = e.createElement("link")),
          kl(a, "link", l),
          wl(a),
          e.head.appendChild(a);
      }
    }
  }
  function mh(l, t, e) {
    Ft.S(l, t, e);
    var a = Ra;
    if (a && l) {
      var n = Ie(a).hoistableStyles,
        u = Da(l);
      t = t || "default";
      var c = n.get(u);
      if (!c) {
        var i = { loading: 0, preload: null };
        if ((c = a.querySelector(_n(u)))) i.loading = 5;
        else {
          (l = D({ rel: "stylesheet", href: l, "data-precedence": t }, e)),
            (e = At.get(u)) && uf(l, e);
          var r = (c = a.createElement("link"));
          wl(r),
            kl(r, "link", l),
            (r._p = new Promise(function (y, N) {
              (r.onload = y), (r.onerror = N);
            })),
            r.addEventListener("load", function () {
              i.loading |= 1;
            }),
            r.addEventListener("error", function () {
              i.loading |= 2;
            }),
            (i.loading |= 4),
            Xu(c, t, a);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: i }),
          n.set(u, c);
      }
    }
  }
  function hh(l, t) {
    Ft.X(l, t);
    var e = Ra;
    if (e && l) {
      var a = Ie(e).hoistableScripts,
        n = Ua(l),
        u = a.get(n);
      u ||
        ((u = e.querySelector(Mn(n))),
        u ||
          ((l = D({ src: l, async: !0 }, t)),
          (t = At.get(n)) && cf(l, t),
          (u = e.createElement("script")),
          wl(u),
          kl(u, "link", l),
          e.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function vh(l, t) {
    Ft.M(l, t);
    var e = Ra;
    if (e && l) {
      var a = Ie(e).hoistableScripts,
        n = Ua(l),
        u = a.get(n);
      u ||
        ((u = e.querySelector(Mn(n))),
        u ||
          ((l = D({ src: l, async: !0, type: "module" }, t)),
          (t = At.get(n)) && cf(l, t),
          (u = e.createElement("script")),
          wl(u),
          kl(u, "link", l),
          e.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function id(l, t, e, a) {
    var n = (n = K.current) ? wu(n) : null;
    if (!n) throw Error(s(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((t = Da(e.href)),
            (e = Ie(n).hoistableStyles),
            (a = e.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          l = Da(e.href);
          var u = Ie(n).hoistableStyles,
            c = u.get(l);
          if (
            (c ||
              ((n = n.ownerDocument || n),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(l, c),
              (u = n.querySelector(_n(l))) &&
                !u._p &&
                ((c.instance = u), (c.state.loading = 5)),
              At.has(l) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                At.set(l, e),
                u || yh(n, l, e, c.state))),
            t && a === null)
          )
            throw Error(s(528, ""));
          return c;
        }
        if (t && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (t = e.async),
          (e = e.src),
          typeof e == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ua(e)),
              (e = Ie(n).hoistableScripts),
              (a = e.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, l));
    }
  }
  function Da(l) {
    return 'href="' + yt(l) + '"';
  }
  function _n(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function fd(l) {
    return D({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function yh(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = l.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        kl(t, "link", e),
        wl(t),
        l.head.appendChild(t));
  }
  function Ua(l) {
    return '[src="' + yt(l) + '"]';
  }
  function Mn(l) {
    return "script[async]" + l;
  }
  function sd(l, t, e) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + yt(e.href) + '"]');
          if (a) return (t.instance = a), wl(a), a;
          var n = D({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            wl(a),
            kl(a, "style", n),
            Xu(a, e.precedence, l),
            (t.instance = a)
          );
        case "stylesheet":
          n = Da(e.href);
          var u = l.querySelector(_n(n));
          if (u) return (t.state.loading |= 4), (t.instance = u), wl(u), u;
          (a = fd(e)),
            (n = At.get(n)) && uf(a, n),
            (u = (l.ownerDocument || l).createElement("link")),
            wl(u);
          var c = u;
          return (
            (c._p = new Promise(function (i, r) {
              (c.onload = i), (c.onerror = r);
            })),
            kl(u, "link", a),
            (t.state.loading |= 4),
            Xu(u, e.precedence, l),
            (t.instance = u)
          );
        case "script":
          return (
            (u = Ua(e.src)),
            (n = l.querySelector(Mn(u)))
              ? ((t.instance = n), wl(n), n)
              : ((a = e),
                (n = At.get(u)) && ((a = D({}, e)), cf(a, n)),
                (l = l.ownerDocument || l),
                (n = l.createElement("script")),
                wl(n),
                kl(n, "link", a),
                l.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Xu(a, e.precedence, l));
    return t.instance;
  }
  function Xu(l, t, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        c = 0;
      c < a.length;
      c++
    ) {
      var i = a[c];
      if (i.dataset.precedence === t) u = i;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(l, u.nextSibling)
      : ((t = e.nodeType === 9 ? e.head : e), t.insertBefore(l, t.firstChild));
  }
  function uf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function cf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var Qu = null;
  function rd(l, t, e) {
    if (Qu === null) {
      var a = new Map(),
        n = (Qu = new Map());
      n.set(e, a);
    } else (n = Qu), (a = n.get(e)), a || ((a = new Map()), n.set(e, a));
    if (a.has(l)) return a;
    for (
      a.set(l, null), e = e.getElementsByTagName(l), n = 0;
      n < e.length;
      n++
    ) {
      var u = e[n];
      if (
        !(
          u[wa] ||
          u[Kl] ||
          (l === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = u.getAttribute(t) || "";
        c = l + c;
        var i = a.get(c);
        i ? i.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function od(l, t, e) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        e,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function gh(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function dd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var jn = null;
  function bh() {}
  function ph(l, t, e) {
    if (jn === null) throw Error(s(475));
    var a = jn;
    if (
      t.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = Da(e.href),
          u = l.querySelector(_n(n));
        if (u) {
          (l = u._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (a.count++, (a = Zu.bind(a)), l.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = u),
            wl(u);
          return;
        }
        (u = l.ownerDocument || l),
          (e = fd(e)),
          (n = At.get(n)) && uf(e, n),
          (u = u.createElement("link")),
          wl(u);
        var c = u;
        (c._p = new Promise(function (i, r) {
          (c.onload = i), (c.onerror = r);
        })),
          kl(u, "link", e),
          (t.instance = u);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, l),
        (l = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = Zu.bind(a)),
          l.addEventListener("load", t),
          l.addEventListener("error", t));
    }
  }
  function xh() {
    if (jn === null) throw Error(s(475));
    var l = jn;
    return (
      l.stylesheets && l.count === 0 && ff(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var e = setTimeout(function () {
              if ((l.stylesheets && ff(l, l.stylesheets), l.unsuspend)) {
                var a = l.unsuspend;
                (l.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(e);
              }
            );
          }
        : null
    );
  }
  function Zu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) ff(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Vu = null;
  function ff(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Vu = new Map()),
        t.forEach(Sh, l),
        (Vu = null),
        Zu.call(l));
  }
  function Sh(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Vu.get(l);
      if (e) var a = e.get(null);
      else {
        (e = new Map()), Vu.set(l, e);
        for (
          var n = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var c = n[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (e.set(c.dataset.precedence, c), (a = c));
        }
        a && e.set(null, a);
      }
      (n = t.instance),
        (c = n.getAttribute("data-precedence")),
        (u = e.get(c) || a),
        u === a && e.set(null, n),
        e.set(c, n),
        this.count++,
        (a = Zu.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(n, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var On = {
    $$typeof: Tl,
    Provider: null,
    Consumer: null,
    _currentValue: O,
    _currentValue2: O,
    _threadCount: 0,
  };
  function zh(l, t, e, a, n, u, c, i) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ac(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ac(0)),
      (this.hiddenUpdates = ac(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map());
  }
  function md(l, t, e, a, n, u, c, i, r, y, N, _) {
    return (
      (l = new zh(l, t, e, c, i, r, y, _)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = ft(3, null, null, t)),
      (l.current = u),
      (u.stateNode = l),
      (t = Qc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: e, cache: t }),
      kc(u),
      l
    );
  }
  function hd(l) {
    return l ? ((l = ra), l) : ra;
  }
  function vd(l, t, e, a, n, u) {
    (n = hd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = re(t)),
      (a.payload = { element: e }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (e = oe(l, a, t)),
      e !== null && (mt(e, l, t), un(e, l, t));
  }
  function yd(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function sf(l, t) {
    yd(l, t), (l = l.alternate) && yd(l, t);
  }
  function gd(l) {
    if (l.tag === 13) {
      var t = sa(l, 67108864);
      t !== null && mt(t, l, 67108864), sf(l, 67108864);
    }
  }
  var Lu = !0;
  function Ah(l, t, e, a) {
    var n = z.T;
    z.T = null;
    var u = U.p;
    try {
      (U.p = 2), rf(l, t, e, a);
    } finally {
      (U.p = u), (z.T = n);
    }
  }
  function Nh(l, t, e, a) {
    var n = z.T;
    z.T = null;
    var u = U.p;
    try {
      (U.p = 8), rf(l, t, e, a);
    } finally {
      (U.p = u), (z.T = n);
    }
  }
  function rf(l, t, e, a) {
    if (Lu) {
      var n = of(a);
      if (n === null) Wi(l, t, a, ku, e), pd(l, a);
      else if (Eh(n, l, t, e, a)) a.stopPropagation();
      else if ((pd(l, a), t & 4 && -1 < Th.indexOf(l))) {
        for (; n !== null; ) {
          var u = Fe(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var c = Oe(u.pendingLanes);
                  if (c !== 0) {
                    var i = u;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var r = 1 << (31 - ct(c));
                      (i.entanglements[1] |= r), (c &= ~r);
                    }
                    Ht(u), (sl & 6) === 0 && ((ju = jt() + 500), An(0));
                  }
                }
                break;
              case 13:
                (i = sa(u, 2)), i !== null && mt(i, u, 2), Ru(), sf(u, 2);
            }
          if (((u = of(a)), u === null && Wi(l, t, a, ku, e), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else Wi(l, t, a, null, e);
    }
  }
  function of(l) {
    return (l = vc(l)), df(l);
  }
  var ku = null;
  function df(l) {
    if (((ku = null), (l = We(l)), l !== null)) {
      var t = j(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (((l = H(t)), l !== null)) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (ku = l), null;
  }
  function bd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (r0()) {
          case Rf:
            return 2;
          case Df:
            return 8;
          case Yn:
          case o0:
            return 32;
          case Uf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var mf = !1,
    Ne = null,
    Te = null,
    Ee = null,
    Rn = new Map(),
    Dn = new Map(),
    _e = [],
    Th =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function pd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ne = null;
        break;
      case "dragenter":
      case "dragleave":
        Te = null;
        break;
      case "mouseover":
      case "mouseout":
        Ee = null;
        break;
      case "pointerover":
      case "pointerout":
        Rn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dn.delete(t.pointerId);
    }
  }
  function Un(l, t, e, a, n, u) {
    return l === null || l.nativeEvent !== u
      ? ((l = {
          blockedOn: t,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = Fe(t)), t !== null && gd(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        l);
  }
  function Eh(l, t, e, a, n) {
    switch (t) {
      case "focusin":
        return (Ne = Un(Ne, l, t, e, a, n)), !0;
      case "dragenter":
        return (Te = Un(Te, l, t, e, a, n)), !0;
      case "mouseover":
        return (Ee = Un(Ee, l, t, e, a, n)), !0;
      case "pointerover":
        var u = n.pointerId;
        return Rn.set(u, Un(Rn.get(u) || null, l, t, e, a, n)), !0;
      case "gotpointercapture":
        return (
          (u = n.pointerId), Dn.set(u, Un(Dn.get(u) || null, l, t, e, a, n)), !0
        );
    }
    return !1;
  }
  function xd(l) {
    var t = We(l.target);
    if (t !== null) {
      var e = j(t);
      if (e !== null) {
        if (((t = e.tag), t === 13)) {
          if (((t = H(e)), t !== null)) {
            (l.blockedOn = t),
              p0(l.priority, function () {
                if (e.tag === 13) {
                  var a = dt();
                  a = nc(a);
                  var n = sa(e, a);
                  n !== null && mt(n, e, a), sf(e, a);
                }
              });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Ku(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = of(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        (hc = a), e.target.dispatchEvent(a), (hc = null);
      } else return (t = Fe(e)), t !== null && gd(t), (l.blockedOn = e), !1;
      t.shift();
    }
    return !0;
  }
  function Sd(l, t, e) {
    Ku(l) && e.delete(t);
  }
  function _h() {
    (mf = !1),
      Ne !== null && Ku(Ne) && (Ne = null),
      Te !== null && Ku(Te) && (Te = null),
      Ee !== null && Ku(Ee) && (Ee = null),
      Rn.forEach(Sd),
      Dn.forEach(Sd);
  }
  function Ju(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      mf ||
        ((mf = !0),
        f.unstable_scheduleCallback(f.unstable_NormalPriority, _h)));
  }
  var $u = null;
  function zd(l) {
    $u !== l &&
      (($u = l),
      f.unstable_scheduleCallback(f.unstable_NormalPriority, function () {
        $u === l && ($u = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t],
            a = l[t + 1],
            n = l[t + 2];
          if (typeof a != "function") {
            if (df(a || e) === null) continue;
            break;
          }
          var u = Fe(e);
          u !== null &&
            (l.splice(t, 3),
            (t -= 3),
            oi(u, { pending: !0, data: n, method: e.method, action: a }, a, n));
        }
      }));
  }
  function Hn(l) {
    function t(r) {
      return Ju(r, l);
    }
    Ne !== null && Ju(Ne, l),
      Te !== null && Ju(Te, l),
      Ee !== null && Ju(Ee, l),
      Rn.forEach(t),
      Dn.forEach(t);
    for (var e = 0; e < _e.length; e++) {
      var a = _e[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < _e.length && ((e = _e[0]), e.blockedOn === null); )
      xd(e), e.blockedOn === null && _e.shift();
    if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var n = e[a],
          u = e[a + 1],
          c = n[Pl] || null;
        if (typeof u == "function") c || zd(e);
        else if (c) {
          var i = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (c = u[Pl] || null))) i = c.formAction;
            else if (df(n) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? (e[a + 1] = i) : (e.splice(a, 3), (a -= 3)),
            zd(e);
        }
      }
  }
  function hf(l) {
    this._internalRoot = l;
  }
  (Wu.prototype.render = hf.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var e = t.current,
        a = dt();
      vd(e, a, l, t, null, null);
    }),
    (Wu.prototype.unmount = hf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          vd(l.current, 2, null, l, null, null), Ru(), (t[$e] = null);
        }
      });
  function Wu(l) {
    this._internalRoot = l;
  }
  Wu.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Yf();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < _e.length && t !== 0 && t < _e[e].priority; e++);
      _e.splice(e, 0, l), e === 0 && xd(l);
    }
  };
  var Ad = S.version;
  if (Ad !== "19.1.0") throw Error(s(527, Ad, "19.1.0"));
  U.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(s(188))
        : ((l = Object.keys(l).join(",")), Error(s(268, l)));
    return (
      (l = T(t)),
      (l = l !== null ? x(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Mh = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fu.isDisabled && Fu.supportsFiber)
      try {
        (Ba = Fu.inject(Mh)), (ut = Fu);
      } catch {}
  }
  return (
    (Cn.createRoot = function (l, t) {
      if (!A(l)) throw Error(s(299));
      var e = !1,
        a = "",
        n = Yr,
        u = Gr,
        c = wr,
        i = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (i = t.unstable_transitionCallbacks)),
        (t = md(l, 1, !1, null, null, e, a, n, u, c, i, null)),
        (l[$e] = t.current),
        $i(l),
        new hf(t)
      );
    }),
    (Cn.hydrateRoot = function (l, t, e) {
      if (!A(l)) throw Error(s(299));
      var a = !1,
        n = "",
        u = Yr,
        c = Gr,
        i = wr,
        r = null,
        y = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (r = e.unstable_transitionCallbacks),
          e.formState !== void 0 && (y = e.formState)),
        (t = md(l, 1, !0, t, e ?? null, a, n, u, c, i, r, y)),
        (t.context = hd(null)),
        (e = t.current),
        (a = dt()),
        (a = nc(a)),
        (n = re(a)),
        (n.callback = null),
        oe(e, n, a),
        (e = a),
        (t.current.lanes = e),
        Ga(t, e),
        Ht(t),
        (l[$e] = t.current),
        $i(l),
        new Wu(t)
      );
    }),
    (Cn.version = "19.1.0"),
    Cn
  );
}
var Ud;
function Yh() {
  if (Ud) return gf.exports;
  Ud = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (S) {
        console.error(S);
      }
  }
  return f(), (gf.exports = Bh()), gf.exports;
}
var Gh = Yh();
function Hd(f, S) {
  if (typeof f == "function") return f(S);
  f != null && (f.current = S);
}
function wh(...f) {
  return (S) => {
    let b = !1;
    const s = f.map((A) => {
      const j = Hd(A, S);
      return !b && typeof j == "function" && (b = !0), j;
    });
    if (b)
      return () => {
        for (let A = 0; A < s.length; A++) {
          const j = s[A];
          typeof j == "function" ? j() : Hd(f[A], null);
        }
      };
  };
}
function Xh(...f) {
  return xl.useCallback(wh(...f), f);
}
function Qh(f) {
  const S = Zh(f),
    b = xl.forwardRef((s, A) => {
      const { children: j, ...H } = s,
        w = xl.Children.toArray(j),
        T = w.find(Lh);
      if (T) {
        const x = T.props.children,
          D = w.map((k) =>
            k === T
              ? xl.Children.count(x) > 1
                ? xl.Children.only(null)
                : xl.isValidElement(x)
                ? x.props.children
                : null
              : k
          );
        return o.jsx(S, {
          ...H,
          ref: A,
          children: xl.isValidElement(x) ? xl.cloneElement(x, void 0, D) : null,
        });
      }
      return o.jsx(S, { ...H, ref: A, children: j });
    });
  return (b.displayName = `${f}.Slot`), b;
}
var Kd = Qh("Slot");
function Zh(f) {
  const S = xl.forwardRef((b, s) => {
    const { children: A, ...j } = b,
      H = xl.isValidElement(A) ? Kh(A) : void 0,
      w = Xh(H, s);
    if (xl.isValidElement(A)) {
      const T = kh(j, A.props);
      return A.type !== xl.Fragment && (T.ref = w), xl.cloneElement(A, T);
    }
    return xl.Children.count(A) > 1 ? xl.Children.only(null) : null;
  });
  return (S.displayName = `${f}.SlotClone`), S;
}
var Vh = Symbol("radix.slottable");
function Lh(f) {
  return (
    xl.isValidElement(f) &&
    typeof f.type == "function" &&
    "__radixId" in f.type &&
    f.type.__radixId === Vh
  );
}
function kh(f, S) {
  const b = { ...S };
  for (const s in S) {
    const A = f[s],
      j = S[s];
    /^on[A-Z]/.test(s)
      ? A && j
        ? (b[s] = (...w) => {
            const T = j(...w);
            return A(...w), T;
          })
        : A && (b[s] = A)
      : s === "style"
      ? (b[s] = { ...A, ...j })
      : s === "className" && (b[s] = [A, j].filter(Boolean).join(" "));
  }
  return { ...f, ...b };
}
function Kh(f) {
  var s, A;
  let S =
      (s = Object.getOwnPropertyDescriptor(f.props, "ref")) == null
        ? void 0
        : s.get,
    b = S && "isReactWarning" in S && S.isReactWarning;
  return b
    ? f.ref
    : ((S =
        (A = Object.getOwnPropertyDescriptor(f, "ref")) == null
          ? void 0
          : A.get),
      (b = S && "isReactWarning" in S && S.isReactWarning),
      b ? f.props.ref : f.props.ref || f.ref);
}
function Jd(f) {
  var S,
    b,
    s = "";
  if (typeof f == "string" || typeof f == "number") s += f;
  else if (typeof f == "object")
    if (Array.isArray(f)) {
      var A = f.length;
      for (S = 0; S < A; S++)
        f[S] && (b = Jd(f[S])) && (s && (s += " "), (s += b));
    } else for (b in f) f[b] && (s && (s += " "), (s += b));
  return s;
}
function $d() {
  for (var f, S, b = 0, s = "", A = arguments.length; b < A; b++)
    (f = arguments[b]) && (S = Jd(f)) && (s && (s += " "), (s += S));
  return s;
}
const qd = (f) => (typeof f == "boolean" ? `${f}` : f === 0 ? "0" : f),
  Cd = $d,
  Wd = (f, S) => (b) => {
    var s;
    if ((S == null ? void 0 : S.variants) == null)
      return Cd(
        f,
        b == null ? void 0 : b.class,
        b == null ? void 0 : b.className
      );
    const { variants: A, defaultVariants: j } = S,
      H = Object.keys(A).map((x) => {
        const D = b == null ? void 0 : b[x],
          k = j == null ? void 0 : j[x];
        if (D === null) return null;
        const J = qd(D) || qd(k);
        return A[x][J];
      }),
      w =
        b &&
        Object.entries(b).reduce((x, D) => {
          let [k, J] = D;
          return J === void 0 || (x[k] = J), x;
        }, {}),
      T =
        S == null || (s = S.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((x, D) => {
              let { class: k, className: J, ...gl } = D;
              return Object.entries(gl).every((nl) => {
                let [ol, pl] = nl;
                return Array.isArray(pl)
                  ? pl.includes({ ...j, ...w }[ol])
                  : { ...j, ...w }[ol] === pl;
              })
                ? [...x, k, J]
                : x;
            }, []);
    return Cd(
      f,
      H,
      T,
      b == null ? void 0 : b.class,
      b == null ? void 0 : b.className
    );
  },
  Of = "-",
  Jh = (f) => {
    const S = Wh(f),
      { conflictingClassGroups: b, conflictingClassGroupModifiers: s } = f;
    return {
      getClassGroupId: (H) => {
        const w = H.split(Of);
        return w[0] === "" && w.length !== 1 && w.shift(), Fd(w, S) || $h(H);
      },
      getConflictingClassGroupIds: (H, w) => {
        const T = b[H] || [];
        return w && s[H] ? [...T, ...s[H]] : T;
      },
    };
  },
  Fd = (f, S) => {
    var H;
    if (f.length === 0) return S.classGroupId;
    const b = f[0],
      s = S.nextPart.get(b),
      A = s ? Fd(f.slice(1), s) : void 0;
    if (A) return A;
    if (S.validators.length === 0) return;
    const j = f.join(Of);
    return (H = S.validators.find(({ validator: w }) => w(j))) == null
      ? void 0
      : H.classGroupId;
  },
  Bd = /^\[(.+)\]$/,
  $h = (f) => {
    if (Bd.test(f)) {
      const S = Bd.exec(f)[1],
        b = S == null ? void 0 : S.substring(0, S.indexOf(":"));
      if (b) return "arbitrary.." + b;
    }
  },
  Wh = (f) => {
    const { theme: S, classGroups: b } = f,
      s = { nextPart: new Map(), validators: [] };
    for (const A in b) Ef(b[A], s, A, S);
    return s;
  },
  Ef = (f, S, b, s) => {
    f.forEach((A) => {
      if (typeof A == "string") {
        const j = A === "" ? S : Yd(S, A);
        j.classGroupId = b;
        return;
      }
      if (typeof A == "function") {
        if (Fh(A)) {
          Ef(A(s), S, b, s);
          return;
        }
        S.validators.push({ validator: A, classGroupId: b });
        return;
      }
      Object.entries(A).forEach(([j, H]) => {
        Ef(H, Yd(S, j), b, s);
      });
    });
  },
  Yd = (f, S) => {
    let b = f;
    return (
      S.split(Of).forEach((s) => {
        b.nextPart.has(s) ||
          b.nextPart.set(s, { nextPart: new Map(), validators: [] }),
          (b = b.nextPart.get(s));
      }),
      b
    );
  },
  Fh = (f) => f.isThemeGetter,
  Ih = (f) => {
    if (f < 1) return { get: () => {}, set: () => {} };
    let S = 0,
      b = new Map(),
      s = new Map();
    const A = (j, H) => {
      b.set(j, H), S++, S > f && ((S = 0), (s = b), (b = new Map()));
    };
    return {
      get(j) {
        let H = b.get(j);
        if (H !== void 0) return H;
        if ((H = s.get(j)) !== void 0) return A(j, H), H;
      },
      set(j, H) {
        b.has(j) ? b.set(j, H) : A(j, H);
      },
    };
  },
  _f = "!",
  Mf = ":",
  Ph = Mf.length,
  l1 = (f) => {
    const { prefix: S, experimentalParseClassName: b } = f;
    let s = (A) => {
      const j = [];
      let H = 0,
        w = 0,
        T = 0,
        x;
      for (let nl = 0; nl < A.length; nl++) {
        let ol = A[nl];
        if (H === 0 && w === 0) {
          if (ol === Mf) {
            j.push(A.slice(T, nl)), (T = nl + Ph);
            continue;
          }
          if (ol === "/") {
            x = nl;
            continue;
          }
        }
        ol === "["
          ? H++
          : ol === "]"
          ? H--
          : ol === "("
          ? w++
          : ol === ")" && w--;
      }
      const D = j.length === 0 ? A : A.substring(T),
        k = t1(D),
        J = k !== D,
        gl = x && x > T ? x - T : void 0;
      return {
        modifiers: j,
        hasImportantModifier: J,
        baseClassName: k,
        maybePostfixModifierPosition: gl,
      };
    };
    if (S) {
      const A = S + Mf,
        j = s;
      s = (H) =>
        H.startsWith(A)
          ? j(H.substring(A.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: H,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (b) {
      const A = s;
      s = (j) => b({ className: j, parseClassName: A });
    }
    return s;
  },
  t1 = (f) =>
    f.endsWith(_f)
      ? f.substring(0, f.length - 1)
      : f.startsWith(_f)
      ? f.substring(1)
      : f,
  e1 = (f) => {
    const S = Object.fromEntries(f.orderSensitiveModifiers.map((s) => [s, !0]));
    return (s) => {
      if (s.length <= 1) return s;
      const A = [];
      let j = [];
      return (
        s.forEach((H) => {
          H[0] === "[" || S[H] ? (A.push(...j.sort(), H), (j = [])) : j.push(H);
        }),
        A.push(...j.sort()),
        A
      );
    };
  },
  a1 = (f) => ({
    cache: Ih(f.cacheSize),
    parseClassName: l1(f),
    sortModifiers: e1(f),
    ...Jh(f),
  }),
  n1 = /\s+/,
  u1 = (f, S) => {
    const {
        parseClassName: b,
        getClassGroupId: s,
        getConflictingClassGroupIds: A,
        sortModifiers: j,
      } = S,
      H = [],
      w = f.trim().split(n1);
    let T = "";
    for (let x = w.length - 1; x >= 0; x -= 1) {
      const D = w[x],
        {
          isExternal: k,
          modifiers: J,
          hasImportantModifier: gl,
          baseClassName: nl,
          maybePostfixModifierPosition: ol,
        } = b(D);
      if (k) {
        T = D + (T.length > 0 ? " " + T : T);
        continue;
      }
      let pl = !!ol,
        Wl = s(pl ? nl.substring(0, ol) : nl);
      if (!Wl) {
        if (!pl) {
          T = D + (T.length > 0 ? " " + T : T);
          continue;
        }
        if (((Wl = s(nl)), !Wl)) {
          T = D + (T.length > 0 ? " " + T : T);
          continue;
        }
        pl = !1;
      }
      const Il = j(J).join(":"),
        Tl = gl ? Il + _f : Il,
        Gl = Tl + Wl;
      if (H.includes(Gl)) continue;
      H.push(Gl);
      const W = A(Wl, pl);
      for (let Ml = 0; Ml < W.length; ++Ml) {
        const ql = W[Ml];
        H.push(Tl + ql);
      }
      T = D + (T.length > 0 ? " " + T : T);
    }
    return T;
  };
function c1() {
  let f = 0,
    S,
    b,
    s = "";
  for (; f < arguments.length; )
    (S = arguments[f++]) && (b = Id(S)) && (s && (s += " "), (s += b));
  return s;
}
const Id = (f) => {
  if (typeof f == "string") return f;
  let S,
    b = "";
  for (let s = 0; s < f.length; s++)
    f[s] && (S = Id(f[s])) && (b && (b += " "), (b += S));
  return b;
};
function i1(f, ...S) {
  let b,
    s,
    A,
    j = H;
  function H(T) {
    const x = S.reduce((D, k) => k(D), f());
    return (b = a1(x)), (s = b.cache.get), (A = b.cache.set), (j = w), w(T);
  }
  function w(T) {
    const x = s(T);
    if (x) return x;
    const D = u1(T, b);
    return A(T, D), D;
  }
  return function () {
    return j(c1.apply(null, arguments));
  };
}
const Yl = (f) => {
    const S = (b) => b[f] || [];
    return (S.isThemeGetter = !0), S;
  },
  Pd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  l0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  f1 = /^\d+\/\d+$/,
  s1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  r1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  o1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  d1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  m1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ha = (f) => f1.test(f),
  I = (f) => !!f && !Number.isNaN(Number(f)),
  je = (f) => !!f && Number.isInteger(Number(f)),
  Sf = (f) => f.endsWith("%") && I(f.slice(0, -1)),
  It = (f) => s1.test(f),
  h1 = () => !0,
  v1 = (f) => r1.test(f) && !o1.test(f),
  t0 = () => !1,
  y1 = (f) => d1.test(f),
  g1 = (f) => m1.test(f),
  b1 = (f) => !Y(f) && !G(f),
  p1 = (f) => qa(f, n0, t0),
  Y = (f) => Pd.test(f),
  Je = (f) => qa(f, u0, v1),
  zf = (f) => qa(f, N1, I),
  Gd = (f) => qa(f, e0, t0),
  x1 = (f) => qa(f, a0, g1),
  Iu = (f) => qa(f, c0, y1),
  G = (f) => l0.test(f),
  Bn = (f) => Ca(f, u0),
  S1 = (f) => Ca(f, T1),
  wd = (f) => Ca(f, e0),
  z1 = (f) => Ca(f, n0),
  A1 = (f) => Ca(f, a0),
  Pu = (f) => Ca(f, c0, !0),
  qa = (f, S, b) => {
    const s = Pd.exec(f);
    return s ? (s[1] ? S(s[1]) : b(s[2])) : !1;
  },
  Ca = (f, S, b = !1) => {
    const s = l0.exec(f);
    return s ? (s[1] ? S(s[1]) : b) : !1;
  },
  e0 = (f) => f === "position" || f === "percentage",
  a0 = (f) => f === "image" || f === "url",
  n0 = (f) => f === "length" || f === "size" || f === "bg-size",
  u0 = (f) => f === "length",
  N1 = (f) => f === "number",
  T1 = (f) => f === "family-name",
  c0 = (f) => f === "shadow",
  E1 = () => {
    const f = Yl("color"),
      S = Yl("font"),
      b = Yl("text"),
      s = Yl("font-weight"),
      A = Yl("tracking"),
      j = Yl("leading"),
      H = Yl("breakpoint"),
      w = Yl("container"),
      T = Yl("spacing"),
      x = Yl("radius"),
      D = Yl("shadow"),
      k = Yl("inset-shadow"),
      J = Yl("text-shadow"),
      gl = Yl("drop-shadow"),
      nl = Yl("blur"),
      ol = Yl("perspective"),
      pl = Yl("aspect"),
      Wl = Yl("ease"),
      Il = Yl("animate"),
      Tl = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      Gl = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      W = () => [...Gl(), G, Y],
      Ml = () => ["auto", "hidden", "clip", "visible", "scroll"],
      ql = () => ["auto", "contain", "none"],
      Q = () => [G, Y, T],
      Dl = () => [Ha, "full", "auto", ...Q()],
      Ct = () => [je, "none", "subgrid", G, Y],
      ht = () => ["auto", { span: ["full", je, G, Y] }, je, G, Y],
      jl = () => [je, "auto", G, Y],
      Mt = () => ["auto", "min", "max", "fr", G, Y],
      Nt = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      Al = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      z = () => ["auto", ...Q()],
      U = () => [
        Ha,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...Q(),
      ],
      O = () => [f, G, Y],
      fl = () => [...Gl(), wd, Gd, { position: [G, Y] }],
      d = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      M = () => ["auto", "cover", "contain", z1, p1, { size: [G, Y] }],
      q = () => [Sf, Bn, Je],
      R = () => ["", "none", "full", x, G, Y],
      C = () => ["", I, Bn, Je],
      ll = () => ["solid", "dashed", "dotted", "double"],
      K = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      ul = () => [I, Sf, wd, Gd],
      vl = () => ["", "none", nl, G, Y],
      nt = () => ["none", I, G, Y],
      ee = () => ["none", I, G, Y],
      ae = () => [I, G, Y],
      ne = () => [Ha, "full", ...Q()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [It],
        breakpoint: [It],
        color: [h1],
        container: [It],
        "drop-shadow": [It],
        ease: ["in", "out", "in-out"],
        font: [b1],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [It],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [It],
        shadow: [It],
        spacing: ["px", I],
        text: [It],
        "text-shadow": [It],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Ha, Y, G, pl] }],
        container: ["container"],
        columns: [{ columns: [I, Y, G, w] }],
        "break-after": [{ "break-after": Tl() }],
        "break-before": [{ "break-before": Tl() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: W() }],
        overflow: [{ overflow: Ml() }],
        "overflow-x": [{ "overflow-x": Ml() }],
        "overflow-y": [{ "overflow-y": Ml() }],
        overscroll: [{ overscroll: ql() }],
        "overscroll-x": [{ "overscroll-x": ql() }],
        "overscroll-y": [{ "overscroll-y": ql() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: Dl() }],
        "inset-x": [{ "inset-x": Dl() }],
        "inset-y": [{ "inset-y": Dl() }],
        start: [{ start: Dl() }],
        end: [{ end: Dl() }],
        top: [{ top: Dl() }],
        right: [{ right: Dl() }],
        bottom: [{ bottom: Dl() }],
        left: [{ left: Dl() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [je, "auto", G, Y] }],
        basis: [{ basis: [Ha, "full", "auto", w, ...Q()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [I, Ha, "auto", "initial", "none", Y] }],
        grow: [{ grow: ["", I, G, Y] }],
        shrink: [{ shrink: ["", I, G, Y] }],
        order: [{ order: [je, "first", "last", "none", G, Y] }],
        "grid-cols": [{ "grid-cols": Ct() }],
        "col-start-end": [{ col: ht() }],
        "col-start": [{ "col-start": jl() }],
        "col-end": [{ "col-end": jl() }],
        "grid-rows": [{ "grid-rows": Ct() }],
        "row-start-end": [{ row: ht() }],
        "row-start": [{ "row-start": jl() }],
        "row-end": [{ "row-end": jl() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": Mt() }],
        "auto-rows": [{ "auto-rows": Mt() }],
        gap: [{ gap: Q() }],
        "gap-x": [{ "gap-x": Q() }],
        "gap-y": [{ "gap-y": Q() }],
        "justify-content": [{ justify: [...Nt(), "normal"] }],
        "justify-items": [{ "justify-items": [...Al(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...Al()] }],
        "align-content": [{ content: ["normal", ...Nt()] }],
        "align-items": [{ items: [...Al(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...Al(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": Nt() }],
        "place-items": [{ "place-items": [...Al(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...Al()] }],
        p: [{ p: Q() }],
        px: [{ px: Q() }],
        py: [{ py: Q() }],
        ps: [{ ps: Q() }],
        pe: [{ pe: Q() }],
        pt: [{ pt: Q() }],
        pr: [{ pr: Q() }],
        pb: [{ pb: Q() }],
        pl: [{ pl: Q() }],
        m: [{ m: z() }],
        mx: [{ mx: z() }],
        my: [{ my: z() }],
        ms: [{ ms: z() }],
        me: [{ me: z() }],
        mt: [{ mt: z() }],
        mr: [{ mr: z() }],
        mb: [{ mb: z() }],
        ml: [{ ml: z() }],
        "space-x": [{ "space-x": Q() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": Q() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: U() }],
        w: [{ w: [w, "screen", ...U()] }],
        "min-w": [{ "min-w": [w, "screen", "none", ...U()] }],
        "max-w": [
          { "max-w": [w, "screen", "none", "prose", { screen: [H] }, ...U()] },
        ],
        h: [{ h: ["screen", "lh", ...U()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...U()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...U()] }],
        "font-size": [{ text: ["base", b, Bn, Je] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [s, G, zf] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Sf,
              Y,
            ],
          },
        ],
        "font-family": [{ font: [S1, Y, S] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [A, G, Y] }],
        "line-clamp": [{ "line-clamp": [I, "none", G, zf] }],
        leading: [{ leading: [j, ...Q()] }],
        "list-image": [{ "list-image": ["none", G, Y] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", G, Y] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: O() }],
        "text-color": [{ text: O() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ll(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [I, "from-font", "auto", G, Je] },
        ],
        "text-decoration-color": [{ decoration: O() }],
        "underline-offset": [{ "underline-offset": [I, "auto", G, Y] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: Q() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              G,
              Y,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", G, Y] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: fl() }],
        "bg-repeat": [{ bg: d() }],
        "bg-size": [{ bg: M() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  je,
                  G,
                  Y,
                ],
                radial: ["", G, Y],
                conic: [je, G, Y],
              },
              A1,
              x1,
            ],
          },
        ],
        "bg-color": [{ bg: O() }],
        "gradient-from-pos": [{ from: q() }],
        "gradient-via-pos": [{ via: q() }],
        "gradient-to-pos": [{ to: q() }],
        "gradient-from": [{ from: O() }],
        "gradient-via": [{ via: O() }],
        "gradient-to": [{ to: O() }],
        rounded: [{ rounded: R() }],
        "rounded-s": [{ "rounded-s": R() }],
        "rounded-e": [{ "rounded-e": R() }],
        "rounded-t": [{ "rounded-t": R() }],
        "rounded-r": [{ "rounded-r": R() }],
        "rounded-b": [{ "rounded-b": R() }],
        "rounded-l": [{ "rounded-l": R() }],
        "rounded-ss": [{ "rounded-ss": R() }],
        "rounded-se": [{ "rounded-se": R() }],
        "rounded-ee": [{ "rounded-ee": R() }],
        "rounded-es": [{ "rounded-es": R() }],
        "rounded-tl": [{ "rounded-tl": R() }],
        "rounded-tr": [{ "rounded-tr": R() }],
        "rounded-br": [{ "rounded-br": R() }],
        "rounded-bl": [{ "rounded-bl": R() }],
        "border-w": [{ border: C() }],
        "border-w-x": [{ "border-x": C() }],
        "border-w-y": [{ "border-y": C() }],
        "border-w-s": [{ "border-s": C() }],
        "border-w-e": [{ "border-e": C() }],
        "border-w-t": [{ "border-t": C() }],
        "border-w-r": [{ "border-r": C() }],
        "border-w-b": [{ "border-b": C() }],
        "border-w-l": [{ "border-l": C() }],
        "divide-x": [{ "divide-x": C() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": C() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...ll(), "hidden", "none"] }],
        "divide-style": [{ divide: [...ll(), "hidden", "none"] }],
        "border-color": [{ border: O() }],
        "border-color-x": [{ "border-x": O() }],
        "border-color-y": [{ "border-y": O() }],
        "border-color-s": [{ "border-s": O() }],
        "border-color-e": [{ "border-e": O() }],
        "border-color-t": [{ "border-t": O() }],
        "border-color-r": [{ "border-r": O() }],
        "border-color-b": [{ "border-b": O() }],
        "border-color-l": [{ "border-l": O() }],
        "divide-color": [{ divide: O() }],
        "outline-style": [{ outline: [...ll(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [I, G, Y] }],
        "outline-w": [{ outline: ["", I, Bn, Je] }],
        "outline-color": [{ outline: O() }],
        shadow: [{ shadow: ["", "none", D, Pu, Iu] }],
        "shadow-color": [{ shadow: O() }],
        "inset-shadow": [{ "inset-shadow": ["none", k, Pu, Iu] }],
        "inset-shadow-color": [{ "inset-shadow": O() }],
        "ring-w": [{ ring: C() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: O() }],
        "ring-offset-w": [{ "ring-offset": [I, Je] }],
        "ring-offset-color": [{ "ring-offset": O() }],
        "inset-ring-w": [{ "inset-ring": C() }],
        "inset-ring-color": [{ "inset-ring": O() }],
        "text-shadow": [{ "text-shadow": ["none", J, Pu, Iu] }],
        "text-shadow-color": [{ "text-shadow": O() }],
        opacity: [{ opacity: [I, G, Y] }],
        "mix-blend": [{ "mix-blend": [...K(), "plus-darker", "plus-lighter"] }],
        "bg-blend": [{ "bg-blend": K() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [I] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": ul() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": ul() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": O() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": O() }],
        "mask-image-t-from-pos": [{ "mask-t-from": ul() }],
        "mask-image-t-to-pos": [{ "mask-t-to": ul() }],
        "mask-image-t-from-color": [{ "mask-t-from": O() }],
        "mask-image-t-to-color": [{ "mask-t-to": O() }],
        "mask-image-r-from-pos": [{ "mask-r-from": ul() }],
        "mask-image-r-to-pos": [{ "mask-r-to": ul() }],
        "mask-image-r-from-color": [{ "mask-r-from": O() }],
        "mask-image-r-to-color": [{ "mask-r-to": O() }],
        "mask-image-b-from-pos": [{ "mask-b-from": ul() }],
        "mask-image-b-to-pos": [{ "mask-b-to": ul() }],
        "mask-image-b-from-color": [{ "mask-b-from": O() }],
        "mask-image-b-to-color": [{ "mask-b-to": O() }],
        "mask-image-l-from-pos": [{ "mask-l-from": ul() }],
        "mask-image-l-to-pos": [{ "mask-l-to": ul() }],
        "mask-image-l-from-color": [{ "mask-l-from": O() }],
        "mask-image-l-to-color": [{ "mask-l-to": O() }],
        "mask-image-x-from-pos": [{ "mask-x-from": ul() }],
        "mask-image-x-to-pos": [{ "mask-x-to": ul() }],
        "mask-image-x-from-color": [{ "mask-x-from": O() }],
        "mask-image-x-to-color": [{ "mask-x-to": O() }],
        "mask-image-y-from-pos": [{ "mask-y-from": ul() }],
        "mask-image-y-to-pos": [{ "mask-y-to": ul() }],
        "mask-image-y-from-color": [{ "mask-y-from": O() }],
        "mask-image-y-to-color": [{ "mask-y-to": O() }],
        "mask-image-radial": [{ "mask-radial": [G, Y] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": ul() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": ul() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": O() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": O() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": Gl() }],
        "mask-image-conic-pos": [{ "mask-conic": [I] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": ul() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": ul() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": O() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": O() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: fl() }],
        "mask-repeat": [{ mask: d() }],
        "mask-size": [{ mask: M() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", G, Y] }],
        filter: [{ filter: ["", "none", G, Y] }],
        blur: [{ blur: vl() }],
        brightness: [{ brightness: [I, G, Y] }],
        contrast: [{ contrast: [I, G, Y] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", gl, Pu, Iu] }],
        "drop-shadow-color": [{ "drop-shadow": O() }],
        grayscale: [{ grayscale: ["", I, G, Y] }],
        "hue-rotate": [{ "hue-rotate": [I, G, Y] }],
        invert: [{ invert: ["", I, G, Y] }],
        saturate: [{ saturate: [I, G, Y] }],
        sepia: [{ sepia: ["", I, G, Y] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", G, Y] }],
        "backdrop-blur": [{ "backdrop-blur": vl() }],
        "backdrop-brightness": [{ "backdrop-brightness": [I, G, Y] }],
        "backdrop-contrast": [{ "backdrop-contrast": [I, G, Y] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", I, G, Y] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [I, G, Y] }],
        "backdrop-invert": [{ "backdrop-invert": ["", I, G, Y] }],
        "backdrop-opacity": [{ "backdrop-opacity": [I, G, Y] }],
        "backdrop-saturate": [{ "backdrop-saturate": [I, G, Y] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", I, G, Y] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": Q() }],
        "border-spacing-x": [{ "border-spacing-x": Q() }],
        "border-spacing-y": [{ "border-spacing-y": Q() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              G,
              Y,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [I, "initial", G, Y] }],
        ease: [{ ease: ["linear", "initial", Wl, G, Y] }],
        delay: [{ delay: [I, G, Y] }],
        animate: [{ animate: ["none", Il, G, Y] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [ol, G, Y] }],
        "perspective-origin": [{ "perspective-origin": W() }],
        rotate: [{ rotate: nt() }],
        "rotate-x": [{ "rotate-x": nt() }],
        "rotate-y": [{ "rotate-y": nt() }],
        "rotate-z": [{ "rotate-z": nt() }],
        scale: [{ scale: ee() }],
        "scale-x": [{ "scale-x": ee() }],
        "scale-y": [{ "scale-y": ee() }],
        "scale-z": [{ "scale-z": ee() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: ae() }],
        "skew-x": [{ "skew-x": ae() }],
        "skew-y": [{ "skew-y": ae() }],
        transform: [{ transform: [G, Y, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: W() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: ne() }],
        "translate-x": [{ "translate-x": ne() }],
        "translate-y": [{ "translate-y": ne() }],
        "translate-z": [{ "translate-z": ne() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: O() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: O() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              G,
              Y,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": Q() }],
        "scroll-mx": [{ "scroll-mx": Q() }],
        "scroll-my": [{ "scroll-my": Q() }],
        "scroll-ms": [{ "scroll-ms": Q() }],
        "scroll-me": [{ "scroll-me": Q() }],
        "scroll-mt": [{ "scroll-mt": Q() }],
        "scroll-mr": [{ "scroll-mr": Q() }],
        "scroll-mb": [{ "scroll-mb": Q() }],
        "scroll-ml": [{ "scroll-ml": Q() }],
        "scroll-p": [{ "scroll-p": Q() }],
        "scroll-px": [{ "scroll-px": Q() }],
        "scroll-py": [{ "scroll-py": Q() }],
        "scroll-ps": [{ "scroll-ps": Q() }],
        "scroll-pe": [{ "scroll-pe": Q() }],
        "scroll-pt": [{ "scroll-pt": Q() }],
        "scroll-pr": [{ "scroll-pr": Q() }],
        "scroll-pb": [{ "scroll-pb": Q() }],
        "scroll-pl": [{ "scroll-pl": Q() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", G, Y] },
        ],
        fill: [{ fill: ["none", ...O()] }],
        "stroke-w": [{ stroke: [I, Bn, Je, zf] }],
        stroke: [{ stroke: ["none", ...O()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  _1 = i1(E1);
function lc(...f) {
  return _1($d(f));
}
const M1 = Wd(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
function qt({ className: f, variant: S, size: b, asChild: s = !1, ...A }) {
  const j = s ? Kd : "button";
  return o.jsx(j, {
    "data-slot": "button",
    className: lc(M1({ variant: S, size: b, className: f })),
    ...A,
  });
}
function Pt({ className: f, ...S }) {
  return o.jsx("div", {
    "data-slot": "card",
    className: lc(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      f
    ),
    ...S,
  });
}
function le({ className: f, ...S }) {
  return o.jsx("div", {
    "data-slot": "card-content",
    className: lc("px-6", f),
    ...S,
  });
}
const j1 = Wd(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
function Xd({ className: f, variant: S, asChild: b = !1, ...s }) {
  const A = b ? Kd : "span";
  return o.jsx(A, {
    "data-slot": "badge",
    className: lc(j1({ variant: S }), f),
    ...s,
  });
}
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O1 = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  R1 = (f) =>
    f.replace(/^([A-Z])|[\s-_]+(\w)/g, (S, b, s) =>
      s ? s.toUpperCase() : b.toLowerCase()
    ),
  Qd = (f) => {
    const S = R1(f);
    return S.charAt(0).toUpperCase() + S.slice(1);
  },
  i0 = (...f) =>
    f
      .filter((S, b, s) => !!S && S.trim() !== "" && s.indexOf(S) === b)
      .join(" ")
      .trim(),
  D1 = (f) => {
    for (const S in f)
      if (S.startsWith("aria-") || S === "role" || S === "title") return !0;
  };
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var U1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H1 = xl.forwardRef(
  (
    {
      color: f = "currentColor",
      size: S = 24,
      strokeWidth: b = 2,
      absoluteStrokeWidth: s,
      className: A = "",
      children: j,
      iconNode: H,
      ...w
    },
    T
  ) =>
    xl.createElement(
      "svg",
      {
        ref: T,
        ...U1,
        width: S,
        height: S,
        stroke: f,
        strokeWidth: s ? (Number(b) * 24) / Number(S) : b,
        className: i0("lucide", A),
        ...(!j && !D1(w) && { "aria-hidden": "true" }),
        ...w,
      },
      [
        ...H.map(([x, D]) => xl.createElement(x, D)),
        ...(Array.isArray(j) ? j : [j]),
      ]
    )
);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sl = (f, S) => {
  const b = xl.forwardRef(({ className: s, ...A }, j) =>
    xl.createElement(H1, {
      ref: j,
      iconNode: S,
      className: i0(`lucide-${O1(Qd(f))}`, `lucide-${f}`, s),
      ...A,
    })
  );
  return (b.displayName = Qd(f)), b;
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q1 = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  C1 = Sl("award", q1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B1 = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  te = Sl("circle-check-big", B1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y1 = [
    ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
    ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
  ],
  G1 = Sl("code", Y1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w1 = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
  ],
  Af = Sl("download", w1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X1 = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  Nf = Sl("eye", X1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q1 = [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ],
  Z1 = Sl("facebook", Q1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V1 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  L1 = Sl("globe", V1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k1 = [
    [
      "path",
      {
        d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
        key: "1xhozi",
      },
    ],
  ],
  K1 = Sl("headphones", k1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J1 = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  $1 = Sl("instagram", J1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W1 = [
    [
      "path",
      {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
        key: "zw3jo",
      },
    ],
    [
      "path",
      {
        d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
        key: "1wduqc",
      },
    ],
    [
      "path",
      {
        d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
        key: "kqbvx6",
      },
    ],
  ],
  F1 = Sl("layers", W1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I1 = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  P1 = Sl("mail", I1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lv = [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ],
  Tf = Sl("message-circle", lv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tv = [
    [
      "path",
      {
        d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
        key: "e79jfc",
      },
    ],
    [
      "circle",
      { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" },
    ],
    [
      "circle",
      { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" },
    ],
    [
      "circle",
      { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" },
    ],
    [
      "circle",
      { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" },
    ],
  ],
  ev = Sl("palette", tv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const av = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  nv = Sl("phone", av);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uv = [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0",
      },
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd",
      },
    ],
  ],
  cv = Sl("quote", uv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iv = [
    [
      "path",
      {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
        key: "m3kijz",
      },
    ],
    [
      "path",
      {
        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
        key: "1fmvmk",
      },
    ],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  ],
  Zd = Sl("rocket", iv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fv = [
    [
      "path",
      {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  sv = Sl("settings", fv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rv = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  ov = Sl("shield", rv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dv = [
    [
      "rect",
      {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3",
      },
    ],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ],
  Vd = Sl("smartphone", dv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mv = [
    [
      "path",
      {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
        key: "4pj2yx",
      },
    ],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    ["path", { d: "M22 5h-4", key: "1gvqau" }],
    ["path", { d: "M4 17v2", key: "vumght" }],
    ["path", { d: "M5 18H3", key: "zchphs" }],
  ],
  Ld = Sl("sparkles", mv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hv = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  kd = Sl("star", hv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vv = [
    ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
    ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
  ],
  yv = Sl("trending-up", vv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gv = [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ],
  bv = Sl("twitter", gv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pv = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  xv = Sl("users", pv);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sv = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  zv = Sl("zap", Sv);
function Av() {
  const [f, S] = xl.useState(0),
    [b, s] = xl.useState([0, 0, 0, 0]);
  xl.useEffect(() => {
    const T = [500, 98, 24, 99.9],
      x = 2e3,
      D = 60,
      k = x / D;
    let J = 0;
    const gl = setInterval(() => {
      J++;
      const nl = J / D;
      s(T.map((ol) => Math.floor(ol * nl))),
        J >= D && (clearInterval(gl), s(T));
    }, k);
    return () => clearInterval(gl);
  }, []);
  const A = [
      {
        icon: o.jsx(Vd, { className: "w-8 h-8" }),
        title: "تصميم متجاوب",
        description: "يتكيف مع جميع أحجام الشاشات والأجهزة بشكل مثالي",
      },
      {
        icon: o.jsx(ev, { className: "w-8 h-8" }),
        title: "ألوان قابلة للتخصيص",
        description: "إمكانية تغيير الألوان والخطوط بسهولة تامة",
      },
      {
        icon: o.jsx(zv, { className: "w-8 h-8" }),
        title: "سرعة فائقة",
        description: "محسن للسرعة مع أفضل ممارسات الأداء",
      },
      {
        icon: o.jsx(ov, { className: "w-8 h-8" }),
        title: "آمان عالي",
        description: "مبني بأحدث معايير الأمان والحماية",
      },
      {
        icon: o.jsx(sv, { className: "w-8 h-8" }),
        title: "سهولة التخصيص",
        description: "لوحة تحكم بديهية لإدارة جميع إعدادات المتجر",
      },
      {
        icon: o.jsx(xv, { className: "w-8 h-8" }),
        title: "تجربة مستخدم متميزة",
        description: "واجهة مستخدم حديثة ومريحة للعملاء",
      },
    ],
    j = [
      { number: `${b[0]}+`, label: "متجر نشط" },
      { number: `${b[1]}%`, label: "رضا العملاء" },
      { number: `${b[2]}/7`, label: "دعم فني" },
      { number: `${b[3]}%`, label: "وقت التشغيل" },
    ],
    H = [
      {
        name: "أحمد محمد",
        role: "صاحب متجر إلكتروني",
        content: "ثيم وهج غير متجري بالكامل! التصميم رائع والدعم الفني ممتاز",
        rating: 5,
      },
      {
        name: "فاطمة العلي",
        role: "مطورة مواقع",
        content: "أفضل ثيم استخدمته على الإطلاق. سهل التخصيص وسريع جداً",
        rating: 5,
      },
      {
        name: "محمد السعيد",
        role: "رائد أعمال",
        content: "زادت مبيعاتي بنسبة 40% بعد استخدام ثيم وهج",
        rating: 5,
      },
    ],
    w = [
      {
        icon: o.jsx(L1, { className: "w-6 h-6" }),
        title: "متعدد اللغات",
        description: "دعم كامل للعربية والإنجليزية",
      },
      {
        icon: o.jsx(G1, { className: "w-6 h-6" }),
        title: "كود نظيف",
        description: "مكتوب بأحدث معايير البرمجة",
      },
      {
        icon: o.jsx(Zd, { className: "w-6 h-6" }),
        title: "تحديثات دورية",
        description: "تحديثات مجانية مدى الحياة",
      },
      {
        icon: o.jsx(C1, { className: "w-6 h-6" }),
        title: "جودة عالية",
        description: "حاصل على تقييم 5 نجوم",
      },
    ];
  return o.jsxs("div", {
    className: "min-h-screen gradient-bg",
    children: [
      o.jsx("header", {
        className: "glass-effect sticky top-0 z-50",
        children: o.jsx("div", {
          className: "container mx-auto px-4 py-4",
          children: o.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              o.jsxs("div", {
                className: "flex items-center space-x-4 space-x-reverse",
                children: [
                  o.jsx("div", {
                    className:
                      "w-12 h-12 hero-gradient rounded-xl flex items-center justify-center",
                    children: o.jsx(Ld, { className: "w-6 h-6 text-white" }),
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("h1", {
                        className: "text-2xl font-bold text-primary",
                        children: "وهج",
                      }),
                      o.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "ثيم سلة المتطور",
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "flex items-center space-x-4 space-x-reverse",
                children: [
                  o.jsxs(qt, {
                    variant: "outline",
                    size: "sm",
                    children: [
                      o.jsx(Nf, { className: "w-4 h-4 ml-2" }),
                      "معاينة الثيم",
                    ],
                  }),
                  o.jsxs(qt, {
                    className: "hero-gradient",
                    children: [
                      o.jsx(Af, { className: "w-4 h-4 ml-2" }),
                      "شراء الآن",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      o.jsx("section", {
        className: "py-20 px-4",
        children: o.jsxs("div", {
          className: "container mx-auto text-center",
          children: [
            o.jsxs(Xd, {
              className: "mb-6 hero-gradient text-white border-0",
              children: [
                o.jsx(kd, { className: "w-4 h-4 ml-2" }),
                "الثيم الأكثر تطوراً",
              ],
            }),
            o.jsx("h1", {
              className:
                "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent",
              children: "استمتع بمزايا غير محدودة",
            }),
            o.jsx("p", {
              className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto",
              children: "مع ثيم وهج المميز والجديد كلياً على منصة سلة",
            }),
            o.jsxs("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center mb-12",
              children: [
                o.jsxs(qt, {
                  size: "lg",
                  className: "hero-gradient text-lg px-8 py-6",
                  children: [
                    o.jsx(Af, { className: "w-5 h-5 ml-2" }),
                    "شراء الآن",
                  ],
                }),
                o.jsxs(qt, {
                  size: "lg",
                  variant: "outline",
                  className: "text-lg px-8 py-6",
                  children: [
                    o.jsx(Nf, { className: "w-5 h-5 ml-2" }),
                    "معاينة الثيم",
                  ],
                }),
              ],
            }),
            o.jsx("div", {
              className:
                "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto",
              children: j.map((T, x) =>
                o.jsx(
                  Pt,
                  {
                    className: "glass-effect border-0",
                    children: o.jsxs(le, {
                      className: "p-6 text-center",
                      children: [
                        o.jsx("div", {
                          className: "text-3xl font-bold text-primary mb-2",
                          children: T.number,
                        }),
                        o.jsx("div", {
                          className: "text-sm text-muted-foreground",
                          children: T.label,
                        }),
                      ],
                    }),
                  },
                  x
                )
              ),
            }),
          ],
        }),
      }),
      o.jsx("section", {
        className: "py-20 px-4",
        children: o.jsxs("div", {
          className: "container mx-auto",
          children: [
            o.jsxs("div", {
              className: "text-center mb-12",
              children: [
                o.jsx("h2", {
                  className: "text-4xl font-bold mb-4",
                  children: "اكتشف ثيم ملدك الجديد",
                }),
                o.jsx("p", {
                  className: "text-xl text-muted-foreground",
                  children: "على منصة سلة",
                }),
              ],
            }),
            o.jsx("div", {
              className: "relative max-w-6xl mx-auto",
              children: o.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8 items-center",
                children: [
                  o.jsx(Pt, {
                    className: "glass-effect border-0 h-96",
                    children: o.jsxs(le, {
                      className:
                        "p-8 flex flex-col items-center justify-center h-full",
                      children: [
                        o.jsx(Vd, { className: "w-16 h-16 text-primary mb-4" }),
                        o.jsx("h3", {
                          className: "text-xl font-semibold mb-2",
                          children: "تصميم الهاتف",
                        }),
                        o.jsx("p", {
                          className: "text-muted-foreground text-center",
                          children: "واجهة محسنة للهواتف الذكية",
                        }),
                      ],
                    }),
                  }),
                  o.jsx(Pt, {
                    className: "glass-effect border-0 h-96 md:scale-110",
                    children: o.jsxs(le, {
                      className:
                        "p-8 flex flex-col items-center justify-center h-full",
                      children: [
                        o.jsx(F1, { className: "w-16 h-16 text-primary mb-4" }),
                        o.jsx("h3", {
                          className: "text-xl font-semibold mb-2",
                          children: "الصفحة الرئيسية",
                        }),
                        o.jsx("p", {
                          className: "text-muted-foreground text-center",
                          children: "تصميم عصري وجذاب",
                        }),
                      ],
                    }),
                  }),
                  o.jsx(Pt, {
                    className: "glass-effect border-0 h-96",
                    children: o.jsxs(le, {
                      className:
                        "p-8 flex flex-col items-center justify-center h-full",
                      children: [
                        o.jsx(yv, { className: "w-16 h-16 text-primary mb-4" }),
                        o.jsx("h3", {
                          className: "text-xl font-semibold mb-2",
                          children: "صفحة المنتج",
                        }),
                        o.jsx("p", {
                          className: "text-muted-foreground text-center",
                          children: "عرض مثالي للمنتجات",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      o.jsx("section", {
        className: "py-20 px-4",
        children: o.jsxs("div", {
          className: "container mx-auto",
          children: [
            o.jsxs("div", {
              className: "text-center mb-16",
              children: [
                o.jsx("h2", {
                  className: "text-4xl font-bold mb-4",
                  children: "مميزات ثيم وهج",
                }),
                o.jsx("p", {
                  className: "text-xl text-muted-foreground",
                  children: "كل ما تحتاجه لمتجر إلكتروني ناجح",
                }),
              ],
            }),
            o.jsx("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: A.map((T, x) =>
                o.jsx(
                  Pt,
                  {
                    className:
                      "glass-effect border-0 hover:scale-105 transition-transform duration-300 cursor-pointer",
                    onClick: () => S(x),
                    children: o.jsxs(le, {
                      className: "p-8",
                      children: [
                        o.jsx("div", {
                          className: "text-primary mb-4",
                          children: T.icon,
                        }),
                        o.jsx("h3", {
                          className: "text-xl font-semibold mb-3",
                          children: T.title,
                        }),
                        o.jsx("p", {
                          className: "text-muted-foreground",
                          children: T.description,
                        }),
                        o.jsx(te, { className: "w-5 h-5 text-green-500 mt-4" }),
                      ],
                    }),
                  },
                  x
                )
              ),
            }),
          ],
        }),
      }),
      o.jsx("section", {
        className: "py-20 px-4",
        children: o.jsxs("div", {
          className: "container mx-auto",
          children: [
            o.jsxs("div", {
              className: "text-center mb-16",
              children: [
                o.jsx("h2", {
                  className: "text-4xl font-bold mb-4",
                  children: "ماذا يقول عملاؤنا",
                }),
                o.jsx("p", {
                  className: "text-xl text-muted-foreground",
                  children: "تجارب حقيقية من عملائنا الكرام",
                }),
              ],
            }),
            o.jsx("div", {
              className: "grid md:grid-cols-3 gap-8",
              children: H.map((T, x) =>
                o.jsx(
                  Pt,
                  {
                    className:
                      "glass-effect border-0 hover:scale-105 transition-transform duration-300",
                    children: o.jsxs(le, {
                      className: "p-8",
                      children: [
                        o.jsx("div", {
                          className: "flex items-center mb-4",
                          children: o.jsx(cv, {
                            className: "w-8 h-8 text-primary mb-4",
                          }),
                        }),
                        o.jsxs("p", {
                          className: "text-muted-foreground mb-6 italic",
                          children: ['"', T.content, '"'],
                        }),
                        o.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            o.jsxs("div", {
                              children: [
                                o.jsx("h4", {
                                  className: "font-semibold",
                                  children: T.name,
                                }),
                                o.jsx("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: T.role,
                                }),
                              ],
                            }),
                            o.jsx("div", {
                              className: "flex",
                              children: [...Array(T.rating)].map((D, k) =>
                                o.jsx(
                                  kd,
                                  {
                                    className:
                                      "w-4 h-4 fill-yellow-400 text-yellow-400",
                                  },
                                  k
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  x
                )
              ),
            }),
          ],
        }),
      }),
      o.jsx("section", {
        className: "py-20 px-4",
        children: o.jsxs("div", {
          className: "container mx-auto",
          children: [
            o.jsxs("div", {
              className: "text-center mb-16",
              children: [
                o.jsx("h2", {
                  className: "text-4xl font-bold mb-4",
                  children: "مميزات إضافية",
                }),
                o.jsx("p", {
                  className: "text-xl text-muted-foreground",
                  children: "المزيد من الإمكانيات المتقدمة",
                }),
              ],
            }),
            o.jsx("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
              children: w.map((T, x) =>
                o.jsx(
                  Pt,
                  {
                    className:
                      "glass-effect border-0 text-center hover:scale-105 transition-transform duration-300",
                    children: o.jsxs(le, {
                      className: "p-6",
                      children: [
                        o.jsx("div", {
                          className: "text-primary mb-4 flex justify-center",
                          children: T.icon,
                        }),
                        o.jsx("h3", {
                          className: "font-semibold mb-2",
                          children: T.title,
                        }),
                        o.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: T.description,
                        }),
                      ],
                    }),
                  },
                  x
                )
              ),
            }),
          ],
        }),
      }),
      o.jsx("section", {
        className: "py-20 px-4",
        children: o.jsxs("div", {
          className: "container mx-auto",
          children: [
            o.jsxs("div", {
              className: "text-center mb-16",
              children: [
                o.jsx("h2", {
                  className: "text-4xl font-bold mb-4",
                  children: "الدعم الفني",
                }),
                o.jsx("p", {
                  className: "text-xl text-muted-foreground",
                  children: "نحن هنا لمساعدتك في كل خطوة",
                }),
              ],
            }),
            o.jsxs("div", {
              className: "grid md:grid-cols-2 gap-12 items-center",
              children: [
                o.jsxs("div", {
                  children: [
                    o.jsx("h3", {
                      className: "text-2xl font-semibold mb-6",
                      children: "خدمة دعم متكاملة",
                    }),
                    o.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        o.jsxs("div", {
                          className:
                            "flex items-center space-x-3 space-x-reverse",
                          children: [
                            o.jsx(te, { className: "w-5 h-5 text-green-500" }),
                            o.jsx("span", { children: "دعم فني 24/7" }),
                          ],
                        }),
                        o.jsxs("div", {
                          className:
                            "flex items-center space-x-3 space-x-reverse",
                          children: [
                            o.jsx(te, { className: "w-5 h-5 text-green-500" }),
                            o.jsx("span", {
                              children: "تحديثات مجانية مدى الحياة",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className:
                            "flex items-center space-x-3 space-x-reverse",
                          children: [
                            o.jsx(te, { className: "w-5 h-5 text-green-500" }),
                            o.jsx("span", { children: "دليل شامل بالفيديو" }),
                          ],
                        }),
                        o.jsxs("div", {
                          className:
                            "flex items-center space-x-3 space-x-reverse",
                          children: [
                            o.jsx(te, { className: "w-5 h-5 text-green-500" }),
                            o.jsx("span", { children: "تخصيص مجاني للثيم" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsx(Pt, {
                  className: "glass-effect border-0",
                  children: o.jsxs(le, {
                    className: "p-8",
                    children: [
                      o.jsxs("h4", {
                        className:
                          "text-xl font-semibold mb-6 flex items-center",
                        children: [
                          o.jsx(K1, { className: "w-6 h-6 ml-2 text-primary" }),
                          "تواصل معنا",
                        ],
                      }),
                      o.jsxs("div", {
                        className: "space-y-4",
                        children: [
                   o.jsx("a", {
                        href: "https://wa.me/966558705245",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center space-x-3 space-x-reverse hover:text-primary transition-colors",
                        children: [
                            o.jsx(Tf, { className: "w-5 h-5 text-primary" }),
                            o.jsx("span", {
                            children: "واتساب: +966558705245",
                            }),
                        ],
                        }),
                                o.jsx("a", {
                                href: "fadyezzat010@gmail.com",
                                className: "flex items-center space-x-3 space-x-reverse hover:text-primary transition-colors",
                                children: [
                                    o.jsx(P1, { className: "w-5 h-5 text-primary" }),
                                    o.jsx("span", {
                                    children: "support@wahaj-theme.com",
                                    }),
                                ],
                                }),
                    o.jsx("a", {
                            href: "tel:+966558705245",
                            className: "flex items-center space-x-3 space-x-reverse hover:text-primary transition-colors",
                            children: [
                                o.jsx(nv, { className: "w-5 h-5 text-primary" }),
                                o.jsx("span", { 
                                children: "966 55 870 5245" 
                                }),
                            ],
                            }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "mt-6 pt-6 border-t border-border",
                        children: [
                          o.jsx("h5", {
                            className: "font-semibold mb-3",
                            children: "أوقات العمل",
                          }),
                          o.jsxs("p", {
                            className: "text-sm text-muted-foreground",
                            children: [
                              "السبت - الخميس: 9:00 ص - 6:00 م",
                              o.jsx("br", {}),
                              "الجمعة: مغلق",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      o.jsx("section", {
        className: "py-20 px-4",
        children: o.jsx("div", {
          className: "container mx-auto text-center",
          children: o.jsx(Pt, {
            className: "glass-effect border-0 max-w-4xl mx-auto",
            children: o.jsxs(le, {
              className: "p-12",
              children: [
                o.jsxs("div", {
                  className: "mb-8",
                  children: [
                    o.jsx(Zd, {
                      className: "w-16 h-16 text-primary mx-auto mb-4",
                    }),
                    o.jsx("h2", {
                      className: "text-4xl font-bold mb-4",
                      children: "ابدأ رحلتك مع وهج اليوم",
                    }),
                    o.jsx("p", {
                      className: "text-xl text-muted-foreground mb-8",
                      children:
                        "انضم إلى آلاف التجار الناجحين واحصل على متجر إلكتروني احترافي",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row gap-4 justify-center mb-8",
                  children: [
                    o.jsxs(qt, {
                      size: "lg",
                      className: "hero-gradient text-lg px-8 py-6",
                      children: [
                        o.jsx(Af, { className: "w-5 h-5 ml-2" }),
                        "شراء الثيم الآن - 299 ريال",
                      ],
                    }),
                    o.jsxs(qt, {
                      size: "lg",
                      variant: "outline",
                      className: "text-lg px-8 py-6",
                      children: [
                        o.jsx(Nf, { className: "w-5 h-5 ml-2" }),
                        "معاينة مجانية",
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className:
                    "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground",
                  children: [
                    o.jsxs("div", {
                      className:
                        "flex items-center justify-center space-x-2 space-x-reverse",
                      children: [
                        o.jsx(te, { className: "w-4 h-4 text-green-500" }),
                        o.jsx("span", { children: "ضمان 30 يوم" }),
                      ],
                    }),
                    o.jsxs("div", {
                      className:
                        "flex items-center justify-center space-x-2 space-x-reverse",
                      children: [
                        o.jsx(te, { className: "w-4 h-4 text-green-500" }),
                        o.jsx("span", { children: "تحديثات مجانية" }),
                      ],
                    }),
                    o.jsxs("div", {
                      className:
                        "flex items-center justify-center space-x-2 space-x-reverse",
                      children: [
                        o.jsx(te, { className: "w-4 h-4 text-green-500" }),
                        o.jsx("span", { children: "دعم فني مجاني" }),
                      ],
                    }),
                    o.jsxs("div", {
                      className:
                        "flex items-center justify-center space-x-2 space-x-reverse",
                      children: [
                        o.jsx(te, { className: "w-4 h-4 text-green-500" }),
                        o.jsx("span", { children: "تركيب مجاني" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
      o.jsx("a", {
        href: "https://wa.me/966558705245?text=مرحباً،%20أود%20الاستفسار%20عن%20ثيم%20وهج.",
        target: "_blank",
        rel: "noopener noreferrer",
        className:
          "fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-[100]",
        children: o.jsx(Tf, { className: "w-8 h-8" }),
      }),
      o.jsx("footer", {
        className: "py-12 px-4 border-t border-border",
        children: o.jsxs("div", {
          className: "container mx-auto",
          children: [
            o.jsxs("div", {
              className: "grid md:grid-cols-3 gap-8",
              children: [
                o.jsxs("div", {
                  children: [
                    o.jsxs("div", {
                      className:
                        "flex items-center space-x-4 space-x-reverse mb-4",
                      children: [
                        o.jsx("div", {
                          className:
                            "w-10 h-10 hero-gradient rounded-lg flex items-center justify-center",
                          children: o.jsx(Ld, {
                            className: "w-5 h-5 text-white",
                          }),
                        }),
                        o.jsxs("div", {
                          children: [
                            o.jsx("h3", {
                              className: "text-xl font-bold",
                              children: "وهج",
                            }),
                            o.jsx("p", {
                              className: "text-sm text-muted-foreground",
                              children: "ثيم سلة المتطور",
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsx("p", {
                      className: "text-muted-foreground",
                      children:
                        "موقع إلكتروني متخصص في تطوير المتاجر الإلكترونية",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  children: [
                    o.jsx("h4", {
                      className: "font-semibold mb-4",
                      children: "شركاؤنا",
                    }),
                    o.jsx("div", {
                      className: "flex items-center space-x-4 space-x-reverse",
                      children: o.jsx(Xd, {
                        variant: "outline",
                        children: "منصة سلة",
                      }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  children: [
                    o.jsx("h4", {
                      className: "font-semibold mb-4",
                      children: "تواصل معنا",
                    }),
                    o.jsxs("div", {
                      className: "flex space-x-4 space-x-reverse",
                      children: [
                        o.jsx(qt, {
                          size: "sm",
                          variant: "outline",
                          className: "p-2",
                          children: o.jsx($1, { className: "w-4 h-4" }),
                        }),
                        o.jsx(qt, {
                          size: "sm",
                          variant: "outline",
                          className: "p-2",
                          children: o.jsx(bv, { className: "w-4 h-4" }),
                        }),
                        o.jsx(qt, {
                          size: "sm",
                          variant: "outline",
                          className: "p-2",
                          children: o.jsx(Z1, { className: "w-4 h-4" }),
                        }),
                        o.jsx(qt, {
                          size: "sm",
                          variant: "outline",
                          className: "p-2",
                          children: o.jsx(Tf, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "mt-4",
                      children: o.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("div", {
              className: "border-t border-border mt-8 pt-8 text-center",
              children: o.jsx("p", {
                className: "text-muted-foreground",
                children: "2025 © جميع الحقوق محفوظة - ثيم وهج",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
Gh.createRoot(document.getElementById("root")).render(
  o.jsx(xl.StrictMode, { children: o.jsx(Av, {}) })
);
