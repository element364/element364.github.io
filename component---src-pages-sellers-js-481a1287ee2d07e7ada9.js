(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"0bVq":function(e,a,i){i("eM6i"),i("a1Th"),i("h7Nl"),i("Btvt");var t=i("hBhu");function n(e){if(!(this instanceof n))return new n(e);this._from=e,this.ease("linear"),this.duration(500)}i("M4kv")(n.prototype),n.prototype.reset=function(){return this.isArray="[object Array]"===Object.prototype.toString.call(this._from),this._curr=function(e,a){for(var i in a)a.hasOwnProperty(i)&&(e[i]=a[i]);return e}({},this._from),this._done=!1,this._start=Date.now(),this},n.prototype.to=function(e){return this.reset(),this._to=e,this},n.prototype.duration=function(e){return this._duration=e,this},n.prototype.ease=function(e){if(!(e="function"==typeof e?e:t[e]))throw new TypeError("invalid easing function");return this._ease=e,this},n.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},n.prototype.step=function(){if(!this._done){var e=this._duration,a=Date.now();if(a-this._start>=e)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var i=this._from,t=this._to,n=this._curr,l=(0,this._ease)((a-this._start)/e);if(this.isArray){for(var r=0;r<i.length;++r)n[r]=i[r]+(t[r]-i[r])*l;return this._update(n),this}for(var o in i)n[o]=i[o]+(t[o]-i[o])*l;return this._update(n),this}},n.prototype.update=function(e){return 0==arguments.length?this.step():(this._update=e,this)},e.exports=n},JwyU:function(e,a,i){var t=i("0bVq"),n=i("xEkU");e.exports=function(e,a,i){i=i||{};var l={top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft},r=t(l).ease(i.ease||"out-circ").to({top:a,left:e}).duration(i.duration||1e3);function o(){n(o),r.update()}return r.update((function(e){window.scrollTo(0|e.left,0|e.top)})),r.on("end",(function(){o=function(){}})),o(),r}},KFyt:function(e,a,i){"use strict";var t=i("q1tI"),n=i.n(t);a.a=function(){return n.a.createElement("svg",{width:"28px",height:"29px",viewBox:"0 0 28 29",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.a.createElement("g",{id:"content/3-par-illo",transform:"translate(-135.000000, -285.000000)",fill:"#1F325D"},n.a.createElement("g",{id:"Grow-your-b2b-business-Copy-2",transform:"translate(135.000000, 86.000000)"},n.a.createElement("g",{id:"Group-10",transform:"translate(0.000000, 192.000000)"},n.a.createElement("g",{id:"icons/growth"},n.a.createElement("g",{id:"Group-11",transform:"translate(0.000000, 5.250000)"},n.a.createElement("rect",{id:"Rectangle-Copy-2",x:"0",y:"26.25",width:"10.5",height:"4.5"}),n.a.createElement("rect",{id:"Rectangle-Copy-6",x:"12",y:"14.25",width:"10.5",height:"4.5"}),n.a.createElement("rect",{id:"Rectangle-Copy-8",stroke:"#1F325D",strokeWidth:"3.75",transform:"translate(21.976862, 6.976862) rotate(-25.000000) translate(-21.976862, -6.976862) ",x:"18.6018618",y:"3.60186176",width:"6.75",height:"6.75",rx:"3.375"}),n.a.createElement("rect",{id:"Rectangle-Copy-3",x:"6",y:"20.25",width:"4.5",height:"10.5"}),n.a.createElement("rect",{id:"Rectangle-Copy-5",x:"12",y:"14.25",width:"4.5",height:"10.5"}),n.a.createElement("rect",{id:"Rectangle-Copy-4",x:"6",y:"20.25",width:"10.5",height:"4.5"}))))))))}},M4kv:function(e,a,i){function t(e){if(e)return function(e){for(var a in t.prototype)e[a]=t.prototype[a];return e}(e)}t.prototype.on=t.prototype.addEventListener=function(e,a){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(a),this},t.prototype.once=function(e,a){function i(){this.off(e,i),a.apply(this,arguments)}return i.fn=a,this.on(e,i),this},t.prototype.off=t.prototype.removeListener=t.prototype.removeAllListeners=t.prototype.removeEventListener=function(e,a){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var i,t=this._callbacks["$"+e];if(!t)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var n=0;n<t.length;n++)if((i=t[n])===a||i.fn===a){t.splice(n,1);break}return 0===t.length&&delete this._callbacks["$"+e],this},t.prototype.emit=function(e){this._callbacks=this._callbacks||{};var a=[].slice.call(arguments,1),i=this._callbacks["$"+e];if(i)for(var t=0,n=(i=i.slice(0)).length;t<n;++t)i[t].apply(this,a);return this},t.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},t.prototype.hasListeners=function(e){return!!this.listeners(e).length},e.exports=t},MFpG:function(e,a,i){"use strict";i.r(a),i.d(a,"pageQuery",(function(){return I})),i.d(a,"default",(function(){return S}));var t=i("MX0m"),n=i.n(t),l=i("q1tI"),r=i.n(l),o=i("SKMy"),c=i.n(o),m=i("7oih"),s=i("0Wn5"),p=i("VUD3"),u=i("JwsL"),h=i("5Wrh"),d=i("MaBn"),g=function(){return r.a.createElement("svg",{width:"28px",height:"32px",viewBox:"0 0 28 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{x1:"-1.11022302e-14%",y1:"33.3415369%",x2:"49.1521405%",y2:"96.7454457%",id:"linearGradient-1"},r.a.createElement("stop",{stopColor:"#FF8072",stopOpacity:"0.0880321558",offset:"0%"}),r.a.createElement("stop",{stopColor:"#FF8072",stopOpacity:"0.573511096",offset:"100%"})),r.a.createElement("linearGradient",{x1:"8.24682772%",y1:"70.580707%",x2:"49.0845753%",y2:"-12.67047%",id:"linearGradient-2"},r.a.createElement("stop",{stopColor:"#FF8072",stopOpacity:"0.69921875",offset:"0%"}),r.a.createElement("stop",{stopColor:"#FF8072",stopOpacity:"0",offset:"100%"})),r.a.createElement("linearGradient",{x1:"14.111898%",y1:"50%",x2:"-42.161006%",y2:"50%",id:"linearGradient-3"},r.a.createElement("stop",{stopColor:"#FF8072",stopOpacity:"0.0643682065",offset:"0%"}),r.a.createElement("stop",{stopColor:"#FF8072",offset:"100%"}))),r.a.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"top-bar/seller-sub-bar-white",transform:"translate(-2.000000, -9.000000)"},r.a.createElement("g",{id:"icons/seller-copy-4",transform:"translate(-2.000000, 7.000000)"},r.a.createElement("polygon",{id:"Combined-Shape",fill:"url(#linearGradient-1)",points:"18.1229243 17.6946365 31.4186934 9.88079411 31.4379928 25.7686013 18.1229243 33.6318673"}),r.a.createElement("polygon",{id:"Combined-Shape",fill:"url(#linearGradient-2)",points:"18.1229243 17.6946365 18.1229243 33.6318673 4.5 25.5531691 4.5 9.88079411"}),r.a.createElement("polygon",{id:"Combined-Shape",fill:"url(#linearGradient-3)",points:"18.1229243 17.6946365 4.5 9.88079411 18.1229243 2.25 31.4186934 9.88079411"}),r.a.createElement("polygon",{id:"Combined-Shape",fillOpacity:"0.475911458",fill:"#FF8072",points:"22.7797239 14.6951357 9.67808219 6.99977396 13.5500783 4.85534759 26.9788751 12.367661 26.9788751 19.7268936 25.8787864 19.7268936 25.2108757 20.7651319 23.8933499 20.7651319 22.7797239 22.1927992 22.7797239 14.6951357"})))))},f=i("On/3"),x=i("KFyt"),w=i("pK4a"),b=i("lA9w"),_=i("UiNE"),y=i("WlAH"),I="888023042";function S(e){var a=e.data,i=Object(_.a)(a.images);return r.a.createElement(m.a,null,r.a.createElement(s.a,null),r.a.createElement(p.a,null,r.a.createElement("section",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" seller__info"},r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])},r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" seller__icon"},r.a.createElement(g,null)," ",r.a.createElement("span",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" seller__icon-title"},"For Sellers")),r.a.createElement("h1",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__title"},"Grow b2b sales with automated net terms."),r.a.createElement("p",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__desc"},r.a.createElement("span",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__mobile_hidden"},"Whether you want to grow your business, simplify your accounting or get paid upfront,")," ","Resolve makes selling wholesale as easy as direct to consumer."),r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__actions"},r.a.createElement(h.a,{large:!0,onClick:function(e){return c()("#how-it-works",{ease:"inOutQuad",duration:2e3})}},"How it Works"),r.a.createElement(d.a,null))),r.a.createElement("img",{src:i.seller.originalImg,alt:"Seller",className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__image seller__image"})),r.a.createElement("section",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" seller__why-sell"},r.a.createElement("h2",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__subtitle seller__subtitle"},"Why sell with Resolve"),r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__row"},r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__column"},r.a.createElement(x.a,null),r.a.createElement("h3",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__block_title"},"Expand your average order size"),r.a.createElement("p",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__block_desc"},"Give your buyers the credit they need to expand their budgets and pull the trigger on larger purchases.")),r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__column"},r.a.createElement(w.a,null),r.a.createElement("h3",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__block_title"},"Increase repeat purchases"),r.a.createElement("p",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__block_desc"},"Provide your buyers a dedicated line of credit to encourage them to purchase again and again with you.")),r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__column"},r.a.createElement(b.a,null),r.a.createElement("h3",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__block_title"},"Convert new & old leads into buyers"),r.a.createElement("p",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__block_desc"},"Our credit approvals help you reach out to existing or new customers who haven't yet started to buy from you.")))),r.a.createElement("section",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" seller__more-than"},r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])},r.a.createElement("h2",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__subtitle seller__subtitle"},"More than financing"),r.a.createElement("p",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__desc seller__more-than_desc"},'"When a customer of ours uses Resolve, they\'re significantly more likely to buy from us again and again down the road."'),r.a.createElement("p",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" seller__more-than_author"},"Thomas Ganey, VP of Sales at SimpleTire")),r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__image-group"},r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__image seller__image_simple-tire"},r.a.createElement("img",{src:i["simple-tire"].originalImg,alt:"SimpleTire",className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])})),r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__subimage seller__subimage_simple-tire"},r.a.createElement("img",{src:i["simple-tire-small"].originalImg,alt:"Tire",className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])})))),r.a.createElement("div",{id:"how-it-works",className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])}),r.a.createElement("section",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" seller__resolve-simplifies"},r.a.createElement("h2",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__subtitle seller__subtitle"},"Resolve simplifies",r.a.createElement("br",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])}),"b2b commerce"),r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__row seller__row"},r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__column"},r.a.createElement(x.a,null),r.a.createElement("h3",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__block_title"},"Advance your cash flow"),r.a.createElement("p",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__block_desc"},"Resolve pays you upfront for the Net 30-90 terms billed to your customers, so your receivables disappear.")),r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__column"}),r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__column"})),r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__row"},r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__column"},r.a.createElement(w.a,null),r.a.createElement("h3",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__block_title"},"Reduce your risk"),r.a.createElement("p",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__block_desc"},"We take on billing, collections, and repayment risk so you can focus on your core business.")),r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__column"},r.a.createElement(b.a,null),r.a.createElement("h3",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__block_title"},"Reach new untapped markets"),r.a.createElement("p",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__block_desc"},"Our underwriting looks beyond traditional business credit factors, so you can sell to more customers.")),r.a.createElement("div",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__column"}))),r.a.createElement("section",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" seller__faq"},r.a.createElement("h2",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])+" app__subtitle seller__subtitle"},"Frequently Asked",r.a.createElement("br",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])}),"Questions"),r.a.createElement("hr",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])}),r.a.createElement(f.a,{question:"How does Resolve work?"},"Resolve offers risk-free payment terms to your customers. After a purchase is placed, Resolve automatically deposits the funds in your bank account. We'll invoice your customer and handle billings and collections for you."),r.a.createElement("hr",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])}),r.a.createElement(f.a,{question:"How does Net Terms grow my business?"},"We allow your customers to buy now and pay later. This convenience boosts conversion, revenue, and customer loyalty. In addition, our advanced underwriting looks beyond traditional commercial credit data, allowing you to sell to more customers."),r.a.createElement("hr",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])}),r.a.createElement(f.a,{question:"Can you do ecommerce integrations?"},"Resolve integrates seamlessly into your website and checkout flow to drive conversion, AOV, and revenue. Ask us about the different platforms we support."),r.a.createElement("hr",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])}),r.a.createElement(f.a,{question:"How do my customers pay?"},"Your customers can pay their bills online by ACH transfer or by mailing us a check."),r.a.createElement("hr",{className:n.a.dynamic([["2765657541",[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]]])}))),r.a.createElement(u.a,{darkSkin:!0}),r.a.createElement(n.a,{id:"2765657541",dynamic:[y.a.monaLisa,a.reviewBanner.childImageSharp.fluid.originalImg,a.whySellBanner.childImageSharp.fluid.originalImg,y.c.tabletMax,y.c.mobileMax]},[".seller__more-than,.seller__info{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;margin-top:64px;}",".seller__info>div{-webkit-flex:1;-ms-flex:1;flex:1;margin-right:30px;}",".seller__info .app__desc,.seller__info .app__title{max-width:646px;}",".seller__icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".seller__icon-title{font-size:28px;font-weight:400;line-height:2.08;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;margin-left:15px;color:"+y.a.monaLisa+";}",".seller__why-sell{margin-top:130px;}",".seller__subtitle{margin-bottom:100px;}",".seller__more-than{margin-top:140px;background-image:url('"+a.reviewBanner.childImageSharp.fluid.originalImg+"');background-repeat:no-repeat;background-position-x:right;padding-bottom:180px;}",".seller__more-than_desc{max-width:550px;font-size:38px;line-height:1.37;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}",".seller__more-than_author{font-size:22px;line-height:1.64;-webkit-letter-spacing:0.8px;-moz-letter-spacing:0.8px;-ms-letter-spacing:0.8px;letter-spacing:0.8px;}",".seller__resolve-simplifies{background-image:url('"+a.whySellBanner.childImageSharp.fluid.originalImg+"');background-repeat:no-repeat;background-position-x:right;}",".seller__faq{margin-top:120px;margin-bottom:100px;}",".seller__row{margin-bottom:60px;}",".seller__image{max-width:480px;-webkit-clip-path:polygon(0px 140px,625px 0px,480px 550px,0px 660px);clip-path:polygon(0px 140px,625px 0px,480px 550px,0px 660px);position:relative;top:-20px;}",".seller__image_simple-tire{max-width:420px;}",".seller__subimage_simple-tire{max-width:244px;}","@media (max-width:1140px){.seller__image{max-width:400px;-webkit-clip-path:polygon(0px 140px,625px 0px,480px 420px,0px 530px);clip-path:polygon(0px 140px,625px 0px,480px 420px,0px 530px);}.seller__image_simple-tire{max-width:340px;}.seller__subimage_simple-tire{max-width:190px;}.seller__more-than_desc{max-width:450px;}}","@media (max-width:"+y.c.tabletMax+"px){.seller__info>div{-webkit-flex:initial;-ms-flex:initial;flex:initial;margin-right:0;}.seller__info{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;margin-top:-64px;}.seller__info>div{margin-top:-170px;}.seller__image{max-width:480px;-webkit-clip-path:polygon(0px 175px,745px 0px,480px 355px,0px 465px);clip-path:polygon(0px 175px,745px 0px,480px 355px,0px 465px);position:relative;top:-20px;}.seller__row{margin-bottom:80px;}.seller__resolve-simplifies{padding-top:560px;background-size:650px;}#how-it-works{position:relative;top:560px;}.seller__resolve-simplifies .app__column:last-child,.seller__resolve-simplifies .seller__row .app__column{margin-bottom:0;}.seller__more-than{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;margin-top:80px;padding-bottom:60px;}.seller__faq{margin-top:100px;}.seller__image_simple-tire{width:480px;height:420px;overflow:hidden;}.seller__more-than .app__image-group{margin-bottom:80px;}.seller__more-than_desc{max-width:initial;}}","@media (max-width:"+y.c.mobileMax+"px){.seller__image{max-width:240px;-webkit-clip-path:polygon(0px 89px,368px 0px,385px 145px,0px 230px);clip-path:polygon(0px 89px,368px 0px,385px 145px,0px 230px);top:30px;}.seller__info>div{margin-top:-40px;}.seller__icon-title{font-size:20px;line-height:2.08;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}.seller__subtitle{margin-bottom:50px;}.seller__more-than_desc.app__desc{font-size:28px;line-height:1.29;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}.seller__row{margin-bottom:60px;}.seller__resolve-simplifies{background-size:330px;padding-top:300px;}#how-it-works{top:300px;}.seller__image_simple-tire{width:220px;height:235px;}.seller__more-than .app__image-group{margin-bottom:40px;}.seller__more-than{margin-top:40px;}}"]))}},MaBn:function(e,a,i){"use strict";i.d(a,"a",(function(){return r}));var t=i("q1tI"),n=i.n(t),l=i("5Wrh");function r(e){var a=e.text,i=void 0===a?"Get a Demo":a;return n.a.createElement(l.a,{onClick:function(){return console.log("onClickGetDemo")},primary:!0,large:!0,hasArrow:!0},i)}},SKMy:function(e,a,i){var t=i("JwyU");e.exports=function(e,a){if(a=a||{},"string"==typeof e&&(e=document.querySelector(e)),e)return t(0,function(e,a,i){var t,n=document.body,l=document.documentElement,r=e.getBoundingClientRect(),o=l.clientHeight,c=Math.max(n.scrollHeight,n.offsetHeight,l.clientHeight,l.scrollHeight,l.offsetHeight);a=a||0,t="bottom"===i?r.bottom-o:"middle"===i?r.bottom-o/2-r.height/2:r.top;var m=c-o;return Math.min(t+a+window.pageYOffset,m)}(e,a.offset,a.align),a)}},UiNE:function(e,a,i){"use strict";i.d(a,"a",(function(){return t}));i("f3/d"),i("91GP");function t(e){return e.edges.reduce((function(e,a){var i;return Object.assign({},e,((i={})[a.node.name]=a.node.childImageSharp.fluid,i))}),{})}},bQgK:function(e,a,i){(function(a){i("eM6i"),function(){var i,t,n,l,r,o;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=a&&a.hrtime?(e.exports=function(){return(i()-r)/1e6},t=a.hrtime,l=(i=function(){var e;return 1e9*(e=t())[0]+e[1]})(),o=1e9*a.uptime(),r=l-o):Date.now?(e.exports=function(){return Date.now()-n},n=Date.now()):(e.exports=function(){return(new Date).getTime()-n},n=(new Date).getTime())}.call(this)}).call(this,i("8oxB"))},hBhu:function(e,a){a.linear=function(e){return e},a.inQuad=function(e){return e*e},a.outQuad=function(e){return e*(2-e)},a.inOutQuad=function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)},a.inCube=function(e){return e*e*e},a.outCube=function(e){return--e*e*e+1},a.inOutCube=function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},a.inQuart=function(e){return e*e*e*e},a.outQuart=function(e){return 1- --e*e*e*e},a.inOutQuart=function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)},a.inQuint=function(e){return e*e*e*e*e},a.outQuint=function(e){return--e*e*e*e*e+1},a.inOutQuint=function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)},a.inSine=function(e){return 1-Math.cos(e*Math.PI/2)},a.outSine=function(e){return Math.sin(e*Math.PI/2)},a.inOutSine=function(e){return.5*(1-Math.cos(Math.PI*e))},a.inExpo=function(e){return 0==e?0:Math.pow(1024,e-1)},a.outExpo=function(e){return 1==e?e:1-Math.pow(2,-10*e)},a.inOutExpo=function(e){return 0==e?0:1==e?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))},a.inCirc=function(e){return 1-Math.sqrt(1-e*e)},a.outCirc=function(e){return Math.sqrt(1- --e*e)},a.inOutCirc=function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},a.inBack=function(e){var a=1.70158;return e*e*((a+1)*e-a)},a.outBack=function(e){var a=1.70158;return--e*e*((a+1)*e+a)+1},a.inOutBack=function(e){var a=2.5949095;return(e*=2)<1?e*e*((a+1)*e-a)*.5:.5*((e-=2)*e*((a+1)*e+a)+2)},a.inBounce=function(e){return 1-a.outBounce(1-e)},a.outBounce=function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},a.inOutBounce=function(e){return e<.5?.5*a.inBounce(2*e):.5*a.outBounce(2*e-1)+.5},a.inElastic=function(e){var a,i=.1;return 0===e?0:1===e?1:(!i||i<1?(i=1,a=.1):a=.4*Math.asin(1/i)/(2*Math.PI),-i*Math.pow(2,10*(e-=1))*Math.sin((e-a)*(2*Math.PI)/.4))},a.outElastic=function(e){var a,i=.1;return 0===e?0:1===e?1:(!i||i<1?(i=1,a=.1):a=.4*Math.asin(1/i)/(2*Math.PI),i*Math.pow(2,-10*e)*Math.sin((e-a)*(2*Math.PI)/.4)+1)},a.inOutElastic=function(e){var a,i=.1,t=.4;return 0===e?0:1===e?1:(!i||i<1?(i=1,a=.1):a=t*Math.asin(1/i)/(2*Math.PI),(e*=2)<1?i*Math.pow(2,10*(e-=1))*Math.sin((e-a)*(2*Math.PI)/t)*-.5:i*Math.pow(2,-10*(e-=1))*Math.sin((e-a)*(2*Math.PI)/t)*.5+1)},a["in-quad"]=a.inQuad,a["out-quad"]=a.outQuad,a["in-out-quad"]=a.inOutQuad,a["in-cube"]=a.inCube,a["out-cube"]=a.outCube,a["in-out-cube"]=a.inOutCube,a["in-quart"]=a.inQuart,a["out-quart"]=a.outQuart,a["in-out-quart"]=a.inOutQuart,a["in-quint"]=a.inQuint,a["out-quint"]=a.outQuint,a["in-out-quint"]=a.inOutQuint,a["in-sine"]=a.inSine,a["out-sine"]=a.outSine,a["in-out-sine"]=a.inOutSine,a["in-expo"]=a.inExpo,a["out-expo"]=a.outExpo,a["in-out-expo"]=a.inOutExpo,a["in-circ"]=a.inCirc,a["out-circ"]=a.outCirc,a["in-out-circ"]=a.inOutCirc,a["in-back"]=a.inBack,a["out-back"]=a.outBack,a["in-out-back"]=a.inOutBack,a["in-bounce"]=a.inBounce,a["out-bounce"]=a.outBounce,a["in-out-bounce"]=a.inOutBounce,a["in-elastic"]=a.inElastic,a["out-elastic"]=a.outElastic,a["in-out-elastic"]=a.inOutElastic},lA9w:function(e,a,i){"use strict";var t=i("q1tI"),n=i.n(t);a.a=function(){return n.a.createElement("svg",{width:"36px",height:"22px",viewBox:"0 0 36 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.a.createElement("g",{id:"content/3-par-illo",transform:"translate(-617.000000, -608.000000)",fill:"#1F325D"},n.a.createElement("g",{id:"Grow-your-b2b-business-Copy-2",transform:"translate(135.000000, 86.000000)"},n.a.createElement("g",{id:"Group-10-Copy-2",transform:"translate(482.000000, 515.000000)"},n.a.createElement("g",{id:"icons/money"},n.a.createElement("path",{d:"M28.5,24.75 L28.5,28.5 L0,28.5 L0,15 L3.75,15 L3.75,24.75 L28.5,24.75 Z M32.25,21 L32.25,11.25 L7.5,11.25 L7.5,7.5 L36,7.5 L36,21 L32.25,21 Z",id:"Combined-Shape",fillRule:"nonzero"}),n.a.createElement("circle",{id:"Oval",fillRule:"evenodd",cx:"18",cy:"18",r:"5.25"})))))))}},pK4a:function(e,a,i){"use strict";var t=i("MX0m"),n=i.n(t),l=i("q1tI"),r=i.n(l);a.a=function(){return r.a.createElement("span",{className:"jsx-1132915814 repeat-icon"},r.a.createElement("svg",{enableBackground:"new 0 0 38 24",height:"28px",id:"Layer_1",version:"1.1",viewBox:"0 0 41 34",width:"28px",xmlns:"http://www.w3.org/2000/svg",className:"jsx-1132915814"},r.a.createElement("path",{d:"M33.949,16C33.429,7.08,26.051,0,17,0C7.611,0,0,7.611,0,17s7.611,17,17,17v-6c-6.075,0-11-4.925-11-11  S10.925,6,17,6c5.737,0,10.443,4.394,10.949,10h-6.849L31,25.899L40.899,16H33.949z",fill:"#1f325d",className:"jsx-1132915814"})),r.a.createElement(n.a,{id:"1132915814"},[".repeat-icon.jsx-1132915814{-webkit-transform:scale(-1,1);-ms-transform:scale(-1,1);transform:scale(-1,1);display:inline-block;}"]))}},xEkU:function(e,a,i){(function(a){for(var t=i("bQgK"),n="undefined"==typeof window?a:window,l=["moz","webkit"],r="AnimationFrame",o=n["request"+r],c=n["cancel"+r]||n["cancelRequest"+r],m=0;!o&&m<l.length;m++)o=n[l[m]+"Request"+r],c=n[l[m]+"Cancel"+r]||n[l[m]+"CancelRequest"+r];if(!o||!c){var s=0,p=0,u=[];o=function(e){if(0===u.length){var a=t(),i=Math.max(0,1e3/60-(a-s));s=i+a,setTimeout((function(){var e=u.slice(0);u.length=0;for(var a=0;a<e.length;a++)if(!e[a].cancelled)try{e[a].callback(s)}catch(i){setTimeout((function(){throw i}),0)}}),Math.round(i))}return u.push({handle:++p,callback:e,cancelled:!1}),p},c=function(e){for(var a=0;a<u.length;a++)u[a].handle===e&&(u[a].cancelled=!0)}}e.exports=function(e){return o.call(n,e)},e.exports.cancel=function(){c.apply(n,arguments)},e.exports.polyfill=function(e){e||(e=n),e.requestAnimationFrame=o,e.cancelAnimationFrame=c}}).call(this,i("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-sellers-js-481a1287ee2d07e7ada9.js.map