import { defineComponent as S, ref as r, watch as f, toRaw as d, onMounted as B, openBlock as T, createElementBlock as C, Fragment as b, createElementVNode as h, renderSlot as w } from "vue";
import _ from "treeselectjs";
const x = ["value", "id"], N = S({
  name: "Treeselect",
  props: {
    value: {
      type: [Array, Number, String],
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
    openLevel: {
      type: Number,
      default: 0
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    alwaysOpen: {
      type: Boolean,
      default: !1
    },
    showTags: {
      type: Boolean,
      default: !0
    },
    tagsCountText: {
      type: String,
      default: "elements selected"
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String,
      default: "Select..."
    },
    grouped: {
      type: Boolean,
      default: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    emptyText: {
      type: String,
      default: "No results found..."
    },
    staticList: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: ""
    },
    isSingleSelect: {
      type: Boolean,
      default: !1
    },
    showCount: {
      type: Boolean,
      default: !1
    },
    isGroupedValue: {
      type: Boolean,
      default: !1
    },
    disabledBranchNode: {
      type: Boolean,
      default: !1
    },
    direction: {
      type: String,
      default: "auto"
    },
    expandSelected: {
      type: Boolean,
      default: !1
    },
    saveScrollPosition: {
      type: Boolean,
      default: !0
    },
    iconElements: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["input", "open", "close", "name-change"],
  setup(e, { emit: n }) {
    const o = r(null), i = r(null), l = r(null), y = (t) => {
      n("input", t);
    }, p = (t) => {
      n("open", t);
    }, g = (t) => {
      n("close", t);
    }, m = (t) => {
      n("name-change", t);
    };
    return f(
      () => e,
      (t) => {
        if (l.value) {
          const a = d(l.value), s = d(t);
          let u = !1;
          Object.keys(s).forEach((c) => {
            const v = s[c] === a[c];
            !x.includes(c) && !v && (a[c] = s[c], u = !0);
          }), u && a.mount();
        }
      },
      { deep: !0 }
    ), f(
      () => e.value,
      (t) => {
        if (l.value) {
          const a = d(l.value), s = d(t);
          JSON.stringify(a.value) !== JSON.stringify(s) && a.updateValue(s);
        }
      }
    ), f(
      () => e.id,
      (t) => {
        if (l.value) {
          const a = d(l.value);
          (a.id || t) && (a.id = t ?? "", a.mount());
        }
      }
    ), B(() => {
      if (!o.value)
        throw new Error("Treeselect container ref is not defined");
      l.value = new _({
        parentHtmlContainer: o.value,
        value: e.value,
        options: e.options,
        openLevel: e.openLevel,
        appendToBody: e.appendToBody,
        alwaysOpen: e.alwaysOpen,
        showTags: e.showTags,
        tagsCountText: e.tagsCountText,
        clearable: e.clearable,
        searchable: e.searchable,
        placeholder: e.placeholder,
        grouped: e.grouped,
        disabled: e.disabled,
        emptyText: e.emptyText,
        staticList: e.staticList,
        id: e.id,
        isSingleSelect: e.isSingleSelect,
        showCount: e.showCount,
        isGroupedValue: e.isGroupedValue,
        disabledBranchNode: e.disabledBranchNode,
        direction: e.direction,
        expandSelected: e.expandSelected,
        saveScrollPosition: e.saveScrollPosition,
        inputCallback: y,
        openCallback: p,
        closeCallback: g,
        nameChangeCallback: m,
        // We need a HTMLElement as a prop here. It is an additional component at the end of list.
        // We gets HTMLElement from refs. Vue events work fine.
        listSlotHtmlComponent: i.value ?? null,
        iconElements: e.iconElements
      });
    }), {
      treeselectContainerRef: o,
      treeselectAfterListSlotRef: i
    };
  }
}), E = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [i, l] of n)
    o[i] = l;
  return o;
}, L = { ref: "treeselectContainerRef" }, O = {
  ref: "treeselectAfterListSlotRef",
  class: "treeselect__after-list-slot"
};
function V(e, n, o, i, l, y) {
  return T(), C(b, null, [
    h("div", L, null, 512),
    h("div", O, [
      w(e.$slots, "afterList")
    ], 512)
  ], 64);
}
const A = /* @__PURE__ */ E(N, [["render", V]]);
export {
  A as default
};
