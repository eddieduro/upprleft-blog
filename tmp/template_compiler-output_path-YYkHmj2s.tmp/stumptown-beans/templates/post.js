export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes",
          "wrong-type"
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
          "line": 3,
          "column": 0
        }
      },
      "moduleName": "stumptown-beans/templates/post.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("img");
      dom.setAttribute(el1,"class","post-photo");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var morphs = new Array(2);
      morphs[0] = dom.createAttrMorph(element0, 'src');
      morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
      return morphs;
    },
    statements: [
      ["attribute","src",["get","model.image",["loc",[null,[1,30],[1,41]]]]],
      ["inline","post-details",[],["post",["subexpr","@mut",[["get","model",["loc",[null,[2,20],[2,25]]]]],[],[]],"deleteComment","deleteComment"],["loc",[null,[2,0],[2,57]]]]
    ],
    locals: [],
    templates: []
  };
}()));