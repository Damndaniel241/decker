import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: "/",
            name: "Index",
            component: () => import("@/views/IndexView.vue"),
            meta: {
              public: true,
              redirect_if_authenticated: true,
            },
          },

          {
            path: "/tailwind-layout",
            name: "TailwindLayout",
            component: () => import("@/views/TailwindLayouts.vue"),
          },

          {
            path: "/insure-landing-page",
            name:"InsureView",
            component: () => import("@/views/insure-landing-page-master/InsureView.vue"),
          }
    ]

})