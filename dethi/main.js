var Wr = {};
/**
* @vue/shared v3.4.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function At(e, t) {
  const o = new Set(e.split(","));
  return t ? (n) => o.has(n.toLowerCase()) : (n) => o.has(n);
}
const W = Wr.NODE_ENV !== "production" ? Object.freeze({}) : {}, St = Wr.NODE_ENV !== "production" ? Object.freeze([]) : [], Z = () => {
}, zr = () => !1, Xt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Eo = (e) => e.startsWith("onUpdate:"), J = Object.assign, Vn = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, is = Object.prototype.hasOwnProperty, F = (e, t) => is.call(e, t), D = Array.isArray, at = (e) => Zt(e) === "[object Map]", Pt = (e) => Zt(e) === "[object Set]", rr = (e) => Zt(e) === "[object Date]", $ = (e) => typeof e == "function", Y = (e) => typeof e == "string", et = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", Dn = (e) => (B(e) || $(e)) && $(e.then) && $(e.catch), qr = Object.prototype.toString, Zt = (e) => qr.call(e), Sn = (e) => Zt(e).slice(8, -1), Jr = (e) => Zt(e) === "[object Object]", Cn = (e) => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lt = /* @__PURE__ */ At(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ss = /* @__PURE__ */ At(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Do = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (o) => t[o] || (t[o] = e(o));
}, ls = /-(\w)/g, Le = Do((e) => e.replace(ls, (t, o) => o ? o.toUpperCase() : "")), cs = /\B([A-Z])/g, be = Do(
  (e) => e.replace(cs, "-$1").toLowerCase()
), So = Do((e) => e.charAt(0).toUpperCase() + e.slice(1)), lt = Do((e) => e ? `on${So(e)}` : ""), gt = (e, t) => !Object.is(e, t), wt = (e, t) => {
  for (let o = 0; o < e.length; o++)
    e[o](t);
}, No = (e, t, o) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: o
  });
}, qt = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ir = (e) => {
  const t = Y(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let sr;
const $n = () => sr || (sr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function In(e) {
  if (D(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], r = Y(n) ? ds(n) : In(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (Y(e) || B(e))
    return e;
}
const as = /;(?![^(]*\))/g, us = /:([^]+)/, fs = /\/\*[^]*?\*\//g;
function ds(e) {
  const t = {};
  return e.replace(fs, "").split(as).forEach((o) => {
    if (o) {
      const n = o.split(us);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ze(e) {
  let t = "";
  if (Y(e))
    t = e;
  else if (D(e))
    for (let o = 0; o < e.length; o++) {
      const n = Ze(e[o]);
      n && (t += n + " ");
    }
  else if (B(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const ps = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", hs = /* @__PURE__ */ At(ps);
function Gr(e) {
  return !!e || e === "";
}
function ms(e, t) {
  if (e.length !== t.length)
    return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = bt(e[n], t[n]);
  return o;
}
function bt(e, t) {
  if (e === t)
    return !0;
  let o = rr(e), n = rr(t);
  if (o || n)
    return o && n ? e.getTime() === t.getTime() : !1;
  if (o = et(e), n = et(t), o || n)
    return e === t;
  if (o = D(e), n = D(t), o || n)
    return o && n ? ms(e, t) : !1;
  if (o = B(e), n = B(t), o || n) {
    if (!o || !n)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), a = t.hasOwnProperty(s);
      if (l && !a || !l && a || !bt(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Tn(e, t) {
  return e.findIndex((o) => bt(o, t));
}
const Vt = (e) => Y(e) ? e : e == null ? "" : D(e) || B(e) && (e.toString === qr || !$(e.toString)) ? JSON.stringify(e, Yr, 2) : String(e), Yr = (e, t) => t && t.__v_isRef ? Yr(e, t.value) : at(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [n, r], i) => (o[Go(n, i) + " =>"] = r, o),
    {}
  )
} : Pt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Go(o))
} : et(t) ? Go(t) : B(t) && !D(t) && !Jr(t) ? String(t) : t, Go = (e, t = "") => {
  var o;
  return et(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e;
};
var oe = {};
function rn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let we;
class _s {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = we, !t && we && (this.index = (we.scopes || (we.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const o = we;
      try {
        return we = this, t();
      } finally {
        we = o;
      }
    } else
      oe.NODE_ENV !== "production" && rn("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    we = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    we = this.parent;
  }
  stop(t) {
    if (this._active) {
      let o, n;
      for (o = 0, n = this.effects.length; o < n; o++)
        this.effects[o].stop();
      for (o = 0, n = this.cleanups.length; o < n; o++)
        this.cleanups[o]();
      if (this.scopes)
        for (o = 0, n = this.scopes.length; o < n; o++)
          this.scopes[o].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function gs(e, t = we) {
  t && t.active && t.effects.push(e);
}
function bs() {
  return we;
}
let ut;
class An {
  constructor(t, o, n, r) {
    this.fn = t, this.trigger = o, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, gs(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, nt();
      for (let t = 0; t < this._depsLength; t++) {
        const o = this.deps[t];
        if (o.computed && (ys(o.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), rt();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Qe, o = ut;
    try {
      return Qe = !0, ut = this, this._runnings++, lr(this), this.fn();
    } finally {
      cr(this), this._runnings--, ut = o, Qe = t;
    }
  }
  stop() {
    var t;
    this.active && (lr(this), cr(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function ys(e) {
  return e.value;
}
function lr(e) {
  e._trackId++, e._depsLength = 0;
}
function cr(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Xr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Xr(e, t) {
  const o = e.get(t);
  o !== void 0 && t._trackId !== o && (e.delete(t), e.size === 0 && e.cleanup());
}
let Qe = !0, sn = 0;
const Zr = [];
function nt() {
  Zr.push(Qe), Qe = !1;
}
function rt() {
  const e = Zr.pop();
  Qe = e === void 0 ? !0 : e;
}
function Pn() {
  sn++;
}
function Fn() {
  for (sn--; !sn && ln.length; )
    ln.shift()();
}
function Qr(e, t, o) {
  var n;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && Xr(r, e), e.deps[e._depsLength++] = t) : e._depsLength++, oe.NODE_ENV !== "production" && ((n = e.onTrack) == null || n.call(e, J({ effect: e }, o)));
  }
}
const ln = [];
function ei(e, t, o) {
  var n;
  Pn();
  for (const r of e.keys()) {
    let i;
    r._dirtyLevel < t && (i ?? (i = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (i ?? (i = e.get(r) === r._trackId)) && (oe.NODE_ENV !== "production" && ((n = r.onTrigger) == null || n.call(r, J({ effect: r }, o))), r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && ln.push(r.scheduler)));
  }
  Fn();
}
const ti = (e, t) => {
  const o = /* @__PURE__ */ new Map();
  return o.cleanup = e, o.computed = t, o;
}, cn = /* @__PURE__ */ new WeakMap(), ft = Symbol(oe.NODE_ENV !== "production" ? "iterate" : ""), an = Symbol(oe.NODE_ENV !== "production" ? "Map key iterate" : "");
function ie(e, t, o) {
  if (Qe && ut) {
    let n = cn.get(e);
    n || cn.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(o);
    r || n.set(o, r = ti(() => n.delete(o))), Qr(
      ut,
      r,
      oe.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: o
      } : void 0
    );
  }
}
function Pe(e, t, o, n, r, i) {
  const s = cn.get(e);
  if (!s)
    return;
  let l = [];
  if (t === "clear")
    l = [...s.values()];
  else if (o === "length" && D(e)) {
    const a = Number(n);
    s.forEach((d, m) => {
      (m === "length" || !et(m) && m >= a) && l.push(d);
    });
  } else
    switch (o !== void 0 && l.push(s.get(o)), t) {
      case "add":
        D(e) ? Cn(o) && l.push(s.get("length")) : (l.push(s.get(ft)), at(e) && l.push(s.get(an)));
        break;
      case "delete":
        D(e) || (l.push(s.get(ft)), at(e) && l.push(s.get(an)));
        break;
      case "set":
        at(e) && l.push(s.get(ft));
        break;
    }
  Pn();
  for (const a of l)
    a && ei(
      a,
      4,
      oe.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: o,
        newValue: n,
        oldValue: r,
        oldTarget: i
      } : void 0
    );
  Fn();
}
const Es = /* @__PURE__ */ At("__proto__,__v_isRef,__isVue"), oi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(et)
), ar = /* @__PURE__ */ Ns();
function Ns() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...o) {
      const n = T(this);
      for (let i = 0, s = this.length; i < s; i++)
        ie(n, "get", i + "");
      const r = n[t](...o);
      return r === -1 || r === !1 ? n[t](...o.map(T)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...o) {
      nt(), Pn();
      const n = T(this)[t].apply(this, o);
      return Fn(), rt(), n;
    };
  }), e;
}
function vs(e) {
  const t = T(this);
  return ie(t, "has", e), t.hasOwnProperty(e);
}
class ni {
  constructor(t = !1, o = !1) {
    this._isReadonly = t, this._shallow = o;
  }
  get(t, o, n) {
    const r = this._isReadonly, i = this._shallow;
    if (o === "__v_isReactive")
      return !r;
    if (o === "__v_isReadonly")
      return r;
    if (o === "__v_isShallow")
      return i;
    if (o === "__v_raw")
      return n === (r ? i ? ui : ai : i ? ci : li).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = D(t);
    if (!r) {
      if (s && F(ar, o))
        return Reflect.get(ar, o, n);
      if (o === "hasOwnProperty")
        return vs;
    }
    const l = Reflect.get(t, o, n);
    return (et(o) ? oi.has(o) : Es(o)) || (r || ie(t, "get", o), i) ? l : ce(l) ? s && Cn(o) ? l : l.value : B(l) ? r ? fi(l) : Qt(l) : l;
  }
}
class ri extends ni {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, n, r) {
    let i = t[o];
    if (!this._shallow) {
      const a = yt(i);
      if (!Ct(n) && !yt(n) && (i = T(i), n = T(n)), !D(t) && ce(i) && !ce(n))
        return a ? !1 : (i.value = n, !0);
    }
    const s = D(t) && Cn(o) ? Number(o) < t.length : F(t, o), l = Reflect.set(t, o, n, r);
    return t === T(r) && (s ? gt(n, i) && Pe(t, "set", o, n, i) : Pe(t, "add", o, n)), l;
  }
  deleteProperty(t, o) {
    const n = F(t, o), r = t[o], i = Reflect.deleteProperty(t, o);
    return i && n && Pe(t, "delete", o, void 0, r), i;
  }
  has(t, o) {
    const n = Reflect.has(t, o);
    return (!et(o) || !oi.has(o)) && ie(t, "has", o), n;
  }
  ownKeys(t) {
    return ie(
      t,
      "iterate",
      D(t) ? "length" : ft
    ), Reflect.ownKeys(t);
  }
}
class ii extends ni {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, o) {
    return oe.NODE_ENV !== "production" && rn(
      `Set operation on key "${String(o)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, o) {
    return oe.NODE_ENV !== "production" && rn(
      `Delete operation on key "${String(o)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Os = /* @__PURE__ */ new ri(), ws = /* @__PURE__ */ new ii(), xs = /* @__PURE__ */ new ri(
  !0
), Vs = /* @__PURE__ */ new ii(!0), Mn = (e) => e, Co = (e) => Reflect.getPrototypeOf(e);
function so(e, t, o = !1, n = !1) {
  e = e.__v_raw;
  const r = T(e), i = T(t);
  o || (gt(t, i) && ie(r, "get", t), ie(r, "get", i));
  const { has: s } = Co(r), l = n ? Mn : o ? Rn : jn;
  if (s.call(r, t))
    return l(e.get(t));
  if (s.call(r, i))
    return l(e.get(i));
  e !== r && e.get(t);
}
function lo(e, t = !1) {
  const o = this.__v_raw, n = T(o), r = T(e);
  return t || (gt(e, r) && ie(n, "has", e), ie(n, "has", r)), e === r ? o.has(e) : o.has(e) || o.has(r);
}
function co(e, t = !1) {
  return e = e.__v_raw, !t && ie(T(e), "iterate", ft), Reflect.get(e, "size", e);
}
function ur(e) {
  e = T(e);
  const t = T(this);
  return Co(t).has.call(t, e) || (t.add(e), Pe(t, "add", e, e)), this;
}
function fr(e, t) {
  t = T(t);
  const o = T(this), { has: n, get: r } = Co(o);
  let i = n.call(o, e);
  i ? oe.NODE_ENV !== "production" && si(o, n, e) : (e = T(e), i = n.call(o, e));
  const s = r.call(o, e);
  return o.set(e, t), i ? gt(t, s) && Pe(o, "set", e, t, s) : Pe(o, "add", e, t), this;
}
function dr(e) {
  const t = T(this), { has: o, get: n } = Co(t);
  let r = o.call(t, e);
  r ? oe.NODE_ENV !== "production" && si(t, o, e) : (e = T(e), r = o.call(t, e));
  const i = n ? n.call(t, e) : void 0, s = t.delete(e);
  return r && Pe(t, "delete", e, void 0, i), s;
}
function pr() {
  const e = T(this), t = e.size !== 0, o = oe.NODE_ENV !== "production" ? at(e) ? new Map(e) : new Set(e) : void 0, n = e.clear();
  return t && Pe(e, "clear", void 0, void 0, o), n;
}
function ao(e, t) {
  return function(n, r) {
    const i = this, s = i.__v_raw, l = T(s), a = t ? Mn : e ? Rn : jn;
    return !e && ie(l, "iterate", ft), s.forEach((d, m) => n.call(r, a(d), a(m), i));
  };
}
function uo(e, t, o) {
  return function(...n) {
    const r = this.__v_raw, i = T(r), s = at(i), l = e === "entries" || e === Symbol.iterator && s, a = e === "keys" && s, d = r[e](...n), m = o ? Mn : t ? Rn : jn;
    return !t && ie(
      i,
      "iterate",
      a ? an : ft
    ), {
      // iterator protocol
      next() {
        const { value: p, done: E } = d.next();
        return E ? { value: p, done: E } : {
          value: l ? [m(p[0]), m(p[1])] : m(p),
          done: E
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function qe(e) {
  return function(...t) {
    if (oe.NODE_ENV !== "production") {
      const o = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${So(e)} operation ${o}failed: target is readonly.`,
        T(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ds() {
  const e = {
    get(i) {
      return so(this, i);
    },
    get size() {
      return co(this);
    },
    has: lo,
    add: ur,
    set: fr,
    delete: dr,
    clear: pr,
    forEach: ao(!1, !1)
  }, t = {
    get(i) {
      return so(this, i, !1, !0);
    },
    get size() {
      return co(this);
    },
    has: lo,
    add: ur,
    set: fr,
    delete: dr,
    clear: pr,
    forEach: ao(!1, !0)
  }, o = {
    get(i) {
      return so(this, i, !0);
    },
    get size() {
      return co(this, !0);
    },
    has(i) {
      return lo.call(this, i, !0);
    },
    add: qe("add"),
    set: qe("set"),
    delete: qe("delete"),
    clear: qe("clear"),
    forEach: ao(!0, !1)
  }, n = {
    get(i) {
      return so(this, i, !0, !0);
    },
    get size() {
      return co(this, !0);
    },
    has(i) {
      return lo.call(this, i, !0);
    },
    add: qe("add"),
    set: qe("set"),
    delete: qe("delete"),
    clear: qe("clear"),
    forEach: ao(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = uo(
      i,
      !1,
      !1
    ), o[i] = uo(
      i,
      !0,
      !1
    ), t[i] = uo(
      i,
      !1,
      !0
    ), n[i] = uo(
      i,
      !0,
      !0
    );
  }), [
    e,
    o,
    t,
    n
  ];
}
const [
  Ss,
  Cs,
  $s,
  Is
] = /* @__PURE__ */ Ds();
function $o(e, t) {
  const o = t ? e ? Is : $s : e ? Cs : Ss;
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    F(o, r) && r in n ? o : n,
    r,
    i
  );
}
const Ts = {
  get: /* @__PURE__ */ $o(!1, !1)
}, As = {
  get: /* @__PURE__ */ $o(!1, !0)
}, Ps = {
  get: /* @__PURE__ */ $o(!0, !1)
}, Fs = {
  get: /* @__PURE__ */ $o(!0, !0)
};
function si(e, t, o) {
  const n = T(o);
  if (n !== o && t.call(e, n)) {
    const r = Sn(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const li = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), ai = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap();
function Ms(e) {
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
function js(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ms(Sn(e));
}
function Qt(e) {
  return yt(e) ? e : Io(
    e,
    !1,
    Os,
    Ts,
    li
  );
}
function Rs(e) {
  return Io(
    e,
    !1,
    xs,
    As,
    ci
  );
}
function fi(e) {
  return Io(
    e,
    !0,
    ws,
    Ps,
    ai
  );
}
function Dt(e) {
  return Io(
    e,
    !0,
    Vs,
    Fs,
    ui
  );
}
function Io(e, t, o, n, r) {
  if (!B(e))
    return oe.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const s = js(e);
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? n : o
  );
  return r.set(e, l), l;
}
function dt(e) {
  return yt(e) ? dt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function yt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ct(e) {
  return !!(e && e.__v_isShallow);
}
function un(e) {
  return dt(e) || yt(e);
}
function T(e) {
  const t = e && e.__v_raw;
  return t ? T(t) : e;
}
function di(e) {
  return Object.isExtensible(e) && No(e, "__v_skip", !0), e;
}
const jn = (e) => B(e) ? Qt(e) : e, Rn = (e) => B(e) ? fi(e) : e;
class pi {
  constructor(t, o, n, r) {
    this._setter = o, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new An(
      () => t(this._value),
      () => Yo(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = n;
  }
  get value() {
    const t = T(this);
    return (!t._cacheable || t.effect.dirty) && gt(t._value, t._value = t.effect.run()) && Yo(t, 4), Us(t), t.effect._dirtyLevel >= 2 && Yo(t, 2), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function ks(e, t, o = !1) {
  let n, r;
  const i = $(e);
  i ? (n = e, r = oe.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Z) : (n = e.get, r = e.set);
  const s = new pi(n, r, i || !r, o);
  return oe.NODE_ENV !== "production" && t && !o && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
function Us(e) {
  var t;
  Qe && ut && (e = T(e), Qr(
    ut,
    (t = e.dep) != null ? t : e.dep = ti(
      () => e.dep = void 0,
      e instanceof pi ? e : void 0
    ),
    oe.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Yo(e, t = 4, o) {
  e = T(e);
  const n = e.dep;
  n && ei(
    n,
    t,
    oe.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: o
    } : void 0
  );
}
function ce(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ls(e) {
  return ce(e) ? e.value : e;
}
const Hs = {
  get: (e, t, o) => Ls(Reflect.get(e, t, o)),
  set: (e, t, o, n) => {
    const r = e[t];
    return ce(r) && !ce(o) ? (r.value = o, !0) : Reflect.set(e, t, o, n);
  }
};
function hi(e) {
  return dt(e) ? e : new Proxy(e, Hs);
}
var f = {};
const pt = [];
function ho(e) {
  pt.push(e);
}
function mo() {
  pt.pop();
}
function O(e, ...t) {
  nt();
  const o = pt.length ? pt[pt.length - 1].component : null, n = o && o.appContext.config.warnHandler, r = Bs();
  if (n)
    He(
      n,
      o,
      11,
      [
        e + t.join(""),
        o && o.proxy,
        r.map(
          ({ vnode: i }) => `at <${ko(o, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...Ks(r)), console.warn(...i);
  }
  rt();
}
function Bs() {
  let e = pt[pt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const o = t[0];
    o && o.vnode === e ? o.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function Ks(e) {
  const t = [];
  return e.forEach((o, n) => {
    t.push(...n === 0 ? [] : [`
`], ...Ws(o));
  }), t;
}
function Ws({ vnode: e, recurseCount: t }) {
  const o = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, r = ` at <${ko(
    e.component,
    e.type,
    n
  )}`, i = ">" + o;
  return e.props ? [r, ...zs(e.props), i] : [r + i];
}
function zs(e) {
  const t = [], o = Object.keys(e);
  return o.slice(0, 3).forEach((n) => {
    t.push(...mi(n, e[n]));
  }), o.length > 3 && t.push(" ..."), t;
}
function mi(e, t, o) {
  return Y(t) ? (t = JSON.stringify(t), o ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? o ? t : [`${e}=${t}`] : ce(t) ? (t = mi(e, T(t.value), !0), o ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = T(t), o ? t : [`${e}=`, t]);
}
const kn = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function He(e, t, o, n) {
  let r;
  try {
    r = n ? e(...n) : e();
  } catch (i) {
    eo(i, t, o);
  }
  return r;
}
function De(e, t, o, n) {
  if ($(e)) {
    const i = He(e, t, o, n);
    return i && Dn(i) && i.catch((s) => {
      eo(s, t, o);
    }), i;
  }
  const r = [];
  for (let i = 0; i < e.length; i++)
    r.push(De(e[i], t, o, n));
  return r;
}
function eo(e, t, o, n = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy, l = f.NODE_ENV !== "production" ? kn[o] : `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; i; ) {
      const d = i.ec;
      if (d) {
        for (let m = 0; m < d.length; m++)
          if (d[m](e, s, l) === !1)
            return;
      }
      i = i.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      He(
        a,
        null,
        10,
        [e, s, l]
      );
      return;
    }
  }
  qs(e, o, r, n);
}
function qs(e, t, o, n = !0) {
  if (f.NODE_ENV !== "production") {
    const r = kn[t];
    if (o && ho(o), O(`Unhandled error${r ? ` during execution of ${r}` : ""}`), o && mo(), n)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Jt = !1, fn = !1;
const le = [];
let Te = 0;
const $t = [];
let ke = null, Je = 0;
const _i = /* @__PURE__ */ Promise.resolve();
let Un = null;
const Js = 100;
function Ln(e) {
  const t = Un || _i;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Gs(e) {
  let t = Te + 1, o = le.length;
  for (; t < o; ) {
    const n = t + o >>> 1, r = le[n], i = Gt(r);
    i < e || i === e && r.pre ? t = n + 1 : o = n;
  }
  return t;
}
function To(e) {
  (!le.length || !le.includes(
    e,
    Jt && e.allowRecurse ? Te + 1 : Te
  )) && (e.id == null ? le.push(e) : le.splice(Gs(e.id), 0, e), gi());
}
function gi() {
  !Jt && !fn && (fn = !0, Un = _i.then(Ei));
}
function Ys(e) {
  const t = le.indexOf(e);
  t > Te && le.splice(t, 1);
}
function bi(e) {
  D(e) ? $t.push(...e) : (!ke || !ke.includes(
    e,
    e.allowRecurse ? Je + 1 : Je
  )) && $t.push(e), gi();
}
function hr(e, t, o = Jt ? Te + 1 : 0) {
  for (f.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); o < le.length; o++) {
    const n = le[o];
    if (n && n.pre) {
      if (e && n.id !== e.uid || f.NODE_ENV !== "production" && Hn(t, n))
        continue;
      le.splice(o, 1), o--, n();
    }
  }
}
function yi(e) {
  if ($t.length) {
    const t = [...new Set($t)].sort(
      (o, n) => Gt(o) - Gt(n)
    );
    if ($t.length = 0, ke) {
      ke.push(...t);
      return;
    }
    for (ke = t, f.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Je = 0; Je < ke.length; Je++)
      f.NODE_ENV !== "production" && Hn(e, ke[Je]) || ke[Je]();
    ke = null, Je = 0;
  }
}
const Gt = (e) => e.id == null ? 1 / 0 : e.id, Xs = (e, t) => {
  const o = Gt(e) - Gt(t);
  if (o === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return o;
};
function Ei(e) {
  fn = !1, Jt = !0, f.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), le.sort(Xs);
  const t = f.NODE_ENV !== "production" ? (o) => Hn(e, o) : Z;
  try {
    for (Te = 0; Te < le.length; Te++) {
      const o = le[Te];
      if (o && o.active !== !1) {
        if (f.NODE_ENV !== "production" && t(o))
          continue;
        He(o, null, 14);
      }
    }
  } finally {
    Te = 0, le.length = 0, yi(e), Jt = !1, Un = null, (le.length || $t.length) && Ei(e);
  }
}
function Hn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const o = e.get(t);
    if (o > Js) {
      const n = t.ownerInstance, r = n && Xi(n.type);
      return eo(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, o + 1);
  }
}
let ht = !1;
const xt = /* @__PURE__ */ new Set();
f.NODE_ENV !== "production" && ($n().__VUE_HMR_RUNTIME__ = {
  createRecord: Xo(Ni),
  rerender: Xo(el),
  reload: Xo(tl)
});
const Et = /* @__PURE__ */ new Map();
function Zs(e) {
  const t = e.type.__hmrId;
  let o = Et.get(t);
  o || (Ni(t, e.type), o = Et.get(t)), o.instances.add(e);
}
function Qs(e) {
  Et.get(e.type.__hmrId).instances.delete(e);
}
function Ni(e, t) {
  return Et.has(e) ? !1 : (Et.set(e, {
    initialDef: Ht(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ht(e) {
  return Zi(e) ? e.__vccOpts : e;
}
function el(e, t) {
  const o = Et.get(e);
  o && (o.initialDef.render = t, [...o.instances].forEach((n) => {
    t && (n.render = t, Ht(n.type).render = t), n.renderCache = [], ht = !0, n.effect.dirty = !0, n.update(), ht = !1;
  }));
}
function tl(e, t) {
  const o = Et.get(e);
  if (!o)
    return;
  t = Ht(t), mr(o.initialDef, t);
  const n = [...o.instances];
  for (const r of n) {
    const i = Ht(r.type);
    xt.has(i) || (i !== o.initialDef && mr(i, t), xt.add(i)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (xt.add(i), r.ceReload(t.styles), xt.delete(i)) : r.parent ? (r.parent.effect.dirty = !0, To(r.parent.update)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  bi(() => {
    for (const r of n)
      xt.delete(
        Ht(r.type)
      );
  });
}
function mr(e, t) {
  J(e, t);
  for (const o in e)
    o !== "__file" && !(o in t) && delete e[o];
}
function Xo(e) {
  return (t, o) => {
    try {
      return e(t, o);
    } catch (n) {
      console.error(n), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ae, kt = [], dn = !1;
function to(e, ...t) {
  Ae ? Ae.emit(e, ...t) : dn || kt.push({ event: e, args: t });
}
function vi(e, t) {
  var o, n;
  Ae = e, Ae ? (Ae.enabled = !0, kt.forEach(({ event: r, args: i }) => Ae.emit(r, ...i)), kt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((n = (o = window.navigator) == null ? void 0 : o.userAgent) != null && n.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    vi(i, t);
  }), setTimeout(() => {
    Ae || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, dn = !0, kt = []);
  }, 3e3)) : (dn = !0, kt = []);
}
function ol(e, t) {
  to("app:init", e, t, {
    Fragment: se,
    Text: oo,
    Comment: ye,
    Static: Wt
  });
}
function nl(e) {
  to("app:unmount", e);
}
const rl = /* @__PURE__ */ Bn(
  "component:added"
  /* COMPONENT_ADDED */
), Oi = /* @__PURE__ */ Bn(
  "component:updated"
  /* COMPONENT_UPDATED */
), il = /* @__PURE__ */ Bn(
  "component:removed"
  /* COMPONENT_REMOVED */
), sl = (e) => {
  Ae && typeof Ae.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ae.cleanupBuffer(e) && il(e);
};
function Bn(e) {
  return (t) => {
    to(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ll = /* @__PURE__ */ wi(
  "perf:start"
  /* PERFORMANCE_START */
), cl = /* @__PURE__ */ wi(
  "perf:end"
  /* PERFORMANCE_END */
);
function wi(e) {
  return (t, o, n) => {
    to(e, t.appContext.app, t.uid, t, o, n);
  };
}
function al(e, t, o) {
  to(
    "component:emit",
    e.appContext.app,
    e,
    t,
    o
  );
}
function ul(e, t, ...o) {
  if (e.isUnmounted)
    return;
  const n = e.vnode.props || W;
  if (f.NODE_ENV !== "production") {
    const {
      emitsOptions: m,
      propsOptions: [p]
    } = e;
    if (m)
      if (!(t in m))
        (!p || !(lt(t) in p)) && O(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${lt(t)}" prop.`
        );
      else {
        const E = m[t];
        $(E) && (E(...o) || O(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = o;
  const i = t.startsWith("update:"), s = i && t.slice(7);
  if (s && s in n) {
    const m = `${s === "modelValue" ? "model" : s}Modifiers`, { number: p, trim: E } = n[m] || W;
    E && (r = o.map((V) => Y(V) ? V.trim() : V)), p && (r = o.map(qt));
  }
  if (f.NODE_ENV !== "production" && al(e, t, r), f.NODE_ENV !== "production") {
    const m = t.toLowerCase();
    m !== t && n[lt(m)] && O(
      `Event "${m}" is emitted in component ${ko(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${be(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = n[l = lt(t)] || // also try camelCase event handler (#2249)
  n[l = lt(Le(t))];
  !a && i && (a = n[l = lt(be(t))]), a && De(
    a,
    e,
    6,
    r
  );
  const d = n[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, De(
      d,
      e,
      6,
      r
    );
  }
}
function xi(e, t, o = !1) {
  const n = t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let s = {}, l = !1;
  if (!$(e)) {
    const a = (d) => {
      const m = xi(d, t, !0);
      m && (l = !0, J(s, m));
    };
    !o && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (B(e) && n.set(e, null), null) : (D(i) ? i.forEach((a) => s[a] = null) : J(s, i), B(e) && n.set(e, s), s);
}
function Ao(e, t) {
  return !e || !Xt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), F(e, t[0].toLowerCase() + t.slice(1)) || F(e, be(t)) || F(e, t));
}
let pe = null, Po = null;
function vo(e) {
  const t = pe;
  return pe = e, Po = e && e.type.__scopeId || null, t;
}
function Vi(e) {
  Po = e;
}
function Di() {
  Po = null;
}
function fl(e, t = pe, o) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && Dr(-1);
    const i = vo(t);
    let s;
    try {
      s = e(...r);
    } finally {
      vo(i), n._d && Dr(1);
    }
    return f.NODE_ENV !== "production" && Oi(t), s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
let pn = !1;
function Oo() {
  pn = !0;
}
function Zo(e) {
  const {
    type: t,
    vnode: o,
    proxy: n,
    withProxy: r,
    props: i,
    propsOptions: [s],
    slots: l,
    attrs: a,
    emit: d,
    render: m,
    renderCache: p,
    data: E,
    setupState: V,
    ctx: P,
    inheritAttrs: M
  } = e;
  let ne, Q;
  const ge = vo(e);
  f.NODE_ENV !== "production" && (pn = !1);
  try {
    if (o.shapeFlag & 4) {
      const X = r || n, Ne = f.NODE_ENV !== "production" && V.__isScriptSetup ? new Proxy(X, {
        get(A, ae, ue) {
          return O(
            `Property '${String(
              ae
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(A, ae, ue);
        }
      }) : X;
      ne = xe(
        m.call(
          Ne,
          X,
          p,
          i,
          V,
          E,
          P
        )
      ), Q = a;
    } else {
      const X = t;
      f.NODE_ENV !== "production" && a === i && Oo(), ne = xe(
        X.length > 1 ? X(
          i,
          f.NODE_ENV !== "production" ? {
            get attrs() {
              return Oo(), a;
            },
            slots: l,
            emit: d
          } : { attrs: a, slots: l, emit: d }
        ) : X(
          i,
          null
          /* we know it doesn't need it */
        )
      ), Q = t.props ? a : dl(a);
    }
  } catch (X) {
    zt.length = 0, eo(X, e, 1), ne = te(ye);
  }
  let q = ne, G;
  if (f.NODE_ENV !== "production" && ne.patchFlag > 0 && ne.patchFlag & 2048 && ([q, G] = Si(ne)), Q && M !== !1) {
    const X = Object.keys(Q), { shapeFlag: Ne } = q;
    if (X.length) {
      if (Ne & 7)
        s && X.some(Eo) && (Q = pl(
          Q,
          s
        )), q = tt(q, Q);
      else if (f.NODE_ENV !== "production" && !pn && q.type !== ye) {
        const A = Object.keys(a), ae = [], ue = [];
        for (let Fe = 0, Ke = A.length; Fe < Ke; Fe++) {
          const ve = A[Fe];
          Xt(ve) ? Eo(ve) || ae.push(ve[2].toLowerCase() + ve.slice(3)) : ue.push(ve);
        }
        ue.length && O(
          `Extraneous non-props attributes (${ue.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), ae.length && O(
          `Extraneous non-emits event listeners (${ae.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return o.dirs && (f.NODE_ENV !== "production" && !_r(q) && O(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), q = tt(q), q.dirs = q.dirs ? q.dirs.concat(o.dirs) : o.dirs), o.transition && (f.NODE_ENV !== "production" && !_r(q) && O(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), q.transition = o.transition), f.NODE_ENV !== "production" && G ? G(q) : ne = q, vo(ge), ne;
}
const Si = (e) => {
  const t = e.children, o = e.dynamicChildren, n = Kn(t, !1);
  if (n) {
    if (f.NODE_ENV !== "production" && n.patchFlag > 0 && n.patchFlag & 2048)
      return Si(n);
  } else
    return [e, void 0];
  const r = t.indexOf(n), i = o ? o.indexOf(n) : -1, s = (l) => {
    t[r] = l, o && (i > -1 ? o[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...o, l]));
  };
  return [xe(n), s];
};
function Kn(e, t = !0) {
  let o;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Yn(r)) {
      if (r.type !== ye || r.children === "v-if") {
        if (o)
          return;
        if (o = r, f.NODE_ENV !== "production" && t && o.patchFlag > 0 && o.patchFlag & 2048)
          return Kn(o.children);
      }
    } else
      return;
  }
  return o;
}
const dl = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || Xt(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, pl = (e, t) => {
  const o = {};
  for (const n in e)
    (!Eo(n) || !(n.slice(9) in t)) && (o[n] = e[n]);
  return o;
}, _r = (e) => e.shapeFlag & 7 || e.type === ye;
function hl(e, t, o) {
  const { props: n, children: r, component: i } = e, { props: s, children: l, patchFlag: a } = t, d = i.emitsOptions;
  if (f.NODE_ENV !== "production" && (r || l) && ht || t.dirs || t.transition)
    return !0;
  if (o && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? gr(n, s, d) : !!s;
    if (a & 8) {
      const m = t.dynamicProps;
      for (let p = 0; p < m.length; p++) {
        const E = m[p];
        if (s[E] !== n[E] && !Ao(d, E))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === s ? !1 : n ? s ? gr(n, s, d) : !0 : !!s;
  return !1;
}
function gr(e, t, o) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !Ao(o, i))
      return !0;
  }
  return !1;
}
function ml({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const _l = Symbol.for("v-ndc"), gl = (e) => e.__isSuspense;
function bl(e, t) {
  t && t.pendingBranch ? D(e) ? t.effects.push(...e) : t.effects.push(e) : bi(e);
}
const yl = Symbol.for("v-scx"), El = () => {
  {
    const e = go(yl);
    return e || f.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, fo = {};
function Qo(e, t, o) {
  return f.NODE_ENV !== "production" && !$(t) && O(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ci(e, t, o);
}
function Ci(e, t, {
  immediate: o,
  deep: n,
  flush: r,
  once: i,
  onTrack: s,
  onTrigger: l
} = W) {
  if (t && i) {
    const A = t;
    t = (...ae) => {
      A(...ae), Ne();
    };
  }
  f.NODE_ENV !== "production" && n !== void 0 && typeof n == "number" && O(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), f.NODE_ENV !== "production" && !t && (o !== void 0 && O(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), n !== void 0 && O(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && O(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = (A) => {
    O(
      "Invalid watch source: ",
      A,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = re, m = (A) => n === !0 ? A : (
    // for deep: false, only traverse root-level properties
    ct(A, n === !1 ? 1 : void 0)
  );
  let p, E = !1, V = !1;
  if (ce(e) ? (p = () => e.value, E = Ct(e)) : dt(e) ? (p = () => m(e), E = !0) : D(e) ? (V = !0, E = e.some((A) => dt(A) || Ct(A)), p = () => e.map((A) => {
    if (ce(A))
      return A.value;
    if (dt(A))
      return m(A);
    if ($(A))
      return He(A, d, 2);
    f.NODE_ENV !== "production" && a(A);
  })) : $(e) ? t ? p = () => He(e, d, 2) : p = () => (P && P(), De(
    e,
    d,
    3,
    [M]
  )) : (p = Z, f.NODE_ENV !== "production" && a(e)), t && n) {
    const A = p;
    p = () => ct(A());
  }
  let P, M = (A) => {
    P = G.onStop = () => {
      He(A, d, 4), P = G.onStop = void 0;
    };
  }, ne;
  if (jo)
    if (M = Z, t ? o && De(t, d, 3, [
      p(),
      V ? [] : void 0,
      M
    ]) : p(), r === "sync") {
      const A = El();
      ne = A.__watcherHandles || (A.__watcherHandles = []);
    } else
      return Z;
  let Q = V ? new Array(e.length).fill(fo) : fo;
  const ge = () => {
    if (!(!G.active || !G.dirty))
      if (t) {
        const A = G.run();
        (n || E || (V ? A.some((ae, ue) => gt(ae, Q[ue])) : gt(A, Q))) && (P && P(), De(t, d, 3, [
          A,
          // pass undefined as the old value when it's changed for the first time
          Q === fo ? void 0 : V && Q[0] === fo ? [] : Q,
          M
        ]), Q = A);
      } else
        G.run();
  };
  ge.allowRecurse = !!t;
  let q;
  r === "sync" ? q = ge : r === "post" ? q = () => me(ge, d && d.suspense) : (ge.pre = !0, d && (ge.id = d.uid), q = () => To(ge));
  const G = new An(p, Z, q), X = bs(), Ne = () => {
    G.stop(), X && Vn(X.effects, G);
  };
  return f.NODE_ENV !== "production" && (G.onTrack = s, G.onTrigger = l), t ? o ? ge() : Q = G.run() : r === "post" ? me(
    G.run.bind(G),
    d && d.suspense
  ) : G.run(), ne && ne.push(Ne), Ne;
}
function Nl(e, t, o) {
  const n = this.proxy, r = Y(e) ? e.includes(".") ? $i(n, e) : () => n[e] : e.bind(n, n);
  let i;
  $(t) ? i = t : (i = t.handler, o = t);
  const s = no(this), l = Ci(r, i.bind(n), o);
  return s(), l;
}
function $i(e, t) {
  const o = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < o.length && n; r++)
      n = n[o[r]];
    return n;
  };
}
function ct(e, t, o = 0, n) {
  if (!B(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (o >= t)
      return e;
    o++;
  }
  if (n = n || /* @__PURE__ */ new Set(), n.has(e))
    return e;
  if (n.add(e), ce(e))
    ct(e.value, t, o, n);
  else if (D(e))
    for (let r = 0; r < e.length; r++)
      ct(e[r], t, o, n);
  else if (Pt(e) || at(e))
    e.forEach((r) => {
      ct(r, t, o, n);
    });
  else if (Jr(e))
    for (const r in e)
      ct(e[r], t, o, n);
  return e;
}
function Ii(e) {
  ss(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function hn(e, t) {
  if (pe === null)
    return f.NODE_ENV !== "production" && O("withDirectives can only be used inside render functions."), e;
  const o = Ro(pe) || pe.proxy, n = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, s, l, a = W] = t[r];
    i && ($(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ct(s), n.push({
      dir: i,
      instance: o,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function it(e, t, o, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let s = 0; s < r.length; s++) {
    const l = r[s];
    i && (l.oldValue = i[s].value);
    let a = l.dir[n];
    a && (nt(), De(a, o, 8, [
      e.el,
      l,
      e,
      t
    ]), rt());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vl(e, t) {
  return $(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    J({ name: e.name }, t, { setup: e })
  ) : e;
}
const _o = (e) => !!e.type.__asyncLoader, Wn = (e) => e.type.__isKeepAlive;
function Ol(e, t) {
  Ti(e, "a", t);
}
function wl(e, t) {
  Ti(e, "da", t);
}
function Ti(e, t, o = re) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = o;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Fo(t, n, o), o) {
    let r = o.parent;
    for (; r && r.parent; )
      Wn(r.parent.vnode) && xl(n, t, o, r), r = r.parent;
  }
}
function xl(e, t, o, n) {
  const r = Fo(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Ai(() => {
    Vn(n[t], r);
  }, o);
}
function Fo(e, t, o = re, n = !1) {
  if (o) {
    const r = o[e] || (o[e] = []), i = t.__weh || (t.__weh = (...s) => {
      if (o.isUnmounted)
        return;
      nt();
      const l = no(o), a = De(t, o, e, s);
      return l(), rt(), a;
    });
    return n ? r.unshift(i) : r.push(i), i;
  } else if (f.NODE_ENV !== "production") {
    const r = lt(kn[e].replace(/ hook$/, ""));
    O(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Be = (e) => (t, o = re) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!jo || e === "sp") && Fo(e, (...n) => t(...n), o)
), Vl = Be("bm"), zn = Be("m"), Dl = Be("bu"), Sl = Be("u"), Cl = Be("bum"), Ai = Be("um"), $l = Be("sp"), Il = Be(
  "rtg"
), Tl = Be(
  "rtc"
);
function Al(e, t = re) {
  Fo("ec", e, t);
}
function Bt(e, t, o, n) {
  let r;
  const i = o && o[n];
  if (D(e) || Y(e)) {
    r = new Array(e.length);
    for (let s = 0, l = e.length; s < l; s++)
      r[s] = t(e[s], s, void 0, i && i[s]);
  } else if (typeof e == "number") {
    f.NODE_ENV !== "production" && !Number.isInteger(e) && O(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let s = 0; s < e; s++)
      r[s] = t(s + 1, s, void 0, i && i[s]);
  } else if (B(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (s, l) => t(s, l, void 0, i && i[l])
      );
    else {
      const s = Object.keys(e);
      r = new Array(s.length);
      for (let l = 0, a = s.length; l < a; l++) {
        const d = s[l];
        r[l] = t(e[d], d, l, i && i[l]);
      }
    }
  else
    r = [];
  return o && (o[n] = r), r;
}
const mn = (e) => e ? Gi(e) ? Ro(e) || e.proxy : mn(e.parent) : null, mt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ J(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => f.NODE_ENV !== "production" ? Dt(e.props) : e.props,
    $attrs: (e) => f.NODE_ENV !== "production" ? Dt(e.attrs) : e.attrs,
    $slots: (e) => f.NODE_ENV !== "production" ? Dt(e.slots) : e.slots,
    $refs: (e) => f.NODE_ENV !== "production" ? Dt(e.refs) : e.refs,
    $parent: (e) => mn(e.parent),
    $root: (e) => mn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Jn(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, To(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ln.bind(e.proxy)),
    $watch: (e) => Nl.bind(e)
  })
), qn = (e) => e === "_" || e === "$", en = (e, t) => e !== W && !e.__isScriptSetup && F(e, t), Pi = {
  get({ _: e }, t) {
    const { ctx: o, setupState: n, data: r, props: i, accessCache: s, type: l, appContext: a } = e;
    if (f.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const V = s[t];
      if (V !== void 0)
        switch (V) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return o[t];
          case 3:
            return i[t];
        }
      else {
        if (en(n, t))
          return s[t] = 1, n[t];
        if (r !== W && F(r, t))
          return s[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && F(d, t)
        )
          return s[t] = 3, i[t];
        if (o !== W && F(o, t))
          return s[t] = 4, o[t];
        _n && (s[t] = 0);
      }
    }
    const m = mt[t];
    let p, E;
    if (m)
      return t === "$attrs" ? (ie(e, "get", t), f.NODE_ENV !== "production" && Oo()) : f.NODE_ENV !== "production" && t === "$slots" && ie(e, "get", t), m(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (o !== W && F(o, t))
      return s[t] = 4, o[t];
    if (
      // global properties
      E = a.config.globalProperties, F(E, t)
    )
      return E[t];
    f.NODE_ENV !== "production" && pe && (!Y(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== W && qn(t[0]) && F(r, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === pe && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, o) {
    const { data: n, setupState: r, ctx: i } = e;
    return en(r, t) ? (r[t] = o, !0) : f.NODE_ENV !== "production" && r.__isScriptSetup && F(r, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : n !== W && F(n, t) ? (n[t] = o, !0) : F(e.props, t) ? (f.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (f.NODE_ENV !== "production" && O(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (f.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: o
    }) : i[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: n, appContext: r, propsOptions: i }
  }, s) {
    let l;
    return !!o[s] || e !== W && F(e, s) || en(t, s) || (l = i[0]) && F(l, s) || F(n, s) || F(mt, s) || F(r.config.globalProperties, s);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : F(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
f.NODE_ENV !== "production" && (Pi.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Pl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(mt).forEach((o) => {
    Object.defineProperty(t, o, {
      configurable: !0,
      enumerable: !1,
      get: () => mt[o](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Z
    });
  }), t;
}
function Fl(e) {
  const {
    ctx: t,
    propsOptions: [o]
  } = e;
  o && Object.keys(o).forEach((n) => {
    Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[n],
      set: Z
    });
  });
}
function Ml(e) {
  const { ctx: t, setupState: o } = e;
  Object.keys(T(o)).forEach((n) => {
    if (!o.__isScriptSetup) {
      if (qn(n[0])) {
        O(
          `setup() return property ${JSON.stringify(
            n
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, n, {
        enumerable: !0,
        configurable: !0,
        get: () => o[n],
        set: Z
      });
    }
  });
}
function br(e) {
  return D(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
function jl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, o) => {
    e[o] ? O(`${t} property "${o}" is already defined in ${e[o]}.`) : e[o] = t;
  };
}
let _n = !0;
function Rl(e) {
  const t = Jn(e), o = e.proxy, n = e.ctx;
  _n = !1, t.beforeCreate && yr(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: s,
    watch: l,
    provide: a,
    inject: d,
    // lifecycle
    created: m,
    beforeMount: p,
    mounted: E,
    beforeUpdate: V,
    updated: P,
    activated: M,
    deactivated: ne,
    beforeDestroy: Q,
    beforeUnmount: ge,
    destroyed: q,
    unmounted: G,
    render: X,
    renderTracked: Ne,
    renderTriggered: A,
    errorCaptured: ae,
    serverPrefetch: ue,
    // public API
    expose: Fe,
    inheritAttrs: Ke,
    // assets
    components: ve,
    directives: ro,
    filters: Qn
  } = t, We = f.NODE_ENV !== "production" ? jl() : null;
  if (f.NODE_ENV !== "production") {
    const [U] = e.propsOptions;
    if (U)
      for (const k in U)
        We("Props", k);
  }
  if (d && kl(d, n, We), s)
    for (const U in s) {
      const k = s[U];
      $(k) ? (f.NODE_ENV !== "production" ? Object.defineProperty(n, U, {
        value: k.bind(o),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : n[U] = k.bind(o), f.NODE_ENV !== "production" && We("Methods", U)) : f.NODE_ENV !== "production" && O(
        `Method "${U}" has type "${typeof k}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    f.NODE_ENV !== "production" && !$(r) && O(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const U = r.call(o, o);
    if (f.NODE_ENV !== "production" && Dn(U) && O(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !B(U))
      f.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = Qt(U), f.NODE_ENV !== "production")
      for (const k in U)
        We("Data", k), qn(k[0]) || Object.defineProperty(n, k, {
          configurable: !0,
          enumerable: !0,
          get: () => U[k],
          set: Z
        });
  }
  if (_n = !0, i)
    for (const U in i) {
      const k = i[U], Se = $(k) ? k.bind(o, o) : $(k.get) ? k.get.bind(o, o) : Z;
      f.NODE_ENV !== "production" && Se === Z && O(`Computed property "${U}" has no getter.`);
      const Ko = !$(k) && $(k.set) ? k.set.bind(o) : f.NODE_ENV !== "production" ? () => {
        O(
          `Write operation failed: computed property "${U}" is readonly.`
        );
      } : Z, Ft = Qi({
        get: Se,
        set: Ko
      });
      Object.defineProperty(n, U, {
        enumerable: !0,
        configurable: !0,
        get: () => Ft.value,
        set: (Nt) => Ft.value = Nt
      }), f.NODE_ENV !== "production" && We("Computed", U);
    }
  if (l)
    for (const U in l)
      Fi(l[U], n, o, U);
  if (a) {
    const U = $(a) ? a.call(o) : a;
    Reflect.ownKeys(U).forEach((k) => {
      Wl(k, U[k]);
    });
  }
  m && yr(m, e, "c");
  function he(U, k) {
    D(k) ? k.forEach((Se) => U(Se.bind(o))) : k && U(k.bind(o));
  }
  if (he(Vl, p), he(zn, E), he(Dl, V), he(Sl, P), he(Ol, M), he(wl, ne), he(Al, ae), he(Tl, Ne), he(Il, A), he(Cl, ge), he(Ai, G), he($l, ue), D(Fe))
    if (Fe.length) {
      const U = e.exposed || (e.exposed = {});
      Fe.forEach((k) => {
        Object.defineProperty(U, k, {
          get: () => o[k],
          set: (Se) => o[k] = Se
        });
      });
    } else
      e.exposed || (e.exposed = {});
  X && e.render === Z && (e.render = X), Ke != null && (e.inheritAttrs = Ke), ve && (e.components = ve), ro && (e.directives = ro);
}
function kl(e, t, o = Z) {
  D(e) && (e = gn(e));
  for (const n in e) {
    const r = e[n];
    let i;
    B(r) ? "default" in r ? i = go(
      r.from || n,
      r.default,
      !0
    ) : i = go(r.from || n) : i = go(r), ce(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[n] = i, f.NODE_ENV !== "production" && o("Inject", n);
  }
}
function yr(e, t, o) {
  De(
    D(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function Fi(e, t, o, n) {
  const r = n.includes(".") ? $i(o, n) : () => o[n];
  if (Y(e)) {
    const i = t[e];
    $(i) ? Qo(r, i) : f.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, i);
  } else if ($(e))
    Qo(r, e.bind(o));
  else if (B(e))
    if (D(e))
      e.forEach((i) => Fi(i, t, o, n));
    else {
      const i = $(e.handler) ? e.handler.bind(o) : t[e.handler];
      $(i) ? Qo(r, i, e) : f.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    f.NODE_ENV !== "production" && O(`Invalid watch option: "${n}"`, e);
}
function Jn(e) {
  const t = e.type, { mixins: o, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !r.length && !o && !n ? a = t : (a = {}, r.length && r.forEach(
    (d) => wo(a, d, s, !0)
  ), wo(a, t, s)), B(t) && i.set(t, a), a;
}
function wo(e, t, o, n = !1) {
  const { mixins: r, extends: i } = t;
  i && wo(e, i, o, !0), r && r.forEach(
    (s) => wo(e, s, o, !0)
  );
  for (const s in t)
    if (n && s === "expose")
      f.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Ul[s] || o && o[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Ul = {
  data: Er,
  props: Nr,
  emits: Nr,
  // objects
  methods: Ut,
  computed: Ut,
  // lifecycle
  beforeCreate: de,
  created: de,
  beforeMount: de,
  mounted: de,
  beforeUpdate: de,
  updated: de,
  beforeDestroy: de,
  beforeUnmount: de,
  destroyed: de,
  unmounted: de,
  activated: de,
  deactivated: de,
  errorCaptured: de,
  serverPrefetch: de,
  // assets
  components: Ut,
  directives: Ut,
  // watch
  watch: Hl,
  // provide / inject
  provide: Er,
  inject: Ll
};
function Er(e, t) {
  return t ? e ? function() {
    return J(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ll(e, t) {
  return Ut(gn(e), gn(t));
}
function gn(e) {
  if (D(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++)
      t[e[o]] = e[o];
    return t;
  }
  return e;
}
function de(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ut(e, t) {
  return e ? J(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Nr(e, t) {
  return e ? D(e) && D(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : J(
    /* @__PURE__ */ Object.create(null),
    br(e),
    br(t ?? {})
  ) : t;
}
function Hl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const o = J(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    o[n] = de(e[n], t[n]);
  return o;
}
function Mi() {
  return {
    app: null,
    config: {
      isNativeTag: zr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Bl = 0;
function Kl(e, t) {
  return function(n, r = null) {
    $(n) || (n = J({}, n)), r != null && !B(r) && (f.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), r = null);
    const i = Mi(), s = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const a = i.app = {
      _uid: Bl++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Ir,
      get config() {
        return i.config;
      },
      set config(d) {
        f.NODE_ENV !== "production" && O(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...m) {
        return s.has(d) ? f.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : d && $(d.install) ? (s.add(d), d.install(a, ...m)) : $(d) ? (s.add(d), d(a, ...m)) : f.NODE_ENV !== "production" && O(
          'A plugin must either be a function or an object with an "install" function.'
        ), a;
      },
      mixin(d) {
        return i.mixins.includes(d) ? f.NODE_ENV !== "production" && O(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), a;
      },
      component(d, m) {
        return f.NODE_ENV !== "production" && vn(d, i.config), m ? (f.NODE_ENV !== "production" && i.components[d] && O(`Component "${d}" has already been registered in target app.`), i.components[d] = m, a) : i.components[d];
      },
      directive(d, m) {
        return f.NODE_ENV !== "production" && Ii(d), m ? (f.NODE_ENV !== "production" && i.directives[d] && O(`Directive "${d}" has already been registered in target app.`), i.directives[d] = m, a) : i.directives[d];
      },
      mount(d, m, p) {
        if (l)
          f.NODE_ENV !== "production" && O(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          f.NODE_ENV !== "production" && d.__vue_app__ && O(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const E = te(n, r);
          return E.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), f.NODE_ENV !== "production" && (i.reload = () => {
            e(
              tt(E),
              d,
              p
            );
          }), m && t ? t(E, d) : e(E, d, p), l = !0, a._container = d, d.__vue_app__ = a, f.NODE_ENV !== "production" && (a._instance = E.component, ol(a, Ir)), Ro(E.component) || E.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, a._container), f.NODE_ENV !== "production" && (a._instance = null, nl(a)), delete a._container.__vue_app__) : f.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(d, m) {
        return f.NODE_ENV !== "production" && d in i.provides && O(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), i.provides[d] = m, a;
      },
      runWithContext(d) {
        const m = Kt;
        Kt = a;
        try {
          return d();
        } finally {
          Kt = m;
        }
      }
    };
    return a;
  };
}
let Kt = null;
function Wl(e, t) {
  if (!re)
    f.NODE_ENV !== "production" && O("provide() can only be used inside setup().");
  else {
    let o = re.provides;
    const n = re.parent && re.parent.provides;
    n === o && (o = re.provides = Object.create(n)), o[e] = t;
  }
}
function go(e, t, o = !1) {
  const n = re || pe;
  if (n || Kt) {
    const r = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : Kt._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return o && $(t) ? t.call(n && n.proxy) : t;
    f.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else
    f.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
function zl(e, t, o, n = !1) {
  const r = {}, i = {};
  No(i, Mo, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ji(e, t, r, i);
  for (const s in e.propsOptions[0])
    s in r || (r[s] = void 0);
  f.NODE_ENV !== "production" && ki(t || {}, r, e), o ? e.props = n ? r : Rs(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function ql(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Jl(e, t, o, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: s }
  } = e, l = T(r), [a] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(f.NODE_ENV !== "production" && ql(e)) && (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const m = e.vnode.dynamicProps;
      for (let p = 0; p < m.length; p++) {
        let E = m[p];
        if (Ao(e.emitsOptions, E))
          continue;
        const V = t[E];
        if (a)
          if (F(i, E))
            V !== i[E] && (i[E] = V, d = !0);
          else {
            const P = Le(E);
            r[P] = bn(
              a,
              l,
              P,
              V,
              e,
              !1
            );
          }
        else
          V !== i[E] && (i[E] = V, d = !0);
      }
    }
  } else {
    ji(e, t, r, i) && (d = !0);
    let m;
    for (const p in l)
      (!t || // for camelCase
      !F(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = be(p)) === p || !F(t, m))) && (a ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[m] !== void 0) && (r[p] = bn(
        a,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete r[p]);
    if (i !== l)
      for (const p in i)
        (!t || !F(t, p)) && (delete i[p], d = !0);
  }
  d && Pe(e, "set", "$attrs"), f.NODE_ENV !== "production" && ki(t || {}, r, e);
}
function ji(e, t, o, n) {
  const [r, i] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let a in t) {
      if (Lt(a))
        continue;
      const d = t[a];
      let m;
      r && F(r, m = Le(a)) ? !i || !i.includes(m) ? o[m] = d : (l || (l = {}))[m] = d : Ao(e.emitsOptions, a) || (!(a in n) || d !== n[a]) && (n[a] = d, s = !0);
    }
  if (i) {
    const a = T(o), d = l || W;
    for (let m = 0; m < i.length; m++) {
      const p = i[m];
      o[p] = bn(
        r,
        a,
        p,
        d[p],
        e,
        !F(d, p)
      );
    }
  }
  return s;
}
function bn(e, t, o, n, r, i) {
  const s = e[o];
  if (s != null) {
    const l = F(s, "default");
    if (l && n === void 0) {
      const a = s.default;
      if (s.type !== Function && !s.skipFactory && $(a)) {
        const { propsDefaults: d } = r;
        if (o in d)
          n = d[o];
        else {
          const m = no(r);
          n = d[o] = a.call(
            null,
            t
          ), m();
        }
      } else
        n = a;
    }
    s[
      0
      /* shouldCast */
    ] && (i && !l ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === be(o)) && (n = !0));
  }
  return n;
}
function Ri(e, t, o = !1) {
  const n = t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, s = {}, l = [];
  let a = !1;
  if (!$(e)) {
    const m = (p) => {
      a = !0;
      const [E, V] = Ri(p, t, !0);
      J(s, E), V && l.push(...V);
    };
    !o && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!i && !a)
    return B(e) && n.set(e, St), St;
  if (D(i))
    for (let m = 0; m < i.length; m++) {
      f.NODE_ENV !== "production" && !Y(i[m]) && O("props must be strings when using array syntax.", i[m]);
      const p = Le(i[m]);
      vr(p) && (s[p] = W);
    }
  else if (i) {
    f.NODE_ENV !== "production" && !B(i) && O("invalid props options", i);
    for (const m in i) {
      const p = Le(m);
      if (vr(p)) {
        const E = i[m], V = s[p] = D(E) || $(E) ? { type: E } : J({}, E);
        if (V) {
          const P = wr(Boolean, V.type), M = wr(String, V.type);
          V[
            0
            /* shouldCast */
          ] = P > -1, V[
            1
            /* shouldCastTrue */
          ] = M < 0 || P < M, (P > -1 || F(V, "default")) && l.push(p);
        }
      }
    }
  }
  const d = [s, l];
  return B(e) && n.set(e, d), d;
}
function vr(e) {
  return e[0] !== "$" && !Lt(e) ? !0 : (f.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function yn(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Or(e, t) {
  return yn(e) === yn(t);
}
function wr(e, t) {
  return D(t) ? t.findIndex((o) => Or(o, e)) : $(t) && Or(t, e) ? 0 : -1;
}
function ki(e, t, o) {
  const n = T(t), r = o.propsOptions[0];
  for (const i in r) {
    let s = r[i];
    s != null && Gl(
      i,
      n[i],
      s,
      f.NODE_ENV !== "production" ? Dt(n) : n,
      !F(e, i) && !F(e, be(i))
    );
  }
}
function Gl(e, t, o, n, r) {
  const { type: i, required: s, validator: l, skipCheck: a } = o;
  if (s && r) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (i != null && i !== !0 && !a) {
      let d = !1;
      const m = D(i) ? i : [i], p = [];
      for (let E = 0; E < m.length && !d; E++) {
        const { valid: V, expectedType: P } = Xl(t, m[E]);
        p.push(P || ""), d = V;
      }
      if (!d) {
        O(Zl(e, t, p));
        return;
      }
    }
    l && !l(t, n) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Yl = /* @__PURE__ */ At(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Xl(e, t) {
  let o;
  const n = yn(t);
  if (Yl(n)) {
    const r = typeof e;
    o = r === n.toLowerCase(), !o && r === "object" && (o = e instanceof t);
  } else
    n === "Object" ? o = B(e) : n === "Array" ? o = D(e) : n === "null" ? o = e === null : o = e instanceof t;
  return {
    valid: o,
    expectedType: n
  };
}
function Zl(e, t, o) {
  if (o.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let n = `Invalid prop: type check failed for prop "${e}". Expected ${o.map(So).join(" | ")}`;
  const r = o[0], i = Sn(t), s = xr(t, r), l = xr(t, i);
  return o.length === 1 && Vr(r) && !Ql(r, i) && (n += ` with value ${s}`), n += `, got ${i} `, Vr(i) && (n += `with value ${l}.`), n;
}
function xr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Vr(e) {
  return ["string", "number", "boolean"].some((o) => e.toLowerCase() === o);
}
function Ql(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ui = (e) => e[0] === "_" || e === "$stable", Gn = (e) => D(e) ? e.map(xe) : [xe(e)], ec = (e, t, o) => {
  if (t._n)
    return t;
  const n = fl((...r) => (f.NODE_ENV !== "production" && re && (!o || o.root === re.root) && O(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Gn(t(...r))), o);
  return n._c = !1, n;
}, Li = (e, t, o) => {
  const n = e._ctx;
  for (const r in e) {
    if (Ui(r))
      continue;
    const i = e[r];
    if ($(i))
      t[r] = ec(r, i, n);
    else if (i != null) {
      f.NODE_ENV !== "production" && O(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const s = Gn(i);
      t[r] = () => s;
    }
  }
}, Hi = (e, t) => {
  f.NODE_ENV !== "production" && !Wn(e.vnode) && O(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const o = Gn(t);
  e.slots.default = () => o;
}, tc = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (e.slots = T(t), No(t, "_", o)) : Li(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Hi(e, t);
  No(e.slots, Mo, 1);
}, oc = (e, t, o) => {
  const { vnode: n, slots: r } = e;
  let i = !0, s = W;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? f.NODE_ENV !== "production" && ht ? (J(r, t), Pe(e, "set", "$slots")) : o && l === 1 ? i = !1 : (J(r, t), !o && l === 1 && delete r._) : (i = !t.$stable, Li(t, r)), s = t;
  } else
    t && (Hi(e, t), s = { default: 1 });
  if (i)
    for (const l in r)
      !Ui(l) && s[l] == null && delete r[l];
};
function En(e, t, o, n, r = !1) {
  if (D(e)) {
    e.forEach(
      (E, V) => En(
        E,
        t && (D(t) ? t[V] : t),
        o,
        n,
        r
      )
    );
    return;
  }
  if (_o(n) && !r)
    return;
  const i = n.shapeFlag & 4 ? Ro(n.component) || n.component.proxy : n.el, s = r ? null : i, { i: l, r: a } = e;
  if (f.NODE_ENV !== "production" && !l) {
    O(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, m = l.refs === W ? l.refs = {} : l.refs, p = l.setupState;
  if (d != null && d !== a && (Y(d) ? (m[d] = null, F(p, d) && (p[d] = null)) : ce(d) && (d.value = null)), $(a))
    He(a, l, 12, [s, m]);
  else {
    const E = Y(a), V = ce(a);
    if (E || V) {
      const P = () => {
        if (e.f) {
          const M = E ? F(p, a) ? p[a] : m[a] : a.value;
          r ? D(M) && Vn(M, i) : D(M) ? M.includes(i) || M.push(i) : E ? (m[a] = [i], F(p, a) && (p[a] = m[a])) : (a.value = [i], e.k && (m[e.k] = a.value));
        } else
          E ? (m[a] = s, F(p, a) && (p[a] = s)) : V ? (a.value = s, e.k && (m[e.k] = s)) : f.NODE_ENV !== "production" && O("Invalid template ref type:", a, `(${typeof a})`);
      };
      s ? (P.id = -1, me(P, o)) : P();
    } else
      f.NODE_ENV !== "production" && O("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let jt, Xe;
function je(e, t) {
  e.appContext.config.performance && xo() && Xe.mark(`vue-${t}-${e.uid}`), f.NODE_ENV !== "production" && ll(e, t, xo() ? Xe.now() : Date.now());
}
function Re(e, t) {
  if (e.appContext.config.performance && xo()) {
    const o = `vue-${t}-${e.uid}`, n = o + ":end";
    Xe.mark(n), Xe.measure(
      `<${ko(e, e.type)}> ${t}`,
      o,
      n
    ), Xe.clearMarks(o), Xe.clearMarks(n);
  }
  f.NODE_ENV !== "production" && cl(e, t, xo() ? Xe.now() : Date.now());
}
function xo() {
  return jt !== void 0 || (typeof window < "u" && window.performance ? (jt = !0, Xe = window.performance) : jt = !1), jt;
}
function nc() {
  const e = [];
  if (f.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const me = bl;
function rc(e) {
  return ic(e);
}
function ic(e, t) {
  nc();
  const o = $n();
  o.__VUE__ = !0, f.NODE_ENV !== "production" && vi(o.__VUE_DEVTOOLS_GLOBAL_HOOK__, o);
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: s,
    createText: l,
    createComment: a,
    setText: d,
    setElementText: m,
    parentNode: p,
    nextSibling: E,
    setScopeId: V = Z,
    insertStaticContent: P
  } = e, M = (c, u, h, _ = null, g = null, N = null, w = void 0, y = null, v = f.NODE_ENV !== "production" && ht ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Rt(c, u) && (_ = io(c), ze(c, g, N, !0), c = null), u.patchFlag === -2 && (v = !1, u.dynamicChildren = null);
    const { type: b, ref: x, shapeFlag: C } = u;
    switch (b) {
      case oo:
        ne(c, u, h, _);
        break;
      case ye:
        Q(c, u, h, _);
        break;
      case Wt:
        c == null ? ge(u, h, _, w) : f.NODE_ENV !== "production" && q(c, u, h, w);
        break;
      case se:
        ro(
          c,
          u,
          h,
          _,
          g,
          N,
          w,
          y,
          v
        );
        break;
      default:
        C & 1 ? Ne(
          c,
          u,
          h,
          _,
          g,
          N,
          w,
          y,
          v
        ) : C & 6 ? Qn(
          c,
          u,
          h,
          _,
          g,
          N,
          w,
          y,
          v
        ) : C & 64 || C & 128 ? b.process(
          c,
          u,
          h,
          _,
          g,
          N,
          w,
          y,
          v,
          vt
        ) : f.NODE_ENV !== "production" && O("Invalid VNode type:", b, `(${typeof b})`);
    }
    x != null && g && En(x, c && c.ref, N, u || c, !u);
  }, ne = (c, u, h, _) => {
    if (c == null)
      n(
        u.el = l(u.children),
        h,
        _
      );
    else {
      const g = u.el = c.el;
      u.children !== c.children && d(g, u.children);
    }
  }, Q = (c, u, h, _) => {
    c == null ? n(
      u.el = a(u.children || ""),
      h,
      _
    ) : u.el = c.el;
  }, ge = (c, u, h, _) => {
    [c.el, c.anchor] = P(
      c.children,
      u,
      h,
      _,
      c.el,
      c.anchor
    );
  }, q = (c, u, h, _) => {
    if (u.children !== c.children) {
      const g = E(c.anchor);
      X(c), [u.el, u.anchor] = P(
        u.children,
        h,
        g,
        _
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, G = ({ el: c, anchor: u }, h, _) => {
    let g;
    for (; c && c !== u; )
      g = E(c), n(c, h, _), c = g;
    n(u, h, _);
  }, X = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = E(c), r(c), c = h;
    r(u);
  }, Ne = (c, u, h, _, g, N, w, y, v) => {
    u.type === "svg" ? w = "svg" : u.type === "math" && (w = "mathml"), c == null ? A(
      u,
      h,
      _,
      g,
      N,
      w,
      y,
      v
    ) : Fe(
      c,
      u,
      g,
      N,
      w,
      y,
      v
    );
  }, A = (c, u, h, _, g, N, w, y) => {
    let v, b;
    const { props: x, shapeFlag: C, transition: S, dirs: I } = c;
    if (v = c.el = s(
      c.type,
      N,
      x && x.is,
      x
    ), C & 8 ? m(v, c.children) : C & 16 && ue(
      c.children,
      v,
      null,
      _,
      g,
      tn(c, N),
      w,
      y
    ), I && it(c, null, _, "created"), ae(v, c, c.scopeId, w, _), x) {
      for (const K in x)
        K !== "value" && !Lt(K) && i(
          v,
          K,
          null,
          x[K],
          N,
          c.children,
          _,
          g,
          Me
        );
      "value" in x && i(v, "value", null, x.value, N), (b = x.onVnodeBeforeMount) && $e(b, _, c);
    }
    f.NODE_ENV !== "production" && (Object.defineProperty(v, "__vnode", {
      value: c,
      enumerable: !1
    }), Object.defineProperty(v, "__vueParentComponent", {
      value: _,
      enumerable: !1
    })), I && it(c, null, _, "beforeMount");
    const j = sc(g, S);
    j && S.beforeEnter(v), n(v, u, h), ((b = x && x.onVnodeMounted) || j || I) && me(() => {
      b && $e(b, _, c), j && S.enter(v), I && it(c, null, _, "mounted");
    }, g);
  }, ae = (c, u, h, _, g) => {
    if (h && V(c, h), _)
      for (let N = 0; N < _.length; N++)
        V(c, _[N]);
    if (g) {
      let N = g.subTree;
      if (f.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = Kn(N.children) || N), u === N) {
        const w = g.vnode;
        ae(
          c,
          w,
          w.scopeId,
          w.slotScopeIds,
          g.parent
        );
      }
    }
  }, ue = (c, u, h, _, g, N, w, y, v = 0) => {
    for (let b = v; b < c.length; b++) {
      const x = c[b] = y ? Ge(c[b]) : xe(c[b]);
      M(
        null,
        x,
        u,
        h,
        _,
        g,
        N,
        w,
        y
      );
    }
  }, Fe = (c, u, h, _, g, N, w) => {
    const y = u.el = c.el;
    let { patchFlag: v, dynamicChildren: b, dirs: x } = u;
    v |= c.patchFlag & 16;
    const C = c.props || W, S = u.props || W;
    let I;
    if (h && st(h, !1), (I = S.onVnodeBeforeUpdate) && $e(I, h, u, c), x && it(u, c, h, "beforeUpdate"), h && st(h, !0), f.NODE_ENV !== "production" && ht && (v = 0, w = !1, b = null), b ? (Ke(
      c.dynamicChildren,
      b,
      y,
      h,
      _,
      tn(u, g),
      N
    ), f.NODE_ENV !== "production" && bo(c, u)) : w || Se(
      c,
      u,
      y,
      null,
      h,
      _,
      tn(u, g),
      N,
      !1
    ), v > 0) {
      if (v & 16)
        ve(
          y,
          u,
          C,
          S,
          h,
          _,
          g
        );
      else if (v & 2 && C.class !== S.class && i(y, "class", null, S.class, g), v & 4 && i(y, "style", C.style, S.style, g), v & 8) {
        const j = u.dynamicProps;
        for (let K = 0; K < j.length; K++) {
          const z = j[K], ee = C[z], Oe = S[z];
          (Oe !== ee || z === "value") && i(
            y,
            z,
            ee,
            Oe,
            g,
            c.children,
            h,
            _,
            Me
          );
        }
      }
      v & 1 && c.children !== u.children && m(y, u.children);
    } else
      !w && b == null && ve(
        y,
        u,
        C,
        S,
        h,
        _,
        g
      );
    ((I = S.onVnodeUpdated) || x) && me(() => {
      I && $e(I, h, u, c), x && it(u, c, h, "updated");
    }, _);
  }, Ke = (c, u, h, _, g, N, w) => {
    for (let y = 0; y < u.length; y++) {
      const v = c[y], b = u[y], x = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Rt(v, b) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 70) ? p(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      M(
        v,
        b,
        x,
        null,
        _,
        g,
        N,
        w,
        !0
      );
    }
  }, ve = (c, u, h, _, g, N, w) => {
    if (h !== _) {
      if (h !== W)
        for (const y in h)
          !Lt(y) && !(y in _) && i(
            c,
            y,
            h[y],
            null,
            w,
            u.children,
            g,
            N,
            Me
          );
      for (const y in _) {
        if (Lt(y))
          continue;
        const v = _[y], b = h[y];
        v !== b && y !== "value" && i(
          c,
          y,
          b,
          v,
          w,
          u.children,
          g,
          N,
          Me
        );
      }
      "value" in _ && i(c, "value", h.value, _.value, w);
    }
  }, ro = (c, u, h, _, g, N, w, y, v) => {
    const b = u.el = c ? c.el : l(""), x = u.anchor = c ? c.anchor : l("");
    let { patchFlag: C, dynamicChildren: S, slotScopeIds: I } = u;
    f.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (ht || C & 2048) && (C = 0, v = !1, S = null), I && (y = y ? y.concat(I) : I), c == null ? (n(b, h, _), n(x, h, _), ue(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      x,
      g,
      N,
      w,
      y,
      v
    )) : C > 0 && C & 64 && S && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (Ke(
      c.dynamicChildren,
      S,
      h,
      g,
      N,
      w,
      y
    ), f.NODE_ENV !== "production" ? bo(c, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || g && u === g.subTree) && bo(
        c,
        u,
        !0
        /* shallow */
      )
    )) : Se(
      c,
      u,
      h,
      x,
      g,
      N,
      w,
      y,
      v
    );
  }, Qn = (c, u, h, _, g, N, w, y, v) => {
    u.slotScopeIds = y, c == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      h,
      _,
      w,
      v
    ) : We(
      u,
      h,
      _,
      g,
      N,
      w,
      v
    ) : he(c, u, v);
  }, We = (c, u, h, _, g, N, w) => {
    const y = c.component = _c(
      c,
      _,
      g
    );
    if (f.NODE_ENV !== "production" && y.type.__hmrId && Zs(y), f.NODE_ENV !== "production" && (ho(c), je(y, "mount")), Wn(c) && (y.ctx.renderer = vt), f.NODE_ENV !== "production" && je(y, "init"), bc(y), f.NODE_ENV !== "production" && Re(y, "init"), y.asyncDep) {
      if (g && g.registerDep(y, U), !c.el) {
        const v = y.subTree = te(ye);
        Q(null, v, u, h);
      }
    } else
      U(
        y,
        c,
        u,
        h,
        g,
        N,
        w
      );
    f.NODE_ENV !== "production" && (mo(), Re(y, "mount"));
  }, he = (c, u, h) => {
    const _ = u.component = c.component;
    if (hl(c, u, h))
      if (_.asyncDep && !_.asyncResolved) {
        f.NODE_ENV !== "production" && ho(u), k(_, u, h), f.NODE_ENV !== "production" && mo();
        return;
      } else
        _.next = u, Ys(_.update), _.effect.dirty = !0, _.update();
    else
      u.el = c.el, _.vnode = u;
  }, U = (c, u, h, _, g, N, w) => {
    const y = () => {
      if (c.isMounted) {
        let { next: x, bu: C, u: S, parent: I, vnode: j } = c;
        {
          const Ot = Bi(c);
          if (Ot) {
            x && (x.el = j.el, k(c, x, w)), Ot.asyncDep.then(() => {
              c.isUnmounted || y();
            });
            return;
          }
        }
        let K = x, z;
        f.NODE_ENV !== "production" && ho(x || c.vnode), st(c, !1), x ? (x.el = j.el, k(c, x, w)) : x = j, C && wt(C), (z = x.props && x.props.onVnodeBeforeUpdate) && $e(z, I, x, j), st(c, !0), f.NODE_ENV !== "production" && je(c, "render");
        const ee = Zo(c);
        f.NODE_ENV !== "production" && Re(c, "render");
        const Oe = c.subTree;
        c.subTree = ee, f.NODE_ENV !== "production" && je(c, "patch"), M(
          Oe,
          ee,
          // parent may have changed if it's in a teleport
          p(Oe.el),
          // anchor may have changed if it's in a fragment
          io(Oe),
          c,
          g,
          N
        ), f.NODE_ENV !== "production" && Re(c, "patch"), x.el = ee.el, K === null && ml(c, ee.el), S && me(S, g), (z = x.props && x.props.onVnodeUpdated) && me(
          () => $e(z, I, x, j),
          g
        ), f.NODE_ENV !== "production" && Oi(c), f.NODE_ENV !== "production" && mo();
      } else {
        let x;
        const { el: C, props: S } = u, { bm: I, m: j, parent: K } = c, z = _o(u);
        if (st(c, !1), I && wt(I), !z && (x = S && S.onVnodeBeforeMount) && $e(x, K, u), st(c, !0), C && Jo) {
          const ee = () => {
            f.NODE_ENV !== "production" && je(c, "render"), c.subTree = Zo(c), f.NODE_ENV !== "production" && Re(c, "render"), f.NODE_ENV !== "production" && je(c, "hydrate"), Jo(
              C,
              c.subTree,
              c,
              g,
              null
            ), f.NODE_ENV !== "production" && Re(c, "hydrate");
          };
          z ? u.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !c.isUnmounted && ee()
          ) : ee();
        } else {
          f.NODE_ENV !== "production" && je(c, "render");
          const ee = c.subTree = Zo(c);
          f.NODE_ENV !== "production" && Re(c, "render"), f.NODE_ENV !== "production" && je(c, "patch"), M(
            null,
            ee,
            h,
            _,
            c,
            g,
            N
          ), f.NODE_ENV !== "production" && Re(c, "patch"), u.el = ee.el;
        }
        if (j && me(j, g), !z && (x = S && S.onVnodeMounted)) {
          const ee = u;
          me(
            () => $e(x, K, ee),
            g
          );
        }
        (u.shapeFlag & 256 || K && _o(K.vnode) && K.vnode.shapeFlag & 256) && c.a && me(c.a, g), c.isMounted = !0, f.NODE_ENV !== "production" && rl(c), u = h = _ = null;
      }
    }, v = c.effect = new An(
      y,
      Z,
      () => To(b),
      c.scope
      // track it in component's effect scope
    ), b = c.update = () => {
      v.dirty && v.run();
    };
    b.id = c.uid, st(c, !0), f.NODE_ENV !== "production" && (v.onTrack = c.rtc ? (x) => wt(c.rtc, x) : void 0, v.onTrigger = c.rtg ? (x) => wt(c.rtg, x) : void 0, b.ownerInstance = c), b();
  }, k = (c, u, h) => {
    u.component = c;
    const _ = c.vnode.props;
    c.vnode = u, c.next = null, Jl(c, u.props, _, h), oc(c, u.children, h), nt(), hr(c), rt();
  }, Se = (c, u, h, _, g, N, w, y, v = !1) => {
    const b = c && c.children, x = c ? c.shapeFlag : 0, C = u.children, { patchFlag: S, shapeFlag: I } = u;
    if (S > 0) {
      if (S & 128) {
        Ft(
          b,
          C,
          h,
          _,
          g,
          N,
          w,
          y,
          v
        );
        return;
      } else if (S & 256) {
        Ko(
          b,
          C,
          h,
          _,
          g,
          N,
          w,
          y,
          v
        );
        return;
      }
    }
    I & 8 ? (x & 16 && Me(b, g, N), C !== b && m(h, C)) : x & 16 ? I & 16 ? Ft(
      b,
      C,
      h,
      _,
      g,
      N,
      w,
      y,
      v
    ) : Me(b, g, N, !0) : (x & 8 && m(h, ""), I & 16 && ue(
      C,
      h,
      _,
      g,
      N,
      w,
      y,
      v
    ));
  }, Ko = (c, u, h, _, g, N, w, y, v) => {
    c = c || St, u = u || St;
    const b = c.length, x = u.length, C = Math.min(b, x);
    let S;
    for (S = 0; S < C; S++) {
      const I = u[S] = v ? Ge(u[S]) : xe(u[S]);
      M(
        c[S],
        I,
        h,
        null,
        g,
        N,
        w,
        y,
        v
      );
    }
    b > x ? Me(
      c,
      g,
      N,
      !0,
      !1,
      C
    ) : ue(
      u,
      h,
      _,
      g,
      N,
      w,
      y,
      v,
      C
    );
  }, Ft = (c, u, h, _, g, N, w, y, v) => {
    let b = 0;
    const x = u.length;
    let C = c.length - 1, S = x - 1;
    for (; b <= C && b <= S; ) {
      const I = c[b], j = u[b] = v ? Ge(u[b]) : xe(u[b]);
      if (Rt(I, j))
        M(
          I,
          j,
          h,
          null,
          g,
          N,
          w,
          y,
          v
        );
      else
        break;
      b++;
    }
    for (; b <= C && b <= S; ) {
      const I = c[C], j = u[S] = v ? Ge(u[S]) : xe(u[S]);
      if (Rt(I, j))
        M(
          I,
          j,
          h,
          null,
          g,
          N,
          w,
          y,
          v
        );
      else
        break;
      C--, S--;
    }
    if (b > C) {
      if (b <= S) {
        const I = S + 1, j = I < x ? u[I].el : _;
        for (; b <= S; )
          M(
            null,
            u[b] = v ? Ge(u[b]) : xe(u[b]),
            h,
            j,
            g,
            N,
            w,
            y,
            v
          ), b++;
      }
    } else if (b > S)
      for (; b <= C; )
        ze(c[b], g, N, !0), b++;
    else {
      const I = b, j = b, K = /* @__PURE__ */ new Map();
      for (b = j; b <= S; b++) {
        const fe = u[b] = v ? Ge(u[b]) : xe(u[b]);
        fe.key != null && (f.NODE_ENV !== "production" && K.has(fe.key) && O(
          "Duplicate keys found during update:",
          JSON.stringify(fe.key),
          "Make sure keys are unique."
        ), K.set(fe.key, b));
      }
      let z, ee = 0;
      const Oe = S - j + 1;
      let Ot = !1, tr = 0;
      const Mt = new Array(Oe);
      for (b = 0; b < Oe; b++)
        Mt[b] = 0;
      for (b = I; b <= C; b++) {
        const fe = c[b];
        if (ee >= Oe) {
          ze(fe, g, N, !0);
          continue;
        }
        let Ce;
        if (fe.key != null)
          Ce = K.get(fe.key);
        else
          for (z = j; z <= S; z++)
            if (Mt[z - j] === 0 && Rt(fe, u[z])) {
              Ce = z;
              break;
            }
        Ce === void 0 ? ze(fe, g, N, !0) : (Mt[Ce - j] = b + 1, Ce >= tr ? tr = Ce : Ot = !0, M(
          fe,
          u[Ce],
          h,
          null,
          g,
          N,
          w,
          y,
          v
        ), ee++);
      }
      const or = Ot ? lc(Mt) : St;
      for (z = or.length - 1, b = Oe - 1; b >= 0; b--) {
        const fe = j + b, Ce = u[fe], nr = fe + 1 < x ? u[fe + 1].el : _;
        Mt[b] === 0 ? M(
          null,
          Ce,
          h,
          nr,
          g,
          N,
          w,
          y,
          v
        ) : Ot && (z < 0 || b !== or[z] ? Nt(Ce, h, nr, 2) : z--);
      }
    }
  }, Nt = (c, u, h, _, g = null) => {
    const { el: N, type: w, transition: y, children: v, shapeFlag: b } = c;
    if (b & 6) {
      Nt(c.component.subTree, u, h, _);
      return;
    }
    if (b & 128) {
      c.suspense.move(u, h, _);
      return;
    }
    if (b & 64) {
      w.move(c, u, h, vt);
      return;
    }
    if (w === se) {
      n(N, u, h);
      for (let C = 0; C < v.length; C++)
        Nt(v[C], u, h, _);
      n(c.anchor, u, h);
      return;
    }
    if (w === Wt) {
      G(c, u, h);
      return;
    }
    if (_ !== 2 && b & 1 && y)
      if (_ === 0)
        y.beforeEnter(N), n(N, u, h), me(() => y.enter(N), g);
      else {
        const { leave: C, delayLeave: S, afterLeave: I } = y, j = () => n(N, u, h), K = () => {
          C(N, () => {
            j(), I && I();
          });
        };
        S ? S(N, j, K) : K();
      }
    else
      n(N, u, h);
  }, ze = (c, u, h, _ = !1, g = !1) => {
    const {
      type: N,
      props: w,
      ref: y,
      children: v,
      dynamicChildren: b,
      shapeFlag: x,
      patchFlag: C,
      dirs: S
    } = c;
    if (y != null && En(y, null, h, c, !0), x & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const I = x & 1 && S, j = !_o(c);
    let K;
    if (j && (K = w && w.onVnodeBeforeUnmount) && $e(K, u, c), x & 6)
      rs(c.component, h, _);
    else {
      if (x & 128) {
        c.suspense.unmount(h, _);
        return;
      }
      I && it(c, null, u, "beforeUnmount"), x & 64 ? c.type.remove(
        c,
        u,
        h,
        g,
        vt,
        _
      ) : b && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== se || C > 0 && C & 64) ? Me(
        b,
        u,
        h,
        !1,
        !0
      ) : (N === se && C & 384 || !g && x & 16) && Me(v, u, h), _ && Wo(c);
    }
    (j && (K = w && w.onVnodeUnmounted) || I) && me(() => {
      K && $e(K, u, c), I && it(c, null, u, "unmounted");
    }, h);
  }, Wo = (c) => {
    const { type: u, el: h, anchor: _, transition: g } = c;
    if (u === se) {
      f.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && g && !g.persisted ? c.children.forEach((w) => {
        w.type === ye ? r(w.el) : Wo(w);
      }) : ns(h, _);
      return;
    }
    if (u === Wt) {
      X(c);
      return;
    }
    const N = () => {
      r(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: w, delayLeave: y } = g, v = () => w(h, N);
      y ? y(c.el, N, v) : v();
    } else
      N();
  }, ns = (c, u) => {
    let h;
    for (; c !== u; )
      h = E(c), r(c), c = h;
    r(u);
  }, rs = (c, u, h) => {
    f.NODE_ENV !== "production" && c.type.__hmrId && Qs(c);
    const { bum: _, scope: g, update: N, subTree: w, um: y } = c;
    _ && wt(_), g.stop(), N && (N.active = !1, ze(w, c, u, h)), y && me(y, u), me(() => {
      c.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), f.NODE_ENV !== "production" && sl(c);
  }, Me = (c, u, h, _ = !1, g = !1, N = 0) => {
    for (let w = N; w < c.length; w++)
      ze(c[w], u, h, _, g);
  }, io = (c) => c.shapeFlag & 6 ? io(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : E(c.anchor || c.el);
  let zo = !1;
  const er = (c, u, h) => {
    c == null ? u._vnode && ze(u._vnode, null, null, !0) : M(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), zo || (zo = !0, hr(), yi(), zo = !1), u._vnode = c;
  }, vt = {
    p: M,
    um: ze,
    m: Nt,
    r: Wo,
    mt: We,
    mc: ue,
    pc: Se,
    pbc: Ke,
    n: io,
    o: e
  };
  let qo, Jo;
  return t && ([qo, Jo] = t(
    vt
  )), {
    render: er,
    hydrate: qo,
    createApp: Kl(er, qo)
  };
}
function tn({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function st({ effect: e, update: t }, o) {
  e.allowRecurse = t.allowRecurse = o;
}
function sc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function bo(e, t, o = !1) {
  const n = e.children, r = t.children;
  if (D(n) && D(r))
    for (let i = 0; i < n.length; i++) {
      const s = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Ge(r[i]), l.el = s.el), o || bo(s, l)), l.type === oo && (l.el = s.el), f.NODE_ENV !== "production" && l.type === ye && !l.el && (l.el = s.el);
    }
}
function lc(e) {
  const t = e.slice(), o = [0];
  let n, r, i, s, l;
  const a = e.length;
  for (n = 0; n < a; n++) {
    const d = e[n];
    if (d !== 0) {
      if (r = o[o.length - 1], e[r] < d) {
        t[n] = r, o.push(n);
        continue;
      }
      for (i = 0, s = o.length - 1; i < s; )
        l = i + s >> 1, e[o[l]] < d ? i = l + 1 : s = l;
      d < e[o[i]] && (i > 0 && (t[n] = o[i - 1]), o[i] = n);
    }
  }
  for (i = o.length, s = o[i - 1]; i-- > 0; )
    o[i] = s, s = t[s];
  return o;
}
function Bi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Bi(t);
}
const cc = (e) => e.__isTeleport, se = Symbol.for("v-fgt"), oo = Symbol.for("v-txt"), ye = Symbol.for("v-cmt"), Wt = Symbol.for("v-stc"), zt = [];
let Ve = null;
function L(e = !1) {
  zt.push(Ve = e ? null : []);
}
function ac() {
  zt.pop(), Ve = zt[zt.length - 1] || null;
}
let Yt = 1;
function Dr(e) {
  Yt += e;
}
function Ki(e) {
  return e.dynamicChildren = Yt > 0 ? Ve || St : null, ac(), Yt > 0 && Ve && Ve.push(e), e;
}
function H(e, t, o, n, r, i) {
  return Ki(
    R(
      e,
      t,
      o,
      n,
      r,
      i,
      !0
    )
  );
}
function uc(e, t, o, n, r) {
  return Ki(
    te(
      e,
      t,
      o,
      n,
      r,
      !0
    )
  );
}
function Yn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Rt(e, t) {
  return f.NODE_ENV !== "production" && t.shapeFlag & 6 && xt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const fc = (...e) => zi(
  ...e
), Mo = "__vInternal", Wi = ({ key: e }) => e ?? null, yo = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? Y(e) || ce(e) || $(e) ? { i: pe, r: e, k: t, f: !!o } : e : null);
function R(e, t = null, o = null, n = 0, r = null, i = e === se ? 0 : 1, s = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wi(t),
    ref: t && yo(t),
    scopeId: Po,
    slotScopeIds: null,
    children: o,
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
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: pe
  };
  return l ? (Xn(a, o), i & 128 && e.normalize(a)) : o && (a.shapeFlag |= Y(o) ? 8 : 16), f.NODE_ENV !== "production" && a.key !== a.key && O("VNode created with invalid key (NaN). VNode type:", a.type), Yt > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Ve && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ve.push(a), a;
}
const te = f.NODE_ENV !== "production" ? fc : zi;
function zi(e, t = null, o = null, n = 0, r = null, i = !1) {
  if ((!e || e === _l) && (f.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = ye), Yn(e)) {
    const l = tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && Xn(l, o), Yt > 0 && !i && Ve && (l.shapeFlag & 6 ? Ve[Ve.indexOf(e)] = l : Ve.push(l)), l.patchFlag |= -2, l;
  }
  if (Zi(e) && (e = e.__vccOpts), t) {
    t = dc(t);
    let { class: l, style: a } = t;
    l && !Y(l) && (t.class = Ze(l)), B(a) && (un(a) && !D(a) && (a = J({}, a)), t.style = In(a));
  }
  const s = Y(e) ? 1 : gl(e) ? 128 : cc(e) ? 64 : B(e) ? 4 : $(e) ? 2 : 0;
  return f.NODE_ENV !== "production" && s & 4 && un(e) && (e = T(e), O(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), R(
    e,
    t,
    o,
    n,
    r,
    s,
    i,
    !0
  );
}
function dc(e) {
  return e ? un(e) || Mo in e ? J({}, e) : e : null;
}
function tt(e, t, o = !1) {
  const { props: n, ref: r, patchFlag: i, children: s } = e, l = t ? pc(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Wi(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? D(r) ? r.concat(yo(t)) : [r, yo(t)] : yo(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: f.NODE_ENV !== "production" && i === -1 && D(s) ? s.map(qi) : s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== se ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function qi(e) {
  const t = tt(e);
  return D(e.children) && (t.children = e.children.map(qi)), t;
}
function _e(e = " ", t = 0) {
  return te(oo, null, e, t);
}
function Ji(e, t) {
  const o = te(Wt, null, e);
  return o.staticCount = t, o;
}
function Ie(e = "", t = !1) {
  return t ? (L(), uc(ye, null, e)) : te(ye, null, e);
}
function xe(e) {
  return e == null || typeof e == "boolean" ? te(ye) : D(e) ? te(
    se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ge(e) : te(oo, null, String(e));
}
function Ge(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e);
}
function Xn(e, t) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (D(t))
    o = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Xn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      o = 32;
      const r = t._;
      !r && !(Mo in t) ? t._ctx = pe : r === 3 && pe && (pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    $(t) ? (t = { default: t, _ctx: pe }, o = 32) : (t = String(t), n & 64 ? (o = 16, t = [_e(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function pc(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Ze([t.class, n.class]));
      else if (r === "style")
        t.style = In([t.style, n.style]);
      else if (Xt(r)) {
        const i = t[r], s = n[r];
        s && i !== s && !(D(i) && i.includes(s)) && (t[r] = i ? [].concat(i, s) : s);
      } else
        r !== "" && (t[r] = n[r]);
  }
  return t;
}
function $e(e, t, o, n = null) {
  De(e, t, 7, [
    o,
    n
  ]);
}
const hc = Mi();
let mc = 0;
function _c(e, t, o) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || hc, i = {
    uid: mc++,
    vnode: e,
    type: n,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new _s(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ri(n, r),
    emitsOptions: xi(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: W,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: W,
    data: W,
    props: W,
    attrs: W,
    slots: W,
    refs: W,
    setupState: W,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: o,
    suspenseId: o ? o.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
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
    sp: null
  };
  return f.NODE_ENV !== "production" ? i.ctx = Pl(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ul.bind(null, i), e.ce && e.ce(i), i;
}
let re = null, Vo, Nn;
{
  const e = $n(), t = (o, n) => {
    let r;
    return (r = e[o]) || (r = e[o] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((s) => s(i)) : r[0](i);
    };
  };
  Vo = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => re = o
  ), Nn = t(
    "__VUE_SSR_SETTERS__",
    (o) => jo = o
  );
}
const no = (e) => {
  const t = re;
  return Vo(e), e.scope.on(), () => {
    e.scope.off(), Vo(t);
  };
}, Sr = () => {
  re && re.scope.off(), Vo(null);
}, gc = /* @__PURE__ */ At("slot,component");
function vn(e, t) {
  const o = t.isNativeTag || zr;
  (gc(e) || o(e)) && O(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Gi(e) {
  return e.vnode.shapeFlag & 4;
}
let jo = !1;
function bc(e, t = !1) {
  t && Nn(t);
  const { props: o, children: n } = e.vnode, r = Gi(e);
  zl(e, o, r, t), tc(e, n);
  const i = r ? yc(e, t) : void 0;
  return t && Nn(!1), i;
}
function yc(e, t) {
  var o;
  const n = e.type;
  if (f.NODE_ENV !== "production") {
    if (n.name && vn(n.name, e.appContext.config), n.components) {
      const i = Object.keys(n.components);
      for (let s = 0; s < i.length; s++)
        vn(i[s], e.appContext.config);
    }
    if (n.directives) {
      const i = Object.keys(n.directives);
      for (let s = 0; s < i.length; s++)
        Ii(i[s]);
    }
    n.compilerOptions && Ec() && O(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = di(new Proxy(e.ctx, Pi)), f.NODE_ENV !== "production" && Fl(e);
  const { setup: r } = n;
  if (r) {
    const i = e.setupContext = r.length > 1 ? vc(e) : null, s = no(e);
    nt();
    const l = He(
      r,
      e,
      0,
      [
        f.NODE_ENV !== "production" ? Dt(e.props) : e.props,
        i
      ]
    );
    if (rt(), s(), Dn(l)) {
      if (l.then(Sr, Sr), t)
        return l.then((a) => {
          Cr(e, a, t);
        }).catch((a) => {
          eo(a, e, 0);
        });
      if (e.asyncDep = l, f.NODE_ENV !== "production" && !e.suspense) {
        const a = (o = n.name) != null ? o : "Anonymous";
        O(
          `Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Cr(e, l, t);
  } else
    Yi(e, t);
}
function Cr(e, t, o) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) ? (f.NODE_ENV !== "production" && Yn(t) && O(
    "setup() should not return VNodes directly - return a render function instead."
  ), f.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = hi(t), f.NODE_ENV !== "production" && Ml(e)) : f.NODE_ENV !== "production" && t !== void 0 && O(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Yi(e, o);
}
let On;
const Ec = () => !On;
function Yi(e, t, o) {
  const n = e.type;
  if (!e.render) {
    if (!t && On && !n.render) {
      const r = n.template || Jn(e).template;
      if (r) {
        f.NODE_ENV !== "production" && je(e, "compile");
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config, { delimiters: l, compilerOptions: a } = n, d = J(
          J(
            {
              isCustomElement: i,
              delimiters: l
            },
            s
          ),
          a
        );
        n.render = On(r, d), f.NODE_ENV !== "production" && Re(e, "compile");
      }
    }
    e.render = n.render || Z;
  }
  {
    const r = no(e);
    nt();
    try {
      Rl(e);
    } finally {
      rt(), r();
    }
  }
  f.NODE_ENV !== "production" && !n.render && e.render === Z && !t && (n.template ? O(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : O("Component is missing template or render function."));
}
function $r(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    f.NODE_ENV !== "production" ? {
      get(t, o) {
        return Oo(), ie(e, "get", "$attrs"), t[o];
      },
      set() {
        return O("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return O("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, o) {
        return ie(e, "get", "$attrs"), t[o];
      }
    }
  ));
}
function Nc(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, o) {
      return ie(e, "get", "$slots"), t[o];
    }
  }));
}
function vc(e) {
  const t = (o) => {
    if (f.NODE_ENV !== "production" && (e.exposed && O("expose() should be called only once per setup()."), o != null)) {
      let n = typeof o;
      n === "object" && (D(o) ? n = "array" : ce(o) && (n = "ref")), n !== "object" && O(
        `expose() should be passed a plain object, received ${n}.`
      );
    }
    e.exposed = o || {};
  };
  return f.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return $r(e);
    },
    get slots() {
      return Nc(e);
    },
    get emit() {
      return (o, ...n) => e.emit(o, ...n);
    },
    expose: t
  }) : {
    get attrs() {
      return $r(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ro(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(hi(di(e.exposed)), {
      get(t, o) {
        if (o in t)
          return t[o];
        if (o in mt)
          return mt[o](e);
      },
      has(t, o) {
        return o in t || o in mt;
      }
    }));
}
const Oc = /(?:^|[-_])(\w)/g, wc = (e) => e.replace(Oc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Xi(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ko(e, t, o = !1) {
  let n = Xi(t);
  if (!n && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (n = r[1]);
  }
  if (!n && e && e.parent) {
    const r = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    n = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return n ? wc(n) : o ? "App" : "Anonymous";
}
function Zi(e) {
  return $(e) && "__vccOpts" in e;
}
const Qi = (e, t) => ks(e, t, jo);
function xc() {
  if (f.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, o = { style: "color:#f5222d" }, n = { style: "color:#eb2f96" }, r = {
    header(p) {
      return B(p) ? p.__isVue ? ["div", e, "VueInstance"] : ce(p) ? [
        "div",
        {},
        ["span", e, m(p)],
        "<",
        l(p.value),
        ">"
      ] : dt(p) ? [
        "div",
        {},
        ["span", e, Ct(p) ? "ShallowReactive" : "Reactive"],
        "<",
        l(p),
        `>${yt(p) ? " (readonly)" : ""}`
      ] : yt(p) ? [
        "div",
        {},
        ["span", e, Ct(p) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(p),
        ">"
      ] : null : null;
    },
    hasBody(p) {
      return p && p.__isVue;
    },
    body(p) {
      if (p && p.__isVue)
        return [
          "div",
          {},
          ...i(p.$)
        ];
    }
  };
  function i(p) {
    const E = [];
    p.type.props && p.props && E.push(s("props", T(p.props))), p.setupState !== W && E.push(s("setup", p.setupState)), p.data !== W && E.push(s("data", T(p.data)));
    const V = a(p, "computed");
    V && E.push(s("computed", V));
    const P = a(p, "inject");
    return P && E.push(s("injected", P)), E.push([
      "div",
      {},
      [
        "span",
        {
          style: n.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: p }]
    ]), E;
  }
  function s(p, E) {
    return E = J({}, E), Object.keys(E).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        p
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(E).map((V) => [
          "div",
          {},
          ["span", n, V + ": "],
          l(E[V], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(p, E = !0) {
    return typeof p == "number" ? ["span", t, p] : typeof p == "string" ? ["span", o, JSON.stringify(p)] : typeof p == "boolean" ? ["span", n, p] : B(p) ? ["object", { object: E ? T(p) : p }] : ["span", o, String(p)];
  }
  function a(p, E) {
    const V = p.type;
    if ($(V))
      return;
    const P = {};
    for (const M in p.ctx)
      d(V, M, E) && (P[M] = p.ctx[M]);
    return P;
  }
  function d(p, E, V) {
    const P = p[V];
    if (D(P) && P.includes(E) || B(P) && E in P || p.extends && d(p.extends, E, V) || p.mixins && p.mixins.some((M) => d(M, E, V)))
      return !0;
  }
  function m(p) {
    return Ct(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Ir = "3.4.18", Uo = f.NODE_ENV !== "production" ? O : Z;
var _t = {};
const Vc = "http://www.w3.org/2000/svg", Dc = "http://www.w3.org/1998/Math/MathML", Ye = typeof document < "u" ? document : null, Tr = Ye && /* @__PURE__ */ Ye.createElement("template"), Sc = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, n) => {
    const r = t === "svg" ? Ye.createElementNS(Vc, e) : t === "mathml" ? Ye.createElementNS(Dc, e) : Ye.createElement(e, o ? { is: o } : void 0);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Ye.createTextNode(e),
  createComment: (e) => Ye.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ye.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, o, n, r, i) {
    const s = o ? o.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), o), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Tr.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
      const l = Tr.content;
      if (n === "svg" || n === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, o);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      o ? o.previousSibling : t.lastChild
    ];
  }
}, Cc = Symbol("_vtc");
function $c(e, t, o) {
  const n = e[Cc];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const Ar = Symbol("_vod"), Ic = Symbol(_t.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Tc = /(^|;)\s*display\s*:/;
function Ac(e, t, o) {
  const n = e.style, r = Y(o), i = n.display;
  let s = !1;
  if (o && !r) {
    if (t && !Y(t))
      for (const l in t)
        o[l] == null && wn(n, l, "");
    for (const l in o)
      l === "display" && (s = !0), wn(n, l, o[l]);
  } else if (r) {
    if (t !== o) {
      const l = n[Ic];
      l && (o += ";" + l), n.cssText = o, s = Tc.test(o);
    }
  } else
    t && e.removeAttribute("style");
  Ar in e && (e[Ar] = s ? n.display : "", n.display = i);
}
const Pc = /[^\\];\s*$/, Pr = /\s*!important$/;
function wn(e, t, o) {
  if (D(o))
    o.forEach((n) => wn(e, t, n));
  else if (o == null && (o = ""), _t.NODE_ENV !== "production" && Pc.test(o) && Uo(
    `Unexpected semicolon at the end of '${t}' style value: '${o}'`
  ), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const n = Fc(e, t);
    Pr.test(o) ? e.setProperty(
      be(n),
      o.replace(Pr, ""),
      "important"
    ) : e[n] = o;
  }
}
const Fr = ["Webkit", "Moz", "ms"], on = {};
function Fc(e, t) {
  const o = on[t];
  if (o)
    return o;
  let n = Le(t);
  if (n !== "filter" && n in e)
    return on[t] = n;
  n = So(n);
  for (let r = 0; r < Fr.length; r++) {
    const i = Fr[r] + n;
    if (i in e)
      return on[t] = i;
  }
  return t;
}
const Mr = "http://www.w3.org/1999/xlink";
function Mc(e, t, o, n, r) {
  if (n && t.startsWith("xlink:"))
    o == null ? e.removeAttributeNS(Mr, t.slice(6, t.length)) : e.setAttributeNS(Mr, t, o);
  else {
    const i = hs(t);
    o == null || i && !Gr(o) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : o);
  }
}
function jc(e, t, o, n, r, i, s) {
  if (t === "innerHTML" || t === "textContent") {
    n && s(n, r, i), e[t] = o ?? "";
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    e._value = o;
    const d = l === "OPTION" ? e.getAttribute("value") : e.value, m = o ?? "";
    d !== m && (e.value = m), o == null && e.removeAttribute(t);
    return;
  }
  let a = !1;
  if (o === "" || o == null) {
    const d = typeof e[t];
    d === "boolean" ? o = Gr(o) : o == null && d === "string" ? (o = "", a = !0) : d === "number" && (o = 0, a = !0);
  }
  try {
    e[t] = o;
  } catch (d) {
    _t.NODE_ENV !== "production" && !a && Uo(
      `Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${o} is invalid.`,
      d
    );
  }
  a && e.removeAttribute(t);
}
function Ue(e, t, o, n) {
  e.addEventListener(t, o, n);
}
function Rc(e, t, o, n) {
  e.removeEventListener(t, o, n);
}
const jr = Symbol("_vei");
function kc(e, t, o, n, r = null) {
  const i = e[jr] || (e[jr] = {}), s = i[t];
  if (n && s)
    s.value = n;
  else {
    const [l, a] = Uc(t);
    if (n) {
      const d = i[t] = Bc(n, r);
      Ue(e, l, d, a);
    } else
      s && (Rc(e, l, s, a), i[t] = void 0);
  }
}
const Rr = /(?:Once|Passive|Capture)$/;
function Uc(e) {
  let t;
  if (Rr.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Rr); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : be(e.slice(2)), t];
}
let nn = 0;
const Lc = /* @__PURE__ */ Promise.resolve(), Hc = () => nn || (Lc.then(() => nn = 0), nn = Date.now());
function Bc(e, t) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    De(
      Kc(n, o.value),
      t,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = Hc(), o;
}
function Kc(e, t) {
  if (D(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map((n) => (r) => !r._stopped && n && n(r));
  } else
    return t;
}
const kr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wc = (e, t, o, n, r, i, s, l, a) => {
  const d = r === "svg";
  t === "class" ? $c(e, n, d) : t === "style" ? Ac(e, o, n) : Xt(t) ? Eo(t) || kc(e, t, o, n, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : zc(e, t, n, d)) ? jc(
    e,
    t,
    n,
    i,
    s,
    l,
    a
  ) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Mc(e, t, n, d));
};
function zc(e, t, o, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && kr(t) && $(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return kr(t) && Y(o) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function es(e, t) {
  const o = /* @__PURE__ */ vl(e);
  class n extends Zn {
    constructor(i) {
      super(o, i, t);
    }
  }
  return n.def = o, n;
}
const qc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Zn extends qc {
  constructor(t, o = {}, n) {
    super(), this._def = t, this._props = o, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && n ? n(this._createVNode(), this.shadowRoot) : (_t.NODE_ENV !== "production" && this.shadowRoot && Uo(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), Ln(() => {
      this._connected || (Kr(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver((n) => {
      for (const r of n)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (n, r = !1) => {
      const { props: i, styles: s } = n;
      let l;
      if (i && !D(i))
        for (const a in i) {
          const d = i[a];
          (d === Number || d && d.type === Number) && (a in this._props && (this._props[a] = ir(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Le(a)] = !0);
        }
      this._numberProps = l, r && this._resolveProps(n), this._applyStyles(s), this._update();
    }, o = this._def.__asyncLoader;
    o ? o().then((n) => t(n, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: o } = t, n = D(o) ? o : Object.keys(o || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && n.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of n.map(Le))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(i) {
          this._setProp(r, i);
        }
      });
  }
  _setAttr(t) {
    let o = this.getAttribute(t);
    const n = Le(t);
    this._numberProps && this._numberProps[n] && (o = ir(o)), this._setProp(n, o, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, o, n = !0, r = !0) {
    o !== this._props[t] && (this._props[t] = o, r && this._instance && this._update(), n && (o === !0 ? this.setAttribute(be(t), "") : typeof o == "string" || typeof o == "number" ? this.setAttribute(be(t), o + "") : o || this.removeAttribute(be(t))));
  }
  _update() {
    Kr(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = te(this._def, J({}, this._props));
    return this._instance || (t.ce = (o) => {
      this._instance = o, o.isCE = !0, _t.NODE_ENV !== "production" && (o.ceReload = (i) => {
        this._styles && (this._styles.forEach((s) => this.shadowRoot.removeChild(s)), this._styles.length = 0), this._applyStyles(i), this._instance = null, this._update();
      });
      const n = (i, s) => {
        this.dispatchEvent(
          new CustomEvent(i, {
            detail: s
          })
        );
      };
      o.emit = (i, ...s) => {
        n(i, s), be(i) !== i && n(be(i), s);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof Zn) {
          o.parent = r._instance, o.provides = r._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((o) => {
      const n = document.createElement("style");
      n.textContent = o, this.shadowRoot.appendChild(n), _t.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(n);
    });
  }
}
const ot = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return D(t) ? (o) => wt(t, o) : t;
};
function Jc(e) {
  e.target.composing = !0;
}
function Ur(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ee = Symbol("_assign"), xn = {
  created(e, { modifiers: { lazy: t, trim: o, number: n } }, r) {
    e[Ee] = ot(r);
    const i = n || r.props && r.props.type === "number";
    Ue(e, t ? "change" : "input", (s) => {
      if (s.target.composing)
        return;
      let l = e.value;
      o && (l = l.trim()), i && (l = qt(l)), e[Ee](l);
    }), o && Ue(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ue(e, "compositionstart", Jc), Ue(e, "compositionend", Ur), Ue(e, "change", Ur));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: o, trim: n, number: r } }, i) {
    if (e[Ee] = ot(i), e.composing)
      return;
    const s = r || e.type === "number" ? qt(e.value) : e.value, l = t ?? "";
    s !== l && (document.activeElement === e && e.type !== "range" && (o || n && e.value.trim() === l) || (e.value = l));
  }
}, Gc = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[Ee] = ot(o), Ue(e, "change", () => {
      const n = e._modelValue, r = Tt(e), i = e.checked, s = e[Ee];
      if (D(n)) {
        const l = Tn(n, r), a = l !== -1;
        if (i && !a)
          s(n.concat(r));
        else if (!i && a) {
          const d = [...n];
          d.splice(l, 1), s(d);
        }
      } else if (Pt(n)) {
        const l = new Set(n);
        i ? l.add(r) : l.delete(r), s(l);
      } else
        s(os(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Lr,
  beforeUpdate(e, t, o) {
    e[Ee] = ot(o), Lr(e, t, o);
  }
};
function Lr(e, { value: t, oldValue: o }, n) {
  e._modelValue = t, D(t) ? e.checked = Tn(t, n.props.value) > -1 : Pt(t) ? e.checked = t.has(n.props.value) : t !== o && (e.checked = bt(t, os(e, !0)));
}
const Yc = {
  created(e, { value: t }, o) {
    e.checked = bt(t, o.props.value), e[Ee] = ot(o), Ue(e, "change", () => {
      e[Ee](Tt(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, n) {
    e[Ee] = ot(n), t !== o && (e.checked = bt(t, n.props.value));
  }
}, ts = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, n) {
    const r = Pt(t);
    Ue(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (s) => s.selected).map(
        (s) => o ? qt(Tt(s)) : Tt(s)
      );
      e[Ee](
        e.multiple ? r ? new Set(i) : i : i[0]
      ), e._assigning = !0, Ln(() => {
        e._assigning = !1;
      });
    }), e[Ee] = ot(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, oldValue: o, modifiers: { number: n } }) {
    Hr(e, t, o, n);
  },
  beforeUpdate(e, t, o) {
    e[Ee] = ot(o);
  },
  updated(e, { value: t, oldValue: o, modifiers: { number: n } }) {
    e._assigning || Hr(e, t, o, n);
  }
};
function Hr(e, t, o, n) {
  const r = e.multiple, i = D(t);
  if (r && !i && !Pt(t)) {
    _t.NODE_ENV !== "production" && Uo(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let s = 0, l = e.options.length; s < l; s++) {
    const a = e.options[s], d = Tt(a);
    if (r)
      if (i) {
        const m = typeof d;
        m === "string" || m === "number" ? a.selected = t.includes(
          n ? qt(d) : d
        ) : a.selected = Tn(t, d) > -1;
      } else
        a.selected = t.has(d);
    else if (bt(Tt(a), t)) {
      e.selectedIndex !== s && (e.selectedIndex = s);
      return;
    }
  }
  !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Tt(e) {
  return "_value" in e ? e._value : e.value;
}
function os(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const Xc = {
  created(e, t, o) {
    po(e, t, o, null, "created");
  },
  mounted(e, t, o) {
    po(e, t, o, null, "mounted");
  },
  beforeUpdate(e, t, o, n) {
    po(e, t, o, n, "beforeUpdate");
  },
  updated(e, t, o, n) {
    po(e, t, o, n, "updated");
  }
};
function Zc(e, t) {
  switch (e) {
    case "SELECT":
      return ts;
    case "TEXTAREA":
      return xn;
    default:
      switch (t) {
        case "checkbox":
          return Gc;
        case "radio":
          return Yc;
        default:
          return xn;
      }
  }
}
function po(e, t, o, n, r) {
  const s = Zc(
    e.tagName,
    o.props && o.props.type
  )[r];
  s && s(e, t, o, n);
}
const Qc = ["ctrl", "shift", "alt", "meta"], ea = {
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
  exact: (e, t) => Qc.some((o) => e[`${o}Key`] && !t.includes(o))
}, ta = (e, t) => {
  const o = e._withMods || (e._withMods = {}), n = t.join(".");
  return o[n] || (o[n] = (r, ...i) => {
    for (let s = 0; s < t.length; s++) {
      const l = ea[t[s]];
      if (l && l(r, t))
        return;
    }
    return e(r, ...i);
  });
}, oa = /* @__PURE__ */ J({ patchProp: Wc }, Sc);
let Br;
function na() {
  return Br || (Br = rc(oa));
}
const Kr = (...e) => {
  na().render(...e);
};
var ra = {};
function ia() {
  xc();
}
ra.NODE_ENV !== "production" && ia();
const Lo = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, r] of t)
    o[n] = r;
  return o;
}, sa = {}, la = {
  version: "1.1",
  role: "img",
  width: "22",
  height: "22",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 100 100",
  "xml:space": "preserve",
  style: { display: "inline" }
}, ca = /* @__PURE__ */ Ji(`<title>Google Spreadsheet API Form</title><desc>Make a form out of a Google Spreadsheet using SheetDB</desc><circle fill="#0BAB65" class="st0" cx="50" cy="50" r="46"></circle><path fill="#FFFFFF" d="M62.2,28.4c0.2,0,0.5,0.1,0.7,0.2c4.5,0.6,8.3,4.2,9.2,8.7c0.1,0.8,0.2,1.5,0.2,2.3c0,0.9-0.1,1.7,0.1,2.6
c0.5,2.6,2.6,4.7,5.2,5.1c0,0,0.1,0,0.1,0c0.4,0.1,0.4,0.1,0.4,0.4c0,1.3,0,2.6,0,3.9c0,0.3,0,0.3-0.3,0.4
c-2.6,0.4-4.6,2.3-5.3,4.8c-0.1,0.5-0.1,1.1-0.2,1.6c0,0.8,0,1.5,0,2.3c-0.2,2.2-1,4.2-2.4,6c-1.8,2.2-4.1,3.5-6.9,4
c-0.6,0.1-1.1,0.1-1.7,0.1c-2.3,0-4.5,0-6.8,0c0,0-0.1,0-0.1,0c-0.3,0-0.3,0-0.3-0.3c0-1.3,0-2.7,0-4c0-0.3,0-0.3,0.4-0.3
c2.3,0,4.6,0,6.9,0c1.4,0,2.7-0.4,3.9-1.3c1.5-1.1,2.3-2.6,2.5-4.5c0.1-0.7,0-1.4,0-2.1c0-3.5,1.4-6.3,4-8.5c0,0,0.1-0.1,0.1-0.1
c0-0.2-0.2-0.2-0.3-0.3c-2.1-1.7-3.3-4-3.8-6.6c-0.1-0.6-0.1-1.1-0.1-1.7c0-0.7,0-1.4,0-2.1c-0.2-2.2-1.2-3.8-3-5
c-1-0.6-2.1-0.9-3.2-0.9c-2.3,0-4.5,0-6.8,0c-0.1,0-0.2,0-0.3,0C54,33.1,54,33,54,32.8c0-0.5,0-1,0-1.5c0-1,0-2,0-2.9
C56.7,28.4,59.4,28.4,62.2,28.4z"></path><path fill="#FFFFFF" d="M44.5,28.4c0,1,0,2.1,0,3.1c0,0.4,0,0.9,0,1.3c0,0.2-0.1,0.3-0.3,0.3c-0.2,0-0.4,0-0.6,0c-2.1,0-4.2,0-6.4,0
c-2.8,0-5.4,1.9-6.2,4.7c-0.1,0.5-0.2,1.1-0.2,1.6c0,0.6,0,1.3,0,1.9c-0.1,2.6-1,4.9-2.6,6.8c-0.5,0.5-1,1-1.5,1.5
c0,0.1,0.1,0.2,0.2,0.3c2,1.7,3.3,3.9,3.8,6.5c0.1,0.6,0.2,1.3,0.2,2c0,0.8,0,1.6,0.1,2.3c0.3,2.6,2.3,4.7,4.8,5.4
c0.5,0.1,1,0.2,1.6,0.2c2.2,0,4.4,0,6.6,0c0.1,0,0.2,0,0.3,0c0.2,0,0.2,0.1,0.2,0.2c0,0.1,0,0.1,0,0.2c0,1.3,0,2.6,0,3.8
c0,0.4,0,0.4-0.4,0.4c-2.4,0-4.7,0-7.1,0c-5.1-0.1-9.3-3.5-10.5-8.4c-0.2-0.7-0.3-1.5-0.3-2.2c0-0.7,0-1.3,0-2
c0-2.9-2.2-5.5-5.1-6.1c-0.7-0.1-0.7-0.1-0.7-0.8c0-1.1,0-2.3,0-3.4c0-0.6,0-0.6,0.5-0.7c1.8-0.3,3.2-1.3,4.2-2.8
c0.7-1,1-2.2,1-3.4c0-0.6,0-1.2,0-1.8c0.1-5.3,4-9.6,8.8-10.5c0.4-0.1,0.8-0.1,1.1-0.2c0.1,0,0.3-0.1,0.5-0.1
C39.4,28.4,41.8,28.4,44.5,28.4z"></path><path fill="#FFFFFF" d="M49.2,38.1c4.1,0,8.3,0,12.4,0c0.1,0,0.2,0,0.3,0c0.2,0,0.2,0.1,0.2,0.2c0,0.4,0,0.7,0,1.1c0,1,0,2,0,2.9
c0,0.4,0,0.4-0.4,0.4c-1.4,0-2.8,0-4.2,0c-6.9,0-13.8,0-20.8,0c-0.1,0-0.1,0-0.2,0c-0.6,0-0.5,0-0.5-0.5c0-1.2,0-2.5,0-3.7
c0-0.4,0-0.4,0.4-0.4C40.8,38.1,45,38.1,49.2,38.1z"></path><path fill="#FFFFFF" d="M49.2,61.2c-4.1,0-8.3,0-12.4,0c-0.7,0-0.6,0.1-0.6-0.6c0-1.2,0-2.5,0-3.7c0-0.3,0-0.3,0.3-0.3
c0.1,0,0.1,0,0.2,0c8.3,0,16.6,0,24.9,0c0.6,0,0.5-0.1,0.5,0.6c0,1.2,0,2.4,0,3.6c0,0.5,0,0.4-0.4,0.4
C57.6,61.2,53.4,61.2,49.2,61.2z"></path><path fill="#FFFFFF" d="M42.1,52c-1.8,0-3.5,0-5.3,0c-0.1,0-0.2,0-0.3,0c-0.3,0-0.3,0-0.3-0.3c0-0.6,0-1.1,0-1.7c0-0.8,0-1.5,0-2.3
c0-0.4,0-0.4,0.3-0.4c1.1,0,2.2,0,3.3,0c2.5,0,5,0,7.6,0c0.1,0,0.2,0,0.3,0c0.3,0,0.3,0,0.3,0.3c0,0.5,0,1,0,1.5c0,0.8,0,1.6,0,2.4
c0,0.4,0,0.4-0.4,0.4C45.7,52,43.9,52,42.1,52z"></path><path fill="#FFFFFF" d="M55.7,47.4c0.8,0,1.6,0,2.4,0c0.3,0,0.3,0,0.3,0.3c0,1.3,0,2.6,0,4c0,0.3,0,0.3-0.3,0.3c-1.6,0-3.2,0-4.8,0
C53,52,53,52,53,51.7c0-1.3,0-2.7,0-4c0-0.3,0-0.3,0.4-0.3C54.1,47.4,54.9,47.4,55.7,47.4z"></path>`, 9), aa = [
  ca
];
function ua(e, t) {
  return L(), H("svg", la, aa);
}
const It = /* @__PURE__ */ Lo(sa, [["render", ua]]), fa = `*[data-v-7402c36e],*[data-v-7402c36e]:before,*[data-v-7402c36e]:after{box-sizing:border-box}.text-center[data-v-7402c36e]{text-align:center}.sheetdb-form[data-v-7402c36e]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";display:flex}form[data-v-7402c36e]{display:block;font-size:16px;line-height:1.25rem;color:#374151}.form-label[data-v-7402c36e]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";color:#374151;font-size:16px;font-weight:500;display:block;margin-bottom:.35em}.input[data-v-7402c36e]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";appearance:none;font-size:16px;display:block;border-radius:.375rem;background-color:#fff;padding:.5em .75em;-webkit-appearance:none;-moz-appearance:none;border:1px solid rgb(209,213,219);margin-bottom:1.5em;width:100%;max-width:100%}.submit[data-v-7402c36e]{position:relative;background-color:#4f46e5;font-size:16px;cursor:pointer;color:#fff;border:0;border-radius:.375rem;padding:.5em .75em;text-decoration:none;text-transform:none}.sending[data-v-7402c36e]{cursor:auto}.made-by[data-v-7402c36e]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";color:#374151b3;font-size:.8em;text-align:right}.made-by a[data-v-7402c36e],.made-by a[data-v-7402c36e]:active,.made-by a[data-v-7402c36e]:visited{display:flex;justify-content:flex-end;align-items:center;text-decoration:none;color:#374151b3}.made-by.center a[data-v-7402c36e],.made-by.center a[data-v-7402c36e]:active,.made-by.center a[data-v-7402c36e]:visited{justify-content:center}.made-by a[data-v-7402c36e]:hover{color:#374151e6}.made-by svg[data-v-7402c36e]{margin:0 6px}.form-required[data-v-7402c36e]{color:#ef4444}.flex-start[data-v-7402c36e]{justify-content:flex-start}.center[data-v-7402c36e]{justify-content:center}.flex-end[data-v-7402c36e]{justify-content:flex-end}.w-full[data-v-7402c36e]{width:100%}.w-300px[data-v-7402c36e]{width:300px}.w-500px[data-v-7402c36e]{width:500px}.w-700px[data-v-7402c36e]{width:700px}.transparent[data-v-7402c36e]{background:transparent;padding:0}.not-transparent[data-v-7402c36e]{background:#fff;padding:18px}.loading[data-v-7402c36e]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:all .2s ease;color:#fff}.loading svg[data-v-7402c36e]{width:1rem;height:1rem;animation:spin-7402c36e 1s linear infinite}.opacity-0[data-v-7402c36e]{opacity:0}@keyframes spin-7402c36e{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.form-dropdown[data-v-7402c36e]{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right .5rem center!important;background-repeat:no-repeat!important;background-size:1.5em 1.5em!important;padding-right:2.5rem!important}`, Ho = (e) => (Vi("data-v-7402c36e"), e = e(), Di(), e), da = { class: "form-label" }, pa = {
  key: 0,
  class: "form-required"
}, ha = ["onUpdate:modelValue", "type", "placeholder", "required"], ma = ["onUpdate:modelValue", "required"], _a = ["value"], ga = { style: { display: "flex", "align-items": "center", "justify-content": "space-between" } }, ba = {
  key: 0,
  class: "loading",
  style: { margin: "0", padding: "0", width: "1rem", height: "1rem" }
}, ya = /* @__PURE__ */ Ho(() => /* @__PURE__ */ R("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ R("circle", {
    style: { opacity: "25%" },
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ R("path", {
    style: { opacity: "75%" },
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1)), Ea = [
  ya
], Na = { class: "made-by" }, va = { href: "#" }, Oa = { key: 1 }, wa = {
  key: 2,
  class: "text-center"
}, xa = { key: 0 }, Va = /* @__PURE__ */ Ho(() => /* @__PURE__ */ R("h2", null, "Whoops. This form has been deleted.", -1)), Da = { class: "made-by center" }, Sa = { href: "#" }, Ca = { key: 1 }, $a = /* @__PURE__ */ Ho(() => /* @__PURE__ */ R("h2", null, "Whoops. Something went wrong.", -1)), Ia = /* @__PURE__ */ Ho(() => /* @__PURE__ */ R("p", { style: { "margin-bottom": "2em" } }, "Contact the owner or SheetDB team.", -1)), Ta = { class: "made-by center" }, Aa = { href: "#" }, Pa = {
  __name: "SheetDBForm.ce",
  props: {
    apiId: String,
    fields: [Array, String],
    config: [Object, String]
  },
  setup(e) {
    const t = e, o = Qt({
      fields: [],
      data: {},
      config: {},
      sending: !1,
      completed: !1,
      error: null
    });
    function n(i) {
      try {
        return JSON.parse(i), !0;
      } catch {
        return !1;
      }
    }
    zn(() => {
      let i = t.config;
      typeof i == "string" && n(i) && (i = JSON.parse(i));
      let s = t.fields;
      typeof s == "string" && n(s) && (s = JSON.parse(s)), o.fields = s, o.config = {
        ...o.config,
        ...i,
        apiId: t.apiId
      };
    });
    function r() {
      if (!Object.keys(o.data).length) {
        alert("Please fill out the form.");
        return;
      }
      o.sending = !0, fetch("https://sheetdb.io/api/v1/" + o.config.apiId, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: o.data
        })
      }).then((i) => {
        if (i.status == 400)
          o.error = 400;
        else if (!i.ok)
          o.error = 404;
        else
          return i.json();
      }).then((i) => {
        o.config.redirectUrl ? window.location.href = o.config.redirectUrl : o.completed = !0;
      }).catch((i) => {
        o.sending = !1, o.error = 400;
      });
    }
    return (i, s) => (L(), H("section", {
      class: Ze([[o.config.justifyContent], "sheetdb-form"])
    }, [
      o.completed === !1 && o.error === null ? (L(), H("div", {
        key: 0,
        class: Ze([o.config.width, o.config.background])
      }, [
        R("form", {
          onSubmit: ta(r, ["prevent"])
        }, [
          (L(!0), H(se, null, Bt(o.fields, (l) => (L(), H("div", {
            key: l.key
          }, [
            R("label", da, [
              _e(Vt(l.label) + " ", 1),
              l.required == 1 ? (L(), H("span", pa, "*")) : Ie("", !0)
            ]),
            l.type === "text" || l.type === "number" || l.type === "date" ? hn((L(), H("input", {
              key: 0,
              "onUpdate:modelValue": (a) => o.data[l.name] = a,
              class: "input",
              type: l.type,
              placeholder: l.placeholder,
              required: l.required == 1
            }, null, 8, ha)), [
              [Xc, o.data[l.name]]
            ]) : Ie("", !0),
            l.type === "dropdown" ? hn((L(), H("select", {
              key: 1,
              "onUpdate:modelValue": (a) => o.data[l.name] = a,
              class: "input form-dropdown",
              required: l.required == 1
            }, [
              (L(!0), H(se, null, Bt(l.options.split(","), (a) => (L(), H("option", {
                key: a,
                value: a
              }, Vt(a), 9, _a))), 128))
            ], 8, ma)), [
              [ts, o.data[l.name]]
            ]) : Ie("", !0)
          ]))), 128)),
          R("div", ga, [
            R("button", {
              class: Ze(["submit", { sending: o.sending }]),
              type: "submit",
              style: { "margin-right": "10px" }
            }, [
              R("span", {
                class: Ze({ "opacity-0": o.sending })
              }, Vt(o.config.submitLabel), 3),
              o.sending ? (L(), H("div", ba, Ea)) : Ie("", !0)
            ], 2),
            R("div", Na, [
              R("a", va, [
                _e("   "),
                te(It),
                _e(" SheetDB Forms ")
              ])
            ])
          ])
        ], 32)
      ], 2)) : Ie("", !0),
      o.error === null && o.completed === !0 ? (L(), H("div", Oa, Vt(o.config.successMessage), 1)) : Ie("", !0),
      o.error !== null ? (L(), H("div", wa, [
        o.error === 404 ? (L(), H("div", xa, [
          Va,
          R("div", Da, [
            R("a", Sa, [
              _e("   "),
              te(It),
              _e("   ")
            ])
          ])
        ])) : (L(), H("div", Ca, [
          $a,
          Ia,
          R("div", Ta, [
            R("a", Aa, [
              _e("   "),
              te(It),
              _e("   ")
            ])
          ])
        ]))
      ])) : Ie("", !0)
    ], 2));
  }
}, Fa = /* @__PURE__ */ Lo(Pa, [["styles", [fa]], ["__scopeId", "data-v-7402c36e"]]), Ma = {}, ja = {
  class: "stroke-current",
  viewBox: "0 0 44 44",
  stroke: "#000"
}, Ra = /* @__PURE__ */ Ji('<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>', 1), ka = [
  Ra
];
function Ua(e, t) {
  return L(), H("svg", ja, ka);
}
const La = /* @__PURE__ */ Lo(Ma, [["render", Ua]]), Ha = '*[data-v-321b15f2],*[data-v-321b15f2]:before,*[data-v-321b15f2]:after{box-sizing:border-box}.text-center[data-v-321b15f2]{text-align:center}.sheetdb-table[data-v-321b15f2]{width:100%}.loading[data-v-321b15f2]{padding:20px;width:100%;height:200px;display:flex;justify-content:center;align-items:center}.loading svg[data-v-321b15f2]{width:3rem;height:3rem;animation:spin-321b15f2 1s linear infinite}.table-scroll[data-v-321b15f2]{max-width:100%;overflow:auto}.table-scroll-max-screen[data-v-321b15f2]{max-height:80vh}.table[data-v-321b15f2]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-size:16px!important;width:100%;background:#fff;margin:0 0 12px;border:1px solid rgba(34,36,38,.15);box-shadow:none;border-radius:.28571429rem;text-align:left;color:#000000de;border-collapse:separate;border-spacing:0px}.table th[data-v-321b15f2],.table td[data-v-321b15f2]{cursor:auto;text-align:inherit;color:#000000de;padding:.6em .8em;vertical-align:inherit;font-style:none;font-weight:400;text-transform:none;border-bottom:1px solid rgba(34,36,38,.1);border-left:1px solid rgba(34,36,38,.1)}.table th[data-v-321b15f2]{background:#f9fafb;font-weight:700}.table th[data-v-321b15f2]:first-child,.table td[data-v-321b15f2]:first-child{border-left:none}.table th.sortable[data-v-321b15f2]{cursor:pointer}.table .sort_icon[data-v-321b15f2]{display:inline;color:#9ca3af;fill:currentColor}.made-by[data-v-321b15f2]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";color:#374151b3;font-size:.8em;text-align:right}.made-by a[data-v-321b15f2],.made-by a[data-v-321b15f2]:active,.made-by a[data-v-321b15f2]:visited{display:flex;justify-content:flex-end;align-items:center;text-decoration:none;color:#374151b3}.made-by.center a[data-v-321b15f2],.made-by.center a[data-v-321b15f2]:active,.made-by.center a[data-v-321b15f2]:visited{justify-content:center}.made-by a[data-v-321b15f2]:hover{color:#374151e6}.made-by svg[data-v-321b15f2]{margin:0 6px}.search-container[data-v-321b15f2]{display:flex;justify-content:flex-end;margin:0;padding:0}.search-container input[data-v-321b15f2]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";appearance:none!important;font-size:16px!important;display:block!important;border-radius:.375rem!important;background-color:#fff!important;padding:.5em .75em!important;-webkit-appearance:none!important;-moz-appearance:none!important;border:1px solid rgb(209,213,219)!important;width:100%!important;max-width:250px!important;margin-bottom:1em!important}@keyframes spin-321b15f2{0%{transform:rotate(0)}to{transform:rotate(360deg)}}', Bo = (e) => (Vi("data-v-321b15f2"), e = e(), Di(), e), Ba = {
  key: 0,
  class: "sheetdb-table"
}, Ka = {
  key: 0,
  class: "loading"
}, Wa = { key: 1 }, za = { class: "search-container" }, qa = ["placeholder"], Ja = { class: "table" }, Ga = ["textContent"], Ya = ["textContent"], Xa = { key: 0 }, Za = /* @__PURE__ */ Bo(() => /* @__PURE__ */ R("td", {
  colspan: "9999999",
  style: { "text-align": "center" }
}, "No results found", -1)), Qa = [
  Za
], eu = { class: "made-by" }, tu = { href: "#" }, ou = { key: 1 }, nu = {
  key: 0,
  class: "text-center"
}, ru = /* @__PURE__ */ Bo(() => /* @__PURE__ */ R("h2", null, "Whoops. This table has been deleted.", -1)), iu = { class: "made-by center" }, su = { href: "#" }, lu = {
  key: 1,
  class: "text-center"
}, cu = /* @__PURE__ */ Bo(() => /* @__PURE__ */ R("h2", null, "Whoops. Something went wrong.", -1)), au = /* @__PURE__ */ Bo(() => /* @__PURE__ */ R("p", { style: { "margin-bottom": "2em" } }, "Contact the owner or SheetDB team.", -1)), uu = { class: "made-by center" }, fu = { href: "#" }, du = {
  __name: "SheetDBTable.ce",
  props: {
    apiId: String,
    config: [Object, String]
  },
  setup(e) {
    const t = e, o = Qt({
      search: "",
      error: null,
      data: {},
      config: {
        searchPlaceholder: "Search ...",
        maxHeight: "screen"
      },
      loaded: !1
    });
    function n(i) {
      try {
        return JSON.parse(i), !0;
      } catch {
        return !1;
      }
    }
    zn(() => {
      let i = t.config;
      typeof i == "string" && n(i) && (i = JSON.parse(i)), o.config = {
        ...o.config,
        ...i
      }, fetch("https://sheetdb.io/api/v1/" + t.apiId).then((s) => {
        if (s.status == 400)
          o.error = 400;
        else if (!s.ok)
          o.error = 404;
        else
          return s.json();
      }).then((s) => {
        o.data = s, o.loaded = !0;
      }).catch(() => {
        o.error = 400;
      });
    });
    const r = Qi(() => o.data.filter(
      (i) => Object.values(i).some(
        (s) => s.toString().toLowerCase().includes(o.search.toLowerCase())
      )
    ));
    return (i, s) => (L(), H(se, null, [
      o.error === null ? (L(), H("section", Ba, [
        o.loaded === !1 ? (L(), H("div", Ka, [
          te(La)
        ])) : (L(), H("div", Wa, [
          R("div", za, [
            hn(R("input", {
              "onUpdate:modelValue": s[0] || (s[0] = (l) => o.search = l),
              class: "search",
              type: "text",
              placeholder: o.config.searchPlaceholder
            }, null, 8, qa), [
              [xn, o.search]
            ])
          ]),
          R("div", {
            class: Ze(["table-scroll", { "table-scroll-max-screen": o.config.maxHeight == "screen" }])
          }, [
            R("table", Ja, [
              R("thead", null, [
                R("tr", null, [
                  (L(!0), H(se, null, Bt(o.data[0], (l, a) => (L(), H("th", {
                    textContent: Vt(a),
                    key: a
                  }, null, 8, Ga))), 128))
                ])
              ]),
              R("tbody", null, [
                (L(!0), H(se, null, Bt(r.value, (l, a) => (L(), H("tr", { key: a }, [
                  (L(!0), H(se, null, Bt(l, (d, m) => (L(), H("td", {
                    key: m,
                    textContent: Vt(d)
                  }, null, 8, Ya))), 128))
                ]))), 128)),
                r.value.length === 0 ? (L(), H("tr", Xa, Qa)) : Ie("", !0)
              ])
            ]),
            R("div", eu, [
              R("a", tu, [
                _e("   "),
                te(It),
                _e("   ")
              ])
            ])
          ], 2)
        ]))
      ])) : Ie("", !0),
      o.error !== null ? (L(), H("div", ou, [
        o.error == 404 ? (L(), H("div", nu, [
          ru,
          R("div", iu, [
            R("a", su, [
              _e("   "),
              te(It),
              _e("   ")
            ])
          ])
        ])) : (L(), H("div", lu, [
          cu,
          au,
          R("div", uu, [
            R("a", fu, [
              _e("   "),
              te(It),
              _e("   ")
            ])
          ])
        ]))
      ])) : Ie("", !0)
    ], 64));
  }
}, pu = /* @__PURE__ */ Lo(du, [["styles", [Ha]], ["__scopeId", "data-v-321b15f2"]]);
customElements.define("sheetdb-form", /* @__PURE__ */ es(Fa));
customElements.define("sheetdb-table", /* @__PURE__ */ es(pu));