import { H as ne, T as ae, M as se } from "./components.9620909a.js";
import { _ as Q, a as I } from "./ButtonPill.d29bc1c7.js";
import {
  l as B,
  o as n,
  f as d,
  d as l,
  t as $,
  a as u,
  p as e,
  q as c,
  c as m,
  w as p,
  b as C,
  A as re,
  x as M,
  m as D,
  F as H,
  s as Y,
  u as ie,
  j as ce,
  P as ue,
  k as de,
  n as Z,
  H as _e,
  Q as ge,
  z as T,
  v as he,
} from "./entry.741170f4.js";
import { _ as me } from "./PageHeader.5408ea6e.js";
import { _ as ye, a as fe } from "./SectionTitleTextCentered.33036a8a.js";
import { _ as A } from "./Heading.8afb7efd.js";
import { _ as U } from "./TextBlock.dac0ed1a.js";
import { f as x, r as G, h as K } from "./formatters.ccf1137f.js";
import { B as J } from "./constants.66f91b37.js";
import { u as we } from "./useSanityFetch.aa0c89aa.js";
import { u as ke } from "./site-header.2c0f3e29.js";
import "./InView.86493ce9.js";
import "./eyebrow.b2f16651.js";
import "./split-type.57c98042.js";
const pe = { class: "page-header-play-button" },
  be = ["aria-expanded"],
  ve = { class: "u-visually-hidden" },
  xe = { class: "page-header-play-button__icon" },
  $e = {
    __name: "PageHeaderPlayButton",
    props: { label: { type: String, required: !1, default: "Play video" } },
    setup(o) {
      const i = B();
      return (g, _) => {
        const a = Q;
        return (
          n(),
          d("div", pe, [
            l(
              "button",
              {
                type: "button",
                class: "page-header-play-button__cta",
                "aria-controls": "modalVideo",
                "aria-expanded": e(i).playingVideo,
              },
              [
                l("span", ve, $(o.label), 1),
                l("span", xe, [u(a, { name: "play", width: 10, height: 10 })]),
              ],
              8,
              be
            ),
          ])
        );
      };
    },
  };
const Se = { class: "section-title-text-right" },
  Te = { class: "container container--m" },
  Ce = { class: "section-title-text-right__column" },
  Be = { key: 0, class: "eyebrow eyebrow--l" },
  Pe = {
    __name: "SectionTitleTextRight",
    props: {
      eyebrow: { type: String, required: !1, default: null },
      title: { type: String, required: !0 },
      text: { type: String, default: null },
      suptitle: { type: String, default: null },
    },
    setup(o) {
      const i = B();
      return (g, _) => {
        const a = A,
          f = U;
        return (
          n(),
          d("section", Se, [
            l("div", Te, [
              l("div", Ce, [
                o.eyebrow ? (n(), d("p", Be, $(o.eyebrow), 1)) : c("", !0),
                u(
                  a,
                  {
                    color: e(i).pageThemeDark ? "white" : "gradient-black",
                    title: o.title,
                    level: 2,
                    animate: !0,
                    split: !0,
                  },
                  null,
                  8,
                  ["color", "title"]
                ),
                o.suptitle
                  ? (n(),
                    m(
                      f,
                      {
                        key: 1,
                        color: e(i).pageThemeDark ? "white" : null,
                        size: "l",
                        text: o.suptitle,
                        split: !0,
                        animate: !0,
                        "in-view": !0,
                        "animate-right": !1,
                      },
                      null,
                      8,
                      ["color", "text"]
                    ))
                  : c("", !0),
                o.text
                  ? (n(),
                    m(
                      f,
                      {
                        key: 2,
                        text: o.text,
                        color: e(i).pageThemeDark ? "white" : null,
                        split: !0,
                        animate: !0,
                        "in-view": !0,
                        "animate-right": !1,
                      },
                      null,
                      8,
                      ["text", "color"]
                    ))
                  : c("", !0),
              ]),
            ]),
          ])
        );
      };
    },
  };
const Le = { class: "card-collection" },
  Ve = { class: "card-collection__image" },
  Me = ["src"],
  He = { class: "card-collection__content" },
  Ae = { class: "card-collection__content-eyebrow eyebrow eyebrow--l" },
  De = l("span", { class: "card-collection__button-label" }, "View in 3D", -1),
  Ie = {
    __name: "CardCollection",
    props: {
      title: { type: String, default: null },
      image: { type: String, default: null },
      url3d: { type: String, default: null },
      artworks: { type: Array, default: () => [] },
    },
    setup(o) {
      return (i, g) => {
        const _ = A,
          a = I;
        return (
          n(),
          d("article", Le, [
            l("figure", Ve, [l("img", { src: o.image, alt: "" }, null, 8, Me)]),
            l("div", He, [
              u(
                _,
                {
                  level: 3,
                  color: "white",
                  title: e(x)(`<b>${o.title}</b>`),
                  class: "theme-unrelated",
                },
                null,
                8,
                ["title"]
              ),
              l(
                "p",
                Ae,
                $(o.artworks.length) +
                  " artwork" +
                  $(o.artworks.length > 1 ? "s" : null),
                1
              ),
            ]),
            o.url3d
              ? (n(),
                m(
                  a,
                  {
                    key: 0,
                    link: o.url3d,
                    "expand-click": !0,
                    color: "white",
                    "icon-name": "3d",
                    "icon-width": 17,
                    "icon-height": 17,
                    class: "theme-unrelated",
                  },
                  { default: p(() => [De]), _: 1 },
                  8,
                  ["link"]
                ))
              : c("", !0),
          ])
        );
      };
    },
  };
const Fe = l("span", { class: "u-visually-hidden" }, "More info", -1),
  Ne = [Fe],
  Re = { class: "card-artwork__image" },
  ze = ["src"],
  Ee = { class: "card-artwork__image-buttons" },
  qe = { class: "card-artwork__content" },
  We = { key: 1, class: "card-artwork__content-eyebrow eyebrow eyebrow--l" },
  je = {
    __name: "CardArtwork",
    props: {
      slug: { type: String, default: null },
      title: { type: String, default: null },
      image: { type: String, default: null },
      url3d: { type: String, default: null },
      author: { type: String, default: null },
      artwork: { type: String, default: null },
      showMoreInfo: { type: Boolean, default: !0 },
    },
    setup(o) {
      const i = o,
        g = B();
      function _(a) {
        window.innerWidth < J.L && (g.artworkModal = i.artwork);
      }
      return (a, f) => {
        const v = I,
          t = A;
        return (
          n(),
          d(
            "article",
            {
              class: re([
                "card-artwork",
                (!o.showMoreInfo || !o.slug) && !o.url3d ? "no-hover" : null,
              ]),
            },
            [
              l(
                "button",
                {
                  type: "button",
                  class: "card-artwork__mobile-button",
                  onClick: _,
                },
                Ne
              ),
              l("figure", Re, [
                l("img", { src: o.image, alt: "" }, null, 8, ze),
                l("div", Ee, [
                  o.url3d
                    ? (n(),
                      m(
                        v,
                        {
                          key: 0,
                          link: o.url3d,
                          color: "light-grey",
                          "icon-name": "3d",
                          "icon-width": 17,
                          "icon-height": 17,
                          class: "theme-unrelated",
                        },
                        { default: p(() => [C(" View in 3D ")]), _: 1 },
                        8,
                        ["link"]
                      ))
                    : c("", !0),
                  o.slug && o.showMoreInfo
                    ? (n(),
                      m(
                        v,
                        {
                          key: 1,
                          link: `/artworks/${o.slug.current}`,
                          color: "light-grey",
                          class: "theme-unrelated",
                        },
                        { default: p(() => [C(" More info ")]), _: 1 },
                        8,
                        ["link"]
                      ))
                    : c("", !0),
                ]),
              ]),
              l("div", qe, [
                o.title
                  ? (n(),
                    m(
                      t,
                      {
                        key: 0,
                        level: 5,
                        tag: "h3",
                        color: e(g).pageThemeDark ? "white" : null,
                        title: `<b>${e(x)(o.title)}</b>`,
                        class: "theme-unrelated",
                      },
                      null,
                      8,
                      ["color", "title"]
                    ))
                  : c("", !0),
                o.author
                  ? (n(), d("p", We, " By " + $(o.author), 1))
                  : c("", !0),
              ]),
            ],
            2
          )
        );
      };
    },
  };
const Oe = { class: "section-featured-assets" },
  Xe = { class: "container" },
  Ye = { key: 0, class: "section-featured-assets__header" },
  Ze = {
    key: 1,
    class:
      "section-featured-assets__block section-featured-assets__collections",
  },
  Ge = { class: "section-featured-assets__head eyebrow" },
  Ke = l(
    "span",
    { class: "u-visually-hidden" },
    "Previous collection slide",
    -1
  ),
  Qe = l("span", { class: "u-visually-hidden" }, "Next collection slide", -1),
  Ue = { class: "section-featured-assets__collections-cards" },
  Je = {
    class: "section-featured-assets__block section-featured-assets__artworks",
  },
  et = l(
    "p",
    { class: "section-featured-assets__head eyebrow" },
    [l("span", null, "Artworks")],
    -1
  ),
  tt = { class: "section-featured-assets__artworks-cards" },
  ot = { key: 0, class: "section-featured-assets__pagination" },
  lt = {
    __name: "SectionFeaturedAssets",
    props: {
      title: { type: String, required: !0 },
      text: { type: String, default: null },
      collections: { type: Array, default: () => [] },
      artworks: { type: Array, default: () => [] },
    },
    setup(o) {
      const i = o,
        g = B(),
        _ = M(null),
        a = M(9),
        f = M(!0);
      D(() => {
        if (
          (i.artworks.length > a.value && (f.value = !1),
          i.collections.length > 0)
        ) {
          const y = {
            watchOverflow: !1,
            grabCursor: !0,
            breakpoints: {
              1: { slidesPerView: 1, spaceBetween: 24 },
              1024: { slidesPerView: "auto", spaceBetween: 0 },
            },
          };
          Object.assign(_.value, y), _.value.initialize();
        }
      });
      function v() {
        let y = a.value + 9;
        y > i.artworks.length && ((f.value = !0), (y = i.artworks.length)),
          (a.value = y);
      }
      function t() {
        _.value.swiper.slidePrev();
      }
      function P() {
        _.value.swiper.slideNext();
      }
      return (y, F) => {
        const L = A,
          S = U,
          s = Q,
          b = Ie,
          w = je,
          h = I;
        return (
          n(),
          d("section", Oe, [
            l("div", Xe, [
              o.title || o.text
                ? (n(),
                  d("header", Ye, [
                    o.title
                      ? (n(),
                        m(
                          L,
                          {
                            key: 0,
                            color: e(g).pageThemeDark
                              ? "white"
                              : "gradient-black",
                            title: o.title,
                            level: 2,
                            animate: !0,
                            split: !0,
                          },
                          null,
                          8,
                          ["color", "title"]
                        ))
                      : c("", !0),
                    o.text
                      ? (n(),
                        m(
                          S,
                          {
                            key: 1,
                            color: e(g).pageThemeDark ? "white" : null,
                            text: o.text,
                            split: !0,
                            animate: !0,
                            "in-view": !0,
                          },
                          null,
                          8,
                          ["color", "text"]
                        ))
                      : c("", !0),
                  ]))
                : c("", !0),
              o.collections && o.collections.length > 0
                ? (n(),
                  d("div", Ze, [
                    l("p", Ge, [
                      l("span", null, [
                        l(
                          "button",
                          {
                            id: "collectionPrevButtontest",
                            type: "button",
                            class:
                              "section-featured-assets__collections-button section-featured-assets__collections-button--prev",
                            onClick: t,
                          },
                          [
                            Ke,
                            u(s, {
                              name: "chevron-left",
                              width: 8,
                              height: 12,
                            }),
                          ]
                        ),
                        C(" Collections "),
                        l(
                          "button",
                          {
                            id: "collectionNextButton",
                            type: "button",
                            class:
                              "section-featured-assets__collections-button",
                            onClick: P,
                          },
                          [
                            Qe,
                            u(s, {
                              name: "chevron-right",
                              width: 8,
                              height: 12,
                            }),
                          ]
                        ),
                      ]),
                    ]),
                    l("div", Ue, [
                      l(
                        "swiper-container",
                        { ref_key: "swiperEl", ref: _, init: !1 },
                        [
                          (n(!0),
                          d(
                            H,
                            null,
                            Y(
                              o.collections,
                              (r, k) => (
                                n(),
                                d("swiper-slide", { key: `${r._id}-${k}` }, [
                                  u(
                                    b,
                                    {
                                      title: r.title,
                                      image: r.image,
                                      "url-3d": r.url_threed,
                                      artworks: r.artworks,
                                    },
                                    null,
                                    8,
                                    ["title", "image", "url-3d", "artworks"]
                                  ),
                                ])
                              )
                            ),
                            128
                          )),
                        ],
                        512
                      ),
                    ]),
                  ]))
                : c("", !0),
              l("div", Je, [
                et,
                l("div", tt, [
                  (n(!0),
                  d(
                    H,
                    null,
                    Y(
                      o.artworks,
                      (r, k) => (
                        n(),
                        d(
                          H,
                          { key: `${r._id}-${k}` },
                          [
                            k <= e(a) - 1
                              ? (n(),
                                m(
                                  w,
                                  {
                                    key: 0,
                                    slug: r.slug,
                                    title: r.title,
                                    author: r.author,
                                    image: r.image,
                                    "url-3d": r.url_threed,
                                    artwork: r,
                                    "show-more-info": r.show_more_info,
                                  },
                                  null,
                                  8,
                                  [
                                    "slug",
                                    "title",
                                    "author",
                                    "image",
                                    "url-3d",
                                    "artwork",
                                    "show-more-info",
                                  ]
                                ))
                              : c("", !0),
                          ],
                          64
                        )
                      )
                    ),
                    128
                  )),
                ]),
                e(f)
                  ? c("", !0)
                  : (n(),
                    d("div", ot, [
                      u(
                        h,
                        {
                          color: e(g).pageThemeDark ? "light-grey" : "black",
                          onClick: v,
                        },
                        { default: p(() => [C(" Load more artworks ")]), _: 1 },
                        8,
                        ["color"]
                      ),
                    ])),
              ]),
            ]),
          ])
        );
      };
    },
  };
const nt = ["innerHTML"],
  at = l(
    "span",
    { class: "vault__separator vault__separator--1" },
    [l("span")],
    -1
  ),
  pt = {
    __name: "[slug]",
    async setup(o) {
      let i, g;
      const _ = ie(),
        a = B(),
        f = ke(),
        v = ce`*[_type == "vaults" && slug.current == $slug][0] ${ue}`,
        { data: t, fetched: P } =
          (([i, g] = de(() => we(v, { slug: _.params.slug }))),
          (i = await i),
          g(),
          i);
      Z(() => {
        var s, b, w, h;
        (a.pageThemeDark = (s = t.value) == null ? void 0 : s.theme_dark),
          (a.pageThemeBackground =
            (b = t.value) == null ? void 0 : b.background_color),
          (a.pageThemeColor = (w = t.value) == null ? void 0 : w.theme_color),
          (a.pageFooterColor = (h = t.value) == null ? void 0 : h.footer_color);
      }),
        D(() => {
          setTimeout(() => {
            a.page = `page-${t.value.slug.current}`;
          }, 600);
        });
      const y = M(0);
      Z(() => {
        if (P.value && !t.value)
          throw he({
            statusCode: 404,
            statusMessage: "Page Not Found",
            fatal: !0,
          });
      });
      function F() {
        var s;
        a.playingVideo = (s = t.value) == null ? void 0 : s.header_long_video;
      }
      function L(s) {
        y.value = window.innerWidth;
      }
      function S() {
        var b, w, h, r, k, V;
        let s =
          y.value > J.L
            ? (b = t.value) == null
              ? void 0
              : b.svgLogo
            : (w = t.value) == null
            ? void 0
            : w.svgLogoMobile;
        return (
          !(
            (r = (h = t.value) == null ? void 0 : h.svgLogoMobile) != null &&
            r.code
          ) &&
            (k = t.value) != null &&
            k.svgLogo &&
            (s = (V = t.value) == null ? void 0 : V.svgLogo),
          s != null && s.code ? s : null
        );
      }
      return (
        D(() => {
          var s;
          (y.value = window.innerWidth),
            (f.isLight = !((s = t.value) != null && s.theme_dark)),
            window.addEventListener("resize", L);
        }),
        _e(() => {
          window.removeEventListener("resize", L);
        }),
        (s, b) => {
          var N, R, z, E;
          const w = ae,
            h = se,
            r = ne,
            k = $e,
            V = me,
            ee = ye,
            te = Pe,
            oe = fe,
            le = lt;
          return (
            n(),
            d(
              "article",
              {
                class: "vault",
                style: T(`
      --theme-background: ${(N = e(t)) == null ? void 0 : N.background_color};
      --theme-background-rgb: ${e(K)(
        (R = e(t)) == null ? void 0 : R.background_color
      )};
      --theme-color: ${(z = e(t)) == null ? void 0 : z.theme_color};
      --theme-color-rgb: ${e(K)((E = e(t)) == null ? void 0 : E.theme_color)};
    `),
              },
              [
                e(P)
                  ? (n(),
                    d(
                      H,
                      { key: 0 },
                      [
                        u(r, null, {
                          default: p(() => {
                            var q, W, j, O;
                            return [
                              u(w, null, {
                                default: p(() => {
                                  var X;
                                  return [
                                    C(
                                      $(
                                        (X = e(t)) != null && X.title
                                          ? e(G)(e(t).title)
                                          : "Cortex Ai"
                                      ) + " | Cortex  | Cortex Ai",
                                      1
                                    ),
                                  ];
                                }),
                                _: 1,
                              }),
                              u(
                                h,
                                {
                                  name: "title",
                                  content: `${
                                    (q = e(t)) != null && q.title
                                      ? e(G)(e(t).title)
                                      : "Cortex Ai"
                                  } | Cortex Ai  | Cortex Ai`,
                                },
                                null,
                                8,
                                ["content"]
                              ),
                              u(
                                h,
                                {
                                  name: "description",
                                  content:
                                    (W = e(t)) != null && W.description
                                      ? (j = e(t)) == null
                                        ? void 0
                                        : j.description
                                      : null,
                                },
                                null,
                                8,
                                ["content"]
                              ),
                              u(
                                h,
                                {
                                  name: "theme-color",
                                  content:
                                    (O = e(t)) == null
                                      ? void 0
                                      : O.background_color,
                                },
                                null,
                                8,
                                ["content"]
                              ),
                            ];
                          }),
                          _: 1,
                        }),
                        u(
                          V,
                          {
                            title: S() ? null : `<b>${e(t).title}</b>`,
                            subtitle: e(t).description,
                            light:
                              e(a).pageThemeDark ||
                              e(t).header_background ||
                              e(t).header_video,
                            style: T({
                              backgroundImage: `url(${e(t).header_background})`,
                            }),
                            "background-video": e(t).header_video,
                          },
                          ge({ _: 2 }, [
                            S()
                              ? {
                                  name: "logo",
                                  fn: p(() => [
                                    l(
                                      "h1",
                                      {
                                        class: "vault__logo",
                                        innerHTML: S().code,
                                      },
                                      null,
                                      8,
                                      nt
                                    ),
                                  ]),
                                  key: "0",
                                }
                              : void 0,
                            e(t).header_long_video
                              ? {
                                  name: "cta",
                                  fn: p(() => [u(k, { onClick: F })]),
                                  key: "1",
                                }
                              : void 0,
                          ]),
                          1032,
                          [
                            "title",
                            "subtitle",
                            "light",
                            "style",
                            "background-video",
                          ]
                        ),
                        at,
                        u(
                          ee,
                          {
                            eyebrow: e(t).about_eyebrow,
                            title: e(x)(e(t).about_title),
                            suptitle: e(t).about_lead,
                            text: e(t).about_text,
                            style: T({
                              backgroundImage: `url(${
                                e(t).about_background
                              }?w=1600)`,
                            }),
                          },
                          null,
                          8,
                          ["eyebrow", "title", "suptitle", "text", "style"]
                        ),
                        e(t).threed_title
                          ? (n(),
                            m(
                              te,
                              {
                                key: 0,
                                title: e(x)(e(t).threed_title),
                                suptitle: e(t).threed_lead,
                                text: e(t).threed_text,
                                style: T({
                                  backgroundImage: `url(${
                                    e(t).threed_full_background
                                  }?w=1600)`,
                                }),
                              },
                              null,
                              8,
                              ["title", "suptitle", "text", "style"]
                            ))
                          : c("", !0),
                        e(t).gallery_title
                          ? (n(),
                            m(
                              oe,
                              {
                                key: 1,
                                eyebrow: e(t).gallery_eyebrow,
                                title: e(x)(e(t).gallery_title),
                                "button-label": e(t).gallery_button_label,
                                "button-href": e(t).gallery_button_url,
                              },
                              {
                                background: p(() => [
                                  l(
                                    "div",
                                    {
                                      class: "vault-centered__background",
                                      style: T({
                                        backgroundImage: `url(${
                                          e(t).gallery_background
                                        }?w=1600)`,
                                      }),
                                    },
                                    null,
                                    4
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              [
                                "eyebrow",
                                "title",
                                "button-label",
                                "button-href",
                              ]
                            ))
                          : c("", !0),
                        u(
                          le,
                          {
                            title: e(x)(e(t).assets_title),
                            text: e(t).assets_text,
                            collections: e(t).collection_items,
                            artworks: e(t).artwork_items,
                          },
                          null,
                          8,
                          ["title", "text", "collections", "artworks"]
                        ),
                      ],
                      64
                    ))
                  : c("", !0),
              ],
              4
            )
          );
        }
      );
    },
  };
export { pt as default };
