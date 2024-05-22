(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const u of s)
      if (u.type === "childList")
        for (const i of u.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const u = {};
    return (
      s.integrity && (u.integrity = s.integrity),
      s.referrerPolicy && (u.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const u = n(s);
    fetch(s.href, u);
  }
})();
/**
 * @vue/shared v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function _s(e, t) {
  const n = new Set(e.split(","));
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const _e = {},
  Wt = [],
  Ue = () => {},
  Ca = () => !1,
  ln = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  bs = (e) => e.startsWith("onUpdate:"),
  Ce = Object.assign,
  ws = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Pa = Object.prototype.hasOwnProperty,
  ce = (e, t) => Pa.call(e, t),
  te = Array.isArray,
  Kt = (e) => Rr(e) === "[object Map]",
  rr = (e) => Rr(e) === "[object Set]",
  eu = (e) => Rr(e) === "[object Date]",
  se = (e) => typeof e == "function",
  ke = (e) => typeof e == "string",
  Pt = (e) => typeof e == "symbol",
  ge = (e) => e !== null && typeof e == "object",
  Eo = (e) => (ge(e) || se(e)) && se(e.then) && se(e.catch),
  So = Object.prototype.toString,
  Rr = (e) => So.call(e),
  Aa = (e) => Rr(e).slice(8, -1),
  Co = (e) => Rr(e) === "[object Object]",
  ys = (e) =>
    ke(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  cr = _s(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  fn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Ta = /-(\w)/g,
  nt = fn((e) => e.replace(Ta, (t, n) => (n ? n.toUpperCase() : ""))),
  Ra = /\B([A-Z])/g,
  nr = fn((e) => e.replace(Ra, "-$1").toLowerCase()),
  hn = fn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Mn = fn((e) => (e ? `on${hn(e)}` : "")),
  At = (e, t) => !Object.is(e, t),
  Vr = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  tn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  br = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Oa = (e) => {
    const t = ke(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let tu;
const Po = () =>
  tu ||
  (tu =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function vs(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = ke(r) ? Na(r) : vs(r);
      if (s) for (const u in s) t[u] = s[u];
    }
    return t;
  } else if (ke(e) || ge(e)) return e;
}
const La = /;(?![^(]*\))/g,
  ja = /:([^]+)/,
  Ma = /\/\*[^]*?\*\//g;
function Na(e) {
  const t = {};
  return (
    e
      .replace(Ma, "")
      .split(La)
      .forEach((n) => {
        if (n) {
          const r = n.split(ja);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function at(e) {
  let t = "";
  if (ke(e)) t = e;
  else if (te(e))
    for (let n = 0; n < e.length; n++) {
      const r = at(e[n]);
      r && (t += r + " ");
    }
  else if (ge(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Ia =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Fa = _s(Ia);
function Ao(e) {
  return !!e || e === "";
}
function Ba(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++) n = zt(e[r], t[r]);
  return n;
}
function zt(e, t) {
  if (e === t) return !0;
  let n = eu(e),
    r = eu(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
  if (((n = Pt(e)), (r = Pt(t)), n || r)) return e === t;
  if (((n = te(e)), (r = te(t)), n || r)) return n && r ? Ba(e, t) : !1;
  if (((n = ge(e)), (r = ge(t)), n || r)) {
    if (!n || !r) return !1;
    const s = Object.keys(e).length,
      u = Object.keys(t).length;
    if (s !== u) return !1;
    for (const i in e) {
      const d = e.hasOwnProperty(i),
        l = t.hasOwnProperty(i);
      if ((d && !l) || (!d && l) || !zt(e[i], t[i])) return !1;
    }
  }
  return String(e) === String(t);
}
function ks(e, t) {
  return e.findIndex((n) => zt(n, t));
}
const za = (e) =>
    ke(e)
      ? e
      : e == null
      ? ""
      : te(e) || (ge(e) && (e.toString === So || !se(e.toString)))
      ? JSON.stringify(e, To, 2)
      : String(e),
  To = (e, t) =>
    t && t.__v_isRef
      ? To(e, t.value)
      : Kt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s], u) => ((n[Nn(r, u) + " =>"] = s), n),
            {}
          ),
        }
      : rr(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Nn(n)) }
      : Pt(t)
      ? Nn(t)
      : ge(t) && !te(t) && !Co(t)
      ? String(t)
      : t,
  Nn = (e, t = "") => {
    var n;
    return Pt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ze;
class Ro {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ze),
      !t && ze && (this.index = (ze.scopes || (ze.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ze;
      try {
        return (ze = this), t();
      } finally {
        ze = n;
      }
    }
  }
  on() {
    ze = this;
  }
  off() {
    ze = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Oo(e) {
  return new Ro(e);
}
function $a(e, t = ze) {
  t && t.active && t.effects.push(e);
}
function Lo() {
  return ze;
}
function Ha(e) {
  ze && ze.cleanups.push(e);
}
let Ft;
class Es {
  constructor(t, n, r, s) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      $a(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), Ht();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Da(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Dt();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = St,
      n = Ft;
    try {
      return (St = !0), (Ft = this), this._runnings++, ru(this), this.fn();
    } finally {
      nu(this), this._runnings--, (Ft = n), (St = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (ru(this),
      nu(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1));
  }
}
function Da(e) {
  return e.value;
}
function ru(e) {
  e._trackId++, (e._depsLength = 0);
}
function nu(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) jo(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function jo(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let St = !0,
  Jn = 0;
const Mo = [];
function Ht() {
  Mo.push(St), (St = !1);
}
function Dt() {
  const e = Mo.pop();
  St = e === void 0 ? !0 : e;
}
function Ss() {
  Jn++;
}
function Cs() {
  for (Jn--; !Jn && Zn.length; ) Zn.shift()();
}
function No(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && jo(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const Zn = [];
function Io(e, t, n) {
  Ss();
  for (const r of e.keys()) {
    let s;
    r._dirtyLevel < t &&
      (s ?? (s = e.get(r) === r._trackId)) &&
      (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
      (r._dirtyLevel = t)),
      r._shouldSchedule &&
        (s ?? (s = e.get(r) === r._trackId)) &&
        (r.trigger(),
        (!r._runnings || r.allowRecurse) &&
          r._dirtyLevel !== 2 &&
          ((r._shouldSchedule = !1), r.scheduler && Zn.push(r.scheduler)));
  }
  Cs();
}
const Fo = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  rn = new WeakMap(),
  Bt = Symbol(""),
  Xn = Symbol("");
function Fe(e, t, n) {
  if (St && Ft) {
    let r = rn.get(e);
    r || rn.set(e, (r = new Map()));
    let s = r.get(n);
    s || r.set(n, (s = Fo(() => r.delete(n)))), No(Ft, s);
  }
}
function dt(e, t, n, r, s, u) {
  const i = rn.get(e);
  if (!i) return;
  let d = [];
  if (t === "clear") d = [...i.values()];
  else if (n === "length" && te(e)) {
    const l = Number(r);
    i.forEach((f, h) => {
      (h === "length" || (!Pt(h) && h >= l)) && d.push(f);
    });
  } else
    switch ((n !== void 0 && d.push(i.get(n)), t)) {
      case "add":
        te(e)
          ? ys(n) && d.push(i.get("length"))
          : (d.push(i.get(Bt)), Kt(e) && d.push(i.get(Xn)));
        break;
      case "delete":
        te(e) || (d.push(i.get(Bt)), Kt(e) && d.push(i.get(Xn)));
        break;
      case "set":
        Kt(e) && d.push(i.get(Bt));
        break;
    }
  Ss();
  for (const l of d) l && Io(l, 4);
  Cs();
}
function Ua(e, t) {
  var n;
  return (n = rn.get(e)) == null ? void 0 : n.get(t);
}
const Va = _s("__proto__,__v_isRef,__isVue"),
  Bo = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Pt)
  ),
  su = xa();
function xa() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = ie(this);
        for (let u = 0, i = this.length; u < i; u++) Fe(r, "get", u + "");
        const s = r[t](...n);
        return s === -1 || s === !1 ? r[t](...n.map(ie)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Ht(), Ss();
        const r = ie(this)[t].apply(this, n);
        return Cs(), Dt(), r;
      };
    }),
    e
  );
}
function qa(e) {
  const t = ie(this);
  return Fe(t, "has", e), t.hasOwnProperty(e);
}
class zo {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    const s = this._isReadonly,
      u = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return u;
    if (n === "__v_raw")
      return r === (s ? (u ? sd : Uo) : u ? Do : Ho).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = te(t);
    if (!s) {
      if (i && ce(su, n)) return Reflect.get(su, n, r);
      if (n === "hasOwnProperty") return qa;
    }
    const d = Reflect.get(t, n, r);
    return (Pt(n) ? Bo.has(n) : Va(n)) || (s || Fe(t, "get", n), u)
      ? d
      : Ee(d)
      ? i && ys(n)
        ? d
        : d.value
      : ge(d)
      ? s
        ? xo(d)
        : Or(d)
      : d;
  }
}
class $o extends zo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let u = t[n];
    if (!this._isShallow) {
      const l = Zt(u);
      if (
        (!nn(r) && !Zt(r) && ((u = ie(u)), (r = ie(r))),
        !te(t) && Ee(u) && !Ee(r))
      )
        return l ? !1 : ((u.value = r), !0);
    }
    const i = te(t) && ys(n) ? Number(n) < t.length : ce(t, n),
      d = Reflect.set(t, n, r, s);
    return (
      t === ie(s) && (i ? At(r, u) && dt(t, "set", n, r) : dt(t, "add", n, r)),
      d
    );
  }
  deleteProperty(t, n) {
    const r = ce(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && dt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Pt(n) || !Bo.has(n)) && Fe(t, "has", n), r;
  }
  ownKeys(t) {
    return Fe(t, "iterate", te(t) ? "length" : Bt), Reflect.ownKeys(t);
  }
}
class Wa extends zo {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Ka = new $o(),
  Ga = new Wa(),
  Ja = new $o(!0),
  Ps = (e) => e,
  pn = (e) => Reflect.getPrototypeOf(e);
function Ir(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = ie(e),
    u = ie(t);
  n || (At(t, u) && Fe(s, "get", t), Fe(s, "get", u));
  const { has: i } = pn(s),
    d = r ? Ps : n ? Rs : wr;
  if (i.call(s, t)) return d(e.get(t));
  if (i.call(s, u)) return d(e.get(u));
  e !== s && e.get(t);
}
function Fr(e, t = !1) {
  const n = this.__v_raw,
    r = ie(n),
    s = ie(e);
  return (
    t || (At(e, s) && Fe(r, "has", e), Fe(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function Br(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Fe(ie(e), "iterate", Bt), Reflect.get(e, "size", e)
  );
}
function uu(e) {
  e = ie(e);
  const t = ie(this);
  return pn(t).has.call(t, e) || (t.add(e), dt(t, "add", e, e)), this;
}
function ou(e, t) {
  t = ie(t);
  const n = ie(this),
    { has: r, get: s } = pn(n);
  let u = r.call(n, e);
  u || ((e = ie(e)), (u = r.call(n, e)));
  const i = s.call(n, e);
  return (
    n.set(e, t), u ? At(t, i) && dt(n, "set", e, t) : dt(n, "add", e, t), this
  );
}
function iu(e) {
  const t = ie(this),
    { has: n, get: r } = pn(t);
  let s = n.call(t, e);
  s || ((e = ie(e)), (s = n.call(t, e))), r && r.call(t, e);
  const u = t.delete(e);
  return s && dt(t, "delete", e, void 0), u;
}
function au() {
  const e = ie(this),
    t = e.size !== 0,
    n = e.clear();
  return t && dt(e, "clear", void 0, void 0), n;
}
function zr(e, t) {
  return function (r, s) {
    const u = this,
      i = u.__v_raw,
      d = ie(i),
      l = t ? Ps : e ? Rs : wr;
    return (
      !e && Fe(d, "iterate", Bt), i.forEach((f, h) => r.call(s, l(f), l(h), u))
    );
  };
}
function $r(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      u = ie(s),
      i = Kt(u),
      d = e === "entries" || (e === Symbol.iterator && i),
      l = e === "keys" && i,
      f = s[e](...r),
      h = n ? Ps : t ? Rs : wr;
    return (
      !t && Fe(u, "iterate", l ? Xn : Bt),
      {
        next() {
          const { value: g, done: v } = f.next();
          return v
            ? { value: g, done: v }
            : { value: d ? [h(g[0]), h(g[1])] : h(g), done: v };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ht(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Za() {
  const e = {
      get(u) {
        return Ir(this, u);
      },
      get size() {
        return Br(this);
      },
      has: Fr,
      add: uu,
      set: ou,
      delete: iu,
      clear: au,
      forEach: zr(!1, !1),
    },
    t = {
      get(u) {
        return Ir(this, u, !1, !0);
      },
      get size() {
        return Br(this);
      },
      has: Fr,
      add: uu,
      set: ou,
      delete: iu,
      clear: au,
      forEach: zr(!1, !0),
    },
    n = {
      get(u) {
        return Ir(this, u, !0);
      },
      get size() {
        return Br(this, !0);
      },
      has(u) {
        return Fr.call(this, u, !0);
      },
      add: ht("add"),
      set: ht("set"),
      delete: ht("delete"),
      clear: ht("clear"),
      forEach: zr(!0, !1),
    },
    r = {
      get(u) {
        return Ir(this, u, !0, !0);
      },
      get size() {
        return Br(this, !0);
      },
      has(u) {
        return Fr.call(this, u, !0);
      },
      add: ht("add"),
      set: ht("set"),
      delete: ht("delete"),
      clear: ht("clear"),
      forEach: zr(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((u) => {
      (e[u] = $r(u, !1, !1)),
        (n[u] = $r(u, !0, !1)),
        (t[u] = $r(u, !1, !0)),
        (r[u] = $r(u, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [Xa, Qa, Ya, ed] = Za();
function As(e, t) {
  const n = t ? (e ? ed : Ya) : e ? Qa : Xa;
  return (r, s, u) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(ce(n, s) && s in r ? n : r, s, u);
}
const td = { get: As(!1, !1) },
  rd = { get: As(!1, !0) },
  nd = { get: As(!0, !1) },
  Ho = new WeakMap(),
  Do = new WeakMap(),
  Uo = new WeakMap(),
  sd = new WeakMap();
function ud(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function od(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ud(Aa(e));
}
function Or(e) {
  return Zt(e) ? e : Ts(e, !1, Ka, td, Ho);
}
function Vo(e) {
  return Ts(e, !1, Ja, rd, Do);
}
function xo(e) {
  return Ts(e, !0, Ga, nd, Uo);
}
function Ts(e, t, n, r, s) {
  if (!ge(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const u = s.get(e);
  if (u) return u;
  const i = od(e);
  if (i === 0) return e;
  const d = new Proxy(e, i === 2 ? r : n);
  return s.set(e, d), d;
}
function ct(e) {
  return Zt(e) ? ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Zt(e) {
  return !!(e && e.__v_isReadonly);
}
function nn(e) {
  return !!(e && e.__v_isShallow);
}
function qo(e) {
  return ct(e) || Zt(e);
}
function ie(e) {
  const t = e && e.__v_raw;
  return t ? ie(t) : e;
}
function mn(e) {
  return Object.isExtensible(e) && tn(e, "__v_skip", !0), e;
}
const wr = (e) => (ge(e) ? Or(e) : e),
  Rs = (e) => (ge(e) ? xo(e) : e);
class Wo {
  constructor(t, n, r, s) {
    (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Es(
        () => t(this._value),
        () => xr(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = ie(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        At(t._value, (t._value = t.effect.run())) &&
        xr(t, 4),
      Ko(t),
      t.effect._dirtyLevel >= 2 && xr(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function id(e, t, n = !1) {
  let r, s;
  const u = se(e);
  return (
    u ? ((r = e), (s = Ue)) : ((r = e.get), (s = e.set)),
    new Wo(r, s, u || !s, n)
  );
}
function Ko(e) {
  var t;
  St &&
    Ft &&
    ((e = ie(e)),
    No(
      Ft,
      (t = e.dep) != null
        ? t
        : (e.dep = Fo(() => (e.dep = void 0), e instanceof Wo ? e : void 0))
    ));
}
function xr(e, t = 4, n) {
  e = ie(e);
  const r = e.dep;
  r && Io(r, t);
}
function Ee(e) {
  return !!(e && e.__v_isRef === !0);
}
function Te(e) {
  return Go(e, !1);
}
function ad(e) {
  return Go(e, !0);
}
function Go(e, t) {
  return Ee(e) ? e : new dd(e, t);
}
class dd {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ie(t)),
      (this._value = n ? t : wr(t));
  }
  get value() {
    return Ko(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || nn(t) || Zt(t);
    (t = n ? t : ie(t)),
      At(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : wr(t)), xr(this, 4));
  }
}
function rt(e) {
  return Ee(e) ? e.value : e;
}
const cd = {
  get: (e, t, n) => rt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return Ee(s) && !Ee(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Jo(e) {
  return ct(e) ? e : new Proxy(e, cd);
}
function ld(e) {
  const t = te(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Zo(e, n);
  return t;
}
class fd {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Ua(ie(this._object), this._key);
  }
}
class hd {
  constructor(t) {
    (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function pd(e, t, n) {
  return Ee(e)
    ? e
    : se(e)
    ? new hd(e)
    : ge(e) && arguments.length > 1
    ? Zo(e, t, n)
    : Te(e);
}
function Zo(e, t, n) {
  const r = e[t];
  return Ee(r) ? r : new fd(e, t, n);
}
/**
 * @vue/runtime-core v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ct(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    gn(s, t, n);
  }
}
function Ve(e, t, n, r) {
  if (se(e)) {
    const u = Ct(e, t, n, r);
    return (
      u &&
        Eo(u) &&
        u.catch((i) => {
          gn(i, t, n);
        }),
      u
    );
  }
  const s = [];
  for (let u = 0; u < e.length; u++) s.push(Ve(e[u], t, n, r));
  return s;
}
function gn(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let u = t.parent;
    const i = t.proxy,
      d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; u; ) {
      const f = u.ec;
      if (f) {
        for (let h = 0; h < f.length; h++) if (f[h](e, i, d) === !1) return;
      }
      u = u.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Ct(l, null, 10, [e, i, d]);
      return;
    }
  }
  md(e, n, s, r);
}
function md(e, t, n, r = !0) {
  console.error(e);
}
let yr = !1,
  Qn = !1;
const Oe = [];
let et = 0;
const Gt = [];
let wt = null,
  Mt = 0;
const Xo = Promise.resolve();
let Os = null;
function _n(e) {
  const t = Os || Xo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function gd(e) {
  let t = et + 1,
    n = Oe.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = Oe[r],
      u = vr(s);
    u < e || (u === e && s.pre) ? (t = r + 1) : (n = r);
  }
  return t;
}
function Ls(e) {
  (!Oe.length || !Oe.includes(e, yr && e.allowRecurse ? et + 1 : et)) &&
    (e.id == null ? Oe.push(e) : Oe.splice(gd(e.id), 0, e), Qo());
}
function Qo() {
  !yr && !Qn && ((Qn = !0), (Os = Xo.then(ei)));
}
function _d(e) {
  const t = Oe.indexOf(e);
  t > et && Oe.splice(t, 1);
}
function bd(e) {
  te(e)
    ? Gt.push(...e)
    : (!wt || !wt.includes(e, e.allowRecurse ? Mt + 1 : Mt)) && Gt.push(e),
    Qo();
}
function du(e, t, n = yr ? et + 1 : 0) {
  for (; n < Oe.length; n++) {
    const r = Oe[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue;
      Oe.splice(n, 1), n--, r();
    }
  }
}
function Yo(e) {
  if (Gt.length) {
    const t = [...new Set(Gt)].sort((n, r) => vr(n) - vr(r));
    if (((Gt.length = 0), wt)) {
      wt.push(...t);
      return;
    }
    for (wt = t, Mt = 0; Mt < wt.length; Mt++) wt[Mt]();
    (wt = null), (Mt = 0);
  }
}
const vr = (e) => (e.id == null ? 1 / 0 : e.id),
  wd = (e, t) => {
    const n = vr(e) - vr(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function ei(e) {
  (Qn = !1), (yr = !0), Oe.sort(wd);
  try {
    for (et = 0; et < Oe.length; et++) {
      const t = Oe[et];
      t && t.active !== !1 && Ct(t, null, 14);
    }
  } finally {
    (et = 0),
      (Oe.length = 0),
      Yo(),
      (yr = !1),
      (Os = null),
      (Oe.length || Gt.length) && ei();
  }
}
function yd(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || _e;
  let s = n;
  const u = t.startsWith("update:"),
    i = u && t.slice(7);
  if (i && i in r) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: g, trim: v } = r[h] || _e;
    v && (s = n.map((S) => (ke(S) ? S.trim() : S))), g && (s = n.map(br));
  }
  let d,
    l = r[(d = Mn(t))] || r[(d = Mn(nt(t)))];
  !l && u && (l = r[(d = Mn(nr(t)))]), l && Ve(l, e, 6, s);
  const f = r[d + "Once"];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[d]) return;
    (e.emitted[d] = !0), Ve(f, e, 6, s);
  }
}
function ti(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const u = e.emits;
  let i = {},
    d = !1;
  if (!se(e)) {
    const l = (f) => {
      const h = ti(f, t, !0);
      h && ((d = !0), Ce(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !u && !d
    ? (ge(e) && r.set(e, null), null)
    : (te(u) ? u.forEach((l) => (i[l] = null)) : Ce(i, u),
      ge(e) && r.set(e, i),
      i);
}
function bn(e, t) {
  return !e || !ln(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, nr(t)) || ce(e, t));
}
let Le = null,
  ri = null;
function sn(e) {
  const t = Le;
  return (Le = e), (ri = (e && e.type.__scopeId) || null), t;
}
function $t(e, t = Le, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && vu(-1);
    const u = sn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      sn(u), r._d && vu(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function In(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: u,
    propsOptions: [i],
    slots: d,
    attrs: l,
    emit: f,
    render: h,
    renderCache: g,
    data: v,
    setupState: S,
    ctx: C,
    inheritAttrs: T,
  } = e;
  let q, z;
  const U = sn(e);
  try {
    if (n.shapeFlag & 4) {
      const o = s || r,
        c = o;
      (q = Ye(h.call(c, o, g, u, S, v, C))), (z = l);
    } else {
      const o = t;
      (q = Ye(
        o.length > 1 ? o(u, { attrs: l, slots: d, emit: f }) : o(u, null)
      )),
        (z = t.props ? l : vd(l));
    }
  } catch (o) {
    (hr.length = 0), gn(o, e, 1), (q = ve(Je));
  }
  let K = q;
  if (z && T !== !1) {
    const o = Object.keys(z),
      { shapeFlag: c } = K;
    o.length && c & 7 && (i && o.some(bs) && (z = kd(z, i)), (K = Tt(K, z)));
  }
  return (
    n.dirs && ((K = Tt(K)), (K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (K.transition = n.transition),
    (q = K),
    sn(U),
    q
  );
}
const vd = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || ln(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  kd = (e, t) => {
    const n = {};
    for (const r in e) (!bs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Ed(e, t, n) {
  const { props: r, children: s, component: u } = e,
    { props: i, children: d, patchFlag: l } = t,
    f = u.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? cu(r, i, f) : !!i;
    if (l & 8) {
      const h = t.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        const v = h[g];
        if (i[v] !== r[v] && !bn(f, v)) return !0;
      }
    }
  } else
    return (s || d) && (!d || !d.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? cu(r, i, f)
        : !0
      : !!i;
  return !1;
}
function cu(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const u = r[s];
    if (t[u] !== e[u] && !bn(n, u)) return !0;
  }
  return !1;
}
function Sd({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const js = "components";
function Cd(e, t) {
  return si(js, e, !0, t) || e;
}
const ni = Symbol.for("v-ndc");
function Pd(e) {
  return ke(e) ? si(js, e, !1) || e : e || ni;
}
function si(e, t, n = !0, r = !1) {
  const s = Le || Re;
  if (s) {
    const u = s.type;
    if (e === js) {
      const d = _c(u, !1);
      if (d && (d === t || d === nt(t) || d === hn(nt(t)))) return u;
    }
    const i = lu(s[e] || u[e], t) || lu(s.appContext[e], t);
    return !i && r ? u : i;
  }
}
function lu(e, t) {
  return e && (e[t] || e[nt(t)] || e[hn(nt(t))]);
}
const Ad = (e) => e.__isSuspense;
function Td(e, t) {
  t && t.pendingBranch
    ? te(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : bd(e);
}
const Rd = Symbol.for("v-scx"),
  Od = () => Ge(Rd),
  Hr = {};
function lr(e, t, n) {
  return ui(e, t, n);
}
function ui(
  e,
  t,
  { immediate: n, deep: r, flush: s, once: u, onTrack: i, onTrigger: d } = _e
) {
  if (t && u) {
    const a = t;
    t = (...p) => {
      a(...p), c();
    };
  }
  const l = Re,
    f = (a) => (r === !0 ? a : It(a, r === !1 ? 1 : void 0));
  let h,
    g = !1,
    v = !1;
  if (
    (Ee(e)
      ? ((h = () => e.value), (g = nn(e)))
      : ct(e)
      ? ((h = () => f(e)), (g = !0))
      : te(e)
      ? ((v = !0),
        (g = e.some((a) => ct(a) || nn(a))),
        (h = () =>
          e.map((a) => {
            if (Ee(a)) return a.value;
            if (ct(a)) return f(a);
            if (se(a)) return Ct(a, l, 2);
          })))
      : se(e)
      ? t
        ? (h = () => Ct(e, l, 2))
        : (h = () => (S && S(), Ve(e, l, 3, [C])))
      : (h = Ue),
    t && r)
  ) {
    const a = h;
    h = () => It(a());
  }
  let S,
    C = (a) => {
      S = K.onStop = () => {
        Ct(a, l, 4), (S = K.onStop = void 0);
      };
    },
    T;
  if (En)
    if (
      ((C = Ue),
      t ? n && Ve(t, l, 3, [h(), v ? [] : void 0, C]) : h(),
      s === "sync")
    ) {
      const a = Od();
      T = a.__watcherHandles || (a.__watcherHandles = []);
    } else return Ue;
  let q = v ? new Array(e.length).fill(Hr) : Hr;
  const z = () => {
    if (!(!K.active || !K.dirty))
      if (t) {
        const a = K.run();
        (r || g || (v ? a.some((p, m) => At(p, q[m])) : At(a, q))) &&
          (S && S(),
          Ve(t, l, 3, [a, q === Hr ? void 0 : v && q[0] === Hr ? [] : q, C]),
          (q = a));
      } else K.run();
  };
  z.allowRecurse = !!t;
  let U;
  s === "sync"
    ? (U = z)
    : s === "post"
    ? (U = () => Ie(z, l && l.suspense))
    : ((z.pre = !0), l && (z.id = l.uid), (U = () => Ls(z)));
  const K = new Es(h, Ue, U),
    o = Lo(),
    c = () => {
      K.stop(), o && ws(o.effects, K);
    };
  return (
    t
      ? n
        ? z()
        : (q = K.run())
      : s === "post"
      ? Ie(K.run.bind(K), l && l.suspense)
      : K.run(),
    T && T.push(c),
    c
  );
}
function Ld(e, t, n) {
  const r = this.proxy,
    s = ke(e) ? (e.includes(".") ? oi(r, e) : () => r[e]) : e.bind(r, r);
  let u;
  se(t) ? (u = t) : ((u = t.handler), (n = t));
  const i = Lr(this),
    d = ui(s, u.bind(r), n);
  return i(), d;
}
function oi(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function It(e, t, n = 0, r) {
  if (!ge(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (n >= t) return e;
    n++;
  }
  if (((r = r || new Set()), r.has(e))) return e;
  if ((r.add(e), Ee(e))) It(e.value, t, n, r);
  else if (te(e)) for (let s = 0; s < e.length; s++) It(e[s], t, n, r);
  else if (rr(e) || Kt(e))
    e.forEach((s) => {
      It(s, t, n, r);
    });
  else if (Co(e)) for (const s in e) It(e[s], t, n, r);
  return e;
}
function qr(e, t) {
  if (Le === null) return e;
  const n = Sn(Le) || Le.proxy,
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [u, i, d, l = _e] = t[s];
    u &&
      (se(u) && (u = { mounted: u, updated: u }),
      u.deep && It(i),
      r.push({
        dir: u,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: d,
        modifiers: l,
      }));
  }
  return e;
}
function Ot(e, t, n, r) {
  const s = e.dirs,
    u = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const d = s[i];
    u && (d.oldValue = u[i].value);
    let l = d.dir[r];
    l && (Ht(), Ve(l, n, 8, [e.el, d, e, t]), Dt());
  }
}
const yt = Symbol("_leaveCb"),
  Dr = Symbol("_enterCb");
function ii() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Is(() => {
      e.isMounted = !0;
    }),
    Fs(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const He = [Function, Array],
  ai = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: He,
    onEnter: He,
    onAfterEnter: He,
    onEnterCancelled: He,
    onBeforeLeave: He,
    onLeave: He,
    onAfterLeave: He,
    onLeaveCancelled: He,
    onBeforeAppear: He,
    onAppear: He,
    onAfterAppear: He,
    onAppearCancelled: He,
  },
  jd = {
    name: "BaseTransition",
    props: ai,
    setup(e, { slots: t }) {
      const n = Ai(),
        r = ii();
      return () => {
        const s = t.default && Ms(t.default(), !0);
        if (!s || !s.length) return;
        let u = s[0];
        if (s.length > 1) {
          for (const v of s)
            if (v.type !== Je) {
              u = v;
              break;
            }
        }
        const i = ie(e),
          { mode: d } = i;
        if (r.isLeaving) return Fn(u);
        const l = fu(u);
        if (!l) return Fn(u);
        const f = kr(l, i, r, n);
        Er(l, f);
        const h = n.subTree,
          g = h && fu(h);
        if (g && g.type !== Je && !Nt(l, g)) {
          const v = kr(g, i, r, n);
          if ((Er(g, v), d === "out-in"))
            return (
              (r.isLeaving = !0),
              (v.afterLeave = () => {
                (r.isLeaving = !1),
                  n.update.active !== !1 && ((n.effect.dirty = !0), n.update());
              }),
              Fn(u)
            );
          d === "in-out" &&
            l.type !== Je &&
            (v.delayLeave = (S, C, T) => {
              const q = di(r, g);
              (q[String(g.key)] = g),
                (S[yt] = () => {
                  C(), (S[yt] = void 0), delete f.delayedLeave;
                }),
                (f.delayedLeave = T);
            });
        }
        return u;
      };
    },
  },
  Md = jd;
function di(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function kr(e, t, n, r) {
  const {
      appear: s,
      mode: u,
      persisted: i = !1,
      onBeforeEnter: d,
      onEnter: l,
      onAfterEnter: f,
      onEnterCancelled: h,
      onBeforeLeave: g,
      onLeave: v,
      onAfterLeave: S,
      onLeaveCancelled: C,
      onBeforeAppear: T,
      onAppear: q,
      onAfterAppear: z,
      onAppearCancelled: U,
    } = t,
    K = String(e.key),
    o = di(n, e),
    c = (m, b) => {
      m && Ve(m, r, 9, b);
    },
    a = (m, b) => {
      const _ = b[1];
      c(m, b),
        te(m) ? m.every((E) => E.length <= 1) && _() : m.length <= 1 && _();
    },
    p = {
      mode: u,
      persisted: i,
      beforeEnter(m) {
        let b = d;
        if (!n.isMounted)
          if (s) b = T || d;
          else return;
        m[yt] && m[yt](!0);
        const _ = o[K];
        _ && Nt(e, _) && _.el[yt] && _.el[yt](), c(b, [m]);
      },
      enter(m) {
        let b = l,
          _ = f,
          E = h;
        if (!n.isMounted)
          if (s) (b = q || l), (_ = z || f), (E = U || h);
          else return;
        let P = !1;
        const L = (m[Dr] = (N) => {
          P ||
            ((P = !0),
            N ? c(E, [m]) : c(_, [m]),
            p.delayedLeave && p.delayedLeave(),
            (m[Dr] = void 0));
        });
        b ? a(b, [m, L]) : L();
      },
      leave(m, b) {
        const _ = String(e.key);
        if ((m[Dr] && m[Dr](!0), n.isUnmounting)) return b();
        c(g, [m]);
        let E = !1;
        const P = (m[yt] = (L) => {
          E ||
            ((E = !0),
            b(),
            L ? c(C, [m]) : c(S, [m]),
            (m[yt] = void 0),
            o[_] === e && delete o[_]);
        });
        (o[_] = e), v ? a(v, [m, P]) : P();
      },
      clone(m) {
        return kr(m, t, n, r);
      },
    };
  return p;
}
function Fn(e) {
  if (wn(e)) return (e = Tt(e)), (e.children = null), e;
}
function fu(e) {
  return wn(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Er(e, t) {
  e.shapeFlag & 6 && e.component
    ? Er(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Ms(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let u = 0; u < e.length; u++) {
    let i = e[u];
    const d = n == null ? i.key : String(n) + String(i.key != null ? i.key : u);
    i.type === $e
      ? (i.patchFlag & 128 && s++, (r = r.concat(Ms(i.children, t, d))))
      : (t || i.type !== Je) && r.push(d != null ? Tt(i, { key: d }) : i);
  }
  if (s > 1) for (let u = 0; u < r.length; u++) r[u].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function Ns(e, t) {
  return se(e) ? Ce({ name: e.name }, t, { setup: e }) : e;
}
const Wr = (e) => !!e.type.__asyncLoader,
  wn = (e) => e.type.__isKeepAlive;
function Nd(e, t) {
  ci(e, "a", t);
}
function Id(e, t) {
  ci(e, "da", t);
}
function ci(e, t, n = Re) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((yn(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      wn(s.parent.vnode) && Fd(r, t, n, s), (s = s.parent);
  }
}
function Fd(e, t, n, r) {
  const s = yn(t, e, r, !0);
  hi(() => {
    ws(r[t], s);
  }, n);
}
function yn(e, t, n = Re, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      u =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          Ht();
          const d = Lr(n),
            l = Ve(t, n, e, i);
          return d(), Dt(), l;
        });
    return r ? s.unshift(u) : s.push(u), u;
  }
}
const ft =
    (e) =>
    (t, n = Re) =>
      (!En || e === "sp") && yn(e, (...r) => t(...r), n),
  li = ft("bm"),
  Is = ft("m"),
  Bd = ft("bu"),
  fi = ft("u"),
  Fs = ft("bum"),
  hi = ft("um"),
  zd = ft("sp"),
  $d = ft("rtg"),
  Hd = ft("rtc");
function Dd(e, t = Re) {
  yn("ec", e, t);
}
function pi(e, t, n, r) {
  let s;
  const u = n && n[r];
  if (te(e) || ke(e)) {
    s = new Array(e.length);
    for (let i = 0, d = e.length; i < d; i++)
      s[i] = t(e[i], i, void 0, u && u[i]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, u && u[i]);
  } else if (ge(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (i, d) => t(i, d, void 0, u && u[d]));
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let d = 0, l = i.length; d < l; d++) {
        const f = i[d];
        s[d] = t(e[f], f, d, u && u[d]);
      }
    }
  else s = [];
  return n && (n[r] = s), s;
}
const Yn = (e) => (e ? (Ti(e) ? Sn(e) || e.proxy : Yn(e.parent)) : null),
  fr = Ce(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Yn(e.parent),
    $root: (e) => Yn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Bs(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), Ls(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = _n.bind(e.proxy)),
    $watch: (e) => Ld.bind(e),
  }),
  Bn = (e, t) => e !== _e && !e.__isScriptSetup && ce(e, t),
  Ud = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: u,
        accessCache: i,
        type: d,
        appContext: l,
      } = e;
      let f;
      if (t[0] !== "$") {
        const S = i[t];
        if (S !== void 0)
          switch (S) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return u[t];
          }
        else {
          if (Bn(r, t)) return (i[t] = 1), r[t];
          if (s !== _e && ce(s, t)) return (i[t] = 2), s[t];
          if ((f = e.propsOptions[0]) && ce(f, t)) return (i[t] = 3), u[t];
          if (n !== _e && ce(n, t)) return (i[t] = 4), n[t];
          es && (i[t] = 0);
        }
      }
      const h = fr[t];
      let g, v;
      if (h) return t === "$attrs" && Fe(e, "get", t), h(e);
      if ((g = d.__cssModules) && (g = g[t])) return g;
      if (n !== _e && ce(n, t)) return (i[t] = 4), n[t];
      if (((v = l.config.globalProperties), ce(v, t))) return v[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: u } = e;
      return Bn(s, t)
        ? ((s[t] = n), !0)
        : r !== _e && ce(r, t)
        ? ((r[t] = n), !0)
        : ce(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((u[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: u,
        },
      },
      i
    ) {
      let d;
      return (
        !!n[i] ||
        (e !== _e && ce(e, i)) ||
        Bn(t, i) ||
        ((d = u[0]) && ce(d, i)) ||
        ce(r, i) ||
        ce(fr, i) ||
        ce(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ce(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function hu(e) {
  return te(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let es = !0;
function Vd(e) {
  const t = Bs(e),
    n = e.proxy,
    r = e.ctx;
  (es = !1), t.beforeCreate && pu(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: u,
    methods: i,
    watch: d,
    provide: l,
    inject: f,
    created: h,
    beforeMount: g,
    mounted: v,
    beforeUpdate: S,
    updated: C,
    activated: T,
    deactivated: q,
    beforeDestroy: z,
    beforeUnmount: U,
    destroyed: K,
    unmounted: o,
    render: c,
    renderTracked: a,
    renderTriggered: p,
    errorCaptured: m,
    serverPrefetch: b,
    expose: _,
    inheritAttrs: E,
    components: P,
    directives: L,
    filters: N,
  } = t;
  if ((f && xd(f, r, null), i))
    for (const R in i) {
      const B = i[R];
      se(B) && (r[R] = B.bind(n));
    }
  if (s) {
    const R = s.call(n, n);
    ge(R) && (e.data = Or(R));
  }
  if (((es = !0), u))
    for (const R in u) {
      const B = u[R],
        J = se(B) ? B.bind(n, n) : se(B.get) ? B.get.bind(n, n) : Ue,
        ue = !se(B) && se(B.set) ? B.set.bind(n) : Ue,
        X = Ne({ get: J, set: ue });
      Object.defineProperty(r, R, {
        enumerable: !0,
        configurable: !0,
        get: () => X.value,
        set: (fe) => (X.value = fe),
      });
    }
  if (d) for (const R in d) mi(d[R], r, n, R);
  if (l) {
    const R = se(l) ? l.call(n) : l;
    Reflect.ownKeys(R).forEach((B) => {
      Kr(B, R[B]);
    });
  }
  h && pu(h, e, "c");
  function y(R, B) {
    te(B) ? B.forEach((J) => R(J.bind(n))) : B && R(B.bind(n));
  }
  if (
    (y(li, g),
    y(Is, v),
    y(Bd, S),
    y(fi, C),
    y(Nd, T),
    y(Id, q),
    y(Dd, m),
    y(Hd, a),
    y($d, p),
    y(Fs, U),
    y(hi, o),
    y(zd, b),
    te(_))
  )
    if (_.length) {
      const R = e.exposed || (e.exposed = {});
      _.forEach((B) => {
        Object.defineProperty(R, B, {
          get: () => n[B],
          set: (J) => (n[B] = J),
        });
      });
    } else e.exposed || (e.exposed = {});
  c && e.render === Ue && (e.render = c),
    E != null && (e.inheritAttrs = E),
    P && (e.components = P),
    L && (e.directives = L);
}
function xd(e, t, n = Ue) {
  te(e) && (e = ts(e));
  for (const r in e) {
    const s = e[r];
    let u;
    ge(s)
      ? "default" in s
        ? (u = Ge(s.from || r, s.default, !0))
        : (u = Ge(s.from || r))
      : (u = Ge(s)),
      Ee(u)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => u.value,
            set: (i) => (u.value = i),
          })
        : (t[r] = u);
  }
}
function pu(e, t, n) {
  Ve(te(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function mi(e, t, n, r) {
  const s = r.includes(".") ? oi(n, r) : () => n[r];
  if (ke(e)) {
    const u = t[e];
    se(u) && lr(s, u);
  } else if (se(e)) lr(s, e.bind(n));
  else if (ge(e))
    if (te(e)) e.forEach((u) => mi(u, t, n, r));
    else {
      const u = se(e.handler) ? e.handler.bind(n) : t[e.handler];
      se(u) && lr(s, u, e);
    }
}
function Bs(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: u,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    d = u.get(t);
  let l;
  return (
    d
      ? (l = d)
      : !s.length && !n && !r
      ? (l = t)
      : ((l = {}), s.length && s.forEach((f) => un(l, f, i, !0)), un(l, t, i)),
    ge(t) && u.set(t, l),
    l
  );
}
function un(e, t, n, r = !1) {
  const { mixins: s, extends: u } = t;
  u && un(e, u, n, !0), s && s.forEach((i) => un(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const d = qd[i] || (n && n[i]);
      e[i] = d ? d(e[i], t[i]) : t[i];
    }
  return e;
}
const qd = {
  data: mu,
  props: gu,
  emits: gu,
  methods: dr,
  computed: dr,
  beforeCreate: je,
  created: je,
  beforeMount: je,
  mounted: je,
  beforeUpdate: je,
  updated: je,
  beforeDestroy: je,
  beforeUnmount: je,
  destroyed: je,
  unmounted: je,
  activated: je,
  deactivated: je,
  errorCaptured: je,
  serverPrefetch: je,
  components: dr,
  directives: dr,
  watch: Kd,
  provide: mu,
  inject: Wd,
};
function mu(e, t) {
  return t
    ? e
      ? function () {
          return Ce(
            se(e) ? e.call(this, this) : e,
            se(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Wd(e, t) {
  return dr(ts(e), ts(t));
}
function ts(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function je(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function dr(e, t) {
  return e ? Ce(Object.create(null), e, t) : t;
}
function gu(e, t) {
  return e
    ? te(e) && te(t)
      ? [...new Set([...e, ...t])]
      : Ce(Object.create(null), hu(e), hu(t ?? {}))
    : t;
}
function Kd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ce(Object.create(null), e);
  for (const r in t) n[r] = je(e[r], t[r]);
  return n;
}
function gi() {
  return {
    app: null,
    config: {
      isNativeTag: Ca,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Gd = 0;
function Jd(e, t) {
  return function (r, s = null) {
    se(r) || (r = Ce({}, r)), s != null && !ge(s) && (s = null);
    const u = gi(),
      i = new WeakSet();
    let d = !1;
    const l = (u.app = {
      _uid: Gd++,
      _component: r,
      _props: s,
      _container: null,
      _context: u,
      _instance: null,
      version: wc,
      get config() {
        return u.config;
      },
      set config(f) {},
      use(f, ...h) {
        return (
          i.has(f) ||
            (f && se(f.install)
              ? (i.add(f), f.install(l, ...h))
              : se(f) && (i.add(f), f(l, ...h))),
          l
        );
      },
      mixin(f) {
        return u.mixins.includes(f) || u.mixins.push(f), l;
      },
      component(f, h) {
        return h ? ((u.components[f] = h), l) : u.components[f];
      },
      directive(f, h) {
        return h ? ((u.directives[f] = h), l) : u.directives[f];
      },
      mount(f, h, g) {
        if (!d) {
          const v = ve(r, s);
          return (
            (v.appContext = u),
            g === !0 ? (g = "svg") : g === !1 && (g = void 0),
            h && t ? t(v, f) : e(v, f, g),
            (d = !0),
            (l._container = f),
            (f.__vue_app__ = l),
            Sn(v.component) || v.component.proxy
          );
        }
      },
      unmount() {
        d && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(f, h) {
        return (u.provides[f] = h), l;
      },
      runWithContext(f) {
        const h = Jt;
        Jt = l;
        try {
          return f();
        } finally {
          Jt = h;
        }
      },
    });
    return l;
  };
}
let Jt = null;
function Kr(e, t) {
  if (Re) {
    let n = Re.provides;
    const r = Re.parent && Re.parent.provides;
    r === n && (n = Re.provides = Object.create(r)), (n[e] = t);
  }
}
function Ge(e, t, n = !1) {
  const r = Re || Le;
  if (r || Jt) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : Jt._context.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && se(t) ? t.call(r && r.proxy) : t;
  }
}
function Zd() {
  return !!(Re || Le || Jt);
}
function Xd(e, t, n, r = !1) {
  const s = {},
    u = {};
  tn(u, kn, 1), (e.propsDefaults = Object.create(null)), _i(e, t, s, u);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : Vo(s)) : e.type.props ? (e.props = s) : (e.props = u),
    (e.attrs = u);
}
function Qd(e, t, n, r) {
  const {
      props: s,
      attrs: u,
      vnode: { patchFlag: i },
    } = e,
    d = ie(s),
    [l] = e.propsOptions;
  let f = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        let v = h[g];
        if (bn(e.emitsOptions, v)) continue;
        const S = t[v];
        if (l)
          if (ce(u, v)) S !== u[v] && ((u[v] = S), (f = !0));
          else {
            const C = nt(v);
            s[C] = rs(l, d, C, S, e, !1);
          }
        else S !== u[v] && ((u[v] = S), (f = !0));
      }
    }
  } else {
    _i(e, t, s, u) && (f = !0);
    let h;
    for (const g in d)
      (!t || (!ce(t, g) && ((h = nr(g)) === g || !ce(t, h)))) &&
        (l
          ? n &&
            (n[g] !== void 0 || n[h] !== void 0) &&
            (s[g] = rs(l, d, g, void 0, e, !0))
          : delete s[g]);
    if (u !== d)
      for (const g in u) (!t || !ce(t, g)) && (delete u[g], (f = !0));
  }
  f && dt(e, "set", "$attrs");
}
function _i(e, t, n, r) {
  const [s, u] = e.propsOptions;
  let i = !1,
    d;
  if (t)
    for (let l in t) {
      if (cr(l)) continue;
      const f = t[l];
      let h;
      s && ce(s, (h = nt(l)))
        ? !u || !u.includes(h)
          ? (n[h] = f)
          : ((d || (d = {}))[h] = f)
        : bn(e.emitsOptions, l) ||
          ((!(l in r) || f !== r[l]) && ((r[l] = f), (i = !0)));
    }
  if (u) {
    const l = ie(n),
      f = d || _e;
    for (let h = 0; h < u.length; h++) {
      const g = u[h];
      n[g] = rs(s, l, g, f[g], e, !ce(f, g));
    }
  }
  return i;
}
function rs(e, t, n, r, s, u) {
  const i = e[n];
  if (i != null) {
    const d = ce(i, "default");
    if (d && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && se(l)) {
        const { propsDefaults: f } = s;
        if (n in f) r = f[n];
        else {
          const h = Lr(s);
          (r = f[n] = l.call(null, t)), h();
        }
      } else r = l;
    }
    i[0] &&
      (u && !d ? (r = !1) : i[1] && (r === "" || r === nr(n)) && (r = !0));
  }
  return r;
}
function bi(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e);
  if (s) return s;
  const u = e.props,
    i = {},
    d = [];
  let l = !1;
  if (!se(e)) {
    const h = (g) => {
      l = !0;
      const [v, S] = bi(g, t, !0);
      Ce(i, v), S && d.push(...S);
    };
    !n && t.mixins.length && t.mixins.forEach(h),
      e.extends && h(e.extends),
      e.mixins && e.mixins.forEach(h);
  }
  if (!u && !l) return ge(e) && r.set(e, Wt), Wt;
  if (te(u))
    for (let h = 0; h < u.length; h++) {
      const g = nt(u[h]);
      _u(g) && (i[g] = _e);
    }
  else if (u)
    for (const h in u) {
      const g = nt(h);
      if (_u(g)) {
        const v = u[h],
          S = (i[g] = te(v) || se(v) ? { type: v } : Ce({}, v));
        if (S) {
          const C = yu(Boolean, S.type),
            T = yu(String, S.type);
          (S[0] = C > -1),
            (S[1] = T < 0 || C < T),
            (C > -1 || ce(S, "default")) && d.push(g);
        }
      }
    }
  const f = [i, d];
  return ge(e) && r.set(e, f), f;
}
function _u(e) {
  return e[0] !== "$" && !cr(e);
}
function bu(e) {
  return e === null
    ? "null"
    : typeof e == "function"
    ? e.name || ""
    : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function wu(e, t) {
  return bu(e) === bu(t);
}
function yu(e, t) {
  return te(t) ? t.findIndex((n) => wu(n, e)) : se(t) && wu(t, e) ? 0 : -1;
}
const wi = (e) => e[0] === "_" || e === "$stable",
  zs = (e) => (te(e) ? e.map(Ye) : [Ye(e)]),
  Yd = (e, t, n) => {
    if (t._n) return t;
    const r = $t((...s) => zs(t(...s)), n);
    return (r._c = !1), r;
  },
  yi = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (wi(s)) continue;
      const u = e[s];
      if (se(u)) t[s] = Yd(s, u, r);
      else if (u != null) {
        const i = zs(u);
        t[s] = () => i;
      }
    }
  },
  vi = (e, t) => {
    const n = zs(t);
    e.slots.default = () => n;
  },
  ec = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = ie(t)), tn(t, "_", n)) : yi(t, (e.slots = {}));
    } else (e.slots = {}), t && vi(e, t);
    tn(e.slots, kn, 1);
  },
  tc = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let u = !0,
      i = _e;
    if (r.shapeFlag & 32) {
      const d = t._;
      d
        ? n && d === 1
          ? (u = !1)
          : (Ce(s, t), !n && d === 1 && delete s._)
        : ((u = !t.$stable), yi(t, s)),
        (i = t);
    } else t && (vi(e, t), (i = { default: 1 }));
    if (u) for (const d in s) !wi(d) && i[d] == null && delete s[d];
  };
function ns(e, t, n, r, s = !1) {
  if (te(e)) {
    e.forEach((v, S) => ns(v, t && (te(t) ? t[S] : t), n, r, s));
    return;
  }
  if (Wr(r) && !s) return;
  const u = r.shapeFlag & 4 ? Sn(r.component) || r.component.proxy : r.el,
    i = s ? null : u,
    { i: d, r: l } = e,
    f = t && t.r,
    h = d.refs === _e ? (d.refs = {}) : d.refs,
    g = d.setupState;
  if (
    (f != null &&
      f !== l &&
      (ke(f)
        ? ((h[f] = null), ce(g, f) && (g[f] = null))
        : Ee(f) && (f.value = null)),
    se(l))
  )
    Ct(l, d, 12, [i, h]);
  else {
    const v = ke(l),
      S = Ee(l);
    if (v || S) {
      const C = () => {
        if (e.f) {
          const T = v ? (ce(g, l) ? g[l] : h[l]) : l.value;
          s
            ? te(T) && ws(T, u)
            : te(T)
            ? T.includes(u) || T.push(u)
            : v
            ? ((h[l] = [u]), ce(g, l) && (g[l] = h[l]))
            : ((l.value = [u]), e.k && (h[e.k] = l.value));
        } else
          v
            ? ((h[l] = i), ce(g, l) && (g[l] = i))
            : S && ((l.value = i), e.k && (h[e.k] = i));
      };
      i ? ((C.id = -1), Ie(C, n)) : C();
    }
  }
}
const Ie = Td;
function rc(e) {
  return nc(e);
}
function nc(e, t) {
  const n = Po();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: u,
      createElement: i,
      createText: d,
      createComment: l,
      setText: f,
      setElementText: h,
      parentNode: g,
      nextSibling: v,
      setScopeId: S = Ue,
      insertStaticContent: C,
    } = e,
    T = (
      w,
      k,
      A,
      I = null,
      j = null,
      D = null,
      G = void 0,
      H = null,
      x = !!k.dynamicChildren
    ) => {
      if (w === k) return;
      w && !Nt(w, k) && ((I = O(w)), fe(w, j, D, !0), (w = null)),
        k.patchFlag === -2 && ((x = !1), (k.dynamicChildren = null));
      const { type: $, ref: Z, shapeFlag: re } = k;
      switch ($) {
        case vn:
          q(w, k, A, I);
          break;
        case Je:
          z(w, k, A, I);
          break;
        case Gr:
          w == null && U(k, A, I, G);
          break;
        case $e:
          P(w, k, A, I, j, D, G, H, x);
          break;
        default:
          re & 1
            ? c(w, k, A, I, j, D, G, H, x)
            : re & 6
            ? L(w, k, A, I, j, D, G, H, x)
            : (re & 64 || re & 128) && $.process(w, k, A, I, j, D, G, H, x, Y);
      }
      Z != null && j && ns(Z, w && w.ref, D, k || w, !k);
    },
    q = (w, k, A, I) => {
      if (w == null) r((k.el = d(k.children)), A, I);
      else {
        const j = (k.el = w.el);
        k.children !== w.children && f(j, k.children);
      }
    },
    z = (w, k, A, I) => {
      w == null ? r((k.el = l(k.children || "")), A, I) : (k.el = w.el);
    },
    U = (w, k, A, I) => {
      [w.el, w.anchor] = C(w.children, k, A, I, w.el, w.anchor);
    },
    K = ({ el: w, anchor: k }, A, I) => {
      let j;
      for (; w && w !== k; ) (j = v(w)), r(w, A, I), (w = j);
      r(k, A, I);
    },
    o = ({ el: w, anchor: k }) => {
      let A;
      for (; w && w !== k; ) (A = v(w)), s(w), (w = A);
      s(k);
    },
    c = (w, k, A, I, j, D, G, H, x) => {
      k.type === "svg" ? (G = "svg") : k.type === "math" && (G = "mathml"),
        w == null ? a(k, A, I, j, D, G, H, x) : b(w, k, j, D, G, H, x);
    },
    a = (w, k, A, I, j, D, G, H) => {
      let x, $;
      const { props: Z, shapeFlag: re, transition: ee, dirs: ne } = w;
      if (
        ((x = w.el = i(w.type, D, Z && Z.is, Z)),
        re & 8
          ? h(x, w.children)
          : re & 16 && m(w.children, x, null, I, j, zn(w, D), G, H),
        ne && Ot(w, null, I, "created"),
        p(x, w, w.scopeId, G, I),
        Z)
      ) {
        for (const me in Z)
          me !== "value" &&
            !cr(me) &&
            u(x, me, null, Z[me], D, w.children, I, j, le);
        "value" in Z && u(x, "value", null, Z.value, D),
          ($ = Z.onVnodeBeforeMount) && Qe($, I, w);
      }
      ne && Ot(w, null, I, "beforeMount");
      const oe = sc(j, ee);
      oe && ee.beforeEnter(x),
        r(x, k, A),
        (($ = Z && Z.onVnodeMounted) || oe || ne) &&
          Ie(() => {
            $ && Qe($, I, w),
              oe && ee.enter(x),
              ne && Ot(w, null, I, "mounted");
          }, j);
    },
    p = (w, k, A, I, j) => {
      if ((A && S(w, A), I)) for (let D = 0; D < I.length; D++) S(w, I[D]);
      if (j) {
        let D = j.subTree;
        if (k === D) {
          const G = j.vnode;
          p(w, G, G.scopeId, G.slotScopeIds, j.parent);
        }
      }
    },
    m = (w, k, A, I, j, D, G, H, x = 0) => {
      for (let $ = x; $ < w.length; $++) {
        const Z = (w[$] = H ? vt(w[$]) : Ye(w[$]));
        T(null, Z, k, A, I, j, D, G, H);
      }
    },
    b = (w, k, A, I, j, D, G) => {
      const H = (k.el = w.el);
      let { patchFlag: x, dynamicChildren: $, dirs: Z } = k;
      x |= w.patchFlag & 16;
      const re = w.props || _e,
        ee = k.props || _e;
      let ne;
      if (
        (A && Lt(A, !1),
        (ne = ee.onVnodeBeforeUpdate) && Qe(ne, A, k, w),
        Z && Ot(k, w, A, "beforeUpdate"),
        A && Lt(A, !0),
        $
          ? _(w.dynamicChildren, $, H, A, I, zn(k, j), D)
          : G || B(w, k, H, null, A, I, zn(k, j), D, !1),
        x > 0)
      ) {
        if (x & 16) E(H, k, re, ee, A, I, j);
        else if (
          (x & 2 && re.class !== ee.class && u(H, "class", null, ee.class, j),
          x & 4 && u(H, "style", re.style, ee.style, j),
          x & 8)
        ) {
          const oe = k.dynamicProps;
          for (let me = 0; me < oe.length; me++) {
            const be = oe[me],
              Ae = re[be],
              We = ee[be];
            (We !== Ae || be === "value") &&
              u(H, be, Ae, We, j, w.children, A, I, le);
          }
        }
        x & 1 && w.children !== k.children && h(H, k.children);
      } else !G && $ == null && E(H, k, re, ee, A, I, j);
      ((ne = ee.onVnodeUpdated) || Z) &&
        Ie(() => {
          ne && Qe(ne, A, k, w), Z && Ot(k, w, A, "updated");
        }, I);
    },
    _ = (w, k, A, I, j, D, G) => {
      for (let H = 0; H < k.length; H++) {
        const x = w[H],
          $ = k[H],
          Z =
            x.el && (x.type === $e || !Nt(x, $) || x.shapeFlag & 70)
              ? g(x.el)
              : A;
        T(x, $, Z, null, I, j, D, G, !0);
      }
    },
    E = (w, k, A, I, j, D, G) => {
      if (A !== I) {
        if (A !== _e)
          for (const H in A)
            !cr(H) && !(H in I) && u(w, H, A[H], null, G, k.children, j, D, le);
        for (const H in I) {
          if (cr(H)) continue;
          const x = I[H],
            $ = A[H];
          x !== $ && H !== "value" && u(w, H, $, x, G, k.children, j, D, le);
        }
        "value" in I && u(w, "value", A.value, I.value, G);
      }
    },
    P = (w, k, A, I, j, D, G, H, x) => {
      const $ = (k.el = w ? w.el : d("")),
        Z = (k.anchor = w ? w.anchor : d(""));
      let { patchFlag: re, dynamicChildren: ee, slotScopeIds: ne } = k;
      ne && (H = H ? H.concat(ne) : ne),
        w == null
          ? (r($, A, I), r(Z, A, I), m(k.children || [], A, Z, j, D, G, H, x))
          : re > 0 && re & 64 && ee && w.dynamicChildren
          ? (_(w.dynamicChildren, ee, A, j, D, G, H),
            (k.key != null || (j && k === j.subTree)) && ki(w, k, !0))
          : B(w, k, A, Z, j, D, G, H, x);
    },
    L = (w, k, A, I, j, D, G, H, x) => {
      (k.slotScopeIds = H),
        w == null
          ? k.shapeFlag & 512
            ? j.ctx.activate(k, A, I, G, x)
            : N(k, A, I, j, D, G, x)
          : F(w, k, x);
    },
    N = (w, k, A, I, j, D, G) => {
      const H = (w.component = fc(w, I, j));
      if ((wn(w) && (H.ctx.renderer = Y), hc(H), H.asyncDep)) {
        if ((j && j.registerDep(H, y), !w.el)) {
          const x = (H.subTree = ve(Je));
          z(null, x, k, A);
        }
      } else y(H, w, k, A, j, D, G);
    },
    F = (w, k, A) => {
      const I = (k.component = w.component);
      if (Ed(w, k, A))
        if (I.asyncDep && !I.asyncResolved) {
          R(I, k, A);
          return;
        } else (I.next = k), _d(I.update), (I.effect.dirty = !0), I.update();
      else (k.el = w.el), (I.vnode = k);
    },
    y = (w, k, A, I, j, D, G) => {
      const H = () => {
          if (w.isMounted) {
            let { next: Z, bu: re, u: ee, parent: ne, vnode: oe } = w;
            {
              const Ut = Ei(w);
              if (Ut) {
                Z && ((Z.el = oe.el), R(w, Z, G)),
                  Ut.asyncDep.then(() => {
                    w.isUnmounted || H();
                  });
                return;
              }
            }
            let me = Z,
              be;
            Lt(w, !1),
              Z ? ((Z.el = oe.el), R(w, Z, G)) : (Z = oe),
              re && Vr(re),
              (be = Z.props && Z.props.onVnodeBeforeUpdate) &&
                Qe(be, ne, Z, oe),
              Lt(w, !0);
            const Ae = In(w),
              We = w.subTree;
            (w.subTree = Ae),
              T(We, Ae, g(We.el), O(We), w, j, D),
              (Z.el = Ae.el),
              me === null && Sd(w, Ae.el),
              ee && Ie(ee, j),
              (be = Z.props && Z.props.onVnodeUpdated) &&
                Ie(() => Qe(be, ne, Z, oe), j);
          } else {
            let Z;
            const { el: re, props: ee } = k,
              { bm: ne, m: oe, parent: me } = w,
              be = Wr(k);
            if (
              (Lt(w, !1),
              ne && Vr(ne),
              !be && (Z = ee && ee.onVnodeBeforeMount) && Qe(Z, me, k),
              Lt(w, !0),
              re && pe)
            ) {
              const Ae = () => {
                (w.subTree = In(w)), pe(re, w.subTree, w, j, null);
              };
              be
                ? k.type.__asyncLoader().then(() => !w.isUnmounted && Ae())
                : Ae();
            } else {
              const Ae = (w.subTree = In(w));
              T(null, Ae, A, I, w, j, D), (k.el = Ae.el);
            }
            if ((oe && Ie(oe, j), !be && (Z = ee && ee.onVnodeMounted))) {
              const Ae = k;
              Ie(() => Qe(Z, me, Ae), j);
            }
            (k.shapeFlag & 256 ||
              (me && Wr(me.vnode) && me.vnode.shapeFlag & 256)) &&
              w.a &&
              Ie(w.a, j),
              (w.isMounted = !0),
              (k = A = I = null);
          }
        },
        x = (w.effect = new Es(H, Ue, () => Ls($), w.scope)),
        $ = (w.update = () => {
          x.dirty && x.run();
        });
      ($.id = w.uid), Lt(w, !0), $();
    },
    R = (w, k, A) => {
      k.component = w;
      const I = w.vnode.props;
      (w.vnode = k),
        (w.next = null),
        Qd(w, k.props, I, A),
        tc(w, k.children, A),
        Ht(),
        du(w),
        Dt();
    },
    B = (w, k, A, I, j, D, G, H, x = !1) => {
      const $ = w && w.children,
        Z = w ? w.shapeFlag : 0,
        re = k.children,
        { patchFlag: ee, shapeFlag: ne } = k;
      if (ee > 0) {
        if (ee & 128) {
          ue($, re, A, I, j, D, G, H, x);
          return;
        } else if (ee & 256) {
          J($, re, A, I, j, D, G, H, x);
          return;
        }
      }
      ne & 8
        ? (Z & 16 && le($, j, D), re !== $ && h(A, re))
        : Z & 16
        ? ne & 16
          ? ue($, re, A, I, j, D, G, H, x)
          : le($, j, D, !0)
        : (Z & 8 && h(A, ""), ne & 16 && m(re, A, I, j, D, G, H, x));
    },
    J = (w, k, A, I, j, D, G, H, x) => {
      (w = w || Wt), (k = k || Wt);
      const $ = w.length,
        Z = k.length,
        re = Math.min($, Z);
      let ee;
      for (ee = 0; ee < re; ee++) {
        const ne = (k[ee] = x ? vt(k[ee]) : Ye(k[ee]));
        T(w[ee], ne, A, null, j, D, G, H, x);
      }
      $ > Z ? le(w, j, D, !0, !1, re) : m(k, A, I, j, D, G, H, x, re);
    },
    ue = (w, k, A, I, j, D, G, H, x) => {
      let $ = 0;
      const Z = k.length;
      let re = w.length - 1,
        ee = Z - 1;
      for (; $ <= re && $ <= ee; ) {
        const ne = w[$],
          oe = (k[$] = x ? vt(k[$]) : Ye(k[$]));
        if (Nt(ne, oe)) T(ne, oe, A, null, j, D, G, H, x);
        else break;
        $++;
      }
      for (; $ <= re && $ <= ee; ) {
        const ne = w[re],
          oe = (k[ee] = x ? vt(k[ee]) : Ye(k[ee]));
        if (Nt(ne, oe)) T(ne, oe, A, null, j, D, G, H, x);
        else break;
        re--, ee--;
      }
      if ($ > re) {
        if ($ <= ee) {
          const ne = ee + 1,
            oe = ne < Z ? k[ne].el : I;
          for (; $ <= ee; )
            T(null, (k[$] = x ? vt(k[$]) : Ye(k[$])), A, oe, j, D, G, H, x),
              $++;
        }
      } else if ($ > ee) for (; $ <= re; ) fe(w[$], j, D, !0), $++;
      else {
        const ne = $,
          oe = $,
          me = new Map();
        for ($ = oe; $ <= ee; $++) {
          const Be = (k[$] = x ? vt(k[$]) : Ye(k[$]));
          Be.key != null && me.set(Be.key, $);
        }
        let be,
          Ae = 0;
        const We = ee - oe + 1;
        let Ut = !1,
          Xs = 0;
        const ur = new Array(We);
        for ($ = 0; $ < We; $++) ur[$] = 0;
        for ($ = ne; $ <= re; $++) {
          const Be = w[$];
          if (Ae >= We) {
            fe(Be, j, D, !0);
            continue;
          }
          let Xe;
          if (Be.key != null) Xe = me.get(Be.key);
          else
            for (be = oe; be <= ee; be++)
              if (ur[be - oe] === 0 && Nt(Be, k[be])) {
                Xe = be;
                break;
              }
          Xe === void 0
            ? fe(Be, j, D, !0)
            : ((ur[Xe - oe] = $ + 1),
              Xe >= Xs ? (Xs = Xe) : (Ut = !0),
              T(Be, k[Xe], A, null, j, D, G, H, x),
              Ae++);
        }
        const Qs = Ut ? uc(ur) : Wt;
        for (be = Qs.length - 1, $ = We - 1; $ >= 0; $--) {
          const Be = oe + $,
            Xe = k[Be],
            Ys = Be + 1 < Z ? k[Be + 1].el : I;
          ur[$] === 0
            ? T(null, Xe, A, Ys, j, D, G, H, x)
            : Ut && (be < 0 || $ !== Qs[be] ? X(Xe, A, Ys, 2) : be--);
        }
      }
    },
    X = (w, k, A, I, j = null) => {
      const { el: D, type: G, transition: H, children: x, shapeFlag: $ } = w;
      if ($ & 6) {
        X(w.component.subTree, k, A, I);
        return;
      }
      if ($ & 128) {
        w.suspense.move(k, A, I);
        return;
      }
      if ($ & 64) {
        G.move(w, k, A, Y);
        return;
      }
      if (G === $e) {
        r(D, k, A);
        for (let re = 0; re < x.length; re++) X(x[re], k, A, I);
        r(w.anchor, k, A);
        return;
      }
      if (G === Gr) {
        K(w, k, A);
        return;
      }
      if (I !== 2 && $ & 1 && H)
        if (I === 0) H.beforeEnter(D), r(D, k, A), Ie(() => H.enter(D), j);
        else {
          const { leave: re, delayLeave: ee, afterLeave: ne } = H,
            oe = () => r(D, k, A),
            me = () => {
              re(D, () => {
                oe(), ne && ne();
              });
            };
          ee ? ee(D, oe, me) : me();
        }
      else r(D, k, A);
    },
    fe = (w, k, A, I = !1, j = !1) => {
      const {
        type: D,
        props: G,
        ref: H,
        children: x,
        dynamicChildren: $,
        shapeFlag: Z,
        patchFlag: re,
        dirs: ee,
      } = w;
      if ((H != null && ns(H, null, A, w, !0), Z & 256)) {
        k.ctx.deactivate(w);
        return;
      }
      const ne = Z & 1 && ee,
        oe = !Wr(w);
      let me;
      if ((oe && (me = G && G.onVnodeBeforeUnmount) && Qe(me, k, w), Z & 6))
        we(w.component, A, I);
      else {
        if (Z & 128) {
          w.suspense.unmount(A, I);
          return;
        }
        ne && Ot(w, null, k, "beforeUnmount"),
          Z & 64
            ? w.type.remove(w, k, A, j, Y, I)
            : $ && (D !== $e || (re > 0 && re & 64))
            ? le($, k, A, !1, !0)
            : ((D === $e && re & 384) || (!j && Z & 16)) && le(x, k, A),
          I && ye(w);
      }
      ((oe && (me = G && G.onVnodeUnmounted)) || ne) &&
        Ie(() => {
          me && Qe(me, k, w), ne && Ot(w, null, k, "unmounted");
        }, A);
    },
    ye = (w) => {
      const { type: k, el: A, anchor: I, transition: j } = w;
      if (k === $e) {
        Pe(A, I);
        return;
      }
      if (k === Gr) {
        o(w);
        return;
      }
      const D = () => {
        s(A), j && !j.persisted && j.afterLeave && j.afterLeave();
      };
      if (w.shapeFlag & 1 && j && !j.persisted) {
        const { leave: G, delayLeave: H } = j,
          x = () => G(A, D);
        H ? H(w.el, D, x) : x();
      } else D();
    },
    Pe = (w, k) => {
      let A;
      for (; w !== k; ) (A = v(w)), s(w), (w = A);
      s(k);
    },
    we = (w, k, A) => {
      const { bum: I, scope: j, update: D, subTree: G, um: H } = w;
      I && Vr(I),
        j.stop(),
        D && ((D.active = !1), fe(G, w, k, A)),
        H && Ie(H, k),
        Ie(() => {
          w.isUnmounted = !0;
        }, k),
        k &&
          k.pendingBranch &&
          !k.isUnmounted &&
          w.asyncDep &&
          !w.asyncResolved &&
          w.suspenseId === k.pendingId &&
          (k.deps--, k.deps === 0 && k.resolve());
    },
    le = (w, k, A, I = !1, j = !1, D = 0) => {
      for (let G = D; G < w.length; G++) fe(w[G], k, A, I, j);
    },
    O = (w) =>
      w.shapeFlag & 6
        ? O(w.component.subTree)
        : w.shapeFlag & 128
        ? w.suspense.next()
        : v(w.anchor || w.el);
  let V = !1;
  const W = (w, k, A) => {
      w == null
        ? k._vnode && fe(k._vnode, null, null, !0)
        : T(k._vnode || null, w, k, null, null, null, A),
        V || ((V = !0), du(), Yo(), (V = !1)),
        (k._vnode = w);
    },
    Y = { p: T, um: fe, m: X, r: ye, mt: N, mc: m, pc: B, pbc: _, n: O, o: e };
  let de, pe;
  return (
    t && ([de, pe] = t(Y)), { render: W, hydrate: de, createApp: Jd(W, de) }
  );
}
function zn({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Lt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function sc(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function ki(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (te(r) && te(s))
    for (let u = 0; u < r.length; u++) {
      const i = r[u];
      let d = s[u];
      d.shapeFlag & 1 &&
        !d.dynamicChildren &&
        ((d.patchFlag <= 0 || d.patchFlag === 32) &&
          ((d = s[u] = vt(s[u])), (d.el = i.el)),
        n || ki(i, d)),
        d.type === vn && (d.el = i.el);
    }
}
function uc(e) {
  const t = e.slice(),
    n = [0];
  let r, s, u, i, d;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const f = e[r];
    if (f !== 0) {
      if (((s = n[n.length - 1]), e[s] < f)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (u = 0, i = n.length - 1; u < i; )
        (d = (u + i) >> 1), e[n[d]] < f ? (u = d + 1) : (i = d);
      f < e[n[u]] && (u > 0 && (t[r] = n[u - 1]), (n[u] = r));
    }
  }
  for (u = n.length, i = n[u - 1]; u-- > 0; ) (n[u] = i), (i = t[i]);
  return n;
}
function Ei(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Ei(t);
}
const oc = (e) => e.__isTeleport,
  $e = Symbol.for("v-fgt"),
  vn = Symbol.for("v-txt"),
  Je = Symbol.for("v-cmt"),
  Gr = Symbol.for("v-stc"),
  hr = [];
let Ke = null;
function Me(e = !1) {
  hr.push((Ke = e ? null : []));
}
function ic() {
  hr.pop(), (Ke = hr[hr.length - 1] || null);
}
let Sr = 1;
function vu(e) {
  Sr += e;
}
function Si(e) {
  return (
    (e.dynamicChildren = Sr > 0 ? Ke || Wt : null),
    ic(),
    Sr > 0 && Ke && Ke.push(e),
    e
  );
}
function De(e, t, n, r, s, u) {
  return Si(Q(e, t, n, r, s, u, !0));
}
function $s(e, t, n, r, s) {
  return Si(ve(e, t, n, r, s, !0));
}
function ss(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Nt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const kn = "__vInternal",
  Ci = ({ key: e }) => e ?? null,
  Jr = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? ke(e) || Ee(e) || se(e)
        ? { i: Le, r: e, k: t, f: !!n }
        : e
      : null
  );
function Q(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  u = e === $e ? 0 : 1,
  i = !1,
  d = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ci(t),
    ref: t && Jr(t),
    scopeId: ri,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: u,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Le,
  };
  return (
    d
      ? (Ds(l, n), u & 128 && e.normalize(l))
      : n && (l.shapeFlag |= ke(n) ? 8 : 16),
    Sr > 0 &&
      !i &&
      Ke &&
      (l.patchFlag > 0 || u & 6) &&
      l.patchFlag !== 32 &&
      Ke.push(l),
    l
  );
}
const ve = ac;
function ac(e, t = null, n = null, r = 0, s = null, u = !1) {
  if (((!e || e === ni) && (e = Je), ss(e))) {
    const d = Tt(e, t, !0);
    return (
      n && Ds(d, n),
      Sr > 0 &&
        !u &&
        Ke &&
        (d.shapeFlag & 6 ? (Ke[Ke.indexOf(e)] = d) : Ke.push(d)),
      (d.patchFlag |= -2),
      d
    );
  }
  if ((bc(e) && (e = e.__vccOpts), t)) {
    t = dc(t);
    let { class: d, style: l } = t;
    d && !ke(d) && (t.class = at(d)),
      ge(l) && (qo(l) && !te(l) && (l = Ce({}, l)), (t.style = vs(l)));
  }
  const i = ke(e) ? 1 : Ad(e) ? 128 : oc(e) ? 64 : ge(e) ? 4 : se(e) ? 2 : 0;
  return Q(e, t, n, r, s, i, u, !0);
}
function dc(e) {
  return e ? (qo(e) || kn in e ? Ce({}, e) : e) : null;
}
function Tt(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: u, children: i } = e,
    d = t ? Pi(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ci(d),
    ref:
      t && t.ref
        ? n && s
          ? te(s)
            ? s.concat(Jr(t))
            : [s, Jr(t)]
          : Jr(t)
        : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== $e ? (u === -1 ? 16 : u | 16) : u,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Tt(e.ssContent),
    ssFallback: e.ssFallback && Tt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function Zr(e = " ", t = 0) {
  return ve(vn, null, e, t);
}
function Hs(e, t) {
  const n = ve(Gr, null, e);
  return (n.staticCount = t), n;
}
function qt(e = "", t = !1) {
  return t ? (Me(), $s(Je, null, e)) : ve(Je, null, e);
}
function Ye(e) {
  return e == null || typeof e == "boolean"
    ? ve(Je)
    : te(e)
    ? ve($e, null, e.slice())
    : typeof e == "object"
    ? vt(e)
    : ve(vn, null, String(e));
}
function vt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Tt(e);
}
function Ds(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (te(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Ds(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(kn in t)
        ? (t._ctx = Le)
        : s === 3 &&
          Le &&
          (Le.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    se(t)
      ? ((t = { default: t, _ctx: Le }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Zr(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Pi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = at([t.class, r.class]));
      else if (s === "style") t.style = vs([t.style, r.style]);
      else if (ln(s)) {
        const u = t[s],
          i = r[s];
        i &&
          u !== i &&
          !(te(u) && u.includes(i)) &&
          (t[s] = u ? [].concat(u, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Qe(e, t, n, r = null) {
  Ve(e, t, 7, [n, r]);
}
const cc = gi();
let lc = 0;
function fc(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || cc,
    u = {
      uid: lc++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Ro(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: bi(r, s),
      emitsOptions: ti(r, s),
      emit: null,
      emitted: null,
      propsDefaults: _e,
      inheritAttrs: r.inheritAttrs,
      ctx: _e,
      data: _e,
      props: _e,
      attrs: _e,
      slots: _e,
      refs: _e,
      setupState: _e,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (u.ctx = { _: u }),
    (u.root = t ? t.root : u),
    (u.emit = yd.bind(null, u)),
    e.ce && e.ce(u),
    u
  );
}
let Re = null;
const Ai = () => Re || Le;
let on, us;
{
  const e = Po(),
    t = (n, r) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (u) => {
          s.length > 1 ? s.forEach((i) => i(u)) : s[0](u);
        }
      );
    };
  (on = t("__VUE_INSTANCE_SETTERS__", (n) => (Re = n))),
    (us = t("__VUE_SSR_SETTERS__", (n) => (En = n)));
}
const Lr = (e) => {
    const t = Re;
    return (
      on(e),
      e.scope.on(),
      () => {
        e.scope.off(), on(t);
      }
    );
  },
  ku = () => {
    Re && Re.scope.off(), on(null);
  };
function Ti(e) {
  return e.vnode.shapeFlag & 4;
}
let En = !1;
function hc(e, t = !1) {
  t && us(t);
  const { props: n, children: r } = e.vnode,
    s = Ti(e);
  Xd(e, n, s, t), ec(e, r);
  const u = s ? pc(e, t) : void 0;
  return t && us(!1), u;
}
function pc(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = mn(new Proxy(e.ctx, Ud)));
  const { setup: r } = n;
  if (r) {
    const s = (e.setupContext = r.length > 1 ? gc(e) : null),
      u = Lr(e);
    Ht();
    const i = Ct(r, e, 0, [e.props, s]);
    if ((Dt(), u(), Eo(i))) {
      if ((i.then(ku, ku), t))
        return i
          .then((d) => {
            Eu(e, d, t);
          })
          .catch((d) => {
            gn(d, e, 0);
          });
      e.asyncDep = i;
    } else Eu(e, i, t);
  } else Ri(e, t);
}
function Eu(e, t, n) {
  se(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ge(t) && (e.setupState = Jo(t)),
    Ri(e, n);
}
let Su;
function Ri(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Su && !r.render) {
      const s = r.template || Bs(e).template;
      if (s) {
        const { isCustomElement: u, compilerOptions: i } = e.appContext.config,
          { delimiters: d, compilerOptions: l } = r,
          f = Ce(Ce({ isCustomElement: u, delimiters: d }, i), l);
        r.render = Su(s, f);
      }
    }
    e.render = r.render || Ue;
  }
  {
    const s = Lr(e);
    Ht();
    try {
      Vd(e);
    } finally {
      Dt(), s();
    }
  }
}
function mc(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return Fe(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function gc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return mc(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Sn(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Jo(mn(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in fr) return fr[n](e);
        },
        has(t, n) {
          return n in t || n in fr;
        },
      }))
    );
}
function _c(e, t = !0) {
  return se(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function bc(e) {
  return se(e) && "__vccOpts" in e;
}
const Ne = (e, t) => id(e, t, En);
function Cr(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? ge(t) && !te(t)
      ? ss(t)
        ? ve(e, null, [t])
        : ve(e, t)
      : ve(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && ss(n) && (n = [n]),
      ve(e, t, n));
}
const wc = "3.4.21";
/**
 * @vue/runtime-dom v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const yc = "http://www.w3.org/2000/svg",
  vc = "http://www.w3.org/1998/Math/MathML",
  kt = typeof document < "u" ? document : null,
  Cu = kt && kt.createElement("template"),
  kc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s =
        t === "svg"
          ? kt.createElementNS(yc, e)
          : t === "mathml"
          ? kt.createElementNS(vc, e)
          : kt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => kt.createTextNode(e),
    createComment: (e) => kt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => kt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, u) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === u || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === u || !(s = s.nextSibling));

        );
      else {
        Cu.innerHTML =
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
            ? `<math>${e}</math>`
            : e;
        const d = Cu.content;
        if (r === "svg" || r === "mathml") {
          const l = d.firstChild;
          for (; l.firstChild; ) d.appendChild(l.firstChild);
          d.removeChild(l);
        }
        t.insertBefore(d, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  pt = "transition",
  or = "animation",
  Xt = Symbol("_vtc"),
  jr = (e, { slots: t }) => Cr(Md, Li(e), t);
jr.displayName = "Transition";
const Oi = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Ec = (jr.props = Ce({}, ai, Oi)),
  jt = (e, t = []) => {
    te(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Pu = (e) => (e ? (te(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Li(e) {
  const t = {};
  for (const P in e) P in Oi || (t[P] = e[P]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: s,
      enterFromClass: u = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: d = `${n}-enter-to`,
      appearFromClass: l = u,
      appearActiveClass: f = i,
      appearToClass: h = d,
      leaveFromClass: g = `${n}-leave-from`,
      leaveActiveClass: v = `${n}-leave-active`,
      leaveToClass: S = `${n}-leave-to`,
    } = e,
    C = Sc(s),
    T = C && C[0],
    q = C && C[1],
    {
      onBeforeEnter: z,
      onEnter: U,
      onEnterCancelled: K,
      onLeave: o,
      onLeaveCancelled: c,
      onBeforeAppear: a = z,
      onAppear: p = U,
      onAppearCancelled: m = K,
    } = t,
    b = (P, L, N) => {
      _t(P, L ? h : d), _t(P, L ? f : i), N && N();
    },
    _ = (P, L) => {
      (P._isLeaving = !1), _t(P, g), _t(P, S), _t(P, v), L && L();
    },
    E = (P) => (L, N) => {
      const F = P ? p : U,
        y = () => b(L, P, N);
      jt(F, [L, y]),
        Au(() => {
          _t(L, P ? l : u), ot(L, P ? h : d), Pu(F) || Tu(L, r, T, y);
        });
    };
  return Ce(t, {
    onBeforeEnter(P) {
      jt(z, [P]), ot(P, u), ot(P, i);
    },
    onBeforeAppear(P) {
      jt(a, [P]), ot(P, l), ot(P, f);
    },
    onEnter: E(!1),
    onAppear: E(!0),
    onLeave(P, L) {
      P._isLeaving = !0;
      const N = () => _(P, L);
      ot(P, g),
        Mi(),
        ot(P, v),
        Au(() => {
          P._isLeaving && (_t(P, g), ot(P, S), Pu(o) || Tu(P, r, q, N));
        }),
        jt(o, [P, N]);
    },
    onEnterCancelled(P) {
      b(P, !1), jt(K, [P]);
    },
    onAppearCancelled(P) {
      b(P, !0), jt(m, [P]);
    },
    onLeaveCancelled(P) {
      _(P), jt(c, [P]);
    },
  });
}
function Sc(e) {
  if (e == null) return null;
  if (ge(e)) return [$n(e.enter), $n(e.leave)];
  {
    const t = $n(e);
    return [t, t];
  }
}
function $n(e) {
  return Oa(e);
}
function ot(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Xt] || (e[Xt] = new Set())).add(t);
}
function _t(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Xt];
  n && (n.delete(t), n.size || (e[Xt] = void 0));
}
function Au(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Cc = 0;
function Tu(e, t, n, r) {
  const s = (e._endId = ++Cc),
    u = () => {
      s === e._endId && r();
    };
  if (n) return setTimeout(u, n);
  const { type: i, timeout: d, propCount: l } = ji(e, t);
  if (!i) return r();
  const f = i + "end";
  let h = 0;
  const g = () => {
      e.removeEventListener(f, v), u();
    },
    v = (S) => {
      S.target === e && ++h >= l && g();
    };
  setTimeout(() => {
    h < l && g();
  }, d + 1),
    e.addEventListener(f, v);
}
function ji(e, t) {
  const n = window.getComputedStyle(e),
    r = (C) => (n[C] || "").split(", "),
    s = r(`${pt}Delay`),
    u = r(`${pt}Duration`),
    i = Ru(s, u),
    d = r(`${or}Delay`),
    l = r(`${or}Duration`),
    f = Ru(d, l);
  let h = null,
    g = 0,
    v = 0;
  t === pt
    ? i > 0 && ((h = pt), (g = i), (v = u.length))
    : t === or
    ? f > 0 && ((h = or), (g = f), (v = l.length))
    : ((g = Math.max(i, f)),
      (h = g > 0 ? (i > f ? pt : or) : null),
      (v = h ? (h === pt ? u.length : l.length) : 0));
  const S =
    h === pt && /\b(transform|all)(,|$)/.test(r(`${pt}Property`).toString());
  return { type: h, timeout: g, propCount: v, hasTransform: S };
}
function Ru(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Ou(n) + Ou(e[r])));
}
function Ou(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Mi() {
  return document.body.offsetHeight;
}
function Pc(e, t, n) {
  const r = e[Xt];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Lu = Symbol("_vod"),
  Ac = Symbol("_vsh"),
  Tc = Symbol(""),
  Rc = /(^|;)\s*display\s*:/;
function Oc(e, t, n) {
  const r = e.style,
    s = ke(n);
  let u = !1;
  if (n && !s) {
    if (t)
      if (ke(t))
        for (const i of t.split(";")) {
          const d = i.slice(0, i.indexOf(":")).trim();
          n[d] == null && Xr(r, d, "");
        }
      else for (const i in t) n[i] == null && Xr(r, i, "");
    for (const i in n) i === "display" && (u = !0), Xr(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[Tc];
      i && (n += ";" + i), (r.cssText = n), (u = Rc.test(n));
    }
  } else t && e.removeAttribute("style");
  Lu in e && ((e[Lu] = u ? r.display : ""), e[Ac] && (r.display = "none"));
}
const ju = /\s*!important$/;
function Xr(e, t, n) {
  if (te(n)) n.forEach((r) => Xr(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = Lc(e, t);
    ju.test(n)
      ? e.setProperty(nr(r), n.replace(ju, ""), "important")
      : (e[r] = n);
  }
}
const Mu = ["Webkit", "Moz", "ms"],
  Hn = {};
function Lc(e, t) {
  const n = Hn[t];
  if (n) return n;
  let r = nt(t);
  if (r !== "filter" && r in e) return (Hn[t] = r);
  r = hn(r);
  for (let s = 0; s < Mu.length; s++) {
    const u = Mu[s] + r;
    if (u in e) return (Hn[t] = u);
  }
  return t;
}
const Nu = "http://www.w3.org/1999/xlink";
function jc(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Nu, t.slice(6, t.length))
      : e.setAttributeNS(Nu, t, n);
  else {
    const u = Fa(t);
    n == null || (u && !Ao(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, u ? "" : n);
  }
}
function Mc(e, t, n, r, s, u, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, s, u), (e[t] = n ?? "");
    return;
  }
  const d = e.tagName;
  if (t === "value" && d !== "PROGRESS" && !d.includes("-")) {
    const f = d === "OPTION" ? e.getAttribute("value") || "" : e.value,
      h = n ?? "";
    (f !== h || !("_value" in e)) && (e.value = h),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean"
      ? (n = Ao(n))
      : n == null && f === "string"
      ? ((n = ""), (l = !0))
      : f === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function it(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Nc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Iu = Symbol("_vei");
function Ic(e, t, n, r, s = null) {
  const u = e[Iu] || (e[Iu] = {}),
    i = u[t];
  if (r && i) i.value = r;
  else {
    const [d, l] = Fc(t);
    if (r) {
      const f = (u[t] = $c(r, s));
      it(e, d, f, l);
    } else i && (Nc(e, d, i, l), (u[t] = void 0));
  }
}
const Fu = /(?:Once|Passive|Capture)$/;
function Fc(e) {
  let t;
  if (Fu.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Fu)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : nr(e.slice(2)), t];
}
let Dn = 0;
const Bc = Promise.resolve(),
  zc = () => Dn || (Bc.then(() => (Dn = 0)), (Dn = Date.now()));
function $c(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Ve(Hc(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = zc()), n;
}
function Hc(e, t) {
  if (te(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const Bu = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Dc = (e, t, n, r, s, u, i, d, l) => {
    const f = s === "svg";
    t === "class"
      ? Pc(e, r, f)
      : t === "style"
      ? Oc(e, n, r)
      : ln(t)
      ? bs(t) || Ic(e, t, n, r, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Uc(e, t, r, f)
        )
      ? Mc(e, t, r, u, i, d, l)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        jc(e, t, r, f));
  };
function Uc(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Bu(t) && se(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Bu(t) && ke(n) ? !1 : t in e;
}
const Ni = new WeakMap(),
  Ii = new WeakMap(),
  an = Symbol("_moveCb"),
  zu = Symbol("_enterCb"),
  Fi = {
    name: "TransitionGroup",
    props: Ce({}, Ec, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Ai(),
        r = ii();
      let s, u;
      return (
        fi(() => {
          if (!s.length) return;
          const i = e.moveClass || `${e.name || "v"}-move`;
          if (!Gc(s[0].el, n.vnode.el, i)) return;
          s.forEach(qc), s.forEach(Wc);
          const d = s.filter(Kc);
          Mi(),
            d.forEach((l) => {
              const f = l.el,
                h = f.style;
              ot(f, i),
                (h.transform = h.webkitTransform = h.transitionDuration = "");
              const g = (f[an] = (v) => {
                (v && v.target !== f) ||
                  ((!v || /transform$/.test(v.propertyName)) &&
                    (f.removeEventListener("transitionend", g),
                    (f[an] = null),
                    _t(f, i)));
              });
              f.addEventListener("transitionend", g);
            });
        }),
        () => {
          const i = ie(e),
            d = Li(i);
          let l = i.tag || $e;
          (s = u), (u = t.default ? Ms(t.default()) : []);
          for (let f = 0; f < u.length; f++) {
            const h = u[f];
            h.key != null && Er(h, kr(h, d, r, n));
          }
          if (s)
            for (let f = 0; f < s.length; f++) {
              const h = s[f];
              Er(h, kr(h, d, r, n)), Ni.set(h, h.el.getBoundingClientRect());
            }
          return ve(l, null, u);
        }
      );
    },
  },
  Vc = (e) => delete e.mode;
Fi.props;
const xc = Fi;
function qc(e) {
  const t = e.el;
  t[an] && t[an](), t[zu] && t[zu]();
}
function Wc(e) {
  Ii.set(e, e.el.getBoundingClientRect());
}
function Kc(e) {
  const t = Ni.get(e),
    n = Ii.get(e),
    r = t.left - n.left,
    s = t.top - n.top;
  if (r || s) {
    const u = e.el.style;
    return (
      (u.transform = u.webkitTransform = `translate(${r}px,${s}px)`),
      (u.transitionDuration = "0s"),
      e
    );
  }
}
function Gc(e, t, n) {
  const r = e.cloneNode(),
    s = e[Xt];
  s &&
    s.forEach((d) => {
      d.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }),
    n.split(/\s+/).forEach((d) => d && r.classList.add(d)),
    (r.style.display = "none");
  const u = t.nodeType === 1 ? t : t.parentNode;
  u.appendChild(r);
  const { hasTransform: i } = ji(r);
  return u.removeChild(r), i;
}
const Rt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return te(t) ? (n) => Vr(t, n) : t;
};
function Jc(e) {
  e.target.composing = !0;
}
function $u(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const xe = Symbol("_assign"),
  dn = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[xe] = Rt(s);
      const u = r || (s.props && s.props.type === "number");
      it(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let d = e.value;
        n && (d = d.trim()), u && (d = br(d)), e[xe](d);
      }),
        n &&
          it(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (it(e, "compositionstart", Jc),
          it(e, "compositionend", $u),
          it(e, "change", $u));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      u
    ) {
      if (((e[xe] = Rt(u)), e.composing)) return;
      const i = s || e.type === "number" ? br(e.value) : e.value,
        d = t ?? "";
      i !== d &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          (n || (r && e.value.trim() === d))) ||
          (e.value = d));
    },
  },
  Bi = {
    deep: !0,
    created(e, t, n) {
      (e[xe] = Rt(n)),
        it(e, "change", () => {
          const r = e._modelValue,
            s = Qt(e),
            u = e.checked,
            i = e[xe];
          if (te(r)) {
            const d = ks(r, s),
              l = d !== -1;
            if (u && !l) i(r.concat(s));
            else if (!u && l) {
              const f = [...r];
              f.splice(d, 1), i(f);
            }
          } else if (rr(r)) {
            const d = new Set(r);
            u ? d.add(s) : d.delete(s), i(d);
          } else i(zi(e, u));
        });
    },
    mounted: Hu,
    beforeUpdate(e, t, n) {
      (e[xe] = Rt(n)), Hu(e, t, n);
    },
  };
function Hu(e, { value: t, oldValue: n }, r) {
  (e._modelValue = t),
    te(t)
      ? (e.checked = ks(t, r.props.value) > -1)
      : rr(t)
      ? (e.checked = t.has(r.props.value))
      : t !== n && (e.checked = zt(t, zi(e, !0)));
}
const Zc = {
    created(e, { value: t }, n) {
      (e.checked = zt(t, n.props.value)),
        (e[xe] = Rt(n)),
        it(e, "change", () => {
          e[xe](Qt(e));
        });
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      (e[xe] = Rt(r)), t !== n && (e.checked = zt(t, r.props.value));
    },
  },
  Xc = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, r) {
      const s = rr(t);
      it(e, "change", () => {
        const u = Array.prototype.filter
          .call(e.options, (i) => i.selected)
          .map((i) => (n ? br(Qt(i)) : Qt(i)));
        e[xe](e.multiple ? (s ? new Set(u) : u) : u[0]),
          (e._assigning = !0),
          _n(() => {
            e._assigning = !1;
          });
      }),
        (e[xe] = Rt(r));
    },
    mounted(e, { value: t, modifiers: { number: n } }) {
      Du(e, t, n);
    },
    beforeUpdate(e, t, n) {
      e[xe] = Rt(n);
    },
    updated(e, { value: t, modifiers: { number: n } }) {
      e._assigning || Du(e, t, n);
    },
  };
function Du(e, t, n) {
  const r = e.multiple,
    s = te(t);
  if (!(r && !s && !rr(t))) {
    for (let u = 0, i = e.options.length; u < i; u++) {
      const d = e.options[u],
        l = Qt(d);
      if (r)
        if (s) {
          const f = typeof l;
          f === "string" || f === "number"
            ? (d.selected = t.includes(n ? br(l) : l))
            : (d.selected = ks(t, l) > -1);
        } else d.selected = t.has(l);
      else if (zt(Qt(d), t)) {
        e.selectedIndex !== u && (e.selectedIndex = u);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Qt(e) {
  return "_value" in e ? e._value : e.value;
}
function zi(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Qc = {
  created(e, t, n) {
    Ur(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Ur(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, r) {
    Ur(e, t, n, r, "beforeUpdate");
  },
  updated(e, t, n, r) {
    Ur(e, t, n, r, "updated");
  },
};
function Yc(e, t) {
  switch (e) {
    case "SELECT":
      return Xc;
    case "TEXTAREA":
      return dn;
    default:
      switch (t) {
        case "checkbox":
          return Bi;
        case "radio":
          return Zc;
        default:
          return dn;
      }
  }
}
function Ur(e, t, n, r, s) {
  const i = Yc(e.tagName, n.props && n.props.type)[s];
  i && i(e, t, n, r);
}
const el = ["ctrl", "shift", "alt", "meta"],
  tl = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => el.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  $i = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (s, ...u) => {
        for (let i = 0; i < t.length; i++) {
          const d = tl[t[i]];
          if (d && d(s, t)) return;
        }
        return e(s, ...u);
      })
    );
  },
  rl = Ce({ patchProp: Dc }, kc);
let Uu;
function nl() {
  return Uu || (Uu = rc(rl));
}
const sl = (...e) => {
  const t = nl().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = ol(r);
      if (!s) return;
      const u = t._component;
      !se(u) && !u.render && !u.template && (u.template = s.innerHTML),
        (s.innerHTML = "");
      const i = n(s, !1, ul(s));
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function ul(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ol(e) {
  return ke(e) ? document.querySelector(e) : e;
}
/*!
 * vue-router v4.3.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const xt = typeof document < "u";
function il(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const he = Object.assign;
function Un(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = Ze(s) ? s.map(e) : e(s);
  }
  return n;
}
const pr = () => {},
  Ze = Array.isArray,
  Hi = /#/g,
  al = /&/g,
  dl = /\//g,
  cl = /=/g,
  ll = /\?/g,
  Di = /\+/g,
  fl = /%5B/g,
  hl = /%5D/g,
  Ui = /%5E/g,
  pl = /%60/g,
  Vi = /%7B/g,
  ml = /%7C/g,
  xi = /%7D/g,
  gl = /%20/g;
function Us(e) {
  return encodeURI("" + e)
    .replace(ml, "|")
    .replace(fl, "[")
    .replace(hl, "]");
}
function _l(e) {
  return Us(e).replace(Vi, "{").replace(xi, "}").replace(Ui, "^");
}
function os(e) {
  return Us(e)
    .replace(Di, "%2B")
    .replace(gl, "+")
    .replace(Hi, "%23")
    .replace(al, "%26")
    .replace(pl, "`")
    .replace(Vi, "{")
    .replace(xi, "}")
    .replace(Ui, "^");
}
function bl(e) {
  return os(e).replace(cl, "%3D");
}
function wl(e) {
  return Us(e).replace(Hi, "%23").replace(ll, "%3F");
}
function yl(e) {
  return e == null ? "" : wl(e).replace(dl, "%2F");
}
function Pr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const vl = /\/$/,
  kl = (e) => e.replace(vl, "");
function Vn(e, t, n = "/") {
  let r,
    s = {},
    u = "",
    i = "";
  const d = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    d < l && d >= 0 && (l = -1),
    l > -1 &&
      ((r = t.slice(0, l)),
      (u = t.slice(l + 1, d > -1 ? d : t.length)),
      (s = e(u))),
    d > -1 && ((r = r || t.slice(0, d)), (i = t.slice(d, t.length))),
    (r = Pl(r ?? t, n)),
    { fullPath: r + (u && "?") + u + i, path: r, query: s, hash: Pr(i) }
  );
}
function El(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Vu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Sl(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    Yt(t.matched[r], n.matched[s]) &&
    qi(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Yt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function qi(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Cl(e[n], t[n])) return !1;
  return !0;
}
function Cl(e, t) {
  return Ze(e) ? xu(e, t) : Ze(t) ? xu(t, e) : e === t;
}
function xu(e, t) {
  return Ze(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function Pl(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/"),
    s = r[r.length - 1];
  (s === ".." || s === ".") && r.push("");
  let u = n.length - 1,
    i,
    d;
  for (i = 0; i < r.length; i++)
    if (((d = r[i]), d !== "."))
      if (d === "..") u > 1 && u--;
      else break;
  return n.slice(0, u).join("/") + "/" + r.slice(i).join("/");
}
var Ar;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Ar || (Ar = {}));
var mr;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(mr || (mr = {}));
function Al(e) {
  if (!e)
    if (xt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), kl(e);
}
const Tl = /^[^#]+#/;
function Rl(e, t) {
  return e.replace(Tl, "#") + t;
}
function Ol(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const Cn = () => ({ left: window.scrollX, top: window.scrollY });
function Ll(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = Ol(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function qu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const is = new Map();
function jl(e, t) {
  is.set(e, t);
}
function Ml(e) {
  const t = is.get(e);
  return is.delete(e), t;
}
let Nl = () => location.protocol + "//" + location.host;
function Wi(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    u = e.indexOf("#");
  if (u > -1) {
    let d = s.includes(e.slice(u)) ? e.slice(u).length : 1,
      l = s.slice(d);
    return l[0] !== "/" && (l = "/" + l), Vu(l, "");
  }
  return Vu(n, e) + r + s;
}
function Il(e, t, n, r) {
  let s = [],
    u = [],
    i = null;
  const d = ({ state: v }) => {
    const S = Wi(e, location),
      C = n.value,
      T = t.value;
    let q = 0;
    if (v) {
      if (((n.value = S), (t.value = v), i && i === C)) {
        i = null;
        return;
      }
      q = T ? v.position - T.position : 0;
    } else r(S);
    s.forEach((z) => {
      z(n.value, C, {
        delta: q,
        type: Ar.pop,
        direction: q ? (q > 0 ? mr.forward : mr.back) : mr.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function f(v) {
    s.push(v);
    const S = () => {
      const C = s.indexOf(v);
      C > -1 && s.splice(C, 1);
    };
    return u.push(S), S;
  }
  function h() {
    const { history: v } = window;
    v.state && v.replaceState(he({}, v.state, { scroll: Cn() }), "");
  }
  function g() {
    for (const v of u) v();
    (u = []),
      window.removeEventListener("popstate", d),
      window.removeEventListener("beforeunload", h);
  }
  return (
    window.addEventListener("popstate", d),
    window.addEventListener("beforeunload", h, { passive: !0 }),
    { pauseListeners: l, listen: f, destroy: g }
  );
}
function Wu(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Cn() : null,
  };
}
function Fl(e) {
  const { history: t, location: n } = window,
    r = { value: Wi(e, n) },
    s = { value: t.state };
  s.value ||
    u(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function u(l, f, h) {
    const g = e.indexOf("#"),
      v =
        g > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(g)) + l
          : Nl() + e + l;
    try {
      t[h ? "replaceState" : "pushState"](f, "", v), (s.value = f);
    } catch (S) {
      console.error(S), n[h ? "replace" : "assign"](v);
    }
  }
  function i(l, f) {
    const h = he({}, t.state, Wu(s.value.back, l, s.value.forward, !0), f, {
      position: s.value.position,
    });
    u(l, h, !0), (r.value = l);
  }
  function d(l, f) {
    const h = he({}, s.value, t.state, { forward: l, scroll: Cn() });
    u(h.current, h, !0);
    const g = he({}, Wu(r.value, l, null), { position: h.position + 1 }, f);
    u(l, g, !1), (r.value = l);
  }
  return { location: r, state: s, push: d, replace: i };
}
function Bl(e) {
  e = Al(e);
  const t = Fl(e),
    n = Il(e, t.state, t.location, t.replace);
  function r(u, i = !0) {
    i || n.pauseListeners(), history.go(u);
  }
  const s = he(
    { location: "", base: e, go: r, createHref: Rl.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function zl(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    Bl(e)
  );
}
function $l(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Ki(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const mt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Gi = Symbol("");
var Ku;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Ku || (Ku = {}));
function er(e, t) {
  return he(new Error(), { type: e, [Gi]: !0 }, t);
}
function ut(e, t) {
  return e instanceof Error && Gi in e && (t == null || !!(e.type & t));
}
const Gu = "[^/]+?",
  Hl = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Dl = /[.+*?^${}()[\]/\\]/g;
function Ul(e, t) {
  const n = he({}, Hl, t),
    r = [];
  let s = n.start ? "^" : "";
  const u = [];
  for (const f of e) {
    const h = f.length ? [] : [90];
    n.strict && !f.length && (s += "/");
    for (let g = 0; g < f.length; g++) {
      const v = f[g];
      let S = 40 + (n.sensitive ? 0.25 : 0);
      if (v.type === 0)
        g || (s += "/"), (s += v.value.replace(Dl, "\\$&")), (S += 40);
      else if (v.type === 1) {
        const { value: C, repeatable: T, optional: q, regexp: z } = v;
        u.push({ name: C, repeatable: T, optional: q });
        const U = z || Gu;
        if (U !== Gu) {
          S += 10;
          try {
            new RegExp(`(${U})`);
          } catch (o) {
            throw new Error(
              `Invalid custom RegExp for param "${C}" (${U}): ` + o.message
            );
          }
        }
        let K = T ? `((?:${U})(?:/(?:${U}))*)` : `(${U})`;
        g || (K = q && f.length < 2 ? `(?:/${K})` : "/" + K),
          q && (K += "?"),
          (s += K),
          (S += 20),
          q && (S += -8),
          T && (S += -20),
          U === ".*" && (S += -50);
      }
      h.push(S);
    }
    r.push(h);
  }
  if (n.strict && n.end) {
    const f = r.length - 1;
    r[f][r[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? (s += "$") : n.strict && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function d(f) {
    const h = f.match(i),
      g = {};
    if (!h) return null;
    for (let v = 1; v < h.length; v++) {
      const S = h[v] || "",
        C = u[v - 1];
      g[C.name] = S && C.repeatable ? S.split("/") : S;
    }
    return g;
  }
  function l(f) {
    let h = "",
      g = !1;
    for (const v of e) {
      (!g || !h.endsWith("/")) && (h += "/"), (g = !1);
      for (const S of v)
        if (S.type === 0) h += S.value;
        else if (S.type === 1) {
          const { value: C, repeatable: T, optional: q } = S,
            z = C in f ? f[C] : "";
          if (Ze(z) && !T)
            throw new Error(
              `Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`
            );
          const U = Ze(z) ? z.join("/") : z;
          if (!U)
            if (q)
              v.length < 2 &&
                (h.endsWith("/") ? (h = h.slice(0, -1)) : (g = !0));
            else throw new Error(`Missing required param "${C}"`);
          h += U;
        }
    }
    return h || "/";
  }
  return { re: i, score: r, keys: u, parse: d, stringify: l };
}
function Vl(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 80
      ? 1
      : -1
    : 0;
}
function xl(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const u = Vl(r[n], s[n]);
    if (u) return u;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Ju(r)) return 1;
    if (Ju(s)) return -1;
  }
  return s.length - r.length;
}
function Ju(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const ql = { type: 0, value: "" },
  Wl = /[a-zA-Z0-9_]/;
function Kl(e) {
  if (!e) return [[]];
  if (e === "/") return [[ql]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(S) {
    throw new Error(`ERR (${n})/"${f}": ${S}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let u;
  function i() {
    u && s.push(u), (u = []);
  }
  let d = 0,
    l,
    f = "",
    h = "";
  function g() {
    f &&
      (n === 0
        ? u.push({ type: 0, value: f })
        : n === 1 || n === 2 || n === 3
        ? (u.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`
            ),
          u.push({
            type: 1,
            value: f,
            regexp: h,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (f = ""));
  }
  function v() {
    f += l;
  }
  for (; d < e.length; ) {
    if (((l = e[d++]), l === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (f && g(), i()) : l === ":" ? (g(), (n = 1)) : v();
        break;
      case 4:
        v(), (n = r);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : Wl.test(l)
          ? v()
          : (g(), (n = 0), l !== "*" && l !== "?" && l !== "+" && d--);
        break;
      case 2:
        l === ")"
          ? h[h.length - 1] == "\\"
            ? (h = h.slice(0, -1) + l)
            : (n = 3)
          : (h += l);
        break;
      case 3:
        g(), (n = 0), l !== "*" && l !== "?" && l !== "+" && d--, (h = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), g(), i(), s;
}
function Gl(e, t, n) {
  const r = Ul(Kl(e.path), n),
    s = he(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Jl(e, t) {
  const n = [],
    r = new Map();
  t = Qu({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(h) {
    return r.get(h);
  }
  function u(h, g, v) {
    const S = !v,
      C = Zl(h);
    C.aliasOf = v && v.record;
    const T = Qu(t, h),
      q = [C];
    if ("alias" in h) {
      const K = typeof h.alias == "string" ? [h.alias] : h.alias;
      for (const o of K)
        q.push(
          he({}, C, {
            components: v ? v.record.components : C.components,
            path: o,
            aliasOf: v ? v.record : C,
          })
        );
    }
    let z, U;
    for (const K of q) {
      const { path: o } = K;
      if (g && o[0] !== "/") {
        const c = g.record.path,
          a = c[c.length - 1] === "/" ? "" : "/";
        K.path = g.record.path + (o && a + o);
      }
      if (
        ((z = Gl(K, g, T)),
        v
          ? v.alias.push(z)
          : ((U = U || z),
            U !== z && U.alias.push(z),
            S && h.name && !Xu(z) && i(h.name)),
        C.children)
      ) {
        const c = C.children;
        for (let a = 0; a < c.length; a++) u(c[a], z, v && v.children[a]);
      }
      (v = v || z),
        ((z.record.components && Object.keys(z.record.components).length) ||
          z.record.name ||
          z.record.redirect) &&
          l(z);
    }
    return U
      ? () => {
          i(U);
        }
      : pr;
  }
  function i(h) {
    if (Ki(h)) {
      const g = r.get(h);
      g &&
        (r.delete(h),
        n.splice(n.indexOf(g), 1),
        g.children.forEach(i),
        g.alias.forEach(i));
    } else {
      const g = n.indexOf(h);
      g > -1 &&
        (n.splice(g, 1),
        h.record.name && r.delete(h.record.name),
        h.children.forEach(i),
        h.alias.forEach(i));
    }
  }
  function d() {
    return n;
  }
  function l(h) {
    let g = 0;
    for (
      ;
      g < n.length &&
      xl(h, n[g]) >= 0 &&
      (h.record.path !== n[g].record.path || !Ji(h, n[g]));

    )
      g++;
    n.splice(g, 0, h), h.record.name && !Xu(h) && r.set(h.record.name, h);
  }
  function f(h, g) {
    let v,
      S = {},
      C,
      T;
    if ("name" in h && h.name) {
      if (((v = r.get(h.name)), !v)) throw er(1, { location: h });
      (T = v.record.name),
        (S = he(
          Zu(
            g.params,
            v.keys
              .filter((U) => !U.optional)
              .concat(v.parent ? v.parent.keys.filter((U) => U.optional) : [])
              .map((U) => U.name)
          ),
          h.params &&
            Zu(
              h.params,
              v.keys.map((U) => U.name)
            )
        )),
        (C = v.stringify(S));
    } else if (h.path != null)
      (C = h.path),
        (v = n.find((U) => U.re.test(C))),
        v && ((S = v.parse(C)), (T = v.record.name));
    else {
      if (((v = g.name ? r.get(g.name) : n.find((U) => U.re.test(g.path))), !v))
        throw er(1, { location: h, currentLocation: g });
      (T = v.record.name),
        (S = he({}, g.params, h.params)),
        (C = v.stringify(S));
    }
    const q = [];
    let z = v;
    for (; z; ) q.unshift(z.record), (z = z.parent);
    return { name: T, path: C, params: S, matched: q, meta: Ql(q) };
  }
  return (
    e.forEach((h) => u(h)),
    {
      addRoute: u,
      resolve: f,
      removeRoute: i,
      getRoutes: d,
      getRecordMatcher: s,
    }
  );
}
function Zu(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Zl(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Xl(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function Xl(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function Xu(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Ql(e) {
  return e.reduce((t, n) => he(t, n.meta), {});
}
function Qu(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Ji(e, t) {
  return t.children.some((n) => n === e || Ji(e, n));
}
function Yl(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const u = r[s].replace(Di, " "),
      i = u.indexOf("="),
      d = Pr(i < 0 ? u : u.slice(0, i)),
      l = i < 0 ? null : Pr(u.slice(i + 1));
    if (d in t) {
      let f = t[d];
      Ze(f) || (f = t[d] = [f]), f.push(l);
    } else t[d] = l;
  }
  return t;
}
function Yu(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = bl(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ze(r) ? r.map((u) => u && os(u)) : [r && os(r)]).forEach((u) => {
      u !== void 0 &&
        ((t += (t.length ? "&" : "") + n), u != null && (t += "=" + u));
    });
  }
  return t;
}
function ef(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Ze(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const tf = Symbol(""),
  eo = Symbol(""),
  Pn = Symbol(""),
  Zi = Symbol(""),
  as = Symbol("");
function ir() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function Et(e, t, n, r, s, u = (i) => i()) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((d, l) => {
      const f = (v) => {
          v === !1
            ? l(er(4, { from: n, to: t }))
            : v instanceof Error
            ? l(v)
            : $l(v)
            ? l(er(2, { from: t, to: v }))
            : (i &&
                r.enterCallbacks[s] === i &&
                typeof v == "function" &&
                i.push(v),
              d());
        },
        h = u(() => e.call(r && r.instances[s], t, n, f));
      let g = Promise.resolve(h);
      e.length < 3 && (g = g.then(f)), g.catch((v) => l(v));
    });
}
function xn(e, t, n, r, s = (u) => u()) {
  const u = [];
  for (const i of e)
    for (const d in i.components) {
      let l = i.components[d];
      if (!(t !== "beforeRouteEnter" && !i.instances[d]))
        if (rf(l)) {
          const h = (l.__vccOpts || l)[t];
          h && u.push(Et(h, n, r, i, d, s));
        } else {
          let f = l();
          u.push(() =>
            f.then((h) => {
              if (!h)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${d}" at "${i.path}"`)
                );
              const g = il(h) ? h.default : h;
              i.components[d] = g;
              const S = (g.__vccOpts || g)[t];
              return S && Et(S, n, r, i, d, s)();
            })
          );
        }
    }
  return u;
}
function rf(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function to(e) {
  const t = Ge(Pn),
    n = Ge(Zi),
    r = Ne(() => {
      const l = rt(e.to);
      return t.resolve(l);
    }),
    s = Ne(() => {
      const { matched: l } = r.value,
        { length: f } = l,
        h = l[f - 1],
        g = n.matched;
      if (!h || !g.length) return -1;
      const v = g.findIndex(Yt.bind(null, h));
      if (v > -1) return v;
      const S = ro(l[f - 2]);
      return f > 1 && ro(h) === S && g[g.length - 1].path !== S
        ? g.findIndex(Yt.bind(null, l[f - 2]))
        : v;
    }),
    u = Ne(() => s.value > -1 && of(n.params, r.value.params)),
    i = Ne(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        qi(n.params, r.value.params)
    );
  function d(l = {}) {
    return uf(l)
      ? t[rt(e.replace) ? "replace" : "push"](rt(e.to)).catch(pr)
      : Promise.resolve();
  }
  return {
    route: r,
    href: Ne(() => r.value.href),
    isActive: u,
    isExactActive: i,
    navigate: d,
  };
}
const nf = Ns({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: to,
    setup(e, { slots: t }) {
      const n = Or(to(e)),
        { options: r } = Ge(Pn),
        s = Ne(() => ({
          [no(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [no(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const u = t.default && t.default(n);
        return e.custom
          ? u
          : Cr(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              u
            );
      };
    },
  }),
  sf = nf;
function uf(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function of(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (!Ze(s) || s.length !== r.length || r.some((u, i) => u !== s[i]))
      return !1;
  }
  return !0;
}
function ro(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const no = (e, t, n) => e ?? t ?? n,
  af = Ns({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Ge(as),
        s = Ne(() => e.route || r.value),
        u = Ge(eo, 0),
        i = Ne(() => {
          let f = rt(u);
          const { matched: h } = s.value;
          let g;
          for (; (g = h[f]) && !g.components; ) f++;
          return f;
        }),
        d = Ne(() => s.value.matched[i.value]);
      Kr(
        eo,
        Ne(() => i.value + 1)
      ),
        Kr(tf, d),
        Kr(as, s);
      const l = Te();
      return (
        lr(
          () => [l.value, d.value, e.name],
          ([f, h, g], [v, S, C]) => {
            h &&
              ((h.instances[g] = f),
              S &&
                S !== h &&
                f &&
                f === v &&
                (h.leaveGuards.size || (h.leaveGuards = S.leaveGuards),
                h.updateGuards.size || (h.updateGuards = S.updateGuards))),
              f &&
                h &&
                (!S || !Yt(h, S) || !v) &&
                (h.enterCallbacks[g] || []).forEach((T) => T(f));
          },
          { flush: "post" }
        ),
        () => {
          const f = s.value,
            h = e.name,
            g = d.value,
            v = g && g.components[h];
          if (!v) return so(n.default, { Component: v, route: f });
          const S = g.props[h],
            C = S
              ? S === !0
                ? f.params
                : typeof S == "function"
                ? S(f)
                : S
              : null,
            q = Cr(
              v,
              he({}, C, t, {
                onVnodeUnmounted: (z) => {
                  z.component.isUnmounted && (g.instances[h] = null);
                },
                ref: l,
              })
            );
          return so(n.default, { Component: q, route: f }) || q;
        }
      );
    },
  });
function so(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const df = af;
function cf(e) {
  const t = Jl(e.routes, e),
    n = e.parseQuery || Yl,
    r = e.stringifyQuery || Yu,
    s = e.history,
    u = ir(),
    i = ir(),
    d = ir(),
    l = ad(mt);
  let f = mt;
  xt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const h = Un.bind(null, (O) => "" + O),
    g = Un.bind(null, yl),
    v = Un.bind(null, Pr);
  function S(O, V) {
    let W, Y;
    return (
      Ki(O) ? ((W = t.getRecordMatcher(O)), (Y = V)) : (Y = O), t.addRoute(Y, W)
    );
  }
  function C(O) {
    const V = t.getRecordMatcher(O);
    V && t.removeRoute(V);
  }
  function T() {
    return t.getRoutes().map((O) => O.record);
  }
  function q(O) {
    return !!t.getRecordMatcher(O);
  }
  function z(O, V) {
    if (((V = he({}, V || l.value)), typeof O == "string")) {
      const k = Vn(n, O, V.path),
        A = t.resolve({ path: k.path }, V),
        I = s.createHref(k.fullPath);
      return he(k, A, {
        params: v(A.params),
        hash: Pr(k.hash),
        redirectedFrom: void 0,
        href: I,
      });
    }
    let W;
    if (O.path != null) W = he({}, O, { path: Vn(n, O.path, V.path).path });
    else {
      const k = he({}, O.params);
      for (const A in k) k[A] == null && delete k[A];
      (W = he({}, O, { params: g(k) })), (V.params = g(V.params));
    }
    const Y = t.resolve(W, V),
      de = O.hash || "";
    Y.params = h(v(Y.params));
    const pe = El(r, he({}, O, { hash: _l(de), path: Y.path })),
      w = s.createHref(pe);
    return he(
      { fullPath: pe, hash: de, query: r === Yu ? ef(O.query) : O.query || {} },
      Y,
      { redirectedFrom: void 0, href: w }
    );
  }
  function U(O) {
    return typeof O == "string" ? Vn(n, O, l.value.path) : he({}, O);
  }
  function K(O, V) {
    if (f !== O) return er(8, { from: V, to: O });
  }
  function o(O) {
    return p(O);
  }
  function c(O) {
    return o(he(U(O), { replace: !0 }));
  }
  function a(O) {
    const V = O.matched[O.matched.length - 1];
    if (V && V.redirect) {
      const { redirect: W } = V;
      let Y = typeof W == "function" ? W(O) : W;
      return (
        typeof Y == "string" &&
          ((Y = Y.includes("?") || Y.includes("#") ? (Y = U(Y)) : { path: Y }),
          (Y.params = {})),
        he(
          {
            query: O.query,
            hash: O.hash,
            params: Y.path != null ? {} : O.params,
          },
          Y
        )
      );
    }
  }
  function p(O, V) {
    const W = (f = z(O)),
      Y = l.value,
      de = O.state,
      pe = O.force,
      w = O.replace === !0,
      k = a(W);
    if (k)
      return p(
        he(U(k), {
          state: typeof k == "object" ? he({}, de, k.state) : de,
          force: pe,
          replace: w,
        }),
        V || W
      );
    const A = W;
    A.redirectedFrom = V;
    let I;
    return (
      !pe && Sl(r, Y, W) && ((I = er(16, { to: A, from: Y })), X(Y, Y, !0, !1)),
      (I ? Promise.resolve(I) : _(A, Y))
        .catch((j) => (ut(j) ? (ut(j, 2) ? j : ue(j)) : B(j, A, Y)))
        .then((j) => {
          if (j) {
            if (ut(j, 2))
              return p(
                he({ replace: w }, U(j.to), {
                  state: typeof j.to == "object" ? he({}, de, j.to.state) : de,
                  force: pe,
                }),
                V || A
              );
          } else j = P(A, Y, !0, w, de);
          return E(A, Y, j), j;
        })
    );
  }
  function m(O, V) {
    const W = K(O, V);
    return W ? Promise.reject(W) : Promise.resolve();
  }
  function b(O) {
    const V = Pe.values().next().value;
    return V && typeof V.runWithContext == "function"
      ? V.runWithContext(O)
      : O();
  }
  function _(O, V) {
    let W;
    const [Y, de, pe] = lf(O, V);
    W = xn(Y.reverse(), "beforeRouteLeave", O, V);
    for (const k of Y)
      k.leaveGuards.forEach((A) => {
        W.push(Et(A, O, V));
      });
    const w = m.bind(null, O, V);
    return (
      W.push(w),
      le(W)
        .then(() => {
          W = [];
          for (const k of u.list()) W.push(Et(k, O, V));
          return W.push(w), le(W);
        })
        .then(() => {
          W = xn(de, "beforeRouteUpdate", O, V);
          for (const k of de)
            k.updateGuards.forEach((A) => {
              W.push(Et(A, O, V));
            });
          return W.push(w), le(W);
        })
        .then(() => {
          W = [];
          for (const k of pe)
            if (k.beforeEnter)
              if (Ze(k.beforeEnter))
                for (const A of k.beforeEnter) W.push(Et(A, O, V));
              else W.push(Et(k.beforeEnter, O, V));
          return W.push(w), le(W);
        })
        .then(
          () => (
            O.matched.forEach((k) => (k.enterCallbacks = {})),
            (W = xn(pe, "beforeRouteEnter", O, V, b)),
            W.push(w),
            le(W)
          )
        )
        .then(() => {
          W = [];
          for (const k of i.list()) W.push(Et(k, O, V));
          return W.push(w), le(W);
        })
        .catch((k) => (ut(k, 8) ? k : Promise.reject(k)))
    );
  }
  function E(O, V, W) {
    d.list().forEach((Y) => b(() => Y(O, V, W)));
  }
  function P(O, V, W, Y, de) {
    const pe = K(O, V);
    if (pe) return pe;
    const w = V === mt,
      k = xt ? history.state : {};
    W &&
      (Y || w
        ? s.replace(O.fullPath, he({ scroll: w && k && k.scroll }, de))
        : s.push(O.fullPath, de)),
      (l.value = O),
      X(O, V, W, w),
      ue();
  }
  let L;
  function N() {
    L ||
      (L = s.listen((O, V, W) => {
        if (!we.listening) return;
        const Y = z(O),
          de = a(Y);
        if (de) {
          p(he(de, { replace: !0 }), Y).catch(pr);
          return;
        }
        f = Y;
        const pe = l.value;
        xt && jl(qu(pe.fullPath, W.delta), Cn()),
          _(Y, pe)
            .catch((w) =>
              ut(w, 12)
                ? w
                : ut(w, 2)
                ? (p(w.to, Y)
                    .then((k) => {
                      ut(k, 20) &&
                        !W.delta &&
                        W.type === Ar.pop &&
                        s.go(-1, !1);
                    })
                    .catch(pr),
                  Promise.reject())
                : (W.delta && s.go(-W.delta, !1), B(w, Y, pe))
            )
            .then((w) => {
              (w = w || P(Y, pe, !1)),
                w &&
                  (W.delta && !ut(w, 8)
                    ? s.go(-W.delta, !1)
                    : W.type === Ar.pop && ut(w, 20) && s.go(-1, !1)),
                E(Y, pe, w);
            })
            .catch(pr);
      }));
  }
  let F = ir(),
    y = ir(),
    R;
  function B(O, V, W) {
    ue(O);
    const Y = y.list();
    return (
      Y.length ? Y.forEach((de) => de(O, V, W)) : console.error(O),
      Promise.reject(O)
    );
  }
  function J() {
    return R && l.value !== mt
      ? Promise.resolve()
      : new Promise((O, V) => {
          F.add([O, V]);
        });
  }
  function ue(O) {
    return (
      R ||
        ((R = !O),
        N(),
        F.list().forEach(([V, W]) => (O ? W(O) : V())),
        F.reset()),
      O
    );
  }
  function X(O, V, W, Y) {
    const { scrollBehavior: de } = e;
    if (!xt || !de) return Promise.resolve();
    const pe =
      (!W && Ml(qu(O.fullPath, 0))) ||
      ((Y || !W) && history.state && history.state.scroll) ||
      null;
    return _n()
      .then(() => de(O, V, pe))
      .then((w) => w && Ll(w))
      .catch((w) => B(w, O, V));
  }
  const fe = (O) => s.go(O);
  let ye;
  const Pe = new Set(),
    we = {
      currentRoute: l,
      listening: !0,
      addRoute: S,
      removeRoute: C,
      hasRoute: q,
      getRoutes: T,
      resolve: z,
      options: e,
      push: o,
      replace: c,
      go: fe,
      back: () => fe(-1),
      forward: () => fe(1),
      beforeEach: u.add,
      beforeResolve: i.add,
      afterEach: d.add,
      onError: y.add,
      isReady: J,
      install(O) {
        const V = this;
        O.component("RouterLink", sf),
          O.component("RouterView", df),
          (O.config.globalProperties.$router = V),
          Object.defineProperty(O.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => rt(l),
          }),
          xt &&
            !ye &&
            l.value === mt &&
            ((ye = !0), o(s.location).catch((de) => {}));
        const W = {};
        for (const de in mt)
          Object.defineProperty(W, de, {
            get: () => l.value[de],
            enumerable: !0,
          });
        O.provide(Pn, V), O.provide(Zi, Vo(W)), O.provide(as, l);
        const Y = O.unmount;
        Pe.add(O),
          (O.unmount = function () {
            Pe.delete(O),
              Pe.size < 1 &&
                ((f = mt),
                L && L(),
                (L = null),
                (l.value = mt),
                (ye = !1),
                (R = !1)),
              Y();
          });
      },
    };
  function le(O) {
    return O.reduce((V, W) => V.then(() => b(W)), Promise.resolve());
  }
  return we;
}
function lf(e, t) {
  const n = [],
    r = [],
    s = [],
    u = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < u; i++) {
    const d = t.matched[i];
    d && (e.matched.find((f) => Yt(f, d)) ? r.push(d) : n.push(d));
    const l = e.matched[i];
    l && (t.matched.find((f) => Yt(f, l)) || s.push(l));
  }
  return [n, r, s];
}
function Vs() {
  return Ge(Pn);
}
function uo(e) {
  return {
    height: e.style.height,
    width: e.style.width,
    position: e.style.position,
    visibility: e.style.visibility,
    overflow: e.style.overflow,
    paddingTop: e.style.paddingTop,
    paddingBottom: e.style.paddingBottom,
    borderTopWidth: e.style.borderTopWidth,
    borderBottomWidth: e.style.borderBottomWidth,
    marginTop: e.style.marginTop,
    marginBottom: e.style.marginBottom,
  };
}
function ff(e, t, n) {
  const r = rt(e),
    { width: s } = getComputedStyle(t);
  (t.style.width = s),
    (t.style.position = "absolute"),
    (t.style.visibility = "hidden"),
    (t.style.height = "");
  const { height: u } = getComputedStyle(t);
  return (
    (t.style.width = n.width),
    (t.style.position = n.position),
    (t.style.visibility = n.visibility),
    (t.style.height = r),
    (t.style.overflow = "hidden"),
    n.height && n.height != r ? n.height : u
  );
}
function oo(e, t, n, r, s) {
  const u = e.animate(r, s);
  (e.style.height = t.height),
    (u.onfinish = () => {
      (e.style.overflow = t.overflow), n();
    });
}
function io(e, t, n, r) {
  const s = rt(t);
  return [
    {
      height: s,
      opacity: e.opacityClosed,
      paddingTop: s,
      paddingBottom: s,
      borderTopWidth: s,
      borderBottomWidth: s,
      marginTop: s,
      marginBottom: s,
    },
    {
      height: n,
      opacity: e.opacityOpen,
      paddingTop: r.paddingTop || 0,
      paddingBottom: r.paddingBottom || 0,
      borderTopWidth: r.borderTopWidth || 0,
      borderBottomWidth: r.borderBottomWidth || 0,
      marginTop: r.marginTop || 0,
      marginBottom: r.marginBottom || 0,
    },
  ];
}
const ao = Ns({
  props: {
    modelValue: { type: Boolean, default: !1 },
    duration: { type: Number, default: 500 },
    timingFunction: { type: String, default: "ease-in-out" },
    timingFunctionEnter: { type: String, default: null },
    timingFunctionLeave: { type: String, default: null },
    opacityOpen: { type: Number, default: 1 },
    opacityClosed: { type: Number, default: 0 },
    tag: { type: String, default: "div" },
  },
  emits: [
    "update:modelValue",
    "open-start",
    "open-end",
    "close-start",
    "close-end",
  ],
  setup(e, { slots: t, attrs: n, emit: r }) {
    const s = Te("0px"),
      u = Ne(() => e.timingFunctionEnter || e.timingFunction),
      i = Ne(() => e.timingFunctionLeave || e.timingFunction);
    function d(f, h) {
      const g = f,
        v = uo(g),
        S = ff(s, g, v),
        C = io(e, s, S, v),
        T = { duration: e.duration, easing: u.value };
      oo(
        g,
        v,
        () => {
          h(), r("open-end");
        },
        C,
        T
      );
    }
    function l(f, h) {
      const g = f,
        v = uo(g),
        { height: S } = getComputedStyle(g);
      (g.style.height = S), (g.style.overflow = "hidden");
      const C = io(e, s, S, v).reverse(),
        T = { duration: e.duration, easing: i.value };
      oo(
        g,
        v,
        () => {
          h(), r("close-end");
        },
        C,
        T
      );
    }
    return () =>
      Cr(
        jr,
        {
          css: !1,
          onBeforeEnter: () => r("open-start"),
          onEnter: d,
          onBeforeLeave: () => r("close-start"),
          onLeave: l,
        },
        {
          default: () =>
            e.modelValue
              ? Cr(e.tag, Pi(n, { class: "slide-up-down__container" }), t)
              : null,
        }
      );
  },
});
/*!
 * @soerenmartius/vue3-clipboard v0.1.2
 * (c) 2021 Soeren Martius
 * @license MIT
 */ var hf =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function pf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function mf(e, t, n) {
  return (
    (n = {
      path: t,
      exports: {},
      require: function (r, s) {
        return gf(r, s ?? n.path);
      },
    }),
    e(n, n.exports),
    n.exports
  );
}
function gf() {
  throw new Error(
    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
  );
}
var _f = mf(function (e, t) {
    /*!
     * clipboard.js v2.0.6
     * https://clipboardjs.com/
     *
     * Licensed MIT © Zeno Rocha
     */ (function (r, s) {
      e.exports = s();
    })(hf, function () {
      return (function (n) {
        var r = {};
        function s(u) {
          if (r[u]) return r[u].exports;
          var i = (r[u] = { i: u, l: !1, exports: {} });
          return n[u].call(i.exports, i, i.exports, s), (i.l = !0), i.exports;
        }
        return (
          (s.m = n),
          (s.c = r),
          (s.d = function (u, i, d) {
            s.o(u, i) ||
              Object.defineProperty(u, i, { enumerable: !0, get: d });
          }),
          (s.r = function (u) {
            typeof Symbol < "u" &&
              Symbol.toStringTag &&
              Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(u, "__esModule", { value: !0 });
          }),
          (s.t = function (u, i) {
            if (
              (i & 1 && (u = s(u)),
              i & 8 || (i & 4 && typeof u == "object" && u && u.__esModule))
            )
              return u;
            var d = Object.create(null);
            if (
              (s.r(d),
              Object.defineProperty(d, "default", { enumerable: !0, value: u }),
              i & 2 && typeof u != "string")
            )
              for (var l in u)
                s.d(
                  d,
                  l,
                  function (f) {
                    return u[f];
                  }.bind(null, l)
                );
            return d;
          }),
          (s.n = function (u) {
            var i =
              u && u.__esModule
                ? function () {
                    return u.default;
                  }
                : function () {
                    return u;
                  };
            return s.d(i, "a", i), i;
          }),
          (s.o = function (u, i) {
            return Object.prototype.hasOwnProperty.call(u, i);
          }),
          (s.p = ""),
          s((s.s = 6))
        );
      })([
        function (n, r) {
          function s(u) {
            var i;
            if (u.nodeName === "SELECT") u.focus(), (i = u.value);
            else if (u.nodeName === "INPUT" || u.nodeName === "TEXTAREA") {
              var d = u.hasAttribute("readonly");
              d || u.setAttribute("readonly", ""),
                u.select(),
                u.setSelectionRange(0, u.value.length),
                d || u.removeAttribute("readonly"),
                (i = u.value);
            } else {
              u.hasAttribute("contenteditable") && u.focus();
              var l = window.getSelection(),
                f = document.createRange();
              f.selectNodeContents(u),
                l.removeAllRanges(),
                l.addRange(f),
                (i = l.toString());
            }
            return i;
          }
          n.exports = s;
        },
        function (n, r) {
          function s() {}
          (s.prototype = {
            on: function (u, i, d) {
              var l = this.e || (this.e = {});
              return (l[u] || (l[u] = [])).push({ fn: i, ctx: d }), this;
            },
            once: function (u, i, d) {
              var l = this;
              function f() {
                l.off(u, f), i.apply(d, arguments);
              }
              return (f._ = i), this.on(u, f, d);
            },
            emit: function (u) {
              var i = [].slice.call(arguments, 1),
                d = ((this.e || (this.e = {}))[u] || []).slice(),
                l = 0,
                f = d.length;
              for (l; l < f; l++) d[l].fn.apply(d[l].ctx, i);
              return this;
            },
            off: function (u, i) {
              var d = this.e || (this.e = {}),
                l = d[u],
                f = [];
              if (l && i)
                for (var h = 0, g = l.length; h < g; h++)
                  l[h].fn !== i && l[h].fn._ !== i && f.push(l[h]);
              return f.length ? (d[u] = f) : delete d[u], this;
            },
          }),
            (n.exports = s),
            (n.exports.TinyEmitter = s);
        },
        function (n, r, s) {
          var u = s(3),
            i = s(4);
          function d(g, v, S) {
            if (!g && !v && !S) throw new Error("Missing required arguments");
            if (!u.string(v))
              throw new TypeError("Second argument must be a String");
            if (!u.fn(S))
              throw new TypeError("Third argument must be a Function");
            if (u.node(g)) return l(g, v, S);
            if (u.nodeList(g)) return f(g, v, S);
            if (u.string(g)) return h(g, v, S);
            throw new TypeError(
              "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
            );
          }
          function l(g, v, S) {
            return (
              g.addEventListener(v, S),
              {
                destroy: function () {
                  g.removeEventListener(v, S);
                },
              }
            );
          }
          function f(g, v, S) {
            return (
              Array.prototype.forEach.call(g, function (C) {
                C.addEventListener(v, S);
              }),
              {
                destroy: function () {
                  Array.prototype.forEach.call(g, function (C) {
                    C.removeEventListener(v, S);
                  });
                },
              }
            );
          }
          function h(g, v, S) {
            return i(document.body, g, v, S);
          }
          n.exports = d;
        },
        function (n, r) {
          (r.node = function (s) {
            return s !== void 0 && s instanceof HTMLElement && s.nodeType === 1;
          }),
            (r.nodeList = function (s) {
              var u = Object.prototype.toString.call(s);
              return (
                s !== void 0 &&
                (u === "[object NodeList]" ||
                  u === "[object HTMLCollection]") &&
                "length" in s &&
                (s.length === 0 || r.node(s[0]))
              );
            }),
            (r.string = function (s) {
              return typeof s == "string" || s instanceof String;
            }),
            (r.fn = function (s) {
              var u = Object.prototype.toString.call(s);
              return u === "[object Function]";
            });
        },
        function (n, r, s) {
          var u = s(5);
          function i(f, h, g, v, S) {
            var C = l.apply(this, arguments);
            return (
              f.addEventListener(g, C, S),
              {
                destroy: function () {
                  f.removeEventListener(g, C, S);
                },
              }
            );
          }
          function d(f, h, g, v, S) {
            return typeof f.addEventListener == "function"
              ? i.apply(null, arguments)
              : typeof g == "function"
              ? i.bind(null, document).apply(null, arguments)
              : (typeof f == "string" && (f = document.querySelectorAll(f)),
                Array.prototype.map.call(f, function (C) {
                  return i(C, h, g, v, S);
                }));
          }
          function l(f, h, g, v) {
            return function (S) {
              (S.delegateTarget = u(S.target, h)),
                S.delegateTarget && v.call(f, S);
            };
          }
          n.exports = d;
        },
        function (n, r) {
          var s = 9;
          if (typeof Element < "u" && !Element.prototype.matches) {
            var u = Element.prototype;
            u.matches =
              u.matchesSelector ||
              u.mozMatchesSelector ||
              u.msMatchesSelector ||
              u.oMatchesSelector ||
              u.webkitMatchesSelector;
          }
          function i(d, l) {
            for (; d && d.nodeType !== s; ) {
              if (typeof d.matches == "function" && d.matches(l)) return d;
              d = d.parentNode;
            }
          }
          n.exports = i;
        },
        function (n, r, s) {
          s.r(r);
          var u = s(0),
            i = s.n(u),
            d =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (p) {
                    return typeof p;
                  }
                : function (p) {
                    return p &&
                      typeof Symbol == "function" &&
                      p.constructor === Symbol &&
                      p !== Symbol.prototype
                      ? "symbol"
                      : typeof p;
                  },
            l = (function () {
              function p(m, b) {
                for (var _ = 0; _ < b.length; _++) {
                  var E = b[_];
                  (E.enumerable = E.enumerable || !1),
                    (E.configurable = !0),
                    "value" in E && (E.writable = !0),
                    Object.defineProperty(m, E.key, E);
                }
              }
              return function (m, b, _) {
                return b && p(m.prototype, b), _ && p(m, _), m;
              };
            })();
          function f(p, m) {
            if (!(p instanceof m))
              throw new TypeError("Cannot call a class as a function");
          }
          var h = (function () {
              function p(m) {
                f(this, p), this.resolveOptions(m), this.initSelection();
              }
              return (
                l(p, [
                  {
                    key: "resolveOptions",
                    value: function () {
                      var b =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : {};
                      (this.action = b.action),
                        (this.container = b.container),
                        (this.emitter = b.emitter),
                        (this.target = b.target),
                        (this.text = b.text),
                        (this.trigger = b.trigger),
                        (this.selectedText = "");
                    },
                  },
                  {
                    key: "initSelection",
                    value: function () {
                      this.text
                        ? this.selectFake()
                        : this.target && this.selectTarget();
                    },
                  },
                  {
                    key: "selectFake",
                    value: function () {
                      var b = this,
                        _ =
                          document.documentElement.getAttribute("dir") == "rtl";
                      this.removeFake(),
                        (this.fakeHandlerCallback = function () {
                          return b.removeFake();
                        }),
                        (this.fakeHandler =
                          this.container.addEventListener(
                            "click",
                            this.fakeHandlerCallback
                          ) || !0),
                        (this.fakeElem = document.createElement("textarea")),
                        (this.fakeElem.style.fontSize = "12pt"),
                        (this.fakeElem.style.border = "0"),
                        (this.fakeElem.style.padding = "0"),
                        (this.fakeElem.style.margin = "0"),
                        (this.fakeElem.style.position = "absolute"),
                        (this.fakeElem.style[_ ? "right" : "left"] = "-9999px");
                      var E =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;
                      (this.fakeElem.style.top = E + "px"),
                        this.fakeElem.setAttribute("readonly", ""),
                        (this.fakeElem.value = this.text),
                        this.container.appendChild(this.fakeElem),
                        (this.selectedText = i()(this.fakeElem)),
                        this.copyText();
                    },
                  },
                  {
                    key: "removeFake",
                    value: function () {
                      this.fakeHandler &&
                        (this.container.removeEventListener(
                          "click",
                          this.fakeHandlerCallback
                        ),
                        (this.fakeHandler = null),
                        (this.fakeHandlerCallback = null)),
                        this.fakeElem &&
                          (this.container.removeChild(this.fakeElem),
                          (this.fakeElem = null));
                    },
                  },
                  {
                    key: "selectTarget",
                    value: function () {
                      (this.selectedText = i()(this.target)), this.copyText();
                    },
                  },
                  {
                    key: "copyText",
                    value: function () {
                      var b = void 0;
                      try {
                        b = document.execCommand(this.action);
                      } catch {
                        b = !1;
                      }
                      this.handleResult(b);
                    },
                  },
                  {
                    key: "handleResult",
                    value: function (b) {
                      this.emitter.emit(b ? "success" : "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this),
                      });
                    },
                  },
                  {
                    key: "clearSelection",
                    value: function () {
                      this.trigger && this.trigger.focus(),
                        document.activeElement.blur(),
                        window.getSelection().removeAllRanges();
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      this.removeFake();
                    },
                  },
                  {
                    key: "action",
                    set: function () {
                      var b =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : "copy";
                      if (
                        ((this._action = b),
                        this._action !== "copy" && this._action !== "cut")
                      )
                        throw new Error(
                          'Invalid "action" value, use either "copy" or "cut"'
                        );
                    },
                    get: function () {
                      return this._action;
                    },
                  },
                  {
                    key: "target",
                    set: function (b) {
                      if (b !== void 0)
                        if (
                          b &&
                          (typeof b > "u" ? "undefined" : d(b)) === "object" &&
                          b.nodeType === 1
                        ) {
                          if (
                            this.action === "copy" &&
                            b.hasAttribute("disabled")
                          )
                            throw new Error(
                              'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                            );
                          if (
                            this.action === "cut" &&
                            (b.hasAttribute("readonly") ||
                              b.hasAttribute("disabled"))
                          )
                            throw new Error(
                              `Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`
                            );
                          this._target = b;
                        } else
                          throw new Error(
                            'Invalid "target" value, use a valid Element'
                          );
                    },
                    get: function () {
                      return this._target;
                    },
                  },
                ]),
                p
              );
            })(),
            g = h,
            v = s(1),
            S = s.n(v),
            C = s(2),
            T = s.n(C),
            q =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (p) {
                    return typeof p;
                  }
                : function (p) {
                    return p &&
                      typeof Symbol == "function" &&
                      p.constructor === Symbol &&
                      p !== Symbol.prototype
                      ? "symbol"
                      : typeof p;
                  },
            z = (function () {
              function p(m, b) {
                for (var _ = 0; _ < b.length; _++) {
                  var E = b[_];
                  (E.enumerable = E.enumerable || !1),
                    (E.configurable = !0),
                    "value" in E && (E.writable = !0),
                    Object.defineProperty(m, E.key, E);
                }
              }
              return function (m, b, _) {
                return b && p(m.prototype, b), _ && p(m, _), m;
              };
            })();
          function U(p, m) {
            if (!(p instanceof m))
              throw new TypeError("Cannot call a class as a function");
          }
          function K(p, m) {
            if (!p)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return m && (typeof m == "object" || typeof m == "function")
              ? m
              : p;
          }
          function o(p, m) {
            if (typeof m != "function" && m !== null)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof m
              );
            (p.prototype = Object.create(m && m.prototype, {
              constructor: {
                value: p,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              m &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(p, m)
                  : (p.__proto__ = m));
          }
          var c = (function (p) {
            o(m, p);
            function m(b, _) {
              U(this, m);
              var E = K(
                this,
                (m.__proto__ || Object.getPrototypeOf(m)).call(this)
              );
              return E.resolveOptions(_), E.listenClick(b), E;
            }
            return (
              z(
                m,
                [
                  {
                    key: "resolveOptions",
                    value: function () {
                      var _ =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : {};
                      (this.action =
                        typeof _.action == "function"
                          ? _.action
                          : this.defaultAction),
                        (this.target =
                          typeof _.target == "function"
                            ? _.target
                            : this.defaultTarget),
                        (this.text =
                          typeof _.text == "function"
                            ? _.text
                            : this.defaultText),
                        (this.container =
                          q(_.container) === "object"
                            ? _.container
                            : document.body);
                    },
                  },
                  {
                    key: "listenClick",
                    value: function (_) {
                      var E = this;
                      this.listener = T()(_, "click", function (P) {
                        return E.onClick(P);
                      });
                    },
                  },
                  {
                    key: "onClick",
                    value: function (_) {
                      var E = _.delegateTarget || _.currentTarget;
                      this.clipboardAction && (this.clipboardAction = null),
                        (this.clipboardAction = new g({
                          action: this.action(E),
                          target: this.target(E),
                          text: this.text(E),
                          container: this.container,
                          trigger: E,
                          emitter: this,
                        }));
                    },
                  },
                  {
                    key: "defaultAction",
                    value: function (_) {
                      return a("action", _);
                    },
                  },
                  {
                    key: "defaultTarget",
                    value: function (_) {
                      var E = a("target", _);
                      if (E) return document.querySelector(E);
                    },
                  },
                  {
                    key: "defaultText",
                    value: function (_) {
                      return a("text", _);
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      this.listener.destroy(),
                        this.clipboardAction &&
                          (this.clipboardAction.destroy(),
                          (this.clipboardAction = null));
                    },
                  },
                ],
                [
                  {
                    key: "isSupported",
                    value: function () {
                      var _ =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : ["copy", "cut"],
                        E = typeof _ == "string" ? [_] : _,
                        P = !!document.queryCommandSupported;
                      return (
                        E.forEach(function (L) {
                          P = P && !!document.queryCommandSupported(L);
                        }),
                        P
                      );
                    },
                  },
                ]
              ),
              m
            );
          })(S.a);
          function a(p, m) {
            var b = "data-clipboard-" + p;
            if (m.hasAttribute(b)) return m.getAttribute(b);
          }
          r.default = c;
        },
      ]).default;
    });
  }),
  Xi = pf(_f);
const gr = { autoSetContainer: !1, appendToBody: !0 },
  bf = {
    config: (e) => {
      const { autoSetContainer: t, appendToBody: n } = e;
      (gr.autoSetContainer = t || !1), (gr.appendToBody = n || !0);
    },
    install: (e) => {
      (e.config.globalProperties.$vclipboard = ds),
        e.directive("clipboard", {
          beforeMount(t, n) {
            if (n.arg === "success") t._vClipboard_success = n.value;
            else if (n.arg === "error") t._vClipboard_error = n.value;
            else {
              const r = new Xi(t, {
                text: () => n.value,
                action: () => (n.arg === "cut" ? "cut" : "copy"),
                container: gr.autoSetContainer ? t : void 0,
              });
              r.on("success", (s) => {
                const u = t._vClipboard_success;
                u && u(s);
              }),
                r.on("error", (s) => {
                  const u = t._vClipboard_error;
                  u && u(s);
                }),
                (t._vClipboard = r);
            }
          },
          updated(t, n) {
            n.arg === "success"
              ? (t._vClipboard_success = n.value)
              : n.arg === "error"
              ? (t._vClipboard_error = n.value)
              : ((t._vClipboard.text = () => n.value),
                (t._vClipboard.action = () =>
                  n.arg === "cut" ? "cut" : "copy"));
          },
          unmounted(t, n) {
            n.arg === "success"
              ? delete t._vClipboard_success
              : n.arg === "error"
              ? delete t._vClipboard_error
              : (t._vClipboard.destroy(), delete t._vClipboard);
          },
        });
    },
    toClipboard: (e, t) => ds(e, t),
  },
  ds = (e, t = "copy") =>
    new Promise((n, r) => {
      const s = document.createElement("button"),
        u = new Xi(s, { text: () => e, action: () => t });
      u.on("success", (i) => {
        u.destroy(), n(i);
      }),
        u.on("error", (i) => {
          u.destroy(), r(i);
        }),
        gr.appendToBody && document.body.appendChild(s),
        s.click(),
        gr.appendToBody && document.body.removeChild(s);
    }),
  wf = { class: "response__item" },
  yf = Q("div", { class: "head-ico" }, null, -1),
  vf = { class: "item-content" },
  kf = { class: "agent-response" },
  Ef = Q("span", null, "Вывод агента", -1),
  Sf = Q(
    "div",
    { class: "arrow" },
    [
      Q(
        "svg",
        {
          width: "10",
          height: "6",
          viewBox: "0 0 10 6",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          Q("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M9.80113 1.22462L5.48011 5.78989C5.21495 6.07004 4.78505 6.07004 4.51989 5.78989L0.198869 1.22462C-0.0662898 0.944468 -0.0662898 0.490259 0.198869 0.210111C0.464029 -0.0700369 0.893936 -0.0700369 1.1591 0.210111L5 4.26813L8.8409 0.210111C9.10606 -0.0700369 9.53597 -0.0700369 9.80113 0.210111C10.0663 0.490259 10.0663 0.944468 9.80113 1.22462Z",
            fill: "#00FFFF",
          }),
        ]
      ),
    ],
    -1
  ),
  Cf = [Ef, Sf],
  Pf = { class: "agent-response__content" },
  Af = Q(
    "div",
    { class: "descr" },
    " Агент, специально созданный для вашей задачи, будет сгенерирован для предоставления наиболее точных и релевантных результатов исследования. ",
    -1
  ),
  Tf = Q("hr", null, null, -1),
  Rf = ["innerHTML"],
  Of = { class: "agent-report" },
  Lf = { class: "agent-report__content" },
  jf = Q(
    "div",
    { class: "agent-report__title" },
    "Исследовательский отчет",
    -1
  ),
  Mf = ["innerHTML"],
  Nf = { key: 0, class: "agent-report-btns" },
  If = ["href"],
  Ff = ["href"],
  Bf = { key: 1, class: "agent-status" },
  zf = Q(
    "div",
    { class: "status-ico" },
    [Q("span"), Q("span"), Q("span"), Q("span"), Q("span")],
    -1
  ),
  $f = Q(
    "div",
    { class: "status-text" },
    "Подождите, идет генерация исследования",
    -1
  ),
  Hf = [zf, $f],
  Df = {
    __name: "AiAnswer",
    props: { message: Object },
    setup(e) {
      const t = e,
        n = Te(t.message),
        r = () => {
          ds(t.message.report.text);
        };
      return (s, u) => (
        Me(),
        De("div", wf, [
          yf,
          Q("div", vf, [
            Q("div", kf, [
              Q(
                "div",
                {
                  class: at([
                    "agent-response__head",
                    { open: n.value.showAgentResponce },
                  ]),
                  onClick:
                    u[0] ||
                    (u[0] = (i) =>
                      (n.value.showAgentResponce = !n.value.showAgentResponce)),
                },
                Cf,
                2
              ),
              Q("div", Pf, [
                ve(
                  rt(ao),
                  {
                    modelValue: n.value.showAgentResponce,
                    "onUpdate:modelValue":
                      u[1] || (u[1] = (i) => (n.value.showAgentResponce = i)),
                  },
                  {
                    default: $t(() => [
                      Af,
                      Tf,
                      Q(
                        "div",
                        {
                          class: "agent-response__inner",
                          innerHTML: n.value.agentResponce,
                        },
                        null,
                        8,
                        Rf
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue"]
                ),
              ]),
            ]),
            ve(
              rt(ao),
              {
                modelValue: n.value.report.hasReport,
                "onUpdate:modelValue":
                  u[2] || (u[2] = (i) => (n.value.report.hasReport = i)),
              },
              {
                default: $t(() => [
                  Q("div", Of, [
                    Q("div", Lf, [
                      jf,
                      Q(
                        "div",
                        { innerHTML: n.value.report.value },
                        null,
                        8,
                        Mf
                      ),
                    ]),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["modelValue"]
            ),
            n.value.messageStatus == "finished"
              ? (Me(),
                De("div", Nf, [
                  Q(
                    "div",
                    { class: "agent-report-btn _clipboard", onClick: r },
                    " скопировать в буфер обмена "
                  ),
                  n.value.btns.pdf
                    ? (Me(),
                      De(
                        "a",
                        {
                          key: 0,
                          href: n.value.btns.pdf,
                          target: "_blank",
                          class: "agent-report-btn _pdf",
                          download: "",
                        },
                        "скачать pdf",
                        8,
                        If
                      ))
                    : qt("", !0),
                  n.value.btns.docx
                    ? (Me(),
                      De(
                        "a",
                        {
                          key: 1,
                          href: n.value.btns.docx,
                          target: "_blank",
                          class: "agent-report-btn _docs",
                          download: "",
                        },
                        "скачать docx",
                        8,
                        Ff
                      ))
                    : qt("", !0),
                ]))
              : qt("", !0),
            n.value.messageStatus != "finished"
              ? (Me(), De("div", Bf, Hf))
              : qt("", !0),
          ]),
        ])
      );
    },
  };
var Uf =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Vf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qi = { exports: {} };
(function (e) {
  (function () {
    function t(o) {
      var c = {
        omitExtraWLInCodeBlocks: {
          defaultValue: !1,
          describe: "Omit the default extra whiteline added to code blocks",
          type: "boolean",
        },
        noHeaderId: {
          defaultValue: !1,
          describe: "Turn on/off generated header id",
          type: "boolean",
        },
        prefixHeaderId: {
          defaultValue: !1,
          describe:
            "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
          type: "string",
        },
        rawPrefixHeaderId: {
          defaultValue: !1,
          describe:
            'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
          type: "boolean",
        },
        ghCompatibleHeaderId: {
          defaultValue: !1,
          describe:
            "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
          type: "boolean",
        },
        rawHeaderId: {
          defaultValue: !1,
          describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
          type: "boolean",
        },
        headerLevelStart: {
          defaultValue: !1,
          describe: "The header blocks level start",
          type: "integer",
        },
        parseImgDimensions: {
          defaultValue: !1,
          describe: "Turn on/off image dimension parsing",
          type: "boolean",
        },
        simplifiedAutoLink: {
          defaultValue: !1,
          describe: "Turn on/off GFM autolink style",
          type: "boolean",
        },
        excludeTrailingPunctuationFromURLs: {
          defaultValue: !1,
          describe:
            "Excludes trailing punctuation from links generated with autoLinking",
          type: "boolean",
        },
        literalMidWordUnderscores: {
          defaultValue: !1,
          describe: "Parse midword underscores as literal underscores",
          type: "boolean",
        },
        literalMidWordAsterisks: {
          defaultValue: !1,
          describe: "Parse midword asterisks as literal asterisks",
          type: "boolean",
        },
        strikethrough: {
          defaultValue: !1,
          describe: "Turn on/off strikethrough support",
          type: "boolean",
        },
        tables: {
          defaultValue: !1,
          describe: "Turn on/off tables support",
          type: "boolean",
        },
        tablesHeaderId: {
          defaultValue: !1,
          describe: "Add an id to table headers",
          type: "boolean",
        },
        ghCodeBlocks: {
          defaultValue: !0,
          describe: "Turn on/off GFM fenced code blocks support",
          type: "boolean",
        },
        tasklists: {
          defaultValue: !1,
          describe: "Turn on/off GFM tasklist support",
          type: "boolean",
        },
        smoothLivePreview: {
          defaultValue: !1,
          describe:
            "Prevents weird effects in live previews due to incomplete input",
          type: "boolean",
        },
        smartIndentationFix: {
          defaultValue: !1,
          describe: "Tries to smartly fix indentation in es6 strings",
          type: "boolean",
        },
        disableForced4SpacesIndentedSublists: {
          defaultValue: !1,
          describe:
            "Disables the requirement of indenting nested sublists by 4 spaces",
          type: "boolean",
        },
        simpleLineBreaks: {
          defaultValue: !1,
          describe: "Parses simple line breaks as <br> (GFM Style)",
          type: "boolean",
        },
        requireSpaceBeforeHeadingText: {
          defaultValue: !1,
          describe:
            "Makes adding a space between `#` and the header text mandatory (GFM Style)",
          type: "boolean",
        },
        ghMentions: {
          defaultValue: !1,
          describe: "Enables github @mentions",
          type: "boolean",
        },
        ghMentionsLink: {
          defaultValue: "https://github.com/{u}",
          describe:
            "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
          type: "string",
        },
        encodeEmails: {
          defaultValue: !0,
          describe:
            "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
          type: "boolean",
        },
        openLinksInNewWindow: {
          defaultValue: !1,
          describe: "Open all links in new windows",
          type: "boolean",
        },
        backslashEscapesHTMLTags: {
          defaultValue: !1,
          describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
          type: "boolean",
        },
        emoji: {
          defaultValue: !1,
          describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
          type: "boolean",
        },
        underline: {
          defaultValue: !1,
          describe:
            "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
          type: "boolean",
        },
        ellipsis: {
          defaultValue: !0,
          describe: "Replaces three dots with the ellipsis unicode character",
          type: "boolean",
        },
        completeHTMLDocument: {
          defaultValue: !1,
          describe:
            "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
          type: "boolean",
        },
        metadata: {
          defaultValue: !1,
          describe:
            "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
          type: "boolean",
        },
        splitAdjacentBlockquotes: {
          defaultValue: !1,
          describe: "Split adjacent blockquote blocks",
          type: "boolean",
        },
      };
      if (o === !1) return JSON.parse(JSON.stringify(c));
      var a = {};
      for (var p in c) c.hasOwnProperty(p) && (a[p] = c[p].defaultValue);
      return a;
    }
    function n() {
      var o = t(!0),
        c = {};
      for (var a in o) o.hasOwnProperty(a) && (c[a] = !0);
      return c;
    }
    var r = {},
      s = {},
      u = {},
      i = t(!0),
      d = "vanilla",
      l = {
        github: {
          omitExtraWLInCodeBlocks: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          disableForced4SpacesIndentedSublists: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghCompatibleHeaderId: !0,
          ghMentions: !0,
          backslashEscapesHTMLTags: !0,
          emoji: !0,
          splitAdjacentBlockquotes: !0,
        },
        original: { noHeaderId: !0, ghCodeBlocks: !1 },
        ghost: {
          omitExtraWLInCodeBlocks: !0,
          parseImgDimensions: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          smoothLivePreview: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghMentions: !1,
          encodeEmails: !0,
        },
        vanilla: t(!0),
        allOn: n(),
      };
    (r.helper = {}),
      (r.extensions = {}),
      (r.setOption = function (o, c) {
        return (i[o] = c), this;
      }),
      (r.getOption = function (o) {
        return i[o];
      }),
      (r.getOptions = function () {
        return i;
      }),
      (r.resetOptions = function () {
        i = t(!0);
      }),
      (r.setFlavor = function (o) {
        if (!l.hasOwnProperty(o)) throw Error(o + " flavor was not found");
        r.resetOptions();
        var c = l[o];
        d = o;
        for (var a in c) c.hasOwnProperty(a) && (i[a] = c[a]);
      }),
      (r.getFlavor = function () {
        return d;
      }),
      (r.getFlavorOptions = function (o) {
        if (l.hasOwnProperty(o)) return l[o];
      }),
      (r.getDefaultOptions = function (o) {
        return t(o);
      }),
      (r.subParser = function (o, c) {
        if (r.helper.isString(o))
          if (typeof c < "u") s[o] = c;
          else {
            if (s.hasOwnProperty(o)) return s[o];
            throw Error("SubParser named " + o + " not registered!");
          }
      }),
      (r.extension = function (o, c) {
        if (!r.helper.isString(o))
          throw Error("Extension 'name' must be a string");
        if (((o = r.helper.stdExtName(o)), r.helper.isUndefined(c))) {
          if (!u.hasOwnProperty(o))
            throw Error("Extension named " + o + " is not registered!");
          return u[o];
        } else {
          typeof c == "function" && (c = c()), r.helper.isArray(c) || (c = [c]);
          var a = f(c, o);
          if (a.valid) u[o] = c;
          else throw Error(a.error);
        }
      }),
      (r.getAllExtensions = function () {
        return u;
      }),
      (r.removeExtension = function (o) {
        delete u[o];
      }),
      (r.resetExtensions = function () {
        u = {};
      });
    function f(o, c) {
      var a = c
          ? "Error in " + c + " extension->"
          : "Error in unnamed extension",
        p = { valid: !0, error: "" };
      r.helper.isArray(o) || (o = [o]);
      for (var m = 0; m < o.length; ++m) {
        var b = a + " sub-extension " + m + ": ",
          _ = o[m];
        if (typeof _ != "object")
          return (
            (p.valid = !1),
            (p.error = b + "must be an object, but " + typeof _ + " given"),
            p
          );
        if (!r.helper.isString(_.type))
          return (
            (p.valid = !1),
            (p.error =
              b +
              'property "type" must be a string, but ' +
              typeof _.type +
              " given"),
            p
          );
        var E = (_.type = _.type.toLowerCase());
        if (
          (E === "language" && (E = _.type = "lang"),
          E === "html" && (E = _.type = "output"),
          E !== "lang" && E !== "output" && E !== "listener")
        )
          return (
            (p.valid = !1),
            (p.error =
              b +
              "type " +
              E +
              ' is not recognized. Valid values: "lang/language", "output/html" or "listener"'),
            p
          );
        if (E === "listener") {
          if (r.helper.isUndefined(_.listeners))
            return (
              (p.valid = !1),
              (p.error =
                b +
                '. Extensions of type "listener" must have a property called "listeners"'),
              p
            );
        } else if (
          r.helper.isUndefined(_.filter) &&
          r.helper.isUndefined(_.regex)
        )
          return (
            (p.valid = !1),
            (p.error =
              b +
              E +
              ' extensions must define either a "regex" property or a "filter" method'),
            p
          );
        if (_.listeners) {
          if (typeof _.listeners != "object")
            return (
              (p.valid = !1),
              (p.error =
                b +
                '"listeners" property must be an object but ' +
                typeof _.listeners +
                " given"),
              p
            );
          for (var P in _.listeners)
            if (
              _.listeners.hasOwnProperty(P) &&
              typeof _.listeners[P] != "function"
            )
              return (
                (p.valid = !1),
                (p.error =
                  b +
                  '"listeners" property must be an hash of [event name]: [callback]. listeners.' +
                  P +
                  " must be a function but " +
                  typeof _.listeners[P] +
                  " given"),
                p
              );
        }
        if (_.filter) {
          if (typeof _.filter != "function")
            return (
              (p.valid = !1),
              (p.error =
                b +
                '"filter" must be a function, but ' +
                typeof _.filter +
                " given"),
              p
            );
        } else if (_.regex) {
          if (
            (r.helper.isString(_.regex) && (_.regex = new RegExp(_.regex, "g")),
            !(_.regex instanceof RegExp))
          )
            return (
              (p.valid = !1),
              (p.error =
                b +
                '"regex" property must either be a string or a RegExp object, but ' +
                typeof _.regex +
                " given"),
              p
            );
          if (r.helper.isUndefined(_.replace))
            return (
              (p.valid = !1),
              (p.error =
                b +
                '"regex" extensions must implement a replace string or function'),
              p
            );
        }
      }
      return p;
    }
    (r.validateExtension = function (o) {
      var c = f(o, null);
      return c.valid ? !0 : (console.warn(c.error), !1);
    }),
      r.hasOwnProperty("helper") || (r.helper = {}),
      (r.helper.isString = function (o) {
        return typeof o == "string" || o instanceof String;
      }),
      (r.helper.isFunction = function (o) {
        var c = {};
        return o && c.toString.call(o) === "[object Function]";
      }),
      (r.helper.isArray = function (o) {
        return Array.isArray(o);
      }),
      (r.helper.isUndefined = function (o) {
        return typeof o > "u";
      }),
      (r.helper.forEach = function (o, c) {
        if (r.helper.isUndefined(o)) throw new Error("obj param is required");
        if (r.helper.isUndefined(c))
          throw new Error("callback param is required");
        if (!r.helper.isFunction(c))
          throw new Error("callback param must be a function/closure");
        if (typeof o.forEach == "function") o.forEach(c);
        else if (r.helper.isArray(o))
          for (var a = 0; a < o.length; a++) c(o[a], a, o);
        else if (typeof o == "object")
          for (var p in o) o.hasOwnProperty(p) && c(o[p], p, o);
        else
          throw new Error(
            "obj does not seem to be an array or an iterable object"
          );
      }),
      (r.helper.stdExtName = function (o) {
        return o
          .replace(/[_?*+\/\\.^-]/g, "")
          .replace(/\s/g, "")
          .toLowerCase();
      });
    function h(o, c) {
      var a = c.charCodeAt(0);
      return "¨E" + a + "E";
    }
    (r.helper.escapeCharactersCallback = h),
      (r.helper.escapeCharacters = function (o, c, a) {
        var p = "([" + c.replace(/([\[\]\\])/g, "\\$1") + "])";
        a && (p = "\\\\" + p);
        var m = new RegExp(p, "g");
        return (o = o.replace(m, h)), o;
      }),
      (r.helper.unescapeHTMLEntities = function (o) {
        return o
          .replace(/&quot;/g, '"')
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&amp;/g, "&");
      });
    var g = function (o, c, a, p) {
      var m = p || "",
        b = m.indexOf("g") > -1,
        _ = new RegExp(c + "|" + a, "g" + m.replace(/g/g, "")),
        E = new RegExp(c, m.replace(/g/g, "")),
        P = [],
        L,
        N,
        F,
        y,
        R;
      do
        for (L = 0; (F = _.exec(o)); )
          if (E.test(F[0])) L++ || ((N = _.lastIndex), (y = N - F[0].length));
          else if (L && !--L) {
            R = F.index + F[0].length;
            var B = {
              left: { start: y, end: N },
              match: { start: N, end: F.index },
              right: { start: F.index, end: R },
              wholeMatch: { start: y, end: R },
            };
            if ((P.push(B), !b)) return P;
          }
      while (L && (_.lastIndex = N));
      return P;
    };
    (r.helper.matchRecursiveRegExp = function (o, c, a, p) {
      for (var m = g(o, c, a, p), b = [], _ = 0; _ < m.length; ++_)
        b.push([
          o.slice(m[_].wholeMatch.start, m[_].wholeMatch.end),
          o.slice(m[_].match.start, m[_].match.end),
          o.slice(m[_].left.start, m[_].left.end),
          o.slice(m[_].right.start, m[_].right.end),
        ]);
      return b;
    }),
      (r.helper.replaceRecursiveRegExp = function (o, c, a, p, m) {
        if (!r.helper.isFunction(c)) {
          var b = c;
          c = function () {
            return b;
          };
        }
        var _ = g(o, a, p, m),
          E = o,
          P = _.length;
        if (P > 0) {
          var L = [];
          _[0].wholeMatch.start !== 0 &&
            L.push(o.slice(0, _[0].wholeMatch.start));
          for (var N = 0; N < P; ++N)
            L.push(
              c(
                o.slice(_[N].wholeMatch.start, _[N].wholeMatch.end),
                o.slice(_[N].match.start, _[N].match.end),
                o.slice(_[N].left.start, _[N].left.end),
                o.slice(_[N].right.start, _[N].right.end)
              )
            ),
              N < P - 1 &&
                L.push(o.slice(_[N].wholeMatch.end, _[N + 1].wholeMatch.start));
          _[P - 1].wholeMatch.end < o.length &&
            L.push(o.slice(_[P - 1].wholeMatch.end)),
            (E = L.join(""));
        }
        return E;
      }),
      (r.helper.regexIndexOf = function (o, c, a) {
        if (!r.helper.isString(o))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (!(c instanceof RegExp))
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var p = o.substring(a || 0).search(c);
        return p >= 0 ? p + (a || 0) : p;
      }),
      (r.helper.splitAtIndex = function (o, c) {
        if (!r.helper.isString(o))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [o.substring(0, c), o.substring(c)];
      }),
      (r.helper.encodeEmailAddress = function (o) {
        var c = [
          function (a) {
            return "&#" + a.charCodeAt(0) + ";";
          },
          function (a) {
            return "&#x" + a.charCodeAt(0).toString(16) + ";";
          },
          function (a) {
            return a;
          },
        ];
        return (
          (o = o.replace(/./g, function (a) {
            if (a === "@") a = c[Math.floor(Math.random() * 2)](a);
            else {
              var p = Math.random();
              a = p > 0.9 ? c[2](a) : p > 0.45 ? c[1](a) : c[0](a);
            }
            return a;
          })),
          o
        );
      }),
      (r.helper.padEnd = function (c, a, p) {
        return (
          (a = a >> 0),
          (p = String(p || " ")),
          c.length > a
            ? String(c)
            : ((a = a - c.length),
              a > p.length && (p += p.repeat(a / p.length)),
              String(c) + p.slice(0, a))
        );
      }),
      typeof console > "u" &&
        (console = {
          warn: function (o) {
            alert(o);
          },
          log: function (o) {
            alert(o);
          },
          error: function (o) {
            throw o;
          },
        }),
      (r.helper.regexes = { asteriskDashAndColon: /([*_:~])/g }),
      (r.helper.emojis = {
        "+1": "👍",
        "-1": "👎",
        100: "💯",
        1234: "🔢",
        "1st_place_medal": "🥇",
        "2nd_place_medal": "🥈",
        "3rd_place_medal": "🥉",
        "8ball": "🎱",
        a: "🅰️",
        ab: "🆎",
        abc: "🔤",
        abcd: "🔡",
        accept: "🉑",
        aerial_tramway: "🚡",
        airplane: "✈️",
        alarm_clock: "⏰",
        alembic: "⚗️",
        alien: "👽",
        ambulance: "🚑",
        amphora: "🏺",
        anchor: "⚓️",
        angel: "👼",
        anger: "💢",
        angry: "😠",
        anguished: "😧",
        ant: "🐜",
        apple: "🍎",
        aquarius: "♒️",
        aries: "♈️",
        arrow_backward: "◀️",
        arrow_double_down: "⏬",
        arrow_double_up: "⏫",
        arrow_down: "⬇️",
        arrow_down_small: "🔽",
        arrow_forward: "▶️",
        arrow_heading_down: "⤵️",
        arrow_heading_up: "⤴️",
        arrow_left: "⬅️",
        arrow_lower_left: "↙️",
        arrow_lower_right: "↘️",
        arrow_right: "➡️",
        arrow_right_hook: "↪️",
        arrow_up: "⬆️",
        arrow_up_down: "↕️",
        arrow_up_small: "🔼",
        arrow_upper_left: "↖️",
        arrow_upper_right: "↗️",
        arrows_clockwise: "🔃",
        arrows_counterclockwise: "🔄",
        art: "🎨",
        articulated_lorry: "🚛",
        artificial_satellite: "🛰",
        astonished: "😲",
        athletic_shoe: "👟",
        atm: "🏧",
        atom_symbol: "⚛️",
        avocado: "🥑",
        b: "🅱️",
        baby: "👶",
        baby_bottle: "🍼",
        baby_chick: "🐤",
        baby_symbol: "🚼",
        back: "🔙",
        bacon: "🥓",
        badminton: "🏸",
        baggage_claim: "🛄",
        baguette_bread: "🥖",
        balance_scale: "⚖️",
        balloon: "🎈",
        ballot_box: "🗳",
        ballot_box_with_check: "☑️",
        bamboo: "🎍",
        banana: "🍌",
        bangbang: "‼️",
        bank: "🏦",
        bar_chart: "📊",
        barber: "💈",
        baseball: "⚾️",
        basketball: "🏀",
        basketball_man: "⛹️",
        basketball_woman: "⛹️&zwj;♀️",
        bat: "🦇",
        bath: "🛀",
        bathtub: "🛁",
        battery: "🔋",
        beach_umbrella: "🏖",
        bear: "🐻",
        bed: "🛏",
        bee: "🐝",
        beer: "🍺",
        beers: "🍻",
        beetle: "🐞",
        beginner: "🔰",
        bell: "🔔",
        bellhop_bell: "🛎",
        bento: "🍱",
        biking_man: "🚴",
        bike: "🚲",
        biking_woman: "🚴&zwj;♀️",
        bikini: "👙",
        biohazard: "☣️",
        bird: "🐦",
        birthday: "🎂",
        black_circle: "⚫️",
        black_flag: "🏴",
        black_heart: "🖤",
        black_joker: "🃏",
        black_large_square: "⬛️",
        black_medium_small_square: "◾️",
        black_medium_square: "◼️",
        black_nib: "✒️",
        black_small_square: "▪️",
        black_square_button: "🔲",
        blonde_man: "👱",
        blonde_woman: "👱&zwj;♀️",
        blossom: "🌼",
        blowfish: "🐡",
        blue_book: "📘",
        blue_car: "🚙",
        blue_heart: "💙",
        blush: "😊",
        boar: "🐗",
        boat: "⛵️",
        bomb: "💣",
        book: "📖",
        bookmark: "🔖",
        bookmark_tabs: "📑",
        books: "📚",
        boom: "💥",
        boot: "👢",
        bouquet: "💐",
        bowing_man: "🙇",
        bow_and_arrow: "🏹",
        bowing_woman: "🙇&zwj;♀️",
        bowling: "🎳",
        boxing_glove: "🥊",
        boy: "👦",
        bread: "🍞",
        bride_with_veil: "👰",
        bridge_at_night: "🌉",
        briefcase: "💼",
        broken_heart: "💔",
        bug: "🐛",
        building_construction: "🏗",
        bulb: "💡",
        bullettrain_front: "🚅",
        bullettrain_side: "🚄",
        burrito: "🌯",
        bus: "🚌",
        business_suit_levitating: "🕴",
        busstop: "🚏",
        bust_in_silhouette: "👤",
        busts_in_silhouette: "👥",
        butterfly: "🦋",
        cactus: "🌵",
        cake: "🍰",
        calendar: "📆",
        call_me_hand: "🤙",
        calling: "📲",
        camel: "🐫",
        camera: "📷",
        camera_flash: "📸",
        camping: "🏕",
        cancer: "♋️",
        candle: "🕯",
        candy: "🍬",
        canoe: "🛶",
        capital_abcd: "🔠",
        capricorn: "♑️",
        car: "🚗",
        card_file_box: "🗃",
        card_index: "📇",
        card_index_dividers: "🗂",
        carousel_horse: "🎠",
        carrot: "🥕",
        cat: "🐱",
        cat2: "🐈",
        cd: "💿",
        chains: "⛓",
        champagne: "🍾",
        chart: "💹",
        chart_with_downwards_trend: "📉",
        chart_with_upwards_trend: "📈",
        checkered_flag: "🏁",
        cheese: "🧀",
        cherries: "🍒",
        cherry_blossom: "🌸",
        chestnut: "🌰",
        chicken: "🐔",
        children_crossing: "🚸",
        chipmunk: "🐿",
        chocolate_bar: "🍫",
        christmas_tree: "🎄",
        church: "⛪️",
        cinema: "🎦",
        circus_tent: "🎪",
        city_sunrise: "🌇",
        city_sunset: "🌆",
        cityscape: "🏙",
        cl: "🆑",
        clamp: "🗜",
        clap: "👏",
        clapper: "🎬",
        classical_building: "🏛",
        clinking_glasses: "🥂",
        clipboard: "📋",
        clock1: "🕐",
        clock10: "🕙",
        clock1030: "🕥",
        clock11: "🕚",
        clock1130: "🕦",
        clock12: "🕛",
        clock1230: "🕧",
        clock130: "🕜",
        clock2: "🕑",
        clock230: "🕝",
        clock3: "🕒",
        clock330: "🕞",
        clock4: "🕓",
        clock430: "🕟",
        clock5: "🕔",
        clock530: "🕠",
        clock6: "🕕",
        clock630: "🕡",
        clock7: "🕖",
        clock730: "🕢",
        clock8: "🕗",
        clock830: "🕣",
        clock9: "🕘",
        clock930: "🕤",
        closed_book: "📕",
        closed_lock_with_key: "🔐",
        closed_umbrella: "🌂",
        cloud: "☁️",
        cloud_with_lightning: "🌩",
        cloud_with_lightning_and_rain: "⛈",
        cloud_with_rain: "🌧",
        cloud_with_snow: "🌨",
        clown_face: "🤡",
        clubs: "♣️",
        cocktail: "🍸",
        coffee: "☕️",
        coffin: "⚰️",
        cold_sweat: "😰",
        comet: "☄️",
        computer: "💻",
        computer_mouse: "🖱",
        confetti_ball: "🎊",
        confounded: "😖",
        confused: "😕",
        congratulations: "㊗️",
        construction: "🚧",
        construction_worker_man: "👷",
        construction_worker_woman: "👷&zwj;♀️",
        control_knobs: "🎛",
        convenience_store: "🏪",
        cookie: "🍪",
        cool: "🆒",
        policeman: "👮",
        copyright: "©️",
        corn: "🌽",
        couch_and_lamp: "🛋",
        couple: "👫",
        couple_with_heart_woman_man: "💑",
        couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
        couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
        couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
        couplekiss_man_woman: "💏",
        couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
        cow: "🐮",
        cow2: "🐄",
        cowboy_hat_face: "🤠",
        crab: "🦀",
        crayon: "🖍",
        credit_card: "💳",
        crescent_moon: "🌙",
        cricket: "🏏",
        crocodile: "🐊",
        croissant: "🥐",
        crossed_fingers: "🤞",
        crossed_flags: "🎌",
        crossed_swords: "⚔️",
        crown: "👑",
        cry: "😢",
        crying_cat_face: "😿",
        crystal_ball: "🔮",
        cucumber: "🥒",
        cupid: "💘",
        curly_loop: "➰",
        currency_exchange: "💱",
        curry: "🍛",
        custard: "🍮",
        customs: "🛃",
        cyclone: "🌀",
        dagger: "🗡",
        dancer: "💃",
        dancing_women: "👯",
        dancing_men: "👯&zwj;♂️",
        dango: "🍡",
        dark_sunglasses: "🕶",
        dart: "🎯",
        dash: "💨",
        date: "📅",
        deciduous_tree: "🌳",
        deer: "🦌",
        department_store: "🏬",
        derelict_house: "🏚",
        desert: "🏜",
        desert_island: "🏝",
        desktop_computer: "🖥",
        male_detective: "🕵️",
        diamond_shape_with_a_dot_inside: "💠",
        diamonds: "♦️",
        disappointed: "😞",
        disappointed_relieved: "😥",
        dizzy: "💫",
        dizzy_face: "😵",
        do_not_litter: "🚯",
        dog: "🐶",
        dog2: "🐕",
        dollar: "💵",
        dolls: "🎎",
        dolphin: "🐬",
        door: "🚪",
        doughnut: "🍩",
        dove: "🕊",
        dragon: "🐉",
        dragon_face: "🐲",
        dress: "👗",
        dromedary_camel: "🐪",
        drooling_face: "🤤",
        droplet: "💧",
        drum: "🥁",
        duck: "🦆",
        dvd: "📀",
        "e-mail": "📧",
        eagle: "🦅",
        ear: "👂",
        ear_of_rice: "🌾",
        earth_africa: "🌍",
        earth_americas: "🌎",
        earth_asia: "🌏",
        egg: "🥚",
        eggplant: "🍆",
        eight_pointed_black_star: "✴️",
        eight_spoked_asterisk: "✳️",
        electric_plug: "🔌",
        elephant: "🐘",
        email: "✉️",
        end: "🔚",
        envelope_with_arrow: "📩",
        euro: "💶",
        european_castle: "🏰",
        european_post_office: "🏤",
        evergreen_tree: "🌲",
        exclamation: "❗️",
        expressionless: "😑",
        eye: "👁",
        eye_speech_bubble: "👁&zwj;🗨",
        eyeglasses: "👓",
        eyes: "👀",
        face_with_head_bandage: "🤕",
        face_with_thermometer: "🤒",
        fist_oncoming: "👊",
        factory: "🏭",
        fallen_leaf: "🍂",
        family_man_woman_boy: "👪",
        family_man_boy: "👨&zwj;👦",
        family_man_boy_boy: "👨&zwj;👦&zwj;👦",
        family_man_girl: "👨&zwj;👧",
        family_man_girl_boy: "👨&zwj;👧&zwj;👦",
        family_man_girl_girl: "👨&zwj;👧&zwj;👧",
        family_man_man_boy: "👨&zwj;👨&zwj;👦",
        family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
        family_man_man_girl: "👨&zwj;👨&zwj;👧",
        family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
        family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
        family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
        family_man_woman_girl: "👨&zwj;👩&zwj;👧",
        family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
        family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
        family_woman_boy: "👩&zwj;👦",
        family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
        family_woman_girl: "👩&zwj;👧",
        family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
        family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
        family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
        family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
        family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
        family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
        family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
        fast_forward: "⏩",
        fax: "📠",
        fearful: "😨",
        feet: "🐾",
        female_detective: "🕵️&zwj;♀️",
        ferris_wheel: "🎡",
        ferry: "⛴",
        field_hockey: "🏑",
        file_cabinet: "🗄",
        file_folder: "📁",
        film_projector: "📽",
        film_strip: "🎞",
        fire: "🔥",
        fire_engine: "🚒",
        fireworks: "🎆",
        first_quarter_moon: "🌓",
        first_quarter_moon_with_face: "🌛",
        fish: "🐟",
        fish_cake: "🍥",
        fishing_pole_and_fish: "🎣",
        fist_raised: "✊",
        fist_left: "🤛",
        fist_right: "🤜",
        flags: "🎏",
        flashlight: "🔦",
        fleur_de_lis: "⚜️",
        flight_arrival: "🛬",
        flight_departure: "🛫",
        floppy_disk: "💾",
        flower_playing_cards: "🎴",
        flushed: "😳",
        fog: "🌫",
        foggy: "🌁",
        football: "🏈",
        footprints: "👣",
        fork_and_knife: "🍴",
        fountain: "⛲️",
        fountain_pen: "🖋",
        four_leaf_clover: "🍀",
        fox_face: "🦊",
        framed_picture: "🖼",
        free: "🆓",
        fried_egg: "🍳",
        fried_shrimp: "🍤",
        fries: "🍟",
        frog: "🐸",
        frowning: "😦",
        frowning_face: "☹️",
        frowning_man: "🙍&zwj;♂️",
        frowning_woman: "🙍",
        middle_finger: "🖕",
        fuelpump: "⛽️",
        full_moon: "🌕",
        full_moon_with_face: "🌝",
        funeral_urn: "⚱️",
        game_die: "🎲",
        gear: "⚙️",
        gem: "💎",
        gemini: "♊️",
        ghost: "👻",
        gift: "🎁",
        gift_heart: "💝",
        girl: "👧",
        globe_with_meridians: "🌐",
        goal_net: "🥅",
        goat: "🐐",
        golf: "⛳️",
        golfing_man: "🏌️",
        golfing_woman: "🏌️&zwj;♀️",
        gorilla: "🦍",
        grapes: "🍇",
        green_apple: "🍏",
        green_book: "📗",
        green_heart: "💚",
        green_salad: "🥗",
        grey_exclamation: "❕",
        grey_question: "❔",
        grimacing: "😬",
        grin: "😁",
        grinning: "😀",
        guardsman: "💂",
        guardswoman: "💂&zwj;♀️",
        guitar: "🎸",
        gun: "🔫",
        haircut_woman: "💇",
        haircut_man: "💇&zwj;♂️",
        hamburger: "🍔",
        hammer: "🔨",
        hammer_and_pick: "⚒",
        hammer_and_wrench: "🛠",
        hamster: "🐹",
        hand: "✋",
        handbag: "👜",
        handshake: "🤝",
        hankey: "💩",
        hatched_chick: "🐥",
        hatching_chick: "🐣",
        headphones: "🎧",
        hear_no_evil: "🙉",
        heart: "❤️",
        heart_decoration: "💟",
        heart_eyes: "😍",
        heart_eyes_cat: "😻",
        heartbeat: "💓",
        heartpulse: "💗",
        hearts: "♥️",
        heavy_check_mark: "✔️",
        heavy_division_sign: "➗",
        heavy_dollar_sign: "💲",
        heavy_heart_exclamation: "❣️",
        heavy_minus_sign: "➖",
        heavy_multiplication_x: "✖️",
        heavy_plus_sign: "➕",
        helicopter: "🚁",
        herb: "🌿",
        hibiscus: "🌺",
        high_brightness: "🔆",
        high_heel: "👠",
        hocho: "🔪",
        hole: "🕳",
        honey_pot: "🍯",
        horse: "🐴",
        horse_racing: "🏇",
        hospital: "🏥",
        hot_pepper: "🌶",
        hotdog: "🌭",
        hotel: "🏨",
        hotsprings: "♨️",
        hourglass: "⌛️",
        hourglass_flowing_sand: "⏳",
        house: "🏠",
        house_with_garden: "🏡",
        houses: "🏘",
        hugs: "🤗",
        hushed: "😯",
        ice_cream: "🍨",
        ice_hockey: "🏒",
        ice_skate: "⛸",
        icecream: "🍦",
        id: "🆔",
        ideograph_advantage: "🉐",
        imp: "👿",
        inbox_tray: "📥",
        incoming_envelope: "📨",
        tipping_hand_woman: "💁",
        information_source: "ℹ️",
        innocent: "😇",
        interrobang: "⁉️",
        iphone: "📱",
        izakaya_lantern: "🏮",
        jack_o_lantern: "🎃",
        japan: "🗾",
        japanese_castle: "🏯",
        japanese_goblin: "👺",
        japanese_ogre: "👹",
        jeans: "👖",
        joy: "😂",
        joy_cat: "😹",
        joystick: "🕹",
        kaaba: "🕋",
        key: "🔑",
        keyboard: "⌨️",
        keycap_ten: "🔟",
        kick_scooter: "🛴",
        kimono: "👘",
        kiss: "💋",
        kissing: "😗",
        kissing_cat: "😽",
        kissing_closed_eyes: "😚",
        kissing_heart: "😘",
        kissing_smiling_eyes: "😙",
        kiwi_fruit: "🥝",
        koala: "🐨",
        koko: "🈁",
        label: "🏷",
        large_blue_circle: "🔵",
        large_blue_diamond: "🔷",
        large_orange_diamond: "🔶",
        last_quarter_moon: "🌗",
        last_quarter_moon_with_face: "🌜",
        latin_cross: "✝️",
        laughing: "😆",
        leaves: "🍃",
        ledger: "📒",
        left_luggage: "🛅",
        left_right_arrow: "↔️",
        leftwards_arrow_with_hook: "↩️",
        lemon: "🍋",
        leo: "♌️",
        leopard: "🐆",
        level_slider: "🎚",
        libra: "♎️",
        light_rail: "🚈",
        link: "🔗",
        lion: "🦁",
        lips: "👄",
        lipstick: "💄",
        lizard: "🦎",
        lock: "🔒",
        lock_with_ink_pen: "🔏",
        lollipop: "🍭",
        loop: "➿",
        loud_sound: "🔊",
        loudspeaker: "📢",
        love_hotel: "🏩",
        love_letter: "💌",
        low_brightness: "🔅",
        lying_face: "🤥",
        m: "Ⓜ️",
        mag: "🔍",
        mag_right: "🔎",
        mahjong: "🀄️",
        mailbox: "📫",
        mailbox_closed: "📪",
        mailbox_with_mail: "📬",
        mailbox_with_no_mail: "📭",
        man: "👨",
        man_artist: "👨&zwj;🎨",
        man_astronaut: "👨&zwj;🚀",
        man_cartwheeling: "🤸&zwj;♂️",
        man_cook: "👨&zwj;🍳",
        man_dancing: "🕺",
        man_facepalming: "🤦&zwj;♂️",
        man_factory_worker: "👨&zwj;🏭",
        man_farmer: "👨&zwj;🌾",
        man_firefighter: "👨&zwj;🚒",
        man_health_worker: "👨&zwj;⚕️",
        man_in_tuxedo: "🤵",
        man_judge: "👨&zwj;⚖️",
        man_juggling: "🤹&zwj;♂️",
        man_mechanic: "👨&zwj;🔧",
        man_office_worker: "👨&zwj;💼",
        man_pilot: "👨&zwj;✈️",
        man_playing_handball: "🤾&zwj;♂️",
        man_playing_water_polo: "🤽&zwj;♂️",
        man_scientist: "👨&zwj;🔬",
        man_shrugging: "🤷&zwj;♂️",
        man_singer: "👨&zwj;🎤",
        man_student: "👨&zwj;🎓",
        man_teacher: "👨&zwj;🏫",
        man_technologist: "👨&zwj;💻",
        man_with_gua_pi_mao: "👲",
        man_with_turban: "👳",
        tangerine: "🍊",
        mans_shoe: "👞",
        mantelpiece_clock: "🕰",
        maple_leaf: "🍁",
        martial_arts_uniform: "🥋",
        mask: "😷",
        massage_woman: "💆",
        massage_man: "💆&zwj;♂️",
        meat_on_bone: "🍖",
        medal_military: "🎖",
        medal_sports: "🏅",
        mega: "📣",
        melon: "🍈",
        memo: "📝",
        men_wrestling: "🤼&zwj;♂️",
        menorah: "🕎",
        mens: "🚹",
        metal: "🤘",
        metro: "🚇",
        microphone: "🎤",
        microscope: "🔬",
        milk_glass: "🥛",
        milky_way: "🌌",
        minibus: "🚐",
        minidisc: "💽",
        mobile_phone_off: "📴",
        money_mouth_face: "🤑",
        money_with_wings: "💸",
        moneybag: "💰",
        monkey: "🐒",
        monkey_face: "🐵",
        monorail: "🚝",
        moon: "🌔",
        mortar_board: "🎓",
        mosque: "🕌",
        motor_boat: "🛥",
        motor_scooter: "🛵",
        motorcycle: "🏍",
        motorway: "🛣",
        mount_fuji: "🗻",
        mountain: "⛰",
        mountain_biking_man: "🚵",
        mountain_biking_woman: "🚵&zwj;♀️",
        mountain_cableway: "🚠",
        mountain_railway: "🚞",
        mountain_snow: "🏔",
        mouse: "🐭",
        mouse2: "🐁",
        movie_camera: "🎥",
        moyai: "🗿",
        mrs_claus: "🤶",
        muscle: "💪",
        mushroom: "🍄",
        musical_keyboard: "🎹",
        musical_note: "🎵",
        musical_score: "🎼",
        mute: "🔇",
        nail_care: "💅",
        name_badge: "📛",
        national_park: "🏞",
        nauseated_face: "🤢",
        necktie: "👔",
        negative_squared_cross_mark: "❎",
        nerd_face: "🤓",
        neutral_face: "😐",
        new: "🆕",
        new_moon: "🌑",
        new_moon_with_face: "🌚",
        newspaper: "📰",
        newspaper_roll: "🗞",
        next_track_button: "⏭",
        ng: "🆖",
        no_good_man: "🙅&zwj;♂️",
        no_good_woman: "🙅",
        night_with_stars: "🌃",
        no_bell: "🔕",
        no_bicycles: "🚳",
        no_entry: "⛔️",
        no_entry_sign: "🚫",
        no_mobile_phones: "📵",
        no_mouth: "😶",
        no_pedestrians: "🚷",
        no_smoking: "🚭",
        "non-potable_water": "🚱",
        nose: "👃",
        notebook: "📓",
        notebook_with_decorative_cover: "📔",
        notes: "🎶",
        nut_and_bolt: "🔩",
        o: "⭕️",
        o2: "🅾️",
        ocean: "🌊",
        octopus: "🐙",
        oden: "🍢",
        office: "🏢",
        oil_drum: "🛢",
        ok: "🆗",
        ok_hand: "👌",
        ok_man: "🙆&zwj;♂️",
        ok_woman: "🙆",
        old_key: "🗝",
        older_man: "👴",
        older_woman: "👵",
        om: "🕉",
        on: "🔛",
        oncoming_automobile: "🚘",
        oncoming_bus: "🚍",
        oncoming_police_car: "🚔",
        oncoming_taxi: "🚖",
        open_file_folder: "📂",
        open_hands: "👐",
        open_mouth: "😮",
        open_umbrella: "☂️",
        ophiuchus: "⛎",
        orange_book: "📙",
        orthodox_cross: "☦️",
        outbox_tray: "📤",
        owl: "🦉",
        ox: "🐂",
        package: "📦",
        page_facing_up: "📄",
        page_with_curl: "📃",
        pager: "📟",
        paintbrush: "🖌",
        palm_tree: "🌴",
        pancakes: "🥞",
        panda_face: "🐼",
        paperclip: "📎",
        paperclips: "🖇",
        parasol_on_ground: "⛱",
        parking: "🅿️",
        part_alternation_mark: "〽️",
        partly_sunny: "⛅️",
        passenger_ship: "🛳",
        passport_control: "🛂",
        pause_button: "⏸",
        peace_symbol: "☮️",
        peach: "🍑",
        peanuts: "🥜",
        pear: "🍐",
        pen: "🖊",
        pencil2: "✏️",
        penguin: "🐧",
        pensive: "😔",
        performing_arts: "🎭",
        persevere: "😣",
        person_fencing: "🤺",
        pouting_woman: "🙎",
        phone: "☎️",
        pick: "⛏",
        pig: "🐷",
        pig2: "🐖",
        pig_nose: "🐽",
        pill: "💊",
        pineapple: "🍍",
        ping_pong: "🏓",
        pisces: "♓️",
        pizza: "🍕",
        place_of_worship: "🛐",
        plate_with_cutlery: "🍽",
        play_or_pause_button: "⏯",
        point_down: "👇",
        point_left: "👈",
        point_right: "👉",
        point_up: "☝️",
        point_up_2: "👆",
        police_car: "🚓",
        policewoman: "👮&zwj;♀️",
        poodle: "🐩",
        popcorn: "🍿",
        post_office: "🏣",
        postal_horn: "📯",
        postbox: "📮",
        potable_water: "🚰",
        potato: "🥔",
        pouch: "👝",
        poultry_leg: "🍗",
        pound: "💷",
        rage: "😡",
        pouting_cat: "😾",
        pouting_man: "🙎&zwj;♂️",
        pray: "🙏",
        prayer_beads: "📿",
        pregnant_woman: "🤰",
        previous_track_button: "⏮",
        prince: "🤴",
        princess: "👸",
        printer: "🖨",
        purple_heart: "💜",
        purse: "👛",
        pushpin: "📌",
        put_litter_in_its_place: "🚮",
        question: "❓",
        rabbit: "🐰",
        rabbit2: "🐇",
        racehorse: "🐎",
        racing_car: "🏎",
        radio: "📻",
        radio_button: "🔘",
        radioactive: "☢️",
        railway_car: "🚃",
        railway_track: "🛤",
        rainbow: "🌈",
        rainbow_flag: "🏳️&zwj;🌈",
        raised_back_of_hand: "🤚",
        raised_hand_with_fingers_splayed: "🖐",
        raised_hands: "🙌",
        raising_hand_woman: "🙋",
        raising_hand_man: "🙋&zwj;♂️",
        ram: "🐏",
        ramen: "🍜",
        rat: "🐀",
        record_button: "⏺",
        recycle: "♻️",
        red_circle: "🔴",
        registered: "®️",
        relaxed: "☺️",
        relieved: "😌",
        reminder_ribbon: "🎗",
        repeat: "🔁",
        repeat_one: "🔂",
        rescue_worker_helmet: "⛑",
        restroom: "🚻",
        revolving_hearts: "💞",
        rewind: "⏪",
        rhinoceros: "🦏",
        ribbon: "🎀",
        rice: "🍚",
        rice_ball: "🍙",
        rice_cracker: "🍘",
        rice_scene: "🎑",
        right_anger_bubble: "🗯",
        ring: "💍",
        robot: "🤖",
        rocket: "🚀",
        rofl: "🤣",
        roll_eyes: "🙄",
        roller_coaster: "🎢",
        rooster: "🐓",
        rose: "🌹",
        rosette: "🏵",
        rotating_light: "🚨",
        round_pushpin: "📍",
        rowing_man: "🚣",
        rowing_woman: "🚣&zwj;♀️",
        rugby_football: "🏉",
        running_man: "🏃",
        running_shirt_with_sash: "🎽",
        running_woman: "🏃&zwj;♀️",
        sa: "🈂️",
        sagittarius: "♐️",
        sake: "🍶",
        sandal: "👡",
        santa: "🎅",
        satellite: "📡",
        saxophone: "🎷",
        school: "🏫",
        school_satchel: "🎒",
        scissors: "✂️",
        scorpion: "🦂",
        scorpius: "♏️",
        scream: "😱",
        scream_cat: "🙀",
        scroll: "📜",
        seat: "💺",
        secret: "㊙️",
        see_no_evil: "🙈",
        seedling: "🌱",
        selfie: "🤳",
        shallow_pan_of_food: "🥘",
        shamrock: "☘️",
        shark: "🦈",
        shaved_ice: "🍧",
        sheep: "🐑",
        shell: "🐚",
        shield: "🛡",
        shinto_shrine: "⛩",
        ship: "🚢",
        shirt: "👕",
        shopping: "🛍",
        shopping_cart: "🛒",
        shower: "🚿",
        shrimp: "🦐",
        signal_strength: "📶",
        six_pointed_star: "🔯",
        ski: "🎿",
        skier: "⛷",
        skull: "💀",
        skull_and_crossbones: "☠️",
        sleeping: "😴",
        sleeping_bed: "🛌",
        sleepy: "😪",
        slightly_frowning_face: "🙁",
        slightly_smiling_face: "🙂",
        slot_machine: "🎰",
        small_airplane: "🛩",
        small_blue_diamond: "🔹",
        small_orange_diamond: "🔸",
        small_red_triangle: "🔺",
        small_red_triangle_down: "🔻",
        smile: "😄",
        smile_cat: "😸",
        smiley: "😃",
        smiley_cat: "😺",
        smiling_imp: "😈",
        smirk: "😏",
        smirk_cat: "😼",
        smoking: "🚬",
        snail: "🐌",
        snake: "🐍",
        sneezing_face: "🤧",
        snowboarder: "🏂",
        snowflake: "❄️",
        snowman: "⛄️",
        snowman_with_snow: "☃️",
        sob: "😭",
        soccer: "⚽️",
        soon: "🔜",
        sos: "🆘",
        sound: "🔉",
        space_invader: "👾",
        spades: "♠️",
        spaghetti: "🍝",
        sparkle: "❇️",
        sparkler: "🎇",
        sparkles: "✨",
        sparkling_heart: "💖",
        speak_no_evil: "🙊",
        speaker: "🔈",
        speaking_head: "🗣",
        speech_balloon: "💬",
        speedboat: "🚤",
        spider: "🕷",
        spider_web: "🕸",
        spiral_calendar: "🗓",
        spiral_notepad: "🗒",
        spoon: "🥄",
        squid: "🦑",
        stadium: "🏟",
        star: "⭐️",
        star2: "🌟",
        star_and_crescent: "☪️",
        star_of_david: "✡️",
        stars: "🌠",
        station: "🚉",
        statue_of_liberty: "🗽",
        steam_locomotive: "🚂",
        stew: "🍲",
        stop_button: "⏹",
        stop_sign: "🛑",
        stopwatch: "⏱",
        straight_ruler: "📏",
        strawberry: "🍓",
        stuck_out_tongue: "😛",
        stuck_out_tongue_closed_eyes: "😝",
        stuck_out_tongue_winking_eye: "😜",
        studio_microphone: "🎙",
        stuffed_flatbread: "🥙",
        sun_behind_large_cloud: "🌥",
        sun_behind_rain_cloud: "🌦",
        sun_behind_small_cloud: "🌤",
        sun_with_face: "🌞",
        sunflower: "🌻",
        sunglasses: "😎",
        sunny: "☀️",
        sunrise: "🌅",
        sunrise_over_mountains: "🌄",
        surfing_man: "🏄",
        surfing_woman: "🏄&zwj;♀️",
        sushi: "🍣",
        suspension_railway: "🚟",
        sweat: "😓",
        sweat_drops: "💦",
        sweat_smile: "😅",
        sweet_potato: "🍠",
        swimming_man: "🏊",
        swimming_woman: "🏊&zwj;♀️",
        symbols: "🔣",
        synagogue: "🕍",
        syringe: "💉",
        taco: "🌮",
        tada: "🎉",
        tanabata_tree: "🎋",
        taurus: "♉️",
        taxi: "🚕",
        tea: "🍵",
        telephone_receiver: "📞",
        telescope: "🔭",
        tennis: "🎾",
        tent: "⛺️",
        thermometer: "🌡",
        thinking: "🤔",
        thought_balloon: "💭",
        ticket: "🎫",
        tickets: "🎟",
        tiger: "🐯",
        tiger2: "🐅",
        timer_clock: "⏲",
        tipping_hand_man: "💁&zwj;♂️",
        tired_face: "😫",
        tm: "™️",
        toilet: "🚽",
        tokyo_tower: "🗼",
        tomato: "🍅",
        tongue: "👅",
        top: "🔝",
        tophat: "🎩",
        tornado: "🌪",
        trackball: "🖲",
        tractor: "🚜",
        traffic_light: "🚥",
        train: "🚋",
        train2: "🚆",
        tram: "🚊",
        triangular_flag_on_post: "🚩",
        triangular_ruler: "📐",
        trident: "🔱",
        triumph: "😤",
        trolleybus: "🚎",
        trophy: "🏆",
        tropical_drink: "🍹",
        tropical_fish: "🐠",
        truck: "🚚",
        trumpet: "🎺",
        tulip: "🌷",
        tumbler_glass: "🥃",
        turkey: "🦃",
        turtle: "🐢",
        tv: "📺",
        twisted_rightwards_arrows: "🔀",
        two_hearts: "💕",
        two_men_holding_hands: "👬",
        two_women_holding_hands: "👭",
        u5272: "🈹",
        u5408: "🈴",
        u55b6: "🈺",
        u6307: "🈯️",
        u6708: "🈷️",
        u6709: "🈶",
        u6e80: "🈵",
        u7121: "🈚️",
        u7533: "🈸",
        u7981: "🈲",
        u7a7a: "🈳",
        umbrella: "☔️",
        unamused: "😒",
        underage: "🔞",
        unicorn: "🦄",
        unlock: "🔓",
        up: "🆙",
        upside_down_face: "🙃",
        v: "✌️",
        vertical_traffic_light: "🚦",
        vhs: "📼",
        vibration_mode: "📳",
        video_camera: "📹",
        video_game: "🎮",
        violin: "🎻",
        virgo: "♍️",
        volcano: "🌋",
        volleyball: "🏐",
        vs: "🆚",
        vulcan_salute: "🖖",
        walking_man: "🚶",
        walking_woman: "🚶&zwj;♀️",
        waning_crescent_moon: "🌘",
        waning_gibbous_moon: "🌖",
        warning: "⚠️",
        wastebasket: "🗑",
        watch: "⌚️",
        water_buffalo: "🐃",
        watermelon: "🍉",
        wave: "👋",
        wavy_dash: "〰️",
        waxing_crescent_moon: "🌒",
        wc: "🚾",
        weary: "😩",
        wedding: "💒",
        weight_lifting_man: "🏋️",
        weight_lifting_woman: "🏋️&zwj;♀️",
        whale: "🐳",
        whale2: "🐋",
        wheel_of_dharma: "☸️",
        wheelchair: "♿️",
        white_check_mark: "✅",
        white_circle: "⚪️",
        white_flag: "🏳️",
        white_flower: "💮",
        white_large_square: "⬜️",
        white_medium_small_square: "◽️",
        white_medium_square: "◻️",
        white_small_square: "▫️",
        white_square_button: "🔳",
        wilted_flower: "🥀",
        wind_chime: "🎐",
        wind_face: "🌬",
        wine_glass: "🍷",
        wink: "😉",
        wolf: "🐺",
        woman: "👩",
        woman_artist: "👩&zwj;🎨",
        woman_astronaut: "👩&zwj;🚀",
        woman_cartwheeling: "🤸&zwj;♀️",
        woman_cook: "👩&zwj;🍳",
        woman_facepalming: "🤦&zwj;♀️",
        woman_factory_worker: "👩&zwj;🏭",
        woman_farmer: "👩&zwj;🌾",
        woman_firefighter: "👩&zwj;🚒",
        woman_health_worker: "👩&zwj;⚕️",
        woman_judge: "👩&zwj;⚖️",
        woman_juggling: "🤹&zwj;♀️",
        woman_mechanic: "👩&zwj;🔧",
        woman_office_worker: "👩&zwj;💼",
        woman_pilot: "👩&zwj;✈️",
        woman_playing_handball: "🤾&zwj;♀️",
        woman_playing_water_polo: "🤽&zwj;♀️",
        woman_scientist: "👩&zwj;🔬",
        woman_shrugging: "🤷&zwj;♀️",
        woman_singer: "👩&zwj;🎤",
        woman_student: "👩&zwj;🎓",
        woman_teacher: "👩&zwj;🏫",
        woman_technologist: "👩&zwj;💻",
        woman_with_turban: "👳&zwj;♀️",
        womans_clothes: "👚",
        womans_hat: "👒",
        women_wrestling: "🤼&zwj;♀️",
        womens: "🚺",
        world_map: "🗺",
        worried: "😟",
        wrench: "🔧",
        writing_hand: "✍️",
        x: "❌",
        yellow_heart: "💛",
        yen: "💴",
        yin_yang: "☯️",
        yum: "😋",
        zap: "⚡️",
        zipper_mouth_face: "🤐",
        zzz: "💤",
        octocat:
          '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        showdown: `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`,
      }),
      (r.Converter = function (o) {
        var c = {},
          a = [],
          p = [],
          m = {},
          b = d,
          _ = { parsed: {}, raw: "", format: "" };
        E();
        function E() {
          o = o || {};
          for (var y in i) i.hasOwnProperty(y) && (c[y] = i[y]);
          if (typeof o == "object")
            for (var R in o) o.hasOwnProperty(R) && (c[R] = o[R]);
          else
            throw Error(
              "Converter expects the passed parameter to be an object, but " +
                typeof o +
                " was passed instead."
            );
          c.extensions && r.helper.forEach(c.extensions, P);
        }
        function P(y, R) {
          if (((R = R || null), r.helper.isString(y)))
            if (((y = r.helper.stdExtName(y)), (R = y), r.extensions[y])) {
              console.warn(
                "DEPRECATION WARNING: " +
                  y +
                  " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"
              ),
                L(r.extensions[y], y);
              return;
            } else if (!r.helper.isUndefined(u[y])) y = u[y];
            else
              throw Error(
                'Extension "' +
                  y +
                  '" could not be loaded. It was either not found or is not a valid extension.'
              );
          typeof y == "function" && (y = y()), r.helper.isArray(y) || (y = [y]);
          var B = f(y, R);
          if (!B.valid) throw Error(B.error);
          for (var J = 0; J < y.length; ++J) {
            switch (y[J].type) {
              case "lang":
                a.push(y[J]);
                break;
              case "output":
                p.push(y[J]);
                break;
            }
            if (y[J].hasOwnProperty("listeners"))
              for (var ue in y[J].listeners)
                y[J].listeners.hasOwnProperty(ue) && N(ue, y[J].listeners[ue]);
          }
        }
        function L(y, R) {
          typeof y == "function" && (y = y(new r.Converter())),
            r.helper.isArray(y) || (y = [y]);
          var B = f(y, R);
          if (!B.valid) throw Error(B.error);
          for (var J = 0; J < y.length; ++J)
            switch (y[J].type) {
              case "lang":
                a.push(y[J]);
                break;
              case "output":
                p.push(y[J]);
                break;
              default:
                throw Error("Extension loader error: Type unrecognized!!!");
            }
        }
        function N(y, R) {
          if (!r.helper.isString(y))
            throw Error(
              "Invalid argument in converter.listen() method: name must be a string, but " +
                typeof y +
                " given"
            );
          if (typeof R != "function")
            throw Error(
              "Invalid argument in converter.listen() method: callback must be a function, but " +
                typeof R +
                " given"
            );
          m.hasOwnProperty(y) || (m[y] = []), m[y].push(R);
        }
        function F(y) {
          var R = y.match(/^\s*/)[0].length,
            B = new RegExp("^\\s{0," + R + "}", "gm");
          return y.replace(B, "");
        }
        (this._dispatch = function (R, B, J, ue) {
          if (m.hasOwnProperty(R))
            for (var X = 0; X < m[R].length; ++X) {
              var fe = m[R][X](R, B, this, J, ue);
              fe && typeof fe < "u" && (B = fe);
            }
          return B;
        }),
          (this.listen = function (y, R) {
            return N(y, R), this;
          }),
          (this.makeHtml = function (y) {
            if (!y) return y;
            var R = {
              gHtmlBlocks: [],
              gHtmlMdBlocks: [],
              gHtmlSpans: [],
              gUrls: {},
              gTitles: {},
              gDimensions: {},
              gListLevel: 0,
              hashLinkCounts: {},
              langExtensions: a,
              outputModifiers: p,
              converter: this,
              ghCodeBlocks: [],
              metadata: { parsed: {}, raw: "", format: "" },
            };
            return (
              (y = y.replace(/¨/g, "¨T")),
              (y = y.replace(/\$/g, "¨D")),
              (y = y.replace(
                /\r\n/g,
                `
`
              )),
              (y = y.replace(
                /\r/g,
                `
`
              )),
              (y = y.replace(/\u00A0/g, "&nbsp;")),
              c.smartIndentationFix && (y = F(y)),
              (y =
                `

` +
                y +
                `

`),
              (y = r.subParser("detab")(y, c, R)),
              (y = y.replace(/^[ \t]+$/gm, "")),
              r.helper.forEach(a, function (B) {
                y = r.subParser("runExtension")(B, y, c, R);
              }),
              (y = r.subParser("metadata")(y, c, R)),
              (y = r.subParser("hashPreCodeTags")(y, c, R)),
              (y = r.subParser("githubCodeBlocks")(y, c, R)),
              (y = r.subParser("hashHTMLBlocks")(y, c, R)),
              (y = r.subParser("hashCodeTags")(y, c, R)),
              (y = r.subParser("stripLinkDefinitions")(y, c, R)),
              (y = r.subParser("blockGamut")(y, c, R)),
              (y = r.subParser("unhashHTMLSpans")(y, c, R)),
              (y = r.subParser("unescapeSpecialChars")(y, c, R)),
              (y = y.replace(/¨D/g, "$$")),
              (y = y.replace(/¨T/g, "¨")),
              (y = r.subParser("completeHTMLDocument")(y, c, R)),
              r.helper.forEach(p, function (B) {
                y = r.subParser("runExtension")(B, y, c, R);
              }),
              (_ = R.metadata),
              y
            );
          }),
          (this.makeMarkdown = this.makeMd =
            function (y, R) {
              if (
                ((y = y.replace(
                  /\r\n/g,
                  `
`
                )),
                (y = y.replace(
                  /\r/g,
                  `
`
                )),
                (y = y.replace(/>[ \t]+</, ">¨NBSP;<")),
                !R)
              )
                if (window && window.document) R = window.document;
                else
                  throw new Error(
                    "HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM"
                  );
              var B = R.createElement("div");
              B.innerHTML = y;
              var J = { preList: Pe(B) };
              ye(B);
              for (var ue = B.childNodes, X = "", fe = 0; fe < ue.length; fe++)
                X += r.subParser("makeMarkdown.node")(ue[fe], J);
              function ye(we) {
                for (var le = 0; le < we.childNodes.length; ++le) {
                  var O = we.childNodes[le];
                  O.nodeType === 3
                    ? !/\S/.test(O.nodeValue) && !/^[ ]+$/.test(O.nodeValue)
                      ? (we.removeChild(O), --le)
                      : ((O.nodeValue = O.nodeValue
                          .split(
                            `
`
                          )
                          .join(" ")),
                        (O.nodeValue = O.nodeValue.replace(/(\s)+/g, "$1")))
                    : O.nodeType === 1 && ye(O);
                }
              }
              function Pe(we) {
                for (
                  var le = we.querySelectorAll("pre"), O = [], V = 0;
                  V < le.length;
                  ++V
                )
                  if (
                    le[V].childElementCount === 1 &&
                    le[V].firstChild.tagName.toLowerCase() === "code"
                  ) {
                    var W = le[V].firstChild.innerHTML.trim(),
                      Y = le[V].firstChild.getAttribute("data-language") || "";
                    if (Y === "")
                      for (
                        var de = le[V].firstChild.className.split(" "), pe = 0;
                        pe < de.length;
                        ++pe
                      ) {
                        var w = de[pe].match(/^language-(.+)$/);
                        if (w !== null) {
                          Y = w[1];
                          break;
                        }
                      }
                    (W = r.helper.unescapeHTMLEntities(W)),
                      O.push(W),
                      (le[V].outerHTML =
                        '<precode language="' +
                        Y +
                        '" precodenum="' +
                        V.toString() +
                        '"></precode>');
                  } else
                    O.push(le[V].innerHTML),
                      (le[V].innerHTML = ""),
                      le[V].setAttribute("prenum", V.toString());
                return O;
              }
              return X;
            }),
          (this.setOption = function (y, R) {
            c[y] = R;
          }),
          (this.getOption = function (y) {
            return c[y];
          }),
          (this.getOptions = function () {
            return c;
          }),
          (this.addExtension = function (y, R) {
            (R = R || null), P(y, R);
          }),
          (this.useExtension = function (y) {
            P(y);
          }),
          (this.setFlavor = function (y) {
            if (!l.hasOwnProperty(y)) throw Error(y + " flavor was not found");
            var R = l[y];
            b = y;
            for (var B in R) R.hasOwnProperty(B) && (c[B] = R[B]);
          }),
          (this.getFlavor = function () {
            return b;
          }),
          (this.removeExtension = function (y) {
            r.helper.isArray(y) || (y = [y]);
            for (var R = 0; R < y.length; ++R) {
              for (var B = y[R], J = 0; J < a.length; ++J)
                a[J] === B && a.splice(J, 1);
              for (var ue = 0; ue < p.length; ++ue)
                p[ue] === B && p.splice(ue, 1);
            }
          }),
          (this.getAllExtensions = function () {
            return { language: a, output: p };
          }),
          (this.getMetadata = function (y) {
            return y ? _.raw : _.parsed;
          }),
          (this.getMetadataFormat = function () {
            return _.format;
          }),
          (this._setMetadataPair = function (y, R) {
            _.parsed[y] = R;
          }),
          (this._setMetadataFormat = function (y) {
            _.format = y;
          }),
          (this._setMetadataRaw = function (y) {
            _.raw = y;
          });
      }),
      r.subParser("anchors", function (o, c, a) {
        o = a.converter._dispatch("anchors.before", o, c, a);
        var p = function (m, b, _, E, P, L, N) {
          if (
            (r.helper.isUndefined(N) && (N = ""),
            (_ = _.toLowerCase()),
            m.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          )
            E = "";
          else if (!E)
            if (
              (_ || (_ = b.toLowerCase().replace(/ ?\n/g, " ")),
              (E = "#" + _),
              !r.helper.isUndefined(a.gUrls[_]))
            )
              (E = a.gUrls[_]),
                r.helper.isUndefined(a.gTitles[_]) || (N = a.gTitles[_]);
            else return m;
          E = E.replace(
            r.helper.regexes.asteriskDashAndColon,
            r.helper.escapeCharactersCallback
          );
          var F = '<a href="' + E + '"';
          return (
            N !== "" &&
              N !== null &&
              ((N = N.replace(/"/g, "&quot;")),
              (N = N.replace(
                r.helper.regexes.asteriskDashAndColon,
                r.helper.escapeCharactersCallback
              )),
              (F += ' title="' + N + '"')),
            c.openLinksInNewWindow &&
              !/^#/.test(E) &&
              (F += ' rel="noopener noreferrer" target="¨E95Eblank"'),
            (F += ">" + b + "</a>"),
            F
          );
        };
        return (
          (o = o.replace(
            /\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,
            p
          )),
          (o = o.replace(
            /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
            p
          )),
          (o = o.replace(
            /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
            p
          )),
          (o = o.replace(/\[([^\[\]]+)]()()()()()/g, p)),
          c.ghMentions &&
            (o = o.replace(
              /(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim,
              function (m, b, _, E, P) {
                if (_ === "\\") return b + E;
                if (!r.helper.isString(c.ghMentionsLink))
                  throw new Error("ghMentionsLink option must be a string");
                var L = c.ghMentionsLink.replace(/\{u}/g, P),
                  N = "";
                return (
                  c.openLinksInNewWindow &&
                    (N = ' rel="noopener noreferrer" target="¨E95Eblank"'),
                  b + '<a href="' + L + '"' + N + ">" + E + "</a>"
                );
              }
            )),
          (o = a.converter._dispatch("anchors.after", o, c, a)),
          o
        );
      });
    var v =
        /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
      S =
        /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
      C = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
      T =
        /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
      q = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
      z = function (o) {
        return function (c, a, p, m, b, _, E) {
          p = p.replace(
            r.helper.regexes.asteriskDashAndColon,
            r.helper.escapeCharactersCallback
          );
          var P = p,
            L = "",
            N = "",
            F = a || "",
            y = E || "";
          return (
            /^www\./i.test(p) && (p = p.replace(/^www\./i, "http://www.")),
            o.excludeTrailingPunctuationFromURLs && _ && (L = _),
            o.openLinksInNewWindow &&
              (N = ' rel="noopener noreferrer" target="¨E95Eblank"'),
            F + '<a href="' + p + '"' + N + ">" + P + "</a>" + L + y
          );
        };
      },
      U = function (o, c) {
        return function (a, p, m) {
          var b = "mailto:";
          return (
            (p = p || ""),
            (m = r.subParser("unescapeSpecialChars")(m, o, c)),
            o.encodeEmails
              ? ((b = r.helper.encodeEmailAddress(b + m)),
                (m = r.helper.encodeEmailAddress(m)))
              : (b = b + m),
            p + '<a href="' + b + '">' + m + "</a>"
          );
        };
      };
    r.subParser("autoLinks", function (o, c, a) {
      return (
        (o = a.converter._dispatch("autoLinks.before", o, c, a)),
        (o = o.replace(C, z(c))),
        (o = o.replace(q, U(c, a))),
        (o = a.converter._dispatch("autoLinks.after", o, c, a)),
        o
      );
    }),
      r.subParser("simplifiedAutoLinks", function (o, c, a) {
        return (
          c.simplifiedAutoLink &&
            ((o = a.converter._dispatch("simplifiedAutoLinks.before", o, c, a)),
            c.excludeTrailingPunctuationFromURLs
              ? (o = o.replace(S, z(c)))
              : (o = o.replace(v, z(c))),
            (o = o.replace(T, U(c, a))),
            (o = a.converter._dispatch("simplifiedAutoLinks.after", o, c, a))),
          o
        );
      }),
      r.subParser("blockGamut", function (o, c, a) {
        return (
          (o = a.converter._dispatch("blockGamut.before", o, c, a)),
          (o = r.subParser("blockQuotes")(o, c, a)),
          (o = r.subParser("headers")(o, c, a)),
          (o = r.subParser("horizontalRule")(o, c, a)),
          (o = r.subParser("lists")(o, c, a)),
          (o = r.subParser("codeBlocks")(o, c, a)),
          (o = r.subParser("tables")(o, c, a)),
          (o = r.subParser("hashHTMLBlocks")(o, c, a)),
          (o = r.subParser("paragraphs")(o, c, a)),
          (o = a.converter._dispatch("blockGamut.after", o, c, a)),
          o
        );
      }),
      r.subParser("blockQuotes", function (o, c, a) {
        (o = a.converter._dispatch("blockQuotes.before", o, c, a)),
          (o =
            o +
            `

`);
        var p = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return (
          c.splitAdjacentBlockquotes && (p = /^ {0,3}>[\s\S]*?(?:\n\n)/gm),
          (o = o.replace(p, function (m) {
            return (
              (m = m.replace(/^[ \t]*>[ \t]?/gm, "")),
              (m = m.replace(/¨0/g, "")),
              (m = m.replace(/^[ \t]+$/gm, "")),
              (m = r.subParser("githubCodeBlocks")(m, c, a)),
              (m = r.subParser("blockGamut")(m, c, a)),
              (m = m.replace(/(^|\n)/g, "$1  ")),
              (m = m.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (b, _) {
                var E = _;
                return (
                  (E = E.replace(/^  /gm, "¨0")), (E = E.replace(/¨0/g, "")), E
                );
              })),
              r.subParser("hashBlock")(
                `<blockquote>
` +
                  m +
                  `
</blockquote>`,
                c,
                a
              )
            );
          })),
          (o = a.converter._dispatch("blockQuotes.after", o, c, a)),
          o
        );
      }),
      r.subParser("codeBlocks", function (o, c, a) {
        (o = a.converter._dispatch("codeBlocks.before", o, c, a)), (o += "¨0");
        var p =
          /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        return (
          (o = o.replace(p, function (m, b, _) {
            var E = b,
              P = _,
              L = `
`;
            return (
              (E = r.subParser("outdent")(E, c, a)),
              (E = r.subParser("encodeCode")(E, c, a)),
              (E = r.subParser("detab")(E, c, a)),
              (E = E.replace(/^\n+/g, "")),
              (E = E.replace(/\n+$/g, "")),
              c.omitExtraWLInCodeBlocks && (L = ""),
              (E = "<pre><code>" + E + L + "</code></pre>"),
              r.subParser("hashBlock")(E, c, a) + P
            );
          })),
          (o = o.replace(/¨0/, "")),
          (o = a.converter._dispatch("codeBlocks.after", o, c, a)),
          o
        );
      }),
      r.subParser("codeSpans", function (o, c, a) {
        return (
          (o = a.converter._dispatch("codeSpans.before", o, c, a)),
          typeof o > "u" && (o = ""),
          (o = o.replace(
            /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
            function (p, m, b, _) {
              var E = _;
              return (
                (E = E.replace(/^([ \t]*)/g, "")),
                (E = E.replace(/[ \t]*$/g, "")),
                (E = r.subParser("encodeCode")(E, c, a)),
                (E = m + "<code>" + E + "</code>"),
                (E = r.subParser("hashHTMLSpans")(E, c, a)),
                E
              );
            }
          )),
          (o = a.converter._dispatch("codeSpans.after", o, c, a)),
          o
        );
      }),
      r.subParser("completeHTMLDocument", function (o, c, a) {
        if (!c.completeHTMLDocument) return o;
        o = a.converter._dispatch("completeHTMLDocument.before", o, c, a);
        var p = "html",
          m = `<!DOCTYPE HTML>
`,
          b = "",
          _ = `<meta charset="utf-8">
`,
          E = "",
          P = "";
        typeof a.metadata.parsed.doctype < "u" &&
          ((m =
            "<!DOCTYPE " +
            a.metadata.parsed.doctype +
            `>
`),
          (p = a.metadata.parsed.doctype.toString().toLowerCase()),
          (p === "html" || p === "html5") && (_ = '<meta charset="utf-8">'));
        for (var L in a.metadata.parsed)
          if (a.metadata.parsed.hasOwnProperty(L))
            switch (L.toLowerCase()) {
              case "doctype":
                break;
              case "title":
                b =
                  "<title>" +
                  a.metadata.parsed.title +
                  `</title>
`;
                break;
              case "charset":
                p === "html" || p === "html5"
                  ? (_ =
                      '<meta charset="' +
                      a.metadata.parsed.charset +
                      `">
`)
                  : (_ =
                      '<meta name="charset" content="' +
                      a.metadata.parsed.charset +
                      `">
`);
                break;
              case "language":
              case "lang":
                (E = ' lang="' + a.metadata.parsed[L] + '"'),
                  (P +=
                    '<meta name="' +
                    L +
                    '" content="' +
                    a.metadata.parsed[L] +
                    `">
`);
                break;
              default:
                P +=
                  '<meta name="' +
                  L +
                  '" content="' +
                  a.metadata.parsed[L] +
                  `">
`;
            }
        return (
          (o =
            m +
            "<html" +
            E +
            `>
<head>
` +
            b +
            _ +
            P +
            `</head>
<body>
` +
            o.trim() +
            `
</body>
</html>`),
          (o = a.converter._dispatch("completeHTMLDocument.after", o, c, a)),
          o
        );
      }),
      r.subParser("detab", function (o, c, a) {
        return (
          (o = a.converter._dispatch("detab.before", o, c, a)),
          (o = o.replace(/\t(?=\t)/g, "    ")),
          (o = o.replace(/\t/g, "¨A¨B")),
          (o = o.replace(/¨B(.+?)¨A/g, function (p, m) {
            for (var b = m, _ = 4 - (b.length % 4), E = 0; E < _; E++) b += " ";
            return b;
          })),
          (o = o.replace(/¨A/g, "    ")),
          (o = o.replace(/¨B/g, "")),
          (o = a.converter._dispatch("detab.after", o, c, a)),
          o
        );
      }),
      r.subParser("ellipsis", function (o, c, a) {
        return (
          c.ellipsis &&
            ((o = a.converter._dispatch("ellipsis.before", o, c, a)),
            (o = o.replace(/\.\.\./g, "…")),
            (o = a.converter._dispatch("ellipsis.after", o, c, a))),
          o
        );
      }),
      r.subParser("emoji", function (o, c, a) {
        if (!c.emoji) return o;
        o = a.converter._dispatch("emoji.before", o, c, a);
        var p = /:([\S]+?):/g;
        return (
          (o = o.replace(p, function (m, b) {
            return r.helper.emojis.hasOwnProperty(b) ? r.helper.emojis[b] : m;
          })),
          (o = a.converter._dispatch("emoji.after", o, c, a)),
          o
        );
      }),
      r.subParser("encodeAmpsAndAngles", function (o, c, a) {
        return (
          (o = a.converter._dispatch("encodeAmpsAndAngles.before", o, c, a)),
          (o = o.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")),
          (o = o.replace(/<(?![a-z\/?$!])/gi, "&lt;")),
          (o = o.replace(/</g, "&lt;")),
          (o = o.replace(/>/g, "&gt;")),
          (o = a.converter._dispatch("encodeAmpsAndAngles.after", o, c, a)),
          o
        );
      }),
      r.subParser("encodeBackslashEscapes", function (o, c, a) {
        return (
          (o = a.converter._dispatch("encodeBackslashEscapes.before", o, c, a)),
          (o = o.replace(/\\(\\)/g, r.helper.escapeCharactersCallback)),
          (o = o.replace(
            /\\([`*_{}\[\]()>#+.!~=|:-])/g,
            r.helper.escapeCharactersCallback
          )),
          (o = a.converter._dispatch("encodeBackslashEscapes.after", o, c, a)),
          o
        );
      }),
      r.subParser("encodeCode", function (o, c, a) {
        return (
          (o = a.converter._dispatch("encodeCode.before", o, c, a)),
          (o = o
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/([*_{}\[\]\\=~-])/g, r.helper.escapeCharactersCallback)),
          (o = a.converter._dispatch("encodeCode.after", o, c, a)),
          o
        );
      }),
      r.subParser("escapeSpecialCharsWithinTagAttributes", function (o, c, a) {
        o = a.converter._dispatch(
          "escapeSpecialCharsWithinTagAttributes.before",
          o,
          c,
          a
        );
        var p = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,
          m = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        return (
          (o = o.replace(p, function (b) {
            return b
              .replace(/(.)<\/?code>(?=.)/g, "$1`")
              .replace(/([\\`*_~=|])/g, r.helper.escapeCharactersCallback);
          })),
          (o = o.replace(m, function (b) {
            return b.replace(
              /([\\`*_~=|])/g,
              r.helper.escapeCharactersCallback
            );
          })),
          (o = a.converter._dispatch(
            "escapeSpecialCharsWithinTagAttributes.after",
            o,
            c,
            a
          )),
          o
        );
      }),
      r.subParser("githubCodeBlocks", function (o, c, a) {
        return c.ghCodeBlocks
          ? ((o = a.converter._dispatch("githubCodeBlocks.before", o, c, a)),
            (o += "¨0"),
            (o = o.replace(
              /(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,
              function (p, m, b, _) {
                var E = c.omitExtraWLInCodeBlocks
                  ? ""
                  : `
`;
                return (
                  (_ = r.subParser("encodeCode")(_, c, a)),
                  (_ = r.subParser("detab")(_, c, a)),
                  (_ = _.replace(/^\n+/g, "")),
                  (_ = _.replace(/\n+$/g, "")),
                  (_ =
                    "<pre><code" +
                    (b ? ' class="' + b + " language-" + b + '"' : "") +
                    ">" +
                    _ +
                    E +
                    "</code></pre>"),
                  (_ = r.subParser("hashBlock")(_, c, a)),
                  `

¨G` +
                    (a.ghCodeBlocks.push({ text: p, codeblock: _ }) - 1) +
                    `G

`
                );
              }
            )),
            (o = o.replace(/¨0/, "")),
            a.converter._dispatch("githubCodeBlocks.after", o, c, a))
          : o;
      }),
      r.subParser("hashBlock", function (o, c, a) {
        return (
          (o = a.converter._dispatch("hashBlock.before", o, c, a)),
          (o = o.replace(/(^\n+|\n+$)/g, "")),
          (o =
            `

¨K` +
            (a.gHtmlBlocks.push(o) - 1) +
            `K

`),
          (o = a.converter._dispatch("hashBlock.after", o, c, a)),
          o
        );
      }),
      r.subParser("hashCodeTags", function (o, c, a) {
        o = a.converter._dispatch("hashCodeTags.before", o, c, a);
        var p = function (m, b, _, E) {
          var P = _ + r.subParser("encodeCode")(b, c, a) + E;
          return "¨C" + (a.gHtmlSpans.push(P) - 1) + "C";
        };
        return (
          (o = r.helper.replaceRecursiveRegExp(
            o,
            p,
            "<code\\b[^>]*>",
            "</code>",
            "gim"
          )),
          (o = a.converter._dispatch("hashCodeTags.after", o, c, a)),
          o
        );
      }),
      r.subParser("hashElement", function (o, c, a) {
        return function (p, m) {
          var b = m;
          return (
            (b = b.replace(
              /\n\n/g,
              `
`
            )),
            (b = b.replace(/^\n/, "")),
            (b = b.replace(/\n+$/g, "")),
            (b =
              `

¨K` +
              (a.gHtmlBlocks.push(b) - 1) +
              `K

`),
            b
          );
        };
      }),
      r.subParser("hashHTMLBlocks", function (o, c, a) {
        o = a.converter._dispatch("hashHTMLBlocks.before", o, c, a);
        var p = [
            "pre",
            "div",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "blockquote",
            "table",
            "dl",
            "ol",
            "ul",
            "script",
            "noscript",
            "form",
            "fieldset",
            "iframe",
            "math",
            "style",
            "section",
            "header",
            "footer",
            "nav",
            "article",
            "aside",
            "address",
            "audio",
            "canvas",
            "figure",
            "hgroup",
            "output",
            "video",
            "p",
          ],
          m = function (y, R, B, J) {
            var ue = y;
            return (
              B.search(/\bmarkdown\b/) !== -1 &&
                (ue = B + a.converter.makeHtml(R) + J),
              `

¨K` +
                (a.gHtmlBlocks.push(ue) - 1) +
                `K

`
            );
          };
        c.backslashEscapesHTMLTags &&
          (o = o.replace(/\\<(\/?[^>]+?)>/g, function (y, R) {
            return "&lt;" + R + "&gt;";
          }));
        for (var b = 0; b < p.length; ++b)
          for (
            var _,
              E = new RegExp("^ {0,3}(<" + p[b] + "\\b[^>]*>)", "im"),
              P = "<" + p[b] + "\\b[^>]*>",
              L = "</" + p[b] + ">";
            (_ = r.helper.regexIndexOf(o, E)) !== -1;

          ) {
            var N = r.helper.splitAtIndex(o, _),
              F = r.helper.replaceRecursiveRegExp(N[1], m, P, L, "im");
            if (F === N[1]) break;
            o = N[0].concat(F);
          }
        return (
          (o = o.replace(
            /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
            r.subParser("hashElement")(o, c, a)
          )),
          (o = r.helper.replaceRecursiveRegExp(
            o,
            function (y) {
              return (
                `

¨K` +
                (a.gHtmlBlocks.push(y) - 1) +
                `K

`
              );
            },
            "^ {0,3}<!--",
            "-->",
            "gm"
          )),
          (o = o.replace(
            /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
            r.subParser("hashElement")(o, c, a)
          )),
          (o = a.converter._dispatch("hashHTMLBlocks.after", o, c, a)),
          o
        );
      }),
      r.subParser("hashHTMLSpans", function (o, c, a) {
        o = a.converter._dispatch("hashHTMLSpans.before", o, c, a);
        function p(m) {
          return "¨C" + (a.gHtmlSpans.push(m) - 1) + "C";
        }
        return (
          (o = o.replace(/<[^>]+?\/>/gi, function (m) {
            return p(m);
          })),
          (o = o.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (m) {
            return p(m);
          })),
          (o = o.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (m) {
            return p(m);
          })),
          (o = o.replace(/<[^>]+?>/gi, function (m) {
            return p(m);
          })),
          (o = a.converter._dispatch("hashHTMLSpans.after", o, c, a)),
          o
        );
      }),
      r.subParser("unhashHTMLSpans", function (o, c, a) {
        o = a.converter._dispatch("unhashHTMLSpans.before", o, c, a);
        for (var p = 0; p < a.gHtmlSpans.length; ++p) {
          for (var m = a.gHtmlSpans[p], b = 0; /¨C(\d+)C/.test(m); ) {
            var _ = RegExp.$1;
            if (((m = m.replace("¨C" + _ + "C", a.gHtmlSpans[_])), b === 10)) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }
            ++b;
          }
          o = o.replace("¨C" + p + "C", m);
        }
        return (o = a.converter._dispatch("unhashHTMLSpans.after", o, c, a)), o;
      }),
      r.subParser("hashPreCodeTags", function (o, c, a) {
        o = a.converter._dispatch("hashPreCodeTags.before", o, c, a);
        var p = function (m, b, _, E) {
          var P = _ + r.subParser("encodeCode")(b, c, a) + E;
          return (
            `

¨G` +
            (a.ghCodeBlocks.push({ text: m, codeblock: P }) - 1) +
            `G

`
          );
        };
        return (
          (o = r.helper.replaceRecursiveRegExp(
            o,
            p,
            "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>",
            "^ {0,3}</code>\\s*</pre>",
            "gim"
          )),
          (o = a.converter._dispatch("hashPreCodeTags.after", o, c, a)),
          o
        );
      }),
      r.subParser("headers", function (o, c, a) {
        o = a.converter._dispatch("headers.before", o, c, a);
        var p = isNaN(parseInt(c.headerLevelStart))
            ? 1
            : parseInt(c.headerLevelStart),
          m = c.smoothLivePreview
            ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm
            : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
          b = c.smoothLivePreview
            ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm
            : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        (o = o.replace(m, function (P, L) {
          var N = r.subParser("spanGamut")(L, c, a),
            F = c.noHeaderId ? "" : ' id="' + E(L) + '"',
            y = p,
            R = "<h" + y + F + ">" + N + "</h" + y + ">";
          return r.subParser("hashBlock")(R, c, a);
        })),
          (o = o.replace(b, function (P, L) {
            var N = r.subParser("spanGamut")(L, c, a),
              F = c.noHeaderId ? "" : ' id="' + E(L) + '"',
              y = p + 1,
              R = "<h" + y + F + ">" + N + "</h" + y + ">";
            return r.subParser("hashBlock")(R, c, a);
          }));
        var _ = c.requireSpaceBeforeHeadingText
          ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm
          : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        o = o.replace(_, function (P, L, N) {
          var F = N;
          c.customizedHeaderId && (F = N.replace(/\s?\{([^{]+?)}\s*$/, ""));
          var y = r.subParser("spanGamut")(F, c, a),
            R = c.noHeaderId ? "" : ' id="' + E(N) + '"',
            B = p - 1 + L.length,
            J = "<h" + B + R + ">" + y + "</h" + B + ">";
          return r.subParser("hashBlock")(J, c, a);
        });
        function E(P) {
          var L, N;
          if (c.customizedHeaderId) {
            var F = P.match(/\{([^{]+?)}\s*$/);
            F && F[1] && (P = F[1]);
          }
          return (
            (L = P),
            r.helper.isString(c.prefixHeaderId)
              ? (N = c.prefixHeaderId)
              : c.prefixHeaderId === !0
              ? (N = "section-")
              : (N = ""),
            c.rawPrefixHeaderId || (L = N + L),
            c.ghCompatibleHeaderId
              ? (L = L.replace(/ /g, "-")
                  .replace(/&amp;/g, "")
                  .replace(/¨T/g, "")
                  .replace(/¨D/g, "")
                  .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "")
                  .toLowerCase())
              : c.rawHeaderId
              ? (L = L.replace(/ /g, "-")
                  .replace(/&amp;/g, "&")
                  .replace(/¨T/g, "¨")
                  .replace(/¨D/g, "$")
                  .replace(/["']/g, "-")
                  .toLowerCase())
              : (L = L.replace(/[^\w]/g, "").toLowerCase()),
            c.rawPrefixHeaderId && (L = N + L),
            a.hashLinkCounts[L]
              ? (L = L + "-" + a.hashLinkCounts[L]++)
              : (a.hashLinkCounts[L] = 1),
            L
          );
        }
        return (o = a.converter._dispatch("headers.after", o, c, a)), o;
      }),
      r.subParser("horizontalRule", function (o, c, a) {
        o = a.converter._dispatch("horizontalRule.before", o, c, a);
        var p = r.subParser("hashBlock")("<hr />", c, a);
        return (
          (o = o.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, p)),
          (o = o.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, p)),
          (o = o.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, p)),
          (o = a.converter._dispatch("horizontalRule.after", o, c, a)),
          o
        );
      }),
      r.subParser("images", function (o, c, a) {
        o = a.converter._dispatch("images.before", o, c, a);
        var p =
            /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
          m =
            /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
          b =
            /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
          _ = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
          E = /!\[([^\[\]]+)]()()()()()/g;
        function P(N, F, y, R, B, J, ue, X) {
          return (R = R.replace(/\s/g, "")), L(N, F, y, R, B, J, ue, X);
        }
        function L(N, F, y, R, B, J, ue, X) {
          var fe = a.gUrls,
            ye = a.gTitles,
            Pe = a.gDimensions;
          if (
            ((y = y.toLowerCase()),
            X || (X = ""),
            N.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          )
            R = "";
          else if (R === "" || R === null)
            if (
              ((y === "" || y === null) &&
                (y = F.toLowerCase().replace(/ ?\n/g, " ")),
              (R = "#" + y),
              !r.helper.isUndefined(fe[y]))
            )
              (R = fe[y]),
                r.helper.isUndefined(ye[y]) || (X = ye[y]),
                r.helper.isUndefined(Pe[y]) ||
                  ((B = Pe[y].width), (J = Pe[y].height));
            else return N;
          (F = F.replace(/"/g, "&quot;").replace(
            r.helper.regexes.asteriskDashAndColon,
            r.helper.escapeCharactersCallback
          )),
            (R = R.replace(
              r.helper.regexes.asteriskDashAndColon,
              r.helper.escapeCharactersCallback
            ));
          var we = '<img src="' + R + '" alt="' + F + '"';
          return (
            X &&
              r.helper.isString(X) &&
              ((X = X.replace(/"/g, "&quot;").replace(
                r.helper.regexes.asteriskDashAndColon,
                r.helper.escapeCharactersCallback
              )),
              (we += ' title="' + X + '"')),
            B &&
              J &&
              ((B = B === "*" ? "auto" : B),
              (J = J === "*" ? "auto" : J),
              (we += ' width="' + B + '"'),
              (we += ' height="' + J + '"')),
            (we += " />"),
            we
          );
        }
        return (
          (o = o.replace(_, L)),
          (o = o.replace(b, P)),
          (o = o.replace(m, L)),
          (o = o.replace(p, L)),
          (o = o.replace(E, L)),
          (o = a.converter._dispatch("images.after", o, c, a)),
          o
        );
      }),
      r.subParser("italicsAndBold", function (o, c, a) {
        o = a.converter._dispatch("italicsAndBold.before", o, c, a);
        function p(m, b, _) {
          return b + m + _;
        }
        return (
          c.literalMidWordUnderscores
            ? ((o = o.replace(/\b___(\S[\s\S]*?)___\b/g, function (m, b) {
                return p(b, "<strong><em>", "</em></strong>");
              })),
              (o = o.replace(/\b__(\S[\s\S]*?)__\b/g, function (m, b) {
                return p(b, "<strong>", "</strong>");
              })),
              (o = o.replace(/\b_(\S[\s\S]*?)_\b/g, function (m, b) {
                return p(b, "<em>", "</em>");
              })))
            : ((o = o.replace(/___(\S[\s\S]*?)___/g, function (m, b) {
                return /\S$/.test(b)
                  ? p(b, "<strong><em>", "</em></strong>")
                  : m;
              })),
              (o = o.replace(/__(\S[\s\S]*?)__/g, function (m, b) {
                return /\S$/.test(b) ? p(b, "<strong>", "</strong>") : m;
              })),
              (o = o.replace(/_([^\s_][\s\S]*?)_/g, function (m, b) {
                return /\S$/.test(b) ? p(b, "<em>", "</em>") : m;
              }))),
          c.literalMidWordAsterisks
            ? ((o = o.replace(
                /([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,
                function (m, b, _) {
                  return p(_, b + "<strong><em>", "</em></strong>");
                }
              )),
              (o = o.replace(
                /([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,
                function (m, b, _) {
                  return p(_, b + "<strong>", "</strong>");
                }
              )),
              (o = o.replace(
                /([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,
                function (m, b, _) {
                  return p(_, b + "<em>", "</em>");
                }
              )))
            : ((o = o.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (m, b) {
                return /\S$/.test(b)
                  ? p(b, "<strong><em>", "</em></strong>")
                  : m;
              })),
              (o = o.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (m, b) {
                return /\S$/.test(b) ? p(b, "<strong>", "</strong>") : m;
              })),
              (o = o.replace(/\*([^\s*][\s\S]*?)\*/g, function (m, b) {
                return /\S$/.test(b) ? p(b, "<em>", "</em>") : m;
              }))),
          (o = a.converter._dispatch("italicsAndBold.after", o, c, a)),
          o
        );
      }),
      r.subParser("lists", function (o, c, a) {
        function p(_, E) {
          a.gListLevel++,
            (_ = _.replace(
              /\n{2,}$/,
              `
`
            )),
            (_ += "¨0");
          var P =
              /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
            L = /\n[ \t]*\n(?!¨0)/.test(_);
          return (
            c.disableForced4SpacesIndentedSublists &&
              (P =
                /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),
            (_ = _.replace(P, function (N, F, y, R, B, J, ue) {
              ue = ue && ue.trim() !== "";
              var X = r.subParser("outdent")(B, c, a),
                fe = "";
              return (
                J &&
                  c.tasklists &&
                  ((fe =
                    ' class="task-list-item" style="list-style-type: none;"'),
                  (X = X.replace(/^[ \t]*\[(x|X| )?]/m, function () {
                    var ye =
                      '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                    return ue && (ye += " checked"), (ye += ">"), ye;
                  }))),
                (X = X.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (ye) {
                  return "¨A" + ye;
                })),
                F || X.search(/\n{2,}/) > -1
                  ? ((X = r.subParser("githubCodeBlocks")(X, c, a)),
                    (X = r.subParser("blockGamut")(X, c, a)))
                  : ((X = r.subParser("lists")(X, c, a)),
                    (X = X.replace(/\n$/, "")),
                    (X = r.subParser("hashHTMLBlocks")(X, c, a)),
                    (X = X.replace(
                      /\n\n+/g,
                      `

`
                    )),
                    L
                      ? (X = r.subParser("paragraphs")(X, c, a))
                      : (X = r.subParser("spanGamut")(X, c, a))),
                (X = X.replace("¨A", "")),
                (X =
                  "<li" +
                  fe +
                  ">" +
                  X +
                  `</li>
`),
                X
              );
            })),
            (_ = _.replace(/¨0/g, "")),
            a.gListLevel--,
            E && (_ = _.replace(/\s+$/, "")),
            _
          );
        }
        function m(_, E) {
          if (E === "ol") {
            var P = _.match(/^ *(\d+)\./);
            if (P && P[1] !== "1") return ' start="' + P[1] + '"';
          }
          return "";
        }
        function b(_, E, P) {
          var L = c.disableForced4SpacesIndentedSublists
              ? /^ ?\d+\.[ \t]/gm
              : /^ {0,3}\d+\.[ \t]/gm,
            N = c.disableForced4SpacesIndentedSublists
              ? /^ ?[*+-][ \t]/gm
              : /^ {0,3}[*+-][ \t]/gm,
            F = E === "ul" ? L : N,
            y = "";
          if (_.search(F) !== -1)
            (function B(J) {
              var ue = J.search(F),
                X = m(_, E);
              ue !== -1
                ? ((y +=
                    `

<` +
                    E +
                    X +
                    `>
` +
                    p(J.slice(0, ue), !!P) +
                    "</" +
                    E +
                    `>
`),
                  (E = E === "ul" ? "ol" : "ul"),
                  (F = E === "ul" ? L : N),
                  B(J.slice(ue)))
                : (y +=
                    `

<` +
                    E +
                    X +
                    `>
` +
                    p(J, !!P) +
                    "</" +
                    E +
                    `>
`);
            })(_);
          else {
            var R = m(_, E);
            y =
              `

<` +
              E +
              R +
              `>
` +
              p(_, !!P) +
              "</" +
              E +
              `>
`;
          }
          return y;
        }
        return (
          (o = a.converter._dispatch("lists.before", o, c, a)),
          (o += "¨0"),
          a.gListLevel
            ? (o = o.replace(
                /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                function (_, E, P) {
                  var L = P.search(/[*+-]/g) > -1 ? "ul" : "ol";
                  return b(E, L, !0);
                }
              ))
            : (o = o.replace(
                /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                function (_, E, P, L) {
                  var N = L.search(/[*+-]/g) > -1 ? "ul" : "ol";
                  return b(P, N, !1);
                }
              )),
          (o = o.replace(/¨0/, "")),
          (o = a.converter._dispatch("lists.after", o, c, a)),
          o
        );
      }),
      r.subParser("metadata", function (o, c, a) {
        if (!c.metadata) return o;
        o = a.converter._dispatch("metadata.before", o, c, a);
        function p(m) {
          (a.metadata.raw = m),
            (m = m.replace(/&/g, "&amp;").replace(/"/g, "&quot;")),
            (m = m.replace(/\n {4}/g, " ")),
            m.replace(/^([\S ]+): +([\s\S]+?)$/gm, function (b, _, E) {
              return (a.metadata.parsed[_] = E), "";
            });
        }
        return (
          (o = o.replace(
            /^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,
            function (m, b, _) {
              return p(_), "¨M";
            }
          )),
          (o = o.replace(
            /^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,
            function (m, b, _) {
              return b && (a.metadata.format = b), p(_), "¨M";
            }
          )),
          (o = o.replace(/¨M/g, "")),
          (o = a.converter._dispatch("metadata.after", o, c, a)),
          o
        );
      }),
      r.subParser("outdent", function (o, c, a) {
        return (
          (o = a.converter._dispatch("outdent.before", o, c, a)),
          (o = o.replace(/^(\t|[ ]{1,4})/gm, "¨0")),
          (o = o.replace(/¨0/g, "")),
          (o = a.converter._dispatch("outdent.after", o, c, a)),
          o
        );
      }),
      r.subParser("paragraphs", function (o, c, a) {
        (o = a.converter._dispatch("paragraphs.before", o, c, a)),
          (o = o.replace(/^\n+/g, "")),
          (o = o.replace(/\n+$/g, ""));
        for (
          var p = o.split(/\n{2,}/g), m = [], b = p.length, _ = 0;
          _ < b;
          _++
        ) {
          var E = p[_];
          E.search(/¨(K|G)(\d+)\1/g) >= 0
            ? m.push(E)
            : E.search(/\S/) >= 0 &&
              ((E = r.subParser("spanGamut")(E, c, a)),
              (E = E.replace(/^([ \t]*)/g, "<p>")),
              (E += "</p>"),
              m.push(E));
        }
        for (b = m.length, _ = 0; _ < b; _++) {
          for (var P = "", L = m[_], N = !1; /¨(K|G)(\d+)\1/.test(L); ) {
            var F = RegExp.$1,
              y = RegExp.$2;
            F === "K"
              ? (P = a.gHtmlBlocks[y])
              : N
              ? (P = r.subParser("encodeCode")(a.ghCodeBlocks[y].text, c, a))
              : (P = a.ghCodeBlocks[y].codeblock),
              (P = P.replace(/\$/g, "$$$$")),
              (L = L.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, P)),
              /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(L) && (N = !0);
          }
          m[_] = L;
        }
        return (
          (o = m.join(`
`)),
          (o = o.replace(/^\n+/g, "")),
          (o = o.replace(/\n+$/g, "")),
          a.converter._dispatch("paragraphs.after", o, c, a)
        );
      }),
      r.subParser("runExtension", function (o, c, a, p) {
        if (o.filter) c = o.filter(c, p.converter, a);
        else if (o.regex) {
          var m = o.regex;
          m instanceof RegExp || (m = new RegExp(m, "g")),
            (c = c.replace(m, o.replace));
        }
        return c;
      }),
      r.subParser("spanGamut", function (o, c, a) {
        return (
          (o = a.converter._dispatch("spanGamut.before", o, c, a)),
          (o = r.subParser("codeSpans")(o, c, a)),
          (o = r.subParser("escapeSpecialCharsWithinTagAttributes")(o, c, a)),
          (o = r.subParser("encodeBackslashEscapes")(o, c, a)),
          (o = r.subParser("images")(o, c, a)),
          (o = r.subParser("anchors")(o, c, a)),
          (o = r.subParser("autoLinks")(o, c, a)),
          (o = r.subParser("simplifiedAutoLinks")(o, c, a)),
          (o = r.subParser("emoji")(o, c, a)),
          (o = r.subParser("underline")(o, c, a)),
          (o = r.subParser("italicsAndBold")(o, c, a)),
          (o = r.subParser("strikethrough")(o, c, a)),
          (o = r.subParser("ellipsis")(o, c, a)),
          (o = r.subParser("hashHTMLSpans")(o, c, a)),
          (o = r.subParser("encodeAmpsAndAngles")(o, c, a)),
          c.simpleLineBreaks
            ? /\n\n¨K/.test(o) ||
              (o = o.replace(
                /\n+/g,
                `<br />
`
              ))
            : (o = o.replace(
                /  +\n/g,
                `<br />
`
              )),
          (o = a.converter._dispatch("spanGamut.after", o, c, a)),
          o
        );
      }),
      r.subParser("strikethrough", function (o, c, a) {
        function p(m) {
          return (
            c.simplifiedAutoLink &&
              (m = r.subParser("simplifiedAutoLinks")(m, c, a)),
            "<del>" + m + "</del>"
          );
        }
        return (
          c.strikethrough &&
            ((o = a.converter._dispatch("strikethrough.before", o, c, a)),
            (o = o.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (m, b) {
              return p(b);
            })),
            (o = a.converter._dispatch("strikethrough.after", o, c, a))),
          o
        );
      }),
      r.subParser("stripLinkDefinitions", function (o, c, a) {
        var p =
            /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
          m =
            /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        o += "¨0";
        var b = function (_, E, P, L, N, F, y) {
          return (
            (E = E.toLowerCase()),
            o.toLowerCase().split(E).length - 1 < 2
              ? _
              : (P.match(/^data:.+?\/.+?;base64,/)
                  ? (a.gUrls[E] = P.replace(/\s/g, ""))
                  : (a.gUrls[E] = r.subParser("encodeAmpsAndAngles")(P, c, a)),
                F
                  ? F + y
                  : (y && (a.gTitles[E] = y.replace(/"|'/g, "&quot;")),
                    c.parseImgDimensions &&
                      L &&
                      N &&
                      (a.gDimensions[E] = { width: L, height: N }),
                    ""))
          );
        };
        return (
          (o = o.replace(m, b)),
          (o = o.replace(p, b)),
          (o = o.replace(/¨0/, "")),
          o
        );
      }),
      r.subParser("tables", function (o, c, a) {
        if (!c.tables) return o;
        var p =
            /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,
          m =
            /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function b(N) {
          return /^:[ \t]*--*$/.test(N)
            ? ' style="text-align:left;"'
            : /^--*[ \t]*:[ \t]*$/.test(N)
            ? ' style="text-align:right;"'
            : /^:[ \t]*--*[ \t]*:$/.test(N)
            ? ' style="text-align:center;"'
            : "";
        }
        function _(N, F) {
          var y = "";
          return (
            (N = N.trim()),
            (c.tablesHeaderId || c.tableHeaderId) &&
              (y = ' id="' + N.replace(/ /g, "_").toLowerCase() + '"'),
            (N = r.subParser("spanGamut")(N, c, a)),
            "<th" +
              y +
              F +
              ">" +
              N +
              `</th>
`
          );
        }
        function E(N, F) {
          var y = r.subParser("spanGamut")(N, c, a);
          return (
            "<td" +
            F +
            ">" +
            y +
            `</td>
`
          );
        }
        function P(N, F) {
          for (
            var y = `<table>
<thead>
<tr>
`,
              R = N.length,
              B = 0;
            B < R;
            ++B
          )
            y += N[B];
          for (
            y += `</tr>
</thead>
<tbody>
`,
              B = 0;
            B < F.length;
            ++B
          ) {
            y += `<tr>
`;
            for (var J = 0; J < R; ++J) y += F[B][J];
            y += `</tr>
`;
          }
          return (
            (y += `</tbody>
</table>
`),
            y
          );
        }
        function L(N) {
          var F,
            y = N.split(`
`);
          for (F = 0; F < y.length; ++F)
            /^ {0,3}\|/.test(y[F]) && (y[F] = y[F].replace(/^ {0,3}\|/, "")),
              /\|[ \t]*$/.test(y[F]) && (y[F] = y[F].replace(/\|[ \t]*$/, "")),
              (y[F] = r.subParser("codeSpans")(y[F], c, a));
          var R = y[0].split("|").map(function (we) {
              return we.trim();
            }),
            B = y[1].split("|").map(function (we) {
              return we.trim();
            }),
            J = [],
            ue = [],
            X = [],
            fe = [];
          for (y.shift(), y.shift(), F = 0; F < y.length; ++F)
            y[F].trim() !== "" &&
              J.push(
                y[F].split("|").map(function (we) {
                  return we.trim();
                })
              );
          if (R.length < B.length) return N;
          for (F = 0; F < B.length; ++F) X.push(b(B[F]));
          for (F = 0; F < R.length; ++F)
            r.helper.isUndefined(X[F]) && (X[F] = ""), ue.push(_(R[F], X[F]));
          for (F = 0; F < J.length; ++F) {
            for (var ye = [], Pe = 0; Pe < ue.length; ++Pe)
              r.helper.isUndefined(J[F][Pe]), ye.push(E(J[F][Pe], X[Pe]));
            fe.push(ye);
          }
          return P(ue, fe);
        }
        return (
          (o = a.converter._dispatch("tables.before", o, c, a)),
          (o = o.replace(/\\(\|)/g, r.helper.escapeCharactersCallback)),
          (o = o.replace(p, L)),
          (o = o.replace(m, L)),
          (o = a.converter._dispatch("tables.after", o, c, a)),
          o
        );
      }),
      r.subParser("underline", function (o, c, a) {
        return (
          c.underline &&
            ((o = a.converter._dispatch("underline.before", o, c, a)),
            c.literalMidWordUnderscores
              ? ((o = o.replace(/\b___(\S[\s\S]*?)___\b/g, function (p, m) {
                  return "<u>" + m + "</u>";
                })),
                (o = o.replace(/\b__(\S[\s\S]*?)__\b/g, function (p, m) {
                  return "<u>" + m + "</u>";
                })))
              : ((o = o.replace(/___(\S[\s\S]*?)___/g, function (p, m) {
                  return /\S$/.test(m) ? "<u>" + m + "</u>" : p;
                })),
                (o = o.replace(/__(\S[\s\S]*?)__/g, function (p, m) {
                  return /\S$/.test(m) ? "<u>" + m + "</u>" : p;
                }))),
            (o = o.replace(/(_)/g, r.helper.escapeCharactersCallback)),
            (o = a.converter._dispatch("underline.after", o, c, a))),
          o
        );
      }),
      r.subParser("unescapeSpecialChars", function (o, c, a) {
        return (
          (o = a.converter._dispatch("unescapeSpecialChars.before", o, c, a)),
          (o = o.replace(/¨E(\d+)E/g, function (p, m) {
            var b = parseInt(m);
            return String.fromCharCode(b);
          })),
          (o = a.converter._dispatch("unescapeSpecialChars.after", o, c, a)),
          o
        );
      }),
      r.subParser("makeMarkdown.blockquote", function (o, c) {
        var a = "";
        if (o.hasChildNodes())
          for (var p = o.childNodes, m = p.length, b = 0; b < m; ++b) {
            var _ = r.subParser("makeMarkdown.node")(p[b], c);
            _ !== "" && (a += _);
          }
        return (
          (a = a.trim()),
          (a =
            "> " +
            a.split(`
`).join(`
> `)),
          a
        );
      }),
      r.subParser("makeMarkdown.codeBlock", function (o, c) {
        var a = o.getAttribute("language"),
          p = o.getAttribute("precodenum");
        return (
          "```" +
          a +
          `
` +
          c.preList[p] +
          "\n```"
        );
      }),
      r.subParser("makeMarkdown.codeSpan", function (o) {
        return "`" + o.innerHTML + "`";
      }),
      r.subParser("makeMarkdown.emphasis", function (o, c) {
        var a = "";
        if (o.hasChildNodes()) {
          a += "*";
          for (var p = o.childNodes, m = p.length, b = 0; b < m; ++b)
            a += r.subParser("makeMarkdown.node")(p[b], c);
          a += "*";
        }
        return a;
      }),
      r.subParser("makeMarkdown.header", function (o, c, a) {
        var p = new Array(a + 1).join("#"),
          m = "";
        if (o.hasChildNodes()) {
          m = p + " ";
          for (var b = o.childNodes, _ = b.length, E = 0; E < _; ++E)
            m += r.subParser("makeMarkdown.node")(b[E], c);
        }
        return m;
      }),
      r.subParser("makeMarkdown.hr", function () {
        return "---";
      }),
      r.subParser("makeMarkdown.image", function (o) {
        var c = "";
        return (
          o.hasAttribute("src") &&
            ((c += "![" + o.getAttribute("alt") + "]("),
            (c += "<" + o.getAttribute("src") + ">"),
            o.hasAttribute("width") &&
              o.hasAttribute("height") &&
              (c +=
                " =" +
                o.getAttribute("width") +
                "x" +
                o.getAttribute("height")),
            o.hasAttribute("title") &&
              (c += ' "' + o.getAttribute("title") + '"'),
            (c += ")")),
          c
        );
      }),
      r.subParser("makeMarkdown.links", function (o, c) {
        var a = "";
        if (o.hasChildNodes() && o.hasAttribute("href")) {
          var p = o.childNodes,
            m = p.length;
          a = "[";
          for (var b = 0; b < m; ++b)
            a += r.subParser("makeMarkdown.node")(p[b], c);
          (a += "]("),
            (a += "<" + o.getAttribute("href") + ">"),
            o.hasAttribute("title") &&
              (a += ' "' + o.getAttribute("title") + '"'),
            (a += ")");
        }
        return a;
      }),
      r.subParser("makeMarkdown.list", function (o, c, a) {
        var p = "";
        if (!o.hasChildNodes()) return "";
        for (
          var m = o.childNodes,
            b = m.length,
            _ = o.getAttribute("start") || 1,
            E = 0;
          E < b;
          ++E
        )
          if (
            !(typeof m[E].tagName > "u" || m[E].tagName.toLowerCase() !== "li")
          ) {
            var P = "";
            a === "ol" ? (P = _.toString() + ". ") : (P = "- "),
              (p += P + r.subParser("makeMarkdown.listItem")(m[E], c)),
              ++_;
          }
        return (
          (p += `
<!-- -->
`),
          p.trim()
        );
      }),
      r.subParser("makeMarkdown.listItem", function (o, c) {
        for (var a = "", p = o.childNodes, m = p.length, b = 0; b < m; ++b)
          a += r.subParser("makeMarkdown.node")(p[b], c);
        return (
          /\n$/.test(a)
            ? (a = a
                .split(
                  `
`
                )
                .join(
                  `
    `
                )
                .replace(/^ {4}$/gm, "")
                .replace(
                  /\n\n+/g,
                  `

`
                ))
            : (a += `
`),
          a
        );
      }),
      r.subParser("makeMarkdown.node", function (o, c, a) {
        a = a || !1;
        var p = "";
        if (o.nodeType === 3) return r.subParser("makeMarkdown.txt")(o, c);
        if (o.nodeType === 8)
          return (
            "<!--" +
            o.data +
            `-->

`
          );
        if (o.nodeType !== 1) return "";
        var m = o.tagName.toLowerCase();
        switch (m) {
          case "h1":
            a ||
              (p =
                r.subParser("makeMarkdown.header")(o, c, 1) +
                `

`);
            break;
          case "h2":
            a ||
              (p =
                r.subParser("makeMarkdown.header")(o, c, 2) +
                `

`);
            break;
          case "h3":
            a ||
              (p =
                r.subParser("makeMarkdown.header")(o, c, 3) +
                `

`);
            break;
          case "h4":
            a ||
              (p =
                r.subParser("makeMarkdown.header")(o, c, 4) +
                `

`);
            break;
          case "h5":
            a ||
              (p =
                r.subParser("makeMarkdown.header")(o, c, 5) +
                `

`);
            break;
          case "h6":
            a ||
              (p =
                r.subParser("makeMarkdown.header")(o, c, 6) +
                `

`);
            break;
          case "p":
            a ||
              (p =
                r.subParser("makeMarkdown.paragraph")(o, c) +
                `

`);
            break;
          case "blockquote":
            a ||
              (p =
                r.subParser("makeMarkdown.blockquote")(o, c) +
                `

`);
            break;
          case "hr":
            a ||
              (p =
                r.subParser("makeMarkdown.hr")(o, c) +
                `

`);
            break;
          case "ol":
            a ||
              (p =
                r.subParser("makeMarkdown.list")(o, c, "ol") +
                `

`);
            break;
          case "ul":
            a ||
              (p =
                r.subParser("makeMarkdown.list")(o, c, "ul") +
                `

`);
            break;
          case "precode":
            a ||
              (p =
                r.subParser("makeMarkdown.codeBlock")(o, c) +
                `

`);
            break;
          case "pre":
            a ||
              (p =
                r.subParser("makeMarkdown.pre")(o, c) +
                `

`);
            break;
          case "table":
            a ||
              (p =
                r.subParser("makeMarkdown.table")(o, c) +
                `

`);
            break;
          case "code":
            p = r.subParser("makeMarkdown.codeSpan")(o, c);
            break;
          case "em":
          case "i":
            p = r.subParser("makeMarkdown.emphasis")(o, c);
            break;
          case "strong":
          case "b":
            p = r.subParser("makeMarkdown.strong")(o, c);
            break;
          case "del":
            p = r.subParser("makeMarkdown.strikethrough")(o, c);
            break;
          case "a":
            p = r.subParser("makeMarkdown.links")(o, c);
            break;
          case "img":
            p = r.subParser("makeMarkdown.image")(o, c);
            break;
          default:
            p =
              o.outerHTML +
              `

`;
        }
        return p;
      }),
      r.subParser("makeMarkdown.paragraph", function (o, c) {
        var a = "";
        if (o.hasChildNodes())
          for (var p = o.childNodes, m = p.length, b = 0; b < m; ++b)
            a += r.subParser("makeMarkdown.node")(p[b], c);
        return (a = a.trim()), a;
      }),
      r.subParser("makeMarkdown.pre", function (o, c) {
        var a = o.getAttribute("prenum");
        return "<pre>" + c.preList[a] + "</pre>";
      }),
      r.subParser("makeMarkdown.strikethrough", function (o, c) {
        var a = "";
        if (o.hasChildNodes()) {
          a += "~~";
          for (var p = o.childNodes, m = p.length, b = 0; b < m; ++b)
            a += r.subParser("makeMarkdown.node")(p[b], c);
          a += "~~";
        }
        return a;
      }),
      r.subParser("makeMarkdown.strong", function (o, c) {
        var a = "";
        if (o.hasChildNodes()) {
          a += "**";
          for (var p = o.childNodes, m = p.length, b = 0; b < m; ++b)
            a += r.subParser("makeMarkdown.node")(p[b], c);
          a += "**";
        }
        return a;
      }),
      r.subParser("makeMarkdown.table", function (o, c) {
        var a = "",
          p = [[], []],
          m = o.querySelectorAll("thead>tr>th"),
          b = o.querySelectorAll("tbody>tr"),
          _,
          E;
        for (_ = 0; _ < m.length; ++_) {
          var P = r.subParser("makeMarkdown.tableCell")(m[_], c),
            L = "---";
          if (m[_].hasAttribute("style")) {
            var N = m[_].getAttribute("style").toLowerCase().replace(/\s/g, "");
            switch (N) {
              case "text-align:left;":
                L = ":---";
                break;
              case "text-align:right;":
                L = "---:";
                break;
              case "text-align:center;":
                L = ":---:";
                break;
            }
          }
          (p[0][_] = P.trim()), (p[1][_] = L);
        }
        for (_ = 0; _ < b.length; ++_) {
          var F = p.push([]) - 1,
            y = b[_].getElementsByTagName("td");
          for (E = 0; E < m.length; ++E) {
            var R = " ";
            typeof y[E] < "u" &&
              (R = r.subParser("makeMarkdown.tableCell")(y[E], c)),
              p[F].push(R);
          }
        }
        var B = 3;
        for (_ = 0; _ < p.length; ++_)
          for (E = 0; E < p[_].length; ++E) {
            var J = p[_][E].length;
            J > B && (B = J);
          }
        for (_ = 0; _ < p.length; ++_) {
          for (E = 0; E < p[_].length; ++E)
            _ === 1
              ? p[_][E].slice(-1) === ":"
                ? (p[_][E] =
                    r.helper.padEnd(p[_][E].slice(-1), B - 1, "-") + ":")
                : (p[_][E] = r.helper.padEnd(p[_][E], B, "-"))
              : (p[_][E] = r.helper.padEnd(p[_][E], B));
          a +=
            "| " +
            p[_].join(" | ") +
            ` |
`;
        }
        return a.trim();
      }),
      r.subParser("makeMarkdown.tableCell", function (o, c) {
        var a = "";
        if (!o.hasChildNodes()) return "";
        for (var p = o.childNodes, m = p.length, b = 0; b < m; ++b)
          a += r.subParser("makeMarkdown.node")(p[b], c, !0);
        return a.trim();
      }),
      r.subParser("makeMarkdown.txt", function (o) {
        var c = o.nodeValue;
        return (
          (c = c.replace(/ +/g, " ")),
          (c = c.replace(/¨NBSP;/g, " ")),
          (c = r.helper.unescapeHTMLEntities(c)),
          (c = c.replace(/([*_~|`])/g, "\\$1")),
          (c = c.replace(/^(\s*)>/g, "\\$1>")),
          (c = c.replace(/^#/gm, "\\#")),
          (c = c.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3")),
          (c = c.replace(/^( {0,3}\d+)\./gm, "$1\\.")),
          (c = c.replace(/^( {0,3})([+-])/gm, "$1\\$2")),
          (c = c.replace(/]([\s]*)\(/g, "\\]$1\\(")),
          (c = c.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:")),
          c
        );
      });
    var K = this;
    e.exports ? (e.exports = r) : (K.showdown = r);
  }).call(Uf);
})(Qi);
var xf = Qi.exports;
const qf = Vf(xf);
var Wf = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let Yi;
const An = (e) => (Yi = e),
  ea = Symbol();
function cs(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var _r;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(_r || (_r = {}));
function Kf() {
  const e = Oo(!0),
    t = e.run(() => Te({}));
  let n = [],
    r = [];
  const s = mn({
    install(u) {
      An(s),
        (s._a = u),
        u.provide(ea, s),
        (u.config.globalProperties.$pinia = s),
        r.forEach((i) => n.push(i)),
        (r = []);
    },
    use(u) {
      return !this._a && !Wf ? r.push(u) : n.push(u), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return s;
}
const ta = () => {};
function co(e, t, n, r = ta) {
  e.push(t);
  const s = () => {
    const u = e.indexOf(t);
    u > -1 && (e.splice(u, 1), r());
  };
  return !n && Lo() && Ha(s), s;
}
function Vt(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Gf = (e) => e();
function ls(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      s = e[n];
    cs(s) && cs(r) && e.hasOwnProperty(n) && !Ee(r) && !ct(r)
      ? (e[n] = ls(s, r))
      : (e[n] = r);
  }
  return e;
}
const Jf = Symbol();
function Zf(e) {
  return !cs(e) || !e.hasOwnProperty(Jf);
}
const { assign: bt } = Object;
function Xf(e) {
  return !!(Ee(e) && e.effect);
}
function Qf(e, t, n, r) {
  const { state: s, actions: u, getters: i } = t,
    d = n.state.value[e];
  let l;
  function f() {
    d || (n.state.value[e] = s ? s() : {});
    const h = ld(n.state.value[e]);
    return bt(
      h,
      u,
      Object.keys(i || {}).reduce(
        (g, v) => (
          (g[v] = mn(
            Ne(() => {
              An(n);
              const S = n._s.get(e);
              return i[v].call(S, S);
            })
          )),
          g
        ),
        {}
      )
    );
  }
  return (l = ra(e, f, t, n, r, !0)), l;
}
function ra(e, t, n = {}, r, s, u) {
  let i;
  const d = bt({ actions: {} }, n),
    l = { deep: !0 };
  let f,
    h,
    g = [],
    v = [],
    S;
  const C = r.state.value[e];
  !u && !C && (r.state.value[e] = {}), Te({});
  let T;
  function q(m) {
    let b;
    (f = h = !1),
      typeof m == "function"
        ? (m(r.state.value[e]),
          (b = { type: _r.patchFunction, storeId: e, events: S }))
        : (ls(r.state.value[e], m),
          (b = { type: _r.patchObject, payload: m, storeId: e, events: S }));
    const _ = (T = Symbol());
    _n().then(() => {
      T === _ && (f = !0);
    }),
      (h = !0),
      Vt(g, b, r.state.value[e]);
  }
  const z = u
    ? function () {
        const { state: b } = n,
          _ = b ? b() : {};
        this.$patch((E) => {
          bt(E, _);
        });
      }
    : ta;
  function U() {
    i.stop(), (g = []), (v = []), r._s.delete(e);
  }
  function K(m, b) {
    return function () {
      An(r);
      const _ = Array.from(arguments),
        E = [],
        P = [];
      function L(y) {
        E.push(y);
      }
      function N(y) {
        P.push(y);
      }
      Vt(v, { args: _, name: m, store: c, after: L, onError: N });
      let F;
      try {
        F = b.apply(this && this.$id === e ? this : c, _);
      } catch (y) {
        throw (Vt(P, y), y);
      }
      return F instanceof Promise
        ? F.then((y) => (Vt(E, y), y)).catch(
            (y) => (Vt(P, y), Promise.reject(y))
          )
        : (Vt(E, F), F);
    };
  }
  const o = {
      _p: r,
      $id: e,
      $onAction: co.bind(null, v),
      $patch: q,
      $reset: z,
      $subscribe(m, b = {}) {
        const _ = co(g, m, b.detached, () => E()),
          E = i.run(() =>
            lr(
              () => r.state.value[e],
              (P) => {
                (b.flush === "sync" ? h : f) &&
                  m({ storeId: e, type: _r.direct, events: S }, P);
              },
              bt({}, l, b)
            )
          );
        return _;
      },
      $dispose: U,
    },
    c = Or(o);
  r._s.set(e, c);
  const p = ((r._a && r._a.runWithContext) || Gf)(() =>
    r._e.run(() => (i = Oo()).run(t))
  );
  for (const m in p) {
    const b = p[m];
    if ((Ee(b) && !Xf(b)) || ct(b))
      u ||
        (C && Zf(b) && (Ee(b) ? (b.value = C[m]) : ls(b, C[m])),
        (r.state.value[e][m] = b));
    else if (typeof b == "function") {
      const _ = K(m, b);
      (p[m] = _), (d.actions[m] = b);
    }
  }
  return (
    bt(c, p),
    bt(ie(c), p),
    Object.defineProperty(c, "$state", {
      get: () => r.state.value[e],
      set: (m) => {
        q((b) => {
          bt(b, m);
        });
      },
    }),
    r._p.forEach((m) => {
      bt(
        c,
        i.run(() => m({ store: c, app: r._a, pinia: r, options: d }))
      );
    }),
    C && u && n.hydrate && n.hydrate(c.$state, C),
    (f = !0),
    (h = !0),
    c
  );
}
function Yf(e, t, n) {
  let r, s;
  const u = typeof t == "function";
  typeof e == "string" ? ((r = e), (s = u ? n : t)) : ((s = e), (r = e.id));
  function i(d, l) {
    const f = Zd();
    return (
      (d = d || (f ? Ge(ea, null) : null)),
      d && An(d),
      (d = Yi),
      d._s.has(r) || (u ? ra(r, t, s, d) : Qf(r, s, d)),
      d._s.get(r)
    );
  }
  return (i.$id = r), i;
}
function na(e) {
  {
    e = ie(e);
    const t = {};
    for (const n in e) {
      const r = e[n];
      (Ee(r) || ct(r)) && (t[n] = pd(e, n));
    }
    return t;
  }
}
function sa(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: eh } = Object.prototype,
  { getPrototypeOf: xs } = Object,
  Tn = ((e) => (t) => {
    const n = eh.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  st = (e) => ((e = e.toLowerCase()), (t) => Tn(t) === e),
  Rn = (e) => (t) => typeof t === e,
  { isArray: sr } = Array,
  Tr = Rn("undefined");
function th(e) {
  return (
    e !== null &&
    !Tr(e) &&
    e.constructor !== null &&
    !Tr(e.constructor) &&
    qe(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ua = st("ArrayBuffer");
function rh(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ua(e.buffer)),
    t
  );
}
const nh = Rn("string"),
  qe = Rn("function"),
  oa = Rn("number"),
  On = (e) => e !== null && typeof e == "object",
  sh = (e) => e === !0 || e === !1,
  Qr = (e) => {
    if (Tn(e) !== "object") return !1;
    const t = xs(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  uh = st("Date"),
  oh = st("File"),
  ih = st("Blob"),
  ah = st("FileList"),
  dh = (e) => On(e) && qe(e.pipe),
  ch = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (qe(e.append) &&
          ((t = Tn(e)) === "formdata" ||
            (t === "object" &&
              qe(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  lh = st("URLSearchParams"),
  fh = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Mr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), sr(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const u = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = u.length;
    let d;
    for (r = 0; r < i; r++) (d = u[r]), t.call(null, e[d], d, e);
  }
}
function ia(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const aa =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  da = (e) => !Tr(e) && e !== aa;
function fs() {
  const { caseless: e } = (da(this) && this) || {},
    t = {},
    n = (r, s) => {
      const u = (e && ia(t, s)) || s;
      Qr(t[u]) && Qr(r)
        ? (t[u] = fs(t[u], r))
        : Qr(r)
        ? (t[u] = fs({}, r))
        : sr(r)
        ? (t[u] = r.slice())
        : (t[u] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Mr(arguments[r], n);
  return t;
}
const hh = (e, t, n, { allOwnKeys: r } = {}) => (
    Mr(
      t,
      (s, u) => {
        n && qe(s) ? (e[u] = sa(s, n)) : (e[u] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  ph = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  mh = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  gh = (e, t, n, r) => {
    let s, u, i;
    const d = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), u = s.length; u-- > 0; )
        (i = s[u]), (!r || r(i, e, t)) && !d[i] && ((t[i] = e[i]), (d[i] = !0));
      e = n !== !1 && xs(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  _h = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  bh = (e) => {
    if (!e) return null;
    if (sr(e)) return e;
    let t = e.length;
    if (!oa(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  wh = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && xs(Uint8Array)),
  yh = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const u = s.value;
      t.call(e, u[0], u[1]);
    }
  },
  vh = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  kh = st("HTMLFormElement"),
  Eh = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  lo = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Sh = st("RegExp"),
  ca = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Mr(n, (s, u) => {
      let i;
      (i = t(s, u, e)) !== !1 && (r[u] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  Ch = (e) => {
    ca(e, (t, n) => {
      if (qe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (qe(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Ph = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((u) => {
          n[u] = !0;
        });
      };
    return sr(e) ? r(e) : r(String(e).split(t)), n;
  },
  Ah = () => {},
  Th = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  qn = "abcdefghijklmnopqrstuvwxyz",
  fo = "0123456789",
  la = { DIGIT: fo, ALPHA: qn, ALPHA_DIGIT: qn + qn.toUpperCase() + fo },
  Rh = (e = 16, t = la.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Oh(e) {
  return !!(
    e &&
    qe(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Lh = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (On(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const u = sr(r) ? [] : {};
            return (
              Mr(r, (i, d) => {
                const l = n(i, s + 1);
                !Tr(l) && (u[d] = l);
              }),
              (t[s] = void 0),
              u
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  jh = st("AsyncFunction"),
  Mh = (e) => e && (On(e) || qe(e)) && qe(e.then) && qe(e.catch),
  M = {
    isArray: sr,
    isArrayBuffer: ua,
    isBuffer: th,
    isFormData: ch,
    isArrayBufferView: rh,
    isString: nh,
    isNumber: oa,
    isBoolean: sh,
    isObject: On,
    isPlainObject: Qr,
    isUndefined: Tr,
    isDate: uh,
    isFile: oh,
    isBlob: ih,
    isRegExp: Sh,
    isFunction: qe,
    isStream: dh,
    isURLSearchParams: lh,
    isTypedArray: wh,
    isFileList: ah,
    forEach: Mr,
    merge: fs,
    extend: hh,
    trim: fh,
    stripBOM: ph,
    inherits: mh,
    toFlatObject: gh,
    kindOf: Tn,
    kindOfTest: st,
    endsWith: _h,
    toArray: bh,
    forEachEntry: yh,
    matchAll: vh,
    isHTMLForm: kh,
    hasOwnProperty: lo,
    hasOwnProp: lo,
    reduceDescriptors: ca,
    freezeMethods: Ch,
    toObjectSet: Ph,
    toCamelCase: Eh,
    noop: Ah,
    toFiniteNumber: Th,
    findKey: ia,
    global: aa,
    isContextDefined: da,
    ALPHABET: la,
    generateString: Rh,
    isSpecCompliantForm: Oh,
    toJSONObject: Lh,
    isAsyncFn: jh,
    isThenable: Mh,
  };
function ae(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s);
}
M.inherits(ae, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: M.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const fa = ae.prototype,
  ha = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  ha[e] = { value: e };
});
Object.defineProperties(ae, ha);
Object.defineProperty(fa, "isAxiosError", { value: !0 });
ae.from = (e, t, n, r, s, u) => {
  const i = Object.create(fa);
  return (
    M.toFlatObject(
      e,
      i,
      function (l) {
        return l !== Error.prototype;
      },
      (d) => d !== "isAxiosError"
    ),
    ae.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    u && Object.assign(i, u),
    i
  );
};
const Nh = null;
function hs(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function pa(e) {
  return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ho(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, u) {
          return (s = pa(s)), !n && u ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function Ih(e) {
  return M.isArray(e) && !e.some(hs);
}
const Fh = M.toFlatObject(M, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ln(e, t, n) {
  if (!M.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = M.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (T, q) {
        return !M.isUndefined(q[T]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || h,
    u = n.dots,
    i = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && M.isSpecCompliantForm(t);
  if (!M.isFunction(s)) throw new TypeError("visitor must be a function");
  function f(C) {
    if (C === null) return "";
    if (M.isDate(C)) return C.toISOString();
    if (!l && M.isBlob(C))
      throw new ae("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(C) || M.isTypedArray(C)
      ? l && typeof Blob == "function"
        ? new Blob([C])
        : Buffer.from(C)
      : C;
  }
  function h(C, T, q) {
    let z = C;
    if (C && !q && typeof C == "object") {
      if (M.endsWith(T, "{}"))
        (T = r ? T : T.slice(0, -2)), (C = JSON.stringify(C));
      else if (
        (M.isArray(C) && Ih(C)) ||
        ((M.isFileList(C) || M.endsWith(T, "[]")) && (z = M.toArray(C)))
      )
        return (
          (T = pa(T)),
          z.forEach(function (K, o) {
            !(M.isUndefined(K) || K === null) &&
              t.append(
                i === !0 ? ho([T], o, u) : i === null ? T : T + "[]",
                f(K)
              );
          }),
          !1
        );
    }
    return hs(C) ? !0 : (t.append(ho(q, T, u), f(C)), !1);
  }
  const g = [],
    v = Object.assign(Fh, {
      defaultVisitor: h,
      convertValue: f,
      isVisitable: hs,
    });
  function S(C, T) {
    if (!M.isUndefined(C)) {
      if (g.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      g.push(C),
        M.forEach(C, function (z, U) {
          (!(M.isUndefined(z) || z === null) &&
            s.call(t, z, M.isString(U) ? U.trim() : U, T, v)) === !0 &&
            S(z, T ? T.concat(U) : [U]);
        }),
        g.pop();
    }
  }
  if (!M.isObject(e)) throw new TypeError("data must be an object");
  return S(e), t;
}
function po(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function qs(e, t) {
  (this._pairs = []), e && Ln(e, this, t);
}
const ma = qs.prototype;
ma.append = function (t, n) {
  this._pairs.push([t, n]);
};
ma.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, po);
      }
    : po;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function Bh(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function ga(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Bh,
    s = n && n.serialize;
  let u;
  if (
    (s
      ? (u = s(t, n))
      : (u = M.isURLSearchParams(t) ? t.toString() : new qs(t, n).toString(r)),
    u)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + u);
  }
  return e;
}
class mo {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    M.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const _a = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  zh = typeof URLSearchParams < "u" ? URLSearchParams : qs,
  $h = typeof FormData < "u" ? FormData : null,
  Hh = typeof Blob < "u" ? Blob : null,
  Dh = {
    isBrowser: !0,
    classes: { URLSearchParams: zh, FormData: $h, Blob: Hh },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  ba = typeof window < "u" && typeof document < "u",
  Uh = ((e) => ba && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  Vh =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  xh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: ba,
        hasStandardBrowserEnv: Uh,
        hasStandardBrowserWebWorkerEnv: Vh,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  tt = { ...xh, ...Dh };
function qh(e, t) {
  return Ln(
    e,
    new tt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, u) {
          return tt.isNode && M.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : u.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Wh(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function Kh(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let u;
  for (r = 0; r < s; r++) (u = n[r]), (t[u] = e[u]);
  return t;
}
function wa(e) {
  function t(n, r, s, u) {
    let i = n[u++];
    if (i === "__proto__") return !0;
    const d = Number.isFinite(+i),
      l = u >= n.length;
    return (
      (i = !i && M.isArray(s) ? s.length : i),
      l
        ? (M.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !d)
        : ((!s[i] || !M.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], u) && M.isArray(s[i]) && (s[i] = Kh(s[i])),
          !d)
    );
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const n = {};
    return (
      M.forEachEntry(e, (r, s) => {
        t(Wh(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Gh(e, t, n) {
  if (M.isString(e))
    try {
      return (t || JSON.parse)(e), M.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ws = {
  transitional: _a,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        u = M.isObject(t);
      if ((u && M.isHTMLForm(t) && (t = new FormData(t)), M.isFormData(t)))
        return s ? JSON.stringify(wa(t)) : t;
      if (
        M.isArrayBuffer(t) ||
        M.isBuffer(t) ||
        M.isStream(t) ||
        M.isFile(t) ||
        M.isBlob(t)
      )
        return t;
      if (M.isArrayBufferView(t)) return t.buffer;
      if (M.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let d;
      if (u) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return qh(t, this.formSerializer).toString();
        if ((d = M.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Ln(
            d ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return u || s ? (n.setContentType("application/json", !1), Gh(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ws.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (t && M.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (d) {
          if (i)
            throw d.name === "SyntaxError"
              ? ae.from(d, ae.ERR_BAD_RESPONSE, this, null, this.response)
              : d;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: tt.classes.FormData, Blob: tt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
M.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ws.headers[e] = {};
});
const Ks = Ws,
  Jh = M.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Zh = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(":")),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && Jh[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  go = Symbol("internals");
function ar(e) {
  return e && String(e).trim().toLowerCase();
}
function Yr(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(Yr) : String(e);
}
function Xh(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Qh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Wn(e, t, n, r, s) {
  if (M.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!M.isString(t))) {
    if (M.isString(r)) return t.indexOf(r) !== -1;
    if (M.isRegExp(r)) return r.test(t);
  }
}
function Yh(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ep(e, t) {
  const n = M.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, u, i) {
        return this[r].call(this, t, s, u, i);
      },
      configurable: !0,
    });
  });
}
class jn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function u(d, l, f) {
      const h = ar(l);
      if (!h) throw new Error("header name must be a non-empty string");
      const g = M.findKey(s, h);
      (!g || s[g] === void 0 || f === !0 || (f === void 0 && s[g] !== !1)) &&
        (s[g || l] = Yr(d));
    }
    const i = (d, l) => M.forEach(d, (f, h) => u(f, h, l));
    return (
      M.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : M.isString(t) && (t = t.trim()) && !Qh(t)
        ? i(Zh(t), n)
        : t != null && u(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = ar(t)), t)) {
      const r = M.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return Xh(s);
        if (M.isFunction(n)) return n.call(this, s, r);
        if (M.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = ar(t)), t)) {
      const r = M.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Wn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function u(i) {
      if (((i = ar(i)), i)) {
        const d = M.findKey(r, i);
        d && (!n || Wn(r, r[d], d, n)) && (delete r[d], (s = !0));
      }
    }
    return M.isArray(t) ? t.forEach(u) : u(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const u = n[r];
      (!t || Wn(this, this[u], u, t, !0)) && (delete this[u], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      M.forEach(this, (s, u) => {
        const i = M.findKey(r, u);
        if (i) {
          (n[i] = Yr(s)), delete n[u];
          return;
        }
        const d = t ? Yh(u) : String(u).trim();
        d !== u && delete n[u], (n[d] = Yr(s)), (r[d] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      M.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && M.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[go] = this[go] = { accessors: {} }).accessors,
      s = this.prototype;
    function u(i) {
      const d = ar(i);
      r[d] || (ep(s, i), (r[d] = !0));
    }
    return M.isArray(t) ? t.forEach(u) : u(t), this;
  }
}
jn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
M.reduceDescriptors(jn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
M.freezeMethods(jn);
const lt = jn;
function Kn(e, t) {
  const n = this || Ks,
    r = t || n,
    s = lt.from(r.headers);
  let u = r.data;
  return (
    M.forEach(e, function (d) {
      u = d.call(n, u, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    u
  );
}
function ya(e) {
  return !!(e && e.__CANCEL__);
}
function Nr(e, t, n) {
  ae.call(this, e ?? "canceled", ae.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
M.inherits(Nr, ae, { __CANCEL__: !0 });
function tp(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ae(
          "Request failed with status code " + n.status,
          [ae.ERR_BAD_REQUEST, ae.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const rp = tt.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, s, u) {
        const i = [e + "=" + encodeURIComponent(t)];
        M.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
          M.isString(r) && i.push("path=" + r),
          M.isString(s) && i.push("domain=" + s),
          u === !0 && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function np(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function sp(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function va(e, t) {
  return e && !np(t) ? sp(e, t) : t;
}
const up = tt.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function s(u) {
        let i = u;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = s(window.location.href)),
        function (i) {
          const d = M.isString(i) ? s(i) : i;
          return d.protocol === r.protocol && d.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function op(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function ip(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    u = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const f = Date.now(),
        h = r[u];
      i || (i = f), (n[s] = l), (r[s] = f);
      let g = u,
        v = 0;
      for (; g !== s; ) (v += n[g++]), (g = g % e);
      if (((s = (s + 1) % e), s === u && (u = (u + 1) % e), f - i < t)) return;
      const S = h && f - h;
      return S ? Math.round((v * 1e3) / S) : void 0;
    }
  );
}
function _o(e, t) {
  let n = 0;
  const r = ip(50, 250);
  return (s) => {
    const u = s.loaded,
      i = s.lengthComputable ? s.total : void 0,
      d = u - n,
      l = r(d),
      f = u <= i;
    n = u;
    const h = {
      loaded: u,
      total: i,
      progress: i ? u / i : void 0,
      bytes: d,
      rate: l || void 0,
      estimated: l && i && f ? (i - u) / l : void 0,
      event: s,
    };
    (h[t ? "download" : "upload"] = !0), e(h);
  };
}
const ap = typeof XMLHttpRequest < "u",
  dp =
    ap &&
    function (e) {
      return new Promise(function (n, r) {
        let s = e.data;
        const u = lt.from(e.headers).normalize();
        let { responseType: i, withXSRFToken: d } = e,
          l;
        function f() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        let h;
        if (M.isFormData(s)) {
          if (tt.hasStandardBrowserEnv || tt.hasStandardBrowserWebWorkerEnv)
            u.setContentType(!1);
          else if ((h = u.getContentType()) !== !1) {
            const [T, ...q] = h
              ? h
                  .split(";")
                  .map((z) => z.trim())
                  .filter(Boolean)
              : [];
            u.setContentType([T || "multipart/form-data", ...q].join("; "));
          }
        }
        let g = new XMLHttpRequest();
        if (e.auth) {
          const T = e.auth.username || "",
            q = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          u.set("Authorization", "Basic " + btoa(T + ":" + q));
        }
        const v = va(e.baseURL, e.url);
        g.open(e.method.toUpperCase(), ga(v, e.params, e.paramsSerializer), !0),
          (g.timeout = e.timeout);
        function S() {
          if (!g) return;
          const T = lt.from(
              "getAllResponseHeaders" in g && g.getAllResponseHeaders()
            ),
            z = {
              data:
                !i || i === "text" || i === "json"
                  ? g.responseText
                  : g.response,
              status: g.status,
              statusText: g.statusText,
              headers: T,
              config: e,
              request: g,
            };
          tp(
            function (K) {
              n(K), f();
            },
            function (K) {
              r(K), f();
            },
            z
          ),
            (g = null);
        }
        if (
          ("onloadend" in g
            ? (g.onloadend = S)
            : (g.onreadystatechange = function () {
                !g ||
                  g.readyState !== 4 ||
                  (g.status === 0 &&
                    !(g.responseURL && g.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(S);
              }),
          (g.onabort = function () {
            g &&
              (r(new ae("Request aborted", ae.ECONNABORTED, e, g)), (g = null));
          }),
          (g.onerror = function () {
            r(new ae("Network Error", ae.ERR_NETWORK, e, g)), (g = null);
          }),
          (g.ontimeout = function () {
            let q = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const z = e.transitional || _a;
            e.timeoutErrorMessage && (q = e.timeoutErrorMessage),
              r(
                new ae(
                  q,
                  z.clarifyTimeoutError ? ae.ETIMEDOUT : ae.ECONNABORTED,
                  e,
                  g
                )
              ),
              (g = null);
          }),
          tt.hasStandardBrowserEnv &&
            (d && M.isFunction(d) && (d = d(e)), d || (d !== !1 && up(v))))
        ) {
          const T =
            e.xsrfHeaderName && e.xsrfCookieName && rp.read(e.xsrfCookieName);
          T && u.set(e.xsrfHeaderName, T);
        }
        s === void 0 && u.setContentType(null),
          "setRequestHeader" in g &&
            M.forEach(u.toJSON(), function (q, z) {
              g.setRequestHeader(z, q);
            }),
          M.isUndefined(e.withCredentials) ||
            (g.withCredentials = !!e.withCredentials),
          i && i !== "json" && (g.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            g.addEventListener("progress", _o(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            g.upload &&
            g.upload.addEventListener("progress", _o(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (T) => {
              g &&
                (r(!T || T.type ? new Nr(null, e, g) : T),
                g.abort(),
                (g = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const C = op(v);
        if (C && tt.protocols.indexOf(C) === -1) {
          r(new ae("Unsupported protocol " + C + ":", ae.ERR_BAD_REQUEST, e));
          return;
        }
        g.send(s || null);
      });
    },
  ps = { http: Nh, xhr: dp };
M.forEach(ps, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const bo = (e) => `- ${e}`,
  cp = (e) => M.isFunction(e) || e === null || e === !1,
  ka = {
    getAdapter: (e) => {
      e = M.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let u = 0; u < t; u++) {
        n = e[u];
        let i;
        if (
          ((r = n),
          !cp(n) && ((r = ps[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new ae(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || "#" + u] = r;
      }
      if (!r) {
        const u = Object.entries(s).map(
          ([d, l]) =>
            `adapter ${d} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? u.length > 1
            ? `since :
` +
              u.map(bo).join(`
`)
            : " " + bo(u[0])
          : "as no adapter specified";
        throw new ae(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: ps,
  };
function Gn(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Nr(null, e);
}
function wo(e) {
  return (
    Gn(e),
    (e.headers = lt.from(e.headers)),
    (e.data = Kn.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    ka
      .getAdapter(e.adapter || Ks.adapter)(e)
      .then(
        function (r) {
          return (
            Gn(e),
            (r.data = Kn.call(e, e.transformResponse, r)),
            (r.headers = lt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            ya(r) ||
              (Gn(e),
              r &&
                r.response &&
                ((r.response.data = Kn.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = lt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const yo = (e) => (e instanceof lt ? { ...e } : e);
function tr(e, t) {
  t = t || {};
  const n = {};
  function r(f, h, g) {
    return M.isPlainObject(f) && M.isPlainObject(h)
      ? M.merge.call({ caseless: g }, f, h)
      : M.isPlainObject(h)
      ? M.merge({}, h)
      : M.isArray(h)
      ? h.slice()
      : h;
  }
  function s(f, h, g) {
    if (M.isUndefined(h)) {
      if (!M.isUndefined(f)) return r(void 0, f, g);
    } else return r(f, h, g);
  }
  function u(f, h) {
    if (!M.isUndefined(h)) return r(void 0, h);
  }
  function i(f, h) {
    if (M.isUndefined(h)) {
      if (!M.isUndefined(f)) return r(void 0, f);
    } else return r(void 0, h);
  }
  function d(f, h, g) {
    if (g in t) return r(f, h);
    if (g in e) return r(void 0, f);
  }
  const l = {
    url: u,
    method: u,
    data: u,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: d,
    headers: (f, h) => s(yo(f), yo(h), !0),
  };
  return (
    M.forEach(Object.keys(Object.assign({}, e, t)), function (h) {
      const g = l[h] || s,
        v = g(e[h], t[h], h);
      (M.isUndefined(v) && g !== d) || (n[h] = v);
    }),
    n
  );
}
const Ea = "1.6.8",
  Gs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Gs[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const vo = {};
Gs.transitional = function (t, n, r) {
  function s(u, i) {
    return (
      "[Axios v" +
      Ea +
      "] Transitional option '" +
      u +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (u, i, d) => {
    if (t === !1)
      throw new ae(
        s(i, " has been removed" + (n ? " in " + n : "")),
        ae.ERR_DEPRECATED
      );
    return (
      n &&
        !vo[i] &&
        ((vo[i] = !0),
        console.warn(
          s(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(u, i, d) : !0
    );
  };
};
function lp(e, t, n) {
  if (typeof e != "object")
    throw new ae("options must be an object", ae.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const u = r[s],
      i = t[u];
    if (i) {
      const d = e[u],
        l = d === void 0 || i(d, u, e);
      if (l !== !0)
        throw new ae("option " + u + " must be " + l, ae.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ae("Unknown option " + u, ae.ERR_BAD_OPTION);
  }
}
const ms = { assertOptions: lp, validators: Gs },
  gt = ms.validators;
class cn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new mo(), response: new mo() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace
          ? Error.captureStackTrace((s = {}))
          : (s = new Error());
        const u = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? u &&
            !String(r.stack).endsWith(u.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + u)
          : (r.stack = u);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = tr(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: u } = n;
    r !== void 0 &&
      ms.assertOptions(
        r,
        {
          silentJSONParsing: gt.transitional(gt.boolean),
          forcedJSONParsing: gt.transitional(gt.boolean),
          clarifyTimeoutError: gt.transitional(gt.boolean),
        },
        !1
      ),
      s != null &&
        (M.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : ms.assertOptions(
              s,
              { encode: gt.function, serialize: gt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = u && M.merge(u.common, u[n.method]);
    u &&
      M.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (C) => {
          delete u[C];
        }
      ),
      (n.headers = lt.concat(i, u));
    const d = [];
    let l = !0;
    this.interceptors.request.forEach(function (T) {
      (typeof T.runWhen == "function" && T.runWhen(n) === !1) ||
        ((l = l && T.synchronous), d.unshift(T.fulfilled, T.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function (T) {
      f.push(T.fulfilled, T.rejected);
    });
    let h,
      g = 0,
      v;
    if (!l) {
      const C = [wo.bind(this), void 0];
      for (
        C.unshift.apply(C, d),
          C.push.apply(C, f),
          v = C.length,
          h = Promise.resolve(n);
        g < v;

      )
        h = h.then(C[g++], C[g++]);
      return h;
    }
    v = d.length;
    let S = n;
    for (g = 0; g < v; ) {
      const C = d[g++],
        T = d[g++];
      try {
        S = C(S);
      } catch (q) {
        T.call(this, q);
        break;
      }
    }
    try {
      h = wo.call(this, S);
    } catch (C) {
      return Promise.reject(C);
    }
    for (g = 0, v = f.length; g < v; ) h = h.then(f[g++], f[g++]);
    return h;
  }
  getUri(t) {
    t = tr(this.defaults, t);
    const n = va(t.baseURL, t.url);
    return ga(n, t.params, t.paramsSerializer);
  }
}
M.forEach(["delete", "get", "head", "options"], function (t) {
  cn.prototype[t] = function (n, r) {
    return this.request(
      tr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
M.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (u, i, d) {
      return this.request(
        tr(d || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: u,
          data: i,
        })
      );
    };
  }
  (cn.prototype[t] = n()), (cn.prototype[t + "Form"] = n(!0));
});
const en = cn;
class Js {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (u) {
      n = u;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let u = r._listeners.length;
      for (; u-- > 0; ) r._listeners[u](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let u;
        const i = new Promise((d) => {
          r.subscribe(d), (u = d);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(u);
          }),
          i
        );
      }),
      t(function (u, i, d) {
        r.reason || ((r.reason = new Nr(u, i, d)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Js(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
const fp = Js;
function hp(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function pp(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const gs = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(gs).forEach(([e, t]) => {
  gs[t] = e;
});
const mp = gs;
function Sa(e) {
  const t = new en(e),
    n = sa(en.prototype.request, t);
  return (
    M.extend(n, en.prototype, t, { allOwnKeys: !0 }),
    M.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Sa(tr(e, s));
    }),
    n
  );
}
const Se = Sa(Ks);
Se.Axios = en;
Se.CanceledError = Nr;
Se.CancelToken = fp;
Se.isCancel = ya;
Se.VERSION = Ea;
Se.toFormData = Ln;
Se.AxiosError = ae;
Se.Cancel = Se.CanceledError;
Se.all = function (t) {
  return Promise.all(t);
};
Se.spread = hp;
Se.isAxiosError = pp;
Se.mergeConfig = tr;
Se.AxiosHeaders = lt;
Se.formToJSON = (e) => wa(M.isHTMLForm(e) ? new FormData(e) : e);
Se.getAdapter = ka.getAdapter;
Se.HttpStatusCode = mp;
Se.default = Se;
const ko = JSON.parse(
    localStorage.getItem("user") || sessionStorage.getItem("user")
  ),
  gp = ko
    ? { status: { loggedIn: !0 }, user: ko }
    : { status: { loggedIn: !1 }, user: null },
  _p = (e) => {
    const t = JSON.stringify(e);
    localStorage.getItem("user") && localStorage.setItem("user", t),
      sessionStorage.getItem("user") && sessionStorage.setItem("user", t);
  },
  Zs = Yf("AuthStore ", () => {
    const e = Te(gp);
    return {
      userState: e,
      logOut: () => {
        localStorage.removeItem("user"),
          sessionStorage.removeItem("user"),
          (e.value = { status: { loggedIn: !1 }, user: null });
      },
      logIn: async (s) =>
        new Promise((u, i) => {
          Se.post("/login", s.authData, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          })
            .then((l) => {
              if (l.status == 200) {
                const f = l.data;
                (f.expires_at = new Date(Date.now() + f.expires_in * 1e3)),
                  (f.refresh_token_expires_at = new Date(
                    Date.now() + f.refresh_expires_in * 1e3
                  )),
                  console.log(f),
                  s.rememberUser
                    ? localStorage.setItem("user", JSON.stringify(f))
                    : sessionStorage.setItem("user", JSON.stringify(f)),
                  (e.value.user = f),
                  (e.value.status.loggedIn = !0),
                  u();
              }
            })
            .catch((l) => {
              console.log(l), i();
            });
        }),
      updateAccessToken: async () =>
        new Promise((s, u) => {
          Se.post(
            "/refresh",
            { refresh_token: e.value.user.refresh_token },
            {
              headers: {
                Authorization: `Bearer ${e.value.user.refresh_token}`,
              },
            }
          )
            .then((d) => {
              if (d.status == 200) {
                const l = d.data,
                  f = e.value.user;
                (f.access_token = l.access_token),
                  (f.expires_at = new Date(Date.now() + l.expires_in * 1e3)),
                  (f.refresh_token = l.refresh_token),
                  (f.refresh_token_expires_at = new Date(
                    Date.now() + l.refresh_expires_in * 1e3
                  )),
                  _p(f),
                  s();
              }
            })
            .catch((d) => {
              console.log(d), u();
            });
        }),
    };
  }),
  bp = Hs(
    '<nav class="app-menu__nav"><a href="javascript:void(0)">ДИАНА</a><a href="javascript:void(0)">WENDY</a><a href="javascript:void(0)">АНАТОЛИЙ</a><a href="javascript:void(0)">ROBINZON</a><a href="javascript:void(0)">КОЛОМБО</a><a href="javascript:void(0)">VOLTER</a></nav>',
    1
  ),
  wp = { class: "home-page__content-inner" },
  yp = Q(
    "h1",
    { class: "home-page__title" },
    [
      Q("span", { class: "color-title" }, "{ Привет }"),
      Zr(),
      Q("br"),
      Zr(" Меня зовут"),
      Q("br"),
      Zr(" Робинзон! "),
    ],
    -1
  ),
  vp = Q(
    "span",
    { class: "home-page__descr" },
    " Я найду для вас самую актуальную информацию по любой теме в открытых источниках и подготовлю в формате структурированного отчета, который удобно читать и понимать. ",
    -1
  ),
  kp = { class: "form-label" },
  Ep = ["readonly"],
  Sp = Q("button", { type: "submit", class: "form-btn" }, "ИССЛЕДОВАТЬ", -1),
  Cp = { key: 0, class: "render-zone" },
  Pp = { class: "render-zone__content" },
  Ap = { class: "container" },
  Tp = { class: "render-zone__response" },
  Rp = {
    __name: "MainPage",
    emits: ["searchStartEvent"],
    setup(e, { emit: t }) {
      const n = Vs(),
        r = Zs(),
        s = t,
        u = Te(!1),
        i = Te(!1),
        d = Te(""),
        l = Te(!1),
        f = Te({ status: "", messages: [] });
      let h = null;
      const g = new qf.Converter(),
        v = () => {
          i.value ||
            d.value.length < 1 ||
            (u.value || ((u.value = !u.value), s("searchStartEvent")), C());
        },
        S = (z, U) => {
          const K = f.value.messages[f.value.messages.length - 1];
          (K.messageStatus = z),
            z === "logs" && (K.agentResponce += g.makeHtml(U)),
            z === "report" &&
              ((K.report.hasReport = !0),
              (K.report.value += g.makeHtml(U)),
              (K.report.text += U)),
            z === "path" &&
              ((d.value = ""),
              (i.value = !1),
              (f.value.status = "finished"),
              (K.messageStatus = "finished"),
              (K.btns = U));
        },
        C = () => {
          (i.value = !0),
            f.value.messages.push({
              showAgentResponce: !1,
              agentResponce: "",
              report: { value: "", text: "", hasReport: !1 },
              messageStatus: "",
              btns: {},
            });
          const z = {
            task: d.value,
            report_type: "detailed_report",
            agent: !0,
          };
          h.send(`start ${JSON.stringify(z)}`),
            setTimeout(() => {
              l.value = !0;
              const U = document.querySelector(".render-zone__content");
              U &&
                U.scrollBy({
                  top: U.scrollHeight,
                  left: 0,
                  behavior: "smooth",
                });
            }, 650);
        },
        T = () => {
          r.logOut(), n.push("/auth");
        },
        q = () => {
          const { protocol: z, host: U, pathname: K } = window.location,
            o = r.userState.user.access_token,
            c = `${
              z === "https:" ? "wss:" : "ws:"
            }//${U}${K}ws?token=${encodeURIComponent(o)}`;
          (h = new WebSocket(c)),
            (h.onmessage = (a) => {
              try {
                const p = JSON.parse(a.data);
                S(p.type, p.output);
              } catch {
                console.log("Ошибка парсинга ответа из Websocket");
              }
            }),
            (h.onopen = (a) => {
              console.log("Websocket Open:", a);
            }),
            (h.onerror = (a) => {
              console.log("Websocket Error:", a);
            }),
            (h.onclose = (a) => {
              console.log("Websocket close:", a);
            });
        };
      return (
        Is(() => {
          q();
        }),
        Fs(() => {
          h && h.close();
        }),
        (z, U) => (
          Me(),
          De("div", null, [
            Q("div", { class: "app-menu" }, [
              bp,
              Q(
                "a",
                {
                  href: "javascript:void(0)",
                  class: "app-menu__logout",
                  onClick: T,
                },
                "ВЫЙТИ"
              ),
            ]),
            Q("div", wp, [
              yp,
              vp,
              Q(
                "form",
                {
                  class: at(["home-page__form", { blocked: i.value }]),
                  onSubmit: $i(v, ["prevent"]),
                },
                [
                  Q("label", kp, [
                    qr(
                      Q(
                        "input",
                        {
                          type: "text",
                          class: "form-field",
                          placeholder: "Что будем исследовать?",
                          "onUpdate:modelValue":
                            U[0] || (U[0] = (K) => (d.value = K)),
                          readonly: i.value,
                        },
                        null,
                        8,
                        Ep
                      ),
                      [[dn, d.value, void 0, { trim: !0 }]]
                    ),
                    Sp,
                  ]),
                ],
                34
              ),
            ]),
            ve(
              jr,
              { name: "fade-in", mode: "out-in" },
              {
                default: $t(() => [
                  l.value
                    ? (Me(),
                      De("div", Cp, [
                        Q("div", Pp, [
                          Q("div", Ap, [
                            Q("div", Tp, [
                              ve(
                                xc,
                                { name: "list" },
                                {
                                  default: $t(() => [
                                    (Me(!0),
                                    De(
                                      $e,
                                      null,
                                      pi(
                                        f.value.messages,
                                        (K, o) => (
                                          Me(),
                                          $s(
                                            Df,
                                            { key: o, message: K },
                                            null,
                                            8,
                                            ["message"]
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                          ]),
                        ]),
                      ]))
                    : qt("", !0),
                ]),
                _: 1,
              }
            ),
          ])
        )
      );
    },
  },
  Op = { class: "auth_zone" },
  Lp = { class: "auth_form" },
  jp = Q(
    "div",
    { class: "auth_form__head" },
    [
      Q("div", { class: "head-wrapper" }, [
        Q("div", { class: "auth_form__title" }, "Вход"),
        Q(
          "div",
          { class: "auth_form__descr" },
          "Для входа, введите логин и пароль"
        ),
      ]),
    ],
    -1
  ),
  Mp = Q("span", null, "Логин", -1),
  Np = { class: "label-filed-wrapper" },
  Ip = Hs(
    '<div class="label-filed__ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_380_213)"><path d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z" stroke="#00FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 7L12 13L21 7" stroke="#00FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_380_213"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg></div>',
    1
  ),
  Fp = Q("span", null, "Пароль", -1),
  Bp = { class: "label-filed-wrapper" },
  zp = Hs(
    '<div class="label-filed__ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_380_221)"><path d="M16.555 3.84305L20.157 7.44505C20.4242 7.71221 20.6362 8.02939 20.7808 8.37847C20.9254 8.72755 20.9998 9.1017 20.9998 9.47955C20.9998 9.8574 20.9254 10.2316 20.7808 10.5806C20.6362 10.9297 20.4242 11.2469 20.157 11.5141L17.514 14.1571C17.2468 14.4243 16.9297 14.6362 16.5806 14.7808C16.2315 14.9254 15.8573 14.9999 15.4795 14.9999C15.1017 14.9999 14.7275 14.9254 14.3784 14.7808C14.0293 14.6362 13.7122 14.4243 13.445 14.1571L13.144 13.8561L6.586 20.4141C6.25372 20.7463 5.81507 20.9509 5.347 20.9921L5.172 21.0001H4C3.75507 21 3.51866 20.9101 3.33563 20.7473C3.15259 20.5846 3.03566 20.3603 3.007 20.1171L3 20.0001V18.8281C3.00011 18.3585 3.16543 17.904 3.467 17.5441L3.586 17.4141L4 17.0001H6V15.0001H8V13.0001L10.144 10.8561L9.843 10.5551C9.5758 10.2879 9.36384 9.97071 9.21923 9.62163C9.07462 9.27255 9.00019 8.8984 9.00019 8.52055C9.00019 8.1427 9.07462 7.76855 9.21923 7.41947C9.36384 7.07039 9.5758 6.75321 9.843 6.48605L12.486 3.84305C12.7532 3.57585 13.0703 3.36389 13.4194 3.21928C13.7685 3.07467 14.1427 3.00024 14.5205 3.00024C14.8983 3.00024 15.2725 3.07467 15.6216 3.21928C15.9707 3.36389 16.2878 3.57585 16.555 3.84305Z" stroke="#00FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 9H15.01" stroke="#00FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_380_221"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg></div>',
    1
  ),
  $p = ["type"],
  Hp = { class: "custom-cb" },
  Dp = Q("span", { class: "custom-cb__text" }, "Запомнить меня", -1),
  Up = Q("button", { type: "submit", class: "btn submit-btn" }, "ВОЙТИ", -1),
  Vp = { class: "form-errors" },
  xp = {
    __name: "Auth",
    setup(e) {
      const t = Zs(),
        { userState: n } = na(t),
        r = Vs();
      n.value.status.loggedIn && r.push("/");
      const u = Te({ login: "", password: "", errors: [], remember: !0 }),
        i = Te(!1),
        d = Te(!1),
        l = Ne(() =>
          u.value.errors.map((S) => {
            switch (S) {
              case "login-error":
                return "Введите Логин";
              case "password-error":
                return "Введите Пароль";
              case "auth-error":
                return "Не верный Логин или Пароль";
            }
          })
        ),
        f = (S) => {
          u.value.errors = u.value.errors.filter(
            (C) => (
              console.log(C == "auth-error"), C != S && C !== "auth-error"
            )
          );
        },
        h = (S) => {
          const C = u.value;
          if (
            (C.login || C.errors.push("login-error"),
            C.password || C.errors.push("password-error"),
            C.errors.length > 0)
          )
            return;
          d.value = !0;
          const T = C.remember,
            q = `username=${u.value.login}&password=${u.value.password}`;
          t.logIn({ authData: q, rememberUser: T })
            .then(() => {
              r.push("/");
            })
            .catch((z) => {
              C.errors.push("auth-error");
            })
            .finally((z) => {
              d.value = !1;
            });
        },
        g = (S) =>
          S.target.closest(".label-filed-wrapper").classList.add("focus"),
        v = (S) =>
          S.target.closest(".label-filed-wrapper").classList.remove("focus");
      return (S, C) => (
        Me(),
        De("div", Op, [
          Q("div", Lp, [
            jp,
            Q(
              "form",
              {
                class: at(["auth_form__body", { sending: d.value }]),
                onSubmit: $i(h, ["prevent"]),
              },
              [
                Q(
                  "label",
                  {
                    class: at([
                      "auth_form__label",
                      { error: u.value.errors.includes("login-error") },
                    ]),
                  },
                  [
                    Mp,
                    Q("div", Np, [
                      Ip,
                      qr(
                        Q(
                          "input",
                          {
                            name: "username",
                            type: "text",
                            class: "filed-input",
                            placeholder: "Email",
                            onFocus: g,
                            onBlur: v,
                            "onUpdate:modelValue":
                              C[0] || (C[0] = (T) => (u.value.login = T)),
                            onInput: C[1] || (C[1] = (T) => f("login-error")),
                          },
                          null,
                          544
                        ),
                        [[dn, u.value.login, void 0, { trim: !0 }]]
                      ),
                    ]),
                  ],
                  2
                ),
                Q(
                  "label",
                  {
                    class: at([
                      "auth_form__label",
                      { error: u.value.errors.includes("password-error") },
                    ]),
                  },
                  [
                    Fp,
                    Q("div", Bp, [
                      zp,
                      qr(
                        Q(
                          "input",
                          {
                            name: "password",
                            type: i.value ? "text" : "password",
                            class: "filed-input _pass",
                            placeholder: "Password",
                            onFocus: g,
                            onBlur: v,
                            "onUpdate:modelValue":
                              C[2] || (C[2] = (T) => (u.value.password = T)),
                            onInput:
                              C[3] || (C[3] = (T) => f("password-error")),
                          },
                          null,
                          40,
                          $p
                        ),
                        [[Qc, u.value.password, void 0, { trim: !0 }]]
                      ),
                      Q(
                        "div",
                        {
                          class: "label-filed__show-or-hide",
                          onPointerdown: C[4] || (C[4] = (T) => (i.value = !0)),
                          onPointerup: C[5] || (C[5] = (T) => (i.value = !1)),
                        },
                        null,
                        32
                      ),
                    ]),
                  ],
                  2
                ),
                Q("div", Hp, [
                  qr(
                    Q(
                      "input",
                      {
                        type: "checkbox",
                        class: "custom-cb__input",
                        "onUpdate:modelValue":
                          C[6] || (C[6] = (T) => (u.value.remember = T)),
                      },
                      null,
                      512
                    ),
                    [[Bi, u.value.remember]]
                  ),
                  Dp,
                ]),
                Up,
                Q("div", Vp, [
                  (Me(!0),
                  De(
                    $e,
                    null,
                    pi(l.value, (T) => (Me(), De("span", null, za(T), 1))),
                    256
                  )),
                ]),
              ],
              34
            ),
          ]),
        ])
      );
    },
  },
  qp = [
    { path: "/", name: "MainPage", component: Rp },
    { path: "/auth", name: "Auth", component: xp },
  ],
  Wp = cf({
    history: zl(),
    routes: qp,
    scrollBehavior(e, t, n) {
      return { top: 0 };
    },
  }),
  Kp = "/site/assets/bg-man.png",
  Gp = Q(
    "div",
    { class: "application-zone__image" },
    [Q("img", { src: Kp, alt: "" })],
    -1
  ),
  Jp = { class: "application-zone__content" },
  Zp = {
    __name: "App",
    setup(e) {
      const t = Zs(),
        { userState: n } = na(t),
        r = Vs(),
        s = Te(!1),
        u = Te(!1),
        i = Te(!1),
        d = () => {
          (s.value = !0), setTimeout(() => (u.value = !0), 600);
        };
      return (
        li(async () => {
          const l = n.value;
          l.status.loggedIn
            ? new Date(l.user.expires_at) < new Date()
              ? new Date(l.user.refresh_token_expires_at) < new Date()
                ? (t.logOut(), r.push("/auth"), (i.value = !0))
                : t
                    .updateAccessToken()
                    .then(() => {
                      r.push("/"), (i.value = !0);
                    })
                    .catch((v) => {
                      t.logOut(),
                        r.push("/auth").then(() => {
                          i.value = !0;
                        });
                    })
              : (r.push("/"), (i.value = !0))
            : (r.push("/auth"), (i.value = !0));
        }),
        (l, f) => {
          const h = Cd("router-view");
          return i.value
            ? (Me(),
              De(
                "div",
                {
                  key: 0,
                  class: at([
                    "application-zone",
                    { "search-start": s.value, searchTransitionEnd: u.value },
                  ]),
                },
                [
                  Gp,
                  Q("div", Jp, [
                    ve(h, null, {
                      default: $t(({ Component: g }) => [
                        ve(
                          jr,
                          { mode: "out-in", name: "fade" },
                          {
                            default: $t(() => [
                              (Me(),
                              $s(Pd(g), { onSearchStartEvent: d }, null, 32)),
                            ]),
                            _: 2,
                          },
                          1024
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                ],
                2
              ))
            : qt("", !0);
        }
      );
    },
  };
sl(Zp).use(Wp).use(Kf()).use(bf).mount("#app");
