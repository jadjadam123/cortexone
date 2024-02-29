import { _ as o } from "./ButtonPill.d29bc1c7.js";
import {
  e as n,
  o as s,
  c as _,
  w as r,
  d as e,
  a,
  T as c,
} from "./entry.741170f4.js";
const i = {},
  l = { class: "socials" },
  h = { class: "socials__inner" },
  d = { href: "https://twitter.com/#", target: "_blank", rel: "noopener" },
  m = {
    href: "https://t.me/#",
    target: "_blank",
    rel: "noopener",
  },
  p = ["href"];
function f(u, w) {
  const t = o;
  return (
    s(),
    _(
      c,
      { name: "socials", appear: "", duration: { enter: 1100, leave: 0 } },
      {
        default: r(() => [
          e("div", l, [
            e("div", h, [
              e("a", d, [a(t, { name: "twitter", width: 24, height: 24 })]),
              e("a", m, [a(t, { name: "instagram", width: 24, height: 24 })]),
              e(
                "a",
                {
                  href: "https://www.gitbook.com/#",
                  target: "_blank",
                  rel: "noopener",
                },
                [a(t, { name: "mail", width: 16, height: 10 })],
                8,
                p
              ),
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
const v = n(i, [["render", f]]);
export { v as _ };
