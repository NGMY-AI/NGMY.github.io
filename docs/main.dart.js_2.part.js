((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
dlW(d,e,f,g,h,i,j){return new A.a6v(j,g,d,i,f,h,e)},
a6v:function a6v(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.x=i
_.a=j},
ag5:function ag5(){var _=this
_.d=$
_.e=null
_.f=!0
_.w=_.r=!1
_.c=_.a=null},
cI3:function cI3(d){this.a=d},
cIc:function cIc(d){this.a=d},
cI9:function cI9(d){this.a=d},
cI8:function cI8(d){this.a=d},
cIa:function cIa(d){this.a=d},
cI7:function cI7(d){this.a=d},
cIb:function cIb(d){this.a=d},
cI6:function cI6(d){this.a=d},
cI5:function cI5(d){this.a=d},
cI4:function cI4(d){this.a=d},
dVS(){var x,w,v
try{w=B.AJ()
x=w.grS(w)
if(J.a2(x)!==0&&!J.v(x,"null")&&!J.cJ(x,"file:"))return x}catch(v){}return"https://ngmy.org"},
dlU(d,e){var x=B.a([],y.h)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("iv_load_policy=3")
if(e)x.push("mute=1")
return"https://www.youtube.com/embed/"+d+"?"+C.h.bn(x,"&")},
dy3(d){var x=B.bh(d,"&","&amp;")
return'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+B.bh(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'},
dVT(d,e,f){var x,w,v=B.awT(d)
if(v!=null){if(f){x=A.dVS()
w=e?1:0
return"<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }\n    #ngmy-yt-host { position: absolute; inset: 0; width: 100%; height: 100%; }\n  </style>\n</head>\n<body>\n  <div id=\"ngmy-yt-host\"></div>\n  <script>\n    function ngmyNotifyEnded() {\n      try {\n        if (window.NgmyVideoEnded && window.NgmyVideoEnded.postMessage) {\n          window.NgmyVideoEnded.postMessage('ngmy-vd-ended');\n        }\n      } catch (e) {}\n      try { window.parent.postMessage('ngmy-vd-ended', '*'); } catch (e) {}\n    }\n    var tag = document.createElement('script');\n    tag.src = 'https://www.youtube.com/iframe_api';\n    document.head.appendChild(tag);\n    function onYouTubeIframeAPIReady() {\n      new YT.Player('ngmy-yt-host', {\n        width: '100%',\n        height: '100%',\n        videoId: '"+v+"',\n        playerVars: {\n          autoplay: 1,\n          playsinline: 1,\n          rel: 0,\n          modestbranding: 1,\n          enablejsapi: 1,\n          origin: '"+x+"',\n          mute: "+w+"\n        },\n                events: {\n          onStateChange: function (e) {\n            if (e.data === YT.PlayerState.ENDED) ngmyNotifyEnded();\n          }\n        }\n      });\n    }\n    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;\n  </script>\n</body>\n</html>\n"}return A.dy3(A.dlU(v,e))}return A.dy3(d)}},D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[5],A)
D=c[8]
A.a6v.prototype={
U(){return new A.ag5()}}
A.ag5.prototype={
a7p(d,e){var x,w=B.awT(e),v=this.a,u=v.x&&!this.w
if(w!=null&&v.f){d.removeAttribute("srcdoc")
d.src=A.dlU(w,u)
return}if(v.f){x=e.toLowerCase()
v=C.b.t(x,"tiktok.com/player")||C.b.t(x,"instagram.com")||C.b.t(x,"facebook.com/plugins")}else v=!1
if(v){d.removeAttribute("src")
d.srcdoc=A.dVT(e,u,this.a.r)}else{d.removeAttribute("srcdoc")
d.src=e}},
bEt(){var x,w=this
if(w.w)return
w.p(new A.cI3(w))
x=w.e
if(x!=null)w.a7p(x,w.a.d)},
a0(){var x,w,v=this
v.a7()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&B.aT()
v.d=x
try{$.Gt()
$.pG().uS(x,new A.cIc(v),!0)}catch(w){v.r=!0
v.f=!1}},
b1(d){var x,w=this
w.bf(d)
if(d.d!==w.a.d&&w.e!=null){w.p(new A.cI5(w))
x=w.e
x.toString
w.a7p(x,w.a.d)}},
C(d){var x,w,v,u,t,s,r,q,p,o=this,n=null
if(o.r){x=o.a.e?6:12
w=C.e.l(0.55)
v=y.e
w=B.a([B.W(C.Zz,w,n,n,o.a.e?22:36)],v)
if(!o.a.e)C.h.A(w,B.a([C.P,B.d("Could not play this link.\nUse a public YouTube watch URL.",n,n,n,n,n,n,B.l(n,n,C.e.l(0.65),n,n,n,n,n,n,n,n,11,n,n,n,n,1.35,!0,n,n,n,n,n,n,n,n),C.U,n,n)],v))
return B.fR(B.aH(new B.J(new B.V(x,x,x,x),B.w(w,C.o,C.i,C.a_,0,C.q),n),n,n,n),C.A,!0)}u=o.a.e?14:28
x=o.d
x===$&&B.c()
w=y.e
x=B.a([B.a1Q(n,C.tt,x)],w)
if(o.f)x.push(B.fR(B.aH(new B.ab(u,u,D.aun,n),n,n,n),C.cM,!0))
if(o.a.x&&!o.w&&!o.f&&!o.r){v=C.A.l(0.35)
t=C.A.l(0.72)
s=B.m(14)
r=B.O(C.bp,C.w,1)
q=B.W(C.L3,C.e.l(0.9),n,n,22)
p=C.e.l(0.92)
x.push(B.eV(0,B.aI(!1,C.V,!0,n,B.aP(!1,n,!0,B.aH(B.t(n,B.H(B.a([q,C.an,B.d("Tap for sound",n,n,n,n,n,n,B.l(n,n,p,n,n,n,n,n,n,n,n,o.a.e?11:14,n,n,C.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],w),C.o,n,C.i,C.a_,0,n,n),C.j,n,n,new B.r(t,n,r,s,n,n,C.p),n,n,n,D.W9,n,n,n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.gbEs(),n,n,n,n,n,n,n),C.j,v,0,n,n,n,n,n,C.a9)))}w=o.a
if(!w.e&&B.awT(w.d)!=null)x.push(B.aQ(8,B.jp(D.aPz,D.d2K,new A.cI4(o),B.iP(n,n,C.A.l(0.55),n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.fd,n,n,n,n,n,n,n,n)),n,n,n,8,n,n))
return new B.aF(C.al,n,C.bc,C.y,x,n)}}
var z=a.updateTypes(["~()"])
A.cI3.prototype={
$0(){return this.a.w=!0},
$S:0}
A.cIc.prototype={
$1(d){var x=this.a,w=document.createElement("iframe"),v=w.style
v.border="none"
v=w.style
v.width="100%"
v=w.style
v.height="100%"
w.allowFullscreen=!0
w.setAttribute("referrerpolicy","strict-origin-when-cross-origin")
w.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen")
x.e=w
x.a7p(w,x.a.d)
w=x.e
w.toString
v=y.c.c
B.hh(w,"load",new A.cI9(x),!1,v)
w=x.e
w.toString
B.hh(w,"error",new A.cIa(x),!1,v)
B.bN(C.kl,new A.cIb(x),y.f)
x=x.e
x.toString
return x},
$S:589}
A.cI9.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new A.cI8(x))},
$S:45}
A.cI8.prototype={
$0(){return this.a.f=!1},
$S:0}
A.cIa.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new A.cI7(x))},
$S:45}
A.cI7.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
A.cIb.prototype={
$0(){var x=this.a
if(x.c!=null&&x.f)x.p(new A.cI6(x))},
$S:12}
A.cI6.prototype={
$0(){return this.a.f=!1},
$S:0}
A.cI5.prototype={
$0(){var x=this.a
x.f=!0
x.w=x.r=!1},
$S:0}
A.cI4.prototype={
$0(){var x,w=B.awT(this.a.a.d)
if(w==null)return
x=window
x.toString
C.kQ.SB(x,"https://www.youtube.com/watch?v="+w,"_blank")},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(A.ag5.prototype,"gbEs","bEt",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.a6v,B.ae)
x(A.ag5,B.af)
w(B.H3,[A.cI3,A.cI8,A.cI7,A.cIb,A.cI6,A.cI5,A.cI4])
w(B.tG,[A.cIc,A.cI9,A.cIa])})()
B.cW1(b.typeUniverse,JSON.parse('{"a6v":{"ae":[],"q":[]},"ag5":{"af":["a6v"]}}'))
var y={h:B.b1("a3<o>"),e:B.b1("a3<q>"),c:B.b1("xr<cL>"),f:B.b1("~")};(function constants(){D.aun=new B.ha(2,null,null,null,null,C.a6,null,null,null,null)
D.W9=new B.V(18,12,18,12)
D.aPz=new B.a8(C.rA,16,C.a6,null,null,null)
D.d2K=new B.B("Open in YouTube",null,C.iX,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["vYXTTuSDdCPd++cHeCPflVjXAUU="]=a.current})($__dart_deferred_initializers__);