export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "modifiers",
        "modifiers": [
          "action"
        ]
      },
      "revision": "Ember@2.4.4",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 4,
          "column": 0
        }
      },
      "moduleName": "stumptown-beans/templates/shop/product.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","modal-fog");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var morphs = new Array(2);
      morphs[0] = dom.createElementMorph(element0);
      morphs[1] = dom.createMorphAt(element0,1,1);
      return morphs;
    },
    statements: [
      ["element","action",["toggleModal"],[],["loc",[null,[1,5],[1,29]]]],
      ["inline","product-tile",[],["product",["subexpr","@mut",[["get","model",["loc",[null,[2,25],[2,30]]]]],[],[]]],["loc",[null,[2,2],[2,32]]]]
    ],
    locals: [],
    templates: []
  };
}()));