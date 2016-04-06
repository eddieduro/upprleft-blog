define("stumptown-beans/templates/shop", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.4",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 10
                },
                "end": {
                  "line": 9,
                  "column": 136
                }
              },
              "moduleName": "stumptown-beans/templates/shop.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("h3");
              dom.setAttribute(el1, "class", "product");
              var el2 = dom.createTextNode(" ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode(" | $");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element3 = dom.childAt(fragment, [0]);
              var morphs = new Array(3);
              morphs[0] = dom.createElementMorph(element3);
              morphs[1] = dom.createMorphAt(element3, 1, 1);
              morphs[2] = dom.createMorphAt(element3, 3, 3);
              return morphs;
            },
            statements: [["element", "action", ["toggleModal"], [], ["loc", [null, [9, 68], [9, 92]]]], ["content", "product.name", ["loc", [null, [9, 94], [9, 110]]]], ["content", "product.price", ["loc", [null, [9, 114], [9, 131]]]]],
            locals: [],
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
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 14,
                "column": 4
              }
            },
            "moduleName": "stumptown-beans/templates/shop.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "product");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "product-img");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("img");
            dom.setAttribute(el3, "alt", "");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "product-content");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("button");
            var el4 = dom.createTextNode("Add to Cart");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1]);
            var element5 = dom.childAt(element4, [1, 1]);
            var element6 = dom.childAt(element4, [3]);
            var element7 = dom.childAt(element6, [3]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element5, 'src');
            morphs[1] = dom.createMorphAt(element6, 1, 1);
            morphs[2] = dom.createElementMorph(element7);
            return morphs;
          },
          statements: [["attribute", "src", ["get", "product.image", ["loc", [null, [6, 21], [6, 34]]]]], ["block", "link-to", ["shop.product", ["get", "product.id", ["loc", [null, [9, 36], [9, 46]]]]], [], 0, null, ["loc", [null, [9, 10], [9, 148]]]], ["element", "action", ["add"], [], ["loc", [null, [11, 18], [11, 34]]]]],
          locals: ["product"],
          templates: [child0]
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
              "line": 17,
              "column": 0
            }
          },
          "moduleName": "stumptown-beans/templates/shop.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "product-grid");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode(" Sign out");
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
          var element8 = dom.childAt(fragment, [0]);
          var element9 = dom.childAt(element8, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element8, 1, 1);
          morphs[1] = dom.createElementMorph(element9);
          return morphs;
        },
        statements: [["block", "each", [["get", "model", ["loc", [null, [3, 12], [3, 17]]]]], [], 0, null, ["loc", [null, [3, 4], [14, 13]]]], ["element", "action", ["signOut"], [], ["loc", [null, [15, 6], [15, 26]]]]],
        locals: [],
        templates: [child0]
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
              "line": 17,
              "column": 0
            },
            "end": {
              "line": 26,
              "column": 0
            }
          },
          "moduleName": "stumptown-beans/templates/shop.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "login-section");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "login-card");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h2");
          var el4 = dom.createTextNode("Please Log in to continue");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "class", "btn social-login");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" Sign In with Twitter");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "class", " btn social-login");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" Sign In with Google");
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
          var element0 = dom.childAt(fragment, [0, 1]);
          var element1 = dom.childAt(element0, [3]);
          var element2 = dom.childAt(element0, [7]);
          var morphs = new Array(4);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createMorphAt(element1, 0, 0);
          morphs[2] = dom.createElementMorph(element2);
          morphs[3] = dom.createMorphAt(element2, 0, 0);
          return morphs;
        },
        statements: [["element", "action", ["signIn", "twitter"], [], ["loc", [null, [21, 7], [21, 36]]]], ["inline", "fa-icon", ["twitter"], [], ["loc", [null, [21, 62], [21, 83]]]], ["element", "action", ["signIn", "google"], [], ["loc", [null, [23, 7], [23, 35]]]], ["inline", "fa-icon", ["google"], [], ["loc", [null, [23, 62], [23, 82]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 33,
            "column": 0
          }
        },
        "moduleName": "stumptown-beans/templates/shop.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "session.isAuthenticated", ["loc", [null, [1, 6], [1, 29]]]]], ["class", "activeUser"], 0, 1, ["loc", [null, [1, 0], [26, 7]]]], ["inline", "outlet", [["get", "modal", ["loc", [null, [32, 9], [32, 14]]]]], [], ["loc", [null, [32, 0], [32, 16]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});