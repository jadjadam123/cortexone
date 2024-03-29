import { H as V, T as L, M as A } from "./components.9620909a.js";
import { _ as N, a as q } from "./DarkBackgroundWrapper.5fc99f35.js";
import { _ as E, a as X } from "./PageHeader.5408ea6e.js";
import { _ as Y, a as Z } from "./SectionTitleTextCentered.33036a8a.js";
import { _ as j } from "./eyebrow.b2f16651.js";
import { _ as z } from "./Heading.8afb7efd.js";
import { _ as O } from "./TextBlock.dac0ed1a.js";
import {
  l as P,
  j as R,
  k as W,
  m as G,
  f as l,
  a as e,
  w as n,
  p as t,
  F as T,
  d as c,
  o as i,
  b as u,
  t as m,
  s as I,
} from "./entry.741170f4.js";
import { u as J } from "./useSanityFetch.aa0c89aa.js";
import { r as x, f as p } from "./formatters.ccf1137f.js";
import { u as K } from "./site-header.2c0f3e29.js";
import "./ButtonPill.d29bc1c7.js";
import "./InView.86493ce9.js";
import "./split-type.57c98042.js";
import "./constants.66f91b37.js";
const Q = { class: "about" },
  U = { class: "about-values" },
  ee = { class: "container" },
  te = { class: "about-values__header" },
  oe = { class: "about-values__item-title" },
  se = { key: 1, class: "loading" },
  ke = {
    __name: "about",
    async setup(ae) {
      let _, d;
      const a = P(),
        f = K(),
        k = R`*[_type == "about"][0]`,
        { data: o } = (([_, d] = W(() => J(k))), (_ = await _), d(), _);
      return (
        (a.pageThemeDark = !1),
        (a.pageThemeBackground = null),
        (a.pageThemeColor = null),
        (a.pageFooterColor = null),
        (f.isLight = !1),
        G(() => {
          setTimeout(() => {
            a.page = "about";
          }, 600),
            (a.pageThemeDark = !1),
            (a.pageThemeBackground = null),
            (a.pageThemeColor = null),
            (a.pageFooterColor = null),
            (f.isLight = !1);
        }),
        (ne, re) => {
          const w = L,
            g = A,
            v = V,
            s = q,
            S = E,
            $ = Y,
            B = X,
            C = j,
            F = z,
            H = O,
            D = N,
            M = Z;
          return (
            i(),
            l("article", Q, [
              e(v, null, {
                default: n(() => {
                  var r, b, h;
                  return [
                    e(w, null, {
                      default: n(() => {
                        var y;
                        return [
                          u(
                            m(
                              (y = t(o)) != null && y.title
                                ? t(x)(t(o).title)
                                : "About"
                            ) + " | Cortex Ai",
                            1
                          ),
                        ];
                      }),
                      _: 1,
                    }),
                    e(
                      g,
                      {
                        name: "title",
                        content: `${
                          (r = t(o)) != null && r.title
                            ? t(x)(t(o).title)
                            : "About"
                        } | Cortex Ai`,
                      },
                      null,
                      8,
                      ["content"]
                    ),
                    e(
                      g,
                      {
                        name: "description",
                        content:
                          (b = t(o)) != null && b.description
                            ? (h = t(o)) == null
                              ? void 0
                              : h.description
                            : null,
                      },
                      null,
                      8,
                      ["content"]
                    ),
                  ];
                }),
                _: 1,
              }),
              t(o)
                ? (i(),
                  l(
                    T,
                    { key: 0 },
                    [
                      e(
                        S,
                        {
                          title: t(p)(t(o).title),
                          description: t(o).description,
                        },
                        {
                          orbs: n(() => [
                            e(s, { speed: -7 }),
                            e(s, { speed: -2 }),
                            e(s, { speed: -3 }),
                            e(s, { speed: -1 }),
                            e(s, { speed: 3 }),
                            e(s, { speed: -6.5 }, null, 8, ["speed"]),
                          ]),
                          _: 1,
                        },
                        8,
                        ["title", "description"]
                      ),
                      e(
                        $,
                        {
                          eyebrow: t(o).intro_eyebrow,
                          title: t(p)(t(o).intro_title),
                          text: t(o).intro_text,
                          class: "about__intro",
                        },
                        null,
                        8,
                        ["eyebrow", "title", "text"]
                      ),
                      c("section", U, [
                        c("div", ee, [
                          e(s, { speed: 2 }),
                          e(D, null, {
                            default: n(() => [
                              c("header", te, [
                                e(B, { color: "white" }),
                                e(
                                  C,
                                  { size: "l" },
                                  {
                                    default: n(() => [
                                      u(m(t(o).values_eyebrow), 1),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                e(
                                  F,
                                  {
                                    level: 2,
                                    title: t(p)(t(o).values_title),
                                    color: "gradient-white",
                                    animate: !0,
                                    split: !0,
                                  },
                                  null,
                                  8,
                                  ["title"]
                                ),
                              ]),
                              (i(!0),
                              l(
                                T,
                                null,
                                I(
                                  t(o).values_items,
                                  (r) => (
                                    i(),
                                    l(
                                      "article",
                                      {
                                        key: r.key,
                                        class: "about-values__item",
                                      },
                                      [
                                        c("p", oe, m(r.title), 1),
                                        e(
                                          H,
                                          { color: "grey-light" },
                                          {
                                            default: n(() => [u(m(r.text), 1)]),
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
                            _: 1,
                          }),
                        ]),
                      ]),
                      e(
                        M,
                        {
                          eyebrow: t(o).team_eyebrow,
                          title: t(p)(t(o).team_title),
                          text: t(o).team_text,
                        },
                        {
                          orbs: n(() => [
                            e(s, { speed: -2 }),
                            e(s, { speed: -3 }),
                            e(s, { speed: -3 }),
                            e(s, { speed: -4 }),
                            e(s, { speed: -1.5 }, null, 8, ["speed"]),
                          ]),
                          _: 1,
                        },
                        8,
                        ["eyebrow", "title", "text"]
                      ),
                    ],
                    64
                  ))
                : (i(), l("div", se)),
            ])
          );
        }
      );
    },
  };
export { ke as default };
