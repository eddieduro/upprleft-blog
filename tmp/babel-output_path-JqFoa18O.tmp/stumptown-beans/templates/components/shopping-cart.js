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
              "column": 0
            },
            "end": {
              "line": 5,
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
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1, "class", "text-center");
          var el2 = dom.createTextNode("Nothing in your cart!");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1, "class", "text-center");
          var el2 = dom.createTextNode("Keep Shopping.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
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
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("total price: $ ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(".00");
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
        statements: [["content", "shoppingCart.totalPrice", ["loc", [null, [6, 19], [6, 46]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 4
            },
            "end": {
              "line": 16,
              "column": 4
            }
          },
          "moduleName": "stumptown-beans/templates/components/shopping-cart.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "cart-content");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("X");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "class", "checkout-image");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h5");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" | ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    \n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [3]);
          var element3 = dom.childAt(element0, [5]);
          var morphs = new Array(5);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createAttrMorph(element2, 'src');
          morphs[2] = dom.createAttrMorph(element2, 'alt');
          morphs[3] = dom.createMorphAt(element3, 0, 0);
          morphs[4] = dom.createMorphAt(element3, 2, 2);
          return morphs;
        },
        statements: [["element", "action", ["remove", ["get", "product", ["loc", [null, [11, 28], [11, 35]]]]], [], ["loc", [null, [11, 10], [11, 37]]]], ["attribute", "src", ["get", "product.image", ["loc", [null, [12, 17], [12, 30]]]]], ["attribute", "alt", ["get", "product.name", ["loc", [null, [12, 39], [12, 51]]]]], ["content", "product.name", ["loc", [null, [13, 10], [13, 26]]]], ["content", "product.company", ["loc", [null, [13, 29], [13, 48]]]]],
        locals: ["product"],
        templates: []
      };
    })();
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
            "line": 19,
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "cart-grid");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
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
        var element4 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element4, 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element4, [3]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["subexpr", "eq", [["get", "shoppingCart.totalPrice", ["loc", [null, [2, 10], [2, 33]]]], 0], [], ["loc", [null, [2, 6], [2, 36]]]]], [], 0, 1, ["loc", [null, [2, 0], [7, 7]]]], ["block", "each", [["get", "shoppingCart.products", ["loc", [null, [9, 12], [9, 33]]]]], [], 2, null, ["loc", [null, [9, 4], [16, 13]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});