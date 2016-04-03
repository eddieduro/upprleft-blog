export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.4",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 5,
                    "column": 4
                  },
                  "end": {
                    "line": 14,
                    "column": 4
                  }
                },
                "moduleName": "stumptown-beans/templates/index.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createElement("img");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n    ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("span");
                dom.setAttribute(el1,"class","titleBar");
                var el2 = dom.createTextNode("\n      ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("span");
                dom.setAttribute(el2,"class","titleBarInner");
                var el3 = dom.createTextNode("\n        ");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("span");
                dom.setAttribute(el3,"class","title");
                var el4 = dom.createComment("");
                dom.appendChild(el3, el4);
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n      ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n      ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("span");
                dom.setAttribute(el2,"class","titleBarInner");
                var el3 = dom.createTextNode("\n        ");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("span");
                dom.setAttribute(el3,"class","subtitle");
                var el4 = dom.createComment("");
                dom.appendChild(el3, el4);
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n      ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n    ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element1 = dom.childAt(fragment, [0]);
                var element2 = dom.childAt(fragment, [2]);
                var morphs = new Array(3);
                morphs[0] = dom.createAttrMorph(element1, 'src');
                morphs[1] = dom.createMorphAt(dom.childAt(element2, [1, 1]),0,0);
                morphs[2] = dom.createMorphAt(dom.childAt(element2, [3, 1]),0,0);
                return morphs;
              },
              statements: [
                ["attribute","src",["get","post.image",["loc",[null,[5,42],[5,52]]]]],
                ["content","post.title",["loc",[null,[8,28],[8,42]]]],
                ["content","post.date",["loc",[null,[11,31],[11,44]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.4",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 4
                },
                "end": {
                  "line": 15,
                  "column": 4
                }
              },
              "moduleName": "stumptown-beans/templates/index.hbs"
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
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["block","link-to",["post",["get","post.id",["loc",[null,[5,22],[5,29]]]]],[],0,null,["loc",[null,[5,4],[14,16]]]]
            ],
            locals: [],
            templates: [child0]
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 16,
                "column": 2
              }
            },
            "moduleName": "stumptown-beans/templates/index.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","carousel-item",[],["class","carouselItem"],0,null,["loc",[null,[4,4],[15,22]]]]
          ],
          locals: ["post"],
          templates: [child0]
        };
      }());
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
              "line": 17,
              "column": 2
            }
          },
          "moduleName": "stumptown-beans/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","each",[["get","model",["loc",[null,[3,10],[3,15]]]]],[],0,null,["loc",[null,[3,2],[16,11]]]]
        ],
        locals: [],
        templates: [child0]
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
              "line": 20,
              "column": 2
            },
            "end": {
              "line": 22,
              "column": 2
            }
          },
          "moduleName": "stumptown-beans/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-chevron-left");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
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
    var child2 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 2
            },
            "end": {
              "line": 25,
              "column": 2
            }
          },
          "moduleName": "stumptown-beans/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-chevron-right");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
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
            "line": 28,
            "column": 0
          }
        },
        "moduleName": "stumptown-beans/templates/index.hbs"
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","arrows");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(element3,1,1);
        morphs[2] = dom.createMorphAt(element3,2,2);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","carousel-body",[],[],0,null,["loc",[null,[2,2],[17,20]]]],
        ["block","carousel-arrow",[],["direction","left","class","line-arrow left"],1,null,["loc",[null,[20,2],[22,21]]]],
        ["block","carousel-arrow",[],["direction","right","class","line-arrow right"],2,null,["loc",[null,[23,2],[25,21]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 44,
              "column": 4
            },
            "end": {
              "line": 51,
              "column": 4
            }
          },
          "moduleName": "stumptown-beans/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","img");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","overlay");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h3");
          dom.setAttribute(el3,"class","overlayText");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
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
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]),0,0);
          morphs[1] = dom.createMorphAt(element0,3,3);
          return morphs;
        },
        statements: [
          ["content","post.title",["loc",[null,[47,32],[47,46]]]],
          ["inline","post-tile",[],["post",["subexpr","@mut",[["get","post",["loc",[null,[49,23],[49,27]]]]],[],[]]],["loc",[null,[49,6],[49,30]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 42,
            "column": 0
          },
          "end": {
            "line": 53,
            "column": 0
          }
        },
        "moduleName": "stumptown-beans/templates/index.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","postTease");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        return morphs;
      },
      statements: [
        ["block","link-to",["post",["get","post.id",["loc",[null,[44,22],[44,29]]]]],[],0,null,["loc",[null,[44,4],[51,16]]]]
      ],
      locals: ["post"],
      templates: [child0]
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
          "line": 56,
          "column": 0
        }
      },
      "moduleName": "stumptown-beans/templates/index.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container");
      var el2 = dom.createTextNode("\n   ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","pageBreak");
      var el3 = dom.createTextNode("\n     ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h3");
      dom.setAttribute(el3,"class","text-center");
      var el4 = dom.createTextNode("UPPRLEFT is a collection of personal stories/experiences in web development, PNW lifestyle, coffee rants, and life choices. The concept is simple: to teach and hopefully encourage others in whatever path they are walking down, whether it be in development or just purely life itself… ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n     ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h2");
      dom.setAttribute(el3,"class","text-center");
      var el4 = dom.createTextNode("EXPLORE");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n     ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","fa fa-angle-double-down");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n   ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n\n ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","row");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
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
      var element4 = dom.childAt(fragment, [4]);
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(element4,1,1);
      morphs[2] = dom.createMorphAt(element4,3,3);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["block","carousel-container",[],["transition-interval",400],0,null,["loc",[null,[1,0],[28,23]]]],
      ["inline","log",[["get","model",["loc",[null,[41,6],[41,11]]]]],[],["loc",[null,[41,0],[41,13]]]],
      ["block","each",[["get","model",["loc",[null,[42,8],[42,13]]]]],[],1,null,["loc",[null,[42,0],[53,9]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));