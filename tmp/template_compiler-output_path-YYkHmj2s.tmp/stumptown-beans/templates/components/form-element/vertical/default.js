export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
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
        "moduleName": "stumptown-beans/templates/components/form-element/vertical/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        dom.setAttribute(el1,"class","control-label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'for');
        morphs[1] = dom.createMorphAt(element0,0,0);
        return morphs;
      },
      statements: [
        ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,40],[2,53]]]]]]],
        ["content","label",["loc",[null,[2,57],[2,66]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 4,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "stumptown-beans/templates/components/form-element/vertical/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","yield",[["get","value",["loc",[null,[5,12],[5,17]]]],["get","formElementId",["loc",[null,[5,18],[5,31]]]]],[],["loc",[null,[5,4],[5,33]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 6,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "stumptown-beans/templates/components/form-element/vertical/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","bs-input",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[7,18],[7,31]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[7,37],[7,41]]]]],[],[]],"type",["subexpr","@mut",[["get","controlType",["loc",[null,[7,47],[7,58]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[7,65],[7,70]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[7,83],[7,94]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[7,105],[7,114]]]]],[],[]]],["loc",[null,[7,4],[7,116]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type",
          "multiple-nodes"
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
          "line": 10,
          "column": 44
        }
      },
      "moduleName": "stumptown-beans/templates/components/form-element/vertical/default.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
      morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
      morphs[3] = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
      ["block","if",[["get","hasBlock",["loc",[null,[4,6],[4,14]]]]],[],1,2,["loc",[null,[4,0],[8,7]]]],
      ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[9,0],[9,51]]]],
      ["inline","partial",["components/form-element/errors"],[],["loc",[null,[10,0],[10,44]]]]
    ],
    locals: [],
    templates: [child0, child1, child2]
  };
}()));