import {
  a as Ui,
  L as Vi,
  M as qi,
  H as Wi,
  B as zi,
} from "./components.9620909a.js";
import { _ as Ki, u as Gi, a as Yi } from "./composables.8e36d68c.js";
import { _ as Xt } from "./TextBlock.dac0ed1a.js";
import {
  l as be,
  R as gt,
  x as F,
  m as ve,
  J as U,
  E as de,
  o as D,
  c as se,
  w as O,
  S as Xi,
  d as g,
  a as P,
  b as te,
  t as Be,
  p as w,
  U as Qi,
  T as Ji,
  e as Qt,
  V as At,
  f as Q,
  W as xt,
  X as Zi,
  Y as es,
  Z as ts,
  $ as Ze,
  a0 as et,
  a1 as tt,
  u as Jt,
  B as is,
  C as bt,
  j as Zt,
  O as ss,
  D as Ce,
  A as re,
  q as ae,
  F as Fe,
  s as rt,
  a2 as ns,
  a3 as yt,
  h as as,
  a4 as os,
  a5 as rs,
  a6 as ls,
  H as ei,
  a7 as ti,
  z as ii,
  a8 as si,
  a9 as cs,
  aa as ni,
  L as us,
  ab as ds,
  k as hs,
  r as ms,
} from "./entry.741170f4.js";
import { S as ps } from "./split-type.57c98042.js";
import { b as vt, _ as ai, a as wt } from "./ButtonPill.d29bc1c7.js";
import { _ as oi } from "./Heading.8afb7efd.js";
import { _ as ri } from "./Socials.d0fecbc7.js";
import { u as Ke } from "./site-header.2c0f3e29.js";
import { _ as _t } from "./ButtonClose.9cced3df.js";
import { _ as fs } from "./ArtworkHeader.81262000.js";
import { _ as gs } from "./InView.86493ce9.js";
import { u as bs } from "./useSanityFetch.aa0c89aa.js";
import { D as ys } from "./constants.66f91b37.js";
import { h as it } from "./formatters.ccf1137f.js";
const vs = { class: "loader" },
  ws = { class: "loader__progress" },
  _s = { class: "loader__progress-svg" },
  ks = { class: "loader__svg-container" },
  Ts = g(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 340 343",
    },
    [
      g("defs", null, [
        g(
          "linearGradient",
          {
            id: "gradient-svg-loader-1",
            x1: "101.8375",
            y1: "272.2569",
            x2: "263.7415",
            y2: "114.6449",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "matrix(1 0 0 1 0 -1.2756)",
          },
          [
            g("stop", { offset: "0", style: { "stop-color": "#eaeaea" } }),
            g("stop", {
              offset: "1",
              style: { "stop-color": "#eaeaea", "stop-opacity": "0" },
            }),
          ]
        ),
        g(
          "linearGradient",
          {
            id: "gradient-svg-loader-2",
            x1: "238.1625",
            y1: "72.2942",
            x2: "76.2586",
            y2: "229.9062",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "matrix(1 0 0 1 0 -1.2756)",
          },
          [
            g("stop", { offset: "0", style: { "stop-color": "#eaeaea" } }),
            g("stop", {
              offset: "1",
              style: { "stop-color": "white", "stop-opacity": "0" },
            }),
          ]
        ),
      ]),
      g("path", {
        style: { stroke: "url(#gradient-svg-loader-1)", fill: "none" },
        d: "M170,1.5c45,0,88.1,17.9,119.9,49.6c31.8,31.8,49.6,74.9,49.6,119.9s-17.9,88.1-49.6,119.9c-31.8,31.8-74.9,49.6-119.9,49.6",
      }),
      g("path", {
        style: { stroke: "url(#gradient-svg-loader-2)", fill: "none" },
        d: "M170,340.5c-45,0-88.1-17.9-119.9-49.6S0.5,216,0.5,171S18.4,82.9,50.1,51.1C81.9,19.4,125,1.5,170,1.5",
      }),
    ],
    -1
  ),
  Ss = [Ts],
  Cs = g(
    "div",
    { class: "loader__progress-circles" },
    [
      g(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          viewBox: "0 0 340 343",
        },
        [
          g("circle", {
            cx: "170.501",
            cy: "340.503",
            r: "1.5",
            fill: "#ECECEE",
          }),
          g("circle", { cx: "169.502", cy: "1.5", r: "1.5", fill: "white" }),
        ]
      ),
    ],
    -1
  ),
  Es = { class: "loader__content" },
  As = {
    __name: "Loader",
    setup(e) {
      const i = be(),
        t = gt(),
        s = F(0),
        n = F(!1),
        o = F(null),
        a = F(null),
        r = F(null);
      function c({ progress: T }) {
        de.to(s, { value: T, duration: 1.2 });
      }
      function u() {
        n.value = !1;
      }
      function d(T) {
        switch (T) {
          case "index":
            return "main";
          default:
            return "gradients";
        }
      }
      function m(T = null, S = null, x = null) {
        if (S && x) {
          const C = d(x.name),
            f = d(S.name);
          if (C === f) return;
          U.emit("webgl_fake_set_scene", { sceneId: f, fromScene: C });
        } else {
          const C = T || d(t.currentRoute.value.name);
          U.emit("webgl_set_scene", { sceneId: "main" }),
            U.emit("webgl_fake_set_scene", { sceneId: C });
        }
      }
      t.afterEach((T, S, x) => {
        m(new URLSearchParams(window.location.search).get("scene"), T, S);
      });
      function h() {
        de.to(o.value, { autoAlpha: 1 }),
          de.to(r.value.lines, {
            y: 0,
            x: 0,
            stagger: 0.05,
            delay: 0.3,
            duration: 1.3,
            ease: "Quart.easeOut",
          }),
          de.to(r.value.lines, {
            autoAlpha: 1,
            stagger: 0.05,
            delay: 0.55,
            duration: 1.1,
            ease: "Quart.easeOut",
          });
      }
      function v() {
        de.delayedCall(1.1, () => {
          i.showUI = !0;
        });
      }
      return (
        ve(async () => {
          (n.value = !0),
            await t.isReady(),
            U.on("webgl_loading_progress", c),
            U.on("webgl_loaded", u),
            de.delayedCall(1.1, () => {
              m(new URLSearchParams(window.location.search).get("scene"));
            }),
            (r.value = new ps(o.value, { types: "lines" })),
            r.value.lines && h();
        }),
        (T, S) => {
          const x = Ki,
            C = Xt;
          return (
            D(),
            se(
              Ji,
              {
                name: "loader",
                duration: { enter: 0, leave: 2660 },
                onBeforeLeave: v,
              },
              {
                default: O(() => [
                  Xi(
                    g(
                      "div",
                      vs,
                      [
                        g("div", ws, [
                          P(x, { loader: !0 }),
                          g("div", _s, [
                            g("div", ks, [
                              g(
                                "div",
                                {
                                  ref_key: "svgEL",
                                  ref: a,
                                  class: "loader__progress-outlines",
                                },
                                Ss,
                                512
                              ),
                              Cs,
                            ]),
                          ]),
                        ]),
                        g("div", Es, [
                          P(
                            C,
                            { color: "white", size: "s" },
                            {
                              default: O(() => [
                                te(Be(Math.round(w(s))) + "% ", 1),
                              ]),
                              _: 1,
                            }
                          ),
                          g(
                            "p",
                            {
                              ref_key: "textEl",
                              ref: o,
                              class: "loader__text",
                            },
                            "Create. Discover. Display.",
                            512
                          ),
                        ]),
                      ],
                      512
                    ),
                    [[Qi, w(n)]]
                  ),
                ]),
                _: 1,
              }
            )
          );
        }
      );
    },
  };
const xs = {
    name: "WebGLContainer",
    data() {
      return { currentSceneId: "main" };
    },
    mounted() {
      this.$webglManager.init(this.$refs.canvas),
        this.rafStart(),
        this.addEvents();
    },
    onBeforeUnmount() {
      this.rafStop(), this.removeEvents();
    },
    beforeDestroy() {
      this.rafStop(), this.removeEvents();
    },
    methods: {
      rafStart() {
        this.$raf.subscribe(
          "canvas",
          this.$webglManager.render.bind(this.$webglManager)
        );
      },
      rafStop() {
        this.$raf.unsubscribe("canvas");
      },
      loadScene(e) {
        U.emit("webgl_loading_start");
        const i = this.$webglManager.getScene(e);
        i
          ? i.loaded
            ? ((this.currentSceneId = e),
              i.reset && i.reset(),
              this.$webglManager.activate(e),
              U.emit("webgl_loading_progress", { progress: 100 }),
              U.emit("webgl_loaded"),
              At.onLoaded())
            : this.$webglManager.loadScene(e).then(() => {
                (this.currentSceneId = e),
                  i.reset && i.reset(),
                  this.$webglManager.activate(e),
                  U.emit("webgl_loaded"),
                  At.onLoaded();
              })
          : console.error("WEBGL - Error, scene not found", e);
      },
      setScene({ sceneId: e }) {
        const i = this.$webglManager.getScene(this.currentSceneId);
        i && i.active && this.$webglManager.desactivate(this.currentSceneId),
          this.loadScene(e);
      },
      fakeSetScene({ sceneId: e }) {
        e !== "main"
          ? this.rafStop()
          : (this.rafStart(),
            this.$webglManager.resize(),
            setTimeout(() => {
              this.$webglManager.resize();
            }, 1200));
      },
      addEvents() {
        U.on("webgl_raf_start", this.rafStart),
          U.on("webgl_raf_stop", this.rafStop),
          U.on("webgl_set_scene", this.setScene),
          U.on("webgl_fake_set_scene", this.fakeSetScene);
      },
      removeEvents() {
        U.off("webgl_raf_start", this.rafStart),
          U.off("webgl_raf_stop", this.rafStop),
          U.off("webgl_set_scene", this.setScene),
          U.off("webgl_fake_set_scene", this.fakeSetScene);
      },
    },
  },
  Ps = { ref: "canvas", class: "webgl-container" };
function Ms(e, i, t, s, n, o) {
  return D(), Q("div", Ps, null, 512);
}
const Ns = Qt(xs, [["render", Ms]]);
globalThis && globalThis.__awaiter;
function $s(e, i, t) {
  const s = Pt(e, e.VERTEX_SHADER, i),
    n = Pt(e, e.FRAGMENT_SHADER, t),
    o = e.createProgram();
  return (
    e.attachShader(o, s),
    e.attachShader(o, n),
    e.linkProgram(o),
    e.getProgramParameter(o, e.LINK_STATUS)
      ? o
      : (alert(
          "Unable to initialize the shader program: " + e.getProgramInfoLog(o)
        ),
        null)
  );
}
function Pt(e, i, t) {
  const s = e.createShader(i);
  return (
    e.shaderSource(s, t),
    e.compileShader(s),
    e.getShaderParameter(s, e.COMPILE_STATUS)
      ? s
      : (alert(
          "An error occurred compiling the shaders: " + e.getShaderInfoLog(s)
        ),
        e.deleteShader(s),
        null)
  );
}
function Ls(e, i = 1) {
  i = i || 1;
  const t = (e.clientWidth * i) | 0,
    s = (e.clientHeight * i) | 0;
  return e.width !== t || e.height !== s
    ? ((e.width = t), (e.height = s), !0)
    : !1;
}
class Is {
  constructor(i, t = { powerPreference: "high-performance" }) {
    if (
      ((this.draw = (s, n, o) => {
        Ls(this.canvas, window.devicePixelRatio),
          this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height),
          this.gl.clearColor(0, 0, 0, 1),
          this.gl.clearDepth(1),
          this.gl.enable(this.gl.DEPTH_TEST),
          this.gl.depthFunc(this.gl.LEQUAL),
          this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        for (const a of s) {
          if (!a.readyToRender) return;
          this.gl.useProgram(a.program),
            a.static || a.calcMatrixes(this.gl),
            a.getAttributesFromBuffers(this.gl),
            a.draw(this.gl, this.gl.TRIANGLES, n, o);
        }
      }),
      (this.canvas = i),
      (this.gl = this.canvas.getContext("webgl", t)),
      (this.dpr = Math.min(window.devicePixelRatio, 2)),
      !this.gl)
    ) {
      alert(
        "Unable to initialize WebGL. Your browser or machine may not support it."
      );
      return;
    }
  }
}
class Fs {
  constructor({ shaders: i, name: t, locationNames: s, parameters: n, gl: o }) {
    (this.static = !1),
      (this.addOnDrawCallback = (a) => {
        this.onDrawCallbacks.push(a);
      }),
      (this.loadTexture = (a, r) =>
        new Promise((c) => {
          const u = a.createTexture(),
            d = new Image();
          (d.src = r),
            (d.onload = () => {
              a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, 1),
                a.activeTexture(a.TEXTURE0),
                a.bindTexture(a.TEXTURE_2D, u),
                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR),
                a.texImage2D(a.TEXTURE_2D, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, d),
                a.generateMipmap(a.TEXTURE_2D),
                a.useProgram(this.program),
                a.uniform1i(this.locations.uniforms.texture, 0),
                c();
            });
        })),
      (this.calcMatrixes = (a) => {
        this.projectionMatrix = xt();
        {
          const r = a.canvas,
            c = (45 * Math.PI) / 180,
            u = r.clientWidth / r.clientHeight,
            d = 0.1,
            m = 100;
          Zi(this.projectionMatrix, c, u, d, m);
        }
        (this.modelMatrix = xt()),
          es(this.modelMatrix, this.modelMatrix, [
            this.scale[0],
            this.scale[1],
            this.scale[2],
          ]),
          ts(this.modelMatrix, this.modelMatrix, [
            this.position[0],
            this.position[1],
            this.position[2],
          ]),
          Ze(this.modelMatrix, this.modelMatrix, this.rotation[0], [1, 0, 0]),
          Ze(this.modelMatrix, this.modelMatrix, this.rotation[1], [0, 1, 0]),
          Ze(this.modelMatrix, this.modelMatrix, this.rotation[2], [0, 0, 1]),
          a.uniformMatrix4fv(
            this.locations.uniforms.uProjectionMatrix,
            !1,
            this.projectionMatrix
          ),
          a.uniformMatrix4fv(
            this.locations.uniforms.uModelMatrix,
            !1,
            this.modelMatrix
          );
      }),
      (this.getAttributesFromBuffers = (a) => {
        const {
          positions: r,
          indices: c,
          colors: u,
          uvs: d,
          normals: m,
        } = this.buffers;
        if (r && this.locations.attributes.aPosition > -1) {
          a.bindBuffer(a.ARRAY_BUFFER, this.buffers.positions);
          const h = this.locations.attributes.aPosition,
            v = 3,
            T = a.FLOAT,
            S = !1,
            x = 0,
            C = 0;
          a.vertexAttribPointer(h, v, T, S, x, C), a.enableVertexAttribArray(h);
        }
        if (d && this.locations.attributes.aUv > -1) {
          a.bindBuffer(a.ARRAY_BUFFER, this.buffers.uvs);
          const h = this.locations.attributes.aUv,
            v = 2,
            T = a.FLOAT,
            S = !1,
            x = 0,
            C = 0;
          a.enableVertexAttribArray(h), a.vertexAttribPointer(h, v, T, S, x, C);
        }
        if (u && this.locations.attributes.aColor > -1) {
          const h = this.locations.attributes.aColor,
            v = 4,
            T = a.FLOAT,
            S = !1,
            x = 0,
            C = 0;
          a.bindBuffer(a.ARRAY_BUFFER, this.buffers.colors),
            a.vertexAttribPointer(h, v, T, S, x, C),
            a.enableVertexAttribArray(h);
        }
        if (m && this.locations.attributes.aNormal > -1) {
          const h = this.locations.attributes.aNormal,
            v = 3,
            T = a.FLOAT,
            S = !1,
            x = 0,
            C = 0;
          a.bindBuffer(a.ARRAY_BUFFER, this.buffers.normals),
            a.vertexAttribPointer(h, v, T, S, x, C),
            a.enableVertexAttribArray(h);
        }
        c && a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.buffers.indices);
      }),
      (this.setBuffers = (a) => {
        const {
          positions: r,
          indices: c,
          colors: u,
          uvs: d,
          normals: m,
        } = this.geometry;
        if (
          (r && this.setBuffer(a, "positions"),
          u && this.setBuffer(a, "colors"),
          d && this.setBuffer(a, "uvs"),
          m && this.setBuffer(a, "normals"),
          c)
        ) {
          const h = a.createBuffer();
          a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, h),
            a.bufferData(a.ELEMENT_ARRAY_BUFFER, c, a.STATIC_DRAW),
            (this.buffers.indices = h);
        }
      }),
      (this.setBuffer = (a, r) => {
        const c = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, c),
          a.bufferData(a.ARRAY_BUFFER, this.geometry[r], a.STATIC_DRAW),
          (this.buffers[r] = c);
      }),
      (this.draw = (a, r, c, u) => {
        if (
          typeof this.geometry.indices < "u" &&
          this.geometry.indices.length &&
          this.geometry.positions
        ) {
          const d =
              this.geometry.positions.length /
              (this.geometry.positions.length / this.geometry.indices.length),
            m = a.UNSIGNED_SHORT,
            h = 0;
          a.drawElements(r, d, m, h);
        } else if (this.geometry.positions) {
          a.bindBuffer(a.ARRAY_BUFFER, this.buffers.positions),
            a.enableVertexAttribArray(this.locations.attributes.aPosition);
          {
            const m = a.FLOAT,
              h = !1,
              v = 0,
              T = 0;
            a.vertexAttribPointer(
              this.locations.attributes.aPosition,
              3,
              m,
              h,
              v,
              T
            );
          }
          {
            const d = a.TRIANGLES,
              m = 0,
              h = this.geometry.positions.length / 3;
            a.drawArrays(d, m, h);
          }
        }
        for (const d of this.onDrawCallbacks) d(this, c, u);
      }),
      (this.geometry = {}),
      (this.buffers = {}),
      (this.locations = { attributes: {}, uniforms: {} }),
      (this.readyToRender = !0),
      (this.onDrawCallbacks = []),
      (this.program = $s(o, i[0], i[1]));
    for (const a of s.attributes)
      this.locations.attributes[a] = o.getAttribLocation(this.program, a);
    for (const a of s.uniforms)
      this.locations.uniforms[a] = o.getUniformLocation(this.program, a);
    (this.position = et(0, 0, 0)),
      (this.rotation = et(0, 0, 0)),
      (this.scale = et(1, 1, 1)),
      n &&
        (n.position &&
          tt(this.position, n.position.x, n.position.y, n.position.z),
        n.rotation &&
          tt(this.rotation, n.rotation.x, n.rotation.y, n.rotation.z),
        n.scale && tt(this.scale, n.scale.x, n.scale.y, n.scale.z)),
      t ? (this.name = t) : (this.name = "");
  }
}
class Os extends Fs {
  constructor({ shaders: i, locationNames: t, gl: s, parameters: n, name: o }) {
    super({ shaders: i, locationNames: t, gl: s, parameters: n, name: o }),
      (this.geometry = {
        positions: new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]),
        normals: new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
        indices: new Uint16Array([0, 1, 2, 0, 2, 3]),
        uvs: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
      }),
      this.setBuffers(s);
  }
}
const Mt = [];
let Nt = 0,
  $t = 0;
const Rs = {
    name: "LightWebGLContainer",
    data() {
      return { rafID: null, renderer: null };
    },
    mounted() {
      this.init(), this.addEvents();
    },
    beforeDestroy() {
      this.rafStop(), this.removeEvents();
    },
    methods: {
      init() {
        this.renderer = new Is(this.$refs.canvas);
        const { gl: e, draw: i, canvas: t, dpr: s } = this.renderer,
          n = `
        attribute vec4 aPosition;
        attribute vec2 aUv;

        varying vec2 vUv;
        
        void main(void) {
            vUv = aUv;
            gl_Position = aPosition;
        }
    `,
          o = `
        precision highp float; 

        varying vec2 vUv;

        uniform float uTime;
        uniform vec2 uResolution;

        mat2 Rot(float a)
        {
            float s = sin(a);
            float c = cos(a);
            return mat2(c, -s, s, c);
        }

        // Created by inigo quilez - iq/2014
        // License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
        vec2 hash( vec2 p )
        {
            p = vec2( dot(p,vec2(2127.1,81.17)), dot(p,vec2(1269.5,283.37)) );
            return fract(sin(p)*43758.5453);
        }

        float noise( in vec2 p )
        {
            vec2 i = floor( p );
            vec2 f = fract( p );
                
            vec2 u = f*f*(3.0-2.0*f);

            float n = mix( mix( dot( -1.0+2.0*hash( i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ), 
                                    dot( -1.0+2.0*hash( i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                            mix( dot( -1.0+2.0*hash( i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ), 
                                    dot( -1.0+2.0*hash( i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
            return 0.5 + 0.5*n;
        }

        vec3 exposure(vec3 color, float value) {
            return (1.0 + value) * color;
        }

        vec3 czm_saturation(vec3 rgb, float adjustment) {
            const vec3 W = vec3(0.2125, 0.7154, 0.0721);
            vec3 intensity = vec3(dot(rgb, W));
            return mix(intensity, rgb, adjustment);
        }

        void main() { 
            float uSaturation = 1.;
            float uExposure = 0.06;
            float uFloorMaskScale = 0.;
        
            vec3 uColor1 = vec3(0.9803921568627451,0.9568627450980393,0.9411764705882353);
            vec3 uColor2 = vec3(0.8745098039215686, 0.8784313725490196, 0.9019607843137255);
            vec3 uColor3 = vec3(0.8745098039215686, 0.8784313725490196, 0.9019607843137255);
            vec3 uColor4 = vec3(0.9098039215686274, 0.9137254901960784, 0.9294117647058824);

            vec2 uv = gl_FragCoord.xy/uResolution.xy;
            float ratio = uResolution.x / uResolution.y;

            vec2 tuv = uv - .5;
            // rotate with Noise
            float degree = noise(vec2(uTime*.1, tuv.x*tuv.y));
            tuv.y *= 1./ratio;
            tuv *= Rot(radians((degree-.5)*720.+180.));
            tuv.y *= ratio;

            // Wave warp with sin
            float frequency = 5.;
            float amplitude = 30.;
            float speed = uTime * 2.33;
            tuv.x += sin(tuv.y*frequency+speed)/amplitude;
            tuv.y += sin(tuv.x*frequency*1.5+speed)/(amplitude*.5);

            // draw the image
            vec3 layer1 = mix(uColor1, uColor2, smoothstep(-.3, .2, (tuv*Rot(radians(-5.))).x));
            vec3 layer2 = mix(uColor3, uColor4, smoothstep(-.3, .2, (tuv*Rot(radians(-5.))).x));

            vec3 finalGradientComp = mix(layer1, layer2, smoothstep(.5, -.3, tuv.y));
            
            // mask on bottom of the screen to simulate a cylinder
            float maskFactor = smoothstep(0., .4, (uv.y + .1) - (sin(uv.x * 3.1415) * uFloorMaskScale));
            vec3 finalComp = mix(vec3(1.), finalGradientComp, maskFactor);

            finalComp = czm_saturation(finalComp, uSaturation);
            finalComp = exposure(finalComp, uExposure);

            vec3 col = finalComp;

            // Output to screen
            gl_FragColor = vec4(col, 1.0);

            // outColor.rgb = vec3(vUv, 1.);
            // outColor.rgb = vec3(maskFactor);
        } 
    `,
          a = new Os({
            name: "Plane",
            shaders: [n, o],
            locationNames: {
              attributes: ["aPosition", "aUv"],
              uniforms: ["uTime", "uResolution"],
            },
            parameters: {},
            gl: e,
          });
        a.static = !0;
        const r = (c, u, d) => {
          e.uniform1f(c.locations.uniforms.uTime, d),
            e.uniform2f(
              c.locations.uniforms.uResolution,
              t.offsetWidth * s,
              t.offsetHeight * s
            );
        };
        a.addOnDrawCallback(r), Mt.push(a);
      },
      update(e) {
        e *= 0.001;
        const i = e - Nt;
        (Nt = e),
          ($t += i),
          this.renderer.draw(Mt, i, $t),
          requestAnimationFrame(this.update);
      },
      rafStart() {
        this.rafId = requestAnimationFrame(this.update);
      },
      rafStop() {
        cancelAnimationFrame(this.rafId);
      },
      fakeSetScene({ sceneId: e }) {
        e === "main"
          ? (setTimeout(() => {
              this.$refs.canvas && (this.$refs.canvas.style.display = "none");
            }, 1e3),
            this.rafStop())
          : (this.$refs.canvas && (this.$refs.canvas.style.display = "block"),
            setTimeout(() => {
              this.rafStart();
            }, 1e3));
      },
      addEvents() {
        U.on("webgl_raf_start", this.rafStart),
          U.on("webgl_raf_stop", this.rafStop),
          U.on("webgl_fake_set_scene", this.fakeSetScene);
      },
      removeEvents() {
        U.off("webgl_raf_start", this.rafStart),
          U.off("webgl_raf_stop", this.rafStop),
          U.off("webgl_fake_set_scene", this.fakeSetScene);
      },
    },
  },
  Ds = { ref: "canvas", class: "light-webgl-container" };
function Bs(e, i, t, s, n, o) {
  return D(), Q("canvas", Ds, null, 512);
}
const js = Qt(Rs, [["render", Bs]]);
const Hs = { class: "site-menu" },
  Us = { class: "site-menu__nav" },
  Vs = { class: "site-menu__scroller" },
  qs = g("div", { class: "site-menu__circles" }, null, -1),
  Ws = { class: "site-menu__nav-list-item" },
  zs = g("b", null, "Home", -1),
  Ks = { class: "site-menu__nav-list-item" },
  Gs = g("b", null, "About", -1),
  Ys = { key: 0, class: "site-menu__nav-list-item" },
  Xs = ["href"],
  Qs = g("b", null, "Features", -1),
  Js = [Qs],
  Zs = { class: "site-menu__nav-list-item" },
  en = g("b", null, "Interface", -1),
  Zs1 = { class: "site-menu__nav-list-item" },
  en1 = g("b", null, "Roadmap", -1),
  Zs2 = { class: "site-menu__nav-list-item" },
  en2 = g("b", null, "Tokenomics", -1),

  tn = { class: "site-menu__nav-list-item" },
  sn = { class: "site-menu__nav-sublist-nav" },
  nn = { class: "site-menu__secondary" },
  an = { class: "site-menu__secondary-nav" },
  on = { class: "site-menu__secondary-nav-item" },
  rn = { class: "site-menu__secondary-nav-item" },
  ln = {
    __name: "SiteMenu",
    setup(e) {
      const i = Jt(),
        t = Ke(),
        s = be(),
        { menuIsOpen: n } = is(t),
        o = F(!1),
        a = F(!1),
        r = gt(),
        c = bt(() => r.currentRoute.value.fullPath),
        u = Zt`*[_type == "vaults" && show_in_menu]{
  slug,
  title,
  show_in_menu,
}`,
        d = ss(u).data;
      function m() {
        (o.value = !o.value), (a.value = !a.value);
      }
      return (
        Ce(
          i,
          (h) => {
            t.menuIsOpen = !1;
          },
          { deep: !0, immediate: !0 }
        ),
        Ce(n, (h) => {
          h === !1 && ((o.value = !1), (a.value = !1));
        }),
        (h, v) => {
          var f;
          const T = vt,
            S = oi,
            x = ai,
            C = ri;
          return (
            D(),
            Q("div", Hs, [
              g("nav", Us, [
                g("div", Vs, [
                  qs,
                  g(
                    "ul",
                    {
                      class: re([
                        "site-menu__nav-list",
                        w(o) ? "hide" : "show",
                      ]),
                    },
                    [
                      g("li", Ws, [
                        P(
                          S,
                          { level: 3, tag: "p" },
                          {
                            default: O(() => [
                              P(
                                T,
                                { to: "/" },
                                { default: O(() => [zs]), _: 1 }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      g("li", Ks, [
                        P(
                          S,
                          { level: 3, tag: "p" },
                          {
                            default: O(() => [
                              P(
                                T,
                                { to: "/about" },
                                { default: O(() => [Gs]), _: 1 }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      (f = w(s).globals) != null && f.launchViewerLink
                        ? (D(),
                          Q("li", Ys, [
                            P(
                              S,
                              { level: 3, tag: "p" },
                                    
                                {
                                    default: O(() => [
                                    P(
                                        T,
                                        { to: "#features" },
                                        { default: O(() => [Qs]), _: 1 }
                                    ),
                                    ]),
                                    _: 1,
                                }
                            ),
                          ]))
                        : ae("", !0),
                      g("li", Zs, [
                        P(
                          S,
                          { level: 3, tag: "p" },
                          {
                            default: O(() => [
                              P(
                                T,
                                { to: "#interface" },
                                { default: O(() => [en]), _: 1 }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),

                      g("li", Zs1, [
                        P(
                          S,
                          { level: 3, tag: "p" },
                          {
                            default: O(() => [
                              P(
                                T,
                                { to: "#roadmap" },
                                { default: O(() => [en1]), _: 1 }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),

                      g("li", Zs2, [
                        P(
                          S,
                          { level: 3, tag: "p" },
                          {
                            default: O(() => [
                              P(
                                T,
                                { to: "#tokenomics" },
                                { default: O(() => [en2]), _: 1 }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),

                      g("li", tn, [
                        g(
                          "button",
                          {
                            type: "button",
                            "aria-controls": "vaults-submenu",
                            "aria-expanded": "false",
                            class: re([
                              "site-menu__button-submenu",
                              { active: w(a) || w(c).includes("vaults") },
                            ]),
                            onClick: m,
                          },
                          [
                            P(
                              S,
                              { level: 3, tag: "p" },
                              {
                                default: O(() => [
                                  g("b", null, [
                                    te("Vaults "),
                                    P(x, {
                                      name: "chevron-down",
                                      width: 9,
                                      height: 6,
                                    }),
                                  ]),
                                ]),
                                _: 1,
                              }
                            ),
                          ],
                          2
                        ),
                        g(
                          "div",
                          {
                            id: "vaults-submenu",
                            class: re([
                              "site-menu__nav-sublist",
                              w(a) ? "show" : "hide",
                            ]),
                          },
                          [
                            g("ul", sn, [
                              (D(!0),
                              Q(
                                Fe,
                                null,
                                rt(
                                  w(d),
                                  (M) => (
                                    D(),
                                    Q(
                                      "li",
                                      {
                                        key: `MenuVault-${M.slug.current}`,
                                        class:
                                          "site-menu__nav-sublist-nav-item",
                                      },
                                      [
                                        P(
                                          S,
                                          { level: 4, tag: "p" },
                                          {
                                            default: O(() => [
                                              P(
                                                T,
                                                {
                                                  to: `/vaults/${M.slug.current}`,
                                                },
                                                {
                                                  default: O(() => [
                                                    g(
                                                      "b",
                                                      null,
                                                      Be(M.title),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                ["to"]
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1024
                                        ),
                                      ]
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                          ],
                          2
                        ),
                      ]),
                    ],
                    2
                  ),
                  g("div", nn, [
                    g("ul", an, [
                      g("li", on, [
                        P(
                          T,
                          { to: "/privacy-policy", class: "eyebrow" },
                          { default: O(() => [te("Privacy policy")]), _: 1 }
                        ),
                      ]),
                      g("li", rn, [
                        P(
                          T,
                          { to: "/terms-and-conditions", class: "eyebrow" },
                          { default: O(() => [te("Terms & conditions")]), _: 1 }
                        ),
                      ]),
                    ]),
                    P(C),
                  ]),
                ]),
              ]),
            ])
          );
        }
      );
    },
  };
const cn = ["onSubmit"],
  un = g(
    "div",
    { style: { position: "absolute", left: "-5000px" }, "aria-hidden": "true" },
    [
      g("input", {
        type: "text",
        name: "b_0358500e0ffe842151dda1d60_20e05ceb07",
        tabindex: "-1",
        value: "",
      }),
    ],
    -1
  ),
  dn = {
    key: 1,
    class: "waitlist-form__feedback waitlist-form__feedback--success",
  },
  hn = {
    key: 2,
    class: "waitlist-form__feedback waitlist-form__feedback--load",
  },
  mn = {
    __name: "WaitlistForm",
    setup(e) {
      const i = F(null),
        t = F(null),
        s = F(null),
        n = F(!1),
        o = F(null),
        a = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/;
      function r(u) {
        o.value = u.target.value;
      }
      async function c() {
        if (!n.value)
          if (o.value.match(a)) {
            (i.value = null),
              (s.value = null),
              (t.value = null),
              (n.value = !0);
            const u = await $fetch(`/api/mailchimpSubmit?email=${o.value}`);
            u.error
              ? ((i.value = u.message), (t.value = u.code))
              : (s.value = u.message),
              (n.value = !1);
          } else
            (i.value = "Your email address looks incorrect, please verify."),
              (t.value = 400),
              (s.value = null),
              (n.value = !1);
      }
      return (u, d) => {
        const m = wt;
        return (
          D(),
          Q(
            "form",
            {
              action:
                "https://xyz.us9.list-manage.com/subscribe/post?u=0358500e0ffe842151dda1d60&id=20e05ceb07&f_id=00db11e1f0",
              method: "post",
              name: "mc-embedded-subscribe-form",
              class: "waitlist-form validate",
              target: "_blank",
              novalidate: "",
              onSubmit: ns(c, ["prevent"]),
            },
            [
              g(
                "input",
                {
                  type: "email",
                  name: "EMAIL",
                  placeholder: "Your Email Address",
                  onInput: r,
                },
                null,
                32
              ),
              un,
              w(i)
                ? (D(),
                  Q(
                    "div",
                    {
                      key: 0,
                      class: re([
                        "waitlist-form__feedback waitlist-form__feedback--error",
                        `waitlist-form__feedback--${w(t)}`,
                      ]),
                    },
                    Be(w(i)),
                    3
                  ))
                : ae("", !0),
              w(s) ? (D(), Q("div", dn, Be(w(s)), 1)) : ae("", !0),
              w(n) ? (D(), Q("div", hn, " Loading… ")) : ae("", !0),
              P(
                m,
                { id: "mc-embedded-subscribe", type: "submit", disabled: w(n) },
                { default: O(() => [te("Submit")]), _: 1 },
                8,
                ["disabled"]
              ),
            ],
            40,
            cn
          )
        );
      };
    },
  };
const pn = { class: "join-the-waitlist" },
  fn = g("p", { class: "join-the-waitlist__title" }, "Join the waitlist", -1),
  gn = g(
    "p",
    { class: "join-the-waitlist__footer" },
    [
      g(
        "a",
        {
          class: "eyebrow join-the-waitlist__footer-link",
          href: "https://xyz.us9.list-manage.com/unsubscribe?u=0358500e0ffe842151dda1d60&id=20e05ceb07",
          target: "_blank",
        },
        " Unsubscribe"
      ),
    ],
    -1
  ),
  bn = {
    __name: "JoinTheWaitlist",
    setup(e) {
      const i = Ke();
      function t() {
        i.waitlistIsOpen = !1;
      }
      return (s, n) => {
        const o = _t,
          a = Xt,
          r = mn;
        return (
          D(),
          Q("div", pn, [
            P(
              o,
              {
                label: "Close the waitlist modal",
                color: "grey",
                onClick: t,
                onKeydown: yt(t, ["esc"]),
              },
              null,
              8,
              ["onKeydown"]
            ),
            fn,
            P(
              a,
              { size: "s", color: "grey" },
              {
                default: O(() => [
                  te(
                    " Be the first to build your Cortex and test out new features. "
                  ),
                ]),
                _: 1,
              }
            ),
            P(r),
            gn,
          ])
        );
      };
    },
  };
function y(e, i, t) {
  return (
    (i = vn(i)) in e
      ? Object.defineProperty(e, i, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[i] = t),
    e
  );
}
function yn(e, i) {
  if (typeof e != "object" || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var s = t.call(e, i || "default");
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(e);
}
function vn(e) {
  var i = yn(e, "string");
  return typeof i == "symbol" ? i : String(i);
}
function wn(e, i) {
  if (!(e instanceof i))
    throw new TypeError("Cannot call a class as a function");
}
function Lt(e, i) {
  for (var t = 0; t < i.length; t++) {
    var s = i[t];
    (s.enumerable = s.enumerable || !1),
      (s.configurable = !0),
      "value" in s && (s.writable = !0),
      Object.defineProperty(e, s.key, s);
  }
}
function _n(e, i, t) {
  return i && Lt(e.prototype, i), t && Lt(e, t), e;
}
function kn(e, i, t) {
  return (
    i in e
      ? Object.defineProperty(e, i, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[i] = t),
    e
  );
}
function It(e, i) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    i &&
      (s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, s);
  }
  return t;
}
function Ft(e) {
  for (var i = 1; i < arguments.length; i++) {
    var t = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? It(Object(t), !0).forEach(function (s) {
          kn(e, s, t[s]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : It(Object(t)).forEach(function (s) {
          Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
        });
  }
  return e;
}
var Ot = { addCSS: !0, thumbWidth: 15, watch: !0 };
function Tn(e, i) {
  return function () {
    return Array.from(document.querySelectorAll(i)).includes(this);
  }.call(e, i);
}
function Sn(e, i) {
  if (e && i) {
    var t = new Event(i, { bubbles: !0 });
    e.dispatchEvent(t);
  }
}
var Me = function (e) {
    return e != null ? e.constructor : null;
  },
  kt = function (e, i) {
    return !!(e && i && e instanceof i);
  },
  li = function (e) {
    return e == null;
  },
  ci = function (e) {
    return Me(e) === Object;
  },
  Cn = function (e) {
    return Me(e) === Number && !Number.isNaN(e);
  },
  ui = function (e) {
    return Me(e) === String;
  },
  En = function (e) {
    return Me(e) === Boolean;
  },
  An = function (e) {
    return Me(e) === Function;
  },
  di = function (e) {
    return Array.isArray(e);
  },
  hi = function (e) {
    return kt(e, NodeList);
  },
  xn = function (e) {
    return kt(e, Element);
  },
  Pn = function (e) {
    return kt(e, Event);
  },
  Mn = function (e) {
    return (
      li(e) ||
      ((ui(e) || di(e) || hi(e)) && !e.length) ||
      (ci(e) && !Object.keys(e).length)
    );
  },
  J = {
    nullOrUndefined: li,
    object: ci,
    number: Cn,
    string: ui,
    boolean: En,
    function: An,
    array: di,
    nodeList: hi,
    element: xn,
    event: Pn,
    empty: Mn,
  };
function Nn(e) {
  var i = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return i ? Math.max(0, (i[1] ? i[1].length : 0) - (i[2] ? +i[2] : 0)) : 0;
}
function $n(e, i) {
  if (1 > i) {
    var t = Nn(i);
    return parseFloat(e.toFixed(t));
  }
  return Math.round(e / i) * i;
}
var Ln = (function () {
  function e(i, t) {
    wn(this, e),
      J.element(i)
        ? (this.element = i)
        : J.string(i) && (this.element = document.querySelector(i)),
      J.element(this.element) &&
        J.empty(this.element.rangeTouch) &&
        ((this.config = Ft({}, Ot, {}, t)), this.init());
  }
  return (
    _n(
      e,
      [
        {
          key: "init",
          value: function () {
            e.enabled &&
              (this.config.addCSS &&
                ((this.element.style.userSelect = "none"),
                (this.element.style.webKitUserSelect = "none"),
                (this.element.style.touchAction = "manipulation")),
              this.listeners(!0),
              (this.element.rangeTouch = this));
          },
        },
        {
          key: "destroy",
          value: function () {
            e.enabled &&
              (this.config.addCSS &&
                ((this.element.style.userSelect = ""),
                (this.element.style.webKitUserSelect = ""),
                (this.element.style.touchAction = "")),
              this.listeners(!1),
              (this.element.rangeTouch = null));
          },
        },
        {
          key: "listeners",
          value: function (i) {
            var t = this,
              s = i ? "addEventListener" : "removeEventListener";
            ["touchstart", "touchmove", "touchend"].forEach(function (n) {
              t.element[s](
                n,
                function (o) {
                  return t.set(o);
                },
                !1
              );
            });
          },
        },
        {
          key: "get",
          value: function (i) {
            if (!e.enabled || !J.event(i)) return null;
            var t,
              s = i.target,
              n = i.changedTouches[0],
              o = parseFloat(s.getAttribute("min")) || 0,
              a = parseFloat(s.getAttribute("max")) || 100,
              r = parseFloat(s.getAttribute("step")) || 1,
              c = s.getBoundingClientRect(),
              u = ((100 / c.width) * (this.config.thumbWidth / 2)) / 100;
            return (
              0 > (t = (100 / c.width) * (n.clientX - c.left))
                ? (t = 0)
                : 100 < t && (t = 100),
              50 > t
                ? (t -= (100 - 2 * t) * u)
                : 50 < t && (t += 2 * (t - 50) * u),
              o + $n((t / 100) * (a - o), r)
            );
          },
        },
        {
          key: "set",
          value: function (i) {
            e.enabled &&
              J.event(i) &&
              !i.target.disabled &&
              (i.preventDefault(),
              (i.target.value = this.get(i)),
              Sn(i.target, i.type === "touchend" ? "change" : "input"));
          },
        },
      ],
      [
        {
          key: "setup",
          value: function (i) {
            var t =
                1 < arguments.length && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              s = null;
            if (
              (J.empty(i) || J.string(i)
                ? (s = Array.from(
                    document.querySelectorAll(
                      J.string(i) ? i : 'input[type="range"]'
                    )
                  ))
                : J.element(i)
                ? (s = [i])
                : J.nodeList(i)
                ? (s = Array.from(i))
                : J.array(i) && (s = i.filter(J.element)),
              J.empty(s))
            )
              return null;
            var n = Ft({}, Ot, {}, t);
            if (J.string(i) && n.watch) {
              var o = new MutationObserver(function (a) {
                Array.from(a).forEach(function (r) {
                  Array.from(r.addedNodes).forEach(function (c) {
                    J.element(c) && Tn(c, i) && new e(c, n);
                  });
                });
              });
              o.observe(document.body, { childList: !0, subtree: !0 });
            }
            return s.map(function (a) {
              return new e(a, t);
            });
          },
        },
        {
          key: "enabled",
          get: function () {
            return "ontouchstart" in document.documentElement;
          },
        },
      ]
    ),
    e
  );
})();
const Ne = (e) => (e != null ? e.constructor : null),
  ce = (e, i) => !!(e && i && e instanceof i),
  Tt = (e) => e == null,
  mi = (e) => Ne(e) === Object,
  In = (e) => Ne(e) === Number && !Number.isNaN(e),
  Ge = (e) => Ne(e) === String,
  Fn = (e) => Ne(e) === Boolean,
  pi = (e) => typeof e == "function",
  fi = (e) => Array.isArray(e),
  On = (e) => ce(e, WeakMap),
  gi = (e) => ce(e, NodeList),
  Rn = (e) => Ne(e) === Text,
  Dn = (e) => ce(e, Event),
  Bn = (e) => ce(e, KeyboardEvent),
  jn = (e) => ce(e, window.TextTrackCue) || ce(e, window.VTTCue),
  Hn = (e) => ce(e, TextTrack) || (!Tt(e) && Ge(e.kind)),
  Un = (e) => ce(e, Promise) && pi(e.then),
  Vn = (e) =>
    e !== null &&
    typeof e == "object" &&
    e.nodeType === 1 &&
    typeof e.style == "object" &&
    typeof e.ownerDocument == "object",
  bi = (e) =>
    Tt(e) ||
    ((Ge(e) || fi(e) || gi(e)) && !e.length) ||
    (mi(e) && !Object.keys(e).length),
  qn = (e) => {
    if (ce(e, window.URL)) return !0;
    if (!Ge(e)) return !1;
    let i = e;
    (e.startsWith("http://") && e.startsWith("https://")) ||
      (i = `http://${e}`);
    try {
      return !bi(new URL(i).hostname);
    } catch {
      return !1;
    }
  };
var l = {
  nullOrUndefined: Tt,
  object: mi,
  number: In,
  string: Ge,
  boolean: Fn,
  function: pi,
  array: fi,
  weakMap: On,
  nodeList: gi,
  element: Vn,
  textNode: Rn,
  event: Dn,
  keyboardEvent: Bn,
  cue: jn,
  track: Hn,
  promise: Un,
  url: qn,
  empty: bi,
};
const lt = (() => {
  const e = document.createElement("span"),
    i = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend",
    },
    t = Object.keys(i).find((s) => e.style[s] !== void 0);
  return !!l.string(t) && i[t];
})();
function yi(e, i) {
  setTimeout(() => {
    try {
      (e.hidden = !0), e.offsetHeight, (e.hidden = !1);
    } catch {}
  }, i);
}
const Wn = !!window.document.documentMode,
  zn = /Edge/g.test(navigator.userAgent),
  Kn =
    "WebkitAppearance" in document.documentElement.style &&
    !/Edge/g.test(navigator.userAgent),
  Gn =
    /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1,
  Yn = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1,
  Xn =
    /iPad|iPhone|iPod/gi.test(navigator.userAgent) &&
    navigator.maxTouchPoints > 1;
var X = {
  isIE: Wn,
  isEdge: zn,
  isWebKit: Kn,
  isIPhone: Gn,
  isIPadOS: Yn,
  isIos: Xn,
};
function Qn(e) {
  return JSON.parse(JSON.stringify(e));
}
function vi(e, i) {
  return i.split(".").reduce((t, s) => t && t[s], e);
}
function W(e = {}, ...i) {
  if (!i.length) return e;
  const t = i.shift();
  return l.object(t)
    ? (Object.keys(t).forEach((s) => {
        l.object(t[s])
          ? (Object.keys(e).includes(s) || Object.assign(e, { [s]: {} }),
            W(e[s], t[s]))
          : Object.assign(e, { [s]: t[s] });
      }),
      W(e, ...i))
    : e;
}
function wi(e, i) {
  const t = e.length ? e : [e];
  Array.from(t)
    .reverse()
    .forEach((s, n) => {
      const o = n > 0 ? i.cloneNode(!0) : i,
        a = s.parentNode,
        r = s.nextSibling;
      o.appendChild(s), r ? a.insertBefore(o, r) : a.appendChild(o);
    });
}
function ct(e, i) {
  l.element(e) &&
    !l.empty(i) &&
    Object.entries(i)
      .filter(([, t]) => !l.nullOrUndefined(t))
      .forEach(([t, s]) => e.setAttribute(t, s));
}
function E(e, i, t) {
  const s = document.createElement(e);
  return l.object(i) && ct(s, i), l.string(t) && (s.innerText = t), s;
}
function Jn(e, i) {
  l.element(e) && l.element(i) && i.parentNode.insertBefore(e, i.nextSibling);
}
function Rt(e, i, t, s) {
  l.element(i) && i.appendChild(E(e, t, s));
}
function le(e) {
  l.nodeList(e) || l.array(e)
    ? Array.from(e).forEach(le)
    : l.element(e) && l.element(e.parentNode) && e.parentNode.removeChild(e);
}
function Oe(e) {
  if (!l.element(e)) return;
  let { length: i } = e.childNodes;
  for (; i > 0; ) e.removeChild(e.lastChild), (i -= 1);
}
function je(e, i) {
  return l.element(i) && l.element(i.parentNode) && l.element(e)
    ? (i.parentNode.replaceChild(e, i), e)
    : null;
}
function ne(e, i) {
  if (!l.string(e) || l.empty(e)) return {};
  const t = {},
    s = W({}, i);
  return (
    e.split(",").forEach((n) => {
      const o = n.trim(),
        a = o.replace(".", ""),
        r = o.replace(/[[\]]/g, "").split("="),
        [c] = r,
        u = r.length > 1 ? r[1].replace(/["']/g, "") : "";
      switch (o.charAt(0)) {
        case ".":
          l.string(s.class) ? (t.class = `${s.class} ${a}`) : (t.class = a);
          break;
        case "#":
          t.id = o.replace("#", "");
          break;
        case "[":
          t[c] = u;
      }
    }),
    W(s, t)
  );
}
function pe(e, i) {
  if (!l.element(e)) return;
  let t = i;
  l.boolean(t) || (t = !e.hidden), (e.hidden = t);
}
function R(e, i, t) {
  if (l.nodeList(e)) return Array.from(e).map((s) => R(s, i, t));
  if (l.element(e)) {
    let s = "toggle";
    return (
      t !== void 0 && (s = t ? "add" : "remove"),
      e.classList[s](i),
      e.classList.contains(i)
    );
  }
  return !1;
}
function He(e, i) {
  return l.element(e) && e.classList.contains(i);
}
function fe(e, i) {
  const { prototype: t } = Element;
  return (
    t.matches ||
    t.webkitMatchesSelector ||
    t.mozMatchesSelector ||
    t.msMatchesSelector ||
    function () {
      return Array.from(document.querySelectorAll(i)).includes(this);
    }
  ).call(e, i);
}
function Zn(e, i) {
  const { prototype: t } = Element;
  return (
    t.closest ||
    function () {
      let s = this;
      do {
        if (fe.matches(s, i)) return s;
        s = s.parentElement || s.parentNode;
      } while (s !== null && s.nodeType === 1);
      return null;
    }
  ).call(e, i);
}
function Ee(e) {
  return this.elements.container.querySelectorAll(e);
}
function K(e) {
  return this.elements.container.querySelector(e);
}
function st(e = null, i = !1) {
  l.element(e) && e.focus({ preventScroll: !0, focusVisible: i });
}
const Dt = {
    "audio/ogg": "vorbis",
    "audio/wav": "1",
    "video/webm": "vp8, vorbis",
    "video/mp4": "avc1.42E01E, mp4a.40.2",
    "video/ogg": "theora",
  },
  z = {
    audio: "canPlayType" in document.createElement("audio"),
    video: "canPlayType" in document.createElement("video"),
    check(e, i) {
      const t = z[e] || i !== "html5";
      return { api: t, ui: t && z.rangeInput };
    },
    pip: !(
      X.isIPhone ||
      (!l.function(E("video").webkitSetPresentationMode) &&
        (!document.pictureInPictureEnabled ||
          E("video").disablePictureInPicture))
    ),
    airplay: l.function(window.WebKitPlaybackTargetAvailabilityEvent),
    playsinline: "playsInline" in document.createElement("video"),
    mime(e) {
      if (l.empty(e)) return !1;
      const [i] = e.split("/");
      let t = e;
      if (!this.isHTML5 || i !== this.type) return !1;
      Object.keys(Dt).includes(t) && (t += `; codecs="${Dt[e]}"`);
      try {
        return !!(t && this.media.canPlayType(t).replace(/no/, ""));
      } catch {
        return !1;
      }
    },
    textTracks: "textTracks" in document.createElement("video"),
    rangeInput: (() => {
      const e = document.createElement("input");
      return (e.type = "range"), e.type === "range";
    })(),
    touch: "ontouchstart" in document.documentElement,
    transitions: lt !== !1,
    reducedMotion:
      "matchMedia" in window &&
      window.matchMedia("(prefers-reduced-motion)").matches,
  },
  ea = (() => {
    let e = !1;
    try {
      const i = Object.defineProperty({}, "passive", {
        get: () => ((e = !0), null),
      });
      window.addEventListener("test", null, i),
        window.removeEventListener("test", null, i);
    } catch {}
    return e;
  })();
function Ae(e, i, t, s = !1, n = !0, o = !1) {
  if (!e || !("addEventListener" in e) || l.empty(i) || !l.function(t)) return;
  const a = i.split(" ");
  let r = o;
  ea && (r = { passive: n, capture: o }),
    a.forEach((c) => {
      this &&
        this.eventListeners &&
        s &&
        this.eventListeners.push({
          element: e,
          type: c,
          callback: t,
          options: r,
        }),
        e[s ? "addEventListener" : "removeEventListener"](c, t, r);
    });
}
function L(e, i = "", t, s = !0, n = !1) {
  Ae.call(this, e, i, t, !0, s, n);
}
function Ye(e, i = "", t, s = !0, n = !1) {
  Ae.call(this, e, i, t, !1, s, n);
}
function St(e, i = "", t, s = !0, n = !1) {
  const o = (...a) => {
    Ye(e, i, o, s, n), t.apply(this, a);
  };
  Ae.call(this, e, i, o, !0, s, n);
}
function A(e, i = "", t = !1, s = {}) {
  if (!l.element(e) || l.empty(i)) return;
  const n = new CustomEvent(i, { bubbles: t, detail: { ...s, plyr: this } });
  e.dispatchEvent(n);
}
function ta() {
  this &&
    this.eventListeners &&
    (this.eventListeners.forEach((e) => {
      const { element: i, type: t, callback: s, options: n } = e;
      i.removeEventListener(t, s, n);
    }),
    (this.eventListeners = []));
}
function ia() {
  return new Promise((e) =>
    this.ready
      ? setTimeout(e, 0)
      : L.call(this, this.elements.container, "ready", e)
  ).then(() => {});
}
function oe(e) {
  l.promise(e) && e.then(null, () => {});
}
function ut(e) {
  return l.array(e) ? e.filter((i, t) => e.indexOf(i) === t) : e;
}
function _i(e, i) {
  return l.array(e) && e.length
    ? e.reduce((t, s) => (Math.abs(s - i) < Math.abs(t - i) ? s : t))
    : null;
}
function ki(e) {
  return !(!window || !window.CSS) && window.CSS.supports(e);
}
const Bt = [
  [1, 1],
  [4, 3],
  [3, 4],
  [5, 4],
  [4, 5],
  [3, 2],
  [2, 3],
  [16, 10],
  [10, 16],
  [16, 9],
  [9, 16],
  [21, 9],
  [9, 21],
  [32, 9],
  [9, 32],
].reduce((e, [i, t]) => ({ ...e, [i / t]: [i, t] }), {});
function Ti(e) {
  return l.array(e) || (l.string(e) && e.includes(":"))
    ? (l.array(e) ? e : e.split(":")).map(Number).every(l.number)
    : !1;
}
function Ue(e) {
  if (!l.array(e) || !e.every(l.number)) return null;
  const [i, t] = e,
    s = (o, a) => (a === 0 ? o : s(a, o % a)),
    n = s(i, t);
  return [i / n, t / n];
}
function Ct(e) {
  const i = (s) => (Ti(s) ? s.split(":").map(Number) : null);
  let t = i(e);
  if (
    (t === null && (t = i(this.config.ratio)),
    t === null &&
      !l.empty(this.embed) &&
      l.array(this.embed.ratio) &&
      ({ ratio: t } = this.embed),
    t === null && this.isHTML5)
  ) {
    const { videoWidth: s, videoHeight: n } = this.media;
    t = [s, n];
  }
  return Ue(t);
}
function ye(e) {
  if (!this.isVideo) return {};
  const { wrapper: i } = this.elements,
    t = Ct.call(this, e);
  if (!l.array(t)) return {};
  const [s, n] = Ue(t),
    o = (100 / s) * n;
  if (
    (ki(`aspect-ratio: ${s}/${n}`)
      ? (i.style.aspectRatio = `${s}/${n}`)
      : (i.style.paddingBottom = `${o}%`),
    this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
  ) {
    const a =
        (100 / this.media.offsetWidth) *
        parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
      r = (a - o) / (a / 50);
    this.fullscreen.active
      ? (i.style.paddingBottom = null)
      : (this.media.style.transform = `translateY(-${r}%)`);
  } else
    this.isHTML5 && i.classList.add(this.config.classNames.videoFixedRatio);
  return { padding: o, ratio: t };
}
function Si(e, i, t = 0.05) {
  const s = e / i,
    n = _i(Object.keys(Bt), s);
  return Math.abs(n - s) <= t ? Bt[n] : [e, i];
}
function sa() {
  return [
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
    Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    ),
  ];
}
const me = {
  getSources() {
    return this.isHTML5
      ? Array.from(this.media.querySelectorAll("source")).filter((e) => {
          const i = e.getAttribute("type");
          return !!l.empty(i) || z.mime.call(this, i);
        })
      : [];
  },
  getQualityOptions() {
    return this.config.quality.forced
      ? this.config.quality.options
      : me.getSources
          .call(this)
          .map((e) => Number(e.getAttribute("size")))
          .filter(Boolean);
  },
  setup() {
    if (!this.isHTML5) return;
    const e = this;
    (e.options.speed = e.config.speed.options),
      l.empty(this.config.ratio) || ye.call(e),
      Object.defineProperty(e.media, "quality", {
        get() {
          const i = me.getSources
            .call(e)
            .find((t) => t.getAttribute("src") === e.source);
          return i && Number(i.getAttribute("size"));
        },
        set(i) {
          if (e.quality !== i) {
            if (
              e.config.quality.forced &&
              l.function(e.config.quality.onChange)
            )
              e.config.quality.onChange(i);
            else {
              const t = me.getSources
                .call(e)
                .find((c) => Number(c.getAttribute("size")) === i);
              if (!t) return;
              const {
                currentTime: s,
                paused: n,
                preload: o,
                readyState: a,
                playbackRate: r,
              } = e.media;
              (e.media.src = t.getAttribute("src")),
                (o !== "none" || a) &&
                  (e.once("loadedmetadata", () => {
                    (e.speed = r), (e.currentTime = s), n || oe(e.play());
                  }),
                  e.media.load());
            }
            A.call(e, e.media, "qualitychange", !1, { quality: i });
          }
        },
      });
  },
  cancelRequests() {
    this.isHTML5 &&
      (le(me.getSources.call(this)),
      this.media.setAttribute("src", this.config.blankVideo),
      this.media.load(),
      this.debug.log("Cancelled network requests"));
  },
};
function na(e) {
  return `${e}-${Math.floor(1e4 * Math.random())}`;
}
function dt(e, ...i) {
  return l.empty(e)
    ? e
    : e.toString().replace(/{(\d+)}/g, (t, s) => i[s].toString());
}
function aa(e, i) {
  return e === 0 || i === 0 || Number.isNaN(e) || Number.isNaN(i)
    ? 0
    : ((e / i) * 100).toFixed(2);
}
const Te = (e = "", i = "", t = "") =>
    e.replace(
      new RegExp(
        i.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
        "g"
      ),
      t.toString()
    ),
  Ci = (e = "") =>
    e
      .toString()
      .replace(
        /\w\S*/g,
        (i) => i.charAt(0).toUpperCase() + i.slice(1).toLowerCase()
      );
function oa(e = "") {
  let i = e.toString();
  return (
    (i = Te(i, "-", " ")), (i = Te(i, "_", " ")), (i = Ci(i)), Te(i, " ", "")
  );
}
function ra(e = "") {
  let i = e.toString();
  return (i = oa(i)), i.charAt(0).toLowerCase() + i.slice(1);
}
function la(e) {
  const i = document.createDocumentFragment(),
    t = document.createElement("div");
  return i.appendChild(t), (t.innerHTML = e), i.firstChild.innerText;
}
function ca(e) {
  const i = document.createElement("div");
  return i.appendChild(e), i.innerHTML;
}
const jt = {
    pip: "PIP",
    airplay: "AirPlay",
    html5: "HTML5",
    vimeo: "Vimeo",
    youtube: "YouTube",
  },
  Y = {
    get(e = "", i = {}) {
      if (l.empty(e) || l.empty(i)) return "";
      let t = vi(i.i18n, e);
      if (l.empty(t)) return Object.keys(jt).includes(e) ? jt[e] : "";
      const s = { "{seektime}": i.seekTime, "{title}": i.title };
      return (
        Object.entries(s).forEach(([n, o]) => {
          t = Te(t, n, o);
        }),
        t
      );
    },
  };
class xe {
  constructor(i) {
    y(this, "get", (t) => {
      if (!xe.supported || !this.enabled) return null;
      const s = window.localStorage.getItem(this.key);
      if (l.empty(s)) return null;
      const n = JSON.parse(s);
      return l.string(t) && t.length ? n[t] : n;
    }),
      y(this, "set", (t) => {
        if (!xe.supported || !this.enabled || !l.object(t)) return;
        let s = this.get();
        l.empty(s) && (s = {}), W(s, t);
        try {
          window.localStorage.setItem(this.key, JSON.stringify(s));
        } catch {}
      }),
      (this.enabled = i.config.storage.enabled),
      (this.key = i.config.storage.key);
  }
  static get supported() {
    try {
      if (!("localStorage" in window)) return !1;
      const i = "___test";
      return (
        window.localStorage.setItem(i, i), window.localStorage.removeItem(i), !0
      );
    } catch {
      return !1;
    }
  }
}
function $e(e, i = "text") {
  return new Promise((t, s) => {
    try {
      const n = new XMLHttpRequest();
      if (!("withCredentials" in n)) return;
      n.addEventListener("load", () => {
        if (i === "text")
          try {
            t(JSON.parse(n.responseText));
          } catch {
            t(n.responseText);
          }
        else t(n.response);
      }),
        n.addEventListener("error", () => {
          throw new Error(n.status);
        }),
        n.open("GET", e, !0),
        (n.responseType = i),
        n.send();
    } catch (n) {
      s(n);
    }
  });
}
function Ei(e, i) {
  if (!l.string(e)) return;
  const t = "cache",
    s = l.string(i);
  let n = !1;
  const o = () => document.getElementById(i) !== null,
    a = (r, c) => {
      (r.innerHTML = c),
        (s && o()) || document.body.insertAdjacentElement("afterbegin", r);
    };
  if (!s || !o()) {
    const r = xe.supported,
      c = document.createElement("div");
    if ((c.setAttribute("hidden", ""), s && c.setAttribute("id", i), r)) {
      const u = window.localStorage.getItem(`${t}-${i}`);
      if (((n = u !== null), n)) {
        const d = JSON.parse(u);
        a(c, d.content);
      }
    }
    $e(e)
      .then((u) => {
        if (!l.empty(u)) {
          if (r)
            try {
              window.localStorage.setItem(
                `${t}-${i}`,
                JSON.stringify({ content: u })
              );
            } catch {}
          a(c, u);
        }
      })
      .catch(() => {});
  }
}
const Ai = (e) => Math.trunc((e / 60 / 60) % 60, 10),
  ua = (e) => Math.trunc((e / 60) % 60, 10),
  da = (e) => Math.trunc(e % 60, 10);
function Xe(e = 0, i = !1, t = !1) {
  if (!l.number(e)) return Xe(void 0, i, t);
  const s = (r) => `0${r}`.slice(-2);
  let n = Ai(e);
  const o = ua(e),
    a = da(e);
  return (
    (n = i || n > 0 ? `${n}:` : ""),
    `${t && e > 0 ? "-" : ""}${n}${s(o)}:${s(a)}`
  );
}
const b = {
  getIconUrl() {
    const e = new URL(this.config.iconUrl, window.location),
      i = window.location.host
        ? window.location.host
        : window.top.location.host,
      t = e.host !== i || (X.isIE && !window.svg4everybody);
    return { url: this.config.iconUrl, cors: t };
  },
  findElements() {
    try {
      return (
        (this.elements.controls = K.call(
          this,
          this.config.selectors.controls.wrapper
        )),
        (this.elements.buttons = {
          play: Ee.call(this, this.config.selectors.buttons.play),
          pause: K.call(this, this.config.selectors.buttons.pause),
          restart: K.call(this, this.config.selectors.buttons.restart),
          rewind: K.call(this, this.config.selectors.buttons.rewind),
          fastForward: K.call(this, this.config.selectors.buttons.fastForward),
          mute: K.call(this, this.config.selectors.buttons.mute),
          pip: K.call(this, this.config.selectors.buttons.pip),
          airplay: K.call(this, this.config.selectors.buttons.airplay),
          settings: K.call(this, this.config.selectors.buttons.settings),
          captions: K.call(this, this.config.selectors.buttons.captions),
          fullscreen: K.call(this, this.config.selectors.buttons.fullscreen),
        }),
        (this.elements.progress = K.call(this, this.config.selectors.progress)),
        (this.elements.inputs = {
          seek: K.call(this, this.config.selectors.inputs.seek),
          volume: K.call(this, this.config.selectors.inputs.volume),
        }),
        (this.elements.display = {
          buffer: K.call(this, this.config.selectors.display.buffer),
          currentTime: K.call(this, this.config.selectors.display.currentTime),
          duration: K.call(this, this.config.selectors.display.duration),
        }),
        l.element(this.elements.progress) &&
          (this.elements.display.seekTooltip =
            this.elements.progress.querySelector(
              `.${this.config.classNames.tooltip}`
            )),
        !0
      );
    } catch (e) {
      return (
        this.debug.warn(
          "It looks like there is a problem with your custom controls HTML",
          e
        ),
        this.toggleNativeControls(!0),
        !1
      );
    }
  },
  createIcon(e, i) {
    const t = "http://www.w3.org/2000/svg",
      s = b.getIconUrl.call(this),
      n = `${s.cors ? "" : s.url}#${this.config.iconPrefix}`,
      o = document.createElementNS(t, "svg");
    ct(o, W(i, { "aria-hidden": "true", focusable: "false" }));
    const a = document.createElementNS(t, "use"),
      r = `${n}-${e}`;
    return (
      "href" in a &&
        a.setAttributeNS("http://www.w3.org/1999/xlink", "href", r),
      a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r),
      o.appendChild(a),
      o
    );
  },
  createLabel(e, i = {}) {
    const t = Y.get(e, this.config);
    return E(
      "span",
      {
        ...i,
        class: [i.class, this.config.classNames.hidden]
          .filter(Boolean)
          .join(" "),
      },
      t
    );
  },
  createBadge(e) {
    if (l.empty(e)) return null;
    const i = E("span", { class: this.config.classNames.menu.value });
    return (
      i.appendChild(E("span", { class: this.config.classNames.menu.badge }, e)),
      i
    );
  },
  createButton(e, i) {
    const t = W({}, i);
    let s = ra(e);
    const n = {
      element: "button",
      toggle: !1,
      label: null,
      icon: null,
      labelPressed: null,
      iconPressed: null,
    };
    switch (
      (["element", "icon", "label"].forEach((a) => {
        Object.keys(t).includes(a) && ((n[a] = t[a]), delete t[a]);
      }),
      n.element !== "button" ||
        Object.keys(t).includes("type") ||
        (t.type = "button"),
      Object.keys(t).includes("class")
        ? t.class
            .split(" ")
            .some((a) => a === this.config.classNames.control) ||
          W(t, { class: `${t.class} ${this.config.classNames.control}` })
        : (t.class = this.config.classNames.control),
      e)
    ) {
      case "play":
        (n.toggle = !0),
          (n.label = "play"),
          (n.labelPressed = "pause"),
          (n.icon = "play"),
          (n.iconPressed = "pause");
        break;
      case "mute":
        (n.toggle = !0),
          (n.label = "mute"),
          (n.labelPressed = "unmute"),
          (n.icon = "volume"),
          (n.iconPressed = "muted");
        break;
      case "captions":
        (n.toggle = !0),
          (n.label = "enableCaptions"),
          (n.labelPressed = "disableCaptions"),
          (n.icon = "captions-off"),
          (n.iconPressed = "captions-on");
        break;
      case "fullscreen":
        (n.toggle = !0),
          (n.label = "enterFullscreen"),
          (n.labelPressed = "exitFullscreen"),
          (n.icon = "enter-fullscreen"),
          (n.iconPressed = "exit-fullscreen");
        break;
      case "play-large":
        (t.class += ` ${this.config.classNames.control}--overlaid`),
          (s = "play"),
          (n.label = "play"),
          (n.icon = "play");
        break;
      default:
        l.empty(n.label) && (n.label = s), l.empty(n.icon) && (n.icon = e);
    }
    const o = E(n.element);
    return (
      n.toggle
        ? (o.appendChild(
            b.createIcon.call(this, n.iconPressed, { class: "icon--pressed" })
          ),
          o.appendChild(
            b.createIcon.call(this, n.icon, { class: "icon--not-pressed" })
          ),
          o.appendChild(
            b.createLabel.call(this, n.labelPressed, {
              class: "label--pressed",
            })
          ),
          o.appendChild(
            b.createLabel.call(this, n.label, { class: "label--not-pressed" })
          ))
        : (o.appendChild(b.createIcon.call(this, n.icon)),
          o.appendChild(b.createLabel.call(this, n.label))),
      W(t, ne(this.config.selectors.buttons[s], t)),
      ct(o, t),
      s === "play"
        ? (l.array(this.elements.buttons[s]) || (this.elements.buttons[s] = []),
          this.elements.buttons[s].push(o))
        : (this.elements.buttons[s] = o),
      o
    );
  },
  createRange(e, i) {
    const t = E(
      "input",
      W(
        ne(this.config.selectors.inputs[e]),
        {
          type: "range",
          min: 0,
          max: 100,
          step: 0.01,
          value: 0,
          autocomplete: "off",
          role: "slider",
          "aria-label": Y.get(e, this.config),
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": 0,
        },
        i
      )
    );
    return (
      (this.elements.inputs[e] = t),
      b.updateRangeFill.call(this, t),
      Ln.setup(t),
      t
    );
  },
  createProgress(e, i) {
    const t = E(
      "progress",
      W(
        ne(this.config.selectors.display[e]),
        { min: 0, max: 100, value: 0, role: "progressbar", "aria-hidden": !0 },
        i
      )
    );
    if (e !== "volume") {
      t.appendChild(E("span", null, "0"));
      const s = { played: "played", buffer: "buffered" }[e],
        n = s ? Y.get(s, this.config) : "";
      t.innerText = `% ${n.toLowerCase()}`;
    }
    return (this.elements.display[e] = t), t;
  },
  createTime(e, i) {
    const t = ne(this.config.selectors.display[e], i),
      s = E(
        "div",
        W(t, {
          class: `${t.class ? t.class : ""} ${
            this.config.classNames.display.time
          } `.trim(),
          "aria-label": Y.get(e, this.config),
          role: "timer",
        }),
        "00:00"
      );
    return (this.elements.display[e] = s), s;
  },
  bindMenuItemShortcuts(e, i) {
    L.call(
      this,
      e,
      "keydown keyup",
      (t) => {
        if (
          ![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(t.key) ||
          (t.preventDefault(), t.stopPropagation(), t.type === "keydown")
        )
          return;
        const s = fe(e, '[role="menuitemradio"]');
        if (!s && [" ", "ArrowRight"].includes(t.key))
          b.showMenuPanel.call(this, i, !0);
        else {
          let n;
          t.key !== " " &&
            (t.key === "ArrowDown" || (s && t.key === "ArrowRight")
              ? ((n = e.nextElementSibling),
                l.element(n) || (n = e.parentNode.firstElementChild))
              : ((n = e.previousElementSibling),
                l.element(n) || (n = e.parentNode.lastElementChild)),
            st.call(this, n, !0));
        }
      },
      !1
    ),
      L.call(this, e, "keyup", (t) => {
        t.key === "Return" && b.focusFirstMenuItem.call(this, null, !0);
      });
  },
  createMenuItem({
    value: e,
    list: i,
    type: t,
    title: s,
    badge: n = null,
    checked: o = !1,
  }) {
    const a = ne(this.config.selectors.inputs[t]),
      r = E(
        "button",
        W(a, {
          type: "button",
          role: "menuitemradio",
          class: `${this.config.classNames.control} ${
            a.class ? a.class : ""
          }`.trim(),
          "aria-checked": o,
          value: e,
        })
      ),
      c = E("span");
    (c.innerHTML = s),
      l.element(n) && c.appendChild(n),
      r.appendChild(c),
      Object.defineProperty(r, "checked", {
        enumerable: !0,
        get: () => r.getAttribute("aria-checked") === "true",
        set(u) {
          u &&
            Array.from(r.parentNode.children)
              .filter((d) => fe(d, '[role="menuitemradio"]'))
              .forEach((d) => d.setAttribute("aria-checked", "false")),
            r.setAttribute("aria-checked", u ? "true" : "false");
        },
      }),
      this.listeners.bind(
        r,
        "click keyup",
        (u) => {
          if (!l.keyboardEvent(u) || u.key === " ") {
            switch (
              (u.preventDefault(), u.stopPropagation(), (r.checked = !0), t)
            ) {
              case "language":
                this.currentTrack = Number(e);
                break;
              case "quality":
                this.quality = e;
                break;
              case "speed":
                this.speed = parseFloat(e);
            }
            b.showMenuPanel.call(this, "home", l.keyboardEvent(u));
          }
        },
        t,
        !1
      ),
      b.bindMenuItemShortcuts.call(this, r, t),
      i.appendChild(r);
  },
  formatTime(e = 0, i = !1) {
    return l.number(e) ? Xe(e, Ai(this.duration) > 0, i) : e;
  },
  updateTimeDisplay(e = null, i = 0, t = !1) {
    l.element(e) && l.number(i) && (e.innerText = b.formatTime(i, t));
  },
  updateVolume() {
    this.supported.ui &&
      (l.element(this.elements.inputs.volume) &&
        b.setRange.call(
          this,
          this.elements.inputs.volume,
          this.muted ? 0 : this.volume
        ),
      l.element(this.elements.buttons.mute) &&
        (this.elements.buttons.mute.pressed = this.muted || this.volume === 0));
  },
  setRange(e, i = 0) {
    l.element(e) && ((e.value = i), b.updateRangeFill.call(this, e));
  },
  updateProgress(e) {
    if (!this.supported.ui || !l.event(e)) return;
    let i = 0;
    const t = (s, n) => {
      const o = l.number(n) ? n : 0,
        a = l.element(s) ? s : this.elements.display.buffer;
      if (l.element(a)) {
        a.value = o;
        const r = a.getElementsByTagName("span")[0];
        l.element(r) && (r.childNodes[0].nodeValue = o);
      }
    };
    if (e)
      switch (e.type) {
        case "timeupdate":
        case "seeking":
        case "seeked":
          (i = aa(this.currentTime, this.duration)),
            e.type === "timeupdate" &&
              b.setRange.call(this, this.elements.inputs.seek, i);
          break;
        case "playing":
        case "progress":
          t(this.elements.display.buffer, 100 * this.buffered);
      }
  },
  updateRangeFill(e) {
    const i = l.event(e) ? e.target : e;
    if (l.element(i) && i.getAttribute("type") === "range") {
      if (fe(i, this.config.selectors.inputs.seek)) {
        i.setAttribute("aria-valuenow", this.currentTime);
        const t = b.formatTime(this.currentTime),
          s = b.formatTime(this.duration),
          n = Y.get("seekLabel", this.config);
        i.setAttribute(
          "aria-valuetext",
          n.replace("{currentTime}", t).replace("{duration}", s)
        );
      } else if (fe(i, this.config.selectors.inputs.volume)) {
        const t = 100 * i.value;
        i.setAttribute("aria-valuenow", t),
          i.setAttribute("aria-valuetext", `${t.toFixed(1)}%`);
      } else i.setAttribute("aria-valuenow", i.value);
      (X.isWebKit || X.isIPadOS) &&
        i.style.setProperty("--value", (i.value / i.max) * 100 + "%");
    }
  },
  updateSeekTooltip(e) {
    var i, t;
    if (
      !this.config.tooltips.seek ||
      !l.element(this.elements.inputs.seek) ||
      !l.element(this.elements.display.seekTooltip) ||
      this.duration === 0
    )
      return;
    const s = this.elements.display.seekTooltip,
      n = `${this.config.classNames.tooltip}--visible`,
      o = (d) => R(s, n, d);
    if (this.touch) return void o(!1);
    let a = 0;
    const r = this.elements.progress.getBoundingClientRect();
    if (l.event(e)) a = (100 / r.width) * (e.pageX - r.left);
    else {
      if (!He(s, n)) return;
      a = parseFloat(s.style.left, 10);
    }
    a < 0 ? (a = 0) : a > 100 && (a = 100);
    const c = (this.duration / 100) * a;
    s.innerText = b.formatTime(c);
    const u =
      (i = this.config.markers) === null ||
      i === void 0 ||
      (t = i.points) === null ||
      t === void 0
        ? void 0
        : t.find(({ time: d }) => d === Math.round(c));
    u && s.insertAdjacentHTML("afterbegin", `${u.label}<br>`),
      (s.style.left = `${a}%`),
      l.event(e) &&
        ["mouseenter", "mouseleave"].includes(e.type) &&
        o(e.type === "mouseenter");
  },
  timeUpdate(e) {
    const i =
      !l.element(this.elements.display.duration) && this.config.invertTime;
    b.updateTimeDisplay.call(
      this,
      this.elements.display.currentTime,
      i ? this.duration - this.currentTime : this.currentTime,
      i
    ),
      (e && e.type === "timeupdate" && this.media.seeking) ||
        b.updateProgress.call(this, e);
  },
  durationUpdate() {
    if (!this.supported.ui || (!this.config.invertTime && this.currentTime))
      return;
    if (this.duration >= 2 ** 32)
      return (
        pe(this.elements.display.currentTime, !0),
        void pe(this.elements.progress, !0)
      );
    l.element(this.elements.inputs.seek) &&
      this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
    const e = l.element(this.elements.display.duration);
    !e &&
      this.config.displayDuration &&
      this.paused &&
      b.updateTimeDisplay.call(
        this,
        this.elements.display.currentTime,
        this.duration
      ),
      e &&
        b.updateTimeDisplay.call(
          this,
          this.elements.display.duration,
          this.duration
        ),
      this.config.markers.enabled && b.setMarkers.call(this),
      b.updateSeekTooltip.call(this);
  },
  toggleMenuButton(e, i) {
    pe(this.elements.settings.buttons[e], !i);
  },
  updateSetting(e, i, t) {
    const s = this.elements.settings.panels[e];
    let n = null,
      o = i;
    if (e === "captions") n = this.currentTrack;
    else {
      if (
        ((n = l.empty(t) ? this[e] : t),
        l.empty(n) && (n = this.config[e].default),
        !l.empty(this.options[e]) && !this.options[e].includes(n))
      )
        return void this.debug.warn(`Unsupported value of '${n}' for ${e}`);
      if (!this.config[e].options.includes(n))
        return void this.debug.warn(`Disabled value of '${n}' for ${e}`);
    }
    if (
      (l.element(o) || (o = s && s.querySelector('[role="menu"]')),
      !l.element(o))
    )
      return;
    this.elements.settings.buttons[e].querySelector(
      `.${this.config.classNames.menu.value}`
    ).innerHTML = b.getLabel.call(this, e, n);
    const a = o && o.querySelector(`[value="${n}"]`);
    l.element(a) && (a.checked = !0);
  },
  getLabel(e, i) {
    switch (e) {
      case "speed":
        return i === 1 ? Y.get("normal", this.config) : `${i}&times;`;
      case "quality":
        if (l.number(i)) {
          const t = Y.get(`qualityLabel.${i}`, this.config);
          return t.length ? t : `${i}p`;
        }
        return Ci(i);
      case "captions":
        return I.getLabel.call(this);
      default:
        return null;
    }
  },
  setQualityMenu(e) {
    if (!l.element(this.elements.settings.panels.quality)) return;
    const i = "quality",
      t = this.elements.settings.panels.quality.querySelector('[role="menu"]');
    l.array(e) &&
      (this.options.quality = ut(e).filter((o) =>
        this.config.quality.options.includes(o)
      ));
    const s = !l.empty(this.options.quality) && this.options.quality.length > 1;
    if (
      (b.toggleMenuButton.call(this, i, s), Oe(t), b.checkMenu.call(this), !s)
    )
      return;
    const n = (o) => {
      const a = Y.get(`qualityBadge.${o}`, this.config);
      return a.length ? b.createBadge.call(this, a) : null;
    };
    this.options.quality
      .sort((o, a) => {
        const r = this.config.quality.options;
        return r.indexOf(o) > r.indexOf(a) ? 1 : -1;
      })
      .forEach((o) => {
        b.createMenuItem.call(this, {
          value: o,
          list: t,
          type: i,
          title: b.getLabel.call(this, "quality", o),
          badge: n(o),
        });
      }),
      b.updateSetting.call(this, i, t);
  },
  setCaptionsMenu() {
    if (!l.element(this.elements.settings.panels.captions)) return;
    const e = "captions",
      i = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
      t = I.getTracks.call(this),
      s = !!t.length;
    if (
      (b.toggleMenuButton.call(this, e, s), Oe(i), b.checkMenu.call(this), !s)
    )
      return;
    const n = t.map((o, a) => ({
      value: a,
      checked: this.captions.toggled && this.currentTrack === a,
      title: I.getLabel.call(this, o),
      badge: o.language && b.createBadge.call(this, o.language.toUpperCase()),
      list: i,
      type: "language",
    }));
    n.unshift({
      value: -1,
      checked: !this.captions.toggled,
      title: Y.get("disabled", this.config),
      list: i,
      type: "language",
    }),
      n.forEach(b.createMenuItem.bind(this)),
      b.updateSetting.call(this, e, i);
  },
  setSpeedMenu() {
    if (!l.element(this.elements.settings.panels.speed)) return;
    const e = "speed",
      i = this.elements.settings.panels.speed.querySelector('[role="menu"]');
    this.options.speed = this.options.speed.filter(
      (s) => s >= this.minimumSpeed && s <= this.maximumSpeed
    );
    const t = !l.empty(this.options.speed) && this.options.speed.length > 1;
    b.toggleMenuButton.call(this, e, t),
      Oe(i),
      b.checkMenu.call(this),
      t &&
        (this.options.speed.forEach((s) => {
          b.createMenuItem.call(this, {
            value: s,
            list: i,
            type: e,
            title: b.getLabel.call(this, "speed", s),
          });
        }),
        b.updateSetting.call(this, e, i));
  },
  checkMenu() {
    const { buttons: e } = this.elements.settings,
      i = !l.empty(e) && Object.values(e).some((t) => !t.hidden);
    pe(this.elements.settings.menu, !i);
  },
  focusFirstMenuItem(e, i = !1) {
    if (this.elements.settings.popup.hidden) return;
    let t = e;
    l.element(t) ||
      (t = Object.values(this.elements.settings.panels).find((n) => !n.hidden));
    const s = t.querySelector('[role^="menuitem"]');
    st.call(this, s, i);
  },
  toggleMenu(e) {
    const { popup: i } = this.elements.settings,
      t = this.elements.buttons.settings;
    if (!l.element(i) || !l.element(t)) return;
    const { hidden: s } = i;
    let n = s;
    if (l.boolean(e)) n = e;
    else if (l.keyboardEvent(e) && e.key === "Escape") n = !1;
    else if (l.event(e)) {
      const o = l.function(e.composedPath) ? e.composedPath()[0] : e.target,
        a = i.contains(o);
      if (a || (!a && e.target !== t && n)) return;
    }
    t.setAttribute("aria-expanded", n),
      pe(i, !n),
      R(this.elements.container, this.config.classNames.menu.open, n),
      n && l.keyboardEvent(e)
        ? b.focusFirstMenuItem.call(this, null, !0)
        : n || s || st.call(this, t, l.keyboardEvent(e));
  },
  getMenuSize(e) {
    const i = e.cloneNode(!0);
    (i.style.position = "absolute"),
      (i.style.opacity = 0),
      i.removeAttribute("hidden"),
      e.parentNode.appendChild(i);
    const t = i.scrollWidth,
      s = i.scrollHeight;
    return le(i), { width: t, height: s };
  },
  showMenuPanel(e = "", i = !1) {
    const t = this.elements.container.querySelector(
      `#plyr-settings-${this.id}-${e}`
    );
    if (!l.element(t)) return;
    const s = t.parentNode,
      n = Array.from(s.children).find((o) => !o.hidden);
    if (z.transitions && !z.reducedMotion) {
      (s.style.width = `${n.scrollWidth}px`),
        (s.style.height = `${n.scrollHeight}px`);
      const o = b.getMenuSize.call(this, t),
        a = (r) => {
          r.target === s &&
            ["width", "height"].includes(r.propertyName) &&
            ((s.style.width = ""),
            (s.style.height = ""),
            Ye.call(this, s, lt, a));
        };
      L.call(this, s, lt, a),
        (s.style.width = `${o.width}px`),
        (s.style.height = `${o.height}px`);
    }
    pe(n, !0), pe(t, !1), b.focusFirstMenuItem.call(this, t, i);
  },
  setDownloadUrl() {
    const e = this.elements.buttons.download;
    l.element(e) && e.setAttribute("href", this.download);
  },
  create(e) {
    const {
      bindMenuItemShortcuts: i,
      createButton: t,
      createProgress: s,
      createRange: n,
      createTime: o,
      setQualityMenu: a,
      setSpeedMenu: r,
      showMenuPanel: c,
    } = b;
    (this.elements.controls = null),
      l.array(this.config.controls) &&
        this.config.controls.includes("play-large") &&
        this.elements.container.appendChild(t.call(this, "play-large"));
    const u = E("div", ne(this.config.selectors.controls.wrapper));
    this.elements.controls = u;
    const d = { class: "plyr__controls__item" };
    return (
      ut(l.array(this.config.controls) ? this.config.controls : []).forEach(
        (m) => {
          if (
            (m === "restart" && u.appendChild(t.call(this, "restart", d)),
            m === "rewind" && u.appendChild(t.call(this, "rewind", d)),
            m === "play" && u.appendChild(t.call(this, "play", d)),
            m === "fast-forward" &&
              u.appendChild(t.call(this, "fast-forward", d)),
            m === "progress")
          ) {
            const h = E("div", {
                class: `${d.class} plyr__progress__container`,
              }),
              v = E("div", ne(this.config.selectors.progress));
            if (
              (v.appendChild(n.call(this, "seek", { id: `plyr-seek-${e.id}` })),
              v.appendChild(s.call(this, "buffer")),
              this.config.tooltips.seek)
            ) {
              const T = E(
                "span",
                { class: this.config.classNames.tooltip },
                "00:00"
              );
              v.appendChild(T), (this.elements.display.seekTooltip = T);
            }
            (this.elements.progress = v),
              h.appendChild(this.elements.progress),
              u.appendChild(h);
          }
          if (
            (m === "current-time" &&
              u.appendChild(o.call(this, "currentTime", d)),
            m === "duration" && u.appendChild(o.call(this, "duration", d)),
            m === "mute" || m === "volume")
          ) {
            let { volume: h } = this.elements;
            if (
              ((l.element(h) && u.contains(h)) ||
                ((h = E(
                  "div",
                  W({}, d, { class: `${d.class} plyr__volume`.trim() })
                )),
                (this.elements.volume = h),
                u.appendChild(h)),
              m === "mute" && h.appendChild(t.call(this, "mute")),
              m === "volume" && !X.isIos && !X.isIPadOS)
            ) {
              const v = { max: 1, step: 0.05, value: this.config.volume };
              h.appendChild(
                n.call(this, "volume", W(v, { id: `plyr-volume-${e.id}` }))
              );
            }
          }
          if (
            (m === "captions" && u.appendChild(t.call(this, "captions", d)),
            m === "settings" && !l.empty(this.config.settings))
          ) {
            const h = E(
              "div",
              W({}, d, { class: `${d.class} plyr__menu`.trim(), hidden: "" })
            );
            h.appendChild(
              t.call(this, "settings", {
                "aria-haspopup": !0,
                "aria-controls": `plyr-settings-${e.id}`,
                "aria-expanded": !1,
              })
            );
            const v = E("div", {
                class: "plyr__menu__container",
                id: `plyr-settings-${e.id}`,
                hidden: "",
              }),
              T = E("div"),
              S = E("div", { id: `plyr-settings-${e.id}-home` }),
              x = E("div", { role: "menu" });
            S.appendChild(x),
              T.appendChild(S),
              (this.elements.settings.panels.home = S),
              this.config.settings.forEach((C) => {
                const f = E(
                  "button",
                  W(ne(this.config.selectors.buttons.settings), {
                    type: "button",
                    class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                    role: "menuitem",
                    "aria-haspopup": !0,
                    hidden: "",
                  })
                );
                i.call(this, f, C),
                  L.call(this, f, "click", () => {
                    c.call(this, C, !1);
                  });
                const M = E("span", null, Y.get(C, this.config)),
                  j = E("span", { class: this.config.classNames.menu.value });
                (j.innerHTML = e[C]),
                  M.appendChild(j),
                  f.appendChild(M),
                  x.appendChild(f);
                const V = E("div", {
                    id: `plyr-settings-${e.id}-${C}`,
                    hidden: "",
                  }),
                  N = E("button", {
                    type: "button",
                    class: `${this.config.classNames.control} ${this.config.classNames.control}--back`,
                  });
                N.appendChild(
                  E("span", { "aria-hidden": !0 }, Y.get(C, this.config))
                ),
                  N.appendChild(
                    E(
                      "span",
                      { class: this.config.classNames.hidden },
                      Y.get("menuBack", this.config)
                    )
                  ),
                  L.call(
                    this,
                    V,
                    "keydown",
                    (p) => {
                      p.key === "ArrowLeft" &&
                        (p.preventDefault(),
                        p.stopPropagation(),
                        c.call(this, "home", !0));
                    },
                    !1
                  ),
                  L.call(this, N, "click", () => {
                    c.call(this, "home", !1);
                  }),
                  V.appendChild(N),
                  V.appendChild(E("div", { role: "menu" })),
                  T.appendChild(V),
                  (this.elements.settings.buttons[C] = f),
                  (this.elements.settings.panels[C] = V);
              }),
              v.appendChild(T),
              h.appendChild(v),
              u.appendChild(h),
              (this.elements.settings.popup = v),
              (this.elements.settings.menu = h);
          }
          if (
            (m === "pip" && z.pip && u.appendChild(t.call(this, "pip", d)),
            m === "airplay" &&
              z.airplay &&
              u.appendChild(t.call(this, "airplay", d)),
            m === "download")
          ) {
            const h = W({}, d, {
              element: "a",
              href: this.download,
              target: "_blank",
            });
            this.isHTML5 && (h.download = "");
            const { download: v } = this.config.urls;
            !l.url(v) &&
              this.isEmbed &&
              W(h, { icon: `logo-${this.provider}`, label: this.provider }),
              u.appendChild(t.call(this, "download", h));
          }
          m === "fullscreen" && u.appendChild(t.call(this, "fullscreen", d));
        }
      ),
      this.isHTML5 && a.call(this, me.getQualityOptions.call(this)),
      r.call(this),
      u
    );
  },
  inject() {
    if (this.config.loadSprite) {
      const n = b.getIconUrl.call(this);
      n.cors && Ei(n.url, "sprite-plyr");
    }
    this.id = Math.floor(1e4 * Math.random());
    let e = null;
    this.elements.controls = null;
    const i = {
      id: this.id,
      seektime: this.config.seekTime,
      title: this.config.title,
    };
    let t = !0;
    l.function(this.config.controls) &&
      (this.config.controls = this.config.controls.call(this, i)),
      this.config.controls || (this.config.controls = []),
      l.element(this.config.controls) || l.string(this.config.controls)
        ? (e = this.config.controls)
        : ((e = b.create.call(this, {
            id: this.id,
            seektime: this.config.seekTime,
            speed: this.speed,
            quality: this.quality,
            captions: I.getLabel.call(this),
          })),
          (t = !1));
    let s;
    if (
      (t &&
        l.string(this.config.controls) &&
        (e = ((n) => {
          let o = n;
          return (
            Object.entries(i).forEach(([a, r]) => {
              o = Te(o, `{${a}}`, r);
            }),
            o
          );
        })(e)),
      l.string(this.config.selectors.controls.container) &&
        (s = document.querySelector(this.config.selectors.controls.container)),
      l.element(s) || (s = this.elements.container),
      s[l.element(e) ? "insertAdjacentElement" : "insertAdjacentHTML"](
        "afterbegin",
        e
      ),
      l.element(this.elements.controls) || b.findElements.call(this),
      !l.empty(this.elements.buttons))
    ) {
      const n = (o) => {
        const a = this.config.classNames.controlPressed;
        o.setAttribute("aria-pressed", "false"),
          Object.defineProperty(o, "pressed", {
            configurable: !0,
            enumerable: !0,
            get: () => He(o, a),
            set(r = !1) {
              R(o, a, r), o.setAttribute("aria-pressed", r ? "true" : "false");
            },
          });
      };
      Object.values(this.elements.buttons)
        .filter(Boolean)
        .forEach((o) => {
          l.array(o) || l.nodeList(o)
            ? Array.from(o).filter(Boolean).forEach(n)
            : n(o);
        });
    }
    if ((X.isEdge && yi(s), this.config.tooltips.controls)) {
      const { classNames: n, selectors: o } = this.config,
        a = `${o.controls.wrapper} ${o.labels} .${n.hidden}`,
        r = Ee.call(this, a);
      Array.from(r).forEach((c) => {
        R(c, this.config.classNames.hidden, !1),
          R(c, this.config.classNames.tooltip, !0);
      });
    }
  },
  setMediaMetadata() {
    try {
      "mediaSession" in navigator &&
        (navigator.mediaSession.metadata = new window.MediaMetadata({
          title: this.config.mediaMetadata.title,
          artist: this.config.mediaMetadata.artist,
          album: this.config.mediaMetadata.album,
          artwork: this.config.mediaMetadata.artwork,
        }));
    } catch {}
  },
  setMarkers() {
    var e, i;
    if (!this.duration || this.elements.markers) return;
    const t =
      (e = this.config.markers) === null ||
      e === void 0 ||
      (i = e.points) === null ||
      i === void 0
        ? void 0
        : i.filter(({ time: c }) => c > 0 && c < this.duration);
    if (t == null || !t.length) return;
    const s = document.createDocumentFragment(),
      n = document.createDocumentFragment();
    let o = null;
    const a = `${this.config.classNames.tooltip}--visible`,
      r = (c) => R(o, a, c);
    t.forEach((c) => {
      const u = E("span", { class: this.config.classNames.marker }, ""),
        d = (c.time / this.duration) * 100 + "%";
      o &&
        (u.addEventListener("mouseenter", () => {
          c.label || ((o.style.left = d), (o.innerHTML = c.label), r(!0));
        }),
        u.addEventListener("mouseleave", () => {
          r(!1);
        })),
        u.addEventListener("click", () => {
          this.currentTime = c.time;
        }),
        (u.style.left = d),
        n.appendChild(u);
    }),
      s.appendChild(n),
      this.config.tooltips.seek ||
        ((o = E("span", { class: this.config.classNames.tooltip }, "")),
        s.appendChild(o)),
      (this.elements.markers = { points: n, tip: o }),
      this.elements.progress.appendChild(s);
  },
};
function xi(e, i = !0) {
  let t = e;
  if (i) {
    const s = document.createElement("a");
    (s.href = t), (t = s.href);
  }
  try {
    return new URL(t);
  } catch {
    return null;
  }
}
function Pi(e) {
  const i = new URLSearchParams();
  return (
    l.object(e) &&
      Object.entries(e).forEach(([t, s]) => {
        i.set(t, s);
      }),
    i
  );
}
const I = {
    setup() {
      if (!this.supported.ui) return;
      if (!this.isVideo || this.isYouTube || (this.isHTML5 && !z.textTracks))
        return void (
          l.array(this.config.controls) &&
          this.config.controls.includes("settings") &&
          this.config.settings.includes("captions") &&
          b.setCaptionsMenu.call(this)
        );
      if (
        (l.element(this.elements.captions) ||
          ((this.elements.captions = E(
            "div",
            ne(this.config.selectors.captions)
          )),
          this.elements.captions.setAttribute("dir", "auto"),
          Jn(this.elements.captions, this.elements.wrapper)),
        X.isIE && window.URL)
      ) {
        const s = this.media.querySelectorAll("track");
        Array.from(s).forEach((n) => {
          const o = n.getAttribute("src"),
            a = xi(o);
          a !== null &&
            a.hostname !== window.location.href.hostname &&
            ["http:", "https:"].includes(a.protocol) &&
            $e(o, "blob")
              .then((r) => {
                n.setAttribute("src", window.URL.createObjectURL(r));
              })
              .catch(() => {
                le(n);
              });
        });
      }
      const e = ut(
        (
          navigator.languages || [
            navigator.language || navigator.userLanguage || "en",
          ]
        ).map((s) => s.split("-")[0])
      );
      let i = (
        this.storage.get("language") ||
        this.config.captions.language ||
        "auto"
      ).toLowerCase();
      i === "auto" && ([i] = e);
      let t = this.storage.get("captions");
      if (
        (l.boolean(t) || ({ active: t } = this.config.captions),
        Object.assign(this.captions, {
          toggled: !1,
          active: t,
          language: i,
          languages: e,
        }),
        this.isHTML5)
      ) {
        const s = this.config.captions.update
          ? "addtrack removetrack"
          : "removetrack";
        L.call(this, this.media.textTracks, s, I.update.bind(this));
      }
      setTimeout(I.update.bind(this), 0);
    },
    update() {
      const e = I.getTracks.call(this, !0),
        {
          active: i,
          language: t,
          meta: s,
          currentTrackNode: n,
        } = this.captions,
        o = !!e.find((a) => a.language === t);
      this.isHTML5 &&
        this.isVideo &&
        e
          .filter((a) => !s.get(a))
          .forEach((a) => {
            this.debug.log("Track added", a),
              s.set(a, { default: a.mode === "showing" }),
              a.mode === "showing" && (a.mode = "hidden"),
              L.call(this, a, "cuechange", () => I.updateCues.call(this));
          }),
        ((o && this.language !== t) || !e.includes(n)) &&
          (I.setLanguage.call(this, t), I.toggle.call(this, i && o)),
        this.elements &&
          R(
            this.elements.container,
            this.config.classNames.captions.enabled,
            !l.empty(e)
          ),
        l.array(this.config.controls) &&
          this.config.controls.includes("settings") &&
          this.config.settings.includes("captions") &&
          b.setCaptionsMenu.call(this);
    },
    toggle(e, i = !0) {
      if (!this.supported.ui) return;
      const { toggled: t } = this.captions,
        s = this.config.classNames.captions.active,
        n = l.nullOrUndefined(e) ? !t : e;
      if (n !== t) {
        if (
          (i || ((this.captions.active = n), this.storage.set({ captions: n })),
          !this.language && n && !i)
        ) {
          const o = I.getTracks.call(this),
            a = I.findTrack.call(
              this,
              [this.captions.language, ...this.captions.languages],
              !0
            );
          return (
            (this.captions.language = a.language),
            void I.set.call(this, o.indexOf(a))
          );
        }
        this.elements.buttons.captions &&
          (this.elements.buttons.captions.pressed = n),
          R(this.elements.container, s, n),
          (this.captions.toggled = n),
          b.updateSetting.call(this, "captions"),
          A.call(this, this.media, n ? "captionsenabled" : "captionsdisabled");
      }
      setTimeout(() => {
        n &&
          this.captions.toggled &&
          (this.captions.currentTrackNode.mode = "hidden");
      });
    },
    set(e, i = !0) {
      const t = I.getTracks.call(this);
      if (e !== -1)
        if (l.number(e))
          if (e in t) {
            if (this.captions.currentTrack !== e) {
              this.captions.currentTrack = e;
              const s = t[e],
                { language: n } = s || {};
              (this.captions.currentTrackNode = s),
                b.updateSetting.call(this, "captions"),
                i ||
                  ((this.captions.language = n),
                  this.storage.set({ language: n })),
                this.isVimeo && this.embed.enableTextTrack(n),
                A.call(this, this.media, "languagechange");
            }
            I.toggle.call(this, !0, i),
              this.isHTML5 && this.isVideo && I.updateCues.call(this);
          } else this.debug.warn("Track not found", e);
        else this.debug.warn("Invalid caption argument", e);
      else I.toggle.call(this, !1, i);
    },
    setLanguage(e, i = !0) {
      if (!l.string(e))
        return void this.debug.warn("Invalid language argument", e);
      const t = e.toLowerCase();
      this.captions.language = t;
      const s = I.getTracks.call(this),
        n = I.findTrack.call(this, [t]);
      I.set.call(this, s.indexOf(n), i);
    },
    getTracks(e = !1) {
      return Array.from((this.media || {}).textTracks || [])
        .filter((i) => !this.isHTML5 || e || this.captions.meta.has(i))
        .filter((i) => ["captions", "subtitles"].includes(i.kind));
    },
    findTrack(e, i = !1) {
      const t = I.getTracks.call(this),
        s = (a) => Number((this.captions.meta.get(a) || {}).default),
        n = Array.from(t).sort((a, r) => s(r) - s(a));
      let o;
      return (
        e.every((a) => ((o = n.find((r) => r.language === a)), !o)),
        o || (i ? n[0] : void 0)
      );
    },
    getCurrentTrack() {
      return I.getTracks.call(this)[this.currentTrack];
    },
    getLabel(e) {
      let i = e;
      return (
        !l.track(i) &&
          z.textTracks &&
          this.captions.toggled &&
          (i = I.getCurrentTrack.call(this)),
        l.track(i)
          ? l.empty(i.label)
            ? l.empty(i.language)
              ? Y.get("enabled", this.config)
              : e.language.toUpperCase()
            : i.label
          : Y.get("disabled", this.config)
      );
    },
    updateCues(e) {
      if (!this.supported.ui) return;
      if (!l.element(this.elements.captions))
        return void this.debug.warn("No captions element to render to");
      if (!l.nullOrUndefined(e) && !Array.isArray(e))
        return void this.debug.warn("updateCues: Invalid input", e);
      let i = e;
      if (!i) {
        const s = I.getCurrentTrack.call(this);
        i = Array.from((s || {}).activeCues || [])
          .map((n) => n.getCueAsHTML())
          .map(ca);
      }
      const t = i.map((s) => s.trim()).join(`
`);
      if (t !== this.elements.captions.innerHTML) {
        Oe(this.elements.captions);
        const s = E("span", ne(this.config.selectors.caption));
        (s.innerHTML = t),
          this.elements.captions.appendChild(s),
          A.call(this, this.media, "cuechange");
      }
    },
  },
  Mi = {
    enabled: !0,
    title: "",
    debug: !1,
    autoplay: !1,
    autopause: !0,
    playsinline: !0,
    seekTime: 10,
    volume: 1,
    muted: !1,
    duration: null,
    displayDuration: !0,
    invertTime: !0,
    toggleInvert: !0,
    ratio: null,
    clickToPlay: !0,
    hideControls: !0,
    resetOnEnd: !1,
    disableContextMenu: !0,
    loadSprite: !0,
    iconPrefix: "plyr",
    iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg",
    blankVideo: "https://cdn.plyr.io/static/blank.mp4",
    quality: {
      default: 576,
      options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
      forced: !1,
      onChange: null,
    },
    loop: { active: !1 },
    speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
    keyboard: { focused: !0, global: !1 },
    tooltips: { controls: !1, seek: !0 },
    captions: { active: !1, language: "auto", update: !1 },
    fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
    storage: { enabled: !0, key: "plyr" },
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "mute",
      "volume",
      "captions",
      "settings",
      "pip",
      "airplay",
      "fullscreen",
    ],
    settings: ["captions", "quality", "speed"],
    i18n: {
      restart: "Restart",
      rewind: "Rewind {seektime}s",
      play: "Play",
      pause: "Pause",
      fastForward: "Forward {seektime}s",
      seek: "Seek",
      seekLabel: "{currentTime} of {duration}",
      played: "Played",
      buffered: "Buffered",
      currentTime: "Current time",
      duration: "Duration",
      volume: "Volume",
      mute: "Mute",
      unmute: "Unmute",
      enableCaptions: "Enable captions",
      disableCaptions: "Disable captions",
      download: "Download",
      enterFullscreen: "Enter fullscreen",
      exitFullscreen: "Exit fullscreen",
      frameTitle: "Player for {title}",
      captions: "Captions",
      settings: "Settings",
      pip: "PIP",
      menuBack: "Go back to previous menu",
      speed: "Speed",
      normal: "Normal",
      quality: "Quality",
      loop: "Loop",
      start: "Start",
      end: "End",
      all: "All",
      reset: "Reset",
      disabled: "Disabled",
      enabled: "Enabled",
      advertisement: "Ad",
      qualityBadge: {
        2160: "4K",
        1440: "HD",
        1080: "HD",
        720: "HD",
        576: "SD",
        480: "SD",
      },
    },
    urls: {
      download: null,
      vimeo: {
        sdk: "https://player.vimeo.com/api/player.js",
        iframe: "https://player.vimeo.com/video/{0}?{1}",
        api: "https://vimeo.com/api/oembed.json?url={0}",
      },
      youtube: {
        sdk: "https://www.youtube.com/iframe_api",
        api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
      },
      googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" },
    },
    listeners: {
      seek: null,
      play: null,
      pause: null,
      restart: null,
      rewind: null,
      fastForward: null,
      mute: null,
      volume: null,
      captions: null,
      download: null,
      fullscreen: null,
      pip: null,
      airplay: null,
      speed: null,
      quality: null,
      loop: null,
      language: null,
    },
    events: [
      "ended",
      "progress",
      "stalled",
      "playing",
      "waiting",
      "canplay",
      "canplaythrough",
      "loadstart",
      "loadeddata",
      "loadedmetadata",
      "timeupdate",
      "volumechange",
      "play",
      "pause",
      "error",
      "seeking",
      "seeked",
      "emptied",
      "ratechange",
      "cuechange",
      "download",
      "enterfullscreen",
      "exitfullscreen",
      "captionsenabled",
      "captionsdisabled",
      "languagechange",
      "controlshidden",
      "controlsshown",
      "ready",
      "statechange",
      "qualitychange",
      "adsloaded",
      "adscontentpause",
      "adscontentresume",
      "adstarted",
      "adsmidpoint",
      "adscomplete",
      "adsallcomplete",
      "adsimpression",
      "adsclick",
    ],
    selectors: {
      editable: "input, textarea, select, [contenteditable]",
      container: ".plyr",
      controls: { container: null, wrapper: ".plyr__controls" },
      labels: "[data-plyr]",
      buttons: {
        play: '[data-plyr="play"]',
        pause: '[data-plyr="pause"]',
        restart: '[data-plyr="restart"]',
        rewind: '[data-plyr="rewind"]',
        fastForward: '[data-plyr="fast-forward"]',
        mute: '[data-plyr="mute"]',
        captions: '[data-plyr="captions"]',
        download: '[data-plyr="download"]',
        fullscreen: '[data-plyr="fullscreen"]',
        pip: '[data-plyr="pip"]',
        airplay: '[data-plyr="airplay"]',
        settings: '[data-plyr="settings"]',
        loop: '[data-plyr="loop"]',
      },
      inputs: {
        seek: '[data-plyr="seek"]',
        volume: '[data-plyr="volume"]',
        speed: '[data-plyr="speed"]',
        language: '[data-plyr="language"]',
        quality: '[data-plyr="quality"]',
      },
      display: {
        currentTime: ".plyr__time--current",
        duration: ".plyr__time--duration",
        buffer: ".plyr__progress__buffer",
        loop: ".plyr__progress__loop",
        volume: ".plyr__volume--display",
      },
      progress: ".plyr__progress",
      captions: ".plyr__captions",
      caption: ".plyr__caption",
    },
    classNames: {
      type: "plyr--{0}",
      provider: "plyr--{0}",
      video: "plyr__video-wrapper",
      embed: "plyr__video-embed",
      videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
      embedContainer: "plyr__video-embed__container",
      poster: "plyr__poster",
      posterEnabled: "plyr__poster-enabled",
      ads: "plyr__ads",
      control: "plyr__control",
      controlPressed: "plyr__control--pressed",
      playing: "plyr--playing",
      paused: "plyr--paused",
      stopped: "plyr--stopped",
      loading: "plyr--loading",
      hover: "plyr--hover",
      tooltip: "plyr__tooltip",
      cues: "plyr__cues",
      marker: "plyr__progress__marker",
      hidden: "plyr__sr-only",
      hideControls: "plyr--hide-controls",
      isTouch: "plyr--is-touch",
      uiSupported: "plyr--full-ui",
      noTransition: "plyr--no-transition",
      display: { time: "plyr__time" },
      menu: {
        value: "plyr__menu__value",
        badge: "plyr__badge",
        open: "plyr--menu-open",
      },
      captions: {
        enabled: "plyr--captions-enabled",
        active: "plyr--captions-active",
      },
      fullscreen: {
        enabled: "plyr--fullscreen-enabled",
        fallback: "plyr--fullscreen-fallback",
      },
      pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" },
      airplay: {
        supported: "plyr--airplay-supported",
        active: "plyr--airplay-active",
      },
      previewThumbnails: {
        thumbContainer: "plyr__preview-thumb",
        thumbContainerShown: "plyr__preview-thumb--is-shown",
        imageContainer: "plyr__preview-thumb__image-container",
        timeContainer: "plyr__preview-thumb__time-container",
        scrubbingContainer: "plyr__preview-scrubbing",
        scrubbingContainerShown: "plyr__preview-scrubbing--is-shown",
      },
    },
    attributes: {
      embed: {
        provider: "data-plyr-provider",
        id: "data-plyr-embed-id",
        hash: "data-plyr-embed-hash",
      },
    },
    ads: { enabled: !1, publisherId: "", tagUrl: "" },
    previewThumbnails: { enabled: !1, src: "" },
    vimeo: {
      byline: !1,
      portrait: !1,
      title: !1,
      speed: !0,
      transparent: !1,
      customControls: !0,
      referrerPolicy: null,
      premium: !1,
    },
    youtube: {
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      customControls: !0,
      noCookie: !1,
    },
    mediaMetadata: { title: "", artist: "", album: "", artwork: [] },
    markers: { enabled: !1, points: [] },
  },
  nt = { active: "picture-in-picture", inactive: "inline" },
  he = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
  at = { audio: "audio", video: "video" };
function ha(e) {
  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
    e
  )
    ? he.youtube
    : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e)
    ? he.vimeo
    : null;
}
const ot = () => {};
class ma {
  constructor(i = !1) {
    (this.enabled = window.console && i),
      this.enabled && this.log("Debugging enabled");
  }
  get log() {
    return this.enabled
      ? Function.prototype.bind.call(console.log, console)
      : ot;
  }
  get warn() {
    return this.enabled
      ? Function.prototype.bind.call(console.warn, console)
      : ot;
  }
  get error() {
    return this.enabled
      ? Function.prototype.bind.call(console.error, console)
      : ot;
  }
}
class ie {
  constructor(i) {
    y(this, "onChange", () => {
      if (!this.supported) return;
      const t = this.player.elements.buttons.fullscreen;
      l.element(t) && (t.pressed = this.active);
      const s =
        this.target === this.player.media
          ? this.target
          : this.player.elements.container;
      A.call(
        this.player,
        s,
        this.active ? "enterfullscreen" : "exitfullscreen",
        !0
      );
    }),
      y(this, "toggleFallback", (t = !1) => {
        if (
          (t
            ? (this.scrollPosition = {
                x: window.scrollX ?? 0,
                y: window.scrollY ?? 0,
              })
            : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y),
          (document.body.style.overflow = t ? "hidden" : ""),
          R(this.target, this.player.config.classNames.fullscreen.fallback, t),
          X.isIos)
        ) {
          let s = document.head.querySelector('meta[name="viewport"]');
          const n = "viewport-fit=cover";
          s ||
            ((s = document.createElement("meta")),
            s.setAttribute("name", "viewport"));
          const o = l.string(s.content) && s.content.includes(n);
          t
            ? ((this.cleanupViewport = !o), o || (s.content += `,${n}`))
            : this.cleanupViewport &&
              (s.content = s.content
                .split(",")
                .filter((a) => a.trim() !== n)
                .join(","));
        }
        this.onChange();
      }),
      y(this, "trapFocus", (t) => {
        if (X.isIos || X.isIPadOS || !this.active || t.key !== "Tab") return;
        const s = document.activeElement,
          n = Ee.call(
            this.player,
            "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
          ),
          [o] = n,
          a = n[n.length - 1];
        s !== a || t.shiftKey
          ? s === o && t.shiftKey && (a.focus(), t.preventDefault())
          : (o.focus(), t.preventDefault());
      }),
      y(this, "update", () => {
        if (this.supported) {
          let t;
          (t = this.forceFallback
            ? "Fallback (forced)"
            : ie.nativeSupported
            ? "Native"
            : "Fallback"),
            this.player.debug.log(`${t} fullscreen enabled`);
        } else
          this.player.debug.log(
            "Fullscreen not supported and fallback disabled"
          );
        R(
          this.player.elements.container,
          this.player.config.classNames.fullscreen.enabled,
          this.supported
        );
      }),
      y(this, "enter", () => {
        this.supported &&
          (X.isIos && this.player.config.fullscreen.iosNative
            ? this.player.isVimeo
              ? this.player.embed.requestFullscreen()
              : this.target.webkitEnterFullscreen()
            : !ie.nativeSupported || this.forceFallback
            ? this.toggleFallback(!0)
            : this.prefix
            ? l.empty(this.prefix) ||
              this.target[`${this.prefix}Request${this.property}`]()
            : this.target.requestFullscreen({ navigationUI: "hide" }));
      }),
      y(this, "exit", () => {
        if (this.supported)
          if (X.isIos && this.player.config.fullscreen.iosNative)
            this.player.isVimeo
              ? this.player.embed.exitFullscreen()
              : this.target.webkitEnterFullscreen(),
              oe(this.player.play());
          else if (!ie.nativeSupported || this.forceFallback)
            this.toggleFallback(!1);
          else if (this.prefix) {
            if (!l.empty(this.prefix)) {
              const t = this.prefix === "moz" ? "Cancel" : "Exit";
              document[`${this.prefix}${t}${this.property}`]();
            }
          } else
            (document.cancelFullScreen || document.exitFullscreen).call(
              document
            );
      }),
      y(this, "toggle", () => {
        this.active ? this.exit() : this.enter();
      }),
      (this.player = i),
      (this.prefix = ie.prefix),
      (this.property = ie.property),
      (this.scrollPosition = { x: 0, y: 0 }),
      (this.forceFallback = i.config.fullscreen.fallback === "force"),
      (this.player.elements.fullscreen =
        i.config.fullscreen.container &&
        Zn(this.player.elements.container, i.config.fullscreen.container)),
      L.call(
        this.player,
        document,
        this.prefix === "ms"
          ? "MSFullscreenChange"
          : `${this.prefix}fullscreenchange`,
        () => {
          this.onChange();
        }
      ),
      L.call(this.player, this.player.elements.container, "dblclick", (t) => {
        (l.element(this.player.elements.controls) &&
          this.player.elements.controls.contains(t.target)) ||
          this.player.listeners.proxy(t, this.toggle, "fullscreen");
      }),
      L.call(this, this.player.elements.container, "keydown", (t) =>
        this.trapFocus(t)
      ),
      this.update();
  }
  static get nativeSupported() {
    return !!(
      document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled
    );
  }
  get useNative() {
    return ie.nativeSupported && !this.forceFallback;
  }
  static get prefix() {
    if (l.function(document.exitFullscreen)) return "";
    let i = "";
    return (
      ["webkit", "moz", "ms"].some(
        (t) =>
          !(
            !l.function(document[`${t}ExitFullscreen`]) &&
            !l.function(document[`${t}CancelFullScreen`])
          ) && ((i = t), !0)
      ),
      i
    );
  }
  static get property() {
    return this.prefix === "moz" ? "FullScreen" : "Fullscreen";
  }
  get supported() {
    return [
      this.player.config.fullscreen.enabled,
      this.player.isVideo,
      ie.nativeSupported || this.player.config.fullscreen.fallback,
      !this.player.isYouTube ||
        ie.nativeSupported ||
        !X.isIos ||
        (this.player.config.playsinline &&
          !this.player.config.fullscreen.iosNative),
    ].every(Boolean);
  }
  get active() {
    if (!this.supported) return !1;
    if (!ie.nativeSupported || this.forceFallback)
      return He(this.target, this.player.config.classNames.fullscreen.fallback);
    const i = this.prefix
      ? this.target.getRootNode()[`${this.prefix}${this.property}Element`]
      : this.target.getRootNode().fullscreenElement;
    return i && i.shadowRoot
      ? i === this.target.getRootNode().host
      : i === this.target;
  }
  get target() {
    return X.isIos && this.player.config.fullscreen.iosNative
      ? this.player.media
      : this.player.elements.fullscreen ?? this.player.elements.container;
  }
}
function Re(e, i = 1) {
  return new Promise((t, s) => {
    const n = new Image(),
      o = () => {
        delete n.onload, delete n.onerror, (n.naturalWidth >= i ? t : s)(n);
      };
    Object.assign(n, { onload: o, onerror: o, src: e });
  });
}
const B = {
  addStyleHook() {
    R(
      this.elements.container,
      this.config.selectors.container.replace(".", ""),
      !0
    ),
      R(
        this.elements.container,
        this.config.classNames.uiSupported,
        this.supported.ui
      );
  },
  toggleNativeControls(e = !1) {
    e && this.isHTML5
      ? this.media.setAttribute("controls", "")
      : this.media.removeAttribute("controls");
  },
  build() {
    if ((this.listeners.media(), !this.supported.ui))
      return (
        this.debug.warn(`Basic support only for ${this.provider} ${this.type}`),
        void B.toggleNativeControls.call(this, !0)
      );
    l.element(this.elements.controls) ||
      (b.inject.call(this), this.listeners.controls()),
      B.toggleNativeControls.call(this),
      this.isHTML5 && I.setup.call(this),
      (this.volume = null),
      (this.muted = null),
      (this.loop = null),
      (this.quality = null),
      (this.speed = null),
      b.updateVolume.call(this),
      b.timeUpdate.call(this),
      b.durationUpdate.call(this),
      B.checkPlaying.call(this),
      R(
        this.elements.container,
        this.config.classNames.pip.supported,
        z.pip && this.isHTML5 && this.isVideo
      ),
      R(
        this.elements.container,
        this.config.classNames.airplay.supported,
        z.airplay && this.isHTML5
      ),
      R(this.elements.container, this.config.classNames.isTouch, this.touch),
      (this.ready = !0),
      setTimeout(() => {
        A.call(this, this.media, "ready");
      }, 0),
      B.setTitle.call(this),
      this.poster && B.setPoster.call(this, this.poster, !1).catch(() => {}),
      this.config.duration && b.durationUpdate.call(this),
      this.config.mediaMetadata && b.setMediaMetadata.call(this);
  },
  setTitle() {
    let e = Y.get("play", this.config);
    if (
      (l.string(this.config.title) &&
        !l.empty(this.config.title) &&
        (e += `, ${this.config.title}`),
      Array.from(this.elements.buttons.play || []).forEach((i) => {
        i.setAttribute("aria-label", e);
      }),
      this.isEmbed)
    ) {
      const i = K.call(this, "iframe");
      if (!l.element(i)) return;
      const t = l.empty(this.config.title) ? "video" : this.config.title,
        s = Y.get("frameTitle", this.config);
      i.setAttribute("title", s.replace("{title}", t));
    }
  },
  togglePoster(e) {
    R(this.elements.container, this.config.classNames.posterEnabled, e);
  },
  setPoster(e, i = !0) {
    return i && this.poster
      ? Promise.reject(new Error("Poster already set"))
      : (this.media.setAttribute("data-poster", e),
        this.elements.poster.removeAttribute("hidden"),
        ia
          .call(this)
          .then(() => Re(e))
          .catch((t) => {
            throw (e === this.poster && B.togglePoster.call(this, !1), t);
          })
          .then(() => {
            if (e !== this.poster)
              throw new Error("setPoster cancelled by later call to setPoster");
          })
          .then(
            () => (
              Object.assign(this.elements.poster.style, {
                backgroundImage: `url('${e}')`,
                backgroundSize: "",
              }),
              B.togglePoster.call(this, !0),
              e
            )
          ));
  },
  checkPlaying(e) {
    R(this.elements.container, this.config.classNames.playing, this.playing),
      R(this.elements.container, this.config.classNames.paused, this.paused),
      R(this.elements.container, this.config.classNames.stopped, this.stopped),
      Array.from(this.elements.buttons.play || []).forEach((i) => {
        Object.assign(i, { pressed: this.playing }),
          i.setAttribute(
            "aria-label",
            Y.get(this.playing ? "pause" : "play", this.config)
          );
      }),
      (l.event(e) && e.type === "timeupdate") || B.toggleControls.call(this);
  },
  checkLoading(e) {
    (this.loading = ["stalled", "waiting"].includes(e.type)),
      clearTimeout(this.timers.loading),
      (this.timers.loading = setTimeout(
        () => {
          R(
            this.elements.container,
            this.config.classNames.loading,
            this.loading
          ),
            B.toggleControls.call(this);
        },
        this.loading ? 250 : 0
      ));
  },
  toggleControls(e) {
    const { controls: i } = this.elements;
    if (i && this.config.hideControls) {
      const t = this.touch && this.lastSeekTime + 2e3 > Date.now();
      this.toggleControls(
        !!(e || this.loading || this.paused || i.pressed || i.hover || t)
      );
    }
  },
  migrateStyles() {
    Object.values({ ...this.media.style })
      .filter((e) => !l.empty(e) && l.string(e) && e.startsWith("--plyr"))
      .forEach((e) => {
        this.elements.container.style.setProperty(
          e,
          this.media.style.getPropertyValue(e)
        ),
          this.media.style.removeProperty(e);
      }),
      l.empty(this.media.style) && this.media.removeAttribute("style");
  },
};
class pa {
  constructor(i) {
    y(this, "firstTouch", () => {
      const { player: t } = this,
        { elements: s } = t;
      (t.touch = !0), R(s.container, t.config.classNames.isTouch, !0);
    }),
      y(this, "global", (t = !0) => {
        const { player: s } = this;
        s.config.keyboard.global &&
          Ae.call(s, window, "keydown keyup", this.handleKey, t, !1),
          Ae.call(s, document.body, "click", this.toggleMenu, t),
          St.call(s, document.body, "touchstart", this.firstTouch);
      }),
      y(this, "container", () => {
        const { player: t } = this,
          { config: s, elements: n, timers: o } = t;
        !s.keyboard.global &&
          s.keyboard.focused &&
          L.call(t, n.container, "keydown keyup", this.handleKey, !1),
          L.call(
            t,
            n.container,
            "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
            (c) => {
              const { controls: u } = n;
              u &&
                c.type === "enterfullscreen" &&
                ((u.pressed = !1), (u.hover = !1));
              let d = 0;
              ["touchstart", "touchmove", "mousemove"].includes(c.type) &&
                (B.toggleControls.call(t, !0), (d = t.touch ? 3e3 : 2e3)),
                clearTimeout(o.controls),
                (o.controls = setTimeout(
                  () => B.toggleControls.call(t, !1),
                  d
                ));
            }
          );
        const a = () => {
            if (!t.isVimeo || t.config.vimeo.premium) return;
            const c = n.wrapper,
              { active: u } = t.fullscreen,
              [d, m] = Ct.call(t),
              h = ki(`aspect-ratio: ${d} / ${m}`);
            if (!u)
              return void (h
                ? ((c.style.width = null), (c.style.height = null))
                : ((c.style.maxWidth = null), (c.style.margin = null)));
            const [v, T] = sa(),
              S = v / T > d / m;
            h
              ? ((c.style.width = S ? "auto" : "100%"),
                (c.style.height = S ? "100%" : "auto"))
              : ((c.style.maxWidth = S ? (T / m) * d + "px" : null),
                (c.style.margin = S ? "0 auto" : null));
          },
          r = () => {
            clearTimeout(o.resized), (o.resized = setTimeout(a, 50));
          };
        L.call(t, n.container, "enterfullscreen exitfullscreen", (c) => {
          const { target: u } = t.fullscreen;
          u === n.container &&
            ((!t.isEmbed && l.empty(t.config.ratio)) ||
              (a(),
              (c.type === "enterfullscreen" ? L : Ye).call(
                t,
                window,
                "resize",
                r
              )));
        });
      }),
      y(this, "media", () => {
        const { player: t } = this,
          { elements: s } = t;
        if (
          (L.call(t, t.media, "timeupdate seeking seeked", (o) =>
            b.timeUpdate.call(t, o)
          ),
          L.call(t, t.media, "durationchange loadeddata loadedmetadata", (o) =>
            b.durationUpdate.call(t, o)
          ),
          L.call(t, t.media, "ended", () => {
            t.isHTML5 &&
              t.isVideo &&
              t.config.resetOnEnd &&
              (t.restart(), t.pause());
          }),
          L.call(t, t.media, "progress playing seeking seeked", (o) =>
            b.updateProgress.call(t, o)
          ),
          L.call(t, t.media, "volumechange", (o) => b.updateVolume.call(t, o)),
          L.call(
            t,
            t.media,
            "playing play pause ended emptied timeupdate",
            (o) => B.checkPlaying.call(t, o)
          ),
          L.call(t, t.media, "waiting canplay seeked playing", (o) =>
            B.checkLoading.call(t, o)
          ),
          t.supported.ui && t.config.clickToPlay && !t.isAudio)
        ) {
          const o = K.call(t, `.${t.config.classNames.video}`);
          if (!l.element(o)) return;
          L.call(t, s.container, "click", (a) => {
            ([s.container, o].includes(a.target) || o.contains(a.target)) &&
              ((t.touch && t.config.hideControls) ||
                (t.ended
                  ? (this.proxy(a, t.restart, "restart"),
                    this.proxy(
                      a,
                      () => {
                        oe(t.play());
                      },
                      "play"
                    ))
                  : this.proxy(
                      a,
                      () => {
                        oe(t.togglePlay());
                      },
                      "play"
                    )));
          });
        }
        t.supported.ui &&
          t.config.disableContextMenu &&
          L.call(
            t,
            s.wrapper,
            "contextmenu",
            (o) => {
              o.preventDefault();
            },
            !1
          ),
          L.call(t, t.media, "volumechange", () => {
            t.storage.set({ volume: t.volume, muted: t.muted });
          }),
          L.call(t, t.media, "ratechange", () => {
            b.updateSetting.call(t, "speed"), t.storage.set({ speed: t.speed });
          }),
          L.call(t, t.media, "qualitychange", (o) => {
            b.updateSetting.call(t, "quality", null, o.detail.quality);
          }),
          L.call(t, t.media, "ready qualitychange", () => {
            b.setDownloadUrl.call(t);
          });
        const n = t.config.events.concat(["keyup", "keydown"]).join(" ");
        L.call(t, t.media, n, (o) => {
          let { detail: a = {} } = o;
          o.type === "error" && (a = t.media.error),
            A.call(t, s.container, o.type, !0, a);
        });
      }),
      y(this, "proxy", (t, s, n) => {
        const { player: o } = this,
          a = o.config.listeners[n];
        let r = !0;
        l.function(a) && (r = a.call(o, t)),
          r !== !1 && l.function(s) && s.call(o, t);
      }),
      y(this, "bind", (t, s, n, o, a = !0) => {
        const { player: r } = this,
          c = r.config.listeners[o],
          u = l.function(c);
        L.call(r, t, s, (d) => this.proxy(d, n, o), a && !u);
      }),
      y(this, "controls", () => {
        const { player: t } = this,
          { elements: s } = t,
          n = X.isIE ? "change" : "input";
        if (
          (s.buttons.play &&
            Array.from(s.buttons.play).forEach((o) => {
              this.bind(
                o,
                "click",
                () => {
                  oe(t.togglePlay());
                },
                "play"
              );
            }),
          this.bind(s.buttons.restart, "click", t.restart, "restart"),
          this.bind(
            s.buttons.rewind,
            "click",
            () => {
              (t.lastSeekTime = Date.now()), t.rewind();
            },
            "rewind"
          ),
          this.bind(
            s.buttons.fastForward,
            "click",
            () => {
              (t.lastSeekTime = Date.now()), t.forward();
            },
            "fastForward"
          ),
          this.bind(
            s.buttons.mute,
            "click",
            () => {
              t.muted = !t.muted;
            },
            "mute"
          ),
          this.bind(s.buttons.captions, "click", () => t.toggleCaptions()),
          this.bind(
            s.buttons.download,
            "click",
            () => {
              A.call(t, t.media, "download");
            },
            "download"
          ),
          this.bind(
            s.buttons.fullscreen,
            "click",
            () => {
              t.fullscreen.toggle();
            },
            "fullscreen"
          ),
          this.bind(
            s.buttons.pip,
            "click",
            () => {
              t.pip = "toggle";
            },
            "pip"
          ),
          this.bind(s.buttons.airplay, "click", t.airplay, "airplay"),
          this.bind(
            s.buttons.settings,
            "click",
            (o) => {
              o.stopPropagation(), o.preventDefault(), b.toggleMenu.call(t, o);
            },
            null,
            !1
          ),
          this.bind(
            s.buttons.settings,
            "keyup",
            (o) => {
              [" ", "Enter"].includes(o.key) &&
                (o.key !== "Enter"
                  ? (o.preventDefault(),
                    o.stopPropagation(),
                    b.toggleMenu.call(t, o))
                  : b.focusFirstMenuItem.call(t, null, !0));
            },
            null,
            !1
          ),
          this.bind(s.settings.menu, "keydown", (o) => {
            o.key === "Escape" && b.toggleMenu.call(t, o);
          }),
          this.bind(s.inputs.seek, "mousedown mousemove", (o) => {
            const a = s.progress.getBoundingClientRect(),
              r = (100 / a.width) * (o.pageX - a.left);
            o.currentTarget.setAttribute("seek-value", r);
          }),
          this.bind(
            s.inputs.seek,
            "mousedown mouseup keydown keyup touchstart touchend",
            (o) => {
              const a = o.currentTarget,
                r = "play-on-seeked";
              if (
                l.keyboardEvent(o) &&
                !["ArrowLeft", "ArrowRight"].includes(o.key)
              )
                return;
              t.lastSeekTime = Date.now();
              const c = a.hasAttribute(r),
                u = ["mouseup", "touchend", "keyup"].includes(o.type);
              c && u
                ? (a.removeAttribute(r), oe(t.play()))
                : !u && t.playing && (a.setAttribute(r, ""), t.pause());
            }
          ),
          X.isIos)
        ) {
          const o = Ee.call(t, 'input[type="range"]');
          Array.from(o).forEach((a) => this.bind(a, n, (r) => yi(r.target)));
        }
        this.bind(
          s.inputs.seek,
          n,
          (o) => {
            const a = o.currentTarget;
            let r = a.getAttribute("seek-value");
            l.empty(r) && (r = a.value),
              a.removeAttribute("seek-value"),
              (t.currentTime = (r / a.max) * t.duration);
          },
          "seek"
        ),
          this.bind(s.progress, "mouseenter mouseleave mousemove", (o) =>
            b.updateSeekTooltip.call(t, o)
          ),
          this.bind(s.progress, "mousemove touchmove", (o) => {
            const { previewThumbnails: a } = t;
            a && a.loaded && a.startMove(o);
          }),
          this.bind(s.progress, "mouseleave touchend click", () => {
            const { previewThumbnails: o } = t;
            o && o.loaded && o.endMove(!1, !0);
          }),
          this.bind(s.progress, "mousedown touchstart", (o) => {
            const { previewThumbnails: a } = t;
            a && a.loaded && a.startScrubbing(o);
          }),
          this.bind(s.progress, "mouseup touchend", (o) => {
            const { previewThumbnails: a } = t;
            a && a.loaded && a.endScrubbing(o);
          }),
          X.isWebKit &&
            Array.from(Ee.call(t, 'input[type="range"]')).forEach((o) => {
              this.bind(o, "input", (a) => b.updateRangeFill.call(t, a.target));
            }),
          t.config.toggleInvert &&
            !l.element(s.display.duration) &&
            this.bind(s.display.currentTime, "click", () => {
              t.currentTime !== 0 &&
                ((t.config.invertTime = !t.config.invertTime),
                b.timeUpdate.call(t));
            }),
          this.bind(
            s.inputs.volume,
            n,
            (o) => {
              t.volume = o.target.value;
            },
            "volume"
          ),
          this.bind(s.controls, "mouseenter mouseleave", (o) => {
            s.controls.hover = !t.touch && o.type === "mouseenter";
          }),
          s.fullscreen &&
            Array.from(s.fullscreen.children)
              .filter((o) => !o.contains(s.container))
              .forEach((o) => {
                this.bind(o, "mouseenter mouseleave", (a) => {
                  s.controls &&
                    (s.controls.hover = !t.touch && a.type === "mouseenter");
                });
              }),
          this.bind(
            s.controls,
            "mousedown mouseup touchstart touchend touchcancel",
            (o) => {
              s.controls.pressed = ["mousedown", "touchstart"].includes(o.type);
            }
          ),
          this.bind(s.controls, "focusin", () => {
            const { config: o, timers: a } = t;
            R(s.controls, o.classNames.noTransition, !0),
              B.toggleControls.call(t, !0),
              setTimeout(() => {
                R(s.controls, o.classNames.noTransition, !1);
              }, 0);
            const r = this.touch ? 3e3 : 4e3;
            clearTimeout(a.controls),
              (a.controls = setTimeout(() => B.toggleControls.call(t, !1), r));
          }),
          this.bind(
            s.inputs.volume,
            "wheel",
            (o) => {
              const a = o.webkitDirectionInvertedFromDevice,
                [r, c] = [o.deltaX, -o.deltaY].map((m) => (a ? -m : m)),
                u = Math.sign(Math.abs(r) > Math.abs(c) ? r : c);
              t.increaseVolume(u / 50);
              const { volume: d } = t.media;
              ((u === 1 && d < 1) || (u === -1 && d > 0)) && o.preventDefault();
            },
            "volume",
            !1
          );
      }),
      (this.player = i),
      (this.lastKey = null),
      (this.focusTimer = null),
      (this.lastKeyDown = null),
      (this.handleKey = this.handleKey.bind(this)),
      (this.toggleMenu = this.toggleMenu.bind(this)),
      (this.firstTouch = this.firstTouch.bind(this));
  }
  handleKey(i) {
    const { player: t } = this,
      { elements: s } = t,
      { key: n, type: o, altKey: a, ctrlKey: r, metaKey: c, shiftKey: u } = i,
      d = o === "keydown",
      m = d && n === this.lastKey;
    if (!(a || r || c || u) && n) {
      if (d) {
        const v = document.activeElement;
        if (l.element(v)) {
          const { editable: T } = t.config.selectors,
            { seek: S } = s.inputs;
          if (
            (v !== S && fe(v, T)) ||
            (i.key === " " && fe(v, 'button, [role^="menuitem"]'))
          )
            return;
        }
        switch (
          ([
            " ",
            "ArrowLeft",
            "ArrowUp",
            "ArrowRight",
            "ArrowDown",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "c",
            "f",
            "k",
            "l",
            "m",
          ].includes(n) && (i.preventDefault(), i.stopPropagation()),
          n)
        ) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            m ||
              ((h = parseInt(n, 10)), (t.currentTime = (t.duration / 10) * h));
            break;
          case " ":
          case "k":
            m || oe(t.togglePlay());
            break;
          case "ArrowUp":
            t.increaseVolume(0.1);
            break;
          case "ArrowDown":
            t.decreaseVolume(0.1);
            break;
          case "m":
            m || (t.muted = !t.muted);
            break;
          case "ArrowRight":
            t.forward();
            break;
          case "ArrowLeft":
            t.rewind();
            break;
          case "f":
            t.fullscreen.toggle();
            break;
          case "c":
            m || t.toggleCaptions();
            break;
          case "l":
            t.loop = !t.loop;
        }
        n === "Escape" &&
          !t.fullscreen.usingNative &&
          t.fullscreen.active &&
          t.fullscreen.toggle(),
          (this.lastKey = n);
      } else this.lastKey = null;
      var h;
    }
  }
  toggleMenu(i) {
    b.toggleMenu.call(this.player, i);
  }
}
function fa(e, i) {
  return e((i = { exports: {} }), i.exports), i.exports;
}
var ga = fa(function (e, i) {
  e.exports = (function () {
    var t = function () {},
      s = {},
      n = {},
      o = {};
    function a(h, v) {
      h = h.push ? h : [h];
      var T,
        S,
        x,
        C = [],
        f = h.length,
        M = f;
      for (
        T = function (j, V) {
          V.length && C.push(j), --M || v(C);
        };
        f--;

      )
        (S = h[f]), (x = n[S]) ? T(S, x) : (o[S] = o[S] || []).push(T);
    }
    function r(h, v) {
      if (h) {
        var T = o[h];
        if (((n[h] = v), T)) for (; T.length; ) T[0](h, v), T.splice(0, 1);
      }
    }
    function c(h, v) {
      h.call && (h = { success: h }),
        v.length ? (h.error || t)(v) : (h.success || t)(h);
    }
    function u(h, v, T, S) {
      var x,
        C,
        f = document,
        M = T.async,
        j = (T.numRetries || 0) + 1,
        V = T.before || t,
        N = h.replace(/[\?|#].*$/, ""),
        p = h.replace(/^(css|img)!/, "");
      (S = S || 0),
        /(^css!|\.css$)/.test(N)
          ? (((C = f.createElement("link")).rel = "stylesheet"),
            (C.href = p),
            (x = "hideFocus" in C) &&
              C.relList &&
              ((x = 0), (C.rel = "preload"), (C.as = "style")))
          : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(N)
          ? ((C = f.createElement("img")).src = p)
          : (((C = f.createElement("script")).src = h),
            (C.async = M === void 0 || M)),
        (C.onload =
          C.onerror =
          C.onbeforeload =
            function (k) {
              var _ = k.type[0];
              if (x)
                try {
                  C.sheet.cssText.length || (_ = "e");
                } catch ($) {
                  $.code != 18 && (_ = "e");
                }
              if (_ == "e") {
                if ((S += 1) < j) return u(h, v, T, S);
              } else if (C.rel == "preload" && C.as == "style")
                return (C.rel = "stylesheet");
              v(h, _, k.defaultPrevented);
            }),
        V(h, C) !== !1 && f.head.appendChild(C);
    }
    function d(h, v, T) {
      var S,
        x,
        C = (h = h.push ? h : [h]).length,
        f = C,
        M = [];
      for (
        S = function (j, V, N) {
          if ((V == "e" && M.push(j), V == "b")) {
            if (!N) return;
            M.push(j);
          }
          --C || v(M);
        },
          x = 0;
        x < f;
        x++
      )
        u(h[x], S, T);
    }
    function m(h, v, T) {
      var S, x;
      if ((v && v.trim && (S = v), (x = (S ? T : v) || {}), S)) {
        if (S in s) throw "LoadJS";
        s[S] = !0;
      }
      function C(f, M) {
        d(
          h,
          function (j) {
            c(x, j), f && c({ success: f, error: M }, j), r(S, j);
          },
          x
        );
      }
      if (x.returnPromise) return new Promise(C);
      C();
    }
    return (
      (m.ready = function (h, v) {
        return (
          a(h, function (T) {
            c(v, T);
          }),
          m
        );
      }),
      (m.done = function (h) {
        r(h, []);
      }),
      (m.reset = function () {
        (s = {}), (n = {}), (o = {});
      }),
      (m.isDefined = function (h) {
        return h in s;
      }),
      m
    );
  })();
});
function Et(e) {
  return new Promise((i, t) => {
    ga(e, { success: i, error: t });
  });
}
function ba(e) {
  return l.empty(e)
    ? null
    : l.number(Number(e))
    ? e
    : e.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
    ? RegExp.$2
    : e;
}
function ya(e) {
  const i = e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
  return i && i.length === 5 ? i[4] : null;
}
function we(e) {
  e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
    this.media.paused === e &&
      ((this.media.paused = !e),
      A.call(this, this.media, e ? "play" : "pause"));
}
const ht = {
  setup() {
    const e = this;
    R(e.elements.wrapper, e.config.classNames.embed, !0),
      (e.options.speed = e.config.speed.options),
      ye.call(e),
      l.object(window.Vimeo)
        ? ht.ready.call(e)
        : Et(e.config.urls.vimeo.sdk)
            .then(() => {
              ht.ready.call(e);
            })
            .catch((i) => {
              e.debug.warn("Vimeo SDK (player.js) failed to load", i);
            });
  },
  ready() {
    const e = this,
      i = e.config.vimeo,
      { premium: t, referrerPolicy: s, ...n } = i;
    let o = e.media.getAttribute("src"),
      a = "";
    l.empty(o)
      ? ((o = e.media.getAttribute(e.config.attributes.embed.id)),
        (a = e.media.getAttribute(e.config.attributes.embed.hash)))
      : (a = ya(o));
    const r = a ? { h: a } : {};
    t && Object.assign(n, { controls: !1, sidedock: !1 });
    const c = Pi({
        loop: e.config.loop.active,
        autoplay: e.autoplay,
        muted: e.muted,
        gesture: "media",
        playsinline: e.config.playsinline,
        ...r,
        ...n,
      }),
      u = ba(o),
      d = E("iframe"),
      m = dt(e.config.urls.vimeo.iframe, u, c);
    if (
      (d.setAttribute("src", m),
      d.setAttribute("allowfullscreen", ""),
      d.setAttribute(
        "allow",
        [
          "autoplay",
          "fullscreen",
          "picture-in-picture",
          "encrypted-media",
          "accelerometer",
          "gyroscope",
        ].join("; ")
      ),
      l.empty(s) || d.setAttribute("referrerPolicy", s),
      t || !i.customControls)
    )
      d.setAttribute("data-poster", e.poster), (e.media = je(d, e.media));
    else {
      const f = E("div", {
        class: e.config.classNames.embedContainer,
        "data-poster": e.poster,
      });
      f.appendChild(d), (e.media = je(f, e.media));
    }
    i.customControls ||
      $e(dt(e.config.urls.vimeo.api, m)).then((f) => {
        !l.empty(f) &&
          f.thumbnail_url &&
          B.setPoster.call(e, f.thumbnail_url).catch(() => {});
      }),
      (e.embed = new window.Vimeo.Player(d, {
        autopause: e.config.autopause,
        muted: e.muted,
      })),
      (e.media.paused = !0),
      (e.media.currentTime = 0),
      e.supported.ui && e.embed.disableTextTrack(),
      (e.media.play = () => (we.call(e, !0), e.embed.play())),
      (e.media.pause = () => (we.call(e, !1), e.embed.pause())),
      (e.media.stop = () => {
        e.pause(), (e.currentTime = 0);
      });
    let { currentTime: h } = e.media;
    Object.defineProperty(e.media, "currentTime", {
      get: () => h,
      set(f) {
        const { embed: M, media: j, paused: V, volume: N } = e,
          p = V && !M.hasPlayed;
        (j.seeking = !0),
          A.call(e, j, "seeking"),
          Promise.resolve(p && M.setVolume(0))
            .then(() => M.setCurrentTime(f))
            .then(() => p && M.pause())
            .then(() => p && M.setVolume(N))
            .catch(() => {});
      },
    });
    let v = e.config.speed.selected;
    Object.defineProperty(e.media, "playbackRate", {
      get: () => v,
      set(f) {
        e.embed
          .setPlaybackRate(f)
          .then(() => {
            (v = f), A.call(e, e.media, "ratechange");
          })
          .catch(() => {
            e.options.speed = [1];
          });
      },
    });
    let { volume: T } = e.config;
    Object.defineProperty(e.media, "volume", {
      get: () => T,
      set(f) {
        e.embed.setVolume(f).then(() => {
          (T = f), A.call(e, e.media, "volumechange");
        });
      },
    });
    let { muted: S } = e.config;
    Object.defineProperty(e.media, "muted", {
      get: () => S,
      set(f) {
        const M = !!l.boolean(f) && f;
        e.embed.setMuted(!!M || e.config.muted).then(() => {
          (S = M), A.call(e, e.media, "volumechange");
        });
      },
    });
    let x,
      { loop: C } = e.config;
    Object.defineProperty(e.media, "loop", {
      get: () => C,
      set(f) {
        const M = l.boolean(f) ? f : e.config.loop.active;
        e.embed.setLoop(M).then(() => {
          C = M;
        });
      },
    }),
      e.embed
        .getVideoUrl()
        .then((f) => {
          (x = f), b.setDownloadUrl.call(e);
        })
        .catch((f) => {
          this.debug.warn(f);
        }),
      Object.defineProperty(e.media, "currentSrc", { get: () => x }),
      Object.defineProperty(e.media, "ended", {
        get: () => e.currentTime === e.duration,
      }),
      Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then(
        (f) => {
          const [M, j] = f;
          (e.embed.ratio = Si(M, j)), ye.call(this);
        }
      ),
      e.embed.setAutopause(e.config.autopause).then((f) => {
        e.config.autopause = f;
      }),
      e.embed.getVideoTitle().then((f) => {
        (e.config.title = f), B.setTitle.call(this);
      }),
      e.embed.getCurrentTime().then((f) => {
        (h = f), A.call(e, e.media, "timeupdate");
      }),
      e.embed.getDuration().then((f) => {
        (e.media.duration = f), A.call(e, e.media, "durationchange");
      }),
      e.embed.getTextTracks().then((f) => {
        (e.media.textTracks = f), I.setup.call(e);
      }),
      e.embed.on("cuechange", ({ cues: f = [] }) => {
        const M = f.map((j) => la(j.text));
        I.updateCues.call(e, M);
      }),
      e.embed.on("loaded", () => {
        e.embed.getPaused().then((f) => {
          we.call(e, !f), f || A.call(e, e.media, "playing");
        }),
          l.element(e.embed.element) &&
            e.supported.ui &&
            e.embed.element.setAttribute("tabindex", -1);
      }),
      e.embed.on("bufferstart", () => {
        A.call(e, e.media, "waiting");
      }),
      e.embed.on("bufferend", () => {
        A.call(e, e.media, "playing");
      }),
      e.embed.on("play", () => {
        we.call(e, !0), A.call(e, e.media, "playing");
      }),
      e.embed.on("pause", () => {
        we.call(e, !1);
      }),
      e.embed.on("timeupdate", (f) => {
        (e.media.seeking = !1),
          (h = f.seconds),
          A.call(e, e.media, "timeupdate");
      }),
      e.embed.on("progress", (f) => {
        (e.media.buffered = f.percent),
          A.call(e, e.media, "progress"),
          parseInt(f.percent, 10) === 1 && A.call(e, e.media, "canplaythrough"),
          e.embed.getDuration().then((M) => {
            M !== e.media.duration &&
              ((e.media.duration = M), A.call(e, e.media, "durationchange"));
          });
      }),
      e.embed.on("seeked", () => {
        (e.media.seeking = !1), A.call(e, e.media, "seeked");
      }),
      e.embed.on("ended", () => {
        (e.media.paused = !0), A.call(e, e.media, "ended");
      }),
      e.embed.on("error", (f) => {
        (e.media.error = f), A.call(e, e.media, "error");
      }),
      i.customControls && setTimeout(() => B.build.call(e), 0);
  },
};
function va(e) {
  return l.empty(e)
    ? null
    : e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)
    ? RegExp.$2
    : e;
}
function _e(e) {
  e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
    this.media.paused === e &&
      ((this.media.paused = !e),
      A.call(this, this.media, e ? "play" : "pause"));
}
function wa(e) {
  return e.noCookie
    ? "https://www.youtube-nocookie.com"
    : window.location.protocol === "http:"
    ? "http://www.youtube.com"
    : void 0;
}
const De = {
    setup() {
      if (
        (R(this.elements.wrapper, this.config.classNames.embed, !0),
        l.object(window.YT) && l.function(window.YT.Player))
      )
        De.ready.call(this);
      else {
        const e = window.onYouTubeIframeAPIReady;
        (window.onYouTubeIframeAPIReady = () => {
          l.function(e) && e(), De.ready.call(this);
        }),
          Et(this.config.urls.youtube.sdk).catch((i) => {
            this.debug.warn("YouTube API failed to load", i);
          });
      }
    },
    getTitle(e) {
      $e(dt(this.config.urls.youtube.api, e))
        .then((i) => {
          if (l.object(i)) {
            const { title: t, height: s, width: n } = i;
            (this.config.title = t),
              B.setTitle.call(this),
              (this.embed.ratio = Si(n, s));
          }
          ye.call(this);
        })
        .catch(() => {
          ye.call(this);
        });
    },
    ready() {
      const e = this,
        i = e.config.youtube,
        t = e.media && e.media.getAttribute("id");
      if (!l.empty(t) && t.startsWith("youtube-")) return;
      let s = e.media.getAttribute("src");
      l.empty(s) && (s = e.media.getAttribute(this.config.attributes.embed.id));
      const n = va(s),
        o = E("div", {
          id: na(e.provider),
          "data-poster": i.customControls ? e.poster : void 0,
        });
      if (((e.media = je(o, e.media)), i.customControls)) {
        const a = (r) => `https://i.ytimg.com/vi/${n}/${r}default.jpg`;
        Re(a("maxres"), 121)
          .catch(() => Re(a("sd"), 121))
          .catch(() => Re(a("hq")))
          .then((r) => B.setPoster.call(e, r.src))
          .then((r) => {
            r.includes("maxres") ||
              (e.elements.poster.style.backgroundSize = "cover");
          })
          .catch(() => {});
      }
      e.embed = new window.YT.Player(e.media, {
        videoId: n,
        host: wa(i),
        playerVars: W(
          {},
          {
            autoplay: e.config.autoplay ? 1 : 0,
            hl: e.config.hl,
            controls: e.supported.ui && i.customControls ? 0 : 1,
            disablekb: 1,
            playsinline:
              e.config.playsinline && !e.config.fullscreen.iosNative ? 1 : 0,
            cc_load_policy: e.captions.active ? 1 : 0,
            cc_lang_pref: e.config.captions.language,
            widget_referrer: window ? window.location.href : null,
          },
          i
        ),
        events: {
          onError(a) {
            if (!e.media.error) {
              const r = a.data,
                c =
                  {
                    2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                    5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                    100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                    101: "The owner of the requested video does not allow it to be played in embedded players.",
                    150: "The owner of the requested video does not allow it to be played in embedded players.",
                  }[r] || "An unknown error occurred";
              (e.media.error = { code: r, message: c }),
                A.call(e, e.media, "error");
            }
          },
          onPlaybackRateChange(a) {
            const r = a.target;
            (e.media.playbackRate = r.getPlaybackRate()),
              A.call(e, e.media, "ratechange");
          },
          onReady(a) {
            if (l.function(e.media.play)) return;
            const r = a.target;
            De.getTitle.call(e, n),
              (e.media.play = () => {
                _e.call(e, !0), r.playVideo();
              }),
              (e.media.pause = () => {
                _e.call(e, !1), r.pauseVideo();
              }),
              (e.media.stop = () => {
                r.stopVideo();
              }),
              (e.media.duration = r.getDuration()),
              (e.media.paused = !0),
              (e.media.currentTime = 0),
              Object.defineProperty(e.media, "currentTime", {
                get: () => Number(r.getCurrentTime()),
                set(m) {
                  e.paused && !e.embed.hasPlayed && e.embed.mute(),
                    (e.media.seeking = !0),
                    A.call(e, e.media, "seeking"),
                    r.seekTo(m);
                },
              }),
              Object.defineProperty(e.media, "playbackRate", {
                get: () => r.getPlaybackRate(),
                set(m) {
                  r.setPlaybackRate(m);
                },
              });
            let { volume: c } = e.config;
            Object.defineProperty(e.media, "volume", {
              get: () => c,
              set(m) {
                (c = m),
                  r.setVolume(100 * c),
                  A.call(e, e.media, "volumechange");
              },
            });
            let { muted: u } = e.config;
            Object.defineProperty(e.media, "muted", {
              get: () => u,
              set(m) {
                const h = l.boolean(m) ? m : u;
                (u = h),
                  r[h ? "mute" : "unMute"](),
                  r.setVolume(100 * c),
                  A.call(e, e.media, "volumechange");
              },
            }),
              Object.defineProperty(e.media, "currentSrc", {
                get: () => r.getVideoUrl(),
              }),
              Object.defineProperty(e.media, "ended", {
                get: () => e.currentTime === e.duration,
              });
            const d = r.getAvailablePlaybackRates();
            (e.options.speed = d.filter((m) =>
              e.config.speed.options.includes(m)
            )),
              e.supported.ui &&
                i.customControls &&
                e.media.setAttribute("tabindex", -1),
              A.call(e, e.media, "timeupdate"),
              A.call(e, e.media, "durationchange"),
              clearInterval(e.timers.buffering),
              (e.timers.buffering = setInterval(() => {
                (e.media.buffered = r.getVideoLoadedFraction()),
                  (e.media.lastBuffered === null ||
                    e.media.lastBuffered < e.media.buffered) &&
                    A.call(e, e.media, "progress"),
                  (e.media.lastBuffered = e.media.buffered),
                  e.media.buffered === 1 &&
                    (clearInterval(e.timers.buffering),
                    A.call(e, e.media, "canplaythrough"));
              }, 200)),
              i.customControls && setTimeout(() => B.build.call(e), 50);
          },
          onStateChange(a) {
            const r = a.target;
            switch (
              (clearInterval(e.timers.playing),
              e.media.seeking &&
                [1, 2].includes(a.data) &&
                ((e.media.seeking = !1), A.call(e, e.media, "seeked")),
              a.data)
            ) {
              case -1:
                A.call(e, e.media, "timeupdate"),
                  (e.media.buffered = r.getVideoLoadedFraction()),
                  A.call(e, e.media, "progress");
                break;
              case 0:
                _e.call(e, !1),
                  e.media.loop
                    ? (r.stopVideo(), r.playVideo())
                    : A.call(e, e.media, "ended");
                break;
              case 1:
                i.customControls &&
                !e.config.autoplay &&
                e.media.paused &&
                !e.embed.hasPlayed
                  ? e.media.pause()
                  : (_e.call(e, !0),
                    A.call(e, e.media, "playing"),
                    (e.timers.playing = setInterval(() => {
                      A.call(e, e.media, "timeupdate");
                    }, 50)),
                    e.media.duration !== r.getDuration() &&
                      ((e.media.duration = r.getDuration()),
                      A.call(e, e.media, "durationchange")));
                break;
              case 2:
                e.muted || e.embed.unMute(), _e.call(e, !1);
                break;
              case 3:
                A.call(e, e.media, "waiting");
            }
            A.call(e, e.elements.container, "statechange", !1, {
              code: a.data,
            });
          },
        },
      });
    },
  },
  Ni = {
    setup() {
      this.media
        ? (R(
            this.elements.container,
            this.config.classNames.type.replace("{0}", this.type),
            !0
          ),
          R(
            this.elements.container,
            this.config.classNames.provider.replace("{0}", this.provider),
            !0
          ),
          this.isEmbed &&
            R(
              this.elements.container,
              this.config.classNames.type.replace("{0}", "video"),
              !0
            ),
          this.isVideo &&
            ((this.elements.wrapper = E("div", {
              class: this.config.classNames.video,
            })),
            wi(this.media, this.elements.wrapper),
            (this.elements.poster = E("div", {
              class: this.config.classNames.poster,
            })),
            this.elements.wrapper.appendChild(this.elements.poster)),
          this.isHTML5
            ? me.setup.call(this)
            : this.isYouTube
            ? De.setup.call(this)
            : this.isVimeo && ht.setup.call(this))
        : this.debug.warn("No media element found!");
    },
  };
class _a {
  constructor(i) {
    y(this, "load", () => {
      this.enabled &&
        (l.object(window.google) && l.object(window.google.ima)
          ? this.ready()
          : Et(this.player.config.urls.googleIMA.sdk)
              .then(() => {
                this.ready();
              })
              .catch(() => {
                this.trigger(
                  "error",
                  new Error("Google IMA SDK failed to load")
                );
              }));
    }),
      y(this, "ready", () => {
        var t;
        this.enabled ||
          ((t = this).manager && t.manager.destroy(),
          t.elements.displayContainer && t.elements.displayContainer.destroy(),
          t.elements.container.remove()),
          this.startSafetyTimer(12e3, "ready()"),
          this.managerPromise.then(() => {
            this.clearSafetyTimer("onAdsManagerLoaded()");
          }),
          this.listeners(),
          this.setupIMA();
      }),
      y(this, "setupIMA", () => {
        (this.elements.container = E("div", {
          class: this.player.config.classNames.ads,
        })),
          this.player.elements.container.appendChild(this.elements.container),
          google.ima.settings.setVpaidMode(
            google.ima.ImaSdkSettings.VpaidMode.ENABLED
          ),
          google.ima.settings.setLocale(this.player.config.ads.language),
          google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
            this.player.config.playsinline
          ),
          (this.elements.displayContainer = new google.ima.AdDisplayContainer(
            this.elements.container,
            this.player.media
          )),
          (this.loader = new google.ima.AdsLoader(
            this.elements.displayContainer
          )),
          this.loader.addEventListener(
            google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
            (t) => this.onAdsManagerLoaded(t),
            !1
          ),
          this.loader.addEventListener(
            google.ima.AdErrorEvent.Type.AD_ERROR,
            (t) => this.onAdError(t),
            !1
          ),
          this.requestAds();
      }),
      y(this, "requestAds", () => {
        const { container: t } = this.player.elements;
        try {
          const s = new google.ima.AdsRequest();
          (s.adTagUrl = this.tagUrl),
            (s.linearAdSlotWidth = t.offsetWidth),
            (s.linearAdSlotHeight = t.offsetHeight),
            (s.nonLinearAdSlotWidth = t.offsetWidth),
            (s.nonLinearAdSlotHeight = t.offsetHeight),
            (s.forceNonLinearFullSlot = !1),
            s.setAdWillPlayMuted(!this.player.muted),
            this.loader.requestAds(s);
        } catch (s) {
          this.onAdError(s);
        }
      }),
      y(this, "pollCountdown", (t = !1) => {
        if (!t)
          return (
            clearInterval(this.countdownTimer),
            void this.elements.container.removeAttribute("data-badge-text")
          );
        this.countdownTimer = setInterval(() => {
          const s = Xe(Math.max(this.manager.getRemainingTime(), 0)),
            n = `${Y.get("advertisement", this.player.config)} - ${s}`;
          this.elements.container.setAttribute("data-badge-text", n);
        }, 100);
      }),
      y(this, "onAdsManagerLoaded", (t) => {
        if (!this.enabled) return;
        const s = new google.ima.AdsRenderingSettings();
        (s.restoreCustomPlaybackStateOnAdBreakComplete = !0),
          (s.enablePreloading = !0),
          (this.manager = t.getAdsManager(this.player, s)),
          (this.cuePoints = this.manager.getCuePoints()),
          this.manager.addEventListener(
            google.ima.AdErrorEvent.Type.AD_ERROR,
            (n) => this.onAdError(n)
          ),
          Object.keys(google.ima.AdEvent.Type).forEach((n) => {
            this.manager.addEventListener(google.ima.AdEvent.Type[n], (o) =>
              this.onAdEvent(o)
            );
          }),
          this.trigger("loaded");
      }),
      y(this, "addCuePoints", () => {
        l.empty(this.cuePoints) ||
          this.cuePoints.forEach((t) => {
            if (t !== 0 && t !== -1 && t < this.player.duration) {
              const s = this.player.elements.progress;
              if (l.element(s)) {
                const n = (100 / this.player.duration) * t,
                  o = E("span", { class: this.player.config.classNames.cues });
                (o.style.left = `${n.toString()}%`), s.appendChild(o);
              }
            }
          });
      }),
      y(this, "onAdEvent", (t) => {
        const { container: s } = this.player.elements,
          n = t.getAd(),
          o = t.getAdData();
        switch (
          (((a) => {
            A.call(
              this.player,
              this.player.media,
              `ads${a.replace(/_/g, "").toLowerCase()}`
            );
          })(t.type),
          t.type)
        ) {
          case google.ima.AdEvent.Type.LOADED:
            this.trigger("loaded"),
              this.pollCountdown(!0),
              n.isLinear() ||
                ((n.width = s.offsetWidth), (n.height = s.offsetHeight));
            break;
          case google.ima.AdEvent.Type.STARTED:
            this.manager.setVolume(this.player.volume);
            break;
          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            this.player.ended ? this.loadAds() : this.loader.contentComplete();
            break;
          case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            this.pauseContent();
            break;
          case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            this.pollCountdown(), this.resumeContent();
            break;
          case google.ima.AdEvent.Type.LOG:
            o.adError &&
              this.player.debug.warn(
                `Non-fatal ad error: ${o.adError.getMessage()}`
              );
        }
      }),
      y(this, "onAdError", (t) => {
        this.cancel(), this.player.debug.warn("Ads error", t);
      }),
      y(this, "listeners", () => {
        const { container: t } = this.player.elements;
        let s;
        this.player.on("canplay", () => {
          this.addCuePoints();
        }),
          this.player.on("ended", () => {
            this.loader.contentComplete();
          }),
          this.player.on("timeupdate", () => {
            s = this.player.currentTime;
          }),
          this.player.on("seeked", () => {
            const n = this.player.currentTime;
            l.empty(this.cuePoints) ||
              this.cuePoints.forEach((o, a) => {
                s < o &&
                  o < n &&
                  (this.manager.discardAdBreak(), this.cuePoints.splice(a, 1));
              });
          }),
          window.addEventListener("resize", () => {
            this.manager &&
              this.manager.resize(
                t.offsetWidth,
                t.offsetHeight,
                google.ima.ViewMode.NORMAL
              );
          });
      }),
      y(this, "play", () => {
        const { container: t } = this.player.elements;
        this.managerPromise || this.resumeContent(),
          this.managerPromise
            .then(() => {
              this.manager.setVolume(this.player.volume),
                this.elements.displayContainer.initialize();
              try {
                this.initialized ||
                  (this.manager.init(
                    t.offsetWidth,
                    t.offsetHeight,
                    google.ima.ViewMode.NORMAL
                  ),
                  this.manager.start()),
                  (this.initialized = !0);
              } catch (s) {
                this.onAdError(s);
              }
            })
            .catch(() => {});
      }),
      y(this, "resumeContent", () => {
        (this.elements.container.style.zIndex = ""),
          (this.playing = !1),
          oe(this.player.media.play());
      }),
      y(this, "pauseContent", () => {
        (this.elements.container.style.zIndex = 3),
          (this.playing = !0),
          this.player.media.pause();
      }),
      y(this, "cancel", () => {
        this.initialized && this.resumeContent(),
          this.trigger("error"),
          this.loadAds();
      }),
      y(this, "loadAds", () => {
        this.managerPromise
          .then(() => {
            this.manager && this.manager.destroy(),
              (this.managerPromise = new Promise((t) => {
                this.on("loaded", t), this.player.debug.log(this.manager);
              })),
              (this.initialized = !1),
              this.requestAds();
          })
          .catch(() => {});
      }),
      y(this, "trigger", (t, ...s) => {
        const n = this.events[t];
        l.array(n) &&
          n.forEach((o) => {
            l.function(o) && o.apply(this, s);
          });
      }),
      y(
        this,
        "on",
        (t, s) => (
          l.array(this.events[t]) || (this.events[t] = []),
          this.events[t].push(s),
          this
        )
      ),
      y(this, "startSafetyTimer", (t, s) => {
        this.player.debug.log(`Safety timer invoked from: ${s}`),
          (this.safetyTimer = setTimeout(() => {
            this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
          }, t));
      }),
      y(this, "clearSafetyTimer", (t) => {
        l.nullOrUndefined(this.safetyTimer) ||
          (this.player.debug.log(`Safety timer cleared from: ${t}`),
          clearTimeout(this.safetyTimer),
          (this.safetyTimer = null));
      }),
      (this.player = i),
      (this.config = i.config.ads),
      (this.playing = !1),
      (this.initialized = !1),
      (this.elements = { container: null, displayContainer: null }),
      (this.manager = null),
      (this.loader = null),
      (this.cuePoints = null),
      (this.events = {}),
      (this.safetyTimer = null),
      (this.countdownTimer = null),
      (this.managerPromise = new Promise((t, s) => {
        this.on("loaded", t), this.on("error", s);
      })),
      this.load();
  }
  get enabled() {
    const { config: i } = this;
    return (
      this.player.isHTML5 &&
      this.player.isVideo &&
      i.enabled &&
      (!l.empty(i.publisherId) || l.url(i.tagUrl))
    );
  }
  get tagUrl() {
    const { config: i } = this;
    return l.url(i.tagUrl)
      ? i.tagUrl
      : `https://go.aniview.com/api/adserver6/vast/?${Pi({
          AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
          AV_CHANNELID: "5a0458dc28a06145e4519d21",
          AV_URL: window.location.hostname,
          cb: Date.now(),
          AV_WIDTH: 640,
          AV_HEIGHT: 480,
          AV_CDIM2: i.publisherId,
        })}`;
  }
}
function $i(e = 0, i = 0, t = 255) {
  return Math.min(Math.max(e, i), t);
}
const ka = (e) => {
    const i = [];
    return (
      e.split(/\r\n\r\n|\n\n|\r\r/).forEach((t) => {
        const s = {};
        t.split(/\r\n|\n|\r/).forEach((n) => {
          if (l.number(s.startTime)) {
            if (!l.empty(n.trim()) && l.empty(s.text)) {
              const o = n.trim().split("#xywh=");
              ([s.text] = o), o[1] && ([s.x, s.y, s.w, s.h] = o[1].split(","));
            }
          } else {
            const o = n.match(
              /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
            );
            o &&
              ((s.startTime =
                60 * Number(o[1] || 0) * 60 +
                60 * Number(o[2]) +
                Number(o[3]) +
                +`0.${o[4]}`),
              (s.endTime =
                60 * Number(o[6] || 0) * 60 +
                60 * Number(o[7]) +
                Number(o[8]) +
                +`0.${o[9]}`));
          }
        }),
          s.text && i.push(s);
      }),
      i
    );
  },
  Ht = (e, i) => {
    const t = {};
    return (
      e > i.width / i.height
        ? ((t.width = i.width), (t.height = (1 / e) * i.width))
        : ((t.height = i.height), (t.width = e * i.height)),
      t
    );
  };
class mt {
  constructor(i) {
    y(this, "load", () => {
      this.player.elements.display.seekTooltip &&
        (this.player.elements.display.seekTooltip.hidden = this.enabled),
        this.enabled &&
          this.getThumbnails().then(() => {
            this.enabled &&
              (this.render(),
              this.determineContainerAutoSizing(),
              this.listeners(),
              (this.loaded = !0));
          });
    }),
      y(
        this,
        "getThumbnails",
        () =>
          new Promise((t) => {
            const { src: s } = this.player.config.previewThumbnails;
            if (l.empty(s))
              throw new Error("Missing previewThumbnails.src config attribute");
            const n = () => {
              this.thumbnails.sort((o, a) => o.height - a.height),
                this.player.debug.log("Preview thumbnails", this.thumbnails),
                t();
            };
            if (l.function(s))
              s((o) => {
                (this.thumbnails = o), n();
              });
            else {
              const o = (l.string(s) ? [s] : s).map((a) =>
                this.getThumbnail(a)
              );
              Promise.all(o).then(n);
            }
          })
      ),
      y(
        this,
        "getThumbnail",
        (t) =>
          new Promise((s) => {
            $e(t).then((n) => {
              const o = { frames: ka(n), height: null, urlPrefix: "" };
              o.frames[0].text.startsWith("/") ||
                o.frames[0].text.startsWith("http://") ||
                o.frames[0].text.startsWith("https://") ||
                (o.urlPrefix = t.substring(0, t.lastIndexOf("/") + 1));
              const a = new Image();
              (a.onload = () => {
                (o.height = a.naturalHeight),
                  (o.width = a.naturalWidth),
                  this.thumbnails.push(o),
                  s();
              }),
                (a.src = o.urlPrefix + o.frames[0].text);
            });
          })
      ),
      y(this, "startMove", (t) => {
        if (
          this.loaded &&
          l.event(t) &&
          ["touchmove", "mousemove"].includes(t.type) &&
          this.player.media.duration
        ) {
          if (t.type === "touchmove")
            this.seekTime =
              this.player.media.duration *
              (this.player.elements.inputs.seek.value / 100);
          else {
            var s, n;
            const o = this.player.elements.progress.getBoundingClientRect(),
              a = (100 / o.width) * (t.pageX - o.left);
            (this.seekTime = this.player.media.duration * (a / 100)),
              this.seekTime < 0 && (this.seekTime = 0),
              this.seekTime > this.player.media.duration - 1 &&
                (this.seekTime = this.player.media.duration - 1),
              (this.mousePosX = t.pageX),
              (this.elements.thumb.time.innerText = Xe(this.seekTime));
            const r =
              (s = this.player.config.markers) === null ||
              s === void 0 ||
              (n = s.points) === null ||
              n === void 0
                ? void 0
                : n.find(({ time: c }) => c === Math.round(this.seekTime));
            r &&
              this.elements.thumb.time.insertAdjacentHTML(
                "afterbegin",
                `${r.label}<br>`
              );
          }
          this.showImageAtCurrentTime();
        }
      }),
      y(this, "endMove", () => {
        this.toggleThumbContainer(!1, !0);
      }),
      y(this, "startScrubbing", (t) => {
        (l.nullOrUndefined(t.button) || t.button === !1 || t.button === 0) &&
          ((this.mouseDown = !0),
          this.player.media.duration &&
            (this.toggleScrubbingContainer(!0),
            this.toggleThumbContainer(!1, !0),
            this.showImageAtCurrentTime()));
      }),
      y(this, "endScrubbing", () => {
        (this.mouseDown = !1),
          Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime)
            ? this.toggleScrubbingContainer(!1)
            : St.call(this.player, this.player.media, "timeupdate", () => {
                this.mouseDown || this.toggleScrubbingContainer(!1);
              });
      }),
      y(this, "listeners", () => {
        this.player.on("play", () => {
          this.toggleThumbContainer(!1, !0);
        }),
          this.player.on("seeked", () => {
            this.toggleThumbContainer(!1);
          }),
          this.player.on("timeupdate", () => {
            this.lastTime = this.player.media.currentTime;
          });
      }),
      y(this, "render", () => {
        (this.elements.thumb.container = E("div", {
          class: this.player.config.classNames.previewThumbnails.thumbContainer,
        })),
          (this.elements.thumb.imageContainer = E("div", {
            class:
              this.player.config.classNames.previewThumbnails.imageContainer,
          })),
          this.elements.thumb.container.appendChild(
            this.elements.thumb.imageContainer
          );
        const t = E("div", {
          class: this.player.config.classNames.previewThumbnails.timeContainer,
        });
        (this.elements.thumb.time = E("span", {}, "00:00")),
          t.appendChild(this.elements.thumb.time),
          this.elements.thumb.imageContainer.appendChild(t),
          l.element(this.player.elements.progress) &&
            this.player.elements.progress.appendChild(
              this.elements.thumb.container
            ),
          (this.elements.scrubbing.container = E("div", {
            class:
              this.player.config.classNames.previewThumbnails
                .scrubbingContainer,
          })),
          this.player.elements.wrapper.appendChild(
            this.elements.scrubbing.container
          );
      }),
      y(this, "destroy", () => {
        this.elements.thumb.container && this.elements.thumb.container.remove(),
          this.elements.scrubbing.container &&
            this.elements.scrubbing.container.remove();
      }),
      y(this, "showImageAtCurrentTime", () => {
        this.mouseDown
          ? this.setScrubbingContainerSize()
          : this.setThumbContainerSizeAndPos();
        const t = this.thumbnails[0].frames.findIndex(
            (o) => this.seekTime >= o.startTime && this.seekTime <= o.endTime
          ),
          s = t >= 0;
        let n = 0;
        this.mouseDown || this.toggleThumbContainer(s),
          s &&
            (this.thumbnails.forEach((o, a) => {
              this.loadedImages.includes(o.frames[t].text) && (n = a);
            }),
            t !== this.showingThumb &&
              ((this.showingThumb = t), this.loadImage(n)));
      }),
      y(this, "loadImage", (t = 0) => {
        const s = this.showingThumb,
          n = this.thumbnails[t],
          { urlPrefix: o } = n,
          a = n.frames[s],
          r = n.frames[s].text,
          c = o + r;
        if (
          this.currentImageElement &&
          this.currentImageElement.dataset.filename === r
        )
          this.showImage(this.currentImageElement, a, t, s, r, !1),
            (this.currentImageElement.dataset.index = s),
            this.removeOldImages(this.currentImageElement);
        else {
          this.loadingImage &&
            this.usingSprites &&
            (this.loadingImage.onload = null);
          const u = new Image();
          (u.src = c),
            (u.dataset.index = s),
            (u.dataset.filename = r),
            (this.showingThumbFilename = r),
            this.player.debug.log(`Loading image: ${c}`),
            (u.onload = () => this.showImage(u, a, t, s, r, !0)),
            (this.loadingImage = u),
            this.removeOldImages(u);
        }
      }),
      y(this, "showImage", (t, s, n, o, a, r = !0) => {
        this.player.debug.log(
          `Showing thumb: ${a}. num: ${o}. qual: ${n}. newimg: ${r}`
        ),
          this.setImageSizeAndOffset(t, s),
          r &&
            (this.currentImageContainer.appendChild(t),
            (this.currentImageElement = t),
            this.loadedImages.includes(a) || this.loadedImages.push(a)),
          this.preloadNearby(o, !0)
            .then(this.preloadNearby(o, !1))
            .then(this.getHigherQuality(n, t, s, a));
      }),
      y(this, "removeOldImages", (t) => {
        Array.from(this.currentImageContainer.children).forEach((s) => {
          if (s.tagName.toLowerCase() !== "img") return;
          const n = this.usingSprites ? 500 : 1e3;
          if (s.dataset.index !== t.dataset.index && !s.dataset.deleting) {
            s.dataset.deleting = !0;
            const { currentImageContainer: o } = this;
            setTimeout(() => {
              o.removeChild(s),
                this.player.debug.log(`Removing thumb: ${s.dataset.filename}`);
            }, n);
          }
        });
      }),
      y(
        this,
        "preloadNearby",
        (t, s = !0) =>
          new Promise((n) => {
            setTimeout(() => {
              const o = this.thumbnails[0].frames[t].text;
              if (this.showingThumbFilename === o) {
                let a;
                a = s
                  ? this.thumbnails[0].frames.slice(t)
                  : this.thumbnails[0].frames.slice(0, t).reverse();
                let r = !1;
                a.forEach((c) => {
                  const u = c.text;
                  if (u !== o && !this.loadedImages.includes(u)) {
                    (r = !0),
                      this.player.debug.log(`Preloading thumb filename: ${u}`);
                    const { urlPrefix: d } = this.thumbnails[0],
                      m = d + u,
                      h = new Image();
                    (h.src = m),
                      (h.onload = () => {
                        this.player.debug.log(`Preloaded thumb filename: ${u}`),
                          this.loadedImages.includes(u) ||
                            this.loadedImages.push(u),
                          n();
                      });
                  }
                }),
                  r || n();
              }
            }, 300);
          })
      ),
      y(this, "getHigherQuality", (t, s, n, o) => {
        if (t < this.thumbnails.length - 1) {
          let a = s.naturalHeight;
          this.usingSprites && (a = n.h),
            a < this.thumbContainerHeight &&
              setTimeout(() => {
                this.showingThumbFilename === o &&
                  (this.player.debug.log(
                    `Showing higher quality thumb for: ${o}`
                  ),
                  this.loadImage(t + 1));
              }, 300);
        }
      }),
      y(this, "toggleThumbContainer", (t = !1, s = !1) => {
        const n =
          this.player.config.classNames.previewThumbnails.thumbContainerShown;
        this.elements.thumb.container.classList.toggle(n, t),
          !t &&
            s &&
            ((this.showingThumb = null), (this.showingThumbFilename = null));
      }),
      y(this, "toggleScrubbingContainer", (t = !1) => {
        const s =
          this.player.config.classNames.previewThumbnails
            .scrubbingContainerShown;
        this.elements.scrubbing.container.classList.toggle(s, t),
          t || ((this.showingThumb = null), (this.showingThumbFilename = null));
      }),
      y(this, "determineContainerAutoSizing", () => {
        (this.elements.thumb.imageContainer.clientHeight > 20 ||
          this.elements.thumb.imageContainer.clientWidth > 20) &&
          (this.sizeSpecifiedInCSS = !0);
      }),
      y(this, "setThumbContainerSizeAndPos", () => {
        const { imageContainer: t } = this.elements.thumb;
        if (this.sizeSpecifiedInCSS) {
          if (t.clientHeight > 20 && t.clientWidth < 20) {
            const s = Math.floor(t.clientHeight * this.thumbAspectRatio);
            t.style.width = `${s}px`;
          } else if (t.clientHeight < 20 && t.clientWidth > 20) {
            const s = Math.floor(t.clientWidth / this.thumbAspectRatio);
            t.style.height = `${s}px`;
          }
        } else {
          const s = Math.floor(
            this.thumbContainerHeight * this.thumbAspectRatio
          );
          (t.style.height = `${this.thumbContainerHeight}px`),
            (t.style.width = `${s}px`);
        }
        this.setThumbContainerPos();
      }),
      y(this, "setThumbContainerPos", () => {
        const t = this.player.elements.progress.getBoundingClientRect(),
          s = this.player.elements.container.getBoundingClientRect(),
          { container: n } = this.elements.thumb,
          o = s.left - t.left + 10,
          a = s.right - t.left - n.clientWidth - 10,
          r = this.mousePosX - t.left - n.clientWidth / 2,
          c = $i(r, o, a);
        (n.style.left = `${c}px`),
          n.style.setProperty("--preview-arrow-offset", r - c + "px");
      }),
      y(this, "setScrubbingContainerSize", () => {
        const { width: t, height: s } = Ht(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight,
        });
        (this.elements.scrubbing.container.style.width = `${t}px`),
          (this.elements.scrubbing.container.style.height = `${s}px`);
      }),
      y(this, "setImageSizeAndOffset", (t, s) => {
        if (!this.usingSprites) return;
        const n = this.thumbContainerHeight / s.h;
        (t.style.height = t.naturalHeight * n + "px"),
          (t.style.width = t.naturalWidth * n + "px"),
          (t.style.left = `-${s.x * n}px`),
          (t.style.top = `-${s.y * n}px`);
      }),
      (this.player = i),
      (this.thumbnails = []),
      (this.loaded = !1),
      (this.lastMouseMoveTime = Date.now()),
      (this.mouseDown = !1),
      (this.loadedImages = []),
      (this.elements = { thumb: {}, scrubbing: {} }),
      this.load();
  }
  get enabled() {
    return (
      this.player.isHTML5 &&
      this.player.isVideo &&
      this.player.config.previewThumbnails.enabled
    );
  }
  get currentImageContainer() {
    return this.mouseDown
      ? this.elements.scrubbing.container
      : this.elements.thumb.imageContainer;
  }
  get usingSprites() {
    return Object.keys(this.thumbnails[0].frames[0]).includes("w");
  }
  get thumbAspectRatio() {
    return this.usingSprites
      ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h
      : this.thumbnails[0].width / this.thumbnails[0].height;
  }
  get thumbContainerHeight() {
    if (this.mouseDown) {
      const { height: i } = Ht(this.thumbAspectRatio, {
        width: this.player.media.clientWidth,
        height: this.player.media.clientHeight,
      });
      return i;
    }
    return this.sizeSpecifiedInCSS
      ? this.elements.thumb.imageContainer.clientHeight
      : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
  }
  get currentImageElement() {
    return this.mouseDown
      ? this.currentScrubbingImageElement
      : this.currentThumbnailImageElement;
  }
  set currentImageElement(i) {
    this.mouseDown
      ? (this.currentScrubbingImageElement = i)
      : (this.currentThumbnailImageElement = i);
  }
}
const pt = {
  insertElements(e, i) {
    l.string(i)
      ? Rt(e, this.media, { src: i })
      : l.array(i) &&
        i.forEach((t) => {
          Rt(e, this.media, t);
        });
  },
  change(e) {
    vi(e, "sources.length")
      ? (me.cancelRequests.call(this),
        this.destroy.call(
          this,
          () => {
            (this.options.quality = []),
              le(this.media),
              (this.media = null),
              l.element(this.elements.container) &&
                this.elements.container.removeAttribute("class");
            const { sources: i, type: t } = e,
              [{ provider: s = he.html5, src: n }] = i,
              o = s === "html5" ? t : "div",
              a = s === "html5" ? {} : { src: n };
            Object.assign(this, {
              provider: s,
              type: t,
              supported: z.check(t, s, this.config.playsinline),
              media: E(o, a),
            }),
              this.elements.container.appendChild(this.media),
              l.boolean(e.autoplay) && (this.config.autoplay = e.autoplay),
              this.isHTML5 &&
                (this.config.crossorigin &&
                  this.media.setAttribute("crossorigin", ""),
                this.config.autoplay && this.media.setAttribute("autoplay", ""),
                l.empty(e.poster) || (this.poster = e.poster),
                this.config.loop.active && this.media.setAttribute("loop", ""),
                this.config.muted && this.media.setAttribute("muted", ""),
                this.config.playsinline &&
                  this.media.setAttribute("playsinline", "")),
              B.addStyleHook.call(this),
              this.isHTML5 && pt.insertElements.call(this, "source", i),
              (this.config.title = e.title),
              Ni.setup.call(this),
              this.isHTML5 &&
                Object.keys(e).includes("tracks") &&
                pt.insertElements.call(this, "track", e.tracks),
              (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                B.build.call(this),
              this.isHTML5 && this.media.load(),
              l.empty(e.previewThumbnails) ||
                (Object.assign(
                  this.config.previewThumbnails,
                  e.previewThumbnails
                ),
                this.previewThumbnails &&
                  this.previewThumbnails.loaded &&
                  (this.previewThumbnails.destroy(),
                  (this.previewThumbnails = null)),
                this.config.previewThumbnails.enabled &&
                  (this.previewThumbnails = new mt(this))),
              this.fullscreen.update();
          },
          !0
        ))
      : this.debug.warn("Invalid source format");
  },
};
class Pe {
  constructor(i, t) {
    if (
      (y(this, "play", () =>
        l.function(this.media.play)
          ? (this.ads &&
              this.ads.enabled &&
              this.ads.managerPromise
                .then(() => this.ads.play())
                .catch(() => oe(this.media.play())),
            this.media.play())
          : null
      ),
      y(this, "pause", () =>
        this.playing && l.function(this.media.pause) ? this.media.pause() : null
      ),
      y(this, "togglePlay", (r) =>
        (l.boolean(r) ? r : !this.playing) ? this.play() : this.pause()
      ),
      y(this, "stop", () => {
        this.isHTML5
          ? (this.pause(), this.restart())
          : l.function(this.media.stop) && this.media.stop();
      }),
      y(this, "restart", () => {
        this.currentTime = 0;
      }),
      y(this, "rewind", (r) => {
        this.currentTime -= l.number(r) ? r : this.config.seekTime;
      }),
      y(this, "forward", (r) => {
        this.currentTime += l.number(r) ? r : this.config.seekTime;
      }),
      y(this, "increaseVolume", (r) => {
        const c = this.media.muted ? 0 : this.volume;
        this.volume = c + (l.number(r) ? r : 0);
      }),
      y(this, "decreaseVolume", (r) => {
        this.increaseVolume(-r);
      }),
      y(this, "airplay", () => {
        z.airplay && this.media.webkitShowPlaybackTargetPicker();
      }),
      y(this, "toggleControls", (r) => {
        if (this.supported.ui && !this.isAudio) {
          const c = He(
              this.elements.container,
              this.config.classNames.hideControls
            ),
            u = r === void 0 ? void 0 : !r,
            d = R(
              this.elements.container,
              this.config.classNames.hideControls,
              u
            );
          if (
            (d &&
              l.array(this.config.controls) &&
              this.config.controls.includes("settings") &&
              !l.empty(this.config.settings) &&
              b.toggleMenu.call(this, !1),
            d !== c)
          ) {
            const m = d ? "controlshidden" : "controlsshown";
            A.call(this, this.media, m);
          }
          return !d;
        }
        return !1;
      }),
      y(this, "on", (r, c) => {
        L.call(this, this.elements.container, r, c);
      }),
      y(this, "once", (r, c) => {
        St.call(this, this.elements.container, r, c);
      }),
      y(this, "off", (r, c) => {
        Ye(this.elements.container, r, c);
      }),
      y(this, "destroy", (r, c = !1) => {
        if (!this.ready) return;
        const u = () => {
          (document.body.style.overflow = ""),
            (this.embed = null),
            c
              ? (Object.keys(this.elements).length &&
                  (le(this.elements.buttons.play),
                  le(this.elements.captions),
                  le(this.elements.controls),
                  le(this.elements.wrapper),
                  (this.elements.buttons.play = null),
                  (this.elements.captions = null),
                  (this.elements.controls = null),
                  (this.elements.wrapper = null)),
                l.function(r) && r())
              : (ta.call(this),
                me.cancelRequests.call(this),
                je(this.elements.original, this.elements.container),
                A.call(this, this.elements.original, "destroyed", !0),
                l.function(r) && r.call(this.elements.original),
                (this.ready = !1),
                setTimeout(() => {
                  (this.elements = null), (this.media = null);
                }, 200));
        };
        this.stop(),
          clearTimeout(this.timers.loading),
          clearTimeout(this.timers.controls),
          clearTimeout(this.timers.resized),
          this.isHTML5
            ? (B.toggleNativeControls.call(this, !0), u())
            : this.isYouTube
            ? (clearInterval(this.timers.buffering),
              clearInterval(this.timers.playing),
              this.embed !== null &&
                l.function(this.embed.destroy) &&
                this.embed.destroy(),
              u())
            : this.isVimeo &&
              (this.embed !== null && this.embed.unload().then(u),
              setTimeout(u, 200));
      }),
      y(this, "supports", (r) => z.mime.call(this, r)),
      (this.timers = {}),
      (this.ready = !1),
      (this.loading = !1),
      (this.failed = !1),
      (this.touch = z.touch),
      (this.media = i),
      l.string(this.media) &&
        (this.media = document.querySelectorAll(this.media)),
      ((window.jQuery && this.media instanceof jQuery) ||
        l.nodeList(this.media) ||
        l.array(this.media)) &&
        (this.media = this.media[0]),
      (this.config = W(
        {},
        Mi,
        Pe.defaults,
        t || {},
        (() => {
          try {
            return JSON.parse(this.media.getAttribute("data-plyr-config"));
          } catch {
            return {};
          }
        })()
      )),
      (this.elements = {
        container: null,
        fullscreen: null,
        captions: null,
        buttons: {},
        display: {},
        progress: {},
        inputs: {},
        settings: { popup: null, menu: null, panels: {}, buttons: {} },
      }),
      (this.captions = { active: null, currentTrack: -1, meta: new WeakMap() }),
      (this.fullscreen = { active: !1 }),
      (this.options = { speed: [], quality: [] }),
      (this.debug = new ma(this.config.debug)),
      this.debug.log("Config", this.config),
      this.debug.log("Support", z),
      l.nullOrUndefined(this.media) || !l.element(this.media))
    )
      return void this.debug.error("Setup failed: no suitable element passed");
    if (this.media.plyr) return void this.debug.warn("Target already setup");
    if (!this.config.enabled)
      return void this.debug.error("Setup failed: disabled by config");
    if (!z.check().api)
      return void this.debug.error("Setup failed: no support");
    const s = this.media.cloneNode(!0);
    (s.autoplay = !1), (this.elements.original = s);
    const n = this.media.tagName.toLowerCase();
    let o = null,
      a = null;
    switch (n) {
      case "div":
        if (((o = this.media.querySelector("iframe")), l.element(o))) {
          if (
            ((a = xi(o.getAttribute("src"))),
            (this.provider = ha(a.toString())),
            (this.elements.container = this.media),
            (this.media = o),
            (this.elements.container.className = ""),
            a.search.length)
          ) {
            const r = ["1", "true"];
            r.includes(a.searchParams.get("autoplay")) &&
              (this.config.autoplay = !0),
              r.includes(a.searchParams.get("loop")) &&
                (this.config.loop.active = !0),
              this.isYouTube
                ? ((this.config.playsinline = r.includes(
                    a.searchParams.get("playsinline")
                  )),
                  (this.config.youtube.hl = a.searchParams.get("hl")))
                : (this.config.playsinline = !0);
          }
        } else
          (this.provider = this.media.getAttribute(
            this.config.attributes.embed.provider
          )),
            this.media.removeAttribute(this.config.attributes.embed.provider);
        if (
          l.empty(this.provider) ||
          !Object.values(he).includes(this.provider)
        )
          return void this.debug.error("Setup failed: Invalid provider");
        this.type = at.video;
        break;
      case "video":
      case "audio":
        (this.type = n),
          (this.provider = he.html5),
          this.media.hasAttribute("crossorigin") &&
            (this.config.crossorigin = !0),
          this.media.hasAttribute("autoplay") && (this.config.autoplay = !0),
          (this.media.hasAttribute("playsinline") ||
            this.media.hasAttribute("webkit-playsinline")) &&
            (this.config.playsinline = !0),
          this.media.hasAttribute("muted") && (this.config.muted = !0),
          this.media.hasAttribute("loop") && (this.config.loop.active = !0);
        break;
      default:
        return void this.debug.error("Setup failed: unsupported type");
    }
    (this.supported = z.check(this.type, this.provider)),
      this.supported.api
        ? ((this.eventListeners = []),
          (this.listeners = new pa(this)),
          (this.storage = new xe(this)),
          (this.media.plyr = this),
          l.element(this.elements.container) ||
            ((this.elements.container = E("div")),
            wi(this.media, this.elements.container)),
          B.migrateStyles.call(this),
          B.addStyleHook.call(this),
          Ni.setup.call(this),
          this.config.debug &&
            L.call(
              this,
              this.elements.container,
              this.config.events.join(" "),
              (r) => {
                this.debug.log(`event: ${r.type}`);
              }
            ),
          (this.fullscreen = new ie(this)),
          (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
            B.build.call(this),
          this.listeners.container(),
          this.listeners.global(),
          this.config.ads.enabled && (this.ads = new _a(this)),
          this.isHTML5 &&
            this.config.autoplay &&
            this.once("canplay", () => oe(this.play())),
          (this.lastSeekTime = 0),
          this.config.previewThumbnails.enabled &&
            (this.previewThumbnails = new mt(this)))
        : this.debug.error("Setup failed: no support");
  }
  get isHTML5() {
    return this.provider === he.html5;
  }
  get isEmbed() {
    return this.isYouTube || this.isVimeo;
  }
  get isYouTube() {
    return this.provider === he.youtube;
  }
  get isVimeo() {
    return this.provider === he.vimeo;
  }
  get isVideo() {
    return this.type === at.video;
  }
  get isAudio() {
    return this.type === at.audio;
  }
  get playing() {
    return !!(this.ready && !this.paused && !this.ended);
  }
  get paused() {
    return !!this.media.paused;
  }
  get stopped() {
    return !!(this.paused && this.currentTime === 0);
  }
  get ended() {
    return !!this.media.ended;
  }
  set currentTime(i) {
    if (!this.duration) return;
    const t = l.number(i) && i > 0;
    (this.media.currentTime = t ? Math.min(i, this.duration) : 0),
      this.debug.log(`Seeking to ${this.currentTime} seconds`);
  }
  get currentTime() {
    return Number(this.media.currentTime);
  }
  get buffered() {
    const { buffered: i } = this.media;
    return l.number(i)
      ? i
      : i && i.length && this.duration > 0
      ? i.end(0) / this.duration
      : 0;
  }
  get seeking() {
    return !!this.media.seeking;
  }
  get duration() {
    const i = parseFloat(this.config.duration),
      t = (this.media || {}).duration,
      s = l.number(t) && t !== 1 / 0 ? t : 0;
    return i || s;
  }
  set volume(i) {
    let t = i;
    l.string(t) && (t = Number(t)),
      l.number(t) || (t = this.storage.get("volume")),
      l.number(t) || ({ volume: t } = this.config),
      t > 1 && (t = 1),
      t < 0 && (t = 0),
      (this.config.volume = t),
      (this.media.volume = t),
      !l.empty(i) && this.muted && t > 0 && (this.muted = !1);
  }
  get volume() {
    return Number(this.media.volume);
  }
  set muted(i) {
    let t = i;
    l.boolean(t) || (t = this.storage.get("muted")),
      l.boolean(t) || (t = this.config.muted),
      (this.config.muted = t),
      (this.media.muted = t);
  }
  get muted() {
    return !!this.media.muted;
  }
  get hasAudio() {
    return (
      !this.isHTML5 ||
      !!this.isAudio ||
      !!this.media.mozHasAudio ||
      !!this.media.webkitAudioDecodedByteCount ||
      !!(this.media.audioTracks && this.media.audioTracks.length)
    );
  }
  set speed(i) {
    let t = null;
    l.number(i) && (t = i),
      l.number(t) || (t = this.storage.get("speed")),
      l.number(t) || (t = this.config.speed.selected);
    const { minimumSpeed: s, maximumSpeed: n } = this;
    (t = $i(t, s, n)),
      (this.config.speed.selected = t),
      setTimeout(() => {
        this.media && (this.media.playbackRate = t);
      }, 0);
  }
  get speed() {
    return Number(this.media.playbackRate);
  }
  get minimumSpeed() {
    return this.isYouTube
      ? Math.min(...this.options.speed)
      : this.isVimeo
      ? 0.5
      : 0.0625;
  }
  get maximumSpeed() {
    return this.isYouTube
      ? Math.max(...this.options.speed)
      : this.isVimeo
      ? 2
      : 16;
  }
  set quality(i) {
    const t = this.config.quality,
      s = this.options.quality;
    if (!s.length) return;
    let n = [
        !l.empty(i) && Number(i),
        this.storage.get("quality"),
        t.selected,
        t.default,
      ].find(l.number),
      o = !0;
    if (!s.includes(n)) {
      const a = _i(s, n);
      this.debug.warn(`Unsupported quality option: ${n}, using ${a} instead`),
        (n = a),
        (o = !1);
    }
    (t.selected = n),
      (this.media.quality = n),
      o && this.storage.set({ quality: n });
  }
  get quality() {
    return this.media.quality;
  }
  set loop(i) {
    const t = l.boolean(i) ? i : this.config.loop.active;
    (this.config.loop.active = t), (this.media.loop = t);
  }
  get loop() {
    return !!this.media.loop;
  }
  set source(i) {
    pt.change.call(this, i);
  }
  get source() {
    return this.media.currentSrc;
  }
  get download() {
    const { download: i } = this.config.urls;
    return l.url(i) ? i : this.source;
  }
  set download(i) {
    l.url(i) && ((this.config.urls.download = i), b.setDownloadUrl.call(this));
  }
  set poster(i) {
    this.isVideo
      ? B.setPoster.call(this, i, !1).catch(() => {})
      : this.debug.warn("Poster can only be set for video");
  }
  get poster() {
    return this.isVideo
      ? this.media.getAttribute("poster") ||
          this.media.getAttribute("data-poster")
      : null;
  }
  get ratio() {
    if (!this.isVideo) return null;
    const i = Ue(Ct.call(this));
    return l.array(i) ? i.join(":") : i;
  }
  set ratio(i) {
    this.isVideo
      ? l.string(i) && Ti(i)
        ? ((this.config.ratio = Ue(i)), ye.call(this))
        : this.debug.error(`Invalid aspect ratio specified (${i})`)
      : this.debug.warn("Aspect ratio can only be set for video");
  }
  set autoplay(i) {
    this.config.autoplay = l.boolean(i) ? i : this.config.autoplay;
  }
  get autoplay() {
    return !!this.config.autoplay;
  }
  toggleCaptions(i) {
    I.toggle.call(this, i, !1);
  }
  set currentTrack(i) {
    I.set.call(this, i, !1), I.setup.call(this);
  }
  get currentTrack() {
    const { toggled: i, currentTrack: t } = this.captions;
    return i ? t : -1;
  }
  set language(i) {
    I.setLanguage.call(this, i, !1);
  }
  get language() {
    return (I.getCurrentTrack.call(this) || {}).language;
  }
  set pip(i) {
    if (!z.pip) return;
    const t = l.boolean(i) ? i : !this.pip;
    l.function(this.media.webkitSetPresentationMode) &&
      this.media.webkitSetPresentationMode(t ? nt.active : nt.inactive),
      l.function(this.media.requestPictureInPicture) &&
        (!this.pip && t
          ? this.media.requestPictureInPicture()
          : this.pip && !t && document.exitPictureInPicture());
  }
  get pip() {
    return z.pip
      ? l.empty(this.media.webkitPresentationMode)
        ? this.media === document.pictureInPictureElement
        : this.media.webkitPresentationMode === nt.active
      : null;
  }
  setPreviewThumbnails(i) {
    this.previewThumbnails &&
      this.previewThumbnails.loaded &&
      (this.previewThumbnails.destroy(), (this.previewThumbnails = null)),
      Object.assign(this.config.previewThumbnails, i),
      this.config.previewThumbnails.enabled &&
        (this.previewThumbnails = new mt(this));
  }
  static supported(i, t) {
    return z.check(i, t);
  }
  static loadSprite(i, t) {
    return Ei(i, t);
  }
  static setup(i, t = {}) {
    let s = null;
    return (
      l.string(i)
        ? (s = Array.from(document.querySelectorAll(i)))
        : l.nodeList(i)
        ? (s = Array.from(i))
        : l.array(i) && (s = i.filter(l.element)),
      l.empty(s) ? null : s.map((n) => new Pe(n, t))
    );
  }
}
Pe.defaults = Qn(Mi);
/*!
 * tabbable 6.1.1
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var Li = [
    "input:not([inert])",
    "select:not([inert])",
    "textarea:not([inert])",
    "a[href]:not([inert])",
    "button:not([inert])",
    "[tabindex]:not(slot):not([inert])",
    "audio[controls]:not([inert])",
    "video[controls]:not([inert])",
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    "details>summary:first-of-type:not([inert])",
    "details:not([inert])",
  ],
  Ve = Li.join(","),
  Ii = typeof Element > "u",
  ge = Ii
    ? function () {}
    : Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector,
  qe =
    !Ii && Element.prototype.getRootNode
      ? function (e) {
          var i;
          return e == null || (i = e.getRootNode) === null || i === void 0
            ? void 0
            : i.call(e);
        }
      : function (e) {
          return e == null ? void 0 : e.ownerDocument;
        },
  We = function e(i, t) {
    var s;
    t === void 0 && (t = !0);
    var n =
        i == null || (s = i.getAttribute) === null || s === void 0
          ? void 0
          : s.call(i, "inert"),
      o = n === "" || n === "true",
      a = o || (t && i && e(i.parentNode));
    return a;
  },
  Ta = function (i) {
    var t,
      s =
        i == null || (t = i.getAttribute) === null || t === void 0
          ? void 0
          : t.call(i, "contenteditable");
    return s === "" || s === "true";
  },
  Fi = function (i, t, s) {
    if (We(i)) return [];
    var n = Array.prototype.slice.apply(i.querySelectorAll(Ve));
    return t && ge.call(i, Ve) && n.unshift(i), (n = n.filter(s)), n;
  },
  Oi = function e(i, t, s) {
    for (var n = [], o = Array.from(i); o.length; ) {
      var a = o.shift();
      if (!We(a, !1))
        if (a.tagName === "SLOT") {
          var r = a.assignedElements(),
            c = r.length ? r : a.children,
            u = e(c, !0, s);
          s.flatten
            ? n.push.apply(n, u)
            : n.push({ scopeParent: a, candidates: u });
        } else {
          var d = ge.call(a, Ve);
          d && s.filter(a) && (t || !i.includes(a)) && n.push(a);
          var m =
              a.shadowRoot ||
              (typeof s.getShadowRoot == "function" && s.getShadowRoot(a)),
            h = !We(m, !1) && (!s.shadowRootFilter || s.shadowRootFilter(a));
          if (m && h) {
            var v = e(m === !0 ? a.children : m.children, !0, s);
            s.flatten
              ? n.push.apply(n, v)
              : n.push({ scopeParent: a, candidates: v });
          } else o.unshift.apply(o, a.children);
        }
    }
    return n;
  },
  Ri = function (i, t) {
    return i.tabIndex < 0 &&
      (t || /^(AUDIO|VIDEO|DETAILS)$/.test(i.tagName) || Ta(i)) &&
      isNaN(parseInt(i.getAttribute("tabindex"), 10))
      ? 0
      : i.tabIndex;
  },
  Sa = function (i, t) {
    return i.tabIndex === t.tabIndex
      ? i.documentOrder - t.documentOrder
      : i.tabIndex - t.tabIndex;
  },
  Di = function (i) {
    return i.tagName === "INPUT";
  },
  Ca = function (i) {
    return Di(i) && i.type === "hidden";
  },
  Ea = function (i) {
    var t =
      i.tagName === "DETAILS" &&
      Array.prototype.slice.apply(i.children).some(function (s) {
        return s.tagName === "SUMMARY";
      });
    return t;
  },
  Aa = function (i, t) {
    for (var s = 0; s < i.length; s++)
      if (i[s].checked && i[s].form === t) return i[s];
  },
  xa = function (i) {
    if (!i.name) return !0;
    var t = i.form || qe(i),
      s = function (r) {
        return t.querySelectorAll('input[type="radio"][name="' + r + '"]');
      },
      n;
    if (
      typeof window < "u" &&
      typeof window.CSS < "u" &&
      typeof window.CSS.escape == "function"
    )
      n = s(window.CSS.escape(i.name));
    else
      try {
        n = s(i.name);
      } catch (a) {
        return (
          console.error(
            "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
            a.message
          ),
          !1
        );
      }
    var o = Aa(n, i.form);
    return !o || o === i;
  },
  Pa = function (i) {
    return Di(i) && i.type === "radio";
  },
  Ma = function (i) {
    return Pa(i) && !xa(i);
  },
  Na = function (i) {
    var t,
      s = i && qe(i),
      n = (t = s) === null || t === void 0 ? void 0 : t.host,
      o = !1;
    if (s && s !== i) {
      var a, r, c;
      for (
        o = !!(
          ((a = n) !== null &&
            a !== void 0 &&
            (r = a.ownerDocument) !== null &&
            r !== void 0 &&
            r.contains(n)) ||
          (i != null &&
            (c = i.ownerDocument) !== null &&
            c !== void 0 &&
            c.contains(i))
        );
        !o && n;

      ) {
        var u, d, m;
        (s = qe(n)),
          (n = (u = s) === null || u === void 0 ? void 0 : u.host),
          (o = !!(
            (d = n) !== null &&
            d !== void 0 &&
            (m = d.ownerDocument) !== null &&
            m !== void 0 &&
            m.contains(n)
          ));
      }
    }
    return o;
  },
  Ut = function (i) {
    var t = i.getBoundingClientRect(),
      s = t.width,
      n = t.height;
    return s === 0 && n === 0;
  },
  $a = function (i, t) {
    var s = t.displayCheck,
      n = t.getShadowRoot;
    if (getComputedStyle(i).visibility === "hidden") return !0;
    var o = ge.call(i, "details>summary:first-of-type"),
      a = o ? i.parentElement : i;
    if (ge.call(a, "details:not([open]) *")) return !0;
    if (!s || s === "full" || s === "legacy-full") {
      if (typeof n == "function") {
        for (var r = i; i; ) {
          var c = i.parentElement,
            u = qe(i);
          if (c && !c.shadowRoot && n(c) === !0) return Ut(i);
          i.assignedSlot
            ? (i = i.assignedSlot)
            : !c && u !== i.ownerDocument
            ? (i = u.host)
            : (i = c);
        }
        i = r;
      }
      if (Na(i)) return !i.getClientRects().length;
      if (s !== "legacy-full") return !0;
    } else if (s === "non-zero-area") return Ut(i);
    return !1;
  },
  La = function (i) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(i.tagName))
      for (var t = i.parentElement; t; ) {
        if (t.tagName === "FIELDSET" && t.disabled) {
          for (var s = 0; s < t.children.length; s++) {
            var n = t.children.item(s);
            if (n.tagName === "LEGEND")
              return ge.call(t, "fieldset[disabled] *") ? !0 : !n.contains(i);
          }
          return !0;
        }
        t = t.parentElement;
      }
    return !1;
  },
  ze = function (i, t) {
    return !(t.disabled || We(t) || Ca(t) || $a(t, i) || Ea(t) || La(t));
  },
  ft = function (i, t) {
    return !(Ma(t) || Ri(t) < 0 || !ze(i, t));
  },
  Ia = function (i) {
    var t = parseInt(i.getAttribute("tabindex"), 10);
    return !!(isNaN(t) || t >= 0);
  },
  Fa = function e(i) {
    var t = [],
      s = [];
    return (
      i.forEach(function (n, o) {
        var a = !!n.scopeParent,
          r = a ? n.scopeParent : n,
          c = Ri(r, a),
          u = a ? e(n.candidates) : r;
        c === 0
          ? a
            ? t.push.apply(t, u)
            : t.push(r)
          : s.push({
              documentOrder: o,
              tabIndex: c,
              item: n,
              isScope: a,
              content: u,
            });
      }),
      s
        .sort(Sa)
        .reduce(function (n, o) {
          return o.isScope ? n.push.apply(n, o.content) : n.push(o.content), n;
        }, [])
        .concat(t)
    );
  },
  Oa = function (i, t) {
    t = t || {};
    var s;
    return (
      t.getShadowRoot
        ? (s = Oi([i], t.includeContainer, {
            filter: ft.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: Ia,
          }))
        : (s = Fi(i, t.includeContainer, ft.bind(null, t))),
      Fa(s)
    );
  },
  Ra = function (i, t) {
    t = t || {};
    var s;
    return (
      t.getShadowRoot
        ? (s = Oi([i], t.includeContainer, {
            filter: ze.bind(null, t),
            flatten: !0,
            getShadowRoot: t.getShadowRoot,
          }))
        : (s = Fi(i, t.includeContainer, ze.bind(null, t))),
      s
    );
  },
  Le = function (i, t) {
    if (((t = t || {}), !i)) throw new Error("No node provided");
    return ge.call(i, Ve) === !1 ? !1 : ft(t, i);
  },
  Da = Li.concat("iframe").join(","),
  Vt = function (i, t) {
    if (((t = t || {}), !i)) throw new Error("No node provided");
    return ge.call(i, Da) === !1 ? !1 : ze(t, i);
  };
/*!
 * focus-trap 7.4.0
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */ function qt(e, i) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    i &&
      (s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, s);
  }
  return t;
}
function Wt(e) {
  for (var i = 1; i < arguments.length; i++) {
    var t = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? qt(Object(t), !0).forEach(function (s) {
          Ba(e, s, t[s]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : qt(Object(t)).forEach(function (s) {
          Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
        });
  }
  return e;
}
function Ba(e, i, t) {
  return (
    (i = Ha(i)),
    i in e
      ? Object.defineProperty(e, i, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[i] = t),
    e
  );
}
function ja(e, i) {
  if (typeof e != "object" || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var s = t.call(e, i || "default");
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(e);
}
function Ha(e) {
  var i = ja(e, "string");
  return typeof i == "symbol" ? i : String(i);
}
var zt = {
    activateTrap: function (i, t) {
      if (i.length > 0) {
        var s = i[i.length - 1];
        s !== t && s.pause();
      }
      var n = i.indexOf(t);
      n === -1 || i.splice(n, 1), i.push(t);
    },
    deactivateTrap: function (i, t) {
      var s = i.indexOf(t);
      s !== -1 && i.splice(s, 1), i.length > 0 && i[i.length - 1].unpause();
    },
  },
  Ua = function (i) {
    return (
      i.tagName &&
      i.tagName.toLowerCase() === "input" &&
      typeof i.select == "function"
    );
  },
  Va = function (i) {
    return i.key === "Escape" || i.key === "Esc" || i.keyCode === 27;
  },
  Se = function (i) {
    return i.key === "Tab" || i.keyCode === 9;
  },
  qa = function (i) {
    return Se(i) && !i.shiftKey;
  },
  Wa = function (i) {
    return Se(i) && i.shiftKey;
  },
  Kt = function (i) {
    return setTimeout(i, 0);
  },
  Gt = function (i, t) {
    var s = -1;
    return (
      i.every(function (n, o) {
        return t(n) ? ((s = o), !1) : !0;
      }),
      s
    );
  },
  ke = function (i) {
    for (
      var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      s[n - 1] = arguments[n];
    return typeof i == "function" ? i.apply(void 0, s) : i;
  },
  Ie = function (i) {
    return i.target.shadowRoot && typeof i.composedPath == "function"
      ? i.composedPath()[0]
      : i.target;
  },
  za = [],
  Ka = function (i, t) {
    var s = (t == null ? void 0 : t.document) || document,
      n = (t == null ? void 0 : t.trapStack) || za,
      o = Wt(
        {
          returnFocusOnDeactivate: !0,
          escapeDeactivates: !0,
          delayInitialFocus: !0,
          isKeyForward: qa,
          isKeyBackward: Wa,
        },
        t
      ),
      a = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        delayInitialFocusTimer: void 0,
      },
      r,
      c = function (p, k, _) {
        return p && p[k] !== void 0 ? p[k] : o[_ || k];
      },
      u = function (p) {
        return a.containerGroups.findIndex(function (k) {
          var _ = k.container,
            $ = k.tabbableNodes;
          return (
            _.contains(p) ||
            $.find(function (H) {
              return H === p;
            })
          );
        });
      },
      d = function (p) {
        var k = o[p];
        if (typeof k == "function") {
          for (
            var _ = arguments.length, $ = new Array(_ > 1 ? _ - 1 : 0), H = 1;
            H < _;
            H++
          )
            $[H - 1] = arguments[H];
          k = k.apply(void 0, $);
        }
        if ((k === !0 && (k = void 0), !k)) {
          if (k === void 0 || k === !1) return k;
          throw new Error(
            "`".concat(
              p,
              "` was specified but was not a node, or did not return a node"
            )
          );
        }
        var q = k;
        if (typeof k == "string" && ((q = s.querySelector(k)), !q))
          throw new Error(
            "`".concat(p, "` as selector refers to no known node")
          );
        return q;
      },
      m = function () {
        var p = d("initialFocus");
        if (p === !1) return !1;
        if (p === void 0)
          if (u(s.activeElement) >= 0) p = s.activeElement;
          else {
            var k = a.tabbableGroups[0],
              _ = k && k.firstTabbableNode;
            p = _ || d("fallbackFocus");
          }
        if (!p)
          throw new Error(
            "Your focus-trap needs to have at least one focusable element"
          );
        return p;
      },
      h = function () {
        if (
          ((a.containerGroups = a.containers.map(function (p) {
            var k = Oa(p, o.tabbableOptions),
              _ = Ra(p, o.tabbableOptions);
            return {
              container: p,
              tabbableNodes: k,
              focusableNodes: _,
              firstTabbableNode: k.length > 0 ? k[0] : null,
              lastTabbableNode: k.length > 0 ? k[k.length - 1] : null,
              nextTabbableNode: function (H) {
                var q =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : !0,
                  G = _.findIndex(function (Z) {
                    return Z === H;
                  });
                if (!(G < 0))
                  return q
                    ? _.slice(G + 1).find(function (Z) {
                        return Le(Z, o.tabbableOptions);
                      })
                    : _.slice(0, G)
                        .reverse()
                        .find(function (Z) {
                          return Le(Z, o.tabbableOptions);
                        });
              },
            };
          })),
          (a.tabbableGroups = a.containerGroups.filter(function (p) {
            return p.tabbableNodes.length > 0;
          })),
          a.tabbableGroups.length <= 0 && !d("fallbackFocus"))
        )
          throw new Error(
            "Your focus-trap must have at least one container with at least one tabbable node in it at all times"
          );
      },
      v = function N(p) {
        if (p !== !1 && p !== s.activeElement) {
          if (!p || !p.focus) {
            N(m());
            return;
          }
          p.focus({ preventScroll: !!o.preventScroll }),
            (a.mostRecentlyFocusedNode = p),
            Ua(p) && p.select();
        }
      },
      T = function (p) {
        var k = d("setReturnFocus", p);
        return k || (k === !1 ? !1 : p);
      },
      S = function (p) {
        var k = Ie(p);
        if (!(u(k) >= 0)) {
          if (ke(o.clickOutsideDeactivates, p)) {
            r.deactivate({ returnFocus: o.returnFocusOnDeactivate });
            return;
          }
          ke(o.allowOutsideClick, p) || p.preventDefault();
        }
      },
      x = function (p) {
        var k = Ie(p),
          _ = u(k) >= 0;
        _ || k instanceof Document
          ? _ && (a.mostRecentlyFocusedNode = k)
          : (p.stopImmediatePropagation(), v(a.mostRecentlyFocusedNode || m()));
      },
      C = function (p) {
        var k =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          _ = Ie(p);
        h();
        var $ = null;
        if (a.tabbableGroups.length > 0) {
          var H = u(_),
            q = H >= 0 ? a.containerGroups[H] : void 0;
          if (H < 0)
            k
              ? ($ =
                  a.tabbableGroups[a.tabbableGroups.length - 1]
                    .lastTabbableNode)
              : ($ = a.tabbableGroups[0].firstTabbableNode);
          else if (k) {
            var G = Gt(a.tabbableGroups, function (Qe) {
              var Je = Qe.firstTabbableNode;
              return _ === Je;
            });
            if (
              (G < 0 &&
                (q.container === _ ||
                  (Vt(_, o.tabbableOptions) &&
                    !Le(_, o.tabbableOptions) &&
                    !q.nextTabbableNode(_, !1))) &&
                (G = H),
              G >= 0)
            ) {
              var Z = G === 0 ? a.tabbableGroups.length - 1 : G - 1,
                ee = a.tabbableGroups[Z];
              $ = ee.lastTabbableNode;
            } else Se(p) || ($ = q.nextTabbableNode(_, !1));
          } else {
            var ue = Gt(a.tabbableGroups, function (Qe) {
              var Je = Qe.lastTabbableNode;
              return _ === Je;
            });
            if (
              (ue < 0 &&
                (q.container === _ ||
                  (Vt(_, o.tabbableOptions) &&
                    !Le(_, o.tabbableOptions) &&
                    !q.nextTabbableNode(_))) &&
                (ue = H),
              ue >= 0)
            ) {
              var ji = ue === a.tabbableGroups.length - 1 ? 0 : ue + 1,
                Hi = a.tabbableGroups[ji];
              $ = Hi.firstTabbableNode;
            } else Se(p) || ($ = q.nextTabbableNode(_));
          }
        } else $ = d("fallbackFocus");
        $ && (Se(p) && p.preventDefault(), v($));
      },
      f = function (p) {
        if (Va(p) && ke(o.escapeDeactivates, p) !== !1) {
          p.preventDefault(), r.deactivate();
          return;
        }
        (o.isKeyForward(p) || o.isKeyBackward(p)) && C(p, o.isKeyBackward(p));
      },
      M = function (p) {
        var k = Ie(p);
        u(k) >= 0 ||
          ke(o.clickOutsideDeactivates, p) ||
          ke(o.allowOutsideClick, p) ||
          (p.preventDefault(), p.stopImmediatePropagation());
      },
      j = function () {
        if (a.active)
          return (
            zt.activateTrap(n, r),
            (a.delayInitialFocusTimer = o.delayInitialFocus
              ? Kt(function () {
                  v(m());
                })
              : v(m())),
            s.addEventListener("focusin", x, !0),
            s.addEventListener("mousedown", S, { capture: !0, passive: !1 }),
            s.addEventListener("touchstart", S, { capture: !0, passive: !1 }),
            s.addEventListener("click", M, { capture: !0, passive: !1 }),
            s.addEventListener("keydown", f, { capture: !0, passive: !1 }),
            r
          );
      },
      V = function () {
        if (a.active)
          return (
            s.removeEventListener("focusin", x, !0),
            s.removeEventListener("mousedown", S, !0),
            s.removeEventListener("touchstart", S, !0),
            s.removeEventListener("click", M, !0),
            s.removeEventListener("keydown", f, !0),
            r
          );
      };
    return (
      (r = {
        get active() {
          return a.active;
        },
        get paused() {
          return a.paused;
        },
        activate: function (p) {
          if (a.active) return this;
          var k = c(p, "onActivate"),
            _ = c(p, "onPostActivate"),
            $ = c(p, "checkCanFocusTrap");
          $ || h(),
            (a.active = !0),
            (a.paused = !1),
            (a.nodeFocusedBeforeActivation = s.activeElement),
            k == null || k();
          var H = function () {
            $ && h(), j(), _ == null || _();
          };
          return $ ? ($(a.containers.concat()).then(H, H), this) : (H(), this);
        },
        deactivate: function (p) {
          if (!a.active) return this;
          var k = Wt(
            {
              onDeactivate: o.onDeactivate,
              onPostDeactivate: o.onPostDeactivate,
              checkCanReturnFocus: o.checkCanReturnFocus,
            },
            p
          );
          clearTimeout(a.delayInitialFocusTimer),
            (a.delayInitialFocusTimer = void 0),
            V(),
            (a.active = !1),
            (a.paused = !1),
            zt.deactivateTrap(n, r);
          var _ = c(k, "onDeactivate"),
            $ = c(k, "onPostDeactivate"),
            H = c(k, "checkCanReturnFocus"),
            q = c(k, "returnFocus", "returnFocusOnDeactivate");
          _ == null || _();
          var G = function () {
            Kt(function () {
              q && v(T(a.nodeFocusedBeforeActivation)), $ == null || $();
            });
          };
          return q && H
            ? (H(T(a.nodeFocusedBeforeActivation)).then(G, G), this)
            : (G(), this);
        },
        pause: function (p) {
          if (a.paused || !a.active) return this;
          var k = c(p, "onPause"),
            _ = c(p, "onPostPause");
          return (a.paused = !0), k == null || k(), V(), _ == null || _(), this;
        },
        unpause: function (p) {
          if (!a.paused || !a.active) return this;
          var k = c(p, "onUnpause"),
            _ = c(p, "onPostUnpause");
          return (
            (a.paused = !1), k == null || k(), h(), j(), _ == null || _(), this
          );
        },
        updateContainerElements: function (p) {
          var k = [].concat(p).filter(Boolean);
          return (
            (a.containers = k.map(function (_) {
              return typeof _ == "string" ? s.querySelector(_) : _;
            })),
            a.active && h(),
            this
          );
        },
      }),
      r.updateContainerElements(i),
      r
    );
  };
/*!
 * focus-trap-vue v4.0.1
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const Ga = {
    escapeDeactivates: { type: Boolean, default: !0 },
    returnFocusOnDeactivate: { type: Boolean, default: !0 },
    allowOutsideClick: { type: [Boolean, Function], default: !0 },
    clickOutsideDeactivates: [Boolean, Function],
    initialFocus: [String, Function, Boolean],
    fallbackFocus: [String, Function],
    checkCanFocusTrap: Function,
    checkCanReturnFocus: Function,
    delayInitialFocus: { type: Boolean, default: !0 },
    document: Object,
    preventScroll: Boolean,
    setReturnFocus: [Object, String, Boolean, Function],
    tabbableOptions: Object,
  },
  Bi = as({
    props: Object.assign({ active: { type: Boolean, default: !0 } }, Ga),
    emits: [
      "update:active",
      "activate",
      "postActivate",
      "deactivate",
      "postDeactivate",
    ],
    render() {
      return this.renderImpl();
    },
    setup(e, { slots: i, emit: t }) {
      let s;
      const n = F(null),
        o = bt(() => {
          const r = n.value;
          return r && (r instanceof HTMLElement ? r : r.$el);
        });
      function a() {
        return (
          s ||
          (s = Ka(o.value, {
            escapeDeactivates: e.escapeDeactivates,
            allowOutsideClick: e.allowOutsideClick,
            returnFocusOnDeactivate: e.returnFocusOnDeactivate,
            clickOutsideDeactivates: e.clickOutsideDeactivates,
            onActivate: () => {
              t("update:active", !0), t("activate");
            },
            onDeactivate: () => {
              t("update:active", !1), t("deactivate");
            },
            onPostActivate: () => t("postActivate"),
            onPostDeactivate: () => t("postDeactivate"),
            initialFocus: e.initialFocus,
            fallbackFocus: e.fallbackFocus,
            tabbableOptions: e.tabbableOptions,
            delayInitialFocus: e.delayInitialFocus,
          }))
        );
      }
      return (
        ve(() => {
          Ce(
            () => e.active,
            (r) => {
              r && o.value
                ? a().activate()
                : s &&
                  (s.deactivate(),
                  (!o.value || o.value.nodeType === Node.COMMENT_NODE) &&
                    (s = null));
            },
            { immediate: !0, flush: "post" }
          );
        }),
        os(() => {
          s && s.deactivate(), (s = null);
        }),
        {
          activate() {
            a().activate();
          },
          deactivate() {
            s && s.deactivate();
          },
          renderImpl() {
            if (!i.default) return null;
            const r = i.default().filter((u) => u.type !== rs);
            return !r || !r.length || r.length > 1
              ? (console.error(
                  "[focus-trap-vue]: FocusTrap requires exactly one child."
                ),
                r)
              : ls(r[0], { ref: n });
          },
        }
      );
    },
  });
const Ya = ["aria-hidden"],
  Xa = { class: "modal-video__container" },
  Qa = { id: "player", class: "plyr__video-embed" },
  Ja = ["src"],
  Za = {
    __name: "ModalVideo",
    setup(e) {
      const i = be(),
        t = F(!1);
      function s() {
        i.playingVideo = null;
      }
      function n(o) {
        o.keyCode === 27 && s();
      }
      return (
        ve(() => {
          window.addEventListener("keydown", n);
          const o = new Pe("#player");
          (t.value = !0),
            o.on("ready", (a) => {
              o.play();
            });
        }),
        ei(() => {
          window.removeEventListener("keydown", n);
        }),
        (o, a) => {
          const r = _t;
          return (
            D(),
            se(
              w(Bi),
              {
                active: w(t),
                "onUpdate:active":
                  a[0] || (a[0] = (c) => (ti(t) ? (t.value = c) : null)),
              },
              {
                default: O(() => [
                  g(
                    "div",
                    {
                      id: "modalVideo",
                      class: re([
                        "modal-video",
                        { "modal-video--open": w(i).playingVideo },
                      ]),
                      "aria-hidden": !w(i).playingVideo,
                      role: "dialog",
                    },
                    [
                      P(
                        r,
                        {
                          label: "Close video",
                          onClick: s,
                          onKeydown: yt(s, ["esc"]),
                        },
                        null,
                        8,
                        ["onKeydown"]
                      ),
                      g("div", Xa, [
                        g("div", Qa, [
                          g(
                            "iframe",
                            {
                              src: w(i).playingVideo,
                              allowfullscreen: "",
                              allowtransparency: "",
                              allow: "autoplay",
                            },
                            null,
                            8,
                            Ja
                          ),
                        ]),
                      ]),
                    ],
                    10,
                    Ya
                  ),
                ]),
                _: 1,
              },
              8,
              ["active"]
            )
          );
        }
      );
    },
  };
const eo = ["aria-hidden"],
  to = { class: "modal-artwork__container" },
  io = {
    __name: "ModalArtwork",
    setup(e) {
      const i = be(),
        t = F(!1);
      function s() {
        i.artworkModal = null;
      }
      function n(o) {
        o.keyCode === 27 && s();
      }
      return (
        ve(() => {
          window.addEventListener("keydown", n), (t.value = !0);
        }),
        ei(() => {
          window.removeEventListener("keydown", n);
        }),
        (o, a) => {
          const r = _t,
            c = fs;
          return (
            D(),
            se(
              w(Bi),
              {
                active: w(t),
                "onUpdate:active":
                  a[0] || (a[0] = (u) => (ti(t) ? (t.value = u) : null)),
              },
              {
                default: O(() => [
                  g(
                    "div",
                    {
                      id: "modalArtwork",
                      class: re([
                        "modal-artwork",
                        { "modal-artwork--open": w(i).artworkModal },
                      ]),
                      "aria-hidden": !w(i).artworkModal,
                      role: "dialog",
                    },
                    [
                      P(
                        r,
                        {
                          label: "Close artwork",
                          onClick: s,
                          onKeydown: yt(s, ["esc"]),
                        },
                        null,
                        8,
                        ["onKeydown"]
                      ),
                      g("div", to, [
                        P(
                          c,
                          {
                            title: w(i).artworkModal.title,
                            author: w(i).artworkModal.author,
                            description: w(i).artworkModal.description,
                            "url-buy": w(i).artworkModal.url_buy,
                            "url-3d": w(i).artworkModal.url_threed,
                            image: w(i).artworkModal.image,
                          },
                          null,
                          8,
                          [
                            "title",
                            "author",
                            "description",
                            "url-buy",
                            "url-3d",
                            "image",
                          ]
                        ),
                      ]),
                    ],
                    10,
                    eo
                  ),
                ]),
                _: 1,
              },
              8,
              ["active"]
            )
          );
        }
      );
    },
  };
const so = { class: "site-footer__ctas container" },
  no = g("div", { class: "site-footer__ctas-item-circles" }, null, -1),
  ao = g("div", { class: "site-footer__ctas-item-circles-outer" }, null, -1),
  oo = { class: "site-footer__ctas-item-content" },
  ro = g("div", { class: "site-footer__ctas-item-circles" }, null, -1),
  lo = g("div", { class: "site-footer__ctas-item-circles-outer" }, null, -1),
  co = { class: "site-footer__ctas-item-content" },
  uo = { class: "site-footer__bottom container" },
  ho = {
    __name: "SiteFooter",
    setup(e) {
      const i = Ke(),
        t = be(),
        s = gt(),
        n = F(null),
        o = F(0),
        a = F(0),
        r = F(0),
        c = F(0),
        u = F(0.5),
        d = F(!1),
        m = F(null),
        h = F(null),
        v = F(null),
        T = F(!1),
        S = F(!1),
        x = F(!1);
      function C() {
        i.waitlistIsOpen = !0;
      }
      function f(_) {
        (d.value = !0),
          (o.value = (_.x - window.innerWidth / 2) * u.value),
          (a.value = (_.y - window.innerHeight / 2) * u.value);
      }
      function M(_) {
        (d.value = !0),
          (o.value = (_.x - window.innerWidth / 2) * u.value),
          (a.value = (_.y - window.innerHeight / 2) * u.value);
      }
      function j() {
        (d.value = !1), (o.value = 0), (a.value = 0);
      }
      function V(_) {
        v.value = _;
      }
      function N() {
        T.value = !0;
      }
      function p() {
        S.value = !0;
      }
      function k() {
        x.value = !0;
      }
      return (
        Ce(o, (_) => {
          m.value = de.to(r, {
            value: _,
            duration: 1.1,
            ease: "Quart.easeOut",
          });
        }),
        Ce(a, (_) => {
          h.value = de.to(c, {
            value: _,
            duration: 1.1,
            ease: "Quart.easeOut",
          });
        }),
        s.afterEach(() => {
          (T.value = !1), (S.value = !1), (x.value = !1);
        }),
        (_, $) => {
          const H = ai,
            q = oi,
            G = wt,
            Z = gs,
            ee = ri,
            ue = vt;
          return (
            D(),
            Q(
              "footer",
              {
                class: re([
                  "site-footer",
                  {
                    "site-footer--hover": w(d),
                    "site-footer--heading-visible": w(T),
                    "site-footer--socials-visible": w(S),
                    "site-footer--links-visible": w(x),
                  },
                ]),
                onMouseenter: f,
                onMousemove: M,
                onMouseleave: j,
              },
              [
                g(
                  "div",
                  {
                    ref_key: "blur",
                    ref: n,
                    class: re([
                      "site-footer__blur",
                      `site-footer__blur--${w(v)}`,
                    ]),
                    style: ii(`transform: translate(-50%, -50%) translateX(${w(
                      r
                    )}px)
    translateY(${w(c)}px)`),
                  },
                  null,
                  6
                ),
                g("div", so, [
                  g(
                    "div",
                    {
                      class: "site-footer__ctas-item",
                      onMouseover:
                        $[0] ||
                        ($[0] = () => {
                          V(0);
                        }),
                    },
                    [
                      no,
                      ao,
                      g("div", oo, [
                        P(H, { name: "3d", width: 17, height: 17 }),
                        P(
                          q,
                          {
                            level: 3,
                            tag: "p",
                            title: "Experience <b>your art in 3D</b>",
                            color: w(t).pageThemeDark ? "white" : "black",
                            split: !0,
                          },
                          null,
                          8,
                          ["color"]
                        ),
                        P(
                          G,
                          {
                            color: w(t).pageThemeDark ? "white" : "grey",
                            "expand-click": !0,
                            disabled: "",
                          },
                          { default: O(() => [te(" Coming soon ")]), _: 1 },
                          8,
                          ["color"]
                        ),
                      ]),
                    ],
                    32
                  ),
                  g(
                    "div",
                    {
                      class: "site-footer__ctas-item",
                      onMouseover:
                        $[1] ||
                        ($[1] = () => {
                          V(1);
                        }),
                    },
                    [
                      ro,
                      lo,
                      g("div", co, [
                        P(H, { name: "globe", width: 19, height: 19 }),
                        P(
                          Z,
                          { "one-time": !1, onEnter: N },
                          {
                            default: O(() => [
                              P(
                                q,
                                {
                                  level: 3,
                                  tag: "p",
                                  title:
                                    "Be the first to <br/><b>build your vault</b>",
                                  color: w(t).pageThemeDark ? "white" : "black",
                                  split: !0,
                                },
                                null,
                                8,
                                ["color"]
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        P(
                          G,
                          {
                            color: w(t).pageThemeDark ? "white" : "grey",
                            "expand-click": !0,
                            onClick: C,
                          },
                          { default: O(() => [te(" Download On Chrome Store ")]), _: 1 },
                          8,
                          ["color"]
                        ),
                      ]),
                    ],
                    32
                  ),
                ]),
                g("div", uo, [
                  P(
                    Z,
                    { "one-time": !1, "root-margin": "-50px", onEnter: p },
                    { default: O(() => [P(ee)]), _: 1 }
                  ),
                  P(
                    Z,
                    {
                      tag: "div",
                      "one-time": !1,
                      "root-margin": "-50px",
                      class: "site-footer__links",
                      onEnter: k,
                    },
                    {
                      default: O(() => [
                        P(
                          ue,
                          {
                            to: "/terms-and-conditions",
                            class: "eyebrow eyebrow--bold",
                          },
                          {
                            default: O(() => [te(" Terms & Conditions ")]),
                            _: 1,
                          }
                        ),
                        P(
                          ue,
                          {
                            to: "/privacy-policy",
                            class: "eyebrow eyebrow--bold",
                          },
                          { default: O(() => [te(" Privacy policy ")]), _: 1 }
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ],
              34
            )
          );
        }
      );
    },
  };
function mo(e) {
  const {
    gtag: { id: i },
  } = si().public;
  if (!("dataLayer" in window)) return;
  const t = window.dataLayer.length > 2;
  if (e) {
    t
      ? Yt(!1, i)
      : cs({
          script: [{ src: `https://www.googletagmanager.com/gtag/js?id=${i}` }],
        });
    return;
  }
  Yt(!0, i);
}
function Yt(e, i) {
  window[`ga-disable-${i}`] = e;
}
const po = { class: "cookie-banner" },
  fo = { class: "cookie-banner__buttons" },
  go = {
    __name: "CookieBanner",
    setup(e) {
      const i = be();
      function t() {
        localStorage.setItem("hasCookie", !0), (i.hasCookie = !0);
      }
      function s() {
        mo(!0);
      }
      return (n, o) => {
        const a = vt,
          r = wt;
        return (
          D(),
          Q("div", po, [
            g("p", null, [
              te(
                " We value your privacy. Our website uses cookies to ensure you get the best experience, analyze site traffic, and understand where our audience is coming from. To learn more about how we use cookies please see our "
              ),
              P(
                a,
                { to: "/privacy-policy", target: "_blank" },
                { default: O(() => [te("Privacy Policy")]), _: 1 }
              ),
              te(". "),
            ]),
            g("div", fo, [
              g(
                "button",
                {
                  type: "button",
                  class:
                    "eyebrow cookie-banner__button cookie-banner__button--decline",
                  onClick: t,
                },
                " No, thanks "
              ),
              P(
                r,
                {
                  color: "light-grey",
                  class:
                    "theme-unrelated cookie-banner__button cookie-banner__button--accept",
                  onClick:
                    o[0] ||
                    (o[0] = () => {
                      s(), t();
                    }),
                },
                { default: O(() => [te("I agree")]), _: 1 }
              ),
            ]),
          ])
        );
      };
    },
  };
var bo = function e(i, t) {
  if (i === t) return !0;
  if (i && t && typeof i == "object" && typeof t == "object") {
    if (i.constructor !== t.constructor) return !1;
    var s, n, o;
    if (Array.isArray(i)) {
      if (((s = i.length), s != t.length)) return !1;
      for (n = s; n-- !== 0; ) if (!e(i[n], t[n])) return !1;
      return !0;
    }
    if (i.constructor === RegExp)
      return i.source === t.source && i.flags === t.flags;
    if (i.valueOf !== Object.prototype.valueOf)
      return i.valueOf() === t.valueOf();
    if (i.toString !== Object.prototype.toString)
      return i.toString() === t.toString();
    if (((o = Object.keys(i)), (s = o.length), s !== Object.keys(t).length))
      return !1;
    for (n = s; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
    for (n = s; n-- !== 0; ) {
      var a = o[n];
      if (!e(i[a], t[a])) return !1;
    }
    return !0;
  }
  return i !== i && t !== t;
};
class yo {
  constructor(i, t) {
    (this.root = i),
      (this.toolbar = t),
      (this.values = {}),
      (this.toggleEdges = this.toolbar.querySelector("#toggle-edges")),
      (this.toggleColumns = this.toolbar.querySelector("#toggle-columns")),
      (this.toggleGutters = this.toolbar.querySelector("#toggle-gutters")),
      (this.timeout = null),
      (this.timeoutDuration = 150),
      this.toggle("edges", this.toggleEdges.checked),
      this.toggle("columns", this.toggleColumns.checked),
      this.toggle("gutters", this.toggleGutters.checked),
      this.toggleEdges.addEventListener("change", (s) =>
        this.toggle("edges", s.currentTarget.checked)
      ),
      this.toggleColumns.addEventListener("change", (s) =>
        this.toggle("columns", s.currentTarget.checked)
      ),
      this.toggleGutters.addEventListener("change", (s) =>
        this.toggle("gutters", s.currentTarget.checked)
      );
  }
  build() {
    const i = Number(this.values["--grid-columns"]),
      t = Number(this.values["--grid-gutters"]);
    this.root.innerHTML = "";
    for (let o = 0; o < i; o++) {
      const a = document.createElement("div");
      (a.id = `site-grid-column-${o}`),
        (a.className = `site-grid__column site-grid__column--${o}`),
        this.root.append(a);
    }
    for (let o = 0; o < t; o++) {
      const a = document.createElement("div"),
        r = document.querySelector(`#site-grid-column-${o + 1}`);
      (a.id = `site-grid-gutter-${o}`),
        (a.className = `site-grid__gutter site-grid__gutter--${o}`),
        this.root.insertBefore(a, r);
    }
    const s = document.createElement("div"),
      n = document.createElement("div");
    (s.id = "site-grid-edge-0"),
      (s.className = "site-grid__edge site-grid__edge--0"),
      (n.id = "site-grid-edge-1"),
      (n.className = "site-grid__edge site-grid__edge--1"),
      this.root.append(n),
      this.root.prepend(s);
  }
  toggle(i, t) {
    switch (i) {
      case "edges": {
        this.root.classList.toggle("site-grid--no-edges", !t);
        break;
      }
      case "columns": {
        this.root.classList.toggle("site-grid--no-columns", !t);
        break;
      }
      case "gutters": {
        this.root.classList.toggle("site-grid--no-gutters", !t);
        break;
      }
    }
  }
  observe(i, t) {
    const s = () => {
      const n = {};
      for (const o of t) n[o] = getComputedStyle(i).getPropertyValue(o);
      bo(n, this.values) || ((this.values = n), this.build()),
        this.timeout && clearTimeout(this.timeout),
        (this.timeout = setTimeout(s, this.timeoutDuration));
    };
    s();
  }
  unobserve() {
    this.timeout && clearTimeout(this.timeout), (this.timeout = null);
  }
}
const vo = { class: "site-grid" },
  wo = us(
    '<div class="site-grid__toolbar-inner"><div class="site-grid__toolbar-item"><input id="toggle-columns" type="checkbox"><label for="toggle-columns">Show Columns</label></div><div class="site-grid__toolbar-item"><input id="toggle-gutters" type="checkbox"><label for="toggle-gutters">Show Gutters</label></div><div class="site-grid__toolbar-item"><input id="toggle-edges" type="checkbox"><label for="toggle-edges">Show Edges</label></div></div>',
    1
  ),
  _o = g("span", { class: "u-visually-hidden" }, "Toggle Toolbar", -1),
  ko = [_o],
  To = { name: "SiteGrid" },
  So = Object.assign(To, {
    setup(e) {
      const i = ni(() => !0, "$6hiyvHVTog"),
        t = F(null),
        s = F(null),
        n = () => {
          i.value = !i.value;
        };
      return (
        ve(() => {
          new yo(t.value, s.value).observe(document.documentElement, [
            "--grid-columns",
            "--grid-gutters",
          ]);
        }),
        (o, a) => (
          D(),
          Q("section", vo, [
            g(
              "div",
              { ref_key: "grid", ref: t, class: "site-grid__layout" },
              null,
              512
            ),
            g(
              "div",
              {
                ref_key: "toolbar",
                ref: s,
                class: re([
                  "site-grid__toolbar",
                  { "site-grid__toolbar--hidden": !w(i) },
                ]),
              },
              [
                wo,
                g(
                  "button",
                  {
                    type: "button",
                    class: "site-grid__toolbar-toggle",
                    onClick: n,
                  },
                  ko
                ),
              ],
              2
            ),
          ])
        )
      );
    },
  });
const Co = g("link", { rel: "icon", href: "favicon.svg" }, null, -1),
  Eo = g(
    "link",
    { rel: "mask-icon", href: "mask-icon.svg", color: "#000000" },
    null,
    -1
  ),
  Ao = g("meta", { name: "theme-color", content: "#ffffff" }, null, -1),
  xo = g(
    "link",
    { rel: "stylesheet", href: "https://cdn.plyr.io/3.7.8/plyr.css" },
    null,
    -1
  ),
  Po = { class: "site-wrapper" },
  Mo = { class: "site-main" },
  No = g("div", { class: "page-transition-overlay" }, null, -1),
  Ko = {
    __name: "default",
    async setup(e) {
      let i, t;
      const s = si();
      Jt().query.debug;
      const o = bt(() => localStorage.getItem("hasCookie")),
        a = Gi({
          addDirAttribute: !0,
          addSeoAttributes: !0,
          identifierAttribute: "id",
        }),
        r = Ke(),
        c = be(),
        u = Zt`*[_type == "globals"][0] ${ds}`,
        { data: d } = (([i, t] = hs(() => bs(u))), (i = await i), t(), i);
      c.globals = d;
      const m = ni(() => ys, "$VbeGLRT2Wl");
      function h() {
        (r.menuIsOpen = !1), (r.waitlistIsOpen = !1);
      }
      return (
        ve(() => {
          console.log(c.globals),
            window.addEventListener("keydown", (v) => {
              v.key === "Tab" && (c.keyboardUser = !0);
            }),
            window.addEventListener("click", (v) => {
              c.keyboardUser = !1;
            });
        }),
        (v, T) => {
          const S = Vi,
            x = qi,
            C = Wi,
            f = As,
            M = Ns,
            j = js,
            V = Yi,
            N = ln,
            p = bn,
            k = Za,
            _ = io,
            $ = ho,
            H = go,
            q = So,
            G = zi,
            Z = Ui;
          return (
            D(),
            se(
              Z,
              { lang: w(a).htmlAttrs.lang, dir: w(a).htmlAttrs.dir },
              {
                default: O(() => [
                  P(C, null, {
                    default: O(() => [
                      (D(!0),
                      Q(
                        Fe,
                        null,
                        rt(
                          w(a).link,
                          (ee) => (
                            D(),
                            se(
                              S,
                              {
                                key: ee.id,
                                id: ee.id,
                                rel: ee.rel,
                                href: ee.href,
                                hreflang: ee.hreflang,
                              },
                              null,
                              8,
                              ["id", "rel", "href", "hreflang"]
                            )
                          )
                        ),
                        128
                      )),
                      (D(!0),
                      Q(
                        Fe,
                        null,
                        rt(
                          w(a).meta,
                          (ee) => (
                            D(),
                            se(
                              x,
                              {
                                key: ee.id,
                                id: ee.id,
                                property: ee.property,
                                content: ee.content,
                              },
                              null,
                              8,
                              ["id", "property", "content"]
                            )
                          )
                        ),
                        128
                      )),
                      Co,
                      Eo,
                      Ao,
                      xo,
                    ]),
                    _: 1,
                  }),
                  P(
                    G,
                    {
                      class: re({
                        "menu-is-open": w(r).menuIsOpen,
                        "waitlist-is-open": w(r).waitlistIsOpen,
                        "theme-dark": w(c).pageThemeDark,
                        "video-is-open": w(c).playingVideo,
                        "artwork-is-open": w(c).artworkModal,
                        "keyboard-user": w(c).keyboardUser,
                        "ui-visible": w(c).showUI,
                      }),
                      style: ii(`
        --page-theme-background: ${w(c).pageThemeBackground};
        --page-theme-background-rgb: ${w(it)(w(c).pageThemeBackground)};
        --page-theme-color: ${w(c).pageThemeColor};
        --page-theme-color-rgb: ${w(it)(w(c).pageThemeColor)};
        --page-footer-color: ${w(c).pageFooterColor};
        --page-footer-color-rgb: ${w(it)(w(c).pageFooterColor)};
      `),
                    },
                    {
                      default: O(() => [
                        g("main", Po, [
                          w(s).public.front_only === "false" ||
                          !w(s).public.front_only
                            ? (D(), Q(Fe, { key: 0 }, [P(f), P(M), P(j)], 64))
                            : ae("", !0),
                          g("section", Mo, [
                            P(V),
                            P(N),
                            w(r).waitlistIsOpen
                              ? (D(), se(p, { key: 0 }))
                              : ae("", !0),
                            g("div", {
                              class: "site-modal-backdrop",
                              onClick: h,
                            }),
                            w(c).playingVideo
                              ? (D(), se(k, { key: 1 }))
                              : ae("", !0),
                            w(c).artworkModal
                              ? (D(), se(_, { key: 2 }))
                              : ae("", !0),
                            ms(v.$slots, "default"),
                            P($),
                            No,
                          ]),
                          w(o) !== "true" && !w(c).hasCookie && w(c).showUI
                            ? (D(), se(H, { key: 1 }))
                            : ae("", !0),
                          w(m) ? (D(), se(q, { key: 2 })) : ae("", !0),
                        ]),
                      ]),
                      _: 3,
                    },
                    8,
                    ["class", "style"]
                  ),
                ]),
                _: 3,
              },
              8,
              ["lang", "dir"]
            )
          );
        }
      );
    },
  };
export { Ko as default };
