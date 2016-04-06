define("stumptown-beans/templates/components/shopping-cart", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 5,
              "column": 2
            }
          },
          "moduleName": "stumptown-beans/templates/components/shopping-cart.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h3");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" | ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(fragment, [3]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'src');
          morphs[1] = dom.createAttrMorph(element0, 'alt');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createMorphAt(element1, 2, 2);
          return morphs;
        },
        statements: [["attribute", "src", ["get", "product.content.0._data.image", ["loc", [null, [3, 15], [3, 46]]]]], ["attribute", "alt", ["get", "product.content.0._data.name", ["loc", [null, [3, 55], [3, 85]]]]], ["content", "product.content.0._data.name", ["loc", [null, [4, 8], [4, 42]]]], ["content", "product.content.0._data.company", ["loc", [null, [4, 45], [4, 82]]]]],
        locals: ["product", "index"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "stumptown-beans/templates/components/shopping-cart.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "shoppingCart.products", ["loc", [null, [2, 10], [2, 31]]]]], [], 0, null, ["loc", [null, [2, 2], [5, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});