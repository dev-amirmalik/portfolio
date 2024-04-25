import {
  d as h,
  r as d,
  o as r,
  c,
  a as e,
  b as n,
  F as f,
  e as g,
  f as x,
  g as M,
  t as i,
  w as u,
  h as y,
  i as P,
  u as m,
  j as L,
  k as B,
} from "./index-3e3757bd.js";
const C = "/portfolio/assets/img/photo-amir.jpg",
  H = { class: "bg-app-primary" },
  O = { class: "p-4 h-screen flex flex-col justify-between" },
  V = g(
    '<div class="flex flex-col md:flex-row w-full justify-between gap-20 md:gap-0"><div><h1 class="text-[40px] md:text-[60px] font-bold uppercase leading-[0.8] text-center md:text-left"> software<br>developer </h1><p class="text-center md:text-right">Senior Software Developer</p></div><figure class="h-[200px] w-[200px] md:h-[300px] md:w-[300px] md:w-auto rounded-full md:rounded-none overflow-hidden m-auto md:m-0"><img src="' +
      C +
      '" class="w-full h-full md:object-contain object-cover" alt="photo developer"></figure></div>',
    1
  ),
  F = {
    class:
      "flex flex-col-reverse gap-6 md:flex-row w-full justify-between items-center md:items-end home-view__action",
  },
  A = e("span", null, "More Details", -1),
  I = e(
    "div",
    null,
    [
      e("p", { class: "text-center md:text-right" }, "Frontend Developer"),
      e(
        "h1",
        {
          class:
            "text-[48px] md:text-[64px] font-bold uppercase leading-[0.8] text-center md:text-right",
        },
        [x(" Amir"), e("br"), x("Malik ")]
      ),
    ],
    -1
  ),
  N = e("div", { id: "goToScroll" }, null, -1),
  R = h({
    __name: "MainBanner",
    setup(t) {
      function l() {
        const o = document.getElementById("goToScroll"),
          a = o ? o.offsetTop : "";
        a && window.scrollTo({ top: a, behavior: "smooth" });
      }
      return (o, a) => {
        const s = d("o-icon");
        return (
          r(),
          c(
            f,
            null,
            [
              e("div", H, [
                e("section", O, [
                  V,
                  e("div", F, [
                    e(
                      "div",
                      { class: "flex flex-col more--details", onClick: l },
                      [
                        n(s, {
                          class: "bounce",
                          pack: "fa",
                          icon: "arrow-down",
                        }),
                        A,
                      ]
                    ),
                    I,
                  ]),
                ]),
              ]),
              N,
            ],
            64
          )
        );
      };
    },
  });
const E = "/portfolio/assets/img/photo-amir-2.jpg",
  k = (t, l) => {
    const o = t.__vccOpts || t;
    for (const [a, s] of l) o[a] = s;
    return o;
  },
  U = {},
  W = { class: "px-4 py-10" },
  z = g(
    '<div class="flex gap-6 justify-between items-center md:flex-row flex-col-reverse"><figure class="w-[200px] h-[200px] rounded-full overflow-hidden"><img class="w-full h-full object-cover" src="' +
      E +
      '" alt="photo amir about"></figure><p class="w-full md:w-[50%] text-justify text-xl"> Experienced Frontend Developer with a demonstrated history of working in the information technology and services industry. Skilled in Vue.js, javascript, PHP, Web Design, and HTML. Strong engineering professional with a Bachelor&#39;s degree focused in Information Technology. </p><div class="h-full flex items-start"><p class="text-orange-400 font-bold uppercase md:text-inherit text-4xl"> About </p></div></div>',
    1
  ),
  Y = [z];
function q(t, l) {
  return r(), c("section", W, Y);
}
const G = k(U, [["render", q]]),
  J = {},
  K = { class: "px-4 py-10 text-center flex flex-col gap-10" },
  Q = e("h2", { class: "text-[40px] font-bold uppercase" }, "Main Skills", -1),
  X = { class: "flex gap-2 sm:gap-6 md:gap-20 w-full justify-center" },
  Z = {
    href: "https://vuejs.org/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  ee = {
    href: "https://en.wikipedia.org/wiki/HTML5#:~:text=HTML5%20(Hypertext%20Markup%20Language%205,as%20the%20HTML%20Living%20Standard.",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  te = {
    href: "https://en.wikipedia.org/wiki/CSS",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  oe = {
    href: "https://www.javascript.com/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  ne = g(
    '<div><h2 class="font-bold">Other Skills</h2><p><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">Typescript</a> , <a href="https://micro-frontends.org/" target="_blank" rel="noopener noreferrer">Micro-frontend</a>, <a href="https://miragejs.com/" target="_blank" rel="noopener noreferrer">Backendless Prototype</a>, <a href="https://en.wikipedia.org/wiki/Leadership" target="_blank" rel="noopener noreferrer">Leadership</a>, <a href="https://en.wikipedia.org/wiki/Unit_testing" target="_blank" rel="noopener noreferrer">Unit Test</a>, and many <a href="https://www.linkedin.com/pulse/top-10-skills-frontend-developer-must-have-2023" target="_blank" rel="noopener noreferrer">frontend skills</a></p></div>',
    1
  );
function se(t, l) {
  const o = d("o-icon");
  return (
    r(),
    c("section", K, [
      Q,
      e("div", X, [
        e("a", Z, [
          n(o, {
            class: "text-[80px] hover:text-orange-600",
            pack: "fab",
            icon: "vuejs",
          }),
        ]),
        e("a", ee, [
          n(o, {
            class: "text-[80px] hover:text-orange-600",
            pack: "fab",
            icon: "html5",
          }),
        ]),
        e("a", te, [
          n(o, {
            class: "text-[80px] hover:text-orange-600",
            pack: "fab",
            icon: "css3-alt",
          }),
        ]),
        e("a", oe, [
          n(o, {
            class: "text-[80px] hover:text-orange-600",
            pack: "fab",
            icon: "js",
          }),
        ]),
      ]),
      ne,
    ])
  );
}
const re = k(J, [["render", se]]),
  le = window.portfolio.projects,
  ce = { class: "p-4 w-full flex flex-col gap-4 pb-8 md:min-w-[900px]" },
  ae = { class: "flex justify-between gap-4" },
  ie = { class: "text-2xl" },
  pe = { class: "carousel__image-wrapper" },
  de = ["src", "alt"],
  _e = e("b", null, "Description", -1),
  fe = e("b", null, "Role", -1),
  ue = e("b", null, "Tech", -1),
  he = { class: "text-center p-5" },
  xe = ["href"],
  me = h({
    __name: "DetailModal",
    props: {
      title: { type: String },
      images: { type: Array, default: () => [] },
      description: { type: String },
      tech: { type: String },
      projectRole: { type: String },
      date: { type: String },
      projectType: { type: String },
      url: { type: String },
    },
    emits: ["close"],
    setup(t, { emit: l }) {
      const o = t,
        a = window.portfolio.prefix,
        s = M(() => (o.date ? new Date(o.date).getFullYear() : "2015")),
        _ = l;
      function p() {
        _("close");
      }
      return (w, b) => {
        const $ = d("o-icon"),
          v = d("o-button"),
          j = d("o-carousel-item"),
          S = d("o-carousel");
        return (
          r(),
          c(
            f,
            null,
            [
              e("div", ce, [
                e("div", ae, [
                  e("div", null, [
                    e("h1", ie, [e("b", null, i(t.title), 1)]),
                    e("p", null, i(s.value) + " - " + i(t.projectType), 1),
                  ]),
                  n(
                    v,
                    { onClick: p },
                    {
                      default: u(() => [
                        n($, {
                          class: "text-black flex items-center",
                          size: "medium",
                          icon: "xmark",
                          pack: "fa",
                        }),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                n(
                  S,
                  { iconPack: "fa" },
                  {
                    default: u(() => [
                      (r(!0),
                      c(
                        f,
                        null,
                        y(
                          t.images,
                          (T, D) => (
                            r(),
                            P(
                              j,
                              { key: D },
                              {
                                default: u(() => [
                                  e("figure", pe, [
                                    e(
                                      "img",
                                      {
                                        src: m(a) + T,
                                        alt: t.title + "-photo",
                                      },
                                      null,
                                      8,
                                      de
                                    ),
                                  ]),
                                ]),
                                _: 2,
                              },
                              1024
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  }
                ),
                e("div", null, [_e, e("p", null, i(t.description), 1)]),
                e("div", null, [fe, e("p", null, i(t.projectRole), 1)]),
                e("div", null, [ue, e("p", null, i(t.tech), 1)]),
              ]),
              e("div", he, [
                t.url
                  ? (r(),
                    c(
                      "a",
                      {
                        key: 0,
                        href: t.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                      [
                        n(
                          v,
                          { variant: "primary", class: "bg-orange-600" },
                          { default: u(() => [x("Open Website")]), _: 1 }
                        ),
                      ],
                      8,
                      xe
                    ))
                  : L("", !0),
              ]),
            ],
            64
          )
        );
      };
    },
  });
const ge = { class: "bg-white content" },
  we = e(
    "section",
    { class: "px-4 py-10 text-center flex flex-col gap-10 text-black" },
    [e("h2", { class: "text-[40px] uppercase" }, "Portfolio")],
    -1
  ),
  ve = { class: "grid grid-cols-1 md:grid-cols-4 gap-4" },
  ye = ["onClick"],
  ke = { class: "card__portfolio-image-wrapper" },
  be = ["src", "alt"],
  $e = { class: "p-2 flex flex-col gap-2" },
  je = { class: "text-lg" },
  Se = { class: "card__small-description" },
  Te = h({
    __name: "DeveloperPortfolio",
    setup(t) {
      const { oruga: l } = B(),
        o = window.portfolio.prefix;
      function a(s) {
        let _ = s.tech;
        Array.isArray(s.tech) && (_ = s.tech.join(", ")),
          l.modal.open({
            component: me,
            props: { ...s, description: s.mainDescription, tech: _ },
            trapFocus: !0,
            destroyOnHide: !1,
          });
      }
      return (s, _) => (
        r(),
        c("section", ge, [
          we,
          e("div", ve, [
            (r(!0),
            c(
              f,
              null,
              y(
                m(le),
                (p, w) => (
                  r(),
                  c(
                    "div",
                    { class: "card__wrapper", key: w, onClick: (b) => a(p) },
                    [
                      e("figure", ke, [
                        e(
                          "img",
                          { src: m(o) + p.mainImageUrl, alt: p.title },
                          null,
                          8,
                          be
                        ),
                      ]),
                      e("div", $e, [
                        e("h2", je, [e("b", null, i(p.title), 1)]),
                        e("p", Se, i(p.shortDescription), 1),
                      ]),
                    ],
                    8,
                    ye
                  )
                )
              ),
              128
            )),
          ]),
        ])
      );
    },
  });
const Me = h({
  __name: "HomeView",
  setup(t) {
    return (l, o) => (r(), c(f, null, [n(R), n(G), n(re), n(Te)], 64));
  },
});
export { Me as default };
