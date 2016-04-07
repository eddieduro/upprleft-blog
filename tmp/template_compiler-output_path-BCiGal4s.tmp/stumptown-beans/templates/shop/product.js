export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 2,
            "column": 6
          },
          "end": {
            "line": 2,
            "column": 26
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
        var el1 = dom.createTextNode("X");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
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
          "line": 13,
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
      var el2 = dom.createElement("h3");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","modal-frame");
      var el3 = dom.createTextNode("\n      ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","modal-title");
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("img");
      dom.setAttribute(el4,"alt","");
      dom.setAttribute(el4,"class","modal-img");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n      ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","modal-body");
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("p");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" by, ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("button");
      var el5 = dom.createTextNode("Add to Cart");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
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
      var element1 = dom.childAt(element0, [3]);
      var element2 = dom.childAt(element1, [1, 1]);
      var element3 = dom.childAt(element1, [3]);
      var element4 = dom.childAt(element3, [1]);
      var element5 = dom.childAt(element3, [3]);
      var morphs = new Array(6);
      morphs[0] = dom.createElementMorph(element0);
      morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
      morphs[2] = dom.createAttrMorph(element2, 'src');
      morphs[3] = dom.createMorphAt(element4,0,0);
      morphs[4] = dom.createMorphAt(element4,2,2);
      morphs[5] = dom.createElementMorph(element5);
      return morphs;
    },
    statements: [
      ["element","action",["toggleModal"],[],["loc",[null,[1,5],[1,29]]]],
      ["block","link-to",["shop"],[],0,null,["loc",[null,[2,6],[2,38]]]],
      ["attribute","src",["get","model.image",["loc",[null,[5,19],[5,30]]]]],
      ["content","model.name",["loc",[null,[8,11],[8,25]]]],
      ["content","model.company",["loc",[null,[8,30],[8,47]]]],
      ["element","action",["add"],[],["loc",[null,[9,16],[9,32]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));