(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{180:function(e,n,t){"use strict";t.r(n);var d=t(164),o=t(166),r=t(165),w=(t(172),t(169),t(167),t(170),t(171),{mounted:function(){var canvas=document.querySelector("canvas"),e=new d.y,n=new d.s({color:16777215,flatShading:!0}),object=new d.k;e.add(object);var t=new d.c(100,100,100),w=new d.p(t,n);e.add(w);var c={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",(function(){c.width=window.innerWidth,c.height=window.innerHeight,h.aspect=c.width/c.height,h.updateProjectionMatrix(),v.setSize(c.width,c.height),v.setPixelRatio(Math.min(window.devicePixelRatio,2))})),e.add(new d.b(16777215));var l=new d.g(16777215);l.position.set(1,1,1),e.add(l);var h=new d.u(75,window.innerWidth/window.innerHeight,1,1e4);h.position.set(100,100,100),h.lookAt(1,1,1);var v=new d.G({antialias:!0,canvas:canvas});v.setSize(window.innerWidth,window.innerHeight),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.setAnimationLoop((function(time){var n=x.getElapsedTime();n,m.update(),object.rotation.x+=.005,object.rotation.y+=.01,f.update(),v.render(e,h)})),document.body.appendChild(v.domElement),v.render(e,h);var m=new r.a(h,canvas);m.enableDamping=!0,m.update();var f=Object(o.a)();document.body.appendChild(f.dom);var x=new d.e}}),c=t(28),l={components:{Base:Object(c.a)(w,(function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("canvas",{staticClass:"webgl"})])}],!1,null,"a623ad24",null).exports}},h=Object(c.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("Base")}),[],!1,null,null,null);n.default=h.exports}}]);