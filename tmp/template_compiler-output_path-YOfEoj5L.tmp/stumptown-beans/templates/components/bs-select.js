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
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "stumptown-beans/templates/components/bs-select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        dom.setAttribute(el1,"disabled","");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element1, 'selected');
        morphs[1] = dom.createMorphAt(element1,1,1);
        return morphs;
      },
      statements: [
        ["attribute","selected",["subexpr","is-not",[["get","value",["loc",[null,[2,39],[2,44]]]]],[],["loc",[null,[2,30],[2,46]]]]],
        ["content","prompt",["loc",[null,[3,8],[3,18]]]]
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
            "line": 7,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "stumptown-beans/templates/components/bs-select.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'value');
        morphs[1] = dom.createAttrMorph(element0, 'selected');
        morphs[2] = dom.createMorphAt(element0,1,1);
        return morphs;
      },
      statements: [
        ["attribute","value",["concat",[["subexpr","read-path",[["get","item",["loc",[null,[8,31],[8,35]]]],["get","optionValuePath",["loc",[null,[8,36],[8,51]]]]],[],["loc",[null,[8,19],[8,53]]]]]]],
        ["attribute","selected",["subexpr","is-equal",[["get","item",["loc",[null,[9,32],[9,36]]]],["get","value",["loc",[null,[9,37],[9,42]]]]],[],["loc",[null,[9,21],[9,44]]]]],
        ["inline","read-path",[["get","item",["loc",[null,[10,20],[10,24]]]],["get","optionLabelPath",["loc",[null,[10,25],[10,40]]]]],[],["loc",[null,[10,8],[10,42]]]]
      ],
      locals: ["item"],
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
          "line": 12,
          "column": 9
        }
      },
      "moduleName": "stumptown-beans/templates/components/bs-select.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","if",[["get","prompt",["loc",[null,[1,6],[1,12]]]]],[],0,null,["loc",[null,[1,0],[5,7]]]],
      ["block","each",[["get","content",["loc",[null,[7,8],[7,15]]]]],["key","@identity"],1,null,["loc",[null,[7,0],[12,9]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));