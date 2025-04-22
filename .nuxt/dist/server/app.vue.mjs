import __nuxt_component_0 from "./node_modules/nuxt/dist/app/components/server-placeholder.mjs";
import __nuxt_component_1 from "./node_modules/nuxt/dist/app/components/welcome.vue.mjs";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _export_sfc from "./_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtRouteAnnouncer = __nuxt_component_0;
  const _component_NuxtWelcome = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NuxtRouteAnnouncer, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtWelcome, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AppComponent as default
};
//# sourceMappingURL=app.vue.mjs.map
