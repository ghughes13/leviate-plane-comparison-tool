!(function (e, n) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = n();
  else if ("function" == typeof define && define.amd) define([], n);
  else {
    var t = n();
    for (var o in t) ("object" == typeof exports ? exports : e)[o] = t[o];
  }
})(self, function () {
  return (function () {
    "use strict";
    var e = {};
    (function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    })(e);
    var n,
      t = "fslightbox-",
      o = "".concat(t, "styles"),
      r = "".concat(t, "full-dimension"),
      i = "".concat(t, "cursor-grabbing"),
      s = "".concat(t, "flex-centered"),
      a = "".concat(t, "open"),
      c = "".concat(t, "transform-transition"),
      u = "".concat(t, "absoluted"),
      l = "".concat(t, "slide-btn"),
      d = "".concat(l, "-container"),
      p = "".concat(t, "fade-in"),
      h = "".concat(t, "fade-out"),
      m = p + "-strong",
      f = h + "-strong",
      g = "".concat(t, "caption"),
      b = g + "-inner",
      v = g + "-active",
      x = "".concat(t, "opacity-"),
      w = "".concat(x, "0"),
      S = "".concat(x, "1"),
      T = "".concat(t, "source"),
      y = "".concat(T, "-wrappers-container"),
      L = "".concat(y, "-pinching"),
      C = "".concat(t, "thumb"),
      A = C + "s",
      I = "".concat(A, "-loader"),
      W = "".concat(A, "-cursorer"),
      z = "".concat(A, "-inner"),
      E = C + "s-active",
      F = C + "-wrapper",
      M = F + "-darkener",
      P = C + "-invalid",
      N = C + "-active";
    function B(e) {
      return (
        (B =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        B(e)
      );
    }
    "object" === ("undefined" == typeof document ? "undefined" : B(document)) &&
      (((n = document.createElement("style")).className = o),
      n.appendChild(
        document.createTextNode(
          ".fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong forwards .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-cursor-grabbing{cursor:grabbing!important}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s!important}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:none;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#d1d2d2}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader-child{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader-child:nth-child(1){animation-delay:-.45s}.fslightbox-loader-child:nth-child(2){animation-delay:-.3s}.fslightbox-loader-child:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-thumbs-loader{width:54px!important;height:54px!important}.fslightbox-thumbs-loader div{border-width:4px!important;width:44px!important;height:44px!important}.fslightbox-nav{height:45px;width:100%;transition:opacity .3s}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:45px;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%);transition:opacity .3s}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-slideshow-bar{width:0;height:2px;z-index:4;opacity:0;background:#fff}.fslightbox-invalid-file-wrapper{font-size:24px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-source{position:relative;z-index:2;display:block;opacity:0;margin:auto;cursor:zoom-in}.fslightbox-source-wrappers-container{transition:transform .2s linear;z-index:2}.fslightbox-source-wrappers-container-pinching{transition:none!important}.fslightbox-thumbs{position:absolute;bottom:0;left:0;width:100%;z-index:-1;background:linear-gradient(180deg,rgba(0,0,0,0),#1e1e1e 100%);opacity:0;transition:opacity .2s;padding:0 5px 12px 5px;height:114px}@media (min-width:992px){.fslightbox-thumbs{padding-bottom:13px;height:120px}}@media (min-width:1600px){.fslightbox-thumbs{padding-bottom:14px;height:126px}}.fslightbox-thumbs-active{opacity:1;z-index:3}.fslightbox-thumbs-inner{display:inline-flex;justify-content:flex-start;align-items:center;height:100%}.fslightbox-thumb-wrapper{position:relative;height:100%;margin:0 4px;opacity:0;transition:opacity .3s}.fslightbox-thumb-wrapper svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);cursor:pointer;z-index:1}.fslightbox-thumb-wrapper path{fill:#fff}.fslightbox-thumb-wrapper-darkener{position:absolute;top:2px;left:2px;width:calc(100% - 4px);height:calc(100% - 4px);background:rgba(0,0,0,.4);cursor:pointer}.fslightbox-thumb{cursor:pointer;border-radius:1px;height:100%;width:auto!important;border:2px solid transparent;max-width:unset;max-height:unset}.fslightbox-thumb-active{border:2px solid #fff!important}.fslightbox-thumb-invalid{background:linear-gradient(to bottom,#0f0f0f,rgba(15,15,15,.5));display:inline-block;min-width:155px}.fslightbox-thumbs-cursorer{z-index:4;cursor:grabbing}.fslightbox-caption{position:absolute;bottom:0;left:50%;width:100%;background:linear-gradient(180deg,rgba(0,0,0,0),#1e1e1e 100%);transform:translateX(-50%);opacity:0;transition:opacity .2s;z-index:-1}.fslightbox-caption-inner{padding:25px;max-width:1200px;color:#eee;text-align:center;font-size:14px}@media (min-width:768px){.fslightbox-caption-inner{padding:30px 25px}}.fslightbox-caption-active{opacity:1;z-index:3}"
        )
      ),
      document.head.appendChild(n));
    var k = "fslightbox-types",
      H = "fslightbox-scrollbar-width";
    function D(e) {
      var n,
        t = e.props,
        o = 0,
        r = {};
      (this.getSourceTypeFromLocalStorageByUrl = function (e) {
        return n[e] ? n[e] : i(e);
      }),
        (this.handleReceivedSourceTypeForUrl = function (e, t) {
          !1 === r[t] &&
            (o--,
            "invalid" !== e ? (r[t] = e) : delete r[t],
            0 === o &&
              ((function (e, n) {
                for (var t in n) e[t] = n[t];
              })(n, r),
              localStorage.setItem(k, JSON.stringify(n))));
        });
      var i = function (e) {
        o++, (r[e] = !1);
      };
      t.disableLocalStorage
        ? ((this.getSourceTypeFromLocalStorageByUrl = function () {}),
          (this.handleReceivedSourceTypeForUrl = function () {}))
        : (n = JSON.parse(localStorage.getItem(k))) ||
          ((n = {}), (this.getSourceTypeFromLocalStorageByUrl = i));
    }
    var O = "image",
      R = "video",
      X = "youtube",
      Y = "custom",
      Z = "invalid";
    function U(e, n, t, o) {
      var r = e.data,
        i = e.elements.sources,
        s = t / o,
        a = 0;
      this.adjustSize = function () {
        if ((a = r.maxSourceWidth / s) < r.maxSourceHeight)
          return t < r.maxSourceWidth && (a = o), c();
        (a = o > r.maxSourceHeight ? r.maxSourceHeight : o), c();
      };
      var c = function () {
        var e = i[n].style;
        (e.width = a * s + "px"), (e.height = a + "px");
      };
    }
    function j(e, n) {
      var t = this,
        o = e.collections.sourceSizers,
        r = e.core,
        i = r.sourceEnhancementWrappersTransformer,
        s = r.sourceLoadersManager,
        a = e.elements,
        u = a.sourceAnimationWrappers,
        l = a.sourceEnhancementWrappers,
        d = (a.sourceMainWrappers, a.sources),
        p = e.resolve;
      function h(e, t) {
        (o[n] = p(U, [n, e, t])), o[n].adjustSize();
      }
      this.runActions = function (e, o) {
        d[n].classList.add(S),
          u[n].classList.add(m),
          s.handleSourceLoad(n),
          i.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(n),
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              l[n].classList.add(c);
            });
          }),
          h(e, o),
          (t.runActions = h);
      };
    }
    function V(e, n) {
      var t,
        o = this,
        r = e.elements.sources,
        i = e.props,
        s = (0, e.resolve)(j, [n]);
      (this.handleImageLoad = function (e) {
        var n = e.target,
          t = n.naturalWidth,
          o = n.naturalHeight;
        s.runActions(t, o);
      }),
        (this.handleVideoLoad = function (e) {
          var n = e.target,
            o = n.videoWidth,
            r = n.videoHeight;
          (t = !0), s.runActions(o, r);
        }),
        (this.handleNotMetaDatedVideoLoad = function () {
          t || o.handleYoutubeLoad();
        }),
        (this.handleYoutubeLoad = function () {
          var e = 1920,
            n = 1080;
          i.maxYoutubeDimensions &&
            ((e = i.maxYoutubeDimensions.width),
            (n = i.maxYoutubeDimensions.height)),
            s.runActions(e, n);
        }),
        (this.handleCustomLoad = function () {
          setTimeout(function () {
            var e = r[n];
            s.runActions(e.offsetWidth, e.offsetHeight);
          });
        });
    }
    function q(e, n, t) {
      var o = e.elements.sources,
        r = e.props.customClasses,
        i = r[n] ? r[n] : "";
      o[n].className = t + " " + i;
    }
    function _(e, n) {
      var t = e.elements.sources,
        o = e.props.customAttributes;
      for (var r in o[n]) t[n].setAttribute(r, o[n][r]);
    }
    function J(e, n) {
      var t = e.collections.sourceLoadHandlers,
        o = e.elements,
        r = o.sources,
        i = o.sourceAnimationWrappers,
        s = e.props.sources;
      (r[n] = document.createElement("img")),
        q(e, n, T),
        (r[n].src = s[n]),
        (r[n].onload = t[n].handleImageLoad),
        _(e, n),
        i[n].appendChild(r[n]);
    }
    function $(e, n) {
      var t = e.collections.sourceLoadHandlers,
        o = e.elements,
        r = o.sources,
        i = o.sourceAnimationWrappers,
        s = e.props,
        a = s.sources,
        c = s.videosPosters;
      (r[n] = document.createElement("video")),
        q(e, n, T),
        (r[n].src = a[n]),
        (r[n].onloadedmetadata = function (e) {
          t[n].handleVideoLoad(e);
        }),
        (r[n].controls = !0),
        _(e, n),
        c[n] && (r[n].poster = c[n]);
      var u = document.createElement("source");
      (u.src = a[n]),
        r[n].appendChild(u),
        setTimeout(t[n].handleNotMetaDatedVideoLoad, 3e3),
        i[n].appendChild(r[n]);
    }
    function G(e, n) {
      var o = e.collections.sourceLoadHandlers,
        r = e.elements,
        i = r.sources,
        s = r.sourceAnimationWrappers,
        a = e.props.sources;
      (i[n] = document.createElement("iframe")),
        q(e, n, "".concat(T, " ").concat(t, "youtube-iframe")),
        (i[n].src = "https://www.youtube.com/embed/".concat(
          a[n].match(
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
          )[2],
          "?enablejsapi=1"
        )),
        (i[n].allowFullscreen = !0),
        _(e, n),
        s[n].appendChild(i[n]),
        o[n].handleYoutubeLoad();
    }
    function K(e, n) {
      var t = e.collections.sourceLoadHandlers,
        o = e.elements,
        r = o.sources,
        i = o.sourceAnimationWrappers,
        s = e.props.sources;
      (r[n] = s[n]),
        q(e, n, "".concat(r[n].className, " ").concat(T)),
        i[n].appendChild(r[n]),
        t[n].handleCustomLoad();
    }
    function Q(e, n) {
      var o = e.core.sourceLoadersManager,
        r = (e.data.isSourceLoaded, e.elements),
        i = r.sources,
        a = r.sourceAnimationWrappers;
      r.sourceMainWrappers,
        e.props.sources,
        (i[n] = document.createElement("div")),
        (i[n].className = ""
          .concat(t, "invalid-file-wrapper ")
          .concat(s, " ")
          .concat(m)),
        (i[n].innerHTML = "Invalid source"),
        o.handleSourceLoad(n),
        a[n].appendChild(i[n]);
    }
    function ee(e, n, t) {
      var o = e.props.thumbsIcons;
      if (o[t]) {
        n.appendChild(o[t]);
        var r = document.createElement("div");
        (r.className = M), n.appendChild(r);
      }
    }
    function ne(e, n, t) {
      var o = e.elements,
        r = o.thumbsWrappers,
        i = o.thumbsInner;
      (r[n] = document.createElement("div")),
        (r[n].className = F),
        ee(e, r[n], n),
        (function (e, n, t, o) {
          var r = e.core.thumbLoadHandler.handleLoad,
            i = e.elements.thumbs,
            s = e.stageIndexes.current;
          (i[t] = document.createElement("img")), (i[t].src = o);
          var a = C;
          s === t && (a += " ".concat(N)),
            (i[t].className = a),
            (i[t].onload = r),
            n.appendChild(i[t]);
        })(e, r[n], n, t),
        i.appendChild(r[n]);
    }
    function te(e, n, o, r, i) {
      var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      s.setAttributeNS(null, "width", n),
        s.setAttributeNS(null, "height", n),
        s.setAttributeNS(null, "viewBox", r);
      var a = document.createElementNS("http://www.w3.org/2000/svg", "path");
      return (
        a.setAttributeNS(null, "class", "".concat(t, "svg-path")),
        a.setAttributeNS(null, "d", i),
        s.appendChild(a),
        e.appendChild(s),
        s
      );
    }
    function oe(e) {
      var n = e.core.thumbsRenderDispatcher,
        t = e.data,
        o = e.props,
        r = o.showThumbsOnMount,
        i = o.sources,
        a = o.thumbs;
      this.buildThumbForTypeAndIndex = function (o, c) {
        var u;
        (u = a[c]
          ? function () {
              return ne(e, c, a[c]);
            }
          : o === O
          ? function () {
              return ne(e, c, i[c]);
            }
          : function () {
              return (function (e, n) {
                var t = e.elements,
                  o = t.thumbsWrappers,
                  r = t.thumbsInner;
                (o[n] = document.createElement("div")),
                  (o[n].className = "".concat(P, " ").concat(F)),
                  ee(e, o[n], n),
                  (function (e, n, t) {
                    var o = e.core.thumbLoadHandler.handleLoad,
                      r = e.elements.thumbs,
                      i = e.stageIndexes.current;
                    r[t] = document.createElement("div");
                    var a = "".concat(C, " ").concat(s);
                    i === t && (a += " ".concat(N)),
                      (r[t].className = a),
                      te(
                        r[t],
                        "22px",
                        0,
                        "0 0 30 30",
                        "M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.212,8l-0.2,9h-2.024l-0.2-9 H16.212z M15.003,22.189c-0.828,0-1.323-0.441-1.323-1.182c0-0.755,0.494-1.196,1.323-1.196c0.822,0,1.316,0.441,1.316,1.196 C16.319,21.748,15.825,22.189,15.003,22.189z"
                      ),
                      n.appendChild(r[t]),
                      setTimeout(o);
                  })(e, o[n], n),
                  r.appendChild(o[n]);
              })(e, c);
            }),
          n.addFunctionToToBeRenderedAtIndex(u, c),
          (r || t.isThumbing) && n.renderThumbsIfNotYetAndAllTypesDetected();
      };
    }
    function re(e) {
      var n,
        t = e.collections,
        o = t.sourceLoadHandlers,
        r = t.sourcesRenderFunctions,
        i = e.core.sourceDisplayFacade,
        s = e.props.disableThumbs,
        a = e.resolve;
      s || (n = a(oe)),
        (this.runActionsForSourceTypeAndIndex = function (t, c) {
          var u;
          switch ((t !== Z && (o[c] = a(V, [c])), t)) {
            case O:
              u = J;
              break;
            case R:
              u = $;
              break;
            case X:
              u = G;
              break;
            case Y:
              u = K;
              break;
            default:
              u = Q;
          }
          (r[c] = function () {
            return u(e, c);
          }),
            i.displaySourcesWhichShouldBeDisplayed(),
            s || n.buildThumbForTypeAndIndex(t, c);
        });
    }
    function ie() {
      var e,
        n,
        t,
        o = function (e) {
          var n = document.createElement("a");
          return (n.href = e), "www.youtube.com" === n.hostname;
        },
        r = function (e) {
          return e.slice(0, e.indexOf("/"));
        };
      function i() {
        if (4 !== t.readyState) {
          if (2 === t.readyState) {
            var e;
            switch (r(t.getResponseHeader("content-type"))) {
              case "image":
                e = O;
                break;
              case "video":
                e = R;
                break;
              default:
                e = Z;
            }
            (t.onreadystatechange = null), t.abort(), n(e);
          }
        } else n(Z);
      }
      (this.setUrlToCheck = function (n) {
        e = n;
      }),
        (this.getSourceType = function (r) {
          if (o(e)) return r(X);
          (n = r),
            ((t = new XMLHttpRequest()).onreadystatechange = i),
            t.open("GET", e, !0),
            t.send();
        });
    }
    function se(e, n, t) {
      var o = e.props,
        r = o.types,
        i = o.type,
        s = o.sources,
        a = e.resolve;
      (this.getTypeSetByClientForIndex = function (e) {
        var n;
        return r && r[e] ? (n = r[e]) : i && (n = i), n;
      }),
        (this.retrieveTypeWithXhrForIndex = function (e) {
          var o = a(ie);
          o.setUrlToCheck(s[e]),
            o.getSourceType(function (o) {
              n.handleReceivedSourceTypeForUrl(o, s[e]),
                t.runActionsForSourceTypeAndIndex(o, e);
            });
        });
    }
    function ae(e, n) {
      var t = e.elements,
        o = t.sourceWrappersContainer,
        i = t.sourceMainWrappers;
      (i[n] = document.createElement("div")),
        (i[n].className = "".concat(u, " ").concat(r, " ").concat(s)),
        o.appendChild(i[n]),
        (function (e, n) {
          var t = e.elements,
            o = t.sourceMainWrappers,
            r = t.sourceEnhancementWrappers;
          (r[n] = document.createElement("div")),
            o[n].appendChild(r[n]),
            (function (e, n) {
              var t = e.core.sourceLoadersManager,
                o = e.elements,
                r = o.sourceAnimationWrappers,
                i = o.sourceEnhancementWrappers;
              (r[n] = document.createElement("div")),
                t.handleSourceAnimationWrapperRendering(n),
                i[n].appendChild(r[n]);
            })(e, n);
        })(e, n);
    }
    function ce(e, n) {
      var t = e.sourcePointerProps;
      t.pointers[n.pointerId] = { screenX: n.screenX, screenY: n.screenY };
      var o = Object.keys(t.pointers).length;
      return (t.pointersCount = o), o <= 2;
    }
    function ue(e, n) {
      var o = document.createElement("div");
      return (
        (o.className = "".concat(t, "toolbar-button ").concat(s)),
        (o.title = n),
        e.appendChild(o),
        o
      );
    }
    function le(e, n, t) {
      var o = ue(e, n.title);
      (o.onclick = t), te(o, n.width, n.height, n.viewBox, n.d);
    }
    function de(e) {
      var n = e.props.sources,
        o = e.elements;
      (o.nav = document.createElement("div")),
        (o.nav.className = "".concat(t, "nav")),
        o.container.appendChild(o.nav),
        (function (e, n) {
          var o = e.core,
            r = o.clickZoomer,
            i = r.zoomIn,
            s = r.zoomOut,
            a = o.lightboxCloser.close,
            c = o.thumbsToggler,
            u = e.props,
            l = u.customToolbarButtons,
            d = u.disableThumbs,
            p = u.toolbarButtons,
            h = document.createElement("div");
          (h.className = "".concat(t, "toolbar")), n.appendChild(h);
          for (
            var m = function (n) {
                le(h, l[n], function () {
                  return l[n].onClick(e);
                });
              },
              f = 0;
            f < l.length;
            f++
          )
            m(f);
          d || le(h, p.thumbs, c.toggleThumbs),
            le(h, p.zoomIn, i),
            le(h, p.zoomOut, s),
            (function (e, n) {
              var t = e.core.slideshowManager.toggleSlideshow,
                o = e.componentsServices,
                r = e.props.toolbarButtons.slideshow,
                i = r.start,
                s = r.pause,
                a = ue(n, i.title);
              a.onclick = t;
              var c = te(a, i.width, i.height, i.viewBox, i.d);
              function u(e) {
                (a.title = e.title),
                  c.setAttributeNS(null, "width", e.width),
                  c.setAttributeNS(null, "height", e.height),
                  c.setAttributeNS(null, "viewBox", e.viewBox),
                  c.firstChild.setAttributeNS(null, "d", e.d);
              }
              (o.startSlideshow = function () {
                u(s);
              }),
                (o.stopSlideshow = function () {
                  u(i);
                });
            })(e, h),
            (function (e, n) {
              var t = e.core.fullscreenToggler,
                o = e.componentsServices,
                r = e.data,
                i = e.props.toolbarButtons.fullscreen,
                s = i.enter,
                a = i.exit,
                c = ue(n, s.title),
                u = te(c, s.width, s.height, s.viewBox, s.d);
              function l(e) {
                (c.title = e.title),
                  u.setAttributeNS(null, "width", e.width),
                  u.setAttributeNS(null, "height", e.height),
                  u.setAttributeNS(null, "viewBox", e.viewBox),
                  u.firstChild.setAttributeNS(null, "d", e.d);
              }
              (o.enterFullscreen = function () {
                (r.isFullscreenOpen = !0), l(a);
              }),
                (o.exitFullscreen = function () {
                  (r.isFullscreenOpen = !1), l(s);
                }),
                (c.onclick = function () {
                  r.isFullscreenOpen ? t.exitFullscreen() : t.enterFullscreen();
                });
            })(e, h),
            le(h, p.close, a);
        })(e, o.nav),
        n.length > 1 &&
          (function (e, n) {
            var o = e.componentsServices,
              r = e.props.sources,
              i = document.createElement("div");
            i.className = "".concat(t, "slide-number-container");
            var a = document.createElement("div");
            a.className = s;
            var c = document.createElement("span");
            o.setSlideNumber = function (e) {
              return (c.innerHTML = e);
            };
            var u = document.createElement("span");
            u.className = "".concat(t, "slash");
            var l = document.createElement("div");
            (l.innerHTML = r.length),
              i.appendChild(a),
              a.appendChild(c),
              a.appendChild(u),
              a.appendChild(l),
              n.appendChild(i),
              setTimeout(function () {
                a.offsetWidth > 55 && (i.style.justifyContent = "flex-start");
              });
          })(e, o.nav);
    }
    function pe(e, n) {
      var t = this,
        o = e.elements.sourceMainWrappers,
        r = e.props,
        i = 0,
        s = 0,
        a = 0;
      (this.translate = function (e, n) {
        return (s = e), void 0 !== n && (a = n), t;
      }),
        (this.getTranslateX = function () {
          return i;
        }),
        (this.getTranslateY = function () {
          return a;
        }),
        (this.negative = function () {
          c(-(1 + r.slideDistance) * innerWidth);
        }),
        (this.zero = function () {
          c(0);
        }),
        (this.positive = function () {
          c((1 + r.slideDistance) * innerWidth);
        });
      var c = function (e) {
          (i = e + s), u(), (s = 0);
        },
        u = function () {
          o[n].style.transform = "translate("
            .concat(i, "px, ")
            .concat(a, "px)");
        };
    }
    function he(e, n) {
      var t = e.core.slideChangeFacade,
        o = e.elements,
        r = e.props.slideButtons,
        i = n.charAt(0).toUpperCase() + n.slice(1),
        a = "slideButton".concat(i),
        c = r[n];
      (o[a] = document.createElement("div")),
        (o[a].className = "".concat(d, " ").concat(d, "-").concat(n)),
        (o[a].title = c.title),
        (o[a].onclick = t["changeTo".concat(i)]),
        (function (e, n) {
          var t = document.createElement("div");
          (t.className = "".concat(l, " ").concat(s)),
            te(t, n.width, n.height, n.viewBox, n.d),
            e.appendChild(t);
        })(o[a], c),
        o.container.appendChild(o[a]);
    }
    function me(e) {
      var n = e.componentsServices,
        t = e.core,
        o = t.sourceEnhancementWrappersTransformer,
        r = t.thumbsRenderDispatcher,
        i = t.zoomer,
        s = e.data,
        a = e.elements,
        c = e.props.sources,
        u = e.stageIndexes;
      function l() {
        for (var e = 0; e < c.length; e++)
          o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e);
      }
      function d(e) {
        a.captions[u.current] && a.captions[u.current].classList[e](v);
      }
      (this.openThumbs = function () {
        i.ifZoomingResetZoom(),
          (s.isThumbing = !0),
          a.thumbsContainer.classList.add(E),
          l(),
          d("remove"),
          r.renderThumbsIfNotYetAndAllTypesDetected(),
          s.unloadedThumbsCount && n.appendThumbsLoaderIfNotYet();
      }),
        (this.closeThumbs = function () {
          i.ifZoomingResetZoom(),
            (s.isThumbing = !1),
            a.thumbsContainer.classList.remove(E),
            l(),
            d("add");
        });
    }
    function fe(e, n) {
      var t = e.classList;
      t.contains(n) && t.remove(n);
    }
    function ge(e, n) {
      var t = e.classList;
      t.contains(n) || t.add(n);
    }
    function be(e) {
      var n = e.data,
        t = e.elements,
        o = e.stageIndexes;
      (this.runActions = function () {
        fe(t.thumbsContainer, s);
        var e = innerWidth / 2,
          i = t.thumbsWrappers[o.current],
          a = i.offsetLeft + i.offsetWidth / 2,
          c = n.thumbsInnerWidth - a;
        a > e && c > e
          ? r(e - a)
          : a > e
          ? r(innerWidth - n.thumbsInnerWidth - 9)
          : c > e && r(0);
      }),
        (this.runToThinThumbsActions = function () {
          ge(t.thumbsContainer, s), r(0);
        });
      var r = function (e) {
        (n.thumbsTransform = e),
          (t.thumbsInner.style.transform = "translateX(".concat(e, "px)"));
      };
    }
    function ve(e, n) {
      var t = [];
      return function () {
        t.push(!0),
          setTimeout(function () {
            t.pop(), t.length || e();
          }, n);
      };
    }
    function xe(e) {
      var n = "fslightbox-loader",
        t = document.createElement("div");
      t.className = n;
      for (var o = 0; o < 3; o++) {
        var r = document.createElement("div");
        (r.className = "".concat(n, "-child")), t.appendChild(r);
      }
      return e.appendChild(t), t;
    }
    function we(e) {
      var n = this,
        t = e.core,
        o = t.eventsDispatcher,
        r = t.fullscreenToggler,
        i = t.globalEventsController,
        s = t.scrollbarRecompensor,
        c = t.slideshowManager,
        u = t.zoomer,
        l = e.data,
        d = e.elements,
        p = e.props,
        h = e.sourcePointerProps,
        m = e.thumbsSwipingProps;
      (this.isLightboxFadingOut = !1),
        (this.runActions = function () {
          (n.isLightboxFadingOut = !0),
            d.container.classList.add(f),
            i.removeListeners(),
            c.resetSlideshow(),
            p.exitFullscreenOnClose && l.isFullscreenOpen && r.exitFullscreen(),
            u.ifZoomingResetZoom(),
            setTimeout(function () {
              (n.isLightboxFadingOut = !1),
                (h.isPointering = !1),
                m && (m.isPointering = !1),
                d.container.classList.remove(f),
                document.documentElement.classList.remove(a),
                s.removeRecompense(),
                document.body.removeChild(d.container),
                o.dispatch("onClose");
            }, 270);
        });
    }
    function Se(e, n) {
      var t = e.elements.thumbs,
        o = e.stageIndexes;
      t &&
        t[o.current] &&
        (t[o.current].classList.remove(N), t[n].classList.add(N));
    }
    function Te(e) {
      var n,
        t = e.core,
        o = t.slideshowManager,
        r = t.slideChangeFacade,
        i = e.componentsServices,
        s = e.elements,
        a = e.props,
        c = !1;
      function u() {
        (c = !1),
          clearTimeout(n),
          s.slideshowBar.classList.remove(S),
          i.stopSlideshow();
      }
      function l() {
        (s.slideshowBar.style.transition = "opacity .2s"),
          (s.slideshowBar.style.width = "0px"),
          s.slideshowBar.offsetWidth,
          (s.slideshowBar.style.transition =
            "opacity .2s, width linear ".concat(a.slideshowTime, "ms")),
          (s.slideshowBar.style.width = innerWidth + "px"),
          (n = setTimeout(function () {
            r.changeToNext(), l();
          }, a.slideshowTime));
      }
      (o.toggleSlideshow = function () {
        c
          ? u()
          : ((c = !0),
            i.startSlideshow(),
            s.slideshowBar.classList.add(S),
            l());
      }),
        (o.resetSlideshow = function () {
          c && u();
        });
    }
    function ye(e) {
      return !e.sourcePointerProps.isPointering;
    }
    function Le(e) {
      var n = e.core,
        t = n.clickZoomer,
        o = n.fullscreenToggler,
        r = n.lightboxCloser,
        i = n.slideChangeFacade,
        s = n.slideshowManager,
        a = n.thumbsToggler,
        c = e.middleware,
        u = e.props;
      this.listener = function (e) {
        if ("Space" !== e.code)
          switch (e.key) {
            case "Escape":
              r.close();
              break;
            case "ArrowLeft":
              i.changeToPrevious();
              break;
            case "ArrowRight":
              i.changeToNext();
              break;
            case "t":
              u.disableThumbs || a.toggleThumbs();
              break;
            case "+":
              c(t.zoomIn, ye)();
              break;
            case "-":
              c(t.zoomOut, ye)();
              break;
            case "F11":
              e.preventDefault(), o.enterFullscreen();
          }
        else s.toggleSlideshow();
      };
    }
    function Ce(e) {
      var n = e.core.pointeringBucket,
        t = e.data,
        o = e.elements,
        r = e.thumbsSwipingProps;
      this.runActions = function (e) {
        n.runSwipingMoveActionsForPropsAndEvent(r, e),
          (o.thumbsInner.style.transform = "translateX(".concat(
            t.thumbsTransform + r.swipedX,
            "px)"
          )),
          o.thumbsContainer.contains(o.thumbsCursorer) ||
            o.thumbsContainer.appendChild(o.thumbsCursorer);
      };
    }
    function Ae(e) {
      var n = e.data,
        t = e.resolve,
        o = e.thumbsSwipingProps,
        r = t(Ce),
        i = window.innerWidth;
      this.listener = function (e) {
        n.thumbsInnerWidth > i && o.isPointering && r.runActions(e);
      };
    }
    function Ie(e, n) {
      e.contains(n) && e.removeChild(n);
    }
    function We(e) {
      var n = e.data,
        t = e.core,
        o = t.slideIndexChanger,
        r = t.thumbsTransformTransitioner,
        i = t.pointeringBucket,
        s = e.elements,
        a = e.thumbsSwipingProps,
        c = s.thumbsWrappers;
      (this.runNoSwipeActionsForEvent = function (e) {
        Ie(s.thumbsContainer, s.thumbsCursorer), (a.isPointering = !1);
        for (var n = 0; n < c.length; n++)
          if (c[n] && c[n].contains(e.target)) return void o.jumpTo(n);
      }),
        (this.runActions = function () {
          if (
            (Ie(s.thumbsContainer, s.thumbsCursorer),
            (n.thumbsTransform += a.swipedX),
            i.runSwipingTopActionsForPropsAndEvent(a),
            n.thumbsTransform > 0)
          )
            return u(0);
          n.thumbsTransform < innerWidth - n.thumbsInnerWidth - 9 &&
            u(innerWidth - n.thumbsInnerWidth - 9);
        });
      var u = function (e) {
        (n.thumbsTransform = e),
          r.callActionWithTransition(function () {
            s.thumbsInner.style.transform = "translateX(".concat(e, "px)");
          });
      };
    }
    function ze(e) {
      var n = e.resolve,
        t = e.thumbsSwipingProps,
        o = n(We);
      this.listener = function (e) {
        t.isPointering &&
          (t.swipedX ? o.runActions() : o.runNoSwipeActionsForEvent(e));
      };
    }
    function Ee(e) {
      var n = e.collections.sourceMainWrapperTransformers,
        t = e.core.zoomer,
        o = e.data,
        r = e.sourcePointerProps;
      (this.runZoomingPinchActionsForHypot = function (e) {
        var n = e - r.pinchedHypot,
          i = o.zoom + (n / Math.hypot(innerWidth, innerHeight)) * 10;
        i < 0.9 && (i = 0.9), t.zoomTo(i), (r.pinchedHypot = e);
      }),
        (this.translateSourceMainWrapperAtIndexUsingMethod = function (e, t) {
          n[e].translate(r.swipedX)[t]();
        });
    }
    function Fe(e) {
      var n = Object.keys(e.pointers),
        t = e.pointers[n[0]],
        o = e.pointers[n[1]];
      return Math.hypot(t.screenX - o.screenX, t.screenY - o.screenY);
    }
    function Me(e) {
      var n = e.collections.sourceMainWrapperTransformers,
        t = e.core.pointeringBucket,
        o = e.data,
        r = e.elements,
        i = e.resolve,
        s = e.sourcePointerProps,
        a = e.stageIndexes,
        c = i(Ee);
      (this.runActions = function (e) {
        t.runSwipingMoveActionsForPropsAndEvent(s, e),
          r.container.contains(r.slideSwipingHoverer) ||
            r.container.appendChild(r.slideSwipingHoverer);
      }),
        (this.runPinchActions = function () {
          var e = Fe(s);
          s.pinchedHypot
            ? c.runZoomingPinchActionsForHypot(e)
            : (s.pinchedHypot = e);
        }),
        (this.runNormalSwipeActions = function () {
          c.translateSourceMainWrapperAtIndexUsingMethod(a.current, "zero"),
            void 0 !== a.previous && s.swipedX > 0
              ? c.translateSourceMainWrapperAtIndexUsingMethod(
                  a.previous,
                  "negative"
                )
              : void 0 !== a.next &&
                s.swipedX < 0 &&
                c.translateSourceMainWrapperAtIndexUsingMethod(
                  a.next,
                  "positive"
                );
        }),
        (this.runZoomSwipeActions = function (e) {
          (s.swipedX = (e.screenX - s.downScreenX) / o.zoom),
            (s.swipedY = (e.screenY - s.downScreenY) / o.zoom),
            n[a.current]
              .translate(s.upSwipedX + s.swipedX, s.upSwipedY + s.swipedY)
              .zero();
        });
    }
    function Pe(e) {
      var n = e.data,
        t = e.props.sources,
        o = e.resolve,
        r = e.sourcePointerProps,
        i = o(Me);
      this.listener = function (e) {
        if (r.isPinching) return i.runActions(e), void i.runPinchActions();
        2 !== r.pointersCount &&
          (i.runActions(e),
          1 === n.zoom
            ? 1 === t.length
              ? (r.swipedX = 1)
              : i.runNormalSwipeActions()
            : i.runZoomSwipeActions(e));
      };
    }
    function Ne(e) {
      var n = e.collections.sourceMainWrapperTransformers,
        t = e.core,
        o = t.slideIndexChanger,
        r = t.clickZoomer,
        i = e.data,
        s = e.elements.sourceMainWrappers,
        a = e.sourcePointerProps,
        u = e.stageIndexes;
      (this.runPositiveSwipedXActions = function () {
        void 0 === u.previous || (l("positive"), o.changeTo(u.previous)),
          l("zero");
      }),
        (this.runNegativeSwipedXActions = function () {
          void 0 === u.next || (l("negative"), o.changeTo(u.next)), l("zero");
        }),
        (this.saveCurrentSourceMainWrapperPosition = function () {
          (a.upSwipedX = n[u.current].getTranslateX()),
            (a.upSwipedY = n[u.current].getTranslateY());
        }),
        (this.runSourceDownEventTargetActions = function () {
          i.zoom <= 1 ? r.zoomIn() : r.zoomOut();
        });
      var l = function (e) {
        s[u.current].classList.add(c), n[u.current][e]();
      };
    }
    function Be(e) {
      var n = e.core,
        t = n.lightboxCloser,
        o = n.pointeringBucket,
        r = e.data,
        i = e.elements,
        s = e.resolve,
        a = e.sourcePointerProps,
        c = s(Ne);
      (this.runActions = function () {
        Ie(i.container, i.slideSwipingHoverer),
          (a.isPinching = !1),
          (a.pinchedHypot = 0),
          o.runSwipingTopActionsForPropsAndEvent(a),
          fe(i.sourceWrappersContainer, L);
      }),
        (this.runSwipeActions = function () {
          1 === r.zoom
            ? a.swipedX > 0
              ? c.runPositiveSwipedXActions()
              : c.runNegativeSwipedXActions()
            : c.saveCurrentSourceMainWrapperPosition();
        }),
        (this.runNoSwipeActions = function () {
          a.isSourceDownEventTarget
            ? c.runSourceDownEventTargetActions()
            : t.close();
        });
    }
    function ke(e) {
      var n = e.data,
        t = e.resolve,
        o = e.sourcePointerProps,
        r = e.core.zoomer,
        i = t(Be);
      this.listener = function (e) {
        (o.pointers = {}),
          o.isPointering &&
            (o.isPinching ||
              (o.swipedX ? i.runSwipeActions() : i.runNoSwipeActions()),
            i.runActions(e),
            n.zoom < 1 && (r.zoomTo(1), r.stopZooming()));
      };
    }
    function He(e) {
      return e.sourcePointerProps.isPointering;
    }
    function De(e) {
      var n = e.core.inactiver,
        t = e.middleware,
        o = e.props,
        r = e.resolve,
        i = r(Pe),
        s = r(ke),
        a = r(Ae),
        c = r(ze);
      (this.moveListener = function (e) {
        n.listener(e),
          t(t(i.listener, ce), He)(e),
          o.disableThumbs || a.listener(e);
      }),
        (this.upListener = function (e) {
          s.listener(e), o.disableThumbs || c.listener(e);
        });
    }
    function Oe(e) {
      var n = e.core.zoomer,
        t = e.data;
      this.listener = function (e) {
        if (1 === t.zoom) {
          if (e.deltaY > 0) return;
          n.startZooming();
        }
        var o = 0.1 * t.zoom,
          r = t.zoom;
        e.deltaY < 0 ? (r += o) : (r -= o) < 1 && (r = 1),
          n.zoomTo(r),
          1 === r && n.stopZooming();
      };
    }
    function Re(e) {
      var n = e.data,
        t = e.elements,
        o = e.stageIndexes;
      (this.runOpacity0ActionUsingMethod = function (e) {
        t.slideButtonPrevious &&
          (t.slideButtonPrevious.classList[e](w),
          t.slideButtonNext.classList[e](w));
      }),
        (this.runActiveEnhancementActionUsingMethod = function (e) {
          n.isThumbing
            ? t.thumbsContainer.classList[e](E)
            : t.captions[o.current] && t.captions[o.current].classList[e](v);
        });
    }
    function Xe(e) {
      var n = e.core.zoomer,
        t = e.data,
        o = e.elements,
        r = e.sourcePointerProps;
      this.runPinchActions = function () {
        (r.isPinching = !0),
          (r.pinchedHypot = Fe(r)),
          ge(o.sourceWrappersContainer, L),
          1 === t.zoom && n.startZooming();
      };
    }
    function Ye(e) {
      var n,
        t,
        o,
        r = e.data,
        i = e.elements,
        s = r.captionHeights,
        a = r.notThumbedSourceEnhancementWrapperScales,
        c = r.notThumbedSourceEnhancementWrapperTranslatesY,
        u = i.sourceEnhancementWrappers,
        l = i.sources;
      (this.setUpThumbedEnhancementWrapperTransform = function () {
        (n = i.thumbsContainer.offsetHeight),
          (t = r.thumbedSourceEnhancementWrapperTranslateY),
          (o = "translateY("
            .concat(t, "px) scale(")
            .concat(r.thumbedSourceEnhancementWrapperScale, ")"));
      }),
        (this.setUpNotThumbedEnhancementWrapperTransformAtIndex = function (e) {
          (n = s[e]),
            (t = c[e]),
            (o = "translateY(".concat(t, "px) scale(").concat(a[e], ")"));
        }),
        (this.ifSourceIsLoadedTransformEnhancementWrapperAtIndex = function (
          e
        ) {
          l[e] &&
            (innerWidth < innerHeight &&
            l[e].offsetWidth > l[e].offsetHeight + n
              ? (u[e].style.transform = "translateY(".concat(
                  t / 2,
                  "px) scale(1)"
                ))
              : (u[e].style.transform = o));
        });
    }
    function Ze(e) {
      !(function (e) {
        var n = e.core.captionsActioner,
          t = e.data,
          o = e.elements.captions;
        n.changeActiveCaptionFromTo = function (e, n) {
          t.isThumbing || (r(e, fe), r(n, ge));
        };
        var r = function (e, n) {
          o[e] && n(o[e], v);
        };
      })(e),
        (function (e) {
          var n = e.core.classFacade,
            t = e.elements;
          n.removeFromEachElementClassIfContains = function (e, n) {
            for (var o = 0; o < t[e].length; o++) fe(t[e][o], n);
          };
        })(e),
        (function (e) {
          var n = e.core,
            t = n.clickZoomer,
            o = n.zoomer,
            r = e.data,
            i = e.elements,
            s = e.props.zoomIncrement,
            a = ve(function () {
              fe(i.sourceWrappersContainer, c);
            }, 300);
          (t.zoomIn = function () {
            u(), l(r.zoom + s);
          }),
            (t.zoomOut = function () {
              r.zoom - s <= 1
                ? 1 !== r.zoom && (l(1), o.stopZooming())
                : (u(), l(r.zoom - s), 1 === r.zoom && o.stopZooming());
            });
          var u = function () {
              1 === r.zoom && o.startZooming();
            },
            l = function (e) {
              ge(i.sourceWrappersContainer, c), o.zoomTo(e), a();
            };
        })(e),
        (function (e) {
          var n = e.core.eventsDispatcher,
            t = e.props;
          n.dispatch = function (n) {
            t[n] && t[n](e);
          };
        })(e),
        (function (e) {
          var n = e.componentsServices,
            t = e.core.fullscreenToggler;
          (t.enterFullscreen = function () {
            n.enterFullscreen();
            var e = document.documentElement;
            e.requestFullscreen
              ? e.requestFullscreen()
              : e.mozRequestFullScreen
              ? e.mozRequestFullScreen()
              : e.webkitRequestFullscreen
              ? e.webkitRequestFullscreen()
              : e.msRequestFullscreen && e.msRequestFullscreen();
          }),
            (t.exitFullscreen = function () {
              n.exitFullscreen(),
                document.exitFullscreen
                  ? document.exitFullscreen()
                  : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.webkitExitFullscreen
                  ? document.webkitExitFullscreen()
                  : document.msExitFullscreen && document.msExitFullscreen();
            });
        })(e),
        (function (e) {
          var n,
            t = e.core,
            o = t.inactiver,
            r = t.globalEventsController,
            i = t.windowResizeActioner,
            s = e.middleware,
            a = e.resolve,
            c = a(De),
            u = a(Le),
            l = a(Oe);
          (r.addListeners = function () {
            document.addEventListener("pointerdown", o.listener),
              document.addEventListener("pointermove", c.moveListener),
              document.addEventListener("pointerup", c.upListener),
              addEventListener("resize", i.runActions),
              document.addEventListener("keydown", u.listener);
            var e,
              t =
                ((e = !1),
                function () {
                  return (
                    !e &&
                    ((e = !0),
                    requestAnimationFrame(function () {
                      e = !1;
                    }),
                    !0)
                  );
                });
            (n = s(
              (n = function (e) {
                return t() && l.listener(e);
              }),
              ye
            )),
              document.addEventListener("wheel", n);
          }),
            (r.removeListeners = function () {
              document.removeEventListener("pointerdown", o.listener),
                document.removeEventListener("pointermove", c.moveListener),
                document.removeEventListener("pointerup", c.upListener),
                removeEventListener("resize", i.runActions),
                document.removeEventListener("keydown", u.listener),
                document.removeEventListener("wheel", n);
            });
        })(e),
        (function (e) {
          var n = e.core.inactiver,
            t = e.data,
            o = e.elements,
            r = e.props.UIFadeOutTime,
            i = !1,
            s = ve(function () {
              (i = !0), a(c);
            }, r);
          n.listener = function () {
            s(), i && (a(u), (i = !1));
          };
          var a = function (e) {
              e(o.nav),
                1 === t.zoom &&
                  o.slideButtonPrevious &&
                  (e(o.slideButtonPrevious), e(o.slideButtonNext)),
                t.isThumbing && e(o.thumbsContainer);
            },
            c = function (e) {
              e.classList.add(w);
            },
            u = function (e) {
              e.classList.remove(w);
            };
        })(e),
        (function (e) {
          var n = e.core.lightboxCloser,
            t = (0, e.resolve)(we);
          n.close = function () {
            t.isLightboxFadingOut || t.runActions();
          };
        })(e),
        Ve(e),
        (function (e) {
          var n = e.core.pointeringBucket,
            t = e.elements;
          (n.runSwipingDownActionsForPropsAndEvent = function (e, n) {
            (e.isPointering = !0), (e.downScreenX = n.screenX), (e.swipedX = 0);
          }),
            (n.runSwipingMoveActionsForPropsAndEvent = function (e, n) {
              ge(t.slideSwipingHoverer, i),
                (e.swipedX = n.screenX - e.downScreenX);
            }),
            (n.runSwipingTopActionsForPropsAndEvent = function (e) {
              fe(t.slideSwipingHoverer, i), (e.isPointering = !1);
            });
        })(e),
        (function (e) {
          var n = e.data,
            t = e.core.scrollbarRecompensor;
          t.addRecompense = function () {
            "complete" === document.readyState
              ? o()
              : window.addEventListener("load", function () {
                  o(), (t.addRecompense = o);
                });
          };
          var o = function () {
            document.body.offsetHeight > window.innerHeight &&
              (document.body.style.marginRight = n.scrollbarWidth + "px");
          };
          t.removeRecompense = function () {
            document.body.style.removeProperty("margin-right");
          };
        })(e),
        Te(e),
        (function (e) {
          var n = e.core,
            t = n.slideChangeFacade,
            o = n.slideIndexChanger,
            r = n.stageManager;
          e.props.sources.length > 1
            ? ((t.changeToPrevious = function () {
                o.jumpTo(r.getPreviousSlideIndex());
              }),
              (t.changeToNext = function () {
                o.jumpTo(r.getNextSlideIndex());
              }))
            : ((t.changeToPrevious = function () {}),
              (t.changeToNext = function () {}));
        })(e),
        (function (e) {
          var n = e.collections.sourceMainWrapperTransformers,
            t = e.componentsServices,
            o = e.core,
            r = o.captionsActioner,
            i = o.classFacade,
            s = o.eventsDispatcher,
            a = o.slideIndexChanger,
            u = o.sourceDisplayFacade,
            l = o.sourceLoadersManager,
            d = o.stageManager,
            p = o.thumbsTransformer,
            m = o.zoomer,
            f = e.elements.sourceAnimationWrappers,
            g = e.props,
            b = g.disableThumbs,
            v = g.initialAnimation,
            x = g.slideChangeAnimation,
            w = e.stageIndexes,
            S = ve(function () {
              i.removeFromEachElementClassIfContains(
                "sourceAnimationWrappers",
                h
              );
            }, 300);
          (a.changeTo = function (n) {
            Se(e, n),
              m.ifZoomingResetZoom(),
              r.changeActiveCaptionFromTo(w.current, n),
              (w.current = n),
              d.updateStageIndexes(),
              b || p.transformToCurrentWithTransition(),
              t.setSlideNumber(n + 1),
              l.displayLoadersWhichShouldBeDisplayed(),
              u.displaySourcesWhichShouldBeDisplayed(),
              s.dispatch("onSlideChange");
          }),
            (a.jumpTo = function (e) {
              var t = w.current;
              a.changeTo(e),
                i.removeFromEachElementClassIfContains("sourceMainWrappers", c),
                fe(f[t], v),
                fe(f[t], x),
                f[t].classList.add(h),
                fe(f[e], v),
                fe(f[e], h),
                f[e].classList.add(x),
                S(),
                n[e].zero(),
                setTimeout(function () {
                  t !== w.current && n[t].negative();
                }, 260);
            });
        })(e),
        (function (e) {
          var n = e.core.sourceEnhancementWrappersTransformer,
            t = e.data,
            o = (0, e.resolve)(Ye);
          (n.ifSourceIsLoadedTransformEnhancementWrapperAtIndex = function (e) {
            t.isThumbing
              ? o.setUpThumbedEnhancementWrapperTransform()
              : o.setUpNotThumbedEnhancementWrapperTransformAtIndex(e),
              o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e);
          }),
            (n.ifSourceIsLoadedTransformThumbedEnhancementWrapperAtIndex =
              function (e) {
                o.setUpThumbedEnhancementWrapperTransform(e),
                  o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e);
              }),
            (n.ifSourceIsLoadedTransformNotThumbedEnhancementWrapperAtIndex =
              function (e) {
                o.setUpNotThumbedEnhancementWrapperTransformAtIndex(e),
                  o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e);
              });
        })(e),
        (function (e) {
          var n = e.core,
            t = n.sourceLoadersManager,
            o = n.stageManager,
            r = e.elements.sourceAnimationWrappers,
            i = e.stageIndexes,
            s = [];
          function a(e) {
            (s[e] = !0), xe(r[e]);
          }
          (t.handleSourceAnimationWrapperRendering = function (e) {
            o.isSourceInStage(e) && a(e);
          }),
            (t.displayLoadersWhichShouldBeDisplayed = function () {
              for (var e in i) {
                var n = i[e];
                s[n] || a(n);
              }
            }),
            (t.handleSourceLoad = function (e) {
              (s[e] = !0), r[e].removeChild(r[e].firstChild);
            });
        })(e),
        (function (e) {
          var n = e.collections.sourcesRenderFunctions,
            t = e.core.sourceDisplayFacade,
            o = e.props.loadOnlyCurrentSource,
            r = e.stageIndexes;
          function i(e) {
            n[e] && (n[e](), delete n[e]);
          }
          t.displaySourcesWhichShouldBeDisplayed = function () {
            if (o) i(r.current);
            else for (var e in r) i(r[e]);
          };
        })(e),
        (function (e) {
          var n = e.core,
            t = (n.classFacade, n.sourcesPointerDown),
            o = n.pointeringBucket,
            r = e.elements,
            i = r.sources,
            s = r.sourceMainWrappers,
            a = e.resolve,
            u = e.sourcePointerProps,
            l = e.stageIndexes,
            d = a(Xe);
          t.listener = function (e) {
            if (
              ("touch" !== e.pointerType &&
                "VIDEO" !== e.target.tagName &&
                e.preventDefault(),
              o.runSwipingDownActionsForPropsAndEvent(u, e),
              (u.downScreenY = e.screenY),
              2 === u.pointersCount)
            )
              d.runPinchActions();
            else
              for (var n in l) {
                var t = l[n];
                fe(s[t], c);
              }
            var r = i[l.current];
            r && r.contains(e.target)
              ? (u.isSourceDownEventTarget = !0)
              : (u.isSourceDownEventTarget = !1);
          };
        })(e),
        (function (e) {
          var n = e.stageIndexes,
            t = e.core.stageManager,
            o = e.props.sources.length - 1;
          (t.getPreviousSlideIndex = function () {
            return 0 === n.current ? o : n.current - 1;
          }),
            (t.getNextSlideIndex = function () {
              return n.current === o ? 0 : n.current + 1;
            }),
            (t.updateStageIndexes =
              0 === o
                ? function () {}
                : 1 === o
                ? function () {
                    0 === n.current
                      ? ((n.next = 1), delete n.previous)
                      : ((n.previous = 0), delete n.next);
                  }
                : function () {
                    (n.previous = t.getPreviousSlideIndex()),
                      (n.next = t.getNextSlideIndex());
                  }),
            (t.isSourceInStage =
              o <= 2
                ? function () {
                    return !0;
                  }
                : function (e) {
                    var t = n.current;
                    if ((0 === t && e === o) || (t === o && 0 === e)) return !0;
                    var r = t - e;
                    return -1 === r || 0 === r || 1 === r;
                  });
        })(e),
        (function (e) {
          var n = e.collections,
            t = n.sourceMainWrapperTransformers,
            o = n.sourceSizers,
            r = e.core,
            i = r.sourceEnhancementWrappersTransformer,
            s = r.windowResizeActioner,
            a = r.thumbsTransformer,
            u = e.data,
            l = e.elements,
            d = e.props,
            p = d.disableThumbs,
            h = d.sources,
            m = e.stageIndexes,
            f = u.notThumbedSourceEnhancementWrapperScales,
            g = u.captionHeights,
            b = u.notThumbedSourceEnhancementWrapperTranslatesY,
            v = l.captions,
            x = l.sourceMainWrappers,
            w = l.thumbs;
          (s.runActions = function () {
            innerWidth < 992
              ? (u.maxSourceWidth = innerWidth)
              : (u.maxSourceWidth = 0.9 * innerWidth),
              (u.maxSourceHeight = 0.9 * innerHeight),
              p ||
                ((u.thumbedSourceEnhancementWrapperScale =
                  1 - l.thumbsContainer.offsetHeight / innerHeight),
                (u.thumbedSourceEnhancementWrapperTranslateY =
                  -l.thumbsContainer.offsetHeight / 2)),
              0 === u.unloadedThumbsCount && s.runThumbsActions();
            for (var e = 0; e < h.length; e++) {
              if (v[e]) {
                g[e] = v[e].offsetHeight;
                var n = g[e] - 25;
                (f[e] = 1 - n / innerHeight), (b[e] = -n / 2);
              } else (f[e] = 1), (b[e] = 0);
              fe(x[e], c),
                i.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e),
                e !== m.current && t[e].negative(),
                o[e] && o[e].adjustSize();
            }
          }),
            (s.runThumbsActions = function () {
              u.thumbsInnerWidth = 0;
              for (var e = 0; e < h.length; e++)
                u.thumbsInnerWidth += w[e].offsetWidth + 8;
              a.transformToCurrent();
            });
        })(e),
        (function (e) {
          var n = e.collections.sourceMainWrapperTransformers,
            t = e.core.zoomer,
            o = e.data,
            r = e.elements,
            i = e.resolve,
            s = e.sourcePointerProps,
            a = e.stageIndexes,
            u = r.sources,
            l = r.sourceMainWrappers,
            d = i(Re);
          (t.zoomTo = function (e) {
            (o.zoom = h(e)),
              (r.sourceWrappersContainer.style.transform = "scale(".concat(
                o.zoom,
                ")"
              ));
          }),
            (t.ifZoomingResetZoom = function () {
              1 !== o.zoom && (t.zoomTo(1), t.stopZooming());
            }),
            (t.startZooming = function () {
              p("grab"),
                d.runOpacity0ActionUsingMethod("add"),
                d.runActiveEnhancementActionUsingMethod("remove");
            }),
            (t.stopZooming = function () {
              p("zoom-in"),
                d.runOpacity0ActionUsingMethod("remove"),
                d.runActiveEnhancementActionUsingMethod("add"),
                l[a.current].classList.add(c),
                n[a.current].translate(0, 0).zero(),
                (s.upSwipedX = 0),
                (s.upSwipedY = 0);
            });
          var p = function (e) {
              u[a.current] && (u[a.current].style.cursor = e);
            },
            h = function (e) {
              return parseFloat(e.toPrecision(12));
            };
        })(e);
    }
    function Ue(e, n) {
      var t = e.data.isThumbing,
        o = e.elements,
        r = o.captions,
        i = o.container,
        a = e.props.captions,
        c = e.stageIndexes.current;
      r[n] = document.createElement("div");
      var u = "".concat(g, " ").concat(s);
      c !== n || t || (u += " ".concat(v)), (r[n].className = u);
      var l = document.createElement("div");
      (l.className = b),
        (l.innerHTML = a[n]),
        r[n].appendChild(l),
        i.appendChild(r[n]);
    }
    function je(e) {
      var n = e.core.eventsDispatcher,
        o = e.data,
        i = e.elements,
        s = e.props,
        a = s.disableThumbs,
        l = s.showThumbsOnMount,
        d = s.sources;
      (o.isInitialized = !0),
        (o.scrollbarWidth = (function (e) {
          var n = e.props.disableLocalStorage;
          if (!n) {
            var t = localStorage.getItem(H);
            if (t) return t;
          }
          var o = (function () {
              var e = document.createElement("div"),
                n = e.style;
              return (
                (n.visibility = "hidden"),
                (n.width = "100px"),
                (n.msOverflowStyle = "scrollbar"),
                (n.overflow = "scroll"),
                e
              );
            })(),
            r = (function () {
              var e = document.createElement("div");
              return (e.style.width = "100%"), e;
            })();
          document.body.appendChild(o);
          var i = o.offsetWidth;
          o.appendChild(r);
          var s = r.offsetWidth;
          document.body.removeChild(o);
          var a = i - s;
          return n || localStorage.setItem(H, a.toString()), a;
        })(e)),
        (o.unloadedThumbsCount = d.length),
        (function (e) {
          for (
            var n = e.collections.sourceMainWrapperTransformers,
              t = e.props.sources,
              o = e.resolve,
              r = 0;
            r < t.length;
            r++
          )
            n[r] = o(pe, [r]);
        })(e),
        a ||
          ((o.isThumbing = l),
          (function (e) {
            var n = e.core,
              t = e.data,
              o = e.elements,
              r = e.props;
            (t.isThumbing = r.showThumbsOnMount),
              (t.thumbsInnerWidth = null),
              (t.thumbsTransform = 0),
              (t.thumbedSourceEnhancementWrapperScale = null),
              (t.thumbedSourceEnhancementWrapperTranslateY = null),
              (t.unloadedThumbsCount = r.sources.length),
              (e.thumbsSwipingProps = {
                isPointering: !1,
                downScreenX: null,
                swipedX: null,
              }),
              (n.thumbLoadHandler = {}),
              (n.thumbsRenderDispatcher = {}),
              (n.thumbsSwipingDown = {}),
              (n.thumbsToggler = {}),
              (n.thumbsTransformer = {}),
              (n.thumbsTransformTransitioner = {}),
              (o.thumbsContainer = null),
              (o.thumbs = []),
              (o.thumbsWrappers = []),
              (o.thumbsComponents = []),
              (o.thumbsInner = null),
              (function (e) {
                var n = e.core,
                  t = n.thumbLoadHandler,
                  o = n.windowResizeActioner,
                  r = e.componentsServices,
                  i = e.data,
                  s = e.elements.thumbsWrappers;
                t.handleLoad = function () {
                  if ((i.unloadedThumbsCount--, 0 === i.unloadedThumbsCount)) {
                    for (var e = 0; e < s.length; e++) s[e].classList.add(S);
                    o.runThumbsActions(), r.hideThumbsLoader();
                  }
                };
              })(e),
              (function (e) {
                var n = e.core.thumbsRenderDispatcher,
                  t = e.props.sources,
                  o = [],
                  r = !1,
                  i = 0;
                (n.addFunctionToToBeRenderedAtIndex = function (e, n) {
                  (o[n] = e), i++;
                }),
                  (n.renderThumbsIfNotYetAndAllTypesDetected = function () {
                    if (!r && i === t.length) {
                      r = !0;
                      for (var e = 0; e < t.length; e++) o[e]();
                    }
                  });
              })(e),
              (function (e) {
                var n = e.core,
                  t = n.thumbsSwipingDown,
                  o = n.pointeringBucket,
                  r = e.thumbsSwipingProps;
                t.listener = function (e) {
                  e.preventDefault(),
                    o.runSwipingDownActionsForPropsAndEvent(r, e);
                };
              })(e),
              (function (e) {
                var n = e.core.thumbsToggler,
                  t = e.data,
                  o = (0, e.resolve)(me);
                n.toggleThumbs = function () {
                  t.isThumbing ? o.closeThumbs() : o.openThumbs();
                };
              })(e),
              (function (e) {
                var n = e.core,
                  t = n.thumbsTransformer,
                  o = n.thumbsTransformTransitioner,
                  r = e.data,
                  i = (0, e.resolve)(be);
                (t.transformToCurrent = function () {
                  r.thumbsInnerWidth > innerWidth
                    ? i.runActions()
                    : i.runToThinThumbsActions();
                }),
                  (t.transformToCurrentWithTransition = function () {
                    r.thumbsInnerWidth > innerWidth &&
                      o.callActionWithTransition(i.runActions);
                  });
              })(e),
              (function (e) {
                var n = e.core.thumbsTransformTransitioner,
                  t = e.elements,
                  o = ve(function () {
                    t.thumbsInner.classList.remove(c);
                  }, 300);
                n.callActionWithTransition = function (e) {
                  t.thumbsInner.classList.add(c), e(), o();
                };
              })(e);
          })(e)),
        Ze(e),
        (i.container = document.createElement("div")),
        (i.container.className = ""
          .concat(t, "container ")
          .concat(r, " ")
          .concat(m)),
        (function (e) {
          var n = e.elements;
          (n.slideSwipingHoverer = document.createElement("div")),
            (n.slideSwipingHoverer.className = ""
              .concat(t, "slide-swiping-hoverer ")
              .concat(r, " ")
              .concat(u));
        })(e),
        de(e),
        (function (e) {
          var n = e.elements;
          (n.slideshowBar = document.createElement("div")),
            (n.slideshowBar.className = ""
              .concat(t, "slideshow-bar ")
              .concat(u)),
            n.container.appendChild(n.slideshowBar);
        })(e),
        (function (e) {
          var n = e.core.sourcesPointerDown.listener,
            t = e.elements,
            o = e.middleware,
            i = e.props.sources,
            s = document.createElement("div");
          (s.className = "".concat(y, " ").concat(u, " ").concat(r)),
            t.container.appendChild(s),
            s.addEventListener("pointerdown", o(n, ce)),
            (t.sourceWrappersContainer = s);
          for (var a = 0; a < i.length; a++) ae(e, a);
        })(e),
        (function (e) {
          for (var n = e.props.captions, t = 0; t < n.length; t++)
            n[t] && Ue(e, t);
        })(e),
        d.length > 1 &&
          (function (e) {
            he(e, "previous"), he(e, "next");
          })(e),
        a ||
          (function (e) {
            var n = e.componentsServices,
              t = e.elements,
              o = e.data;
            t.thumbsContainer = document.createElement("div");
            var i,
              s,
              a = A;
            function c() {
              (s = !0), (i = xe(t.thumbsContainer)).classList.add(I);
            }
            o.isThumbing && ((a += " ".concat(E)), c()),
              (n.appendThumbsLoaderIfNotYet = function () {
                s || c();
              }),
              (n.hideThumbsLoader = function () {
                t.thumbsContainer.removeChild(i);
              }),
              (t.thumbsContainer.className = a),
              t.container.appendChild(t.thumbsContainer),
              (function (e) {
                var n = e.elements;
                (n.thumbsCursorer = document.createElement("div")),
                  (n.thumbsCursorer.className = ""
                    .concat(W, " ")
                    .concat(r, " ")
                    .concat(u));
              })(e),
              (function (e) {
                var n = e.core.thumbsSwipingDown.listener,
                  t = e.elements;
                (t.thumbsInner = document.createElement("div")),
                  (t.thumbsInner.className = z),
                  t.thumbsInner.addEventListener("pointerdown", n),
                  t.thumbsContainer.appendChild(t.thumbsInner);
              })(e);
          })(e),
        (function (e) {
          for (
            var n = e.props.sources,
              t = e.resolve,
              o = t(D),
              r = t(re),
              i = t(se, [o, r]),
              s = 0;
            s < n.length;
            s++
          )
            if ("string" == typeof n[s]) {
              var a = i.getTypeSetByClientForIndex(s);
              if (a) r.runActionsForSourceTypeAndIndex(a, s);
              else {
                var c = o.getSourceTypeFromLocalStorageByUrl(n[s]);
                c
                  ? r.runActionsForSourceTypeAndIndex(c, s)
                  : i.retrieveTypeWithXhrForIndex(s);
              }
            } else r.runActionsForSourceTypeAndIndex(Y, s);
        })(e),
        n.dispatch("onInit");
    }
    function Ve(e) {
      var n = e.collections.sourceMainWrapperTransformers,
        t = e.componentsServices,
        o = e.core,
        r = o.captionsActioner,
        i = o.eventsDispatcher,
        s = o.lightboxOpener,
        c = o.globalEventsController,
        u = o.scrollbarRecompensor,
        l = o.sourceDisplayFacade,
        d = o.sourceLoadersManager,
        p = o.stageManager,
        h = o.windowResizeActioner,
        m = e.data,
        f = e.elements,
        g = e.stageIndexes;
      s.open = function () {
        var o =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          s = g.current;
        Se(e, o),
          (g.current = o),
          m.isInitialized ? i.dispatch("onShow") : je(e),
          p.updateStageIndexes(),
          d.displayLoadersWhichShouldBeDisplayed(),
          l.displaySourcesWhichShouldBeDisplayed(),
          r.changeActiveCaptionFromTo(s, o),
          t.setSlideNumber(o + 1),
          document.body.appendChild(f.container),
          document.documentElement.classList.add(a),
          u.addRecompense(),
          c.addListeners(),
          h.runActions(),
          n[g.current].zero(),
          i.dispatch("onOpen");
      };
    }
    function qe(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return _e(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, n) {
          if (e) {
            if ("string" == typeof e) return _e(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t
                ? Array.from(e)
                : "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? _e(e, n)
                : void 0
            );
          }
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function _e(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
      return o;
    }
    function Je(e, n, t) {
      return (
        (Je = $e()
          ? Reflect.construct
          : function (e, n, t) {
              var o = [null];
              o.push.apply(o, n);
              var r = new (Function.bind.apply(e, o))();
              return t && Ge(r, t.prototype), r;
            }),
        Je.apply(null, arguments)
      );
    }
    function $e() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function Ge(e, n) {
      return (
        (Ge =
          Object.setPrototypeOf ||
          function (e, n) {
            return (e.__proto__ = n), e;
          }),
        Ge(e, n)
      );
    }
    function Ke(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return Qe(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, n) {
          if (e) {
            if ("string" == typeof e) return Qe(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t
                ? Array.from(e)
                : "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? Qe(e, n)
                : void 0
            );
          }
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Qe(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
      return o;
    }
    function en() {
      for (
        var e = document.getElementsByTagName("a"),
          n = function (n) {
            if (!e[n].hasAttribute("data-fslightbox")) return "continue";
            var t = e[n].getAttribute("data-fslightbox"),
              o = e[n].getAttribute("href");
            fsLightboxInstances[t] ||
              (fsLightboxInstances[t] = new FsLightbox());
            var r = null;
            "#" === o.charAt(0)
              ? (r = document
                  .getElementById(o.substring(1))
                  .cloneNode(!0)).removeAttribute("id")
              : (r = o),
              fsLightboxInstances[t].props.sources.push(r),
              fsLightboxInstances[t].elements.a.push(e[n]);
            var i = fsLightboxInstances[t].props.sources.length - 1;
            (e[n].onclick = function (e) {
              e.preventDefault(), fsLightboxInstances[t].open(i);
            }),
              d("captions", "data-caption"),
              d("customClasses", "data-class"),
              d("customClasses", "data-custom-class"),
              d("types", "data-type"),
              d("thumbs", "data-thumb"),
              d("videosPosters", "data-video-poster");
            for (
              var s = [
                  "href",
                  "data-fslightbox",
                  "data-caption",
                  "data-class",
                  "data-custom-class",
                  "data-type",
                  "data-thumb",
                  "data-video-poster",
                ],
                a = e[n].attributes,
                c = fsLightboxInstances[t].props.customAttributes,
                u = 0;
              u < a.length;
              u++
            )
              if (
                -1 === s.indexOf(a[u].name) &&
                "data-" === a[u].name.substr(0, 5)
              ) {
                c[i] || (c[i] = {});
                var l = a[u].name.substr(5);
                c[i][l] = a[u].value;
              }
            function d(o, r) {
              e[n].hasAttribute(r) &&
                (fsLightboxInstances[t].props[o][i] = e[n].getAttribute(r));
            }
          },
          t = 0;
        t < e.length;
        t++
      )
        n(t);
      var o = Object.keys(fsLightboxInstances);
      window.fsLightbox = fsLightboxInstances[o[o.length - 1]];
    }
    return (
      (window.FsLightbox = function () {
        var e = this;
        (this.props = {
          sources: [],
          maxYoutubeDimensions: null,
          customAttributes: [],
          customClasses: [],
          types: [],
          type: null,
          thumbs: [],
          thumbsIcons: [],
          captions: [],
          videosPosters: [],
          customToolbarButtons: [],
          initialAnimation: m,
          slideChangeAnimation: p,
          slideDistance: 0.3,
          slideshowTime: 8e3,
          UIFadeOutTime: 8e3,
          zoomIncrement: 0.25,
          toolbarButtons: {
            thumbs: {
              width: "17px",
              height: "17px",
              viewBox: "0 0 22 22",
              d: "M 3 2 C 2.448 2 2 2.448 2 3 L 2 6 C 2 6.552 2.448 7 3 7 L 6 7 C 6.552 7 7 6.552 7 6 L 7 3 C 7 2.448 6.552 2 6 2 L 3 2 z M 10 2 C 9.448 2 9 2.448 9 3 L 9 6 C 9 6.552 9.448 7 10 7 L 13 7 C 13.552 7 14 6.552 14 6 L 14 3 C 14 2.448 13.552 2 13 2 L 10 2 z M 17 2 C 16.448 2 16 2.448 16 3 L 16 6 C 16 6.552 16.448 7 17 7 L 20 7 C 20.552 7 21 6.552 21 6 L 21 3 C 21 2.448 20.552 2 20 2 L 17 2 z M 3 9 C 2.448 9 2 9.448 2 10 L 2 13 C 2 13.552 2.448 14 3 14 L 6 14 C 6.552 14 7 13.552 7 13 L 7 10 C 7 9.448 6.552 9 6 9 L 3 9 z M 10 9 C 9.448 9 9 9.448 9 10 L 9 13 C 9 13.552 9.448 14 10 14 L 13 14 C 13.552 14 14 13.552 14 13 L 14 10 C 14 9.448 13.552 9 13 9 L 10 9 z M 17 9 C 16.448 9 16 9.448 16 10 L 16 13 C 16 13.552 16.448 14 17 14 L 20 14 C 20.552 14 21 13.552 21 13 L 21 10 C 21 9.448 20.552 9 20 9 L 17 9 z M 3 16 C 2.448 16 2 16.448 2 17 L 2 20 C 2 20.552 2.448 21 3 21 L 6 21 C 6.552 21 7 20.552 7 20 L 7 17 C 7 16.448 6.552 16 6 16 L 3 16 z M 10 16 C 9.448 16 9 16.448 9 17 L 9 20 C 9 20.552 9.448 21 10 21 L 13 21 C 13.552 21 14 20.552 14 20 L 14 17 C 14 16.448 13.552 16 13 16 L 10 16 z M 17 16 C 16.448 16 16 16.448 16 17 L 16 20 C 16 20.552 16.448 21 17 21 L 20 21 C 20.552 21 21 20.552 21 20 L 21 17 C 21 16.448 20.552 16 20 16 L 17 16 z",
              title: "Thumbnails",
            },
            zoomIn: {
              width: "20px",
              height: "20px",
              viewBox: "0 0 30 30",
              d: "M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z M 12.984375 7.9863281 A 1.0001 1.0001 0 0 0 12 9 L 12 12 L 9 12 A 1.0001 1.0001 0 1 0 9 14 L 12 14 L 12 17 A 1.0001 1.0001 0 1 0 14 17 L 14 14 L 17 14 A 1.0001 1.0001 0 1 0 17 12 L 14 12 L 14 9 A 1.0001 1.0001 0 0 0 12.984375 7.9863281 z",
              title: "Zoom In",
            },
            zoomOut: {
              width: "20px",
              height: "20px",
              viewBox: "0 0 30 30",
              d: "M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z M 9 12 A 1.0001 1.0001 0 1 0 9 14 L 17 14 A 1.0001 1.0001 0 1 0 17 12 L 9 12 z",
              title: "Zoom Out",
            },
            slideshow: {
              start: {
                width: "16px",
                height: "16px",
                viewBox: "0 0 30 30",
                d: "M 6 3 A 1 1 0 0 0 5 4 A 1 1 0 0 0 5 4.0039062 L 5 15 L 5 25.996094 A 1 1 0 0 0 5 26 A 1 1 0 0 0 6 27 A 1 1 0 0 0 6.5800781 26.8125 L 6.5820312 26.814453 L 26.416016 15.908203 A 1 1 0 0 0 27 15 A 1 1 0 0 0 26.388672 14.078125 L 6.5820312 3.1855469 L 6.5800781 3.1855469 A 1 1 0 0 0 6 3 z",
                title: "Turn on slideshow",
              },
              pause: {
                width: "14px",
                height: "14px",
                viewBox: "0 0 356.19 356.19",
                d: "M121,0c18,0,33,15,33,33v372c0,18-15,33-33,33s-32-15-32-33V33C89,15,103,0,121,0zM317,0c18,0,32,15,32,33v372c0,18-14,33-32,33s-33-15-33-33V33C284,15,299,0,317,0z",
                title: "Turn off slideshow",
              },
            },
            fullscreen: {
              enter: {
                width: "20px",
                height: "20px",
                viewBox: "0 0 18 18",
                d: "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
                title: "Enter fullscreen",
              },
              exit: {
                width: "24px",
                height: "24px",
                viewBox: "0 0 950 1024",
                d: "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z",
                title: "Exit fullscreen",
              },
            },
            close: {
              width: "20px",
              height: "20px",
              viewBox: "0 0 24 24",
              d: "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z",
              title: "Close",
            },
          },
          slideButtons: {
            previous: {
              width: "20px",
              height: "20px",
              viewBox: "0 0 20 20",
              d: "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z",
              title: "Previous",
            },
            next: {
              width: "20px",
              height: "20px",
              viewBox: "0 0 20 20",
              d: "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z",
              title: "Next",
            },
          },
        }),
          (this.data = {
            isInitialized: !1,
            isThumbing: !1,
            maxSourceWidth: 0,
            maxSourceHeight: 0,
            scrollbarWidth: 0,
            isFullscreenOpen: !1,
            isSlideshowOn: !1,
            captionHeights: [],
            notThumbedSourceEnhancementWrapperScales: [],
            notThumbedSourceEnhancementWrapperTranslatesY: [],
            zoom: 1,
          }),
          (this.sourcePointerProps = {
            isPointering: !1,
            pointers: {},
            pointersCount: 0,
            downScreenX: null,
            downScreenY: null,
            isSourceDownEventTarget: !1,
            swipedX: 0,
            swipedY: 0,
            upSwipedX: 0,
            upSwipedY: 0,
            pinchedHypot: 0,
          }),
          (this.stageIndexes = {}),
          (this.elements = {
            a: [],
            captions: [],
            container: null,
            nav: null,
            slideSwipingHoverer: null,
            slideButtonPrevious: null,
            slideButtonNext: null,
            sourceWrappersContainer: null,
            slideshowBar: null,
            sourceAnimationWrappers: [],
            sourceEnhancementWrappers: [],
            sourceTurboWrappers: [],
            sourceMainWrappers: [],
            sourceZoomWrappers: [],
            sources: [],
          }),
          (this.componentsServices = {
            enterFullscreen: null,
            exitFullscreen: null,
            setSlideNumber: function () {},
            startSlideshow: null,
            stopSlideshow: null,
          }),
          (this.middleware = function (n, t) {
            return (function (e, n, t) {
              return function () {
                for (
                  var o = arguments.length, r = new Array(o), i = 0;
                  i < o;
                  i++
                )
                  r[i] = arguments[i];
                var s = t ? [].concat(qe(t), r) : r;
                n.apply(void 0, qe(s)) && e.apply(void 0, r);
              };
            })(n, t, [e]);
          }),
          (this.resolve = function (n) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            return t.unshift(e), Je(n, Ke(t));
          }),
          (this.collections = {
            sourceMainWrapperTransformers: [],
            sourceLoadHandlers: [],
            sourcesRenderFunctions: [],
            sourceSizers: [],
          }),
          (this.core = {
            captionsActioner: {},
            classFacade: {},
            clickZoomer: {},
            eventsDispatcher: {},
            fullscreenToggler: {},
            globalEventsController: {},
            inactiver: {},
            lightboxCloser: {},
            lightboxOpener: {},
            lightboxUpdater: {},
            pointeringBucket: {},
            scrollbarRecompensor: {},
            slideshowManager: {},
            slideChangeFacade: {},
            slideIndexChanger: {},
            sourceDisplayFacade: {},
            sourceEnhancementWrappersTransformer: {},
            sourceLoadersManager: {},
            sourcesPointerDown: {},
            stageManager: {},
            swipingActioner: {},
            windowResizeActioner: {},
            zoomer: {},
          }),
          Ve(this),
          (this.open = this.core.lightboxOpener.open),
          (this.close = function () {
            return e.core.lightboxCloser.close();
          });
      }),
      (window.fsLightboxInstances = {}),
      en(),
      (window.refreshFsLightbox = function () {
        for (var e in fsLightboxInstances) {
          var n = fsLightboxInstances[e].props;
          (fsLightboxInstances[e] = new FsLightbox()),
            (fsLightboxInstances[e].props = n),
            (fsLightboxInstances[e].props.sources = []),
            (fsLightboxInstances[e].elements.a = []);
        }
        en();
      }),
      e
    );
  })();
});
