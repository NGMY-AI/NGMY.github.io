((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
ihC(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
CU(d){var x=0,w=B.j(y.f),v
var $async$CU=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.frJ?2:4
break
case 2:x=5
return B.b(C.kG.ha("SystemChrome.setEnabledSystemUIMode",d.a7(),v),$async$CU)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kG.ha("SystemChrome.setEnabledSystemUIOverlays",A.ihC(null),v),$async$CU)
case 6:case 3:return B.h(null,w)}})
return B.i($async$CU,w)},
ay5:function ay5(d,e){this.a=d
this.b=e},
him(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.eg(w,y.a).bG(new A.fQg(),y.f).eF(new A.fQh())}}else if(d)A.hAO()}catch(u){}},
hAO(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.eg(w,y.a).eF(new A.fvI())}catch(v){}},
bFD(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fQg:function fQg(){},
fQh:function fQh(){},
fvI:function fvI(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[41],A)
D=c[139]
A.ay5.prototype={
a7(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fQg.prototype={
$1(d){return A.hAO()},
$S:44}
A.fQh.prototype={
$1(d){return null},
$S:29}
A.fvI.prototype={
$1(d){return null},
$S:29};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ay5,B.l6)
w(B.hs,[A.fQg,A.fQh,A.fvI])})()
var y={h:B.at("O<n>"),a:B.at("aF?"),f:B.at("~")};(function constants(){var x=a.makeConstList
D.GB=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.amx=new B.Q(10,6,10,0)
D.aBJ=x([0.62,1],B.at("O<H>"))
D.ds2=x([C.aS,C.bP,C.bm,C.an,C.aS],B.at("O<u>"))
D.aVL=new B.h4(C.z,0,6.283185307179586,C.x,D.ds2,null,null)
D.aby=new A.ay5(2,"immersiveSticky")
D.KL=new A.ay5(3,"edgeToEdge")
D.frJ=new A.ay5(4,"manual")})()};
(a=>{a["CVCkHZNmA+H/DkeY9BpyYLfS6bY="]=a.current})($__dart_deferred_initializers__);