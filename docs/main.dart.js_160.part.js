((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
ihR(d){var x,w,v=B.a([],y.h)
for(x=d.length,w=0;w<x;++w)v.push(d[w].v(0))
return v},
CV(d){var x=0,w=B.j(y.f),v
var $async$CV=B.e(function(e,f){if(e===1)return B.f(f,w)
for(;;)switch(x){case 0:v=y.f
x=d!==D.fsd?2:4
break
case 2:x=5
return B.b(C.kG.ha("SystemChrome.setEnabledSystemUIMode",d.a7(),v),$async$CV)
case 5:x=3
break
case 4:null.toString
x=6
return B.b(C.kG.ha("SystemChrome.setEnabledSystemUIOverlays",A.ihR(null),v),$async$CV)
case 6:case 3:return B.h(null,w)}})
return B.i($async$CV,w)},
ay6:function ay6(d,e){this.a=d
this.b=e},
hiu(d){var x,w,v,u
try{v=document
if(v.fullscreenElement==null){x=v.documentElement
if(x!=null){w=x.requestFullscreen()
if(d&&w!=null)B.eg(w,y.a).bG(new A.fQk(),y.f).eF(new A.fQl())}}else if(d)A.hB0()}catch(u){}},
hB0(){var x,w,v
try{x=window.screen.orientation
if(x==null)return
w=x.lock("landscape")
if(w!=null)B.eg(w,y.a).eF(new A.fvM())}catch(v){}},
bFG(){var x,w,v
try{x=window.screen.orientation
if(x!=null)x.unlock()}catch(w){}try{v=document
if(v.fullscreenElement!=null)v.webkitExitFullscreen()}catch(w){}},
fQk:function fQk(){},
fQl:function fQl(){},
fvM:function fvM(){}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[42],A)
D=c[140]
A.ay6.prototype={
a7(){return"SystemUiMode."+this.b}}
var z=a.updateTypes([])
A.fQk.prototype={
$1(d){return A.hB0()},
$S:44}
A.fQl.prototype={
$1(d){return null},
$S:29}
A.fvM.prototype={
$1(d){return null},
$S:29};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.ay6,B.l6)
w(B.ht,[A.fQk,A.fQl,A.fvM])})()
var y={h:B.at("O<n>"),a:B.at("aF?"),f:B.at("~")};(function constants(){var x=a.makeConstList
D.GC=new B.t(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,C.q)
D.amB=new B.R(10,6,10,0)
D.aBO=x([0.62,1],B.at("O<H>"))
D.dsq=x([C.aS,C.bP,C.bm,C.an,C.aS],B.at("O<t>"))
D.aVU=new B.h4(C.z,0,6.283185307179586,C.x,D.dsq,null,null)
D.abD=new A.ay6(2,"immersiveSticky")
D.KM=new A.ay6(3,"edgeToEdge")
D.fsd=new A.ay6(4,"manual")})()};
(a=>{a["LeQ8uspqQT7hxYBaPaAi1EygOUc="]=a.current})($__dart_deferred_initializers__);