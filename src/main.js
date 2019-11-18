require("~/main.css");
require("typeface-roboto");

import MainLayout from "~/layouts/Main.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", MainLayout);
}
